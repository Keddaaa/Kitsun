'use client';

import { useRef, useEffect } from 'react';
import Link from 'next/link';
import { X, Trash2 } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';

export default function CartDrawer({ open, onClose }: { open: boolean; onClose: () => void }) {
  const { items, remove, update } = useCart();

  const total = items.reduce((sum, item) => {
    const price = parseFloat(item.price.replace(',', '.').replace('€', ''));
    return sum + price;
  }, 0);

  useEffect(() => {
    if (open) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <>
      {/* Overlay */}
      <div
        onClick={onClose}
        style={{
          position: 'fixed', inset: 0, backgroundColor: 'rgba(0,0,0,0.4)',
          zIndex: 100, opacity: open ? 1 : 0, pointerEvents: open ? 'all' : 'none',
          transition: 'opacity 0.3s ease',
        }}
      />

      {/* Drawer */}
      <div
        style={{
          position: 'fixed', top: 0, right: 0, bottom: 0,
          width: '520px', backgroundColor: '#FDF3E6',
          zIndex: 101, display: 'flex', flexDirection: 'column',
          transform: open ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 0.35s cubic-bezier(0.22,1,0.36,1)',
          boxShadow: '-4px 0 40px rgba(0,0,0,0.12)',
        }}
      >
        {/* Header */}
        <div className="flex items-center justify-between" style={{ padding: '32px 32px 24px', borderBottom: '1px solid #e5e5e5' }}>
          <div className="flex items-center gap-4">
            <span style={{ fontFamily: 'LemonMilk, sans-serif', fontSize: '28px', fontWeight: 800, color: '#000' }}>
              MON PANIER
            </span>
            <div style={{ width: '40px', height: '40px', borderRadius: '50%', border: '1.5px solid #000', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ fontFamily: 'Excon, sans-serif', fontSize: '20px', color: '#000', fontWeight: 500 }}>{items.length}</span>
            </div>
          </div>
          <button onClick={onClose} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#000' }}>
            <X size={28} strokeWidth={1.5} />
          </button>
        </div>

        {/* Items */}
        <div style={{ flex: 1, overflowY: 'auto', padding: '0 32px' }}>
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center" style={{ height: '100%', gap: '16px' }}>
              <p style={{ fontFamily: 'Excon, sans-serif', fontSize: '22px', color: '#000', opacity: 0.4 }}>
                Ton panier est vide.
              </p>
              <button
                onClick={onClose}
                style={{ fontFamily: 'Excon, sans-serif', fontSize: '18px', color: '#000', background: 'none', border: 'none', cursor: 'pointer', textDecoration: 'underline', opacity: 0.6 }}
              >
                Continuer mes achats
              </button>
            </div>
          ) : (
            items.map((item) => (
              <CartItem
                key={`${item.id}-${item.size}`}
                item={item}
                onRemove={() => remove(item.id, item.size)}
                onUpdate={(qty) => update(item.id, item.size, qty)}
              />
            ))
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div style={{ padding: '24px 32px', borderTop: '1px solid #e5e5e5' }}>
            <div className="flex justify-between items-center" style={{ marginBottom: '20px' }}>
              <span style={{ fontFamily: 'Excon, sans-serif', fontSize: '22px', fontWeight: 500, color: '#000' }}>Total</span>
              <span style={{ fontFamily: 'Excon, sans-serif', fontSize: '32px', fontWeight: 500, color: '#000' }}>
                {total.toFixed(2).replace('.', ',')}€
              </span>
            </div>
            <button
              className="hover:bg-white hover:text-black transition-colors w-full"
              style={{
                fontFamily: 'Excon, sans-serif', fontSize: '18px', fontWeight: 600,
                color: '#fff', backgroundColor: '#000', border: '2px solid #000',
                height: '60px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}
            >
              COMMANDER
            </button>
            <button
              onClick={onClose}
              style={{ display: 'block', width: '100%', textAlign: 'center', marginTop: '12px', fontFamily: 'Excon, sans-serif', fontSize: '15px', color: '#000', opacity: 0.5, background: 'none', border: 'none', cursor: 'pointer', textDecoration: 'underline' }}
            >
              Continuer mes achats
            </button>
          </div>
        )}
      </div>
    </>
  );
}

function CartItem({ item, onRemove, onUpdate }: {
  item: { id: number; name: string; price: string; size: string; qty: number; video: string };
  onRemove: () => void;
  onUpdate: (qty: number) => void;
}) {
  const ref = useRef<HTMLVideoElement>(null);

  return (
    <div className="flex items-center gap-4" style={{ paddingTop: '24px', paddingBottom: '24px', borderBottom: '1px solid #e5e5e5' }}>
      {/* Thumb */}
      <div
        style={{ width: '110px', height: '130px', flexShrink: 0, overflow: 'hidden' }}
        onMouseEnter={() => ref.current?.play()}
        onMouseLeave={() => { if (ref.current) { ref.current.pause(); ref.current.currentTime = 0; } }}
      >
        <video ref={ref} src={item.video} loop muted playsInline style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </div>

      {/* Info */}
      <div className="flex flex-col" style={{ flex: 1, gap: '4px' }}>
        <p style={{ fontFamily: 'Excon, sans-serif', fontSize: '22px', fontWeight: 700, color: '#000', lineHeight: 1 }}>{item.name}</p>
        <p style={{ fontFamily: 'Excon, sans-serif', fontSize: '16px', color: '#000', opacity: 0.5 }}>{item.size}</p>
        <p style={{ fontFamily: 'Excon, sans-serif', fontSize: '20px', fontWeight: 500, color: '#000', marginTop: '4px' }}>{item.price}</p>

        {/* Qty */}
        <div className="flex items-center" style={{ marginTop: '8px', border: '1.5px solid #000', width: '130px', height: '44px' }}>
          <button
            onClick={() => onUpdate(item.qty - 1)}
            className="hover:bg-black hover:text-white transition-colors"
            style={{ width: '44px', height: '44px', fontFamily: 'Excon, sans-serif', fontSize: '18px', background: 'transparent', border: 'none', cursor: 'pointer', color: '#000' }}
          >-</button>
          <span style={{ flex: 1, textAlign: 'center', fontFamily: 'Excon, sans-serif', fontSize: '16px', color: '#000', borderLeft: '1.5px solid #000', borderRight: '1.5px solid #000', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            {item.qty}
          </span>
          <button
            onClick={() => onUpdate(item.qty + 1)}
            className="hover:bg-black hover:text-white transition-colors"
            style={{ width: '44px', height: '44px', fontFamily: 'Excon, sans-serif', fontSize: '18px', background: 'transparent', border: 'none', cursor: 'pointer', color: '#000' }}
          >+</button>
        </div>
      </div>

      {/* Delete */}
      <button onClick={onRemove} className="hover:opacity-40 transition-opacity" style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#000', flexShrink: 0, alignSelf: 'flex-start' }}>
        <Trash2 size={20} strokeWidth={1.5} />
      </button>
    </div>
  );
}
