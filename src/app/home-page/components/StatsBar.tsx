'use client';
import React, { useEffect, useRef, useState } from 'react';
import { Translations, Language } from './translations';

interface StatsBarProps {
  t: Translations;
  lang: Language;
}

function useCountUp(target: number, duration: number, started: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!started) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [started, target, duration]);
  return count;
}

interface StatItemProps {
  value: string;
  label: string;
  numericValue: number;
  prefix?: string;
  suffix?: string;
  started: boolean;
  lang: Language;
}

function StatItem({ value, label, numericValue, prefix, suffix, started, lang }: StatItemProps) {
  const count = useCountUp(numericValue, 2000, started);
  return (
    <div className="flex flex-col items-center text-center px-6 py-2">
      <div className="font-display font-bold mb-1" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#F9A825', lineHeight: 1 }}>
        {prefix}{count.toLocaleString()}{suffix}
      </div>
      <div className="text-white/70 text-sm font-medium tracking-wide" style={{ fontFamily: lang === 'ar' ? 'Cairo, sans-serif' : undefined }}>
        {label}
      </div>
    </div>
  );
}

export default function StatsBar({ t, lang }: StatsBarProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    setStarted(false);
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setStarted(true); observer.disconnect(); } },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [lang]);

  const stats = [
    { numericValue: 12000, prefix: '', suffix: '+', label: t.stats.hectaresLabel },
    { numericValue: 3, prefix: '', suffix: '', label: t.stats.cropsLabel },
    { numericValue: 40, prefix: '', suffix: '%', label: t.stats.waterLabel },
    { numericValue: 15, prefix: '', suffix: '+', label: t.stats.yearsLabel },
  ];

  return (
    <section ref={ref} id="stats" className="relative py-6" style={{ background: '#0D3B0F' }}>
      {/* Top wave */}
      <div className="absolute top-0 left-0 right-0 overflow-hidden" style={{ height: '30px', marginTop: '-29px' }}>
        <svg viewBox="0 0 1440 30" fill="none" preserveAspectRatio="none" className="w-full h-full">
          <path d="M0 30 Q720 0 1440 30 L1440 30 L0 30 Z" fill="#0D3B0F" />
        </svg>
      </div>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-0 divide-y-2 md:divide-y-0 md:divide-x divide-white/10">
          {stats.map((stat, i) => (
            <StatItem
              key={i}
              value=""
              label={stat.label}
              numericValue={stat.numericValue}
              prefix={stat.prefix}
              suffix={stat.suffix}
              started={started}
              lang={lang}
            />
          ))}
        </div>
      </div>
    </section>
  );
}