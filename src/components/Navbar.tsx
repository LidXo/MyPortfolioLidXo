import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import 'remixicon/fonts/remixicon.css';

const navLinks = [
  { href: '#home', icon: 'ri-home-line', label: 'Accueil' },
  { href: '#about', icon: 'ri-user-line', label: 'À propos' },
  { href: '#journey', icon: 'ri-map-pin-line', label: 'Parcours' },
  { href: '#technologies', icon: 'ri-tools-line', label: 'Technologies' },
  { href: '#projects', icon: 'ri-folder-line', label: 'Projets' },
  { href: '#contact', icon: 'ri-mail-send-line', label: 'Contact' },
];

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileOpen(false);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 glass-nav ${scrolled ? 'py-2' : 'py-4'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#" className="text-3xl font-bold tracking-tighter hover:text-primary transition-colors">
          LidXo<span className="text-primary">.</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <div
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="text-muted-foreground hover:text-primary font-medium transition-colors flex items-center gap-2 cursor-pointer"
            >
              <i className={link.icon} />
              {link.label}
            </div>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-2xl text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <i className={mobileOpen ? 'ri-close-line' : 'ri-menu-3-line'} />
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden absolute top-full left-0 w-full glass-nav border-t border-white/5 bg-black/95 backdrop-blur-xl py-6 shadow-2xl"
        >
          <div className="flex flex-col items-center gap-6">
            {navLinks.map((link) => (
              <div
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-foreground/80 hover:text-primary font-medium text-lg transition-colors flex items-center gap-3 cursor-pointer w-full justify-center py-2 active:scale-95 duration-200"
              >
                <i className={`${link.icon} text-xl`} />
                {link.label}
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
