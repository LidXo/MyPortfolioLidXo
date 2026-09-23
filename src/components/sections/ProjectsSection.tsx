import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePortfolio } from '@/contexts/PortfolioContext';
import { Button } from '@/components/ui/button';
import 'remixicon/fonts/remixicon.css';

const ProjectsSection: React.FC = () => {
  const { data } = usePortfolio();
  const { projects } = data;
  const [showAll, setShowAll] = useState(false);
  
  const displayedProjects = showAll ? projects : projects.slice(0, 6);
  const hasMore = projects.length > 6;

  return (
    <section id="projects" className="py-24 bg-background/50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-black mb-16 text-center tracking-tighter text-foreground"
        >
          Mes Projets
        </motion.h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          <AnimatePresence>
            {displayedProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ delay: index * 0.05 }}
                className="bg-card rounded-2xl overflow-hidden border border-border/60 shadow-sm hover:shadow-md transition-all group flex flex-col"
              >
                {/* Image Section - Minimalist without heavy dark overlays */}
                <div className="h-56 overflow-hidden relative border-b border-border/50">
                  <img 
                    src={project.img} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                
                {/* Content Section */}
                <div className="p-8 flex flex-col flex-1">
                  <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm mb-6 line-clamp-3 leading-relaxed flex-1">
                    {project.desc}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.split(',').map((tag, i) => (
                      <span 
                        key={i}
                        className="px-3 py-1 text-[10px] font-bold tracking-widest uppercase rounded-full bg-background border border-border text-muted-foreground"
                      >
                        {tag.trim()}
                      </span>
                    ))}
                  </div>

                  {/* Links cleanly integrated at the bottom */}
                  <div className="flex items-center gap-4 pt-4 border-t border-border/40">
                    <a 
                      href={project.link} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2 text-sm font-medium"
                    >
                      <i className="ri-github-fill text-lg" />
                      Code
                    </a>
                    <a 
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer" 
                      className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 text-sm font-medium ml-auto"
                    >
                      <i className="ri-external-link-line text-lg" />
                      Visiter
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        
        {hasMore && !showAll && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center mt-16"
          >
            <Button
              onClick={() => setShowAll(true)}
              variant="outline"
              className="px-8 py-6 border-2 border-foreground text-foreground hover:bg-foreground hover:text-background rounded-full font-bold text-sm tracking-widest uppercase transition-all"
            >
              Voir plus <i className="ri-arrow-down-line ml-2 text-lg" />
            </Button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
