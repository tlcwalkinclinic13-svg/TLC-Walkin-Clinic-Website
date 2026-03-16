
import React from 'react';

interface LogoProps {
  className?: string;
  light?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ className = "" }) => {
  return (
    <div className={`flex flex-col items-start ${className} select-none`}>
      {/* Top Row: TLC + Heart EKG */}
      <div className="flex items-end gap-2 leading-none mb-[-2px]">
        <span className="text-5xl font-serif font-extrabold text-black tracking-tighter">
          TLC
        </span>
        <div className="relative h-12 w-16 mb-1">
          <svg
            viewBox="0 0 100 100"
            className="h-full w-full fill-primary stroke-primary"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Heart Shape */}
            <path
              d="M50 85c-2-2-45-28-45-55 0-15 11-25 25-25 8 0 16 5 20 12 4-7 12-12 20-12 14 0 25 10 25 25 0 27-43 53-45 55z"
              fill="currentColor"
            />
            {/* EKG Line inside heart (White for punch-through effect) */}
            <path
              d="M15 45 L35 45 L42 25 L50 65 L58 35 L65 45 L85 45"
              fill="none"
              stroke="white"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      {/* The Red Separator Line */}
      <div className="w-full flex items-center">
        <div className="h-[3px] bg-primary w-full rounded-full"></div>
        {/* Little pulse peak extending from the line to match the image style */}
        <svg viewBox="0 0 40 20" className="h-4 w-10 text-primary -ml-8 fill-none stroke-current stroke-[3]">
             <path d="M0 10 L10 10 L15 0 L25 20 L30 10 L40 10" />
        </svg>
      </div>

      {/* Bottom Row: Walk-In Clinic Subtitle */}
      <div className="w-full pl-10 -mt-0.5">
        <span className="text-[0.7rem] font-heading font-black text-black uppercase tracking-[0.1em] whitespace-nowrap">
          Walk-In Clinic
        </span>
      </div>
    </div>
  );
};
