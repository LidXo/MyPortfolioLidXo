import React from 'react';
import { motion } from 'framer-motion';
import { usePortfolio } from '@/contexts/PortfolioContext';
import 'remixicon/fonts/remixicon.css';

const JourneySection: React.FC = () => {
  const { data } = usePortfolio();
  const { journey } = data;

  return (
    <section id="journey" className="py-24 relative overflow-hidden bg-background">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="text-center mb-24"
        >
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-4 text-foreground">
            Mon Parcours
          </h2>
          <p className="text-muted-foreground text-lg font-medium">
           
          </p>
        </motion.div>
        
        <div className="relative border-l border-border ml-4 md:ml-8 space-y-16">
          {journey.map((item, index) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pl-10 md:pl-16 group"
            >
              {/* Clean Timeline Dot */}
              <div className="absolute -left-[6px] top-1.5 w-3 h-3 rounded-full bg-border group-hover:bg-primary transition-colors ring-4 ring-background"></div>
              
              <div className="flex flex-col md:flex-row gap-4 md:gap-12 items-start">
                {/* Year */}
                <div className="shrink-0 pt-0.5 md:w-24">
                  <span className="text-muted-foreground group-hover:text-primary transition-colors font-bold text-sm tracking-widest uppercase">
                    {item.year}
                  </span>
                </div>
                
                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-foreground mb-3 flex items-center gap-3">
                    {item.title}
                    {item.icon && <i className={`${item.icon} text-muted-foreground/40 text-xl group-hover:text-primary/60 transition-colors`} />}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-base">
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
