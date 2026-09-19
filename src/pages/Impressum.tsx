import React from 'react';
import { siteConfig } from '../data/content';
import { LegalShell } from './LegalShell';

export const Impressum: React.FC = () => {
  return (
    <LegalShell>
      <a href="/" className="text-sm text-primary hover:underline">
        ← Zurück zur Startseite
      </a>
      <h1 className="mt-6 text-4xl">Impressum</h1>

      <div className="mt-8 space-y-6 text-sm leading-relaxed text-muted-foreground">
        <section>
          <h2 className="text-xl text-foreground">Angaben gemäß § 5 DDG</h2>
          <p className="mt-2">
            {siteConfig.fullName}
            <br />
            {siteConfig.name} – {siteConfig.tagline}
            <br />
            {siteConfig.street}
            <br />
            {siteConfig.zip} {siteConfig.city}
            <br />
            {siteConfig.country}
          </p>
        </section>
        <section>
          <h2 className="text-xl text-foreground">Kontakt</h2>
          <p className="mt-2">
            Telefon:{' '}
            <a
              href={`tel:${siteConfig.phoneLink}`}
              className="text-primary hover:underline"
            >
              {siteConfig.phoneDisplay}
            </a>
            <br />
            E-Mail:{' '}
            <a
              href={`mailto:${siteConfig.email}`}
              className="text-primary hover:underline"
            >
              {siteConfig.email}
            </a>
          </p>
        </section>
        <section>
          <h2 className="text-xl text-foreground">Umsatzsteuer</h2>
          <p className="mt-2">
            Gemäß § 19 UStG wird keine Umsatzsteuer berechnet
            (Kleinunternehmerregelung).
          </p>
        </section>
        <section>
          <h2 className="text-xl text-foreground">
            Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV
          </h2>
          <p className="mt-2">
            {siteConfig.fullName}
            <br />
            {siteConfig.street}
            <br />
            {siteConfig.zip} {siteConfig.city}
            <br />
            {siteConfig.country}
          </p>
        </section>
        <section>
          <h2 className="text-xl text-foreground">Hinweis</h2>
          <p className="mt-2">
            Die angebotenen Massagen sind reine Wellness-Anwendungen und
            ersetzen keine medizinische oder therapeutische Behandlung.
          </p>
        </section>
      </div>
    </LegalShell>
  );
};
