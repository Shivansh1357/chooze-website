import { Cta } from '@/components/landing/cta';
import { Hero } from '@/components/landing/hero';
import { PainStrip } from '@/components/landing/pain-strip';
import { Pricing } from '@/components/landing/pricing';
import { PrivateSection } from '@/components/landing/private-section';
import { Remembers } from '@/components/landing/remembers';
import { Voice } from '@/components/landing/voice';

export default function Home() {
  return (
    <>
      <Hero />
      <PainStrip />
      <Remembers />
      <Voice />
      <Pricing />
      <PrivateSection />
      <Cta />
    </>
  );
}
