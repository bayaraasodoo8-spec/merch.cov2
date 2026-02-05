import React from 'react';
import { motion } from 'framer-motion';
import Magnetic from './Magnetic';

interface ProcessCardProps {
    number: string;
    title: string;
    description: string;
    icon: string;
    bgColor: string;
    hoverColor: string;
    shadowColor: string;
    accentColor: string;
}

const ProcessCard: React.FC<ProcessCardProps> = ({
    number,
    title,
    description,
    icon,
    bgColor,
    hoverColor,
    shadowColor,
    accentColor
}) => {
    return (
        <Magnetic strength={0.25}>
            <div className={`relative ${bgColor} text-white p-10 brutalist-border ${shadowColor} min-h-[450px] w-[350px] md:w-[450px] group interactive overflow-hidden transition-all duration-500 ${hoverColor} hover:scale-[1.02] flex-shrink-0`}>
                {/* Animated corner accent */}
                <div className={`absolute top-0 left-0 w-0 h-0 border-l-[40px] border-l-transparent border-t-[40px] ${accentColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-30 transition-opacity duration-700">
                    <span className="material-symbols-outlined text-9xl">{icon}</span>
                </div>

                {/* Progress indicator background */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-white/10">
                    <div className={`h-full ${accentColor.replace('border-t-', 'bg-')} w-0 group-hover:w-full transition-all duration-1000 ease-out`}></div>
                </div>

                <div className="relative z-10 h-full flex flex-col">
                    <div className="flex items-baseline gap-3">
                        <span className={`text-6xl font-display text-white transition-colors duration-500`}>{number}</span>
                        <span className="text-sm font-black uppercase tracking-widest opacity-0 group-hover:opacity-60 transition-opacity duration-500 delay-200">STEP</span>
                    </div>

                    <div className="mt-8 transition-transform duration-500 group-hover:-translate-y-4">
                        <h3 className="text-4xl font-display uppercase leading-none">{title}</h3>
                        <div className={`w-12 h-2 bg-white mt-4 group-hover:w-full transition-all duration-500`}></div>
                    </div>

                    <div className="mt-auto opacity-0 translate-y-10 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100">
                        <p className="font-bold text-xl leading-snug">
                            {description}
                        </p>
                    </div>
                </div>
            </div>
        </Magnetic>
    );
};

export default ProcessCard;
