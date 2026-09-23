import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePortfolio } from '@/contexts/PortfolioContext';
import 'remixicon/fonts/remixicon.css';

const TechnologiesSection: React.FC = () => {
  const { data } = usePortfolio();
  const { technologies } = data;
  const [activeTab, setActiveTab] = useState(technologies[0]?.id);
  const [activeCategory, setActiveCategory] = useState(technologies[0]);

  useEffect(() => {
    const found = technologies.find(t => t.id === activeTab);
    if (found) setActiveCategory(found);
  }, [activeTab, technologies]);

  return (
    <section id="technologies" className="py-24 relative min-h-[80vh] flex flex-col items-center justify-start overflow-hidden bg-background">
      
      {/* Background Elements */}
      <div className="absolute inset-0 bg-background z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] opacity-50" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[100px] opacity-50" />
      </div>

      <div className="container relative z-10 mx-auto px-4 max-w-6xl">
        
        {/* Header */}
        <div className="text-center mb-16">
           <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
           >
              <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tighter text-foreground">
                Outils & <span className="text-primary">Technologies</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-medium">
                Les technologies que je manie au quotidien pour construire des solutions intelligentes.
              </p>
           </motion.div>
        </div>

        {/* Floating Dock Navigation */}
        <div className="sticky top-24 z-30 mb-16 flex justify-center">
          <motion.div 
            className="flex items-center gap-2 p-2 rounded-full bg-card/80 backdrop-blur-xl border border-border shadow-md overflow-x-auto max-w-full no-scrollbar"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {technologies.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`relative px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 whitespace-nowrap flex items-center gap-2 ${
                  activeTab === category.id 
                    ? 'bg-primary text-primary-foreground shadow-sm' 
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                }`}
              >
                <i className={`${
                    category.id.includes('lang') ? 'ri-code-s-slash-line' :
                    category.id.includes('ai') ? 'ri-brain-line' :
                    category.id.includes('data') ? 'ri-database-2-line' :
                    category.id.includes('cloud') ? 'ri-cloud-line' :
                    category.id.includes('devops') ? 'ri-terminal-box-line' :
                    'ri-stack-line'
                } text-lg`} />
                <span>{category.title}</span>
              </button>
            ))}
          </motion.div>
        </div>

        {/* Tech Badges (Pills) */}
        <div className="min-h-[300px] flex items-center justify-center">
           <AnimatePresence mode="wait">
             <motion.div
                key={activeTab}
                initial={{ opacity: 0, scale: 0.95, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -10 }}
                transition={{ duration: 0.3 }}
                className="flex flex-wrap justify-center gap-5 md:gap-6 max-w-4xl"
             >
                {activeCategory?.items.map((tech, idx) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.05, type: 'spring', stiffness: 100 }}
                    whileHover={{ y: -5, scale: 1.05 }}
                    className="flex items-center gap-4 bg-card px-6 py-3.5 rounded-full border border-border shadow-sm hover:shadow-lg transition-all group cursor-default"
                  >
                    {/* Real Logo SVG */}
                    <div className="w-8 h-8 md:w-10 md:h-10 flex-shrink-0 flex items-center justify-center">
                      <img 
                        src={tech.icon} 
                        alt={tech.name} 
                        className="w-full h-full object-contain filter group-hover:drop-shadow-[0_0_8px_rgba(0,180,216,0.5)] transition-all duration-300" 
                        loading="lazy"
                      />
                    </div>
                    
                    {/* Text & Percentage */}
                    <div className="flex flex-col">
                       <span className="font-extrabold text-foreground text-sm md:text-base leading-none mb-1">
                         {tech.name}
                       </span>
                       <div className="flex items-center gap-2">
                         <div className="w-16 h-1.5 bg-muted rounded-full overflow-hidden">
                           <div 
                             className="h-full bg-primary transition-all duration-1000 ease-out"
                             style={{ width: `${tech.level || 0}%` }}
                           />
                         </div>
                         <span className="text-[10px] md:text-xs font-mono font-bold text-muted-foreground group-hover:text-primary transition-colors">
                           {tech.level || 0}%
                         </span>
                       </div>
                    </div>
                  </motion.div>
                ))}
             </motion.div>
           </AnimatePresence>
        </div>

      </div>
    </section>
  );
};

export default TechnologiesSection;
