import React, { useRef, useEffect, useState, ReactNode } from 'react';

interface ProcessStepRevealProps {
    children: ReactNode;
    delay?: number;
    index: number;
    className?: string;
}

const ProcessStepReveal: React.FC<ProcessStepRevealProps> = ({
    children,
    delay = 0,
    index,
    className = ""
}) => {
    const ref = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);
    const [hasAnimated, setHasAnimated] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasAnimated) {
                    setTimeout(() => {
                        setIsVisible(true);
                        setHasAnimated(true);
                    }, delay);
                }
            },
            {
                threshold: 0.15,
                rootMargin: '-50px'
            }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, [delay, hasAnimated]);

    // Different entrance animations based on index
    const getTransform = () => {
        if (isVisible) return 'translateY(0) translateX(0) scale(1) rotate(0deg)';

        switch (index % 4) {
            case 0:
                return 'translateY(100px) translateX(-30px) scale(0.9) rotate(-5deg)';
            case 1:
                return 'translateY(120px) translateX(0px) scale(0.88) rotate(2deg)';
            case 2:
                return 'translateY(110px) translateX(20px) scale(0.92) rotate(-3deg)';
            case 3:
                return 'translateY(130px) translateX(15px) scale(0.9) rotate(4deg)';
            default:
                return 'translateY(100px) scale(0.9)';
        }
    };

    return (
        <div
            ref={ref}
            className={`process-step-reveal ${className}`}
            style={{
                opacity: isVisible ? 1 : 0,
                transform: getTransform(),
                filter: isVisible ? 'blur(0px)' : 'blur(8px)',
                transition: `all 1s cubic-bezier(0.16, 1, 0.3, 1)`,
                willChange: 'transform, opacity, filter'
            }}
        >
            {children}
        </div>
    );
};

export default ProcessStepReveal;