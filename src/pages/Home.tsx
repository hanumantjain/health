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
    document.title = 'Setu Health: Your Bridge to Care in India';
  }, []);

  return (
    <main id="top">
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
