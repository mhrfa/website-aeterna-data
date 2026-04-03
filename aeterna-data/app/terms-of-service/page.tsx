import type { Metadata } from 'next';
import Link from 'next/link';
import { ChevronRight, Mail, AlertTriangle } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Terms of Service — Aeterna Data',
    description:
        'Terms and conditions governing the use of aeternadata.com and the professional services provided by PT Aeterna Data Intentio Logic.',
    robots: {
        index: true,
        follow: true,
    },
};

export default function TermsOfServicePage() {
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
                        <span className="text-[var(--color-text-primary)]">Terms of Service</span>
                    </nav>

                    {/* Label */}
                    <span className="inline-block rounded-full bg-[var(--color-bg-elevated)] border border-[var(--color-border)] text-[var(--color-text-primary)] text-xs px-4 py-1.5 font-semibold uppercase tracking-widest mb-6">
                        Legal
                    </span>

                    <h1 className="text-4xl lg:text-6xl font-bold tracking-tight text-[var(--color-text-primary)] mb-4">
                        Terms of Service
                    </h1>
                    <p className="text-[var(--color-text-secondary)] text-lg leading-relaxed max-w-2xl">
                        The terms and conditions governing your use of this website and our services. Last updated: March 2026
                    </p>
                </div>
            </section>

            {/* ── CONTENT BODY ── */}
            <section className="pb-24 relative w-full">
                <div className="max-w-3xl mx-auto px-6 space-y-16">

                    {/* ── SECTION 0: IMPORTANT NOTICE ── */}
                    <div className="bg-[var(--color-bg-surface)] border-l-4 border-l-[var(--color-text-primary)] border border-[var(--color-border)] rounded-2xl p-6 md:p-8">
                        <div className="flex items-center gap-3 mb-4">
                            <AlertTriangle className="w-5 h-5 text-[var(--color-text-primary)] shrink-0" />
                            <h3 className="text-lg font-semibold text-[var(--color-text-primary)]">Important Notice</h3>
                        </div>
                        <div className="space-y-4">
                            <p className="text-[var(--color-text-secondary)] leading-relaxed">
                                These Terms of Service govern your use of the website aeternadata.com and are applicable to business users only. By accessing this website or engaging Aeterna Data for services, you confirm that you are acting in a business capacity and not as a consumer.
                            </p>
                            <p className="text-[var(--color-text-secondary)] leading-relaxed">
                                If you are a client engaging Aeterna Data for annotation or related services, your engagement is governed by the Master Service Agreement (MSA), Statement of Work (SOW), Non-Disclosure Agreement (NDA), and Data Processing Agreement (DPA) executed between the parties. These Terms of Service apply to website use only and do not supersede those agreements.
                            </p>
                        </div>
                    </div>

                    {/* ── SECTION 1: About Aeterna Data ── */}
                    <div>
                        <h2 className="text-2xl lg:text-3xl font-semibold text-[var(--color-text-primary)] mb-6">
                            About Aeterna Data
                        </h2>
                        <div className="space-y-4">
                            <p className="text-[var(--color-text-secondary)] leading-relaxed">
                                This website is operated by PT Aeterna Data Intentio Logic, trading as Aeterna Data.
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
                                Aeterna Data provides AI data annotation, multilingual linguistic analysis, RLHF and model alignment, and data validation services exclusively to business clients (B2B). We do not provide services to consumers.
                            </p>
                        </div>
                    </div>

                    {/* ── SECTION 2: Acceptance of Terms ── */}
                    <div>
                        <h2 className="text-2xl lg:text-3xl font-semibold text-[var(--color-text-primary)] mb-6">
                            Acceptance of Terms
                        </h2>
                        <div className="space-y-4">
                            <p className="text-[var(--color-text-secondary)] leading-relaxed">
                                By accessing or using this website, you agree to be bound by these Terms of Service and our Privacy Policy. If you do not agree to these terms, please do not use this website.
                            </p>
                            <p className="text-[var(--color-text-secondary)] leading-relaxed">
                                These terms apply to all visitors, users, and others who access or use this website. Access to this website from jurisdictions where its content is unlawful is prohibited.
                            </p>
                            <p className="text-[var(--color-text-secondary)] leading-relaxed">
                                We reserve the right to update these Terms of Service at any time. Updates will be posted on this page with a revised effective date. Continued use of the website after updates constitutes acceptance of the revised terms.
                            </p>
                        </div>
                    </div>

                    {/* ── SECTION 3: Permitted Use ── */}
                    <div>
                        <h2 className="text-2xl lg:text-3xl font-semibold text-[var(--color-text-primary)] mb-6">
                            Permitted Use
                        </h2>
                        <div className="space-y-4">
                            <p className="text-[var(--color-text-secondary)] leading-relaxed">
                                You may use this website for lawful purposes only and in accordance with these terms. You agree not to:
                            </p>
                            <ul className="list-none space-y-3 pl-0">
                                <li className="flex items-start gap-3">
                                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[var(--color-text-primary)] shrink-0" />
                                    <span className="text-[var(--color-text-secondary)] leading-relaxed">Use this website in any way that violates applicable local, national, or international laws or regulations</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[var(--color-text-primary)] shrink-0" />
                                    <span className="text-[var(--color-text-secondary)] leading-relaxed">Transmit any unsolicited or unauthorised advertising or promotional material</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[var(--color-text-primary)] shrink-0" />
                                    <span className="text-[var(--color-text-secondary)] leading-relaxed">Attempt to gain unauthorised access to any part of the website, its servers, or any database connected to it</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[var(--color-text-primary)] shrink-0" />
                                    <span className="text-[var(--color-text-secondary)] leading-relaxed">Introduce viruses, trojans, worms, or other malicious or technologically harmful material</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[var(--color-text-primary)] shrink-0" />
                                    <span className="text-[var(--color-text-secondary)] leading-relaxed">Scrape, crawl, or systematically extract data from this website without prior written consent</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[var(--color-text-primary)] shrink-0" />
                                    <span className="text-[var(--color-text-secondary)] leading-relaxed">Impersonate Aeterna Data, its employees, or any other person or entity</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[var(--color-text-primary)] shrink-0" />
                                    <span className="text-[var(--color-text-secondary)] leading-relaxed">Use this website in any way that could damage, disable, overburden, or impair it</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* ── SECTION 4: Services and Commercial Engagements ── */}
                    <div>
                        <h2 className="text-2xl lg:text-3xl font-semibold text-[var(--color-text-primary)] mb-6">
                            Services and Commercial Engagements
                        </h2>
                        <div className="space-y-4">
                            <p className="text-[var(--color-text-secondary)] leading-relaxed">
                                Information on this website about Aeterna Data&apos;s services is provided for general informational purposes. It does not constitute a contractual offer.
                            </p>
                            <p className="text-[var(--color-text-secondary)] leading-relaxed">
                                All commercial engagements for annotation or related services are governed exclusively by individually negotiated and signed agreements between Aeterna Data and the client, including:
                            </p>
                            <ul className="list-none space-y-3 pl-0">
                                <li className="flex items-start gap-3">
                                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[var(--color-text-primary)] shrink-0" />
                                    <span className="text-[var(--color-text-secondary)] leading-relaxed">Master Service Agreement (MSA)</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[var(--color-text-primary)] shrink-0" />
                                    <span className="text-[var(--color-text-secondary)] leading-relaxed">Statement of Work (SOW)</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[var(--color-text-primary)] shrink-0" />
                                    <span className="text-[var(--color-text-secondary)] leading-relaxed">Non-Disclosure Agreement (NDA)</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[var(--color-text-primary)] shrink-0" />
                                    <span className="text-[var(--color-text-secondary)] leading-relaxed">Data Processing Agreement (DPA)</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[var(--color-text-primary)] shrink-0" />
                                    <span className="text-[var(--color-text-secondary)] leading-relaxed">EU Standard Contractual Clauses (where applicable)</span>
                                </li>
                            </ul>
                            <p className="text-[var(--color-text-secondary)] leading-relaxed">
                                No engagement commences until all required documents have been executed by authorised representatives of both parties. No verbal agreement, email exchange, or website interaction constitutes a binding commitment by Aeterna Data to provide services.
                            </p>
                        </div>
                    </div>

                    {/* ── SECTION 5: Pricing and Payment ── */}
                    <div>
                        <h2 className="text-2xl lg:text-3xl font-semibold text-[var(--color-text-primary)] mb-6">
                            Pricing and Payment
                        </h2>
                        <div className="space-y-4">
                            <p className="text-[var(--color-text-secondary)] leading-relaxed">
                                Pricing information is not published on this website. All rates, fees, and payment terms are individually agreed and fixed in a signed Statement of Work (SOW) before any work commences.
                            </p>
                            <p className="text-[var(--color-text-secondary)] leading-relaxed">
                                Indicative pricing discussed during discovery calls or consultations is non-binding until reflected in a signed SOW.
                            </p>
                            <p className="text-[var(--color-text-secondary)] leading-relaxed">
                                All invoices are denominated in EUR unless otherwise agreed in writing. Payment terms, late payment provisions, and applicable tax treatment are set out in the relevant SOW and Master Service Agreement.
                            </p>
                        </div>
                    </div>

                    {/* ── SECTION 6: Intellectual Property ── */}
                    <div>
                        <h2 className="text-2xl lg:text-3xl font-semibold text-[var(--color-text-primary)] mb-6">
                            Intellectual Property
                        </h2>
                        <div className="space-y-4">
                            <p className="text-[var(--color-text-secondary)] leading-relaxed">
                                All content on this website — including but not limited to text, design, graphics, logos, icons, and the Aeterna Data brand — is the property of PT Aeterna Data Intentio Logic and is protected by applicable intellectual property laws.
                            </p>
                            <p className="text-[var(--color-text-secondary)] leading-relaxed">
                                You may not reproduce, distribute, modify, transmit, or use any content from this website for commercial purposes without prior written permission from Aeterna Data.
                            </p>
                            <p className="text-[var(--color-text-secondary)] leading-relaxed">
                                The Aeterna Data name and logo are trademarks of PT Aeterna Data Intentio Logic. Nothing on this website grants any licence to use these marks.
                            </p>
                            <p className="text-[var(--color-text-secondary)] leading-relaxed">
                                Intellectual property rights in client deliverables (annotated datasets, quality reports, and related outputs) are governed exclusively by the applicable MSA and SOW.
                            </p>
                        </div>
                    </div>

                    {/* ── SECTION 7: Confidentiality ── */}
                    <div>
                        <h2 className="text-2xl lg:text-3xl font-semibold text-[var(--color-text-primary)] mb-6">
                            Confidentiality
                        </h2>
                        <div className="space-y-4">
                            <p className="text-[var(--color-text-secondary)] leading-relaxed">
                                Any information you voluntarily share with Aeterna Data through this website — including through contact forms or email enquiries — will be treated with reasonable confidentiality and used only to respond to your enquiry or evaluate a potential engagement.
                            </p>
                            <p className="text-[var(--color-text-secondary)] leading-relaxed">
                                For formal confidentiality obligations applicable to commercial engagements, a Non-Disclosure Agreement (NDA) is executed as part of the standard contract stack before any project-specific information is shared.
                            </p>
                        </div>
                    </div>

                    {/* ── SECTION 8: No Warranties ── */}
                    <div>
                        <h2 className="text-2xl lg:text-3xl font-semibold text-[var(--color-text-primary)] mb-6">
                            No Warranties
                        </h2>
                        <div className="space-y-4">
                            <p className="text-[var(--color-text-secondary)] leading-relaxed">
                                This website and its content are provided on an &apos;as is&apos; and &apos;as available&apos; basis without any warranties, express or implied.
                            </p>
                            <p className="text-[var(--color-text-secondary)] leading-relaxed">
                                To the fullest extent permitted by applicable law, Aeterna Data disclaims all warranties including but not limited to:
                            </p>
                            <ul className="list-none space-y-3 pl-0">
                                <li className="flex items-start gap-3">
                                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[var(--color-text-primary)] shrink-0" />
                                    <span className="text-[var(--color-text-secondary)] leading-relaxed">Warranties of merchantability or fitness for a particular purpose</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[var(--color-text-primary)] shrink-0" />
                                    <span className="text-[var(--color-text-secondary)] leading-relaxed">Warranties that the website will be uninterrupted, error-free, or free of viruses or other harmful components</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[var(--color-text-primary)] shrink-0" />
                                    <span className="text-[var(--color-text-secondary)] leading-relaxed">Warranties as to the accuracy, completeness, or currency of any information on the website</span>
                                </li>
                            </ul>
                            <p className="text-[var(--color-text-secondary)] leading-relaxed">
                                Nothing in this clause limits Aeterna Data&apos;s liability for fraudulent misrepresentation or any liability that cannot be excluded by applicable law.
                            </p>
                        </div>
                    </div>

                    {/* ── SECTION 9: Limitation of Liability ── */}
                    <div>
                        <h2 className="text-2xl lg:text-3xl font-semibold text-[var(--color-text-primary)] mb-6">
                            Limitation of Liability
                        </h2>
                        <div className="space-y-4">
                            <p className="text-[var(--color-text-secondary)] leading-relaxed">
                                To the maximum extent permitted by applicable law, PT Aeterna Data Intentio Logic shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of, or inability to use, this website.
                            </p>
                            <p className="text-[var(--color-text-secondary)] leading-relaxed">
                                This includes but is not limited to loss of profits, loss of data, business interruption, or reputational damage — even if Aeterna Data has been advised of the possibility of such damages.
                            </p>
                            <p className="text-[var(--color-text-secondary)] leading-relaxed">
                                Aeterna Data&apos;s total liability to you for any claim arising from your use of this website shall not exceed EUR 100.
                            </p>
                            <p className="text-[var(--color-text-secondary)] leading-relaxed">
                                Nothing in these terms excludes liability for: (a) death or personal injury caused by negligence; (b) fraud or fraudulent misrepresentation; (c) any other liability that cannot be excluded or limited by applicable law.
                            </p>
                        </div>
                    </div>

                    {/* ── SECTION 10: Third-Party Links ── */}
                    <div>
                        <h2 className="text-2xl lg:text-3xl font-semibold text-[var(--color-text-primary)] mb-6">
                            Third-Party Links
                        </h2>
                        <div className="space-y-4">
                            <p className="text-[var(--color-text-secondary)] leading-relaxed">
                                This website may contain links to third-party websites for your convenience. These links do not constitute an endorsement by Aeterna Data of the linked website or its content.
                            </p>
                            <p className="text-[var(--color-text-secondary)] leading-relaxed">
                                Aeterna Data has no control over and accepts no responsibility for the content, privacy practices, or availability of any third-party website. You access third-party websites entirely at your own risk.
                            </p>
                        </div>
                    </div>

                    {/* ── SECTION 11: Data Protection ── */}
                    <div>
                        <h2 className="text-2xl lg:text-3xl font-semibold text-[var(--color-text-primary)] mb-6">
                            Data Protection
                        </h2>
                        <div className="space-y-4">
                            <p className="text-[var(--color-text-secondary)] leading-relaxed">
                                Your use of this website is also governed by our{' '}
                                <Link href="/privacy-policy" className="text-[var(--color-text-primary)] hover:underline transition-colors">
                                    Privacy Policy
                                </Link>
                                , which is incorporated into these Terms of Service by reference.
                            </p>
                            <p className="text-[var(--color-text-secondary)] leading-relaxed">
                                For data processed in the course of providing annotation services, the applicable Data Processing Agreement (DPA) governs — not this Privacy Policy.
                            </p>
                        </div>
                    </div>

                    {/* ── SECTION 12: Cookies ── */}
                    <div>
                        <h2 className="text-2xl lg:text-3xl font-semibold text-[var(--color-text-primary)] mb-6">
                            Cookies
                        </h2>
                        <div className="space-y-4">
                            <p className="text-[var(--color-text-secondary)] leading-relaxed">
                                This website uses cookies as described in our{' '}
                                <Link href="/cookie-policy" className="text-[var(--color-text-primary)] hover:underline transition-colors">
                                    Cookie Policy
                                </Link>
                                .
                            </p>
                            <p className="text-[var(--color-text-secondary)] leading-relaxed">
                                By continuing to use this website, you consent to our use of cookies in accordance with that policy.
                            </p>
                        </div>
                    </div>

                    {/* ── SECTION 13: Availability and Amendments ── */}
                    <div>
                        <h2 className="text-2xl lg:text-3xl font-semibold text-[var(--color-text-primary)] mb-6">
                            Availability and Amendments
                        </h2>
                        <div className="space-y-4">
                            <p className="text-[var(--color-text-secondary)] leading-relaxed">
                                Aeterna Data reserves the right to modify, suspend, or discontinue this website — or any part of it — at any time and without notice. We shall not be liable for any modification, suspension, or discontinuation.
                            </p>
                            <p className="text-[var(--color-text-secondary)] leading-relaxed">
                                We may revise these Terms of Service at any time by updating this page. The revised terms take effect immediately upon posting. Your continued use of the website after any revision constitutes acceptance of the updated terms.
                            </p>
                        </div>
                    </div>

                    {/* ── SECTION 14: Governing Law ── */}
                    <div>
                        <h2 className="text-2xl lg:text-3xl font-semibold text-[var(--color-text-primary)] mb-6">
                            Governing Law
                        </h2>
                        <div className="space-y-4">
                            <p className="text-[var(--color-text-secondary)] leading-relaxed">
                                These Terms of Service are governed by and construed in accordance with the laws of the Republic of Indonesia.
                            </p>
                            <p className="text-[var(--color-text-secondary)] leading-relaxed">
                                For clients and website users located in the EU/EEA, nothing in these terms affects your rights under mandatory local consumer or business protection laws of your jurisdiction. However, as this website is operated on a strictly B2B basis, EU consumer protection directives do not apply.
                            </p>
                            <p className="text-[var(--color-text-secondary)] leading-relaxed">
                                Any dispute arising from or related to these Terms of Service shall first be subject to good-faith negotiation. If unresolved within 30 days of written notice, disputes shall be referred to the courts of competent jurisdiction in Indonesia, unless the parties agree in writing to an alternative dispute resolution mechanism.
                            </p>
                        </div>
                    </div>

                    {/* ── SECTION 15: Severability ── */}
                    <div>
                        <h2 className="text-2xl lg:text-3xl font-semibold text-[var(--color-text-primary)] mb-6">
                            Severability
                        </h2>
                        <p className="text-[var(--color-text-secondary)] leading-relaxed">
                            If any provision of these Terms of Service is found to be unlawful, void, or unenforceable by a court of competent jurisdiction, that provision shall be deemed severable and shall not affect the validity and enforceability of the remaining provisions.
                        </p>
                    </div>

                    {/* ── SECTION 16: Contact ── */}
                    <div>
                        <h2 className="text-2xl lg:text-3xl font-semibold text-[var(--color-text-primary)] mb-6">
                            Contact
                        </h2>
                        <div className="space-y-4">
                            <p className="text-[var(--color-text-secondary)] leading-relaxed">
                                For questions about these Terms of Service, please contact:
                            </p>
                            <div className="bg-[var(--color-bg-surface)] border border-[var(--color-border)] rounded-2xl p-6 md:p-8 space-y-4">
                                <div className="grid grid-cols-1 sm:grid-cols-[160px_1fr] gap-2">
                                    <span className="text-[var(--color-text-muted)] text-sm font-semibold uppercase tracking-wider">Email</span>
                                    <a href="mailto:legal@aeternadata.com" className="text-[var(--color-text-primary)] hover:underline transition-colors">
                                        legal@aeternadata.com
                                    </a>
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-[160px_1fr] gap-2">
                                    <span className="text-[var(--color-text-muted)] text-sm font-semibold uppercase tracking-wider">Company</span>
                                    <span className="text-[var(--color-text-primary)]">PT Aeterna Data Intentio Logic</span>
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-[160px_1fr] gap-2">
                                    <span className="text-[var(--color-text-muted)] text-sm font-semibold uppercase tracking-wider">Address</span>
                                    <span className="text-[var(--color-text-primary)] font-mono text-sm">Komp. Perumahan Staf/Pengajar POLMAN, Bandung, West Java, Indonesia - 40132</span>
                                </div>
                            </div>
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
                        Have a question about these terms?
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
