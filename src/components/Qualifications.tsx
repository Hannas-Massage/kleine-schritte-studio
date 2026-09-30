import React from 'react';
import { qualifications } from '../data/content';
import { QualificationItem } from '../types';
import { Reveal } from './Reveal';

const iconClassName = 'h-8 w-8 stroke-current';

const QualificationIcon: React.FC<{ icon: QualificationItem['icon'] }> = ({
  icon,
}) => {
  if (icon === 'wellness') {
    return (
      <svg
        className={iconClassName}
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
    );
  }

  if (icon === 'sport') {
    return (
      <svg
        className={iconClassName}
        viewBox="0 0 24 24"
        fill="none"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    );
  }

  return (
    <svg
      className={iconClassName}
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M4 16v-2.38C4 11.5 2.97 10.5 3 8c.03-2.72 1.49-6 4.5-6C9.37 2 10 3.8 10 5.5c0 3.11-2 5.66-2 8.68V16a2 2 0 1 1-4 0Z" />
      <path d="M20 20v-2.38c0-2.12 1.03-3.12 1-5.62-.03-2.72-1.49-6-4.5-6C14.63 6 14 7.8 14 9.5c0 3.11 2 5.66 2 8.68V20a2 2 0 1 0 4 0Z" />
      <path d="M16 17h4" />
      <path d="M4 13h4" />
    </svg>
  );
};

export const Qualifications: React.FC = () => {
  return (
    <section id="qualifikationen" className="mx-auto max-w-6xl px-5 py-16">
      <Reveal>
        <h2 className="text-3xl sm:text-4xl">Ausbildung & Qualifikation</h2>
      </Reveal>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {qualifications.map((item, index) => (
          <Reveal key={item.title} delay={index * 120}>
            <article className="flex h-full flex-col rounded-3xl bg-secondary p-8 shadow-soft">
              <span className="text-primary">
                <QualificationIcon icon={item.icon} />
              </span>
              <h3 className="mt-4 text-xl font-medium text-foreground">
                {item.title}
              </h3>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
};
