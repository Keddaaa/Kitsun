'use client';

import Image from 'next/image';
import { ShoppingBag, Heart, UserRound } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Header({ light = false }: { light?: boolean }) {
  const [hidden, setHidden] = useState(false);
  const lastY = useRef(0);
  const { t } = useLanguage();

  const color = light ? '#000' : '#fff';
  const hoverClass = light ? 'text-black hover:text-black/50' : 'text-white hover:text-white/70';
  const linkClass = light ? 'text-black' : 'text-white';

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setHidden(y > lastY.current && y > 80);
      lastY.current = y;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-transform duration-300"
      style={{ transform: hidden ? 'translateY(-100%)' : 'translateY(0)' }}
    >
      <nav className="flex items-center justify-between px-5 py-4">
        {/* Logo */}
        <a href="/" className="flex items-center select-none ml-4">
          <Image
            src={light ? '/Kitsun.svg' : '/logo header.svg'}
            alt="Kitsun"
            width={232}
            height={74}
            priority
          />
        </a>

        {/* Nav */}
        <ul className="hidden md:flex items-center gap-8">
          {t.nav.map((link, i) => (
            <li key={link}>
              <a
                href={i === 0 ? '/menu' : '#'}
                className={`${linkClass} transition-colors duration-200`}
                style={{ fontFamily: 'Excon, sans-serif', fontSize: '1.875rem', fontWeight: 500 }}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        {/* Icons */}
        <div className="flex items-center gap-4">
          <button aria-label="Panier" className={`${hoverClass} transition-colors`} style={{ color }}>
            <ShoppingBag size={34} strokeWidth={1.6} />
          </button>
          <button aria-label="Favoris" className={`${hoverClass} transition-colors`} style={{ color }}>
            <Heart size={34} strokeWidth={1.6} />
          </button>
          <button aria-label="Mon compte" className={`${hoverClass} transition-colors`} style={{ color }}>
            <UserRound size={34} strokeWidth={1.6} />
          </button>
        </div>
      </nav>
    </header>
  );
}
