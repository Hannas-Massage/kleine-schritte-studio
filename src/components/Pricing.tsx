import React from 'react';
import { pricingGroups } from '../data/content';
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
        {pricingGroups.map((group, index) => (
          <Reveal key={group.title} delay={index * 100} className="h-full">
            <div className="flex h-full flex-col rounded-3xl border border-border/80 bg-card p-7 shadow-soft">
              <h3 className="text-xl text-foreground">{group.title}</h3>
              <div className="mt-5 space-y-3">
                {group.options.map((option) => (
                  <div
                    key={option.duration}
                    className="flex items-baseline justify-between border-b border-border/40 pb-2 text-sm last:border-0"
                  >
                    <span className="text-muted-foreground">{option.duration}</span>
                    <span className="font-medium text-foreground">{option.price}</span>
                  </div>
                ))}
              </div>
              <div className="mt-auto pt-6">
                <a
                  href={group.calLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-primary px-4 py-2.5 text-sm font-medium text-primary transition-colors hover:bg-primary hover:text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                >
                  Termin buchen
                  <svg
                    className="h-4 w-4 stroke-current"
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
            </div>
          </Reveal>
        ))}
      </div>

      <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
        Alle Preise verstehen sich als Endpreise. Gemäß § 19 UStG wird keine
        Umsatzsteuer erhoben.
      </p>

      <div className="mt-12 grid items-center gap-10 md:grid-cols-2">
        <Reveal>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Jede Massage wird ganz individuell auf dich abgestimmt – von der
            Dauer bis zum Schwerpunkt der Behandlung. Schreib mir einfach kurz,
            dann besprechen wir gemeinsam, was am besten zu dir passt, und
            finden die passende Auszeit für dich.
          </p>
          <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
            Änderungen vorbehalten.
          </p>
          <a
            href="https://cal.com/hannas-massage"
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex rounded-full bg-primary px-7 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            Termin anfragen
          </a>
        </Reveal>

        <Reveal delay={120}>
          <img
            src="/assets/massage-hands-giX2iwHR.jpg"
            alt="Lomi Lomi Nui Massage mit warmem Öl am Rücken"
            loading="lazy"
            width={1200}
            height={1200}
            className="w-full rounded-[2rem] object-cover shadow-soft"
          />
        </Reveal>
      </div>
    </section>
  );
};
