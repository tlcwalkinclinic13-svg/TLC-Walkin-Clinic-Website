import React, { useState } from 'react';
import { ShieldCheck, MessageSquare, ArrowRight, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

export const SMSAlertBanner: React.FC = () => {
  const { t } = useLanguage();
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) {
    return null;
  }

  return (
    <section className="px-6 pt-6 pb-2">
      <div className="max-w-7xl mx-auto">
        <div className="bg-gradient-to-r from-neutral-900 via-neutral-800 to-neutral-900 border border-neutral-700/60 rounded-2xl p-5 sm:p-6 text-white shadow-xl relative overflow-hidden">
          {/* Subtle glow effect */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"></div>

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-5 relative z-10">
            {/* Left Column: Icon + Text */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/20 border border-primary/30 flex items-center justify-center text-primary-light shrink-0 mt-0.5">
                <MessageSquare className="h-6 w-6 text-red-400" />
              </div>
              
              <div>
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="inline-flex items-center gap-1 bg-red-500/20 text-red-300 border border-red-500/30 rounded-full px-2.5 py-0.5 text-xs font-bold uppercase tracking-wider">
                    <ShieldCheck className="h-3.5 w-3.5" />
                    {t('home.sms_alert.badge')}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-heading font-bold text-white mb-1">
                  {t('home.sms_alert.title')}
                </h3>
                
                <p className="text-neutral-300 text-sm sm:text-base leading-relaxed max-w-2xl">
                  {t('home.sms_alert.desc')}
                </p>
              </div>
            </div>

            {/* Right Column: CTA Button + Dismiss */}
            <div className="flex items-center gap-3 shrink-0 self-start md:self-center pl-16 md:pl-0">
              <Link
                to="/sms-privacy-policy"
                className="inline-flex items-center gap-2 bg-primary hover:bg-red-700 text-white font-bold px-5 py-2.5 rounded-xl transition-all shadow-md hover:shadow-lg text-sm sm:text-base group"
              >
                <span>{t('home.sms_alert.btn')}</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <button
                type="button"
                onClick={() => setDismissed(true)}
                className="text-neutral-400 hover:text-white hover:bg-neutral-800 p-2 rounded-xl transition-colors cursor-pointer"
                title="Dismiss alert"
                aria-label="Dismiss alert"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
