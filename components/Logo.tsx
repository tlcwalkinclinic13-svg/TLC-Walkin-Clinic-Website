
import React from 'react';

interface LogoProps {
  className?: string;
}

/**
 * Logo Component
 * 
 * To update the logo:
 * 1. Ensure your image is named 'logo.png'.
 * 2. Place it in the 'public' folder of this project.
 * 3. The component will automatically pick it up and scale it based on the container.
 */
export const Logo: React.FC<LogoProps> = ({ className = "" }) => {
  return (
    <div className={`flex items-center justify-start overflow-hidden ${className}`}>
      <img 
        src="logo.png" 
        alt="TLC Walk-in Clinic" 
        className="h-full w-auto object-contain max-w-none"
        // Prevents the image from being ghost-dragged by users
        draggable={false}
        // Graceful fallback: hide the image if it hasn't been uploaded yet
        onError={(e) => {
          (e.target as HTMLImageElement).style.opacity = '0';
        }}
        onLoad={(e) => {
          (e.target as HTMLImageElement).style.opacity = '1';
        }}
        style={{ opacity: 0, transition: 'opacity 0.3s ease-in-out' }}
      />
    </div>
  );
};
