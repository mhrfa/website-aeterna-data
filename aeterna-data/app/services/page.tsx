import type { Metadata } from 'next';
import Link from 'next/link';
import { ChevronRight, Scan, Languages, BrainCircuit, ShieldCheck, ArrowRight } from 'lucide-react';
import AnimatedSection from '@/components/ui/AnimatedSection';

export const metadata: Metadata = {
    title: 'Services — Aeterna Data',
    description: 'Four core data annotation verticals. One managed workforce. Explore Computer Vision, NLP, RLHF, and Data Validation services for EU enterprise AI teams.',
    robots: {
        index: true,
        follow: true,
    },
};

export default function ServicesIndexPage() {
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
                        <span className="text-[var(--color-text-muted)]">Services</span>
                    </nav>

                    {/* Pre-heading Pill */}
                    <div
                        className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-8 border"
                        style={{ backgroundColor: "rgba(255,255,255,0.05)", borderColor: "rgba(255,255,255,0.10)" }}
                    >
                        <span className="text-[var(--color-text-muted)] text-xs font-semibold tracking-widest uppercase">
                            Core Competencies
                        </span>
                    </div>

                    {/* Headline */}
                    <h1 className="text-5xl lg:text-7xl font-bold tracking-tight leading-none text-[var(--color-text-primary)] mx-auto">
                        Four Verticals.<br />One Managed Workforce.
                    </h1>

                    {/* Subheadline */}
                    <p className="text-[var(--color-text-secondary)] text-lg lg:text-xl max-w-2xl mx-auto mt-6">
                        We operate as an embedded team inside your stack. No platform to adopt. No onboarding overhead. Just rigorous, IAA-measured annotation data delivered to your environment.
                    </p>
                </div>
            </section>

            {/* ── SECTION 1: Services Grid ── */}
            <AnimatedSection>
                <section className="py-20 relative w-full bg-[var(--color-bg-base)]">
                    <div className="max-w-5xl mx-auto px-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                            {/* Service 1: Computer Vision */}
                            <AnimatedSection delay={0.10}>
                                <div className="group bg-[var(--color-bg-surface)] border border-[var(--color-border)] rounded-2xl p-8 hover:bg-[var(--color-bg-elevated)] hover:border-[var(--color-border-hover)] transition-all duration-300 flex flex-col h-full relative overflow-hidden">
                                    <div className="absolute top-0 right-0 -mt-6 -mr-4 font-mono text-8xl font-bold text-[rgba(255,255,255,0.02)] -z-10 select-none pointer-events-none transition-transform duration-500 group-hover:scale-110">
                                        01
                                    </div>
                                    <Scan className="w-8 h-8 text-[var(--color-text-muted)] mb-6 group-hover:text-[var(--color-accent-cta)] transition-colors duration-300" aria-hidden="true" />
                                    <h2 className="text-2xl font-bold text-[var(--color-text-primary)] mb-4">
                                        Computer Vision & Spatial Annotation
                                    </h2>
                                    <p className="text-base text-[var(--color-text-secondary)] leading-relaxed mb-8 flex-grow">
                                        High-throughput 2D labeling for autonomous systems, robotics, and visual AI. Strictly managed QA pipelines ensure production-grade geometric precision and consistent class attribution at scale. We eliminate jitter, enforce occluded boundary rules, and validate depth ordering.
                                    </p>

                                    <div className="flex flex-wrap gap-2 mb-8">
                                        <span className="text-xs border border-[var(--color-border-subtle)] bg-[rgba(255,255,255,0.02)] text-[var(--color-text-secondary)] px-2.5 py-1 rounded-md">Bounding Boxes</span>
                                        <span className="text-xs border border-[var(--color-border-subtle)] bg-[rgba(255,255,255,0.02)] text-[var(--color-text-secondary)] px-2.5 py-1 rounded-md">Polygon Segmentation</span>
                                        <span className="text-xs border border-[var(--color-border-subtle)] bg-[rgba(255,255,255,0.02)] text-[var(--color-text-secondary)] px-2.5 py-1 rounded-md">Keypoint Tracking</span>
                                    </div>

                                    <div className="border-t border-[var(--color-border)] pt-6 mt-auto">
                                        <Link href="/services/computer-vision" className="inline-flex items-center font-semibold text-[var(--color-text-primary)] hover:text-[var(--color-accent-cta)] transition-colors duration-200">
                                            Read the Guide <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                                        </Link>
                                    </div>
                                </div>
                            </AnimatedSection>

                            {/* Service 2: Advanced NLP */}
                            <AnimatedSection delay={0.20}>
                                <div className="group bg-[var(--color-bg-surface)] border border-[var(--color-border)] rounded-2xl p-8 hover:bg-[var(--color-bg-elevated)] hover:border-[var(--color-border-hover)] transition-all duration-300 flex flex-col h-full relative overflow-hidden">
                                    <div className="absolute top-0 right-0 -mt-6 -mr-4 font-mono text-8xl font-bold text-[rgba(255,255,255,0.02)] -z-10 select-none pointer-events-none transition-transform duration-500 group-hover:scale-110">
                                        02
                                    </div>
                                    <Languages className="w-8 h-8 text-[var(--color-text-muted)] mb-6 group-hover:text-[var(--color-accent-cta)] transition-colors duration-300" aria-hidden="true" />
                                    <h2 className="text-2xl font-bold text-[var(--color-text-primary)] mb-4">
                                        Advanced NLP & Multilingual Linguistic Analysis
                                    </h2>
                                    <p className="text-base text-[var(--color-text-secondary)] leading-relaxed mb-8 flex-grow">
                                        Academic-grade text annotation for complex LLM training pipelines. We go beyond basic tagging — delivering structural language comprehension, cultural accuracy, and rigorous translation QA that measures semantic preservation.
                                    </p>

                                    <div className="flex flex-wrap gap-2 mb-8">
                                        <span className="text-xs border border-[var(--color-border-subtle)] bg-[rgba(255,255,255,0.02)] text-[var(--color-text-secondary)] px-2.5 py-1 rounded-md">Deep Semantic Tagging</span>
                                        <span className="text-xs border border-[var(--color-border-subtle)] bg-[rgba(255,255,255,0.02)] text-[var(--color-text-secondary)] px-2.5 py-1 rounded-md">Translation QA</span>
                                        <span className="text-xs border border-[var(--color-border-subtle)] bg-[rgba(255,255,255,0.02)] text-[var(--color-text-secondary)] px-2.5 py-1 rounded-md">NER</span>
                                    </div>

                                    <div className="border-t border-[var(--color-border)] pt-6 mt-auto">
                                        <Link href="/services/nlp" className="inline-flex items-center font-semibold text-[var(--color-text-primary)] hover:text-[var(--color-accent-cta)] transition-colors duration-200">
                                            Read the Guide <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                                        </Link>
                                    </div>
                                </div>
                            </AnimatedSection>

                            {/* Service 3: RLHF */}
                            <AnimatedSection delay={0.30}>
                                <div className="group bg-[var(--color-bg-surface)] border border-[var(--color-border)] rounded-2xl p-8 hover:bg-[var(--color-bg-elevated)] hover:border-[var(--color-border-hover)] transition-all duration-300 flex flex-col h-full relative overflow-hidden">
                                    <div className="absolute top-0 right-0 -mt-6 -mr-4 font-mono text-8xl font-bold text-[rgba(255,255,255,0.02)] -z-10 select-none pointer-events-none transition-transform duration-500 group-hover:scale-110">
                                        03
                                    </div>
                                    <BrainCircuit className="w-8 h-8 text-[var(--color-text-muted)] mb-6 group-hover:text-[var(--color-accent-cta)] transition-colors duration-300" aria-hidden="true" />
                                    <h2 className="text-2xl font-bold text-[var(--color-text-primary)] mb-4">
                                        RLHF & Model Alignment
                                    </h2>
                                    <p className="text-base text-[var(--color-text-secondary)] leading-relaxed mb-8 flex-grow">
                                        Expert human-in-the-loop feedback to calibrate LLM behaviour. Our annotators apply advanced evaluation frameworks — including Appraisal Theory dimensions — to produce nuanced, rubric-consistent preference ranking and instruction-following data.
                                    </p>

                                    <div className="flex flex-wrap gap-2 mb-8">
                                        <span className="text-xs border border-[var(--color-border-subtle)] bg-[rgba(255,255,255,0.02)] text-[var(--color-text-secondary)] px-2.5 py-1 rounded-md">Preference Ranking</span>
                                        <span className="text-xs border border-[var(--color-border-subtle)] bg-[rgba(255,255,255,0.02)] text-[var(--color-text-secondary)] px-2.5 py-1 rounded-md">Safety Classification</span>
                                        <span className="text-xs border border-[var(--color-border-subtle)] bg-[rgba(255,255,255,0.02)] text-[var(--color-text-secondary)] px-2.5 py-1 rounded-md">Instruction Tuning</span>
                                    </div>

                                    <div className="border-t border-[var(--color-border)] pt-6 mt-auto">
                                        <Link href="/services/rlhf" className="inline-flex items-center font-semibold text-[var(--color-text-primary)] hover:text-[var(--color-accent-cta)] transition-colors duration-200">
                                            Read the Guide <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                                        </Link>
                                    </div>
                                </div>
                            </AnimatedSection>

                            {/* Service 4: Data Validation */}
                            <AnimatedSection delay={0.40}>
                                <div className="group bg-[var(--color-bg-surface)] border border-[var(--color-border)] rounded-2xl p-8 hover:bg-[var(--color-bg-elevated)] hover:border-[var(--color-border-hover)] transition-all duration-300 flex flex-col h-full relative overflow-hidden">
                                    <div className="absolute top-0 right-0 -mt-6 -mr-4 font-mono text-8xl font-bold text-[rgba(255,255,255,0.02)] -z-10 select-none pointer-events-none transition-transform duration-500 group-hover:scale-110">
                                        04
                                    </div>
                                    <ShieldCheck className="w-8 h-8 text-[var(--color-text-muted)] mb-6 group-hover:text-[var(--color-accent-cta)] transition-colors duration-300" aria-hidden="true" />
                                    <h2 className="text-2xl font-bold text-[var(--color-text-primary)] mb-4">
                                        Data Validation, QA & Custom Work
                                    </h2>
                                    <p className="text-base text-[var(--color-text-secondary)] leading-relaxed mb-8 flex-grow">
                                        Before you train, prove the data. We audit, clean, and validate existing datasets to ensure they meet minimum reliability thresholds. Or, we can scope an entirely bespoke annotation workflow from scratch tailored to your exact modality.
                                    </p>

                                    <div className="flex flex-wrap gap-2 mb-8">
                                        <span className="text-xs border border-[var(--color-border-subtle)] bg-[rgba(255,255,255,0.02)] text-[var(--color-text-secondary)] px-2.5 py-1 rounded-md">Label Audits</span>
                                        <span className="text-xs border border-[var(--color-border-subtle)] bg-[rgba(255,255,255,0.02)] text-[var(--color-text-secondary)] px-2.5 py-1 rounded-md">IAA Measurement</span>
                                        <span className="text-xs border border-[var(--color-border-subtle)] bg-[rgba(255,255,255,0.02)] text-[var(--color-text-secondary)] px-2.5 py-1 rounded-md">Custom Workflow Design</span>
                                    </div>

                                    <div className="border-t border-[var(--color-border)] pt-6 mt-auto">
                                        <Link href="/services/data-validation" className="inline-flex items-center font-semibold text-[var(--color-text-primary)] hover:text-[var(--color-accent-cta)] transition-colors duration-200">
                                            Read the Guide <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                                        </Link>
                                    </div>
                                </div>
                            </AnimatedSection>

                        </div>
                    </div>
                </section>
            </AnimatedSection>

            {/* ── BOTTOM CTA STRIP ── */}
            <AnimatedSection>
                <section className="py-24 border-t border-[var(--color-border)] border-b relative w-full overflow-hidden bg-[var(--color-bg-base)]">
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
