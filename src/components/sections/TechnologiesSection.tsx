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
            Stack technique utilisée en environnements de production et académiques.
          </p>
        </motion.div>
        
        <div className="space-y-16">
          {technologies.map((category, catIndex) => (
            <div key={category.id}>
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-4 mb-8"
              >
                <div className="h-px bg-border flex-1 max-w-[50px]"></div>
                <h3 className="text-2xl font-bold text-foreground/90">{category.title}</h3>
                <div className="h-px bg-border flex-1 opacity-50"></div>
              </motion.div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {category.items.map((tech, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ y: -5, borderColor: "hsl(var(--primary) / 0.5)" }}
                    className="glass-card p-4 rounded-xl border border-border/40 flex items-start gap-4 transition-all duration-300 group hover:shadow-lg hover:shadow-primary/5 hover:bg-card/50"
                  >
                    <div className="w-10 h-10 rounded-lg bg-background flex items-center justify-center shrink-0 border border-border/50 group-hover:border-primary/50 group-hover:text-primary transition-colors">
                      <i className={`${tech.icon} text-xl`} />
                    </div>
                    <div>
                      <h4 className="font-bold text-base leading-tight mb-1.5 group-hover:text-primary transition-colors">{tech.name}</h4>
                      <p className="text-xs text-muted-foreground leading-relaxed font-medium">{tech.usage}</p>
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
