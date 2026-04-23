'use client';
import React, { useState, useEffect } from 'react';
import { translations, Language } from './components/translations';
import NavBar from './components/NavBar';
import HeroSection from './components/HeroSection';
import StatsBar from './components/StatsBar';
import AboutSection from './components/AboutSection';
import CropsSection from './components/CropsSection';
import TechnologySection from './components/TechnologySection';
import HowItWorksSection from './components/HowItWorksSection';
import SustainabilitySection from './components/SustainabilitySection';
import PartnersSection from './components/PartnersSection';
import TestimonialsSection from './components/TestimonialsSection';
import ContactSection from './components/ContactSection';
import Footer from '@/components/Footer';

export default function HomePage() {
  const [lang, setLang] = useState<Language>('en');

  const handleLanguageChange = (newLang: Language) => {
    setLang(newLang);
  };

  // Apply RTL direction and Arabic font to document
  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;
    if (lang === 'ar') {
      html.setAttribute('dir', 'rtl');
      html.setAttribute('lang', 'ar');
      body.classList.add('rtl');
      body.style.fontFamily = 'Cairo, sans-serif';
    } else {
      html.setAttribute('dir', 'ltr');
      html.setAttribute('lang', lang);
      body.classList.remove('rtl');
      body.style.fontFamily = '';
    }
  }, [lang]);

  const t = translations[lang];

  return (
    <main className="lang-transition" style={{ opacity: 1 }}>
      <NavBar t={t} lang={lang} onLanguageChange={handleLanguageChange} />
      <HeroSection t={t} lang={lang} />
      <StatsBar t={t} lang={lang} />
      <AboutSection t={t} lang={lang} />
      <CropsSection t={t} lang={lang} />
      <TechnologySection t={t} lang={lang} />
      <HowItWorksSection t={t} lang={lang} />
      <SustainabilitySection t={t} lang={lang} />
      <PartnersSection t={t} lang={lang} />
      <TestimonialsSection t={t} lang={lang} />
      <ContactSection t={t} lang={lang} />
      <Footer t={t} lang={lang} />
    </main>
  );
}