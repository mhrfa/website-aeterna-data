"use client";

import AnimatedSection from "@/components/ui/AnimatedSection";
import { HERO } from "@/lib/constants";
import { openBookingModal } from "@/components/ui/BookingModal";
import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center pt-[6rem] pb-[8rem] text-center overflow-hidden w-full">
            {/* Background Orb Layer */}
            <motion.div
                animate={{ scale: [1, 1.06, 1] }}
                transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", repeatType: "mirror" }}
                className="absolute inset-0 pointer-events-none -z-10"
                style={{
                    background: "radial-gradient(ellipse 90% 65% at 50% -5%, var(--color-orb-purple) 0%, var(--color-orb-blue) 45%, var(--color-orb-teal) 70%, transparent 100%)"
                }}
            />

            <AnimatedSection className="max-w-5xl mx-auto px-6 relative z-10 w-full" delay={0.1}>
                {/* Pre-heading Pill */}
                <div
                    className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-8 border"
                    style={{ backgroundColor: "rgba(255,255,255,0.05)", borderColor: "rgba(255,255,255,0.10)" }}
                >
                    <div className="w-2 h-2 rounded-full bg-[var(--color-accent-cta)] animate-pulse" />
                    <span className="text-[var(--color-text-muted)] text-xs font-semibold tracking-widest uppercase">
                        {HERO.pillText}
                    </span>
                </div>

                {/* Headline */}
                <h1 className="text-6xl lg:text-8xl font-bold tracking-tight lg:tracking-[-0.04em] leading-none text-[var(--color-text-primary)] mb-6 flex flex-col gap-2 max-w-4xl mx-auto">
                    <span>{HERO.headline}</span>
                    <span style={{
                        background: "linear-gradient(135deg, var(--color-text-primary) 0%, rgba(245,243,239,0.65) 100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent"
                    }}>
                        {HERO.headlineItalic}
                    </span>
                </h1>

                {/* Subheadline */}
                <p className="text-[var(--color-text-secondary)] text-lg lg:text-xl max-w-2xl mx-auto mt-8">
                    {HERO.subHeadline}
                </p>

                {/* CTA Row */}
                <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <button
                        onClick={() => {
                            alert("Open booking modal");
                            openBookingModal();
                        }}
                        className="bg-[var(--color-accent-cta)] text-white font-semibold px-8 py-3.5 rounded-lg text-base hover:bg-[var(--color-accent-cta-hover)] transition-colors duration-200"
                    >
                        {HERO.ctaPrimary}
                    </button>
                    <button
                        onClick={() => {
                            alert("Open booking modal");
                            openBookingModal();
                        }}
                        className="bg-transparent border border-[var(--color-border-subtle)] text-[var(--color-text-secondary)] px-8 py-3.5 rounded-lg text-base hover:border-[var(--color-border-hover)] hover:text-[var(--color-text-primary)] transition-all duration-200"
                    >
                        {HERO.ctaSecondary}
                    </button>
                </div>

                {/* Stat Strip */}
                <div className="mt-20 flex flex-wrap justify-center gap-x-10 gap-y-4">
                    {[
                        { value: "κ ≥ 0.80 / κ ≥ 0.75", label: "Cohen's & Fleiss' Every Batch" },
                        { value: "Flat Rate", label: "Credited Pilot" },
                        { value: "72hr", label: "Breach Notification SLA" },
                        { value: "48hr", label: "Custom Scoping Response" }
                    ].map((stat, idx, arr) => (
                        <div key={idx} className="flex items-center">
                            <span className="font-mono text-[var(--color-text-primary)] font-semibold text-sm">
                                {stat.value}
                            </span>
                            <span className="text-[var(--color-text-muted)] text-sm ml-2">
                                {stat.label}
                            </span>
                            {idx !== arr.length - 1 && (
                                <span className="text-[var(--color-border-subtle)] ml-10 hidden sm:inline-block">|</span>
                            )}
                        </div>
                    ))}
                </div>
            </AnimatedSection>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: [0, 8, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-12 left-1/2 -translate-x-1/2 text-[var(--color-text-muted)]"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-chevron-down opacity-50 block mx-auto"
                >
                    <path d="m6 9 6 6 6-6" />
                </svg>
            </motion.div>
        </section>
    );
}
