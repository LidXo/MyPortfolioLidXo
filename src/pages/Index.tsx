import React from 'react';
import { PortfolioProvider } from '@/contexts/PortfolioContext';
import BackgroundBlobs from '@/components/BackgroundBlobs';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import JourneySection from '@/components/sections/JourneySection';
import TechnologiesSection from '@/components/sections/TechnologiesSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import CertificationsSection from '@/components/sections/CertificationsSection';
import ContactSection from '@/components/sections/ContactSection';
import Footer from '@/components/Footer';
import 'remixicon/fonts/remixicon.css';

const Index = () => {
  return (
    <PortfolioProvider>
      <div className="relative min-h-screen bg-background text-foreground antialiased selection:bg-primary/20 selection:text-primary">
        <BackgroundBlobs />
        <Navbar />
        
        <main id="main-content">
          <HeroSection />
          <AboutSection />
          <JourneySection />
          <TechnologiesSection />
          <ProjectsSection />
          <CertificationsSection />
          <ContactSection />
        </main>
        
        <Footer />
      </div>
    </PortfolioProvider>
  );
};

export default Index;
