import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { LanguageProvider } from '../context/LanguageContext';
import { AppContent } from '../App';
import { routeMetadata } from '../routeMetadata';

// Share routing, layout, copy, and metadata with the browser application.
export function renderPages() {
  return Object.entries(routeMetadata).map(([pathname, metadata]) => ({
    pathname,
    metadata,
    html: renderToString(
      <LanguageProvider>
        <StaticRouter location={pathname}><AppContent /></StaticRouter>
      </LanguageProvider>
    ),
  }));
}

export function renderNotFound() {
  return renderToString(
    <LanguageProvider>
      <StaticRouter location="/404"><AppContent /></StaticRouter>
    </LanguageProvider>
  );
}
