import React from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'dark' | 'white' | 'outline';
  children: React.ReactNode;
  className?: string;
  href?: string;
  to?: string;
  target?: string;
  rel?: string;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  children, 
  className = '', 
  href,
  to,
  target,
  rel,
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full font-heading font-semibold text-sm transition-all duration-300 active:scale-95 shadow-sm hover:-translate-y-0.5";
  
  const variants = {
    primary: "bg-primary text-white hover:bg-dark hover:shadow-md",
    dark: "bg-dark text-white hover:bg-primary hover:shadow-md",
    white: "bg-white text-dark hover:bg-neutral-100 border border-transparent",
    outline: "bg-transparent border border-white text-white hover:bg-white/10",
  };

  const combinedClassName = `${baseStyles} ${variants[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={combinedClassName} target={target} rel={rel}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={combinedClassName} target={target} rel={rel}>
        {children}
      </a>
    );
  }

  return (
    <button className={combinedClassName} {...props}>
      {children}
    </button>
  );
};