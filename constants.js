
import React from 'https://esm.sh/react@18.2.0';

export const FengtaiLogo = (props) => (
  <svg {...props} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M50 10L10 40L50 70L90 40L50 10Z" fill="#4CAF50"/>
    <path d="M10 40V60L50 90V70L10 40Z" fill="#2196F3"/>
    <path d="M90 40V60L50 90V70L90 40Z" fill="#1E88E5"/>
  </svg>
);

export const AirplaneLogo = (props) => (
  <svg {...props} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="48" stroke="white" strokeWidth="4"/>
    <path d="M68.1699 31.8301C69.7314 30.2686 72.2686 30.2686 73.8301 31.8301C75.3916 33.3916 75.3916 35.9289 73.8301 37.4904L45 66.3205L33.6795 55L68.1699 31.8301Z" fill="white"/>
    <path d="M45 66.3205L33.6795 55L26.1699 68.1699C25.1941 70.1213 27.1213 72.0485 29.0728 71.0728L45 66.3205Z" fill="white"/>
  </svg>
);

export const RobotHand = (props) => (
    <svg {...props} viewBox="0 0 200 150" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g fill="white" stroke="#a8b2d3" strokeWidth="1.5">
            {/* Index Finger */}
            <path d="M130 65 L170 55 L195 58 L190 68 L165 65 Z" />
            <path d="M100 70 L130 65 L128 75 L100 78 Z" />
            
            {/* Thumb */}
            <path d="M80 95 L95 115 L90 125 L70 120 Z" />
            <path d="M70 85 L80 95 L75 105 L65 95 Z" />

            {/* Middle Finger */}
            <path d="M95 78 L120 80 L115 90 L93 88 Z" />
            {/* Ring Finger */}
            <path d="M88 88 L110 92 L105 102 L85 98 Z" />
            {/* Pinky Finger */}
            <path d="M80 98 L100 103 L95 113 L78 108 Z" />

            {/* Palm */}
            <path d="M50 80 C 60 75, 80 70, 100 78 L80 115 C 70 120, 55 110, 50 100 Z" />
            
            {/* Wrist */}
            <path d="M10 90 L50 80 L50 100 L10 110 Z" />
            <path d="M0 100 L10 90 L10 110 L0 120 Z" />
        </g>
        <circle cx="100" cy="74" r="4" fill="#4fdbff" />
    </svg>
);

export const AiChipIcon = (props) => (
    <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="4" y="4" width="16" height="16" rx="2" fill="#2c75d1" stroke="#4fdbff" strokeWidth="1.5"/>
        <rect x="8" y="8" width="8" height="8" fill="#19134b"/>
        <path d="M8 3V4" stroke="#4fdbff" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M12 3V4" stroke="#4fdbff" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M16 3V4" stroke="#4fdbff" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M8 21V20" stroke="#4fdbff" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M12 21V20" stroke="#4fdbff" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M16 21V20" stroke="#4fdbff" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M21 8H20" stroke="#4fdbff" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M21 12H20" stroke="#4fdbff" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M21 16H20" stroke="#4fdbff" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M3 8H4" stroke="#4fdbff" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M3 12H4" stroke="#4fdbff" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M3 16H4" stroke="#4fdbff" strokeWidth="1.5" strokeLinecap="round"/>
        <text x="12" y="13.5" fill="#fde047" fontSize="6" textAnchor="middle" fontWeight="bold">AI</text>
    </svg>
);

export const AiMagnifyIcon = (props) => (
    <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="10" cy="10" r="7" stroke="#fde047" strokeWidth="2.5"/>
        <line x1="15.5" y1="15.5" x2="21" y2="21" stroke="#fde047" strokeWidth="2.5" strokeLinecap="round"/>
        <text x="10" y="12" fill="#fde047" fontSize="6" textAnchor="middle" fontWeight="bold">AI</text>
    </svg>
);

export const AiScreenIcon = (props) => (
    <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="4" width="20" height="14" rx="2" stroke="#4fdbff" strokeWidth="1.5"/>
        <path d="M8 20L16 20" stroke="#4fdbff" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M12 18V20" stroke="#4fdbff" strokeWidth="1.5" strokeLinecap="round"/>
        <text x="12" y="12.5" fill="#fde047" fontSize="6" textAnchor="middle" fontWeight="bold">AI</text>
    </svg>
);
