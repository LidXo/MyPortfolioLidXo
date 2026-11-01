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
  const [formDataState, setFormDataState] = useState({
    user_name: '',
    user_email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormDataState(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const name = formDataState.user_name.trim();
    const email = formDataState.user_email.trim();
    const subject = formDataState.subject.trim();
    const message = formDataState.message.trim();

    // Validation email rigoureuse
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast({
        title: "Adresse email invalide",
        description: "Veuillez renseigner une adresse email valide pour que je puisse vous recontacter.",
        variant: "destructive"
      });
      setIsSubmitting(false);
      return;
    }

    if (!name || !subject || !message) {
      toast({
        title: "Champs requis manquants",
        description: "Veuillez remplir l'ensemble des champs du formulaire.",
        variant: "destructive"
      });
      setIsSubmitting(false);
      return;
    }

    // Préparation propre et sécurisée du message via encodeURIComponent
    const messageBody = `*Nouveau message reçu depuis mon Portfolio*\n\n` +
      `*Expéditeur :* ${name}\n` +
      `*Email :* ${email}\n` +
      `*Sujet :* ${subject}\n\n` +
      `*Message :*\n${message}`;

    const encodedMessage = encodeURIComponent(messageBody);
    const whatsappBase = contact.socials.whatsapp || "https://wa.me/22870289212";
    const phoneNumber = whatsappBase.replace(/^https?:\/\/wa\.me\//, '').replace(/[^0-9]/g, '');
    const finalUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    // Ouverture propre dans un nouvel onglet
    window.open(finalUrl, '_blank', 'noopener,noreferrer');

    toast({
      title: "Transmission préparée via WhatsApp",
      description: "Votre message a été formaté et prêt à l'envoi dans WhatsApp Web ou Mobile.",
    });

    setIsSubmitting(false);
    setFormDataState({
      user_name: '',
      user_email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="py-24 bg-background border-t border-border/40 relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* En-tête */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-wider mb-3">
            Opportunités &amp; Échanges
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 tracking-tight text-foreground">
            Me <span className="gradient-text">Contacter</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
            Ouvert aux opportunités de stage, aux projets collaboratifs en Data &amp; IA ou à tout échange technique.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Colonne Coordonnées */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-8"
          >
            <div className="glass-card p-8 rounded-2xl border border-border/80 space-y-6">
              <h3 className="text-xl font-bold text-foreground mb-4">
                Coordonnées professionnelles
              </h3>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <i className="ri-mail-line text-xl" aria-hidden="true" />
                </div>
                <div>
                  <div className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-1">Email</div>
                  <a 
                    href={`mailto:${contact.email}`} 
                    className="text-foreground font-semibold hover:text-primary transition-colors text-sm sm:text-base"
                  >
                    {contact.email}
                  </a>
                </div>
              </div>

              {/* Localisation */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <i className="ri-map-pin-line text-xl" aria-hidden="true" />
                </div>
                <div>
                  <div className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-1">Localisation</div>
                  <div className="text-foreground font-semibold text-sm sm:text-base">
                    {contact.location}
                  </div>
                </div>
              </div>

              {/* Disponibilité */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <i className="ri-briefcase-line text-xl" aria-hidden="true" />
                </div>
                <div>
                  <div className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-1">Disponibilité</div>
                  <div className="inline-flex items-center gap-2 text-foreground font-semibold text-sm sm:text-base">
                    <span>{contact.status}</span>
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600" />
                    </span>
                  </div>
                </div>
              </div>

              {/* Réseaux sociaux */}
              <div className="pt-6 border-t border-border/60">
                <div className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-4">
                  Réseaux &amp; Plateformes
                </div>
                <div className="flex items-center gap-3">
                  {contact.socials.linkedin && (
                    <a
                      href={contact.socials.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Profil LinkedIn d'ABIYI Lidao"
                      className="w-10 h-10 rounded-xl bg-background border border-border flex items-center justify-center text-foreground hover:text-[#0077b5] hover:border-[#0077b5]/50 transition-all shadow-sm"
                    >
                      <i className="ri-linkedin-fill text-lg" aria-hidden="true" />
                    </a>
                  )}
                  {contact.socials.github && (
                    <a
                      href={contact.socials.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Profil GitHub d'ABIYI Lidao"
                      className="w-10 h-10 rounded-xl bg-background border border-border flex items-center justify-center text-foreground hover:text-primary hover:border-primary/50 transition-all shadow-sm"
                    >
                      <i className="ri-github-fill text-lg" aria-hidden="true" />
                    </a>
                  )}
                  {contact.socials.whatsapp && (
                    <a
                      href={contact.socials.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Contact direct WhatsApp d'ABIYI Lidao"
                      className="w-10 h-10 rounded-xl bg-background border border-border flex items-center justify-center text-foreground hover:text-emerald-600 hover:border-emerald-600/50 transition-all shadow-sm"
                    >
                      <i className="ri-whatsapp-line text-lg" aria-hidden="true" />
                    </a>
                  )}
                  {contact.socials.twitter && (
                    <a
                      href={contact.socials.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Compte X/Twitter d'ABIYI Lidao"
                      className="w-10 h-10 rounded-xl bg-background border border-border flex items-center justify-center text-foreground hover:text-foreground hover:border-foreground/50 transition-all shadow-sm"
                    >
                      <i className="ri-twitter-x-fill text-lg" aria-hidden="true" />
                    </a>
                  )}
                </div>
              </div>

            </div>
          </motion.div>

          {/* Colonne Formulaire */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <form onSubmit={handleSubmit} className="glass-card border border-border p-8 rounded-2xl space-y-5 shadow-sm">
              <div className="grid sm:grid-cols-2 gap-5">
                
                {/* Champ Nom */}
                <div className="space-y-2">
                  <label htmlFor="user_name" className="text-xs font-bold text-muted-foreground uppercase tracking-wider block">
                    Votre nom complet <span className="text-primary">*</span>
                  </label>
                  <Input 
                    id="user_name"
                    name="user_name"
                    type="text"
                    value={formDataState.user_name}
                    onChange={handleChange}
                    placeholder="ex. Jean Dupont"
                    required
                    className="bg-background/80 border-border focus:border-primary rounded-xl py-5 text-sm"
                  />
                </div>

                {/* Champ Email */}
                <div className="space-y-2">
                  <label htmlFor="user_email" className="text-xs font-bold text-muted-foreground uppercase tracking-wider block">
                    Votre adresse email <span className="text-primary">*</span>
                  </label>
                  <Input 
                    id="user_email"
                    name="user_email"
                    type="email"
                    value={formDataState.user_email}
                    onChange={handleChange}
                    placeholder="jean.dupont@entreprise.com"
                    required
                    className="bg-background/80 border-border focus:border-primary rounded-xl py-5 text-sm"
                  />
                </div>
              </div>
              
              {/* Champ Sujet */}
              <div className="space-y-2">
                <label htmlFor="subject" className="text-xs font-bold text-muted-foreground uppercase tracking-wider block">
                  Sujet de votre message <span className="text-primary">*</span>
                </label>
                <Input 
                  id="subject"
                  name="subject"
                  type="text"
                  value={formDataState.subject}
                  onChange={handleChange}
                  placeholder="Opportunité de stage, projet Data, question technique..."
                  required
                  className="bg-background/80 border-border focus:border-primary rounded-xl py-5 text-sm"
                />
              </div>
              
              {/* Champ Message */}
              <div className="space-y-2">
                <label htmlFor="message" className="text-xs font-bold text-muted-foreground uppercase tracking-wider block">
                  Message <span className="text-primary">*</span>
                </label>
                <Textarea 
                  id="message"
                  name="message"
                  rows={5}
                  value={formDataState.message}
                  onChange={handleChange}
                  placeholder="Présentez brièvement votre demande..."
                  required
                  className="bg-background/80 border-border focus:border-primary rounded-xl resize-none p-3.5 text-sm"
                />
              </div>
              
              <Button 
                type="submit"
                disabled={isSubmitting}
                className="w-full py-6 bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-sm sm:text-base rounded-xl transition-all shadow-md hover:shadow-lg mt-2"
              >
                {isSubmitting ? 'Préparation en cours...' : 'Envoyer mon message'}
                <i className="ri-send-plane-line ml-2 text-lg" aria-hidden="true" />
              </Button>

              <p className="text-center text-xs text-muted-foreground pt-1 flex items-center justify-center gap-1.5">
                <i className="ri-whatsapp-line text-emerald-600 text-sm" aria-hidden="true" />
                <span>Le message est préformaté de façon sécurisée et transmis directement via WhatsApp.</span>
              </p>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;
