import React, { useEffect, useRef, useState } from 'react';
import { generateMerchIdea } from '../services/geminiService';
import { motion, AnimatePresence } from 'framer-motion';
import Magnetic from './Magnetic';

interface LabModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LabModal: React.FC<LabModalProps> = ({ isOpen, onClose }) => {
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);

  const panelRef = useRef<HTMLDivElement | null>(null);
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  if (!isOpen) return null;

  const handleGenerate = async () => {
    if (!description.trim() || loading) return;
    setLoading(true);
    try {
      const idea = await generateMerchIdea(description);
      setResult(idea);
    } finally {
      setLoading(false);
    }
  };

  // ESC to close + lock scroll
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKeyDown);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    // focus textarea on open
    setTimeout(() => textareaRef.current?.focus(), 50);

    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-deep-black/90 backdrop-blur-xl transition-all duration-500">
          {/* Backdrop interaction layer */}
          <div
            className="absolute inset-0 cursor-pointer"
            onMouseDown={(e) => {
              if (e.target === e.currentTarget) onClose();
            }}
          />

          <motion.div
            ref={panelRef}
            initial={{ scale: 0.95, opacity: 0, y: 30 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 30 }}
            transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
            className="bg-deep-black w-full max-w-2xl max-h-[85vh] flex flex-col brutalist-border-sm border-white/20 shadow-[0_0_50px_rgba(0,0,0,0.5)] relative overflow-hidden"
          >
            {/* Ambient Background Glow */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-brand-blue/10 rounded-full blur-[80px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-brand-pink/10 rounded-full blur-[80px] pointer-events-none" />

            {/* header */}
            <div className="sticky top-0 z-20 bg-deep-black/80 backdrop-blur-md border-b border-white/10 px-6 md:px-8 py-4">
              <div className="flex items-center justify-between gap-4">
                <div className="flex flex-col">
                  <span className="text-[9px] font-bold uppercase tracking-[0.5em] text-white/40 mb-1">
                    NEURAL DESIGN FACILITY
                  </span>
                  <div className="flex items-baseline gap-3">
                    <h2 className="text-2xl md:text-4xl font-display text-white uppercase tracking-tighter leading-none">
                      LAB <span className="text-brand-yellow italic">V2</span>
                    </h2>
                    <div className="px-2 py-0.5 bg-brand-blue/20 border border-brand-blue/30 rounded text-[9px] font-black text-brand-blue uppercase tracking-widest">
                      AI Powered
                    </div>
                  </div>
                </div>

                <Magnetic strength={0.3}>
                  <button
                    onClick={onClose}
                    className="group shrink-0 h-12 w-12 grid place-items-center bg-white/5 hover:bg-brand-pink border border-white/10 hover:border-brand-pink transition-all duration-300 rounded-full"
                    aria-label="Close"
                  >
                    <span className="material-symbols-outlined text-[20px] text-white group-hover:scale-110 group-hover:rotate-90 transition-transform duration-500">close</span>
                  </button>
                </Magnetic>
              </div>
            </div>

            {/* Scrollable container */}
            <div className="flex-1 overflow-y-auto custom-scrollbar">
              <div className="px-6 md:px-8 py-6 md:py-8">
                <div className="grid gap-6">
                  <div className="space-y-3">
                    <div className="flex items-end justify-between">
                      <label className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em] text-white/60">
                        Describe your conceptual vision
                      </label>
                      <span className="text-[9px] font-bold font-mono text-brand-yellow/50">
                        {description.length}/320
                      </span>
                    </div>

                    <div className="relative group">
                      <textarea
                        ref={textareaRef}
                        value={description}
                        onChange={(e) => setDescription(e.target.value.slice(0, 320))}
                        placeholder="e.g. Minimalist cyber-organic coffee brand. High contrast, monochromatic with electric blue accents. Sharp edges, technical typography."
                        className="w-full h-28 md:h-32 bg-white/5 border border-white/10 p-5 text-sm md:text-base font-body font-medium text-white placeholder:text-white/20 outline-none focus:border-brand-yellow/50 focus:bg-white/[0.08] transition-all resize-none rounded-sm"
                      />
                      <div className="absolute bottom-0 left-0 h-[2px] bg-brand-yellow w-0 group-focus-within:w-full transition-all duration-700" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <button
                      onClick={() => {
                        setDescription('');
                        setResult(null);
                        textareaRef.current?.focus();
                      }}
                      className="group relative overflow-hidden py-3 border border-white/10 hover:border-white/20 transition-colors"
                    >
                      <span className="relative z-10 text-[10px] font-black uppercase tracking-[0.3em] text-white/50 group-hover:text-white transition-colors">
                        Reset System
                      </span>
                    </button>

                    <Magnetic strength={0.1}>
                      <button
                        onClick={handleGenerate}
                        disabled={loading || !description.trim()}
                        className="w-full relative overflow-hidden py-3 bg-brand-yellow group disabled:opacity-30 disabled:grayscale"
                      >
                        <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                        <span className="relative z-10 text-center text-[10px] font-black uppercase tracking-[0.3em] text-deep-black">
                          {loading ? (
                            <span className="flex items-center justify-center gap-2">
                              <svg className="animate-spin h-3 w-3 text-deep-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                              </svg>
                              Processing...
                            </span>
                          ) : 'Initialize Brainstorm'}
                        </span>
                      </button>
                    </Magnetic>
                  </div>

                  <p className="text-[10px] md:text-xs font-medium text-white/30 uppercase tracking-widest leading-relaxed">
                    <span className="text-brand-pink mr-2">PROTOCOL:</span>
                    Include audience demographics, stylistic keywords (e.g. "Acid House", "Swiss Grid"), and core values for optimal neural mapping.
                  </p>
                </div>

                {/* result */}
                <AnimatePresence>
                  {result && (
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-4"
                    >
                      {/* Brand Logic Card */}
                      <div className="bg-white/5 border border-white/10 p-6 relative group overflow-hidden">
                        <div className="absolute top-0 right-0 w-20 h-20 bg-brand-blue/5 -mr-10 -mt-10 rounded-full blur-xl group-hover:bg-brand-blue/10 transition-colors" />

                        <div className="flex items-center justify-between mb-6">
                          <h3 className="text-[9px] font-black uppercase tracking-[0.4em] text-brand-blue">
                            Strategic Mapping
                          </h3>
                          <div className="h-[1px] w-10 bg-brand-blue/30" />
                        </div>

                        <p className="text-lg md:text-xl font-display text-white uppercase leading-tight tracking-tighter mb-8">
                          {result.brandAngle}
                        </p>

                        <div className="space-y-3">
                          <span className="text-[8px] font-bold text-white/30 uppercase tracking-[0.4em]">Suggested Artifacts</span>
                          <ul className="grid grid-cols-1 gap-2">
                            {result.suggestedItems?.map((item: string, i: number) => (
                              <li key={i} className="flex items-center gap-2">
                                <div className="w-1 h-1 bg-brand-blue rounded-full" />
                                <span className="text-xs font-bold text-white/80 uppercase tracking-widest">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Creative Expression Card */}
                      <div className="bg-brand-pink p-6 relative group overflow-hidden">
                        <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-deep-black/10 rounded-full" />

                        <div className="flex items-center justify-between mb-6">
                          <h3 className="text-[9px] font-black uppercase tracking-[0.4em] text-deep-black">
                            Verbal Identity
                          </h3>
                          <div className="h-[1px] w-10 bg-deep-black/20" />
                        </div>

                        <div className="space-y-4 mb-8">
                          {result.slogans?.map((slogan: string, i: number) => (
                            <p
                              key={i}
                              className="text-xl md:text-2xl font-display text-white uppercase leading-[0.85] tracking-tighter"
                            >
                              “{slogan}”
                            </p>
                          ))}
                        </div>

                        <div className="pt-6 border-t border-deep-black/10">
                          <span className="text-[8px] font-bold text-deep-black/40 uppercase tracking-[0.4em] block mb-2">Visual Direction</span>
                          <p className="text-xs md:text-sm font-body font-bold italic text-deep-black/80 leading-snug">
                            {result.visualDirection}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default LabModal;
