import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export const Steps: React.FC = () => {
  const { t } = useLanguage();

  const steps = [
    {
      id: 1,
      title: t('step1.title'),
      desc: t('step1.desc'),
      img: 'https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 2,
      title: t('step2.title'),
      desc: t('step2.desc'),
      img: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 3,
      title: t('step3.title'),
      desc: t('step3.desc'),
      img: 'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    },
  ];

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <div className="text-primary font-bold tracking-widest uppercase text-sm mb-2">{t('steps.label')}</div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-dark">{t('steps.title')}</h2>
          </div>
          <p className="text-neutral-500 max-w-md text-left md:text-right mt-4 md:mt-0 hidden md:block">
            {t('steps.desc')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div key={step.id} className="group bg-neutral-50 rounded-3xl overflow-hidden border border-neutral-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              {/* Image Area */}
              <div className="h-56 w-full overflow-hidden relative">
                 <img 
                   src={step.img} 
                   alt={step.title} 
                   className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                 />
                 <div className="absolute inset-0 bg-dark/0 group-hover:bg-dark/10 transition-colors duration-300" />
              </div>
              
              {/* Content Area */}
              <div className="p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white font-bold font-heading text-lg shadow-sm group-hover:scale-110 transition-transform">
                    {step.id}
                  </div>
                  <h3 className="text-xl font-heading font-bold text-dark">{step.title}</h3>
                </div>
                <p className="text-neutral-600 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};