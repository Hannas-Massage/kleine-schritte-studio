import React from 'react';
import { Reveal } from './Reveal';

export const HomeVisit: React.FC = () => {
  return (
    <section className="bg-calm py-20">
      <div className="mx-auto max-w-3xl px-5 text-center">
        <Reveal>
          <h2 className="text-3xl sm:text-4xl">
            Entspannung, ganz nach deinen Wünschen
          </h2>
          <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
            Mit meiner Wellness Massage bringe ich Ruhe, Wärme und achtsame
            Berührung in deinen Alltag. Jede Behandlung wird ganz auf dich und
            deine Bedürfnisse abgestimmt – mit hochwertigen Ölen, ruhiger Musik
            und der Zeit, die du dir verdienst. Kein Stress, kein Zeitdruck –
            nur Raum für dich und deine Entspannung.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3 text-sm">
            <span className="inline-flex items-center gap-2 rounded-full bg-card px-5 py-2.5">
              <svg
                className="h-4 w-4 shrink-0 stroke-primary"
                viewBox="0 0 24 24"
                fill="none"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
                <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
              </svg>
              Hochwertige Öle
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-card px-5 py-2.5">
              <svg
                className="h-4 w-4 shrink-0 stroke-primary"
                viewBox="0 0 24 24"
                fill="none"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M12 3c.4 1.2 1.2 2.2 1.2 3.2a1.2 1.2 0 0 1-2.4 0C10.8 5.2 11.6 4.2 12 3Z" />
                <path d="M9 21h6" />
                <path d="M8.5 10h7v8.5a1.5 1.5 0 0 1-1.5 1.5h-4a1.5 1.5 0 0 1-1.5-1.5V10Z" />
              </svg>
              Ruhige Atmosphäre
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
