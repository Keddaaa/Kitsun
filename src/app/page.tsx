import Header from '@/components/Header';
import Hero from '@/components/Hero';
import CeSoirSeulement from '@/components/CeSoirSeulement';
import ObsessionSection from '@/components/ObsessionSection';
import NosStores from '@/components/NosStores';

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <CeSoirSeulement />
      <ObsessionSection />
      <NosStores />
    </>
  );
}
