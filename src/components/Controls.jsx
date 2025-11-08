import React from 'react';

export default function Controls({ speed, setSpeed, tilt, setTilt }) {
  return (
    <div className="w-full max-w-3xl mx-auto mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="p-4 rounded-xl bg-white/5 ring-1 ring-white/10">
        <label className="flex items-center justify-between text-white/80 text-sm font-medium">
          <span>Scroll speed</span>
          <span className="tabular-nums">{speed.toFixed(0)} px/s</span>
        </label>
        <input
          type="range"
          min={20}
          max={300}
          step={5}
          value={speed}
          onChange={(e) => setSpeed(Number(e.target.value))}
          className="mt-2 w-full accent-white"
        />
      </div>
      <div className="p-4 rounded-xl bg-white/5 ring-1 ring-white/10">
        <label className="flex items-center justify-between text-white/80 text-sm font-medium">
          <span>Tilt</span>
          <span className="tabular-nums">{tilt.toFixed(0)}°</span>
        </label>
        <input
          type="range"
          min={-20}
          max={20}
          step={1}
          value={tilt}
          onChange={(e) => setTilt(Number(e.target.value))}
          className="mt-2 w-full accent-white"
        />
      </div>
    </div>
  );
}
