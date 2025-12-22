
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
      <div className="max-w-[98rem] mx-auto px-6 md:px-12">
        {/* DOUBLED HEIGHT: From h-24/36/44 to h-48/72/80 */}
        <div className="flex justify-between items-center h-40 md:h-64 lg:h-80 transition-all duration-500">
          
          {/* Logo Container - DOUBLED SIZE: From h-20/28/36 to h-40/56/72 */}
          <Link to="/" className="group no-underline shrink-0 block h-full flex items-center py-6">
            <Logo className="h-32 md:h-56 lg:h-72 min-w-[200px] md:min-w-[400px] lg:min-w-[500px]" />
          </Link>

          {/* Desktop Nav - Centered vertically with the large logo */}
          <nav className="hidden xl:flex items-center gap-10">
            {navLinks.map((link) => (
              <NavLink 
                key={link.to}
                to={link.to}
                end={link.to === '/'} 
                className={({ isActive }) => 
                  `text-base lg:text-lg font-extrabold transition-colors font-heading tracking-tight ${
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
              className="flex items-center gap-2 text-base font-bold text-neutral-700 hover:text-primary transition-colors px-4 py-3 rounded-2xl bg-neutral-50 hover:bg-neutral-100 border border-neutral-200"
            >
              <Globe className="h-5 w-5" />
              <span>{language === 'en' ? 'ESP' : 'ENG'}</span>
            </button>

            <Button variant="primary" href={mapsUrl} target="_blank" rel="noopener noreferrer" className="px-12 py-5 text-lg shadow-lg">
              {t('nav.directions')} <Navigation className="h-6 w-6 ml-2" />
            </Button>
          </nav>

          {/* Mobile Toggle */}
          <div className="xl:hidden flex items-center gap-6">
             <button 
                onClick={toggleLanguage}
                className="flex items-center gap-2 text-base font-bold text-neutral-700 border border-neutral-200 px-4 py-2 rounded-2xl bg-neutral-50"
              >
                <Globe className="h-5 w-5" />
                <span>{language === 'en' ? 'ES' : 'EN'}</span>
              </button>
            <button 
              className="p-3 text-dark hover:text-primary transition-colors bg-neutral-50 rounded-2xl border border-neutral-200"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-10 w-10" /> : <Menu className="h-10 w-10" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="xl:hidden bg-white border-b border-neutral-100 animate-in fade-in slide-in-from-top-2 duration-300">
          <nav className="flex flex-col p-10 space-y-8">
            {navLinks.map((link) => (
              <NavLink 
                key={link.to} 
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) => 
                  `text-3xl font-bold py-4 border-b border-neutral-50 ${
                    isActive ? "text-primary" : "text-dark"
                  }`
                }
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </NavLink>
            ))}
            <div className="pt-6">
              <Button variant="primary" className="w-full py-6 text-xl" href={mapsUrl} target="_blank" rel="noopener noreferrer">
                {t('nav.directions')}
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
