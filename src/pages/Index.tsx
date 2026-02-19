import React from 'react';
import { PortfolioProvider } from '@/contexts/PortfolioContext';
import BackgroundBlobs from '@/components/BackgroundBlobs';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import JourneySection from '@/components/sections/JourneySection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import SkillsSection from '@/components/sections/SkillsSection';
import InterestsSection from '@/components/sections/InterestsSection';
import CertificationsSection from '@/components/sections/CertificationsSection';
import ContactSection from '@/components/sections/ContactSection';
import Footer from '@/components/Footer';
import 'remixicon/fonts/remixicon.css';
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
