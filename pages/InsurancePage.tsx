import React from 'react';
import { Link } from 'react-router-dom';
import { CreditCard, FileText } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const insurances = [
  { name: 'Aetna', color: 'text-purple-700' },
  { name: 'Ambetter', color: 'text-pink-600' },
  { name: 'BlueCross BlueShield', color: 'text-blue-600' },
  { name: 'Cigna', color: 'text-green-600' },
  { name: 'Healthcare Highways', color: 'text-emerald-700' },
  { name: 'Medicare', color: 'text-blue-800' },
  { name: 'Medicaid', color: 'text-blue-500' },
  { name: 'Humana', color: 'text-green-500' },
  { name: 'United Healthcare', color: 'text-blue-900' },
  { name: 'Tricare', color: 'text-red-700' },
  { name: 'MultiPlan', color: 'text-green-600' },
  { name: 'WebTPA', color: 'text-cyan-600' },
  { name: 'Taro', color: 'text-indigo-600' },
];

export const InsurancePage: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="pt-6">
      <div className="max-w-7xl mx-auto px-6 mb-8">
         <h1 className="text-5xl md:text-6xl font-heading font-bold text-dark mb-4">{t('ins.title')}</h1>
         <p className="text-xl text-neutral-500 max-w-2xl">{t('ins.subtitle')}</p>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 pb-24">
        <div className="bg-neutral-50 rounded-3xl p-8 md:p-12 border border-neutral-100 shadow-sm">
          
          {/* Intro Text Block */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <p className="text-lg text-neutral-700 leading-relaxed mb-6">
              {t('ins.intro1')}
            </p>
            <p className="text-lg text-neutral-700 leading-relaxed mb-6">
              {t('ins.intro2')} <Link to="/pricing" className="text-primary font-bold hover:underline">{t('ins.link')}</Link>{t('ins.intro3')}
            </p>
          </div>

          {/* Important Requirements Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-2xl border-l-4 border-primary shadow-sm flex gap-4">
               <CreditCard className="h-6 w-6 text-primary shrink-0 mt-1" />
               <div>
                 <h3 className="font-heading font-bold text-dark mb-2">{t('ins.card.req')}</h3>
                 <p className="text-sm text-neutral-600">
                   {t('ins.card.desc')}
                 </p>
               </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border-l-4 border-dark shadow-sm flex gap-4">
               <FileText className="h-6 w-6 text-dark shrink-0 mt-1" />
               <div>
                 <h3 className="font-heading font-bold text-dark mb-2">{t('ins.sooner.title')}</h3>
                 <p className="text-sm text-neutral-600">
                   {t('ins.sooner.desc1')} <span className="font-bold text-green-600">SoonerSelect</span>{t('ins.sooner.desc2')}
                 </p>
               </div>
            </div>
          </div>

          {/* Logo Grid */}
          <div className="text-center mb-12">
            <h2 className="text-2xl font-heading font-bold text-dark mb-8">{t('ins.providers')}</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {insurances.map((ins) => (
                <div 
                  key={ins.name} 
                  className="bg-white h-24 rounded-xl border border-neutral-100 shadow-sm flex items-center justify-center p-4 hover:shadow-md transition-shadow group"
                >
                  <span className={`text-lg md:text-xl font-bold font-heading ${ins.color} group-hover:opacity-80 transition-opacity text-center leading-tight`}>
                    {ins.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Notice */}
          <div className="text-center pt-8 border-t border-neutral-200">
            <p className="text-sm text-neutral-500 italic">
              {t('ins.notice')}
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};