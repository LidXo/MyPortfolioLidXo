import React from 'react';
import { motion } from 'framer-motion';
import { usePortfolio } from '@/contexts/PortfolioContext';
import 'remixicon/fonts/remixicon.css';

const SkillsSection: React.FC = () => {
  const { data } = usePortfolio();
  const { skills } = data;

  return (
    <section id="skills" className="py-24 relative bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Compétences <span className="text-primary">Opérationnelles</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Capacités techniques appliquées à des problématiques data réelles.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-card p-8 rounded-xl border border-border/50 hover:border-primary/50 transition-colors shadow-sm hover:shadow-md"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                  <i className={`${category.icon} text-2xl`} />
                </div>
                <h3 className="font-bold text-xl">{category.title}</h3>
              </div>
              
              <ul className="space-y-3">
                {category.skills.map((skill, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <i className="ri-checkbox-circle-fill text-primary mt-1 shrink-0" />
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-muted-foreground italic border-l-4 border-primary pl-4 inline-block text-left max-w-2xl">
            « Compétences acquises à travers des projets data concrets, des expérimentations techniques et des cas d’usage réels. »
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
