import React from 'react';
import { siteConfig } from '../data/content';
import { ResponsiveImage } from './ResponsiveImage';
import { Reveal } from './Reveal';

export const Story: React.FC = () => {
  return (
    <section id="ueber-mich" className="bg-secondary/60 py-20">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 md:grid-cols-[1fr_18.5rem]">
        <Reveal className="md:order-2">
          <div className="mx-auto w-full max-w-sm md:ml-auto md:mr-0 md:max-w-[18.5rem]">
            <ResponsiveImage
              src="/assets/hanna-portrait.jpg"
              alt="Hanna Dederer, Gründerin von Kleine Schritte"
              width={960}
              height={1075}
              sizes="(min-width: 768px) 18.5rem, min(24rem, calc(100vw - 2.5rem))"
              className="aspect-[4/5] h-auto w-full rounded-[2rem] object-cover object-[center_42%] shadow-soft"
            />
          </div>
        </Reveal>

        <Reveal delay={120} className="md:order-1">
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
