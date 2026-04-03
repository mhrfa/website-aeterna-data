import type { Metadata } from 'next';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import AnimatedSection from '@/components/ui/AnimatedSection';

export const metadata: Metadata = {
    title: 'About — Aeterna Data',
    description: 'Aeterna Data is a specialized image annotation company focused on computer vision datasets and visual AI evaluation. Small team. Structured workflows. IAA-measured quality.',
    robots: {
        index: true,
        follow: true,
    },
};

export default function AboutPage() {
    return (
        <main className="min-h-screen flex flex-col relative w-full overflow-hidden">
            <style dangerouslySetInnerHTML={{
                __html: `
                @keyframes orb-breathe {
                    0%, 100% { transform: scale(1); }
                    50% { transform: scale(1.06); }
                }
                .animate-orb-breathe {
                    animation: orb-breathe 14s ease-in-out infinite;
                }
                `
            }} />

            {/* ── PAGE HERO ── */}
            <section className="relative min-h-[60vh] flex flex-col items-center justify-center pt-32 pb-16 text-center w-full">
                {/* Background Orb Layer */}
                <div
                    className="absolute inset-0 pointer-events-none -z-10 animate-orb-breathe"
                    style={{
                        background: "radial-gradient(ellipse 90% 65% at 50% -5%, rgba(88, 28, 255, 0.18) 0%, rgba(14, 165, 233, 0.10) 45%, rgba(20, 184, 166, 0.05) 70%, transparent 100%)"
                    }}
                />

                <div className="max-w-4xl mx-auto px-6 relative z-10 w-full">
                    {/* Breadcrumb */}
                    <nav aria-label="Breadcrumb" className="flex items-center justify-center gap-1.5 text-sm mb-8">
                        <Link
                            href="/"
                            className="text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] transition-colors"
                        >
                            Home
                        </Link>
                        <ChevronRight className="w-3.5 h-3.5 text-[var(--color-text-muted)]" />
                        <span className="text-[var(--color-text-muted)]">About</span>
                    </nav>

                    {/* Pre-heading Pill */}
                    <div
                        className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-8 border"
                        style={{ backgroundColor: "rgba(255,255,255,0.05)", borderColor: "rgba(255,255,255,0.10)" }}
                    >
                        <span className="text-[var(--color-text-muted)] text-xs font-semibold tracking-widest uppercase">
                            Our Story
                        </span>
                    </div>

                    {/* Headline */}
                    <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight leading-none text-[var(--color-text-primary)] mx-auto">
                        Designed for Teams That Require Reliable Annotation.
                    </h1>

                    {/* Subheadline */}
                    <p className="text-[var(--color-text-secondary)] text-lg lg:text-xl max-w-2xl mx-auto mt-6">
                        Aeterna Data is a specialized image annotation company that works with computer vision datasets and visual AI evaluation. We are a small team with structured workflows, and we check the quality of every batch to keep our standards high.
                    </p>
                </div>
            </section>

            {/* ── SECTION 1: The Problem We Solve ── */}
            <AnimatedSection>
                <section className="py-20 relative w-full">
                    <div className="max-w-4xl mx-auto px-6">
                        <p className="text-xs uppercase tracking-widest text-[var(--color-text-muted)] font-semibold mb-4">
                            The Problem
                        </p>
                        <h2 className="text-3xl lg:text-4xl font-semibold text-[var(--color-text-primary)] mb-8">
                            The Problem We Solve
                        </h2>
                        <div className="text-[var(--color-text-secondary)] text-base leading-relaxed space-y-5 max-w-3xl">
                            <p>
                                Most annotation vendors operate as large crowd-labor platforms, distributing tasks to anonymous workers with minimal quality oversight. This approach can be effective for simple, high-volume labeling. However, for computer vision training datasets that require consistent boundary rules, class-specific guidelines, and measurable quality, it often fails to deliver the necessary standards.
                            </p>
                            <p>
                                Aeterna Data was created to meet this need. Our small, dedicated team follows clear annotation workflows. We measure IAA for each batch, run a pilot phase to check our process, and set up formal agreements before sharing data. We use the same team and standards for every project.
                            </p>
                        </div>
                    </div>
                </section>
            </AnimatedSection>

            {/* ── SECTION 2: How We Are Different ── */}
            <AnimatedSection>
                <section className="py-20 relative w-full bg-[var(--color-bg-base)]">
                    <div className="max-w-5xl mx-auto px-6">
                        <p className="text-xs uppercase tracking-widest text-[var(--color-text-muted)] font-semibold mb-4">
                            Comparison
                        </p>
                        <h2 className="text-3xl lg:text-4xl font-semibold text-[var(--color-text-primary)] mb-12">
                            How We Are Different
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {/* Column 1 — Crowd Platforms */}
                            <div className="bg-[var(--color-bg-surface)] border border-[var(--color-border)] rounded-2xl p-8">
                                <h3 className="font-semibold text-[var(--color-text-primary)] mb-6">Crowd Platforms</h3>
                                <ul className="space-y-4 text-sm text-[var(--color-text-secondary)] leading-relaxed">
                                    <li className="flex items-start gap-3">
                                        <span className="text-[rgba(239,68,68,0.7)] mt-0.5 shrink-0">✗</span>
                                        Anonymous worker pools
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-[rgba(239,68,68,0.7)] mt-0.5 shrink-0">✗</span>
                                        No dedicated team is assigned to each project
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-[rgba(239,68,68,0.7)] mt-0.5 shrink-0">✗</span>
                                        Quality varies between batches
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-[rgba(239,68,68,0.7)] mt-0.5 shrink-0">✗</span>
                                        No standard exists for formal legal agreements
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-[rgba(239,68,68,0.7)] mt-0.5 shrink-0">✗</span>
                                        Processes are hard to audit or reproduce
                                    </li>
                                </ul>
                            </div>

                            {/* Column 2 — Aeterna Data (highlighted) */}
                            <div className="bg-[var(--color-bg-surface)] border-2 border-[var(--color-accent-cta)] rounded-2xl p-8 relative">
                                <div className="absolute -top-3 left-6">
                                    <span className="bg-[var(--color-accent-cta)] text-white text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
                                        Our Approach
                                    </span>
                                </div>
                                <h3 className="font-semibold text-[var(--color-text-primary)] mb-6">Aeterna Data</h3>
                                <ul className="space-y-4 text-sm text-[var(--color-text-secondary)] leading-relaxed">
                                    <li className="flex items-start gap-3">
                                        <span className="text-[var(--color-accent-cta)] mt-0.5 shrink-0">✓</span>
                                        Dedicated team for each project
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-[var(--color-accent-cta)] mt-0.5 shrink-0">✓</span>
                                        IAA measured for every batch
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-[var(--color-accent-cta)] mt-0.5 shrink-0">✓</span>
                                        Structured pilot phase before production
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-[var(--color-accent-cta)] mt-0.5 shrink-0">✓</span>
                                        NDA and DPA before data sharing
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-[var(--color-accent-cta)] mt-0.5 shrink-0">✓</span>
                                        Consistent annotators used throughout
                                    </li>
                                </ul>
                            </div>

                            {/* Column 3 — Large Enterprise Vendors */}
                            <div className="bg-[var(--color-bg-surface)] border border-[var(--color-border)] rounded-2xl p-8">
                                <h3 className="font-semibold text-[var(--color-text-primary)] mb-6">Large Enterprise Vendors</h3>
                                <ul className="space-y-4 text-sm text-[var(--color-text-secondary)] leading-relaxed">
                                    <li className="flex items-start gap-3">
                                        <span className="text-[rgba(239,68,68,0.7)] mt-0.5 shrink-0">✗</span>
                                        High minimums required
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-[rgba(239,68,68,0.7)] mt-0.5 shrink-0">✗</span>
                                        Long onboarding timelines
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-[rgba(239,68,68,0.7)] mt-0.5 shrink-0">✗</span>
                                        Designed for volume over precision
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-[rgba(239,68,68,0.7)] mt-0.5 shrink-0">✗</span>
                                        Hard to communicate directly
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-[rgba(239,68,68,0.7)] mt-0.5 shrink-0">✗</span>
                                        Not suited to early-stage teams
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
            </AnimatedSection>

            {/* ── SECTION 3: The Founder ── */}
            <AnimatedSection>
                <section className="py-20 relative w-full">
                    <div className="max-w-4xl mx-auto px-6">
                        <p className="text-xs uppercase tracking-widest text-[var(--color-text-muted)] font-semibold mb-4">
                            The Founder
                        </p>
                        <h2 className="text-3xl lg:text-4xl font-semibold text-[var(--color-text-primary)] mb-12">
                            Precision as a Starting Point, Not a Goal.
                        </h2>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                            {/* LEFT COLUMN — Founder details */}
                            <div>
                                <div className="bg-[var(--color-bg-surface)] border border-[var(--color-border)] rounded-2xl p-8">
                                    <h3 className="text-2xl font-bold text-[var(--color-text-primary)]">Muhammad Rifqi Fauzan Arifin</h3>
                                    <p className="text-sm text-[var(--color-text-muted)] mt-1">Founder & Director<br />PT Aeterna Data Intentio Logic</p>


                                </div>
                            </div>

                            {/* RIGHT COLUMN — Founder statement */}
                            <div className="text-[var(--color-text-secondary)] text-base leading-relaxed space-y-5">
                                <p>
                                    Muhammad Rifqi Fauzan Arifin is the founder and lead annotator of Aeterna Data. With over two years of hands-on experience in annotation pipelines, including team management, bounding box labeling, and RLHF evaluation, he established Aeterna Data on the principle that annotation quality must be measurable rather than assumed.
                                </p>
                                <p>
                                    Before founding Aeterna Data, he expanded an annotation team from two to fifty members in one year at his previous company, where he managed large-scale computer vision labeling and quality validation for retail AI training datasets. His leadership and expertise in annotation now strengthen Aeterna Data&apos;s operations.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </AnimatedSection>

            {/* ── SECTION 4: The Quality Standard ── */}
            <AnimatedSection>
                <section className="py-20 relative w-full bg-[var(--color-bg-base)]">
                    <div className="max-w-4xl mx-auto px-6">
                        <p className="text-xs uppercase tracking-widest text-[var(--color-text-muted)] font-semibold mb-4">
                            Quality Standard
                        </p>
                        <h2 className="text-3xl lg:text-4xl font-semibold text-[var(--color-text-primary)] mb-8">
                            Measured. Reported. Guaranteed.
                        </h2>
                        <div className="text-[var(--color-text-secondary)] text-base leading-relaxed mb-12 max-w-3xl">
                            <p>
                                All Aeterna Data annotation batches are held to the same quality standard, regardless of service type or project size. We measure and report inter-annotator agreement as a required threshold with every delivery.
                            </p>
                        </div>

                        {/* Two-metric display block */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
                            <AnimatedSection delay={0}>
                                <div className="bg-[var(--color-bg-surface)] border border-[var(--color-border)] rounded-2xl p-8 h-full">
                                    <div className="text-5xl font-mono font-bold text-[var(--color-text-primary)]">κ ≥ 0.80</div>
                                    <h3 className="text-sm uppercase tracking-widest text-[var(--color-text-muted)] mt-3">Cohen&apos;s Kappa</h3>
                                    <p className="text-sm text-[var(--color-text-secondary)] mt-4 leading-relaxed">
                                        Pairwise IAA. Applied when two annotators label the same item. Default threshold across all standard production batches.
                                    </p>
                                </div>
                            </AnimatedSection>
                            <AnimatedSection delay={0.08}>
                                <div className="bg-[var(--color-bg-surface)] border border-[var(--color-border)] rounded-2xl p-8 h-full">
                                    <div className="text-5xl font-mono font-bold text-[var(--color-text-primary)]">κ ≥ 0.75</div>
                                    <h3 className="text-sm uppercase tracking-widest text-[var(--color-text-muted)] mt-3">Fleiss&apos; Kappa</h3>
                                    <p className="text-sm text-[var(--color-text-secondary)] mt-4 leading-relaxed">
                                        Multi-annotator IAA. Applied when three or more annotators label the same item. Used on complex visual RLHF preference ranking and high-ambiguity annotation tasks.
                                    </p>
                                </div>
                            </AnimatedSection>
                        </div>

                        {/* Three-item process row */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <AnimatedSection delay={0}>
                                <div className="relative isolate pt-4">
                                    <div className="absolute -top-6 -left-4 font-mono text-7xl font-bold text-[rgba(255,255,255,0.06)] -z-10 select-none">01</div>
                                    <h4 className="text-lg font-semibold text-[var(--color-text-primary)]">Pilot Batch First</h4>
                                    <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mt-2">
                                        100–500 records annotated before production begins. Written client approval required before any production work commences.
                                    </p>
                                </div>
                            </AnimatedSection>
                            <AnimatedSection delay={0.08}>
                                <div className="relative isolate pt-4">
                                    <div className="absolute -top-6 -left-4 font-mono text-7xl font-bold text-[rgba(255,255,255,0.06)] -z-10 select-none">02</div>
                                    <h4 className="text-lg font-semibold text-[var(--color-text-primary)]">IAA Every Batch</h4>
                                    <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mt-2">
                                        Cohen&apos;s Kappa and Fleiss&apos; Kappa measured on every production batch without exception.
                                    </p>
                                </div>
                            </AnimatedSection>
                            <AnimatedSection delay={0.16}>
                                <div className="relative isolate pt-4">
                                    <div className="absolute -top-6 -left-4 font-mono text-7xl font-bold text-[rgba(255,255,255,0.06)] -z-10 select-none">03</div>
                                    <h4 className="text-lg font-semibold text-[var(--color-text-primary)]">Rework at Zero Cost</h4>
                                    <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mt-2">
                                        Any batch failing either threshold is reworked before delivery. Rework hours are never billed.
                                    </p>
                                </div>
                            </AnimatedSection>
                        </div>
                    </div>
                </section>
            </AnimatedSection>

            {/* ── SECTION 5: The Contract Stack ── */}
            <AnimatedSection>
                <section className="py-20 relative w-full">
                    <div className="max-w-4xl mx-auto px-6">
                        <p className="text-xs uppercase tracking-widest text-[var(--color-text-muted)] font-semibold mb-4">
                            Contract Stack
                        </p>
                        <h2 className="text-3xl lg:text-4xl font-semibold text-[var(--color-text-primary)] mb-8">
                            Formal Agreements. Every Project.
                        </h2>
                        <div className="text-[var(--color-text-secondary)] text-base leading-relaxed mb-12 max-w-3xl">
                            <p>
                                Our training datasets are proprietary. At Aeterna Data, we handle every project under a clear legal framework. We always sign an NDA and a DPA before sharing any data.
                            </p>
                        </div>

                        <div className="flex flex-col">
                            <div className="border-b border-[var(--color-border)] pb-6 mb-6">
                                <span className="text-xs uppercase tracking-widest font-mono text-[var(--color-text-muted)] bg-[var(--color-bg-elevated)] px-3 py-1 rounded-full inline-block">
                                    Stage 1 — Day One
                                </span>
                                <h3 className="text-base font-semibold text-[var(--color-text-primary)] mt-3">Non-Disclosure Agreement (NDA)</h3>
                                <p className="text-sm text-[var(--color-text-secondary)] mt-1 leading-relaxed">
                                    Mutual. Signed first. Every annotator on your project also signs an individual NDA before accessing your platform.
                                </p>
                            </div>
                            <div className="border-b border-[var(--color-border)] pb-6 mb-6">
                                <span className="text-xs uppercase tracking-widest font-mono text-[var(--color-text-muted)] bg-[var(--color-bg-elevated)] px-3 py-1 rounded-full inline-block">
                                    Stage 2 — After Discovery Call
                                </span>
                                <h3 className="text-base font-semibold text-[var(--color-text-primary)] mt-3">Data Processing Agreement (DPA)</h3>
                                <p className="text-sm text-[var(--color-text-secondary)] mt-1 leading-relaxed">
                                    GDPR Article 28 compliant. Defines how we process, store, and protect your data throughout the engagement.
                                </p>
                            </div>
                            <div className="pb-6">
                                <span className="text-xs uppercase tracking-widest font-mono text-[var(--color-text-muted)] bg-[var(--color-bg-elevated)] px-3 py-1 rounded-full inline-block">
                                    Stage 2 — After Discovery Call
                                </span>
                                <h3 className="text-base font-semibold text-[var(--color-text-primary)] mt-3">Data Security Policy</h3>
                                <p className="text-sm text-[var(--color-text-secondary)] mt-1 leading-relaxed">
                                    Our internal security standards for handling client datasets. Covers access controls, storage protocols, and annotator device requirements.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </AnimatedSection>

            {/* ── SECTION 6: Who We Work With ── */}
            <AnimatedSection>
                <section className="py-20 relative w-full bg-[var(--color-bg-base)]">
                    <div className="max-w-4xl mx-auto px-6">
                        <p className="text-xs uppercase tracking-widest text-[var(--color-text-muted)] font-semibold mb-4">
                            Ideal Clients
                        </p>
                        <h2 className="text-3xl lg:text-4xl font-semibold text-[var(--color-text-primary)] mb-12">
                            Who We Work With
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="bg-[var(--color-bg-surface)] border border-[var(--color-border)] rounded-2xl p-8">
                                <p className="font-semibold text-[var(--color-text-primary)] mb-6">Good fit:</p>
                                <ul className="space-y-4 text-sm text-[var(--color-text-secondary)] leading-relaxed">
                                    <li className="flex items-start gap-3">
                                        <span className="text-[var(--color-accent-cta)] mt-0.5 shrink-0">✓</span>
                                        AI startups building computer vision models that need reliable annotation but prefer not to work with large vendors
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-[var(--color-accent-cta)] mt-0.5 shrink-0">✓</span>
                                        Research labs preparing image datasets for model training or benchmarking
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-[var(--color-accent-cta)] mt-0.5 shrink-0">✓</span>
                                        ML teams at growing companies with annotation needs that are too specific for standard crowd platforms
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-[var(--color-accent-cta)] mt-0.5 shrink-0">✓</span>
                                        Teams that have struggled with inconsistent quality from crowd annotation services
                                    </li>
                                </ul>
                            </div>
                            <div className="bg-[var(--color-bg-surface)] border border-[var(--color-border)] rounded-2xl p-8">
                                <p className="font-semibold text-[var(--color-text-primary)] mb-6">Not the right fit:</p>
                                <ul className="space-y-4 text-sm text-[var(--color-text-secondary)] leading-relaxed">
                                    <li className="flex items-start gap-3">
                                        <span className="text-[rgba(239,68,68,0.7)] mt-0.5 shrink-0">✗</span>
                                        Teams seeking to label millions of images and require rapid delivery
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-[rgba(239,68,68,0.7)] mt-0.5 shrink-0">✗</span>
                                        Projects without strict quality standards or detailed annotation guidelines
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-[rgba(239,68,68,0.7)] mt-0.5 shrink-0">✗</span>
                                        Teams that need a full platform, not just an annotation team
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
            </AnimatedSection>

            {/* ── BOTTOM CTA STRIP ── */}
            <AnimatedSection>
                <section className="py-20 border-t border-[var(--color-border)] border-b relative w-full overflow-hidden bg-[var(--color-bg-base)]">
                    <div
                        className="absolute inset-0 pointer-events-none -z-10"
                        style={{
                            background: "radial-gradient(ellipse 60% 80% at 50% 100%, rgba(74, 124, 255, 0.08) 0%, transparent 70%)"
                        }}
                    />
                    <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
                        <h2 className="text-3xl lg:text-4xl font-bold text-[var(--color-text-primary)] mb-6">
                            Ready to Prove the Pipeline?
                        </h2>
                        <p className="text-[var(--color-text-secondary)] text-lg mb-10 leading-relaxed max-w-2xl mx-auto">
                            Start with a paid pilot. One week. Your dashboard. A complete IAA quality report on delivery. No long-term commitment required. Pilot fee credited to your first invoice.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <Link
                                href="/contact"
                                className="bg-[var(--color-accent-cta)] text-white font-semibold px-8 py-3.5 rounded-lg hover:bg-[var(--color-accent-cta-hover)] transition-colors duration-200"
                            >
                                Request a Pilot
                            </Link>
                            <Link
                                href="/contact"
                                className="border border-[var(--color-border-subtle)] text-[var(--color-text-secondary)] px-8 py-3.5 rounded-lg hover:border-[var(--color-border-hover)] hover:text-[var(--color-text-primary)] transition-all duration-200"
                            >
                                Book a Consultation
                            </Link>
                        </div>
                    </div>
                </section>
            </AnimatedSection>
        </main>
    );
}
