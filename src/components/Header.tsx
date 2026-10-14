'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ShoppingBag, Heart, UserRound, Menu, X } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useCart } from '@/contexts/CartContext';
import CartDrawer from '@/components/CartDrawer';

export default function Header({ light = false, staticPos = false }: { light?: boolean; staticPos?: boolean }) {
  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const lastY = useRef(0);
  const { t } = useLanguage();
  const { count, isOpen, openCart, closeCart } = useCart();

  const color = light ? '#000' : '#fff';
  const hoverClass = light ? 'text-black hover:text-black/50' : 'text-white hover:text-white/70';
  const linkClass = light ? 'text-black' : 'text-white';
  const bg = light ? 'rgba(253,243,230,0.95)' : 'rgba(0,0,0,0.85)';

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

  const navLinks = t.nav.map((link: string, i: number) => ({
    label: link,
    href: i === 0 ? '/menu' : i === 2 ? '/#nos-stores' : i === 3 ? '/#about' : '#',
  }));

  return (
    <>
      <header
        className={staticPos ? 'w-full z-50' : 'fixed top-0 left-0 right-0 z-50 transition-transform duration-300'}
        style={staticPos ? {} : { transform: hidden ? 'translateY(-100%)' : 'translateY(0)' }}
      >
        <nav className="flex items-center justify-between py-4" style={{ paddingLeft: 'clamp(12px, 2vw, 28px)', paddingRight: 'clamp(16px, 2.5vw, 36px)' }}>
          {/* Logo */}
          <Link href="/" className="flex items-center select-none ml-2">
            <Image
              src={light ? '/Kitsun.svg' : '/logo header.svg'}
              alt="Kitsun"
              width={160}
              height={52}
              className="w-[140px] h-auto sm:w-[170px] lg:w-[clamp(170px,16vw,232px)]"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <ul className="hidden lg:flex items-center" style={{ gap: 'clamp(16px, 2.2vw, 32px)' }}>
            {navLinks.map(({ label, href }) => (
              <li key={label}>
                <Link
                  href={href}
                  className={`${linkClass} transition-colors duration-200`}
                  style={{ fontFamily: 'Excon, sans-serif', fontSize: 'clamp(1rem, 1.9vw, 1.875rem)', fontWeight: 500, whiteSpace: 'nowrap' }}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Icons */}
          <div className="flex items-center gap-3">
            {/* Cart — always visible */}
            <button
              onClick={openCart}
              aria-label="Panier"
              className={`${hoverClass} transition-colors`}
              style={{ color, position: 'relative', display: 'flex', background: 'none', border: 'none', cursor: 'pointer' }}
            >
              <ShoppingBag size={28} strokeWidth={1.6} />
              {count > 0 && (
                <span style={{
                  position: 'absolute', top: '-6px', right: '-6px',
                  backgroundColor: '#FFA5ED', color: '#000', borderRadius: '999px',
                  minWidth: '18px', height: '18px', fontSize: '11px',
                  fontFamily: 'Excon, sans-serif', fontWeight: 600,
                  display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0 4px',
                }}>
                  {count}
                </span>
              )}
            </button>

            {/* Heart + Account — hidden on mobile */}
            <button aria-label="Favoris" className={`${hoverClass} transition-colors hidden lg:flex`} style={{ color, background: 'none', border: 'none', cursor: 'pointer' }}>
              <Heart size={28} strokeWidth={1.6} />
            </button>
            <button aria-label="Mon compte" className={`${hoverClass} transition-colors hidden lg:flex`} style={{ color, background: 'none', border: 'none', cursor: 'pointer' }}>
              <UserRound size={28} strokeWidth={1.6} />
            </button>

            {/* Hamburger — mobile only */}
            <button
              onClick={() => setMenuOpen((v) => !v)}
              aria-label="Menu"
              className="flex lg:hidden"
              style={{ color, background: 'none', border: 'none', cursor: 'pointer', padding: '4px' }}
            >
              {menuOpen ? <X size={28} strokeWidth={1.5} /> : <Menu size={28} strokeWidth={1.5} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile nav overlay */}
      {menuOpen && (
        <div
          style={{
            position: 'fixed', inset: 0, zIndex: 49,
            backgroundColor: bg,
            backdropFilter: 'blur(8px)',
            display: 'flex', flexDirection: 'column',
            justifyContent: 'center', alignItems: 'center', gap: '32px',
          }}
          onClick={() => setMenuOpen(false)}
        >
          {navLinks.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              onClick={() => setMenuOpen(false)}
              style={{
                fontFamily: 'LemonMilk, sans-serif',
                fontSize: '28px',
                fontWeight: 700,
                color,
                textDecoration: 'none',
                letterSpacing: '0.02em',
              }}
            >
              {label}
            </Link>
          ))}
        </div>
      )}

      <CartDrawer open={isOpen} onClose={closeCart} />
    </>
  );
}
