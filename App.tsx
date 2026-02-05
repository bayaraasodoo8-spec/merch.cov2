import React, { useState } from 'react';
import Header from './components/Header';
import LabModal from './components/LabModal';
import Magnetic from './components/Magnetic';
import ProcessCard from './components/ProcessCard'; // We might still use this elsewhere or keep for reference
import VerticalTimeline from './components/VerticalTimeline';
import SolutionsSlider from './components/SolutionsSlider';
import { motion, useScroll, useTransform } from 'framer-motion';
import { PROMISES, COLLECTIONS, CATEGORIES, PROCESS_STEPS } from './constants';

const App: React.FC = () => {
  const [isLabOpen, setIsLabOpen] = useState(false);
  // We can keep these if needed for other sections, but for now we'll focus on the vertical timeline
  // const containerRef = React.useRef<HTMLDivElement>(null);
  // const { scrollYProgress } = useScroll({ target: containerRef });
  // const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

  return (
    <div
      className="min-h-screen selection:bg-neon-lime selection:text-deep-black"
      style={{ zoom: 0.8 }}
    >
      <Header />

      <main>
        {/* HERO SECTION */}
        <section className="relative min-h-[90vh] bg-electric-blue flex flex-col justify-center overflow-hidden border-b-8 border-deep-black">
          <div className="absolute inset-0 pointer-events-none flex flex-col justify-center items-center select-none opacity-20">
            <div className="text-[20vw] font-display leading-none text-deep-black whitespace-nowrap -rotate-3">IDENTITY</div>
            <div className="text-[25vw] font-display leading-none text-neon-lime whitespace-nowrap rotate-2">EVERYDAY</div>
          </div>

          <div className="relative z-10 max-w-[1440px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 items-center gap-12 py-20">
            <div className="order-2 lg:order-1">
              <h1 className="text-6xl md:text-[90px] font-display text-neon-lime leading-[0.85] tracking-tighter uppercase mb-8 transition-transform hover:skew-x-2 duration-500">
                YOUR STORY.<br />YOUR VISION.<br />YOUR MERCH.
              </h1>
              <p className="text-2xl font-black bg-deep-black text-white px-6 py-4 brutalist-border inline-block mb-10 transform -rotate-1">
                FROM IDENTITY TO EVERYDAY.
              </p>
            </div>

            <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
              <Magnetic strength={0.2}>
                <div className="relative w-full max-w-lg">
                  <div className="absolute -inset-4 bg-hot-pink brutalist-border transform rotate-3"></div>
                  <img
                    alt="Focal Model"
                    className="relative w-full brutalist-border grayscale hover:grayscale-0 transition-all duration-700 object-cover h-[600px] shadow-[15px_15px_0px_0px_rgba(0,0,0,1)] hover:scale-[1.02]"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQxBDGadevcsQORuZDVlpQE7VowJtMAv9En16woywKqf4XCPwNNL20FL97iQOlMyo5qNBv2hmkUmsS62zC47581XeCpbIzMVQzm_adyZZYOjl5F5qjpsrNI6mBdlSdt-6r-DxHU06iQjiEWR08z1yZ0PM4Zrpf_ZT09bjfsmIE4LIW9SMnz1_pyiL0vvxk-7hiCT5AEWb2OD5hQlcmqta_fKHB_HEj2IG6dLdf860Zn1PrcHS0VEHrKzVlxQDByTHEWpDO32OEO_HG"
                  />
                  <div className="absolute -bottom-6 -left-6 bg-deep-black text-neon-lime p-4 font-display text-xl brutalist-border">
                    EST. 2024
                  </div>
                </div>
              </Magnetic>
            </div>
          </div>
        </section>

        {/* MARQUEE */}
        <div className="bg-neon-lime border-b-4 border-deep-black py-4 overflow-hidden flex whitespace-nowrap">
          <div className="animate-marquee flex gap-12 items-center">
            {Array(10).fill(null).map((_, i) => (
              <React.Fragment key={i}>
                <span className="text-4xl font-display uppercase">SCREEN PRINTING</span>
                <span className="text-4xl text-electric-blue">•</span>
                <span className="text-4xl font-display uppercase">EMBROIDERY</span>
                <span className="text-4xl text-electric-blue">•</span>
                <span className="text-4xl font-display uppercase">CUSTOM DESIGN</span>
                <span className="text-4xl text-electric-blue">•</span>
                <span className="text-4xl font-display uppercase">WORLDWIDE SHIPPING</span>
                <span className="text-4xl text-electric-blue">•</span>
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* ASSET STATEMENT */}
        <section className="bg-deep-black py-32 px-6 overflow-hidden border-b-8 border-deep-black">
          <div className="max-w-[1440px] mx-auto text-center">
            <Magnetic strength={0.3}>
              <p className="text-4xl md:text-7xl font-display text-white leading-tight uppercase tracking-tighter hover:text-neon-lime transition-colors duration-500 cursor-default">
                MORE THAN PRODUCTS. <br />
                <span className="text-neon-lime">WE BUILD THE ASSETS</span><br />
                THAT DEFINE YOUR LEGACY.
              </p>
            </Magnetic>
          </div>
        </section>

        {/* POPULAR CATEGORIES */}
        <section className="bg-stark-white py-32 px-6 border-b-8 border-deep-black">
          <div className="max-w-[1440px] mx-auto">
            <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
              <div>
                <span className="text-xl font-black uppercase tracking-[0.3em] bg-deep-black text-stark-white px-4 py-1 mb-6 inline-block">Catalog 2024</span>
                <h2 className="text-7xl md:text-[10vw] font-display text-deep-black uppercase leading-[0.75] tracking-tighter">
                  POPULAR <br /><span className="text-electric-blue">CATEGORIES</span>
                </h2>
              </div>
              <div className="text-right hidden lg:block">
                <p className="text-xl font-bold max-w-[300px] uppercase leading-snug">
                  Curated selections of high-impact brand assets for every surface and scenario.
                </p>
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
                    <div className="absolute top-4 right-4 bg-neon-lime text-deep-black font-display text-xs px-2 py-1 brutalist-border-sm opacity-0 group-hover/card:opacity-100 transition-opacity translate-y-4 group-hover/card:translate-y-0 duration-300">
                      NEW ARRIVALS
                    </div>
                  </div>
                </Magnetic>
              ))}
            </div>
          </div>
        </section>

        {/* TAILORED SOLUTIONS SLIDER */}
        <SolutionsSlider />

        {/* WORK PROCESS - VERTICAL ZIG ZAG */}
        <section className="bg-neon-lime py-32 border-b-8 border-deep-black overflow-hidden relative">
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
                <h2 className="text-7xl md:text-9xl font-display text-deep-black uppercase leading-[0.8] tracking-tighter">
                  HOW WE <br /><span className="text-white">OPERATE</span>
                </h2>
                <div className="absolute -left-8 top-1/2 w-2 h-32 bg-deep-black -translate-y-1/2 hidden lg:block"></div>
              </div>
              <div className="flex flex-col items-end gap-2 text-right">
                <div className="bg-deep-black text-neon-lime px-6 py-4 brutalist-border font-display text-xl uppercase -rotate-2 hover:rotate-0 transition-transform duration-300">
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

        {/* PROMISE SECTION */}
        <section className="bg-stark-white py-24 px-6 border-b-8 border-deep-black">
          <div className="max-w-[1440px] mx-auto">
            <div className="mb-16">
              <h2 className="text-6xl md:text-8xl font-display text-deep-black uppercase leading-none tracking-tighter">
                WHAT WE <span className="text-electric-blue">PROMISE</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {PROMISES.map((item, i) => (
                <Magnetic key={i} strength={0.1}>
                  <div className={`bg-white p-8 brutalist-border brutalist-shadow group transition-colors duration-500 h-full ${item.hoverColor}`}>
                    <span className="material-symbols-outlined text-5xl mb-6">{item.icon}</span>
                    <h3 className="text-3xl font-display mb-4 uppercase">{item.title}</h3>
                    <p className="font-bold text-lg">{item.description}</p>
                  </div>
                </Magnetic>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-deep-black text-white py-24 border-t-8 border-deep-black">
        <div className="max-w-[1440px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
            <div className="lg:col-span-1">
              <div className="flex items-center gap-2 mb-8">
                <div className="bg-neon-lime p-1 brutalist-border">
                  <svg className="w-8 h-8 text-deep-black" fill="currentColor" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                    <path d="M44 4H30.6666V17.3334H17.3334V30.6666H4V44H44V4Z"></path>
                  </svg>
                </div>
                <h2 className="text-3xl font-display text-neon-lime tracking-tighter uppercase leading-none">MERCH.CORP</h2>
              </div>
              <p className="text-xl font-bold text-deep-black/60 mb-10 uppercase">The future of branded apparel. <br />From identity to everyday.</p>
              <Magnetic strength={0.3}>
                <button className="w-full bg-electric-blue text-deep-black px-8 py-6 text-xl font-display brutalist-border brutalist-shadow-lime uppercase hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all">
                  Start Your Project
                </button>
              </Magnetic>
            </div>

            <div>
              <h4 className="font-display text-neon-lime text-xl mb-8 uppercase tracking-widest border-b-2 border-neon-lime pb-2 inline-block">Explore</h4>
              <ul className="flex flex-col gap-4 text-lg font-bold">
                <li><a className="hover:text-neon-lime transition-colors" href="#">About Us</a></li>
                <li><a className="hover:text-neon-lime transition-colors" href="#">Blog / News</a></li>
                <li><a className="hover:text-neon-lime transition-colors" href="#">Works Portfolio</a></li>
                <li><a className="hover:text-neon-lime transition-colors" href="#">Bulk Orders</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-display text-neon-lime text-xl mb-8 uppercase tracking-widest border-b-2 border-neon-lime pb-2 inline-block">Account</h4>
              <ul className="flex flex-col gap-4 text-lg font-bold text-deep-black/80">
                <li><a className="hover:text-white" href="#">Email Preferences</a></li>
                <li><a className="hover:text-white" href="#">Order History</a></li>
                <li><a className="hover:text-white" href="#">Invoices & Receipts</a></li>
                <li><a className="hover:text-white" href="#">Profile Settings</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-display text-neon-lime text-xl mb-8 uppercase tracking-widest border-b-2 border-neon-lime pb-2 inline-block">Contact</h4>
              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-4 text-lg font-bold">
                  <span className="material-symbols-outlined text-neon-lime">call</span>
                  <span>+1 (888) MERCH-HQ</span>
                </div>
                <div className="flex gap-4">
                  <Magnetic strength={0.5}>
                    <div className="w-16 h-16 bg-electric-blue brutalist-border flex items-center justify-center hover:bg-neon-lime hover:text-deep-black transition-colors cursor-pointer brutalist-shadow-lime">
                      <span className="material-symbols-outlined">share</span>
                    </div>
                  </Magnetic>
                  <Magnetic strength={0.5}>
                    <div className="w-16 h-16 bg-electric-blue brutalist-border flex items-center justify-center hover:bg-neon-lime hover:text-deep-black transition-colors cursor-pointer brutalist-shadow-lime">
                      <span className="material-symbols-outlined">mail</span>
                    </div>
                  </Magnetic>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-12 border-t-4 border-white/10 flex flex-col md:flex-row justify-between items-center gap-8">
            <p className="text-xl font-display text-white/40 uppercase">© 2024 MERCH.CORP SYSTEM v5.0</p>
            <div className="flex gap-12 text-white/40">
              <span className="material-symbols-outlined text-4xl">payments</span>
              <span className="material-symbols-outlined text-4xl">verified</span>
              <span className="material-symbols-outlined text-4xl">encrypted</span>
            </div>
          </div>
        </div>
      </footer>

      {/* FLOATING ACTION BUTTON */}
      <div className="fixed bottom-10 right-10 z-[110]">
        <Magnetic strength={0.4}>
          <button
            onClick={() => setIsLabOpen(true)}
            className="bg-electric-blue text-white p-6 brutalist-border brutalist-shadow hover:translate-x-2 hover:translate-y-2 hover:shadow-none transition-all flex items-center gap-4"
          >
            <span className="material-symbols-outlined text-4xl">draw</span>
            <span className="font-display text-2xl uppercase hidden sm:block">Start your project</span>
          </button>
        </Magnetic>
      </div>

      <LabModal isOpen={isLabOpen} onClose={() => setIsLabOpen(false)} />
    </div>
  );
};

export default App;