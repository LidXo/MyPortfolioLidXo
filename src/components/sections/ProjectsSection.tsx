import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePortfolio } from '@/contexts/PortfolioContext';
import { ProjectItem } from '@/data/portfolio-data';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import 'remixicon/fonts/remixicon.css';

type FilterCategory = 'all' | 'data-analysis' | 'database' | 'backend' | 'web' | 'ai';

const filterButtons: { id: FilterCategory; label: string; icon: string }[] = [
  { id: 'all', label: 'Tous', icon: 'ri-apps-2-line' },
  { id: 'data-analysis', label: 'Data Analysis', icon: 'ri-bar-chart-2-line' },
  { id: 'database', label: 'Database & SQL', icon: 'ri-database-2-line' },
  { id: 'backend', label: 'Backend', icon: 'ri-server-line' },
  { id: 'web', label: 'Développement Web', icon: 'ri-layout-line' },
  { id: 'ai', label: 'Intelligence Artificielle', icon: 'ri-brain-line' },
];

const statusConfig = {
  completed: { label: 'Terminé', class: 'bg-emerald-50 text-emerald-700 border-emerald-200' },
  'in-progress': { label: 'En cours', class: 'bg-amber-50 text-amber-700 border-amber-200' },
  experimental: { label: 'Expérimental', class: 'bg-purple-50 text-purple-700 border-purple-200' },
};

const ProjectsSection: React.FC = () => {
  const { data } = usePortfolio();
  const { projects } = data;
  const [selectedFilter, setSelectedFilter] = useState<FilterCategory>('all');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const filteredProjects = selectedFilter === 'all'
    ? projects
    : projects.filter(p => p.category === selectedFilter);

  return (
    <section id="projects" className="py-24 bg-background/60 border-t border-border/40 relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* En-tête */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-wider mb-3">
            Réalisations &amp; Code Source
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 tracking-tight text-foreground">
            Mes <span className="gradient-text">Projets</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
            Data Engineering, architectures de bases de données relationnelles, analyses exploratoires et prototypes d'IA développés avec rigueur méthodologique.
          </p>
        </div>

        {/* Filtres de catégorie */}
        <div className="flex justify-center mb-12">
          <div className="flex flex-wrap justify-center gap-2 p-1.5 rounded-2xl bg-card border border-border shadow-sm max-w-full">
            {filterButtons.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setSelectedFilter(filter.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 flex items-center gap-2 ${
                  selectedFilter === filter.id
                    ? 'bg-primary text-primary-foreground shadow-sm'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted/60'
                }`}
              >
                <i className={`${filter.icon} text-base`} aria-hidden="true" />
                <span>{filter.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Grille des projets */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => {
              const isLeadFeatured = project.id === 1;
              const isDatabaseFeatured = project.id === 2;
              const status = statusConfig[project.status] || statusConfig.completed;

              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className={`bg-card rounded-2xl overflow-hidden border border-border/80 shadow-sm hover:shadow-xl hover:border-primary/40 transition-all flex flex-col group ${
                    isLeadFeatured && selectedFilter === 'all' ? 'md:col-span-2 lg:col-span-2' : ''
                  }`}
                >
                  {/* Visuel du projet */}
                  <div className={`overflow-hidden relative border-b border-border/60 ${
                    isLeadFeatured && selectedFilter === 'all' 
                      ? 'h-64 sm:h-72' 
                      : isDatabaseFeatured 
                      ? 'h-56 bg-slate-950 flex items-center justify-center p-1' 
                      : 'h-52'
                  }`}>
                    <img 
                      src={project.img} 
                      alt={`Illustration du projet ${project.title}`} 
                      className={`w-full h-full ${isDatabaseFeatured ? 'object-contain' : 'object-cover'} group-hover:scale-105 transition-transform duration-500`}
                      loading="lazy"
                    />
                    
                    {/* Badge de statut */}
                    <div className="absolute top-3 left-3 z-10">
                      <span className={`px-2.5 py-1 rounded-md text-[11px] font-bold border shadow-sm backdrop-blur-md ${status.class}`}>
                        {status.label}
                      </span>
                    </div>

                    {/* Badge Projet Phare */}
                    {isLeadFeatured && (
                      <div className="absolute top-3 right-3 z-10">
                        <span className="px-3 py-1 rounded-md text-[11px] font-bold bg-primary text-primary-foreground shadow-sm flex items-center gap-1.5">
                          <i className="ri-star-fill text-amber-400" aria-hidden="true" />
                          Projet Phare Data Analysis
                        </span>
                      </div>
                    )}

                    {isDatabaseFeatured && (
                      <div className="absolute top-3 right-3 z-10">
                        <span className="px-3 py-1 rounded-md text-[11px] font-bold bg-sky-900/90 text-sky-200 border border-sky-400/30 shadow-sm flex items-center gap-1.5">
                          <i className="ri-database-2-fill text-sky-400" aria-hidden="true" />
                          Database Engineering
                        </span>
                      </div>
                    )}
                  </div>
                  
                  {/* Corps de la carte */}
                  <div className="p-6 sm:p-7 flex flex-col flex-1 justify-between">
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold mb-2.5 text-foreground group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      
                      <p className="text-muted-foreground text-xs sm:text-sm mb-5 leading-relaxed line-clamp-3">
                        {project.shortDesc}
                      </p>
                      
                      {/* Tags technologies */}
                      <div className="flex flex-wrap gap-1.5 mb-6">
                        {project.tags.map((tag) => (
                          <span 
                            key={tag}
                            className="px-2.5 py-1 text-[11px] font-semibold rounded-lg bg-background border border-border/70 text-muted-foreground"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Boutons d'action distincts et réels */}
                    <div className="flex items-center gap-3 pt-4 border-t border-border/60">
                      {/* Bouton Fiche détaillée (si détails dispos) */}
                      {project.details ? (
                        <button
                          onClick={() => setSelectedProject(project)}
                          className="px-4 py-2 rounded-xl bg-primary text-primary-foreground text-xs sm:text-sm font-semibold hover:bg-primary/90 transition-all flex items-center gap-2 shadow-sm"
                        >
                          <i className="ri-article-line" aria-hidden="true" />
                          <span>Fiche détaillée</span>
                        </button>
                      ) : project.demoLink ? (
                        <a
                          href={project.demoLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2 rounded-xl bg-primary text-primary-foreground text-xs sm:text-sm font-semibold hover:bg-primary/90 transition-all flex items-center gap-2 shadow-sm"
                        >
                          <i className="ri-external-link-line" aria-hidden="true" />
                          <span>Démonstration</span>
                        </a>
                      ) : null}

                      {/* Bouton Code source distinct */}
                      <a 
                        href={project.githubLink} 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 rounded-xl border border-border bg-background hover:bg-card hover:border-primary/40 text-foreground transition-all flex items-center gap-2 text-xs sm:text-sm font-semibold ml-auto"
                      >
                        <i className="ri-github-fill text-base" aria-hidden="true" />
                        <span>Code source</span>
                      </a>
                    </div>

                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

      </div>

      {/* Modal Fiche Détaillée pour Projet Complet */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto p-6 sm:p-8 rounded-2xl bg-card border-border">
          {selectedProject?.details && (
            <div>
              <DialogHeader className="mb-6">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className="px-2.5 py-0.5 rounded text-xs font-bold bg-primary/10 text-primary border border-primary/20">
                    Étude de cas technique
                  </span>
                  <span className="text-xs text-muted-foreground font-semibold">
                    {selectedProject.id === 1 ? 'Dataset UCI Online Retail' : 'Projet 02 — Database Engineering & SQL'}
                  </span>
                </div>
                <DialogTitle className="text-2xl sm:text-3xl font-black text-foreground">
                  {selectedProject.title}
                </DialogTitle>
                <DialogDescription className="text-muted-foreground text-sm pt-1">
                  Documentation complète de la conception, de la méthodologie, des résultats vérifiables et des limites d'implémentation.
                </DialogDescription>
              </DialogHeader>

              <div className="space-y-6 text-sm text-foreground/90">
                {/* 1. Contexte & Problématique */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-background border border-border">
                    <h4 className="font-bold text-foreground flex items-center gap-2 mb-2">
                      <i className="ri-compass-line text-primary text-base" aria-hidden="true" />
                      1. Contexte du projet
                    </h4>
                    <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                      {selectedProject.details.context}
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-background border border-border">
                    <h4 className="font-bold text-foreground flex items-center gap-2 mb-2">
                      <i className="ri-alert-line text-amber-500 text-base" aria-hidden="true" />
                      2. Problématique &amp; Enjeux
                    </h4>
                    <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                      {selectedProject.details.problem}
                    </p>
                  </div>
                </div>

                {/* 2. Objectifs */}
                <div className="p-5 rounded-xl bg-background border border-border">
                  <h4 className="font-bold text-foreground flex items-center gap-2 mb-3">
                    <i className="ri-focus-3-line text-primary text-base" aria-hidden="true" />
                    3. Objectifs du projet
                  </h4>
                  <ul className="grid sm:grid-cols-2 gap-2 text-xs sm:text-sm text-muted-foreground">
                    {selectedProject.details.objectives.map((obj, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <i className="ri-check-line text-primary shrink-0 mt-0.5" aria-hidden="true" />
                        <span>{obj}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* 3. Méthodologie & Étapes */}
                <div className="p-5 rounded-xl bg-background border border-border">
                  <h4 className="font-bold text-foreground flex items-center gap-2 mb-2">
                    <i className="ri-node-tree text-primary text-base" aria-hidden="true" />
                    4. Méthodologie &amp; Démarche de réalisation
                  </h4>
                  <p className="text-xs sm:text-sm text-muted-foreground mb-4">
                    {selectedProject.details.methodology}
                  </p>
                  <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-2">
                    {selectedProject.details.steps.map((step, idx) => (
                      <div key={idx} className="p-2.5 rounded-lg bg-card/60 border border-border/60 text-xs">
                        <span className="font-mono font-bold text-primary mr-1.5">0{idx + 1}.</span>
                        <span className="text-foreground/80">{step}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 4. Résultats chiffrés réels */}
                <div className="p-5 rounded-xl bg-emerald-500/5 border border-emerald-500/20">
                  <h4 className="font-bold text-emerald-700 dark:text-emerald-400 flex items-center gap-2 mb-3">
                    <i className="ri-checkbox-circle-line text-emerald-600 text-base" aria-hidden="true" />
                    5. Résultats quantifiés &amp; Fonctionnalités validées
                  </h4>
                  <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
                    {selectedProject.details.results.map((res, i) => (
                      <div key={i} className="p-3 rounded-lg bg-card border border-emerald-500/30 text-xs font-semibold text-foreground">
                        {res}
                      </div>
                    ))}
                  </div>
                </div>

                {/* 5. Difficultés & Enseignements */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-background border border-border">
                    <h4 className="font-bold text-foreground flex items-center gap-2 mb-2">
                      <i className="ri-error-warning-line text-rose-500 text-base" aria-hidden="true" />
                      6. Difficultés techniques rencontrées
                    </h4>
                    <ul className="space-y-1.5 text-xs text-muted-foreground">
                      {selectedProject.details.difficulties.map((diff, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <span className="text-rose-500 font-bold">&bull;</span>
                          <span>{diff}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-4 rounded-xl bg-background border border-border">
                    <h4 className="font-bold text-foreground flex items-center gap-2 mb-2">
                      <i className="ri-lightbulb-line text-amber-500 text-base" aria-hidden="true" />
                      7. Enseignements &amp; Compétences acquises
                    </h4>
                    <ul className="space-y-1.5 text-xs text-muted-foreground">
                      {selectedProject.details.learnings.map((lrn, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <span className="text-amber-500 font-bold">&bull;</span>
                          <span>{lrn}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* 6. Limites méthodologiques (Transparence obligatoire) */}
                <div className="p-4 rounded-xl bg-amber-500/5 border border-amber-500/20 text-xs">
                  <h4 className="font-bold text-amber-700 dark:text-amber-400 flex items-center gap-2 mb-2">
                    <i className="ri-shield-check-line text-amber-600 text-base" aria-hidden="true" />
                    8. Limites actuelles &amp; Perspectives d'amélioration
                  </h4>
                  <ul className="space-y-1 text-muted-foreground">
                    {selectedProject.details.limitations.map((lim, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <span className="text-amber-600 font-bold">&bull;</span>
                        <span>{lim}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Liens du projet */}
                <div className="flex items-center justify-end gap-3 pt-4 border-t border-border">
                  <a
                    href={selectedProject.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 rounded-xl bg-primary text-primary-foreground font-semibold text-xs sm:text-sm hover:bg-primary/90 transition-all flex items-center gap-2 shadow-sm"
                  >
                    <i className="ri-github-fill text-base" aria-hidden="true" />
                    <span>Voir le code source sur GitHub</span>
                  </a>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default ProjectsSection;
