import type { Metadata } from 'next';
import Link from 'next/link';
import { ChevronRight, ShieldCheck, FileText, Lock, Building } from 'lucide-react';
import AnimatedSection from '@/components/ui/AnimatedSection';

export const metadata: Metadata = {
    title: 'Compliance Hub — Aeterna Data',
    description: 'Aeterna Data\'s unified directory for data protection, security schemas, legal disclosures, and regulatory compliance information.',
    alternates: {
        canonical: 'https://aeterna-data.com/compliance',
    },
};

const complianceLinks = [
    {
        title: 'GDPR & DPA',
        href: '/privacy-policy',
        icon: ShieldCheck,
        description: 'Aeterna Data processes personal data as a data processor under GDPR Article 28. The Data Processing Agreement documents the subject matter, duration, nature, and purpose of processing — along with the technical and organisational measures that protect client data throughout every annotation engagement. Executed after the NDA and before any project data is shared.',
    },
    {
        title: 'EU SCCs Module 2',
        href: '/legal/eu-sccs',
        icon: FileText,
        description: 'Indonesia does not benefit from an EU adequacy decision. EU Standard Contractual Clauses Module 2 — adopted under Commission Implementing Decision EU 2021/914 — are the legal mechanism for transferring personal data from the EEA to Aeterna Data under GDPR Article 46(2)(c). Annexed to every DPA. Executed before data sharing begins. Standard Commission text, unmodified.',
    },
    {
        title: 'Data Security Policy',
        href: '/legal/data-security-policy',
        icon: Lock,
        description: 'Documents the security measures Aeterna Data applies to protect client data across every annotation engagement. Covers the data residency model — where client data stays in the client\x27s own annotation environment — per-annotator access controls, 72-hour breach notification, and data deletion at engagement end. Constitutes the technical and organisational measures (TOMs) documentation under GDPR Article 32.',
    },
    {
        title: 'Impressum',
        href: '/impressum',
        icon: Building,
        description: 'Mandatory disclosure of Aeterna Data\x27s legal identity. Contains the full legal entity name (PT Aeterna Data Intentio Logic), company registration number (NIB), tax identification (NPWP), registered address in Indonesia, and direct contact details for formal and legal enquiries.',
    },
];

export default function CompliancePage() {
    return (
        <main className="min-h-screen flex flex-col relative w-full overflow-hidden bg-[var(--color-bg-base)]">

            {/* ── PAGE HEADER ── */}
            <section className="pt-32 pb-16 relative w-full">
                <div className="absolute inset-0 bg-grid-[var(--color-border)]/[0.2] bg-[length:32px_32px] pointer-events-none" />
                <div className="max-w-[720px] mx-auto px-8 relative z-10 text-center">
                    <AnimatedSection>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--color-primary-dark)]/20 border border-[var(--color-primary-dark)] text-sm text-[var(--color-text-primary)] mb-6 shadow-sm">
                            <span className="w-2 h-2 rounded-full bg-[var(--color-primary-base)] animate-pulse" />
                            Trust & Transparency
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-text-primary)] mb-6 tracking-tight">
                            Compliance Hub
                        </h1>
                        <p className="text-lg md:text-xl text-[var(--color-text-secondary)] leading-relaxed">
                            Legal documents, data protection instruments, and security policies for every Aeterna Data client engagement. Available for review before any commitment is made.
                        </p>
                    </AnimatedSection>
                </div>
            </section>

            {/* ── CONTENT DIRECTORY ── */}
            <section className="py-12 pb-32 relative w-full z-10">
                <div className="max-w-[800px] mx-auto px-8">
                    <AnimatedSection delay={200} className="grid grid-cols-1 gap-6">
                        {complianceLinks.map((link) => (
                            <Link 
                                key={link.href} 
                                href={link.href}
                                className="group block relative overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-surface-elevated)] p-8 transition-all duration-300 hover:border-[var(--color-primary-dark)] hover:shadow-lg hover:-translate-y-1"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary-dark)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                                
                                <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-6">
                                    <div className="w-12 h-12 rounded-xl bg-[var(--color-bg-base)] border border-[var(--color-border)] flex items-center justify-center shrink-0 group-hover:border-[var(--color-primary-dark)] transition-colors duration-300">
                                        <link.icon className="w-6 h-6 text-[var(--color-primary-base)]" />
                                    </div>
                                    
                                    <div className="flex-grow">
                                        <h2 className="text-xl font-semibold text-[var(--color-text-primary)] mb-2 group-hover:text-[var(--color-primary-base)] transition-colors duration-300 flex items-center gap-2">
                                            {link.title}
                                        </h2>
                                        <p className="text-[var(--color-text-secondary)] leading-relaxed text-sm md:text-base pr-4">
                                            {link.description}
                                        </p>
                                    </div>

                                    <div className="shrink-0 mt-4 md:mt-0 text-[var(--color-primary-base)] bg-[var(--color-primary-dark)]/10 p-2 rounded-full transform group-hover:translate-x-1 group-hover:bg-[var(--color-primary-dark)]/20 transition-all duration-300">
                                        <ChevronRight className="w-5 h-5" />
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </AnimatedSection>
                </div>
            </section>
        </main>
    );
}
