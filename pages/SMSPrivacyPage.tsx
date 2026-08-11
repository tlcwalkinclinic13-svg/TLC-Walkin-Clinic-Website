import React from 'react';
import { MessageSquare, Shield, Lock, Phone, Mail, HelpCircle, AlertCircle, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const SMSPrivacyPage: React.FC = () => {
  const { t } = useLanguage();

  const smsItems = [
    t('sms.comm.item1'),
    t('sms.comm.item2'),
    t('sms.comm.item3'),
    t('sms.comm.item4'),
    t('sms.comm.item5'),
  ];

  return (
    <div className="pt-6">
      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-6 mb-8">
        <div className="inline-flex items-center gap-2 bg-primary/10 text-primary border border-primary/20 rounded-full px-4 py-1.5 text-xs sm:text-sm font-bold uppercase tracking-wider mb-4">
          <Shield className="h-4 w-4" />
          <span>Patient Privacy & Communications</span>
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold text-dark mb-4 leading-tight">
          {t('sms.title')}
        </h1>
        <p className="text-lg sm:text-xl text-neutral-500 max-w-3xl">
          {t('sms.subtitle')}
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 pb-24">
        <div className="bg-neutral-50 rounded-3xl p-6 sm:p-10 md:p-14 border border-neutral-100 shadow-sm space-y-12">
          
          {/* Section 1: SMS Communications */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-neutral-100 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                <MessageSquare className="h-5 w-5" />
              </div>
              <h2 className="text-2xl font-heading font-bold text-dark">
                {t('sms.comm.title')}
              </h2>
            </div>
            
            <p className="text-neutral-700 leading-relaxed mb-6 text-base sm:text-lg">
              {t('sms.comm.p1')}
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              {smsItems.map((item, index) => (
                <li key={index} className="flex items-start gap-3 bg-neutral-50 p-3.5 rounded-xl border border-neutral-100">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-neutral-700 font-medium text-sm sm:text-base">{item}</span>
                </li>
              ))}
            </ul>

            <div className="bg-amber-50 border border-amber-200/80 rounded-xl p-4 flex items-center gap-3 text-amber-900 text-sm font-medium">
              <AlertCircle className="h-5 w-5 text-amber-600 shrink-0" />
              <span>{t('sms.comm.freq')}</span>
            </div>
          </div>

          {/* Section 2: Opting Out and Assistance & Rates Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Opt Out / Help */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-neutral-100 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <HelpCircle className="h-5 w-5" />
                  </div>
                  <h2 className="text-xl sm:text-2xl font-heading font-bold text-dark">
                    {t('sms.opt.title')}
                  </h2>
                </div>
                
                <p className="text-neutral-700 leading-relaxed mb-4 text-sm sm:text-base">
                  {t('sms.opt.p1')}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="inline-flex items-center gap-1.5 bg-neutral-100 text-neutral-800 font-mono font-bold px-3 py-1.5 rounded-lg text-xs sm:text-sm border border-neutral-200">
                    Reply <strong className="text-primary font-bold">STOP</strong> to unsubscribe
                  </span>
                  <span className="inline-flex items-center gap-1.5 bg-neutral-100 text-neutral-800 font-mono font-bold px-3 py-1.5 rounded-lg text-xs sm:text-sm border border-neutral-200">
                    Reply <strong className="text-primary font-bold">HELP</strong> for assistance
                  </span>
                </div>
              </div>

              <p className="text-neutral-500 text-xs sm:text-sm italic">
                {t('sms.opt.p2')}
              </p>
            </div>

            {/* Message and Data Rates */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-neutral-100 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <AlertCircle className="h-5 w-5" />
                  </div>
                  <h2 className="text-xl sm:text-2xl font-heading font-bold text-dark">
                    {t('sms.rates.title')}
                  </h2>
                </div>
                
                <p className="text-neutral-700 leading-relaxed text-sm sm:text-base">
                  {t('sms.rates.p1')}
                </p>
              </div>

              <div className="bg-neutral-50 rounded-xl p-4 border border-neutral-100 text-xs text-neutral-500 mt-6">
                Standard message and data rates may apply depending on your mobile carrier and service plan.
              </div>
            </div>

          </div>

          {/* Section 3: Privacy of Your Information */}
          <div className="bg-gradient-to-br from-neutral-900 via-neutral-900 to-neutral-950 text-white p-6 sm:p-10 md:p-12 rounded-3xl shadow-xl relative overflow-hidden">
            <div className="relative z-10 max-w-4xl">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-primary-light mb-4">
                <Lock className="h-3.5 w-3.5" />
                <span>Strict Data Protection Guarantee</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-heading font-bold text-white mb-4">
                {t('sms.privacy.title')}
              </h2>

              <p className="text-neutral-200 text-base sm:text-lg leading-relaxed mb-6 font-medium">
                {t('sms.privacy.p1')}
              </p>

              <div className="bg-white/10 backdrop-blur-md p-5 sm:p-6 rounded-2xl border border-white/15 mb-6">
                <p className="text-white text-base sm:text-lg leading-relaxed font-semibold">
                  {t('sms.privacy.p2')}
                </p>
              </div>
            </div>
          </div>

          {/* Section 4: Contact directly */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-neutral-100 shadow-sm">
            <h2 className="text-xl sm:text-2xl font-heading font-bold text-dark mb-3">
              {t('sms.contact.title')}
            </h2>
            <p className="text-neutral-700 text-base mb-6">
              {t('sms.contact.p1')}
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap gap-4">
              <a 
                href="tel:4054703232" 
                className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white font-bold px-6 py-3.5 rounded-xl transition-all shadow-md text-base"
              >
                <Phone className="h-5 w-5" />
                Call (405) 470-3232
              </a>
              <a 
                href="mailto:tlcwalkinclinic13@gmail.com" 
                className="inline-flex items-center justify-center gap-2 bg-neutral-100 hover:bg-neutral-200 text-dark font-bold px-6 py-3.5 rounded-xl transition-all text-base border border-neutral-200"
              >
                <Mail className="h-5 w-5 text-primary" />
                Email Clinic
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
