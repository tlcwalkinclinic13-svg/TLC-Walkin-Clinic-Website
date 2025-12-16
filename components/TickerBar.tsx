import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export const TickerBar: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <div className="bg-primary text-white text-xs md:text-sm font-heading font-semibold py-2 text-center tracking-wide px-4">
      <span>{t('ticker.text')}</span>
    </div>
  );
};