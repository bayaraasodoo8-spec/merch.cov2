import React from 'react';
import Magnetic from './Magnetic';
import { motion } from 'framer-motion';
import logo from '../assets/logo.svg';

interface FooterProps {
    onNavigate: (page: 'home' | 'about') => void;
    onScrollToSection: (sectionId: string) => void;
    onContact: () => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate, onScrollToSection, onContact }) => {
    const partners = [
        "Spotify", "Discord", "Netflix", "GitHub", "Vimeo", "Figma",
        "Slack", "Webflow", "Atlassian", "Linear", "Mastercard", "Visa",
        "Stripe", "Apple", "Google", "Amazon"
    ];

    return (
        <section className="relative overflow-hidden font-body">
            {/* 1. Partners Section - Reference Style: Light background, Dark cards */}
            <div className="bg-[#F8F9FA] py-8 md:py-16 px-6 relative z-20">
                <div className="max-w-7xl mx-auto text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-3xl md:text-4xl font-display font-bold text-deep-black mb-6 uppercase"
                    >
                        Our trusted <span className="text-brown">partners</span>
                    </motion.h2>
                    <div className="flex justify-center mb-8">
                        <button
                            onClick={onContact}
                            className="group inline-flex items-center gap-2 border-2 border-deep-black rounded-full px-8 py-3 bg-transparent hover:bg-deep-black hover:text-white transition-all duration-300 text-sm font-bold text-deep-black"
                        >
                            Become a partner
                            <span className="bg-brand-yellow rounded-full p-1.5 group-hover:scale-110 transition-transform">
                                <svg className="h-3 w-3 text-deep-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"></path>
                                </svg>
                            </span>
                        </button>
                    </div>

                    {/* Partners Marquee with Dark Cards */}
                    <div className="relative mt-8 overflow-hidden">
                        <div className="flex animate-marquee-fast whitespace-nowrap py-4 gap-6">
                            {[...partners, ...partners].map((partner, i) => (
                                <div key={i} className="inline-flex items-center justify-center bg-deep-black rounded-2xl min-w-[180px] h-28 p-8 group cursor-pointer transition-all duration-500 hover:scale-105 hover:bg-brand-blue">
                                    <span className="text-stark-white text-xl font-display font-black uppercase opacity-80 group-hover:opacity-100 transition-opacity">
                                        {partner}
                                    </span>
                                </div>
                            ))}
                        </div>
                        {/* Gradient Fades */}
                        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#F8F9FA] to-transparent z-10 pointer-events-none"></div>
                        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#F8F9FA] to-transparent z-10 pointer-events-none"></div>
                    </div>
                </div>
            </div>

            {/* 2. Main Footer - Reference Style: Large rounding, Clear columns */}
            <footer className="bg-brand-blue text-stark-white pt-12 pb-6 relative overflow-hidden rounded-t-[80px] md:rounded-t-[120px]">
                {/* Subtle Background Topographical Path */}
                <div className="absolute inset-0 opacity-[0.1] pointer-events-none select-none">
                    <img src={logo} alt="" className="w-full h-full object-center object-cover" />
                </div>

                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    {/* Footer Top: Branding & Large CTA Header */}
                    <div className="flex flex-col items-center mb-8 text-center">
                        {/* Huge Abstract Star Logo */}
                        <motion.div
                            whileHover={{ rotate: 180 }}
                            transition={{ duration: 1, ease: "easeInOut" }}
                            className="mb-8 cursor-pointer"
                        >
                            <svg className="w-24 h-24 text-brand-yellow drop-shadow-[0_0_20px_rgba(255,212,0,0.3)]" fill="currentColor" viewBox="0 0 48 48">
                                <path d="M24 0L28.5 19.5L48 24L28.5 28.5L24 48L19.5 28.5L0 24L19.5 19.5L24 0Z" />
                            </svg>
                        </motion.div>

                        <h2 className="text-6xl md:text-8xl font-elegant font-bold  mb-2">
                            merchand co
                        </h2>

                        <div className="flex flex-wrap justify-center gap-6">
                        </div>
                    </div>

                    {/* Footer Middle: 3 Columns Information */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pt-8 border-t border-white/10">
                        {/* Column 1: Contact & Accreditation */}
                        <div className="space-y-8">
                            <h3 className="text-2xl font-display font-bold uppercase text-brand-blue">Contact</h3>
                            <address className="not-italic opacity-60 text-base leading-relaxed space-y-2">
                                <p>Central Street 101,</p>
                                <p>8926 XD Center</p>
                                <p className="pt-4 font-bold text-stark-white">+976 77377007</p>
                                <p><a className="hover:text-brand-yellow underline transition-colors" href="mailto:contact@merchand.co">contact@merchand.co</a></p>
                            </address>

                            {/* Badges Area Like Reference */}
                            <div className="flex flex-wrap items-center gap-4 opacity-70">
                                <div className="bg-white/5 border border-white/10 px-3 py-1.5 rounded flex items-center gap-2">
                                    <span className="bg-brand-yellow text-deep-black text-[10px] font-black px-1.5 rounded">9.4</span>
                                    <span className="text-[10px] font-bold uppercase">Identity Score</span>
                                </div>
                                <div className="flex gap-3 grayscale hover:grayscale-0 transition-all">
                                    <div className="w-8 h-8 bg-white/10 rounded flex items-center justify-center font-black text-[8px]">ISO</div>
                                    <div className="w-8 h-8 bg-white/10 rounded flex items-center justify-center font-black text-[8px]">GDPR</div>
                                    <div className="w-8 h-8 bg-white/10 rounded flex items-center justify-center font-black text-[8px]">ECO</div>
                                </div>
                            </div>
                        </div>

                        {/* Column 2: Social Connectivity */}
                        <div className="flex flex-col md:items-center">
                            <div className="space-y-6 w-fit">
                                <h3 className="text-2xl font-display font-bold uppercase text-brown mb-4">Follow us</h3>
                                {['Facebook', 'Instagram', 'LinkedIn', 'Behance'].map((social) => (
                                    <a key={social} href="#" className="flex items-center justify-between gap-12 group hover:text-brown transition-all font-bold uppercase text-sm text-stark-white/40">
                                        {social}
                                        <span className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform opacity-0 group-hover:opacity-100 text-brown">↗</span>
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Column 3: Navigation Grid */}
                        <div>
                            <h3 className="text-2xl font-display font-bold uppercase text-brand-yellow mb-8">Quick Access</h3>
                            <div className="grid grid-cols-2 gap-x-8 gap-y-4 opacity-60 text-sm font-bold">
                                {[
                                    { label: 'About', action: () => onNavigate('about') },
                                    { label: 'Products', action: () => onScrollToSection('products') },
                                    { label: 'Solutions', action: () => onScrollToSection('corporate') },
                                    { label: 'Process', action: () => onScrollToSection('projects') },
                                    { label: 'Careers', action: () => { } },
                                    { label: 'Contact', action: onContact },
                                ].map((link, i) => (
                                    <button
                                        key={i}
                                        onClick={link.action}
                                        className="text-left hover:text-brand-yellow transition-colors hover:translate-x-1 duration-300"
                                    >
                                        {link.label}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Footer Bottom Bar */}
                    <div className="mt-12 pt-6 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                        <div className="text-[10px] font-black uppercase text-stark-white/20">
                            ©2026 MERCH.CORP — LAB ORIGINALS
                        </div>
                        <div className="flex items-center gap-8 bg-white/5 px-8 py-3 rounded-full backdrop-blur-md border border-white/5 text-[10px] font-black uppercase">
                            <a className="opacity-40 hover:opacity-100 hover:text-brand-yellow transition-all" href="#">Cookies policy</a>
                            <a className="opacity-40 hover:opacity-100 hover:text-brown transition-all" href="#">Privacy policy</a>
                        </div>
                    </div>
                </div>
            </footer>
        </section>
    );
};

export default Footer;
