import React from 'react';
import { motion } from 'framer-motion';
import { usePortfolio } from '@/contexts/PortfolioContext';
import 'remixicon/fonts/remixicon.css';
import profileImg from '@/assets/avatar.jpeg';

const HeroSection: React.FC = () => {
  const { data } = usePortfolio();
  const { hero, contact } = data;

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-24 pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">
        
        {/* Left Column: Image & Floating Icons */}
        <motion.div 
          className="relative flex justify-center lg:justify-end order-2 lg:order-1"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Tight wrapper for accurate absolute positioning */}
          <div className="relative">
            {/* Main Image Card */}
            <div className="relative w-[300px] sm:w-[350px] lg:w-[420px] h-[400px] sm:h-[480px] lg:h-[580px] rounded-3xl overflow-hidden shadow-2xl border-4 border-card bg-card/50">
              <img 
                src={profileImg}
                alt="Lidao ABIYI" 
                className="w-full h-full object-cover object-top scale-105 transform origin-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent mix-blend-overlay"></div>
            </div>

            {/* Floating Icons */}
            <motion.div 
              animate={{ y: [-10, 10, -10] }} 
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute top-10 -left-8 w-16 h-16 bg-white rounded-2xl shadow-xl flex items-center justify-center text-4xl border border-border z-10"
            >
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" className="w-10 h-10" alt="Python" />
            </motion.div>

            <motion.div 
              animate={{ y: [10, -10, 10] }} 
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              className="absolute top-1/2 -left-10 w-16 h-16 bg-white rounded-2xl shadow-xl flex items-center justify-center text-4xl text-[#336791] border border-border z-10"
            >
              <i className="ri-database-2-fill" />
            </motion.div>

            <motion.div 
              animate={{ y: [-8, 8, -8] }} 
              transition={{ repeat: Infinity, duration: 4.2, ease: "easeInOut" }}
              className="absolute bottom-16 -left-6 w-16 h-16 bg-white rounded-2xl shadow-xl flex items-center justify-center text-4xl text-[#61DAFB] border border-border z-10"
            >
              <i className="ri-reactjs-fill" />
            </motion.div>

            <motion.div 
              animate={{ y: [8, -8, 8] }} 
              transition={{ repeat: Infinity, duration: 4.8, ease: "easeInOut" }}
              className="absolute top-24 -right-8 w-16 h-16 bg-white rounded-2xl shadow-xl flex items-center justify-center text-4xl text-[#f89820] border border-border z-10"
            >
              <i className="ri-java-fill" />
            </motion.div>

            <motion.div 
              animate={{ y: [-10, 10, -10] }} 
              transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut" }}
              className="absolute bottom-32 -right-10 w-16 h-16 bg-white rounded-2xl shadow-xl flex items-center justify-center text-4xl text-[#F05032] border border-border z-10"
            >
              <i className="ri-git-branch-fill" />
            </motion.div>
          </div>
        </motion.div>

        {/* Right Column: Content */}
        <motion.div 
          className="order-1 lg:order-2 flex flex-col justify-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Top Badges */}
          <div className="flex flex-wrap gap-3 mb-6">
            {hero.badges.map((badge, index) => {
              if (index === 0) return (
                <span key={badge} className="px-4 py-1.5 rounded-full bg-primary text-primary-foreground text-xs font-bold tracking-widest uppercase shadow-sm">
                  {badge}
                </span>
              );
              if (index === 1) return (
                <span key={badge} className="px-4 py-1.5 rounded-full border-2 border-primary text-primary bg-background text-xs font-bold tracking-widest uppercase shadow-sm">
                  {badge}
                </span>
              );
              if (index === 2) return (
                <span key={badge} className="px-4 py-1.5 rounded-full bg-secondary text-secondary-foreground text-xs font-bold tracking-widest uppercase shadow-sm">
                  {badge}
                </span>
              );
              return (
                <span key={badge} className="px-4 py-1.5 rounded-full bg-foreground text-background text-xs font-bold tracking-widest uppercase shadow-sm">
                  {badge}
                </span>
              );
            })}
          </div>

          {/* Name & Title */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-foreground leading-tight tracking-tighter mb-4">
            {hero.firstName} {hero.lastName}
          </h1>
          
          <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-8 leading-snug">
            <span className="text-primary/80 italic font-medium mr-3" style={{ fontFamily: 'Georgia, serif' }}>
              {hero.rolePrefix}
            </span>
            <span className="tracking-tight">{hero.roleSuffix}</span>
          </div>

          {/* Subtitle */}
          <div className="text-muted-foreground text-sm font-bold tracking-[0.2em] uppercase mb-8 flex items-center gap-4">
            {hero.techStack.map((tech, index) => (
              <React.Fragment key={tech}>
                <span>{tech}</span>
                {index < hero.techStack.length - 1 && (
                  <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/50"></span>
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 mb-10 text-sm font-medium">
            <a href={`mailto:${contact.email}`} className="flex items-center gap-3 text-foreground hover:text-primary transition-colors">
              <div className="w-8 h-8 rounded-full bg-foreground text-background flex items-center justify-center">
                <i className="ri-mail-fill" />
              </div>
              {contact.email}
            </a>
            <a href={contact.socials.whatsapp} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-foreground hover:text-primary transition-colors">
              <div className="w-8 h-8 rounded-full bg-foreground text-background flex items-center justify-center">
                <i className="ri-phone-fill" />
              </div>
              +228 70 28 92 12
            </a>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 mb-10">
            <button 
              onClick={() => scrollToSection('projects')}
              className="px-8 py-3.5 rounded-full bg-primary text-primary-foreground font-bold hover:bg-primary/90 transition-all flex items-center gap-2 shadow-lg shadow-primary/20 hover:-translate-y-1"
            >
              Voir mes projets
              <i className="ri-arrow-right-line" />
            </button>
            <a 
              href={hero.cvLink}
              download
              className="px-8 py-3.5 rounded-full border-2 border-foreground text-foreground font-bold hover:bg-foreground hover:text-background transition-all flex items-center gap-2"
            >
              Mon CV
              <i className="ri-download-line" />
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            {contact.socials.github && (
              <a href={contact.socials.github} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full border border-border bg-card flex items-center justify-center text-foreground hover:bg-foreground hover:text-background transition-all shadow-sm">
                <i className="ri-github-fill text-lg" />
              </a>
            )}
            {contact.socials.linkedin && (
              <a href={contact.socials.linkedin} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full border border-border bg-card flex items-center justify-center text-foreground hover:bg-[#0077b5] hover:text-white transition-all shadow-sm hover:border-[#0077b5]">
                <i className="ri-linkedin-fill text-lg" />
              </a>
            )}
            {contact.socials.twitter && (
              <a href={contact.socials.twitter} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full border border-border bg-card flex items-center justify-center text-foreground hover:bg-black hover:text-white transition-all shadow-sm">
                <i className="ri-twitter-x-fill text-lg" />
              </a>
            )}
            {contact.socials.instagram && (
              <a href={contact.socials.instagram} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full border border-border bg-card flex items-center justify-center text-foreground hover:bg-gradient-to-tr hover:from-yellow-400 hover:via-red-500 hover:to-purple-500 hover:text-white hover:border-transparent transition-all shadow-sm">
                <i className="ri-instagram-line text-lg" />
              </a>
            )}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default HeroSection;
