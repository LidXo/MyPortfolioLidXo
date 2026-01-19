import React from 'react';
import { motion } from 'framer-motion';
import { usePortfolio } from '@/contexts/PortfolioContext';
import 'remixicon/fonts/remixicon.css';

const InterestsSection: React.FC = () => {
  const { data } = usePortfolio();
  const { interests } = data;

  return (
    <section id="interests" className="py-24 relative bg-secondary/20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-16 text-center"
        >
          Centres <span className="text-primary">d'intérêt</span>
        </motion.h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {interests.map((interest, index) => (
            <motion.div
              key={interest.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="glass-card p-6 rounded-xl flex flex-col items-center justify-center gap-4 hover:border-primary transition-colors group"
            >
              <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                <i className={`${interest.icon} text-3xl text-primary group-hover:text-primary-foreground transition-colors`} />
              </div>
              <span className="font-medium text-lg text-muted-foreground group-hover:text-foreground transition-colors">
                {interest.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InterestsSection;
