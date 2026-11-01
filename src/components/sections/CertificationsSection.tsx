import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePortfolio } from '@/contexts/PortfolioContext';
import 'remixicon/fonts/remixicon.css';

type FilterType = 'all' | 'certification' | 'attestation';

const CertificationsSection: React.FC = () => {
  const { data } = usePortfolio();
  const { certifications } = data;
  const [filter, setFilter] = useState<FilterType>('all');

  const counts = {
    all: certifications.length,
    certification: certifications.filter(c => c.type === 'certification').length,
    attestation: certifications.filter(c => c.type === 'attestation').length,
  };

  const filteredCerts = filter === 'all' 
    ? certifications 
    : certifications.filter(c => c.type === filter);

  const filters: { type: FilterType; label: string }[] = [
    { type: 'all', label: 'Toutes' },
    { type: 'attestation', label: 'Attestations' },
    { type: 'certification', label: 'Certifications' },
  ];

  return (
    <section id="certifications" className="py-24 relative overflow-hidden bg-background border-t border-border/40">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* En-tête */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-wider mb-3">
            Validations académiques &amp; industrielles
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 tracking-tight text-foreground">
            Certifications &amp; <span className="gradient-text">Attestations</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
            Certificats et attestations de formation validés auprès d'organismes de référence (Cisco Networking Academy, Microsoft).
          </p>
        </div>
        
        {/* Boutons de filtrage */}
        <div className="flex justify-center gap-3 mb-12 flex-wrap">
          {filters.map(({ type, label }) => (
            <button
              key={type}
              onClick={() => setFilter(type)}
              className={`px-5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                filter === type
                  ? 'bg-primary text-primary-foreground shadow-sm'
                  : 'bg-card border border-border text-muted-foreground hover:bg-muted/60 hover:text-foreground'
              }`}
            >
              {label} ({counts[type]})
            </button>
          ))}
        </div>

        {/* Grille des certifications */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredCerts.length > 0 ? (
              filteredCerts.map((cert) => (
                <motion.div
                  key={cert.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.25 }}
                  className="p-6 rounded-2xl bg-card border border-border shadow-sm hover:shadow-lg hover:border-primary/40 transition-all flex flex-col justify-between group"
                >
                  <div>
                    {/* Badge type et date */}
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <span className="px-2.5 py-1 text-[11px] font-bold rounded-md bg-primary/10 text-primary border border-primary/20 uppercase tracking-wide">
                        {cert.type === 'certification' ? 'Certification' : 'Attestation'}
                      </span>
                      <span className="text-xs font-semibold text-muted-foreground">
                        {cert.date}
                      </span>
                    </div>

                    {/* Titre */}
                    <h3 className="font-bold text-lg text-foreground group-hover:text-primary transition-colors leading-snug mb-1.5">
                      {cert.name}
                    </h3>

                    {/* Émetteur officiel */}
                    <p className="text-xs sm:text-sm font-medium text-muted-foreground mb-4 flex items-center gap-1.5">
                      <i className="ri-building-line text-primary" aria-hidden="true" />
                      <span>{cert.issuer}</span>
                    </p>

                    {/* Compétences associées */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {cert.skills.map((skill) => (
                        <span 
                          key={skill}
                          className="px-2 py-0.5 text-[10px] sm:text-[11px] font-medium rounded bg-background border border-border/80 text-muted-foreground"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Bouton consultation du justificatif PDF */}
                  <div className="pt-4 border-t border-border/60">
                    {cert.pdfUri ? (
                      <a
                        href={cert.pdfUri}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full inline-flex items-center justify-center gap-2 text-xs sm:text-sm font-semibold px-4 py-2.5 rounded-xl bg-background border border-border hover:border-primary/40 text-foreground group-hover:text-primary transition-colors shadow-sm"
                      >
                        <i className="ri-file-pdf-2-line text-red-500 text-base" aria-hidden="true" />
                        <span>Consulter l'attestation PDF</span>
                        <i className="ri-external-link-line text-xs opacity-60 ml-auto" aria-hidden="true" />
                      </a>
                    ) : cert.link ? (
                      <a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full inline-flex items-center justify-center gap-2 text-xs sm:text-sm font-semibold px-4 py-2.5 rounded-xl bg-background border border-border hover:border-primary/40 text-foreground group-hover:text-primary transition-colors shadow-sm"
                      >
                        <i className="ri-link text-blue-500 text-base" aria-hidden="true" />
                        <span>Vérifier en ligne</span>
                        <i className="ri-external-link-line text-xs opacity-60 ml-auto" aria-hidden="true" />
                      </a>
                    ) : (
                      <span className="text-xs text-muted-foreground italic">
                        Document disponible sur demande
                      </span>
                    )}
                  </div>
                </motion.div>
              ))
            ) : (
              <div className="col-span-full py-12 text-center text-muted-foreground">
                <i className="ri-folder-info-line text-4xl mb-2 inline-block opacity-40" aria-hidden="true" />
                <p>Aucune certification enregistrée pour ce filtre.</p>
              </div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};

export default CertificationsSection;
