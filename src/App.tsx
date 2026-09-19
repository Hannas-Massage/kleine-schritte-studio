/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Highlights } from './components/Highlights';
import { Offer } from './components/Offer';
import { Process } from './components/Process';
import { Trust } from './components/Trust';
import { Story } from './components/Story';
import { Qualifications } from './components/Qualifications';
import { Pricing } from './components/Pricing';
import { Voucher } from './components/Voucher';
import { HomeVisit } from './components/HomeVisit';
import { FAQ } from './components/FAQ';
import { Hours } from './components/Hours';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { MobileContactBar } from './components/MobileContactBar';

export default function App() {
  useEffect(() => {
    if (!window.location.hash) {
      return;
    }

    const id = window.location.hash.replace('#', '');
    const el = document.getElementById(id);
    if (!el) {
      return;
    }

    window.setTimeout(() => {
      el.scrollIntoView({ behavior: 'smooth' });
    }, 150);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <Highlights />
        <Offer />
        <Process />
        <Trust />
        <Story />
        <Qualifications />
        <Pricing />
        <Voucher />
        <HomeVisit />
        <FAQ />
        <Hours />
        <Contact />
      </main>
      <ScrollToTop />
      <MobileContactBar />
      <Footer />
    </div>
  );
}
