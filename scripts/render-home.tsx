import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { LanguageProvider } from '../context/LanguageContext';
import { TickerBar } from '../components/TickerBar';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { Home } from '../pages/Home';

// Render the same components and default language as the browser app.
export function renderHome() {
  return renderToString(
    <LanguageProvider>
      <StaticRouter location="/">
        <div className="flex flex-col min-h-screen w-full overflow-x-hidden">
          <TickerBar />
          <Navbar />
          <main className="flex-grow"><Home /></main>
          <Footer />
        </div>
      </StaticRouter>
    </LanguageProvider>
  );
}
