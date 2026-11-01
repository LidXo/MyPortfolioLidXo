import React from 'react';
import { motion } from 'framer-motion';
import { usePortfolio } from '@/contexts/PortfolioContext';
import 'remixicon/fonts/remixicon.css';

const AboutSection: React.FC = () => {
  const { data } = usePortfolio();
  const { about } = data;

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-background/50 border-t border-border/40">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Titre de section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-wider mb-3">
            Présentation &amp; Démarche
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-foreground tracking-tight">
            À Propos <span className="gradient-text">de Moi</span>
          </h2>
        </motion.div>
        
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Colonne gauche : Parcours & Texte de présentation */}
          <motion.div 
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="glass-card p-8 rounded-2xl border border-border/70 space-y-5">
              <div className="flex items-center gap-3 text-primary mb-2">
                <i className="ri-user-search-line text-2xl" aria-hidden="true" />
                <h3 className="text-xl font-bold text-foreground">Mon profil académique &amp; technique</h3>
              </div>
              
              {about.paragraphs.map((paragraph, idx) => (
                <p key={idx} className="text-muted-foreground text-base sm:text-lg leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Statistiques factuelles et professionnelles */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
              {about.stats.map((stat, index) => (
                <div 
                  key={index}
                  className="bg-card p-4 rounded-xl border border-border text-center shadow-sm"
                >
                  <i className={`${stat.icon} text-2xl text-primary mb-1 inline-block`} aria-hidden="true" />
                  <div className="text-xl sm:text-2xl font-black text-foreground">{stat.value}</div>
                  <div className="text-xs text-muted-foreground font-medium mt-0.5">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
          
          {/* Colonne droite : Objectifs d'apprentissage concrets */}
          <motion.div 
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5"
          >
            <div className="glass-card p-8 rounded-2xl border border-border/70">
              <div className="flex items-center gap-3 text-primary mb-4">
                <i className="ri-compass-3-line text-2xl" aria-hidden="true" />
                <h3 className="text-xl font-bold text-foreground">Mes Objectifs d'Apprentissage</h3>
              </div>

              <p className="text-xs sm:text-sm text-muted-foreground mb-6 leading-relaxed">
                Voici les domaines et compétences que j'approfondis actuellement par la pratique et des projets personnels :
              </p>
              
              <ul className="space-y-3.5">
                {about.objectives.map((objective, idx) => (
                  <li 
                    key={idx}
                    className="flex items-start gap-3 p-3 rounded-xl bg-background/70 border border-border/60 hover:border-primary/40 transition-colors"
                  >
                    <div className="w-6 h-6 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-0.5">
                      <i className="ri-check-line text-sm font-bold" aria-hidden="true" />
                    </div>
                    <span className="text-sm font-medium text-foreground leading-snug">
                      {objective}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 p-4 rounded-xl bg-primary/5 border border-primary/20 text-xs text-muted-foreground flex items-start gap-2.5">
                <i className="ri-information-line text-primary text-base shrink-0 mt-0.5" aria-hidden="true" />
                <span>
                  Ces axes constituent ma feuille de route vers l'ingénierie des données et le Machine Learning appliqué.
                </span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
