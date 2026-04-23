'use client';
import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';

import { Translations, Language } from './translations';

interface NavBarProps {
  t: Translations;
  lang: Language;
  onLanguageChange: (lang: Language) => void;
}

export default function NavBar({ t, lang, onLanguageChange }: NavBarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const scrollTo = useCallback((id: string) => {
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }, []);

  const navLinks = [
    { key: 'home', id: 'hero' },
    { key: 'about', id: 'about' },
    { key: 'crops', id: 'crops' },
    { key: 'technology', id: 'technology' },
    { key: 'sustainability', id: 'sustainability' },
    { key: 'partners', id: 'partners' },
    { key: 'contact', id: 'contact' },
  ] as const;

  const [langMenuOpen, setLangMenuOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (langMenuOpen) setLangMenuOpen(false);
    };
    window.addEventListener('click', handleClickOutside);
    return () => window.removeEventListener('click', handleClickOutside);
  }, [langMenuOpen]);

  const languages = [
    { 
      code: 'en' as Language, 
      label: 'English', 
      flag: (
        <svg viewBox="0 0 640 480" className="w-5 h-4 rounded-sm shadow-sm">
          <path fill="#bd3d44" d="M0 0h640v480H0z"/><path stroke="#fff" strokeWidth="37" d="M0 55.4h640m0 73.8H0m0 73.9h640m0 73.8H0m0 73.9h640m0 73.8H0"/><path fill="#192f5d" d="M0 0h256v258.5H0z"/><g fill="#fff"><g id="c"><g id="b"><path id="a" d="M30 45.6l9 28.2-24-17.5h30L21 73.8z"/><use xlinkHref="#a" x="42"/><use xlinkHref="#a" x="84"/><use xlinkHref="#a" x="126"/><use xlinkHref="#a" x="168"/><use xlinkHref="#a" x="210"/></g><use xlinkHref="#b" x="-21" y="24.2"/></g><use xlinkHref="#c" y="48.4"/><use xlinkHref="#c" y="96.8"/><use xlinkHref="#c" y="145.2"/><path d="M30 239.1l9 28.2-24-17.5h30L21 267.3z"/><use xlinkHref="#a" x="42" y="193.5"/><use xlinkHref="#a" x="84" y="193.5"/><use xlinkHref="#a" x="126" y="193.5"/><use xlinkHref="#a" x="168" y="193.5"/><use xlinkHref="#a" x="210" y="193.5"/></g>
        </svg>
      )
    },
    { 
      code: 'fr' as Language, 
      label: 'Français', 
      flag: (
        <svg viewBox="0 0 640 480" className="w-5 h-4 rounded-sm shadow-sm">
          <path fill="#fff" d="M0 0h640v480H0z"/><path fill="#00267f" d="M0 0h213.3v480H0z"/><path fill="#f31830" d="M426.7 0H640v480H426.7z"/>
        </svg>
      )
    },
    { 
      code: 'ar' as Language, 
      label: 'العربية', 
      flag: (
        <svg viewBox="0 0 640 480" className="w-5 h-4 rounded-sm shadow-sm">
          <path fill="#c1272d" d="M0 0h640v480H0z"/><path fill="none" stroke="#006233" strokeWidth="11.7" d="M320 125.1l29.4 90.4h95.1L367.5 271l29.4 90.4L320 305.5l-76.9 55.9 29.4-90.4-76.9-55.5h95.1z"/>
        </svg>
      )
    }
  ];

  const currentLang = languages.find(l => l.code === lang) || languages[0];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'navbar-scrolled py-3' : 'py-5'
        }`}
        style={{ background: scrolled ? undefined : 'transparent' }}
      >
        <div className="max-w-7xl mx-auto px-5 md:px-10 flex items-center justify-between gap-4">
          {/* Logo */}
          <button onClick={() => scrollTo('hero')} className="flex items-center flex-shrink-0 transition-opacity hover:opacity-90">
            <span className="text-2xl font-black tracking-widest text-white font-display">
              AGROMETALIS
            </span>
          </button>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-7">
            {navLinks.map(({ key, id }) => (
              <button
                key={key}
                onClick={() => scrollTo(id)}
                className="text-white/80 hover:text-white text-sm font-medium transition-colors duration-200"
                style={{ fontFamily: lang === 'ar' ? 'Cairo, sans-serif' : undefined }}
              >
                {t.nav[key as keyof typeof t.nav]}
              </button>
            ))}
          </div>

          {/* Right side: Language + CTA */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Language switcher Dropdown */}
            <div className="relative">
              <button
                onClick={(e) => { e.stopPropagation(); setLangMenuOpen(!langMenuOpen); }}
                className="flex items-center gap-2 bg-white/10 hover:bg-white/20 rounded-full px-4 py-2 text-white text-xs font-bold transition-all"
              >
                {currentLang.flag}
                <span className="uppercase" style={{ fontFamily: lang === 'ar' ? 'Cairo, sans-serif' : undefined }}>{currentLang.code}</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className={`w-3 h-3 transition-transform ${langMenuOpen ? 'rotate-180' : ''}`}>
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </button>

              {langMenuOpen && (
                <div className="absolute top-full mt-2 right-0 w-36 py-2 rounded-2xl shadow-2xl menu-slide-down" style={{ background: 'rgba(13,27,14,0.95)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255,255,255,0.1)' }}>
                  {languages.map((l) => (
                    <button
                      key={l.code}
                      onClick={() => { onLanguageChange(l.code); setLangMenuOpen(false); }}
                      className={`w-full flex items-center gap-3 px-4 py-2.5 text-xs font-bold transition-colors ${lang === l.code ? 'text-[#F9A825]' : 'text-white/70 hover:text-white hover:bg-white/5'}`}
                    >
                      {l.flag}
                      <span style={{ fontFamily: l.code === 'ar' ? 'Cairo, sans-serif' : undefined }}>{l.label}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* CTA */}
            <button
              onClick={() => scrollTo('contact')}
              className="btn-pill text-xs font-bold px-5 py-2.5 text-dark transition-all"
              style={{ background: '#F9A825', fontFamily: lang === 'ar' ? 'Cairo, sans-serif' : undefined }}
            >
              {t.nav.cta}
            </button>
          </div>,

          {/* Mobile hamburger */}
          <button
            className="lg:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-40 menu-slide-down"
          style={{ background: 'rgba(13,27,14,0.97)', backdropFilter: 'blur(12px)' }}
        >
          <div className="flex flex-col h-full px-6 pt-24 pb-10">
            <nav className="flex flex-col gap-2 flex-1">
              {navLinks.map(({ key, id }) => (
                <button
                  key={key}
                  onClick={() => scrollTo(id)}
                  className="text-left text-white/80 hover:text-white text-2xl font-bold py-3 border-b border-white/10 transition-colors"
                  style={{ fontFamily: lang === 'ar' ? 'Cairo, sans-serif' : 'Fraunces, serif', textAlign: lang === 'ar' ? 'right' : 'left' }}
                >
                  {t.nav[key as keyof typeof t.nav]}
                </button>
              ))}
            </nav>
            {/* Mobile language + CTA */}
            <div className="mt-8 flex flex-col gap-4">
              <div className="grid grid-cols-3 gap-3">
                {languages.map((l) => (
                  <button
                    key={l.code}
                    onClick={() => onLanguageChange(l.code)}
                    className={`flex flex-col items-center gap-2 p-3 rounded-2xl transition-all ${
                      lang === l.code ? 'text-dark shadow-lg' : 'text-white/60 bg-white/5 border border-white/10'
                    }`}
                    style={{ background: lang === l.code ? '#F9A825' : undefined }}
                  >
                    <div className="scale-125">{l.flag}</div>
                    <span className="text-[10px] font-bold uppercase tracking-widest">{l.code}</span>
                  </button>
                ))}
              </div>
              <button
                onClick={() => scrollTo('contact')}
                className="btn-pill text-sm font-bold px-6 py-3 text-dark w-full"
                style={{ background: '#F9A825' }}
              >
                {t.nav.cta}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}