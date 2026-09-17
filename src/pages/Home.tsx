import { useEffect } from 'react';
import { Hero } from '../components/Hero';
import { TrustStrip } from '../components/TrustStrip';
import { Specialties } from '../components/Specialties';
import { HowItWorks } from '../components/HowItWorks';
import { Hospitals } from '../components/Hospitals';
import { ServicesIncluded } from '../components/ServicesIncluded';
import { Testimonials } from '../components/Testimonials';
import { ContactSection } from '../components/ContactSection';

export function Home() {
  useEffect(() => {
    document.title = 'HealthFlyIndia | Fly to India for World-Class Healthcare';
  }, []);

  return (
    <main id="top" className="w-full">
      <Hero />
      <TrustStrip />
      <Specialties />
      <HowItWorks />
      <Hospitals />
      <ServicesIncluded />
      <Testimonials />
      <ContactSection />
    </main>
  );
}
