import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import 'remixicon/fonts/remixicon.css';

const navLinks = [
  { href: '#home', icon: 'ri-home-line', label: 'Accueil' },
  { href: '#about', icon: 'ri-user-line', label: 'À propos' },
  { href: '#journey', icon: 'ri-map-pin-line', label: 'Parcours' },
  { href: '#skills', icon: 'ri-tools-line', label: 'Compétences' },
  { href: '#projects', icon: 'ri-folder-line', label: 'Projets' },
  { href: '#contact', icon: 'ri-mail-send-line', label: 'Contact' },
];

const themeColors = ['#00ff88', '#ffeb3b', '#00d2ff', '#ff0055', '#aa00ff'];

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeColor, setActiveColor] = useState('#00ff88');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const changeTheme = (color: string) => {
    setActiveColor(color);
    document.documentElement.style.setProperty('--primary', colorToHsl(color));
    document.documentElement.style.setProperty('--accent', colorToHsl(color));
    document.documentElement.style.setProperty('--ring', colorToHsl(color));
    localStorage.setItem('themeColor', color);
  };

  const colorToHsl = (hex: string): string => {
    const r = parseInt(hex.slice(1, 3), 16) / 255;
    const g = parseInt(hex.slice(3, 5), 16) / 255;
    const b = parseInt(hex.slice(5, 7), 16) / 255;
    const max = Math.max(r, g, b), min = Math.min(r, g, b);
    let h = 0, s = 0;
    const l = (max + min) / 2;
    if (max !== min) {
      const d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      switch (max) {
        case r: h = ((g - b) / d + (g < b ? 6 : 0)) / 6; break;
        case g: h = ((b - r) / d + 2) / 6; break;
        case b: h = ((r - g) / d + 4) / 6; break;
      }
    }
    return `${Math.round(h * 360)} ${Math.round(s * 100)}% ${Math.round(l * 100)}%`;
  };

  useEffect(() => {
    const saved = localStorage.getItem('themeColor');
    if (saved) changeTheme(saved);
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

          {/* Color Picker */}
          <div className="flex items-center gap-3 border-l border-border pl-4 ml-2">
            <div className="relative group">
              <button 
                className="w-8 h-8 rounded-full bg-primary hover:scale-110 transition-transform flex items-center justify-center text-primary-foreground"
              >
                <i className="ri-palette-line" />
              </button>
              <div className="absolute right-0 top-full mt-2 p-2 glass-card rounded-xl hidden group-hover:flex flex-col gap-2 min-w-[40px]">
                {themeColors.map((color) => (
                  <button
                    key={color}
                    onClick={() => changeTheme(color)}
                    className="w-6 h-6 rounded-full border border-border hover:scale-110 transition-transform"
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
            </div>
          </div>
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
            <div className="w-16 h-px bg-white/10 my-2" />
            <div className="flex gap-4">
              {themeColors.map((color) => (
                <button
                  key={color}
                  onClick={() => changeTheme(color)}
                  className="w-8 h-8 rounded-full border border-white/20 hover:scale-110 transition-transform shadow-[0_0_10px_rgba(0,0,0,0.5)]"
                  style={{ backgroundColor: color }}
                  aria-label={`Changer le thème en ${color}`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
