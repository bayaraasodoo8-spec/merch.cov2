import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SOLUTIONS } from '../constants';
import Magnetic from './Magnetic';

const SolutionsSlider: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % SOLUTIONS.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + SOLUTIONS.length) % SOLUTIONS.length);
    };

    return (
        <section className="bg-stark-white py-32 px-6 border-b-8 border-deep-black overflow-hidden">
            <div className="max-w-[1440px] mx-auto">
                {/* Header Section */}
                <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
                    <div className="max-w-3xl">
                        <h2 className="text-5xl md:text-7xl font-display text-deep-black uppercase leading-[0.9] tracking-tighter mb-8">
                            Tailored solutions <br />
                            <span className="text-electric-blue">for your branded</span> <br />
                            product initiatives
                        </h2>
                        <p className="text-xl font-bold text-deep-black/70 max-w-xl uppercase leading-snug">
                            From customer acquisition gifting to employee onboarding and appreciation programs,
                            we have you covered with all your corporate swag, merch, and custom branded products.
                        </p>
                    </div>

                    {/* Navigation Bar */}
                    <div className="flex gap-4">
                        <Magnetic strength={0.5}>
                            <button
                                onClick={prevSlide}
                                className="w-16 h-16 rounded-full brutalist-border flex items-center justify-center hover:bg-electric-blue hover:text-white transition-colors group"
                            >
                                <span className="material-symbols-outlined text-4xl group-active:-translate-x-1 transition-transform">arrow_back</span>
                            </button>
                        </Magnetic>
                        <Magnetic strength={0.5}>
                            <button
                                onClick={nextSlide}
                                className="w-16 h-16 rounded-full brutalist-border flex items-center justify-center hover:bg-neon-lime transition-colors group"
                            >
                                <span className="material-symbols-outlined text-4xl group-active:translate-x-1 transition-transform">arrow_forward</span>
                            </button>
                        </Magnetic>
                    </div>
                </div>

                {/* Slider Content */}
                <div className="relative">
                    <motion.div
                        className="flex gap-8"
                        animate={{ x: `-${currentIndex * (100 / 3.5)}%` }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    >
                        {SOLUTIONS.map((item, index) => (
                            <motion.div
                                key={index}
                                className="min-w-[300px] md:min-w-[400px] group flex-shrink-0"
                                whileHover={{ y: -10 }}
                            >
                                <div className="relative aspect-[4/3] mb-6 overflow-hidden brutalist-border bg-deep-black/5">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-deep-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                </div>
                                <h3 className="text-2xl font-display uppercase tracking-tight mb-2">{item.title}</h3>
                                <p className="text-sm font-black text-deep-black/60 uppercase tracking-widest leading-relaxed">
                                    {item.description}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default SolutionsSlider;
