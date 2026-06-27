export default function ImageBanner() {
  return (
    <section
      style={{
        height: '100dvh',
        backgroundImage: 'url(/hero.webp)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    />
  );
}
