import React from 'react';
import { Reveal } from './Reveal';

export const Hours: React.FC = () => {
  return (
    <section className="mx-auto max-w-6xl px-5 py-16">
      <Reveal>
        <div className="grid gap-6 rounded-3xl border border-border bg-card p-8 sm:grid-cols-2">
          <div>
            <h2 className="text-2xl">Geschäftszeiten</h2>
            <p className="mt-3 text-sm text-muted-foreground">
              Termine nach Absprache – schreib mir einfach, was für dich passt.
            </p>
          </div>
          <dl className="space-y-2 text-sm">
            <div className="flex justify-between border-b border-border pb-2">
              <dt className="text-muted-foreground">Mo – Fr</dt>
              <dd className="text-foreground">08:00 – 19:30 Uhr</dd>
            </div>
            <div className="flex justify-between border-b border-border pb-2">
              <dt className="text-muted-foreground">Samstag</dt>
              <dd className="text-foreground">09:30 – 18:00 Uhr</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-muted-foreground">Sonntag</dt>
              <dd className="text-foreground">Geschlossen</dd>
            </div>
          </dl>
        </div>
      </Reveal>
    </section>
  );
};
