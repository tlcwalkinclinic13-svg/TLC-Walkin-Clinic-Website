import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

export const LocalCareSection: React.FC = () => {
  const { language } = useLanguage();
  const es = language === 'es';
  return (
    <section aria-labelledby="local-care-heading" className="px-4 md:px-6 py-12">
      <div className="max-w-7xl mx-auto rounded-3xl bg-neutral-50 border border-neutral-100 p-8 md:p-12 grid md:grid-cols-2 gap-10">
        <div>
          <h2 id="local-care-heading" className="text-3xl md:text-4xl font-heading font-bold text-dark mb-5">
            {es ? 'Clínica sin cita en Bethany, OK' : 'Walk-in Clinic in Bethany, OK'}
          </h2>
          <p className="text-neutral-600 leading-relaxed mb-5">
            {es
              ? 'TLC Walk-in Clinic ofrece atención urgente para enfermedades y lesiones menores en Bethany, Oklahoma. No necesita cita para la atención urgente general. Nuestro equipo bilingüe ofrece asistencia en inglés y español.'
              : 'TLC Walk-in Clinic provides urgent care for illnesses and minor injuries in Bethany, Oklahoma. No appointment is needed for general urgent care. Our bilingual team offers assistance in English and Spanish.'}
          </p>
          <p className="text-neutral-600 leading-relaxed mb-6">
            {es
              ? 'Explore nuestros servicios de radiografías, pruebas de laboratorio y exámenes físicos. Revise los precios de pago por cuenta propia y la información de seguros, o llame si tiene preguntas sobre su visita.'
              : 'Explore our X-ray, laboratory testing, and physical exam services. Review self-pay pricing and insurance information, or call with questions about your visit.'}
          </p>
          <nav aria-label={es ? 'Información para su visita' : 'Information for your visit'} className="flex flex-wrap gap-x-6 gap-y-3 text-primary font-semibold">
            <Link to="/urgent-care-bethany-ok" className="underline hover:text-primary-dark">{es ? 'Atención urgente en Bethany, OK' : 'Urgent care in Bethany, OK'}</Link>
            <Link to="/services" className="underline hover:text-primary-dark">{es ? 'Servicios de la clínica' : 'Clinic services'}</Link>
            <Link to="/pricing" className="underline hover:text-primary-dark">{es ? 'Precios de pago por cuenta propia' : 'Self-pay pricing'}</Link>
            <Link to="/insurance" className="underline hover:text-primary-dark">{es ? 'Información de seguros' : 'Insurance information'}</Link>
          </nav>
        </div>
        <div>
          <h3 className="text-2xl font-heading font-bold text-dark mb-5">{es ? 'Visite TLC Walk-in Clinic' : 'Visit TLC Walk-in Clinic'}</h3>
          <address className="not-italic text-neutral-600 leading-relaxed mb-5">
            7900 NW 23rd St, Suite #1<br />Bethany, OK 73008<br />
            <a href="tel:4054703232" className="text-primary font-semibold hover:underline">(405) 470-3232</a>
          </address>
          <p className="text-neutral-600 mb-2">{es ? 'Lunes a viernes: 8:00 a. m.–5:30 p. m.' : 'Monday–Friday: 8:00 AM–5:30 PM'}</p>
          <p className="text-neutral-600 mb-5">{es ? 'Sábado y domingo: cerrado.' : 'Saturday & Sunday: closed.'}</p>
          <a href="https://www.google.com/maps/dir//7900+NW+23rd+St+%231,+Bethany,+OK+73008" target="_blank" rel="noopener noreferrer" className="text-primary font-semibold underline hover:text-primary-dark">{es ? 'Cómo llegar a nuestra clínica en Bethany' : 'Get directions to our Bethany clinic'}</a>
        </div>
      </div>
    </section>
  );
};
