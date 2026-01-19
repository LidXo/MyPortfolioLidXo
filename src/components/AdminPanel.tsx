import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePortfolio } from '@/contexts/PortfolioContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/hooks/use-toast';
import 'remixicon/fonts/remixicon.css';

interface AdminPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

const AdminPanel: React.FC<AdminPanelProps> = ({ isOpen, onClose }) => {
  const {
    data,
    updateHero,
    updateAbout,
    updateContact,
    addJourney, updateJourney, deleteJourney,
    addProject, updateProject, deleteProject,
    addSkill, updateSkill, deleteSkill,
    addInterest, updateInterest, deleteInterest,
    addCertification, updateCertification, deleteCertification,
  } = usePortfolio();

  const [activeTab, setActiveTab] = useState('hero');

  const handleSave = () => {
    toast({
      title: "Modifications sauvegardées !",
      description: "Toutes les modifications ont été enregistrées avec succès.",
    });
  };

  const tabs = [
    { id: 'hero', label: 'Hero', icon: 'ri-home-line' },
    { id: 'about', label: 'À Propos', icon: 'ri-user-line' },
    { id: 'journey', label: 'Parcours', icon: 'ri-map-pin-line' },
    { id: 'projects', label: 'Projets', icon: 'ri-folder-line' },
    { id: 'skills', label: 'Compétences', icon: 'ri-tools-line' },
    { id: 'interests', label: 'Intérêts', icon: 'ri-heart-line' },
    { id: 'certifications', label: 'Certifications', icon: 'ri-award-line' },
    { id: 'contact', label: 'Contact', icon: 'ri-mail-line' },
  ];

  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[99] bg-background overflow-hidden"
    >
      {/* Header */}
      <nav className="fixed w-full z-50 glass-nav border-b border-primary/20">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-xl font-bold">
            Admin<span className="text-primary">Panel</span>
          </div>
          <div className="flex gap-4">
            <Button onClick={handleSave} className="bg-primary text-primary-foreground font-bold">
              <i className="ri-save-line mr-2" /> Sauvegarder
            </Button>
            <Button variant="outline" onClick={onClose}>
              <i className="ri-close-line mr-2" /> Fermer
            </Button>
          </div>
        </div>
      </nav>

      <div className="pt-20 h-full overflow-y-auto">
        <div className="max-w-6xl mx-auto px-6 py-8">
          {/* Tabs */}
          <div className="flex flex-wrap gap-2 mb-8 glass-card p-2 rounded-xl">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-lg font-medium transition-all flex items-center gap-2 text-sm ${
                  activeTab === tab.id
                    ? 'bg-primary text-primary-foreground'
                    : 'text-muted-foreground hover:bg-secondary hover:text-foreground'
                }`}
              >
                <i className={tab.icon} />
                {tab.label}
              </button>
            ))}
          </div>

          {/* Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="space-y-6"
            >
              {/* Hero Section */}
              {activeTab === 'hero' && (
                <div className="glass-card p-6 rounded-xl space-y-4">
                  <h3 className="text-xl font-bold text-primary mb-4">Section Hero</h3>
                  <div className="grid gap-4">
                    <div>
                      <label className="text-sm text-muted-foreground mb-1 block">Titre Principal</label>
                      <Input
                        value={data.hero.title}
                        onChange={(e) => updateHero({ ...data.hero, title: e.target.value })}
                        className="bg-card border-border"
                      />
                    </div>
                    <div>
                      <label className="text-sm text-muted-foreground mb-1 block">Sous-titre (phrases animées séparées par ".")</label>
                      <Textarea
                        value={data.hero.subtitle}
                        onChange={(e) => updateHero({ ...data.hero, subtitle: e.target.value })}
                        className="bg-card border-border"
                        rows={3}
                      />
                    </div>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div>
                        <label className="text-sm text-muted-foreground mb-1 block">Badge disponibilité</label>
                        <Input
                          value={data.hero.available}
                          onChange={(e) => updateHero({ ...data.hero, available: e.target.value })}
                          className="bg-card border-border"
                        />
                      </div>
                      <div>
                        <label className="text-sm text-muted-foreground mb-1 block">Années d'expérience</label>
                        <Input
                          value={data.hero.yearsExp}
                          onChange={(e) => updateHero({ ...data.hero, yearsExp: e.target.value })}
                          className="bg-card border-border"
                        />
                      </div>
                      <div>
                        <label className="text-sm text-muted-foreground mb-1 block">Lien CV</label>
                        <Input
                          value={data.hero.cvLink}
                          onChange={(e) => updateHero({ ...data.hero, cvLink: e.target.value })}
                          className="bg-card border-border"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* About Section */}
              {activeTab === 'about' && (
                <div className="glass-card p-6 rounded-xl space-y-4">
                  <h3 className="text-xl font-bold text-primary mb-4">Section À Propos</h3>
                  <div>
                    <label className="text-sm text-muted-foreground mb-1 block">Texte de présentation</label>
                    <Textarea
                      value={data.about.text}
                      onChange={(e) => updateAbout({ ...data.about, text: e.target.value })}
                      className="bg-card border-border"
                      rows={4}
                    />
                  </div>
                  <div>
                    <label className="text-sm text-muted-foreground mb-2 block">Statistiques</label>
                    <div className="grid md:grid-cols-2 gap-4">
                      {data.about.stats.map((stat, index) => (
                        <div key={index} className="flex gap-2 p-3 bg-secondary/50 rounded-lg">
                          <Input
                            value={stat.value}
                            onChange={(e) => {
                              const newStats = [...data.about.stats];
                              newStats[index] = { ...stat, value: e.target.value };
                              updateAbout({ ...data.about, stats: newStats });
                            }}
                            className="bg-card border-border w-20"
                            placeholder="Valeur"
                          />
                          <Input
                            value={stat.label}
                            onChange={(e) => {
                              const newStats = [...data.about.stats];
                              newStats[index] = { ...stat, label: e.target.value };
                              updateAbout({ ...data.about, stats: newStats });
                            }}
                            className="bg-card border-border flex-1"
                            placeholder="Label"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Journey Section */}
              {activeTab === 'journey' && (
                <div className="glass-card p-6 rounded-xl">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-xl font-bold text-primary">Gérer le Parcours</h3>
                    <Button
                      onClick={() => addJourney({ year: '2024', title: 'Nouveau', desc: 'Description...', icon: 'ri-bookmark-line' })}
                      variant="outline"
                      className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    >
                      <i className="ri-add-line mr-2" /> Ajouter
                    </Button>
                  </div>
                  <div className="space-y-4">
                    {data.journey.map((item) => (
                      <div key={item.id} className="p-4 bg-secondary/50 rounded-lg space-y-3 relative group">
                        <div className="grid md:grid-cols-4 gap-3">
                          <Input
                            value={item.year}
                            onChange={(e) => updateJourney(item.id, { year: e.target.value })}
                            className="bg-card border-border"
                            placeholder="Année"
                          />
                          <Input
                            value={item.title}
                            onChange={(e) => updateJourney(item.id, { title: e.target.value })}
                            className="bg-card border-border md:col-span-2"
                            placeholder="Titre"
                          />
                          <Input
                            value={item.icon || ''}
                            onChange={(e) => updateJourney(item.id, { icon: e.target.value })}
                            className="bg-card border-border"
                            placeholder="Icône (ri-...)"
                          />
                        </div>
                        <Textarea
                          value={item.desc}
                          onChange={(e) => updateJourney(item.id, { desc: e.target.value })}
                          className="bg-card border-border"
                          rows={2}
                          placeholder="Description"
                        />
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => deleteJourney(item.id)}
                          className="absolute top-2 right-2 text-destructive hover:text-destructive opacity-50 group-hover:opacity-100"
                        >
                          <i className="ri-delete-bin-line" />
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Projects Section */}
              {activeTab === 'projects' && (
                <div className="glass-card p-6 rounded-xl">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-xl font-bold text-primary">Gérer les Projets</h3>
                    <Button
                      onClick={() => addProject({ title: 'Nouveau Projet', desc: 'Description...', tags: 'Tag1, Tag2', img: 'https://via.placeholder.com/400', link: '#' })}
                      variant="outline"
                      className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    >
                      <i className="ri-add-line mr-2" /> Ajouter
                    </Button>
                  </div>
                  <div className="space-y-6">
                    {data.projects.map((project) => (
                      <div key={project.id} className="p-4 bg-secondary/50 rounded-lg space-y-3 relative group">
                        <div className="flex gap-4">
                          <img src={project.img} alt="" className="w-20 h-20 rounded object-cover bg-card" />
                          <div className="flex-1 space-y-2">
                            <Input
                              value={project.title}
                              onChange={(e) => updateProject(project.id, { title: e.target.value })}
                              className="bg-card border-border font-bold"
                              placeholder="Titre"
                            />
                            <Input
                              value={project.tags}
                              onChange={(e) => updateProject(project.id, { tags: e.target.value })}
                              className="bg-card border-border text-sm"
                              placeholder="Tags (séparés par virgule)"
                            />
                          </div>
                        </div>
                        <div className="grid md:grid-cols-2 gap-3">
                          <Input
                            value={project.img}
                            onChange={(e) => updateProject(project.id, { img: e.target.value })}
                            className="bg-card border-border text-sm"
                            placeholder="URL de l'image"
                          />
                          <Input
                            value={project.link}
                            onChange={(e) => updateProject(project.id, { link: e.target.value })}
                            className="bg-card border-border text-sm"
                            placeholder="Lien du projet"
                          />
                        </div>
                        <Textarea
                          value={project.desc}
                          onChange={(e) => updateProject(project.id, { desc: e.target.value })}
                          className="bg-card border-border"
                          rows={2}
                          placeholder="Description"
                        />
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => deleteProject(project.id)}
                          className="absolute top-2 right-2 text-destructive hover:text-destructive opacity-50 group-hover:opacity-100"
                        >
                          <i className="ri-delete-bin-line" />
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Skills Section */}
              {activeTab === 'skills' && (
                <div className="glass-card p-6 rounded-xl">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-xl font-bold text-primary">Gérer les Compétences</h3>
                    <Button
                      onClick={() => addSkill({ name: 'Skill', icon: 'ri-star-line', level: 50 })}
                      variant="outline"
                      className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    >
                      <i className="ri-add-line mr-2" /> Ajouter
                    </Button>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    {data.skills.map((skill) => (
                      <div key={skill.id} className="flex items-center gap-3 p-3 bg-secondary/50 rounded-lg relative group">
                        <i className={`${skill.icon} text-primary text-2xl`} />
                        <div className="flex-1 space-y-2">
                          <Input
                            value={skill.name}
                            onChange={(e) => updateSkill(skill.id, { name: e.target.value })}
                            className="bg-card border-border h-8"
                            placeholder="Nom"
                          />
                          <div className="flex gap-2">
                            <Input
                              type="number"
                              min={0}
                              max={100}
                              value={skill.level}
                              onChange={(e) => updateSkill(skill.id, { level: parseInt(e.target.value) || 0 })}
                              className="bg-card border-border h-8 w-20 text-center"
                            />
                            <Input
                              value={skill.icon}
                              onChange={(e) => updateSkill(skill.id, { icon: e.target.value })}
                              className="bg-card border-border h-8 flex-1 text-sm"
                              placeholder="ri-icon-name"
                            />
                          </div>
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => deleteSkill(skill.id)}
                          className="text-destructive hover:text-destructive opacity-0 group-hover:opacity-100"
                        >
                          <i className="ri-close-circle-line" />
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Interests Section */}
              {activeTab === 'interests' && (
                <div className="glass-card p-6 rounded-xl">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-xl font-bold text-primary">Gérer les Intérêts</h3>
                    <Button
                      onClick={() => addInterest({ name: 'Intérêt', icon: 'ri-heart-line' })}
                      variant="outline"
                      className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    >
                      <i className="ri-add-line mr-2" /> Ajouter
                    </Button>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    {data.interests.map((interest) => (
                      <div key={interest.id} className="flex items-center gap-3 p-3 bg-secondary/50 rounded-lg relative group">
                        <i className={`${interest.icon} text-primary text-2xl`} />
                        <div className="flex-1 space-y-2">
                          <Input
                            value={interest.name}
                            onChange={(e) => updateInterest(interest.id, { name: e.target.value })}
                            className="bg-card border-border h-8"
                            placeholder="Nom"
                          />
                          <Input
                            value={interest.icon}
                            onChange={(e) => updateInterest(interest.id, { icon: e.target.value })}
                            className="bg-card border-border h-8 text-sm"
                            placeholder="ri-icon-name"
                          />
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => deleteInterest(interest.id)}
                          className="text-destructive hover:text-destructive opacity-0 group-hover:opacity-100"
                        >
                          <i className="ri-close-circle-line" />
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Certifications Section */}
              {activeTab === 'certifications' && (
                <div className="glass-card p-6 rounded-xl">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-xl font-bold text-primary">Gérer les Certifications & Attestations</h3>
                    <Button
                      onClick={() => addCertification({ type: 'certification', name: 'Nouvelle', date: '2024', image: 'https://via.placeholder.com/150' })}
                      variant="outline"
                      className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    >
                      <i className="ri-add-line mr-2" /> Ajouter
                    </Button>
                  </div>
                  <div className="space-y-4">
                    {data.certifications.map((cert) => (
                      <div key={cert.id} className="p-4 bg-secondary/50 rounded-lg space-y-3 relative group">
                        <div className="flex gap-4">
                          <img src={cert.image} alt="" className="w-16 h-16 rounded bg-card object-cover" />
                          <div className="flex-1 space-y-2">
                            <div className="flex gap-2">
                              <select
                                value={cert.type}
                                onChange={(e) => updateCertification(cert.id, { type: e.target.value as 'certification' | 'attestation' })}
                                className="bg-card border border-border rounded px-2 py-1 text-sm"
                              >
                                <option value="certification">Certification</option>
                                <option value="attestation">Attestation</option>
                              </select>
                              <Input
                                value={cert.date}
                                onChange={(e) => updateCertification(cert.id, { date: e.target.value })}
                                className="bg-card border-border h-8 w-24"
                                placeholder="Date"
                              />
                            </div>
                            <Input
                              value={cert.name}
                              onChange={(e) => updateCertification(cert.id, { name: e.target.value })}
                              className="bg-card border-border font-bold"
                              placeholder="Nom"
                            />
                          </div>
                        </div>
                        <Input
                          value={cert.image}
                          onChange={(e) => updateCertification(cert.id, { image: e.target.value })}
                          className="bg-card border-border text-sm"
                          placeholder="URL de l'image"
                        />
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => deleteCertification(cert.id)}
                          className="absolute top-2 right-2 text-destructive hover:text-destructive opacity-50 group-hover:opacity-100"
                        >
                          <i className="ri-delete-bin-line" />
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Contact Section */}
              {activeTab === 'contact' && (
                <div className="glass-card p-6 rounded-xl space-y-4">
                  <h3 className="text-xl font-bold text-primary mb-4">Section Contact</h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <label className="text-sm text-muted-foreground mb-1 block">Email</label>
                      <Input
                        value={data.contact.email}
                        onChange={(e) => updateContact({ ...data.contact, email: e.target.value })}
                        className="bg-card border-border"
                      />
                    </div>
                    <div>
                      <label className="text-sm text-muted-foreground mb-1 block">Localisation</label>
                      <Input
                        value={data.contact.location}
                        onChange={(e) => updateContact({ ...data.contact, location: e.target.value })}
                        className="bg-card border-border"
                      />
                    </div>
                    <div>
                      <label className="text-sm text-muted-foreground mb-1 block">Status</label>
                      <Input
                        value={data.contact.status}
                        onChange={(e) => updateContact({ ...data.contact, status: e.target.value })}
                        className="bg-card border-border"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm text-muted-foreground mb-2 block">Réseaux Sociaux</label>
                    <div className="grid md:grid-cols-2 gap-4">
                      {Object.entries(data.contact.socials).map(([key, value]) => (
                        <div key={key} className="flex items-center gap-2 p-3 bg-secondary/50 rounded-lg">
                          <i className={`ri-${key === 'twitter' ? 'twitter-x' : key}-${key === 'whatsapp' || key === 'instagram' ? 'line' : 'fill'} text-primary text-xl`} />
                          <Input
                            value={value || ''}
                            onChange={(e) => updateContact({
                              ...data.contact,
                              socials: { ...data.contact.socials, [key]: e.target.value }
                            })}
                            className="bg-card border-border flex-1"
                            placeholder={`URL ${key}`}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
};

export default AdminPanel;
