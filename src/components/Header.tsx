import React, { useEffect, useState } from 'react';
import { createWhatsAppUrl, navItems, siteConfig } from '../data/content';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle('nav-open', mobileMenuOpen);
    window.dispatchEvent(new Event('mobile-cta-update'));
    return () => document.body.classList.remove('nav-open');
  }, [mobileMenuOpen]);

  return (
    <header
      className={`sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur${
        mobileMenuOpen ? ' is-open' : ''
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-5 py-4 lg:gap-4">
        <a href="#top" className="min-w-0 shrink-0 leading-tight">
          <span className="block font-script text-3xl leading-none text-primary">
            {siteConfig.name}
          </span>
          <span className="block text-[0.65rem] uppercase tracking-[0.18em] text-muted-foreground sm:text-[0.7rem] sm:tracking-[0.22em]">
            {siteConfig.tagline}
          </span>
        </a>

        <nav className="hidden min-w-0 items-center gap-5 lg:flex xl:gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="whitespace-nowrap text-sm text-muted-foreground transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <a
            href={createWhatsAppUrl(
              'Hallo Hanna, ich interessiere mich für eine Massage.'
            )}
            target="_blank"
            rel="noreferrer"
            className="hidden whitespace-nowrap rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 lg:inline-flex"
          >
            Termin per WhatsApp
          </a>
          <button
            type="button"
            aria-label="Menü öffnen"
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen((open) => !open)}
            className="rounded-full border border-border px-4 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 lg:hidden"
          >
            Menü
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <nav className="flex flex-col gap-1 border-t border-border/60 px-5 pb-4 lg:hidden">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 text-sm text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              {item.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
};
