
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
    <footer id="contact" className="bg-neutral-50 pt-20 pb-12 rounded-t-[3rem] mt-12 border-t border-neutral-100">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Col */}
          <div className="space-y-8">
            {/* Footer Logo Container aligns with the header logo */}
            <div className="h-40 md:h-48 flex items-center justify-start">
              <Logo className="h-full w-full" />
            </div>

            <p className="text-neutral-500 text-base leading-relaxed max-w-sm">
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
          <div className="lg:pt-10">
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
          <div className="lg:pt-10">
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

          {/* Resources */}
          <div className="lg:pt-10">
             <h5 className="font-bold font-heading text-dark text-lg mb-8">{t('footer.resources')}</h5>
             <ul className="space-y-4 text-base">
               <li><a href="#" className="text-neutral-500 hover:text-primary font-medium transition-colors">{t('footer.forms')}</a></li>
               <li><a href="#" className="text-neutral-500 hover:text-primary font-medium transition-colors">{t('footer.privacy')}</a></li>
               <li><span className="text-neutral-300 cursor-not-allowed italic">{t('footer.portal')}</span></li>
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
