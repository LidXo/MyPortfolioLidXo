import React from 'react';
import { PortfolioProvider } from '@/contexts/PortfolioContext';
import BackgroundBlobs from '@/components/BackgroundBlobs';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import JourneySection from '@/components/sections/JourneySection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import TechnologiesSection from '@/components/sections/TechnologiesSection';

const Index = () => {

  return (
    <PortfolioProvider>
      <div className="relative">
        <BackgroundBlobs />
        <Navbar />
        
        <main>
          <HeroSection />
          <AboutSection />
          <JourneySection />
          <SkillsSection />
          <TechnologiesSection />
          <ProjectsSection />
          <InterestsSection />
          <CertificationsSection />
          <ContactSection />
        </main>
        
        <Footer />
      </div>
    </PortfolioProvider>
  );
};

export default Index;
