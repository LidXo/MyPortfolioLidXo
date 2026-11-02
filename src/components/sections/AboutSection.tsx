import React from 'react';
import { motion } from 'framer-motion';
import { usePortfolio } from '@/contexts/PortfolioContext';
import 'remixicon/fonts/remixicon.css';

const AboutSection: React.FC = () => {
  const { data } = usePortfolio();
  const { about } = data;

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-background/50 border-t border-border/40">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Titre de section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-wider mb-3">
            Profil &amp; Démarche
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-foreground tracking-tight">
            À Propos <span className="gradient-text">de Moi</span>
          </h2>
        </motion.div>

        {/* Bloc principal de présentation - Format unifié, aéré et élégant */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card p-8 sm:p-12 rounded-3xl border border-border/80 shadow-sm relative overflow-hidden mb-12"
        >
          {/* Accent visuel d'arrière-plan */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl -z-10 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary/5 rounded-full blur-3xl -z-10 pointer-events-none" />

          {/* En-tête de la carte */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-8 mb-8 border-b border-border/60">
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center shrink-0 border border-primary/20 shadow-sm">
                <i className="ri-user-smile-line text-2xl" aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-foreground">
                  Étudiant en IA &amp; Big Data &bull; Futur Data Engineer
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  ESGIS Lomé &bull; Rigueur académique &amp; réalisations techniques
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 text-xs font-semibold">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                En recherche active de stage
              </span>
            </div>
          </div>

          {/* Paragraphes de présentation - Lisibilité et typographie premium */}
          <div className="space-y-6 max-w-4xl text-base sm:text-lg leading-relaxed text-muted-foreground">
            {about.paragraphs.map((paragraph, idx) => (
              <p key={idx} className="leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Ligne d'actions contextuelles discrètes */}
          <div className="mt-10 pt-6 border-t border-border/60 flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-muted-foreground">
              <span className="text-foreground">Domaines d'action :</span>
              <span className="px-2.5 py-1 rounded-lg bg-background border border-border/70">Data Engineering</span>
              <span className="px-2.5 py-1 rounded-lg bg-background border border-border/70">Modélisation SQL</span>
              <span className="px-2.5 py-1 rounded-lg bg-background border border-border/70">Data Analysis</span>
              <span className="px-2.5 py-1 rounded-lg bg-background border border-border/70">Machine Learning</span>
            </div>

            <button
              onClick={() => scrollToSection('contact')}
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-primary hover:text-primary/80 transition-colors"
            >
              <span>Échanger ensemble</span>
              <i className="ri-arrow-right-line" aria-hidden="true" />
            </button>
          </div>
        </motion.div>

        {/* Indicateurs clés et statistiques harmonieuses */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {about.stats.map((stat, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-card border border-border/80 shadow-sm hover:border-primary/40 hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div className="flex items-center justify-between gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <i className={`${stat.icon} text-xl`} aria-hidden="true" />
                </div>
                <span className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">
                  {stat.label}
                </span>
              </div>

              <div>
                <div className="text-2xl sm:text-3xl font-black text-foreground group-hover:text-primary transition-colors tracking-tight mb-1">
                  {stat.value}
                </div>
                {stat.description && (
                  <p 
                    className="text-xs text-muted-foreground leading-snug"
                    dangerouslySetInnerHTML={{ __html: stat.description }}
                  />
                )}
              </div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default AboutSection;
