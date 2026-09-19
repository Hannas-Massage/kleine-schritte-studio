import React from 'react';
import { siteConfig } from '../data/content';
import { openCookieSettings } from '../lib/cookieConsent';
import { CookieBanner } from './CookieBanner';

export const Footer: React.FC = () => {
  return (
    <>
    <footer className="border-t border-border/80 bg-background py-8 text-center">
      <div className="mx-auto max-w-6xl px-5">
        <a href="/" className="mb-3 inline-block no-underline">
          <span className="font-script block text-3xl leading-none text-primary">
            Kleine Schritte
          </span>
          <span className="mt-1 block text-sm italic text-gold-deep">
            Wellnessmassage in Dillingen
          </span>
        </a>
        <div className="mx-auto mb-4 h-px w-16 bg-border" aria-hidden="true" />
        <div className="flex flex-wrap items-center justify-center gap-x-2.5 gap-y-1 text-sm text-muted-foreground">
          <a href="/impressum" className="text-foreground transition-colors hover:text-primary">
            Impressum
          </a>
          <span aria-hidden="true">|</span>
          <a href="/datenschutz" className="text-foreground transition-colors hover:text-primary">
            Datenschutz
          </a>
          <span aria-hidden="true">|</span>
          <button
            type="button"
            onClick={openCookieSettings}
            className="cursor-pointer border-0 bg-transparent p-0 text-foreground transition-colors hover:text-primary"
          >
            Cookie-Einstellungen
          </button>
          <span aria-hidden="true">|</span>
          <span>
            © {new Date().getFullYear()} {siteConfig.fullName} – {siteConfig.name}
          </span>
        </div>
        <p className="mt-2.5 text-xs text-muted-foreground">
          made with{' '}
          <span
            className="inline-block h-[0.85em] w-[0.85em] align-[-0.08em] text-[#C0392B]"
            aria-hidden="true"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-full w-full">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          </span>{' '}
          by{' '}
          <a
            href="https://www.hafner-digital-solutions.de/"
            target="_blank"
            rel="noopener"
            className="text-muted-foreground no-underline transition-colors hover:text-primary"
          >
            Hafner Digital Solutions
          </a>
        </p>
      </div>
    </footer>
    <CookieBanner />
    </>
  );
};
