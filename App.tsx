import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
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

// ScrollToTop Component
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <HashRouter>
        <ScrollToTop />
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
            </Routes>
          </main>
          <Footer />
        </div>
      </HashRouter>
    </LanguageProvider>
  );
};

export default App;