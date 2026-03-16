
import React from 'react';

interface LogoProps {
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ className = "" }) => {
  return (
    <div className={`flex items-center justify-center bg-neutral-100 border-2 border-dashed border-neutral-300 rounded-xl text-neutral-400 font-bold tracking-widest ${className}`}>
      LOGO
    </div>
  );
};
