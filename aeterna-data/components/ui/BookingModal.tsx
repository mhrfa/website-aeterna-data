"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export function openBookingModal() {
    window.dispatchEvent(new Event("open-booking-modal"));
}

export default function BookingModal() {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const open = () => setIsOpen(true);
        window.addEventListener("open-booking-modal", open);
        return () => window.removeEventListener("open-booking-modal", open);
    }, []);

    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === "Escape") setIsOpen(false);
        };
        if (isOpen) window.addEventListener("keydown", handleEsc);
        return () => window.removeEventListener("keydown", handleEsc);
    }, [isOpen]);

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-start justify-center pt-32 px-4">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsOpen(false)}
                        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                    />

                    {/* Modal Panel */}
                    <motion.div
                        initial={{ scale: 0.95, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.95, opacity: 0 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="relative w-full max-w-md bg-[var(--color-bg-surface)] border border-[var(--color-border)] rounded-2xl p-8 shadow-2xl"
                    >
                        <button
                            onClick={() => setIsOpen(false)}
                            className="absolute top-4 right-4 text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] transition-colors"
                            aria-label="Close modal"
                        >
                            <X className="w-5 h-5" />
                        </button>

                        <h3 className="text-2xl font-semibold mb-2 text-[var(--color-text-primary)]">
                            Request a Pilot or Consultation
                        </h3>
                        <p className="text-[var(--color-text-secondary)] text-sm mb-6">
                            A member of the Aeterna Data team will respond within 48 business hours to schedule a discovery call.
                        </p>

                        <form
                            onSubmit={(e) => {
                                e.preventDefault();
                                alert("Request submitted. We will be in touch.");
                                setIsOpen(false);
                            }}
                            className="space-y-4"
                        >
                            <div>
                                <label htmlFor="name" className="block text-xs font-semibold tracking-widest uppercase text-[var(--color-text-muted)] mb-2">
                                    Name
                                </label>
                                <input
                                    id="name"
                                    type="text"
                                    required
                                    className="w-full bg-[var(--color-bg-elevated)] border border-[var(--color-border)] rounded-lg px-4 py-3 text-[var(--color-text-primary)] focus:outline-none focus:border-[var(--color-accent-cta)] focus:ring-1 focus:ring-[var(--color-accent-cta)] transition-colors"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-xs font-semibold tracking-widest uppercase text-[var(--color-text-muted)] mb-2">
                                    Business Email
                                </label>
                                <input
                                    id="email"
                                    type="email"
                                    required
                                    className="w-full bg-[var(--color-bg-elevated)] border border-[var(--color-border)] rounded-lg px-4 py-3 text-[var(--color-text-primary)] focus:outline-none focus:border-[var(--color-accent-cta)] focus:ring-1 focus:ring-[var(--color-accent-cta)] transition-colors"
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-[var(--color-accent-cta)] text-white font-semibold rounded-lg px-4 py-3 mt-4 hover:opacity-90 transition-opacity"
                            >
                                Send Request
                            </button>
                        </form>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
