import React, { useEffect } from 'react';
import Magnetic from './Magnetic';
import { motion, useScroll, useTransform } from 'framer-motion';

interface AboutUsProps {
    onNavigate: (page: 'home' | 'about') => void;
    onContact: () => void;
}

const AboutUs: React.FC<AboutUsProps> = ({ onNavigate, onContact }) => {
    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const { scrollYProgress } = useScroll();
    const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

    return (
        <div className="bg-deep-black text-white selection:bg-brand-yellow selection:text-deep-black min-h-screen">
            {/* HERO SECTION - Refined v.7.0 */}
            <section className="relative min-h-[80dvh] flex flex-col items-center justify-center overflow-hidden border-b-[1px] border-white/5">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCRhmFf_-vZLhO3T3PvH9wxpb5AWYmSqkBHdMZWBskDQHGxdcUuYargz01cHCxXh5fuHyLCp9jqGYcTrzeJf8zP7j6fzsQ3d3j-IfNkIDXPBIhlQJspmNFl-kGk_lHymKeei4hS9FtNbYq6NXckBmJkLhgVKtOQ1cCMQKdTLiqk42nnVg-0Nt6-QAh2VFmRLQKoL9Xu2nOosOxdysJmeJrAtgLSQ3jR3JxBdbNnW5fKBOs389yOv4toFbACkx0f1vRNPsgbAZH78Ax1"
                        alt="Hero Background"
                        className="w-full h-full object-cover grayscale opacity-40"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-deep-black/20 via-deep-black/40 to-deep-black"></div>
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150"></div>
                </div>

                <div className="relative z-10 text-center px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "circOut" }}
                    >
                        <h1 className="text-6xl md:text-[100px] font-display uppercase tracking-tighter leading-[0.85] mb-6 drop-shadow-2xl">
                            About <span className="text-brand-yellow">Us</span>
                        </h1>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="flex items-center justify-center gap-6 text-xl font-bold uppercase tracking-widest"
                    >
                        <Magnetic strength={0.2}>
                            <button
                                onClick={() => onNavigate('home')}
                                className="text-white/60 hover:text-brand-yellow transition-colors underline decoration-2 underline-offset-8 decoration-transparent hover:decoration-brand-yellow"
                            >
                                Home
                            </button>
                        </Magnetic>
                        <span className="text-brand-yellow">/</span>
                        <span className="text-white">About Us</span>
                    </motion.div>
                </div>
            </section>

            {/* MISSION SECTION */}
            <section className="py-24 md:py-32 px-6 bg-deep-black overflow-hidden relative">
                {/* Background Pattern */}
                <div className="absolute inset-0 pointer-events-none opacity-10">
                    <div className="w-full h-full" style={{ backgroundImage: 'radial-gradient(#333 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
                </div>

                <div className="max-w-[1440px] mx-auto flex flex-col items-center text-center relative z-10">
                    <div className="flex flex-col gap-8 md:gap-10 max-w-4xl mx-auto">
                        <div>
                            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-brand-blue mb-6 block">Our Mission</span>
                            <h2 className="text-4xl md:text-6xl font-display uppercase leading-[0.9] tracking-tighter mb-8">
                                We Don't Just Make Merch. <br /><span className="text-brand-yellow">We Build Legacies.</span>
                            </h2>
                        </div>

                        <div className="flex gap-4 justify-center">
                            <Magnetic strength={0.3}>
                                <button
                                    onClick={onContact}
                                    className="bg-white text-deep-black px-8 py-4 md:px-10 md:py-5 text-xl font-display brutalist-border brutalist-shadow-blue uppercase hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all inline-block w-fit"
                                >
                                    Start a Project
                                </button>
                            </Magnetic>
                        </div>
                    </div>
                </div>
            </section>
            {/* VALUES SECTION - Standard v.7.0 */}
            <section className="py-32 px-6 bg-white text-deep-black border-y-[1px] border-deep-black/10 overflow-hidden">
                <div className="max-w-[1440px] mx-auto">
                    <div className="flex flex-col lg:flex-row items-end justify-between mb-24 gap-12">
                        <div className="relative">
                            <span className="text-[10px] font-bold uppercase tracking-[0.4em] bg-brand-blue text-white px-4 py-2 mb-8 inline-block">Core Values</span>
                            <h2 className="text-4xl md:text-7xl font-display uppercase leading-[0.9] tracking-tighter">
                                WHAT WE <br /><span className="text-brand-pink">STAND FOR</span>
                            </h2>
                        </div>
                        <div className="text-right max-w-md">
                            <p className="text-xl md:text-2xl font-body font-medium uppercase leading-tight opacity-70 italic">
                                Uncompromising standards. Ethical practices. Relentless innovation.
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            {
                                title: 'Precision',
                                desc: 'Every stitch counts. We obsess over details others ignore.',
                                icon: 'precision_manufacturing',
                                color: 'bg-brand-yellow',
                                span: 'lg:col-span-2'
                            },
                            {
                                title: 'Integrity',
                                desc: 'Honest pricing, ethical sourcing, and transparency.',
                                icon: 'handshake',
                                color: 'bg-white',
                                border: 'border-2 border-deep-black'
                            },
                            {
                                title: 'Speed',
                                desc: 'Rapid prototyping to global distribution at scale.',
                                icon: 'rocket_launch',
                                color: 'bg-brand-pink',
                                textColor: 'text-white'
                            },
                            {
                                title: 'Partnership',
                                desc: 'We are not just vendors; we are extensions of your brand team, dedicated to your growth.',
                                icon: 'groups',
                                color: 'bg-brand-blue',
                                textColor: 'text-white',
                                span: 'lg:col-span-2'
                            },
                            {
                                title: 'Innovation',
                                desc: 'Constantly exploring new materials, cuts, and print technologies.',
                                icon: 'lightbulb',
                                color: 'bg-deep-black',
                                textColor: 'text-white',
                                span: 'lg:col-span-2'
                            },
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1, duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
                                viewport={{ once: true }}
                                className={`
                                    p-12 md:p-16 border-[1px] border-deep-black/10 relative overflow-hidden group min-h-[400px] flex flex-col justify-between
                                    ${item.color || 'bg-white'} 
                                    ${item.textColor || 'text-deep-black'}
                                    ${item.span || ''}
                                    shadow-2xl hover:shadow-none transition-all duration-500
                                `}
                            >
                                <div className="relative z-10">
                                    <h3 className="text-3xl md:text-4xl font-display uppercase mb-4 tracking-tighter leading-tight">{item.title}</h3>
                                    <p className="text-base md:text-lg font-body font-medium opacity-80 leading-snug italic">"{item.desc}"</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* PARTNERS GRID SECTION - Unified Design */}
            <section className="py-24 px-6 bg-white border-y-[1px] border-deep-black/10">
                <div className="max-w-[1440px] mx-auto">
                    <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
                        <div>
                            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-brand-blue mb-4 block">Collaborations</span>
                            <h2 className="text-5xl md:text-7xl font-display uppercase tracking-tighter text-deep-black leading-none">
                                OUR VALUABLE <br /><span className="text-brand-pink">PARTNERS</span>
                            </h2>
                        </div>
                        <div className="flex gap-4">
                            <button onClick={onContact} className="bg-brand-blue text-white px-8 py-3 font-bold uppercase tracking-widest hover:bg-deep-black transition-all border-[1px] border-brand-blue text-[11px]">
                                Get Started
                            </button>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 border-[1px] border-deep-black/10">
                        {[
                            "W", "Spotify", "Discord", "Netflix",
                            "GitHub", "Confluence", "Vimeo", "Figma",
                            "Slack", "Webflow", "Atlassian", "Linear"
                        ].map((partner, i) => (
                            <div key={i} className="bg-white p-12 flex items-center justify-center aspect-[3/2] border-[1px] border-deep-black/5 hover:bg-brand-yellow/10 transition-colors group relative overflow-hidden">
                                <span className={`text-xl font-display uppercase tracking-tight text-deep-black/20 group-hover:text-deep-black group-hover:scale-110 transition-all z-10 ${i % 3 === 0 ? 'font-elegant italic' : ''}`}>
                                    {partner}
                                </span>
                                <div className="absolute inset-0 bg-brand-yellow/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CALL TO ACTION - Standard v.7.0 */}
            <section className="relative py-32 md:py-48 px-6 overflow-hidden border-y-[1px] border-deep-black/10 bg-brand-yellow">
                <div className="max-w-[1440px] mx-auto text-center relative z-10">
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
                    >
                        <h2 className="text-7xl md:text-[10vw] font-display uppercase leading-[0.8] tracking-tighter text-deep-black mb-16">
                            Ready To <br /> <span className="text-white">Make It Real?</span>
                        </h2>

                        <Magnetic strength={0.4}>
                            <button
                                onClick={onContact}
                                className="bg-deep-black text-white px-16 py-8 text-xl font-bold border border-deep-black hover:bg-transparent hover:text-deep-black uppercase transition-all flex items-center gap-6 mx-auto tracking-widest"
                            >
                                Get Started
                                <span className="material-symbols-outlined text-3xl">arrow_forward</span>
                            </button>
                        </Magnetic>
                    </motion.div>
                </div>

                {/* Decorative background lines */}
                <div className="absolute inset-0 pointer-events-none opacity-10">
                    <div className="w-full h-full" style={{ backgroundImage: 'repeating-linear-gradient(45deg, #000 0, #000 1px, transparent 0, transparent 50%)', backgroundSize: '40px 40px' }}></div>
                </div>
            </section>
        </div>
    );
};

export default AboutUs;
