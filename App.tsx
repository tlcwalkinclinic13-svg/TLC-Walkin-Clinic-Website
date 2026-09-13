import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { TickerBar } from './components/TickerBar';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { LanguageProvider } from './context/LanguageContext';

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

// ScrollToTop Component
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const routeMetadata: Record<string, { title: string; description: string; index?: boolean }> = {
  '/': {
    title: 'Urgent Care in Bethany, OK | TLC Walk-in Clinic',
    description: 'TLC Walk-in Clinic provides walk-in urgent care in Bethany, OK for illnesses, minor injuries, X-rays, testing, physicals, and more. No appointment needed.',
  },
  '/services': {
    title: 'Urgent Care Services in Bethany, OK | TLC Walk-in Clinic',
    description: 'Explore walk-in care, X-rays, testing, minor procedures, physicals, and other services available at TLC Walk-in Clinic in Bethany, Oklahoma.',
  },
  '/insurance': {
    title: 'Insurance Accepted | TLC Walk-in Clinic Bethany, OK',
    description: 'Review insurance information and affordable self-pay options at TLC Walk-in Clinic in Bethany, Oklahoma.',
  },
  '/telemedicine': {
    title: 'Telemedicine | TLC Walk-in Clinic Bethany, OK',
    description: 'Telemedicine information for eligible established patients of TLC Walk-in Clinic in Bethany, Oklahoma.',
  },
  '/pricing': {
    title: 'Urgent Care Cost & Self-Pay Pricing | TLC Walk-in Clinic',
    description: 'See transparent self-pay prices for visits, X-rays, testing, physicals, and other services at TLC Walk-in Clinic in Bethany, OK.',
  },
  '/offers': {
    title: 'Patient Special Offers | TLC Walk-in Clinic',
    description: 'View current patient special offers from TLC Walk-in Clinic in Bethany, Oklahoma.',
  },
  '/membership': {
    title: 'Direct Walk-In Care Membership | TLC Walk-in Clinic',
    description: 'Learn about TLC Walk-in Clinic membership options for convenient, affordable walk-in care in Bethany, Oklahoma.',
  },
  '/about': {
    title: 'About TLC Walk-in Clinic | Bethany, Oklahoma',
    description: 'Learn about TLC Walk-in Clinic and our commitment to accessible, patient-centered medical care in Bethany, Oklahoma.',
  },
  '/sms-privacy': { title: 'SMS Privacy Policy | TLC Walk-in Clinic', description: 'TLC Walk-in Clinic SMS privacy policy.', index: false },
  '/sms-privacy-policy': { title: 'SMS Privacy Policy | TLC Walk-in Clinic', description: 'TLC Walk-in Clinic SMS privacy policy.', index: false },
};

const SeoManager = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const metadata = routeMetadata[pathname] ?? routeMetadata['/'];
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

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <ScrollToTop />
        <SeoManager />
        <div className="flex flex-col min-h-screen w-full overflow-x-hidden">
          <TickerBar />
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/insurance" element={<InsurancePage />} />
              <Route path="/telemedicine" element={<TelemedicinePage />} />
              <Route path="/pricing" element={<PricingPage />} />
              <Route path="/offers" element={<SpecialOffersPage />} />
              <Route path="/membership" element={<MembershipPage />} />
              <Route path="/sms-privacy" element={<SMSPrivacyPage />} />
              <Route path="/sms-privacy-policy" element={<SMSPrivacyPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </LanguageProvider>
  );
};

export default App;
