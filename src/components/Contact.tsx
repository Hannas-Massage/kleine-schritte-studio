import React, { useEffect, useRef, useState } from 'react';
import { createWhatsAppUrl, formatServedLocations, siteConfig } from '../data/content';
import { Reveal } from './Reveal';

const fieldClass =
  'mt-2 w-full rounded-xl border bg-background px-4 py-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2';

export const Contact: React.FC = () => {
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState<{ name?: string; contact?: string; message?: string }>(
    {}
  );
  const [sent, setSent] = useState(false);
  const nameRef = useRef<HTMLInputElement>(null);
  const contactRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);
  const successRef = useRef<HTMLParagraphElement>(null);

  const validate = () => {
    const next: { name?: string; contact?: string; message?: string } = {};
    if (!name.trim()) next.name = 'Bitte deinen Namen eintragen.';
    if (!contact.trim()) next.contact = 'Bitte Telefon oder E-Mail eintragen.';
    if (!message.trim()) next.message = 'Bitte eine Nachricht schreiben.';
    return next;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const next = validate();
    setErrors(next);
    setSent(false);

    if (next.name) {
      nameRef.current?.focus();
      return;
    }
    if (next.contact) {
      contactRef.current?.focus();
      return;
    }
    if (next.message) {
      messageRef.current?.focus();
      return;
    }

    const text = `Hallo Hanna,\n\nName: ${name.trim()}\nKontakt: ${contact.trim()}\n\n${message.trim()}`;
    window.open(createWhatsAppUrl(text), '_blank', 'noopener');
    setSent(true);
  };

  useEffect(() => {
    if (sent) {
      successRef.current?.focus();
    }
  }, [sent]);

  return (
    <section id="kontakt" className="bg-secondary/60 py-20">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 md:grid-cols-2">
        <Reveal>
          <h2 className="text-3xl sm:text-4xl">Kontakt & Termine</h2>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            Manchmal braucht es nur einen kleinen Schritt … ein Moment nur für
            dich. Schreib mir, und wir finden gemeinsam einen Termin.
          </p>

          <div className="mt-10 space-y-7">
            <div className="flex items-start gap-4 sm:gap-5">
              <span className="mt-1 text-primary" aria-hidden="true">
                <svg
                  className="h-6 w-6 stroke-current"
                  viewBox="0 0 24 24"
                  fill="none"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </span>
              <div>
                <span className="block text-xs font-semibold tracking-wider text-muted-foreground uppercase">
                  Telefon
                </span>
                <a
                  href={`tel:${siteConfig.phoneLink}`}
                  className="mt-1 block rounded-sm text-lg font-bold text-foreground transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 sm:text-xl"
                >
                  {siteConfig.phoneDisplay}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4 sm:gap-5">
              <span className="mt-1 text-primary" aria-hidden="true">
                <svg
                  className="h-6 w-6 stroke-current"
                  viewBox="0 0 24 24"
                  fill="none"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </span>
              <div>
                <span className="block text-xs font-semibold tracking-wider text-muted-foreground uppercase">
                  E-Mail
                </span>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="mt-1 block rounded-sm text-lg font-bold text-foreground transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 sm:text-xl break-all"
                >
                  {siteConfig.email}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4 sm:gap-5">
              <span className="mt-1 text-primary" aria-hidden="true">
                <svg
                  className="h-6 w-6 stroke-current"
                  viewBox="0 0 24 24"
                  fill="none"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </span>
              <div>
                <span className="block text-xs font-semibold tracking-wider text-muted-foreground uppercase">
                  Standort
                </span>
                <p className="mt-1 text-lg font-bold text-foreground sm:text-xl">
                  <a
                    href={siteConfig.googleMapsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-foreground transition-colors hover:text-primary"
                  >
                    {siteConfig.street}
                  </a>
                </p>
                <p className="text-lg font-bold text-foreground sm:text-xl">
                  {siteConfig.zip} {siteConfig.city}
                </p>
                <p className="mt-2 max-w-sm text-sm font-normal leading-relaxed text-muted-foreground">
                  Kundinnen kommen unter anderem aus {formatServedLocations()}.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 pt-2">
              <a
                href={createWhatsAppUrl(
                  'Hallo Hanna, ich möchte gerne einen Termin vereinbaren.'
                )}
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
                title={`WhatsApp: ${siteConfig.phoneDisplay}`}
                className="flex h-12 w-12 items-center justify-center rounded-full bg-[#dcf8c6]/80 text-[#25D366] transition-transform hover:scale-110 hover:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 active:scale-95"
              >
                <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                </svg>
              </a>

              <a
                href="https://t.me/+4915773602362"
                target="_blank"
                rel="noreferrer"
                aria-label="Telegram"
                title="Telegram"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-[#e3f2fd] text-[#29B6F6] transition-transform hover:scale-110 hover:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 active:scale-95"
              >
                <svg
                  className="h-6 w-6 fill-current translate-x-[-1px]"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.121l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.458c.538-.196 1.006.128.832.941z" />
                </svg>
              </a>

              <a
                href={siteConfig.instagramUrl}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                title={`Instagram: ${siteConfig.instagramHandle}`}
                className="flex h-12 w-12 items-center justify-center rounded-full bg-[#fde7eb] text-[#E1306C] transition-transform hover:scale-110 hover:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 active:scale-95"
              >
                <svg
                  className="h-6 w-6 stroke-current"
                  viewBox="0 0 24 24"
                  fill="none"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>

              <a
                href="https://www.tiktok.com/@massage_dillingen_donau"
                target="_blank"
                rel="noreferrer"
                aria-label="TikTok"
                title="TikTok"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-[#ebe8e3] text-[#111111] transition-transform hover:scale-110 hover:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 active:scale-95"
              >
                <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.298-.002.595.042.88.13V9.4a6.33 6.33 0 0 0-.88-.06A6.34 6.34 0 0 0 3 15.68a6.34 6.34 0 0 0 10.82 4.49 6.27 6.27 0 0 0 1.96-4.5V8.69a8.28 8.28 0 0 0 3.81 1V6.69z" />
                </svg>
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <form
            onSubmit={handleSubmit}
            noValidate
            className="rounded-3xl bg-card p-7 shadow-soft"
          >
            {sent && (
              <p
                ref={successRef}
                tabIndex={-1}
                role="status"
                className="mb-5 rounded-2xl border border-primary/30 bg-accent/40 p-4 text-sm text-foreground"
              >
                WhatsApp sollte sich jetzt öffnen. Wenn nicht, prüfe bitte den
                Popup-Blocker oder schreib direkt an {siteConfig.phoneDisplay}.
              </p>
            )}

            <label className="block text-sm text-muted-foreground" htmlFor="name">
              Dein Name
            </label>
            <input
              id="name"
              ref={nameRef}
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                if (errors.name) setErrors((current) => ({ ...current, name: undefined }));
              }}
              aria-invalid={Boolean(errors.name)}
              aria-describedby={errors.name ? 'name-error' : undefined}
              className={`${fieldClass} ${errors.name ? 'border-destructive' : 'border-input'}`}
            />
            {errors.name && (
              <p id="name-error" className="mt-1.5 text-sm text-destructive" role="alert">
                {errors.name}
              </p>
            )}

            <label
              className="mt-5 block text-sm text-muted-foreground"
              htmlFor="contact"
            >
              Telefon oder E-Mail
            </label>
            <input
              id="contact"
              ref={contactRef}
              value={contact}
              onChange={(e) => {
                setContact(e.target.value);
                if (errors.contact) {
                  setErrors((current) => ({ ...current, contact: undefined }));
                }
              }}
              aria-invalid={Boolean(errors.contact)}
              aria-describedby={errors.contact ? 'contact-error' : undefined}
              className={`${fieldClass} ${errors.contact ? 'border-destructive' : 'border-input'}`}
            />
            {errors.contact && (
              <p id="contact-error" className="mt-1.5 text-sm text-destructive" role="alert">
                {errors.contact}
              </p>
            )}

            <label
              className="mt-5 block text-sm text-muted-foreground"
              htmlFor="message"
            >
              Deine Nachricht
            </label>
            <textarea
              id="message"
              ref={messageRef}
              rows={4}
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
                if (errors.message) {
                  setErrors((current) => ({ ...current, message: undefined }));
                }
              }}
              aria-invalid={Boolean(errors.message)}
              aria-describedby={errors.message ? 'message-error' : undefined}
              className={`${fieldClass} ${errors.message ? 'border-destructive' : 'border-input'}`}
            />
            {errors.message && (
              <p id="message-error" className="mt-1.5 text-sm text-destructive" role="alert">
                {errors.message}
              </p>
            )}

            <button
              type="submit"
              className="mt-6 w-full rounded-full bg-primary px-4 py-3 text-center text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 sm:px-6"
            >
              Nachricht per WhatsApp senden
            </button>
            <p className="mt-3 text-xs text-muted-foreground">
              Beim Absenden öffnet sich WhatsApp mit deiner fertig vorbereiteten
              Nachricht.
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  );
};
