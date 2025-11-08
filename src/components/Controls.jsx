import React from 'react';

export default function Controls({ speed, setSpeed, tilt, setTilt }) {
  return (
    <div className="w-full flex flex-col md:flex-row items-center justify-center gap-4 px-6">
      <div className="flex items-center gap-3">
        <label className="text-white/80 text-sm">Speed</label>
        <input
          type="range"
          min="20"
          max="160"
          step="5"
          value={speed}
          onChange={(e) => setSpeed(Number(e.target.value))}
          className="w-56 accent-white/90"
        />
        <span className="text-white/70 text-sm w-10 tabular-nums text-right">{speed}</span>
      </div>
      <div className="flex items-center gap-3">
        <label className="text-white/80 text-sm">Tilt</label>
        <input
          type="range"
          min="0"
          max="14"
          step="1"
          value={tilt}
          onChange={(e) => setTilt(Number(e.target.value))}
          className="w-56 accent-white/90"
        />
        <span className="text-white/70 text-sm w-10 tabular-nums text-right">{tilt}°</span>
      </div>
    </div>
  );
}
