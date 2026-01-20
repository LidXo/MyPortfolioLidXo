import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { usePortfolio } from '@/contexts/PortfolioContext';
import 'remixicon/fonts/remixicon.css';
import profileImg from '@/assets/avatar.jpg';

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
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-8 md:gap-12 items-center">
        {/* HACK: Order change for mobile - Visual first, then Text */}
        
        {/* Hero Visual */}
        <motion.div 
          className="order-1 md:order-2 flex justify-center relative mt-4 md:mt-0"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="absolute w-[80%] h-[80%] bg-primary/20 rounded-full blur-[60px] md:blur-[100px] animate-pulse top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10" />

          <div className="relative">
            <div className="relative w-64 h-64 md:w-[400px] md:h-[400px] glass-card rounded-full md:rounded-2xl overflow-hidden border-2 border-primary/20 p-1 md:p-2 shadow-2xl shadow-primary/10">
              <div className="w-full h-full bg-card rounded-full md:rounded-xl overflow-hidden relative group">
                <img 
                  src={profileImg}
                  alt="Lidao ABIYI" 
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>

            {/* Floating Elements - Positioned clearly for mobile */}
            <div className="absolute -right-4 top-10 md:-right-12 md:top-20 glass-card p-3 md:p-4 rounded-xl animate-float border border-border bg-black/40 backdrop-blur-md">
              <i className="ri-code-s-slash-line text-2xl md:text-3xl text-primary" />
            </div>
            <div className="absolute -left-4 bottom-10 md:-left-12 md:bottom-32 glass-card p-3 md:p-4 rounded-xl animate-float-delayed border border-border bg-black/40 backdrop-blur-md">
              <i className="ri-brain-line text-2xl md:text-3xl text-blue-400" />
            </div>
          </div>
        </motion.div>

        {/* Hero Content */}
        <motion.div 
          className="order-2 md:order-1 text-center md:text-left"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 border border-primary/30 rounded-full bg-primary/10 backdrop-blur-sm mx-auto md:mx-0">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
            </span>
            <span className="text-primary text-xs font-bold tracking-widest uppercase">{hero.available}</span>
          </div>
          
          <h1 className="text-4xl xs:text-5xl md:text-7xl font-extrabold leading-tight mb-6 tracking-tight">
            Code. Données. <br />
            <span className="gradient-text drop-shadow-sm">Intelligence.</span>
          </h1>
          
          <p className="text-muted-foreground text-base md:text-xl mb-8 max-w-lg leading-relaxed min-h-[50px] mx-auto md:mx-0">
            {displayText}<span className="animate-pulse text-primary">|</span>
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center md:justify-start">
            <motion.a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-8 py-3 bg-primary text-primary-foreground font-bold rounded-full overflow-hidden transition-all glow-accent shadow-lg shadow-primary/20 cursor-pointer"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                Voir mes projets
                <i className="ri-arrow-right-line transition-transform group-hover:translate-x-1" />
              </span>
            </motion.a>

            <motion.a
              href={hero.cvLink}
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 border-2 border-white/10 text-foreground font-semibold rounded-full hover:bg-white/5 hover:border-primary/50 transition-all flex items-center justify-center gap-2"
            >
              Mon CV <i className="ri-download-line text-primary" />
            </motion.a>
          </div>

          {/* Socials */}
          <div className="mt-10 flex items-center justify-center md:justify-start gap-6 text-muted-foreground">
            {contact.socials.github && (
              <a href={contact.socials.github} className="hover:text-white hover:scale-110 transition-all text-2xl" aria-label="GitHub">
                <i className="ri-github-fill" />
              </a>
            )}
            {contact.socials.linkedin && (
              <a href={contact.socials.linkedin} className="hover:text-[#0077b5] hover:scale-110 transition-all text-2xl" aria-label="LinkedIn">
                <i className="ri-linkedin-fill" />
              </a>
            )}
            {contact.socials.twitter && (
              <a href={contact.socials.twitter} className="hover:text-white hover:scale-110 transition-all text-2xl" aria-label="Twitter">
                <i className="ri-twitter-x-fill" />
              </a>
            )}
            <div className="h-8 w-px bg-white/10 mx-2" />
            <div className="text-left leading-tight">
              <span className="block text-foreground font-bold text-lg">{hero.yearsExp}</span>
              <span className="text-xs uppercase tracking-wider">Expérience</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
