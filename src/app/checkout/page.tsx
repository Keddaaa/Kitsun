'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Dot } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import { formatPrice, getCartItemTotal, getCartTotal, useCart } from '@/contexts/CartContext';

const TICKER_REPEAT = 16;
const SHIPPING_FEE = 3.5;

type Mode = 'pickup' | 'delivery';
type Payment = 'card' | 'cash';

const STORES = ['Kitsun Paris — Marais', 'Kitsun Paris — Bastille', 'Kitsun Lyon — Presqu’île'];

const font = 'Excon, sans-serif';

function TickerContent() {
  return (
    <>
      {Array(TICKER_REPEAT).fill(null).map((_, i) => (
        <span key={i} className="inline-flex items-center" style={{ marginRight: '24px' }}>
          <span style={{ fontFamily: 'LemonMilk, sans-serif', fontSize: 'var(--fs-20)', color: '#000', textTransform: 'uppercase', marginRight: '24px' }}>
            DERNIÈRE ÉTAPE
          </span>
          <Dot size={7} className="text-black" />
        </span>
      ))}
    </>
  );
}

function SectionTitle({ n, children }: { n: number; children: React.ReactNode }) {
  return (
    <div className="flex items-center" style={{ gap: '16px', marginBottom: '24px' }}>
      <div
        className="flex items-center justify-center"
        style={{ width: '40px', height: '40px', borderRadius: '50%', border: '1.5px solid #000', flexShrink: 0 }}
      >
        <span style={{ fontFamily: font, fontSize: '16px', fontWeight: 500, color: '#000' }}>{n}</span>
      </div>
      <h2 style={{ fontFamily: 'LemonMilk, sans-serif', fontSize: 'var(--fs-30)', fontWeight: 700, color: '#000', lineHeight: 1 }}>
        {children}
      </h2>
    </div>
  );
}

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <label className="flex flex-col" style={{ gap: '8px', flex: '1 1 220px', minWidth: 0 }}>
      <span style={{ fontFamily: font, fontSize: '14px', fontWeight: 500, color: '#000', opacity: 0.6, textTransform: 'uppercase' }}>
        {label}
      </span>
      {children}
      {error && <span style={{ fontFamily: font, fontSize: '13px', color: '#E8503A' }}>{error}</span>}
    </label>
  );
}

const inputStyle = (hasError: boolean): React.CSSProperties => ({
  fontFamily: font,
  fontSize: '18px',
  color: '#000',
  backgroundColor: '#fff',
  border: `1.5px solid ${hasError ? '#E8503A' : '#000'}`,
  borderRadius: 0,
  height: '56px',
  padding: '0 16px',
  width: '100%',
  outline: 'none',
});

function Choice({ selected, onClick, title, hint }: { selected: boolean; onClick: () => void; title: string; hint: string }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={selected}
      className="transition-colors text-left"
      style={{
        flex: '1 1 220px',
        padding: '16px 20px',
        cursor: 'pointer',
        border: '1.5px solid #000',
        backgroundColor: selected ? '#000' : '#fff',
        color: selected ? '#fff' : '#000',
      }}
    >
      <p style={{ fontFamily: font, fontSize: 'var(--fs-22)', fontWeight: 500 }}>{title}</p>
      <p style={{ fontFamily: font, fontSize: '14px', opacity: 0.6, marginTop: '4px' }}>{hint}</p>
    </button>
  );
}

export default function CheckoutPage() {
  const { items, clear } = useCart();

  const [mode, setMode] = useState<Mode>('pickup');
  const [payment, setPayment] = useState<Payment>('card');
  const [store, setStore] = useState(STORES[0]);
  const [form, setForm] = useState({
    firstName: '', lastName: '', email: '', phone: '',
    address: '', zip: '', city: '',
    cardNumber: '', expiry: '', cvc: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [orderNumber, setOrderNumber] = useState<string | null>(null);

  const set = (key: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm((f) => ({ ...f, [key]: e.target.value }));

  const subtotal = getCartTotal(items);
  const shipping = mode === 'delivery' ? SHIPPING_FEE : 0;
  const total = subtotal + shipping;

  const validate = () => {
    const e: Record<string, string> = {};
    const required = 'Champ requis';
    (['firstName', 'lastName', 'phone'] as const).forEach((k) => { if (!form[k].trim()) e[k] = required; });
    if (!/^\S+@\S+\.\S+$/.test(form.email)) e.email = 'Email invalide';
    if (mode === 'delivery') {
      (['address', 'city'] as const).forEach((k) => { if (!form[k].trim()) e[k] = required; });
      if (!/^\d{5}$/.test(form.zip)) e.zip = 'Code postal invalide';
    }
    if (payment === 'card') {
      if (form.cardNumber.replace(/\s/g, '').length < 12) e.cardNumber = 'Numéro invalide';
      if (!/^\d{2}\s?\/\s?\d{2}$/.test(form.expiry)) e.expiry = 'MM / AA';
      if (!/^\d{3,4}$/.test(form.cvc)) e.cvc = 'Invalide';
    }
    return e;
  };

  const submit = (ev: React.FormEvent) => {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length > 0) return;
    setOrderNumber(`KS-${Date.now().toString().slice(-6)}`);
    clear();
  };

  const buttonStyle: React.CSSProperties = {
    fontFamily: font,
    fontSize: 'var(--fs-20)',
    fontWeight: 600,
    color: '#fff',
    backgroundColor: '#000',
    border: '2px solid #000',
    height: '66px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textDecoration: 'none',
  };

  return (
    <div style={{ backgroundColor: '#FDF3E6', minHeight: '100vh' }}>
      <div className="overflow-hidden bg-[#d6e8b0] flex items-center" style={{ height: '56px' }}>
        <div className="flex whitespace-nowrap" style={{ animation: 'marquee 14s linear infinite' }}>
          <TickerContent />
          <TickerContent />
        </div>
      </div>

      <Header light staticPos />

      <div style={{ paddingTop: 'clamp(24px, 3vw, 40px)', paddingLeft: 'var(--gutter)', paddingRight: 'var(--gutter)', paddingBottom: '80px', maxWidth: '1920px', marginInline: 'auto' }}>
        <Breadcrumb crumbs={[{ label: 'Panier', href: '/cart' }, { label: 'Paiement' }]} />

        {orderNumber ? (
          <div className="flex flex-col items-center text-center" style={{ paddingTop: 'clamp(48px, 8vw, 120px)', gap: '24px' }}>
            <h1 style={{ fontFamily: 'LemonMilk, sans-serif', fontSize: 'var(--fs-100)', fontWeight: 800, color: '#000', lineHeight: 0.9 }}>
              MERCI !
            </h1>
            <p style={{ fontFamily: font, fontSize: 'var(--fs-30)', color: '#000' }}>
              Commande {orderNumber} confirmée.
            </p>
            <p style={{ fontFamily: font, fontSize: 'var(--fs-22)', color: '#000', opacity: 0.5 }}>
              {mode === 'pickup' ? `À retirer chez ${store}.` : 'Ta commande arrive bientôt.'}
            </p>
            <Link href="/menu" style={{ ...buttonStyle, width: '274px' }}>VOIR LA CARTE</Link>
          </div>
        ) : items.length === 0 ? (
          <div className="flex flex-col items-center" style={{ paddingTop: 'clamp(48px, 8vw, 120px)', gap: '24px' }}>
            <p style={{ fontFamily: font, fontSize: 'var(--fs-30)', color: '#000', opacity: 0.4 }}>Ton panier est vide.</p>
            <Link href="/menu" style={{ ...buttonStyle, width: '274px' }}>VOIR LA CARTE</Link>
          </div>
        ) : (
          <>
            <h1 style={{ fontFamily: 'LemonMilk, sans-serif', fontSize: 'var(--fs-110)', fontWeight: 800, color: '#000', lineHeight: 0.9 }}>
              PAIEMENT
            </h1>

            <form
              onSubmit={submit}
              noValidate
              className="flex flex-col lg:flex-row"
              style={{ marginTop: 'clamp(24px, 3.3vw, 48px)', gap: 'clamp(32px, 4.4vw, 64px)' }}
            >
              {/* Form */}
              <div className="flex flex-col" style={{ flex: 1, minWidth: 0, gap: 'clamp(32px, 4vw, 56px)' }}>
                <section>
                  <SectionTitle n={1}>TES INFOS</SectionTitle>
                  <div className="flex flex-wrap" style={{ gap: '16px' }}>
                    <Field label="Prénom" error={errors.firstName}>
                      <input style={inputStyle(!!errors.firstName)} value={form.firstName} onChange={set('firstName')} autoComplete="given-name" />
                    </Field>
                    <Field label="Nom" error={errors.lastName}>
                      <input style={inputStyle(!!errors.lastName)} value={form.lastName} onChange={set('lastName')} autoComplete="family-name" />
                    </Field>
                    <Field label="Email" error={errors.email}>
                      <input type="email" style={inputStyle(!!errors.email)} value={form.email} onChange={set('email')} autoComplete="email" />
                    </Field>
                    <Field label="Téléphone" error={errors.phone}>
                      <input type="tel" style={inputStyle(!!errors.phone)} value={form.phone} onChange={set('phone')} autoComplete="tel" />
                    </Field>
                  </div>
                </section>

                <section>
                  <SectionTitle n={2}>RÉCUPÉRATION</SectionTitle>
                  <div className="flex flex-wrap" style={{ gap: '16px' }}>
                    <Choice selected={mode === 'pickup'} onClick={() => setMode('pickup')} title="Click & collect" hint="Gratuit — en store" />
                    <Choice selected={mode === 'delivery'} onClick={() => setMode('delivery')} title="Livraison" hint={formatPrice(SHIPPING_FEE)} />
                  </div>
                  <div className="flex flex-wrap" style={{ gap: '16px', marginTop: '16px' }}>
                    {mode === 'pickup' ? (
                      <Field label="Store">
                        <select
                          value={store}
                          onChange={(e) => setStore(e.target.value)}
                          style={inputStyle(false)}
                        >
                          {STORES.map((s) => <option key={s}>{s}</option>)}
                        </select>
                      </Field>
                    ) : (
                      <>
                        <Field label="Adresse" error={errors.address}>
                          <input style={inputStyle(!!errors.address)} value={form.address} onChange={set('address')} autoComplete="street-address" />
                        </Field>
                        <Field label="Code postal" error={errors.zip}>
                          <input inputMode="numeric" maxLength={5} style={inputStyle(!!errors.zip)} value={form.zip} onChange={set('zip')} autoComplete="postal-code" />
                        </Field>
                        <Field label="Ville" error={errors.city}>
                          <input style={inputStyle(!!errors.city)} value={form.city} onChange={set('city')} autoComplete="address-level2" />
                        </Field>
                      </>
                    )}
                  </div>
                </section>

                <section>
                  <SectionTitle n={3}>PAIEMENT</SectionTitle>
                  <div className="flex flex-wrap" style={{ gap: '16px' }}>
                    <Choice selected={payment === 'card'} onClick={() => setPayment('card')} title="Carte bancaire" hint="Visa, Mastercard" />
                    <Choice selected={payment === 'cash'} onClick={() => setPayment('cash')} title="Sur place" hint="Paiement au retrait" />
                  </div>
                  {payment === 'card' && (
                    <div className="flex flex-wrap" style={{ gap: '16px', marginTop: '16px' }}>
                      <Field label="Numéro de carte" error={errors.cardNumber}>
                        <input inputMode="numeric" placeholder="0000 0000 0000 0000" style={inputStyle(!!errors.cardNumber)} value={form.cardNumber} onChange={set('cardNumber')} autoComplete="cc-number" />
                      </Field>
                      <Field label="Expiration" error={errors.expiry}>
                        <input placeholder="MM / AA" style={inputStyle(!!errors.expiry)} value={form.expiry} onChange={set('expiry')} autoComplete="cc-exp" />
                      </Field>
                      <Field label="CVC" error={errors.cvc}>
                        <input inputMode="numeric" maxLength={4} style={inputStyle(!!errors.cvc)} value={form.cvc} onChange={set('cvc')} autoComplete="cc-csc" />
                      </Field>
                    </div>
                  )}
                </section>
              </div>

              {/* Summary */}
              <aside
                style={{
                  width: '100%',
                  maxWidth: '400px',
                  flexShrink: 0,
                  backgroundColor: '#fff',
                  border: '1px solid #e5e5e5',
                  padding: 'clamp(20px, 2.8vw, 40px)',
                  height: 'fit-content',
                  position: 'sticky',
                  top: '24px',
                }}
              >
                <p style={{ fontFamily: font, fontSize: 'var(--fs-25)', fontWeight: 500, color: '#000', marginBottom: '32px' }}>
                  Récapitulatif
                </p>
                <div className="flex flex-col gap-3" style={{ marginBottom: '24px' }}>
                  {items.map((item) => (
                    <div key={`${item.id}-${item.size}`} className="flex justify-between" style={{ gap: '12px' }}>
                      <span style={{ fontFamily: font, fontSize: '18px', color: '#000' }}>
                        {item.name} × {item.qty}
                        <span style={{ display: 'block', fontSize: '14px', opacity: 0.5 }}>{item.size}</span>
                      </span>
                      <span style={{ fontFamily: font, fontSize: '18px', color: '#000' }}>{formatPrice(getCartItemTotal(item))}</span>
                    </div>
                  ))}
                </div>
                <div className="flex flex-col gap-3" style={{ borderTop: '1px solid #e5e5e5', paddingTop: '24px', marginBottom: '24px' }}>
                  <div className="flex justify-between">
                    <span style={{ fontFamily: font, fontSize: '16px', color: '#000', opacity: 0.6 }}>Sous-total</span>
                    <span style={{ fontFamily: font, fontSize: '16px', color: '#000' }}>{formatPrice(subtotal)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span style={{ fontFamily: font, fontSize: '16px', color: '#000', opacity: 0.6 }}>Livraison</span>
                    <span style={{ fontFamily: font, fontSize: '16px', color: '#000' }}>{shipping ? formatPrice(shipping) : 'Gratuit'}</span>
                  </div>
                </div>
                <div className="flex justify-between items-center" style={{ borderTop: '1px solid #e5e5e5', paddingTop: '24px', marginBottom: '32px' }}>
                  <span style={{ fontFamily: font, fontSize: 'var(--fs-25)', fontWeight: 700, color: '#000' }}>Total</span>
                  <span style={{ fontFamily: font, fontSize: 'var(--fs-35)', fontWeight: 500, color: '#000' }}>{formatPrice(total)}</span>
                </div>
                <button type="submit" className="hover:bg-white hover:text-black transition-colors w-full" style={buttonStyle}>
                  PAYER {formatPrice(total)}
                </button>
                <Link
                  href="/cart"
                  style={{ display: 'block', textAlign: 'center', marginTop: '16px', fontFamily: font, fontSize: '16px', color: '#000', opacity: 0.5, textDecoration: 'underline' }}
                >
                  Retour au panier
                </Link>
              </aside>
            </form>
          </>
        )}
      </div>

      <Footer />
    </div>
  );
}
