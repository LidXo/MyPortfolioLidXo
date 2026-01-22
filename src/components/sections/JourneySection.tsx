import React from 'react';
import { motion } from 'framer-motion';
import { usePortfolio } from '@/contexts/PortfolioContext';
import 'remixicon/fonts/remixicon.css';

const JourneySection: React.FC = () => {
  const { data } = usePortfolio();
  const { journey } = data;

  return (
    <section id="journey" className="py-24 relative overflow-hidden bg-background/50">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Mon <span className="text-primary">Parcours</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Une progression constante vers l'expertise Data & Cloud.
          </p>
        </motion.div>
        
        <div className="relative border-l-2 border-border/50 ml-6 md:ml-10 space-y-16">
          {journey.map((item, index) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pl-12 md:pl-16"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-background border-2 border-primary ring-4 ring-background shadow-[0_0_10px_hsl(var(--primary))]"></div>
              
              <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-start">
                <div className="shrink-0 pt-0.5">
                  <span className="inline-block px-3 py-1 rounded-md bg-primary/10 text-primary font-mono font-bold text-sm border border-primary/20">
                    {item.year}
                  </span>
                </div>
                
                <div className="group flex-1">
                  <h3 className="text-2xl font-bold text-foreground mb-2 flex items-center gap-3">
                    {item.title}
                    <i className={`${item.icon} text-primary/50 text-xl group-hover:text-primary transition-colors`} />
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-base border-l-2 border-primary/10 pl-4 group-hover:border-primary/50 transition-colors">
                    {item.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JourneySection;
