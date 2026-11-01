import React, { createContext, useContext, ReactNode } from 'react';
import { portfolioData, type PortfolioData } from '@/data/portfolio-data';

// Re-export types for convenience
export type { PortfolioData, HeroData, AboutData, JourneyItem, ProjectItem, ProjectDetails, TechItem, TechCategory, CertificationItem, ContactData, SkillLevel } from '@/data/portfolio-data';

interface PortfolioContextType {
  data: PortfolioData;
}

const PortfolioContext = createContext<PortfolioContextType | undefined>(undefined);

export const PortfolioProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <PortfolioContext.Provider value={{ data: portfolioData }}>
      {children}
    </PortfolioContext.Provider>
  );
};

export const usePortfolio = () => {
  const context = useContext(PortfolioContext);
  if (!context) {
    throw new Error('usePortfolio must be used within PortfolioProvider');
  }
  return context;
};
