import { useRef } from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaJs, FaNodeJs, FaWordpress, FaGitAlt, FaGithub, FaVuejs, FaDocker, FaAngular } from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss, SiTypescript, SiExpress, SiMysql, SiPostgresql, SiMongodb, SiFirebase, SiVercel, SiIonic, SiLaravel, SiSymfony, SiSpringboot } from 'react-icons/si';
import { resumeData } from '@/data/portfolioData';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

// Register ScrollTrigger for client-side
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const iconMap: Record<string, React.ReactNode> = {
  FaReact: <FaReact />,
  SiNextdotjs: <SiNextdotjs />,
  FaVuejs: <FaVuejs />,
  FaAngular: <FaAngular />,
  SiTailwindcss: <SiTailwindcss />,
  FaJs: <FaJs />,
  SiTypescript: <SiTypescript />,
  FaNodeJs: <FaNodeJs />,
  SiExpress: <SiExpress />,
  SiLaravel: <SiLaravel />,
  SiSymfony: <SiSymfony />,
  SiSpringboot: <SiSpringboot />,
  SiMysql: <SiMysql />,
  SiPostgresql: <SiPostgresql />,
  SiMongodb: <SiMongodb />,
  SiFirebase: <SiFirebase />,
  FaWordpress: <FaWordpress />,
  FaGitAlt: <FaGitAlt />,
  FaGithub: <FaGithub />,
  SiVercel: <SiVercel />,
  SiIonic: <SiIonic />,
  FaDocker: <FaDocker />,
};

const categories = [
  {
    title: 'FRONTEND',
    skills: [
      { name: 'React.js', icon: 'FaReact' },
      { name: 'Next.js', icon: 'SiNextdotjs' },
      { name: 'Vue.js', icon: 'FaVuejs' },
      { name: 'Angular', icon: 'FaAngular' },
      { name: 'JavaScript', icon: 'FaJs' },
      { name: 'TypeScript', icon: 'SiTypescript' },
      { name: 'Tailwind CSS', icon: 'SiTailwindcss' },
      { name: 'Ionic', icon: 'SiIonic' }
    ]
  },
  {
    title: 'BACKEND',
    skills: [
      { name: 'Node.js', icon: 'FaNodeJs' },
      { name: 'Express.js', icon: 'SiExpress' },
      { name: 'Laravel', icon: 'SiLaravel' },
      { name: 'Symfony', icon: 'SiSymfony' },
      { name: 'Spring Boot', icon: 'SiSpringboot' }
    ]
  },
  {
    title: 'DATABASES',
    skills: [
      { name: 'MySQL', icon: 'SiMysql' },
      { name: 'PostgreSQL', icon: 'SiPostgresql' },
      { name: 'MongoDB', icon: 'SiMongodb' },
      { name: 'Firebase', icon: 'SiFirebase' },
      { name: 'Firestore', icon: 'SiFirebase' }
    ]
  },
  {
    title: 'TOOLS & PLATFORMS',
    skills: [
      { name: 'WordPress', icon: 'FaWordpress' },
      { name: 'Git', icon: 'FaGitAlt' },
      { name: 'GitHub', icon: 'FaGithub' },
      { name: 'Vercel', icon: 'SiVercel' },
      { name: 'Docker', icon: 'FaDocker' }
    ]
  }
];

export default function Skills() {
  const { title, description } = resumeData.skills;
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useGSAP(() => {
    if (typeof window === 'undefined') return;

    const cards = cardsRef.current.filter(Boolean);
    if (cards.length === 0 || !sectionRef.current) return;

    // We only want the animation on md: screens and larger
    const mediaQuery = window.matchMedia('(min-width: 768px)');
    if (!mediaQuery.matches) return;

    // Create the timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top top',
        end: () => `+=${(categories.length - 1) * 350}`,
        scrub: 1,
        pin: true,
        anticipatePin: 1,
      }
    });

    // Animate subsequent cards to slide up and overlay the previous one
    cards.forEach((card, index) => {
      // Set initial state
      gsap.set(card, { yPercent: 105 });
      
      tl.to(card, {
        yPercent: (index + 1) * 12, // slightly lower so the previous category headers remain visible
        duration: 1.5,
        ease: 'power1.out',
      }, index * 1.5);
    });

    // Cleanup scroll triggers on unmount
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section 
      ref={sectionRef} 
      id="skills" 
      className="py-24 bg-sable-white relative min-h-screen flex flex-col justify-start overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 w-full flex-1 flex flex-col">
        
        {/* Title */}
        <div className="flex flex-col items-center mb-12 text-center shrink-0">
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
            className="h-1 bg-sable-terracotta rounded-full mb-6"
          />
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-sable-brown-light max-w-2xl text-base md:text-lg"
          >
            {description}
          </motion.p>
        </div>

        {/* Stacked Cards Container - Desktop / Tablet Layout */}
        <div className="hidden md:grid grid-cols-1 w-full h-[620px] relative items-start">
          
          {/* Card 1: FRONTEND (Static base) */}
          <div 
            className="w-full h-full col-start-1 row-start-1 bg-sable-white rounded-3xl p-8 border border-sable-terracotta/15 shadow-xl flex flex-col"
          >
            <h3 className="text-3xl md:text-5xl font-extralight tracking-widest text-sable-brown mb-6 pb-2 border-b border-sable-terracotta/10">
              {categories[0].title}
            </h3>
            <ul className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 overflow-y-auto pr-2">
              {categories[0].skills.map((skill, j) => (
                <div
                  key={j}
                  className="flex flex-col items-center justify-center p-6 bg-sable-white border border-sable-terracotta/15 rounded-2xl shadow-sm hover:shadow-md cursor-default transition-all duration-300 group hover:border-sable-terracotta hover:bg-sable-beige/40"
                >
                  <div className="text-4xl text-sable-brown-light group-hover:text-sable-terracotta transition-colors duration-300 mb-3.5">
                    {iconMap[skill.icon] || <FaJs />}
                  </div>
                  <span className="text-sm font-semibold tracking-wide text-sable-brown text-center opacity-85 group-hover:opacity-100 transition-opacity duration-300">
                    {skill.name}
                  </span>
                </div>
              ))}
            </ul>
          </div>

          {/* Subsequent Cards: BACKEND, DATABASES, TOOLS */}
          {categories.slice(1).map((group, index) => (
            <div
              key={index}
              ref={(el) => {
                if (el) cardsRef.current[index] = el;
              }}
              className="w-full h-full col-start-1 row-start-1 bg-sable-white rounded-3xl p-8 border border-sable-terracotta/15 shadow-2xl flex flex-col border-t-2 border-t-sable-terracotta"
            >
              <h3 className="text-3xl md:text-5xl font-extralight tracking-widest text-sable-brown mb-6 pb-2 border-b border-sable-terracotta/10">
                {group.title}
              </h3>
              <ul className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 overflow-y-auto pr-2">
                {group.skills.map((skill, j) => (
                  <div
                    key={j}
                    className="flex flex-col items-center justify-center p-6 bg-sable-white border border-sable-terracotta/15 rounded-2xl shadow-sm hover:shadow-md cursor-default transition-all duration-300 group hover:border-sable-terracotta hover:bg-sable-beige/40"
                  >
                    <div className="text-4xl text-sable-brown-light group-hover:text-sable-terracotta transition-colors duration-300 mb-3.5">
                      {iconMap[skill.icon] || <FaJs />}
                    </div>
                    <span className="text-sm font-semibold tracking-wide text-sable-brown text-center opacity-85 group-hover:opacity-100 transition-opacity duration-300">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </ul>
            </div>
          ))}

        </div>

        {/* Flat List - Mobile Layout */}
        <div className="flex md:hidden flex-col gap-10 w-full">
          {categories.map((group, i) => (
            <div 
              key={i} 
              className="w-full bg-sable-white rounded-2xl p-6 border border-sable-terracotta/15 shadow-sm"
            >
              <h3 className="text-xl font-bold tracking-wider text-sable-brown mb-4 pb-2 border-b border-sable-terracotta/10">
                {group.title}
              </h3>
              <ul className="grid grid-cols-2 gap-4">
                {group.skills.map((skill, j) => (
                  <div
                    key={j}
                    className="flex flex-col items-center justify-center p-4 bg-sable-white border border-sable-terracotta/10 rounded-xl shadow-xs"
                  >
                    <div className="text-3xl text-sable-brown-light mb-2">
                      {iconMap[skill.icon] || <FaJs />}
                    </div>
                    <span className="text-xs font-semibold text-sable-brown text-center">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
