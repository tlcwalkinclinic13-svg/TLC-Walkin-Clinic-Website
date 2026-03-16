
import React, { useState } from 'react';
import { Menu, X, Navigation, Globe, Phone } from 'lucide-react';
import { Link, NavLink } from 'react-router-dom';
import { Button } from './Button';
import { useLanguage } from '../context/LanguageContext';
import { Logo } from './Logo';

export const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t, language, setLanguage } = useLanguage();

  const navLinks = [
    { label: t('nav.home'), to: '/' },
    { label: t('nav.services'), to: '/services' },
    { label: t('nav.telemedicine'), to: '/telemedicine' },
    { label: t('nav.insurance'), to: '/insurance' },
    { label: t('nav.pricing'), to: '/pricing' },
    { label: t('nav.about'), to: '/offers' },
  ];

  const mapsUrl = "https://www.google.com/maps/dir//7900+NW+23rd+St+%231,+Bethany,+OK+73008";

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'es' : 'en');
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-neutral-100 shadow-sm px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center h-32 md:h-40 lg:h-44 transition-all duration-300">
          
          {/* Logo Container - Adjusted size based on user request */}
          <Link to="/" className="group no-underline shrink-0 block h-full flex items-center py-2">
            <Logo className="h-[112px] md:h-[144px] lg:h-[160px] min-w-[200px] md:min-w-[320px]" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden xl:flex items-center gap-4 lg:gap-6">
            {navLinks.map((link) => (
              <NavLink 
                key={link.to}
                to={link.to}
                end={link.to === '/'} 
                className={({ isActive }) => 
                  `text-xs lg:text-sm font-bold transition-colors font-heading tracking-tight whitespace-nowrap ${
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
              className="flex items-center gap-1 text-xs font-bold text-neutral-700 hover:text-primary transition-colors px-3 py-1.5 rounded-lg bg-neutral-50 border border-neutral-200"
            >
              <Globe className="h-3.5 w-3.5" />
              <span>{language === 'en' ? 'ESP' : 'ENG'}</span>
            </button>

            <div className="flex items-center gap-2">
              <Button variant="primary" href="tel:4054703232" className="px-4 py-2 text-xs lg:text-sm">
                {t('nav.contact')} <Phone className="h-4 w-4 ml-1.5" />
              </Button>
              <Button variant="primary" href={mapsUrl} target="_blank" rel="noopener noreferrer" className="px-4 py-2 text-xs lg:text-sm">
                {t('nav.directions')} <Navigation className="h-4 w-4 ml-1.5" />
              </Button>
            </div>
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
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
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
            <div className="pt-4 space-y-4">
              <Button variant="primary" className="w-full py-4 text-lg" href="tel:4054703232">
                {t('nav.contact')} <Phone className="h-5 w-5 ml-2" />
              </Button>
              <Button variant="primary" className="w-full py-4 text-lg" href={mapsUrl} target="_blank" rel="noopener noreferrer">
                {t('nav.directions')} <Navigation className="h-5 w-5 ml-2" />
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
