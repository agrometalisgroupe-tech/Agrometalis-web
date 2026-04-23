'use client';
import React, { useEffect, useRef } from 'react';
import AppImage from '../../../components/ui/AppImage';
import { Translations, Language } from './translations';

interface TechnologySectionProps {
  t: Translations;
  lang: Language;
}

export default function TechnologySection({ t, lang }: TechnologySectionProps) {
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

  const features = [
  {
    icon:
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
          <circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="3" />
          <line x1="12" y1="2" x2="12" y2="5" /><line x1="12" y1="19" x2="12" y2="22" />
          <line x1="2" y1="12" x2="5" y2="12" /><line x1="19" y1="12" x2="22" y2="12" />
        </svg>,

    title: t.technology.pivot.title,
    desc: t.technology.pivot.desc,
    badge: 'VRI · GPS',
    color: '#F9A825'
  },
  {
    icon:
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
          <path d="M3 3h18v18H3z" /><path d="M3 9h18M3 15h18M9 3v18M15 3v18" />
        </svg>,

    title: t.technology.soil.title,
    desc: t.technology.soil.desc,
    badge: '2.5ha Grid',
    color: '#0288D1'
  },
  {
    icon:
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
          <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
        </svg>,

    title: t.technology.water.title,
    desc: t.technology.water.desc,
    badge: '−40% H₂O',
    color: '#4CAF50'
  },
  {
    icon:
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
          <rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8M12 17v4" />
        </svg>,

    title: t.technology.digital.title,
    desc: t.technology.digital.desc,
    badge: 'NDVI · IoT',
    color: '#9C27B0'
  }];


  return (
    <section id="technology" ref={sectionRef} className="py-20 md:py-28 relative" style={{ background: '#0D1B0E' }}>
      {/* Top diagonal */}
      <div className="absolute top-0 left-0 right-0 overflow-hidden" style={{ height: '60px', marginTop: '-59px' }}>
        <svg viewBox="0 0 1440 60" fill="none" preserveAspectRatio="none" className="w-full h-full">
          <polygon points="0,60 1440,0 1440,60" fill="#0D1B0E" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section label + headline */}
        <div className={`fade-up stagger-1 mb-14 ${isRtl ? 'text-right' : ''}`}>
          <div className={`flex items-center gap-3 mb-5 ${isRtl ? 'flex-row-reverse justify-end' : ''}`}>
            <span className="w-8 h-0.5" style={{ background: '#1B5E20' }} />
            <span className="text-xs font-bold tracking-widest uppercase" style={{ color: 'white', opacity: 0.6, fontFamily: lang === 'ar' ? 'Cairo, sans-serif' : undefined }}>
              {t.technology.sectionLabel}
            </span>
          </div>
          <h2 className="font-display font-bold text-white mb-4" style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)', fontFamily: lang === 'ar' ? 'Cairo, sans-serif' : undefined }}>
            {t.technology.headline}
          </h2>
          <p className="text-white/60 max-w-xl text-[15px] leading-relaxed" style={{ fontFamily: lang === 'ar' ? 'Cairo, sans-serif' : undefined }}>
            {t.technology.subtitle}
          </p>
        </div>

        {/* Split layout */}
        <div className={`grid md:grid-cols-2 gap-12 items-center ${isRtl ? 'md:flex-row-reverse' : ''}`}>
          {/* Pivot image — left on LTR */}
          <div className={`fade-up stagger-2 ${isRtl ? 'md:order-2' : ''}`}>
            <div className="relative overflow-hidden shadow-2xl" style={{ borderRadius: '40px 40px 120px 40px' }}>
              <div className="aspect-[4/5]">
                <AppImage
                  src="https://images.unsplash.com/photo-1623749895263-1517c4c5e7ba"
                  alt="Center pivot irrigation system at dusk, dark atmospheric scene, deep shadows, moody industrial agricultural lighting"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw" />
                
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(13,27,14,0.8) 0%, transparent 60%)' }} />
              </div>

            </div>
          </div>

          {/* Feature blocks — right on LTR */}
          <div className={`fade-up stagger-3 space-y-5 ${isRtl ? 'md:order-1' : ''}`}>
            {features.map((feat, i) =>
            <div
              key={i}
              className={`feature-block rounded-2xl p-5 border border-white/10`}
              style={{ background: 'rgba(255,255,255,0.04)' }}>
              
                <div className={`flex items-start gap-4 ${isRtl ? 'flex-row-reverse' : ''}`}>
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: 'rgba(255,255,255,0.08)', color: 'white' }}>
                    {feat.icon}
                  </div>
                  <div className={`flex-1 ${isRtl ? 'text-right' : ''}`}>
                    <div className={`flex items-center gap-2 mb-2 ${isRtl ? 'flex-row-reverse justify-end' : ''}`}>
                      <h3 className="text-white font-bold text-sm" style={{ fontFamily: lang === 'ar' ? 'Cairo, sans-serif' : undefined }}>{feat.title}</h3>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full" style={{ background: 'rgba(255,255,255,0.15)', color: 'white' }}>{feat.badge}</span>
                    </div>
                    <p className="text-white/55 text-sm leading-relaxed" style={{ fontFamily: lang === 'ar' ? 'Cairo, sans-serif' : undefined }}>{feat.desc}</p>
                  </div>
                </div>
              </div>
            )}

            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-pill font-bold text-sm px-8 py-4 text-dark mt-4 inline-flex items-center gap-2"
              style={{ background: '#1B5E20', color: 'white', fontFamily: lang === 'ar' ? 'Cairo, sans-serif' : undefined }}>
              
              {t.technology.cta}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-4 h-4">
                <path d="M7 17L17 7M17 7H7M17 7v10" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Bottom diagonal */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden" style={{ height: '60px', marginBottom: '-59px' }}>
        <svg viewBox="0 0 1440 60" fill="none" preserveAspectRatio="none" className="w-full h-full">
          <polygon points="0,0 1440,60 0,60" fill="#0D1B0E" />
        </svg>
      </div>
    </section>);

}