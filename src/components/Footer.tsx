'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Language, Translations } from '../app/home-page/components/translations';

interface FooterProps {
  t: Translations;
  lang: Language;
}

export default function Footer({ t, lang }: FooterProps) {
  const [year, setYear] = useState('2025');
  const isRtl = lang === 'ar';

  useEffect(() => {
    setYear(new Date().getFullYear().toString());
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const columns = [
    {
      label: t.footer.quickLinks,
      links: [
        { label: t.footer.links.home, id: 'hero' },
        { label: t.footer.links.about, id: 'about' },
        { label: t.footer.links.sustainability, id: 'sustainability' },
        { label: t.footer.links.contact, id: 'contact' },
      ],
    },
    {
      label: t.footer.cropsLabel,
      links: [
        { label: t.footer.links.wheat, id: 'crops' },
        { label: t.footer.links.sugarbeet, id: 'crops' },
        { label: t.footer.links.rapeseed, id: 'crops' },
      ],
    },
    {
      label: t.footer.technologyLabel,
      links: [
        { label: t.footer.links.pivot, id: 'technology' },
        { label: t.footer.links.soilAnalysis, id: 'technology' },
        { label: t.footer.links.waterSaving, id: 'technology' },
      ],
    },
    {
      label: t.footer.legalLabel,
      links: [
        { label: t.footer.links.privacy, id: 'hero' },
        { label: t.footer.links.terms, id: 'hero' },
        { label: t.footer.links.certifications, id: 'hero' },
      ],
    },
  ];

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect x="2" y="9" width="4" height="12" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      ),
    },
    {
      name: 'Twitter',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
          <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
        </svg>
      ),
    },
    {
      name: 'YouTube',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
          <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
          <polygon points="9.75,15.02 15.5,12 9.75,8.98 9.75,15.02" fill="white" />
        </svg>
      ),
    },
  ];

  const certs = ['ISO 9001', 'Global G.A.P.', 'Carbon Neutral'];

  return (
    <footer style={{ background: '#0D1B0E', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 pt-14 pb-8">
        {/* Top row: logo + columns */}
        <div className={`grid grid-cols-2 md:grid-cols-5 gap-8 mb-10 ${isRtl ? 'text-right' : ''}`}>
          {/* Brand column */}
          <div className="col-span-2 md:col-span-1">
            <button onClick={() => scrollTo('hero')} className="flex items-center mb-4 transition-opacity hover:opacity-80">
              <Image 
                src="/assets/images/logo.png" 
                alt="AGROMETALIS GROUPE Logo" 
                width={240} 
                height={60} 
                className="h-16 w-auto object-contain"
              />
            </button>
            <p className="text-white/40 text-xs leading-relaxed mb-5" style={{ fontFamily: lang === 'ar' ? 'Cairo, sans-serif' : undefined }}>
              {t.footer.tagline}
            </p>
            {/* Social icons */}
            <div className={`flex gap-3 ${isRtl ? 'flex-row-reverse' : ''}`}>
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href="#"
                  aria-label={social.name}
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-white/40 hover:text-white transition-colors"
                  style={{ background: 'rgba(255,255,255,0.06)' }}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {columns.map((col, i) => (
            <div key={i}>
              <div className="text-white/30 text-[10px] font-bold uppercase tracking-widest mb-4" style={{ fontFamily: lang === 'ar' ? 'Cairo, sans-serif' : undefined }}>
                {col.label}
              </div>
              <ul className="space-y-2.5">
                {col.links.map((link, j) => (
                  <li key={j}>
                    <button
                      onClick={() => scrollTo(link.id)}
                      className="text-white/50 hover:text-white text-sm font-medium transition-colors duration-200"
                      style={{ fontFamily: lang === 'ar' ? 'Cairo, sans-serif' : undefined }}
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom row */}
        <div className={`border-t pt-6 flex flex-col md:flex-row items-center justify-between gap-4 ${isRtl ? 'md:flex-row-reverse' : ''}`} style={{ borderColor: 'rgba(255,255,255,0.08)' }}>
          <p className="text-white/30 text-sm" style={{ fontFamily: lang === 'ar' ? 'Cairo, sans-serif' : undefined }}>
            {t.footer.copyright.replace('2025', year)}
          </p>
          {/* Certifications */}
          <div className={`flex items-center gap-3 flex-wrap justify-center ${isRtl ? 'flex-row-reverse' : ''}`}>
            {certs.map((cert) => (
              <span
                key={cert}
                className="text-[10px] font-bold px-3 py-1.5 rounded-full"
                style={{ background: 'rgba(249,168,37,0.12)', color: '#F9A825', border: '1px solid rgba(249,168,37,0.25)' }}
              >
                {cert}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}