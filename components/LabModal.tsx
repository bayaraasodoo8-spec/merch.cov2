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
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-deep-black/60 backdrop-blur-md transition-all duration-500">
          {/* Backdrop interaction layer */}
          <div
            className="absolute inset-0 cursor-pointer"
            onMouseDown={(e) => {
              if (e.target === e.currentTarget) onClose();
            }}
          />

          <motion.div
            ref={panelRef}
            initial={{ scale: 0.98, opacity: 0, y: 10 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.98, opacity: 0, y: 10 }}
            transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
            className="bg-deep-black w-full max-w-lg max-h-[80vh] flex flex-col border border-white/10 shadow-2xl relative overflow-hidden"
          >
            {/* Minimal Background indicator (optional, kept very subtle) */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-blue/5 rounded-full blur-[60px] pointer-events-none" />

            {/* header */}
            <div className="sticky top-0 z-20 bg-deep-black/90 backdrop-blur-sm border-b border-white/5 px-6 py-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <h2 className="text-xl font-display text-white uppercase">
                    LAB <span className="text-brand-yellow font-normal">v2</span>
                  </h2>
                  <div className="px-1.5 py-0.5 border border-white/10 rounded text-[8px] font-medium text-white/40 uppercase">
                    Neural
                  </div>
                </div>

                <button
                  onClick={onClose}
                  className="h-8 w-8 grid place-items-center bg-white/5 hover:bg-white/10 border border-white/5 transition-colors rounded-full"
                  aria-label="Close"
                >
                  <span className="material-symbols-outlined text-[18px] text-white/60">close</span>
                </button>
              </div>
            </div>

            {/* Scrollable container */}
            <div className="flex-1 overflow-y-auto custom-scrollbar">
              <div className="px-6 py-6">
                <div className="grid gap-5">
                  <div className="space-y-2">
                    <div className="flex items-end justify-between px-0.5">
                      <label className="text-[9px] font-bold uppercase text-white/40">
                        Concept Vision
                      </label>
                      <span className="text-[8px] font-mono text-white/20">
                        {description.length}/320
                      </span>
                    </div>

                    <div className="relative">
                      <textarea
                        ref={textareaRef}
                        value={description}
                        onChange={(e) => setDescription(e.target.value.slice(0, 320))}
                        placeholder="e.g. Minimalist coffee brand, monochromatic, technical typography."
                        className="w-full h-24 bg-white/5 border border-white/10 p-4 text-sm font-body text-white placeholder:text-white/20 outline-none focus:border-brand-yellow/30 transition-all resize-none rounded-sm"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => {
                        setDescription('');
                        setResult(null);
                        textareaRef.current?.focus();
                      }}
                      className="py-2.5 border border-white/5 bg-white/5 hover:bg-white/10 transition-colors rounded-sm"
                    >
                      <span className="text-[9px] font-bold uppercase text-white/40">
                        Reset
                      </span>
                    </button>

                    <button
                      onClick={handleGenerate}
                      disabled={loading || !description.trim()}
                      className="py-2.5 bg-brand-yellow hover:opacity-90 disabled:opacity-20 transition-all rounded-sm"
                    >
                      <span className="text-[9px] font-bold uppercase text-deep-black">
                        {loading ? 'Processing...' : 'Generate'}
                      </span>
                    </button>
                  </div>
                </div>

                {/* result */}
                <AnimatePresence mode="wait">
                  {result && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="mt-8 space-y-3"
                    >
                      {/* Strategic Mapping */}
                      <div className="bg-white/5 border border-white/10 p-5 rounded-sm">
                        <div className="flex items-center gap-2 mb-4">
                          <div className="w-1 h-1 bg-brand-blue rounded-full" />
                          <h3 className="text-[9px] font-bold uppercase text-brand-blue">
                            Strategy
                          </h3>
                        </div>

                        <p className="text-base font-display text-white uppercase mb-6">
                          {result.brandAngle}
                        </p>

                        <div className="space-y-2">
                          <span className="text-[8px] font-bold text-white/20 uppercase">Artifacts</span>
                          <div className="flex flex-wrap gap-2">
                            {result.suggestedItems?.map((item: string, i: number) => (
                              <span key={i} className="px-2 py-1 bg-white/5 border border-white/5 text-[9px] font-medium text-white/60 uppercase rounded-sm">
                                {item}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Verbal & Visual direction */}
                      <div className="bg-white/5 border border-white/10 p-5 rounded-sm">
                        <div className="flex items-center gap-2 mb-4">
                          <div className="w-1 h-1 bg-brand-pink rounded-full" />
                          <h3 className="text-[9px] font-bold uppercase text-brown">
                            Identity
                          </h3>
                        </div>

                        <div className="space-y-2 mb-6">
                          {result.slogans?.map((slogan: string, i: number) => (
                            <p key={i} className="text-lg font-display text-white uppercase leading-none">
                              “{slogan}”
                            </p>
                          ))}
                        </div>

                        <div className="pt-4 border-t border-white/5">
                          <span className="text-[8px] font-bold text-white/20 uppercase block mb-2">Visual Direction</span>
                          <p className="text-xs font-body text-white/60 leading-relaxed italic">
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
