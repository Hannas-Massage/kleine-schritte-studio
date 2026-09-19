import React from 'react';
import { highlights } from '../data/content';
import { Reveal } from './Reveal';

export const Highlights: React.FC = () => {
  return (
    <section className="mx-auto max-w-6xl px-5 py-14">
      <div className="grid gap-4 sm:grid-cols-3">
        {highlights.map((item, index) => (
          <Reveal key={item.title} delay={index * 100}>
            <div className="h-full rounded-3xl border border-border bg-card p-7">
              <p className="font-display text-2xl text-foreground">
                {item.title}
              </p>
              <p className="mt-2 text-sm text-muted-foreground">{item.text}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
};
