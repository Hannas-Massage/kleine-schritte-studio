import React from 'react';
import { createWhatsAppUrl, pricingGroups, siteConfig } from '../data/content';
import { ResponsiveImage } from './ResponsiveImage';
import { Reveal } from './Reveal';

export const Pricing: React.FC = () => {
  return (
    <section id="preise" className="mx-auto max-w-6xl px-5 py-20">
      <Reveal>
        <h2 className="text-3xl sm:text-4xl">Preise & Angebote</h2>
        <p className="mt-5 max-w-2xl text-sm leading-relaxed text-muted-foreground">
          Manchmal braucht es nur einen Moment der Ruhe. Eine bewusste
          Berührung. Ein paar kleine Schritte zurück zu dir selbst.
        </p>
      </Reveal>

      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {pricingGroups.map((group, index) => {
          const ctaHref =
            group.calLink ??
            (group.whatsappText
              ? createWhatsAppUrl(group.whatsappText)
              : undefined);

          return (
          <Reveal key={group.title} delay={index * 100} className="h-full">
            <div className="flex h-full flex-col rounded-3xl border border-border/80 bg-card p-7 shadow-soft">
              {group.badge && (
                <span className="mb-3 inline-block rounded-full bg-accent px-3 py-1 text-xs font-medium text-accent-foreground">
                  {group.badge}
                </span>
              )}
              <h3 className="text-xl text-foreground">{group.title}</h3>
              {group.placeholderText ? (
                <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                  {group.placeholderText}
                </p>
              ) : (
                <>
                  <div className="mt-5 space-y-3">
                    {group.options.map((option) => (
                      <div
                        key={option.duration}
                        className="flex items-baseline justify-between border-b border-border/40 pb-2 text-sm last:border-0"
                      >
                        <span className="text-muted-foreground">
                          {option.duration}
                        </span>
                        <span className="font-medium text-foreground">
                          {option.price}
                        </span>
                      </div>
                    ))}
                  </div>
                  {ctaHref && (
                    <div className="mt-auto pt-6">
                      <a
                        href={ctaHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex h-11 w-full items-center justify-center gap-1.5 rounded-full border border-primary px-3 text-sm font-medium text-primary transition-colors hover:bg-primary hover:text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                      >
                        <span className="min-w-0 whitespace-nowrap">
                          {group.ctaLabel ?? `Termin für ${group.title}`}
                        </span>
                        <svg
                          className="h-4 w-4 shrink-0 stroke-current"
                          viewBox="0 0 24 24"
                          fill="none"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                        >
                          <path d="M5 12h14" />
                          <path d="M13 6l6 6-6 6" />
                        </svg>
                      </a>
                    </div>
                  )}
                </>
              )}
            </div>
          </Reveal>
          );
        })}
      </div>

      <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
        Alle Preise verstehen sich als Endpreise. Gemäß § 19 UStG wird keine
        Umsatzsteuer erhoben.
      </p>

      <div className="mt-12 grid items-center gap-10 md:grid-cols-2">
        <Reveal>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Jede Massage wird ganz individuell auf dich abgestimmt – von der
            Dauer bis zum Schwerpunkt der Behandlung. Wähle die Massage, die zu
            dir passt, oder buche über die Übersicht, wenn du noch unsicher
            bist.
          </p>
          <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
            Änderungen vorbehalten.
          </p>
          <a
            href={siteConfig.calUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex rounded-full bg-primary px-7 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            Individuellen Termin anfragen
          </a>
        </Reveal>

        <Reveal delay={120}>
          <ResponsiveImage
            src="/assets/massage-hands-giX2iwHR.jpg"
            alt="Lomi Lomi Nui Massage mit warmem Öl am Rücken"
            width={1200}
            height={1200}
            sizes="(min-width: 768px) min(36rem, 50vw), calc(100vw - 2.5rem)"
            className="w-full rounded-[2rem] object-cover shadow-soft"
          />
        </Reveal>
      </div>
    </section>
  );
};
