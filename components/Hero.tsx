import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaFacebook, FaDownload, FaArrowRight } from 'react-icons/fa';
import { personalInfo, stats } from '@/data/portfolioData';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { useCountUp } from '@/hooks/useCountUp';

interface StatCounterProps {
  value: string;
  label: string;
  symbol?: string;
  startTrigger: boolean;
}

function StatCounter({ value, label, symbol, startTrigger }: StatCounterProps) {
  const numericValue = parseInt(value, 10) || 0;
  const animatedValue = useCountUp(numericValue, 1800, startTrigger);

  return (
    <div className="text-center md:text-left md:border-r border-sable-terracotta/10 last:border-r-0 md:pl-6 first:pl-0">
      <div className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-sable-terracotta mb-1">
        <span>{animatedValue}</span>
        {symbol && <span className="text-sable-brown-light font-medium text-2xl ml-0.5">{symbol}</span>}
      </div>
      <div className="text-xs md:text-sm font-medium tracking-wide text-sable-brown-light uppercase max-w-[150px] mx-auto md:mx-0">
        {label}
      </div>
    </div>
  );
}

export default function Hero() {
  const [statsRef, isStatsVisible] = useIntersectionObserver({ threshold: 0.1 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring' as const, stiffness: 100, damping: 15 },
    },
  };

  const handleContactClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const element = document.getElementById('contact');
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-28 pb-16 bg-sable-white overflow-hidden">
      {/* Background visual element */}
      <div className="absolute top-0 right-0 w-[50%] h-[100%] bg-sable-beige/30 rounded-bl-[100px] -z-10" />
      <div className="absolute bottom-10 left-10 w-72 h-72 rounded-full bg-sable-terracotta/5 blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Text Content */}
          <motion.div
            className="lg:col-span-7 text-center lg:text-left order-2 lg:order-1"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.span 
              variants={itemVariants} 
              className="inline-block text-xs md:text-sm font-semibold tracking-widest text-sable-terracotta uppercase bg-sable-terracotta/10 px-4 py-1.5 rounded-full mb-6"
            >
              {personalInfo.title}
            </motion.span>
            
            <motion.h1 
              variants={itemVariants} 
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-sable-brown leading-[1.1] mb-6"
            >
              <span className="block text-2xl md:text-3xl font-light text-sable-brown-light mb-2">Bonjour, je suis</span>
              <span className="text-sable-brown font-extrabold">{personalInfo.name}</span>
            </motion.h1>
            
            <motion.p 
              variants={itemVariants} 
              className="text-base md:text-lg text-sable-brown-light leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-8"
            >
              {personalInfo.description}
            </motion.p>
            
            {/* Buttons and Social Links */}
            <motion.div 
              variants={itemVariants} 
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-12"
            >
              <a
                href="/pdf/PRINCI_RAKOTOARISON_CV.pdf"
                download="PRINCI_RAKOTOARISON_CV.pdf"
                className="group flex items-center justify-center gap-2.5 bg-sable-terracotta hover:bg-sable-terracotta-dark text-sable-white font-medium px-8 py-3.5 rounded-full transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 w-full sm:w-auto"
              >
                <span>Télécharger mon CV</span>
                <FaDownload className="text-sm group-hover:translate-y-0.5 transition-transform duration-300" />
              </a>
              
              <button
                onClick={handleContactClick}
                className="group flex items-center justify-center gap-2 border border-sable-brown text-sable-brown hover:bg-sable-brown hover:text-sable-white font-medium px-8 py-3.5 rounded-full transition-all duration-300 hover:-translate-y-0.5 w-full sm:w-auto cursor-pointer"
              >
                <span>Me contacter</span>
                <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </motion.div>
            
            {/* Social Icons */}
            <motion.div variants={itemVariants} className="flex justify-center lg:justify-start items-center gap-4">
              <span className="text-xs font-semibold tracking-wider text-sable-brown-light uppercase mr-2">Suivez-moi :</span>
              <a
                href="https://github.com/princi-rakotoarison07"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-sable-terracotta/40 hover:border-sable-terracotta rounded-full flex justify-center items-center text-sable-brown hover:text-sable-terracotta hover:bg-sable-beige/35 transition-all duration-300"
                aria-label="GitHub de Princi"
              >
                <FaGithub className="text-lg" />
              </a>
              <a
                href="https://www.linkedin.com/in/princi-rakotoarison-242218351/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-sable-terracotta/40 hover:border-sable-terracotta rounded-full flex justify-center items-center text-sable-brown hover:text-sable-terracotta hover:bg-sable-beige/35 transition-all duration-300"
                aria-label="LinkedIn de Princi"
              >
                <FaLinkedin className="text-lg" />
              </a>
              <a
                href="https://www.facebook.com/princi.rakotoarison"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-sable-terracotta/40 hover:border-sable-terracotta rounded-full flex justify-center items-center text-sable-brown hover:text-sable-terracotta hover:bg-sable-beige/35 transition-all duration-300"
                aria-label="Facebook de Princi"
              >
                <FaFacebook className="text-lg" />
              </a>
            </motion.div>
          </motion.div>
          
          {/* Profile Image & Animated Circle */}
          <div className="lg:col-span-5 flex justify-center items-center order-1 lg:order-2">
            <div className="relative w-[220px] h-[220px] sm:w-[260px] sm:h-[260px] md:w-[320px] md:h-[320px]">
              
              {/* Profile Image Wrapper */}
              <div className="w-[200px] h-[200px] sm:w-[235px] sm:h-[235px] md:w-[290px] md:h-[290px] absolute inset-0 m-auto z-10 overflow-hidden rounded-full border-4 border-sable-white shadow-xl bg-sable-beige">
                <Image
                  src={personalInfo.image}
                  priority
                  quality={75}
                  fill
                  sizes="(max-w-640px) 200px, (max-w-768px) 235px, 290px"
                  alt={personalInfo.name}
                  className="object-cover scale-105 hover:scale-110 transition-transform duration-700"
                  style={{ objectPosition: 'center top' }}
                />
              </div>

              {/* Inner Soft Breathing Halo Circle with inner shadow */}
              <div className="absolute inset-3 rounded-full bg-sable-beige shadow-inner border border-sable-terracotta/10 -z-10" />

              {/* Double Rotating Terracotta Rings (Continuous CSS) */}
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-sable-terracotta animate-slow-spin -z-20 scale-[1.04]" />
              <div className="absolute inset-2.5 rounded-full border border-dotted border-sable-terracotta/70 animate-slow-spin-reverse -z-20 scale-[1.02] rotate-[45deg]" />

              {/* Floating Decorative Elements */}
              {/* Floating Arc Top-Left */}
              <div className="absolute -top-2 -left-2 w-10 h-10 text-sable-terracotta/80 animate-float z-20">
                <svg viewBox="0 0 100 100" fill="none" className="w-full h-full stroke-current stroke-[6] stroke-linecap-round">
                  <path d="M 15 85 A 70 70 0 0 1 85 15" />
                </svg>
              </div>

              {/* Floating Arc Bottom-Right */}
              <div className="absolute -bottom-3.5 -right-3.5 w-11 h-11 text-sable-terracotta/70 animate-float-slow z-20">
                <svg viewBox="0 0 100 100" fill="none" className="w-full h-full stroke-current stroke-[4] stroke-linecap-round">
                  <path d="M 85 15 A 70 70 0 0 1 15 85" />
                </svg>
              </div>

              {/* Floating Dots Grid Top-Right */}
              <div className="absolute top-10 -right-4 flex flex-wrap w-7 h-7 gap-1.5 animate-float-fast z-20">
                <div className="w-1.5 h-1.5 rounded-full bg-sable-terracotta" />
                <div className="w-1.5 h-1.5 rounded-full bg-sable-terracotta" />
                <div className="w-1.5 h-1.5 rounded-full bg-sable-terracotta" />
                <div className="w-1.5 h-1.5 rounded-full bg-sable-terracotta" />
              </div>

              {/* Floating Plus Symbol Bottom-Left */}
              <div className="absolute bottom-12 -left-5 text-sable-terracotta text-xl font-light animate-float z-20 select-none">
                +
              </div>
            </div>
          </div>
          
        </div>

        {/* Stats Sub-section */}
        <motion.div
          ref={statsRef}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-20 border-t border-sable-terracotta/20 pt-10"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4">
            {stats.map((stat, idx) => (
              <StatCounter
                key={idx}
                value={stat.value}
                label={stat.label}
                symbol={stat.symbol}
                startTrigger={isStatsVisible}
              />
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}

