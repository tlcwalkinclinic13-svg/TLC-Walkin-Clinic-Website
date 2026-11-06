import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, FlaskConical, MapPin, Phone, TestTube } from 'lucide-react';
import { Button } from '../components/Button';
import { useLanguage } from '../context/LanguageContext';

export const LabTestingPage: React.FC = () => {
  const { language } = useLanguage();
  const es = language === 'es';

  const copy = es ? {
    label: 'PRUEBAS DE LABORATORIO · BETHANY, OK',
    title: 'Pruebas de laboratorio en Bethany, OK',
    intro: 'TLC Walk-in Clinic ofrece pruebas en la clínica y extracción de sangre para estudios enviados a DLO. Se requiere una consulta con un profesional para determinar qué pruebas son apropiadas.',
    call: 'Llame al (405) 470-3232', directions: 'Cómo llegar',
    options: 'Pruebas disponibles',
    tests: [['COVID-19 e influenza', '$30'], ['Estreptococo', '$15'], ['Glucosa por punción digital', '$10'], ['Análisis de orina', '$25'], ['Prueba de embarazo en orina', '$10'], ['Prueba cutánea de tuberculosis', '$30']],
    priceNote: 'Precios actuales de pago por cuenta propia. Los precios pueden cambiar y pueden aplicarse cargos por la consulta u otros servicios.',
    process: 'Cómo funciona',
    steps: [['1. Consulta con un profesional', 'Se requiere una consulta para revisar sus síntomas, historial y las pruebas apropiadas.'], ['2. Prueba o extracción', 'Las pruebas disponibles se realizan en la clínica. La sangre para estudios adicionales se extrae en TLC y se envía a DLO.'], ['3. Resultados', 'Las pruebas realizadas en la clínica tienen resultados el mismo día. Los resultados enviados a DLO generalmente regresan en 24–48 horas.']],
    dlo: 'Análisis de sangre enviados a DLO',
    dloText: 'TLC puede extraer sangre en la clínica para paneles integrales y estudios específicos ordenados durante su consulta. El tiempo de respuesta habitual de DLO es de 24–48 horas, aunque puede variar según la prueba.',
    visit: 'Visite TLC Walk-in Clinic', hours: 'Lunes a viernes · 8:00 a. m.–5:30 p. m.',
    faq: 'Preguntas frecuentes',
    questions: [['¿Puedo acudir solo para hacerme una prueba?', 'Se requiere una consulta con un profesional para determinar qué prueba es apropiada.'], ['¿Las pruebas se realizan en la clínica?', 'Las pruebas rápidas disponibles se realizan en TLC. También extraemos sangre en la clínica para estudios enviados a DLO.'], ['¿Cuándo recibiré los resultados?', 'Las pruebas realizadas en la clínica tienen resultados el mismo día. Los resultados enviados a DLO generalmente regresan en 24–48 horas, según la prueba.'], ['¿Aceptan seguro?', 'La cobertura depende de su plan y de la prueba. Consulte nuestra página de seguros o llame a su aseguradora para verificar la cobertura.']],
    services: 'Ver todos los servicios', pricing: 'Ver precios', insurance: 'Información de seguros', urgent: 'Atención urgente en Bethany',
  } : {
    label: 'LAB TESTING · BETHANY, OK',
    title: 'Lab Testing in Bethany, OK',
    intro: 'TLC Walk-in Clinic provides in-house testing and blood collection for studies sent to DLO. A provider visit is required to determine which testing is appropriate.',
    call: 'Call (405) 470-3232', directions: 'Get directions',
    options: 'Available lab testing',
    tests: [['COVID-19 and flu test', '$30'], ['Strep test', '$15'], ['Glucose finger stick', '$10'], ['Urinalysis', '$25'], ['Urine pregnancy test', '$10'], ['TB skin test', '$30']],
    priceNote: 'Current self-pay prices. Prices may change, and office-visit or additional service charges may apply.',
    process: 'How lab testing works',
    steps: [['1. Provider visit', 'A provider visit is required to review your symptoms, history, and appropriate testing.'], ['2. Testing or collection', 'Available tests are performed in the clinic. Blood for additional studies is collected at TLC and sent to DLO.'], ['3. Results', 'In-house tests have same-day results. Tests sent to DLO generally return in 24–48 hours.']],
    dlo: 'Bloodwork sent to DLO',
    dloText: 'TLC can collect blood in the clinic for comprehensive panels and specific screenings ordered during your visit. DLO results generally return within 24–48 hours, although timing can vary by test.',
    visit: 'Visit TLC Walk-in Clinic', hours: 'Monday–Friday · 8:00 AM–5:30 PM',
    faq: 'Frequently asked questions',
    questions: [['Can I walk in only for a test?', 'A provider visit is required so the appropriate test can be selected for your symptoms or concern.'], ['Are tests performed in the clinic?', 'Available rapid tests are performed at TLC. We also collect blood in the clinic for studies sent to DLO.'], ['When will I receive results?', 'In-house tests have same-day results. Results from DLO generally return within 24–48 hours, depending on the test.'], ['Do you accept insurance for lab testing?', 'Coverage depends on your plan and the test. Review our insurance page or contact your insurer to verify coverage.']],
    services: 'Explore all services', pricing: 'View self-pay pricing', insurance: 'Insurance information', urgent: 'Urgent care in Bethany',
  };

  return <div lang={language} className="max-w-7xl mx-auto px-6 pt-6 pb-16">
    <section className="rounded-3xl bg-neutral-50 p-8 md:p-14 mb-14 grid lg:grid-cols-3 gap-10 items-center">
      <div className="lg:col-span-2"><p className="text-primary text-xs font-bold tracking-widest mb-5">{copy.label}</p><h1 className="font-heading text-4xl md:text-6xl font-bold text-dark mb-6">{copy.title}</h1><p className="text-lg text-neutral-600 leading-relaxed mb-8 max-w-3xl">{copy.intro}</p><div className="flex flex-wrap gap-3"><Button href="tel:4054703232"><Phone size={18} />{copy.call}</Button><Button variant="white" href="https://www.google.com/maps/dir//7900+NW+23rd+St+%231,+Bethany,+OK+73008" target="_blank" rel="noopener noreferrer"><MapPin size={18} />{copy.directions}</Button></div></div>
      <FlaskConical className="hidden lg:block w-36 h-36 text-primary mx-auto" aria-hidden="true" />
    </section>

    <section className="mb-14"><h2 className="font-heading text-3xl font-bold mb-7">{copy.options}</h2><div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">{copy.tests.map(([test, price]) => <article key={test} className="border border-neutral-200 rounded-2xl p-5 flex items-center justify-between gap-4"><span className="font-semibold text-dark">{test}</span><span className="font-bold text-primary">{price}</span></article>)}</div><p className="text-sm text-neutral-500 mt-5">{copy.priceNote}</p></section>

    <section className="mb-14"><h2 className="font-heading text-3xl font-bold mb-7">{copy.process}</h2><div className="grid md:grid-cols-3 gap-5">{copy.steps.map(([title, body], index) => <article key={title} className="rounded-3xl bg-primary/5 p-7">{index === 0 ? <TestTube className="text-primary mb-5" /> : index === 1 ? <FlaskConical className="text-primary mb-5" /> : <Clock className="text-primary mb-5" />}<h3 className="font-heading text-xl font-bold mb-3">{title}</h3><p className="text-neutral-600 leading-relaxed">{body}</p></article>)}</div></section>

    <div className="grid md:grid-cols-2 gap-6 mb-14"><section className="rounded-3xl bg-dark text-white p-8"><h2 className="font-heading text-2xl font-bold mb-4">{copy.dlo}</h2><p className="text-neutral-300 leading-relaxed">{copy.dloText}</p></section><section className="rounded-3xl bg-neutral-50 p-8"><h2 className="font-heading text-2xl font-bold mb-4">{copy.visit}</h2><p className="flex gap-3 mb-4"><MapPin className="text-primary shrink-0" />7900 NW 23rd St, Suite #1<br />Bethany, OK 73008</p><p className="flex gap-3 text-neutral-600"><Clock className="text-primary shrink-0" />{copy.hours}</p></section></div>

    <section className="max-w-3xl mx-auto mb-12"><h2 className="font-heading text-3xl font-bold mb-6">{copy.faq}</h2>{copy.questions.map(([question, answer]) => <details key={question} className="border-b border-neutral-200 py-5"><summary className="cursor-pointer font-heading font-semibold text-lg">{question}</summary><p className="text-neutral-600 leading-relaxed mt-4">{answer}</p></details>)}</section>
    <nav className="flex flex-wrap justify-center gap-6 text-primary font-semibold"><Link to="/services" className="underline">{copy.services}</Link><Link to="/pricing" className="underline">{copy.pricing}</Link><Link to="/insurance" className="underline">{copy.insurance}</Link><Link to="/urgent-care-bethany-ok" className="underline">{copy.urgent}</Link></nav>
  </div>;
};
