'use client';
import React, { useEffect, useRef } from 'react';
import AppImage from '../../../components/ui/AppImage';
import { Translations, Language } from './translations';

interface CropsSectionProps {
  t: Translations;
  lang: Language;
}

export default function CropsSection({ t, lang }: CropsSectionProps) {
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

  const crops = [
  {
    data: t.crops.wheat,
    image: "https://images.unsplash.com/photo-1729147888911-36d045f82897",
    alt: 'Golden wheat field with heavy grain heads, bright sunlit open field, airy warm environment',
    accent: '#1B5E20',
    icon: '🌾'
  },
  {
    data: t.crops.sugarbeet,
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_146d2c5c5-1772723996350.png",
    alt: 'Sugar beet plants with broad green leaves in rows, bright daylight agricultural field, open sky',
    accent: '#1B5E20',
    icon: '🌱'
  },
  {
    data: t.crops.rapeseed,
    image: "https://images.unsplash.com/photo-1617329774828-062a3762cad3",
    alt: 'Bright yellow rapeseed canola flower field under blue sky, vibrant open landscape, sunny day',
    accent: '#1B5E20',
    icon: '🌼'
  }];


  return (
    <section id="crops" ref={sectionRef} className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div className={`fade-up stagger-1 mb-14 ${isRtl ? 'text-right' : ''}`}>
          <div className={`flex items-center gap-3 mb-5 ${isRtl ? 'flex-row-reverse justify-end' : ''}`}>
            <span className="w-8 h-0.5" style={{ background: '#1B5E20' }} />
            <span className="text-xs font-bold tracking-widest uppercase" style={{ color: '#1B5E20', fontFamily: lang === 'ar' ? 'Cairo, sans-serif' : undefined }}>
              {t.crops.sectionLabel}
            </span>
          </div>
          <h2 className="font-display font-bold mb-4" style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)', color: '#0D1B0E', fontFamily: lang === 'ar' ? 'Cairo, sans-serif' : undefined }}>
            {t.crops.headline}
          </h2>
          <p className="text-ag-muted max-w-2xl text-[15px] leading-relaxed" style={{ fontFamily: lang === 'ar' ? 'Cairo, sans-serif' : undefined }}>
            {t.crops.subtitle}
          </p>
        </div>

        {/* Crops grid — 3 equal columns */}
        {/* Row audit: Wheat col-span-1 + SugarBeet col-span-1 + Rapeseed col-span-1 = 3/3 ✓ */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {crops.map((crop, i) =>
          <div
            key={i}
            className={`fade-up stagger-${i + 2} card-hover rounded-3xl overflow-hidden bg-white group cursor-pointer`}
            style={{ border: '1px solid #E5E7EB', boxShadow: '0 4px 24px rgba(0,0,0,0.07)' }}>
            
              {/* Image */}
              <div className="relative aspect-square overflow-hidden">
                <AppImage
                src={crop.image}
                alt={crop.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw" />
              
                {/* Icon badge */}
                <div className="absolute top-4 left-4 w-10 h-10 rounded-xl flex items-center justify-center text-xl shadow-lg" style={{ background: 'rgba(255,255,255,0.9)', backdropFilter: 'blur(8px)' }}>
                  {crop.icon}
                </div>
              </div>

              {/* Content */}
              <div className={`p-6 ${isRtl ? 'text-right' : ''}`}>
                <h3 className="font-display font-bold text-xl mb-4" style={{ color: '#0D1B0E', fontFamily: lang === 'ar' ? 'Cairo, sans-serif' : undefined }}>
                  {crop.data.name}
                </h3>

                {/* Agronomic data */}
                <div className="grid grid-cols-3 gap-2 mb-5">
                  {[
                { label: crop.data.sowing, value: crop.data.sowingValue },
                { label: crop.data.harvest, value: crop.data.harvestValue },
                { label: crop.data.yield, value: crop.data.yieldValue }].
                map((item, j) =>
                <div key={j} className="rounded-xl p-2.5 text-center" style={{ background: '#F5F5F5' }}>
                      <div className="text-[10px] text-ag-muted font-medium mb-1 leading-tight" style={{ fontFamily: lang === 'ar' ? 'Cairo, sans-serif' : undefined }}>{item.label}</div>
                      <div className="text-xs font-bold" style={{ color: crop.accent, fontFamily: lang === 'ar' ? 'Cairo, sans-serif' : undefined }}>{item.value}</div>
                    </div>
                )}
                </div>

                <p className="text-ag-muted text-sm leading-relaxed mb-5" style={{ fontFamily: lang === 'ar' ? 'Cairo, sans-serif' : undefined }}>
                  {crop.data.description}
                </p>

                {/* CTA */}
                <button
                className={`inline-flex items-center gap-2 text-sm font-bold transition-all group-hover:gap-3 ${isRtl ? 'flex-row-reverse' : ''}`}
                style={{ color: crop.accent, fontFamily: lang === 'ar' ? 'Cairo, sans-serif' : undefined }}>
                
                  {t.crops.learnMore}
                  <div className="w-8 h-8 rounded-full flex items-center justify-center transition-transform group-hover:scale-110" style={{ background: crop.accent }}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" className="w-3.5 h-3.5">
                      <path d="M7 17L17 7M17 7H7M17 7v10" />
                    </svg>
                  </div>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>);

}