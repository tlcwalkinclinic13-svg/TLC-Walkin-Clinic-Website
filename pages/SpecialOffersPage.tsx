
import React from 'react';
import { Tag, Sparkles, FileText, Download } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const SpecialOffersPage: React.FC = () => {
  const { t } = useLanguage();

  const offers = [
    {
      id: 1,
      title: t('offers.deal1.title'),
      description: t('offers.deal1.desc'),
      icon: <Sparkles className="h-6 w-6 text-primary" />,
      color: 'bg-primary/10',
      hasPdf: true,
      pdfLink: '/special-offer.pdf', 
    }
  ];

  return (
    <div className="pt-6">
      <div className="max-w-7xl mx-auto px-6 mb-8">
         <h1 className="text-5xl md:text-6xl font-heading font-bold text-dark mb-6 leading-tight">
           {t('nav.special')}
         </h1>
         <p className="text-xl text-neutral-500 max-w-2xl">{t('offers.subtitle')}</p>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {offers.map((offer) => (
            <div key={offer.id} className="bg-white rounded-3xl p-8 border border-neutral-100 shadow-sm hover:shadow-md transition-all group flex flex-col h-full">
              <div className={`w-14 h-14 ${offer.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                {offer.icon}
              </div>
              <h2 className="text-2xl font-heading font-bold text-dark mb-4">{offer.title}</h2>
              <p className="text-neutral-600 leading-relaxed mb-6 flex-grow">
                {offer.description}
              </p>
              
              {offer.hasPdf && (
                <div className="mb-6">
                  <a 
                    href={offer.pdfLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-6 py-3 bg-primary text-white rounded-xl font-bold hover:bg-primary/90 transition-colors shadow-sm"
                  >
                    <FileText className="h-5 w-5" />
                    <span>{t('offers.deal1.btn')}</span>
                    <Download className="h-4 w-4 ml-1 opacity-70" />
                  </a>
                  <p className="mt-3 text-xs text-neutral-400 italic">
                    *Show this to our front desk staff during your visit.
                  </p>
                </div>
              )}

              <div className="inline-flex items-center gap-2 text-primary font-bold">
                <Tag className="h-4 w-4" />
                <span>Limited Time Offer</span>
              </div>
            </div>
          ))}
        </div>

        {offers.length === 0 && (
          <div className="bg-neutral-50 rounded-3xl p-12 text-center border border-dashed border-neutral-200">
            <Tag className="h-12 w-12 text-neutral-300 mx-auto mb-4" />
            <p className="text-neutral-500 italic">{t('offers.empty')}</p>
          </div>
        )}
      </div>
    </div>
  );
};
