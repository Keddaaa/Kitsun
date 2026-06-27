'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import { useLanguage, type Lang } from '@/contexts/LanguageContext';

function FlagFR() {
  return (
    <svg width="40" height="28" viewBox="0 0 28 20" xmlns="http://www.w3.org/2000/svg" style={{ borderRadius: '3px', overflow: 'hidden' }}>
      <rect x="0" y="0" width="9.33" height="20" fill="#002395" />
      <rect x="9.33" y="0" width="9.33" height="20" fill="#FFFFFF" />
      <rect x="18.67" y="0" width="9.33" height="20" fill="#ED2939" />
    </svg>
  );
}

function FlagGB() {
  return (
    <svg width="40" height="28" viewBox="0 0 60 40" xmlns="http://www.w3.org/2000/svg" style={{ borderRadius: '3px', overflow: 'hidden' }}>
      <rect width="60" height="40" fill="#012169" />
      <path d="M0,0 L60,40 M60,0 L0,40" stroke="#fff" strokeWidth="8" />
      <path d="M0,0 L60,40 M60,0 L0,40" stroke="#C8102E" strokeWidth="4" />
      <path d="M30,0 V40 M0,20 H60" stroke="#fff" strokeWidth="12" />
      <path d="M30,0 V40 M0,20 H60" stroke="#C8102E" strokeWidth="7" />
    </svg>
  );
}

function FlagDE() {
  return (
    <svg width="40" height="28" viewBox="0 0 30 20" xmlns="http://www.w3.org/2000/svg" style={{ borderRadius: '3px', overflow: 'hidden' }}>
      <rect x="0" y="0" width="30" height="6.67" fill="#000" />
      <rect x="0" y="6.67" width="30" height="6.67" fill="#DD0000" />
      <rect x="0" y="13.33" width="30" height="6.67" fill="#FFCE00" />
    </svg>
  );
}

function FlagES() {
  return (
    <svg width="40" height="28" viewBox="0 0 30 20" xmlns="http://www.w3.org/2000/svg" style={{ borderRadius: '3px', overflow: 'hidden' }}>
      <rect x="0" y="0" width="30" height="20" fill="#c60b1e" />
      <rect x="0" y="5" width="30" height="10" fill="#ffc400" />
    </svg>
  );
}

const languages: { code: Lang; label: string; Flag: () => React.ReactElement }[] = [
  { code: 'fr', label: 'Français', Flag: FlagFR },
  { code: 'en', label: 'Anglais', Flag: FlagGB },
  { code: 'de', label: 'Allemagne', Flag: FlagDE },
  { code: 'es', label: 'Espagne', Flag: FlagES },
];

export default function Hero() {
  const [open, setOpen] = useState(false);
  const { lang, setLang } = useLanguage();

  const handleSelect = (code: Lang) => {
    setLang(code);
    setOpen(false);
  };

  const CurrentFlag = languages.find(({ code }) => code === lang)?.Flag ?? FlagFR;

  return (
    <section className="relative w-full h-screen overflow-hidden">
      <Image
        src="/hero.webp"
        alt="Kitsun drink"
        fill
        className="object-cover"
        priority
      />

      {/* Language selector — bottom right */}
      <div className="absolute bottom-5 right-5 z-10">
        {open && (
          <div
            className="absolute bottom-16 right-0 flex flex-col gap-2"
            style={{ backgroundColor: '#fff', borderRadius: '8px', padding: '8px', minWidth: '160px' }}
          >
            {languages.filter(({ code }) => code !== lang).map(({ code, label, Flag }) => (
              <button
                key={code}
                onClick={() => handleSelect(code)}
                className="flex items-center gap-3 hover:opacity-70 transition-opacity"
                style={{ padding: '6px 8px', borderRadius: '6px' }}
              >
                <Flag />
                <span style={{ fontFamily: 'Excon, sans-serif', fontSize: '16px', color: '#000', fontWeight: 500 }}>
                  {label}
                </span>
              </button>
            ))}
          </div>
        )}

        <button
          aria-label="Changer de langue"
          onClick={() => setOpen((v) => !v)}
          style={{ backgroundColor: '#fff', width: '74px', height: '54px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        >
          <div style={{ transform: 'scale(1.35)', transformOrigin: 'center' }}>
            <CurrentFlag />
          </div>
        </button>
      </div>
    </section>
  );
}
