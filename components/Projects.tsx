import { useState, useMemo } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';
import { projectsList, ProjectItem } from '@/data/portfolioData';

const tabs = ['web', 'mobile', 'design'] as const;

export default function Projects() {
  const [activeTab, setActiveTab] = useState<typeof tabs[number]>('web');
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

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
                {/* Composite Card Image Container */}
                <div className="relative h-[240px] w-full overflow-hidden bg-sable-beige rounded-t-2xl border-b border-sable-terracotta/10">
                   {/* First image (Left/Top) */}
                  <div className="absolute top-[-10px] left-[-10px] w-[65%] h-[90%] rotate-[-3deg] transition-all duration-500 ease-out group-hover:rotate-0 group-hover:translate-x-[-5px] group-hover:translate-y-[-5px] shadow-[5px_5px_15px_rgba(0,0,0,0.12)] rounded-xl overflow-hidden border border-sable-terracotta/10">
                    <Image
                      src={project.images[0]}
                      alt={`Capture d'écran principale de ${project.title}`}
                      fill
                      sizes="(max-w-768px) 90vw, (max-w-1024px) 45vw, 30vw"
                      className="object-cover"
                      loading="lazy"
                      quality={75}
                    />
                  </div>

                  {/* Second image (Right/Bottom) */}
                  <div className="absolute bottom-[-10px] right-[-10px] w-[60%] h-[85%] rotate-[3deg] transition-all duration-500 ease-out group-hover:rotate-0 group-hover:translate-x-[5px] group-hover:translate-y-[5px] shadow-[-5px_5px_15px_rgba(0,0,0,0.12)] rounded-xl overflow-hidden border border-sable-terracotta/10">
                    <Image
                      src={project.images[1] || project.images[0]}
                      alt={`Capture d'écran secondaire de ${project.title}`}
                      fill
                      sizes="(max-w-768px) 90vw, (max-w-1024px) 45vw, 30vw"
                      className="object-cover"
                      loading="lazy"
                      quality={75}
                    />
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-[#4A3B32] opacity-0 group-hover:opacity-85 transition-opacity duration-400 flex flex-col items-center justify-center p-4 text-center z-10">
                    <h4 className="text-sable-white font-bold text-lg md:text-xl mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-400">
                      {project.title}
                    </h4>
                    <div className="flex flex-col sm:flex-row gap-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-400">
                      <button
                        onClick={() => {
                          setActiveProject(project);
                          setCurrentImageIndex(0);
                        }}
                        className="bg-[#E2B4A2] hover:bg-[#d89f8a] text-[#4A3B32] font-bold text-xs md:text-sm py-2.5 px-6 rounded-full shadow-md transition-colors duration-300 cursor-pointer"
                      >
                        Voir le projet
                      </button>
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-sable-white hover:bg-sable-beige text-[#4A3B32] font-bold text-xs md:text-sm py-2.5 px-6 rounded-full shadow-md transition-colors duration-300 flex items-center justify-center gap-1.5 cursor-pointer"
                          onClick={(e) => e.stopPropagation()}
                        >
                          Visiter le site
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg md:text-xl font-bold text-sable-brown mb-3 group-hover:text-sable-terracotta transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-sm text-sable-brown-light leading-relaxed mb-4">
                      {project.desc}
                    </p>
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-extrabold text-[#E2B4A2] hover:text-[#d89f8a] hover:underline mb-6 transition-colors duration-300 cursor-pointer"
                      >
                        Visiter le site &rarr;
                      </a>
                    )}
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

      {/* FULLSCREEN IMAGE MODAL WITH CAROUSEL */}
      <AnimatePresence>
        {activeProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveProject(null)}
            className="fixed inset-0 bg-[#4A3B32]/95 flex flex-col items-center justify-center z-50 p-4 cursor-zoom-out"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="relative max-w-5xl max-h-[75vh] w-full h-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={activeProject.images[currentImageIndex]}
                alt={`${activeProject.title} - ${currentImageIndex + 1}`}
                fill
                sizes="(max-w-1024px) 100vw, 1024px"
                className="object-contain"
                quality={75}
              />

              {/* Close Button */}
              <button
                onClick={() => setActiveProject(null)}
                className="absolute -top-14 right-0 text-sable-white hover:text-sable-terracotta bg-sable-brown/20 p-2.5 rounded-full transition-colors focus:outline-none cursor-pointer"
                aria-label="Fermer la vue"
              >
                <FaTimes className="text-2xl" />
              </button>

              {/* Navigation Arrows */}
              {activeProject.images.length > 1 && (
                <>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentImageIndex((prev) => (prev === 0 ? activeProject.images.length - 1 : prev - 1));
                    }}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-sable-white hover:text-[#E2B4A2] bg-[#4A3B32]/40 hover:bg-[#4A3B32]/60 p-3 rounded-full transition-colors cursor-pointer"
                    aria-label="Image précédente"
                  >
                    <span className="text-2xl font-bold select-none">&lt;</span>
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentImageIndex((prev) => (prev === activeProject.images.length - 1 ? 0 : prev + 1));
                    }}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-sable-white hover:text-[#E2B4A2] bg-[#4A3B32]/40 hover:bg-[#4A3B32]/60 p-3 rounded-full transition-colors cursor-pointer"
                    aria-label="Image suivante"
                  >
                    <span className="text-2xl font-bold select-none">&gt;</span>
                  </button>
                </>
              )}
            </motion.div>

            {/* Thumbnail Navigation / Image Indicator */}
            {activeProject.images.length > 1 && (
              <div className="flex gap-2 mt-6 justify-center z-10" onClick={(e) => e.stopPropagation()}>
                {activeProject.images.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentImageIndex(idx)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      currentImageIndex === idx ? 'bg-[#E2B4A2] scale-125' : 'bg-sable-white/40 hover:bg-sable-white/60'
                    }`}
                  />
                ))}
              </div>
            )}

            {/* Visit Live Website Link */}
            {activeProject.link && (
              <a
                href={activeProject.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 bg-[#E2B4A2] hover:bg-[#d89f8a] text-[#4A3B32] font-bold text-xs md:text-sm py-2.5 px-6 rounded-full shadow-md transition-colors duration-300 flex items-center gap-1.5 cursor-pointer z-10"
                onClick={(e) => e.stopPropagation()}
              >
                Visiter le site live
              </a>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
