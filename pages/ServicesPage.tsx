import React from 'react';
import { Link } from 'react-router-dom';
import { BentoGrid } from '../components/BentoGrid';
import { useLanguage } from '../context/LanguageContext';

export const ServicesPage: React.FC = () => {
  const { t, language } = useLanguage();
  
  return (
    <div className="pt-6">
      <div className="max-w-7xl mx-auto px-6 mb-8">
         <h1 className="text-5xl md:text-6xl font-heading font-bold text-dark mb-4">{t('services.title')}</h1>
         <p className="text-xl text-neutral-500 max-w-2xl">{t('services.subtitle')}</p>
      </div>
      <div className="max-w-7xl mx-auto px-6 mb-10 flex flex-wrap gap-3">
        <Link to="/urgent-care-bethany-ok" className="inline-flex rounded-full bg-primary text-white px-6 py-3 font-semibold hover:bg-dark">{language === 'es' ? 'Atención urgente en Bethany' : 'Urgent care in Bethany'}</Link>
        <Link to="/x-ray-bethany-ok" className="inline-flex rounded-full bg-neutral-100 text-dark px-6 py-3 font-semibold hover:bg-neutral-200">{language === 'es' ? 'Radiografías en Bethany' : 'On-site X-rays in Bethany'}</Link>
        <Link to="/dot-physical-bethany-ok" className="inline-flex rounded-full bg-neutral-100 text-dark px-6 py-3 font-semibold hover:bg-neutral-200">{language === 'es' ? 'Exámenes físicos DOT' : 'DOT physical exams'}</Link>
      </div>
      <BentoGrid />
    </div>
  );
};
