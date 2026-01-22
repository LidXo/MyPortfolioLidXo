import React from 'react';
import { motion } from 'framer-motion';
import { usePortfolio } from '@/contexts/PortfolioContext';
import 'remixicon/fonts/remixicon.css';

const JourneySection: React.FC = () => {
  const { data } = usePortfolio();
  const { journey } = data;

  return (
    <section id="journey" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/4 top-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute right-1/4 bottom-1/4 w-80 h-80 bg-primary/5 rounded-full blur-[120px]" />
      </div>
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="text-center mb-24"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Mon <span className="text-primary">Parcours</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Une progression constante vers l'expertise Data & Cloud.
          </p>
        </motion.div>
        
        {/* Timeline Container */}
        <div className="relative">
          {/* Central Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px md:-translate-x-1/2 bg-gradient-to-b from-primary/0 via-primary/50 to-primary/0"></div>
          
          <div className="space-y-12 md:space-y-24">
            {journey.map((item, index) => (
              <motion.div 
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                {/* Timeline Node */}
                <div className="absolute left-4 md:left-1/2 top-0 md:-translate-x-1/2 z-20 flex items-center justify-center transform -translate-x-[7px] -translate-y-[2px]">
                  <div className="w-4 h-4 rounded-full bg-background border-2 border-primary shadow-[0_0_10px_hsl(var(--primary))] relative z-10"></div>
                  <div className="absolute w-8 h-8 rounded-full bg-primary/20 animate-pulse"></div>
                </div>
                
                {/* Content Card */}
                <div className={`ml-16 md:ml-0 md:w-[calc(50%-3rem)] ${
                  index % 2 === 0 ? 'md:mr-auto md:pr-0 text-left' : 'md:ml-auto md:pl-0 md:text-left'
                }`}>
                  <div className={`flex flex-col gap-2 ${
                     index % 2 === 0 ? 'md:items-end md:text-right' : 'md:items-start'
                  }`}>
                    {/* Year Display */}
                    <span className="text-primary font-mono font-bold text-lg tracking-wider mb-1 opacity-80 decoration-0">
                      {item.year}
                    </span>
                    
                    <div className="glass-card p-6 rounded-xl border border-border/40 hover:border-primary/40 transition-colors w-full bg-card/40 backdrop-blur-sm group hover:shadow-lg hover:shadow-primary/5">
                      <div className={`flex items-start gap-4 mb-4 ${
                        index % 2 === 0 ? 'md:flex-row-reverse' : 'flex-row'
                      }`}>
                         <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 text-primary">
                           <i className={`${item.icon} text-lg`} />
                         </div>
                         <div>
                            <h3 className="text-xl font-bold leading-tight group-hover:text-primary transition-colors">
                              {item.title}
                            </h3>
                         </div>
                      </div>
                      
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default JourneySection;
