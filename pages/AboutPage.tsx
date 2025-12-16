import React from 'react';
import { HeartHandshake, ShieldCheck, Users } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const AboutPage: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="pt-6">
      <div className="max-w-7xl mx-auto px-6 mb-8">
         <h1 className="text-5xl md:text-6xl font-heading font-bold text-dark mb-4">{t('about.title')}</h1>
         <p className="text-xl text-neutral-500 max-w-2xl">{t('about.subtitle')}</p>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 pb-24">
        <div className="bg-neutral-50 rounded-3xl p-8 md:p-12 border border-neutral-100 shadow-sm">
          
          {/* Main Text Content */}
          <div className="max-w-4xl">
            <h2 className="text-3xl font-heading font-bold text-dark mb-6">{t('about.heading')}</h2>
            <p className="text-lg text-neutral-700 leading-relaxed mb-6">
              {t('about.p1')}
            </p>
            <p className="text-lg text-neutral-700 leading-relaxed mb-12">
              {t('about.p2')}
            </p>
          </div>

          {/* Values Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-8 rounded-2xl border border-neutral-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <h3 className="font-heading font-bold text-dark mb-3 text-lg">{t('about.val1.title')}</h3>
              <p className="text-neutral-500 text-sm leading-relaxed">
                {t('about.val1.desc')}
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-neutral-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6">
                <HeartHandshake className="h-6 w-6" />
              </div>
              <h3 className="font-heading font-bold text-dark mb-3 text-lg">{t('about.val2.title')}</h3>
              <p className="text-neutral-500 text-sm leading-relaxed">
                {t('about.val2.desc')}
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-neutral-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6">
                <Users className="h-6 w-6" />
              </div>
              <h3 className="font-heading font-bold text-dark mb-3 text-lg">{t('about.val3.title')}</h3>
              <p className="text-neutral-500 text-sm leading-relaxed">
                {t('about.val3.desc')}
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};