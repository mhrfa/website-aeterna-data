import type { Metadata } from 'next';
import Link from 'next/link';
import { ChevronRight, BarChart2, RefreshCw, FileText, Shield, FileCheck, BarChart, Clock } from 'lucide-react';
import AnimatedSection from '@/components/ui/AnimatedSection';

export const metadata: Metadata = {
    title: 'How It Works — Aeterna Data',
    description: 'How Aeterna Data delivers GDPR-compliant, IAA-measured AI data annotation inside your own environment. From first contact to validated dataset delivery.',
    robots: {
        index: true,
        follow: true,
    },
};

export default function HowItWorksPage() {
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
                        <span className="text-[var(--color-text-muted)]">How It Works</span>
                    </nav>

                    {/* Pre-heading Pill */}
                    <div
                        className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-8 border"
                        style={{ backgroundColor: "rgba(255,255,255,0.05)", borderColor: "rgba(255,255,255,0.10)" }}
                    >
                        <span className="text-[var(--color-text-muted)] text-xs font-semibold tracking-widest uppercase">
                            The Process
                        </span>
                    </div>

                    {/* Headline */}
                    <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight leading-none text-[var(--color-text-primary)] mx-auto">
                        From First Contact to Validated Dataset.
                    </h1>

                    {/* Subheadline */}
                    <p className="text-[var(--color-text-secondary)] text-lg lg:text-xl max-w-2xl mx-auto mt-6">
                        Every Aeterna Data engagement follows a structured, contractually defined process. You know exactly what happens at every stage — before it happens.
                    </p>
                </div>
            </section>

            {/* ── SECTION 1: The Five Phases Overview ── */}
            <AnimatedSection>
                <section className="py-20 relative w-full">
                    <div className="max-w-4xl mx-auto px-6">
                        <p className="text-xs uppercase tracking-widest text-[var(--color-text-muted)] font-semibold mb-4">
                            The Process
                        </p>
                        <h2 className="text-3xl lg:text-4xl font-semibold text-[var(--color-text-primary)] mb-8">
                            Five Phases. No Surprises.
                        </h2>
                        <div className="text-[var(--color-text-secondary)] text-base leading-relaxed space-y-5 max-w-3xl mb-12">
                            <p>
                                Every engagement — from a single paid pilot to a full Managed Pod — follows the same five-phase process. Each phase has a defined input, a defined output, and a defined contractual trigger before the next phase begins.
                            </p>
                        </div>

                        <div className="flex flex-col md:flex-row items-center justify-between gap-4 w-full" role="list">
                            {[
                                { num: '01', title: 'Discovery', duration: '48hrs' },
                                { num: '02', title: 'Contracts', duration: '1–3 days' },
                                { num: '03', title: 'Pilot', duration: '~1 week' },
                                { num: '04', title: 'Production', duration: 'Ongoing' },
                                { num: '05', title: 'Scale', duration: 'Monthly' }
                            ].map((phase, idx, arr) => (
                                <AnimatedSection key={idx} delay={idx * 0.08} className="w-full flex-1 md:flex-none flex items-center justify-between md:justify-center">
                                    <div className="bg-[var(--color-bg-surface)] border border-[var(--color-border)] rounded-xl p-4 text-center w-full shrink-0" role="listitem">
                                        <div className="font-mono text-xs text-[var(--color-text-muted)]">{phase.num}</div>
                                        <div className="text-sm font-semibold text-[var(--color-text-primary)] mt-1">{phase.title}</div>
                                        <div className="font-mono text-xs text-[var(--color-accent-cta)] mt-1">{phase.duration}</div>
                                    </div>
                                    {idx !== arr.length - 1 && (
                                        <div className="hidden md:block text-[var(--color-text-muted)] mx-2 self-center rotate-90 md:rotate-0">
                                            →
                                        </div>
                                    )}
                                </AnimatedSection>
                            ))}
                        </div>
                    </div>
                </section>
            </AnimatedSection>

            {/* ── SECTION 2: Phase 1: Discovery & Scoping ── */}
            <AnimatedSection>
                <section className="py-20 relative w-full bg-[var(--color-bg-base)]">
                    <div className="max-w-4xl mx-auto px-6">
                        <div className="font-mono text-xs uppercase tracking-widest text-[var(--color-accent-cta)] bg-[rgba(74,124,255,0.08)] px-3 py-1 rounded-full inline-block mb-4">
                            Phase 01
                        </div>
                        <h2 className="text-3xl lg:text-4xl font-semibold text-[var(--color-text-primary)] mb-8">
                            Discovery & Scoping.
                        </h2>
                        <div className="text-[var(--color-text-secondary)] text-base leading-relaxed space-y-5 max-w-3xl mb-12">
                            <p>
                                Before any contract is discussed, we spend time understanding your project — the data type, the task complexity, the quality threshold you need, and the timeline you are working within.
                            </p>
                            <p>
                                This conversation costs you nothing and commits you to nothing. It takes 20–30 minutes by video call or async by email. At the end of it, one of two things happens: we are a fit, or we tell you honestly that we are not.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="bg-[var(--color-bg-surface)] border border-[var(--color-border)] rounded-2xl p-6">
                                <h3 className="text-xs uppercase tracking-widest text-[var(--color-text-muted)] font-semibold mb-4">What you bring</h3>
                                <ul className="space-y-3 text-sm text-[var(--color-text-secondary)]">
                                    <li className="flex items-start gap-2"><span className="text-[var(--color-text-muted)] mt-0.5">•</span> A brief description of your annotation task</li>
                                    <li className="flex items-start gap-2"><span className="text-[var(--color-text-muted)] mt-0.5">•</span> Your data type and approximate volume</li>
                                    <li className="flex items-start gap-2"><span className="text-[var(--color-text-muted)] mt-0.5">•</span> Your annotation platform or tool — or we can advise on setup if you do not have one yet</li>
                                    <li className="flex items-start gap-2"><span className="text-[var(--color-text-muted)] mt-0.5">•</span> Your target quality threshold if defined</li>
                                    <li className="flex items-start gap-2"><span className="text-[var(--color-text-muted)] mt-0.5">•</span> Your timeline and urgency level</li>
                                </ul>
                            </div>
                            <div className="bg-[var(--color-bg-surface)] border border-[var(--color-border)] rounded-2xl p-6">
                                <h3 className="text-xs uppercase tracking-widest text-[var(--color-text-muted)] font-semibold mb-4">What we deliver in 48hrs</h3>
                                <ul className="space-y-3 text-sm text-[var(--color-text-secondary)]">
                                    <li className="flex items-start gap-2"><span className="text-[var(--color-accent-cta)] mt-0.5">→</span> A scoping proposal with recommended approach</li>
                                    <li className="flex items-start gap-2"><span className="text-[var(--color-accent-cta)] mt-0.5">→</span> Estimated Average Handling Time per item</li>
                                    <li className="flex items-start gap-2"><span className="text-[var(--color-accent-cta)] mt-0.5">→</span> Recommended IAA threshold for your task</li>
                                    <li className="flex items-start gap-2"><span className="text-[var(--color-accent-cta)] mt-0.5">→</span> Recommended engagement model based on your dataset size and timeline</li>
                                    <li className="flex items-start gap-2"><span className="text-[var(--color-accent-cta)] mt-0.5">→</span> Draft SOW for review</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
            </AnimatedSection>

            {/* ── SECTION 3: Phase 2: Contract Execution ── */}
            <AnimatedSection>
                <section className="py-20 relative w-full">
                    <div className="max-w-4xl mx-auto px-6">
                        <div className="font-mono text-xs uppercase tracking-widest text-[var(--color-accent-cta)] bg-[rgba(74,124,255,0.08)] px-3 py-1 rounded-full inline-block mb-4">
                            Phase 02
                        </div>
                        <h2 className="text-3xl lg:text-4xl font-semibold text-[var(--color-text-primary)] mb-8">
                            Contracts First. Always.
                        </h2>
                        <div className="text-[var(--color-text-secondary)] text-base leading-relaxed space-y-5 max-w-3xl mb-12">
                            <p>
                                No work begins — not even the pilot — until the appropriate contracts are signed. We introduce documents in stages to reduce legal review burden, but we never compress or skip steps.
                            </p>
                        </div>

                        <div className="border-l-2 border-[var(--color-border)] ml-4 pl-6 relative">
                            {/* Stage 1 */}
                            <div className="mb-10 relative">
                                <div className="absolute w-3 h-3 rounded-full bg-[var(--color-accent-cta)] -ml-[1.875rem] mt-1 shrink-0" />
                                <span className="text-xs uppercase tracking-widest font-mono text-[var(--color-text-muted)] font-semibold block">Day One — Before Anything</span>
                                <h3 className="text-base font-semibold text-[var(--color-text-primary)] mt-2">Non-Disclosure Agreement (NDA)</h3>
                                <p className="text-sm text-[var(--color-text-secondary)] mt-2 leading-relaxed">
                                    Mutual. Both parties protected from the first conversation. Every annotator assigned to your project signs their own individual NDA before accessing your platform. No exceptions.
                                </p>
                                <div className="font-mono text-xs text-[var(--color-accent-cta)] mt-2">Typically signed same day</div>
                            </div>
                            {/* Stage 2 */}
                            <div className="mb-10 relative">
                                <div className="absolute w-3 h-3 rounded-full bg-[var(--color-accent-cta)] -ml-[1.875rem] mt-1 shrink-0" />
                                <span className="text-xs uppercase tracking-widest font-mono text-[var(--color-text-muted)] font-semibold block">After Discovery Call</span>
                                <h3 className="text-base font-semibold text-[var(--color-text-primary)] mt-2">DPA + Data Processing Agreement</h3>
                                <p className="text-sm text-[var(--color-text-secondary)] mt-2 leading-relaxed">
                                    A Data Processing Agreement governs how Aeterna Data processes, stores, and protects your dataset throughout the engagement. Required before any project data is discussed or shared.
                                </p>
                                <div className="font-mono text-xs text-[var(--color-accent-cta)] mt-2">Typically 1–2 business days</div>
                            </div>
                            {/* Stage 3 */}
                            <div className="relative">
                                <div className="absolute w-3 h-3 rounded-full bg-[var(--color-accent-cta)] -ml-[1.875rem] mt-1 shrink-0" />
                                <span className="text-xs uppercase tracking-widest font-mono text-[var(--color-text-muted)] font-semibold block">At Pilot Agreement</span>
                                <h3 className="text-base font-semibold text-[var(--color-text-primary)] mt-2">MSA + Statement of Work</h3>
                                <p className="text-sm text-[var(--color-text-secondary)] mt-2 leading-relaxed">
                                    The Master Service Agreement governs the full engagement relationship. The Statement of Work fixes scope, hourly rate, IAA thresholds, delivery format, and rework obligations for this specific project. Nothing is left to verbal agreement.
                                </p>
                                <div className="font-mono text-xs text-[var(--color-accent-cta)] mt-2">Typically 1–3 business days</div>
                            </div>
                        </div>
                    </div>
                </section>
            </AnimatedSection>

            {/* ── SECTION 4: Phase 3: The Paid Pilot ── */}
            <AnimatedSection>
                <section className="py-20 relative w-full bg-[var(--color-bg-base)]">
                    <div className="max-w-4xl mx-auto px-6">
                        <div className="font-mono text-xs uppercase tracking-widest text-[var(--color-accent-cta)] bg-[rgba(74,124,255,0.08)] px-3 py-1 rounded-full inline-block mb-4">
                            Phase 03
                        </div>
                        <h2 className="text-3xl lg:text-4xl font-semibold text-[var(--color-text-primary)] mb-8">
                            Prove the Pipeline. Before You Commit.
                        </h2>
                        <div className="text-[var(--color-text-secondary)] text-base leading-relaxed space-y-5 max-w-3xl mb-12">
                            <p>
                                Every new client engagement begins with a paid pilot — a fixed-scope, flat-rate project that proves our calibration, establishes our Average Handling Time on your specific task, and delivers a complete IAA quality report before any production commitment is made.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                            <div className="bg-[var(--color-bg-surface)] border border-[var(--color-border)] rounded-2xl p-6 text-center">
                                <div className="font-mono text-3xl font-bold text-[var(--color-text-primary)]">Flat Rate</div>
                                <div className="text-xs uppercase tracking-widest text-[var(--color-text-muted)] mt-2 font-semibold">Flat rate</div>
                                <div className="text-xs text-[var(--color-text-secondary)] mt-1">Credited to first production invoice</div>
                            </div>
                            <div className="bg-[var(--color-bg-surface)] border border-[var(--color-border)] rounded-2xl p-6 text-center">
                                <div className="font-mono text-3xl font-bold text-[var(--color-text-primary)]">~1 week</div>
                                <div className="text-xs uppercase tracking-widest text-[var(--color-text-muted)] mt-2 font-semibold">Duration</div>
                                <div className="text-xs text-[var(--color-text-secondary)] mt-1">In your annotation platform</div>
                            </div>
                            <div className="bg-[var(--color-bg-surface)] border border-[var(--color-border)] rounded-2xl p-6 text-center">
                                <div className="font-mono text-3xl font-bold text-[var(--color-text-primary)]">100–500</div>
                                <div className="text-xs uppercase tracking-widest text-[var(--color-text-muted)] mt-2 font-semibold">Items annotated</div>
                                <div className="text-xs text-[var(--color-text-secondary)] mt-1">Default pilot scope</div>
                            </div>
                        </div>

                        <div className="space-y-0">
                            {[
                                "Annotators are briefed on your guidelines and calibrated on your specific task before the pilot begins. No cold starts.",
                                "Annotation runs inside your dashboard. Your data never leaves your environment throughout the pilot.",
                                "IAA is measured across the pilot batch. Cohen's Kappa and Fleiss' Kappa both calculated and documented.",
                                "A complete quality report is delivered with the pilot: IAA scores, class distribution, annotator consistency notes, and AHT (Average Handling Time) per item type.",
                                "You review the report and make a decision. If you proceed within 60 days, the pilot fee is credited in full to your first production invoice."
                            ].map((step, idx, arr) => (
                                <div key={idx} className={`flex gap-4 items-start py-4 ${idx !== arr.length - 1 ? 'border-b border-[var(--color-border)]' : ''}`}>
                                    <span className="font-mono text-sm text-[var(--color-accent-cta)] shrink-0 pt-0.5">0{idx + 1}</span>
                                    <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                                        {step}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </AnimatedSection>

            {/* ── SECTION 5: Phase 4: Production ── */}
            <AnimatedSection>
                <section className="py-20 relative w-full">
                    <div className="max-w-4xl mx-auto px-6">
                        <div className="font-mono text-xs uppercase tracking-widest text-[var(--color-accent-cta)] bg-[rgba(74,124,255,0.08)] px-3 py-1 rounded-full inline-block mb-4">
                            Phase 04
                        </div>
                        <h2 className="text-3xl lg:text-4xl font-semibold text-[var(--color-text-primary)] mb-8">
                            Production. Measured Every Batch.
                        </h2>
                        <div className="text-[var(--color-text-secondary)] text-base leading-relaxed space-y-5 max-w-3xl mb-12">
                            <p>
                                Once the pilot is approved, production begins under the terms fixed in the signed SOW. Rate, scope, IAA threshold, delivery format, and rework obligations are all contractually defined before the first production batch starts.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[
                                {
                                    icon: BarChart2,
                                    title: "IAA Every Batch",
                                    body: "Cohen's Kappa ≥ 0.80 and Fleiss' Kappa ≥ 0.75 measured on every production batch. Not sampled. Every batch."
                                },
                                {
                                    icon: RefreshCw,
                                    title: "Rework Guarantee",
                                    body: "Any batch failing either threshold is reworked before delivery at zero additional cost. Rework hours are never billed."
                                },
                                {
                                    icon: FileText,
                                    title: "Quality Report",
                                    body: "Every delivery includes a full quality report: IAA scores, class distribution, rework log, format compliance, and deviation notes."
                                },
                                {
                                    icon: Shield,
                                    title: "Your Platform",
                                    body: "Annotation runs inside your annotation platform throughout production. Your data stays in your environment. We work with the tool you already use."
                                }
                            ].map((feature, idx) => {
                                const Icon = feature.icon;
                                return (
                                    <AnimatedSection key={idx} delay={idx * 0.08} className="h-full">
                                        <div className="bg-[var(--color-bg-surface)] border border-[var(--color-border)] rounded-2xl p-6 h-full transition-all duration-150 hover:bg-[var(--color-bg-elevated)] hover:border-[var(--color-border-hover)]">
                                            <Icon className="w-5 h-5 text-[var(--color-text-muted)] mb-4" aria-hidden="true" />
                                            <h3 className="text-base font-semibold text-[var(--color-text-primary)]">{feature.title}</h3>
                                            <p className="text-sm text-[var(--color-text-secondary)] mt-2 leading-relaxed">
                                                {feature.body}
                                            </p>
                                        </div>
                                    </AnimatedSection>
                                );
                            })}
                        </div>

                        <p className="text-sm text-[var(--color-text-muted)] text-center mt-12 max-w-2xl mx-auto leading-relaxed">
                            Production is billed per annotator hour, fixed in the SOW. Invoices issued monthly in arrears (or in advance for dedicated team engagements). All invoices denominated in EUR or USD as agreed in the SOW.
                        </p>
                    </div>
                </section>
            </AnimatedSection>

            {/* ── SECTION 6: Phase 5: Scale ── */}
            <AnimatedSection>
                <section className="py-20 relative w-full bg-[var(--color-bg-base)]">
                    <div className="max-w-4xl mx-auto px-6">
                        <div className="font-mono text-xs uppercase tracking-widest text-[var(--color-accent-cta)] bg-[rgba(74,124,255,0.08)] px-3 py-1 rounded-full inline-block mb-4">
                            Phase 05
                        </div>
                        <h2 className="text-3xl lg:text-4xl font-semibold text-[var(--color-text-primary)] mb-8">
                            Scale at Your Pace.
                        </h2>
                        <div className="text-[var(--color-text-secondary)] text-base leading-relaxed space-y-5 max-w-3xl mb-12">
                            <p>
                                As your annotation needs grow, your engagement model evolves. You are never locked into a tier — you move through the model at your own pace, driven by your volume and timeline.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {[
                                {
                                    step: "Entry",
                                    title: "Paid Pilot",
                                    desc: "Flat-rate fixed scope. Proves the pipeline before any production commitment."
                                },
                                {
                                    step: "Core",
                                    title: "On-Demand Annotation",
                                    desc: "Flexible per-project or per-hour annotation. Rates fixed in SOW before work begins."
                                },
                                {
                                    step: "Volume",
                                    title: "Volume Engagements",
                                    desc: "Structured pricing for teams with consistent ongoing annotation needs across multiple dataset versions."
                                },
                                {
                                    step: "Dedicated",
                                    title: "Dedicated Team",
                                    desc: "A dedicated annotation team reserved exclusively for your pipeline. For teams that need a long-term partner."
                                }
                            ].map((tier, idx) => (
                                <div key={idx} className="bg-[var(--color-bg-surface)] border border-[var(--color-border)] rounded-2xl p-6 flex flex-col items-start h-full">
                                    <div className="font-mono text-xs uppercase tracking-widest text-[var(--color-text-muted)] font-semibold">{tier.step}</div>
                                    <h3 className="text-lg font-semibold text-[var(--color-text-primary)] mt-2">{tier.title}</h3>
                                    <p className="text-sm text-[var(--color-text-secondary)] mt-3 leading-relaxed flex-1">
                                        {tier.desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </AnimatedSection>

            {/* ── SECTION 7: Your Platform. Your Data. ── */}
            <AnimatedSection>
                <section className="py-20 relative w-full">
                    <div className="max-w-4xl mx-auto px-6">
                        <p className="text-xs uppercase tracking-widest text-[var(--color-text-muted)] font-semibold mb-4">
                            How We Work
                        </p>
                        <h2 className="text-3xl lg:text-4xl font-semibold text-[var(--color-text-primary)] mb-8">
                            Your Platform. Your Data.
                        </h2>
                        <div className="text-[var(--color-text-secondary)] text-base leading-relaxed space-y-5 max-w-3xl mb-12">
                            <p>
                                Aeterna Data works inside the annotation platform your team already uses. We do not ask you to migrate your data or adopt a new tool. If you do not have an annotation platform yet, we can advise on setup based on your task type and scale.
                            </p>
                            <p>
                                Before any data is shared, an NDA and Data Processing Agreement are signed. Your training dataset is proprietary — we treat it that way throughout the entire engagement.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <div className="border-l-2 border-[var(--color-accent-cta)] pl-4 py-1">
                                <h4 className="text-sm font-semibold text-[var(--color-text-primary)]">Data Never Leaves Your Environment</h4>
                                <p className="text-sm text-[var(--color-text-secondary)] mt-1 leading-relaxed">
                                    Your raw data, your annotations, and your final labeled dataset remain in your infrastructure throughout the entire engagement.
                                </p>
                            </div>
                            <div className="border-l-2 border-[var(--color-accent-cta)] pl-4 py-1">
                                <h4 className="text-sm font-semibold text-[var(--color-text-primary)]">No Platform Migration Cost</h4>
                                <p className="text-sm text-[var(--color-text-secondary)] mt-1 leading-relaxed">
                                    You do not need to move data, learn a new tool, or manage another SaaS subscription. When the engagement ends, everything stays where it is.
                                </p>
                            </div>
                            <div className="border-l-2 border-[var(--color-accent-cta)] pl-4 py-1">
                                <h4 className="text-sm font-semibold text-[var(--color-text-primary)]">Formal Legal Framework</h4>
                                <p className="text-sm text-[var(--color-text-secondary)] mt-1 leading-relaxed">
                                    Your data is protected by a signed NDA and DPA before any project data is shared — not just by a privacy policy on a vendor website.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </AnimatedSection>

            {/* ── SECTION 8: What You Receive ── */}
            <AnimatedSection>
                <section className="py-20 relative w-full bg-[var(--color-bg-base)]">
                    <div className="max-w-4xl mx-auto px-6">
                        <p className="text-xs uppercase tracking-widest text-[var(--color-text-muted)] font-semibold mb-4">
                            Deliverables
                        </p>
                        <h2 className="text-3xl lg:text-4xl font-semibold text-[var(--color-text-primary)] mb-8">
                            What Every Engagement Delivers.
                        </h2>
                        <div className="text-[var(--color-text-secondary)] text-base leading-relaxed space-y-5 max-w-3xl mb-12">
                            <p>
                                Regardless of engagement tier, every Aeterna Data project delivers the same core set of outputs. You never receive labeled files without the quality documentation to validate them.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {[
                                {
                                    icon: FileCheck,
                                    title: "Annotated Dataset",
                                    body: "Labeled data in your required format, delivered directly to your environment. Format specified in the SOW."
                                },
                                {
                                    icon: BarChart,
                                    title: "IAA Quality Report",
                                    body: "Cohen's Kappa and Fleiss' Kappa scores per batch. Class distribution. Annotator consistency documentation."
                                },
                                {
                                    icon: RefreshCw,
                                    title: "Rework Log",
                                    body: "Full documentation of any batches that required rework — what failed, why, and how it was resolved."
                                },
                                {
                                    icon: Clock,
                                    title: "AHT Report",
                                    body: "Average Handling Time per item type, established during the pilot and tracked throughout production."
                                },
                                {
                                    icon: Shield,
                                    title: "Compliance Documentation",
                                    body: "Signed contract stack available for your records: NDA, DPA, MSA, and SOW."
                                },
                                {
                                    icon: FileText,
                                    title: "Deviation Notes",
                                    body: "Any task-specific anomalies, edge cases, or guideline ambiguities flagged during annotation — documented for your team."
                                }
                            ].map((item, idx) => {
                                const Icon = item.icon;
                                return (
                                    <AnimatedSection key={idx} delay={idx * 0.06} className="h-full">
                                        <div className="bg-[var(--color-bg-surface)] border border-[var(--color-border)] rounded-2xl p-6 h-full">
                                            <Icon className="w-5 h-5 text-[var(--color-text-muted)] mb-3" aria-hidden="true" />
                                            <h3 className="text-base font-semibold text-[var(--color-text-primary)]">{item.title}</h3>
                                            <p className="text-sm text-[var(--color-text-secondary)] mt-2 leading-relaxed">
                                                {item.body}
                                            </p>
                                        </div>
                                    </AnimatedSection>
                                );
                            })}
                        </div>
                    </div>
                </section>
            </AnimatedSection>

            {/* ── SECTION 9: Timelines ── */}
            <AnimatedSection>
                <section className="py-20 relative w-full">
                    <div className="max-w-4xl mx-auto px-6">
                        <p className="text-xs uppercase tracking-widest text-[var(--color-text-muted)] font-semibold mb-4">
                            Timelines
                        </p>
                        <h2 className="text-3xl lg:text-4xl font-semibold text-[var(--color-text-primary)] mb-8">
                            What to Expect and When.
                        </h2>
                        <div className="text-[var(--color-text-secondary)] text-base leading-relaxed space-y-5 max-w-3xl mb-12">
                            <p>
                                From first contact to first invoice, here is the realistic timeline for a standard engagement.
                            </p>
                        </div>

                        <dl className="w-full flex flex-col">
                            {[
                                { phase: "First contact to discovery call", time: "Same day – 48 hours", note: "Async or video call" },
                                { phase: "Discovery call to scoping proposal", time: "Within 48 hours", note: "Draft SOW included" },
                                { phase: "Scoping proposal to NDA signed", time: "Same day – 2 business days", note: "Standard mutual NDA" },
                                { phase: "NDA to DPA signed", time: "1 – 3 business days", note: "Subject to review" },
                                { phase: "DPA to MSA + SOW signed", time: "1 – 3 business days", note: "At pilot agreement" },
                                { phase: "Contracts signed to pilot start", time: "2 – 5 business days", note: "Annotator briefing and calibration" },
                                { phase: "Pilot duration", time: "~5 – 7 business days", note: "Depends on item volume" },
                                { phase: "Pilot delivery to production start", time: "Client approval required", note: "Written approval triggers production" },
                                { phase: "First contact to first invoice", time: "Typically 3 – 5 weeks", note: "For standard engagements", highlight: true }
                            ].map((row, idx) => (
                                <AnimatedSection key={idx} delay={idx * 0.04} className="w-full">
                                    <div className={`flex flex-col sm:flex-row justify-between items-start sm:items-center py-4 gap-2 sm:gap-4 border-b border-[var(--color-border)] ${row.highlight ? 'bg-[var(--color-bg-elevated)] px-4 -mx-4 rounded-lg border-transparent' : ''}`}>
                                        <dt className={`text-sm flex-1 ${row.highlight ? 'font-semibold text-[var(--color-text-primary)]' : 'text-[var(--color-text-secondary)]'}`}>
                                            {row.phase}
                                        </dt>
                                        <dd className="flex flex-col sm:items-end shrink-0 text-left sm:text-right">
                                            <span className="text-sm font-mono font-semibold text-[var(--color-text-primary)]">{row.time}</span>
                                            <span className="text-xs text-[var(--color-text-muted)] mt-0.5">{row.note}</span>
                                        </dd>
                                    </div>
                                </AnimatedSection>
                            ))}
                        </dl>

                        <p className="text-sm text-[var(--color-text-muted)] text-center mt-8 leading-relaxed max-w-2xl mx-auto">
                            Rush engagements (sub-5 day turnaround) are available at the upper end of the applicable hourly rate. Rush availability is subject to annotator capacity and must be specified in the SOW.
                        </p>
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
                            Ready to Start the Process?
                        </h2>
                        <p className="text-[var(--color-text-secondary)] text-lg mb-10 leading-relaxed max-w-2xl mx-auto">
                            The first step costs nothing and commits you to nothing. A 20-minute discovery call. A scoping proposal within 48 hours. A paid pilot to prove the pipeline.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <Link
                                href="/contact"
                                className="bg-[var(--color-accent-cta)] text-white font-semibold px-8 py-3.5 rounded-lg hover:bg-[var(--color-accent-cta-hover)] transition-colors duration-200"
                            >
                                Book a Discovery Call
                            </Link>
                            <Link
                                href="/services"
                                className="border border-[var(--color-border-subtle)] text-[var(--color-text-secondary)] px-8 py-3.5 rounded-lg hover:border-[var(--color-border-hover)] hover:text-[var(--color-text-primary)] transition-all duration-200"
                            >
                                See Our Services
                            </Link>
                        </div>
                    </div>
                </section>
            </AnimatedSection>
        </main>
    );
}
