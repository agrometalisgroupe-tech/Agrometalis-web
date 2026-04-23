'use client';
import React, { useEffect, useRef, useState } from 'react';
import { Translations, Language } from './translations';

interface ContactSectionProps {
  t: Translations;
  lang: Language;
}

export default function ContactSection({ t, lang }: ContactSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isRtl = lang === 'ar';
  const [formState, setFormState] = useState({
    name: '', company: '', email: '', phone: '', message: '', inquiry: '',
  });
  const [submitted, setSubmitted] = useState(false);

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('https://formspree.io/f/xpqkoybb', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formState)
      });
      if (response.ok) {
        setSubmitted(true);
        setFormState({ name: '', company: '', email: '', phone: '', message: '', inquiry: '' });
        setTimeout(() => setSubmitted(false), 4000);
      } else {
        console.error('Form submission error');
      }
    } catch (error) {
      console.error('Fetch error:', error);
    }
  };

  const inputClass = `form-input w-full rounded-xl px-4 py-3 text-sm border transition-all duration-200 bg-white`;
  const inputStyle = { borderColor: '#E5E7EB', color: '#212121', fontFamily: lang === 'ar' ? 'Cairo, sans-serif' : undefined };

  const contactInfo = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
          <path d="M12 21s8-5.122 8-11A8 8 0 0 0 4 10c0 5.878 8 11 8 11z" />
          <circle cx="12" cy="10" r="2.5" />
        </svg>
      ),
      label: t.contact.addressLabel,
      value: t.contact.address,
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
          <path d="M22 16.92a2.003 2.003 0 0 1-1.91 2.03 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-5.95-5.95 19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 5.07 3h3.06c.45 0 .86.30.98.74l.70 2.50a2 2 0 0 1-.45 1.80l-1.20 1.46a16 16 0 0 0 5.95 5.95l1.46-1.20a2 2 0 0 1 1.80-.45l2.50.70c.44.12.74.53.74.98v3.06z" />
        </svg>
      ),
      label: t.contact.phoneLabel,
      value: t.contact.phone,
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
          <path d="M3 7.5L12 13.5 21 7.5" />
          <path d="M21 7.5v9A2 2 0 0 1 19 18.5H5A2 2 0 0 1 3 16.5v-9" />
        </svg>
      ),
      label: t.contact.emailLabel,
      value: t.contact.email,
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
          <circle cx="12" cy="12" r="8" />
          <path d="M12 8v4l3 2" />
        </svg>
      ),
      label: t.contact.hoursLabel,
      value: t.contact.hours,
    },
  ];

  return (
    <section id="contact" ref={sectionRef} className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div className={`fade-up stagger-1 mb-14 ${isRtl ? 'text-right' : ''}`}>
          <div className={`flex items-center gap-3 mb-5 ${isRtl ? 'flex-row-reverse justify-end' : ''}`}>
            <span className="w-8 h-0.5" style={{ background: '#F9A825' }} />
            <span className="text-xs font-bold tracking-widest uppercase" style={{ color: '#1B5E20', fontFamily: lang === 'ar' ? 'Cairo, sans-serif' : undefined }}>
              {t.contact.sectionLabel}
            </span>
          </div>
          <h2 className="font-display font-bold mb-4" style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)', color: '#0D1B0E', fontFamily: lang === 'ar' ? 'Cairo, sans-serif' : undefined }}>
            {t.contact.headline}
          </h2>
          <p className="text-ag-muted max-w-xl text-[15px] leading-relaxed" style={{ fontFamily: lang === 'ar' ? 'Cairo, sans-serif' : undefined }}>
            {t.contact.subtitle}
          </p>
        </div>

        <div className={`grid md:grid-cols-2 gap-14 items-start`}>
          {/* Form */}
          <div className={`fade-up stagger-2 ${isRtl ? 'md:order-2' : ''}`}>
            {submitted ? (
              <div className="rounded-3xl p-10 text-center" style={{ background: '#E8F5E9', border: '2px solid #1B5E20' }}>
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ background: '#1B5E20' }}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" className="w-8 h-8">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h3 className="font-bold text-xl mb-2" style={{ color: '#1B5E20', fontFamily: lang === 'ar' ? 'Cairo, sans-serif' : undefined }}>
                  {lang === 'ar' ? 'تم الإرسال!' : lang === 'fr' ? 'Message envoyé!' : 'Message Sent!'}
                </h3>
                <p className="text-ag-muted text-sm" style={{ fontFamily: lang === 'ar' ? 'Cairo, sans-serif' : undefined }}>
                  {lang === 'ar' ? 'سنتواصل معك خلال 24 ساعة.' : lang === 'fr' ? "Nous vous répondrons dans les 24 heures." : "We'll respond within 24 hours."}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4" dir={isRtl ? 'rtl' : 'ltr'}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder={t.contact.namePlaceholder}
                    value={formState.name}
                    onChange={e => setFormState(s => ({ ...s, name: e.target.value }))}
                    className={inputClass}
                    style={inputStyle}
                    required
                  />
                  <input
                    type="text"
                    placeholder={t.contact.companyPlaceholder}
                    value={formState.company}
                    onChange={e => setFormState(s => ({ ...s, company: e.target.value }))}
                    className={inputClass}
                    style={inputStyle}
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="email"
                    placeholder={t.contact.emailPlaceholder}
                    value={formState.email}
                    onChange={e => setFormState(s => ({ ...s, email: e.target.value }))}
                    className={inputClass}
                    style={inputStyle}
                    required
                  />
                  <input
                    type="tel"
                    placeholder={t.contact.phonePlaceholder}
                    value={formState.phone}
                    onChange={e => setFormState(s => ({ ...s, phone: e.target.value }))}
                    className={inputClass}
                    style={inputStyle}
                  />
                </div>
                <select
                  value={formState.inquiry}
                  onChange={e => setFormState(s => ({ ...s, inquiry: e.target.value }))}
                  className={inputClass}
                  style={{ ...inputStyle, color: formState.inquiry ? '#212121' : '#9CA3AF' }}
                >
                  <option value="" disabled>{t.contact.inquiryLabel}</option>
                  {t.contact.inquiryOptions.map((opt, i) => (
                    <option key={i} value={opt}>{opt}</option>
                  ))}
                </select>
                <textarea
                  placeholder={t.contact.messagePlaceholder}
                  value={formState.message}
                  onChange={e => setFormState(s => ({ ...s, message: e.target.value }))}
                  rows={5}
                  className={inputClass}
                  style={{ ...inputStyle, resize: 'vertical' }}
                  required
                />
                <button
                  type="submit"
                  className="btn-pill w-full font-bold text-sm py-4 text-white transition-all"
                  style={{ background: '#1B5E20', fontFamily: lang === 'ar' ? 'Cairo, sans-serif' : undefined }}
                  onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.background = '#2E7D32'; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.background = '#1B5E20'; }}
                >
                  {t.contact.submitBtn}
                </button>
              </form>
            )}
          </div>

          {/* Contact info + map placeholder */}
          <div className={`fade-up stagger-3 ${isRtl ? 'md:order-1' : ''}`}>
            <div className="space-y-5 mb-8">
              {contactInfo.map((info, i) => (
                <div key={i} className={`flex gap-4 ${isRtl ? 'flex-row-reverse text-right' : ''}`}>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wide mb-1" style={{ color: '#1B5E20', fontFamily: lang === 'ar' ? 'Cairo, sans-serif' : undefined }}>
                      {info.label}
                    </div>
                    <div className="text-sm text-ag-muted whitespace-pre-line leading-relaxed" style={{ fontFamily: lang === 'ar' ? 'Cairo, sans-serif' : undefined }}>
                      {info.value}
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}