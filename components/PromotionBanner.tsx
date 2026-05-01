import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ArrowRight, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

export const PromotionBanner: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="bg-gradient-to-br from-primary via-red-800 to-neutral-950 rounded-3xl overflow-hidden shadow-2xl relative border border-primary/20">
          
          {/* Decorative Background Elements */}
          <div className="absolute top-0 right-0 p-12 opacity-10 pointer-events-none mix-blend-overlay">
            <Star className="w-64 h-64 text-white" />
          </div>
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-black opacity-40 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute -top-24 right-10 w-96 h-96 bg-red-500 opacity-20 rounded-full blur-3xl pointer-events-none"></div>

          <div className="flex flex-col md:flex-row items-center justify-between p-10 md:p-16 relative z-10 gap-8">
            <div className="max-w-2xl text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-black/20 text-white rounded-full text-sm font-bold tracking-wide uppercase mb-6 shadow-sm backdrop-blur-sm border border-white/10">
                <Star className="w-4 h-4 fill-white text-white" />
                {t('promo.badge')}
              </div>
              
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-heading font-extrabold text-white mb-6 leading-tight drop-shadow-sm">
                {t('promo.title')}
              </h2>
              
              <p className="text-neutral-200 text-lg md:text-xl font-medium leading-relaxed max-w-xl">
                {t('promo.desc')}
              </p>
            </div>
            
            <div className="flex-shrink-0 w-full md:w-auto mt-6 md:mt-0">
              <Link 
                to="/membership" 
                className="group relative inline-flex items-center justify-center w-full md:w-auto gap-3 bg-neutral-950 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-black border border-neutral-800 transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1 overflow-hidden"
              >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-red-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></span>
                <span className="relative z-10 flex items-center gap-2">
                  {t('promo.btn')}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
