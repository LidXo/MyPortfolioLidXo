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
    const whatsappMessage = `*Nouveau message de mon site web LidXo.*%0A%0A*Nom:* ${name}%0A*Email:* ${email}%0A*Sujet:* ${subject}%0A%0A*Message:*%0A${message}`;
    
    // Get WhatsApp number from context or default
    // Extract number from "https://wa.me/1234567890" -> "1234567890"
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
    { key: 'linkedin', icon: 'ri-linkedin-fill', hoverColor: 'hover:text-blue-400' },
    { key: 'github', icon: 'ri-github-fill', hoverColor: 'hover:text-foreground' },
    { key: 'twitter', icon: 'ri-twitter-x-fill', hoverColor: 'hover:text-foreground' },
    { key: 'whatsapp', icon: 'ri-whatsapp-line', hoverColor: 'hover:text-green-400' },
    { key: 'instagram', icon: 'ri-instagram-line', hoverColor: 'hover:text-pink-400' },
  ];

  return (
    <section id="contact" className="py-24 pb-32">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-16 text-center"
        >
          Une idée ? <span className="text-primary">Parlons-en.</span>
        </motion.h2>
        
        <div className="grid md:grid-cols-5 gap-12">
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:col-span-2 space-y-8"
          >
            <div className="glass-card p-8 rounded-2xl border-l-4 border-primary">
              <h3 className="text-2xl font-bold mb-6 text-foreground">Coordonnées</h3>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                    <i className="ri-mail-send-line text-xl" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground uppercase tracking-wider">Email</div>
                    <a href={`mailto:${contact.email}`} className="text-foreground font-medium hover:text-primary transition-colors">
                      {contact.email}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                    <i className="ri-map-pin-line text-xl" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground uppercase tracking-wider">Localisation</div>
                    <div className="text-foreground font-medium">{contact.location}</div>
                  </div>
                </div>

                {contact.status && (
                  <div className="flex items-center gap-4 group">
                    <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                      <i className="ri-checkbox-circle-line text-xl" />
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground uppercase tracking-wider">Status</div>
                      <div className="text-primary font-bold flex items-center gap-2">
                        {contact.status}
                        <span className="relative flex h-3 w-3">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                          <span className="relative inline-flex rounded-full h-3 w-3 bg-primary" />
                        </span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map(({ key, icon, hoverColor }) => {
                const url = contact.socials[key as keyof typeof contact.socials];
                if (!url) return null;
                return (
                  <a 
                    key={key}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex-1 py-4 glass-card rounded-xl text-center hover:bg-secondary transition-colors group ${hoverColor}`}
                  >
                    <i className={`${icon} text-2xl transition-colors`} />
                  </a>
                );
              })}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:col-span-3"
          >
            <form onSubmit={handleSubmit} className="glass-card p-8 md:p-10 rounded-3xl space-y-6 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm text-muted-foreground ml-2">Votre Nom</label>
                  <Input 
                    type="text"
                    name="user_name"
                    placeholder="John Doe"
                    required
                    className="bg-card border-border focus:border-primary"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-muted-foreground ml-2">Votre Email</label>
                  <Input 
                    type="email"
                    name="user_email"
                    placeholder="john@example.com"
                    required
                    className="bg-card border-border focus:border-primary"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm text-muted-foreground ml-2">Sujet</label>
                <Input 
                  type="text"
                  name="subject"
                  placeholder="Projet de collaboration..."
                  required
                  className="bg-card border-border focus:border-primary"
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm text-muted-foreground ml-2">Message</label>
                <Textarea 
                  name="message"
                  rows={6}
                  placeholder="Racontez-moi tout..."
                  required
                  className="bg-card border-border focus:border-primary resize-none"
                />
              </div>
              
              <Button 
                type="submit"
                disabled={isSubmitting}
                className="w-full py-6 bg-gradient-to-r from-primary to-accent-dim text-primary-foreground font-bold text-lg rounded-xl hover:shadow-[0_0_30px_hsl(var(--glow-accent))] transition-all transform hover:-translate-y-1"
              >
                {isSubmitting ? 'Envoi en cours...' : 'Envoyer le message'}
                <i className="ri-send-plane-fill ml-2" />
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
