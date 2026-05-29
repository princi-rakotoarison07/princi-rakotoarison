import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaCheckCircle,
  FaExclamationCircle,
} from 'react-icons/fa';
import { resumeData, socialLinks } from '@/data/portfolioData';

// ─── Types ────────────────────────────────────────────────────────────────────
type FormStatus = 'idle' | 'sending' | 'success' | 'error';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// ─── Helpers ──────────────────────────────────────────────────────────────────
function getSocialIcon(name: string) {
  switch (name.toLowerCase()) {
    case 'github':   return <FaGithub />;
    case 'linkedin': return <FaLinkedin />;
    case 'facebook': return <FaFacebook />;
    default:         return null;
  }
}

/** Extrait l'ID Formspree depuis une valeur qui peut être une URL complète ou un ID seul */
function resolveFormspreeId(raw: string | undefined): string | null {
  if (!raw || raw.trim() === '' || raw === 'YOUR_FORMSPREE_FORM_ID') return null;
  const trimmed = raw.trim();
  if (trimmed.includes('formspree.io/f/')) {
    const parts = trimmed.split('formspree.io/f/');
    return parts[parts.length - 1].replace(/\/$/, ''); // retire le slash final si présent
  }
  return trimmed;
}

// ─── Sub-components ───────────────────────────────────────────────────────────
function InfoRow({
  icon,
  label,
  children,
}: {
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-start gap-4">
      <div className="w-10 h-10 rounded-xl bg-sable-beige flex items-center justify-center text-sable-terracotta shrink-0">
        {icon}
      </div>
      <div>
        <span className="block text-xs font-bold text-sable-brown-light uppercase tracking-wider mb-0.5">
          {label}
        </span>
        {children}
      </div>
    </div>
  );
}

function InputField({
  id,
  name,
  type = 'text',
  label,
  placeholder,
  value,
  onChange,
  required = true,
}: {
  id: string;
  name: string;
  type?: string;
  label: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-xs font-bold text-sable-brown-light uppercase tracking-wider mb-2"
      >
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={name}
        required={required}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full px-4 py-3 rounded-xl border border-sable-terracotta/20
                   focus:border-sable-terracotta focus:ring-1 focus:ring-sable-terracotta
                   outline-none bg-sable-beige/25 text-sable-brown text-sm font-medium
                   placeholder:text-sable-brown/40 transition-all duration-300"
      />
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────
export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState<FormStatus>('idle');

  // Récupère les infos de contact depuis portfolioData
  const contactEmail =
    resumeData.about.info.find((i) => i.fieldName === 'Email')?.fieldValue ?? '';
  const contactPhone =
    resumeData.about.info.find((i) => i.fieldName === 'Téléphone')?.fieldValue ?? '';

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    const formspreeId = resolveFormspreeId(process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID);

    // ── Fallback → API Route locale ──────────────────────────────────────────
    if (!formspreeId) {
      console.warn('[Contact] NEXT_PUBLIC_FORMSPREE_FORM_ID non configuré — fallback /api/contact');
      try {
        const res = await fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        });
        setStatus(res.ok ? 'success' : 'error');
        if (res.ok) setFormData({ name: '', email: '', subject: '', message: '' });
      } catch {
        setStatus('error');
      }
      return;
    }

    // ── Formspree ────────────────────────────────────────────────────────────
    try {
      const res = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          _replyto: formData.email,
          _subject: `[Portfolio] ${formData.subject}`,
        }),
      });

      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        const data = await res.json().catch(() => ({}));
        console.error('[Formspree] Erreur:', data);
        setStatus('error');
      }
    } catch (err) {
      console.error('[Formspree] Exception:', err);
      setStatus('error');
    }
  };

  // Réinitialise le statut quand l'utilisateur retape
  const handleChangeWithReset = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (status === 'success' || status === 'error') setStatus('idle');
    handleChange(e);
  };

  return (
    <section id="contact" className="py-24 bg-sable-beige/65 relative">
      <div className="max-w-7xl mx-auto px-6">

        {/* ── Titre ─────────────────────────────────────────────────────────── */}
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

          {/* ── Carte infos ───────────────────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col justify-between p-8 md:p-10
                       bg-sable-white rounded-3xl border border-sable-terracotta/20 shadow-sm"
          >
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-sable-brown mb-4">
                Discutons de votre projet
              </h3>
              <p className="text-sm md:text-base text-sable-brown-light leading-relaxed mb-8">
                Que vous ayez une idée de startup, un besoin de développement web
                sur-mesure ou que vous souhaitiez collaborer, mon formulaire est à
                votre disposition. Je réponds sous 24h.
              </p>

              <div className="space-y-6">
                <InfoRow icon={<FaPhoneAlt />} label="Téléphone">
                  <a
                    href={`tel:${contactPhone.replace(/\s+/g, '')}`}
                    className="text-sm md:text-base font-semibold text-sable-brown
                               hover:text-sable-terracotta transition-colors"
                  >
                    {contactPhone}
                  </a>
                </InfoRow>

                <InfoRow icon={<FaEnvelope />} label="Email">
                  <a
                    href={`mailto:${contactEmail}`}
                    className="text-sm md:text-base font-semibold text-sable-brown
                               hover:text-sable-terracotta transition-colors break-all"
                  >
                    {contactEmail}
                  </a>
                </InfoRow>

                <InfoRow icon={<FaMapMarkerAlt />} label="Localisation">
                  <span className="text-sm md:text-base font-semibold text-sable-brown">
                    Antananarivo, Madagascar
                  </span>
                </InfoRow>
              </div>
            </div>

            {/* Réseaux sociaux */}
            <div className="border-t border-sable-beige/60 pt-8 mt-10">
              <span className="block text-xs font-bold text-sable-brown-light uppercase tracking-wider mb-4">
                Suivez-moi :
              </span>
              <div className="flex gap-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Profil ${link.name}`}
                    className="w-10 h-10 border border-sable-terracotta/40 hover:border-sable-terracotta
                               rounded-full flex justify-center items-center text-sable-brown
                               hover:text-sable-terracotta hover:bg-sable-beige transition-all duration-300"
                  >
                    {getSocialIcon(link.name)}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* ── Formulaire ────────────────────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 p-8 md:p-10 bg-sable-white rounded-3xl
                       border border-sable-terracotta/20 shadow-sm"
          >
            <form onSubmit={handleSubmit} className="space-y-6" noValidate>

              {/* Nom + Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <InputField
                  id="name"
                  name="name"
                  label="Votre nom"
                  placeholder="Ex: Jean Dupont"
                  value={formData.name}
                  onChange={handleChangeWithReset}
                />
                <InputField
                  id="email"
                  name="email"
                  type="email"
                  label="Adresse Email"
                  placeholder="Ex: jean.dupont@email.com"
                  value={formData.email}
                  onChange={handleChangeWithReset}
                />
              </div>

              {/* Objet */}
              <InputField
                id="subject"
                name="subject"
                label="Objet du message"
                placeholder="Ex: Demande de devis"
                value={formData.subject}
                onChange={handleChangeWithReset}
              />

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-xs font-bold text-sable-brown-light uppercase tracking-wider mb-2"
                >
                  Votre Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChangeWithReset}
                  placeholder="Écrivez votre message ici..."
                  className="w-full px-4 py-3 rounded-xl border border-sable-terracotta/20
                             focus:border-sable-terracotta focus:ring-1 focus:ring-sable-terracotta
                             outline-none bg-sable-beige/25 text-sable-brown text-sm font-medium
                             placeholder:text-sable-brown/40 transition-all duration-300 resize-none"
                />
              </div>

              {/* Bouton Envoyer */}
              <button
                type="submit"
                disabled={status === 'sending'}
                className="group flex items-center justify-center gap-2 w-full
                           bg-sable-terracotta hover:bg-sable-terracotta-dark
                           disabled:bg-sable-terracotta/55 disabled:cursor-not-allowed
                           text-sable-white font-semibold py-3.5 px-8 rounded-full
                           transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer"
              >
                <span>
                  {status === 'sending' ? 'Envoi en cours...' : 'Envoyer le message'}
                </span>
                <FaPaperPlane
                  className={`text-xs transition-transform duration-300
                    group-hover:translate-x-0.5 group-hover:-translate-y-0.5
                    ${status === 'sending' ? 'animate-pulse' : ''}`}
                />
              </button>

              {/* Messages de statut */}
              <AnimatePresence mode="wait">
                {status === 'success' && (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="flex items-start gap-3 p-4 rounded-xl
                               bg-emerald-50 text-emerald-800 border border-emerald-200
                               text-sm font-medium"
                  >
                    <FaCheckCircle className="shrink-0 mt-0.5 text-emerald-500" />
                    <span>
                      Message envoyé avec succès ! Merci de m&apos;avoir contacté.
                      Je vous répondrai sous 24h.
                    </span>
                  </motion.div>
                )}

                {status === 'error' && (
                  <motion.div
                    key="error"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="flex items-start gap-3 p-4 rounded-xl
                               bg-rose-50 text-rose-800 border border-rose-200
                               text-sm font-medium"
                  >
                    <FaExclamationCircle className="shrink-0 mt-0.5 text-rose-500" />
                    <span>
                      Une erreur est survenue lors de l&apos;envoi. Vérifiez votre
                      connexion ou contactez-moi directement par email.
                    </span>
                  </motion.div>
                )}
              </AnimatePresence>

            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}