import React, { useEffect, useMemo, useRef } from 'react';

/**
 * FramerRow
 * - Infinite, smooth horizontally scrolling image row
 * - 3D perspective tilt with mirrored direction support
 * - Uses CSS mask fade on both ends
 */
export default function FramerRow({ images = [], direction = 'ltr', speed = 60, tilt = 7 }) {
  const containerRef = useRef(null);
  const listRef = useRef(null);

  // Duplicate the images to enable seamless infinite loop
  const slides = useMemo(() => [...images, ...images], [images]);

  useEffect(() => {
    const list = listRef.current;
    if (!list) return;

    // Compute total width of a single cycle to set animation duration
    const cycleWidth = list.scrollWidth / 2; // because we doubled
    const pxPerSecond = speed; // logical speed control
    const duration = Math.max(8, cycleWidth / pxPerSecond);

    list.style.setProperty('--duration', `${duration}s`);
    list.style.setProperty('--dir', direction === 'rtl' ? '-1' : '1');
  }, [direction, speed, slides.length]);

  const rowTilt = direction === 'rtl' ? -Math.abs(tilt) : Math.abs(tilt);

  return (
    <section
      ref={containerRef}
      className="relative w-full overflow-hidden py-6 md:py-8"
      aria-label="Framer style image row"
      style={{
        WebkitMaskImage:
          'linear-gradient(to right, rgba(0,0,0,0) 0%, black 12.5%, black 87.5%, rgba(0,0,0,0) 100%)',
        maskImage:
          'linear-gradient(to right, rgba(0,0,0,0) 0%, black 12.5%, black 87.5%, rgba(0,0,0,0) 100%)',
      }}
    >
      <ul
        ref={listRef}
        className="flex items-center gap-[10px] will-change-transform"
        style={{
          animation: 'scroll var(--duration) linear infinite',
          transform: 'translate3d(0,0,0)',
          animationDirection: direction === 'rtl' ? 'reverse' : 'normal',
        }}
      >
        {slides.map((src, idx) => (
          <li
            key={`${idx}-${src}`}
            className="relative shrink-0 rounded-xl md:rounded-2xl"
            style={{ width: '22.5vw', maxWidth: 320, aspectRatio: '3/5' }}
            aria-hidden={idx >= images.length}
          >
            <div
              className="absolute inset-0 rounded-inherit"
              style={{
                position: 'absolute',
                inset: 0,
                borderRadius: 'inherit',
                transform: `perspective(500px) rotateY(${rowTilt}deg)`,
                transformStyle: 'preserve-3d',
              }}
            >
              <img
                src={src}
                alt=""
                loading="lazy"
                className="block w-full h-full"
                style={{
                  objectFit: 'cover',
                  objectPosition: 'center',
                  width: '100%',
                  height: '100%',
                  borderRadius: 'inherit',
                  display: 'block',
                }}
              />
            </div>
          </li>
        ))}
      </ul>

      <style>{`
        @keyframes scroll {
          from { transform: translateX(0); }
          to { transform: translateX(calc(var(--dir, 1) * -50%)); }
        }
      `}</style>
    </section>
  );
}
