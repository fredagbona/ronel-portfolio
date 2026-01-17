import React from 'react';

export const Waveform: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 1000 100" className={className} xmlns="http://www.w3.org/2000/svg">
    <path
      d="M0 50 Q 50 10 100 50 T 200 50 T 300 50 T 400 50 T 500 50 T 600 50 T 700 50 T 800 50 T 900 50 T 1000 50"
      fill="none"
      stroke="currentColor"
      strokeWidth="0.5"
      strokeOpacity="0.2"
    />
  </svg>
);

export const NodeTree: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 400 300" className={className} xmlns="http://www.w3.org/2000/svg">
    <g fill="none" stroke="currentColor" strokeWidth="1" strokeOpacity="0.15">
      <rect x="20" y="140" width="40" height="25" rx="2" />
      <rect x="120" y="80" width="40" height="25" rx="2" />
      <rect x="120" y="200" width="40" height="25" rx="2" />
      <rect x="220" y="140" width="40" height="25" rx="2" />
      <rect x="320" y="140" width="40" height="25" rx="2" />
      <path d="M60 152.5 L120 92.5 M60 152.5 L120 212.5 M160 92.5 L220 152.5 M160 212.5 L220 152.5 M260 152.5 L320 152.5" />
    </g>
  </svg>
);

export const TimelineRuler: React.FC<{ className?: string }> = ({ className }) => (
  <div className={`w-full h-8 flex items-end border-b border-gray-200/50 ${className}`}>
    {Array.from({ length: 48 }).map((_, i) => (
      <div key={i} className="flex-1 flex flex-col items-center">
        <div className={`w-px ${i % 4 === 0 ? 'h-4 bg-gray-400' : 'h-2 bg-gray-300'}`} />
        {i % 8 === 0 && <span className="text-[7px] text-gray-400 mt-1 font-mono">00:0{Math.floor(i/8)}</span>}
      </div>
    ))}
  </div>
);

export const Playhead: React.FC<{ className?: string }> = ({ className }) => (
  <div className={`w-px h-full bg-[#007AFF] relative ${className}`}>
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-[#007AFF] rotate-45" />
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-[#007AFF] translate-y-[-2px]" />
  </div>
);