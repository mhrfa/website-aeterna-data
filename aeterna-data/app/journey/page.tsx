import type { Metadata } from 'next';
import Link from 'next/link';
import { ChevronRight, FlaskConical, Clock, TrendingUp, Building2, BarChart2, RefreshCw, FileText, Shield, Zap, User } from 'lucide-react';
import AnimatedSection from '@/components/ui/AnimatedSection';

export const metadata: Metadata = {
    title: 'Engagement Journey — Aeterna Data',
    description: 'From first contact to validated dataset. Aeterna Data\'s structured engagement process — pilot, production, and scale. Every step defined before it begins.',
    robots: {
        index: true,
        follow: true,
    },
};

export default function JourneyPage() {
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
            <section className="relative min-h-[45vh] flex flex-col items-center justify-center pt-32 pb-16 text-center w-full">
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
                        <span className="text-[var(--color-text-muted)]">The Journey</span>
                    </nav>

                    {/* Pre-heading Pill */}
                    <div
                        className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-8 border"
                        style={{ backgroundColor: "rgba(255,255,255,0.05)", borderColor: "rgba(255,255,255,0.10)" }}
                    >
                        <span className="text-[var(--color-text-muted)] text-xs font-semibold tracking-widest uppercase">
                            Engagement Model
                        </span>
                    </div>

                    {/* Headline */}
                    <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight leading-none text-[var(--color-text-primary)] mx-auto">
                        From First Contact{' '}
                        <br className="hidden lg:block" />
                        to Validated Dataset.
                    </h1>

                    {/* Subheadline */}
                    <p className="text-[var(--color-text-secondary)] text-lg lg:text-xl max-w-2xl mx-auto mt-6">
                        Every Aeterna Data engagement follows the same structured path. Four stages. Every step defined before it begins. No surprises.
                    </p>

                    {/* Stat Strip */}
                    <div className="flex flex-wrap justify-center items-center gap-4 mt-10 font-mono text-sm">
                        <div className="flex flex-col items-center">
                            <span className="text-[var(--color-text-primary)] font-bold">Four Stages</span>
                            <span className="text-[var(--color-text-muted)] text-xs uppercase tracking-widest mt-1">Structured Process</span>
                        </div>
                        <span className="text-[var(--color-border-subtle)] hidden sm:block">|</span>
                        <div className="flex flex-col items-center">
                            <span className="text-[var(--color-text-primary)] font-bold">Flat Rate</span>
                            <span className="text-[var(--color-text-muted)] text-xs uppercase tracking-widest mt-1">Pilot Entry</span>
                        </div>
                        <span className="text-[var(--color-border-subtle)] hidden sm:block">|</span>
                        <div className="flex flex-col items-center">
                            <span className="text-[var(--color-text-primary)] font-bold">48 Hours</span>
                            <span className="text-[var(--color-text-muted)] text-xs uppercase tracking-widest mt-1">Scoping Response</span>
                        </div>
                        <span className="text-[var(--color-border-subtle)] hidden sm:block">|</span>
                        <div className="flex flex-col items-center">
                            <span className="text-[var(--color-text-primary)] font-bold">κ ≥ 0.80</span>
                            <span className="text-[var(--color-text-muted)] text-xs uppercase tracking-widest mt-1">Quality Threshold</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── THE FOUR STAGES ── */}
            <section className="py-20 relative w-full">
                <div className="max-w-4xl mx-auto px-6">
                    <AnimatedSection>
                        <p className="text-xs uppercase tracking-widest text-[var(--color-text-muted)] font-semibold mb-4">
                            The Engagement Journey
                        </p>
                        <h2 className="text-3xl lg:text-4xl font-semibold text-[var(--color-text-primary)] mb-8">
                            From Pilot to Production.
                        </h2>
                        <p className="text-[var(--color-text-secondary)] text-base leading-relaxed max-w-3xl mb-16">
                            Every client begins with a low-risk, proof-of-concept pilot. Every retainer begins with trust.
                        </p>
                    </AnimatedSection>

                    <div className="flex flex-col gap-2">
                        {[
                            {
                                number: '01',
                                icon: FlaskConical,
                                title: 'The Paid Pilot',
                                description: 'We offer a flat-rate project with a clear scope to show how our pipeline works. Our team will annotate a sample of your data, provide a complete IAA quality report, and set up the workflow. This all happens before you make any long-term decisions.',
                                tag: 'Entry Point · Flat Rate',
                                note: 'Pilot fee credited to first production invoice on proceeding.',
                            },
                            {
                                number: '02',
                                icon: Clock,
                                title: 'On-Demand Annotation',
                                description: 'We offer flexible per-project or per-hour annotation services once the pilot confirms the workflow. You can scale services according to your dataset volume. Rates are fixed in a signed statement of work before the project begins.',
                                tag: 'Flexible · Per-Project',
                            },
                            {
                                number: '03',
                                icon: TrendingUp,
                                title: 'Volume Engagements',
                                description: 'When you commit to a clear project scope, you get structured pricing. This approach works well for teams that need ongoing annotation for different dataset versions or model updates.',
                                tag: 'Structured Pricing',
                            },
                            {
                                number: '04',
                                icon: Building2,
                                title: 'Dedicated Team',
                                description: 'Get a dedicated annotation team focused on your projects. You\u2019ll work with the same annotators for steady quality and output. This is ideal for teams looking for a reliable, long-term annotation partner.',
                                tag: 'Long-Term · Dedicated',
                            },
                        ].map((stage, idx, arr) => (
                            <AnimatedSection key={idx} delay={idx * 0.08} className="flex flex-col gap-2">
                                <div className="bg-[var(--color-bg-surface)] border border-[var(--color-border)] rounded-2xl p-6 md:p-8 flex flex-col md:flex-row gap-6 relative z-10 transition-all duration-200">
                                    <div className="md:w-1/4 shrink-0 flex flex-col items-start gap-3">
                                        <span className="text-xs font-mono uppercase tracking-widest text-[var(--color-text-white)] bg-[var(--color-accent-cta)] px-3 py-1 rounded-full inline-block">
                                            Stage {stage.number}
                                        </span>
                                        <div className="w-10 h-10 rounded-lg bg-[rgba(74,124,255,0.08)] border border-[rgba(74,124,255,0.15)] flex items-center justify-center">
                                            <stage.icon className="w-5 h-5 text-[var(--color-accent-cta)]" />
                                        </div>
                                    </div>
                                    <div className="md:w-3/4">
                                        <h3 className="text-xl md:text-2xl font-bold text-[var(--color-text-primary)] mb-3">{stage.title}</h3>
                                        <p className="text-[var(--color-text-secondary)] leading-relaxed text-sm md:text-base">
                                            {stage.description}
                                        </p>
                                        <div className="flex flex-wrap items-center gap-3 mt-4">
                                            <span className="text-xs font-mono uppercase tracking-widest text-[var(--color-accent-cta)] bg-[rgba(74,124,255,0.08)] border border-[rgba(74,124,255,0.15)] px-3 py-1 rounded-full">
                                                {stage.tag}
                                            </span>
                                        </div>
                                        {stage.note && (
                                            <p className="text-xs text-[var(--color-text-muted)] mt-3 italic">
                                                {stage.note}
                                            </p>
                                        )}
                                    </div>
                                </div>
                                {idx !== arr.length - 1 && (
                                    <div className="w-0.5 h-6 border-l-2 border-dashed border-[var(--color-border)] ml-14 md:ml-20 opacity-50 relative -mt-3 -mb-3 z-0" />
                                )}
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── EVERY STAGE INCLUDES ── */}
            <AnimatedSection>
                <section className="py-20 relative w-full border-t border-[var(--color-border)]">
                    <div className="max-w-4xl mx-auto px-6">
                        <p className="text-xs uppercase tracking-widest text-[var(--color-text-muted)] font-semibold mb-4">
                            Standard Deliverables
                        </p>
                        <h3 className="text-3xl lg:text-4xl font-semibold text-[var(--color-text-primary)] mb-12">
                            Every Stage Includes
                        </h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {[
                                {
                                    icon: BarChart2,
                                    title: 'IAA on Every Batch',
                                    body: 'Cohen\u2019s Kappa and Fleiss\u2019 Kappa measured and reported with every delivery.',
                                },
                                {
                                    icon: RefreshCw,
                                    title: 'Rework at Zero Cost',
                                    body: 'Any batch below threshold reworked before delivery. Never billed.',
                                },
                                {
                                    icon: FileText,
                                    title: 'Quality Report',
                                    body: 'IAA scores, class distribution, and annotator notes with every batch.',
                                },
                                {
                                    icon: Shield,
                                    title: 'NDA + DPA',
                                    body: 'Signed before any data is shared. Every engagement, no exceptions.',
                                },
                                {
                                    icon: Zap,
                                    title: '48hr Scoping Response',
                                    body: 'Pilot proposal within 48 hours of brief receipt.',
                                },
                                {
                                    icon: User,
                                    title: 'Direct Communication',
                                    body: 'A named contact for every project. No ticket systems.',
                                },
                            ].map((item, idx) => (
                                <AnimatedSection key={idx} delay={idx * 0.06} className="h-full">
                                    <div className="bg-[var(--color-bg-surface)] border border-[var(--color-border)] rounded-2xl p-6 h-full transition-all duration-200 hover:border-[var(--color-border-hover)]">
                                        <div className="w-10 h-10 rounded-lg bg-[rgba(74,124,255,0.08)] border border-[rgba(74,124,255,0.15)] flex items-center justify-center mb-4">
                                            <item.icon className="w-5 h-5 text-[var(--color-accent-cta)]" />
                                        </div>
                                        <h4 className="text-base font-semibold text-[var(--color-text-primary)] mb-2">{item.title}</h4>
                                        <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">{item.body}</p>
                                    </div>
                                </AnimatedSection>
                            ))}
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
                            Ready to Start?
                        </h2>
                        <p className="text-[var(--color-text-secondary)] text-lg mb-10 leading-relaxed max-w-2xl mx-auto">
                            The first step is a flat-rate pilot. One week. A representative sample of your dataset. A complete IAA quality report on delivery. No long-term commitment required.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <Link
                                href="/contact"
                                className="bg-[var(--color-accent-cta)] text-white font-semibold px-8 py-3.5 rounded-lg hover:bg-[var(--color-accent-cta-hover)] transition-colors duration-200"
                            >
                                Request a Pilot
                            </Link>
                            <Link
                                href="/how-it-works"
                                className="border border-[var(--color-border-subtle)] text-[var(--color-text-secondary)] px-8 py-3.5 rounded-lg hover:border-[var(--color-border-hover)] hover:text-[var(--color-text-primary)] transition-all duration-200"
                            >
                                How It Works
                            </Link>
                        </div>
                    </div>
                </section>
            </AnimatedSection>
        </main>
    );
}
