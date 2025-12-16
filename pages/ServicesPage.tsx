import React from 'react';
import { BentoGrid } from '../components/BentoGrid';
import { useLanguage } from '../context/LanguageContext';

export const ServicesPage: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <div className="pt-6">
      <div className="max-w-7xl mx-auto px-6 mb-8">
         <h1 className="text-5xl md:text-6xl font-heading font-bold text-dark mb-4">{t('services.title')}</h1>
         <p className="text-xl text-neutral-500 max-w-2xl">{t('services.subtitle')}</p>
      </div>
      <BentoGrid />
    </div>
  );
};