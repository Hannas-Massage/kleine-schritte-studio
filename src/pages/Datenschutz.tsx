import React from 'react';
import { siteConfig } from '../data/content';
import { LegalShell } from './LegalShell';

export const Datenschutz: React.FC = () => {
  return (
    <LegalShell>
      <a href="/" className="text-sm text-primary hover:underline">
        ← Zurück zur Startseite
      </a>
      <h1 className="mt-6 text-4xl">Datenschutzerklärung</h1>

      <div className="mt-8 space-y-6 text-sm leading-relaxed text-muted-foreground">
        <section>
          <h2 className="text-xl text-foreground">Verantwortliche Stelle</h2>
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
          <h2 className="text-xl text-foreground">Hosting</h2>
          <p className="mt-2">
            Diese Website wird derzeit bei Vercel Inc., 440 N Barranca Avenue
            #4133, Covina, CA 91723, USA, bereitgestellt. Beim Aufruf verarbeitet
            Vercel technisch notwendige Zugriffsdaten (z.&nbsp;B. IP-Adresse,
            Datum und Uhrzeit, aufgerufene Seite, Browsertyp), um die Website
            sicher und stabil auszuliefern (Art. 6 Abs. 1 lit. f DSGVO). Die
            Übermittlung in die USA erfolgt auf Grundlage von
            Standardvertragsklauseln (Art. 46 DSGVO). Weitere Informationen:{' '}
            <a
              href="https://vercel.com/legal/privacy-policy"
              className="text-primary hover:underline"
              target="_blank"
              rel="noreferrer"
            >
              Datenschutzerklärung von Vercel
            </a>
            . Ein späterer Wechsel auf einen Server in Deutschland (netcup GmbH)
            ist geplant; diese Erklärung wird dann angepasst.
          </p>
        </section>
        <section>
          <h2 className="text-xl text-foreground">Kontaktaufnahme</h2>
          <p className="mt-2">
            Das Kontaktformular speichert keine Daten auf dieser Website. Deine
            Eingaben werden lediglich in eine WhatsApp-Nachricht übernommen, die
            du selbst absendest. Für die Nutzung von WhatsApp gelten die
            Datenschutzbestimmungen von WhatsApp Ireland Ltd. Termine kannst du
            außerdem über Cal.com, Inc. buchen; beim Öffnen des Buchungslinks
            gelten die Datenschutzbestimmungen von Cal.com. Kontaktieren kannst
            du mich ebenso per Telefon oder E-Mail; diese Angaben werden zur
            Bearbeitung deiner Anfrage verarbeitet (Art. 6 Abs. 1 lit. b und f
            DSGVO).
          </p>
        </section>
        <section>
          <h2 className="text-xl text-foreground">Schriftarten</h2>
          <p className="mt-2">
            Die auf dieser Website verwendeten Schriftarten (Cormorant Garamond,
            Karla, Alex Brush) sind lokal auf unserem Server gespeichert. Es werden keine
            Daten an einen externen Anbieter (z.&nbsp;B. Google Fonts)
            übertragen.
          </p>
        </section>
        <section>
          <h2 className="text-xl text-foreground">Google-Bewertungen</h2>
          <p className="mt-2">
            Auf dieser Website werden ausgewählte, öffentlich zugängliche
            Bewertungstexte aus dem Google-Unternehmensprofil von{' '}
            {siteConfig.name} als statische Zitate angezeigt. Beim Aufruf
            dieser Website wird kein Google-Widget geladen und es entsteht
            keine Verbindung zu Google. Erst wenn du den Link zu Google Maps
            selbst anklickst, gelten die Datenschutzbestimmungen von Google.
          </p>
        </section>
        <section>
          <h2 className="text-xl text-foreground">Cookies</h2>
          <p className="mt-2">
            Diese Website verwendet ausschließlich technisch notwendige Cookies
            bzw. vergleichbare Technologien (z.&nbsp;B. Local Storage), die für
            den Betrieb der Website erforderlich sind – etwa zur Speicherung
            deiner Cookie-Hinweis-Einstellung. Es werden keine Analyse-,
            Marketing- oder Tracking-Cookies eingesetzt. Rechtsgrundlage ist
            Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an einer
            funktionsfähigen Website).
          </p>
        </section>
        <section>
          <h2 className="text-xl text-foreground">Deine Rechte</h2>
          <p className="mt-2">
            Du hast das Recht auf Auskunft, Berichtigung, Löschung,
            Einschränkung der Verarbeitung, Datenübertragbarkeit und Widerspruch
            sowie ein Beschwerderecht bei einer Aufsichtsbehörde.
          </p>
        </section>
      </div>
    </LegalShell>
  );
};
