import React, { useEffect, useRef, useState } from 'react';
import {
  COOKIE_SETTINGS_EVENT,
  hasAcknowledgedCookies,
  saveCookieAcknowledgement,
} from '../lib/cookieConsent';

export const CookieBanner: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const acknowledgeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!hasAcknowledgedCookies()) {
      setVisible(true);
    }

    const openSettings = () => setVisible(true);
    window.addEventListener(COOKIE_SETTINGS_EVENT, openSettings);
    return () => window.removeEventListener(COOKIE_SETTINGS_EVENT, openSettings);
  }, []);

  useEffect(() => {
    if (!visible) {
      return;
    }

    acknowledgeRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && hasAcknowledgedCookies()) {
        setVisible(false);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [visible]);

  const acknowledge = () => {
    saveCookieAcknowledgement();
    setVisible(false);
  };

  if (!visible) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-[2000] flex items-center justify-center bg-[oklch(20%_0.02_65_/_0.45)] p-5"
      role="dialog"
      aria-modal="true"
      aria-labelledby="cookieBannerTitle"
    >
      <div className="w-full max-w-lg rounded-2xl border-2 border-primary/50 bg-background p-7 shadow-soft">
        <h3 id="cookieBannerTitle" className="text-2xl text-foreground">
          Wir verwenden Cookies
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          Diese Website verwendet ausschließlich technisch notwendige Cookies
          bzw. vergleichbare Technologien (Local Storage), um die
          Grundfunktionen der Website zu gewährleisten – etwa zur Speicherung
          dieses Hinweises. Es werden keine Analyse-, Marketing- oder
          Tracking-Cookies eingesetzt. Weitere Informationen findest du in
          unserer{' '}
          <a href="/datenschutz" className="font-semibold text-primary hover:underline">
            Datenschutzerklärung
          </a>
          .
        </p>
        <div className="mt-6 flex justify-end">
          <button
            ref={acknowledgeRef}
            type="button"
            onClick={acknowledge}
            className="rounded-full bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            Verstanden
          </button>
        </div>
      </div>
    </div>
  );
};
