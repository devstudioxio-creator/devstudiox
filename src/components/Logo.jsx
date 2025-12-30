import React from 'react';

export const Logo = ({ className = "" }) => (
  <div className={`flex items-center gap-2 ${className}`}>
    <div className="relative w-8 h-8 flex items-center justify-center">
      <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500 to-violet-600 rounded-lg blur opacity-60"></div>
      <div className="relative w-full h-full bg-black/40 backdrop-blur-sm border border-white/20 rounded-lg flex items-center justify-center overflow-hidden">
        <span className="font-display font-bold text-xl bg-gradient-to-br from-cyan-400 to-violet-400 bg-clip-text text-transparent">D</span>
      </div>
    </div>
    <a href="#">
    <span className="font-display font-bold text-xl tracking-tight text-white">
      Devstudio<span className="text-cyan-400">X</span>
    </span>
    </a>
  </div>
);
