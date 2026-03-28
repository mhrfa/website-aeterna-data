"use client";

import AnimatedSection from "@/components/ui/AnimatedSection";
import { HERO } from "@/lib/constants";
import Link from "next/link";
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
                {/* Headline */}
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight lg:tracking-[-0.03em] leading-tight text-[var(--color-text-primary)] mb-6 max-w-4xl mx-auto">
                    {HERO.headline}
                </h1>

                {/* Subheadline */}
                <p className="text-[var(--color-text-secondary)] text-lg lg:text-xl max-w-2xl mx-auto mt-8">
                    {HERO.subHeadline}
                </p>

                {/* CTA Row */}
                <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <Link
                        href="/contact"
                        className="bg-[var(--color-accent-cta)] text-white font-semibold px-8 py-3.5 rounded-lg text-base hover:bg-[var(--color-accent-cta-hover)] transition-colors duration-200"
                    >
                        {HERO.ctaPrimary}
                    </Link>
                    <Link
                        href="/services"
                        className="bg-transparent border border-[var(--color-border-subtle)] text-[var(--color-text-secondary)] px-8 py-3.5 rounded-lg text-base hover:border-[var(--color-border-hover)] hover:text-[var(--color-text-primary)] transition-all duration-200"
                    >
                        {HERO.ctaSecondary}
                    </Link>
                </div>

                {/* Stat Strip */}
                <div className="mt-20 flex flex-wrap justify-center gap-x-10 gap-y-4">
                    {[
                        { value: "κ ≥ 0.80", label: "Cohen's Kappa" },
                        { value: "κ ≥ 0.75", label: "Fleiss' Kappa" },
                        { value: "Flat Rate", label: "Pilot Entry" },
                        { value: "5", label: "Core Services" }
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
