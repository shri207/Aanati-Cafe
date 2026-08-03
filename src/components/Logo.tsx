import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark' | 'full';
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const Logo: React.FC<LogoProps> = ({ 
  className = '', 
  variant = 'full', 
  size = 'md' 
}) => {
  const sizeClasses = {
    sm: 'h-10 w-auto',
    md: 'h-14 w-auto',
    lg: 'h-20 w-auto',
    xl: 'h-28 w-auto'
  };

  return (
    <div className={`inline-flex items-center gap-2 group ${className}`}>
      <svg
        viewBox="0 0 340 280"
        className={`${sizeClasses[size]} transition-transform duration-300 group-hover:scale-105 filter drop-shadow-md`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#E6C887" />
            <stop offset="50%" stopColor="#C9A15D" />
            <stop offset="100%" stopColor="#8C6527" />
          </linearGradient>
          
          <linearGradient id="glowLantern" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFF2A8" />
            <stop offset="70%" stopColor="#FFC843" />
            <stop offset="100%" stopColor="#D97706" />
          </linearGradient>

          <pattern id="parchmentBg" width="100" height="100" patternUnits="userSpaceOnUse">
            <rect width="100" height="100" fill="#F8F2EA" />
          </pattern>

          <filter id="shadowEmblem" x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#1D120B" floodOpacity="0.3" />
          </filter>
        </defs>

        <g filter="url(#shadowEmblem)">
          {/* Background Oval Plate */}
          <ellipse cx="170" cy="145" rx="145" ry="95" fill="#FBF6EE" stroke="url(#goldGradient)" strokeWidth="3" />
          <ellipse cx="170" cy="145" rx="140" ry="90" fill="none" stroke="#3A2418" strokeWidth="1.5" strokeDasharray="4 2" />

          {/* Top Village Cottage and Trees */}
          <g transform="translate(110, 22)">
            {/* Left Tree */}
            <circle cx="20" cy="22" r="14" fill="#586745" opacity="0.9" />
            <circle cx="15" cy="18" r="10" fill="#73815D" />
            <rect x="18" y="28" width="4" height="12" fill="#3A2418" rx="1" />

            {/* Right Tree */}
            <circle cx="100" cy="22" r="14" fill="#586745" opacity="0.9" />
            <circle cx="105" cy="18" r="10" fill="#73815D" />
            <rect x="98" y="28" width="4" height="12" fill="#3A2418" rx="1" />

            {/* Hut */}
            {/* Roof */}
            <polygon points="60,6 32,24 88,24" fill="#8C5230" stroke="#3A2418" strokeWidth="1.5" />
            <polygon points="60,9 36,24 84,24" fill="#A8663D" />
            {/* Wall */}
            <rect x="38" y="24" width="44" height="18" fill="#EAE2D5" stroke="#3A2418" strokeWidth="1.5" />
            {/* Door */}
            <rect x="53" y="29" width="14" height="13" fill="#3A2418" rx="1" />
            
            {/* Flying Bird in Sky */}
            <path d="M 82 8 Q 85 4 88 8 Q 91 4 94 8" fill="none" stroke="#3A2418" strokeWidth="1.2" strokeLinecap="round" />
          </g>

          {/* Ornate Side Hanging Lanterns */}
          {/* Left Lantern */}
          <g transform="translate(12, 110)">
            <path d="M 18 0 Q 8 20 5 35" fill="none" stroke="#3A2418" strokeWidth="2" />
            <rect x="0" y="32" width="14" height="24" rx="3" fill="#3A2418" />
            <rect x="2" y="36" width="10" height="16" rx="2" fill="url(#glowLantern)" />
            <polygon points="7,27 0,32 14,32" fill="url(#goldGradient)" />
            <polygon points="7,61 1,56 13,56" fill="url(#goldGradient)" />
          </g>

          {/* Right Lantern */}
          <g transform="translate(312, 110)">
            <path d="M -4 0 Q 6 20 9 35" fill="none" stroke="#3A2418" strokeWidth="2" />
            <rect x="0" y="32" width="14" height="24" rx="3" fill="#3A2418" />
            <rect x="2" y="36" width="10" height="16" rx="2" fill="url(#glowLantern)" />
            <polygon points="7,27 0,32 14,32" fill="url(#goldGradient)" />
            <polygon points="7,61 1,56 13,56" fill="url(#goldGradient)" />
          </g>

          {/* Inner Coffee Dark Banner Box */}
          <path
            d="M 50 100 C 110 90, 230 90, 290 100 C 295 135, 295 155, 290 170 C 230 180, 110 180, 50 170 C 45 155, 45 135, 50 100 Z"
            fill="#3A2418"
            stroke="url(#goldGradient)"
            strokeWidth="2.5"
          />

          {/* Telugu Ornate 'ఆ' & AANATI Typography inside Banner */}
          <g transform="translate(62, 105)">
            {/* Ornate Telugu Script Motif 'ఆ' */}
            <path
              d="M 22 24 C 12 10, 32 0, 42 16 C 52 32, 22 45, 12 30 C 5 20, 14 8, 26 12 C 34 14, 38 22, 44 26"
              fill="none"
              stroke="#F8F2EA"
              strokeWidth="4"
              strokeLinecap="round"
            />

            {/* AANATI Main Text */}
            <text
              x="55"
              y="45"
              fontFamily="Playfair Display, Georgia, serif"
              fontSize="40"
              fontWeight="900"
              fill="#F8F2EA"
              letterSpacing="3"
            >
              AANATI
            </text>

            {/* Gold Highlight stroke on text */}
            <text
              x="55"
              y="45"
              fontFamily="Playfair Display, Georgia, serif"
              fontSize="40"
              fontWeight="900"
              fill="none"
              stroke="url(#goldGradient)"
              strokeWidth="0.8"
              letterSpacing="3"
            >
              AANATI
            </text>
          </g>

          {/* Sub Banner Parchment Oval Plate for 'CAFE' */}
          <g transform="translate(90, 168)">
            <rect x="0" y="0" width="160" height="34" rx="17" fill="#F8F2EA" stroke="#3A2418" strokeWidth="2" />
            <rect x="3" y="3" width="154" height="28" rx="14" fill="none" stroke="url(#goldGradient)" strokeWidth="1" />
            
            {/* Left Flourish */}
            <path d="M 16 17 L 35 17 M 30 13 L 35 17 L 30 21" stroke="#3A2418" strokeWidth="1.5" strokeLinecap="round" />
            
            {/* CAFE Text */}
            <text
              x="80"
              y="23"
              textAnchor="middle"
              fontFamily="Playfair Display, serif"
              fontSize="20"
              fontWeight="800"
              fill="#3A2418"
              letterSpacing="6"
            >
              CAFE
            </text>

            {/* Right Flourish */}
            <path d="M 144 17 L 125 17 M 130 13 L 125 17 L 130 21" stroke="#3A2418" strokeWidth="1.5" strokeLinecap="round" />
          </g>

          {/* Est. 2026 Bottom Text */}
          <g transform="translate(125, 218)">
            <path d="M 5 6 Q 25 1 45 6" fill="none" stroke="url(#goldGradient)" strokeWidth="1.5" />
            <text
              x="45"
              y="16"
              textAnchor="middle"
              fontFamily="Cormorant Garamond, serif"
              fontSize="16"
              fontWeight="700"
              fontStyle="italic"
              fill="#3A2418"
              letterSpacing="1.5"
            >
              Est. 2026
            </text>
            <path d="M 45 6 Q 65 1 85 6" fill="none" stroke="url(#goldGradient)" strokeWidth="1.5" />
          </g>

          {/* Bottom Outer Scroll Floral Embellishment */}
          <path
            d="M 120 238 C 140 252, 170 255, 170 255 C 170 255, 200 252, 220 238"
            fill="none"
            stroke="url(#goldGradient)"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </g>
      </svg>
      {variant === 'full' && (
        <div className="flex flex-col">
          <span className="font-serif font-bold text-lg md:text-xl tracking-wider text-[#3A2418] leading-tight">
            AANATI CAFE
          </span>
          <span className="text-[10px] md:text-xs tracking-widest uppercase font-accent text-[#C9A15D] font-semibold">
            Hyderabad • Est. 2026
          </span>
        </div>
      )}
    </div>
  );
};
