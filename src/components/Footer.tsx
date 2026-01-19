import React from 'react';
import { usePortfolio } from '@/contexts/PortfolioContext';

const Footer: React.FC = () => {
  const { isAdmin } = usePortfolio();
  
  return (
    <footer className="py-8 text-center text-muted-foreground text-sm border-t border-border relative">
      <p>&copy; {new Date().getFullYear()} Lidao. Tous droits réservés.</p>
    </footer>
  );
};

export default Footer;
