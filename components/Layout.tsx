import { ReactNode, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowUp } from 'react-icons/fa';
import { Outfit } from 'next/font/google';
import ProgressBar from './ProgressBar';
import Navbar from './Navbar';

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-sans',
});

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
      // smooth scroll to top
    });
  };

  return (
    <div className={`${outfit.variable} font-sans min-h-screen flex flex-col justify-between bg-sable-white text-sable-brown selection:bg-sable-terracotta selection:text-sable-white`}>
      {/* Top scroll progress */}
      <ProgressBar />

      {/* Main Navbar */}
      <Navbar />

      {/* Page Content */}
      <main className="flex-1 w-full relative">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-sable-beige py-12 border-t border-sable-terracotta/15 text-center mt-auto">
        <div className="max-w-7xl mx-auto px-6 flex flex-col items-center gap-4">
          <p className="text-sm font-semibold tracking-wider text-sable-brown-light uppercase">
            Princi Rakotoarison<span className="text-sable-terracotta">.dev</span>
          </p>
          <p className="text-xs text-sable-brown-light leading-relaxed">
            © {new Date().getFullYear()} Tous droits réservés. Créé avec passion à Antananarivo, Madagascar.
          </p>
          <div className="flex gap-6 mt-2">
            <a href="#" className="text-xs font-semibold text-sable-brown-light hover:text-sable-terracotta transition-colors duration-300">Mentions Légales</a>
            <span className="text-sable-terracotta/20 text-xs">|</span>
            <a href="#" className="text-xs font-semibold text-sable-brown-light hover:text-sable-terracotta transition-colors duration-300">Politique de Confidentialité</a>
          </div>
        </div>
      </footer>

      {/* Floating Back To Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 z-40 w-11 h-11 rounded-full bg-sable-terracotta hover:bg-sable-terracotta-dark text-sable-white flex items-center justify-center cursor-pointer shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 focus:outline-none"
            aria-label="Retour en haut de la page"
          >
            <FaArrowUp className="text-sm" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
