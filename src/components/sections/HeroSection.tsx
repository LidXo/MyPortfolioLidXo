import React from 'react';
import { motion } from 'framer-motion';
import { usePortfolio } from '@/contexts/PortfolioContext';
import 'remixicon/fonts/remixicon.css';
import profileImg from '@/assets/avatar.jpeg';

const HeroSection: React.FC = () => {
  const { data } = usePortfolio();
  const { hero, contact } = data;

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-[92vh] flex items-center justify-center pt-28 pb-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">
        
        {/* Colonne gauche (Texte) sur grand écran, prioritaire sur mobile */}
        <motion.div 
          className="lg:col-span-7 flex flex-col justify-center order-1"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Badge statut / positionnement */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary w-fit mb-6 shadow-sm">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-600" />
            </span>
            <span className="text-xs font-semibold tracking-wide uppercase">
              {contact.status} &bull; Lomé, Togo
            </span>
          </div>

          {/* Nom */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-foreground tracking-tight leading-[1.1] mb-4">
            {hero.firstName} <span className="gradient-text">{hero.lastName}</span>
          </h1>
          
          {/* Titre professionnel exact */}
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground/90 mb-6 leading-snug">
            {hero.title}
          </h2>

          {/* Description claire et honnête */}
          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed mb-8 max-w-2xl font-normal">
            {hero.description}
          </p>

          {/* Boutons d'action principaux */}
          <div className="flex flex-wrap items-center gap-4 mb-8">
            <button 
              onClick={() => scrollToSection('projects')}
              aria-label="Découvrir mes projets"
              className="px-7 py-3.5 rounded-xl bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all flex items-center gap-2.5 shadow-lg shadow-primary/25 hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Découvrir mes projets</span>
              <i className="ri-arrow-right-line text-lg" aria-hidden="true" />
            </button>

            <a 
              href={hero.cvLink}
              download
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Télécharger mon curriculum vitae"
              className="px-7 py-3.5 rounded-xl border border-border bg-card/60 backdrop-blur-sm text-foreground font-semibold hover:bg-foreground hover:text-background transition-all flex items-center gap-2.5 shadow-sm hover:-translate-y-0.5 active:translate-y-0"
            >
              <i className="ri-download-2-line text-lg" aria-hidden="true" />
              <span>Télécharger mon CV</span>
            </a>

            {contact.socials.github && (
              <a 
                href={contact.socials.github} 
                target="_blank" 
                rel="noreferrer"
                aria-label="Profil GitHub d'ABIYI Lidao"
                className="w-12 h-12 rounded-xl border border-border bg-card/60 backdrop-blur-sm flex items-center justify-center text-foreground hover:text-primary hover:border-primary/50 transition-all shadow-sm"
              >
                <i className="ri-github-fill text-2xl" aria-hidden="true" />
              </a>
            )}

            {contact.socials.linkedin && (
              <a 
                href={contact.socials.linkedin} 
                target="_blank" 
                rel="noreferrer"
                aria-label="Profil LinkedIn d'ABIYI Lidao"
                className="w-12 h-12 rounded-xl border border-border bg-card/60 backdrop-blur-sm flex items-center justify-center text-foreground hover:text-[#0077b5] hover:border-[#0077b5]/50 transition-all shadow-sm"
              >
                <i className="ri-linkedin-fill text-2xl" aria-hidden="true" />
              </a>
            )}
          </div>
        </motion.div>

        {/* Colonne droite (Photo & Icônes flottantes pertinentes) */}
        <motion.div 
          className="lg:col-span-5 flex justify-center order-2"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
        >
          <div className="relative">
            {/* Cadre de photo principal */}
            <div className="relative w-[280px] sm:w-[320px] lg:w-[360px] h-[370px] sm:h-[420px] lg:h-[470px] rounded-3xl overflow-hidden shadow-2xl border-2 border-border/80 bg-card/80 backdrop-blur-sm">
              <img 
                src={profileImg}
                alt="Portrait professionnel de Lidao ABIYI" 
                className="w-full h-full object-cover object-top scale-125 translate-y-3 origin-top"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Floating Tech Badges (pertinents pour Data/IA/Système) */}
            <motion.div 
              animate={{ y: [-6, 6, -6] }} 
              transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut" }}
              className="absolute -top-4 -left-6 px-3.5 py-2 bg-card/90 backdrop-blur-md rounded-2xl shadow-lg border border-border/80 flex items-center gap-2.5 z-20"
            >
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" className="w-6 h-6" alt="Python" />
              <span className="text-xs font-bold text-foreground">Python &amp; Pandas</span>
            </motion.div>

            <motion.div 
              animate={{ y: [6, -6, 6] }} 
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              className="absolute top-1/2 -right-8 px-3.5 py-2 bg-card/90 backdrop-blur-md rounded-2xl shadow-lg border border-border/80 flex items-center gap-2.5 z-20"
            >
              <i className="ri-database-2-line text-xl text-primary" aria-hidden="true" />
              <span className="text-xs font-bold text-foreground">SQL &amp; Data</span>
            </motion.div>

            <motion.div 
              animate={{ y: [-5, 5, -5] }} 
              transition={{ repeat: Infinity, duration: 4.8, ease: "easeInOut" }}
              className="absolute -bottom-4 left-6 px-3.5 py-2 bg-card/90 backdrop-blur-md rounded-2xl shadow-lg border border-border/80 flex items-center gap-2.5 z-20"
            >
              <i className="ri-brain-line text-xl text-secondary" aria-hidden="true" />
              <span className="text-xs font-bold text-foreground">IA &amp; Big Data</span>
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default HeroSection;
