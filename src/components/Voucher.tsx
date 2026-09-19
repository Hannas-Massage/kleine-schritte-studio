import React from 'react';
import { createWhatsAppUrl } from '../data/content';
import { Reveal } from './Reveal';

export const Voucher: React.FC = () => {
  return (
    <section id="gutscheine" className="mx-auto max-w-6xl px-5 py-16">
      <Reveal>
        <div className="rounded-3xl bg-secondary p-8 sm:p-12 shadow-soft">
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-4xl">Verschenke eine Auszeit</h2>
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
              Eine mobile Wellnessmassage ist ein besonderes Geschenk – für Mama,
              den Partner, zum Geburtstag oder für die Großeltern. Gutscheine sind
              auf Anfrage per WhatsApp erhältlich, individuell auf Wunsch und
              Anlass abgestimmt.
            </p>
            <a
              href={createWhatsAppUrl(
                'Hallo Hanna, ich interessiere mich für einen Gutschein.'
              )}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex rounded-full bg-primary px-7 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              Gutschein anfragen
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
};
