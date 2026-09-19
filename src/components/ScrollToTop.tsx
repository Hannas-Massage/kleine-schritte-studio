import React, { useEffect, useState } from 'react';

export const ScrollToTop: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const updateVisibility = () => {
      setVisible(window.scrollY > 320);
    };

    updateVisibility();
    window.addEventListener('scroll', updateVisibility, { passive: true });
    return () => window.removeEventListener('scroll', updateVisibility);
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!visible) {
    return null;
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      className="scroll-top-btn fixed right-4 bottom-6 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-xl transition-[bottom,transform] hover:scale-110 hover:opacity-90 active:scale-95 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 sm:right-6 sm:h-14 sm:w-14"
      aria-label="Nach oben scrollen"
      title="Nach oben scrollen"
    >
      <svg
        className="h-6 w-6 stroke-current"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="2.5"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M5 15l7-7 7 7"
        />
      </svg>
    </button>
  );
};
