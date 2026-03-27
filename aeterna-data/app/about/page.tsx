import type { Metadata } from 'next';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import AnimatedSection from '@/components/ui/AnimatedSection';

export const metadata: Metadata = {
    title: 'About — Aeterna Data',
    description: 'Aeterna Data is a boutique AI data annotation and model alignment agency built for EU enterprise teams in DACH and Benelux. Contract-first. IAA-measured. BYOT model.',
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
                    <h1 className="text-5xl lg:text-7xl font-bold tracking-tight leading-none text-[var(--color-text-primary)] mx-auto">
                        Built for the Teams Who Cannot Afford Bad Data.
                    </h1>

                    {/* Subheadline */}
                    <p className="text-[var(--color-text-secondary)] text-lg lg:text-xl max-w-2xl mx-auto mt-6">
                        Aeterna Data is a boutique AI data annotation and model alignment agency. We exist because annotation quality is too consequential to leave unmeasured — and too legally sensitive to leave uncontracted.
                    </p>
                </div>
            </section>

            {/* ── SECTION 1: The Origin ── */}
            <AnimatedSection>
                <section className="py-20 relative w-full">
                    <div className="max-w-4xl mx-auto px-6">
                        <p className="text-xs uppercase tracking-widest text-[var(--color-text-muted)] font-semibold mb-4">
                            The Origin
                        </p>
                        <h2 className="text-3xl lg:text-4xl font-semibold text-[var(--color-text-primary)] mb-8">
                            Why Aeterna Data Exists.
                        </h2>
                        <div className="text-[var(--color-text-secondary)] text-base leading-relaxed space-y-5 max-w-3xl">
                            <p>
                                Most annotation vendors make one of two promises: fast turnaround or low cost. Neither is a quality guarantee. Neither protects your data legally. And neither tells you whether two annotators looking at the same item agreed with each other.
                            </p>
                            <p>
                                Aeterna Data was founded on a straightforward observation: the AI teams building the most consequential models — the ones whose outputs will affect real decisions in healthcare, law, finance, and autonomous systems — deserve an annotation partner who measures quality rather than promises it, and who takes contractual accountability rather than disclaiming it.
                            </p>
                            <p>
                                We are not the cheapest option. We are the option your legal team will approve and your engineering team will trust.
                            </p>
                        </div>
                    </div>
                </section>
            </AnimatedSection>

            {/* ── SECTION 2: The Problem We Solve ── */}
            <AnimatedSection>
                <section className="py-20 relative w-full bg-[var(--color-bg-base)]">
                    <div className="max-w-4xl mx-auto px-6">
                        <p className="text-xs uppercase tracking-widest text-[var(--color-text-muted)] font-semibold mb-4">
                            The Problem
                        </p>
                        <h2 className="text-3xl lg:text-4xl font-semibold text-[var(--color-text-primary)] mb-8">
                            What Bad Annotation Actually Costs.
                        </h2>
                        <div className="text-[var(--color-text-secondary)] text-base leading-relaxed space-y-5 max-w-3xl mb-12">
                            <p>
                                Retraining a model on bad data does not cost one annotation budget. It costs months of engineering time, the compute budget for a full retraining run, and the opportunity cost of every product milestone that slips while the pipeline is rebuilt.
                            </p>
                            <p>
                                The root cause is almost always the same: no baseline IAA measurement, no annotator calibration, no rework obligation in the contract. The vendor delivered files. The client assumed quality. The model learned noise.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="bg-[var(--color-bg-surface)] border border-[var(--color-border)] rounded-2xl p-6">
                                <div className="font-mono text-3xl font-bold text-[var(--color-text-primary)]">κ &lt; 0.60</div>
                                <div className="text-xs uppercase tracking-widest text-[var(--color-text-muted)] mt-1">Chance-level agreement</div>
                                <div className="text-sm text-[var(--color-text-secondary)] mt-3">Below this threshold, your annotators are effectively guessing. Your model learns inconsistency as signal.</div>
                            </div>
                            <div className="bg-[var(--color-bg-surface)] border border-[var(--color-border)] rounded-2xl p-6">
                                <div className="font-mono text-3xl font-bold text-[var(--color-text-primary)]">0 rework clauses</div>
                                <div className="text-xs uppercase tracking-widest text-[var(--color-text-muted)] mt-1">Industry standard</div>
                                <div className="text-sm text-[var(--color-text-secondary)] mt-3">Most annotation contracts contain no obligation to fix batches that fail quality review. You pay regardless.</div>
                            </div>
                            <div className="bg-[var(--color-bg-surface)] border border-[var(--color-border)] rounded-2xl p-6">
                                <div className="font-mono text-3xl font-bold text-[var(--color-text-primary)]">Flat Rate</div>
                                <div className="text-xs uppercase tracking-widest text-[var(--color-text-muted)] mt-1">Our pilot</div>
                                <div className="text-sm text-[var(--color-text-secondary)] mt-3">One week. Your dashboard. A complete IAA report. Proof before commitment. Credited to your first invoice.</div>
                            </div>
                        </div>
                    </div>
                </section>
            </AnimatedSection>

            {/* ── SECTION 3: Why BYOT ── */}
            <AnimatedSection>
                <section className="py-20 relative w-full">
                    <div className="max-w-4xl mx-auto px-6">
                        <p className="text-xs uppercase tracking-widest text-[var(--color-text-muted)] font-semibold mb-4">
                            The Model
                        </p>
                        <h2 className="text-3xl lg:text-4xl font-semibold text-[var(--color-text-primary)] mb-8">
                            Your Environment. Your Data. Your Control.
                        </h2>
                        <div className="text-[var(--color-text-secondary)] text-base leading-relaxed space-y-5 max-w-3xl mb-12">
                            <p>
                                The Bring Your Own Tool model is not a feature. It is a structural data protection decision.
                            </p>
                            <p>
                                When your annotation workforce operates inside your proprietary labeling dashboard, your data never leaves your environment. There is no third-party platform with its own terms of service sitting between you and your training data. There is no migration cost when the engagement ends. There is no platform lock-in.
                            </p>
                            <p>
                                Every annotator on your project accesses your dashboard under a signed individual NDA. Your data sovereignty is protected not by a privacy policy — but by a contract.
                            </p>
                        </div>

                        <div className="w-full" aria-label="Comparison between other vendors and Aeterna Data">
                            <div className="grid grid-cols-2 gap-4 pb-4 border-b border-[var(--color-border)]">
                                <span className="font-semibold text-sm text-[var(--color-text-primary)]">Other vendors</span>
                                <span className="font-semibold text-sm text-[var(--color-text-primary)]">Aeterna Data</span>
                            </div>
                            <div className="grid grid-cols-2 gap-4 py-3 border-b border-[var(--color-border)]">
                                <span className="text-[var(--color-text-muted)] text-sm flex items-start gap-2">
                                    <span className="text-[rgba(239,68,68,0.7)]">✗</span> You migrate your data to their platform
                                </span>
                                <span className="text-[var(--color-text-primary)] text-sm flex items-start gap-2">
                                    <span className="text-[var(--color-accent-cta)]">✓</span> We work inside your existing dashboard
                                </span>
                            </div>
                            <div className="grid grid-cols-2 gap-4 py-3 border-b border-[var(--color-border)]">
                                <span className="text-[var(--color-text-muted)] text-sm flex items-start gap-2">
                                    <span className="text-[rgba(239,68,68,0.7)]">✗</span> Their platform terms govern your data
                                </span>
                                <span className="text-[var(--color-text-primary)] text-sm flex items-start gap-2">
                                    <span className="text-[var(--color-accent-cta)]">✓</span> Your environment. Your terms.
                                </span>
                            </div>
                            <div className="grid grid-cols-2 gap-4 py-3 border-b border-[var(--color-border)]">
                                <span className="text-[var(--color-text-muted)] text-sm flex items-start gap-2">
                                    <span className="text-[rgba(239,68,68,0.7)]">✗</span> Annotators access a shared cloud tool
                                </span>
                                <span className="text-[var(--color-text-primary)] text-sm flex items-start gap-2">
                                    <span className="text-[var(--color-accent-cta)]">✓</span> Every annotator signs an individual NDA
                                </span>
                            </div>
                            <div className="grid grid-cols-2 gap-4 py-3 border-b border-[var(--color-border)]">
                                <span className="text-[var(--color-text-muted)] text-sm flex items-start gap-2">
                                    <span className="text-[rgba(239,68,68,0.7)]">✗</span> Platform lock-in when you scale or switch
                                </span>
                                <span className="text-[var(--color-text-primary)] text-sm flex items-start gap-2">
                                    <span className="text-[var(--color-accent-cta)]">✓</span> Zero migration cost. Zero lock-in.
                                </span>
                            </div>
                            <div className="grid grid-cols-2 gap-4 py-3 border-b border-[var(--color-border)]">
                                <span className="text-[var(--color-text-muted)] text-sm flex items-start gap-2">
                                    <span className="text-[rgba(239,68,68,0.7)]">✗</span> GDPR compliance claimed in a vendor profile
                                </span>
                                <span className="text-[var(--color-text-primary)] text-sm flex items-start gap-2">
                                    <span className="text-[var(--color-accent-cta)]">✓</span> GDPR compliance executed in a signed DPA
                                </span>
                            </div>
                        </div>
                    </div>
                </section>
            </AnimatedSection>

            {/* ── SECTION 4: The Founder ── */}
            <AnimatedSection>
                <section className="py-20 relative w-full bg-[var(--color-bg-base)]">
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
                                    <h3 className="text-2xl font-bold text-[var(--color-text-primary)]">Aeterna</h3>
                                    <p className="text-sm text-[var(--color-text-muted)] mt-1">Founder & Director<br />PT Aeterna Data Intentio Logic</p>

                                    <div className="border-t border-[var(--color-border)] my-6" />

                                    <div className="space-y-4">
                                        <div>
                                            <span className="block text-xs uppercase tracking-widest text-[var(--color-text-muted)]">Age</span>
                                            <span className="block text-sm font-medium text-[var(--color-text-primary)]">29</span>
                                        </div>
                                        <div>
                                            <span className="block text-xs uppercase tracking-widest text-[var(--color-text-muted)]">Based in</span>
                                            <span className="block text-sm font-medium text-[var(--color-text-primary)]">Bandung, Indonesia</span>
                                        </div>
                                        <div>
                                            <span className="block text-xs uppercase tracking-widest text-[var(--color-text-muted)]">Origin</span>
                                            <span className="block text-sm font-medium text-[var(--color-text-primary)]">Solo, Central Java</span>
                                        </div>
                                        <div>
                                            <span className="block text-xs uppercase tracking-widest text-[var(--color-text-muted)]">Education</span>
                                            <span className="block text-sm font-medium text-[var(--color-text-primary)]">PhD, Universitas Sebelas Maret</span>
                                        </div>
                                        <div>
                                            <span className="block text-xs uppercase tracking-widest text-[var(--color-text-muted)]">Focus</span>
                                            <span className="block text-sm font-medium text-[var(--color-text-primary)]">AI Data Quality & Annotation</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* RIGHT COLUMN — Founder statement */}
                            <div className="text-[var(--color-text-secondary)] text-base leading-relaxed space-y-5">
                                <p>
                                    Aeterna built PT Aeterna Data Intentio Logic because he saw the same problem repeated across AI projects of every scale: annotation quality was treated as an assumption rather than a measurement. Vendors delivered labeled files. Nobody was checking whether the labels were consistent.
                                </p>
                                <p>
                                    His academic background in data quality research at Universitas Sebelas Maret gave him the methodological framework — Inter-Annotator Agreement measurement, calibration protocols, threshold-setting — that most annotation vendors neither apply nor report.
                                </p>
                                <p>
                                    He is deliberate by nature and contractual by design. Every engagement Aeterna Data takes begins with a signed MSA, NDA, and DPA — not because the legal team asked for it, but because he believes a well-written contract protects both sides equally. It is a form of respect.
                                </p>
                                <p>
                                    He does not pitch. He presents evidence. The paid pilot exists so clients can see the quality before committing to it — and so Aeterna can prove, batch by batch, that precision is not a promise. It is a measurement.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </AnimatedSection>

            {/* ── SECTION 5: The Quality Standard ── */}
            <AnimatedSection>
                <section className="py-20 relative w-full">
                    <div className="max-w-4xl mx-auto px-6">
                        <p className="text-xs uppercase tracking-widest text-[var(--color-text-muted)] font-semibold mb-4">
                            Quality Standard
                        </p>
                        <h2 className="text-3xl lg:text-4xl font-semibold text-[var(--color-text-primary)] mb-8">
                            Measured. Reported. Guaranteed.
                        </h2>
                        <div className="text-[var(--color-text-secondary)] text-base leading-relaxed mb-12 max-w-3xl">
                            <p>
                                Every production batch at Aeterna Data is measured against two Inter-Annotator Agreement thresholds before delivery. No exceptions.
                            </p>
                        </div>

                        {/* Two-metric display block */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
                            <AnimatedSection delay={0}>
                                <div className="bg-[var(--color-bg-surface)] border border-[var(--color-border)] rounded-2xl p-8 h-full">
                                    <div className="text-5xl font-mono font-bold text-[var(--color-text-primary)]">κ ≥ 0.80</div>
                                    <h3 className="text-sm uppercase tracking-widest text-[var(--color-text-muted)] mt-3">Cohen's Kappa</h3>
                                    <p className="text-sm text-[var(--color-text-secondary)] mt-4 leading-relaxed">
                                        Pairwise IAA. Applied when two annotators label the same item. Default threshold across all standard production batches.
                                    </p>
                                </div>
                            </AnimatedSection>
                            <AnimatedSection delay={0.08}>
                                <div className="bg-[var(--color-bg-surface)] border border-[var(--color-border)] rounded-2xl p-8 h-full">
                                    <div className="text-5xl font-mono font-bold text-[var(--color-text-primary)]">κ ≥ 0.75</div>
                                    <h3 className="text-sm uppercase tracking-widest text-[var(--color-text-muted)] mt-3">Fleiss' Kappa</h3>
                                    <p className="text-sm text-[var(--color-text-secondary)] mt-4 leading-relaxed">
                                        Multi-annotator IAA. Applied when three or more annotators label the same item. Used on complex RLHF preference ranking and high-ambiguity NLP tasks.
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
                                        Cohen's Kappa and Fleiss' Kappa measured on every production batch without exception.
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

            {/* ── SECTION 6: The Contract Stack ── */}
            <AnimatedSection>
                <section className="py-20 relative w-full bg-[var(--color-bg-base)]">
                    <div className="max-w-4xl mx-auto px-6">
                        <p className="text-xs uppercase tracking-widest text-[var(--color-text-muted)] font-semibold mb-4">
                            Contract Stack
                        </p>
                        <h2 className="text-3xl lg:text-4xl font-semibold text-[var(--color-text-primary)] mb-8">
                            Everything Signed Before Work Begins.
                        </h2>
                        <div className="text-[var(--color-text-secondary)] text-base leading-relaxed mb-12 max-w-3xl">
                            <p>
                                Most annotation vendors send a brief service agreement after the project starts. Aeterna Data executes the complete legal stack before a single data item is shared. For EU enterprise teams whose legal departments must approve every data processor, this is not a differentiator — it is a requirement.
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
                                    GDPR Article 28 compliant. Includes EU Standard Contractual Clauses Module 2 (Controller-to-Processor) for EEA-to-Indonesia data transfers.
                                </p>
                            </div>
                            <div className="border-b border-[var(--color-border)] pb-6 mb-6">
                                <span className="text-xs uppercase tracking-widest font-mono text-[var(--color-text-muted)] bg-[var(--color-bg-elevated)] px-3 py-1 rounded-full inline-block">
                                    Stage 2 — After Discovery Call
                                </span>
                                <h3 className="text-base font-semibold text-[var(--color-text-primary)] mt-3">EU Standard Contractual Clauses</h3>
                                <p className="text-sm text-[var(--color-text-secondary)] mt-1 leading-relaxed">
                                    Commission Implementing Decision EU 2021/914, Module 2. Governs all personal data transferred from the EEA to Aeterna Data.
                                </p>
                            </div>
                            <div className="border-b border-[var(--color-border)] pb-6 mb-6">
                                <span className="text-xs uppercase tracking-widest font-mono text-[var(--color-text-muted)] bg-[var(--color-bg-elevated)] px-3 py-1 rounded-full inline-block">
                                    Stage 3 — At Pilot Agreement
                                </span>
                                <h3 className="text-base font-semibold text-[var(--color-text-primary)] mt-3">Master Service Agreement (MSA)</h3>
                                <p className="text-sm text-[var(--color-text-secondary)] mt-1 leading-relaxed">
                                    Governs all engagements. Covers all five engagement tiers from paid pilot through to Managed Pod.
                                </p>
                            </div>
                            <div className="pb-6">
                                <span className="text-xs uppercase tracking-widest font-mono text-[var(--color-text-muted)] bg-[var(--color-bg-elevated)] px-3 py-1 rounded-full inline-block">
                                    Stage 3 — At Pilot Agreement
                                </span>
                                <h3 className="text-base font-semibold text-[var(--color-text-primary)] mt-3">Statement of Work (SOW)</h3>
                                <p className="text-sm text-[var(--color-text-secondary)] mt-1 leading-relaxed">
                                    Per-project. Fixes scope, hours, rate, IAA thresholds, and delivery format before work begins. No verbal agreements.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </AnimatedSection>

            {/* ── SECTION 7: Who We Work With ── */}
            <AnimatedSection>
                <section className="py-20 relative w-full">
                    <div className="max-w-4xl mx-auto px-6">
                        <p className="text-xs uppercase tracking-widest text-[var(--color-text-muted)] font-semibold mb-4">
                            Who We Work With
                        </p>
                        <h2 className="text-3xl lg:text-4xl font-semibold text-[var(--color-text-primary)] mb-12">
                            Built for a Specific Kind of Client.
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="bg-[var(--color-bg-surface)] border border-[var(--color-border)] rounded-2xl p-8">
                                <p className="font-semibold text-[var(--color-text-primary)] mb-6">Aeterna Data works best with:</p>
                                <ul className="space-y-4 text-sm text-[var(--color-text-secondary)] leading-relaxed">
                                    <li className="flex items-start gap-3">
                                        <span className="text-[var(--color-accent-cta)] mt-0.5">✓</span>
                                        Series A to C AI-native companies in DACH and Benelux
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-[var(--color-accent-cta)] mt-0.5">✓</span>
                                        Teams actively training or fine-tuning ML models — not just using AI features
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-[var(--color-accent-cta)] mt-0.5">✓</span>
                                        Data Science Directors and AI Engineering Managers who have been burned by inconsistent annotation quality before
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-[var(--color-accent-cta)] mt-0.5">✓</span>
                                        Companies whose legal team will actually read the DPA before approving a vendor
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-[var(--color-accent-cta)] mt-0.5">✓</span>
                                        Teams that cannot afford to retrain a model on bad data
                                    </li>
                                </ul>
                            </div>
                            <div className="bg-[var(--color-bg-surface)] border border-[var(--color-border)] rounded-2xl p-8">
                                <p className="font-semibold text-[var(--color-text-primary)] mb-6">We are probably not the right partner if:</p>
                                <ul className="space-y-4 text-sm text-[var(--color-text-secondary)] leading-relaxed">
                                    <li className="flex items-start gap-3">
                                        <span className="text-[rgba(239,68,68,0.7)] mt-0.5">✗</span>
                                        You are optimising purely for the lowest rate
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-[rgba(239,68,68,0.7)] mt-0.5">✗</span>
                                        You need a self-serve pricing calculator
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-[rgba(239,68,68,0.7)] mt-0.5">✗</span>
                                        You want to start work before contracts are signed
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-[rgba(239,68,68,0.7)] mt-0.5">✗</span>
                                        You are a traditional software company with no active ML training pipeline
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-[rgba(239,68,68,0.7)] mt-0.5">✗</span>
                                        You need annotation volume that requires 50+ annotators immediately
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
