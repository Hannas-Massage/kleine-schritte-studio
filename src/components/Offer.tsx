import React from 'react';
import { offers } from '../data/content';
import { Reveal } from './Reveal';

export const Offer: React.FC = () => {
  return (
    <section id="angebot" className="mx-auto max-w-6xl px-5 py-16">
      <Reveal>
        <h2 className="text-3xl sm:text-4xl">Mein Angebot</h2>
        <p className="mt-3 max-w-xl text-muted-foreground">
          Mehrere Wege zur Ruhe – jeder mit Herz, Zeit und achtsamer Berührung.
        </p>
      </Reveal>

      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {offers.map((item, index) => (
          <Reveal key={item.title} delay={index * 120}>
            <article className="h-full rounded-3xl bg-secondary p-8">
              {item.badge && (
                <span className="mb-3 inline-block rounded-full bg-accent px-3 py-1 text-xs font-medium text-accent-foreground">
                  {item.badge}
                </span>
              )}
              <h3 className="text-2xl text-foreground">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {item.text}
              </p>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <p className="mt-8 rounded-2xl border border-accent bg-accent/40 p-5 text-sm text-accent-foreground">
          <strong>Hinweis:</strong> Es handelt sich um eine reine
          Wellness-Massage und nicht um eine medizinische oder therapeutische
          Behandlung.
        </p>
      </Reveal>
    </section>
  );
};
