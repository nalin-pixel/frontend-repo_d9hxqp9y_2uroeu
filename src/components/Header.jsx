import React from 'react';

export default function Header() {
  return (
    <header className="w-full py-10 text-center">
      <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
        3D Infinite Scrolling Gallery
      </h1>
      <p className="mt-3 text-sm md:text-base text-white/70 max-w-2xl mx-auto">
        Framer-style image belts with perspective tilt, masked edges, and live controls.
      </p>
    </header>
  );
}
