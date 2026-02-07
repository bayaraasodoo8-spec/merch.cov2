import React from 'react';
import Magnetic from './Magnetic';
import { motion } from 'framer-motion';

interface AboutUsProps {
    onNavigate: (page: 'home' | 'about') => void;
    onContact: () => void;
}

const AboutUs: React.FC<AboutUsProps> = ({ onNavigate, onContact }) => {
    return (
        <div className="bg-deep-black text-white selection:bg-brand-yellow selection:text-deep-black">
            {/* HERO SECTION */}
            <section className="relative h-[60vh] flex flex-col items-center justify-center overflow-hidden border-b-8 border-deep-black">
                <div className="absolute inset-0 z-0 opacity-40">
                    <img
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCRhmFf_-vZLhO3T3PvH9wxpb5AWYmSqkBHdMZWBskDQHGxdcUuYargz01cHCxXh5fuHyLCp9jqGYcTrzeJf8zP7j6fzsQ3d3j-IfNkIDXPBIhlQJspmNFl-kGk_lHymKeei4hS9FtNbYq6NXckBmJkLhgVKtOQ1cCMQKdTLiqk42nnVg-0Nt6-QAh2VFmRLQKoL9Xu2nOosOxdysJmeJrAtgLSQ3jR3JxBdbNnW5fKBOs389yOv4toFbACkx0f1vRNPsgbAZH78Ax1"
                        alt="Hero Background"
                        className="w-full h-full object-cover grayscale"
                    />
                    <div className="absolute inset-0 bg-deep-black/60"></div>
                </div>

                <div className="relative z-10 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-7xl md:text-[120px] font-display uppercase tracking-tighter leading-none mb-4"
                    >
                        About Us
                    </motion.h1>
                    <div className="flex items-center justify-center gap-4 text-xl font-bold uppercase tracking-widest text-brand-yellow">
                        <span
                            className="opacity-60 hover:opacity-100 cursor-pointer transition-opacity underline decoration-brand-yellow decoration-2 underline-offset-8"
                            onClick={() => onNavigate('home')}
                        >
                            Home
                        </span>
                        <span>/</span>
                        <span>About Us</span>
                    </div>
                </div>
            </section>

            {/* WE ALWAYS MAKE THE BEST */}
            <section className="py-32 px-6 bg-deep-black">
                <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <div className="relative">
                        <div className="absolute -inset-4 bg-brand-blue brutalist-border transform -rotate-3"></div>
                        <img
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQxBDGadevcsQORuZDVlpQE7VowJtMAv9En16woywKqf4XCPwNNL20FL97iQOlMyo5qNBv2hmkUmsS62zC47581XeCpbIzMVQzm_adyZZYOjl5F5qjpsrNI6mBdlSdt-6r-DxHU06iQjiEWR08z1yZ0PM4Zrpf_ZT09bjfsmIE4LIW9SMnz1_pyiL0vvxk-7hiCT5AEWb2OD5hQlcmqta_fKHB_HEj2IG6dLdf860Zn1PrcHS0VEHrKzVlxQDByTHEWpDO32OEO_HG"
                            alt="Making the best"
                            className="relative w-full brutalist-border grayscale hover:grayscale-0 transition-all duration-700 aspect-[4/5] object-cover"
                        />
                        <div className="absolute -bottom-10 -right-10 bg-brand-yellow text-deep-black p-6 brutalist-border font-display text-4xl uppercase hidden md:block">
                            QUALITY FIRST
                        </div>
                    </div>

                    <div className="flex flex-col gap-8">
                        <div>
                            <span className="text-xl font-black uppercase tracking-[0.3em] text-brand-blue mb-4 block">About Us</span>
                            <h2 className="text-6xl md:text-8xl font-display uppercase leading-[0.85] tracking-tighter mb-8">
                                We Always <br /><span className="text-brand-yellow">Make The Best</span>
                            </h2>
                            <p className="text-xl text-stark-white/70 max-w-xl leading-relaxed">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id odio placerat, convallis neque quis, interdum leo. Nam hendrerit urna nibh, eget sagittis erat varius non. Duis ut varius augue. Donec tincidunt iaculis ligula, et maximus elit tincidunt eu.
                            </p>
                        </div>

                        <Magnetic strength={0.3}>
                            <button
                                onClick={onContact}
                                className="bg-white text-deep-black px-10 py-5 text-xl font-display brutalist-border brutalist-shadow-blue uppercase hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all inline-block w-fit"
                            >
                                Contact Us
                            </button>
                        </Magnetic>
                    </div>
                </div>
            </section>

            {/* OUR SKILLS & STATS */}
            <section className="py-32 px-6 bg-deep-black border-t-8 border-deep-black">
                <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-32">
                    <div className="flex flex-col gap-12">
                        <div>
                            <h2 className="text-6xl font-display uppercase tracking-tighter mb-6">Our Skills</h2>
                            <p className="text-lg text-stark-white/60 uppercase font-bold tracking-wider">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                            </p>
                        </div>

                        <div className="flex flex-col gap-8">
                            {[
                                { label: 'Video Editing', value: 85 },
                                { label: 'Videography', value: 90 },
                                { label: 'Branding', value: 77 },
                            ].map((skill, i) => (
                                <div key={i} className="flex flex-col gap-4">
                                    <div className="flex justify-between items-end">
                                        <span className="font-display text-2xl uppercase">{skill.label}</span>
                                        <span className="font-display text-xl text-brand-yellow">{skill.value}%</span>
                                    </div>
                                    <div className="h-4 bg-white/10 brutalist-border-sm overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: `${skill.value}%` }}
                                            transition={{ duration: 1, ease: 'easeOut' }}
                                            className="h-full bg-brand-yellow"
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-8">
                        {[
                            { label: 'Year Of Experience', value: '20+' },
                            { label: 'Project Done', value: '1,000+' },
                            { label: 'Satisfied Client', value: '300+' },
                            { label: 'Certified Award', value: '64' },
                        ].map((stat, i) => (
                            <div key={i} className="bg-white/5 p-10 brutalist-border hover:bg-white/10 transition-colors flex flex-col justify-center text-center group">
                                <span className="text-6xl md:text-8xl font-display text-brand-yellow mb-4 group-hover:scale-110 transition-transform">
                                    {stat.value}
                                </span>
                                <span className="text-sm font-black uppercase tracking-widest text-stark-white/60">
                                    {stat.label}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* OUR PROMISES - REDESIGNED */}
            <section className="py-32 px-6 bg-stark-white text-deep-black border-y-8 border-deep-black overflow-hidden">
                <div className="max-w-[1440px] mx-auto">
                    <div className="flex flex-col lg:flex-row items-end justify-between mb-20 gap-8">
                        <div className="max-w-xl">
                            <span className="text-xl font-black uppercase tracking-[0.3em] bg-deep-black text-stark-white px-4 py-1 mb-6 inline-block">Our Values</span>
                            <h2 className="text-6xl md:text-8xl font-display uppercase leading-[0.85] tracking-tighter">
                                WHAT WE <br /><span className="text-brand-blue">PROMISE</span>
                            </h2>
                        </div>
                        <div className="text-right">
                            <p className="text-xl font-bold max-w-[400px] uppercase leading-snug opacity-60">
                                Built on a foundation of integrity, quality, and relentless innovation for your brand legacy.
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {[
                            {
                                title: 'Quality',
                                desc: 'Uncompromising standards in every stitch and print, ensuring your brand longevity.',
                                icon: 'verified',
                                color: 'bg-brand-yellow',
                                span: 'lg:col-span-2'
                            },
                            {
                                title: 'Ethics',
                                desc: 'Strict adherence to professional ethics and fair manufacturing.',
                                icon: 'gavel',
                                color: 'bg-stark-white',
                                border: 'border-2 border-deep-black'
                            },
                            {
                                title: 'Innovation',
                                desc: 'Cutting-edge production techniques and sustainable materials.',
                                icon: 'lightbulb',
                                color: 'bg-brand-pink',
                                textColor: 'text-white'
                            },
                            {
                                title: 'Customer',
                                desc: 'Your vision leads our process. Dedicated support from concept to global delivery.',
                                icon: 'group',
                                color: 'bg-brand-blue',
                                textColor: 'text-white',
                                span: 'lg:col-span-2'
                            },
                            {
                                title: 'Reliable',
                                desc: 'On-time delivery and consistent results every single time.',
                                icon: 'schedule',
                                color: 'bg-deep-black',
                                textColor: 'text-white',
                                span: 'lg:col-span-2'
                            },
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                viewport={{ once: true }}
                                className={`
                                    p-10 brutalist-border relative overflow-hidden group
                                    ${item.color || 'bg-white'} 
                                    ${item.textColor || 'text-deep-black'}
                                    ${item.span || ''}
                                    ${item.border || ''}
                                `}
                            >
                                <div className="relative z-10 flex flex-col justify-between h-full">
                                    <span className="material-symbols-outlined text-6xl mb-12 group-hover:scale-125 transition-transform duration-500 origin-left">
                                        {item.icon}
                                    </span>
                                    <div>
                                        <h3 className="text-4xl font-display uppercase mb-4 tracking-tighter">{item.title}</h3>
                                        <p className="text-lg font-bold opacity-80 leading-snug uppercase">{item.desc}</p>
                                    </div>
                                </div>

                                {/* Background Accent Icon */}
                                <span className="absolute -bottom-4 -right-4 material-symbols-outlined text-[150px] opacity-10 pointer-events-none group-hover:rotate-12 transition-transform duration-700">
                                    {item.icon}
                                </span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* HIRE US NOW */}
            <section className="relative py-48 px-6 overflow-hidden border-y-8 border-deep-black">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuAsmT1GVrjlmu0gnevL0fIIr91TdmZJxpSErxbzKW-kvKf1PisJ5dkAK1YJ9ktmuiEI-haVbMdJLnkdjpo1Zf7j2RXCGbC0vxKzAa-ABavdwxvLQx3yBPaRhMos2qU41wStxA0qGkHtw8d_b-aIyvAGhIEL8ypPWZnsT2T3cbsZVbhhxFTxcchI32IawQhaQMOYdvAAMWdBxWFVv9R4G2CXAL89Ea2RCKaGs1A88xjGECQP2SQ4nJoIYzpYA7s2NpKnrOYuXfO9YxhB"
                        alt="Ready to shoot"
                        className="w-full h-full object-cover grayscale opacity-30"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-deep-black via-deep-black/80 to-transparent"></div>
                </div>

                <div className="relative z-10 max-w-[1440px] mx-auto text-center md:text-left">
                    <span className="text-xl font-black uppercase tracking-[0.4em] text-brand-pink mb-6 block font-display">Hire Us Now</span>
                    <h2 className="text-6xl md:text-[90px] font-display uppercase leading-[0.85] tracking-tighter mb-12 max-w-4xl">
                        We Are Always <br /><span className="text-brand-blue">Ready To Take</span> <br />A Perfect Shot
                    </h2>

                    <Magnetic strength={0.4}>
                        <button
                            onClick={onContact}
                            className="bg-brand-yellow text-deep-black px-12 py-6 text-2xl font-display brutalist-border brutalist-shadow-white uppercase hover:translate-x-2 hover:translate-y-2 hover:shadow-none transition-all"
                        >
                            Get Started
                        </button>
                    </Magnetic>
                </div>
            </section>
        </div>
    );
};

export default AboutUs;
