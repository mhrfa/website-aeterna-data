import type { Metadata } from 'next';
import Link from 'next/link';
import { ChevronRight, Mail } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Impressum — Aeterna Data',
    description:
        'Legal information and company details for PT Aeterna Data Intentio Logic, operator of aeternadata.com.',
    robots: {
        index: true,
        follow: true,
    },
};

export default function ImpressumPage() {
    return (
        <main className="min-h-screen flex flex-col relative w-full overflow-hidden">

            {/* ── PAGE HEADER ── */}
            <section className="pt-32 pb-16 relative w-full">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(16,185,129,0.05)_0%,transparent_70%)] pointer-events-none -z-10" />

                <div className="max-w-3xl mx-auto px-6">
                    {/* Breadcrumb */}
                    <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-sm mb-8">
                        <Link
                            href="/"
                            className="text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] transition-colors"
                        >
                            Home
                        </Link>
                        <ChevronRight className="w-3.5 h-3.5 text-[var(--color-text-muted)]" />
                        <span className="text-[var(--color-text-primary)]">Impressum</span>
                    </nav>

                    {/* Label */}
                    <span className="inline-block rounded-full bg-[var(--color-bg-elevated)] border border-[var(--color-border)] text-[var(--color-text-primary)] text-xs px-4 py-1.5 font-semibold uppercase tracking-widest mb-6">
                        Legal
                    </span>

                    <h1 className="text-4xl lg:text-6xl font-bold tracking-tight text-[var(--color-text-primary)] mb-4">
                        Impressum
                    </h1>
                    <p className="text-[var(--color-text-secondary)] text-lg leading-relaxed max-w-2xl">
                        Legal information and company details for PT Aeterna Data Intentio Logic.
                    </p>
                </div>
            </section>

            {/* ── CONTENT BODY ── */}
            <section className="pb-24 relative w-full">
                <div className="max-w-3xl mx-auto px-6 space-y-16">

                    {/* ── SECTION 1: Company Information ── */}
                    <div>
                        <h2 className="text-2xl lg:text-3xl font-semibold text-[var(--color-text-primary)] mb-6">
                            Company Information
                        </h2>
                        <div className="bg-[var(--color-bg-surface)] border border-[var(--color-border)] rounded-2xl p-6 md:p-8 space-y-4">
                            <div className="grid grid-cols-1 sm:grid-cols-[160px_1fr] gap-2">
                                <span className="text-[var(--color-text-muted)] text-sm font-semibold uppercase tracking-wider">Legal Entity</span>
                                <span className="text-[var(--color-text-primary)]">PT Aeterna Data Intentio Logic</span>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-[160px_1fr] gap-2">
                                <span className="text-[var(--color-text-muted)] text-sm font-semibold uppercase tracking-wider">Business Type</span>
                                <span className="text-[var(--color-text-primary)]">
                                    Perseroan Terbatas Perorangan
                                    <span className="block text-[var(--color-text-secondary)] text-sm">(Indonesian Sole Proprietorship)</span>
                                </span>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-[160px_1fr] gap-2">
                                <span className="text-[var(--color-text-muted)] text-sm font-semibold uppercase tracking-wider">NIB</span>
                                <span className="text-[var(--color-text-primary)] font-mono text-sm">2801260156359</span>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-[160px_1fr] gap-2">
                                <span className="text-[var(--color-text-muted)] text-sm font-semibold uppercase tracking-wider">NPWP</span>
                                <span className="text-[var(--color-text-primary)] font-mono text-sm">1000000007725918</span>
                            </div>
                        </div>
                    </div>

                    {/* ── SECTION 2: Registered Address ── */}
                    <div>
                        <h2 className="text-2xl lg:text-3xl font-semibold text-[var(--color-text-primary)] mb-6">
                            Registered Address
                        </h2>
                        <div className="bg-[var(--color-bg-surface)] border border-[var(--color-border)] rounded-2xl p-6 md:p-8">
                            <address className="not-italic text-[var(--color-text-secondary)] leading-relaxed space-y-1">
                                <p className="text-[var(--color-text-primary)] font-mono text-sm">Komp. Perumahan Staf/Pengajar POLMAN, Bandung, West Java, Indonesia - 40132</p>
                            </address>
                        </div>
                    </div>

                    {/* ── SECTION 3: Contact ── */}
                    <div>
                        <h2 className="text-2xl lg:text-3xl font-semibold text-[var(--color-text-primary)] mb-6">
                            Contact
                        </h2>
                        <div className="bg-[var(--color-bg-surface)] border border-[var(--color-border)] rounded-2xl p-6 md:p-8 space-y-4">
                            <div className="grid grid-cols-1 sm:grid-cols-[160px_1fr] gap-2">
                                <span className="text-[var(--color-text-muted)] text-sm font-semibold uppercase tracking-wider">General</span>
                                <a href="mailto:contact@aeternadata.com" className="text-[var(--color-text-primary)] hover:underline transition-colors">
                                    contact@aeternadata.com
                                </a>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-[160px_1fr] gap-2">
                                <span className="text-[var(--color-text-muted)] text-sm font-semibold uppercase tracking-wider">Legal & DPA</span>
                                <a href="mailto:legal@aeternadata.com" className="text-[var(--color-text-primary)] hover:underline transition-colors">
                                    legal@aeternadata.com
                                </a>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-[160px_1fr] gap-2">
                                <span className="text-[var(--color-text-muted)] text-sm font-semibold uppercase tracking-wider">Website</span>
                                <span className="text-[var(--color-text-primary)]">www.aeternadata.com</span>
                            </div>
                        </div>
                    </div>

                    {/* ── SECTION 4: Responsible for Content ── */}
                    <div>
                        <h2 className="text-2xl lg:text-3xl font-semibold text-[var(--color-text-primary)] mb-6">
                            Responsible for Content
                        </h2>
                        <div className="bg-[var(--color-bg-surface)] border border-[var(--color-border)] rounded-2xl p-6 md:p-8">
                            <p className="text-[var(--color-text-primary)] font-mono text-sm mb-1">Muhammad Rifqi Fauzan Arifin</p>
                            <p className="text-[var(--color-text-secondary)]">Founder & Director, PT Aeterna Data Intentio Logic</p>
                        </div>
                    </div>

                    {/* ── SECTION 5: Service Description ── */}
                    <div>
                        <h2 className="text-2xl lg:text-3xl font-semibold text-[var(--color-text-primary)] mb-6">
                            Service Description
                        </h2>
                        <p className="text-[var(--color-text-secondary)] leading-relaxed">
                            Aeterna Data (PT Aeterna Data Intentio Logic) provides image annotation and visual AI
                            evaluation services for machine learning teams, including bounding box annotation, image
                            segmentation, image classification, visual RLHF evaluation, and dataset validation and
                            quality assurance. All services are delivered on a business-to-business (B2B) basis only.
                            Aeterna Data does not offer services to consumers.
                        </p>
                    </div>

                    {/* ── SECTION 6: Data Protection ── */}
                    <div>
                        <h2 className="text-2xl lg:text-3xl font-semibold text-[var(--color-text-primary)] mb-6">
                            Data Protection
                        </h2>
                        <div className="space-y-4">
                            <p className="text-[var(--color-text-secondary)] leading-relaxed">
                                Aeterna Data acts as a Data Processor under GDPR Article 28 in relation to personal data
                                processed on behalf of its clients. For data protection enquiries, including requests
                                related to the exercise of Data Subject rights, please contact:{' '}
                                <a href="mailto:legal@aeternadata.com" className="text-[var(--color-text-primary)] hover:underline transition-colors">
                                    legal@aeternadata.com
                                </a>
                            </p>
                            <p className="text-[var(--color-text-secondary)] leading-relaxed">
                                A full Data Processing Agreement (DPA) is available to clients upon request and is
                                executed prior to any data processing activity. EU Standard Contractual Clauses
                                (Module 2) are annexed to the DPA for EEA-to-Indonesia personal data transfers.
                            </p>
                        </div>
                    </div>

                    {/* ── SECTION 7: Regulatory Notes ── */}
                    <div>
                        <h2 className="text-2xl lg:text-3xl font-semibold text-[var(--color-text-primary)] mb-6">
                            Regulatory Notes
                        </h2>
                        <div className="space-y-4">
                            <p className="text-[var(--color-text-secondary)] leading-relaxed">
                                Aeterna Data is incorporated and operates under the laws of the Republic of Indonesia.
                                Cross-border data transfers from the European Economic Area (EEA) to Aeterna Data are
                                governed by EU Standard Contractual Clauses (Commission Implementing Decision EU
                                2021/914, Module 2).
                            </p>
                            <p className="text-[var(--color-text-secondary)] leading-relaxed">
                                This website is operated in compliance with:
                            </p>
                            <ul className="list-none space-y-3 pl-0">
                                <li className="flex items-start gap-3">
                                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[var(--color-text-primary)] shrink-0" />
                                    <span className="text-[var(--color-text-secondary)] leading-relaxed">
                                        EU General Data Protection Regulation (GDPR) 2016/679
                                    </span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[var(--color-text-primary)] shrink-0" />
                                    <span className="text-[var(--color-text-secondary)] leading-relaxed">
                                        Indonesian Personal Data Protection Law (UU No. 27 Tahun 2022 / UU PDP)
                                    </span>
                                </li>

                            </ul>
                        </div>
                    </div>

                    {/* ── SECTION 8: Disclaimer ── */}
                    <div>
                        <h2 className="text-2xl lg:text-3xl font-semibold text-[var(--color-text-primary)] mb-6">
                            Disclaimer
                        </h2>
                        <div className="space-y-4">
                            <p className="text-[var(--color-text-secondary)] leading-relaxed">
                                The information provided on this website is for general informational purposes only and
                                does not constitute legal, financial, or professional advice. Aeterna Data makes no
                                representations or warranties as to the accuracy or completeness of the information on
                                this site.
                            </p>
                            <p className="text-[var(--color-text-secondary)] leading-relaxed">
                                Links to third-party websites are provided for convenience only. Aeterna Data has no
                                control over, and accepts no responsibility for, the content of any linked third-party
                                site.
                            </p>
                        </div>
                    </div>

                    {/* ── SECTION 9: Copyright ── */}
                    <div>
                        <h2 className="text-2xl lg:text-3xl font-semibold text-[var(--color-text-primary)] mb-6">
                            Copyright
                        </h2>
                        <div className="space-y-4">
                            <p className="text-[var(--color-text-secondary)] leading-relaxed">
                                © 2026 PT Aeterna Data Intentio Logic. All rights reserved.
                            </p>
                            <p className="text-[var(--color-text-secondary)] leading-relaxed">
                                All content on this website — including text, design, structure, and branding — is
                                the property of PT Aeterna Data Intentio Logic and may not be reproduced, distributed,
                                or transmitted in any form without prior written permission, except as permitted by
                                applicable law.
                            </p>
                        </div>
                    </div>

                    {/* ── SECTION 10: Dispute Resolution ── */}
                    <div>
                        <h2 className="text-2xl lg:text-3xl font-semibold text-[var(--color-text-primary)] mb-6">
                            Dispute Resolution
                        </h2>
                        <div className="space-y-4">
                            <p className="text-[var(--color-text-secondary)] leading-relaxed">
                                PT Aeterna Data Intentio Logic is not obligated to participate in dispute resolution
                                proceedings before a consumer arbitration board, nor does it voluntarily do so. This is
                                consistent with Aeterna Data&apos;s B2B-only service model.
                            </p>
                            <p className="text-[var(--color-text-secondary)] leading-relaxed">
                                The European Commission&apos;s Online Dispute Resolution platform is available at:{' '}
                                <a
                                    href="https://ec.europa.eu/consumers/odr"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-[var(--color-text-primary)] hover:underline transition-colors break-all"
                                >
                                    https://ec.europa.eu/consumers/odr
                                </a>
                            </p>
                            <p className="text-[var(--color-text-secondary)] leading-relaxed">
                                However, as Aeterna Data serves business clients exclusively, this platform is not
                                applicable to our engagements.
                            </p>
                        </div>
                    </div>

                    {/* ── LAST UPDATED ── */}
                    <p className="text-[var(--color-text-muted)] text-sm">
                        Last updated: March 2026
                    </p>

                </div>
            </section>

            {/* ── BOTTOM STRIP ── */}
            <section className="py-16 border-t border-[var(--color-border)] relative w-full">
                <div className="max-w-3xl mx-auto px-6 text-center">
                    <p className="text-[var(--color-text-secondary)] text-lg mb-4">
                        Have a compliance question?
                    </p>
                    <a
                        href="mailto:legal@aeternadata.com"
                        className="inline-flex items-center gap-2 text-[var(--color-text-primary)] hover:underline transition-colors font-semibold"
                    >
                        <Mail className="w-4 h-4" />
                        legal@aeternadata.com
                    </a>
                </div>
            </section>
        </main>
    );
}
