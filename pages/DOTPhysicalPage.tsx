import React from 'react';
import { Link } from 'react-router-dom';
import { CalendarDays, FileText, MapPin, Phone, Truck } from 'lucide-react';
import { Button } from '../components/Button';
import { useLanguage } from '../context/LanguageContext';

export const DOTPhysicalPage: React.FC = () => {
  const { language } = useLanguage();
  const es = language === 'es';
  const copy = es ? {
    label: 'EXÁMENES DOT · BETHANY, OK', title: 'Exámenes físicos DOT en Bethany, OK',
    intro: 'TLC Walk-in Clinic ofrece exámenes físicos DOT por cita con un examinador médico certificado por la FMCSA disponible durante el horario de la clínica.',
    schedule: 'Llame para programar', directions: 'Cómo llegar',
    facts: [['Cita requerida', 'Los exámenes DOT se programan por cita debido a la disponibilidad de la sala específica.'], ['$100 por examen', 'El precio actual del examen físico DOT es de $100.'], ['Examinador FMCSA', 'Un examinador médico certificado por la FMCSA está disponible durante el horario de la clínica.']],
    bring: 'Qué traer a su cita', items: ['Identificación con foto y licencia de conducir.', 'Anteojos, lentes de contacto o audífonos que utilice.', 'Una lista de medicamentos actuales.', 'Registros médicos o documentación relacionada con condiciones médicas, si corresponde.'],
    process: 'Acerca del examen', processText: 'El examinador revisará su historial y completará los componentes requeridos del examen DOT. La duración de cualquier certificado depende de los hallazgos del examen y de los requisitos de la FMCSA. Programar un examen no garantiza la certificación.',
    forms: 'Formularios DOT', form1: 'Formulario MCSA-5875', form2: 'Certificado MCSA-5876',
    faq: 'Preguntas frecuentes', questions: [['¿Necesito una cita?', 'Sí. Los exámenes físicos DOT se realizan por cita debido a la disponibilidad de una sala específica.'], ['¿Cuánto cuesta?', 'El precio actual del examen físico DOT es de $100.'], ['¿Hay un examinador certificado disponible?', 'Sí. Un examinador médico certificado por la FMCSA está disponible durante el horario de la clínica. Llame para programar su cita.'], ['¿La cita garantiza un certificado?', 'No. La certificación y su duración dependen de los hallazgos del examen y de los requisitos de la FMCSA.']],
    services: 'Ver todos los servicios', pricing: 'Ver precios',
  } : {
    label: 'DOT PHYSICALS · BETHANY, OK', title: 'DOT Physical Exams in Bethany, OK',
    intro: 'TLC Walk-in Clinic provides appointment-based DOT physical exams with an FMCSA-certified medical examiner available during clinic hours.',
    schedule: 'Call to schedule', directions: 'Get directions',
    facts: [['Appointment required', 'DOT physicals are scheduled by appointment because a specific examination room is required.'], ['$100 per exam', 'The current price for a DOT physical exam is $100.'], ['FMCSA examiner', 'An FMCSA-certified medical examiner is available during clinic hours.']],
    bring: 'What to bring to your appointment', items: ['Photo identification and your driver license.', 'Eyeglasses, contact lenses, or hearing aids you use.', 'A list of your current medications.', 'Medical records or documentation related to medical conditions, when applicable.'],
    process: 'About the examination', processText: 'The examiner reviews your history and completes the required components of the DOT examination. The length of any certificate depends on the examination findings and FMCSA requirements. Scheduling an examination does not guarantee certification.',
    forms: 'DOT forms', form1: 'MCSA-5875 Examination Report', form2: 'MCSA-5876 Certificate',
    faq: 'Frequently asked questions', questions: [['Do I need an appointment?', 'Yes. DOT physicals are provided by appointment because a specific examination room is required.'], ['How much does a DOT physical cost?', 'The current price for a DOT physical exam is $100.'], ['Is a certified examiner available?', 'Yes. An FMCSA-certified medical examiner is available during clinic hours. Call to schedule your appointment.'], ['Does an appointment guarantee a certificate?', 'No. Certification and its duration depend on the examination findings and FMCSA requirements.']],
    services: 'Explore all services', pricing: 'View pricing',
  };

  return <div lang={language} className="max-w-7xl mx-auto px-6 pt-6 pb-16">
    <section className="rounded-3xl bg-dark text-white p-8 md:p-14 mb-14 grid lg:grid-cols-3 gap-10 items-center"><div className="lg:col-span-2"><p className="text-primary text-xs font-bold tracking-widest mb-5">{copy.label}</p><h1 className="font-heading text-4xl md:text-6xl font-bold mb-6">{copy.title}</h1><p className="text-lg text-neutral-300 leading-relaxed mb-8 max-w-3xl">{copy.intro}</p><div className="flex flex-wrap gap-3"><Button href="tel:4054703232"><Phone size={18} />{copy.schedule}</Button><Button variant="white" href="https://www.google.com/maps/dir//7900+NW+23rd+St+%231,+Bethany,+OK+73008" target="_blank" rel="noopener noreferrer"><MapPin size={18} />{copy.directions}</Button></div></div><Truck className="hidden lg:block w-36 h-36 text-primary mx-auto" aria-hidden="true" /></section>

    <section className="grid md:grid-cols-3 gap-5 mb-14">{copy.facts.map(([title, body], index) => <article key={title} className="border border-neutral-200 rounded-3xl p-7">{index === 0 && <CalendarDays className="text-primary mb-5" />}{index === 1 && <FileText className="text-primary mb-5" />}{index === 2 && <Truck className="text-primary mb-5" />}<h2 className="font-heading text-xl font-bold mb-3">{title}</h2><p className="text-neutral-600 leading-relaxed">{body}</p></article>)}</section>

    <div className="grid md:grid-cols-2 gap-6 mb-14"><section className="rounded-3xl bg-neutral-50 p-8"><h2 className="font-heading text-2xl font-bold mb-5">{copy.bring}</h2><ul className="list-disc pl-5 space-y-3 text-neutral-600">{copy.items.map(item => <li key={item}>{item}</li>)}</ul></section><section className="rounded-3xl bg-primary/5 p-8"><h2 className="font-heading text-2xl font-bold mb-5">{copy.process}</h2><p className="text-neutral-600 leading-relaxed">{copy.processText}</p></section></div>

    <section className="rounded-3xl border border-neutral-200 p-8 mb-14"><h2 className="font-heading text-2xl font-bold mb-5">{copy.forms}</h2><div className="flex flex-wrap gap-4"><a href="/MCSA-5875-DOT-Form.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-primary font-semibold underline"><FileText size={18} />{copy.form1}</a><a href="/MCSA-5876-DOT-Certificate.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-primary font-semibold underline"><FileText size={18} />{copy.form2}</a></div></section>

    <section className="max-w-3xl mx-auto mb-12"><h2 className="font-heading text-3xl font-bold mb-6">{copy.faq}</h2>{copy.questions.map(([question, answer]) => <details key={question} className="border-b border-neutral-200 py-5"><summary className="cursor-pointer font-heading font-semibold text-lg">{question}</summary><p className="text-neutral-600 leading-relaxed mt-4">{answer}</p></details>)}</section>
    <nav className="flex flex-wrap justify-center gap-6 text-primary font-semibold"><Link to="/services" className="underline">{copy.services}</Link><Link to="/pricing" className="underline">{copy.pricing}</Link></nav>
  </div>;
};
