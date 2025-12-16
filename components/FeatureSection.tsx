import React from 'react';
import { Phone } from 'lucide-react';
import { Button } from './Button';
import { useLanguage } from '../context/LanguageContext';

export const WeightLossSection: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <section className="py-6 px-4 md:px-6">
      {/* Brand Red Background for high impact */}
      <div className="max-w-7xl mx-auto bg-primary rounded-3xl text-white p-8 md:p-16 overflow-hidden relative shadow-xl">
        
        {/* Abstract Decoration Circle */}
        <div className="absolute -top-1/2 -right-1/4 w-[600px] h-[600px] border border-white/20 rounded-full opacity-50 hidden lg:block pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          <div className="space-y-8">
            <div className="inline-block bg-white/20 backdrop-blur-sm text-white font-bold text-sm tracking-widest mb-2 uppercase px-3 py-1 rounded-full">
              {t('weight.label')}
            </div>
            <h2 className="text-3xl md:text-5xl font-heading font-bold leading-tight">
              {t('weight.title')}
            </h2>
            <p className="text-white/90 text-lg leading-relaxed">
              {t('weight.desc')}
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="white" href="tel:4054703232">
                <Phone className="h-4 w-4" /> {t('weight.btn')}
              </Button>
            </div>
          </div>

          <div className="relative h-[400px] rounded-3xl overflow-hidden bg-primary-dark shadow-inner border border-white/10">
            <img 
              src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
              alt="Doctor Consultation" 
              className="w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-700"
            />
             <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/60 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
};

export const DOTSection: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <section className="py-6 px-4 md:px-6">
      {/* Dark Background for contrast */}
      <div className="max-w-7xl mx-auto bg-dark rounded-3xl text-white p-8 md:p-16 overflow-hidden relative shadow-xl">
        
        {/* Abstract Decoration Circle */}
        <div className="absolute -bottom-1/2 -left-1/4 w-[600px] h-[600px] border border-white/5 rounded-full opacity-50 hidden lg:block pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10 lg:grid-flow-col-dense">
          
          {/* Image Left for variation */}
          <div className="relative h-[400px] rounded-3xl overflow-hidden bg-neutral-800 lg:order-1 order-2 shadow-inner border border-white/5">
            <img 
              src="https://images.unsplash.com/photo-1616432043562-3671ea2e5242?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
              alt="Truck Driver DOT Exam" 
              className="w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-700"
            />
             <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/80 to-transparent" />
          </div>

          <div className="space-y-8 lg:order-2 order-1">
            <div className="inline-block text-white font-bold text-sm tracking-widest mb-2 uppercase bg-white/10 px-3 py-1 rounded-full">
              {t('dot.label')}
            </div>
            <h2 className="text-3xl md:text-5xl font-heading font-bold leading-tight">
              {t('dot.title')}
            </h2>
            <p className="text-neutral-400 text-lg leading-relaxed">
              {t('dot.desc')}
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="white" href="tel:4054703232">
                <Phone className="h-4 w-4" /> {t('dot.btn')}
              </Button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};