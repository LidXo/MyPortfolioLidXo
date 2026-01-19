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
    <section id="projects" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-12 text-center"
        >
          Mes <span className="text-primary">Projets</span>
        </motion.h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {displayedProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ delay: index * 0.1 }}
                className="glass-card rounded-xl overflow-hidden project-card group"
              >
                <div className="project-card-img-container rounded-t-xl">
                  <img 
                    src={project.img} 
                    alt={project.title} 
                    className="project-card-img"
                  />
                  <div className="project-card-overlay">
                    <a 
                      href={project.link} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-foreground text-background flex items-center justify-center hover:bg-primary transition-colors"
                    >
                      <i className="ri-github-fill text-xl" />
                    </a>
                    <a 
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer" 
                      className="w-10 h-10 rounded-full bg-foreground text-background flex items-center justify-center hover:bg-primary transition-colors"
                    >
                      <i className="ri-external-link-line text-xl" />
                    </a>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {project.desc}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.split(',').map((tag, i) => (
                      <span 
                        key={i}
                        className="px-2 py-1 text-xs rounded border border-border bg-secondary text-muted-foreground"
                      >
                        {tag.trim()}
                      </span>
                    ))}
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
            className="text-center mt-12"
          >
            <Button
              onClick={() => setShowAll(true)}
              variant="outline"
              className="px-8 py-3 border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-full font-semibold"
            >
              Voir plus <i className="ri-arrow-down-line ml-2" />
            </Button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
