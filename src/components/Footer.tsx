import React from 'react';
import { usePortfolio } from '@/contexts/PortfolioContext';
import 'remixicon/fonts/remixicon.css';

const Footer: React.FC = () => {
  const { data } = usePortfolio();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-background border-t border-border/60 text-muted-foreground text-xs sm:text-sm">
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
        
        {/* Identité */}
        <div className="flex flex-col items-center sm:items-start gap-1">
          <div className="font-bold text-foreground text-base tracking-tight">
            {data.hero.firstName} {data.hero.lastName}
          </div>
          <p className="text-xs text-muted-foreground">
            Étudiant en IA &amp; Big Data &bull; Futur Data Engineer
          </p>
        </div>

        {/* Liens rapides réseaux */}
        <div className="flex items-center gap-4 text-base">
          {data.contact.socials.github && (
            <a 
              href={data.contact.socials.github} 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="hover:text-primary transition-colors"
            >
              <i className="ri-github-fill" aria-hidden="true" />
            </a>
          )}
          {data.contact.socials.linkedin && (
            <a 
              href={data.contact.socials.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-primary transition-colors"
            >
              <i className="ri-linkedin-fill" aria-hidden="true" />
            </a>
          )}
          <a 
            href={`mailto:${data.contact.email}`}
            aria-label="Email"
            className="hover:text-primary transition-colors"
          >
            <i className="ri-mail-line" aria-hidden="true" />
          </a>
        </div>

        {/* Copyright */}
        <div className="text-center sm:text-right text-xs text-muted-foreground">
          <p>&copy; {currentYear} ABIYI Lidao. Conçu avec React, TypeScript &amp; Tailwind CSS.</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
