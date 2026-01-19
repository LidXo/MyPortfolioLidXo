import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
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
import AdminLoginModal from '@/components/AdminLoginModal';
import AdminPanel from '@/components/AdminPanel';
import 'remixicon/fonts/remixicon.css';

const Index = () => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showAdminPanel, setShowAdminPanel] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/admin') {
      setShowLoginModal(true);
    }
  }, [location]);

  const handleLoginSuccess = () => {
    setShowLoginModal(false);
    setShowAdminPanel(true);
  };

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
          <ProjectsSection />
          <InterestsSection />
          <CertificationsSection />
          <ContactSection />
        </main>
        
        <Footer />
        
        <AdminLoginModal 
          isOpen={showLoginModal}
          onClose={() => setShowLoginModal(false)}
          onSuccess={handleLoginSuccess}
        />
        
        <AdminPanel 
          isOpen={showAdminPanel}
          onClose={() => setShowAdminPanel(false)}
        />
      </div>
    </PortfolioProvider>
  );
};

export default Index;
