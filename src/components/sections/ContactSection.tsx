import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { usePortfolio } from '@/contexts/PortfolioContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/hooks/use-toast';
import 'remixicon/fonts/remixicon.css';

const ContactSection: React.FC = () => {
  const { data } = usePortfolio();
  const { contact } = data;
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Get form data
    const formData = new FormData(e.currentTarget);
    const name = formData.get('user_name');
    const email = formData.get('user_email');
    const subject = formData.get('subject');
    const message = formData.get('message');

    // Format message for WhatsApp
    const whatsappMessage = `*Nouveau message de mon site web.*%0A%0A*Nom:* ${name}%0A*Email:* ${email}%0A*Sujet:* ${subject}%0A%0A*Message:*%0A${message}`;
    
    // Get WhatsApp number from context or default
    const whatsappUrl = contact.socials.whatsapp || "https://wa.me/1234567890";
    const phoneNumber = whatsappUrl.replace('https://wa.me/', '');
    
    // Create final URL
    const finalUrl = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;
    
    // Open WhatsApp
    window.open(finalUrl, '_blank');
    
    toast({
      title: "Redirection vers WhatsApp",
      description: "Votre message a été préparé dans WhatsApp.",
    });
    
    setIsSubmitting(false);
    e.currentTarget.reset();
  };

  const socialLinks = [
    { key: 'linkedin', icon: 'ri-linkedin-fill' },
    { key: 'github', icon: 'ri-github-fill' },
    { key: 'twitter', icon: 'ri-twitter-x-fill' },
    { key: 'instagram', icon: 'ri-instagram-line' },
  ];

  return (
    <section id="contact" className="py-24 pb-32 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-black mb-20 text-center tracking-tighter text-foreground"
        >
          Contact
        </motion.h2>
        
        <div className="grid md:grid-cols-5 gap-16 lg:gap-24">
          {/* Contact Info (Clean & Minimalist) */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:col-span-2 flex flex-col justify-center space-y-12"
          >
            <div className="space-y-8">
              <div className="flex items-start gap-6 group">
                <i className="ri-mail-line text-3xl text-primary/80 group-hover:text-primary transition-colors" />
                <div>
                  <div className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-1">Email</div>
                  <a href={`mailto:${contact.email}`} className="text-lg text-foreground font-medium hover:text-primary transition-colors">
                    {contact.email}
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-6 group">
                <i className="ri-map-pin-line text-3xl text-primary/80 group-hover:text-primary transition-colors" />
                <div>
                  <div className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-1">Localisation</div>
                  <div className="text-lg text-foreground font-medium">{contact.location}</div>
                </div>
              </div>

              {contact.status && (
                <div className="flex items-start gap-6 group">
                  <i className="ri-briefcase-line text-3xl text-primary/80 group-hover:text-primary transition-colors" />
                  <div>
                    <div className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-1">Disponibilité</div>
                    <div className="text-lg text-primary font-bold flex items-center gap-3">
                      {contact.status}
                      <span className="relative flex h-2.5 w-2.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary" />
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="pt-8 border-t border-border/50">
              <div className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-6">Sur les réseaux</div>
              <div className="flex gap-4">
                {socialLinks.map(({ key, icon }) => {
                  const url = contact.socials[key as keyof typeof contact.socials];
                  if (!url) return null;
                  return (
                    <a 
                      key={key}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full border-2 border-border flex items-center justify-center text-foreground hover:border-primary hover:text-primary hover:-translate-y-1 transition-all"
                    >
                      <i className={`${icon} text-xl`} />
                    </a>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Contact Form (Clean & Minimalist) */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:col-span-3"
          >
            <form onSubmit={handleSubmit} className="bg-card border border-border p-8 md:p-12 rounded-[2rem] space-y-6 shadow-sm">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Nom</label>
                  <Input 
                    type="text"
                    name="user_name"
                    placeholder="Votre nom"
                    required
                    className="bg-background border-border focus:border-primary focus:ring-1 focus:ring-primary rounded-xl py-6"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Email</label>
                  <Input 
                    type="email"
                    name="user_email"
                    placeholder="Votre email"
                    required
                    className="bg-background border-border focus:border-primary focus:ring-1 focus:ring-primary rounded-xl py-6"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Sujet</label>
                <Input 
                  type="text"
                  name="subject"
                  placeholder="De quoi voulez-vous discuter ?"
                  required
                  className="bg-background border-border focus:border-primary focus:ring-1 focus:ring-primary rounded-xl py-6"
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Message</label>
                <Textarea 
                  name="message"
                  rows={5}
                  placeholder="Votre message..."
                  required
                  className="bg-background border-border focus:border-primary focus:ring-1 focus:ring-primary rounded-xl resize-none p-4"
                />
              </div>
              
              <Button 
                type="submit"
                disabled={isSubmitting}
                className="w-full py-7 bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg rounded-xl transition-all shadow-md hover:shadow-lg hover:-translate-y-1 mt-4"
              >
                {isSubmitting ? 'Préparation...' : 'Envoyer un message'}
                <i className="ri-send-plane-line ml-2" />
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
