import React from 'react';
import { Reveal } from './Reveal';

export const Qualifications: React.FC = () => {
  return (
    <section id="qualifikationen" className="mx-auto max-w-6xl px-5 py-12">
      <Reveal>
        <div className="rounded-3xl border border-border bg-card p-8 sm:p-10 shadow-soft">
          <h2 className="text-2xl sm:text-3xl">Ausbildung & Qualifikation</h2>
          <div className="mt-6 rounded-2xl border border-dashed border-primary/40 bg-accent/30 p-5 text-sm leading-relaxed text-muted-foreground">
            <span className="font-semibold text-primary">Hinweis (TODO):</span>{' '}
            [Hier die abgeschlossenen Kurse/Zertifikate eintragen, z. B. Ausbildung
            in Wellnessmassage, Lomi Lomi Nui – bitte durch Hannas echte Angaben
            ersetzen, nichts erfinden.]
          </div>
        </div>
      </Reveal>
    </section>
  );
};
