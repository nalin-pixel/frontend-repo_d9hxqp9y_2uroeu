import React, { useMemo } from 'react';

/*
  FramerRow renders a single infinite-scrolling row of images.
  - direction: 1 for left-to-right, -1 for right-to-left
  - speed: pixels per second (affects animation duration)
  - tilt: degrees for rotateY perspective
  - images: array of image URLs
*/
export default function FramerRow({ direction = -1, speed = 80, tilt = 8, images = [] }) {
  const track = useMemo(() => {
    // Duplicate the images to create a seamless loop
    const base = images.length ? images : [
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=1600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?q=80&w=1600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?q=80&w=1600&auto=format&fit=crop',
    ];
    const withIds = base.map((src, idx) => ({ id: `a-${idx}`, src }));
    const dup = base.map((src, idx) => ({ id: `b-${idx}`, src }));
    return [...withIds, ...dup];
  }, [images]);

  const duration = 40_000 / Math.max(speed, 10); // slower when speed small
  const sign = direction >= 0 ? 1 : -1;

  return (
    <div
      className="relative w-full overflow-hidden py-3"
      style={{
        WebkitMaskImage:
          'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
        maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)'
      }}
    >
      <style>{`
        @keyframes scroll-x { from { transform: translateX(0); } to { transform: translateX(-50%); } }
      `}</style>
      <div
        className="flex gap-4 will-change-transform"
        style={{
          width: '200%',
          animation: `scroll-x ${duration}s linear infinite`,
          animationDirection: sign === 1 ? 'reverse' : 'normal',
        }}
      >
        {track.map((img, i) => (
          <div
            key={img.id}
            aria-hidden={i >= track.length / 2}
            className="relative h-36 md:h-44 lg:h-52 aspect-[4/3] shrink-0 rounded-xl overflow-hidden bg-neutral-800/40 ring-1 ring-white/10"
            style={{
              perspective: '700px',
            }}
          >
            <div
              className="absolute inset-0"
              style={{
                transformStyle: 'preserve-3d',
                transform: `translateZ(0) rotateY(${sign * tilt}deg)`,
                transition: 'transform 200ms ease-out',
              }}
            >
              <img
                src={img.src}
                alt="Gallery item"
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
                draggable={false}
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-black/10 to-transparent pointer-events-none" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
