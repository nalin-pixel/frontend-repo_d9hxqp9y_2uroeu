import React from 'react';

export default function Header() {
  return (
    <header className="w-full flex items-center justify-center py-12 md:py-16">
      <div className="text-center max-w-3xl px-6">
        <h1 className="text-3xl md:text-5xl font-semibold tracking-tight text-white">
          Framer‑style 3D Scrolling Image Belts
        </h1>
        <p className="mt-4 text-base md:text-lg text-white/70">
          Smooth, infinite horizontal rows with perspective tilt, masked edges, and perfect responsiveness.
        </p>
      </div>
    </header>
  );
}
