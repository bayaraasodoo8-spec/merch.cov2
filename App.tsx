import React, { useState } from 'react';
import Header from './components/Header';
import LabModal from './components/LabModal';
import ContactModal from './components/ContactModal';
import Magnetic from './components/Magnetic';
import ProcessCard from './components/ProcessCard'; // We might still use this elsewhere or keep for reference
import VerticalTimeline from './components/VerticalTimeline';
import SolutionsSlider from './components/SolutionsSlider';
import AboutUs from './components/AboutUs';
import { motion, useScroll, useTransform } from 'framer-motion';
import { PROMISES, COLLECTIONS, CATEGORIES, PROCESS_STEPS } from './constants';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<'home' | 'about'>('home');
  const [isLabOpen, setIsLabOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

  const handleScrollToSection = (sectionId: string) => {
    if (currentPage !== 'home') {
      setCurrentPage('home');
      // Wait for the home page to mount
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div
      className="min-h-screen selection:bg-brand-yellow selection:text-deep-black"
    >
      <Header
        onNavigate={setCurrentPage}
        onScrollToSection={handleScrollToSection}
      />

      <main className="relative w-full overflow-hidden">
        {currentPage === 'home' ? (
          <>
            <section id="home" className="relative w-screen h-[100dvh] flex flex-col justify-center items-center overflow-hidden bg-white m-0 p-0">
              {/* Background Video Layer - Subtle Grain & Motion */}
              <div className="absolute inset-0 z-0 opacity-20 grayscale pointer-events-none">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                >
                  <source src="https://assets.mixkit.co/videos/preview/mixkit-fashion-model-posing-in-a-white-studio-2735-large.mp4" type="video/mp4" />
                </video>
              </div>

              {/* MAIN HERO IMAGE - FULL BLEED */}
              <motion.div
                initial={{ scale: 1.1, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 2.5, ease: [0.19, 1, 0.22, 1] }}
                className="absolute inset-0 z-0"
              >
                <img
                  src="https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=2000&auto=format&fit=crop"
                  alt="High Fashion Editorial"
                  className="w-full h-full object-cover filter brightness-[0.95] contrast-[1.05]"
                />
                {/* Dark Vignette for Legibility */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40" />
              </motion.div>

              {/* Background Brand Text Layer - Luxury Subtle Over Image */}
              <div className="absolute inset-0 flex items-center justify-center z-10 overflow-hidden pointer-events-none">
                <h1 className="text-[22vw] font-elegant font-bold uppercase text-white/[0.08] leading-none tracking-tighter select-none mix-blend-overlay">
                  MERCH.CORP
                </h1>
              </div>

              {/* Action Layer - Luxury Minimal Typography with Merch Energy */}
              <div className="absolute bottom-24 left-0 right-0 z-20 flex flex-col items-center gap-10">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 0.9, y: 0 }}
                  transition={{ delay: 1, duration: 1.5 }}
                  className="text-[10px] md:text-xs font-display tracking-[0.5em] text-white uppercase drop-shadow-lg"
                >
                  Defining the next generation of identities
                </motion.p>
                <div className="flex gap-16">
                  <button
                    onClick={() => handleScrollToSection('products')}
                    className="group relative px-8 py-3 overflow-hidden border border-white/30 backdrop-blur-sm"
                  >
                    <span className="relative z-10 text-[10px] font-bold uppercase tracking-[0.4em] text-white transition-colors duration-500 group-hover:text-deep-black">
                      Collections
                    </span>
                    <motion.div
                      className="absolute inset-0 bg-brand-yellow translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"
                    />
                  </button>
                  <button
                    onClick={() => setIsContactOpen(true)}
                    className="group relative px-8 py-3 overflow-hidden border border-brand-yellow bg-brand-yellow"
                  >
                    <span className="relative z-10 text-[10px] font-bold uppercase tracking-[0.4em] text-deep-black transition-colors duration-500 group-hover:text-white">
                      Get Started
                    </span>
                    <motion.div
                      className="absolute inset-0 bg-deep-black translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"
                    />
                  </button>
                </div>
              </div>

              {/* Scroll Indicator */}
              <div className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-40 hidden md:block">
                <div className="w-[1px] h-12 bg-white/50 animate-pulse"></div>
              </div>
            </section>

            {/* MARQUEE - Refined for Luxury */}
            <div className="bg-brand-yellow border-y-[1px] border-deep-black/10 py-4 overflow-hidden flex whitespace-nowrap">
              <div className="animate-marquee flex gap-8 md:gap-12 items-center">
                {Array(10).fill(null).map((_, i) => (
                  <React.Fragment key={i}>
                    <span className="text-xl md:text-2xl font-display uppercase tracking-widest opacity-80 text-deep-black">Events</span>
                    <span className="text-lg text-brand-blue/40">•</span>
                    <span className="text-xl md:text-2xl font-display uppercase tracking-widest opacity-80 text-deep-black">People</span>
                    <span className="text-lg text-brand-blue/40">•</span>
                    <span className="text-xl md:text-2xl font-display uppercase tracking-widest opacity-80 text-deep-black">Partner Companies</span>
                    <span className="text-lg text-brand-blue/40">•</span>
                    <span className="text-xl md:text-2xl font-display uppercase tracking-widest opacity-80 text-deep-black">Customized Merch</span>
                    <span className="text-lg text-electric-blue/40">•</span>
                  </React.Fragment>
                ))}
              </div>
            </div>

            {/* ASSET STATEMENT - Standard v.7.0 */}
            <section className="bg-brand-blue py-48 px-6 overflow-hidden border-b-[1px] border-deep-black/10">
              <div className="max-w-[1440px] mx-auto text-center">
                <Magnetic strength={0.3}>
                  <p className="text-3xl md:text-5xl lg:text-7xl font-display text-white leading-tight uppercase tracking-tighter hover:text-brand-yellow transition-colors duration-500 cursor-default">
                    Your vision is unique.
                    <br />
                    <span className="text-brand-yellow">Your merch should be too.</span>
                  </p>
                </Magnetic>
              </div>
            </section>

            {/* POPULAR CATEGORIES - Standard v.7.0 */}
            <section id="products" className="bg-white py-32 px-6 border-b-[1px] border-deep-black/10">
              <div className="max-w-[1440px] mx-auto">
                <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
                  <div className="relative">
                    <h2 className="text-4xl md:text-6xl font-display text-deep-black uppercase leading-tight tracking-tighter">
                      <span className="text-brand-pink">PRODUCTS</span>
                    </h2>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[350px]">
                  {CATEGORIES.map((cat, i) => (
                    <Magnetic key={i} strength={0.1} className={`${cat.span || ''} group/card`}>
                      <div className={`relative border-[1px] border-deep-black/10 overflow-hidden h-full w-full interactive cursor-pointer ${cat.bgColor}`}>
                        {/* Background Graphic Pattern */}
                        <div className="absolute inset-0 opacity-10 pointer-events-none group-hover/card:opacity-20 transition-opacity">
                          <div className="grid grid-cols-4 grid-rows-4 w-full h-full">
                            {Array(16).fill(0).map((_, idx) => (
                              <div key={idx} className="border-[0.5px] border-deep-black/20"></div>
                            ))}
                          </div>
                        </div>

                        {/* Category Image */}
                        <img
                          alt={cat.name}
                          className="w-full h-full object-cover grayscale transition-all duration-700 scale-100 group-hover/card:scale-105 group-hover/card:grayscale-0"
                          src={cat.image}
                        />

                        {/* Overlay Gradient for contrast */}
                        <div className="absolute inset-0 bg-gradient-to-t from-deep-black/80 via-transparent to-transparent opacity-60 group-hover/card:opacity-90 transition-opacity duration-500"></div>

                        {/* Animated Label Overlay */}
                        <div className="absolute inset-0 p-8 flex flex-col justify-end">
                          <div className="flex flex-col transform translate-y-4 group-hover/card:translate-y-0 transition-transform duration-500">
                            <span className="font-display text-4xl text-white uppercase tracking-tighter leading-none mb-2">{cat.name}</span>
                            <div className="h-[1px] w-0 group-hover/card:w-full bg-brand-yellow transition-all duration-700 mb-4" />
                            <span className="text-[10px] font-bold text-white uppercase tracking-[0.4em] opacity-60 group-hover/card:opacity-100 transition-opacity">Explore Collection</span>
                          </div>
                        </div>

                        {/* Hover Badge */}
                        <div className="absolute top-6 right-6 bg-brand-yellow text-deep-black font-display text-[10px] px-3 py-1.5 border border-deep-black opacity-0 group-hover/card:opacity-100 transition-all transform -rotate-12 group-hover/card:rotate-0 duration-500">
                          LIMITED EDITION
                        </div>
                      </div>
                    </Magnetic>
                  ))}
                </div>
              </div>
            </section>

            {/* TAILORED SOLUTIONS SLIDER */}
            <div id="corporate">
              <SolutionsSlider />
            </div>

            {/* WORK PROCESS - Standard v.7.0 */}
            <section id="projects" className="bg-brand-yellow py-32 border-b-[1px] border-deep-black/10 overflow-hidden relative">
              {/* Animated Background Grid */}
              <div className="absolute inset-0 opacity-5 pointer-events-none">
                <div className="grid grid-cols-8 grid-rows-8 w-full h-full">
                  {Array(64).fill(0).map((_, idx) => (
                    <div
                      key={idx}
                      className="border border-deep-black/20"
                      style={{
                        animation: `pulse ${2 + (idx % 3)}s ease-in-out infinite`,
                        animationDelay: `${idx * 0.05}s`
                      }}
                    ></div>
                  ))}
                </div>
              </div>

              <div className="max-w-[1440px] mx-auto px-6 relative z-10 w-full">
                <div className="flex flex-col md:flex-row items-end justify-between mb-24 gap-8">
                  <div className="relative">
                    <h2 className="text-5xl md:text-8xl font-display text-deep-black uppercase leading-[0.85] tracking-tighter">
                      HOW WE <br /><span className="text-white">OPERATE</span>
                    </h2>
                    <div className="absolute -left-12 top-1/2 w-3 h-32 bg-deep-black -translate-y-1/2 hidden lg:block"></div>
                  </div>
                  <div className="flex flex-col items-end gap-2 text-right">
                    <div className="bg-deep-black text-brand-yellow px-6 py-4 border border-deep-black font-display text-xl uppercase -rotate-2 hover:rotate-0 transition-transform duration-300">
                      System v.7.0
                    </div>
                    <p className="text-deep-black font-black uppercase tracking-widest text-sm max-w-[300px] leading-tight opacity-60">
                      A comprehensive blueprint from conceptualization to global distribution.
                    </p>
                  </div>
                </div>

                <VerticalTimeline />
              </div>
            </section>
          </>
        ) : (
          <AboutUs
            onNavigate={setCurrentPage}
            onContact={() => setIsContactOpen(true)}
          />
        )}
      </main>

      {/* FOOTER - Standard v.7.0 */}
      <footer className="bg-deep-black text-white pt-32 pb-12 border-t-[1px] border-white/5 overflow-hidden relative">
        {/* Animated Background Text */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-[0.03] select-none">
          <div className="whitespace-nowrap text-[300px] font-display uppercase tracking-tighter leading-none -mt-20">
            MERCH.CORP MERCH.CORP MERCH.CORP
          </div>
        </div>

        <div className="max-w-[1440px] mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24">
            <div className="lg:col-span-5">
              <div className="flex items-center gap-3 mb-10 group cursor-pointer" onClick={() => setCurrentPage('home')}>
                <div className="bg-brand-yellow p-1.5 border border-deep-black group-hover:rotate-12 transition-transform duration-500">
                  <svg className="w-10 h-10 text-deep-black" fill="currentColor" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                    <path d="M44 4H30.6666V17.3334H17.3334V30.6666H4V44H44V4Z"></path>
                  </svg>
                </div>
                <h2 className="text-4xl md:text-5xl font-display text-brand-yellow tracking-tighter uppercase leading-none">MERCH.CORP</h2>
              </div>

              <h3 className="text-4xl md:text-5xl lg:text-7xl font-display uppercase leading-[0.85] tracking-tighter mb-12">
                READY TO START <br /><span className="text-brand-pink">YOUR BRAND?</span>
              </h3>

              <div className="flex flex-col sm:flex-row gap-6">
                <Magnetic strength={0.3}>
                  <button
                    onClick={() => setIsContactOpen(true)}
                    className="bg-brand-yellow text-deep-black px-12 py-6 text-xl font-bold border border-brand-yellow hover:bg-transparent hover:text-brand-yellow uppercase transition-all flex items-center gap-4 tracking-widest"
                  >
                    Start Your Project
                    <span className="material-symbols-outlined font-bold">arrow_forward</span>
                  </button>
                </Magnetic>
              </div>
            </div>

            <div className="lg:col-span-2 lg:col-start-7">
              <h4 className="font-display text-brand-pink text-xl mb-10 uppercase tracking-[0.2em]">Quick Links</h4>
              <ul className="flex flex-col gap-5 text-[11px] font-bold uppercase tracking-[0.3em]">
                <li><button onClick={() => setCurrentPage('about')} className="hover:text-brand-yellow transition-colors duration-300 flex items-center gap-2 group text-left">
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity">/</span> About Us
                </button></li>
                <li><button onClick={() => handleScrollToSection('products')} className="hover:text-brand-yellow transition-colors duration-300 flex items-center gap-2 group text-left">
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity">/</span> Products
                </button></li>
                <li><button onClick={() => handleScrollToSection('corporate')} className="hover:text-brand-yellow transition-colors duration-300 flex items-center gap-2 group text-left">
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity">/</span> Corporate
                </button></li>
                <li><button onClick={() => handleScrollToSection('projects')} className="hover:text-brand-yellow transition-colors duration-300 flex items-center gap-2 group text-left">
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity">/</span> Projects
                </button></li>
              </ul>
            </div>

            <div className="lg:col-span-3 lg:col-start-10">
              <h4 className="font-display text-brand-blue text-xl mb-10 uppercase tracking-[0.2em]">Connect</h4>
              <div className="flex flex-col gap-8">
                <div className="space-y-4">
                  <p className="text-white/40 font-bold uppercase tracking-widest text-[10px]">Direct Line</p>
                  <p className="text-2xl font-display uppercase tracking-tight">+1 (888) MERCH-HQ</p>
                </div>

                <div className="flex gap-4">
                  {[
                    { icon: 'share', label: 'Social' },
                    { icon: 'mail', label: 'Email' },
                    { icon: 'location_on', label: 'Office' }
                  ].map((item, i) => (
                    <Magnetic key={i} strength={0.4}>
                      <div className="w-14 h-14 border border-white/10 flex items-center justify-center hover:bg-brand-yellow hover:text-deep-black transition-colors cursor-pointer group">
                        <span className="material-symbols-outlined text-2xl group-hover:scale-110 transition-transform">
                          {item.icon}
                        </span>
                      </div>
                    </Magnetic>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="pt-12 border-t-[1px] border-white/10 flex flex-col md:flex-row justify-between items-center gap-8">
            <p className="text-[11px] font-bold text-white/40 uppercase tracking-widest">© 2024 MERCH.CORP SYSTEM v7.0</p>
            <div className="flex gap-8 text-white/20">
              <span className="material-symbols-outlined text-2xl hover:text-brand-yellow cursor-default transition-colors">payments</span>
              <span className="material-symbols-outlined text-2xl hover:text-brand-blue cursor-default transition-colors">verified</span>
              <span className="material-symbols-outlined text-2xl hover:text-brand-pink cursor-default transition-colors">encrypted</span>
            </div>
          </div>
        </div>
      </footer>

      {/* FLOATING ACTION BUTTON */}
      <div className="fixed bottom-10 right-10 z-[110]">
        <Magnetic strength={0.4}>
          <button
            onClick={() => setIsContactOpen(true)}
            className="bg-brand-pink text-white p-4 md:p-6 brutalist-border brutalist-shadow-yellow hover:translate-x-2 hover:translate-y-2 hover:shadow-none transition-all flex items-center gap-4"
          >
            <span className="material-symbols-outlined text-3xl md:text-4xl font-bold">campaign</span>
            <span className="font-display text-xl md:text-2xl uppercase hidden sm:block">Start your project</span>
          </button>
        </Magnetic>
      </div>

      <LabModal isOpen={isLabOpen} onClose={() => setIsLabOpen(false)} />
      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </div>
  );
};

export default App;