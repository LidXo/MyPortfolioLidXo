import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePortfolio } from '@/contexts/PortfolioContext';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import 'remixicon/fonts/remixicon.css';

type FilterType = 'all' | 'certification' | 'attestation';

const CertificationsSection: React.FC = () => {
  const { data } = usePortfolio();
  const { certifications } = data;
  const [filter, setFilter] = useState<FilterType>('all');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const counts = {
    all: certifications.length,
    certification: certifications.filter(c => c.type === 'certification').length,
    attestation: certifications.filter(c => c.type === 'attestation').length,
  };

  const filteredCerts = filter === 'all' 
    ? certifications 
    : certifications.filter(c => c.type === filter);

  const filters: { type: FilterType; label: string }[] = [
    { type: 'all', label: 'Tout' },
    { type: 'certification', label: 'Certifications' },
    { type: 'attestation', label: 'Attestations' },
  ];

  return (
    <section id="certifications" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-8 text-center"
        >
          Certifications & Attestations <span className="text-primary">internationales</span>
        </motion.h2>
        
        {/* Filters */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center gap-4 mb-12 flex-wrap"
        >
          {filters.map(({ type, label }) => (
            <button
              key={type}
              onClick={() => setFilter(type)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                filter === type
                  ? 'border-2 border-primary text-primary bg-primary/10'
                  : 'border border-border text-muted-foreground hover:bg-secondary hover:text-foreground'
              }`}
            >
              {label} ({counts[type]})
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <div className="flex flex-wrap justify-center gap-6">
          <AnimatePresence mode="popLayout">
            {filteredCerts.map((cert) => (
              <motion.div
                key={cert.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                whileHover={{ scale: 1.02 }}
                onClick={() => {
                  if (cert.image) {
                     setSelectedImage(cert.image);
                  } else if (cert.pdfUri) {
                     window.open(cert.pdfUri, '_blank');
                  } else if (cert.link) {
                     window.open(cert.link, '_blank');
                  }
                }}
                className={`p-6 glass-card rounded-xl border border-primary/20 flex flex-col items-center justify-center gap-4 hover:bg-primary/10 transition-all group w-full sm:w-64 relative overflow-hidden cursor-pointer`}
              >
                {/* Type Badge */}
                <div className="absolute top-2 right-2 text-[10px] uppercase font-bold px-2 py-0.5 rounded bg-secondary text-muted-foreground">
                  {cert.type === 'certification' ? 'Certif.' : 'Attest.'}
                </div>
                
                {/* Image or Placeholder or PDF Icon */}
                <div className="w-20 h-20 rounded-full bg-secondary flex items-center justify-center overflow-hidden border border-border group-hover:scale-110 transition-transform relative z-0">
                  {cert.image ? (
                    <img 
                      src={cert.image} 
                      alt={cert.name} 
                      className="w-full h-full object-cover"
                    />
                  ) : cert.pdfUri ? (
                    <i className="ri-file-pdf-2-line text-4xl text-red-500" />
                  ) : cert.link ? (
                    <i className="ri-link text-3xl text-blue-400" />
                  ) : (
                    <i className={`${cert.type === 'certification' ? 'ri-award-line' : 'ri-profile-line'} text-3xl text-muted-foreground`} />
                  )}
                </div>

                <div className="text-center z-10 w-full">
                  <div className="font-bold text-lg text-foreground group-hover:text-primary transition-colors leading-tight mb-2">
                    {cert.name}
                  </div>
                  <div className="text-sm text-muted-foreground mb-3">{cert.date}</div>
                  
                  {/* Action Button */}
                  <div className="flex justify-center gap-2">
                    {cert.pdfUri && (
                        <a
                          href={cert.pdfUri}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="inline-flex items-center gap-1 text-xs px-3 py-1 rounded-full bg-red-500/10 text-red-500 hover:bg-red-500 hover:text-white transition-colors"
                        >
                          <i className="ri-file-pdf-line" /> PDF
                        </a>
                    )}
                    {cert.link && (
                        <a
                          href={cert.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="inline-flex items-center gap-1 text-xs px-3 py-1 rounded-full bg-primary/20 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                        >
                          <i className="ri-external-link-line" /> Lien
                        </a>
                    )}
                    {cert.image && !cert.link && !cert.pdfUri && (
                        <span className="inline-flex items-center gap-1 text-xs px-3 py-1 rounded-full bg-primary/20 text-primary hover:bg-primary hover:text-primary-foreground transition-colors">
                            <i className="ri-eye-line" /> Voir
                        </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Image Modal */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-3xl bg-background/95 backdrop-blur-lg border-border">
          {selectedImage && (
            <img 
              src={selectedImage} 
              alt="Certificate" 
              className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
            />
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default CertificationsSection;
