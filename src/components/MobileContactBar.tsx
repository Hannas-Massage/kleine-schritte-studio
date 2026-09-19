import React, { useEffect, useState } from 'react';
import { createWhatsAppUrl, siteConfig } from '../data/content';

export const MobileContactBar: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const isHome =
    window.location.pathname === '/' ||
    window.location.pathname === '/index.html';

  useEffect(() => {
    const updateVisibility = () => {
      const isMobile = window.matchMedia('(max-width: 1023px)').matches;
      let show = false;

      if (isMobile && window.scrollY > 200) {
        const navOpen = document.body.classList.contains('nav-open');
        const kontakt = document.getElementById('kontakt');
        let inKontakt = false;
        if (kontakt) {
          inKontakt =
            kontakt.getBoundingClientRect().top < window.innerHeight * 0.55;
        }
        show = !navOpen && !inKontakt;
      }

      setVisible(show);
      document.body.classList.toggle('has-mobile-cta', show);
    };

    updateVisibility();
    window.addEventListener('scroll', updateVisibility, { passive: true });
    window.addEventListener('resize', updateVisibility, { passive: true });
    window.addEventListener('mobile-cta-update', updateVisibility);
    return () => {
      window.removeEventListener('scroll', updateVisibility);
      window.removeEventListener('resize', updateVisibility);
      window.removeEventListener('mobile-cta-update', updateVisibility);
      document.body.classList.remove('has-mobile-cta');
    };
  }, []);

  return (
    <nav
      className={`mobile-contact-bar fixed inset-x-0 bottom-0 z-50 grid grid-cols-3 gap-1 border-t border-border/80 bg-background/95 px-3 pt-2.5 pb-[calc(0.625rem+env(safe-area-inset-bottom,0px))] shadow-[0_-4px_20px_rgba(40,30,20,0.08)] backdrop-blur-md lg:hidden${
        visible ? ' is-visible' : ''
      }`}
      aria-label="Schnellkontakt"
      aria-hidden={visible ? 'false' : 'true'}
    >
      <a
        href={`tel:${siteConfig.phoneLink}`}
        tabIndex={visible ? 0 : -1}
        className="flex min-h-16 flex-col items-center justify-center gap-1.5 rounded-xl px-1.5 py-1 text-foreground transition-colors hover:bg-secondary/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
      >
        <span className="flex h-11 w-11 items-center justify-center rounded-full bg-secondary text-primary">
          <svg
            className="h-[22px] w-[22px] stroke-current"
            viewBox="0 0 24 24"
            fill="none"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
        </span>
        <span className="text-[0.6875rem] font-semibold tracking-wide">
          Anrufen
        </span>
      </a>

      <a
        href={createWhatsAppUrl(
          'Hallo Hanna, ich möchte gerne einen Termin vereinbaren.'
        )}
        target="_blank"
        rel="noopener noreferrer"
        tabIndex={visible ? 0 : -1}
        className="flex min-h-16 flex-col items-center justify-center gap-1.5 rounded-xl px-1.5 py-1 text-foreground transition-colors hover:bg-secondary/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
      >
        <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#25D366] text-white">
          <svg
            className="h-[22px] w-[22px] fill-current"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
          </svg>
        </span>
        <span className="text-[0.6875rem] font-semibold tracking-wide">
          WhatsApp
        </span>
      </a>

      <a
        href={isHome ? '#kontakt' : '/#kontakt'}
        tabIndex={visible ? 0 : -1}
        className="flex min-h-16 flex-col items-center justify-center gap-1.5 rounded-xl px-1.5 py-1 text-foreground transition-colors hover:bg-secondary/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
      >
        <span className="flex h-11 w-11 items-center justify-center rounded-full bg-secondary text-primary">
          <svg
            className="h-[22px] w-[22px] stroke-current"
            viewBox="0 0 24 24"
            fill="none"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22z" />
          </svg>
        </span>
        <span className="text-[0.6875rem] font-semibold tracking-wide">
          Nachricht
        </span>
      </a>
    </nav>
  );
};
