import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import AnimatedSection from '@/components/ui/AnimatedSection';

export const metadata: Metadata = {
    title: 'Compliance Hub — Aeterna Data',
    description: 'Aeterna Data\'s unified directory for data protection, security schemas, legal disclosures, and regulatory compliance information.',
    alternates: {
        canonical: 'https://aeterna-data.com/compliance',
    },
};

export default function CompliancePage() {
    return (
        <main className="min-h-screen flex flex-col relative w-full overflow-hidden bg-[var(--color-bg-base)]">
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

            {/* ── 1. HERO SECTION ── */}
            <section className="relative min-h-[45vh] flex flex-col items-center justify-center pt-32 pb-16 text-center w-full">
                <div
                    className="absolute inset-0 pointer-events-none -z-10 animate-orb-breathe"
                    style={{
                        background: "radial-gradient(ellipse 90% 65% at 50% -5%, rgba(88, 28, 255, 0.18) 0%, rgba(14, 165, 233, 0.10) 45%, rgba(20, 184, 166, 0.05) 70%, transparent 100%)"
                    }}
                />

                <div className="max-w-4xl mx-auto px-6 relative z-10 w-full">
                    <AnimatedSection>
                        <div
                            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-8 border"
                            style={{ backgroundColor: "rgba(255,255,255,0.05)", borderColor: "rgba(255,255,255,0.10)" }}
                        >
                            <span className="text-[var(--color-text-muted)] text-xs font-semibold tracking-widest uppercase">
                                Trust &amp; Transparency
                            </span>
                        </div>

                        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight leading-none text-[var(--color-text-primary)] mx-auto">
                            Compliance Hub
                        </h1>

                        <p className="text-[var(--color-text-secondary)] text-lg lg:text-xl max-w-2xl mx-auto mt-6 leading-relaxed">
                            Legal documents, data protection instruments, and security policies — available for review before any commitment is made. Designed specifically for EU teams with GDPR obligations.
                        </p>
                    </AnimatedSection>
                </div>
            </section>

            {/* ── 2. STATS STRIP ── */}
            <AnimatedSection>
                <section className="py-12 border-t border-b border-[var(--color-border)] w-full bg-[var(--color-bg-base)]">
                    <div className="max-w-5xl mx-auto px-6">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                            <div>
                                <div className="text-2xl lg:text-3xl font-bold text-[var(--color-text-primary)] font-mono">GDPR Art. 28</div>
                                <div className="text-sm text-[var(--color-text-muted)] mt-1 uppercase tracking-wide">Data processor framework</div>
                            </div>
                            <div>
                                <div className="text-2xl lg:text-3xl font-bold text-[var(--color-text-primary)] font-mono">EU SCCs M2</div>
                                <div className="text-sm text-[var(--color-text-muted)] mt-1 uppercase tracking-wide">Controller-to-processor transfer</div>
                            </div>
                            <div>
                                <div className="text-2xl lg:text-3xl font-bold text-[var(--color-text-primary)] font-mono">72-hour</div>
                                <div className="text-sm text-[var(--color-text-muted)] mt-1 uppercase tracking-wide">Breach notification SLA</div>
                            </div>
                            <div>
                                <div className="text-2xl lg:text-3xl font-bold text-[var(--color-text-primary)] font-mono">UU PDP</div>
                                <div className="text-sm text-[var(--color-text-muted)] mt-1 uppercase tracking-wide">Indonesian data law compliant</div>
                            </div>
                        </div>
                    </div>
                </section>
            </AnimatedSection>

            {/* ── 3. SIGNING SEQUENCE ── */}
            <AnimatedSection>
                <section className="py-20 relative w-full">
                    <div className="max-w-4xl mx-auto px-6">
                        <div className="flex items-center gap-4 mb-10">
                            <p className="text-xs uppercase tracking-widest text-[var(--color-text-muted)] font-semibold whitespace-nowrap">
                                Signing Sequence
                            </p>
                            <div className="h-px flex-grow bg-[var(--color-border)]" />
                        </div>

                        <div className="flex flex-col md:flex-row items-stretch md:items-center gap-4 md:gap-0 w-full">
                            {[
                                { num: '1', title: 'NDA', desc: 'Day one — before any call' },
                                { num: '2', title: 'DPA + EU SCCs', desc: 'After discovery call' },
                                { num: '3', title: 'Data security policy', desc: 'Concurrent with DPA' },
                            ].map((step, idx, arr) => (
                                <div key={idx} className="flex flex-col md:flex-row items-center flex-1">
                                    <div className="bg-[var(--color-bg-surface)] border border-[var(--color-border)] rounded-xl p-5 text-center w-full relative">
                                        <span className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-[var(--color-accent-cta)] text-white text-xs font-bold flex items-center justify-center">
                                            {step.num}
                                        </span>
                                        <div className="text-sm font-semibold text-[var(--color-text-primary)] mt-1">{step.title}</div>
                                        <div className="text-xs text-[var(--color-text-muted)] mt-1.5">{step.desc}</div>
                                    </div>
                                    {idx !== arr.length - 1 && (
                                        <>
                                            <span className="hidden md:block text-[var(--color-text-muted)] mx-3 text-lg shrink-0">→</span>
                                            <span className="md:hidden text-[var(--color-text-muted)] my-1 text-lg">↓</span>
                                        </>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </AnimatedSection>

            {/* ── 4. DOCUMENT CARDS (2×2 Grid) ── */}
            <AnimatedSection>
                <section className="pb-20 relative w-full">
                    <div className="max-w-4xl mx-auto px-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            {[
                                {
                                    badge: 'GDPR · DPA',
                                    badgeColor: 'rgba(74,124,255,0.10)',
                                    badgeBorder: 'rgba(74,124,255,0.20)',
                                    badgeText: 'var(--color-accent-cta)',
                                    title: 'GDPR & Data Processing Agreement',
                                    desc: 'Executed under GDPR Article 28. Defines subject matter, duration, nature, and purpose of processing — plus the technical and organisational measures protecting client data.',
                                    href: '/privacy-policy',
                                },
                                {
                                    badge: 'EU SCCs Module 2',
                                    badgeColor: 'rgba(74,124,255,0.10)',
                                    badgeBorder: 'rgba(74,124,255,0.20)',
                                    badgeText: 'var(--color-accent-cta)',
                                    title: 'Standard Contractual Clauses',
                                    desc: 'Commission Implementing Decision EU 2021/914. The legal transfer mechanism for EEA → Indonesia. Standard Commission text, unmodified. Annexed to every DPA.',
                                    href: '/legal/eu-sccs',
                                },
                                {
                                    badge: 'Security · TOMs',
                                    badgeColor: 'rgba(139,92,246,0.10)',
                                    badgeBorder: 'rgba(139,92,246,0.20)',
                                    badgeText: '#8b5cf6',
                                    title: 'Data Security Policy',
                                    desc: 'Technical and organisational measures under GDPR Article 32. Covers data residency model, per-annotator access controls, 72-hour breach notification, and end-of-engagement deletion.',
                                    href: '/legal/data-security-policy',
                                },
                                {
                                    badge: 'Legal identity',
                                    badgeColor: 'rgba(255,255,255,0.05)',
                                    badgeBorder: 'rgba(255,255,255,0.10)',
                                    badgeText: 'var(--color-text-muted)',
                                    title: 'Impressum',
                                    desc: 'Full legal entity details for PT Aeterna Data Intentio Logic — registration number, NPWP, registered address, and direct contact for formal and legal enquiries.',
                                    href: '/impressum',
                                },
                            ].map((card, idx) => (
                                <AnimatedSection key={idx} delay={idx * 0.08} className="h-full">
                                    <Link
                                        href={card.href}
                                        className="group block bg-[var(--color-bg-surface)] border border-[var(--color-border)] rounded-2xl p-7 h-full transition-all duration-200 hover:border-[var(--color-border-hover)] relative overflow-hidden"
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-br from-[rgba(74,124,255,0.03)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                                        <div className="relative z-10">
                                            <span
                                                className="inline-block text-xs font-semibold uppercase tracking-wider px-2.5 py-1 rounded-md mb-4"
                                                style={{
                                                    backgroundColor: card.badgeColor,
                                                    border: `1px solid ${card.badgeBorder}`,
                                                    color: card.badgeText,
                                                }}
                                            >
                                                {card.badge}
                                            </span>

                                            <h2 className="text-lg font-bold text-[var(--color-text-primary)] mb-3 group-hover:text-[var(--color-accent-cta)] transition-colors duration-200">
                                                {card.title}
                                            </h2>

                                            <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-5">
                                                {card.desc}
                                            </p>

                                            <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--color-accent-cta)] group-hover:gap-2.5 transition-all duration-200">
                                                Review document
                                                <ArrowRight className="w-4 h-4" />
                                            </span>
                                        </div>
                                    </Link>
                                </AnimatedSection>
                            ))}
                        </div>
                    </div>
                </section>
            </AnimatedSection>

            {/* ── 5. BOTTOM CTA ── */}
            <AnimatedSection>
                <section className="py-20 border-t border-[var(--color-border)] relative w-full overflow-hidden bg-[var(--color-bg-base)]">
                    <div
                        className="absolute inset-0 pointer-events-none -z-10"
                        style={{
                            background: "radial-gradient(ellipse 60% 80% at 50% 100%, rgba(74, 124, 255, 0.08) 0%, transparent 70%)"
                        }}
                    />
                    <div className="max-w-4xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
                        <div className="text-center md:text-left max-w-xl">
                            <h2 className="text-2xl lg:text-3xl font-bold text-[var(--color-text-primary)] mb-3">
                                Ready to review and proceed?
                            </h2>
                            <p className="text-[var(--color-text-secondary)] text-base leading-relaxed">
                                Start with a paid pilot. Pilot fee credited to your first invoice.
                            </p>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-3 shrink-0 w-full sm:w-auto">
                            <Link
                                href="/contact"
                                className="border border-[var(--color-border-subtle)] text-[var(--color-text-secondary)] font-semibold px-6 py-3 rounded-lg hover:border-[var(--color-border-hover)] hover:text-[var(--color-text-primary)] transition-all duration-200 text-center"
                            >
                                Book a consultation
                            </Link>
                            <Link
                                href="/contact"
                                className="bg-[var(--color-accent-cta)] text-white font-semibold px-6 py-3 rounded-lg hover:bg-[var(--color-accent-cta-hover)] transition-colors duration-200 inline-flex items-center justify-center gap-1.5"
                            >
                                Request pilot
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>
                </section>
            </AnimatedSection>
        </main>
    );
}
