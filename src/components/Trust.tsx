import React from 'react';
import {
  googleRating,
  googleReviews,
  siteConfig,
} from '../data/content';
import { Reveal } from './Reveal';

/** Offizielles Google-G in Markenfarben, lokal eingebettet – kein Aufruf an Google. */
const GoogleMark: React.FC<{ className?: string }> = ({
  className = 'h-5 w-5',
}) => (
  <svg
    viewBox="0 0 24 24"
    className={className}
    aria-hidden="true"
    focusable="false"
  >
    <path
      fill="#4285F4"
      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
    />
    <path
      fill="#34A853"
      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
    />
    <path
      fill="#FBBC05"
      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
    />
    <path
      fill="#EA4335"
      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
    />
  </svg>
);

const StarRow: React.FC<{ label: string }> = ({ label }) => {
  return (
    <span className="inline-flex gap-0.5 text-primary" aria-label={label}>
      {Array.from({ length: 5 }).map((_, index) => (
        <svg
          key={index}
          viewBox="0 0 20 20"
          className="h-3.5 w-3.5 fill-current"
          aria-hidden="true"
        >
          <path d="M10 1.6l2.35 4.76 5.25.76-3.8 3.7.9 5.24L10 13.77l-4.7 2.29.9-5.24-3.8-3.7 5.25-.76L10 1.6z" />
        </svg>
      ))}
    </span>
  );
};

export const Trust: React.FC = () => {
  return (
    <section id="vertrauen" className="mx-auto max-w-6xl px-5 py-16">
      <Reveal>
        <h2 className="text-3xl sm:text-4xl">Stimmen bei Google</h2>
        <div className="mt-4 flex flex-wrap items-center gap-3">
          <GoogleMark className="h-7 w-7 shrink-0" />
          <p className="text-sm text-muted-foreground">
            <span className="font-semibold text-foreground">
              {googleRating.value}
            </span>{' '}
            von 5 Sternen bei Google · {googleRating.count} Bewertungen · Stand{' '}
            {googleRating.asOf}
          </p>
        </div>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
          Öffentliche Stimmen von Kundinnen und Kunden – unverändert aus dem
          Google-Eintrag von Kleine Schritte.
        </p>
      </Reveal>

      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        {googleReviews.map((review, index) => (
          <Reveal key={review.author} delay={index * 80}>
            <blockquote className="flex h-full flex-col rounded-3xl border border-border bg-card p-7 shadow-soft">
              <StarRow label={`${review.rating} von 5 Sternen`} />
              <p className="mt-4 flex-1 text-sm leading-relaxed text-foreground">
                „{review.text}“
              </p>
              <footer className="mt-5 flex items-center gap-2 text-xs font-semibold tracking-wider text-muted-foreground uppercase">
                <GoogleMark className="h-4 w-4 shrink-0" />
                <span>
                  {review.author} · Google
                </span>
              </footer>
            </blockquote>
          </Reveal>
        ))}
      </div>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
        <a
          href={siteConfig.googleMapsUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        >
          Alle Bewertungen bei Google
        </a>
        <a
          href={siteConfig.instagramUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-primary/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        >
          Eindrücke auf Instagram
        </a>
      </div>
    </section>
  );
};
