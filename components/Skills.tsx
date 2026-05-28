import { motion } from 'framer-motion';
import { FaReact, FaJs, FaNodeJs, FaWordpress, FaGitAlt, FaGithub, FaVuejs, FaDocker } from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss, SiTypescript, SiExpress, SiMysql, SiPostgresql, SiMongodb, SiFirebase, SiVercel, SiIonic } from 'react-icons/si';
import { resumeData } from '@/data/portfolioData';

// Map icon string keys to actual JSX icon components
const iconMap: Record<string, React.ReactNode> = {
  FaReact: <FaReact />,
  SiNextdotjs: <SiNextdotjs />,
  FaVuejs: <FaVuejs />,
  SiTailwindcss: <SiTailwindcss />,
  FaJs: <FaJs />,
  SiTypescript: <SiTypescript />,
  FaNodeJs: <FaNodeJs />,
  SiExpress: <SiExpress />,
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

export default function Skills() {
  const { title, description, skillList } = resumeData.skills;

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring' as const, stiffness: 100, damping: 12 },
    },
  };

  return (
    <section id="skills" className="py-24 bg-sable-white relative">
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

        {/* Skills Grid */}
        <motion.div 
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {skillList.map((skill, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ 
                scale: 1.05, 
                borderColor: 'var(--color-sable-terracotta)',
                backgroundColor: 'var(--color-sable-beige)',
              }}
              className="flex flex-col items-center justify-center p-6 bg-sable-white border border-sable-terracotta/15 rounded-2xl shadow-sm hover:shadow-md cursor-default transition-all duration-300 group"
            >
              <div className="text-4xl text-sable-brown-light group-hover:text-sable-terracotta transition-colors duration-300 mb-3.5">
                {iconMap[skill.icon] || <FaJs />}
              </div>
              <span className="text-sm font-semibold tracking-wide text-sable-brown text-center opacity-85 group-hover:opacity-100 transition-opacity duration-300">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
