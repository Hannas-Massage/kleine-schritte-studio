import React from 'react';
import { siteConfig } from '../data/content';
import { ResponsiveImage } from './ResponsiveImage';
import { Reveal } from './Reveal';

export const Hero: React.FC = () => {
  return (
    <section id="top" className="bg-calm">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-20 md:grid-cols-2 md:py-28">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-primary">
            Wellness Massage in Dillingen
          </p>
          <h1 className="mt-5 text-[2.15rem] leading-[1.12] text-foreground sm:text-5xl md:text-6xl">
            Entspannung für die ganze Familie
          </h1>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground">
            Sanfte, ruhige Berührungen helfen dabei, loszulassen, zur Ruhe zu
            kommen und neue Energie zu schöpfen. Ob nach einem langen
            Arbeitstag, als kleine Pause für Mama oder Papa oder als wohltuende
            Entspannung im höheren Alter – Zeit für sich selbst tut in jedem
            Lebensabschnitt gut.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href={siteConfig.calUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-primary px-7 py-3 text-center text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              Jetzt Termin sichern
            </a>
            <a
              href="#kontakt"
              className="inline-flex items-center justify-center rounded-full border border-primary px-7 py-3 text-center text-sm font-medium text-primary transition-colors hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              Kontaktformular
            </a>
          </div>
        </div>
        <Reveal>
          <ResponsiveImage
            src="/assets/hero-massage-FZs6C1Mn.jpg"
            alt="Vorbereitete Massageliege mit Handtüchern und Massageöl – Wellnessmassage in Dillingen"
            width={1600}
            height={1200}
            priority
            sizes="(min-width: 768px) min(36rem, 50vw), calc(100vw - 2.5rem)"
            className="w-full rounded-[2rem] object-cover shadow-soft"
          />
        </Reveal>
      </div>
    </section>
  );
};
