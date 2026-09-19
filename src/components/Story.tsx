import React from 'react';
import { siteConfig } from '../data/content';
import { Reveal } from './Reveal';

export const Story: React.FC = () => {
  return (
    <section id="ueber-mich" className="bg-secondary/60 py-20">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 md:grid-cols-2">
        <Reveal>
          <img
            src="/assets/story-ambiance-C8V-VdEu.jpg"
            alt="Kerze, Handtücher und Steine – ruhige Wellness-Atmosphäre für die Massage zuhause"
            loading="lazy"
            width={1200}
            height={1408}
            className="w-full rounded-[2rem] object-cover shadow-soft"
          />
        </Reveal>

        <Reveal delay={120}>
          <h2 className="text-3xl sm:text-4xl">Meine Geschichte</h2>
          <div className="mt-5 space-y-4 text-sm leading-relaxed text-muted-foreground">
            <p>
              Ich bin {siteConfig.owner}. Nach meinen Kursen habe ich genau das
              gespürt: Mein Leben hat sich verändert.
            </p>
            <p>
              Schon lange wollte ich Menschen helfen, aber wegen meiner
              Gesundheit hatte ich Angst anzufangen. Jetzt weiß ich: Das ist
              genau mein Weg.
            </p>
            <p>
              Ich stehe noch am Anfang, aber ich mache alles mit Herz, Ruhe und
              positiver Energie. Und ich werde weiter lernen und wachsen, damit
              ich meine Arbeit immer besser machen kann.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
