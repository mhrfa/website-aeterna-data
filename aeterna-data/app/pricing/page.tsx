import type { Metadata } from 'next';
import Link from 'next/link';
import {
    ChevronRight,
    FlaskConical,
    Clock,
    TrendingUp,
    User,
    Building2,
    FileCheck,
    BarChart2,
    RefreshCw,
    Shield,
    FileText,
    Lock,
    MessageSquare
} from 'lucide-react';
import AnimatedSection from '@/components/ui/AnimatedSection';

export const metadata: Metadata = {
    title: 'Pricing — Aeterna Data',
    description: 'Aeterna Data pricing is engagement-based and agreed in a signed Statement of Work before work begins. Five tiers from paid pilot to Managed Pod. Request a discovery call to discuss your project.',
    robots: {
        index: true,
        follow: true,
    },
};

export default function PricingPage() {
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
                        <span className="text-[var(--color-text-muted)]">Pricing</span>
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
                        Priced for the Work. Fixed Before It Begins.
                    </h1>

                    {/* Subheadline */}
                    <p className="text-[var(--color-text-secondary)] text-lg lg:text-xl max-w-2xl mx-auto mt-6">
                        Every rate at Aeterna Data is agreed in a signed Statement of Work before a single hour is worked. No surprises on the invoice. No verbal agreements. No rates that change mid-project.
                    </p>
                </div>
            </section>

            {/* ── SECTION 1: Pricing Philosophy ── */}
            <AnimatedSection>
                <section className="py-20 relative w-full">
                    <div className="max-w-4xl mx-auto px-6">
                        <p className="text-xs uppercase tracking-widest text-[var(--color-text-muted)] font-semibold mb-4">
                            Philosophy
                        </p>
                        <h2 className="text-3xl lg:text-4xl font-semibold text-[var(--color-text-primary)] mb-8">
                            Why We Do Not Publish Rates.
                        </h2>
                        <div className="text-[var(--color-text-secondary)] text-base leading-relaxed space-y-5 max-w-3xl">
                            <p>
                                Annotation pricing is not a commodity. The rate that is right for bounding box labeling on a standard object detection dataset is not the rate that is right for RLHF preference ranking with domain-expert annotators on a medical LLM. Posting a single hourly rate — or a pricing calculator — flattens that complexity into a number that will be wrong for most of the people who see it.
                            </p>
                            <p>
                                Aeterna Data's rates are determined by four factors: the service vertical, the task complexity, the IAA threshold required, and the volume commitment. All four are discussed in a discovery call and fixed in a signed SOW before work begins. You always know your rate before you pay it.
                            </p>
                            <p>
                                We base our rates on the quality process we follow. While our prices might not be the lowest, we are committed to providing reliable results. If cost is your only criteria, we are probably not the right fit. If quality, legal accountability, and IAA measurement matter to your team, request a call.
                            </p>
                        </div>
                    </div>
                </section>
            </AnimatedSection>

            {/* ── SECTION 2: The Five Engagement Tiers ── */}
            <AnimatedSection>
                <section className="py-20 relative w-full bg-[var(--color-bg-base)]">
                    <div className="max-w-4xl mx-auto px-6">
                        <p className="text-xs uppercase tracking-widest text-[var(--color-text-muted)] font-semibold mb-4">
                            Engagement Tiers
                        </p>
                        <h2 className="text-3xl lg:text-4xl font-semibold text-[var(--color-text-primary)] mb-8">
                            Five Ways to Engage. One Quality Standard.
                        </h2>
                        <div className="text-[var(--color-text-secondary)] text-base leading-relaxed space-y-5 max-w-3xl mb-12">
                            <p>
                                Every client begins at Tier 1. You move through the model at your own pace, driven by your volume and confidence in the pipeline.
                            </p>
                        </div>

                        <div className="flex flex-col">
                            {/* Tier 1 */}
                            <AnimatedSection delay={0.10}>
                                <div className="bg-[var(--color-bg-surface)] border border-[var(--color-border)] rounded-2xl p-8 hover:bg-[var(--color-bg-elevated)] hover:border-[var(--color-border-hover)] transition-all duration-200">
                                    <span className="text-xs font-mono uppercase tracking-widest text-[var(--color-text-muted)] bg-[var(--color-bg-elevated)] px-3 py-1 rounded-full inline-block">
                                        Entry Point
                                    </span>
                                    <FlaskConical className="w-6 h-6 text-[var(--color-text-muted)] mt-4" aria-hidden="true" />
                                    <h3 className="text-2xl font-bold text-[var(--color-text-primary)] mt-3">Paid Pilot</h3>
                                    <p className="text-base text-[var(--color-text-secondary)] mt-4 leading-relaxed">
                                        A fixed-scope, flat-rate engagement — approximately one week of dedicated annotation inside your dashboard. We establish our Average Handling Time, deliver a complete IAA quality report, and prove the pipeline before any long-term commitment. The pilot fee is credited in full to your first production invoice if you proceed.
                                    </p>
                                    <div className="mt-6 mb-3">
                                        <h4 className="text-xs uppercase tracking-widest text-[var(--color-text-muted)]">What you get</h4>
                                    </div>
                                    <ul className="text-sm text-[var(--color-text-secondary)] space-y-2">
                                        <li className="flex gap-2 items-start"><span className="text-[var(--color-accent-cta)] mt-0.5">→</span> Annotators calibrated to your specific task</li>
                                        <li className="flex gap-2 items-start"><span className="text-[var(--color-accent-cta)] mt-0.5">→</span> Full pilot batch annotated in your dashboard</li>
                                        <li className="flex gap-2 items-start"><span className="text-[var(--color-accent-cta)] mt-0.5">→</span> Cohen's Kappa + Fleiss' Kappa IAA report</li>
                                        <li className="flex gap-2 items-start"><span className="text-[var(--color-accent-cta)] mt-0.5">→</span> AHT (Average Handling Time) per item type</li>
                                        <li className="flex gap-2 items-start"><span className="text-[var(--color-accent-cta)] mt-0.5">→</span> Pilot fee credited to first invoice</li>
                                    </ul>
                                    <div className="bg-[var(--color-bg-elevated)] border border-[var(--color-border)] rounded-xl p-4 mt-6">
                                        <div className="text-xs uppercase tracking-widest text-[var(--color-text-muted)] mb-2">Ideal for</div>
                                        <p className="text-sm text-[var(--color-text-secondary)] italic">
                                            Teams evaluating Aeterna Data for the first time. No long-term commitment required.
                                        </p>
                                    </div>
                                    <Link href="/contact" className="mt-6 flex items-center justify-center w-full bg-[var(--color-accent-cta)] text-white font-semibold py-3.5 rounded-lg hover:bg-[var(--color-accent-cta-hover)] transition-colors duration-200" aria-label="Request a pilot engagement">
                                        Start With a Pilot
                                    </Link>
                                </div>
                            </AnimatedSection>

                            <div className="border-l-2 border-dashed border-[var(--color-border)] h-8 ml-8 self-start opacity-70"></div>

                            {/* Tier 2 */}
                            <AnimatedSection delay={0.20}>
                                <div className="bg-[var(--color-bg-surface)] border border-[var(--color-border)] rounded-2xl p-8 hover:bg-[var(--color-bg-elevated)] hover:border-[var(--color-border-hover)] transition-all duration-200">
                                    <span className="text-xs font-mono uppercase tracking-widest text-[var(--color-text-muted)] bg-[var(--color-bg-elevated)] px-3 py-1 rounded-full inline-block">
                                        Core Model
                                    </span>
                                    <Clock className="w-6 h-6 text-[var(--color-text-muted)] mt-4" aria-hidden="true" />
                                    <h3 className="text-2xl font-bold text-[var(--color-text-primary)] mt-3">On-Demand Hourly</h3>
                                    <p className="text-base text-[var(--color-text-secondary)] mt-4 leading-relaxed">
                                        Flexible, per-annotator-hour billing across all five service verticals. Rates are fixed in a signed SOW before work begins. Scale up or down each month with no headcount commitment.
                                    </p>
                                    <div className="mt-6 mb-3">
                                        <h4 className="text-xs uppercase tracking-widest text-[var(--color-text-muted)]">What you get</h4>
                                    </div>
                                    <ul className="text-sm text-[var(--color-text-secondary)] space-y-2">
                                        <li className="flex gap-2 items-start"><span className="text-[var(--color-accent-cta)] mt-0.5">→</span> Hourly rate fixed in signed SOW</li>
                                        <li className="flex gap-2 items-start"><span className="text-[var(--color-accent-cta)] mt-0.5">→</span> No minimum monthly commitment</li>
                                        <li className="flex gap-2 items-start"><span className="text-[var(--color-accent-cta)] mt-0.5">→</span> Full IAA measurement every batch</li>
                                        <li className="flex gap-2 items-start"><span className="text-[var(--color-accent-cta)] mt-0.5">→</span> Scale annotator hours up or down monthly</li>
                                        <li className="flex gap-2 items-start"><span className="text-[var(--color-accent-cta)] mt-0.5">→</span> Complete quality report with every delivery</li>
                                    </ul>
                                    <p className="text-sm text-[var(--color-text-muted)] mt-4 italic">
                                        Rate depends on: service vertical, task complexity, IAA threshold, and volume.
                                    </p>
                                    <Link href="/contact" className="mt-6 flex items-center justify-center w-full border border-[var(--color-border-subtle)] text-[var(--color-text-secondary)] font-semibold py-3.5 rounded-lg hover:border-[var(--color-border-hover)] hover:text-[var(--color-text-primary)] transition-all duration-200" aria-label="Request a quote for hourly on-demand work">
                                        Request a Quote
                                    </Link>
                                </div>
                            </AnimatedSection>

                            <div className="border-l-2 border-dashed border-[var(--color-border)] h-8 ml-8 self-start opacity-70"></div>

                            {/* Tier 3 */}
                            <AnimatedSection delay={0.30}>
                                <div className="bg-[var(--color-bg-surface)] border border-[var(--color-border)] rounded-2xl p-8 hover:bg-[var(--color-bg-elevated)] hover:border-[var(--color-border-hover)] transition-all duration-200">
                                    <span className="text-xs font-mono uppercase tracking-widest text-[var(--color-text-muted)] bg-[var(--color-bg-elevated)] px-3 py-1 rounded-full inline-block">
                                        Commitment Discount
                                    </span>
                                    <TrendingUp className="w-6 h-6 text-[var(--color-text-muted)] mt-4" aria-hidden="true" />
                                    <h3 className="text-2xl font-bold text-[var(--color-text-primary)] mt-3">Volume Discounts</h3>
                                    <p className="text-base text-[var(--color-text-secondary)] mt-4 leading-relaxed">
                                        Commit to a guaranteed monthly hour block and receive tiered rate reductions. Volume discounts incentivise you to consolidate your annotation outsourcing with a single accountable partner rather than distributing across multiple vendors.
                                    </p>
                                    <div className="mt-6 mb-3">
                                        <h4 className="text-xs uppercase tracking-widest text-[var(--color-text-muted)]">What you get</h4>
                                    </div>
                                    <ul className="text-sm text-[var(--color-text-secondary)] space-y-2">
                                        <li className="flex gap-2 items-start"><span className="text-[var(--color-accent-cta)] mt-0.5">→</span> Discounted hourly rate on committed volume</li>
                                        <li className="flex gap-2 items-start"><span className="text-[var(--color-accent-cta)] mt-0.5">→</span> Two commitment tiers: mid-volume and high-volume</li>
                                        <li className="flex gap-2 items-start"><span className="text-[var(--color-accent-cta)] mt-0.5">→</span> Same quality standard as on-demand</li>
                                        <li className="flex gap-2 items-start"><span className="text-[var(--color-accent-cta)] mt-0.5">→</span> Rate locked for the commitment period in SOW</li>
                                    </ul>
                                    <div className="bg-[var(--color-bg-elevated)] border border-[var(--color-border)] rounded-xl p-4 mt-6">
                                        <div className="text-xs uppercase tracking-widest text-[var(--color-text-muted)] mb-2">Ideal for</div>
                                        <p className="text-sm text-[var(--color-text-secondary)] italic">
                                            Teams with consistent, predictable monthly annotation volume who want to reduce per-hour cost without a dedicated headcount commitment.
                                        </p>
                                    </div>
                                    <Link href="/contact" className="mt-6 flex items-center justify-center w-full border border-[var(--color-border-subtle)] text-[var(--color-text-secondary)] font-semibold py-3.5 rounded-lg hover:border-[var(--color-border-hover)] hover:text-[var(--color-text-primary)] transition-all duration-200" aria-label="Discuss volume pricing options">
                                        Discuss Volume Pricing
                                    </Link>
                                </div>
                            </AnimatedSection>

                            <div className="border-l-2 border-dashed border-[var(--color-border)] h-8 ml-8 self-start opacity-70"></div>

                            {/* Tier 4 */}
                            <AnimatedSection delay={0.40}>
                                <div className="bg-[var(--color-bg-surface)] border border-[var(--color-border)] rounded-2xl p-8 hover:bg-[var(--color-bg-elevated)] hover:border-[var(--color-border-hover)] transition-all duration-200">
                                    <span className="text-xs font-mono uppercase tracking-widest text-[var(--color-text-muted)] bg-[var(--color-bg-elevated)] px-3 py-1 rounded-full inline-block">
                                        Dedicated Capacity
                                    </span>
                                    <User className="w-6 h-6 text-[var(--color-text-muted)] mt-4" aria-hidden="true" />
                                    <h3 className="text-2xl font-bold text-[var(--color-text-primary)] mt-3">FTE Retainer</h3>
                                    <p className="text-base text-[var(--color-text-secondary)] mt-4 leading-relaxed">
                                        A dedicated annotator reserved exclusively for your pipeline at a fixed monthly retainer. Billed in advance with guaranteed monthly capacity. Unused resource hours do not roll over. Two tiers: standard and specialist, depending on the service vertical and task complexity.
                                    </p>
                                    <div className="mt-6 mb-3">
                                        <h4 className="text-xs uppercase tracking-widest text-[var(--color-text-muted)]">What you get</h4>
                                    </div>
                                    <ul className="text-sm text-[var(--color-text-secondary)] space-y-2">
                                        <li className="flex gap-2 items-start"><span className="text-[var(--color-accent-cta)] mt-0.5">→</span> One annotator dedicated exclusively to you</li>
                                        <li className="flex gap-2 items-start"><span className="text-[var(--color-accent-cta)] mt-0.5">→</span> Guaranteed full-time monthly capacity</li>
                                        <li className="flex gap-2 items-start"><span className="text-[var(--color-accent-cta)] mt-0.5">→</span> Billed monthly in advance</li>
                                        <li className="flex gap-2 items-start"><span className="text-[var(--color-accent-cta)] mt-0.5">→</span> Full IAA measurement maintained</li>
                                        <li className="flex gap-2 items-start"><span className="text-[var(--color-accent-cta)] mt-0.5">→</span> Specialist tier available for Visual RLHF evaluation tasks</li>
                                    </ul>
                                    <div className="bg-[var(--color-bg-elevated)] border border-[var(--color-border)] rounded-xl p-4 mt-6">
                                        <div className="text-xs uppercase tracking-widest text-[var(--color-text-muted)] mb-2">Ideal for</div>
                                        <p className="text-sm text-[var(--color-text-secondary)] italic">
                                            Teams that need guaranteed monthly capacity without the overhead of a full managed team.
                                        </p>
                                    </div>
                                    <Link href="/contact" className="mt-6 flex items-center justify-center w-full border border-[var(--color-border-subtle)] text-[var(--color-text-secondary)] font-semibold py-3.5 rounded-lg hover:border-[var(--color-border-hover)] hover:text-[var(--color-text-primary)] transition-all duration-200" aria-label="Request FTE retainer pricing options">
                                        Request Retainer Pricing
                                    </Link>
                                </div>
                            </AnimatedSection>

                            <div className="border-l-2 border-dashed border-[var(--color-border)] h-8 ml-8 self-start opacity-70"></div>

                            {/* Tier 5 */}
                            <AnimatedSection delay={0.50}>
                                <div className="bg-[var(--color-bg-surface)] border border-[var(--color-border)] rounded-2xl p-8 hover:bg-[var(--color-bg-elevated)] hover:border-[var(--color-border-hover)] transition-all duration-200">
                                    <span className="text-xs font-mono uppercase tracking-widest text-[var(--color-text-muted)] bg-[var(--color-bg-elevated)] px-3 py-1 rounded-full inline-block">
                                        Full Infrastructure
                                    </span>
                                    <Building2 className="w-6 h-6 text-[var(--color-text-muted)] mt-4" aria-hidden="true" />
                                    <h3 className="text-2xl font-bold text-[var(--color-text-primary)] mt-3">Managed Pod</h3>
                                    <p className="text-base text-[var(--color-text-secondary)] mt-4 leading-relaxed">
                                        A complete autonomous annotation team — 3 Annotators and 1 QA Lead — reserved exclusively for your pipeline. Full team management, IAA measurement, QA reporting, and delivery included. You receive only final, validated datasets and quality reports. Nothing else to manage.
                                    </p>
                                    <div className="mt-6 mb-3">
                                        <h4 className="text-xs uppercase tracking-widest text-[var(--color-text-muted)]">What you get</h4>
                                    </div>
                                    <ul className="text-sm text-[var(--color-text-secondary)] space-y-2">
                                        <li className="flex gap-2 items-start"><span className="text-[var(--color-accent-cta)] mt-0.5">→</span> 3 dedicated annotators + 1 QA Lead</li>
                                        <li className="flex gap-2 items-start"><span className="text-[var(--color-accent-cta)] mt-0.5">→</span> Full team management by Aeterna Data</li>
                                        <li className="flex gap-2 items-start"><span className="text-[var(--color-accent-cta)] mt-0.5">→</span> IAA measured and reported every batch</li>
                                        <li className="flex gap-2 items-start"><span className="text-[var(--color-accent-cta)] mt-0.5">→</span> Validated datasets only — no raw output</li>
                                        <li className="flex gap-2 items-start"><span className="text-[var(--color-accent-cta)] mt-0.5">→</span> Monthly retainer, billed in advance</li>
                                        <li className="flex gap-2 items-start"><span className="text-[var(--color-accent-cta)] mt-0.5">→</span> Two complexity tiers: standard and advanced</li>
                                    </ul>
                                    <div className="bg-[var(--color-bg-elevated)] border border-[var(--color-border)] rounded-xl p-4 mt-6">
                                        <div className="text-xs uppercase tracking-widest text-[var(--color-text-muted)] mb-2">Ideal for</div>
                                        <p className="text-sm text-[var(--color-text-secondary)] italic">
                                            Enterprise AI teams that need dedicated annotation infrastructure without the overhead of building and managing an internal team.
                                        </p>
                                    </div>
                                    <Link href="/contact" className="mt-6 flex items-center justify-center w-full border border-[var(--color-border-subtle)] text-[var(--color-text-secondary)] font-semibold py-3.5 rounded-lg hover:border-[var(--color-border-hover)] hover:text-[var(--color-text-primary)] transition-all duration-200" aria-label="Discuss Managed Pod pricing">
                                        Discuss Pod Pricing
                                    </Link>
                                </div>
                            </AnimatedSection>
                        </div>
                    </div>
                </section>
            </AnimatedSection>

            {/* ── SECTION 3: How Rates Are Determined ── */}
            <AnimatedSection>
                <section className="py-20 relative w-full">
                    <div className="max-w-4xl mx-auto px-6">
                        <p className="text-xs uppercase tracking-widest text-[var(--color-text-muted)] font-semibold mb-4">
                            Rate Factors
                        </p>
                        <h2 className="text-3xl lg:text-4xl font-semibold text-[var(--color-text-primary)] mb-8">
                            Four Things Determine Your Rate.
                        </h2>
                        <div className="text-[var(--color-text-secondary)] text-base leading-relaxed space-y-5 max-w-3xl mb-12">
                            <p>
                                Before a rate is quoted, we need to understand four things about your project. These four factors determine everything — from which service vertical applies to which IAA threshold is appropriate.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {[
                                {
                                    num: "01",
                                    title: "Service Vertical",
                                    body: "The annotation type determines the base rate tier. Bounding box and image classification sit at one end of the range. Image segmentation and Visual RLHF evaluation sit at the other — requiring greater precision, longer per-item handling time, and more intensive quality measurement."
                                },
                                {
                                    num: "02",
                                    title: "Task Complexity",
                                    body: "Within computer vision, complexity varies significantly. Bounding box annotation on standard objects is faster and less demanding than polygon segmentation on complex scenes. Visual RLHF evaluation with multi-dimensional rubrics requires calibrated judgment that standard annotation does not. Complexity is assessed during scoping."
                                },
                                {
                                    num: "03",
                                    title: "IAA Threshold Required",
                                    body: "Higher quality thresholds require more calibration time, smaller batch sizes, more frequent IAA checks, and higher annotator selection standards. The default is Cohen's Kappa ≥ 0.80 and Fleiss' Kappa ≥ 0.75. Projects requiring ≥ 0.85 are priced accordingly."
                                },
                                {
                                    num: "04",
                                    title: "Volume & Commitment",
                                    body: "On-demand hourly work is priced at the full anchor rate. Volume commitments unlock tiered discounts. FTE and Managed Pod retainers provide guaranteed capacity at a monthly rate that reflects the exclusivity of the arrangement."
                                }
                            ].map((factor, idx) => (
                                <AnimatedSection key={idx} delay={idx * 0.08} className="h-full">
                                    <div className="bg-[var(--color-bg-surface)] border border-[var(--color-border)] rounded-2xl p-6 relative overflow-hidden h-full z-10">
                                        <div className="absolute top-0 right-0 -mt-4 -mr-2 font-mono text-7xl font-bold text-[rgba(255,255,255,0.03)] -z-10 select-none pointer-events-none">
                                            {factor.num}
                                        </div>
                                        <h3 className="text-lg font-semibold text-[var(--color-text-primary)] mt-2">{factor.title}</h3>
                                        <p className="text-sm text-[var(--color-text-secondary)] mt-3 leading-relaxed">
                                            {factor.body}
                                        </p>
                                    </div>
                                </AnimatedSection>
                            ))}
                        </div>
                    </div>
                </section>
            </AnimatedSection>

            {/* ── SECTION 4: The Pilot Credit ── */}
            <AnimatedSection>
                <section className="py-20 relative w-full bg-[var(--color-bg-base)]">
                    <div className="max-w-4xl mx-auto px-6">
                        <p className="text-xs uppercase tracking-widest text-[var(--color-text-muted)] font-semibold mb-4">
                            The Pilot
                        </p>
                        <h2 className="text-3xl lg:text-4xl font-semibold text-[var(--color-text-primary)] mb-8">
                            Start Small. Prove Everything.
                        </h2>

                        <div className="bg-[var(--color-bg-surface)] border border-[var(--color-border-subtle)] rounded-2xl p-10 flex flex-col md:flex-row gap-10 lg:gap-16">
                            <div className="md:w-2/3">
                                <h3 className="text-xl font-bold text-[var(--color-text-primary)] mb-4">The Paid Pilot</h3>
                                <div className="space-y-4 text-sm text-[var(--color-text-secondary)] leading-relaxed">
                                    <p>
                                        Every new client engagement begins with a paid pilot — a fixed-scope, flat-rate project that proves our calibration on your specific task before any production commitment is made.
                                    </p>
                                    <p>
                                        The pilot fee is not a deposit. It is payment for a week of real annotation work that produces a real IAA quality report. If you proceed to production within 60 days, the full pilot fee is credited to your first production invoice.
                                    </p>
                                    <p>
                                        We charge for the pilot because calibration costs real annotator hours. A vendor who gives away pilots is giving away the calibration — and that cost shows up later in your IAA scores.
                                    </p>
                                </div>
                            </div>

                            <div className="md:w-1/3 flex flex-col justify-center">
                                <div className="border-b border-[var(--color-border)] pb-4 mb-4">
                                    <div className="font-mono text-2xl font-bold text-[var(--color-text-primary)]">Flat Rate</div>
                                    <div className="text-xs text-[var(--color-text-muted)] mt-1">Fixed price — quoted on request</div>
                                </div>
                                <div className="border-b border-[var(--color-border)] pb-4 mb-4">
                                    <div className="font-mono text-2xl font-bold text-[var(--color-text-primary)]">~1 Week</div>
                                    <div className="text-xs text-[var(--color-text-muted)] mt-1">Inside your dashboard</div>
                                </div>
                                <div className="border-b border-[var(--color-border)] pb-4 mb-4">
                                    <div className="font-mono text-2xl font-bold text-[var(--color-text-primary)]">100%</div>
                                    <div className="text-xs text-[var(--color-text-muted)] mt-1">Credited to first invoice</div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-8 flex justify-center md:justify-start w-full">
                            <Link href="/contact" className="w-full md:w-auto bg-[var(--color-accent-cta)] text-white font-semibold px-8 py-3.5 rounded-lg hover:bg-[var(--color-accent-cta-hover)] transition-colors duration-200 text-center" aria-label="Request a Pilot">
                                Request a Pilot
                            </Link>
                        </div>
                    </div>
                </section>
            </AnimatedSection>

            {/* ── SECTION 5: What Affects Your Rate ── */}
            <AnimatedSection>
                <section className="py-20 relative w-full">
                    <div className="max-w-4xl mx-auto px-6">
                        <p className="text-xs uppercase tracking-widest text-[var(--color-text-muted)] font-semibold mb-4">
                            Rate Modifiers
                        </p>
                        <h2 className="text-3xl lg:text-4xl font-semibold text-[var(--color-text-primary)] mb-8">
                            What Pushes the Rate Higher.
                        </h2>
                        <div className="text-[var(--color-text-secondary)] text-base leading-relaxed space-y-5 max-w-3xl mb-12">
                            <p>
                                Within any service vertical, certain task characteristics push the rate toward the upper end of the range. These are disclosed upfront during scoping — never discovered mid-project.
                            </p>
                        </div>

                        <div className="flex flex-col">
                            {[
                                {
                                    title: "Domain Expertise Required",
                                    body: "Tasks requiring annotators with subject matter knowledge — medical, legal, financial, or highly technical domains — require specialist selection and additional calibration time."
                                },
                                {
                                    title: "High IAA Threshold",
                                    body: "Projects requiring Cohen's Kappa ≥ 0.85 or above require smaller batch sizes, more frequent calibration checks, and higher annotator selection standards."
                                },
                                {
                                    title: "Rush Turnaround",
                                    body: "Batches requiring delivery in under 5 working days attract a rush premium. Rush availability is subject to annotator capacity and must be specified in the SOW before work begins."
                                },
                                {
                                    title: "Multi-Dimensional Evaluation Rubric",
                                    body: "Visual RLHF tasks with complex multi-dimensional evaluation frameworks require extended annotator briefing and calibration before the pilot begins. The rubric is designed and validated during scoping — this is included in the pilot scope."
                                },
                                {
                                    title: "Very High Volume, Fast Ramp",
                                    body: "Projects requiring a rapid scale-up in annotator headcount — particularly for Managed Pod engagements — may attract a setup fee to cover accelerated onboarding and calibration."
                                },
                            ].map((modifier, idx, arr) => (
                                <div key={idx} className={`flex gap-4 items-start py-5 ${idx !== arr.length - 1 ? 'border-b border-[var(--color-border)]' : ''}`}>
                                    <div className="w-2 h-2 rounded-sm shrink-0 mt-1.5 bg-[var(--color-accent-cta)]" />
                                    <div>
                                        <h3 className="text-sm font-semibold text-[var(--color-text-primary)]">{modifier.title}</h3>
                                        <p className="text-sm text-[var(--color-text-secondary)] mt-1 leading-relaxed">
                                            {modifier.body}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </AnimatedSection>

            {/* ── SECTION 6: What Is Always Included ── */}
            <AnimatedSection>
                <section className="py-20 relative w-full bg-[var(--color-bg-base)]">
                    <div className="max-w-4xl mx-auto px-6">
                        <p className="text-xs uppercase tracking-widest text-[var(--color-text-muted)] font-semibold mb-4">
                            Always Included
                        </p>
                        <h2 className="text-3xl lg:text-4xl font-semibold text-[var(--color-text-primary)] mb-8">
                            No Hidden Extras.
                        </h2>
                        <div className="text-[var(--color-text-secondary)] text-base leading-relaxed space-y-5 max-w-3xl mb-12">
                            <p>
                                Regardless of engagement tier or service vertical, the following are included in every Aeterna Data engagement at no additional cost.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {[
                                {
                                    icon: FileCheck,
                                    title: "Full Contract Stack",
                                    body: "NDA, DPA, MSA, and SOW — all executed before work begins."
                                },
                                {
                                    icon: BarChart2,
                                    title: "IAA Every Batch",
                                    body: "Cohen's Kappa and Fleiss' Kappa measured and reported on every production batch."
                                },
                                {
                                    icon: RefreshCw,
                                    title: "Rework at Zero Cost",
                                    body: "Batches failing either IAA threshold are reworked before delivery. Rework hours never billed."
                                },
                                {
                                    icon: Shield,
                                    title: "Individual Annotator NDAs",
                                    body: "Every annotator signs an individual NDA before accessing your platform or data."
                                },
                                {
                                    icon: FileText,
                                    title: "Quality Report",
                                    body: "IAA scores, class distribution, rework log, AHT, and deviation notes delivered with every batch."
                                },
                                {
                                    icon: Lock,
                                    title: "Your Platform",
                                    body: "Annotation runs inside your annotation platform. Your data stays in your environment throughout the engagement."
                                },
                                {
                                    icon: Clock,
                                    title: "48hr Scoping Response",
                                    body: "A scoping proposal with estimated AHT and recommended approach delivered within 48 hours of brief receipt."
                                },
                                {
                                    icon: MessageSquare,
                                    title: "Dedicated Communication",
                                    body: "A direct point of contact for every project. No ticket system. No support queue."
                                }
                            ].map((item, idx) => {
                                const Icon = item.icon;
                                return (
                                    <AnimatedSection key={idx} delay={idx * 0.06} className="h-full">
                                        <div className="bg-[var(--color-bg-surface)] border border-[var(--color-border)] rounded-2xl p-6 h-full transition-all duration-150 hover:bg-[var(--color-bg-elevated)] hover:border-[var(--color-border-hover)]">
                                            <Icon className="w-5 h-5 text-[var(--color-text-muted)] mb-3" aria-hidden="true" />
                                            <h3 className="text-sm font-semibold text-[var(--color-text-primary)]">{item.title}</h3>
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

            {/* ── SECTION 7: Why No Public Pricing ── */}
            <AnimatedSection>
                <section className="py-20 relative w-full">
                    <div className="max-w-4xl mx-auto px-6">
                        <p className="text-xs uppercase tracking-widest text-[var(--color-text-muted)] font-semibold mb-4">
                            Transparency
                        </p>
                        <h2 className="text-3xl lg:text-4xl font-semibold text-[var(--color-text-primary)] mb-8">
                            Why We Do Not Display Rates Publicly.
                        </h2>
                        <div className="text-[var(--color-text-secondary)] text-base leading-relaxed space-y-5 max-w-3xl mb-12">
                            <p>
                                This is a question we get asked. Here is the honest answer.
                            </p>
                        </div>

                        <div className="flex flex-col">
                            {[
                                {
                                    title: "Annotation is not a commodity.",
                                    body: "A single hourly rate displayed on a pricing page would be accurate for some projects and significantly wrong for others. Rather than publish a rate that misleads most visitors, we quote based on your actual project parameters. You get a rate that reflects what your work actually costs to deliver at the quality standard you need."
                                },
                                {
                                    title: "Your rate is locked before work begins.",
                                    body: "The absence of public pricing does not mean rates are negotiated on the fly or subject to change mid-project. The opposite is true. Your rate is fixed in a signed SOW before the first hour is worked. You always know what you will pay before you pay it."
                                },
                                {
                                    title: "Discovery protects both sides.",
                                    body: "The scoping conversation we have before quoting a rate serves a practical purpose: it ensures the rate we quote reflects the actual complexity of your task, your actual IAA requirements, and your actual volume. It also gives us the information we need to staff your project correctly from day one."
                                }
                            ].map((reason, idx) => (
                                <div key={idx} className={`border-l-2 border-[var(--color-border)] pl-6 py-2 ${idx !== 2 ? 'mb-8' : ''}`}>
                                    <h3 className="text-base font-semibold text-[var(--color-text-primary)]">{reason.title}</h3>
                                    <p className="text-sm text-[var(--color-text-secondary)] mt-2 leading-relaxed">
                                        {reason.body}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </AnimatedSection>

            {/* ── SECTION 8: Billing & Payment ── */}
            <AnimatedSection>
                <section className="py-20 relative w-full bg-[var(--color-bg-base)]">
                    <div className="max-w-4xl mx-auto px-6">
                        <p className="text-xs uppercase tracking-widest text-[var(--color-text-muted)] font-semibold mb-4">
                            Billing
                        </p>
                        <h2 className="text-3xl lg:text-4xl font-semibold text-[var(--color-text-primary)] mb-8">
                            How Billing Works.
                        </h2>
                        <div className="text-[var(--color-text-secondary)] text-base leading-relaxed space-y-5 max-w-3xl mb-12">
                            <p>
                                All invoices are denominated in EUR. Payment terms vary by engagement tier and are fixed in the SOW.
                            </p>
                        </div>

                        <dl className="w-full flex flex-col">
                            {[
                                { item: "Currency", detail: "EUR — all invoices" },
                                { item: "Paid Pilot", detail: "Net 14 days from invoice date" },
                                { item: "On-Demand Hourly", detail: "Monthly in arrears — Net 30 days" },
                                { item: "Volume Discount", detail: "Monthly in arrears — Net 30 days" },
                                { item: "FTE Retainer", detail: "Monthly in advance — Net 14 days" },
                                { item: "Managed Pod", detail: "Monthly in advance — Net 14 days" },
                                { item: "Late Payment", detail: "1.5% per month on overdue balances" },
                                { item: "Tax", detail: "Indonesian VAT (PPN) applied where applicable under Indonesian law. International clients should confirm applicable VAT treatment with their own tax advisor." }
                            ].map((row, idx) => (
                                <AnimatedSection key={idx} delay={idx * 0.04} className="w-full">
                                    <div className="flex justify-between items-start border-b border-[var(--color-border)] py-4 gap-4">
                                        <dt className="text-sm text-[var(--color-text-secondary)] flex-1">
                                            {row.item}
                                        </dt>
                                        <dd className="text-sm text-[var(--color-text-primary)] font-medium text-right max-w-[60%]">
                                            {row.detail}
                                        </dd>
                                    </div>
                                </AnimatedSection>
                            ))}
                        </dl>

                        <p className="text-sm text-[var(--color-text-muted)] text-center mt-6 italic">
                            Wire transfer and SEPA bank transfer accepted. Bank details provided on invoice. Payment by card not currently supported.
                        </p>
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
                            Ready to Discuss Your Project?
                        </h2>
                        <p className="text-[var(--color-text-secondary)] text-lg mb-10 leading-relaxed max-w-2xl mx-auto">
                            Tell us what you are building. We will tell you what it costs — before you commit to anything. A scoping proposal within 48 hours of your brief.
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
