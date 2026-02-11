import React, { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';
import { SOLUTIONS } from '../constants';
import Magnetic from './Magnetic';

const SolutionsSlider: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const sliderRef = useRef<HTMLDivElement>(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [cardWidth, setCardWidth] = useState(0);
    const [sliderWidth, setSliderWidth] = useState(0);

    const x = useMotionValue(0);
    const springX = useSpring(x, { stiffness: 150, damping: 20, mass: 0.5 });

    useEffect(() => {
        const updateWidth = () => {
            if (sliderRef.current && sliderRef.current.children.length > 0) {
                const firstCard = sliderRef.current.children[0] as HTMLElement;
                const style = window.getComputedStyle(sliderRef.current);
                const gap = parseInt(style.gap) || 0;
                setCardWidth(firstCard.offsetWidth + gap);
                setSliderWidth(sliderRef.current.scrollWidth - containerRef.current!.offsetWidth);
            }
        };

        updateWidth();
        window.addEventListener('resize', updateWidth);
        return () => window.removeEventListener('resize', updateWidth);
    }, []);

    const handleNext = () => {
        if (currentIndex < SOLUTIONS.length) {
            const nextIndex = currentIndex + 1;
            setCurrentIndex(nextIndex);
            x.set(-nextIndex * cardWidth);
        }
    };

    const handlePrev = () => {
        if (currentIndex > 0) {
            const prevIndex = currentIndex - 1;
            setCurrentIndex(prevIndex);
            x.set(-prevIndex * cardWidth);
        }
    };

    return (
        <section className="bg-stark-white py-24 md:py-32 border-b-8 border-deep-black overflow-hidden relative">
            {/* Ambient Background */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
                <div className="w-full h-full" style={{ backgroundImage: 'linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)', backgroundSize: '60px 60px' }}></div>
            </div>

            <div className="max-w-[1440px] mx-auto px-6 relative z-10">

                {/* Hero Header */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16 md:mb-24 items-end">
                    <div className="lg:col-span-8">
                        <div className="inline-block bg-deep-black text-brand-yellow px-3 py-1 mb-6 brutalist-border-sm text-xs font-bold tracking-[0.2em] uppercase">
                            Capabilities
                        </div>
                        <h2 className="text-5xl md:text-7xl lg:text-8xl font-display text-deep-black uppercase leading-[0.85] tracking-tighter">
                            Tailored <span className="text-transparent stroke-text-black hover:text-brand-blue transition-colors duration-500">Solutions</span>
                            <br />
                            <span className="text-deep-black italic font-serif lowercase tracking-normal">for your</span> <span className="text-brand-yellow bg-deep-black px-2">Brand's</span>
                            <br />
                            Next Chapter.
                        </h2>
                    </div>
                    <div className="lg:col-span-4 flex flex-col items-start lg:items-end justify-between h-full gap-6">
                        <p className="text-deep-black/60 font-bold uppercase tracking-tight text-sm md:text-base max-w-[300px] leading-relaxed text-left lg:text-right">
                            From concept to delivery, we provide the infrastructure for high-impact merchandise programs.
                        </p>

                        {/* Navigation Buttons */}
                        <div className="flex gap-4 items-center mt-4 lg:mt-0">
                            <button
                                onClick={handlePrev}
                                disabled={currentIndex === 0}
                                className="w-14 h-14 brutalist-border-sm flex items-center justify-center bg-white hover:bg-brand-yellow transition-colors disabled:opacity-20 disabled:cursor-not-allowed group"
                                aria-label="Previous Slide"
                            >
                                <span className="material-symbols-outlined group-active:scale-90 transition-transform">arrow_back</span>
                            </button>
                            <button
                                onClick={handleNext}
                                disabled={currentIndex >= SOLUTIONS.length}
                                className="w-14 h-14 brutalist-border-sm flex items-center justify-center bg-white hover:bg-brand-yellow transition-colors disabled:opacity-20 disabled:cursor-not-allowed group"
                                aria-label="Next Slide"
                            >
                                <span className="material-symbols-outlined group-active:scale-90 transition-transform">arrow_forward</span>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Slider Container */}
                <div ref={containerRef} className="relative cursor-grab active:cursor-grabbing w-full">
                    <motion.div
                        ref={sliderRef}
                        drag="x"
                        dragConstraints={{ right: 0, left: -sliderWidth }}
                        onDragEnd={(_, info) => {
                            const dragDistance = info.offset.x;
                            const threshold = cardWidth / 4;
                            if (Math.abs(dragDistance) > threshold) {
                                if (dragDistance > 0 && currentIndex > 0) {
                                    handlePrev();
                                } else if (dragDistance < 0 && currentIndex < SOLUTIONS.length) {
                                    handleNext();
                                }
                            } else {
                                // Snap back
                                x.set(-currentIndex * cardWidth);
                            }
                        }}
                        whileTap={{ cursor: "grabbing" }}
                        style={{ x: springX }}
                        className="flex gap-6 md:gap-10 pb-12"
                    >
                        {SOLUTIONS.map((item, index) => (
                            <motion.div
                                key={index}
                                className="min-w-[280px] md:min-w-[340px] lg:min-w-[380px] relative group"
                            >
                                {/* Index Number */}
                                <div className="absolute -left-4 -top-6 text-9xl font-display text-transparent stroke-text-gray opacity-20 group-hover:opacity-10 pointer-events-none transition-opacity duration-300 z-0">
                                    0{index + 1}
                                </div>

                                {/* Card Image */}
                                <div className="aspect-[4/5] relative overflow-hidden brutalist-border bg-deep-black z-10 transition-transform duration-500 hover:-translate-y-2">
                                    <div className="absolute inset-0 bg-brand-blue/20 z-10 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-110"
                                    />

                                    {/* Overlay Content */}
                                    <div className="absolute inset-0 p-6 flex flex-col justify-end z-20">
                                        <div className="bg-white/90 backdrop-blur-sm p-6 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 brutalist-border-sm shadow-xl">
                                            <h3 className="text-xl font-display uppercase tracking-tight mb-2 text-deep-black">
                                                {item.title}
                                            </h3>
                                            <p className="text-xs font-bold uppercase tracking-widest text-deep-black/60 line-clamp-3">
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Bottom Label (Visible when not hovered) */}
                                <div className="mt-6 pl-2 group-hover:opacity-0 transition-opacity duration-300">
                                    <div className="w-8 h-[2px] bg-brand-yellow mb-3"></div>
                                    <h3 className="text-2xl font-display uppercase leading-none tracking-tight text-deep-black">
                                        {item.title}
                                    </h3>
                                </div>
                            </motion.div>
                        ))}

                        {/* Call to Action Card at the end */}
                        <motion.div className="min-w-[280px] md:min-w-[340px] aspect-[4/5] flex items-center justify-center bg-brand-yellow brutalist-border group cursor-pointer relative overflow-hidden">
                            <div className="text-center relative z-10 p-8">
                                <h3 className="text-4xl font-display uppercase leading-none mb-4 text-deep-black">
                                    See All <br /> Services
                                </h3>
                                <div className="w-12 h-12 rounded-full border-2 border-deep-black flex items-center justify-center mx-auto group-hover:bg-deep-black group-hover:text-brand-yellow transition-colors duration-300">
                                    <span className="material-symbols-outlined">arrow_forward</span>
                                </div>
                            </div>

                            {/* Hover Effect Pattern */}
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none">
                                <div className="w-full h-full" style={{ backgroundImage: 'radial-gradient(#000 2px, transparent 2px)', backgroundSize: '20px 20px' }}></div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            {/* CSS for text-stroke effect (can be moved to global css) */}
            <style>{`
                .stroke-text-black {
                    -webkit-text-stroke: 1px #000;
                }
                .stroke-text-gray {
                    -webkit-text-stroke: 1px #e5e5e5;
                }
            `}</style>
        </section>
    );
};

export default SolutionsSlider;
