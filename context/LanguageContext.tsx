
import React, { createContext, useState, useContext, ReactNode } from 'react';

type Language = 'en' | 'es';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Ticker
    'ticker.text': 'NO APPOINTMENTS NEEDED • WALK-IN BASIS ONLY • BILINGUAL STAFF',
    
    // Navbar
    'nav.home': 'Home',
    'nav.about': 'About Us',
    'nav.services': 'Services',
    'nav.telemedicine': 'Telemedicine',
    'nav.insurance': 'Insurance',
    'nav.pricing': 'Pricing',
    'nav.directions': 'Get Directions',
    'nav.subtitle': 'Walk-In Clinic',

    // Hero - Slide 1 (Original)
    'hero.open': 'Open Today until 5:30 PM',
    'hero.title': 'Personalized care for every stage of your wellness.',
    'hero.subtitle': 'Expert urgent care, sports physicals, and DOT exams in Bethany, OK. No appointment needed for general illness.',
    'hero.viewServices': 'View Services',

    // Hero - Slide 2 (Contact & Hours)
    'hero.contact.title': 'Visit Us Today',
    'hero.contact.subtitle': 'Conveniently located in Bethany, OK.',
    'hero.info.phone': 'Phone',
    'hero.info.fax': 'Fax',
    'hero.info.email': 'Email',
    'hero.hours.title': 'Clinic Hours',
    'hero.hours.monfri': 'Mon - Fri',
    'hero.hours.time': '8:00 AM – 5:30 PM',
    'hero.special.title': 'Special Notice:',
    'hero.special.msg': 'Closing Dec 25th for Christmas Day',

    // Steps
    'steps.label': 'Simple Process',
    'steps.title': 'How to Visit Us',
    'steps.desc': "We've streamlined our process to get you in, treated, and back home as quickly as possible.",
    'step1.title': 'Walk In',
    'step1.desc': 'No appointment needed for urgent care or sports physicals. Just bring your ID.',
    'step2.title': 'Quick Check-In',
    'step2.desc': 'Fill out simple paperwork (bilingual available) and see a provider quickly.',
    'step3.title': 'Get Care',
    'step3.desc': 'Receive expert treatment, prescriptions, or physical results instantly.',

    // Feature Sections
    'weight.label': 'Appointment Required',
    'weight.title': 'Medical Weight Loss Program',
    'weight.desc': 'Achieve your health goals safely with our medically supervised weight loss program. We provide personalized plans, monitoring, and support to help you succeed.',
    'weight.btn': 'Contact to Schedule',
    'dot.label': 'Commercial Drivers',
    'dot.title': 'Certified DOT Physical Exams',
    'dot.desc': 'We offer certified DOT Physical Exams for commercial drivers, ensuring you stay on the road legally and healthily. Fast turnaround and certified examiners.',
    'dot.btn': 'Contact to Schedule',
    'dot.form1': 'MCSA-5875 (Examination Report)',
    'dot.form2': 'MCSA-5876 (Medical Certificate)',

    // About Page
    'about.title': 'About Us',
    'about.subtitle': 'Quality Medical Care in Bethany, Oklahoma.',
    'about.heading': 'Committed to Your Health',
    'about.p1': 'TLC Walk-in Clinic is committed to providing high-quality medical care to the Bethany community and beyond. With a focus on patient-centered care, we strive to offer comprehensive medical services in a welcoming and compassionate environment.',
    'about.p2': 'Our clinic is dedicated to serving our patients with the utmost care and professionalism. We believe in building lasting relationships with our patients and their families, ensuring their well-being and satisfaction with our services.',
    'about.val1.title': 'Quality Care',
    'about.val1.desc': 'We are committed to providing high-quality medical care to the Bethany community and beyond.',
    'about.val2.title': 'Compassion',
    'about.val2.desc': 'We strive to offer comprehensive medical services in a welcoming and compassionate environment.',
    'about.val3.title': 'Relationships',
    'about.val3.desc': 'We believe in building lasting relationships with our patients and their families.',

    // Services Page
    'services.title': 'Our Services',
    'services.subtitle': 'Detailed information about the care we provide for you and your family.',
    'services.grid.title': 'Available Treatments',
    'services.grid.desc': 'Walk-ins welcome for all general services.',
    'services.viewPricing': 'View Pricing',
    
    // Service Items
    'svc.imaging.title': 'On-site Imaging',
    'svc.imaging.desc': 'We specialize in providing exceptional care for fractures, utilizing state-of-the-art XR technology to ensure accurate diagnosis.',
    'svc.imaging.1': 'Muscle Sprains', 'svc.imaging.2': 'Dislocations', 'svc.imaging.3': 'Fracturas',
    
    'svc.resp.title': 'Respiratory Symptoms',
    'svc.resp.desc': 'Point of care testing for Covid-19, Strep, Influenza A&B, RSV. We are equipped with breathing treatments for asthma.',
    'svc.resp.1': 'Cough/Congestion', 'svc.resp.2': 'Pneumonia', 'svc.resp.3': 'Sore throat', 'svc.resp.4': 'Ear infections', 'svc.resp.5': 'Sinus Infection',

    'svc.vax.title': 'Vaccinations',
    'svc.vax.desc': 'We provide influenza vaccinations during flu season and Tetanus vaccinations at the time of injury.',
    'svc.vax.1': 'Flu Shots', 'svc.vax.2': 'Tetanus',

    'svc.gastro.title': 'Gastrointestinal',
    'svc.gastro.desc': 'Testing for pregnancy, UTIs, and STI Testing along with associated symptoms like abdominal pain.',
    'svc.gastro.1': 'STDs/STIs', 'svc.gastro.2': 'Urinary Tract Infection', 'svc.gastro.3': 'Nausea/Vomiting',

    'svc.weight.title': 'Weight Loss',
    'svc.weight.desc': 'We offer weight loss consultation and treatment to help you achieve your health goals safely.',
    'svc.weight.1': 'Medical Consultation', 'svc.weight.2': 'Diet Planning',

    'svc.minor.title': 'Minor Procedures',
    'svc.minor.desc': 'We perform minor procedures including laceration repairs, toenail removals, and Incision & Drainage.',
    'svc.minor.1': 'Foreign Body Removal', 'svc.minor.2': 'Lacerations', 'svc.minor.3': 'Abscess I&D', 'svc.minor.4': 'Minor Burns',

    'svc.blood.title': 'Bloodwork',
    'svc.blood.desc': 'Partnered with DLO to draw certain labs depending on the work-up indicated.',
    'svc.blood.1': 'Comprehensive Panels', 'svc.blood.2': 'Specific Screenings',

    'svc.sports.title': 'Sports Physicals',
    'svc.sports.desc': 'We offer affordable sports physicals for K-12 and college students.',
    'svc.sports.1': '$20 Gradeschool Physical', 'svc.sports.2': '$30 College Physical',
    'svc.sports.form': 'Download OSSAA Physical Form (PDF)',

    'svc.misc.title': 'Miscellaneous',
    'svc.misc.desc': 'Various other services to meet your immediate healthcare needs.',
    'svc.misc.1': 'TB Testing', 'svc.misc.2': 'Ear Lavages', 'svc.misc.3': 'EKGs',

    // Pricing Page
    'pricing.title': 'Pricing',
    'pricing.subtitle': 'Transparent self-pay pricing for patients without insurance.',
    'pricing.card.title': 'Self-Pay Pricing',
    'pricing.card.subtitle': 'For patients without insurance',
    'pricing.disclaimer': '*Prices subject to change. Lab fees may apply to office visits.',
    
    // Price Items
    'price.office': 'Office Visit',
    'price.office.val': '$60 + additional services if needed',
    'price.sports': 'Gradeschool Sports Physical',
    'price.sports_college': 'College Sports Physical',
    'price.dot': 'DOT Physical Exam',
    'price.lac': 'Laceration Repair',
    'price.xray': 'X-Ray Imaging',
    'price.ear': 'Ear Lavage',
    'price.ekg': 'EKG',
    'price.glucose': 'Glucose Finger Stick',
    'price.std': 'Basic Urine STD Work Up',
    'price.std_blood': 'Blood STD Work Up',
    'price.covid': 'COVID-19 / Flu Test',
    'price.strep': 'Strep Test',
    'price.tb': 'TB Skin Test',
    'price.urine': 'Urinalysis',
    'price.preg': 'Urine Pregnancy Test',

    // Insurance Page
    'ins.title': 'Insurance',
    'ins.subtitle': 'Accepted plans and coverage information.',
    'ins.intro1': 'At TLC Walk-in Clinic, we accept a variety of insurance plans to make our services accessible to more individuals. If your plan is not listed, please contact your insurance company to verify if we are in-network.',
    'ins.intro2': 'If your insurance is not in-network, we will assist you in finding the best solution to suit your needs. We offer competitive self-pay pricing, please see the ',
    'ins.link': 'self-pay page',
    'ins.intro3': ' for more information.',
    'ins.card.req': 'Insurance Card Required',
    'ins.card.desc': 'We require a copy of your insurance card. This may either be in a physical form or emailed to us at time of visit.',
    'ins.sooner.title': 'SoonerSelect Policy',
    'ins.sooner.desc1': 'ALL patients under ',
    'ins.sooner.desc2': ' Medicaid (Humana, Aetna, Oklahoma Complete Health) MUST have a physical copy on file.',
    'ins.providers': 'Accepted Insurance Providers',
    'ins.notice': 'This Is Not A Proof of Eligibility At Our Clinic',

    // Telemedicine Page
    'tele.title': 'Telemedicine',
    'tele.subtitle': 'Quality medical care from the comfort of your home.',
    'tele.badge': 'Virtual Visits Available',
    'tele.heading': 'See a provider without leaving home.',
    'tele.desc': 'We are now offering telemedicine visits! You can be seen by one of our providers using your smartphone, tablet, or computer. This is a convenient option for minor illnesses and follow-up care.',
    'tele.treat.title': 'Great for treating:',
    'tele.treat.1': 'URI (Upper Respiratory Infection)',
    'tele.treat.2': 'Medication Refills',
    'tele.treat.3': 'Minor Injuries',
    'tele.treat.4': 'Other questions? Call to Clarify',
    'tele.eligibility': 'Eligibility & Payment',
    'tele.elig.1': 'Established Patients Only:',
    'tele.elig.2': 'These visits are for patients who have been seen at the clinic after',
    'tele.elig.3': '. You must have an updated email address and phone number on file as we will use this to connect you with the provider.',
    'tele.pay.1': 'Payment transactions will be done over the phone (Credit/Debit) or through our Venmo profile',
    'tele.pay.note': 'For more information please call the clinic.',
    'tele.ready': 'Ready to schedule?',
    'tele.btn': 'Call (405) 470-3232 to Book',
    'tele.compat': 'Compatible with:',
    'tele.phone': 'Phone', 'tele.tablet': 'Tablet', 'tele.comp': 'Computer',

    // Reviews
    'review.1.text': '"They were awesome! Clean, fast, kind, professional, friendly, good price, and extremely helpful for people who don\'t have insurance!"',
    'review.1.author': 'Google Review',
    'review.2.text': '"This place is under new management with new providers. It\'s a totally great experience from a few months ago. The MAs are caring and the providers Devin and Cassidy went well above to help me."',
    'review.2.author': 'J Watt',
    'review.3.text': '"I\'ve been taking my children there for years. The staff are welcoming never rude. Always helpful and caring..The staff always go the extra mile for you. Thank you TLC for all you do."',
    'review.3.author': 'Amelia Grimes',
    'review.4.text': '"The staff at TLC was excellent. They got my son in real quick. Doctor visit was only $60. That is very reasonable when you don’t have insurance. Thank you, TLC!"',
    'review.4.author': 'Sandra Green',

    // Footer
    'footer.desc': 'Expert urgent care in Bethany, Oklahoma. Dedicated to getting you healthy, fast.',
    'footer.visit': 'Visit Us',
    'footer.hours': 'Hours',
    'footer.resources': 'Resources',
    'footer.forms': 'New Patient Forms',
    'footer.privacy': 'Privacy Policy',
    'footer.portal': 'Patient Portal (Offline)',
    'footer.rights': 'All Rights Reserved.',
    'footer.monfri': 'Mon-Fri',
    'footer.sat': 'Sat',
    'footer.sun': 'Sun',
    'footer.closed': 'Closed',
  },
  es: {
    // Ticker
    'ticker.text': 'NO SE NECESITA CITA • SOLO POR ORDEN DE LLEGADA • PERSONAL BILINGÜE',

    // Navbar
    'nav.home': 'Inicio',
    'nav.about': 'Nosotros',
    'nav.services': 'Servicios',
    'nav.telemedicine': 'Telemedicina',
    'nav.insurance': 'Seguros',
    'nav.pricing': 'Precios',
    'nav.directions': 'Cómo Llegar',
    'nav.subtitle': 'Clínica Sin Cita',

    // Hero - Slide 1 (Original)
    'hero.open': 'Abierto hoy hasta las 5:30 PM',
    'hero.title': 'Atención personalizada para cada etapa de su bienestar.',
    'hero.subtitle': 'Atención de urgencia experta, exámenes físicos deportivos y exámenes DOT en Bethany, OK. No se necesita cita para enfermedades generales.',
    'hero.viewServices': 'Ver Servicios',

    // Hero - Slide 2 (Contact & Hours)
    'hero.contact.title': 'Visítenos Hoy',
    'hero.contact.subtitle': 'Ubicados convenientemente en Bethany, OK.',
    'hero.info.phone': 'Teléfono',
    'hero.info.fax': 'Fax',
    'hero.info.email': 'Correo',
    'hero.hours.title': 'Horario de la Clínica',
    'hero.hours.monfri': 'Lun - Vie',
    'hero.hours.time': '8:00 AM – 5:30 PM',
    'hero.special.title': 'Aviso Especial:',
    'hero.special.msg': 'Cerrado el 25 de Diciembre por Navidad',

    // Steps
    'steps.label': 'Proceso Simple',
    'steps.title': 'Cómo Visitarnos',
    'steps.desc': 'Hemos simplificado nuestro proceso para que ingrese, reciba tratamiento y regrese a casa lo más rápido posible.',
    'step1.title': 'Llegue sin Cita',
    'step1.desc': 'No se necesita cita para atención de urgencia o exámenes físicos deportivos. Solo traiga su identificación.',
    'step2.title': 'Registro Rápido',
    'step2.desc': 'Complete el papeleo simple (disponible en español) y vea a un proveedor rápidamente.',
    'step3.title': 'Reciba Atención',
    'step3.desc': 'Reciba tratamiento experto, recetas o resultados físicos al instante.',

    // Feature Sections
    'weight.label': 'Cita Requerida',
    'weight.title': 'Programa Médico de Pérdida de Peso',
    'weight.desc': 'Alcance sus objetivos de salud de forma segura con nuestro programa de pérdida de peso supervisado médicamente. Brindamos planes personalizados, monitoreo y apoyo.',
    'weight.btn': 'Contactar para Programar',
    'dot.label': 'Conductores Comerciales',
    'dot.title': 'Exámenes Físicos DOT Certificados',
    'dot.desc': 'Ofrecemos exámenes físicos DOT certificados para conductores comerciales, asegurando que permanezca en la carretera legal y saludablemente.',
    'dot.btn': 'Contactar para Programar',
    'dot.form1': 'MCSA-5875 (Informe de Examen)',
    'dot.form2': 'MCSA-5876 (Certificado Médico)',

     // About Page
    'about.title': 'Sobre Nosotros',
    'about.subtitle': 'Atención Médica de Calidad en Bethany, Oklahoma.',
    'about.heading': 'Comprometidos con su Salud',
    'about.p1': 'TLC Walk-in Clinic se compromete a brindar atención médica de alta calidad a la comunidad de Bethany y más allá. Con un enfoque en la atención centrada en el paciente, nos esforzamos por ofrecer servicios médicos integrales en un entorno acogedor y compasivo.',
    'about.p2': 'Nuestra clínica está dedicada a servir a nuestros pacientes con el mayor cuidado y profesionalismo. Creemos en construir relaciones duraderas con nuestros pacientes y sus familias, asegurando su bienestar y satisfacción con nuestros servicios.',
    'about.val1.title': 'Atención de Calidad',
    'about.val1.desc': 'Estamos comprometidos a brindar atención médica de alta calidad a la comunidad de Bethany y más allá.',
    'about.val2.title': 'Compasión',
    'about.val2.desc': 'Nos esforzamos por ofrecer servicios médicos integrales en un entorno acogedor y compasivo.',
    'about.val3.title': 'Relaciones',
    'about.val3.desc': 'Creemos en construir relaciones duraderas con nuestros pacientes y sus familias.',

    // Services Page
    'services.title': 'Nuestros Servicios',
    'services.subtitle': 'Información detallada sobre la atención que brindamos a usted y su familia.',
    'services.grid.title': 'Tratamientos Disponibles',
    'services.grid.desc': 'Se aceptan pacientes sin cita para todos los servicios generales.',
    'services.viewPricing': 'Ver Precios',

    // Service Items
    'svc.imaging.title': 'Imágenes en el sitio',
    'svc.imaging.desc': 'Nos especializamos en brindar atención excepcional para fracturas, utilizando tecnología XR de última generación para garantizar un diagnóstico preciso.',
    'svc.imaging.1': 'Esguinces Musculares', 'svc.imaging.2': 'Dislocaciones', 'svc.imaging.3': 'Fracturas',
    
    'svc.resp.title': 'Síúntomas Respiratorios',
    'svc.resp.desc': 'Pruebas en el punto de atención para Covid-19, Estreptococo, Influenza A y B, VSR. Estamos equipados con tratamientos respiratorios para el asma.',
    'svc.resp.1': 'Tos/Congestión', 'svc.resp.2': 'Neumonía', 'svc.resp.3': 'Dolor de garganta', 'svc.resp.4': 'Infecciones de oído', 'svc.resp.5': 'Infección Sinusal',

    'svc.vax.title': 'Vacunas',
    'svc.vax.desc': 'Ofrecemos vacunas contra la influenza durante la temporada de gripe y vacunas contra el tétanos en el momento de la lesión.',
    'svc.vax.1': 'Vacunas contra la gripe', 'svc.vax.2': 'Tétanos',

    'svc.gastro.title': 'Gastrointestinal',
    'svc.gastro.desc': 'Pruebas de embarazo, infecciones urinarias y pruebas de ETS junto con síntomas asociados como dolor abdominal.',
    'svc.gastro.1': 'ETS/ITS', 'svc.gastro.2': 'Infección del Tracto Urinario', 'svc.gastro.3': 'Náuseas/Vómitos',

    'svc.weight.title': 'Pérdida de Peso',
    'svc.weight.desc': 'Ofrecemos consultas y tratamientos para la pérdida de peso para ayudarle a alcanzar sus objetivos de salud de forma segura.',
    'svc.weight.1': 'Consulta Médica', 'svc.weight.2': 'Planificación Dietética',

    'svc.minor.title': 'Procedimientos Menores',
    'svc.minor.desc': 'Realizamos procedimientos menores que incluyen reparaciones de laceraciones, extracción de uñas y drenaje de abscesos.',
    'svc.minor.1': 'Extracción de cuerpos extraños', 'svc.minor.2': 'Laceraciones', 'svc.minor.3': 'Drenaje de Abscesos', 'svc.minor.4': 'Quemaduras Leves',

    'svc.blood.title': 'Análisis de Sangre',
    'svc.blood.desc': 'Asociados con DLO para extraer ciertos laboratorios dependiendo del análisis indicado.',
    'svc.blood.1': 'Paneles Integrales', 'svc.blood.2': 'Exámenes Específicos',

    'svc.sports.title': 'Físicos Deportivos',
    'svc.sports.desc': 'Ofrecemos exámenes físicos deportivos asequibles para estudiantes de K-12 y universitarios.',
    'svc.sports.1': '$20 Físico Escolar', 'svc.sports.2': '$30 Físico Universitario',
    'svc.sports.form': 'Descargar Formulario Físico de OSSAA (PDF)',

    'svc.misc.title': 'Misceláneos',
    'svc.misc.desc': 'Varios otros servicios para satisfacer sus necesidades de atención médica inmediata.',
    'svc.misc.1': 'Prueba de TB', 'svc.misc.2': 'Lavados de Oído', 'svc.misc.3': 'Electrocardiogramas',

    // Pricing Page
    'pricing.title': 'Precios',
    'pricing.subtitle': 'Precios transparentes de pago propio para pacientes sin seguro.',
    'pricing.card.title': 'Precios de Pago Propio',
    'pricing.card.subtitle': 'Para pacientes sin seguro',
    'pricing.disclaimer': '*Los precios están sujetos a cambios. Se pueden aplicar tarifas de laboratorio a las visitas al consultorio.',
    
    // Price Items
    'price.office': 'Visita al Consultorio',
    'price.office.val': '$60 + servicios adicionales si es necesario',
    'price.sports': 'Examen Físico Escolar',
    'price.sports_college': 'Examen Físico Universitario',
    'price.dot': 'Examen Físico DOT',
    'price.lac': 'Reparación de Laceraciones',
    'price.xray': 'Imágenes de Rayos X',
    'price.ear': 'Lavado de Oído',
    'price.ekg': 'Electrocardiograma',
    'price.glucose': 'Prueba de Glucosa',
    'price.std': 'Examen de ETS',
    'price.std_blood': 'Análisis de Sangre para ETS',
    'price.covid': 'Prueba de COVID-19 / Gripe',
    'price.strep': 'Prueba de Estreptococo',
    'price.tb': 'Prueba Cutánea de TB',
    'price.urine': 'Análisis de Orina',
    'price.preg': 'Prueba de Embarazo en Orina',

    // Insurance Page
    'ins.title': 'Seguros',
    'ins.subtitle': 'Planes aceptados e información de cobertura.',
    'ins.intro1': 'En TLC Walk-in Clinic, aceptamos una variedad de planes de seguro para que nuestros servicios sean accesibles para más personas. Si su plan no figura en la lista, comuníquese con su compañía de seguros para verificar si estamos dentro de la red.',
    'ins.intro2': 'Si su seguro no está dentro de la red, lo ayudaremos a encontrar la mejor solución para sus necesidades. Ofrecemos precios competitivos de pago propio; consulte la ',
    'ins.link': 'página de pago propio',
    'ins.intro3': ' para obtener más información.',
    'ins.card.req': 'Se Requiere Tarjeta de Seguro',
    'ins.card.desc': 'Requerimos una copia de su tarjeta de seguro. Esta puede ser en forma física o enviada por correo electrónico al momento de la visita.',
    'ins.sooner.title': 'Política de SoonerSelect',
    'ins.sooner.desc1': 'TODOS los pacientes bajo ',
    'ins.sooner.desc2': ' Medicaid (Humana, Aetna, Oklahoma Complete Health) DEBEN tener una copia física en el archivo.',
    'ins.providers': 'Proveedores de Seguros Aceptados',
    'ins.notice': 'Esto NO es una prueba de elegibilidad en nuestra clínica',

    // Telemedicine Page
    'tele.title': 'Telemedicina',
    'tele.subtitle': 'Atención médica de calidad desde la comodidad de su hogar.',
    'tele.badge': 'Visitas Virtuales Disponibles',
    'tele.heading': 'Consulte a un proveedor sin salir de casa.',
    'tele.desc': '¡Ahora ofrecemos visitas de telemedicina! Puede ser atendido por uno de nuestros proveedores usando su teléfono inteligente, tableta o computadora. Esta es una opción conveniente para enfermedades menores y atención de seguimiento.',
    'tele.treat.title': 'Ideal para tratar:',
    'tele.treat.1': 'URI (Infección de las Vías Respiratorias Superiores)',
    'tele.treat.2': 'Surtido de Medicamentos',
    'tele.treat.3': 'Lesiones Menores',
    'tele.treat.4': '¿Otras preguntas? Llame para Aclarar',
    'tele.eligibility': 'Elegibilidad y Pago',
    'tele.elig.1': 'Solo Pacientes Establecidos:',
    'tele.elig.2': 'Estas visitas son para pacientes que han sido atendidos en la clínica después del',
    'tele.elig.3': '. Debe tener una dirección de correo electrónico y un número de teléfono actualizados en el archivo, ya que usaremos esto para conectarlo con el proveedor.',
    'tele.pay.1': 'Las transacciones de pago se realizarán por teléfono (Crédito/Débito) o a través de nuestro perfil de Venmo',
    'tele.pay.note': 'Para obtener más información, llame a la clínica.',
    'tele.ready': '¿Listo para programar?',
    'tele.btn': 'Llame al (405) 470-3232 para Reservar',
    'tele.compat': 'Compatible con:',
    'tele.phone': 'Teléfono', 'tele.tablet': 'Tableta', 'tele.comp': 'Computadora',

    // Reviews
    'review.1.text': '"¡Fueron increíbles! Limpios, rápidos, amables, profesionales, amistosos, buen precio y extremadamente útiles para las personas que no tienen seguro!"',
    'review.1.author': 'Reseña de Google',
    'review.2.text': '"Este lugar está bajo nueva administración con nuevos proveedores. Es una experiencia totalmente excelente en comparación con hace unos meses. Los asistentes médicos son atentos y los proveedores Devin y Cassidy hicieron todo lo posible para ayudarme."',
    'review.2.author': 'J Watt',
    'review.3.text': '"He llevado a mis hijos allí durante años. El personal es acogedor, nunca grosero. Siempre servicial y atento... El personal siempre hace un esfuerzo adicional por usted. Gracias TLC por todo lo que hacen."',
    'review.3.author': 'Amelia Grimes',
    'review.4.text': '"El personal de TLC fue excelente. Atendieron a mi hijo muy rápido. La visita al médico costó solo $60. Eso es muy razonable cuando no tienes seguro. ¡Gracias, TLC!"',
    'review.4.author': 'Sandra Green',

    // Footer
    'footer.desc': 'Atención de urgencia experta en Bethany, Oklahoma. Dedicados a recuperar su salud, rápido.',
    'footer.visit': 'Visítenos',
    'footer.hours': 'Horario',
    'footer.resources': 'Recursos',
    'footer.forms': 'Formularios para Pacientes Nuevos',
    'footer.privacy': 'Política de Privacidad',
    'footer.portal': 'Portal del Paciente (Fuera de línea)',
    'footer.rights': 'Todos los derechos reservados.',
    'footer.monfri': 'Lun-Vie',
    'footer.sat': 'Sáb',
    'footer.sun': 'Dom',
    'footer.closed': 'Cerrado',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return (translations[language] as Record<string, string>)[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
