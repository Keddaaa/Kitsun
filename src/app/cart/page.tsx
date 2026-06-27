'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { Dot, Trash2 } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useCart } from '@/contexts/CartContext';

const TICKER_TEXT = 'TON PANIER';
const TICKER_REPEAT = 16;

function TickerContent() {
  return (
    <>
      {Array(TICKER_REPEAT).fill(null).map((_, i) => (
        <span key={i} className="inline-flex items-center" style={{ marginRight: '24px' }}>
          <span style={{ fontFamily: 'LemonMilk, sans-serif', fontSize: '20px', color: '#000', textTransform: 'uppercase', marginRight: '24px' }}>{TICKER_TEXT}</span>
          <Dot size={7} className="text-black" />
        </span>
      ))}
    </>
  );
}

function CartRow({ item, onRemove, onUpdate }: {
  item: { id: number; name: string; price: string; size: string; qty: number; video: string };
  onRemove: () => void;
  onUpdate: (qty: number) => void;
}) {
  const ref = useRef<HTMLVideoElement>(null);
  return (
    <div
      className="flex items-center gap-8"
      style={{ borderBottom: '1px solid #e5e5e5', paddingBottom: '32px', paddingTop: '32px' }}
    >
      {/* Thumbnail */}
      <div
        style={{ width: '160px', height: '200px', flexShrink: 0, overflow: 'hidden' }}
        onMouseEnter={() => ref.current?.play()}
        onMouseLeave={() => { if (ref.current) { ref.current.pause(); ref.current.currentTime = 0; } }}
      >
        <video
          ref={ref}
          src={item.video}
          loop muted playsInline
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </div>

      {/* Info */}
      <div className="flex flex-col gap-2" style={{ flex: 1 }}>
        <p style={{ fontFamily: 'Excon, sans-serif', fontSize: '35px', fontWeight: 700, color: '#000', lineHeight: 1 }}>
          {item.name}
        </p>
        <p style={{ fontFamily: 'Excon, sans-serif', fontSize: '22px', fontWeight: 400, color: '#000', opacity: 0.5 }}>
          {item.size}
        </p>
      </div>

      {/* Qty */}
      <div
        className="flex items-center"
        style={{ border: '1.5px solid #000', width: '180px', height: '56px', flexShrink: 0 }}
      >
        <button
          onClick={() => onUpdate(item.qty - 1)}
          className="hover:bg-black hover:text-white transition-colors"
          style={{ width: '56px', height: '56px', fontFamily: 'Excon, sans-serif', fontSize: '22px', background: 'transparent', border: 'none', cursor: 'pointer', color: '#000' }}
        >
          -
        </button>
        <span style={{ flex: 1, textAlign: 'center', fontFamily: 'Excon, sans-serif', fontSize: '20px', color: '#000', borderLeft: '1.5px solid #000', borderRight: '1.5px solid #000', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          {item.qty}
        </span>
        <button
          onClick={() => onUpdate(item.qty + 1)}
          className="hover:bg-black hover:text-white transition-colors"
          style={{ width: '56px', height: '56px', fontFamily: 'Excon, sans-serif', fontSize: '22px', background: 'transparent', border: 'none', cursor: 'pointer', color: '#000' }}
        >
          +
        </button>
      </div>

      {/* Price */}
      <p style={{ fontFamily: 'Excon, sans-serif', fontSize: '35px', fontWeight: 500, color: '#000', minWidth: '120px', textAlign: 'right', flexShrink: 0 }}>
        {item.price}
      </p>

      {/* Delete */}
      <button
        onClick={onRemove}
        className="hover:opacity-50 transition-opacity"
        style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#000', flexShrink: 0 }}
        aria-label="Supprimer"
      >
        <Trash2 size={24} strokeWidth={1.5} />
      </button>
    </div>
  );
}

export default function CartPage() {
  const { items, remove, update } = useCart();

  const total = items.reduce((sum, item) => {
    const price = parseFloat(item.price.replace(',', '.').replace('€', ''));
    return sum + price * item.qty;
  }, 0);

  return (
    <div style={{ backgroundColor: '#FDF3E6', minHeight: '100vh' }}>
      {/* Ticker */}
      <div className="overflow-hidden bg-[#d6e8b0] flex items-center" style={{ height: '56px' }}>
        <div className="flex whitespace-nowrap" style={{ animation: 'marquee 14s linear infinite' }}>
          <TickerContent />
          <TickerContent />
        </div>
      </div>

      <Header light staticPos />

      <div style={{ paddingTop: '40px', paddingLeft: '80px', paddingRight: '80px', paddingBottom: '80px' }}>
        {/* Title */}
        <div className="flex items-end gap-6" style={{ marginBottom: '8px' }}>
          <h1 style={{ fontFamily: 'LemonMilk, sans-serif', fontSize: '110px', fontWeight: 800, color: '#000', lineHeight: '0.9' }}>
            MON PANIER
          </h1>
          <div
            className="flex items-center justify-center"
            style={{ width: '68px', height: '68px', borderRadius: '50%', border: '1.5px solid #000', flexShrink: 0, marginBottom: '8px' }}
          >
            <span style={{ fontFamily: 'Excon, sans-serif', fontSize: '37px', color: '#000', fontWeight: 500 }}>
              {items.length}
            </span>
          </div>
        </div>

        {items.length === 0 ? (
          <div className="flex flex-col items-center justify-center" style={{ paddingTop: '120px', gap: '24px' }}>
            <p style={{ fontFamily: 'Excon, sans-serif', fontSize: '30px', color: '#000', opacity: 0.4 }}>
              Ton panier est vide.
            </p>
            <Link
              href="/menu"
              style={{
                fontFamily: 'Excon, sans-serif',
                fontSize: '20px',
                fontWeight: 600,
                color: '#fff',
                backgroundColor: '#000',
                border: '2px solid #000',
                borderRadius: '0',
                width: '274px',
                height: '66px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textDecoration: 'none',
              }}
            >
              VOIR LA CARTE
            </Link>
          </div>
        ) : (
          <div className="flex gap-16" style={{ marginTop: '48px' }}>
            {/* Items */}
            <div style={{ flex: 1 }}>
              {items.map((item) => (
                <CartRow
                  key={`${item.id}-${item.size}`}
                  item={item}
                  onRemove={() => remove(item.id, item.size)}
                  onUpdate={(qty) => update(item.id, item.size, qty)}
                />
              ))}
            </div>

            {/* Summary */}
            <div
              style={{
                width: '400px',
                flexShrink: 0,
                backgroundColor: '#fff',
                border: '1px solid #e5e5e5',
                padding: '40px',
                height: 'fit-content',
                position: 'sticky',
                top: '24px',
              }}
            >
              <p style={{ fontFamily: 'Excon, sans-serif', fontSize: '25px', fontWeight: 500, color: '#000', marginBottom: '32px' }}>
                Récapitulatif
              </p>
              <div className="flex flex-col gap-3" style={{ marginBottom: '32px' }}>
                {items.map((item) => (
                  <div key={`${item.id}-${item.size}`} className="flex justify-between">
                    <span style={{ fontFamily: 'Excon, sans-serif', fontSize: '18px', color: '#000' }}>
                      {item.name} × {item.qty}
                    </span>
                    <span style={{ fontFamily: 'Excon, sans-serif', fontSize: '18px', color: '#000' }}>
                      {item.price}
                    </span>
                  </div>
                ))}
              </div>
              <div style={{ borderTop: '1px solid #e5e5e5', paddingTop: '24px', marginBottom: '32px' }}>
                <div className="flex justify-between items-center">
                  <span style={{ fontFamily: 'Excon, sans-serif', fontSize: '25px', fontWeight: 700, color: '#000' }}>Total</span>
                  <span style={{ fontFamily: 'Excon, sans-serif', fontSize: '35px', fontWeight: 500, color: '#000' }}>
                    {total.toFixed(2).replace('.', ',')}€
                  </span>
                </div>
              </div>
              <button
                className="hover:bg-white hover:text-black transition-colors w-full"
                style={{
                  fontFamily: 'Excon, sans-serif',
                  fontSize: '20px',
                  fontWeight: 600,
                  color: '#fff',
                  backgroundColor: '#000',
                  border: '2px solid #000',
                  height: '66px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                COMMANDER
              </button>
              <Link
                href="/menu"
                style={{
                  display: 'block',
                  textAlign: 'center',
                  marginTop: '16px',
                  fontFamily: 'Excon, sans-serif',
                  fontSize: '16px',
                  color: '#000',
                  opacity: 0.5,
                  textDecoration: 'underline',
                }}
              >
                Continuer mes achats
              </Link>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}
