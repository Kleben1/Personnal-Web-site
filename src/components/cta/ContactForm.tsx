import { useState } from 'react';
import { motion } from 'framer-motion';
import { siteConfig } from '../../config/site.config';
import { Send, CheckCircle } from 'lucide-react';

export function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const subject = formData.get('subject') as string;
    const message = formData.get('message') as string;
    const body = `${message}\n\nVia Mon Portfolio`;
    
    // Redirect to mailto
    window.location.href = `mailto:${siteConfig.contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setStatus('success');
  };

  return (
    <div className="w-full max-w-2xl mx-auto glass-panel p-8 rounded-2xl relative overflow-hidden">
      {/* Glow effect back */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-accent/20 rounded-full blur-3xl pointer-events-none"></div>
      
      {status === 'success' ? (
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="py-12 flex flex-col items-center justify-center text-center"
        >
          <CheckCircle className="w-16 h-16 text-green-400 mb-4" />
          <h3 className="text-2xl font-bold text-white mb-2">Message prêté pour envoi !</h3>
          <p className="text-text-muted">Votre client messagerie va s'ouvrir. Merci pour votre contact.</p>
          <button 
            onClick={() => setStatus('idle')}
            className="mt-8 px-6 py-2 text-sm text-accent hover:text-accent-glow transition-colors"
          >
            Nouveau message
          </button>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="relative z-10 flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <label htmlFor="subject" className="text-sm font-medium text-text-muted">
              Sujet de votre message
            </label>
            <input 
              required
              id="subject"
              name="subject"
              type="text" 
              placeholder="Ex: Proposition de mission, Échange technique..."
              className="px-4 py-3 bg-background border border-border rounded-lg text-white placeholder:text-text-muted/50 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
            />
          </div>
          
          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="text-sm font-medium text-text-muted">
              Votre message
            </label>
            <textarea 
              required
              id="message"
              name="message"
              rows={5}
              placeholder="Détaillez votre besoin ici..."
              className="px-4 py-3 bg-background border border-border rounded-lg text-white placeholder:text-text-muted/50 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all resize-none"
            ></textarea>
          </div>

          <motion.button 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-accent text-white font-medium rounded-lg hover:bg-accent-glow shadow-[0_0_15px_rgba(99,102,241,0.3)] hover:shadow-[0_0_25px_rgba(129,140,248,0.6)] transition-all duration-300 w-full sm:w-auto self-end"
          >
            <Send className="w-5 h-5" />
            Ouvrir mon client mail
          </motion.button>
        </form>
      )}
    </div>
  );
}
