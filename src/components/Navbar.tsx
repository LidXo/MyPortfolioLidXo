import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import 'remixicon/fonts/remixicon.css';

const navLinks = [
  { href: '#home', icon: 'ri-home-line', label: 'Accueil' },
  { href: '#about', icon: 'ri-user-line', label: 'À propos' },
  { href: '#journey', icon: 'ri-route-line', label: 'Parcours' },
  { href: '#technologies', icon: 'ri-tools-line', label: 'Compétences' },
  { href: '#projects', icon: 'ri-folder-line', label: 'Projets' },
  { href: '#certifications', icon: 'ri-award-line', label: 'Certifications' },
  { href: '#contact', icon: 'ri-mail-send-line', label: 'Contact' },
];

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      // Détection de la section active
      const sections = ['home', 'about', 'journey', 'technologies', 'projects', 'certifications', 'contact'];
      const scrollPosition = window.scrollY + 140;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    const sectionId = href.replace('#', '');
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
    setMobileOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 transition-all duration-300">
      <nav 
        aria-label="Navigation principale"
        className={`w-full transition-all duration-300 glass-nav ${
          scrolled ? 'py-3 shadow-md' : 'py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          
          {/* Logo */}
          <a 
            href="#home" 
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#home');
            }}
            className="text-2xl font-black tracking-tight text-foreground hover:text-primary transition-colors flex items-center gap-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-lg"
          >
            <span></span>
            <span className="gradient-text font-black">LidXo.</span>
          </a>

          {/* Navigation Desktop accessible */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <button
                  key={link.href}
                  type="button"
                  onClick={() => handleNavClick(link.href)}
                  aria-current={isActive ? 'page' : undefined}
                  className={`px-3.5 py-1.5 rounded-xl text-xs lg:text-sm font-semibold transition-all duration-200 flex items-center gap-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                    isActive
                      ? 'bg-primary text-primary-foreground shadow-sm'
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                  }`}
                >
                  <i className={`${link.icon} text-sm`} aria-hidden="true" />
                  <span>{link.label}</span>
                </button>
              );
            })}
          </div>

          {/* Bouton Mobile Toggle */}
          <button 
            type="button"
            className="md:hidden w-10 h-10 rounded-xl border border-border flex items-center justify-center text-foreground hover:bg-muted/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Fermer le menu de navigation' : 'Ouvrir le menu de navigation'}
            aria-expanded={mobileOpen}
          >
            <i className={mobileOpen ? 'ri-close-line text-xl' : 'ri-menu-line text-xl'} aria-hidden="true" />
          </button>
        </div>

        {/* Menu Mobile */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden glass-card border-b border-border/80 px-6 py-5 shadow-xl overflow-hidden"
            >
              <div className="flex flex-col gap-2">
                {navLinks.map((link) => {
                  const isActive = activeSection === link.href.replace('#', '');
                  return (
                    <button
                      key={link.href}
                      type="button"
                      onClick={() => handleNavClick(link.href)}
                      className={`text-left px-4 py-2.5 rounded-xl font-medium text-sm transition-all flex items-center gap-3 ${
                        isActive
                          ? 'bg-primary text-primary-foreground font-bold'
                          : 'text-foreground/80 hover:bg-muted/50 hover:text-primary'
                      }`}
                    >
                      <i className={`${link.icon} text-base`} aria-hidden="true" />
                      <span>{link.label}</span>
                    </button>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Navbar;
