// ContactModal.tsx
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
        message: '',
    });
    const [submitted, setSubmitted] = useState(false);
    const [isSending, setIsSending] = useState(false);
    const [errorMsg, setErrorMsg] = useState<string | null>(null);

    if (!isOpen) return null;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setErrorMsg(null);
        setIsSending(true);

        try {
            const subject = encodeURIComponent(`New Inquiry: ${formData.service}`);
            const body = encodeURIComponent(
                `Name: ${formData.name}\nEmail: ${formData.email}\nService: ${formData.service}\n\nMessage:\n${formData.message}`
            );
            const mailtoLink = `mailto:contact@merchand.co?subject=${subject}&body=${body}`;
            window.location.href = mailtoLink;
            setSubmitted(true);
            setTimeout(() => {
                setSubmitted(false);
                setFormData({ name: '', email: '', service: 'Custom Design', message: '' });
                onClose();
            }, 2000);
        } catch (err: any) {
            setErrorMsg(err?.message || 'Something went wrong');
        } finally {
            setIsSending(false);
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-deep-black/60 backdrop-blur-md">
                    <div
                        className="absolute inset-0 cursor-pointer"
                        onMouseDown={(e) => { if (e.target === e.currentTarget) onClose(); }}
                    />

                    <motion.div
                        initial={{ scale: 0.98, opacity: 0, y: 10 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.98, opacity: 0, y: 10 }}
                        transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                        className="bg-deep-black w-full max-w-md max-h-[90vh] flex flex-col border border-white/10 shadow-2xl relative overflow-hidden rounded-sm"
                    >
                        {/* header */}
                        <div className="sticky top-0 z-20 bg-deep-black/90 backdrop-blur-sm border-b border-white/5 px-6 py-4">
                            <div className="flex items-center justify-between">
                                <h2 className="text-xl font-display text-white uppercase">
                                    Inquiry <span className="text-brand-blue font-normal">v1</span>
                                </h2>

                                <button
                                    onClick={onClose}
                                    className="h-8 w-8 grid place-items-center bg-white/5 hover:bg-white/10 border border-white/5 transition-colors rounded-full"
                                    aria-label="Close"
                                >
                                    <span className="material-symbols-outlined text-[18px] text-white/60">close</span>
                                </button>
                            </div>
                        </div>

                        <div className="flex-1 overflow-y-auto custom-scrollbar p-6">
                            {!submitted ? (
                                <>
                                    <div className="mb-8">
                                        <p className="text-[9px] font-bold uppercase text-white/40 mb-1">
                                            Project Brief
                                        </p>
                                        <h3 className="text-base font-body text-white/80">
                                            Start your neural project mapping.
                                        </h3>
                                    </div>

                                    {errorMsg && (
                                        <div className="mb-6 px-4 py-2 border-brown/30 bg-brown/5">
                                            <p className="text-xs text-brown">{errorMsg}</p>
                                        </div>
                                    )}

                                    <form onSubmit={handleSubmit} className="space-y-4">
                                        <div className="space-y-1.5">
                                            <label className="text-[9px] font-bold uppercase text-white/30 px-0.5">Identify</label>
                                            <input
                                                required
                                                type="text"
                                                value={formData.name}
                                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                className="w-full bg-white/5 border border-white/10 p-3 text-sm font-body text-white placeholder:text-white/20 outline-none focus:border-brand-blue/30 transition-all rounded-sm"
                                                placeholder="Name"
                                                disabled={isSending}
                                            />
                                        </div>

                                        <div className="space-y-1.5">
                                            <label className="text-[9px] font-bold uppercase text-white/30 px-0.5">Endpoint</label>
                                            <input
                                                required
                                                type="email"
                                                value={formData.email}
                                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                className="w-full bg-white/5 border border-white/10 p-3 text-sm font-body text-white placeholder:text-white/20 outline-none focus:border-brand-blue/30 transition-all rounded-sm"
                                                placeholder="Email"
                                                disabled={isSending}
                                            />
                                        </div>

                                        <div className="space-y-1.5">
                                            <label className="text-[9px] font-bold uppercase text-white/30 px-0.5">Sector</label>
                                            <select
                                                value={formData.service}
                                                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                                                className="w-full bg-white/5 border border-white/10 p-3 text-sm font-body text-white/80 outline-none cursor-pointer rounded-sm"
                                                disabled={isSending}
                                            >
                                                <option className="bg-deep-black">Screen Printing</option>
                                                <option className="bg-deep-black">Embroidery</option>
                                                <option className="bg-deep-black">Custom Design</option>
                                                <option className="bg-deep-black">Bulk Order</option>
                                            </select>
                                        </div>

                                        <div className="space-y-1.5">
                                            <label className="text-[9px] font-bold uppercase text-white/30 px-0.5">Logic</label>
                                            <textarea
                                                required
                                                value={formData.message}
                                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                                className="w-full h-24 bg-white/5 border border-white/10 p-3 text-sm font-body text-white placeholder:text-white/20 outline-none focus:border-brand-blue/30 transition-all resize-none rounded-sm"
                                                placeholder="Scope"
                                                disabled={isSending}
                                            />
                                        </div>

                                        <button
                                            type="submit"
                                            disabled={isSending}
                                            className="w-full py-3 mt-4 bg-brand-blue text-white text-[10px] font-black uppercase hover:opacity-90 disabled:opacity-20 transition-all rounded-sm"
                                        >
                                            {isSending ? 'Transmitting...' : 'Initialize'}
                                        </button>
                                    </form>
                                </>
                            ) : (
                                <div className="text-center py-12 flex flex-col items-center gap-4">
                                    <div className="w-12 h-12 border border-brand-yellow/30 flex items-center justify-center rounded-full">
                                        <span className="material-symbols-outlined text-brand-yellow text-xl">check</span>
                                    </div>
                                    <h2 className="text-lg font-display text-white uppercase">Received</h2>
                                    <p className="text-[10px] font-bold uppercase text-white/40">
                                        Response within 24 standard hours.
                                    </p>
                                </div>
                            )}
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default ContactModal;
