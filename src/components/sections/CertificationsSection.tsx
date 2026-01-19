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
                onClick={() => setSelectedImage(cert.image)}
                className="p-6 glass-card rounded-xl border border-primary/20 flex flex-col items-center justify-center gap-4 hover:bg-primary/10 transition-all cursor-pointer group w-full sm:w-64 relative overflow-hidden"
              >
                {/* Type Badge */}
                <div className="absolute top-2 right-2 text-[10px] uppercase font-bold px-2 py-0.5 rounded bg-secondary text-muted-foreground">
                  {cert.type === 'certification' ? 'Certif.' : 'Attest.'}
                </div>
                
                <div className="w-20 h-20 rounded-full bg-secondary flex items-center justify-center overflow-hidden border border-border group-hover:scale-110 transition-transform">
                  <img 
                    src={cert.image} 
                    alt={cert.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-center z-10">
                  <div className="font-bold text-lg text-foreground group-hover:text-primary transition-colors leading-tight mb-2">
                    {cert.name}
                  </div>
                  <div className="text-sm text-muted-foreground">{cert.date}</div>
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
