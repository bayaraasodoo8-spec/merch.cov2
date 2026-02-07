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
            {/* HERO SECTION */}
            <section className="relative min-h-[80vh] flex flex-col items-center justify-center overflow-hidden border-b-8 border-deep-black">
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
                        <h1 className="text-8xl md:text-[150px] font-display uppercase tracking-tighter leading-[0.8] mb-6 drop-shadow-2xl">
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
                            <span className="text-xl font-black uppercase tracking-[0.3em] text-brand-blue mb-6 block">Our Mission</span>
                            <h2 className="text-5xl md:text-7xl lg:text-8xl font-display uppercase leading-[0.85] tracking-tighter mb-8">
                                We Don't Just Make Merch. <br /><span className="text-brand-yellow stroke-text-black">We Build Legacies.</span>
                            </h2>
                            <p className="text-xl md:text-2xl text-stark-white/70 max-w-2xl mx-auto leading-relaxed font-light">
                                Merch.Corp was founded on a simple principle: <strong className="text-white font-bold">Your brand deserves better.</strong> We combine high-fashion aesthetics with industrial-grade production to create merchandise that people actually want to wear.
                            </p>
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

            {/* STATS & SKILLS GAP */}
            <section className="py-32 px-6 bg-deep-black border-t-8 border-deep-black relative">
                <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 lg:gap-32">
                    {/* Skills */}
                    <div className="flex flex-col gap-16">
                        <div>
                            <h2 className="text-5xl md:text-7xl font-display uppercase tracking-tighter mb-8 text-white">Our Expertise</h2>
                            <p className="text-xl text-stark-white/60 font-bold max-w-md leading-relaxed">
                                Decades of refined craftsmanship meets modern technology.
                            </p>
                        </div>

                        <div className="flex flex-col gap-10">
                            {[
                                { label: 'Design & Strategy', value: 95 },
                                { label: 'Textile Engineering', value: 90 },
                                { label: 'Global Logistics', value: 85 },
                                { label: 'Brand Integration', value: 98 },
                            ].map((skill, i) => (
                                <div key={i} className="flex flex-col gap-3 group">
                                    <div className="flex justify-between items-end">
                                        <span className="font-display text-2xl md:text-3xl uppercase tracking-tight">{skill.label}</span>
                                        <span className="font-display text-2xl text-brand-yellow">{skill.value}%</span>
                                    </div>
                                    <div className="h-4 bg-white/5 brutalist-border-sm overflow-hidden relative">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: `${skill.value}%` }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 1.2, ease: 'circOut', delay: 0.2 }}
                                            className="h-full bg-brand-yellow absolute top-0 left-0"
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 gap-6 md:gap-8 content-center">
                        {[
                            { label: 'Years Active', value: '12+' },
                            { label: 'Global Brands', value: '450+' },
                            { label: 'Items Shipped', value: '2.5M+' },
                            { label: 'Design Awards', value: '18' },
                        ].map((stat, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ scale: 1.05, rotate: i % 2 === 0 ? 2 : -2 }}
                                className="bg-white/5 p-8 md:p-12 brutalist-border hover:bg-brand-blue hover:border-brand-blue transition-colors flex flex-col justify-center text-center group cursor-default aspect-square"
                            >
                                <span className="text-6xl md:text-7xl lg:text-8xl font-display text-brand-yellow mb-2 group-hover:text-white transition-colors">
                                    {stat.value}
                                </span>
                                <span className="text-xs md:text-sm font-black uppercase tracking-[0.2em] text-stark-white/60 group-hover:text-white transition-colors">
                                    {stat.label}
                                </span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* VALUES SECTION - REFINED */}
            <section className="py-32 px-6 bg-stark-white text-deep-black border-y-8 border-deep-black overflow-hidden">
                <div className="max-w-[1440px] mx-auto">
                    <div className="flex flex-col lg:flex-row items-end justify-between mb-24 gap-12">
                        <div className="relative">
                            <span className="text-xl font-black uppercase tracking-[0.3em] bg-deep-black text-stark-white px-4 py-1 mb-8 inline-block">Core Values</span>
                            <h2 className="text-6xl md:text-9xl font-display uppercase leading-[0.85] tracking-tighter">
                                WHAT WE <br /><span className="text-brand-blue">STAND FOR</span>
                            </h2>
                        </div>
                        <div className="text-right max-w-md">
                            <p className="text-xl md:text-2xl font-bold uppercase leading-tight opacity-70">
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
                                transition={{ delay: i * 0.1, duration: 0.6 }}
                                viewport={{ once: true }}
                                className={`
                                    p-10 md:p-12 brutalist-border relative overflow-hidden group min-h-[300px] flex flex-col justify-between
                                    ${item.color || 'bg-white'} 
                                    ${item.textColor || 'text-deep-black'}
                                    ${item.span || ''}
                                    ${item.border || ''}
                                `}
                            >
                                <div className="relative z-10">
                                    <span className="material-symbols-outlined text-5xl md:text-6xl mb-8 block">{item.icon}</span>
                                    <h3 className="text-3xl md:text-4xl font-display uppercase mb-4 tracking-tighter">{item.title}</h3>
                                    <p className="text-base md:text-lg font-bold opacity-80 leading-snug uppercase">{item.desc}</p>
                                </div>

                                {/* Hover Icon Bg */}
                                <span className="absolute -bottom-10 -right-10 material-symbols-outlined text-[200px] opacity-5 pointer-events-none group-hover:rotate-12 group-hover:scale-110 transition-transform duration-700">
                                    {item.icon}
                                </span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* PARTNERS GRID SECTION */}
            <section className="py-24 px-6 bg-white border-y-8 border-deep-black">
                <div className="max-w-[1440px] mx-auto">
                    <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
                        <div>
                            <span className="text-xl font-black uppercase tracking-[0.3em] text-brand-blue mb-4 block">Collborations</span>
                            <h2 className="text-5xl md:text-7xl font-display uppercase tracking-tighter text-deep-black">
                                Our Valuable <br /> Partners
                            </h2>
                        </div>
                        <div className="flex gap-4">
                            <button onClick={onContact} className="bg-brand-blue text-white px-6 py-3 font-bold uppercase tracking-widest hover:bg-deep-black transition-colors brutalist-border-sm">
                                Get Started
                            </button>
                            <button className="bg-transparent text-deep-black border-2 border-deep-black px-6 py-3 font-bold uppercase tracking-widest hover:bg-deep-black hover:text-white transition-colors">
                                View All Partners
                            </button>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-deep-black border-2 border-deep-black">
                        {[
                            "W", "Spotify", "Discord", "Netflix",
                            "GitHub", "Confluence", "Vimeo", "Figma",
                            "Slack", "Webflow", "Atlassian", "Linear"
                        ].map((partner, i) => (
                            <div key={i} className="bg-white p-12 flex items-center justify-center aspect-[3/2] hover:bg-brand-yellow/10 transition-colors group relative overflow-hidden">
                                <span className={`text-2xl md:text-3xl font-display uppercase tracking-tighter text-deep-black/40 group-hover:text-deep-black transition-colors z-10 ${i % 3 === 0 ? 'font-serif italic' : ''}`}>
                                    {partner}
                                </span>
                                {/* Hover Effect */}
                                <div className="absolute inset-0 bg-brand-yellow/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section className="relative py-32 md:py-48 px-6 overflow-hidden border-y-8 border-deep-black bg-brand-yellow">
                <div className="max-w-[1440px] mx-auto text-center relative z-10">
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-7xl md:text-[10vw] font-display uppercase leading-[0.8] tracking-tighter text-deep-black mb-12">
                            Ready To <br /> <span className="text-white">Make It Real?</span>
                        </h2>

                        <Magnetic strength={0.4}>
                            <button
                                onClick={onContact}
                                className="bg-deep-black text-white px-12 py-8 text-2xl md:text-4xl font-display brutalist-border brutalist-shadow-white uppercase hover:translate-x-2 hover:translate-y-2 hover:shadow-none transition-all inline-flex items-center gap-4"
                            >
                                Get Started
                                <span className="material-symbols-outlined text-4xl">arrow_forward</span>
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
