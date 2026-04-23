'use client';
import React, { useEffect, useRef } from 'react';
import AppImage from '../../../components/ui/AppImage';
import { Translations, Language } from './translations';

interface SustainabilitySectionProps {
  t: Translations;
  lang: Language;
}

export default function SustainabilitySection({ t, lang }: SustainabilitySectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isRtl = lang === 'ar';

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.fade-up').forEach((el) => el.classList.add('visible'));
          }
        });
      },
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const pillars = [
    {
      data: t.sustainability.pillar1,
      icon: <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />,
      stat: '40%',
      color: '#81C784'
    },
    {
      data: t.sustainability.pillar2,
      icon: <path d="M12 22V12M12 12C12 6 7 2 2 2c0 5 4 10 10 10zM12 12c0-6 5-10 10-10-1 5-4 10-10 10z" />,
      stat: '3x',
      color: '#81C784'
    },
    {
      data: t.sustainability.pillar3,
      icon: <><path d="M5 3l14 9-14 9V3z" /><path d="M19 3v18" /></>,
      stat: '2030',
      color: '#81C784'
    }
  ];

  return (
    <section id="sustainability" ref={sectionRef} className="relative py-24 md:py-32 overflow-hidden bg-[#0D1B0E]">
      {/* Background Image with optimized overlay */}
      <div className="absolute inset-0 z-0">
        <AppImage
          src="https://img.rocket.new/generatedImages/rocket_gen_img_1ed44d8a9-1776170854711.png"
          alt="Sustainable agriculture at dusk"
          fill
          className="object-cover object-center opacity-40 grayscale"
          sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-br from-[#0D1B0E] via-[#0D1B0E]/95 to-[#0D1B0E]/90" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">
        {/* Header Section */}
        <div className={`grid lg:grid-cols-2 gap-12 items-end mb-20 fade-up stagger-1 ${isRtl ? 'text-right' : ''}`}>
          <div>
            <div className={`flex items-center gap-4 mb-6 ${isRtl ? 'flex-row-reverse justify-end' : ''}`}>
              <span className="w-12 h-1 bg-[#1B5E20]" />
              <span className="text-sm font-black tracking-[0.2em] uppercase text-white/60" style={{ fontFamily: lang === 'ar' ? 'Cairo, sans-serif' : undefined }}>
                {t.sustainability.sectionLabel}
              </span>
            </div>
            <h2 className="font-display font-bold text-white leading-tight mb-0" style={{ fontSize: 'clamp(2.25rem, 5vw, 3.75rem)', fontFamily: lang === 'ar' ? 'Cairo, sans-serif' : undefined }}>
              {t.sustainability.headline}
            </h2>
          </div>
          <div>
            <p className="text-white/70 text-lg leading-relaxed max-w-xl" style={{ fontFamily: lang === 'ar' ? 'Cairo, sans-serif' : undefined }}>
              {t.sustainability.subtitle}
            </p>
          </div>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {pillars.map((pillar, i) => (
            <div
              key={i}
              className={`fade-up stagger-${i + 2} group relative rounded-[2.5rem] p-10 overflow-hidden transition-all duration-500 hover:-translate-y-2 ${isRtl ? 'text-right' : ''}`}
              style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)' }}>
              
              <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-[0.07] transition-opacity">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-32 h-32">
                  {pillar.icon}
                </svg>
              </div>

              <div className={`flex items-center gap-6 mb-8 ${isRtl ? 'flex-row-reverse' : ''}`}>
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0" style={{ background: `${pillar.color}20`, color: pillar.color }}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-8 h-8">
                    {pillar.icon}
                  </svg>
                </div>
                <div>
                  <div className="font-display font-bold text-4xl text-white tracking-tight">{pillar.stat}</div>
                </div>
              </div>
              
              <h3 className="text-white font-bold text-xl mb-4" style={{ fontFamily: lang === 'ar' ? 'Cairo, sans-serif' : undefined }}>
                {pillar.data.title}
              </h3>
              <p className="text-white/50 text-[15px] leading-relaxed" style={{ fontFamily: lang === 'ar' ? 'Cairo, sans-serif' : undefined }}>
                {pillar.data.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Carbon Credits Specialized Section */}
        <div className={`fade-up stagger-5 mt-8 p-1 md:p-1.5 rounded-[3rem] bg-gradient-to-r from-[#1B5E20]/30 via-transparent to-[#1B5E20]/30`}>
          <div className={`rounded-[2.8rem] p-8 md:p-12 flex flex-col md:flex-row items-center gap-10 md:gap-16 ${isRtl ? 'md:flex-row-reverse text-right' : ''}`} style={{ background: '#0D1B0E' }}>
            <div className="flex-shrink-0 relative">
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-[2rem] flex items-center justify-center bg-gradient-to-br from-[#1B5E20] to-[#2E7D32] text-white shadow-2xl relative z-10">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-12 h-12 md:w-16 md:h-16">
                  <path d="M12 2v20M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10M12 2a15.3 15.3 0 0 0-4 10 15.3 15.3 0 0 0 4 10" />
                </svg>
              </div>
              <div className="absolute inset-0 bg-[#1B5E20] blur-3xl opacity-20 -z-10" />
            </div>
            
            <div className="flex-grow">
              <div className={`flex items-center gap-3 mb-4 ${isRtl ? 'flex-row-reverse' : ''}`}>
                <span className="text-[10px] font-black tracking-[0.4em] uppercase text-white/60">New Service</span>
                <div className="h-px flex-grow bg-white/10" />
              </div>
              <h3 className="text-white font-display font-bold text-3xl mb-4" style={{ fontFamily: lang === 'ar' ? 'Cairo, sans-serif' : undefined }}>
                {t.sustainability.carbonCredits.title}
              </h3>
              <p className="text-white/70 text-lg leading-relaxed max-w-3xl" style={{ fontFamily: lang === 'ar' ? 'Cairo, sans-serif' : undefined }}>
                {t.sustainability.carbonCredits.desc}
              </p>
            </div>

            <div className="flex-shrink-0">
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-pill px-8 py-4 bg-white text-[#0D1B0E] font-bold text-sm hover:bg-[#1B5E20] hover:text-white transition-all transform hover:scale-105"
                style={{ fontFamily: lang === 'ar' ? 'Cairo, sans-serif' : undefined }}>
                {lang === 'ar' ? 'استكشف أرصدة الكربون' : lang === 'fr' ? 'Explorer les crédits' : 'Explore Credits'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}