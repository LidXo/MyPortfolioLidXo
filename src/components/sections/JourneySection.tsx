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
        <div className="absolute left-1/4 top-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute right-1/4 bottom-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-[100px] animate-pulse delay-1000" />
      </div>
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-20 text-center"
        >
          Mon <span className="text-primary relative inline-block">
            Parcours
            <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary/0 via-primary to-primary/0" />
          </span>
        </motion.h2>
        
        {/* Timeline Container */}
        <div className="relative">
          {/* Central Timeline Line with moving gradient */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 md:-translate-x-1/2 bg-white/5 rounded-full overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-primary/0 via-primary to-primary/0 animate-float" style={{ height: '50%', top: '-50%' }} />
          </div>
          
          <div className="space-y-12 md:space-y-20">
            {journey.map((item, index) => (
              <motion.div 
                key={item.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                {/* Timeline Node */}
                <div className="absolute left-4 md:left-1/2 top-8 md:-translate-x-1/2 z-20 flex items-center justify-center transform -translate-x-[6px]">
                  <motion.div 
                    whileInView={{ scale: [1, 1.5, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-4 h-4 rounded-full bg-primary shadow-[0_0_20px_hsl(var(--primary))]"
                  />
                  <div className="absolute w-8 h-8 rounded-full border border-primary/30 animate-ping opacity-20" />
                </div>
                
                {/* Content Card */}
                <div className={`ml-16 md:ml-0 md:w-[calc(50%-3rem)] ${
                  index % 2 === 0 ? 'md:mr-auto md:pr-0' : 'md:ml-auto md:pl-0'
                }`}>
                  <motion.div 
                    whileHover={{ y: -8, scale: 1.02 }}
                    className="glass-card p-1 rounded-2xl relative group transition-all duration-500 bg-gradient-to-b from-white/5 to-white/0 hover:from-primary/20 hover:to-primary/5"
                  >
                    <div className="bg-card/90 backdrop-blur-xl p-6 rounded-xl h-full border border-white/5 group-hover:border-primary/50 transition-colors">
                      {/* Year Badge */}
                      <div className={`absolute -top-4 ${
                        index % 2 === 0 ? 'md:-right-16 left-6' : 'md:-left-16 left-6'
                      } md:left-auto`}>
                        <motion.span 
                          whileHover={{ scale: 1.1, rotate: index % 2 === 0 ? 5 : -5 }}
                          className="flex items-center justify-center px-4 py-1 bg-gradient-to-r from-primary to-emerald-400 text-black font-bold font-mono rounded-full shadow-[0_0_20px_rgba(16,185,129,0.4)] border border-white/20"
                        >
                          {item.year}
                        </motion.span>
                      </div>
                      
                      {/* Icon & Title */}
                      <div className="flex items-start gap-4 mb-4 mt-2">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 via-primary/10 to-transparent flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-500 border border-primary/20">
                          <i className={`${item.icon || 'ri-bookmark-line'} text-primary text-2xl drop-shadow-[0_0_10px_rgba(16,185,129,0.5)]`} />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                            {item.title}
                          </h3>
                        </div>
                      </div>
                      
                      <p className="text-muted-foreground text-sm leading-relaxed pl-2 border-l-2 border-primary/20 group-hover:border-primary transition-colors">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* End marker */}
          <div className="absolute left-4 md:left-1/2 bottom-0 md:-translate-x-1/2 transform -translate-x-[2px] w-3 h-3 rounded-full bg-primary/20 border border-primary" />
        </div>
      </div>
    </section>
  );
};

export default JourneySection;
