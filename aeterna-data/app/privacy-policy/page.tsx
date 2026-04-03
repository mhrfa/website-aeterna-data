import type { Metadata } from 'next';
import Link from 'next/link';
import { ChevronRight, Mail } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Privacy Policy — Aeterna Data',
    description:
        'Privacy Policy for aeternadata.com. How PT Aeterna Data Intentio Logic collects, processes, and protects personal data in compliance with GDPR and UU PDP.',
    robots: {
        index: true,
        follow: true,
    },
};

export default function PrivacyPolicyPage() {
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
                        <span className="text-[var(--color-text-primary)]">Privacy Policy</span>
                    </nav>

                    {/* Label */}
                    <span className="inline-block rounded-full bg-[var(--color-bg-elevated)] border border-[var(--color-border)] text-[var(--color-text-primary)] text-xs px-4 py-1.5 font-semibold uppercase tracking-widest mb-6">
                        Legal
                    </span>

                    <h1 className="text-4xl lg:text-6xl font-bold tracking-tight text-[var(--color-text-primary)] mb-4">
                        Privacy Policy
                    </h1>
                    <p className="text-[var(--color-text-secondary)] text-lg leading-relaxed max-w-2xl">
                        How we collect, use, and protect your personal data. Last updated: March 2026
                    </p>
                </div>
            </section>

            {/* ── CONTENT BODY ── */}
            <section className="pb-24 relative w-full">
                <div className="max-w-3xl mx-auto px-6 space-y-16">

                    {/* ── SECTION 1: Who We Are ── */}
                    <div>
                        <h2 className="text-2xl lg:text-3xl font-semibold text-[var(--color-text-primary)] mb-6">
                            Who We Are
                        </h2>
                        <div className="space-y-4">
                            <p className="text-[var(--color-text-secondary)] leading-relaxed">
                                This Privacy Policy applies to the website aeternadata.com, operated by PT Aeterna Data Intentio Logic, trading as Aeterna Data.
                            </p>
                            <div className="bg-[var(--color-bg-surface)] border border-[var(--color-border)] rounded-2xl p-6 md:p-8 space-y-4">
                                <div className="grid grid-cols-1 sm:grid-cols-[160px_1fr] gap-2">
                                    <span className="text-[var(--color-text-muted)] text-sm font-semibold uppercase tracking-wider">Company</span>
                                    <span className="text-[var(--color-text-primary)]">PT Aeterna Data Intentio Logic</span>
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-[160px_1fr] gap-2">
                                    <span className="text-[var(--color-text-muted)] text-sm font-semibold uppercase tracking-wider">Trading</span>
                                    <span className="text-[var(--color-text-primary)]">Aeterna Data</span>
                                </div>
                                {/* TODO: Replace with registered address before launch */}
                                <div className="grid grid-cols-1 sm:grid-cols-[160px_1fr] gap-2">
                                    <span className="text-[var(--color-text-muted)] text-sm font-semibold uppercase tracking-wider">Address</span>
                                    <span className="text-[var(--color-text-primary)] font-mono text-sm">Komp. Perumahan Staf/Pengajar POLMAN, Bandung, West Java, Indonesia - 40132</span>
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-[160px_1fr] gap-2">
                                    <span className="text-[var(--color-text-muted)] text-sm font-semibold uppercase tracking-wider">Email</span>
                                    <a href="mailto:contact@aeternadata.com" className="text-[var(--color-text-primary)] hover:underline transition-colors">
                                        contact@aeternadata.com
                                    </a>
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-[160px_1fr] gap-2">
                                    <span className="text-[var(--color-text-muted)] text-sm font-semibold uppercase tracking-wider">Website</span>
                                    <span className="text-[var(--color-text-primary)]">www.aeternadata.com</span>
                                </div>
                            </div>
                            <p className="text-[var(--color-text-secondary)] leading-relaxed">
                                PT Aeterna Data Intentio Logic is the Data Controller for personal data collected through this website.
                            </p>
                        </div>
                    </div>

                    {/* ── SECTION 2: Scope of This Policy ── */}
                    <div>
                        <h2 className="text-2xl lg:text-3xl font-semibold text-[var(--color-text-primary)] mb-6">
                            Scope of This Policy
                        </h2>
                        <div className="space-y-4">
                            <p className="text-[var(--color-text-secondary)] leading-relaxed">
                                This Privacy Policy covers personal data collected through:
                            </p>
                            <ul className="list-none space-y-3 pl-0">
                                <li className="flex items-start gap-3">
                                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[var(--color-text-primary)] shrink-0" />
                                    <span className="text-[var(--color-text-secondary)] leading-relaxed">
                                        This website (aeternadata.com) and any subdomains
                                    </span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[var(--color-text-primary)] shrink-0" />
                                    <span className="text-[var(--color-text-secondary)] leading-relaxed">
                                        Contact and enquiry forms on this website
                                    </span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[var(--color-text-primary)] shrink-0" />
                                    <span className="text-[var(--color-text-secondary)] leading-relaxed">
                                        Email correspondence with Aeterna Data
                                    </span>
                                </li>
                            </ul>
                            <p className="text-[var(--color-text-secondary)] leading-relaxed">
                                This policy does not cover personal data processed by Aeterna Data on behalf of its clients in the course of providing annotation services. That processing is governed by the Data Processing Agreement (DPA) executed between Aeterna Data and each client.
                            </p>
                        </div>
                    </div>

                    {/* ── SECTION 3: What Data We Collect ── */}
                    <div>
                        <h2 className="text-2xl lg:text-3xl font-semibold text-[var(--color-text-primary)] mb-6">
                            What Data We Collect
                        </h2>
                        <div className="space-y-4">
                            <p className="text-[var(--color-text-secondary)] leading-relaxed">
                                We collect only the personal data you actively provide to us. We do not collect data silently or without your knowledge.
                            </p>
                            <p className="text-[var(--color-text-primary)] font-semibold">Contact and enquiry forms:</p>
                            <ul className="list-none space-y-3 pl-0">
                                <li className="flex items-start gap-3">
                                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[var(--color-text-primary)] shrink-0" />
                                    <span className="text-[var(--color-text-secondary)] leading-relaxed">Full name</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[var(--color-text-primary)] shrink-0" />
                                    <span className="text-[var(--color-text-secondary)] leading-relaxed">Business email address</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[var(--color-text-primary)] shrink-0" />
                                    <span className="text-[var(--color-text-secondary)] leading-relaxed">Company name</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[var(--color-text-primary)] shrink-0" />
                                    <span className="text-[var(--color-text-secondary)] leading-relaxed">Country</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[var(--color-text-primary)] shrink-0" />
                                    <span className="text-[var(--color-text-secondary)] leading-relaxed">Project description or message content</span>
                                </li>
                            </ul>
                            <p className="text-[var(--color-text-primary)] font-semibold">Automatically collected data:</p>
                            <ul className="list-none space-y-3 pl-0">
                                <li className="flex items-start gap-3">
                                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[var(--color-text-primary)] shrink-0" />
                                    <span className="text-[var(--color-text-secondary)] leading-relaxed">IP address (for security and abuse prevention)</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[var(--color-text-primary)] shrink-0" />
                                    <span className="text-[var(--color-text-secondary)] leading-relaxed">Browser type and version</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[var(--color-text-primary)] shrink-0" />
                                    <span className="text-[var(--color-text-secondary)] leading-relaxed">Pages visited and time spent (via analytics, if enabled)</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[var(--color-text-primary)] shrink-0" />
                                    <span className="text-[var(--color-text-secondary)] leading-relaxed">Referring URL</span>
                                </li>
                            </ul>
                            <p className="text-[var(--color-text-secondary)] leading-relaxed">
                                We do not collect or process any special categories of personal data (sensitive data) through this website.
                            </p>
                        </div>
                    </div>

                    {/* ── SECTION 4: Legal Basis for Processing ── */}
                    <div>
                        <h2 className="text-2xl lg:text-3xl font-semibold text-[var(--color-text-primary)] mb-6">
                            Legal Basis for Processing
                        </h2>
                        <div className="space-y-4">
                            <p className="text-[var(--color-text-secondary)] leading-relaxed">
                                We process your personal data under the following legal bases as defined by GDPR Article 6:
                            </p>
                            <ul className="list-none space-y-3 pl-0">
                                <li className="flex items-start gap-3">
                                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[var(--color-text-primary)] shrink-0" />
                                    <span className="text-[var(--color-text-secondary)] leading-relaxed">
                                        <strong className="text-[var(--color-text-primary)]">Legitimate interests (Article 6(1)(f)):</strong> To respond to business enquiries and evaluate potential commercial engagements.
                                    </span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[var(--color-text-primary)] shrink-0" />
                                    <span className="text-[var(--color-text-secondary)] leading-relaxed">
                                        <strong className="text-[var(--color-text-primary)]">Contractual necessity (Article 6(1)(b)):</strong> Where processing is necessary to take steps prior to entering into a contract with you.
                                    </span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[var(--color-text-primary)] shrink-0" />
                                    <span className="text-[var(--color-text-secondary)] leading-relaxed">
                                        <strong className="text-[var(--color-text-primary)]">Consent (Article 6(1)(a)):</strong> Where you have explicitly consented, such as by submitting a contact form with a consent checkbox. You may withdraw consent at any time by contacting us.
                                    </span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[var(--color-text-primary)] shrink-0" />
                                    <span className="text-[var(--color-text-secondary)] leading-relaxed">
                                        <strong className="text-[var(--color-text-primary)]">Legal obligation (Article 6(1)(c)):</strong> Where processing is required to comply with applicable law.
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* ── SECTION 5: How We Use Your Data ── */}
                    <div>
                        <h2 className="text-2xl lg:text-3xl font-semibold text-[var(--color-text-primary)] mb-6">
                            How We Use Your Data
                        </h2>
                        <div className="space-y-4">
                            <p className="text-[var(--color-text-secondary)] leading-relaxed">
                                We use personal data collected through this website for the following purposes:
                            </p>
                            <ul className="list-none space-y-3 pl-0">
                                <li className="flex items-start gap-3">
                                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[var(--color-text-primary)] shrink-0" />
                                    <span className="text-[var(--color-text-secondary)] leading-relaxed">To respond to your enquiry or project brief</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[var(--color-text-primary)] shrink-0" />
                                    <span className="text-[var(--color-text-secondary)] leading-relaxed">To send a scoping proposal or Statement of Work</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[var(--color-text-primary)] shrink-0" />
                                    <span className="text-[var(--color-text-secondary)] leading-relaxed">To schedule discovery calls or consultations</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[var(--color-text-primary)] shrink-0" />
                                    <span className="text-[var(--color-text-secondary)] leading-relaxed">To comply with our legal obligations</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[var(--color-text-primary)] shrink-0" />
                                    <span className="text-[var(--color-text-secondary)] leading-relaxed">To improve this website and our services</span>
                                </li>
                            </ul>
                            <p className="text-[var(--color-text-secondary)] leading-relaxed">
                                We do not use your data for unsolicited marketing. We do not sell, rent, or trade your personal data to any third party.
                            </p>
                        </div>
                    </div>

                    {/* ── SECTION 6: Data Sharing ── */}
                    <div>
                        <h2 className="text-2xl lg:text-3xl font-semibold text-[var(--color-text-primary)] mb-6">
                            Data Sharing
                        </h2>
                        <div className="space-y-4">
                            <p className="text-[var(--color-text-secondary)] leading-relaxed">
                                We do not sell or share your personal data with third parties for their own marketing purposes.
                            </p>
                            <p className="text-[var(--color-text-secondary)] leading-relaxed">
                                We may share your data with:
                            </p>
                            <ul className="list-none space-y-3 pl-0">
                                <li className="flex items-start gap-3">
                                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[var(--color-text-primary)] shrink-0" />
                                    <span className="text-[var(--color-text-secondary)] leading-relaxed">
                                        <strong className="text-[var(--color-text-primary)]">Service providers:</strong> Third-party tools used to operate this website (e.g. hosting, email delivery, analytics). These providers act as Data Processors under binding agreements and may not use your data for their own purposes.
                                    </span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[var(--color-text-primary)] shrink-0" />
                                    <span className="text-[var(--color-text-secondary)] leading-relaxed">
                                        <strong className="text-[var(--color-text-primary)]">Legal authorities:</strong> Where required by applicable law, court order, or regulatory requirement.
                                    </span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[var(--color-text-primary)] shrink-0" />
                                    <span className="text-[var(--color-text-secondary)] leading-relaxed">
                                        <strong className="text-[var(--color-text-primary)]">Professional advisers:</strong> Legal counsel or auditors, under strict confidentiality obligations.
                                    </span>
                                </li>
                            </ul>
                            <p className="text-[var(--color-text-secondary)] leading-relaxed">
                                Where any third-party processor is located outside the EU/EEA, appropriate transfer safeguards (including EU Standard Contractual Clauses) are in place.
                            </p>
                        </div>
                    </div>

                    {/* ── SECTION 7: International Data Transfers ── */}
                    <div>
                        <h2 className="text-2xl lg:text-3xl font-semibold text-[var(--color-text-primary)] mb-6">
                            International Data Transfers
                        </h2>
                        <div className="space-y-4">
                            <p className="text-[var(--color-text-secondary)] leading-relaxed">
                                PT Aeterna Data Intentio Logic is established in Indonesia, outside the EU/EEA. Where personal data is transferred from the EU/EEA to Indonesia, such transfers are governed by EU Standard Contractual Clauses (SCCs) — Module 1 (Controller-to-Controller) as adopted by Commission Implementing Decision (EU) 2021/914.
                            </p>
                            <p className="text-[var(--color-text-secondary)] leading-relaxed">
                                By submitting an enquiry through this website, you acknowledge that your personal data may be transferred to and processed in Indonesia under the safeguards described above.
                            </p>
                            <p className="text-[var(--color-text-secondary)] leading-relaxed">
                                A copy of the applicable SCCs is available upon request at:{' '}
                                <a href="mailto:legal@aeternadata.com" className="text-[var(--color-text-primary)] hover:underline transition-colors">
                                    legal@aeternadata.com
                                </a>
                            </p>
                        </div>
                    </div>

                    {/* ── SECTION 8: Cookies ── */}
                    <div>
                        <h2 className="text-2xl lg:text-3xl font-semibold text-[var(--color-text-primary)] mb-6">
                            Cookies
                        </h2>
                        <div className="space-y-4">
                            <p className="text-[var(--color-text-secondary)] leading-relaxed">
                                This website may use cookies and similar tracking technologies. A cookie is a small text file placed on your device to help the website function and to collect usage data.
                            </p>
                            <p className="text-[var(--color-text-secondary)] leading-relaxed">
                                Types of cookies we may use:
                            </p>
                            <ul className="list-none space-y-3 pl-0">
                                <li className="flex items-start gap-3">
                                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[var(--color-text-primary)] shrink-0" />
                                    <span className="text-[var(--color-text-secondary)] leading-relaxed">
                                        <strong className="text-[var(--color-text-primary)]">Strictly necessary cookies:</strong> Required for the website to function. Cannot be disabled.
                                    </span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[var(--color-text-primary)] shrink-0" />
                                    <span className="text-[var(--color-text-secondary)] leading-relaxed">
                                        <strong className="text-[var(--color-text-primary)]">Analytics cookies:</strong> Used to understand how visitors interact with the website. Only placed with your consent.
                                    </span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[var(--color-text-primary)] shrink-0" />
                                    <span className="text-[var(--color-text-secondary)] leading-relaxed">
                                        <strong className="text-[var(--color-text-primary)]">Preference cookies:</strong> Used to remember your settings and preferences.
                                    </span>
                                </li>
                            </ul>
                            <p className="text-[var(--color-text-secondary)] leading-relaxed">
                                You can manage or disable cookies through your browser settings at any time. Disabling strictly necessary cookies may affect website functionality.
                            </p>
                            <p className="text-[var(--color-text-secondary)] leading-relaxed">
                                For full details, see our{' '}
                                <Link href="/cookie-policy" className="text-[var(--color-text-primary)] hover:underline transition-colors">
                                    Cookie Policy
                                </Link>
                                .
                            </p>
                        </div>
                    </div>

                    {/* ── SECTION 9: Data Retention ── */}
                    <div>
                        <h2 className="text-2xl lg:text-3xl font-semibold text-[var(--color-text-primary)] mb-6">
                            Data Retention
                        </h2>
                        <div className="space-y-4">
                            <p className="text-[var(--color-text-secondary)] leading-relaxed">
                                We retain personal data only for as long as necessary for the purpose for which it was collected:
                            </p>
                            <ul className="list-none space-y-3 pl-0">
                                <li className="flex items-start gap-3">
                                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[var(--color-text-primary)] shrink-0" />
                                    <span className="text-[var(--color-text-secondary)] leading-relaxed">
                                        <strong className="text-[var(--color-text-primary)]">Enquiry and contact data:</strong> Retained for up to 24 months from last contact, unless a commercial engagement follows — in which case retention is governed by the applicable contract.
                                    </span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[var(--color-text-primary)] shrink-0" />
                                    <span className="text-[var(--color-text-secondary)] leading-relaxed">
                                        <strong className="text-[var(--color-text-primary)]">Website analytics data:</strong> Retained for up to 12 months.
                                    </span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[var(--color-text-primary)] shrink-0" />
                                    <span className="text-[var(--color-text-secondary)] leading-relaxed">
                                        <strong className="text-[var(--color-text-primary)]">Legal and compliance records:</strong> Retained for the period required by applicable law (typically 5–7 years).
                                    </span>
                                </li>
                            </ul>
                            <p className="text-[var(--color-text-secondary)] leading-relaxed">
                                After the applicable retention period, personal data is securely deleted or anonymised.
                            </p>
                        </div>
                    </div>

                    {/* ── SECTION 10: Your Rights Under GDPR ── */}
                    <div>
                        <h2 className="text-2xl lg:text-3xl font-semibold text-[var(--color-text-primary)] mb-6">
                            Your Rights Under GDPR
                        </h2>
                        <div className="space-y-4">
                            <p className="text-[var(--color-text-secondary)] leading-relaxed">
                                If you are located in the EU/EEA, you have the following rights regarding your personal data:
                            </p>
                            <ul className="list-none space-y-3 pl-0">
                                <li className="flex items-start gap-3">
                                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[var(--color-text-primary)] shrink-0" />
                                    <span className="text-[var(--color-text-secondary)] leading-relaxed">
                                        <strong className="text-[var(--color-text-primary)]">Right of access:</strong> Request a copy of the personal data we hold about you.
                                    </span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[var(--color-text-primary)] shrink-0" />
                                    <span className="text-[var(--color-text-secondary)] leading-relaxed">
                                        <strong className="text-[var(--color-text-primary)]">Right to rectification:</strong> Request correction of inaccurate or incomplete data.
                                    </span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[var(--color-text-primary)] shrink-0" />
                                    <span className="text-[var(--color-text-secondary)] leading-relaxed">
                                        <strong className="text-[var(--color-text-primary)]">Right to erasure:</strong> Request deletion of your personal data where there is no legitimate reason to continue processing it.
                                    </span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[var(--color-text-primary)] shrink-0" />
                                    <span className="text-[var(--color-text-secondary)] leading-relaxed">
                                        <strong className="text-[var(--color-text-primary)]">Right to restriction:</strong> Request that we restrict processing of your data in certain circumstances.
                                    </span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[var(--color-text-primary)] shrink-0" />
                                    <span className="text-[var(--color-text-secondary)] leading-relaxed">
                                        <strong className="text-[var(--color-text-primary)]">Right to data portability:</strong> Receive your data in a structured, machine-readable format.
                                    </span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[var(--color-text-primary)] shrink-0" />
                                    <span className="text-[var(--color-text-secondary)] leading-relaxed">
                                        <strong className="text-[var(--color-text-primary)]">Right to object:</strong> Object to processing based on legitimate interests.
                                    </span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[var(--color-text-primary)] shrink-0" />
                                    <span className="text-[var(--color-text-secondary)] leading-relaxed">
                                        <strong className="text-[var(--color-text-primary)]">Right to withdraw consent:</strong> Where processing is based on consent, withdraw it at any time without affecting the lawfulness of prior processing.
                                    </span>
                                </li>
                            </ul>
                            <p className="text-[var(--color-text-secondary)] leading-relaxed">
                                To exercise any of these rights, contact us at:{' '}
                                <a href="mailto:legal@aeternadata.com" className="text-[var(--color-text-primary)] hover:underline transition-colors">
                                    legal@aeternadata.com
                                </a>
                            </p>
                            <p className="text-[var(--color-text-secondary)] leading-relaxed">
                                We will respond within 30 days. We may need to verify your identity before processing your request.
                            </p>
                        </div>
                    </div>

                    {/* ── SECTION 11: Right to Lodge a Complaint ── */}
                    <div>
                        <h2 className="text-2xl lg:text-3xl font-semibold text-[var(--color-text-primary)] mb-6">
                            Right to Lodge a Complaint
                        </h2>
                        <div className="space-y-4">
                            <p className="text-[var(--color-text-secondary)] leading-relaxed">
                                If you believe your personal data has been processed unlawfully, you have the right to lodge a complaint with the relevant supervisory authority in your EU/EEA member state.
                            </p>
                            <p className="text-[var(--color-text-secondary)] leading-relaxed">
                                You may lodge a complaint with the data protection supervisory authority in the EU/EEA member state where you reside, work, or where the alleged infringement took place. A list of EU/EEA supervisory authorities is available at:{' '}
                                <a
                                    href="https://edpb.europa.eu/about-edpb/about-edpb/members_en"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-[var(--color-text-primary)] hover:underline transition-colors"
                                >
                                    https://edpb.europa.eu/about-edpb/about-edpb/members_en
                                </a>
                            </p>
                        </div>
                    </div>

                    {/* ── SECTION 12: Security ── */}
                    <div>
                        <h2 className="text-2xl lg:text-3xl font-semibold text-[var(--color-text-primary)] mb-6">
                            Security
                        </h2>
                        <div className="space-y-4">
                            <p className="text-[var(--color-text-secondary)] leading-relaxed">
                                We implement appropriate technical and organisational measures to protect your personal data against accidental or unlawful destruction, loss, alteration, unauthorised disclosure, or access.
                            </p>
                            <p className="text-[var(--color-text-secondary)] leading-relaxed">
                                These measures include:
                            </p>
                            <ul className="list-none space-y-3 pl-0">
                                <li className="flex items-start gap-3">
                                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[var(--color-text-primary)] shrink-0" />
                                    <span className="text-[var(--color-text-secondary)] leading-relaxed">Encrypted data transmission (TLS/HTTPS)</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[var(--color-text-primary)] shrink-0" />
                                    <span className="text-[var(--color-text-secondary)] leading-relaxed">Access controls limiting who can access personal data</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[var(--color-text-primary)] shrink-0" />
                                    <span className="text-[var(--color-text-secondary)] leading-relaxed">Regular review of security practices</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[var(--color-text-primary)] shrink-0" />
                                    <span className="text-[var(--color-text-secondary)] leading-relaxed">Contractual security obligations on all data processors</span>
                                </li>
                            </ul>
                            <p className="text-[var(--color-text-secondary)] leading-relaxed">
                                No method of transmission over the internet is 100% secure. While we take reasonable precautions, we cannot guarantee absolute security.
                            </p>
                        </div>
                    </div>

                    {/* ── SECTION 13: Third-Party Links ── */}
                    <div>
                        <h2 className="text-2xl lg:text-3xl font-semibold text-[var(--color-text-primary)] mb-6">
                            Third-Party Links
                        </h2>
                        <p className="text-[var(--color-text-secondary)] leading-relaxed">
                            This website may contain links to third-party websites. Aeterna Data has no control over and accepts no responsibility for the privacy practices or content of those websites. We recommend reviewing the privacy policy of any third-party site you visit.
                        </p>
                    </div>

                    {/* ── SECTION 14: Changes to This Policy ── */}
                    <div>
                        <h2 className="text-2xl lg:text-3xl font-semibold text-[var(--color-text-primary)] mb-6">
                            Changes to This Policy
                        </h2>
                        <div className="space-y-4">
                            <p className="text-[var(--color-text-secondary)] leading-relaxed">
                                We may update this Privacy Policy from time to time to reflect changes in our practices, technology, or legal requirements. The updated policy will be posted on this page with a revised &apos;Last updated&apos; date.
                            </p>
                            <p className="text-[var(--color-text-secondary)] leading-relaxed">
                                We encourage you to review this policy periodically. For material changes, we will make reasonable efforts to notify affected individuals.
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
                        Have a data protection question?
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
