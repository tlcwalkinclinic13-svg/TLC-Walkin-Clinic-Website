import React from 'react';
import { HeartPulse, Facebook, Instagram, MapPin } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const Footer: React.FC = () => {
  const { t } = useLanguage();
  const mapsUrl = "https://www.google.com/maps/dir//7900+NW+23rd+St+%231,+Bethany,+OK+73008";
  const instagramUrl = "https://www.instagram.com/tlcwalkin.clinic/";

  return (
    <footer id="contact" className="bg-neutral-50 pt-20 pb-10 rounded-t-[3rem] mt-12">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Col */}
          <div className="space-y-6">
            {/* Logo Construction */}
            <div className="flex flex-col items-start inline-block">
              <div className="flex items-center leading-none">
                <span className="text-4xl font-serif font-extrabold text-black tracking-tight">TLC</span>
                <HeartPulse className="h-8 w-8 text-primary ml-1 -mt-1" />
              </div>
              <div className="w-full h-[2px] bg-primary my-0.5"></div>
              <span className="text-[0.65rem] font-heading font-bold text-dark uppercase tracking-[0.15em] leading-none w-full">
                {t('nav.subtitle')}
              </span>
            </div>

            <p className="text-neutral-500 text-sm leading-relaxed">
              {t('footer.desc')}
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-dark hover:text-primary hover:shadow-md transition-all">
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href={instagramUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-dark hover:text-primary hover:shadow-md transition-all"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Visit Us */}
          <div>
            <h5 className="font-bold font-heading text-dark mb-6">{t('footer.visit')}</h5>
            <div className="space-y-4 text-sm text-neutral-500">
              <p className="flex gap-2 items-start">
                <MapPin className="h-4 w-4 mt-1 shrink-0" />
                <span>
                  7900 NW 23rd St, Suite #1<br />
                  Bethany, OK 73008
                </span>
              </p>
              <a href={mapsUrl} target="_blank" rel="noopener noreferrer" className="inline-block text-primary font-semibold hover:underline">
                {t('nav.directions')}
              </a>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h5 className="font-bold font-heading text-dark mb-6">{t('footer.hours')}</h5>
            <ul className="space-y-3 text-sm text-neutral-500">
              <li className="flex justify-between max-w-[200px]">
                <span>{t('footer.monfri')}:</span>
                <span className="font-medium text-dark">8:00 AM – 5:30 PM</span>
              </li>
              <li className="flex justify-between max-w-[200px]">
                <span>{t('footer.sat')}:</span>
                <span className="text-primary font-medium">{t('footer.closed')}</span>
              </li>
              <li className="flex justify-between max-w-[200px]">
                <span>{t('footer.sun')}:</span>
                <span className="text-primary font-medium">{t('footer.closed')}</span>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
             <h5 className="font-bold font-heading text-dark mb-6">{t('footer.resources')}</h5>
             <ul className="space-y-3 text-sm">
               <li><a href="#" className="text-neutral-500 hover:text-primary transition-colors">{t('footer.forms')}</a></li>
               <li><a href="#" className="text-neutral-500 hover:text-primary transition-colors">{t('footer.privacy')}</a></li>
               <li><span className="text-neutral-400 cursor-not-allowed">{t('footer.portal')}</span></li>
             </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-neutral-200 pt-8 text-center text-xs text-neutral-400">
          &copy; {new Date().getFullYear()} TLC Walk-In Clinic. {t('footer.rights')}
        </div>
      </div>
    </footer>
  );
};