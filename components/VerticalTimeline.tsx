import React from 'react';
import { motion } from 'framer-motion';
import { PROCESS_STEPS } from '../constants';

const VerticalTimeline: React.FC = () => {
    return (
        <div className="relative py-20 overflow-hidden">
            {/* Central Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 md:-translate-x-1/2 bg-gradient-to-b from-electric-blue via-purple-600 to-hot-pink hidden sm:block"></div>

            <div className="max-w-[1440px] mx-auto px-6 relative">
                {PROCESS_STEPS.map((step, index) => {
                    const isEven = index % 2 === 0;

                    return (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            className={`relative flex flex-col md:flex-row items-center mb-24 last:mb-0 ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                                }`}
                        >
              /* Circle Indicator */
                            <div className="absolute left-2 md:left-1/2 top-0 md:top-1/2 w-12 h-12 rounded-full bg-deep-black brutalist-border flex items-center justify-center -translate-x-1/2 md:-translate-y-1/2 z-20 shadow-[0_0_20px_rgba(45,50,255,0.4)]">
                                <span className="text-neon-lime font-display text-xl">{step.number}</span>
                            </div>

                            {/* Card Spacer / Alignment */}
                            <div className="w-full md:w-1/2 flex px-12 sm:px-20 lg:px-32">
                                <div className={`w-full ${isEven ? 'md:pr-12' : 'md:pl-12'} hidden md:block`}></div>
                            </div>

                            {/* Card Content */}
                            <div className="w-full md:w-1/2 pl-16 md:pl-0">
                                <motion.div
                                    whileHover={{ scale: 1.02 }}
                                    className={`relative p-8 brutalist-border bg-white brutalist-shadow transition-colors duration-500 hover:bg-stark-white group`}
                                >
                                    <div className="flex items-center gap-4 mb-4">
                                        <span className="material-symbols-outlined text-4xl text-electric-blue">{step.icon}</span>
                                        <h3 className="text-3xl font-display uppercase tracking-tighter">{step.title}</h3>
                                    </div>
                                    <p className="text-lg font-bold text-deep-black leading-relaxed">
                                        {step.description}
                                    </p>

                                    {/* Decorative Gradient Bar */}
                                    <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-electric-blue to-purple-600"></div>
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
