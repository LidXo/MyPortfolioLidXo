import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePortfolio } from '@/contexts/PortfolioContext';
import 'remixicon/fonts/remixicon.css';

// --- Spotlight Card Component ---
const SpotlightCard = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current || isFocused) return;

    const div = divRef.current;
    const rect = div.getBoundingClientRect();

    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleFocus = () => {
    setIsFocused(true);
    setOpacity(1);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setOpacity(0);
  };

  const handleMouseEnter = () => {
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative rounded-xl border border-white/10 bg-[#0a0a0a] overflow-hidden ${className}`}
    >
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(255,255,255,0.1), transparent 40%)`,
        }}
      />
      <div className="relative h-full">{children}</div>
    </div>
  );
};

// --- Main Section ---
const TechnologiesSection: React.FC = () => {
  const { data } = usePortfolio();
  const { technologies } = data;
  const [activeTab, setActiveTab] = useState(technologies[0]?.id);
  const [activeCategory, setActiveCategory] = useState(technologies[0]);

  useEffect(() => {
    const found = technologies.find(t => t.id === activeTab);
    if (found) setActiveCategory(found);
  }, [activeTab, technologies]);

  return (
    <section id="technologies" className="py-24 relative min-h-screen flex flex-col items-center justify-start overflow-hidden">
      
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[#030303]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] -z-10 opacity-20" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] -z-10 opacity-20" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        
        {/* Header */}
        <div className="text-center mb-16">
           <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
           >
              <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">
                <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/50">
                  Command Center
                </span>
              </h2>
              <p className="text-muted-foreground/80 text-lg max-w-2xl mx-auto">
                Accès direct au noyau technologique. Sélectionnez un module pour explorer mes compétences.
              </p>
           </motion.div>
        </div>

        {/* Floating Dock Navigation */}
        <div className="sticky top-24 z-30 mb-12 flex justify-center">
          <motion.div 
            className="flex items-center gap-2 p-2 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl overflow-x-auto max-w-full no-scrollbar"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {technologies.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`relative px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 whitespace-nowrap flex items-center gap-2 ${
                  activeTab === category.id 
                    ? 'bg-primary text-primary-foreground shadow-[0_0_20px_rgba(var(--primary-rgb),0.3)] ring-1 ring-white/20' 
                    : 'text-muted-foreground hover:text-white hover:bg-white/10'
                }`}
              >
                <i className={`${
                    category.id.includes('lang') ? 'ri-code-s-slash-line' :
                    category.id.includes('ai') ? 'ri-brain-line' :
                    category.id.includes('data') ? 'ri-database-2-line' :
                    category.id.includes('cloud') ? 'ri-cloud-line' :
                    category.id.includes('devops') ? 'ri-terminal-box-line' :
                    'ri-stack-line'
                } text-lg`} />
                <span>{category.title}</span>
                
                {/* Active Dot */}
                {activeTab === category.id && (
                    <span className="absolute -top-1 -right-1 flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
                    </span>
                )}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Tech Grid */}
        <div className="min-h-[400px]">
           <AnimatePresence mode="wait">
             <motion.div
                key={activeTab}
                initial={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
                animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                exit={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
             >
                {activeCategory?.items.map((tech, idx) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.05 }}
                  >
                    <SpotlightCard className="h-full group">
                      <div className="p-8 h-full flex flex-col relative z-10">
                         {/* Icon Glow Background */}
                         <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/20 to-transparent rounded-bl-full -mr-8 -mt-8 opacity-50 group-hover:scale-110 transition-transform duration-500" />
                         
                         <div className="mb-6 inline-flex p-3 rounded-lg bg-white/5 border border-white/10 text-3xl text-primary w-fit group-hover:text-white group-hover:bg-primary group-hover:border-primary transition-all duration-300 shadow-lg">
                           <i className={tech.icon} />
                         </div>
                         
                         <h3 className="text-xl font-bold text-white mb-2 tracking-wide group-hover:text-primary transition-colors">
                           {tech.name}
                         </h3>
                         
                         <p className="text-sm text-muted-foreground/80 leading-relaxed">
                           {tech.usage}
                         </p>

                         {/* Tech Specs Decoration */}
                         <div className="mt-auto pt-6 flex items-center gap-2">
                            <div className="h-[2px] w-full bg-white/5 overflow-hidden rounded-full">
                                <div className="h-full w-2/3 bg-primary/50 group-hover:w-full transition-all duration-700 ease-out" />
                            </div>
                            <span className="text-[10px] font-mono text-primary/50 uppercase">V.Latest</span>
                         </div>
                      </div>
                    </SpotlightCard>
                  </motion.div>
                ))}
             </motion.div>
           </AnimatePresence>
        </div>

      </div>
    </section>
  );
};

export default TechnologiesSection;
