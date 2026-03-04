import React, { useState } from 'react';
import Magnetic from './Magnetic';
import { motion, AnimatePresence } from 'framer-motion';

interface HeaderProps {
  onNavigate: (page: 'home' | 'about') => void;
  onScrollToSection: (sectionId: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onNavigate, onScrollToSection }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Category', id: 'category', isDropdown: true },
    { label: 'Project', id: 'corporate' },
    { label: 'About Us', id: 'about', type: 'page' },
  ];

  const categories = [
    { label: 'Company Merch', id: 'corporate' },
    { label: 'Employee Merch', id: 'products' },
    { label: 'Event Merch', id: 'corporate' },
    { label: 'Customized Merch', id: 'corporate' },
  ];

  const handleMobileNavigate = (action: () => void) => {
    action();
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 z-[100] w-full transition-all duration-700 ${isScrolled ? 'bg-white/90 backdrop-blur-md border-b-[1px] border-deep-black/5 py-1.5' : 'bg-transparent py-4'
          }`}
      >
        <div className="max-w-[1440px] mx-auto px-8 flex items-center justify-between">
          <Magnetic strength={0.3}>
            <div
              className="flex items-center gap-3 cursor-pointer group relative z-[110]"
              onClick={() => onNavigate('home')}
            >
              <h2 className={`text-lg md:text-xl font-elegant font-bold tracking-[0.2em] uppercase leading-none transition-colors duration-500 ${isScrolled ? 'text-deep-black' : 'text-white'
                }`}>
                MERCH.CORP
              </h2>
            </div>
          </Magnetic>

          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.isDropdown && setIsCategoryOpen(true)}
                onMouseLeave={() => item.isDropdown && setIsCategoryOpen(false)}
              >
                <Magnetic strength={0.2}>
                  <button
                    className="relative group px-1 py-1"
                    onClick={(e) => {
                      e.preventDefault();
                      if (item.type === 'page') {
                        onNavigate('about');
                      } else if (!item.isDropdown) {
                        onScrollToSection(item.id);
                      }
                    }}
                  >
                    <span className={`relative z-10 text-[11px] font-bold uppercase tracking-[0.3em] transition-colors duration-300 ${isScrolled ? 'text-deep-black' : 'text-white'
                      }`}>
                      {item.label}
                    </span>
                    <motion.div
                      className={`absolute bottom-0 left-0 w-full h-[1px] ${isScrolled ? 'bg-deep-black' : 'bg-white'
                        }`}
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
                    />
                  </button>
                </Magnetic>

                {item.isDropdown && (
                  <AnimatePresence>
                    {isCategoryOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.3, ease: [0.19, 1, 0.22, 1] }}
                        className="absolute top-full left-0 mt-2 w-56 bg-white border border-deep-black/10 shadow-xl overflow-hidden"
                      >
                        <div className="py-2">
                          {categories.map((cat) => (
                            <button
                              key={cat.label}
                              className="w-full text-left px-6 py-3 text-[10px] font-bold uppercase tracking-[0.2em] text-deep-black hover:bg-brand-yellow hover:text-deep-black transition-colors duration-300"
                              onClick={() => {
                                onScrollToSection(cat.id);
                                setIsCategoryOpen(false);
                              }}
                            >
                              {cat.label}
                            </button>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </nav>

          <div className="flex items-center gap-6">
            <div className="hidden lg:block">
              <Magnetic strength={0.4}>
                <button className={`px-8 py-2.5 text-[10px] font-bold uppercase tracking-[0.4em] border transition-all duration-500 ${isScrolled
                  ? 'bg-deep-black text-white border-deep-black'
                  : 'bg-white text-deep-black border-white hover:bg-transparent hover:text-white'
                  }`}>
                  Project Portal
                </button>
              </Magnetic>
            </div>

            <button
              className={`lg:hidden relative z-[110] p-2 transition-colors duration-500 ${isScrolled ? 'text-deep-black' : 'text-white'
                }`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <span className="material-symbols-outlined text-3xl">
                {isMobileMenuOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>
      </header>

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
                <div key={item.label} className="flex flex-col gap-4">
                  <motion.button
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + index * 0.1 }}
                    className="text-left text-5xl font-display uppercase tracking-tighter text-stark-white hover:text-brand-yellow transition-colors"
                    onClick={() => {
                      if (!item.isDropdown) {
                        handleMobileNavigate(() => {
                          if (item.type === 'page') {
                            onNavigate('about');
                          } else {
                            onScrollToSection(item.id);
                          }
                        });
                      }
                    }}
                  >
                    {item.label}
                  </motion.button>
                  {item.isDropdown && (
                    <div className="flex flex-col gap-2 pl-4">
                      {categories.map((cat, catIdx) => (
                        <motion.button
                          key={cat.label}
                          initial={{ opacity: 0, x: -30 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.3 + catIdx * 0.05 }}
                          className="text-left text-xl font-display uppercase tracking-tighter text-stark-white/60 hover:text-brand-yellow transition-colors"
                          onClick={() => handleMobileNavigate(() => onScrollToSection(cat.id))}
                        >
                          {cat.label}
                        </motion.button>
                      ))}
                    </div>
                  )}
                </div>
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
