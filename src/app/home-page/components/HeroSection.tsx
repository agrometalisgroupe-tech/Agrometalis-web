'use client';
import React, { useEffect, useRef } from 'react';
import { Translations, Language } from './translations';

interface HeroSectionProps {
  t: Translations;
  lang: Language;
}

export default function HeroSection({ t, lang }: HeroSectionProps) {
  const contentRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const el = contentRef.current;
    if (!el) return;
    // Staggered entrance
    const children = el.querySelectorAll('.hero-child');
    children.forEach((child, i) => {
      (child as HTMLElement).style.opacity = '0';
      (child as HTMLElement).style.transform = 'translateY(30px)';
      setTimeout(() => {
        (child as HTMLElement).style.transition = `opacity 0.8s cubic-bezier(0.16,1,0.3,1) ${i * 150}ms, transform 0.8s cubic-bezier(0.16,1,0.3,1) ${i * 150}ms`;
        (child as HTMLElement).style.opacity = '1';
        (child as HTMLElement).style.transform = 'translateY(0)';
      }, 200 + i * 150);
    });

    // Force video play
    if (videoRef.current) {
      videoRef.current.play().catch(err => console.log("Autoplay prevented", err));
    }
  }, [lang]);

  const isRtl = lang === 'ar';

  return (
    <section id="hero" className="relative w-full min-h-screen overflow-hidden bg-black" style={{ minHeight: '100vh' }}>
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          poster="https://images.unsplash.com/photo-1558020856-f03f2727917e"
          className="w-full h-full object-cover opacity-60"
        >
          <source src="https://cdn.pixabay.com/video/2024/06/13/216620_large.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay Gradients */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40" />
      </div>

      {/* Hero content */}
      <div className="relative z-10 flex flex-col justify-end h-full max-w-7xl mx-auto px-6 md:px-10 pt-40 pb-20 md:pb-28" style={{ minHeight: '100vh' }}>
        <div ref={contentRef} className={`max-w-3xl ${isRtl ? 'ml-auto text-right' : ''}`}>
          {/* Tagline */}
          <div className="hero-child mb-6">
            <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-white/90 border border-white/30 rounded-full px-4 py-2 bg-white/5 backdrop-blur-sm" style={{ fontFamily: lang === 'ar' ? 'Cairo, sans-serif' : undefined }}>
              <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: '#F9A825' }} />
              {t.hero.tagline}
            </span>
          </div>

          {/* Headline */}
          <h1 className="hero-child font-display font-bold leading-none mb-6" style={{ fontSize: 'clamp(2.5rem, 8vw, 5.5rem)', lineHeight: 1.05, fontFamily: lang === 'ar' ? 'Cairo, sans-serif' : undefined }}>
            <span className="text-white block mb-2">{t.hero.headline1}</span>
            <span className="text-white block mb-2 opacity-90">{t.hero.headline2}</span>
            <span className="block" style={{ color: '#F9A825' }}>{t.hero.headline3}</span>
          </h1>

          {/* Subtitle */}
          <p className="hero-child text-white/80 text-lg md:text-xl leading-relaxed max-w-2xl mb-10" style={{ fontFamily: lang === 'ar' ? 'Cairo, sans-serif' : undefined }}>
            {t.hero.subtitle}
          </p>

          {/* CTAs */}
          <div className={`hero-child flex flex-wrap gap-4 ${isRtl ? 'flex-row-reverse' : ''}`}>
            <button
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-pill font-bold text-sm px-10 py-5 text-dark transition-all transform hover:scale-105 active:scale-95 shadow-xl"
              style={{ background: '#1B5E20', color: 'white', fontFamily: lang === 'ar' ? 'Cairo, sans-serif' : undefined }}>

              {t.hero.cta1}
            </button>
            <button
              onClick={() => document.getElementById('technology')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-pill font-semibold text-sm px-10 py-5 text-white border border-white/30 bg-white/5 backdrop-blur-md hover:bg-white/10 transition-all transform hover:scale-105 active:scale-95"
              style={{ fontFamily: lang === 'ar' ? 'Cairo, sans-serif' : undefined }}>

              {t.hero.cta2}
            </button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
          <span className="text-white/40 text-[10px] font-bold tracking-[0.3em] uppercase">Explore</span>
          <div className="w-px h-12 bg-gradient-to-b from-white/60 to-transparent" />
        </div>
      </div>
    </section>);
}