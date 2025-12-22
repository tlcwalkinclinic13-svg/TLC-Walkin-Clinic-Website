
import React, { useState } from 'react';
import { Menu, X, Navigation, Globe } from 'lucide-react';
import { Link, NavLink } from 'react-router-dom';
import { Button } from './Button';
import { useLanguage } from '../context/LanguageContext';
import { Logo } from './Logo';

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
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-neutral-100 shadow-sm">
      <div className="max-w-[95rem] mx-auto px-6 md:px-10">
        {/* Adjusted header height to 1.25x of the proportional version (h-32/44/52) */}
        <div className="flex justify-between items-center h-28 md:h-44 lg:h-52 transition-all duration-300">
          
          {/* Logo Container - Sized to roughly 1.25x of the previous refined layout */}
          <Link to="/" className="group no-underline shrink-0 block h-full flex items-center py-4">
            <Logo className="h-20 md:h-36 lg:h-44 min-w-[180px] md:min-w-[300px]" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden xl:flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink 
                key={link.to}
                to={link.to}
                end={link.to === '/'} 
                className={({ isActive }) => 
                  `text-sm lg:text-base font-bold transition-colors font-heading tracking-tight ${
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
              className="flex items-center gap-1.5 text-sm font-bold text-neutral-700 hover:text-primary transition-colors px-3 py-2 rounded-xl bg-neutral-50 hover:bg-neutral-100 border border-neutral-200"
            >
              <Globe className="h-4 w-4" />
              <span>{language === 'en' ? 'ESP' : 'ENG'}</span>
            </button>

            <Button variant="primary" href={mapsUrl} target="_blank" rel="noopener noreferrer" className="px-8 py-4 text-base">
              {t('nav.directions')} <Navigation className="h-5 w-5 ml-1" />
            </Button>
          </nav>

          {/* Mobile Toggle */}
          <div className="xl:hidden flex items-center gap-4">
             <button 
                onClick={toggleLanguage}
                className="flex items-center gap-1 text-sm font-bold text-neutral-700 border border-neutral-200 px-3 py-1.5 rounded-xl bg-neutral-50"
              >
                <Globe className="h-4 w-4" />
                <span>{language === 'en' ? 'ES' : 'EN'}</span>
              </button>
            <button 
              className="p-2 text-dark hover:text-primary transition-colors bg-neutral-50 rounded-xl border border-neutral-200"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="xl:hidden bg-white border-b border-neutral-100 animate-in fade-in slide-in-from-top-2 duration-300">
          <nav className="flex flex-col p-8 space-y-6">
            {navLinks.map((link) => (
              <NavLink 
                key={link.to} 
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) => 
                  `text-xl font-bold py-3 border-b border-neutral-50 ${
                    isActive ? "text-primary" : "text-dark"
                  }`
                }
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </NavLink>
            ))}
            <div className="pt-4">
              <Button variant="primary" className="w-full py-4 text-lg" href={mapsUrl} target="_blank" rel="noopener noreferrer">
                {t('nav.directions')}
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
