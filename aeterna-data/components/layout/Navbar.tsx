"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_LINKS } from "@/lib/constants";
import { openBookingModal } from "@/components/ui/BookingModal";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <header
                className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 backdrop-blur-xl ${scrolled
                    ? "bg-[#050505]/90 border-b border-[var(--color-border)]"
                    : "bg-transparent border-b border-transparent"
                    }`}
            >
                <div className="max-w-7xl mx-auto px-6 h-14 lg:h-16 flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-1 shrink-0">
                        <span className="text-[var(--color-text-primary)] font-bold text-xl">
                            Aeterna
                        </span>
                        <span className="text-[var(--color-text-primary)] font-bold text-xl">
                            Data
                        </span>
                    </Link>

                    <nav className="hidden md:flex items-center gap-8">
                        {NAV_LINKS.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                className="text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] text-sm font-medium transition-colors"
                            >
                                {link.label}
                            </a>
                        ))}
                    </nav>

                    <div className="flex items-center gap-4">
                        <button
                            onClick={openBookingModal}
                            className="hidden md:inline-flex bg-[var(--color-accent-cta)] text-white px-5 py-2.5 rounded-lg font-semibold text-sm hover:bg-[var(--color-accent-cta-hover)] transition-colors duration-200"
                        >
                            Request Pilot
                        </button>
                        <button
                            className="md:hidden text-[var(--color-text-primary)] p-1 z-50"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            aria-label="Toggle menu"
                        >
                            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </header>

            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed inset-0 z-40 bg-[var(--color-bg-base)] pt-20 px-6 md:hidden flex flex-col"
                    >
                        <nav className="flex flex-col gap-6 mt-8">
                            {NAV_LINKS.map((link) => (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="text-[var(--color-text-primary)] text-xl font-semibold border-b border-[var(--color-border)] pb-4"
                                >
                                    {link.label}
                                </a>
                            ))}
                            <button
                                onClick={() => {
                                    setMobileMenuOpen(false);
                                    openBookingModal();
                                }}
                                className="bg-[var(--color-accent-cta)] text-white w-full py-4 rounded-lg font-semibold text-base mt-4 hover:bg-[var(--color-accent-cta-hover)] transition-colors duration-200"
                            >
                                Request Pilot
                            </button>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
