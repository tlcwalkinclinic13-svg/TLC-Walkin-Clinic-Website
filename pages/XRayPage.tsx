import React from 'react';
import { Link } from 'react-router-dom';
import { Bone, Clock, MapPin, Phone } from 'lucide-react';
import { Button } from '../components/Button';
import { useLanguage } from '../context/LanguageContext';

export const XRayPage: React.FC = () => {
  const { language } = useLanguage();
  const es = language === 'es';

  const copy = es ? {
    label: 'RADIOGRAFÍAS EN EL SITIO · BETHANY, OK',
    title: 'Radiografías en Bethany, OK',
    intro: 'TLC Walk-in Clinic ofrece radiografías simples en el sitio para todas las partes del cuerpo cuando son apropiadas para su evaluación. Nuestro equipo puede evaluar su lesión o preocupación y explicarle los siguientes pasos.',
    call: 'Llame al (405) 470-3232', directions: 'Cómo llegar',
    details: 'Radiografías disponibles en TLC',
    cards: [
      ['En el sitio', 'Las radiografías simples se realizan en nuestra clínica de Bethany.'],
      ['Todas las partes del cuerpo', 'Ofrecemos radiografías simples de todas las partes del cuerpo cuando sean apropiadas para la evaluación.'],
      ['$70 por radiografía', 'El precio actual de pago por cuenta propia es de $70 por radiografía. Llame si tiene preguntas sobre costos o cobertura.'],
    ],
    expect: 'Qué esperar',
    steps: ['Un profesional evaluará su lesión o preocupación.', 'Si una radiografía es apropiada, se puede realizar en el sitio.', 'El equipo revisará los resultados disponibles y explicará el tratamiento, seguimiento o referencia recomendados.'],
    emergency: 'Cuándo buscar atención de emergencia',
    emergencyText: 'Llame al 911 o acuda al departamento de emergencias por lesiones graves, sangrado incontrolable, deformidad severa, pérdida de conciencia, dificultad para respirar u otros síntomas potencialmente mortales.',
    visit: 'Visite nuestra clínica en Bethany',
    hours: 'Lunes a viernes · 8:00 a. m.–5:30 p. m.',
    faq: 'Preguntas frecuentes',
    questions: [
      ['¿Las radiografías se realizan en el sitio?', 'Sí. TLC Walk-in Clinic realiza radiografías simples en el sitio.'],
      ['¿Qué partes del cuerpo pueden radiografiarse?', 'Ofrecemos radiografías simples de todas las partes del cuerpo cuando sean apropiadas para su evaluación.'],
      ['¿Cuánto cuesta una radiografía?', 'El precio actual de pago por cuenta propia es de $70 por radiografía. Llame para confirmar los costos relacionados con su visita.'],
      ['¿Una radiografía garantiza un diagnóstico?', 'No. Un profesional evaluará sus síntomas y determinará los siguientes pasos, que pueden incluir tratamiento, seguimiento, más pruebas o referencia.'],
    ],
    services: 'Ver todos los servicios', pricing: 'Ver precios', urgent: 'Atención urgente en Bethany',
  } : {
    label: 'ON-SITE X-RAYS · BETHANY, OK',
    title: 'X-Rays in Bethany, OK',
    intro: 'TLC Walk-in Clinic provides on-site plain X-rays for all body parts when imaging is appropriate for your evaluation. Our team can evaluate your injury or concern and explain the recommended next steps.',
    call: 'Call (405) 470-3232', directions: 'Get directions',
    details: 'X-ray services available at TLC',
    cards: [
      ['On-site imaging', 'Plain X-rays are performed at our Bethany clinic.'],
      ['All body parts', 'We offer plain X-rays of all body parts when imaging is appropriate for the evaluation.'],
      ['$70 per X-ray', 'The current self-pay price is $70 per X-ray. Call with questions about costs or insurance coverage.'],
    ],
    expect: 'What to expect',
    steps: ['A provider evaluates your injury or concern.', 'If an X-ray is appropriate, it can be performed on-site.', 'The team reviews the available results and explains recommended treatment, follow-up, or referral.'],
    emergency: 'When to seek emergency care',
    emergencyText: 'Call 911 or go to an emergency department for major trauma, uncontrolled bleeding, severe deformity, loss of consciousness, difficulty breathing, or other potentially life-threatening symptoms.',
    visit: 'Visit our Bethany clinic',
    hours: 'Monday–Friday · 8:00 AM–5:30 PM',
    faq: 'Frequently asked questions',
    questions: [
      ['Are X-rays performed on-site?', 'Yes. TLC Walk-in Clinic performs plain X-rays on-site.'],
      ['What body parts can be X-rayed?', 'We offer plain X-rays of all body parts when imaging is appropriate for your evaluation.'],
      ['How much does an X-ray cost?', 'The current self-pay price is $70 per X-ray. Call to confirm costs related to your visit.'],
      ['Does an X-ray guarantee a diagnosis?', 'No. A provider evaluates your symptoms and determines the next steps, which may include treatment, follow-up, additional testing, or referral.'],
    ],
    services: 'Explore all services', pricing: 'View self-pay pricing', urgent: 'Urgent care in Bethany',
  };

  return <div lang={language} className="max-w-7xl mx-auto px-6 pt-6 pb-16">
    <section className="rounded-3xl bg-neutral-50 p-8 md:p-14 mb-14 grid lg:grid-cols-3 gap-10 items-center">
      <div className="lg:col-span-2"><p className="text-primary text-xs font-bold tracking-widest mb-5">{copy.label}</p><h1 className="font-heading text-4xl md:text-6xl font-bold text-dark mb-6">{copy.title}</h1><p className="text-lg text-neutral-600 leading-relaxed mb-8 max-w-3xl">{copy.intro}</p><div className="flex flex-wrap gap-3"><Button href="tel:4054703232"><Phone size={18} />{copy.call}</Button><Button variant="white" href="https://www.google.com/maps/dir//7900+NW+23rd+St+%231,+Bethany,+OK+73008" target="_blank" rel="noopener noreferrer"><MapPin size={18} />{copy.directions}</Button></div></div>
      <Bone className="hidden lg:block w-36 h-36 text-primary mx-auto" aria-hidden="true" />
    </section>

    <section className="mb-14"><h2 className="font-heading text-3xl font-bold mb-7">{copy.details}</h2><div className="grid md:grid-cols-3 gap-5">{copy.cards.map(([title, body]) => <article key={title} className="border border-neutral-200 rounded-3xl p-7"><h3 className="font-heading text-xl font-bold mb-3">{title}</h3><p className="text-neutral-600 leading-relaxed">{body}</p></article>)}</div></section>

    <div className="grid md:grid-cols-2 gap-6 mb-14"><section className="rounded-3xl bg-primary/5 p-8"><h2 className="font-heading text-2xl font-bold mb-5">{copy.expect}</h2><ol className="list-decimal pl-5 space-y-4 text-neutral-600">{copy.steps.map(step => <li key={step}>{step}</li>)}</ol></section><section className="rounded-3xl bg-neutral-50 p-8"><h2 className="font-heading text-2xl font-bold mb-5">{copy.visit}</h2><p className="flex gap-3 mb-4"><MapPin className="text-primary shrink-0" />7900 NW 23rd St, Suite #1<br />Bethany, OK 73008</p><p className="flex gap-3 text-neutral-600"><Clock className="text-primary shrink-0" />{copy.hours}</p></section></div>

    <section className="rounded-3xl bg-dark text-white p-8 mb-14"><h2 className="font-heading text-2xl font-bold mb-3">{copy.emergency}</h2><p className="text-neutral-300 leading-relaxed">{copy.emergencyText}</p></section>

    <section className="max-w-3xl mx-auto mb-12"><h2 className="font-heading text-3xl font-bold mb-6">{copy.faq}</h2>{copy.questions.map(([question, answer]) => <details key={question} className="border-b border-neutral-200 py-5"><summary className="cursor-pointer font-heading font-semibold text-lg">{question}</summary><p className="text-neutral-600 leading-relaxed mt-4">{answer}</p></details>)}</section>
    <nav className="flex flex-wrap justify-center gap-6 text-primary font-semibold"><Link to="/services" className="underline">{copy.services}</Link><Link to="/pricing" className="underline">{copy.pricing}</Link><Link to="/urgent-care-bethany-ok" className="underline">{copy.urgent}</Link></nav>
  </div>;
};
