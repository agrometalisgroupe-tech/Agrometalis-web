'use client';
import React, { useEffect, useRef } from 'react';
import { Translations, Language } from './translations';

interface TestimonialsSectionProps {
  t: Translations;
  lang: Language;
}

function StarRating() {
  return (
    <div className="flex gap-1 mb-4">
      {[1,2,3,4,5].map(s => (
        <svg key={s} viewBox="0 0 24 24" fill="#F9A825" className="w-4 h-4">
          <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
        </svg>
      ))}
    </div>
  );
}

export default function TestimonialsSection({ t, lang }: TestimonialsSectionProps) {
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

  const testimonials = [t.testimonials.t1, t.testimonials.t2, t.testimonials.t3];
  const avatarColors = ['#1B5E20', '#0288D1', '#F9A825'];
  const avatarInitials = [
    t.testimonials.t1.name.split(' ').map(n => n[0]).join('').slice(0,2),
    t.testimonials.t2.name.split(' ').map(n => n[0]).join('').slice(0,2),
    t.testimonials.t3.name.split(' ').map(n => n[0]).join('').slice(0,2),
  ];

  return (
    <section ref={sectionRef} className="py-20 md:py-24" style={{ background: '#F5F5F5' }}>
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className={`fade-up stagger-1 text-center mb-12`}>
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-8 h-0.5" style={{ background: '#F9A825' }} />
            <span className="text-xs font-bold tracking-widest uppercase" style={{ color: '#1B5E20', fontFamily: lang === 'ar' ? 'Cairo, sans-serif' : undefined }}>
              {t.testimonials.sectionLabel}
            </span>
            <span className="w-8 h-0.5" style={{ background: '#F9A825' }} />
          </div>
          <h2 className="font-display font-bold" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', color: '#0D1B0E', fontFamily: lang === 'ar' ? 'Cairo, sans-serif' : undefined }}>
            {t.testimonials.headline}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t_item, i) => (
            <div
              key={i}
              className={`fade-up stagger-${i + 2} card-hover rounded-3xl p-7 flex flex-col ${isRtl ? 'text-right' : ''}`}
              style={{ background: '#ffffff', border: '1px solid #E5E7EB', boxShadow: '0 4px 24px rgba(0,0,0,0.06)' }}
            >
              {/* Quote mark */}
              <div className="font-display font-bold text-6xl leading-none mb-2" style={{ color: '#E8F5E9', lineHeight: 0.8 }}>"</div>

              <StarRating />

              <p className="text-ag-muted text-sm leading-relaxed flex-1 mb-6 italic" style={{ fontFamily: lang === 'ar' ? 'Cairo, sans-serif' : undefined }}>
                {t_item.quote}
              </p>

              <div className={`flex items-center gap-3 pt-4 border-t border-ag-border ${isRtl ? 'flex-row-reverse' : ''}`}>
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center font-bold text-white text-sm flex-shrink-0"
                  style={{ background: avatarColors[i] }}
                >
                  {avatarInitials[i]}
                </div>
                <div>
                  <div className="font-bold text-sm" style={{ color: '#0D1B0E', fontFamily: lang === 'ar' ? 'Cairo, sans-serif' : undefined }}>{t_item.name}</div>
                  <div className="text-xs text-ag-muted" style={{ fontFamily: lang === 'ar' ? 'Cairo, sans-serif' : undefined }}>{t_item.title}</div>
                  <div className="text-xs font-semibold" style={{ color: '#1B5E20', fontFamily: lang === 'ar' ? 'Cairo, sans-serif' : undefined }}>{t_item.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}