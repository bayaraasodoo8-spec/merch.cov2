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
      style={{ zoom: 0.8 }}
    >
      <Header
        onNavigate={setCurrentPage}
        onScrollToSection={handleScrollToSection}
      />

      <main>
        {currentPage === 'home' ? (
          <>
            {/* HERO SECTION */}
            <section id="home" className="relative min-h-[90vh] flex flex-col justify-center overflow-hidden border-b-8 border-deep-black bg-deep-black">
              {/* Background Image */}
              <div className="absolute inset-0 z-0">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQxBDGadevcsQORuZDVlpQE7VowJtMAv9En16woywKqf4XCPwNNL20FL97iQOlMyo5qNBv2hmkUmsS62zC47581XeCpbIzMVQzm_adyZZYOjl5F5qjpsrNI6mBdlSdt-6r-DxHU06iQjiEWR08z1yZ0PM4Zrpf_ZT09bjfsmIE4LIW9SMnz1_pyiL0vvxk-7hiCT5AEWb2OD5hQlcmqta_fKHB_HEj2IG6dLdf860Zn1PrcHS0VEHrKzVlxQDByTHEWpDO32OEO_HG"
                  alt="Background"
                  className="w-full h-full object-cover opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-deep-black/80 via-transparent to-transparent"></div>
                <div className="absolute inset-0 bg-black/20"></div>
              </div>

              {/* Background Text Overlay */}
              <div className="absolute inset-0 pointer-events-none flex flex-col justify-center items-center select-none opacity-10 z-0">
                <div className="text-[20vw] font-display leading-none text-white whitespace-nowrap -rotate-3">IDENTITY</div>
                <div className="text-[25vw] font-display leading-none text-brand-yellow whitespace-nowrap rotate-2">EVERYDAY</div>
              </div>

              <div className="relative z-10 max-w-[1440px] mx-auto px-6 w-full flex justify-end items-center h-full py-20">
                <div className="flex flex-col items-end text-right">
                  <h1 className="text-5xl md:text-7xl lg:text-[100px] font-display text-brand-yellow leading-[0.85] tracking-tighter uppercase mb-8 drop-shadow-lg">
                    YOUR STORY.<br />YOUR VISION.<br />YOUR MERCH.
                  </h1>
                  <p className="text-xl md:text-2xl font-black bg-brand-yellow text-deep-black px-6 py-4 brutalist-border inline-block mb-10 transform rotate-1 shadow-[4px_4px_0px_0px_#000]">
                    FROM IDENTITY TO EVERYDAY.
                  </p>

                  <div className="bg-deep-black text-white p-4 font-display text-xl brutalist-border inline-block rotate-3">
                    EST. 2024
                  </div>
                </div>
              </div>
            </section>

            {/* MARQUEE */}
            <div className="bg-brand-yellow border-b-4 border-deep-black py-4 overflow-hidden flex whitespace-nowrap">
              <div className="animate-marquee flex gap-8 md:gap-12 items-center">
                {Array(10).fill(null).map((_, i) => (
                  <React.Fragment key={i}>
                    <span className="text-2xl md:text-4xl font-display uppercase">SCREEN PRINTING</span>
                    <span className="text-2xl md:text-4xl text-brand-blue">•</span>
                    <span className="text-2xl md:text-4xl font-display uppercase">EMBROIDERY</span>
                    <span className="text-2xl md:text-4xl text-brand-blue">•</span>
                    <span className="text-2xl md:text-4xl font-display uppercase">CUSTOM DESIGN</span>
                    <span className="text-2xl md:text-4xl text-brand-blue">•</span>
                    <span className="text-2xl md:text-4xl font-display uppercase">WORLDWIDE SHIPPING</span>
                    <span className="text-2xl md:text-4xl text-electric-blue">•</span>
                  </React.Fragment>
                ))}
              </div>
            </div>

            {/* ASSET STATEMENT */}
            <section className="bg-deep-black py-32 px-6 overflow-hidden border-b-8 border-deep-black">
              <div className="max-w-[1440px] mx-auto text-center">
                <Magnetic strength={0.3}>
                  <p className="text-3xl md:text-5xl lg:text-7xl font-display text-white leading-tight uppercase tracking-tighter hover:text-brand-yellow transition-colors duration-500 cursor-default">
                    MORE THAN PRODUCTS. <br />
                    <span className="text-brand-yellow">WE BUILD THE ASSETS</span><br />
                    THAT DEFINE YOUR LEGACY.
                  </p>
                </Magnetic>
              </div>
            </section>

            {/* POPULAR CATEGORIES */}
            <section id="products" className="bg-stark-white py-32 px-6 border-b-8 border-deep-black">
              <div className="max-w-[1440px] mx-auto">
                <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
                  <div className="relative">
                    <h2 className="text-5xl md:text-7xl lg:text-[10vw] font-display text-deep-black uppercase leading-[0.75] tracking-tighter">
                      <span className="text-brand-blue">PRODUCTS</span>
                    </h2>
                    <div className="absolute -left-8 top-1/2 w-2 h-32 bg-brand-blue -translate-y-1/2 hidden lg:block"></div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[350px]">
                  {CATEGORIES.map((cat, i) => (
                    <Magnetic key={i} strength={0.1} className={`${cat.span || ''} group/card`}>
                      <div className={`relative brutalist-border overflow-hidden h-full w-full interactive cursor-pointer ${cat.bgColor}`}>
                        {/* Background Graphic Pattern */}
                        <div className="absolute inset-0 opacity-10 pointer-events-none group-hover/card:opacity-20 transition-opacity">
                          <div className="grid grid-cols-4 grid-rows-4 w-full h-full">
                            {Array(16).fill(0).map((_, idx) => (
                              <div key={idx} className="border-[0.5px] border-deep-black"></div>
                            ))}
                          </div>
                        </div>

                        {/* Category Image */}
                        <img
                          alt={cat.name}
                          className="w-full h-full object-cover grayscale group-hover/card:grayscale-0 transition-all duration-700 scale-100 group-hover/card:scale-110 group-hover/card:rotate-1"
                          src={cat.image}
                        />

                        {/* Overlay Gradient for contrast */}
                        <div className="absolute inset-0 bg-gradient-to-t from-deep-black/60 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500"></div>

                        {/* Animated Button Label */}
                        <div className="absolute bottom-6 left-6 right-6">
                          <div className={`
                        flex items-center justify-between
                        ${cat.labelBg} ${cat.labelColor} 
                        brutalist-border-sm brutalist-shadow-sm 
                        px-6 py-4 
                        transition-all duration-500 ease-[cubic-bezier(0.19,1,0.22,1)]
                        group-hover/card:translate-x-1 group-hover/card:-translate-y-1
                        group-hover/card:shadow-none
                      `}>
                            <div className="flex flex-col">
                              <span className="font-display text-2xl uppercase tracking-tighter leading-none">{cat.name}</span>
                              <span className="text-[10px] font-black uppercase tracking-widest mt-1 opacity-0 group-hover/card:opacity-60 transition-opacity duration-300">EXPLORE CATEGORY</span>
                            </div>

                            <div className="overflow-hidden w-0 group-hover/card:w-12 transition-all duration-500 flex items-center justify-end">
                              <span className="material-symbols-outlined text-3xl transition-transform duration-500 group-hover/card:translate-x-1">arrow_forward</span>
                            </div>
                          </div>
                        </div>

                        {/* Hover Badge */}
                        <div className="absolute top-4 right-4 bg-brand-yellow text-deep-black font-display text-xs px-2 py-1 brutalist-border-sm opacity-0 group-hover/card:opacity-100 transition-opacity translate-y-4 group-hover/card:translate-y-0 duration-300">
                          NEW ARRIVALS
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

            {/* WORK PROCESS - VERTICAL ZIG ZAG */}
            <section id="projects" className="bg-brand-yellow py-32 border-b-8 border-deep-black overflow-hidden relative">
              {/* Animated Background Grid */}
              <div className="absolute inset-0 opacity-5 pointer-events-none">
                <div className="grid grid-cols-8 grid-rows-8 w-full h-full">
                  {Array(64).fill(0).map((_, idx) => (
                    <div
                      key={idx}
                      className="border border-deep-black"
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
                    <h2 className="text-6xl md:text-9xl font-display text-deep-black uppercase leading-[0.8] tracking-tighter">
                      HOW WE <br /><span className="text-white">OPERATE</span>
                    </h2>
                    <div className="absolute -left-8 top-1/2 w-2 h-32 bg-deep-black -translate-y-1/2 hidden lg:block"></div>
                  </div>
                  <div className="flex flex-col items-end gap-2 text-right">
                    <div className="bg-deep-black text-brand-yellow px-6 py-4 brutalist-border font-display text-xl uppercase -rotate-2 hover:rotate-0 transition-transform duration-300">
                      System v.6.0
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

      {/* FOOTER - UPGRADED */}
      <footer className="bg-deep-black text-white pt-32 pb-12 border-t-8 border-deep-black overflow-hidden relative">
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
                <div className="bg-brand-yellow p-1.5 brutalist-border group-hover:rotate-12 transition-transform duration-500">
                  <svg className="w-10 h-10 text-deep-black" fill="currentColor" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                    <path d="M44 4H30.6666V17.3334H17.3334V30.6666H4V44H44V4Z"></path>
                  </svg>
                </div>
                <h2 className="text-4xl md:text-5xl font-display text-brand-yellow tracking-tighter uppercase leading-none">MERCH.CORP</h2>
              </div>

              <h3 className="text-4xl md:text-5xl lg:text-7xl font-display uppercase leading-[0.85] tracking-tighter mb-12">
                READY TO START <br /><span className="text-brand-blue">YOUR BRAND?</span>
              </h3>

              <div className="flex flex-col sm:flex-row gap-6">
                <Magnetic strength={0.3}>
                  <button
                    onClick={() => setIsContactOpen(true)}
                    className="bg-brand-yellow text-deep-black px-10 py-6 text-2xl font-display brutalist-border brutalist-shadow-blue uppercase hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all flex items-center gap-4"
                  >
                    Start Your Project
                    <span className="material-symbols-outlined font-bold">arrow_forward</span>
                  </button>
                </Magnetic>
              </div>
            </div>

            <div className="lg:col-span-2 lg:col-start-7">
              <h4 className="font-display text-brand-pink text-xl mb-10 uppercase tracking-[0.2em]">Quick Links</h4>
              <ul className="flex flex-col gap-5 text-xl font-bold uppercase tracking-tight">
                <li><button onClick={() => setCurrentPage('about')} className="hover:text-brand-yellow transition-colors duration-300 flex items-center gap-2 group">
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity">/</span> About Us
                </button></li>
                <li><button onClick={() => handleScrollToSection('products')} className="hover:text-brand-yellow transition-colors duration-300 flex items-center gap-2 group">
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity">/</span> Products
                </button></li>
                <li><button onClick={() => handleScrollToSection('corporate')} className="hover:text-brand-yellow transition-colors duration-300 flex items-center gap-2 group">
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity">/</span> Corporate
                </button></li>
                <li><button onClick={() => handleScrollToSection('projects')} className="hover:text-brand-yellow transition-colors duration-300 flex items-center gap-2 group">
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity">/</span> Projects
                </button></li>
              </ul>
            </div>

            <div className="lg:col-span-3 lg:col-start-10">
              <h4 className="font-display text-brand-blue text-xl mb-10 uppercase tracking-[0.2em]">Connect</h4>
              <div className="flex flex-col gap-8">
                <div className="space-y-4">
                  <p className="text-white/60 font-black uppercase tracking-widest text-sm">Direct Line</p>
                  <p className="text-3xl font-display uppercase tracking-tight">+1 (888) MERCH-HQ</p>
                </div>

                <div className="flex gap-4">
                  {[
                    { icon: 'share', label: 'Social' },
                    { icon: 'mail', label: 'Email' },
                    { icon: 'location_on', label: 'Office' }
                  ].map((item, i) => (
                    <Magnetic key={i} strength={0.4}>
                      <div className="w-16 h-16 bg-white/5 brutalist-border flex items-center justify-center hover:bg-brand-yellow hover:text-deep-black transition-colors cursor-pointer group">
                        <span className="material-symbols-outlined text-3xl group-hover:scale-110 transition-transform">
                          {item.icon}
                        </span>
                      </div>
                    </Magnetic>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="pt-12 border-t-4 border-white/10 flex flex-col md:flex-row justify-between items-center gap-8">
            <p className="text-xl font-display text-white/40 uppercase">© 2024 MERCH.CORP SYSTEM v6.0</p>
            <div className="flex gap-12 text-white/40">
              <span className="material-symbols-outlined text-4xl hover:text-brand-yellow cursor-default transition-colors">payments</span>
              <span className="material-symbols-outlined text-4xl hover:text-brand-blue cursor-default transition-colors">verified</span>
              <span className="material-symbols-outlined text-4xl hover:text-brand-pink cursor-default transition-colors">encrypted</span>
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