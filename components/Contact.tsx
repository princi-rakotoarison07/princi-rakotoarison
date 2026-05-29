import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaPaperPlane, FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa';
import { resumeData, socialLinks } from '@/data/portfolioData';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const getSocialIcon = (name: string) => {
    switch (name.toLowerCase()) {
      case 'github': return <FaGithub />;
      case 'linkedin': return <FaLinkedin />;
      case 'facebook': return <FaFacebook />;
      default: return null;
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    let formspreeFormId = process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID;

    if (formspreeFormId) {
      formspreeFormId = formspreeFormId.trim();
      // If the user configured the full URL instead of just the ID, extract the ID segment
      if (formspreeFormId.includes('formspree.io/f/')) {
        const parts = formspreeFormId.split('formspree.io/f/');
        formspreeFormId = parts[parts.length - 1];
      }
    }

    if (!formspreeFormId || formspreeFormId === 'YOUR_FORMSPREE_FORM_ID') {
      console.warn("Formspree Form ID is not configured in .env.local");
      // Fallback to local mock contact api if env variable is missing
      try {
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          setStatus('success');
          setFormData({ name: '', email: '', subject: '', message: '' });
        } else {
          setStatus('error');
        }
      } catch {
        setStatus('error');
      }
      return;
    }

    try {
      const response = await fetch(`https://formspree.io/f/${formspreeFormId}`, {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  const contactEmail = resumeData.about.info.find((i) => i.fieldName === 'Email')?.fieldValue || '';
  const contactPhone = resumeData.about.info.find((i) => i.fieldName === 'Téléphone')?.fieldValue || '';

  return (
    <section id="contact" className="py-24 bg-sable-beige/65 relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Title */}
        <div className="flex flex-col items-center mb-16 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-extrabold text-sable-brown tracking-tight mb-4"
          >
            Me Contacter
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: '60px' }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-1 bg-sable-terracotta rounded-full"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-stretch">
          
          {/* Contact Details Card */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col justify-between p-8 md:p-10 bg-sable-white rounded-3xl border border-sable-terracotta/20 shadow-sm"
          >
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-sable-brown mb-4">Discutons de votre projet</h3>
              <p className="text-sm md:text-base text-sable-brown-light leading-relaxed mb-8">
                Que vous ayez une idée de startup, un besoin de développement web sur-mesure ou que vous souhaitiez collaborer, mon formulaire est à votre disposition. Je réponds sous 24h.
              </p>

              {/* Info Block */}
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-sable-beige flex items-center justify-center text-sable-terracotta shrink-0">
                    <FaPhoneAlt />
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-sable-brown-light uppercase tracking-wider mb-0.5">Téléphone</span>
                    <a href={`tel:${contactPhone.replace(/\s+/g, '')}`} className="text-sm md:text-base font-semibold text-sable-brown hover:text-sable-terracotta transition-colors">
                      {contactPhone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-sable-beige flex items-center justify-center text-sable-terracotta shrink-0">
                    <FaEnvelope />
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-sable-brown-light uppercase tracking-wider mb-0.5">Email</span>
                    <a href={`mailto:${contactEmail}`} className="text-sm md:text-base font-semibold text-sable-brown hover:text-sable-terracotta transition-colors break-all">
                      {contactEmail}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-sable-beige flex items-center justify-center text-sable-terracotta shrink-0">
                    <FaMapMarkerAlt />
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-sable-brown-light uppercase tracking-wider mb-0.5">Localisation</span>
                    <span className="text-sm md:text-base font-semibold text-sable-brown">
                      Antananarivo, Madagascar
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Connect */}
            <div className="border-t border-sable-beige/60 pt-8 mt-10">
              <span className="block text-xs font-bold text-sable-brown-light uppercase tracking-wider mb-4">Suivez-moi :</span>
              <div className="flex gap-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 border border-sable-terracotta/40 hover:border-sable-terracotta rounded-full flex justify-center items-center text-sable-brown hover:text-sable-terracotta hover:bg-sable-beige transition-all duration-300"
                    aria-label={`Réseau ${link.name}`}
                  >
                    {getSocialIcon(link.name)}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form Card */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 p-8 md:p-10 bg-sable-white rounded-3xl border border-sable-terracotta/20 shadow-sm"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-xs font-bold text-sable-brown-light uppercase tracking-wider mb-2">Votre nom</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-sable-terracotta/20 focus:border-sable-terracotta focus:ring-1 focus:ring-sable-terracotta outline-none bg-sable-beige/25 text-sable-brown text-sm font-medium transition-all duration-300"
                    placeholder="Ex: Jean Dupont"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs font-bold text-sable-brown-light uppercase tracking-wider mb-2">Adresse Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-sable-terracotta/20 focus:border-sable-terracotta focus:ring-1 focus:ring-sable-terracotta outline-none bg-sable-beige/25 text-sable-brown text-sm font-medium transition-all duration-300"
                    placeholder="Ex: jean.dupont@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-xs font-bold text-sable-brown-light uppercase tracking-wider mb-2">Objet du message</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-sable-terracotta/20 focus:border-sable-terracotta focus:ring-1 focus:ring-sable-terracotta outline-none bg-sable-beige/25 text-sable-brown text-sm font-medium transition-all duration-300"
                  placeholder="Ex: Demande de devis"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-bold text-sable-brown-light uppercase tracking-wider mb-2">Votre Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-sable-terracotta/20 focus:border-sable-terracotta focus:ring-1 focus:ring-sable-terracotta outline-none bg-sable-beige/25 text-sable-brown text-sm font-medium transition-all duration-300 resize-none"
                  placeholder="Écrivez votre message ici..."
                />
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="group flex items-center justify-center gap-2 bg-sable-terracotta hover:bg-sable-terracotta-dark disabled:bg-sable-terracotta/55 text-sable-white font-semibold py-3.5 px-8 rounded-full transition-all duration-300 w-full cursor-pointer shadow-sm hover:shadow-md"
              >
                <span>{status === 'sending' ? 'Envoi en cours...' : 'Envoyer le message'}</span>
                <FaPaperPlane className={`text-xs group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300 ${status === 'sending' ? 'animate-pulse' : ''}`} />
              </button>

              {/* Status Alert Messages */}
              {status === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 rounded-xl bg-emerald-50 text-emerald-800 border border-emerald-200 text-sm font-medium"
                >
                  Message envoyé avec succès ! Merci de m&apos;avoir contacté.
                </motion.div>
              )}

              {status === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 rounded-xl bg-rose-50 text-rose-800 border border-rose-200 text-sm font-medium"
                >
                  Une erreur est survenue lors de l&apos;envoi. Veuillez réessayer plus tard.
                </motion.div>
              )}
            </form>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
