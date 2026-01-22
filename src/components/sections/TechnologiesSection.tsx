import React from 'react';
import { motion } from 'framer-motion';
import { usePortfolio } from '@/contexts/PortfolioContext';
import 'remixicon/fonts/remixicon.css';

const TechnologiesSection: React.FC = () => {
  const { data } = usePortfolio();
  const { technologies } = data;
  const [activeTab, setActiveTab] = React.useState(technologies[0]?.id);

  const activeCategory = technologies.find(t => t.id === activeTab);

  return (
    <section id="technologies" className="py-24 relative min-h-screen flex flex-col justify-center">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technologies <span className="text-primary">Maîtrisées</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Explorez ma stack technique par catégorie.
          </p>
        </motion.div>
        
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Category Navigation - Sidebar/Top on mobile */}
          <div className="w-full lg:w-1/3 shrink-0">
             <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-1 gap-3">
              {technologies.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveTab(category.id)}
                  className={`relative p-4 rounded-xl text-left transition-all duration-300 border flex items-center gap-4 group ${
                    activeTab === category.id 
                      ? 'bg-primary/10 border-primary shadow-[0_0_20px_rgba(var(--primary-rgb),0.1)]' 
                      : 'bg-card/50 border-border/50 hover:bg-card hover:border-primary/50'
                  }`}
                >
                  {/* Active Indicator Line (Left) */}
                  {activeTab === category.id && (
                    <motion.div
                      layoutId="active-indicator"
                      className="absolute left-0 top-0 bottom-0 w-1 bg-primary rounded-l-xl"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    />
                  )}

                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${
                      activeTab === category.id 
                      ? 'bg-primary text-primary-foreground' 
                      : 'bg-muted text-muted-foreground group-hover:text-primary'
                  }`}>
                    {/* Use the first icon from the category items as a representative icon if category doesn't have one, 
                        or map titles to icons. Since new context doesn't have explicit cat icons, we infer or use generic. 
                        Actually context HAS icons from previous update, let's use default icons based on ID if needed, 
                        BUT wait, the user provided context update has title but maybe not top-level icon in the NEW structure?
                        Let's check the context again. 
                        Ah, the new structure has `items`. It does NOT seem to have a top-level `icon` field in the interface `TechCategory`.
                        Wait, let me double check the interface in step 16 & 47.
                        Interface `TechCategory`: { id, title, items }. NO ICON.
                        I will use a generic icon map or just the first item's icon. 
                        Let's use a mapping for consistent category icons.
                     */}
                     {/* Temporary fix: hardcoded icons based on ID or generic. */}
                     <i className={`text-xl ${
                        category.id.includes('lang') ? 'ri-code-s-slash-line' :
                        category.id.includes('data') ? 'ri-database-2-line' :
                        category.id.includes('cloud') ? 'ri-cloud-line' :
                        category.id.includes('devops') ? 'ri-terminal-box-line' :
                        category.id.includes('ml') ? 'ri-brain-line' :
                        'ri-stack-line'
                     }`} />
                  </div>
                  
                  <span className={`font-bold transition-colors ${
                    activeTab === category.id ? 'text-foreground' : 'text-muted-foreground group-hover:text-foreground'
                  }`}>
                    {category.title}
                  </span>
                  
                  {activeTab === category.id && (
                     <i className="ri-arrow-right-s-line ml-auto text-primary animate-pulse" />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Content Area */}
          <div className="w-full lg:w-2/3 min-h-[400px]">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
            >
               {activeCategory?.items.map((tech, index) => (
                 <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="glass-card p-5 rounded-xl border border-border/50 bg-card/30 hover:bg-card/50 active:scale-[0.98] transition-all duration-300 group hover:border-primary/50"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-transparent border border-primary/20 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:border-primary/50 transition-all duration-300">
                        <i className={`${tech.icon} text-2xl text-primary`} />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-1 group-hover:text-primary transition-colors">
                          {tech.name}
                        </h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {tech.usage}
                        </p>
                      </div>
                    </div>
                 </motion.div>
               ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologiesSection;
