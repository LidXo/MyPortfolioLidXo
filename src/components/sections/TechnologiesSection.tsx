import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePortfolio } from '@/contexts/PortfolioContext';
import { SkillLevel } from '@/data/portfolio-data';
import 'remixicon/fonts/remixicon.css';

const levelConfig: Record<SkillLevel, { label: string; bg: string; text: string; border: string }> = {
  beginner: {
    label: 'Débutant',
    bg: 'bg-slate-100',
    text: 'text-slate-700',
    border: 'border-slate-300'
  },
  intermediate: {
    label: 'Intermédiaire',
    bg: 'bg-blue-50',
    text: 'text-blue-700',
    border: 'border-blue-200'
  },
  operational: {
    label: 'Opérationnel',
    bg: 'bg-emerald-50',
    text: 'text-emerald-700',
    border: 'border-emerald-200'
  },
  advanced: {
    label: 'Avancé',
    bg: 'bg-purple-50',
    text: 'text-purple-700',
    border: 'border-purple-200'
  }
};

const TechnologiesSection: React.FC = () => {
  const { data } = usePortfolio();
  const { technologies } = data;
  const [activeTab, setActiveTab] = useState(technologies[0]?.id || 'languages');

  const activeCategory = technologies.find(t => t.id === activeTab) || technologies[0];

  return (
    <section id="technologies" className="py-24 relative overflow-hidden bg-background border-t border-border/40">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* En-tête */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-wider mb-3">
            Stack &amp; Compétences techniques
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 tracking-tight text-foreground">
            Technologies &amp; <span className="gradient-text">Compétences</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
            Organisation par catégories avec niveaux d'autonomie réels et transparents, sans pourcentages arbitraires.
          </p>

          {/* Légende des niveaux */}
          <div className="flex flex-wrap items-center justify-center gap-3 mt-6 text-xs font-medium">
            <span className="text-muted-foreground font-semibold">Niveaux :</span>
            {(['beginner', 'intermediate', 'operational', 'advanced'] as SkillLevel[]).map((lvl) => (
              <span 
                key={lvl}
                className={`px-2.5 py-1 rounded-full border ${levelConfig[lvl].bg} ${levelConfig[lvl].text} ${levelConfig[lvl].border}`}
              >
                {levelConfig[lvl].label}
              </span>
            ))}
          </div>
        </div>

        {/* Navigation des catégories */}
        <div className="flex justify-center mb-12">
          <div className="flex items-center gap-2 p-1.5 rounded-2xl bg-card border border-border shadow-sm overflow-x-auto max-w-full no-scrollbar">
            {technologies.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 whitespace-nowrap flex items-center gap-2 ${
                  activeTab === category.id 
                    ? 'bg-primary text-primary-foreground shadow-sm' 
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted/60'
                }`}
              >
                <i className={`${category.icon} text-base`} aria-hidden="true" />
                <span>{category.title}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Grille des compétences de la catégorie sélectionnée */}
        <div className="min-h-[280px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
            >
              {activeCategory?.items.map((tech) => {
                const badge = levelConfig[tech.level] || levelConfig.beginner;
                return (
                  <div
                    key={tech.name}
                    className="p-5 rounded-2xl bg-card border border-border/80 shadow-sm hover:border-primary/40 hover:shadow-md transition-all flex flex-col justify-between group"
                  >
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-xl bg-background border border-border flex items-center justify-center p-2.5 shrink-0 group-hover:scale-105 transition-transform">
                          <img 
                            src={tech.icon} 
                            alt={tech.name} 
                            className="w-full h-full object-contain"
                            loading="lazy"
                          />
                        </div>
                        <div>
                          <h4 className="text-base font-bold text-foreground group-hover:text-primary transition-colors">
                            {tech.name}
                          </h4>
                          <span className={`inline-block px-2 py-0.5 mt-1 rounded text-[11px] font-semibold border ${badge.bg} ${badge.text} ${badge.border}`}>
                            {badge.label}
                          </span>
                        </div>
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mt-2 pt-3 border-t border-border/50">
                      {tech.usage}
                    </p>
                  </div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Note d'ouverture Big Data & IA futures */}
        <div className="mt-14 p-6 rounded-2xl bg-card/50 border border-dashed border-border text-center max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-2 text-primary font-bold text-sm mb-1">
            <i className="ri-road-map-line text-lg" aria-hidden="true" />
            <span>Perspectives Big Data &amp; IA</span>
          </div>
          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
            Technologies cibles en cours d'exploration académique (Apache Spark, Kafka, Airflow, Scikit-learn, PyTorch). 
            Elles seront ajoutées à ce tableau au fur et à mesure de leur validation dans des projets pratiques.
          </p>
        </div>

      </div>
    </section>
  );
};

export default TechnologiesSection;
