import React, { useState } from 'react';
import { Menu, X, Navigation, HeartPulse, Globe } from 'lucide-react';
import { Link, NavLink } from 'react-router-dom';
import { Button } from './Button';
import { useLanguage } from '../context/LanguageContext';

export const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t, language, setLanguage } = useLanguage();

  const navLinks = [
    { label: t('nav.home'), to: '/' },
    { label: t('nav.about'), to: '/about' },
    { label: t('nav.services'), to: '/services' },
    { label: t('nav.telemedicine'), to: '/telemedicine' },
    { label: t('nav.insurance'), to: '/insurance' },
    { label: t('nav.pricing'), to: '/pricing' },
  ];

  const mapsUrl = "https://www.google.com/maps/dir//7900+NW+23rd+St+%231,+Bethany,+OK+73008";

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'es' : 'en');
  };

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-neutral-100">
      <div className="max-w-[90rem] mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-start gap-3 group no-underline shrink-0">
            <div className="flex flex-col items-start">
              <div className="flex items-center leading-none">
                <span className="text-4xl font-serif font-extrabold text-black tracking-tight">TLC</span>
                <HeartPulse className="h-8 w-8 text-primary ml-1 -mt-1" />
              </div>
              <div className="w-full h-[2px] bg-primary my-0.5"></div>
              <span className="text-[0.65rem] font-heading font-bold text-dark uppercase tracking-[0.15em] leading-none w-full text-justify">
                {t('nav.subtitle')}
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden xl:flex items-center gap-6">
            {navLinks.map((link) => (
              <NavLink 
                key={link.to} // Use 'to' as key because label changes with translation
                to={link.to}
                end={link.to === '/'} 
                className={({ isActive }) => 
                  `text-sm font-semibold transition-colors font-heading ${
                    isActive ? "text-primary" : "text-neutral-700 hover:text-primary"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            
            {/* Language Toggle */}
            <button 
              onClick={toggleLanguage}
              className="flex items-center gap-1 text-sm font-semibold text-neutral-700 hover:text-primary transition-colors px-2 py-1 rounded-md hover:bg-neutral-50"
            >
              <Globe className="h-4 w-4" />
              <span>{language === 'en' ? 'ES' : 'EN'}</span>
            </button>

            <Button variant="primary" href={mapsUrl} target="_blank" rel="noopener noreferrer">
              {t('nav.directions')} <Navigation className="h-4 w-4" />
            </Button>
          </nav>

          {/* Mobile Toggle */}
          <div className="xl:hidden flex items-center gap-4">
             <button 
                onClick={toggleLanguage}
                className="flex items-center gap-1 text-sm font-bold text-neutral-700 border border-neutral-200 px-2 py-1 rounded-md"
              >
                <Globe className="h-4 w-4" />
                <span>{language === 'en' ? 'ES' : 'EN'}</span>
              </button>
            <button 
              className="text-dark hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="xl:hidden bg-white border-b border-neutral-100 animate-in fade-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col p-6 space-y-4">
            {navLinks.map((link) => (
              <NavLink 
                key={link.to} 
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) => 
                  `text-lg font-semibold py-2 border-b border-neutral-50 ${
                    isActive ? "text-primary" : "text-dark"
                  }`
                }
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </NavLink>
            ))}
            <div className="pt-2">
              <Button variant="primary" className="w-full" href={mapsUrl} target="_blank" rel="noopener noreferrer">
                {t('nav.directions')}
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};