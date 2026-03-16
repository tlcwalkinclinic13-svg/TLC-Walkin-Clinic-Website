
import React, { useState, useEffect } from 'react';
import { CheckCircle, Phone, Printer, Mail, Clock, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import { useLanguage } from '../context/LanguageContext';

export const Hero: React.FC = () => {
  const { t } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);

  // You can change the closing message in LanguageContext.tsx under 'hero.special.msg'
  const showSpecialNotice = true; // Set to false to hide the special notice slot

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === 2 ? 0 : prev + 1));
    }, 10000); // 10 Seconds rotation
    return () => clearInterval(timer);
  }, []);

  const renderSlide = () => {
    switch (currentSlide) {
      case 0:
        return (
          /* SLIDE 1: Original Intro */
          <div key="slide-0" className="animate-in fade-in slide-in-from-bottom-8 duration-700 fill-mode-backwards">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md border border-white/30 rounded-full px-4 py-2 text-sm font-semibold mb-6">
              <CheckCircle className="h-4 w-4 text-primary-light" />
              <span>{t('hero.open')}</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-heading font-bold leading-[1.1] mb-6">
              {t('hero.title')}
            </h1>
            
            <p className="text-lg md:text-xl text-neutral-200 mb-8 max-w-lg">
              {t('hero.subtitle')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="primary" to="/services">
                {t('hero.viewServices')}
              </Button>
              <Button variant="white" href="tel:4054703232">
                <Phone className="h-4 w-4" /> (405) 470-3232
              </Button>
            </div>
          </div>
        );
      case 1:
        return (
          /* SLIDE 2: Contact Info & Hours */
          <div key="slide-1" className="animate-in fade-in slide-in-from-bottom-8 duration-700 fill-mode-backwards">
            <div className="inline-flex items-center gap-2 bg-primary/80 backdrop-blur-md border border-white/10 rounded-full px-4 py-2 text-sm font-semibold mb-6">
              <Clock className="h-4 w-4 text-white" />
              <span>{t('nav.subtitle')}</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-heading font-bold leading-[1.1] mb-6">
              {t('hero.contact.title')}
            </h1>
            <p className="text-lg text-neutral-300 mb-8">{t('hero.contact.subtitle')}</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              {/* Contact Info */}
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:bg-white/20 transition-colors">
                <h3 className="font-bold text-lg mb-4 text-primary-light border-b border-white/10 pb-2">Contact</h3>
                <ul className="space-y-3 text-sm md:text-base">
                  <li className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-neutral-300 shrink-0" />
                    <div>
                      <span className="block text-xs text-primary font-bold uppercase tracking-wider">{t('hero.info.phone')}</span>
                      <a href="tel:4054703232" className="hover:text-primary-light transition-colors font-medium">(405) 470-3232</a>
                    </div>
                  </li>
                  <li className="flex items-center gap-3">
                    <Printer className="h-5 w-5 text-neutral-300 shrink-0" />
                    <div>
                        <span className="block text-xs text-primary font-bold uppercase tracking-wider">{t('hero.info.fax')}</span>
                        <span className="font-medium">(405) 470-3233</span>
                    </div>
                  </li>
                  <li className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-neutral-300 shrink-0" />
                    <div>
                        <span className="block text-xs text-primary font-bold uppercase tracking-wider">{t('hero.info.email')}</span>
                        <a href="mailto:tlcwalkinclinic13@gmail.com" className="hover:text-primary-light transition-colors font-medium break-all">tlcwalkinclinic13@gmail.com</a>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Hours Info */}
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:bg-white/20 transition-colors">
                  <h3 className="font-bold text-lg mb-4 text-primary-light border-b border-white/10 pb-2">{t('hero.hours.title')}</h3>
                  <ul className="space-y-3">
                    <li className="flex justify-between items-center border-b border-white/5 pb-2">
                      <span className="text-neutral-200">{t('hero.hours.monfri')}</span>
                      <span className="font-bold">{t('hero.hours.time')}</span>
                    </li>
                    <li className="flex justify-between items-center text-neutral-400">
                      <span className="text-primary font-bold uppercase text-xs tracking-widest">{t('footer.sat')}</span>
                      <span>{t('footer.closed')}</span>
                    </li>
                    <li className="flex justify-between items-center text-neutral-400">
                      <span className="text-primary font-bold uppercase text-xs tracking-widest">{t('footer.sun')}</span>
                      <span>{t('footer.closed')}</span>
                    </li>
                  </ul>
              </div>
            </div>

            {/* Special Notice Slot */}
            {showSpecialNotice && (
              <div className="bg-primary/90 backdrop-blur-md p-4 rounded-xl border border-white/20 flex items-start gap-3 animate-pulse shadow-lg max-w-xl">
                <AlertCircle className="h-6 w-6 text-white shrink-0" />
                <div>
                  <span className="block font-bold text-sm uppercase tracking-wider text-white/90">{t('hero.special.title')}</span>
                  <span className="font-medium">{t('hero.special.msg')}</span>
                </div>
              </div>
            )}
          </div>
        );
      case 2:
        return (
          /* SLIDE 3: Special Offer Highlight */
          <Link 
            to="/offers" 
            key="slide-2" 
            className="block no-underline group/slide animate-in fade-in slide-in-from-bottom-8 duration-700 fill-mode-backwards"
          >
            <div className="inline-flex items-center gap-2 bg-yellow-400 text-dark rounded-full px-4 py-2 text-sm font-bold mb-6 shadow-lg shadow-yellow-400/20">
              <CheckCircle className="h-4 w-4" />
              <span>{t('nav.special')}</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-heading font-bold leading-[1.1] mb-6 group-hover/slide:text-primary-light transition-colors">
              {t('offers.deal1.title')}
            </h1>
            
            <p className="text-lg md:text-xl text-neutral-200 mb-8 max-w-lg">
              {t('offers.deal1.desc')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="primary" to="/offers" className="group-hover/slide:scale-105 transition-transform">
                {t('offers.deal1.btn').split('(')[0]}
              </Button>
              <div className="flex items-center gap-2 text-white font-bold animate-bounce sm:animate-none sm:group-hover/slide:translate-x-2 transition-transform">
                <span>Click to Claim Offer</span>
                <CheckCircle className="h-5 w-5 text-yellow-400" />
              </div>
            </div>
          </Link>
        );
      default:
        return null;
    }
  };

  return (
    <div className="pt-6 px-4 md:px-6">
      <div className="max-w-7xl mx-auto relative rounded-3xl overflow-hidden min-h-[600px] flex items-center group">
        
        {/* Background Image (Static) */}
        <div className="absolute inset-0 w-full h-full">
          <img 
            src="tlc-staff.jpg"
            alt="TLC Clinic Staff Friendsgiving Celebration" 
            className="w-full h-full object-cover object-center transition-transform duration-[20s] group-hover:scale-105"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
        </div>

        {/* Content Slider Container */}
        <div className="relative z-10 w-full max-w-3xl p-8 md:p-16 text-white min-h-[500px] flex flex-col justify-center">
          
          {renderSlide()}

          {/* Slider Dots */}
          <div className="flex gap-3 mt-10">
            {[0, 1, 2].map((idx) => (
              <button 
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${currentSlide === idx ? 'w-8 bg-white' : 'w-2 bg-white/40 hover:bg-white/60'}`}
                aria-label={`Slide ${idx + 1}`}
              />
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};
