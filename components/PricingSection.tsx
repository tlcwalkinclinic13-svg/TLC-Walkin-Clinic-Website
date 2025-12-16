import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export const PricingSection: React.FC = () => {
  const { t } = useLanguage();

  const prices = [
    { name: t('price.office'), price: t('price.office.val') },
    { name: t('price.sports'), price: '$20' },
    { name: t('price.sports_college'), price: '$30' },
    { name: t('price.dot'), price: '$100' },
    { name: t('price.lac'), price: '$70' },
    { name: t('price.xray'), price: '$70' },
    { name: t('price.ear'), price: '$45' },
    { name: t('price.ekg'), price: '$75' },
    { name: t('price.std'), price: '$125' },
    { name: t('price.std_blood'), price: '$250' },
    { name: t('price.covid'), price: '$30' },
    { name: t('price.strep'), price: '$15' },
    { name: t('price.glucose'), price: '$10' },
    { name: t('price.tb'), price: '$25' },
    { name: t('price.urine'), price: '$25' },
    { name: t('price.preg'), price: '$10' },
  ];

  return (
    <section className="pb-24 px-6">
      <div className="max-w-4xl mx-auto">
        
        {/* Pricing Table Only */}
        <div className="bg-dark text-white p-8 md:p-12 rounded-3xl shadow-2xl">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
            <h3 className="text-3xl font-heading font-bold text-white">{t('pricing.card.title')}</h3>
            <div className="text-sm font-medium bg-white/10 px-4 py-1.5 rounded-full text-neutral-300">
              {t('pricing.card.subtitle')}
            </div>
          </div>
          
          <div className="space-y-4">
            {prices.map((item, index) => (
              <div 
                key={index} 
                className="flex justify-between items-center py-4 border-b border-neutral-700 last:border-0 hover:bg-white/5 px-2 rounded-lg transition-colors"
              >
                <span className="font-medium text-neutral-300">{item.name}</span>
                <span className="font-bold text-primary-light text-right">{item.price}</span>
              </div>
            ))}
          </div>
          <p className="mt-6 text-xs text-neutral-400 font-medium text-center md:text-left">
            {t('pricing.disclaimer')}
          </p>
        </div>

      </div>
    </section>
  );
};