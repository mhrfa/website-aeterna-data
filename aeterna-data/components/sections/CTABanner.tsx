"use client";

import { CTA } from "@/lib/constants";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { openBookingModal } from "@/components/ui/BookingModal";

export default function CTABanner() {
    return (
        <section className="py-24 relative w-full border-t border-b border-[var(--color-border)] overflow-hidden bg-[var(--color-bg-base)]">
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(74,124,255,0.08)_0%,transparent_60%)] pointer-events-none -z-10" />
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[var(--color-border)] to-transparent opacity-50" />
            <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[var(--color-border)] to-transparent opacity-50" />

            <AnimatedSection className="max-w-3xl mx-auto px-6 text-center relative z-10">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--color-text-primary)] mb-6">
                    {CTA.title}
                </h2>
                <p className="text-[var(--color-text-secondary)] text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
                    {CTA.description}
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <button
                        onClick={openBookingModal}
                        className="w-full sm:w-auto bg-[var(--color-accent-cta)] text-white font-semibold px-8 py-3.5 rounded-lg text-base hover:bg-[var(--color-accent-cta-hover)] transition-colors duration-200"
                    >
                        {CTA.primary}
                    </button>
                    <button
                        onClick={openBookingModal}
                        className="w-full sm:w-auto bg-transparent border border-[var(--color-border-subtle)] text-[var(--color-text-secondary)] font-semibold px-8 py-3.5 rounded-lg text-base hover:border-[var(--color-border-hover)] hover:text-[var(--color-text-primary)] transition-all duration-200"
                    >
                        {CTA.secondary}
                    </button>
                </div>
            </AnimatedSection>
        </section>
    );
}
