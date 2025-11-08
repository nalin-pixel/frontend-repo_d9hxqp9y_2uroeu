import React, { useState } from 'react';
import Header from './components/Header';
import Controls from './components/Controls';
import FramerRows from './components/FramerRows';
import Credits from './components/Credits';

export default function App() {
  const [speed, setSpeed] = useState(120);
  const [tilt, setTilt] = useState(8);

  return (
    <div className="min-h-screen w-full bg-neutral-950 text-white flex flex-col">
      <div className="relative flex-1 flex flex-col items-center px-4 md:px-8">
        <Header />
        <Controls speed={speed} setSpeed={setSpeed} tilt={tilt} setTilt={setTilt} />
        <div className="mt-8 w-full">
          <FramerRows speed={speed} tilt={tilt} />
        </div>
        <Credits />
      </div>
    </div>
  );
}
