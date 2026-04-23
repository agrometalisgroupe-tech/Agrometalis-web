'use client';
import React, { useEffect, useRef } from 'react';
import { Translations, Language } from './translations';

interface HowItWorksSectionProps {
  t: Translations;
  lang: Language;
}

export default function HowItWorksSection({ t, lang }: HowItWorksSectionProps) {
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
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const steps = [t.howItWorks.step1, t.howItWorks.step2, t.howItWorks.step3];
  const icons = [
    <svg key="1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
      <path d="M3 3h18v18H3z" /><path d="M3 9h18M9 3v18" />
    </svg>,
    <svg key="2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
      <circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="3" />
      <line x1="12" y1="2" x2="12" y2="5" /><line x1="12" y1="19" x2="12" y2="22" />
    </svg>,
    <svg key="3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" />
    </svg>,
  ];

  return (
    <section ref={sectionRef} className="py-20 md:py-24" style={{ background: '#F5F5F5', marginTop: '60px' }}>
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className={`fade-up stagger-1 text-center mb-14`}>
          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="w-8 h-0.5" style={{ background: '#F9A825' }} />
            <span className="text-xs font-bold tracking-widest uppercase" style={{ color: '#1B5E20', fontFamily: lang === 'ar' ? 'Cairo, sans-serif' : undefined }}>
              {t.howItWorks.sectionLabel}
            </span>
            <span className="w-8 h-0.5" style={{ background: '#F9A825' }} />
          </div>
          <h2 className="font-display font-bold" style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)', color: '#0D1B0E', fontFamily: lang === 'ar' ? 'Cairo, sans-serif' : undefined }}>
            {t.howItWorks.headline}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 relative">
          {/* Connector line (desktop only) */}
          <div className="absolute top-14 left-1/6 right-1/6 h-0.5 hidden md:block" style={{ background: 'linear-gradient(90deg, #F9A825, #1B5E20, #F9A825)', opacity: 0.3 }} />

          {steps.map((step, i) => (
            <div key={i} className={`fade-up stagger-${i + 2} relative`}>
              <div className="rounded-3xl p-8 text-center h-full flex flex-col items-center" style={{ background: '#ffffff', border: '1px solid #E5E7EB', boxShadow: '0 4px 24px rgba(0,0,0,0.06)' }}>
                {/* Step number */}
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 relative z-10" style={{ background: '#1B5E20' }}>
                  <div className="text-white">
                    {icons[i]}
                  </div>
                </div>
                <div className="font-display font-bold text-4xl mb-3" style={{ color: '#E8F5E9', lineHeight: 1 }}>{step.number}</div>
                <h3 className="font-bold text-lg mb-4 leading-tight" style={{ color: '#0D1B0E', fontFamily: lang === 'ar' ? 'Cairo, sans-serif' : undefined }}>
                  {step.title}
                </h3>
                <p className="text-ag-muted text-sm leading-relaxed" style={{ fontFamily: lang === 'ar' ? 'Cairo, sans-serif' : undefined }}>
                  {step.desc}
                </p>
                {/* Step indicator */}
                {i < 2 && (
                  <div className="hidden md:flex absolute -right-3 top-1/2 -translate-y-1/2 z-20 w-6 h-6 rounded-full items-center justify-center shadow-md" style={{ background: '#F9A825' }}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="#0D1B0E" strokeWidth="3" className="w-3 h-3">
                      <path d="M9 18l6-6-6-6" />
                    </svg>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}