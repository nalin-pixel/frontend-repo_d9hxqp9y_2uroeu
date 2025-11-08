import React from 'react';
import FramerRow from './FramerRow';

const PLACEHOLDERS = [
  'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?q=80&w=1600&auto=format&fit=crop',
];

export default function FramerRows({ speed, tilt }) {
  return (
    <section className="w-full max-w-6xl mx-auto">
      <FramerRow direction={-1} speed={speed} tilt={tilt} images={PLACEHOLDERS} />
      <FramerRow direction={1} speed={speed} tilt={tilt} images={[...PLACEHOLDERS].reverse()} />
    </section>
  );
}
