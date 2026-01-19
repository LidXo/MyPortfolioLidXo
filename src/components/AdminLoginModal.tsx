import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { usePortfolio } from '@/contexts/PortfolioContext';
import 'remixicon/fonts/remixicon.css';

interface AdminLoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

const ADMIN_PASSWORD = 'Lidao@2005';

const AdminLoginModal: React.FC<AdminLoginModalProps> = ({ isOpen, onClose, onSuccess }) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const { setIsAdmin } = usePortfolio();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setIsAdmin(true);
      setPassword('');
      setError(false);
      onSuccess();
    } else {
      setError(true);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-sm bg-card border-border">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="p-2"
        >
          <h3 className="text-2xl font-bold mb-6 text-center">
            Accès <span className="text-primary">Admin</span>
          </h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setError(false);
              }}
              placeholder="Mot de passe"
              className={`bg-background border-border ${error ? 'border-destructive' : ''}`}
            />
            {error && (
              <p className="text-destructive text-sm text-center">Mot de passe incorrect</p>
            )}
            <Button type="submit" className="w-full bg-primary text-primary-foreground font-bold">
              Entrer
            </Button>
          </form>
        </motion.div>
      </DialogContent>
    </Dialog>
  );
};

export default AdminLoginModal;
