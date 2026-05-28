import { useState, useMemo } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { FaExternalLinkAlt, FaTimes } from 'react-icons/fa';
import { projectsList, ProjectItem } from '@/data/portfolioData';

const tabs = ['web', 'mobile', 'design'] as const;

export default function Projects() {
  const [activeTab, setActiveTab] = useState<typeof tabs[number]>('web');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filteredProjects = useMemo(() => {
    return projectsList.filter((project) => project.category === activeTab);
  }, [activeTab]);

  return (
    <section id="projects" className="py-24 bg-sable-beige/65 relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Title */}
        <div className="flex flex-col items-center mb-12 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-extrabold text-sable-brown tracking-tight mb-4"
          >
            Mes Réalisations
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: '60px' }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-1 bg-sable-terracotta rounded-full mb-8"
          />
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center mb-12">
          <div className="flex border border-sable-terracotta/20 bg-sable-white p-1 rounded-full shadow-sm max-w-sm w-full">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-1 py-2 px-6 rounded-full text-xs md:text-sm font-semibold tracking-wider uppercase transition-all duration-300 ${
                  activeTab === tab
                    ? 'bg-sable-terracotta text-sable-white shadow-sm'
                    : 'text-sable-brown-light hover:text-sable-brown'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                layout
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="flex flex-col bg-sable-white rounded-2xl overflow-hidden border border-sable-terracotta/15 hover:border-sable-terracotta shadow-sm hover:shadow-md transition-all duration-300 group"
              >
                {/* Project Image */}
                <div 
                  className="relative h-56 cursor-zoom-in overflow-hidden bg-sable-beige"
                  onClick={() => setSelectedImage(project.images[0])}
                >
                  <Image
                    src={project.images[0]}
                    alt={project.title}
                    fill
                    sizes="(max-w-768px) 100vw, (max-w-1024px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-sable-brown/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="bg-sable-white/90 text-sable-brown font-semibold text-xs py-2 px-4 rounded-full shadow-md flex items-center gap-1.5 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                      Agrandir l&apos;image <FaExternalLinkAlt className="text-[10px]" />
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg md:text-xl font-bold text-sable-brown mb-3 group-hover:text-sable-terracotta transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-sm text-sable-brown-light leading-relaxed mb-6">
                      {project.desc}
                    </p>
                  </div>

                  {/* Stacks */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.stacks.map((stack) => (
                      <span
                        key={stack}
                        className="text-[10px] md:text-xs font-medium tracking-wide bg-sable-beige text-sable-brown-light px-2.5 py-1 rounded-md"
                      >
                        {stack}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <p className="text-sable-brown-light italic">Aucun projet trouvé dans cette catégorie.</p>
          </div>
        )}

      </div>

      {/* FULLSCREEN IMAGE MODAL */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 bg-sable-brown/90 flex items-center justify-center z-50 p-4 cursor-zoom-out"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="relative max-w-5xl max-h-[85vh] w-full h-full"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImage}
                alt="Zoom Projet"
                fill
                sizes="100vw"
                className="object-contain"
                priority
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-sable-white hover:text-sable-terracotta bg-sable-brown/20 p-2.5 rounded-full transition-colors focus:outline-none"
                aria-label="Fermer la vue"
              >
                <FaTimes className="text-2xl" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
