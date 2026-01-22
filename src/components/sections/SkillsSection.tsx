import React from 'react';
import { motion } from 'framer-motion';
import { usePortfolio } from '@/contexts/PortfolioContext';
import 'remixicon/fonts/remixicon.css';

const SkillsSection: React.FC = () => {
  const { data } = usePortfolio();
  const { skills } = data;

  return (
    <section id="skills" className="py-24 relative bg-background/50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Compétences <span className="text-primary">Clés</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
            Un profil <span className="text-primary font-semibold">T-shaped</span> alliant expertise technique approfondie en Data Engineering et vision architecturale globale.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group bg-card/50 backdrop-blur-sm p-6 rounded-xl border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1"
            >
              <div className="flex items-center gap-4 mb-6 pb-4 border-b border-border/50 group-hover:border-primary/20 transition-colors">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <i className={`${category.icon} text-2xl`} />
                </div>
                <h3 className="font-bold text-xl">{category.title}</h3>
              </div>
              
              <ul className="space-y-3">
                {category.skills.map((skill, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-muted-foreground group-hover:text-foreground/90 transition-colors">
                    <i className="ri-arrow-right-s-line text-primary mt-0.5 shrink-0 opacity-70 group-hover:opacity-100 transition-opacity" />
                    <span className="leading-snug">{skill}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
