'use client';

import Image from 'next/image';
import { ShoppingBag, Heart, UserRound } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useCart } from '@/contexts/CartContext';
import CartDrawer from '@/components/CartDrawer';

export default function Header({ light = false, staticPos = false }: { light?: boolean; staticPos?: boolean }) {
  const [hidden, setHidden] = useState(false);
  const lastY = useRef(0);
  const { t } = useLanguage();

  const { count, isOpen, openCart, closeCart } = useCart();
  const color = light ? '#000' : '#fff';
  const hoverClass = light ? 'text-black hover:text-black/50' : 'text-white hover:text-white/70';
  const linkClass = light ? 'text-black' : 'text-white';

  useEffect(() => {
    if (staticPos) return;
    const onScroll = () => {
      const y = window.scrollY;
      if (y > 80) setHidden(true);
      else setHidden(false);
      lastY.current = y;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [staticPos]);

  return (
    <>
    <header
      className={staticPos ? 'w-full z-50' : 'fixed top-0 left-0 right-0 z-50 transition-transform duration-300'}
      style={staticPos ? {} : { transform: hidden ? 'translateY(-100%)' : 'translateY(0)' }}
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
                href={i === 0 ? '/menu' : i === 2 ? '/#nos-stores' : i === 3 ? '/#about' : '#'}
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
          <button onClick={openCart} aria-label="Panier" className={`${hoverClass} transition-colors`} style={{ color, position: 'relative', display: 'flex', background: 'none', border: 'none', cursor: 'pointer' }}>
            <ShoppingBag size={34} strokeWidth={1.6} />
            {count > 0 && (
              <span style={{
                position: 'absolute',
                top: '-6px',
                right: '-6px',
                backgroundColor: '#FFA5ED',
                color: '#000',
                borderRadius: '999px',
                minWidth: '18px',
                height: '18px',
                fontSize: '11px',
                fontFamily: 'Excon, sans-serif',
                fontWeight: 600,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '0 4px',
              }}>
                {count}
              </span>
            )}
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
    <CartDrawer open={isOpen} onClose={closeCart} />
    </>
  );
}
