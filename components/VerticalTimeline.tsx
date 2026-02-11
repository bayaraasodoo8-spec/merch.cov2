import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { PROCESS_STEPS } from '../constants';

const VerticalTimeline: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

    return (
        <div ref={containerRef} className="relative py-12 md:py-24 overflow-hidden bg-brand-yellow border-t-[1px] border-deep-black/10">
            {/* Background Grid Pattern - Cleaner */}
            <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
                <div className="w-full h-full" style={{ backgroundImage: 'radial-gradient(#000 1.5px, transparent 1.5px)', backgroundSize: '50px 50px' }}></div>
            </div>

            {/* Central Line - Minimal */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[1px] md:-translate-x-1/2 bg-deep-black/10 block">
                <motion.div
                    style={{ scaleY, transformOrigin: "top" }}
                    className="w-full h-full bg-deep-black/20"
                />
            </div>

            <div className="max-w-[1440px] mx-auto px-4 md:px-6 relative z-10">
                {PROCESS_STEPS.map((step, index) => {
                    const isEven = index % 2 === 0;

                    return (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.8, delay: index * 0.1, ease: [0.19, 1, 0.22, 1] }}
                            className={`relative flex flex-col md:flex-row items-center mb-16 md:mb-32 last:mb-0 ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                        >
                            {/* Milestone Marker - Compact v.7.0 */}
                            <div className={`
                                absolute left-6 md:left-1/2 top-0 md:top-1/2 
                                w-10 h-10 md:w-14 md:h-14 
                                ${step.bgColor} border-[1px] border-deep-black
                                flex items-center justify-center 
                                -translate-x-1/2 md:-translate-y-1/2 z-20 
                                shadow-lg
                                transition-all duration-500 group-hover:scale-110
                            `}>
                                <span className="font-display text-lg md:text-xl font-bold text-white group-hover:text-white transition-colors">
                                    {step.number}
                                </span>
                            </div>

                            {/* Card Spacer */}
                            <div className="w-full md:w-1/2 flex px-0 md:px-12 sm:px-20 lg:px-24 hidden md:block">
                                <div className={`w-full ${isEven ? 'md:pr-12' : 'md:pl-12'} hidden md:block`}></div>
                            </div>

                            {/* Refined Compact Card */}
                            <div className="w-full md:w-1/2 pl-12 md:pl-0 md:px-12 lg:px-24 group mt-8 md:mt-0">
                                <motion.div
                                    whileHover={{ y: -5 }}
                                    className="relative p-6 md:p-10 bg-white border-[1px] border-deep-black/10 shadow-xl transition-all duration-500"
                                >
                                    {/* Header Section - No Icon */}
                                    <div className="flex flex-col gap-1 mb-6 border-b-[1px] border-deep-black/5 pb-6">
                                        <span className="text-[9px] font-bold uppercase tracking-[0.4em] text-brand-pink">
                                            Phase {step.number}
                                        </span>
                                        <h3 className="text-3xl md:text-4xl font-display uppercase leading-tight tracking-tighter text-deep-black">
                                            {step.title}
                                        </h3>
                                    </div>

                                    <p className="text-base md:text-lg font-body font-medium text-deep-black/60 leading-relaxed italic">
                                        "{step.description}"
                                    </p>

                                    {/* Hover Accent */}
                                    <motion.div
                                        className="absolute bottom-0 left-0 h-[2px] bg-brand-pink"
                                        initial={{ width: 0 }}
                                        whileHover={{ width: '100%' }}
                                        transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
                                    />
                                </motion.div>
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
};

export default VerticalTimeline;
