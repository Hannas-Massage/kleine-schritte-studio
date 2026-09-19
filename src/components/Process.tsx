import React from 'react';
import { processSteps } from '../data/content';
import { Reveal } from './Reveal';

export const Process: React.FC = () => {
  return (
    <section id="ablauf" className="mx-auto max-w-6xl px-5 py-16">
      <Reveal>
        <h2 className="text-3xl sm:text-4xl">So läuft dein Termin ab</h2>
        <p className="mt-3 max-w-xl text-muted-foreground">
          In drei einfachen Schritten zu deiner ganz persönlichen Auszeit.
        </p>
      </Reveal>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {processSteps.map((step, index) => (
          <Reveal key={step.number} delay={index * 120}>
            <article className="flex h-full flex-col rounded-3xl bg-secondary p-8 shadow-soft">
              <span className="font-serif text-3xl font-medium text-primary">
                {step.number}
              </span>
              <h3 className="mt-4 text-xl font-medium text-foreground">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
};
