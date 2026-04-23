'use client';
import React, { useEffect, useRef } from 'react';
import { Translations, Language } from './translations';

interface PartnersSectionProps {
  t: Translations;
  lang: Language;
}

export default function PartnersSection({ t, lang }: PartnersSectionProps) {
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

  const partners = [
    { name: 'Agri-Corp', abbr: 'AC', color: '#1B5E20' },
    { name: 'SugarCo', abbr: 'SC', color: '#0288D1' },
    { name: 'GrainTrade', abbr: 'GT', color: '#F9A825' },
    { name: 'AquaTech', abbr: 'AT', color: '#1B5E20' },
    { name: 'SoilLab', abbr: 'SL', color: '#0288D1' },
    { name: 'EuroHarvest', abbr: 'EH', color: '#F9A825' },
  ];

  return (
    <section id="partners" ref={sectionRef} className="py-16 md:py-20" style={{ background: '#ffffff', borderTop: '1px solid #E5E7EB' }}>
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className={`fade-up stagger-1 text-center mb-12`}>
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-8 h-0.5" style={{ background: '#F9A825' }} />
            <span className="text-xs font-bold tracking-widest uppercase" style={{ color: '#1B5E20', fontFamily: lang === 'ar' ? 'Cairo, sans-serif' : undefined }}>
              {t.partners.sectionLabel}
            </span>
            <span className="w-8 h-0.5" style={{ background: '#F9A825' }} />
          </div>
          <h2 className="font-display font-bold" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', color: '#0D1B0E', fontFamily: lang === 'ar' ? 'Cairo, sans-serif' : undefined }}>
            {t.partners.headline}
          </h2>
        </div>

        {/* Partner logos — horizontal scroll on mobile */}
        <div className="fade-up stagger-2 flex gap-6 overflow-x-auto hide-scrollbar md:grid md:grid-cols-6 md:overflow-visible pb-2 md:pb-0">
          {partners.map((partner, i) => (
            <div
              key={i}
              className="partner-logo flex-shrink-0 rounded-2xl flex flex-col items-center justify-center gap-3 cursor-pointer transition-all duration-400 p-6 md:p-5"
              style={{ border: '1px solid #E5E7EB', minWidth: '130px', background: '#FAFAFA' }}
            >
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center font-bold text-lg text-white shadow-sm"
                style={{ background: partner.color }}
              >
                {partner.abbr}
              </div>
              <span className="text-xs font-semibold text-center" style={{ color: '#212121', fontFamily: lang === 'ar' ? 'Cairo, sans-serif' : undefined }}>
                {partner.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}