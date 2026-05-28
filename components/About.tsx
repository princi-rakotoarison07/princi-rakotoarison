import { motion } from 'framer-motion';
import { FaUser, FaPhoneAlt, FaEnvelope, FaGlobe, FaBriefcase, FaCalendarAlt, FaCheckCircle, FaFacebook } from 'react-icons/fa';
import { resumeData } from '@/data/portfolioData';

// Map field names to matching icons
const getIcon = (fieldName: string) => {
  switch (fieldName) {
    case 'Nom': return <FaUser className="text-sable-terracotta" />;
    case 'Téléphone': return <FaPhoneAlt className="text-sable-terracotta" />;
    case 'Email': return <FaEnvelope className="text-sable-terracotta" />;
    case 'Nationalité': return <FaGlobe className="text-sable-terracotta" />;
    case 'Expérience': return <FaBriefcase className="text-sable-terracotta" />;
    case 'Freelance': return <FaCheckCircle className="text-sable-terracotta" />;
    case 'Langues': return <FaGlobe className="text-sable-terracotta" />;
    case 'Facebook': return <FaFacebook className="text-sable-terracotta" />;
    default: return <FaUser className="text-sable-terracotta" />;
  }
};

export default function About() {
  const { title, description, info } = resumeData.about;

  return (
    <section id="about" className="py-24 bg-sable-beige/65 relative overflow-hidden">
      {/* Decorative details */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-48 h-96 bg-sable-terracotta/5 rounded-r-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="flex flex-col items-center mb-16 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-extrabold text-sable-brown tracking-tight mb-4"
          >
            {title}
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: '60px' }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-1 bg-sable-terracotta rounded-full"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Visual Card */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4"
          >
            <div className="relative p-8 rounded-3xl bg-sable-white border border-sable-terracotta/25 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="absolute -top-6 -left-6 w-12 h-12 rounded-full bg-sable-terracotta/10 flex items-center justify-center border border-sable-terracotta/20">
                <FaUser className="text-sable-terracotta" />
              </div>
              
              <h3 className="text-xl font-bold text-sable-brown mb-4">Profil Principal</h3>
              <p className="text-sm text-sable-brown-light leading-relaxed mb-6">
                Disponible pour des missions en freelance ou des opportunités à temps plein. Prêt à relever des défis techniques stimulants et à concevoir des architectures Web performantes.
              </p>
              
              <div className="space-y-3.5 border-t border-sable-beige/60 pt-5">
                <div className="flex items-center gap-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-sm font-semibold text-sable-brown">Actuellement : Actif & Disponible</span>
                </div>
                <div className="flex items-center gap-3">
                  <FaCalendarAlt className="text-sable-terracotta text-sm" />
                  <span className="text-xs text-sable-brown-light">Mise à jour : Mai 2026</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Text Content & Info Grid */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-8 flex flex-col justify-center"
          >
            <p className="text-lg text-sable-brown leading-relaxed mb-10 text-justify lg:text-left font-light">
              {description}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {info.map((item, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-sable-white/80 border border-sable-terracotta/10 hover:border-sable-terracotta/30 transition-all duration-300 shadow-sm"
                >
                  <div className="w-10 h-10 rounded-xl bg-sable-beige flex items-center justify-center text-lg">
                    {getIcon(item.fieldName)}
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-sable-brown-light uppercase tracking-wider mb-0.5">
                      {item.fieldName}
                    </span>
                    {item.fieldName === 'Email' ? (
                      <a 
                        href={`mailto:${item.fieldValue}`}
                        className="text-sm md:text-base font-semibold text-sable-brown hover:text-sable-terracotta transition-colors duration-300 break-all"
                      >
                        {item.fieldValue}
                      </a>
                    ) : item.fieldName === 'Téléphone' ? (
                      <a 
                        href={`tel:${item.fieldValue.replace(/\s+/g, '')}`}
                        className="text-sm md:text-base font-semibold text-sable-brown hover:text-sable-terracotta transition-colors duration-300"
                      >
                        {item.fieldValue}
                      </a>
                    ) : item.fieldName === 'Facebook' ? (
                      <a 
                        href="https://www.facebook.com/princi.rakotoarison" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-sm md:text-base font-semibold text-sable-brown hover:text-sable-terracotta transition-colors duration-300"
                      >
                        {item.fieldValue}
                      </a>
                    ) : (
                      <span className="text-sm md:text-base font-semibold text-sable-brown">
                        {item.fieldValue}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
