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
        <div ref={containerRef} className="relative py-16 md:py-32 overflow-hidden bg-brand-yellow border-t-4 md:border-t-8 border-deep-black">
            {/* Background Grid Pattern */}
            <div className="absolute inset-0 opacity-5 pointer-events-none">
                <div className="w-full h-full" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
            </div>

            {/* Central Line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-2 md:w-3 md:-translate-x-1/2 bg-deep-black/10 block">
                <motion.div
                    style={{ scaleY, transformOrigin: "top" }}
                    className="w-full h-full bg-deep-black"
                />
            </div>

            <div className="max-w-[1440px] mx-auto px-4 md:px-6 relative z-10">
                {PROCESS_STEPS.map((step, index) => {
                    const isEven = index % 2 === 0;

                    return (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: index * 0.1, ease: "circOut" }}
                            className={`relative flex flex-col md:flex-row items-center mb-16 md:mb-32 last:mb-0 ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                        >
                            {/* Milestone Marker */}
                            <div className={`
                                absolute left-6 md:left-1/2 top-0 md:top-1/2 
                                w-12 h-12 md:w-16 md:h-16 
                                ${step.bgColor} border-2 md:border-4 border-deep-black
                                flex items-center justify-center 
                                -translate-x-1/2 md:-translate-y-1/2 z-20 
                                shadow-[4px_4px_0px_0px_#000] md:shadow-[6px_6px_0px_0px_#000]
                                transition-transform duration-300 group-hover:scale-110
                            `}>
                                <span className={`font-display text-xl md:text-2xl font-bold ${step.hoverColor.includes('text-deep-black') ? 'text-deep-black' : 'text-white'}`}>
                                    {step.number}
                                </span>
                            </div>

                            {/* Card Spacer / Alignment */}
                            <div className="w-full md:w-1/2 flex px-0 md:px-12 sm:px-20 lg:px-24 hidden md:block">
                                <div className={`w-full ${isEven ? 'md:pr-12' : 'md:pl-12'} hidden md:block`}></div>
                            </div>

                            {/* Brutalist Card */}
                            <div className="w-full md:w-1/2 pl-12 md:pl-0 md:px-12 lg:px-24 group perspective-mid mt-8 md:mt-0">
                                <motion.div
                                    whileHover={{
                                        scale: 1.02,
                                        rotate: isEven ? 1 : -1,
                                        boxShadow: "12px 12px 0px 0px #000"
                                    }}
                                    className={`
                                        relative p-6 md:p-10 
                                        bg-white border-2 md:border-4 border-deep-black 
                                        shadow-[6px_6px_0px_0px_#000] md:shadow-[8px_8px_0px_0px_#000]
                                        transition-all duration-300
                                    `}
                                >
                                    {/* Header Section */}
                                    <div className="flex items-start justify-between gap-4 mb-4 md:mb-6 border-b-2 md:border-b-4 border-deep-black pb-4 md:pb-6">
                                        <div className="flex flex-col gap-1 md:gap-2">
                                            <div className="flex items-center gap-3">
                                                <span className="text-xs md:text-sm font-black uppercase tracking-widest opacity-60">
                                                    Phase {step.number}
                                                </span>
                                            </div>
                                            <h3 className="text-3xl md:text-5xl font-display uppercase leading-[0.9] md:leading-[0.85] tracking-tighter text-deep-black">
                                                {step.title}
                                            </h3>
                                        </div>

                                        <div className={`
                                            p-3 md:p-4 border-2 md:border-2 border-deep-black 
                                            bg-deep-black text-brand-yellow
                                            flex items-center justify-center
                                            shadow-[3px_3px_0px_0px_rgba(0,0,0,0.2)] md:shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)]
                                        `}>
                                            <span className="material-symbols-outlined text-2xl md:text-3xl">{step.icon}</span>
                                        </div>
                                    </div>

                                    <p className="text-lg md:text-xl font-bold text-deep-black leading-relaxed mb-0 md:mb-6">
                                        {step.description}
                                    </p>

                                    {/* Decorative Accent */}
                                    <div className={`absolute -top-2 -right-2 md:-top-3 md:-right-3 w-4 h-4 md:w-6 md:h-6 border-2 border-deep-black bg-brand-yellow z-10 hidden group-hover:block transition-all`}></div>
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
