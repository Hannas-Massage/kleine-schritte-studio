import React from 'react';
import { Reveal } from './Reveal';

export const Voucher: React.FC = () => {
  return (
    <section id="gutscheine" className="mx-auto max-w-6xl px-5 py-16">
      <Reveal>
        <div className="rounded-3xl bg-secondary p-8 sm:p-12 shadow-soft">
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-4xl">Verschenke eine Auszeit</h2>
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
              Eine Wellnessmassage ist ein besonderes Geschenk – für Mama, Papa,
              den Partner, zum Geburtstag, für die Großeltern oder um Freund oder
              Freundin einfach mal zu überraschen. Wähle einfach deinen
              Wunschbetrag und bezahle bequem und sicher online – den Gutschein
              kannst du dann ganz einfach weitergeben.
            </p>
            <a
              href="https://giftcards.sumup.com/order/M47F9B75"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex rounded-full bg-primary px-7 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              Gutschein kaufen
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
};
