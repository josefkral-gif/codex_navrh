import React from 'react';
import HeroSection from '../components/home/HeroSection';
import SectorSection from '../components/home/SectorSection';
import ServiceGrid from '../components/home/ServiceGrid';
import ProcessSection from '../components/home/ProcessSection';
import ReferencesSection from '../components/home/ReferencesSection';
import CompanyIntro from '../components/home/CompanyIntro';
import CTABanner from '../components/home/CTABanner';

export default function Home() {
  return (
    <>
      <HeroSection />
      <SectorSection />
      <ServiceGrid />
      <ProcessSection />
      <ReferencesSection />
      <CompanyIntro />
      <CTABanner />
    </>
  );
}
