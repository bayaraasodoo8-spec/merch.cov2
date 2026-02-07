import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Magnetic from './Magnetic';

interface ContactModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        service: 'Custom Design',
        message: ''
    });
    const [submitted, setSubmitted] = useState(false);

    if (!isOpen) return null;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Simulate submission
        setSubmitted(true);
        setTimeout(() => {
            setSubmitted(false);
            onClose();
        }, 2000);
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-deep-black/90 backdrop-blur-md">
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.9, opacity: 0, y: 20 }}
                        className="bg-stark-white w-full max-w-2xl brutalist-border brutalist-shadow-blue p-8 md:p-12 relative overflow-hidden"
                    >
                        {/* Background Accent */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-brand-yellow brutalist-border-sm -mr-16 -mt-16 rotate-45 pointer-events-none" />

                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 bg-deep-black text-white p-2 hover:bg-brand-pink transition-colors brutalist-border-sm z-10"
                        >
                            <span className="material-symbols-outlined font-bold">close</span>
                        </button>

                        {!submitted ? (
                            <>
                                <h2 className="text-4xl md:text-6xl font-display text-deep-black uppercase tracking-tighter mb-2">
                                    LET'S BUILD <br /><span className="text-brand-blue">YOUR LEGACY</span>
                                </h2>
                                <p className="text-lg font-bold uppercase tracking-widest text-deep-black/60 mb-10">Start your project inquiry below.</p>

                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="block text-sm font-black uppercase tracking-widest">Full Name</label>
                                            <input
                                                required
                                                type="text"
                                                value={formData.name}
                                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                className="w-full bg-white brutalist-border-sm p-4 font-bold focus:ring-2 focus:ring-brand-blue outline-none transition-all"
                                                placeholder="John Doe"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="block text-sm font-black uppercase tracking-widest">Email Address</label>
                                            <input
                                                required
                                                type="email"
                                                value={formData.email}
                                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                className="w-full bg-white brutalist-border-sm p-4 font-bold focus:ring-2 focus:ring-brand-blue outline-none transition-all"
                                                placeholder="john@brand.com"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="block text-sm font-black uppercase tracking-widest">Service Type</label>
                                        <select
                                            value={formData.service}
                                            onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                                            className="w-full bg-white brutalist-border-sm p-4 font-bold focus:ring-2 focus:ring-brand-blue outline-none appearance-none cursor-pointer"
                                        >
                                            <option>Screen Printing</option>
                                            <option>Embroidery</option>
                                            <option>Custom Design</option>
                                            <option>Bulk Order</option>
                                        </select>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="block text-sm font-black uppercase tracking-widest">Project Details</label>
                                        <textarea
                                            required
                                            value={formData.message}
                                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                            className="w-full h-32 bg-white brutalist-border-sm p-4 font-bold focus:ring-2 focus:ring-brand-blue outline-none transition-all resize-none"
                                            placeholder="Tell us about your vision..."
                                        />
                                    </div>

                                    <Magnetic strength={0.2}>
                                        <button
                                            type="submit"
                                            className="w-full bg-deep-black text-brand-yellow py-6 text-2xl font-display uppercase brutalist-border brutalist-shadow-blue hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all"
                                        >
                                            SEND INQUIRY
                                        </button>
                                    </Magnetic>
                                </form>
                            </>
                        ) : (
                            <div className="text-center py-20 flex flex-col items-center gap-6">
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    className="w-24 h-24 bg-brand-yellow rounded-full flex items-center justify-center brutalist-border shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                                >
                                    <span className="material-symbols-outlined text-5xl text-deep-black font-bold">check</span>
                                </motion.div>
                                <h2 className="text-4xl font-display uppercase tracking-tight">MISSION RECEIVED</h2>
                                <p className="text-xl font-bold uppercase tracking-widest text-deep-black/60">Our team will reach out within 24 hours.</p>
                            </div>
                        )}
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default ContactModal;
