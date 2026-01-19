import React from 'react';
import { motion } from 'framer-motion';
import { usePortfolio } from '@/contexts/PortfolioContext';
import 'remixicon/fonts/remixicon.css';

const SkillsSection: React.FC = () => {
  const { data } = usePortfolio();
  const { skills } = data;

  const radius = 64;
  const circumference = 2 * Math.PI * radius;

  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-16 text-center"
        >
          Mes <span className="text-primary">Compétences</span>
        </motion.h2>
        
        <div className="flex flex-wrap justify-center gap-8 md:gap-12">
          {skills.map((skill, index) => {
            const offset = circumference - (skill.level / 100) * circumference;
            
            return (
              <motion.div
                key={skill.id}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="flex flex-col items-center gap-4 group"
              >
                <div className="skill-circle">
                  <svg viewBox="0 0 140 140">
                    <circle 
                      className="skill-circle-bg" 
                      cx="70" 
                      cy="70" 
                      r={radius} 
                    />
                    <motion.circle 
                      className="skill-circle-progress" 
                      cx="70" 
                      cy="70" 
                      r={radius}
                      initial={{ strokeDashoffset: circumference }}
                      whileInView={{ strokeDashoffset: offset }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                      style={{ 
                        strokeDasharray: circumference,
                      }}
                    />
                  </svg>
                  <div className="skill-circle-content">
                    <i className={`${skill.icon} text-3xl mb-1 text-foreground group-hover:text-primary transition-colors`} />
                    <span className="font-bold text-xl text-primary">{skill.level}</span>
                    <span className="text-xs text-muted-foreground">%</span>
                  </div>
                </div>
                <span className="font-medium text-muted-foreground tracking-wide group-hover:text-foreground transition-colors">
                  {skill.name}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
