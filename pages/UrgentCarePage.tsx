import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, MapPin, Phone, Stethoscope } from 'lucide-react';
import { Button } from '../components/Button';
import { useLanguage } from '../context/LanguageContext';

export const UrgentCarePage: React.FC = () => {
  const { language } = useLanguage();
  const es = language === 'es';
  const copy = es ? {
    label: 'TLC WALK-IN CLINIC · BETHANY, OK', title: 'Atención urgente, cerca de casa.',
    intro: 'Atención sin cita para enfermedades y lesiones menores en Bethany, Oklahoma. Nuestro equipo bilingüe le ayuda a dar el siguiente paso para sentirse mejor.',
    call: 'Llame al (405) 470-3232', directions: 'Cómo llegar', visit: 'Planifique su visita', hours: 'Lunes a viernes · 8:00 a. m.–5:30 p. m.', closed: 'Sábado y domingo: cerrado. Llame para confirmar horarios de días festivos.',
    care: 'Atención para sus necesidades cotidianas', careIntro: 'Un profesional evaluará sus síntomas y le orientará sobre el tratamiento o los siguientes pasos.',
    cards: [['Enfermedades comunes', 'Evaluación de síntomas respiratorios y molestias gastrointestinales.'], ['Lesiones menores', 'Evaluación de lesiones y procedimientos menores según sus necesidades.'], ['Radiografías y pruebas', 'Radiografías y pruebas de laboratorio cuando el profesional las considere apropiadas.']],
    services: 'Ver todos los servicios', prepare: 'Qué traer', items: ['Una identificación con foto.', 'Su tarjeta de seguro, si tiene cobertura.', 'Una lista de medicamentos actuales y alergias.'],
    payment: 'Seguro y opciones de pago', paymentText: 'Revise nuestras opciones de seguro y precios para pacientes que pagan por su cuenta. Llame si tiene preguntas sobre cobertura o costos antes de su visita.', insurance: 'Información de seguros', pricing: 'Ver precios',
    faq: 'Preguntas frecuentes', questions: [['¿Necesito una cita?', 'No necesita cita para la atención urgente general. Visítenos durante el horario de atención; el tiempo de espera puede variar.'], ['¿Dónde está la clínica?', 'Estamos en 7900 NW 23rd St, Suite #1, Bethany, OK 73008. Use el botón Cómo llegar para planificar su visita.'], ['¿Puedo acudir sin seguro?', 'Tenemos opciones de pago por cuenta propia. Consulte la página de precios o llame para preguntar por el servicio que necesita.'], ['¿Hay atención en español?', 'Nuestro equipo es bilingüe. Llámenos si tiene preguntas sobre su visita.']],
  } : {
    label: 'TLC WALK-IN CLINIC · BETHANY, OK', title: 'Urgent care, close to home.',
    intro: 'Walk-in care for illnesses and minor injuries in Bethany, Oklahoma. Our bilingual team helps you take the next step toward feeling better.',
    call: 'Call (405) 470-3232', directions: 'Get directions', visit: 'Plan your visit', hours: 'Monday–Friday · 8:00 AM–5:30 PM', closed: 'Saturday & Sunday: closed. Call to confirm holiday hours.',
    care: 'Care for everyday health needs', careIntro: 'A provider will evaluate your symptoms and guide you through treatment or next steps.',
    cards: [['Common illnesses', 'Evaluation of respiratory symptoms and gastrointestinal concerns.'], ['Minor injuries', 'Injury evaluation and minor procedures based on your needs.'], ['X-rays & testing', 'X-rays and laboratory testing when your provider determines they are appropriate.']],
    services: 'Explore all services', prepare: 'What to bring', items: ['A photo ID.', 'Your insurance card, if you have coverage.', 'A list of your current medications and allergies.'],
    payment: 'Insurance & self-pay options', paymentText: 'Explore insurance information and self-pay pricing. Call with questions about coverage or costs before your visit.', insurance: 'Insurance information', pricing: 'View pricing',
    faq: 'Frequently asked questions', questions: [['Do I need an appointment?', 'No appointment is needed for general urgent care. Walk in during clinic hours; wait times can vary.'], ['Where is the clinic?', 'Find us at 7900 NW 23rd St, Suite #1, Bethany, OK 73008. Use Get directions to plan your visit.'], ['Can I visit without insurance?', 'Self-pay options are available. See our pricing page or call to ask about the service you need.'], ['Is Spanish-language assistance available?', 'Our team is bilingual. Please call if you have questions about your visit.']],
  };
  return (
    <div lang={language} className="max-w-7xl mx-auto px-6 pt-6 pb-12">
      <div className="grid lg:grid-cols-5 gap-6 mb-16">
        <section className="lg:col-span-3 bg-neutral-50 rounded-3xl p-7 md:p-12">
          <p className="text-primary text-xs font-bold tracking-widest mb-6">{copy.label}</p>
          <h1 className="font-heading font-bold text-4xl md:text-6xl leading-tight text-dark mb-6">{es ? 'Atención urgente en Bethany, OK' : 'Urgent Care in Bethany, OK'}</h1>
          <p className="font-heading text-xl font-semibold mb-4">{copy.title}</p>
          <p className="text-neutral-600 text-lg leading-relaxed mb-8">{copy.intro}</p>
          <div className="flex flex-wrap gap-3"><Button href="tel:4054703232"><Phone size={18} aria-hidden="true" />{copy.call}</Button><Button variant="white" href="https://www.google.com/maps/dir//7900+NW+23rd+St+%231,+Bethany,+OK+73008" target="_blank" rel="noopener noreferrer"><MapPin size={18} aria-hidden="true" />{copy.directions}</Button></div>
        </section>
        <aside className="lg:col-span-2 rounded-3xl bg-dark text-white overflow-hidden">
          <img src="/tlc-staff.jpg" alt={es ? 'Equipo de TLC Walk-in Clinic' : 'TLC Walk-in Clinic team'} className="w-full h-56 object-cover" />
          <div className="p-7 md:p-8"><h2 className="font-heading text-2xl font-bold mb-5">{copy.visit}</h2><p className="flex gap-3 mb-4"><MapPin className="shrink-0" aria-hidden="true" /><span>7900 NW 23rd St, Suite #1<br />Bethany, OK 73008</span></p><p className="flex gap-3 mb-3"><Clock className="shrink-0" aria-hidden="true" /><span>{copy.hours}</span></p><p className="text-neutral-300 text-sm leading-relaxed">{copy.closed}</p></div>
        </aside>
      </div>
      <section className="mb-16"><h2 className="text-3xl font-heading font-bold mb-4">{copy.care}</h2><p className="text-neutral-600 mb-7 max-w-2xl">{copy.careIntro}</p><div className="grid md:grid-cols-3 gap-5">{copy.cards.map(([title, body]) => <article key={title} className="border border-neutral-200 rounded-3xl p-7"><Stethoscope className="text-primary mb-5" aria-hidden="true" /><h3 className="text-xl font-heading font-bold mb-3">{title}</h3><p className="text-neutral-600 leading-relaxed">{body}</p></article>)}</div><Link to="/services" className="inline-flex items-center gap-2 text-primary font-semibold mt-6 hover:underline">{copy.services}<ArrowRight size={18} aria-hidden="true" /></Link></section>
      <div className="grid md:grid-cols-2 gap-6 mb-16"><section className="rounded-3xl bg-neutral-50 p-8"><h2 className="text-2xl font-heading font-bold mb-5">{copy.prepare}</h2><ul className="list-disc pl-5 space-y-3 text-neutral-600">{copy.items.map(item => <li key={item}>{item}</li>)}</ul></section><section className="rounded-3xl bg-primary/5 p-8"><h2 className="text-2xl font-heading font-bold mb-5">{copy.payment}</h2><p className="text-neutral-600 leading-relaxed mb-5">{copy.paymentText}</p><div className="flex flex-wrap gap-5"><Link to="/insurance" className="text-primary font-semibold underline">{copy.insurance}</Link><Link to="/pricing" className="text-primary font-semibold underline">{copy.pricing}</Link></div></section></div>
      <section className="max-w-3xl mx-auto"><h2 className="font-heading text-3xl font-bold mb-7">{copy.faq}</h2>{copy.questions.map(([question, answer]) => <details key={question} className="border-b border-neutral-200 py-5"><summary className="cursor-pointer font-heading font-semibold text-lg focus-visible:outline-primary">{question}</summary><p className="text-neutral-600 leading-relaxed mt-4">{answer}</p></details>)}</section>
    </div>
  );
};
