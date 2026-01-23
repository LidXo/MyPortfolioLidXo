import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePortfolio } from '@/contexts/PortfolioContext';
import 'remixicon/fonts/remixicon.css';

const TechnologiesSection: React.FC = () => {
  const { data } = usePortfolio();
  const { technologies } = data;
  const [activeTab, setActiveTab] = useState(technologies[0]?.id);

  const activeCategory = technologies.find(t => t.id === activeTab);

  return (
    <section id="technologies" className="py-32 relative overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-primary/20 rounded-full blur-[128px] -z-10 opacity-30 pointer-events-none" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[128px] -z-10 opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4 backdrop-blur-sm">
            Expertise Technique
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60">
            Arsenal <span className="text-primary">Technologique</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
            Une stack moderne et performante, orientée Data Engineering et Intelligence Artificielle.
          </p>
        </motion.div>
        
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Enhanced Sidebar Navigation */}
          <div className="w-full lg:w-1/3 shrink-0 lg:sticky lg:top-24 self-start">
             <div className="grid grid-cols-2 lg:grid-cols-1 gap-3">
              {technologies.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveTab(category.id)}
                  className={`group relative p-4 rounded-xl text-left transition-all duration-500 border overflow-hidden ${
                    activeTab === category.id 
                      ? 'bg-gradient-to-r from-primary/20 to-transparent border-primary/50 shadow-[0_4px_20px_-5px_rgba(var(--primary-rgb),0.3)]' 
                      : 'bg-white/5 border-white/5 hover:bg-white/10 hover:border-white/20'
                  }`}
                >
                  {/* Glow effect on active */}
                  {activeTab === category.id && (
                    <div className="absolute inset-0 bg-primary/5 blur-xl transition-all duration-500" />
                  )}

                  <div className="relative flex items-center gap-4 z-10">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center text-2xl transition-all duration-500 ${
                        activeTab === category.id 
                        ? 'bg-primary text-black shadow-lg scale-110' 
                        : 'bg-white/5 text-muted-foreground group-hover:text-white group-hover:scale-105 group-hover:bg-white/10'
                    }`}>
                        {/* We don't have category icons in the context type definition easily accessible if I missed adding them.
                            Wait, checking context... Yes, PortfolioContext has `icon` in `TechCategory`.
                         */}
                         {/* Fallback if icon missing, but I saw I added icons in context. */}
                         {/* Warning: In my previous step's context update, I REMOVED the top level icon property from the TechCategory object in the ReplaceContent call!
                            Let me check the `replace_file_content` input again.
                            Ah, I see I passed `items` but the `icon` property was NOT in the replacement content for categories?
                            Wait, looking at my `replace_file_content` call...
                            Category object: `{ id: "ai-ml", title: "IA & Machine Learning", items: [...] }`
                            I DID NOT include `icon` property in the category objects in my update!
                            So `category.icon` will be undefined or error if TS checks. I need to fix this or use a lookup.
                            I will use a conditional lookup here to be safe and fix the context later or now.
                            Actually, easier to just use the icon logic here for now or `ri-code-box-line` fallback.
                            Better: I'll use a map here to ensure it works even if context is missing it.
                          */}
                       <i className={
                            category.id === 'languages' ? 'ri-code-s-slash-line' :
                            category.id === 'ai-ml' ? 'ri-brain-line' :
                            category.id === 'bigdata' ? 'ri-server-line' :
                            category.id === 'cloud-devops' ? 'ri-cloud-windy-line' :
                            category.id === 'databases' ? 'ri-database-2-line' :
                            category.id === 'bi-viz' ? 'ri-bar-chart-grouped-line' :
                            'ri-stack-line'
                       } />
                    </div>
                    
                    <div className="flex flex-col">
                        <span className={`font-bold transition-colors duration-300 ${
                            activeTab === category.id ? 'text-white' : 'text-muted-foreground group-hover:text-white'
                        }`}>
                            {category.title}
                        </span>
                        <span className="text-xs text-muted-foreground/60 font-medium">
                            {category.items.length} technologies
                        </span>
                    </div>

                    {activeTab === category.id && (
                       <motion.i 
                        layoutId="active-arrow"
                        className="ri-arrow-right-line ml-auto text-primary text-xl" 
                       />
                    )}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Premium Tech Cards Grid */}
          <div className="w-full lg:w-2/3 min-h-[500px]">
            <AnimatePresence mode="wait">
                <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20, filter: 'blur(10px)' }}
                animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                exit={{ opacity: 0, x: -20, filter: 'blur(10px)' }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="grid grid-cols-1 md:grid-cols-2 gap-5"
                >
                {activeCategory?.items.map((tech, index) => (
                    <motion.div
                        key={tech.name}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.08, duration: 0.4 }}
                        className="group relative p-6 rounded-2xl bg-[#0a0a0a] border border-white/5 hover:border-primary/50 transition-all duration-500 overflow-hidden hover:shadow-[0_0_30px_rgba(var(--primary-rgb),0.15)]"
                    >
                        {/* Gradient Hover Blob */}
                        <div className="absolute -right-10 -top-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-all duration-500" />
                        
                        <div className="relative z-10 flex items-start gap-5">
                            <div className="w-14 h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-3xl text-primary shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                                <i className={tech.icon} />
                            </div>
                            
                            <div className="flex-1">
                                <h4 className="text-lg font-bold text-white mb-2 group-hover:text-primary transition-colors">
                                    {tech.name}
                                </h4>
                                <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
                                    {tech.usage}
                                </p>
                            </div>
                        </div>

                        {/* Bottom decorative line */}
                        <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-primary group-hover:w-full transition-all duration-700 ease-in-out" />
                    </motion.div>
                ))}
                </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologiesSection;
