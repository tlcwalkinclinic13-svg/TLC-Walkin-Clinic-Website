import React from 'react';
import { ArrowRight, Bone, Wind, Syringe, Stethoscope, Scale, Scissors, TestTube, Trophy, ClipboardPlus } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

export const BentoGrid: React.FC = () => {
  const { t } = useLanguage();

  const services = [
    {
      title: t('svc.imaging.title'),
      description: t('svc.imaging.desc'),
      bullets: [t('svc.imaging.1'), t('svc.imaging.2'), t('svc.imaging.3')],
      icon: Bone,
    },
    {
      title: t('svc.resp.title'),
      description: t('svc.resp.desc'),
      bullets: [t('svc.resp.1'), t('svc.resp.2'), t('svc.resp.3'), t('svc.resp.4'), t('svc.resp.5')],
      icon: Wind,
    },
    {
      title: t('svc.vax.title'),
      description: t('svc.vax.desc'),
      bullets: [t('svc.vax.1'), t('svc.vax.2')],
      icon: Syringe,
    },
    {
      title: t('svc.gastro.title'),
      description: t('svc.gastro.desc'),
      bullets: [t('svc.gastro.1'), t('svc.gastro.2'), t('svc.gastro.3')],
      icon: Stethoscope,
    },
    {
      title: t('svc.weight.title'),
      description: t('svc.weight.desc'),
      bullets: [t('svc.weight.1'), t('svc.weight.2')],
      icon: Scale,
    },
    {
      title: t('svc.minor.title'),
      description: t('svc.minor.desc'),
      bullets: [t('svc.minor.1'), t('svc.minor.2'), t('svc.minor.3'), t('svc.minor.4')],
      icon: Scissors,
    },
    {
      title: t('svc.blood.title'),
      description: t('svc.blood.desc'),
      bullets: [t('svc.blood.1'), t('svc.blood.2')],
      icon: TestTube,
    },
    {
      title: t('svc.sports.title'),
      description: t('svc.sports.desc'),
      bullets: [t('svc.sports.1'), t('svc.sports.2')],
      icon: Trophy,
    },
    {
      title: t('svc.misc.title'),
      description: t('svc.misc.desc'),
      bullets: [t('svc.misc.1'), t('svc.misc.2'), t('svc.misc.3')],
      icon: ClipboardPlus,
    },
  ];

  return (
    <section className="pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6 border-b border-neutral-100 pb-8">
          <div>
            <h2 className="text-3xl font-heading font-bold text-dark mb-2">{t('services.grid.title')}</h2>
            <p className="text-neutral-500">
              {t('services.grid.desc')}
            </p>
          </div>
          <Link 
            to="/pricing" 
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full font-heading font-semibold text-sm transition-all duration-300 active:scale-95 shadow-sm hover:-translate-y-0.5 bg-dark text-white hover:bg-primary hover:shadow-md"
          >
            {t('services.viewPricing')} <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-neutral-50 rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-neutral-100 group hover:-translate-y-1 flex flex-col"
            >
              <div className="w-14 h-14 rounded-2xl bg-white text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300 shadow-sm border border-neutral-100">
                <service.icon className="h-7 w-7" />
              </div>
              
              <h3 className="text-xl font-heading font-bold text-dark mb-3">{service.title}</h3>
              <p className="text-neutral-500 text-sm leading-relaxed mb-6 flex-grow">
                {service.description}
              </p>
              
              {service.bullets.length > 0 && (
                <div className="pt-4 border-t border-neutral-200">
                  <ul className="space-y-2">
                    {service.bullets.map((bullet, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-neutral-600 font-medium">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary/60" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};