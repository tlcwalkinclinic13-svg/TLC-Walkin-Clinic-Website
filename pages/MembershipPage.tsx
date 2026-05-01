import React, { useState } from 'react';
import { Phone, Info, Users, User, UserPlus } from 'lucide-react';

export const MembershipPage: React.FC = () => {
  const [contractTerm, setContractTerm] = useState<'1year' | '6month'>('1year');

  const plans = [
    {
      title: 'Single Adult',
      subtitle: '1 Individual',
      icon: User,
      price1Year: 50,
      price6Month: 65,
    },
    {
      title: 'Couple',
      subtitle: '2 Individuals',
      icon: Users,
      price1Year: 100,
      price6Month: 115,
    },
    {
      title: 'Small Family',
      subtitle: '3-4 Individuals',
      icon: UserPlus,
      price1Year: 150,
      price6Month: 165,
    },
    {
      title: 'Large Family',
      subtitle: 'More than 4 individuals',
      icon: Users,
      price1Year: 200,
      price6Month: 215,
    }
  ];

  return (
    <div className="bg-neutral-50 min-h-screen pb-24">
      {/* Header */}
      <div className="bg-neutral-50 pt-24 pb-12 px-6 text-center">
        <div className="max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-bold tracking-wide uppercase mb-6 shadow-sm">
            Exclusive Program
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-black mb-6 leading-[1.1] tracking-tight text-dark">
            TLC Direct <br className="hidden md:block" />
            <span className="text-primary">Walk-In Care Membership</span>
          </h1>
        </div>
      </div>

      {/* Hook Section (Red Box) */}
      <div className="max-w-5xl mx-auto px-6 mb-16">
        <div className="bg-primary rounded-[2rem] p-8 md:p-12 shadow-2xl text-left border border-primary-dark/20 relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-red-600 rounded-full blur-[80px] opacity-70 -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-black rounded-full blur-[100px] opacity-30 translate-y-1/2 -translate-x-1/2"></div>

          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl mb-6 text-white font-heading font-extrabold">
              Are you tired of dealing with insurances?
            </h2>
            <p className="text-lg md:text-xl text-red-50 leading-relaxed font-medium mb-10 max-w-3xl">
              Direct Walk-in Care is a clinic membership for patients lacking insurance, patients with high deductibles, or anyone wanting to add to their healthcare coverage. Contracts come in 6 month or 1 year timeframes with <strong className="text-white">$10 co-pays</strong>. It's a membership that provides quality healthcare for an affordable price. Clients may utilize the plan with unlimited visits during the contract and receive significant discounted prices on all services.
            </p>

            <div className="inline-flex flex-col sm:flex-row items-center gap-4 flex-wrap">
              <a href="tel:4054703232" className="inline-flex items-center justify-center gap-3 bg-white text-primary font-bold px-8 py-4 rounded-xl shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all text-lg w-full sm:w-auto">
                <Phone className="w-6 h-6" /> 
                Call (405) 470-3232
              </a>
              <a 
                href="/discounted-prices.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-transparent text-white border-2 border-white/30 font-bold px-6 py-4 rounded-xl hover:bg-white/10 transition-all text-lg w-full sm:w-auto"
              >
                View Discounted Services
              </a>
            </div>
            <p className="text-red-100 font-medium mt-4">or ask the front desk for more information.</p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6">
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-neutral-100 mb-12">
          
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold font-heading text-dark mb-4">Plan Options & Pricing</h2>
            <p className="text-neutral-500 mb-8 max-w-2xl mx-auto">
              Select a contract length to view monthly pricing. All plans include a $10 copay due at time of service.
            </p>
            
            {/* Toggle */}
            <div className="inline-flex items-center bg-neutral-100 p-1.5 rounded-full mx-auto shadow-inner">
              <button
                onClick={() => setContractTerm('1year')}
                className={`relative px-8 py-3 rounded-full text-sm font-bold transition-all duration-300 ${
                  contractTerm === '1year'
                    ? 'bg-primary text-white shadow-md'
                    : 'text-neutral-500 hover:text-dark'
                }`}
              >
                1 Year Contract
              </button>
              <button
                onClick={() => setContractTerm('6month')}
                className={`relative px-8 py-3 rounded-full text-sm font-bold transition-all duration-300 ${
                  contractTerm === '6month'
                    ? 'bg-primary text-white shadow-md'
                    : 'text-neutral-500 hover:text-dark'
                }`}
              >
                6 Month Contract
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {plans.map((plan, idx) => {
              const Icon = plan.icon;
              const price = contractTerm === '1year' ? plan.price1Year : plan.price6Month;
              
              return (
                <div key={idx} className="bg-neutral-50 rounded-2xl p-6 border border-neutral-200 hover:border-primary/30 transition-colors flex flex-col items-center text-center relative overflow-hidden group">
                  {/* Decorative accent */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-primary-light transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
                  
                  <div className="w-14 h-14 bg-white shadow-sm rounded-xl flex items-center justify-center text-primary mb-6">
                    <Icon className="w-7 h-7" />
                  </div>
                  
                  <h3 className="text-xl font-bold font-heading text-dark mb-1">{plan.title}</h3>
                  <p className="text-sm text-neutral-500 font-medium mb-6 uppercase tracking-wider">{plan.subtitle}</p>
                  
                  <div className="mt-auto pt-6 border-t border-neutral-200 w-full">
                    <div className="flex items-baseline justify-center mb-4">
                      <span className="text-4xl font-extrabold text-dark">${price}</span>
                      <span className="text-neutral-500 ml-1">/mo</span>
                    </div>
                    
                    <div className="flex items-start gap-2 text-left bg-blue-50 text-primary-dark p-3 rounded-lg text-sm">
                      <Info className="w-4 h-4 shrink-0 mt-0.5 text-primary" />
                      <span><strong>$10 copay</strong> due at time of service</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          
        </div>
      </div>
    </div>
  );
};
