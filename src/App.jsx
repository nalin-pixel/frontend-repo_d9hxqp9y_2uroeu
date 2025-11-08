import React, { useState } from 'react';
import Header from './components/Header';
import FramerRows from './components/FramerRows';
import Controls from './components/Controls';
import Credits from './components/Credits';

export default function App() {
  const [speed, setSpeed] = useState(60);
  const [tilt, setTilt] = useState(7);

  return (
    <div className="min-h-screen w-full bg-[#0a0a0b] text-white flex flex-col items-center">
      <Header />

      <Controls speed={speed} setSpeed={setSpeed} tilt={tilt} setTilt={setTilt} />

      {/* Rows */}
      <div className="w-full max-w-[1400px] px-2 sm:px-4 md:px-8">
        {/* Pass controls down by cloning with props */}
        <FramerRowsWrapper speed={speed} tilt={tilt} />
      </div>

      <Credits />
    </div>
  );
}

function FramerRowsWrapper({ speed, tilt }) {
  // Reimport locally to pass dynamic props without prop drilling through the component file
  const FramerRows = require('./components/FramerRows').default;
  return <FramerRows speed={speed} tilt={tilt} />;
}
