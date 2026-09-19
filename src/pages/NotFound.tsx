import React from 'react';
import { LegalShell } from './LegalShell';

export const NotFound: React.FC = () => {
  return (
    <LegalShell>
      <a href="/" className="text-sm text-primary hover:underline">
        ← Zurück zur Startseite
      </a>
      <h1 className="mt-6 text-4xl">Seite nicht gefunden</h1>
      <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
        Diese Seite gibt es nicht. Du kannst zur Startseite zurück oder direkt
        einen Termin anfragen.
      </p>
    </LegalShell>
  );
};
