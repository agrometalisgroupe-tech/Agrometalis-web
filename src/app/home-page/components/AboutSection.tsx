'use client';
import React, { useEffect, useRef } from 'react';
import AppImage from '../../../components/ui/AppImage';
import { Translations, Language } from './translations';

interface AboutSectionProps {
  t: Translations;
  lang: Language;
}

export default function AboutSection({ t, lang }: AboutSectionProps) {
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

  return (
    <section id="about" ref={sectionRef} className="py-24 md:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className={`grid lg:grid-cols-2 gap-20 items-start ${isRtl ? 'md:flex-row-reverse' : ''}`}>
          
          {/* Visual Side */}
          <div className={`fade-up stagger-1 relative ${isRtl ? 'lg:order-2' : ''}`}>
            <div className="relative z-10">
              <div className="overflow-hidden shadow-2xl rounded-[2.5rem] aspect-[4/5] md:aspect-auto md:h-[700px]">
                <AppImage
                  src="https://img.rocket.new/generatedImages/rocket_gen_img_1c23a3229-1769849729612.png"
                  alt="Corporate agriculture representation, modern farming expertise"
                  fill
                  className="object-cover object-center grayscale-[20%] hover:grayscale-0 transition-all duration-700"
                  sizes="(max-width: 1024px) 100vw, 50vw" />
              </div>
              
              {/* Floating Stat Badge */}
              <div className="absolute -bottom-10 -left-10 md:left-auto md:-right-10 rounded-[2rem] p-8 shadow-2xl border border-white/10" style={{ background: '#1B5E20' }}>
                <div className="text-white font-display font-bold text-5xl leading-none tracking-tight">15+</div>
                <div className="text-white/80 text-xs mt-2 font-bold tracking-widest uppercase" style={{ fontFamily: lang === 'ar' ? 'Cairo, sans-serif' : undefined }}>
                  {lang === 'ar' ? 'سنة من الخبرة' : lang === 'fr' ? "Ans d'expertise" : 'Years of Expertise'}
                </div>
              </div>
            </div>
            
            {/* Decorative Element */}
            <div className="absolute -top-10 -left-10 w-40 h-40 border-l-4 border-t-4 opacity-20" style={{ borderColor: '#1B5E20' }} />
          </div>

          {/* Content Side */}
          <div className={`fade-up stagger-2 ${isRtl ? 'lg:order-1 text-right' : ''}`}>
            <div className={`flex items-center gap-4 mb-8 ${isRtl ? 'flex-row-reverse' : ''}`}>
              <span className="w-12 h-1" style={{ background: '#1B5E20' }} />
              <span className="text-sm font-black tracking-[0.2em] uppercase" style={{ color: '#1B5E20', fontFamily: lang === 'ar' ? 'Cairo, sans-serif' : undefined }}>
                {t.about.sectionLabel}
              </span>
            </div>

            <h2 className="font-display font-bold leading-[1.1] mb-10" style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)', color: '#0D1B0E', fontFamily: lang === 'ar' ? 'Cairo, sans-serif' : undefined }}>
              {t.about.headline}
            </h2>

            <div className="space-y-6 mb-16">
              {[t.about.p1, t.about.p2, t.about.p3, t.about.p4, t.about.p5].map((p, i) => (
                <p key={i} className="text-ag-muted leading-relaxed text-[17px] font-medium opacity-90" style={{ fontFamily: lang === 'ar' ? 'Cairo, sans-serif' : undefined }}>
                  {p}
                </p>
              ))}
            </div>

            {/* Mission & Vision Cards */}
            <div className="grid md:grid-cols-2 gap-6 mb-16">
              <div className="p-8 rounded-3xl border border-ag-border bg-ag-light hover:border-ag-primary transition-colors">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6" style={{ background: 'rgba(27, 94, 32, 0.1)', color: '#1B5E20' }}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-6 h-6">
                    <path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" />
                  </svg>
                </div>
                <h3 className="font-bold text-xl mb-3" style={{ color: '#0D1B0E', fontFamily: lang === 'ar' ? 'Cairo, sans-serif' : undefined }}>{t.about.mission}</h3>
                <p className="text-ag-muted text-sm leading-relaxed" style={{ fontFamily: lang === 'ar' ? 'Cairo, sans-serif' : undefined }}>{t.about.missionText}</p>
              </div>
              
              <div className="p-8 rounded-3xl border border-ag-border bg-ag-light hover:border-ag-primary transition-colors">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6" style={{ background: 'rgba(27, 94, 32, 0.1)', color: '#1B5E20' }}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-6 h-6">
                    <circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="4" />
                  </svg>
                </div>
                <h3 className="font-bold text-xl mb-3" style={{ color: '#0D1B0E', fontFamily: lang === 'ar' ? 'Cairo, sans-serif' : undefined }}>{t.about.vision}</h3>
                <p className="text-ag-muted text-sm leading-relaxed" style={{ fontFamily: lang === 'ar' ? 'Cairo, sans-serif' : undefined }}>{t.about.visionText}</p>
              </div>
            </div>

            {/* Values & Commitments Lists */}
            <div className="space-y-12">
              <div>
                <h3 className="text-sm font-black tracking-widest uppercase mb-8" style={{ color: '#1B5E20', fontFamily: lang === 'ar' ? 'Cairo, sans-serif' : undefined }}>{t.about.values}</h3>
                <div className="grid md:grid-cols-2 gap-y-8 gap-x-12">
                  {t.about.valuesList.map((val, i) => (
                    <div key={i} className="group">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-2 h-2 rounded-full bg-ag-primary group-hover:w-4 transition-all" />
                        <h4 className="font-bold text-base" style={{ fontFamily: lang === 'ar' ? 'Cairo, sans-serif' : undefined }}>{val.title}</h4>
                      </div>
                      <p className="text-ag-muted text-sm leading-relaxed pl-5" style={{ fontFamily: lang === 'ar' ? 'Cairo, sans-serif' : undefined }}>{val.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-12 border-t border-ag-border">
                <h3 className="text-sm font-black tracking-widest uppercase mb-8" style={{ color: '#1B5E20', fontFamily: lang === 'ar' ? 'Cairo, sans-serif' : undefined }}>{t.about.engagements}</h3>
                <div className="grid md:grid-cols-2 gap-y-8 gap-x-12">
                  {t.about.engagementsList.map((eng, i) => (
                    <div key={i} className="group">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-2 h-2 rounded-full bg-ag-secondary group-hover:w-4 transition-all" />
                        <h4 className="font-bold text-base" style={{ fontFamily: lang === 'ar' ? 'Cairo, sans-serif' : undefined }}>{eng.title}</h4>
                      </div>
                      <p className="text-ag-muted text-sm leading-relaxed pl-5" style={{ fontFamily: lang === 'ar' ? 'Cairo, sans-serif' : undefined }}>{eng.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}