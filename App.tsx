import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation, Link } from 'react-router-dom';
import { TickerBar } from './components/TickerBar';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { routeMetadata } from './routeMetadata';

// Pages
import { Home } from './pages/Home';
import { ServicesPage } from './pages/ServicesPage';
import { PricingPage } from './pages/PricingPage';
import { AboutPage } from './pages/AboutPage';
import { InsurancePage } from './pages/InsurancePage';
import { TelemedicinePage } from './pages/TelemedicinePage';
import { SpecialOffersPage } from './pages/SpecialOffersPage';
import { MembershipPage } from './pages/MembershipPage';
import { SMSPrivacyPage } from './pages/SMSPrivacyPage';

import { UrgentCarePage } from './pages/UrgentCarePage';

// ScrollToTop Component
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// Preserve links saved before the move from hash routing to clean URLs.
if (typeof window !== 'undefined' && window.location.hash.startsWith('#/')) {
  window.history.replaceState(null, '', window.location.hash.slice(1));
}

// A server-delivered error document already has a 404 status. Remember its
// pathname so client navigation to a different missing URL still requests it.
let serverNotFoundPath = typeof window !== 'undefined' &&
  document.getElementById('root')?.dataset.serverNotFound === 'true'
  ? window.location.pathname : null;

const NotFound = () => {
  const { language } = useLanguage();
  const { pathname } = useLocation();
  useEffect(() => {
    if (pathname !== serverNotFoundPath) {
      window.location.replace(window.location.href);
    }
  }, [pathname]);
  return <section className="max-w-3xl mx-auto px-6 py-24 text-center">
    <h1 className="text-3xl font-bold mb-4">{language === 'es' ? 'Página no encontrada' : 'Page not found'}</h1>
    <Link to="/" className="text-primary underline">{language === 'es' ? 'Volver al inicio' : 'Return to the homepage'}</Link>
  </section>;
};

const SeoManager = () => {
  const { pathname: rawPathname } = useLocation();
  const pathname = rawPathname.replace(/\/+$/, '') || '/';

  useEffect(() => {
    // After leaving the error page, another missing route must request the
    // server even when it has the same pathname as the original 404.
    if (routeMetadata[pathname]) serverNotFoundPath = null;
    const metadata = routeMetadata[pathname] ?? { title: 'Page not found | TLC Walk-in Clinic', description: 'The requested page could not be found.', index: false };
    const canonicalUrl = `https://www.tlcwalkinclinic.com${pathname === '/' ? '/' : pathname}`;
    document.title = metadata.title;

    const setMeta = (selector: string, attribute: string, value: string) => {
      document.querySelector(selector)?.setAttribute(attribute, value);
    };

    setMeta('meta[name="description"]', 'content', metadata.description);
    setMeta('meta[name="robots"]', 'content', metadata.index === false ? 'noindex, follow' : 'index, follow');
    setMeta('meta[property="og:url"]', 'content', canonicalUrl);
    setMeta('meta[property="og:title"]', 'content', metadata.title);
    setMeta('meta[property="og:description"]', 'content', metadata.description);
    document.querySelector('link[rel="canonical"]')?.setAttribute('href', canonicalUrl);
  }, [pathname]);

  return null;
};

export const AppContent: React.FC = () => (
    <>
        <ScrollToTop />
        <SeoManager />
        <div className="flex flex-col min-h-screen w-full overflow-x-hidden">
          <TickerBar />
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/urgent-care-bethany-ok" element={<UrgentCarePage />} /><Route path="/services" element={<ServicesPage />} />
              <Route path="/insurance" element={<InsurancePage />} />
              <Route path="/telemedicine" element={<TelemedicinePage />} />
              <Route path="/pricing" element={<PricingPage />} />
              <Route path="/offers" element={<SpecialOffersPage />} />
              <Route path="/membership" element={<MembershipPage />} />
              <Route path="/sms-privacy" element={<SMSPrivacyPage />} />
              <Route path="/sms-privacy-policy" element={<SMSPrivacyPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
    </>
);

const App: React.FC = () => (
  <LanguageProvider>
    <BrowserRouter><AppContent /></BrowserRouter>
  </LanguageProvider>
);

export default App;
