import React from 'react';
import { Footer } from '../components/Footer';
import { MobileContactBar } from '../components/MobileContactBar';

interface LegalShellProps {
  children: React.ReactNode;
}

export const LegalShell: React.FC<LegalShellProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="mx-auto max-w-3xl px-5 py-20">{children}</main>
      <Footer />
      <MobileContactBar />
    </div>
  );
};
