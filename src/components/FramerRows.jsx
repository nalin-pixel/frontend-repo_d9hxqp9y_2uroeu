import React from 'react';
import FramerRow from './FramerRow';

const placeholders = [
  'https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1509163492153-5a9418488e51?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1516914943479-89db7d9ae7f3?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1482192505345-5655af888cc4?q=80&w=1600&auto=format&fit=crop',
];

export default function FramerRows({ speed = 60, tilt = 7 }) {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-6 md:gap-10">
      <FramerRow images={placeholders} direction="ltr" speed={speed} tilt={tilt} />
      <FramerRow images={placeholders.slice().reverse()} direction="rtl" speed={speed} tilt={tilt} />
    </div>
  );
}
