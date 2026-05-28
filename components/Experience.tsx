import { motion } from 'framer-motion';
import { FaBriefcase, FaGraduationCap } from 'react-icons/fa';
import { resumeData } from '@/data/portfolioData';

export default function Experience() {
  const { experience, education } = resumeData;

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 35 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring' as const, stiffness: 80, damping: 15 },
    },
  };

  return (
    <section id="experience" className="py-24 bg-sable-white relative">
      {/* Decorative background accent */}
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-sable-beige/35 rounded-full blur-3xl -z-10" />

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
            Mon Parcours
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: '60px' }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-1 bg-sable-terracotta rounded-full"
          />
        </div>

        {/* Double Timeline Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Experience Column */}
          <div>
            <div className="flex items-center gap-3.5 mb-10 pb-4 border-b border-sable-terracotta/10">
              <div className="w-10 h-10 rounded-xl bg-sable-beige flex items-center justify-center text-sable-terracotta text-lg shadow-sm">
                <FaBriefcase />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-sable-brown">
                {experience.title}
              </h3>
            </div>

            <motion.div 
              className="relative pl-6 border-l border-sable-terracotta/20 space-y-10"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
            >
              {experience.items.map((item, index) => (
                <motion.div 
                  key={index}
                  variants={itemVariants}
                  className="relative group"
                >
                  {/* Timeline Dot */}
                  <div className="absolute -left-[31px] top-1.5 w-4.5 h-4.5 rounded-full bg-sable-white border-2 border-sable-terracotta flex items-center justify-center group-hover:bg-sable-terracotta transition-colors duration-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-transparent group-hover:bg-sable-white" />
                  </div>

                  <span className="inline-block text-xs font-semibold text-sable-terracotta bg-sable-terracotta/10 px-3 py-1 rounded-full mb-3">
                    {item.duration}
                  </span>
                  
                  <h4 className="text-lg md:text-xl font-bold text-sable-brown group-hover:text-sable-terracotta transition-colors duration-300 mb-1">
                    {item.position}
                  </h4>
                  
                  <h5 className="text-sm font-semibold text-sable-brown-light mb-3">
                    {item.company}
                  </h5>
                  
                  <p className="text-sm text-sable-brown-light leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Education Column */}
          <div>
            <div className="flex items-center gap-3.5 mb-10 pb-4 border-b border-sable-terracotta/10">
              <div className="w-10 h-10 rounded-xl bg-sable-beige flex items-center justify-center text-sable-terracotta text-lg shadow-sm">
                <FaGraduationCap />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-sable-brown">
                {education.title}
              </h3>
            </div>

            <motion.div 
              className="relative pl-6 border-l border-sable-terracotta/20 space-y-10"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
            >
              {education.items.map((item, index) => (
                <motion.div 
                  key={index}
                  variants={itemVariants}
                  className="relative group"
                >
                  {/* Timeline Dot */}
                  <div className="absolute -left-[31px] top-1.5 w-4.5 h-4.5 rounded-full bg-sable-white border-2 border-sable-terracotta flex items-center justify-center group-hover:bg-sable-terracotta transition-colors duration-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-transparent group-hover:bg-sable-white" />
                  </div>

                  <span className="inline-block text-xs font-semibold text-sable-terracotta bg-sable-terracotta/10 px-3 py-1 rounded-full mb-3">
                    {item.duration}
                  </span>
                  
                  <h4 className="text-lg md:text-xl font-bold text-sable-brown group-hover:text-sable-terracotta transition-colors duration-300 mb-1">
                    {item.degree}
                  </h4>
                  
                  <h5 className="text-sm font-semibold text-sable-brown-light mb-3">
                    {item.institution}
                  </h5>
                  
                  <p className="text-sm text-sable-brown-light leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}
