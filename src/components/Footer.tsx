import React from 'react';


const Footer: React.FC = () => {
  
  return (
    <footer className="py-8 text-center text-muted-foreground text-sm border-t border-border relative">
      <p>&copy; {new Date().getFullYear()} Lidao. Tous droits réservés. <span className="text-xs opacity-50 ml-2">v25.1.0-fix</span></p>
    </footer>
  );
};

export default Footer;
