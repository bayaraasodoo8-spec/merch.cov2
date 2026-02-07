
import React from 'react';
import Magnetic from './Magnetic';
import { motion, AnimatePresence } from 'framer-motion';

interface HeaderProps {
  onNavigate: (page: 'home' | 'about') => void;
  onScrollToSection: (sectionId: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onNavigate, onScrollToSection }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const navItems = [
    { label: 'Products', id: 'products' },
    { label: 'Project', id: 'corporate' },
    { label: 'Work', id: 'projects' },
    { label: 'About Us', id: 'about', type: 'page' },
  ];

  const handleMobileNavigate = (action: () => void) => {
    action();
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header className="sticky top-0 z-[100] w-full bg-deep-black border-b-4 border-deep-black">
        <div className="max-w-[1440px] mx-auto px-6 py-4 flex items-center justify-between">
          <Magnetic strength={0.3}>
            <div
              className="flex items-center gap-2 cursor-pointer group relative z-[110]"
              onClick={() => onNavigate('home')}
            >
              <motion.div
                className="bg-brand-yellow p-1 brutalist-border"
                whileHover={{ rotate: 90 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                  <path d="M44 4H30.6666V17.3334H17.3334V30.6666H4V44H44V4Z"></path>
                </svg>
              </motion.div>
              <h2 className="text-2xl md:text-3xl font-display text-brand-yellow tracking-tighter uppercase leading-none group-hover:text-white transition-colors">MERCH.CORP</h2>
            </div>
          </Magnetic>

          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Magnetic key={item.label} strength={0.2}>
                <button
                  className="relative group px-2 py-1"
                  onClick={(e) => {
                    e.preventDefault();
                    if (item.type === 'page') {
                      onNavigate('about');
                    } else {
                      onScrollToSection(item.id);
                    }
                  }}
                >
                  <span className="relative z-10 text-white font-bold uppercase tracking-widest group-hover:text-brand-yellow transition-colors duration-300">
                    {item.label}
                  </span>
                  <motion.div
                    className="absolute bottom-0 left-0 w-full h-1 bg-brand-yellow"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  />
                  <motion.div
                    className="absolute inset-0 bg-brand-yellow/5 opacity-0 group-hover:opacity-100 rounded-px"
                    initial={{ scale: 0.8 }}
                    whileHover={{ scale: 1.1 }}
                  />
                </button>
              </Magnetic>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <div className="hidden lg:block">
              <Magnetic strength={0.4}>
                <button className="bg-brand-yellow text-deep-black brutalist-border brutalist-shadow-sm px-6 py-2 text-sm font-display uppercase tracking-widest hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all">
                  Project Portal
                </button>
              </Magnetic>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="lg:hidden relative z-[110] text-brand-yellow p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <span className="material-symbols-outlined text-4xl">
                {isMobileMenuOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ type: "tween", duration: 0.4, ease: "easeInOut" }}
            className="fixed inset-0 z-[105] bg-deep-black pt-32 px-6 pb-12 flex flex-col justify-between"
          >
            <nav className="flex flex-col gap-6">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.label}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + index * 0.1 }}
                  className="text-left text-5xl font-display uppercase tracking-tighter text-stark-white hover:text-brand-yellow transition-colors"
                  onClick={() => handleMobileNavigate(() => {
                    if (item.type === 'page') {
                      onNavigate('about');
                    } else {
                      onScrollToSection(item.id);
                    }
                  })}
                >
                  {item.label}
                </motion.button>
              ))}
            </nav>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col gap-6"
            >
              <button className="w-full bg-brand-yellow text-deep-black brutalist-border px-6 py-4 text-xl font-display uppercase tracking-widest">
                Project Portal
              </button>
              <div className="flex gap-4 justify-center">
                {['instagram', 'twitter', 'linkedin'].map((social) => (
                  <div key={social} className="w-12 h-12 border border-white/20 flex items-center justify-center rounded-full text-white/60">
                    <span className="text-xs uppercase">{social[0]}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
