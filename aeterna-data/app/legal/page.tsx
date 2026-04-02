import type { Metadata } from 'next';
import Link from 'next/link';
import { ChevronRight, ArrowUpRight, Shield, Cookie, FileText, Building2, Lock, Globe, ShieldCheck, Mail } from 'lucide-react';
import AnimatedSection from '@/components/ui/AnimatedSection';

export const metadata: Metadata = {
    title: 'Legal & Compliance — Aeterna Data',
    description: 'Legal documents, compliance references, and data protection materials for Aeterna Data clients and prospects. Privacy Policy, Impressum, Terms of Service, DPA, EU SCCs Module 2, and Data Security Policy.',
    robots: {
        index: true,
        follow: true,
    },
};

export default function LegalIndexPage() {
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

                <div className="max-w-4xl mx-auto px-6 relative z-10 w-full flex flex-col items-center">
                    {/* Breadcrumb */}
                    <nav aria-label="Breadcrumb" className="flex items-center justify-center gap-1.5 text-sm mb-8">
                        <Link
                            href="/"
                            className="text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent-cta)] rounded"
                        >
                            Home
                        </Link>
                        <ChevronRight className="w-3.5 h-3.5 text-[var(--color-text-muted)]" aria-hidden="true" />
                        <span className="text-[var(--color-text-muted)]">Legal</span>
                    </nav>

                    {/* Pre-heading Pill */}
                    <div
                        className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-8 border"
                        style={{ backgroundColor: "rgba(255,255,255,0.05)", borderColor: "rgba(255,255,255,0.10)" }}
                    >
                        <span className="text-[var(--color-text-muted)] text-xs font-semibold tracking-widest uppercase">
                            Legal & Compliance
                        </span>
                    </div>

                    {/* Headline */}
                    <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight leading-none text-[var(--color-text-primary)] max-w-4xl mx-auto">
                        Legal Documents<br />& Compliance References.
                    </h1>

                    {/* Subheadline */}
                    <p className="text-[var(--color-text-secondary)] text-lg lg:text-xl max-w-2xl mx-auto mt-6">
                        All legal documents, data protection instruments, and compliance references for Aeterna Data client engagements. Every document available for review before any commitment is made.
                    </p>
                </div>
            </section>

            {/* ── SECTION 1: Core Legal Documents ── */}
            <AnimatedSection>
                <section className="py-20 relative w-full bg-[var(--color-bg-base)]">
                    <div className="max-w-4xl mx-auto px-6">
                        <div className="mb-10">
                            <span className="text-[var(--color-accent-cta)] text-sm font-semibold tracking-widest uppercase mb-2 block">Core Legal</span>
                            <h2 className="text-3xl font-bold text-[var(--color-text-primary)]">Core Legal Documents.</h2>
                            <p className="text-[var(--color-text-secondary)] mt-4">
                                The foundational legal documents that govern Aeterna Data's relationship with clients, website visitors, and data subjects.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {/* Privacy Policy */}
                            <AnimatedSection delay={0.06}>
                                <Link href="/privacy-policy" className="block group bg-[var(--color-bg-surface)] border border-[var(--color-border)] rounded-2xl p-6 hover:bg-[var(--color-bg-elevated)] hover:border-[var(--color-border-hover)] transition-all duration-200 h-full flex flex-col focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent-cta)]" aria-label="Read Privacy Policy">
                                    <div className="flex justify-between items-start">
                                        <div className="text-xs font-mono uppercase tracking-widest text-[var(--color-text-muted)] bg-[var(--color-bg-elevated)] border border-[var(--color-border)] px-2 py-0.5 rounded-full inline-block">Privacy</div>
                                        <ArrowUpRight className="w-4 h-4 text-[var(--color-text-muted)] group-hover:text-[var(--color-accent-cta)] transition-colors duration-150" aria-hidden="true" />
                                    </div>
                                    <div className="mt-4 flex-grow">
                                        <div className="flex items-center gap-2">
                                            <Shield className="w-5 h-5 text-[var(--color-text-muted)]" aria-hidden="true" />
                                            <h3 className="text-lg font-semibold text-[var(--color-text-primary)] group-hover:text-[var(--color-text-primary)] transition-colors">Privacy Policy</h3>
                                        </div>
                                        <p className="text-sm leading-relaxed text-[var(--color-text-secondary)] mt-2">
                                            Describes how Aeterna Data collects, uses, and protects personal data through its website and services. Covers the legal basis for processing, data subject rights under GDPR, cookie usage, data retention periods, and contact details for privacy-related enquiries. Applicable to all website visitors and prospective clients.
                                        </p>
                                    </div>
                                    <div className="mt-5 flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <span className="w-2 h-2 rounded-full bg-[rgba(132,204,22,0.8)]" aria-hidden="true" />
                                            <span className="text-xs font-mono text-[var(--color-text-muted)]">Current — March 2026</span>
                                        </div>
                                        <span className="text-xs font-medium text-[var(--color-accent-cta)] group-hover:underline">View document →</span>
                                    </div>
                                </Link>
                            </AnimatedSection>

                            {/* Cookie Policy */}
                            <AnimatedSection delay={0.12}>
                                <Link href="/cookie-policy" className="block group bg-[var(--color-bg-surface)] border border-[var(--color-border)] rounded-2xl p-6 hover:bg-[var(--color-bg-elevated)] hover:border-[var(--color-border-hover)] transition-all duration-200 h-full flex flex-col focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent-cta)]" aria-label="Read Cookie Policy">
                                    <div className="flex justify-between items-start">
                                        <div className="text-xs font-mono uppercase tracking-widest text-[var(--color-text-muted)] bg-[var(--color-bg-elevated)] border border-[var(--color-border)] px-2 py-0.5 rounded-full inline-block">Cookies</div>
                                        <ArrowUpRight className="w-4 h-4 text-[var(--color-text-muted)] group-hover:text-[var(--color-accent-cta)] transition-colors duration-150" aria-hidden="true" />
                                    </div>
                                    <div className="mt-4 flex-grow">
                                        <div className="flex items-center gap-2">
                                            <Cookie className="w-5 h-5 text-[var(--color-text-muted)]" aria-hidden="true" />
                                            <h3 className="text-lg font-semibold text-[var(--color-text-primary)] group-hover:text-[var(--color-text-primary)] transition-colors">Cookie Policy</h3>
                                        </div>
                                        <p className="text-sm leading-relaxed text-[var(--color-text-secondary)] mt-2">
                                            Explains which cookies Aeterna Data uses on its website, the purpose of each cookie category, and how visitors can manage their cookie preferences. Distinguishes between strictly necessary cookies and optional analytics or preference cookies. Consent is obtained through the cookie banner before optional cookies are set.
                                        </p>
                                    </div>
                                    <div className="mt-5 flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <span className="w-2 h-2 rounded-full bg-[rgba(132,204,22,0.8)]" aria-hidden="true" />
                                            <span className="text-xs font-mono text-[var(--color-text-muted)]">Current — March 2026</span>
                                        </div>
                                        <span className="text-xs font-medium text-[var(--color-accent-cta)] group-hover:underline">View document →</span>
                                    </div>
                                </Link>
                            </AnimatedSection>

                            {/* Terms of Service */}
                            <AnimatedSection delay={0.18}>
                                <Link href="/terms-of-service" className="block group bg-[var(--color-bg-surface)] border border-[var(--color-border)] rounded-2xl p-6 hover:bg-[var(--color-bg-elevated)] hover:border-[var(--color-border-hover)] transition-all duration-200 h-full flex flex-col focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent-cta)]" aria-label="Read Terms of Service">
                                    <div className="flex justify-between items-start">
                                        <div className="text-xs font-mono uppercase tracking-widest text-[var(--color-text-muted)] bg-[var(--color-bg-elevated)] border border-[var(--color-border)] px-2 py-0.5 rounded-full inline-block">Terms</div>
                                        <ArrowUpRight className="w-4 h-4 text-[var(--color-text-muted)] group-hover:text-[var(--color-accent-cta)] transition-colors duration-150" aria-hidden="true" />
                                    </div>
                                    <div className="mt-4 flex-grow">
                                        <div className="flex items-center gap-2">
                                            <FileText className="w-5 h-5 text-[var(--color-text-muted)]" aria-hidden="true" />
                                            <h3 className="text-lg font-semibold text-[var(--color-text-primary)] group-hover:text-[var(--color-text-primary)] transition-colors">Terms of Service</h3>
                                        </div>
                                        <p className="text-sm leading-relaxed text-[var(--color-text-secondary)] mt-2">
                                            Governs access to and use of the Aeterna Data website and publicly accessible content. Covers permitted use, intellectual property, limitation of liability, and applicable law. Note: commercial annotation engagements are governed by a Master Service Agreement and Statement of Work — not these Terms of Service.
                                        </p>
                                    </div>
                                    <div className="mt-5 flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <span className="w-2 h-2 rounded-full bg-[rgba(132,204,22,0.8)]" aria-hidden="true" />
                                            <span className="text-xs font-mono text-[var(--color-text-muted)]">Current — March 2026</span>
                                        </div>
                                        <span className="text-xs font-medium text-[var(--color-accent-cta)] group-hover:underline">View document →</span>
                                    </div>
                                </Link>
                            </AnimatedSection>

                            {/* Impressum */}
                            <AnimatedSection delay={0.24}>
                                <Link href="/impressum" className="block group bg-[var(--color-bg-surface)] border border-[var(--color-border)] rounded-2xl p-6 hover:bg-[var(--color-bg-elevated)] hover:border-[var(--color-border-hover)] transition-all duration-200 h-full flex flex-col focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent-cta)]" aria-label="Read Impressum">
                                    <div className="flex justify-between items-start">
                                        <div className="text-xs font-mono uppercase tracking-widest text-[var(--color-text-muted)] bg-[var(--color-bg-elevated)] border border-[var(--color-border)] px-2 py-0.5 rounded-full inline-block">Imprint</div>
                                        <ArrowUpRight className="w-4 h-4 text-[var(--color-text-muted)] group-hover:text-[var(--color-accent-cta)] transition-colors duration-150" aria-hidden="true" />
                                    </div>
                                    <div className="mt-4 flex-grow">
                                        <div className="flex items-center gap-2">
                                            <Building2 className="w-5 h-5 text-[var(--color-text-muted)]" aria-hidden="true" />
                                            <h3 className="text-lg font-semibold text-[var(--color-text-primary)] group-hover:text-[var(--color-text-primary)] transition-colors">Impressum</h3>
                                        </div>
                                        <p className="text-sm leading-relaxed text-[var(--color-text-secondary)] mt-2">
                                            Mandatory imprint disclosure under Indonesian law and standard practice for transparency with EU clients. Contains Aeterna Data's full legal entity name (PT Aeterna Data Intentio Logic), company registration details (NIB), tax identification (NPWP), registered address, and contact information for formal enquiries.
                                        </p>
                                    </div>
                                    <div className="mt-5 flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <span className="w-2 h-2 rounded-full bg-[rgba(132,204,22,0.8)]" aria-hidden="true" />
                                            <span className="text-xs font-mono text-[var(--color-text-muted)]">Current — March 2026</span>
                                        </div>
                                        <span className="text-xs font-medium text-[var(--color-accent-cta)] group-hover:underline">View document →</span>
                                    </div>
                                </Link>
                            </AnimatedSection>
                        </div>
                    </div>
                </section>
            </AnimatedSection>

            {/* ── SECTION 2: Data Protection Documents ── */}
            <AnimatedSection>
                <section className="py-20 relative w-full bg-[var(--color-bg-base)]">
                    <div className="max-w-4xl mx-auto px-6">
                        <div className="mb-10">
                            <span className="text-[var(--color-accent-cta)] text-sm font-semibold tracking-widest uppercase mb-2 block">Data Protection</span>
                            <h2 className="text-3xl font-bold text-[var(--color-text-primary)]">Data Protection Instruments.</h2>
                            <p className="text-[var(--color-text-secondary)] mt-4">
                                The data protection documents executed before any personal data is shared in an Aeterna Data annotation engagement. Required by GDPR and available for legal review before commitment.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {/* GDPR & DPA */}
                            <AnimatedSection delay={0.06}>
                                <Link href="/privacy-policy" className="block group bg-[var(--color-bg-surface)] border border-[var(--color-border)] rounded-2xl p-6 hover:bg-[var(--color-bg-elevated)] hover:border-[var(--color-border-hover)] transition-all duration-200 h-full flex flex-col focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent-cta)]" aria-label="Read GDPR & Data Processing Agreement summary in Privacy Policy">
                                    <div className="flex justify-between items-start">
                                        <div className="text-xs font-mono uppercase tracking-widest text-[var(--color-text-muted)] bg-[var(--color-bg-elevated)] border border-[var(--color-border)] px-2 py-0.5 rounded-full inline-block">GDPR Art. 28</div>
                                        <ArrowUpRight className="w-4 h-4 text-[var(--color-text-muted)] group-hover:text-[var(--color-accent-cta)] transition-colors duration-150" aria-hidden="true" />
                                    </div>
                                    <div className="mt-4 flex-grow">
                                        <div className="flex items-center gap-2">
                                            <Lock className="w-5 h-5 text-[var(--color-text-muted)]" aria-hidden="true" />
                                            <h3 className="text-lg font-semibold text-[var(--color-text-primary)] group-hover:text-[var(--color-text-primary)] transition-colors">GDPR & Data Processing Agreement</h3>
                                        </div>
                                        <p className="text-sm leading-relaxed text-[var(--color-text-secondary)] mt-2">
                                            The Data Processing Agreement governs Aeterna Data's processing of personal data on behalf of EU clients under GDPR Article 28. Specifies processing purposes, data types, security obligations, sub-processor rules, data subject rights assistance, and deletion procedures. Executed after the NDA and before any personal data is transferred or discussed.
                                        </p>
                                    </div>
                                    <div className="mt-5 flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <span className="w-2 h-2 rounded-full bg-[rgba(132,204,22,0.8)]" aria-hidden="true" />
                                            <span className="text-xs font-mono text-[var(--color-text-muted)]">Available for review on request</span>
                                        </div>
                                        <span className="text-xs font-medium text-[var(--color-accent-cta)] group-hover:underline">View document →</span>
                                    </div>
                                </Link>
                            </AnimatedSection>

                            {/* EU SCCs Module 2 */}
                            <AnimatedSection delay={0.12}>
                                <Link href="/legal/eu-sccs" className="block group bg-[var(--color-bg-surface)] border border-[var(--color-border)] rounded-2xl p-6 hover:bg-[var(--color-bg-elevated)] hover:border-[var(--color-border-hover)] transition-all duration-200 h-full flex flex-col focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent-cta)]" aria-label="Read EU Standard Contractual Clauses Module 2 reference">
                                    <div className="flex justify-between items-start">
                                        <div className="text-xs font-mono uppercase tracking-widest text-[var(--color-text-muted)] bg-[var(--color-bg-elevated)] border border-[var(--color-border)] px-2 py-0.5 rounded-full inline-block">EU 2021/914</div>
                                        <ArrowUpRight className="w-4 h-4 text-[var(--color-text-muted)] group-hover:text-[var(--color-accent-cta)] transition-colors duration-150" aria-hidden="true" />
                                    </div>
                                    <div className="mt-4 flex-grow">
                                        <div className="flex items-center gap-2">
                                            <Globe className="w-5 h-5 text-[var(--color-text-muted)]" aria-hidden="true" />
                                            <h3 className="text-lg font-semibold text-[var(--color-text-primary)] group-hover:text-[var(--color-text-primary)] transition-colors">EU Standard Contractual Clauses Module 2</h3>
                                        </div>
                                        <p className="text-sm leading-relaxed text-[var(--color-text-secondary)] mt-2">
                                            Commission Implementing Decision EU 2021/914, Module 2 (Controller-to-Processor). The legal mechanism for transferring personal data from the EEA to Aeterna Data in Indonesia under GDPR Article 46(2)(c). Annexed to every DPA. Executed simultaneously with the DPA before data sharing begins. The full reference page explains the legal basis, module selection, and execution process.
                                        </p>
                                    </div>
                                    <div className="mt-5 flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <span className="w-2 h-2 rounded-full bg-[rgba(132,204,22,0.8)]" aria-hidden="true" />
                                            <span className="text-xs font-mono text-[var(--color-text-muted)]">Standard Commission text — unmodified</span>
                                        </div>
                                        <span className="text-xs font-medium text-[var(--color-accent-cta)] group-hover:underline">View document →</span>
                                    </div>
                                </Link>
                            </AnimatedSection>
                        </div>
                    </div>
                </section>
            </AnimatedSection>

            {/* ── SECTION 3: Compliance Reference Pages ── */}
            <AnimatedSection>
                <section className="py-20 relative w-full bg-[var(--color-bg-base)]">
                    <div className="max-w-4xl mx-auto px-6">
                        <div className="mb-10">
                            <span className="text-[var(--color-accent-cta)] text-sm font-semibold tracking-widest uppercase mb-2 block">Compliance</span>
                            <h2 className="text-3xl font-bold text-[var(--color-text-primary)]">Compliance Reference Pages.</h2>
                            <p className="text-[var(--color-text-secondary)] mt-4">
                                Long-form compliance reference pages for legal and security reviewers. Each page documents Aeterna Data's position and obligations in detail — available publicly as part of transparent vendor disclosure.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {/* Data Security Policy */}
                            <AnimatedSection delay={0.06}>
                                <Link href="/legal/data-security-policy" className="block group bg-[var(--color-bg-surface)] border border-[var(--color-border)] rounded-2xl p-6 hover:bg-[var(--color-bg-elevated)] hover:border-[var(--color-border-hover)] transition-all duration-200 h-full flex flex-col focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent-cta)]" aria-label="Read Data Security Policy">
                                    <div className="flex justify-between items-start">
                                        <div className="text-xs font-mono uppercase tracking-widest text-[var(--color-text-muted)] bg-[var(--color-bg-elevated)] border border-[var(--color-border)] px-2 py-0.5 rounded-full inline-block">GDPR Art. 32</div>
                                        <ArrowUpRight className="w-4 h-4 text-[var(--color-text-muted)] group-hover:text-[var(--color-accent-cta)] transition-colors duration-150" aria-hidden="true" />
                                    </div>
                                    <div className="mt-4 flex-grow">
                                        <div className="flex items-center gap-2">
                                            <ShieldCheck className="w-5 h-5 text-[var(--color-text-muted)]" aria-hidden="true" />
                                            <h3 className="text-lg font-semibold text-[var(--color-text-primary)] group-hover:text-[var(--color-text-primary)] transition-colors">Data Security Policy</h3>
                                        </div>
                                        <p className="text-sm leading-relaxed text-[var(--color-text-secondary)] mt-2">
                                            Documents the technical and organisational security measures Aeterna Data applies to protect client data throughout every annotation engagement. Covers the BYOT security model, per-annotator access controls, breach notification within 72 hours, data deletion procedures, and GDPR Article 32 compliance. Constitutes the Annex II TOMs for the EU SCCs.
                                        </p>
                                    </div>
                                    <div className="mt-5 flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <span className="w-2 h-2 rounded-full bg-[rgba(132,204,22,0.8)]" aria-hidden="true" />
                                            <span className="text-xs font-mono text-[var(--color-text-muted)]">Current — March 2026</span>
                                        </div>
                                        <span className="text-xs font-medium text-[var(--color-accent-cta)] group-hover:underline">View document →</span>
                                    </div>
                                </Link>
                            </AnimatedSection>
                        </div>
                    </div>
                </section>
            </AnimatedSection>

            {/* ── SECTION 4: For Legal Teams ── */}
            <AnimatedSection>
                <section className="py-20 relative w-full bg-[var(--color-bg-base)]">
                    <div className="max-w-4xl mx-auto px-6">
                        <div className="mb-10">
                            <span className="text-[var(--color-accent-cta)] text-sm font-semibold tracking-widest uppercase mb-2 block">For Legal Teams</span>
                            <h2 className="text-3xl font-bold text-[var(--color-text-primary)]">What Legal Teams Ask For.</h2>
                            <p className="text-[var(--color-text-secondary)] mt-4">
                                If you are a legal or compliance reviewer conducting vendor due diligence on Aeterna Data, the following documents are the most commonly requested. All are available for review before any engagement begins.
                            </p>
                        </div>

                        <div className="flex flex-col">
                            {/* Item 1 */}
                            <AnimatedSection delay={0.05}>
                                <div className="flex gap-4 items-start border-b border-[var(--color-border)] py-5">
                                    <div className="font-mono text-sm text-[var(--color-accent-cta)] shrink-0 w-6 mt-0.5">01</div>
                                    <div>
                                        <div className="text-base font-semibold text-[var(--color-text-primary)]">Data Processing Agreement (DPA)</div>
                                        <div className="text-sm text-[var(--color-text-secondary)] mt-1 leading-relaxed">Available on request — provided during DPA negotiation after the discovery call.</div>
                                        <div className="text-sm mt-2 font-medium">
                                            <Link href="/contact?type=general" className="inline-flex items-center gap-1 text-[var(--color-accent-cta)] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent-cta)] rounded">
                                                Contact <ChevronRight className="w-3 h-3" aria-hidden="true" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </AnimatedSection>

                            {/* Item 2 */}
                            <AnimatedSection delay={0.10}>
                                <div className="flex gap-4 items-start border-b border-[var(--color-border)] py-5">
                                    <div className="font-mono text-sm text-[var(--color-accent-cta)] shrink-0 w-6 mt-0.5">02</div>
                                    <div>
                                        <div className="text-base font-semibold text-[var(--color-text-primary)]">EU SCCs Module 2 (Controller-to-Processor)</div>
                                        <div className="text-sm text-[var(--color-text-secondary)] mt-1 leading-relaxed">Reference page publicly available. Executed version provided during DPA review.</div>
                                        <div className="text-sm mt-2 font-medium">
                                            <Link href="/legal/eu-sccs" className="inline-flex items-center gap-1 text-[var(--color-accent-cta)] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent-cta)] rounded">
                                                Read the reference page <ChevronRight className="w-3 h-3" aria-hidden="true" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </AnimatedSection>

                            {/* Item 3 */}
                            <AnimatedSection delay={0.15}>
                                <div className="flex gap-4 items-start border-b border-[var(--color-border)] py-5">
                                    <div className="font-mono text-sm text-[var(--color-accent-cta)] shrink-0 w-6 mt-0.5">03</div>
                                    <div>
                                        <div className="text-base font-semibold text-[var(--color-text-primary)]">Data Security Policy (GDPR Art. 32 / EU SCCs Annex II)</div>
                                        <div className="text-sm text-[var(--color-text-secondary)] mt-1 leading-relaxed">Publicly available on this website.</div>
                                        <div className="text-sm mt-2 font-medium">
                                            <Link href="/legal/data-security-policy" className="inline-flex items-center gap-1 text-[var(--color-accent-cta)] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent-cta)] rounded">
                                                Read the policy <ChevronRight className="w-3 h-3" aria-hidden="true" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </AnimatedSection>

                            {/* Item 4 */}
                            <AnimatedSection delay={0.20}>
                                <div className="flex gap-4 items-start py-5">
                                    <div className="font-mono text-sm text-[var(--color-accent-cta)] shrink-0 w-6 mt-0.5">04</div>
                                    <div>
                                        <div className="text-base font-semibold text-[var(--color-text-primary)]">Transfer Impact Assessment for Indonesia</div>
                                        <div className="text-sm text-[var(--color-text-secondary)] mt-1 leading-relaxed">Available on request during DPA review process. Not publicly published.</div>
                                        <div className="text-sm mt-2 font-medium">
                                            <Link href="/contact?type=general" className="inline-flex items-center gap-1 text-[var(--color-accent-cta)] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent-cta)] rounded">
                                                Request via contact <ChevronRight className="w-3 h-3" aria-hidden="true" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </AnimatedSection>
                        </div>

                        {/* Info Box */}
                        <AnimatedSection delay={0.30}>
                            <div className="bg-[rgba(74,124,255,0.06)] border border-[rgba(74,124,255,0.15)] rounded-xl p-5 mt-8">
                                <Mail className="w-5 h-5 text-[var(--color-accent-cta)] mb-3" aria-hidden="true" />
                                <h3 className="text-sm font-semibold text-[var(--color-text-primary)]">Direct Legal Contact</h3>
                                <p className="text-sm text-[var(--color-text-secondary)] mt-2 leading-relaxed">
                                    Legal and compliance enquiries — including DPA review requests, Transfer Impact Assessment requests, and data subject rights exercises — should be directed to:
                                </p>
                                <a href="mailto:legal@aeternadata.com" className="text-sm font-mono text-[var(--color-accent-cta)] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent-cta)] rounded inline-block mt-3" aria-label="Email Aeterna Data legal team at legal@aeternadata.com">
                                    legal@aeternadata.com
                                </a>
                            </div>
                        </AnimatedSection>
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
                            Ready to Review the Full Contract Stack?
                        </h2>
                        <p className="text-[var(--color-text-secondary)] text-lg mb-10 leading-relaxed max-w-2xl mx-auto">
                            NDA signed first. DPA and EU SCCs after the discovery call. Every document available for your legal team before any data is shared or work begins.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <Link
                                href="/contact"
                                className="bg-[var(--color-accent-cta)] text-white font-semibold px-8 py-3.5 rounded-lg hover:bg-[var(--color-accent-cta-hover)] transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent-cta)]"
                            >
                                Request Contract Documents
                            </Link>
                            <Link
                                href="/how-it-works"
                                className="border border-[var(--color-border-subtle)] text-[var(--color-text-secondary)] px-8 py-3.5 rounded-lg hover:border-[var(--color-border-hover)] hover:text-[var(--color-text-primary)] transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent-cta)]"
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
