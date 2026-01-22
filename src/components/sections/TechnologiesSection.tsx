import React from 'react';
import { motion } from 'framer-motion';
import { usePortfolio } from '@/contexts/PortfolioContext';
import 'remixicon/fonts/remixicon.css';

const TechnologiesSection: React.FC = () => {
  const { data } = usePortfolio();
  const { technologies } = data;

  return (
    <section id="technologies" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technologies <span className="text-primary">Maîtrisées</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Stack technique utilisée dans mes projets académiques et personnels.
          </p>
        </motion.div>
        
        <div className="space-y-12">
          {technologies.map((category, catIndex) => (
            <div key={category.id}>
              <motion.h3 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-2xl font-bold mb-6 flex items-center gap-3"
              >
                <span className="w-1 h-8 bg-primary rounded-full"></span>
                {category.title}
              </motion.h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {category.items.map((tech, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ y: -5 }}
                    className="glass-card p-4 rounded-xl flex items-start gap-4 hover:border-primary/50 transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                      <i className={`${tech.icon} text-xl text-primary`} />
                    </div>
                    <div>
                      <h4 className="font-bold text-base leading-tight mb-1">{tech.name}</h4>
                      <p className="text-xs text-muted-foreground leading-relaxed">{tech.usage}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologiesSection;
