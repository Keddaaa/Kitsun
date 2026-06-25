import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background photo */}
      <Image
        src="/hero.webp"
        alt="Kitsun drink"
        fill
        className="object-cover"
        priority
      />

      {/* Language selector — bottom right */}
      <div className="absolute bottom-5 right-5 z-10">
        <button aria-label="Changer de langue" className="flex items-center gap-1.5 text-white text-xs font-sans">
          <span className="text-lg leading-none">🇫🇷</span>
        </button>
      </div>
    </section>
  );
}
