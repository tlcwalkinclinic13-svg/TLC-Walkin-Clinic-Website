
import React from 'react';
import { Facebook, Instagram, MapPin } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { Logo } from './Logo';

export const Footer: React.FC = () => {
  const { t } = useLanguage();
  const mapsUrl = "https://www.google.com/maps/dir//7900+NW+23rd+St+%231,+Bethany,+OK+73008";
  const instagramUrl = "https://www.instagram.com/tlcwalkin.clinic/";
  const facebookUrl = "https://www.facebook.com/tlcwalkinclinic/";

  return (
    <footer id="contact" className="bg-neutral-50 pt-20 pb-12 rounded-t-[3rem] mt-12 border-t border-neutral-100 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Brand Col */}
          <div className="flex flex-col">
            {/* Footer Logo Container - Adjusted for better proportion on top of text */}
            <div className="h-20 md:h-24 lg:h-28 flex items-center justify-start mb-6">
              <Logo className="h-full w-full" />
            </div>

            <p className="text-neutral-500 text-base leading-relaxed max-w-sm mb-8">
              {t('footer.desc')}
            </p>
            
            <div className="flex gap-4">
              <a 
                href={facebookUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-dark hover:text-primary hover:shadow-lg transition-all border border-neutral-100"
                aria-label="Facebook"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a 
                href={instagramUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-dark hover:text-primary hover:shadow-lg transition-all border border-neutral-100"
                aria-label="Instagram"
              >
                <span className="sr-only">Instagram</span>
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Visit Us */}
          <div className="md:pt-10">
            <h5 className="font-bold font-heading text-dark text-lg mb-8">{t('footer.visit')}</h5>
            <div className="space-y-6 text-base text-neutral-500">
              <p className="flex gap-3 items-start">
                <MapPin className="h-6 w-6 text-primary shrink-0" />
                <span className="leading-relaxed">
                  7900 NW 23rd St, Suite #1<br />
                  Bethany, OK 73008
                </span>
              </p>
              <a href={mapsUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-primary font-bold hover:underline bg-primary/5 px-4 py-2 rounded-lg">
                {t('nav.directions')}
              </a>
            </div>
          </div>

          {/* Hours */}
          <div className="md:pt-10">
            <h5 className="font-bold font-heading text-dark text-lg mb-8">{t('footer.hours')}</h5>
            <ul className="space-y-4 text-base text-neutral-600">
              <li className="flex justify-between border-b border-neutral-100 pb-2">
                <span>{t('footer.monfri')}:</span>
                <span className="font-bold text-dark">8:00 AM – 5:30 PM</span>
              </li>
              <li className="flex justify-between border-b border-neutral-100 pb-2">
                <span>{t('footer.sat')}:</span>
                <span className="text-primary font-bold uppercase text-sm tracking-wider">{t('footer.closed')}</span>
              </li>
              <li className="flex justify-between border-b border-neutral-100 pb-2">
                <span>{t('footer.sun')}:</span>
                <span className="text-primary font-bold uppercase text-sm tracking-wider">{t('footer.closed')}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-neutral-200 pt-10 text-center text-sm text-neutral-400 font-medium">
          &copy; {new Date().getFullYear()} TLC Walk-In Clinic. {t('footer.rights')}
        </div>
      </div>
    </footer>
  );
};
