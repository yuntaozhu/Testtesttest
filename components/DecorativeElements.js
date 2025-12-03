
import React from 'https://esm.sh/react@18.2.0';
import { RobotHand, AiChipIcon, AiMagnifyIcon, AiScreenIcon } from '../constants.js';

const DecorativeElements = () => {
  return (
    <div className="absolute inset-0 z-0 w-full h-full pointer-events-none">
      {/* Background Pattern */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: 'repeating-linear-gradient(-45deg, rgba(255,255,255,0.02), rgba(255,255,255,0.02) 1px, transparent 1px, transparent 30px)'
        }}
      ></div>

      {/* Top-left elements */}
      <div className="absolute top-[10%] left-[5%] w-6 h-6 rounded-full border-2 border-white opacity-50"></div>
      <div className="absolute top-[15%] left-[18%] w-4 h-4 rounded-full bg-cyan-400 opacity-30"></div>
      <div className="absolute top-[8%] left-[25%] w-3 h-3 rounded-full bg-pink-500 opacity-40"></div>

      {/* Robot Hand and connections */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-1/3 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg opacity-90">
        <RobotHand />
      </div>
      <div className="absolute top-1/2 left-[22%] -translate-y-1/2 w-16 h-16 sm:w-20 sm:h-20 rounded-full border-2 border-cyan-400/50 flex items-center justify-center">
        <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full border-2 border-cyan-400/30 animate-pulse"></div>
      </div>
      <div className="absolute top-[48%] left-[30%] w-16 h-px bg-cyan-400/50"></div>
      <div className="absolute top-[52%] left-[30%] w-10 h-px bg-cyan-400/50"></div>

      {/* Bottom Waves */}
      <div className="absolute bottom-0 left-0 w-full h-1/3">
        <svg width="100%" height="100%" viewBox="0 0 1440 300" preserveAspectRatio="none" className="absolute bottom-0">
          <path d="M0,150 C200,50 400,250 720,150 C1040,50 1240,250 1440,150 L1440,300 L0,300 Z" fill="url(#wave-gradient-1)" opacity="0.6"/>
          <path d="M0,180 C300,100 500,280 720,180 C940,80 1140,280 1440,180 L1440,300 L0,300 Z" fill="url(#wave-gradient-2)" opacity="0.8"/>
          <defs>
            <linearGradient id="wave-gradient-1" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" style={{stopColor: '#2c75d1', stopOpacity: 0.8}} />
              <stop offset="100%" style={{stopColor: '#4fdbff', stopOpacity: 0.3}} />
            </linearGradient>
            <linearGradient id="wave-gradient-2" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" style={{stopColor: '#4fdbff', stopOpacity: 1}} />
              <stop offset="100%" style={{stopColor: '#2c75d1', stopOpacity: 0.5}} />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Spheres */}
      <div className="absolute bottom-[-5%] left-[2%] w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-gradient-to-br from-[#e88cff] to-[#c165dd] opacity-80"></div>
      <div className="absolute bottom-[-2%] right-[-3%] w-28 h-28 sm:w-40 sm:h-40 rounded-full bg-gradient-to-br from-[#e88cff] to-[#c165dd] opacity-70"></div>
      <div className="absolute bottom-[10%] left-[45%] w-10 h-10 rounded-full bg-gradient-to-br from-[#e88cff] to-[#c165dd] opacity-60"></div>

      {/* Scattered Abstract Elements */}
      <AiMagnifyIcon className="absolute top-[45%] right-[20%] w-16 h-16 opacity-80" />
      <AiChipIcon className="absolute top-[60%] left-[35%] w-10 h-10 opacity-70" />
      <AiScreenIcon className="absolute bottom-[20%] left-[40%] w-12 h-12 opacity-70" />
      <div className="absolute top-[65%] right-[15%] flex gap-1 items-end">
        <div className="w-2 h-4 bg-pink-500 rounded-sm"></div>
        <div className="w-2 h-8 bg-cyan-400 rounded-sm"></div>
        <div className="w-2 h-6 bg-blue-500 rounded-sm"></div>
      </div>
      <div className="absolute bottom-[15%] right-[30%] w-3 h-3 bg-white transform rotate-45 opacity-60"></div>
      <div className="absolute top-[75%] left-[10%] text-pink-400 text-2xl font-mono opacity-70">x</div>
      <div className="absolute bottom-[30%] right-[40%] text-pink-400 text-2xl font-mono opacity-70">x</div>
      <div className="absolute top-[30%] right-[8%] w-10 h-px bg-white/70"></div>
    </div>
  );
};

export default DecorativeElements;
