import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { usePortfolio } from '@/contexts/PortfolioContext';
import 'remixicon/fonts/remixicon.css';

const HeroSection: React.FC = () => {
  const { data } = usePortfolio();
  const { hero, contact } = data;
  
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  
  const phrases = hero.subtitle.split('. ').filter(Boolean);
  
  useEffect(() => {
    const currentPhrase = phrases[loopNum % phrases.length];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentPhrase.slice(0, displayText.length + 1));
        if (displayText === currentPhrase) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setDisplayText(currentPhrase.slice(0, displayText.length - 1));
        if (displayText === '') {
          setIsDeleting(false);
          setLoopNum(loopNum + 1);
        }
      }
    }, isDeleting ? 30 : 50);
    
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, loopNum, phrases]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Hero Content */}
        <motion.div 
          className="order-2 md:order-1"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 border border-border rounded-full bg-secondary/50 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
            </span>
            <span className="text-primary text-sm font-medium tracking-wide">{hero.available}</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            Code. Données. <br />
            <span className="gradient-text">Intelligence.</span>
          </h1>
          
          <p className="text-muted-foreground text-lg md:text-xl mb-8 max-w-lg leading-relaxed min-h-[60px]">
            {displayText}<span className="animate-pulse">|</span>
          </p>

          <div className="flex flex-wrap gap-4">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-full overflow-hidden transition-all glow-accent"
            >
              <span className="relative z-10 flex items-center gap-2">
                Voir mes projets
                <i className="ri-arrow-right-line transition-transform group-hover:translate-x-1" />
              </span>
            </motion.a>

            <motion.a
              href={hero.cvLink}
              download
              whileHover={{ scale: 1.05 }}
              className="px-8 py-3 border border-primary text-primary font-semibold rounded-full hover:bg-primary hover:text-primary-foreground transition-all"
            >
              CV <i className="ri-download-line ml-1" />
            </motion.a>
          </div>

          {/* Socials */}
          <div className="mt-12 flex items-center gap-6 text-muted-foreground">
            {contact.socials.github && (
              <a href={contact.socials.github} className="hover:text-primary transition-colors text-2xl" aria-label="GitHub">
                <i className="ri-github-fill" />
              </a>
            )}
            {contact.socials.linkedin && (
              <a href={contact.socials.linkedin} className="hover:text-primary transition-colors text-2xl" aria-label="LinkedIn">
                <i className="ri-linkedin-fill" />
              </a>
            )}
            {contact.socials.twitter && (
              <a href={contact.socials.twitter} className="hover:text-primary transition-colors text-2xl" aria-label="Twitter">
                <i className="ri-twitter-x-fill" />
              </a>
            )}
            <div className="h-8 w-px bg-border mx-2" />
            <div className="text-sm">
              <span className="block text-foreground font-bold text-lg">{hero.yearsExp}</span>
              Années d'exp.
            </div>
          </div>
        </motion.div>

        {/* Hero Visual */}
        <motion.div 
          className="order-1 md:order-2 flex justify-center relative"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="absolute w-[80%] h-[80%] bg-primary/20 rounded-full blur-[100px] animate-pulse top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10" />

          <div className="relative">
            <div className="relative w-80 h-80 md:w-[400px] md:h-[400px] glass-card rounded-2xl overflow-hidden border border-border p-2">
              <div className="w-full h-full bg-card rounded-xl overflow-hidden relative group">
                <img 
                  src="/profile.jpg" 
                  alt="Lidao ABIYI" 
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <div className="text-primary text-sm font-mono mb-1">Dev & IA</div>
                  <div className="text-foreground font-bold text-xl">Lidao ABIYI</div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -right-12 top-20 glass-card p-4 rounded-xl animate-float border border-border">
              <i className="ri-code-s-slash-line text-3xl text-primary" />
            </div>
            <div className="absolute -left-12 bottom-32 glass-card p-4 rounded-xl animate-float-delayed border border-border">
              <i className="ri-brain-line text-3xl text-blue-400" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
