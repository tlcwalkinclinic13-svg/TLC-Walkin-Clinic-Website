import React from 'react';
import { Phone, Video, CheckCircle2, Laptop, Tablet, Smartphone, Info, CreditCard } from 'lucide-react';
import { Button } from '../components/Button';
import { useLanguage } from '../context/LanguageContext';

export const TelemedicinePage: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="pt-6">
      <div className="max-w-7xl mx-auto px-6 mb-8">
         <h1 className="text-5xl md:text-6xl font-heading font-bold text-dark mb-4">{t('tele.title')}</h1>
         <p className="text-xl text-neutral-500 max-w-2xl">{t('tele.subtitle')}</p>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 pb-24">
        <div className="bg-neutral-50 rounded-3xl p-8 md:p-12 border border-neutral-100 shadow-sm overflow-hidden relative">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start relative z-10">
            
            {/* Left Column: Content */}
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 bg-white border border-neutral-200 px-4 py-2 rounded-full text-sm font-semibold text-primary">
                <Video className="h-4 w-4" />
                <span>{t('tele.badge')}</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-dark leading-tight">
                {t('tele.heading')}
              </h2>
              
              <p className="text-lg text-neutral-600 leading-relaxed">
                {t('tele.desc')}
              </p>

              {/* Conditions List */}
              <div className="bg-white rounded-2xl p-6 border border-neutral-100 shadow-sm">
                <h3 className="font-heading font-bold text-dark mb-4">{t('tele.treat.title')}</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {[t('tele.treat.1'), t('tele.treat.2'), t('tele.treat.3'), t('tele.treat.4')].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-neutral-600 text-sm font-medium">
                      <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Eligibility & Payment Disclaimer */}
              <div className="bg-white p-6 rounded-2xl border-l-4 border-primary shadow-sm">
                <div className="flex items-start gap-3 mb-4">
                  <Info className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                  <h3 className="font-bold font-heading text-dark">{t('tele.eligibility')}</h3>
                </div>
                <div className="space-y-4 text-sm text-neutral-600 leading-relaxed">
                  <p>
                    <strong>{t('tele.elig.1')}</strong> {t('tele.elig.2')} <strong>06/13/24</strong>{t('tele.elig.3')}
                  </p>
                  <div className="flex items-start gap-2 p-3 bg-neutral-50 rounded-lg">
                    <CreditCard className="h-4 w-4 text-neutral-400 mt-1 shrink-0" />
                    <p>
                      {t('tele.pay.1')} <span className="font-bold text-primary">@tlcwalkin</span>.
                    </p>
                  </div>
                  <p className="text-xs italic">{t('tele.pay.note')}</p>
                </div>
              </div>

              {/* CTA */}
              <div className="space-y-4 pt-2">
                <p className="font-bold text-dark">{t('tele.ready')}</p>
                <Button variant="primary" href="tel:4054703232" className="w-full md:w-auto">
                  <Phone className="h-4 w-4" /> {t('tele.btn')}
                </Button>
              </div>
            </div>

            {/* Right Column: Image & Device Icons */}
            <div className="relative sticky top-6">
               <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-white h-[600px]">
                 <img 
                   src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                   alt="Doctor on video call" 
                   className="w-full h-full object-cover"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-transparent to-transparent flex items-end p-8">
                    <div className="text-white">
                      <p className="font-bold text-lg mb-2">{t('tele.compat')}</p>
                      <div className="flex gap-6 opacity-90">
                        <div className="flex flex-col items-center gap-1">
                          <Smartphone className="h-6 w-6" />
                          <span className="text-xs">{t('tele.phone')}</span>
                        </div>
                        <div className="flex flex-col items-center gap-1">
                          <Tablet className="h-6 w-6" />
                          <span className="text-xs">{t('tele.tablet')}</span>
                        </div>
                        <div className="flex flex-col items-center gap-1">
                          <Laptop className="h-6 w-6" />
                          <span className="text-xs">{t('tele.comp')}</span>
                        </div>
                      </div>
                    </div>
                 </div>
               </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};