'use client';

import { useRef } from 'react';

const products = [
  { name: 'Berry Boost',    price: '4,90€', video: '/videos/Berry Boost.mp4' },
  { name: 'Banana Nut',     price: '5,50€', video: '/videos/Banana Nut.mp4' },
  { name: 'Green Glow',     price: '4,50€', video: '/videos/Green Glow.mp4' },
  { name: 'Blueberry Fuel', price: '5,90€', video: '/videos/Blueberry Fuel.mp4' },
];

const TICKER_TEXT = 'LOREM IPSUM DO';
const TICKER_SEPARATOR = '◆';
const tickerItems = Array(12).fill(`${TICKER_TEXT} ${TICKER_SEPARATOR} `).join('');

function ProductCard({ name, price, video }: { name: string; price: string; video: string }) {
  const ref = useRef<HTMLVideoElement>(null);

  return (
    <div className="flex flex-col">
      <div
        className="relative overflow-hidden"
        style={{ width: '408px', height: '507.73px' }}
        onMouseEnter={() => ref.current?.play()}
        onMouseLeave={() => { if (ref.current) { ref.current.pause(); ref.current.currentTime = 0; } }}
      >
        <video
          ref={ref}
          src={video}
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
      <div className="flex items-center justify-between mt-3" style={{ width: '408px' }}>
        <span className="text-black" style={{ fontFamily: 'Excon, sans-serif', fontSize: '25px', fontWeight: 400 }}>{name}</span>
        <span className="text-black" style={{ fontFamily: 'Excon, sans-serif', fontSize: '25px', fontWeight: 400 }}>{price}</span>
      </div>
    </div>
  );
}

export default function CeSoirSeulement() {
  return (
    <section style={{ backgroundColor: '#FDF3E6' }}>
      {/* Ticker */}
      <div className="overflow-hidden bg-[#d6e8b0] flex items-center" style={{ height: '56px' }}>
        <div
          className="flex whitespace-nowrap"
          style={{ animation: 'marquee 18s linear infinite' }}
        >
          <span className="text-xs font-sans text-black tracking-widest uppercase pr-4">
            {tickerItems}{tickerItems}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="px-8 pt-28 pb-16">
        <h2
          className="text-black mb-1"
          style={{ fontFamily: 'LemonMilk, sans-serif', fontSize: '55px', fontWeight: 700, lineHeight: '55px' }}
        >
          CE SOIR SEULEMENT
        </h2>
        <p className="text-black mb-16" style={{ fontFamily: 'Excon, sans-serif', fontSize: '30px', fontWeight: 500 }}>
          Les bons plans disparaissent à minuit.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-4 gap-4">
          {products.map((p) => (
            <ProductCard key={p.name} {...p} />
          ))}
        </div>

        {/* Voir plus */}
        <div className="mt-14 text-center">
          <a
            href="#"
            className="text-black underline underline-offset-4 hover:opacity-60 transition-opacity"
            style={{ fontFamily: 'Excon, sans-serif', fontSize: '22px', fontWeight: 400 }}
          >
            VOIR PLUS
          </a>
        </div>
      </div>
    </section>
  );
}
