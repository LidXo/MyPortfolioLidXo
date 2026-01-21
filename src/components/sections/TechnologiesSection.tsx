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
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -5 }}
              className="glass-card p-6 rounded-xl flex flex-col items-center text-center gap-3 hover:border-primary/50 transition-colors group"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-1 group-hover:bg-primary/20 transition-colors">
                <i className={`${tech.icon} text-3xl text-primary`} />
              </div>
              <div>
                <h3 className="font-bold text-lg leading-tight">{tech.name}</h3>
                <p className="text-xs text-muted-foreground mt-1">{tech.category}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologiesSection;
