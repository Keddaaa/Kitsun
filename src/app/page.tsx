import Header from '@/components/Header';
import Hero from '@/components/Hero';
import CeSoirSeulement from '@/components/CeSoirSeulement';
import ObsessionSection from '@/components/ObsessionSection';
import NosStores from '@/components/NosStores';
import ImageBanner from '@/components/ImageBanner';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <CeSoirSeulement />
      <ObsessionSection />
      <NosStores />
      <ImageBanner />
      <Footer />
    </>
  );
}
