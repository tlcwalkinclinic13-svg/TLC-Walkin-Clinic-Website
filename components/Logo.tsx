
import React, { useState } from 'react';

interface LogoProps {
  className?: string;
}

const LOGO_PATHS = [
  '/logo.png',
  '/logo.jpg',
  '/logo.jpeg',
  '/logo.svg',
  '/logo.webp'
];

export const Logo: React.FC<LogoProps> = ({ className = "" }) => {
  const [currentPathIndex, setCurrentPathIndex] = useState(0);
  const [hasError, setHasError] = useState(false);

  const handleError = () => {
    if (currentPathIndex < LOGO_PATHS.length - 1) {
      setCurrentPathIndex(prev => prev + 1);
    } else {
      setHasError(true);
    }
  };

  if (hasError) {
    return (
      <div className={`flex items-center justify-center bg-neutral-100 border-2 border-dashed border-neutral-300 rounded-xl text-neutral-400 font-bold tracking-widest ${className}`}>
        LOGO
      </div>
    );
  }

  return (
    <div className={`flex items-center justify-start overflow-hidden ${className}`}>
      <img 
        src={LOGO_PATHS[currentPathIndex]} 
        alt="TLC Walk-in Clinic" 
        className="h-full w-auto object-contain max-w-none"
        draggable={false}
        onError={handleError}
      />
    </div>
  );
};
