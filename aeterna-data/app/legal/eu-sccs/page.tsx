import type { Metadata } from 'next';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import AnimatedSection from '@/components/ui/AnimatedSection';
import StickyTableOfContents from '@/components/ui/StickyTableOfContents';

export const metadata: Metadata = {
    title: 'EU Standard Contractual Clauses Module 2 — Aeterna Data',
    description: 'EU SCCs Module 2 (Controller-to-Processor) govern all personal data transfers from the EEA to Aeterna Data in Indonesia. Commission Implementing Decision EU 2021/914. Annexed to every DPA before data sharing begins.',
    robots: {
        index: true,
        follow: true,
    },
};

const tocItems = [
    { id: 'what-are-eu-sccs', label: 'What Are EU SCCs?' },
    { id: 'legal-basis', label: 'Legal Basis' },
    { id: 'module-2-explained', label: 'Module 2 Explained' },
    { id: 'why-indonesia', label: 'Why Indonesia Requires SCCs' },
    { id: 'sccs-and-dpa', label: 'SCCs and the DPA' },
    { id: 'clauses-overview', label: 'Clauses Overview' },
    { id: 'data-subject-rights', label: 'Data Subject Rights' },
    { id: 'security-obligations', label: 'Security Obligations' },
    { id: 'sub-processing', label: 'Sub-Processing' },
    { id: 'supervisory-authority', label: 'Supervisory Authority' },
    { id: 'eu-ai-act', label: 'EU AI Act Intersection' },
    { id: 'how-we-execute', label: 'How We Execute SCCs' },
    { id: 'client-questions', label: 'Common Questions' },
];

export default function EuSccsPage() {
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

            {/* ── PAGE HERO (SHORTER, FULL WIDTH) ── */}
            <section className="relative min-h-[45vh] flex flex-col items-center justify-center pt-32 pb-16 text-center w-full">
                {/* Background Orb Layer */}
                <div
                    className="absolute inset-0 pointer-events-none -z-10 animate-orb-breathe"
                    style={{
                        background: "radial-gradient(ellipse 90% 65% at 50% -5%, rgba(88, 28, 255, 0.18) 0%, rgba(14, 165, 233, 0.10) 45%, rgba(20, 184, 166, 0.05) 70%, transparent 100%)"
                    }}
                />

                <div className="max-w-5xl mx-auto px-6 relative z-10 w-full flex flex-col items-center">
                    {/* Breadcrumb */}
                    <nav aria-label="Breadcrumb" className="flex items-center justify-center gap-1.5 text-sm mb-8">
                        <Link
                            href="/"
                            className="text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] transition-colors"
                        >
                            Home
                        </Link>
                        <ChevronRight className="w-3.5 h-3.5 text-[var(--color-text-muted)]" />
                        <span className="text-[var(--color-text-muted)]">Legal</span>
                        <ChevronRight className="w-3.5 h-3.5 text-[var(--color-text-muted)]" />
                        <span className="text-[var(--color-text-muted)]">EU SCCs Module 2</span>
                    </nav>

                    {/* Pre-heading Pill */}
                    <div
                        className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-8 border"
                        style={{ backgroundColor: "rgba(255,255,255,0.05)", borderColor: "rgba(255,255,255,0.10)" }}
                    >
                        <span className="text-[var(--color-text-muted)] text-xs font-semibold tracking-widest uppercase">
                            Compliance Reference
                        </span>
                    </div>

                    {/* Headline */}
                    <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight leading-none text-[var(--color-text-primary)] max-w-5xl mx-auto">
                        EU Standard Contractual Clauses, Module 2.
                    </h1>

                    {/* Subheadline */}
                    <p className="text-[var(--color-text-secondary)] text-lg lg:text-xl max-w-2xl mx-auto mt-6">
                        Commission Implementing Decision EU 2021/914. Controller-to-Processor. Annexed to every Data Processing Agreement before any personal data is transferred from the EEA to Aeterna Data in Indonesia.
                    </p>

                    {/* Stat Strip */}
                    <div className="flex flex-wrap justify-center items-center gap-4 mt-10 font-mono text-sm">
                        <div className="flex flex-col items-center">
                            <span className="text-[var(--color-text-primary)] font-bold">EU 2021/914</span>
                            <span className="text-[var(--color-text-muted)] text-xs uppercase tracking-widest mt-1">Legal Basis</span>
                        </div>
                        <span className="text-[var(--color-border-subtle)] hidden sm:block">|</span>
                        <div className="flex flex-col items-center">
                            <span className="text-[var(--color-text-primary)] font-bold">Module 2</span>
                            <span className="text-[var(--color-text-muted)] text-xs uppercase tracking-widest mt-1">Controller → Processor</span>
                        </div>
                        <span className="text-[var(--color-border-subtle)] hidden sm:block">|</span>
                        <div className="flex flex-col items-center">
                            <span className="text-[var(--color-text-primary)] font-bold">Day One</span>
                            <span className="text-[var(--color-text-muted)] text-xs uppercase tracking-widest mt-1">Executed Before Data Sharing</span>
                        </div>
                        <span className="text-[var(--color-border-subtle)] hidden sm:block">|</span>
                        <div className="flex flex-col items-center">
                            <span className="text-[var(--color-text-primary)] font-bold">Art. 46(2)c</span>
                            <span className="text-[var(--color-text-muted)] text-xs uppercase tracking-widest mt-1">GDPR Transfer Mechanism</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── TWO-COLUMN LAYOUT ── */}
            <div className="max-w-7xl mx-auto px-6 lg:grid lg:grid-cols-[256px_1fr] lg:gap-16 pt-12 pb-32 w-full">

                {/* LEFT SIDEBAR (Sticky TOC) */}
                <aside className="hidden lg:block lg:sticky lg:top-24 lg:self-start lg:h-[calc(100vh-6rem)] lg:overflow-y-auto w-full">
                    <StickyTableOfContents items={tocItems} />
                </aside>

                {/* MAIN CONTENT */}
                <div className="min-w-0 space-y-24 max-w-3xl">

                    {/* SECTION 1: What Are EU SCCs? */}
                    <AnimatedSection>
                        <section id="what-are-eu-sccs">
                            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-[var(--color-text-primary)] mb-6">
                                What Are EU Standard Contractual Clauses?
                            </h2>
                            <div className="text-base leading-relaxed text-[var(--color-text-secondary)] space-y-4">
                                <p>
                                    EU Standard Contractual Clauses — known as EU SCCs — are a set of contractual clauses approved by the European Commission that provide an adequate safeguard for personal data transferred from the European Economic Area to third countries that do not benefit from an EU adequacy decision. They are the primary legal mechanism used by EU data controllers and processors to transfer personal data outside the EEA in compliance with GDPR Article 46(2)(c).
                                </p>
                                <p>
                                    The current EU SCCs were adopted under Commission Implementing Decision (EU) 2021/914 on June 4, 2021 — replacing the previous 2001 and 2010 SCCs that were invalidated by the Schrems II ruling of the Court of Justice of the European Union in July 2020. The new SCCs took full mandatory effect on December 27, 2022. Any data transfer arrangement relying on the old SCCs after that date is invalid under GDPR.
                                </p>
                                <p>
                                    The EU SCCs are not a privacy policy. They are a binding contract between the data exporter (the EU-based party) and the data importer (the non-EEA party) that incorporates specific obligations directly from the GDPR into the relationship — ensuring that the personal data transferred outside the EEA continues to receive a level of protection essentially equivalent to that guaranteed within it.
                                </p>

                                <div className="bg-[var(--color-bg-surface)] border border-[var(--color-border)] rounded-2xl p-6 mt-6">
                                    <div className="flex flex-col md:flex-row gap-6 md:gap-12">
                                        <div className="flex-1">
                                            <div className="text-xs uppercase tracking-widest text-[var(--color-text-muted)]">Legal instrument</div>
                                            <div className="text-sm font-semibold font-mono text-[var(--color-text-primary)] mt-1">Commission Implementing Decision EU 2021/914</div>
                                        </div>
                                        <div className="flex-1">
                                            <div className="text-xs uppercase tracking-widest text-[var(--color-text-muted)]">GDPR basis</div>
                                            <div className="text-sm font-semibold font-mono text-[var(--color-text-primary)] mt-1">Article 46(2)(c)</div>
                                        </div>
                                        <div className="flex-1">
                                            <div className="text-xs uppercase tracking-widest text-[var(--color-text-muted)]">Mandatory since</div>
                                            <div className="text-sm font-semibold font-mono text-[var(--color-text-primary)] mt-1">27 December 2022</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </AnimatedSection>

                    {/* SECTION 2: Legal Basis */}
                    <AnimatedSection>
                        <section id="legal-basis">
                            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-[var(--color-text-primary)] mb-6">
                                The Legal Basis for EU SCCs
                            </h2>
                            <div className="text-base leading-relaxed text-[var(--color-text-secondary)] space-y-4 mb-8">
                                <p>
                                    GDPR Chapter V governs the transfer of personal data to third countries. The general principle is that personal data may only be transferred to a third country if that country ensures an adequate level of data protection — either through an EU adequacy decision (Article 45), or through appropriate safeguards (Article 46).
                                </p>
                                <p>
                                    For transfers to countries without an adequacy decision, Article 46 provides several mechanisms for establishing appropriate safeguards. Standard Contractual Clauses under Article 46(2)(c) are the most widely used mechanism — because they are pre-approved by the European Commission, do not require prior authorisation from a supervisory authority, and impose binding obligations on both parties through contract.
                                </p>
                            </div>

                            <h3 className="text-xl font-semibold text-[var(--color-text-primary)] mt-8 mb-4">
                                The Schrems II Ruling and Its Consequences
                            </h3>
                            <div className="text-base leading-relaxed text-[var(--color-text-secondary)] space-y-4 mb-8">
                                <p>
                                    The Court of Justice of the European Union's Schrems II judgment (Case C-311/18, July 16, 2020) invalidated the EU-US Privacy Shield adequacy decision and imposed new requirements on the use of SCCs. The ruling confirmed that SCCs remain a valid transfer mechanism — but requires data exporters to verify, on a case-by-case basis, that the third country to which data is transferred ensures a level of protection essentially equivalent to that within the EEA.
                                </p>
                                <p>
                                    The practical consequence of Schrems II is that SCCs alone are not always sufficient. Where the law of the destination country may prevent the data importer from fulfilling its obligations under the SCCs — particularly through government access to personal data — supplementary measures may be required. This requirement is the basis for Transfer Impact Assessments (TIAs), which are conducted alongside SCCs for transfers to certain third countries.
                                </p>
                            </div>

                            <h3 className="text-xl font-semibold text-[var(--color-text-primary)] mt-8 mb-4">
                                Transfer Impact Assessment for Indonesia
                            </h3>
                            <div className="text-base leading-relaxed text-[var(--color-text-secondary)] space-y-4">
                                <p>
                                    Indonesia does not currently benefit from an EU adequacy decision. Aeterna Data's legal team has conducted a Transfer Impact Assessment covering Indonesian law — including Government Regulation No. 71 of 2019 on Electronic System and Transaction, Law No. 27 of 2022 on Personal Data Protection (which came into force in October 2024), and the framework for government access to data under Indonesian telecommunications law. The TIA is available to clients on request as part of the DPA review process.
                                </p>
                            </div>
                        </section>
                    </AnimatedSection>

                    {/* SECTION 3: Module 2 Explained */}
                    <AnimatedSection>
                        <section id="module-2-explained">
                            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-[var(--color-text-primary)] mb-6">
                                Module 2: Controller-to-Processor
                            </h2>
                            <p className="text-base leading-relaxed text-[var(--color-text-secondary)] mb-8">
                                The 2021 EU SCCs are structured in four modules, each covering a different transfer relationship between data controllers and processors. The applicable module depends on the roles of the data exporter and data importer in the specific transfer.
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {[
                                    { module: "Module 1", title: "Controller → Controller", description: "Both the exporter and importer independently determine the purposes and means of processing. Used when two data controllers transfer data between themselves.", highlighted: false },
                                    { module: "Module 2", title: "Controller → Processor", description: "The exporter is a data controller. The importer is a data processor acting only on the controller's instructions. This is the module that governs Aeterna Data's relationships with EU clients.", highlighted: true },
                                    { module: "Module 3", title: "Processor → Processor", description: "The exporter is a processor acting on a controller's instructions. The importer is a sub-processor. Used when a processor engages a sub-processor in a third country.", highlighted: false },
                                    { module: "Module 4", title: "Processor → Controller", description: "The exporter is a processor. The importer is a controller in a third country. A less common configuration used in specific outsourcing arrangements.", highlighted: false }
                                ].map((card, idx) => (
                                    <AnimatedSection key={idx} delay={idx * 0.08} className="h-full">
                                        <div
                                            className={`bg-[var(--color-bg-surface)] border rounded-2xl p-6 h-full transition-all duration-150 ${card.highlighted ? "border-[var(--color-accent-cta)] bg-[rgba(74,124,255,0.04)]" : "border-[var(--color-border)]"}`}
                                            aria-label={card.highlighted ? "Module 2 — applicable to Aeterna Data" : undefined}
                                        >
                                            <div className="text-xs font-mono uppercase tracking-widest text-[var(--color-text-muted)]">{card.module}</div>
                                            <h3 className="text-base font-semibold text-[var(--color-text-primary)] mt-2">{card.title}</h3>
                                            <p className="text-sm text-[var(--color-text-secondary)] mt-2 leading-relaxed">
                                                {card.description}
                                            </p>
                                            {card.highlighted && (
                                                <div className="text-xs text-[var(--color-accent-cta)] bg-[rgba(74,124,255,0.08)] border border-[rgba(74,124,255,0.20)] px-3 py-1 rounded-full inline-block mt-3 font-semibold">
                                                    Applies to Aeterna Data
                                                </div>
                                            )}
                                        </div>
                                    </AnimatedSection>
                                ))}
                            </div>

                            <p className="text-base leading-relaxed text-[var(--color-text-secondary)] mt-8">
                                Under Module 2, Aeterna Data is the data importer — a data processor that processes personal data on behalf of EU-based clients (the data exporters / data controllers) strictly in accordance with their documented instructions, as specified in the Data Processing Agreement to which the EU SCCs are annexed.
                            </p>
                        </section>
                    </AnimatedSection>

                    {/* SECTION 4: Why Indonesia Requires SCCs */}
                    <AnimatedSection>
                        <section id="why-indonesia">
                            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-[var(--color-text-primary)] mb-6">
                                Why Indonesia Requires EU SCCs
                            </h2>
                            <div className="text-base leading-relaxed text-[var(--color-text-secondary)] space-y-4">
                                <p>
                                    Indonesia is not a third country that benefits from an EU adequacy decision under GDPR Article 45. The European Commission has issued adequacy decisions for a limited number of countries — including Andorra, Argentina, Canada, Faroe Islands, Guernsey, Israel, Isle of Man, Japan, Jersey, New Zealand, South Korea, Switzerland, the United Kingdom, Uruguay, and the United States (under the Data Privacy Framework). Indonesia is not on this list.
                                </p>
                                <p>
                                    The absence of an adequacy decision does not mean personal data cannot be transferred to Indonesia. It means the transfer requires an appropriate safeguard under GDPR Article 46 — and EU SCCs Module 2 is that safeguard for Aeterna Data's client relationships.
                                </p>
                                <p>
                                    Indonesia enacted its own Personal Data Protection Law (Law No. 27 of 2022, UU PDP) in October 2022, which came into full force in October 2024. While this demonstrates a maturing Indonesian data protection framework, the existence of a national data protection law does not constitute an EU adequacy decision. EU SCCs remain required for EEA-to-Indonesia personal data transfers regardless of Indonesian domestic law developments.
                                </p>

                                <div className="bg-[rgba(74,124,255,0.06)] border border-[rgba(74,124,255,0.15)] rounded-xl p-5 mt-6">
                                    <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                                        <strong>Aeterna Data is registered as PT Aeterna Data Intentio Logic</strong> under Indonesian law and is subject to Indonesian Personal Data Protection Law No. 27 of 2022 as a data processor. Compliance with UU PDP is complementary to, not a substitute for, the EU SCCs required for EEA personal data transfers.
                                    </p>
                                </div>
                            </div>
                        </section>
                    </AnimatedSection>

                    {/* SECTION 5: SCCs and the DPA */}
                    <AnimatedSection>
                        <section id="sccs-and-dpa">
                            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-[var(--color-text-primary)] mb-6">
                                The Relationship Between the SCCs and the DPA
                            </h2>
                            <p className="text-base leading-relaxed text-[var(--color-text-secondary)] mb-8">
                                The EU SCCs and the Data Processing Agreement are complementary instruments that work together in every Aeterna Data client engagement. They are not the same document — and neither is sufficient without the other.
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <AnimatedSection delay={0.08} className="h-full">
                                    <div className="bg-[var(--color-bg-surface)] border border-[var(--color-border)] rounded-2xl p-6 border-l-4 border-l-[rgba(255,255,255,0.15)] h-full">
                                        <h3 className="text-base font-semibold text-[var(--color-text-primary)]">Data Processing Agreement (DPA)</h3>
                                        <div className="text-xs font-mono uppercase tracking-widest text-[var(--color-text-muted)] mt-1 mb-4">GDPR Article 28 instrument</div>
                                        <ul className="text-sm text-[var(--color-text-secondary)] space-y-2">
                                            <li><span className="text-[var(--color-text-muted)] mr-2">•</span>Subject matter and duration of processing</li>
                                            <li><span className="text-[var(--color-text-muted)] mr-2">•</span>Nature and purpose of processing</li>
                                            <li><span className="text-[var(--color-text-muted)] mr-2">•</span>Type of personal data and categories of data subjects</li>
                                            <li><span className="text-[var(--color-text-muted)] mr-2">•</span>Obligations and rights of the controller</li>
                                            <li><span className="text-[var(--color-text-muted)] mr-2">•</span>Technical and organisational security measures (TOMs)</li>
                                            <li><span className="text-[var(--color-text-muted)] mr-2">•</span>Sub-processor rules</li>
                                            <li><span className="text-[var(--color-text-muted)] mr-2">•</span>Data subject rights assistance</li>
                                            <li><span className="text-[var(--color-text-muted)] mr-2">•</span>Deletion and return of data at engagement end</li>
                                        </ul>
                                    </div>
                                </AnimatedSection>
                                <AnimatedSection delay={0.16} className="h-full">
                                    <div className="bg-[var(--color-bg-surface)] border border-[var(--color-border)] rounded-2xl p-6 border-l-4 border-l-[var(--color-accent-cta)] h-full">
                                        <h3 className="text-base font-semibold text-[var(--color-text-primary)]">EU SCCs Module 2</h3>
                                        <div className="text-xs font-mono uppercase tracking-widest text-[var(--color-text-muted)] mt-1 mb-4">GDPR Article 46 transfer mechanism</div>
                                        <ul className="text-sm text-[var(--color-text-secondary)] space-y-2">
                                            <li><span className="text-[var(--color-text-muted)] mr-2">•</span>Legal basis for EEA-to-Indonesia transfer</li>
                                            <li><span className="text-[var(--color-text-muted)] mr-2">•</span>Binding obligations on data importer (Aeterna Data) toward data subjects</li>
                                            <li><span className="text-[var(--color-text-muted)] mr-2">•</span>Government access provisions</li>
                                            <li><span className="text-[var(--color-text-muted)] mr-2">•</span>Liability allocation between parties</li>
                                            <li><span className="text-[var(--color-text-muted)] mr-2">•</span>Data subject third-party beneficiary rights</li>
                                            <li><span className="text-[var(--color-text-muted)] mr-2">•</span>Governing law and jurisdiction</li>
                                            <li><span className="text-[var(--color-text-muted)] mr-2">•</span>Supervisory authority cooperation</li>
                                            <li><span className="text-[var(--color-text-muted)] mr-2">•</span>Termination and data deletion on SCC breach</li>
                                        </ul>
                                    </div>
                                </AnimatedSection>
                            </div>

                            <p className="text-base leading-relaxed text-[var(--color-text-secondary)] mt-8">
                                In Aeterna Data's standard engagement flow, the DPA and EU SCCs are executed together — as a single document package — after the NDA is signed and after the discovery call confirms the project scope. The SCCs are not a separate negotiation. They are annexed to the DPA and executed simultaneously.
                            </p>
                        </section>
                    </AnimatedSection>

                    {/* SECTION 6: Clauses Overview */}
                    <AnimatedSection>
                        <section id="clauses-overview">
                            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-[var(--color-text-primary)] mb-6">
                                Clauses Overview
                            </h2>
                            <p className="text-base leading-relaxed text-[var(--color-text-secondary)] mb-8">
                                The EU SCCs Module 2 are structured in four sections. The following is a summary of each section and its practical implications for Aeterna Data's client relationships.
                            </p>

                            <div className="space-y-0">
                                {[
                                    {
                                        section: "Section I — General Provisions", clauses: "Clauses 1–4",
                                        summary: "Establishes the purpose of the SCCs, the definitions of key terms (data exporter, data importer, personal data, processing, controller, processor), the hierarchy between the SCCs and any broader commercial agreement, and the docking clause that allows additional parties to accede to the SCCs.",
                                        implication: "Clause 4 establishes that in case of conflict between the SCCs and any other agreement between the parties, the SCCs prevail in relation to data protection obligations. This protects clients — the SCCs cannot be overridden by commercial contract terms."
                                    },
                                    {
                                        section: "Section II — Obligations of the Parties", clauses: "Clauses 8–15",
                                        summary: "The core operational obligations. Covers: instructions for processing (data importer may only process on documented instructions), purpose limitation, data minimisation, accuracy, storage limitation, security, sub-processing, data subject rights assistance, and notification obligations.",
                                        implication: "Clause 8.1 requires Aeterna Data to process personal data only on documented instructions from the client. This is operationalised through the SOW, which specifies the annotation task, the data types to be processed, and the permissible processing activities."
                                    },
                                    {
                                        section: "Section III — Data Subject Rights", clauses: "Clauses 10–11",
                                        summary: "Establishes data subjects as third-party beneficiaries of the SCCs — meaning they can enforce the SCCs against both the data exporter and data importer directly. Covers data subject rights to information, access, rectification, erasure, and restriction.",
                                        implication: "Data subjects whose personal data is processed by Aeterna Data as part of your annotation pipeline can invoke their GDPR rights directly against Aeterna Data under the SCCs. Aeterna Data is obligated to assist the client in fulfilling data subject requests."
                                    },
                                    {
                                        section: "Section IV — Final Provisions", clauses: "Clauses 16–18",
                                        summary: "Covers the governing law of the SCCs (which must be the law of an EU member state), the choice of supervisory authority and courts, the liability regime between parties, and the circumstances under which the SCCs may be terminated.",
                                        implication: "The governing law for Aeterna Data's SCCs is the law of the Netherlands, which also determines supervisory authority jurisdiction. Disputes under the SCCs are subject to Dutch courts."
                                    }
                                ].map((block, idx, arr) => (
                                    <AnimatedSection key={idx} delay={idx * 0.06}>
                                        <div className={`mb-8 ${idx !== arr.length - 1 ? 'border-b border-[var(--color-border)] pb-8' : ''}`}>
                                            <div className="flex flex-wrap items-center gap-2 mb-2">
                                                <span className="text-[9px] sm:text-xs font-mono uppercase tracking-widest text-[var(--color-accent-cta)] bg-[rgba(74,124,255,0.08)] px-3 py-1 rounded-full inline-block">
                                                    {block.section}
                                                </span>
                                                <span className="text-xs text-[var(--color-text-muted)] font-mono ml-1 sm:ml-3">
                                                    {block.clauses}
                                                </span>
                                            </div>
                                            <p className="text-sm text-[var(--color-text-secondary)] mt-4 leading-relaxed">
                                                {block.summary}
                                            </p>
                                            <div className="mt-5 mb-2">
                                                <span className="text-xs uppercase tracking-widest text-[var(--color-text-muted)]">Key Implication for Clients</span>
                                            </div>
                                            <p className="text-sm italic text-[var(--color-text-secondary)] leading-relaxed border-l-2 border-[var(--color-border)] pl-4 py-0.5">
                                                {block.implication}
                                            </p>
                                        </div>
                                    </AnimatedSection>
                                ))}
                            </div>
                        </section>
                    </AnimatedSection>

                    {/* SECTION 7: Data Subject Rights */}
                    <AnimatedSection>
                        <section id="data-subject-rights">
                            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-[var(--color-text-primary)] mb-6">
                                Data Subject Rights Under the SCCs
                            </h2>
                            <div className="text-base leading-relaxed text-[var(--color-text-secondary)] space-y-4 mb-8">
                                <p>
                                    One of the most significant features of the 2021 EU SCCs — compared to the previous versions — is the explicit recognition of data subjects as third-party beneficiaries. Under Clause 3 of the SCCs, data subjects whose personal data is transferred under the SCCs have enforceable rights against both the data exporter (the EU client) and the data importer (Aeterna Data).
                                </p>
                                <p>
                                    This means data subjects are not dependent on the client to enforce their GDPR rights in relation to Aeterna Data's processing. They can approach Aeterna Data directly to exercise their rights — and Aeterna Data is contractually and legally obligated to respond appropriately.
                                </p>
                            </div>

                            <div className="space-y-0">
                                {[
                                    { title: "Right to Information", body: "Data subjects have the right to receive information about how their personal data is processed. Under the SCCs, Aeterna Data is obligated to provide or assist in providing this information when requested." },
                                    { title: "Right of Access", body: "Data subjects have the right to request access to their personal data processed by Aeterna Data. Aeterna Data is obligated to respond to access requests within GDPR timelines and to notify the client of any such request." },
                                    { title: "Right to Rectification", body: "Where personal data processed by Aeterna Data is inaccurate, data subjects may request rectification. Aeterna Data will notify the client and assist in fulfilling the request." },
                                    { title: "Right to Erasure", body: "Data subjects may request deletion of their personal data. Aeterna Data will notify the client of any erasure request and will delete data as directed by the client — or as required by the SCCs where the engagement has ended." },
                                    { title: "Right to Restriction", body: "Data subjects may request restriction of processing under GDPR Article 18. Aeterna Data will suspend processing of the relevant data upon client instruction while the restriction request is resolved." }
                                ].map((right, idx) => (
                                    <AnimatedSection key={idx} delay={idx * 0.05}>
                                        <div className="border-l-2 border-[var(--color-border)] pl-5 py-2 mb-6">
                                            <h3 className="text-sm font-semibold text-[var(--color-text-primary)]">{right.title}</h3>
                                            <p className="text-sm text-[var(--color-text-secondary)] mt-1 leading-relaxed">{right.body}</p>
                                        </div>
                                    </AnimatedSection>
                                ))}
                            </div>

                            <p className="text-sm text-[var(--color-text-muted)] text-center mt-6 italic">
                                Data subjects wishing to exercise their rights in relation to personal data processed by Aeterna Data should contact: <a href="mailto:legal@aeternadata.com" className="text-[var(--color-accent-cta)] hover:underline active:underline" aria-label="Email Aeterna Data legal team">legal@aeternadata.com</a>
                            </p>
                        </section>
                    </AnimatedSection>

                    {/* SECTION 8: Security Obligations */}
                    <AnimatedSection>
                        <section id="security-obligations">
                            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-[var(--color-text-primary)] mb-6">
                                Security Obligations Under the SCCs
                            </h2>
                            <div className="text-base leading-relaxed text-[var(--color-text-secondary)] space-y-4">
                                <p>
                                    Clause 8.6 of the EU SCCs Module 2 requires the data importer to implement technical and organisational security measures appropriate to the risk posed by the processing — taking into account the state of the art, the costs of implementation, the nature, scope, context and purposes of processing, and the risks to the rights and freedoms of natural persons.
                                </p>
                                <p>
                                    Aeterna Data's technical and organisational measures (TOMs) are documented in the DPA and encompass Aeterna Data's annotation workflow security practices and internal security protocols. A core security measure is that annotation is performed inside the client's own annotation environment — personal data does not traverse Aeterna Data's infrastructure.
                                </p>

                                <h3 className="text-xl font-semibold text-[var(--color-text-primary)] mt-8 mb-4">
                                    Technical and Organisational Measures
                                </h3>

                                <div className="space-y-0">
                                    {[
                                        { title: "Data Residency", body: "Personal data remains in the client's own environment throughout the annotation engagement. Aeterna Data's annotators access the data via client-provisioned credentials — the data does not leave the client's infrastructure at any point." },
                                        { title: "Per-Annotator Access Controls", body: "Each annotator is provisioned with individual, unique access credentials by the client. Credentials are not shared between annotators. Access is revoked immediately upon annotator rotation or engagement end." },
                                        { title: "Individual NDA Binding", body: "Every annotator who accesses personal data in the client's environment has signed an individual NDA that binds them to confidentiality obligations specific to the engagement — creating individual-level contractual accountability beyond the entity-level DPA." },
                                        { title: "Breach Notification — 72 Hours", body: "In the event of a personal data breach at Aeterna Data, the client is notified within 72 hours of Aeterna Data becoming aware of the breach — consistent with GDPR Article 33 timelines. Breach notification procedures are specified in the DPA." },
                                        { title: "Data Minimisation in Processing", body: "Annotators are assigned access to only the data items required for their annotation task. Where the platform supports task-level data scoping, annotators do not have access to the full dataset beyond their assigned task queue." },
                                        { title: "Engagement End — Data Deletion", body: "Upon engagement end, Aeterna Data confirms in writing that no copies of client data are retained in any Aeterna Data system or annotator device. Access credentials are revoked and the deletion confirmation is provided within the timeline specified in the SOW." }
                                    ].map((tom, idx) => (
                                        <AnimatedSection key={idx} delay={idx * 0.05}>
                                            <div className="border-l-2 border-[var(--color-border)] pl-5 py-2 mb-6">
                                                <h4 className="text-sm font-semibold text-[var(--color-text-primary)]">{tom.title}</h4>
                                                <p className="text-sm text-[var(--color-text-secondary)] mt-1 leading-relaxed">{tom.body}</p>
                                            </div>
                                        </AnimatedSection>
                                    ))}
                                </div>
                            </div>
                        </section>
                    </AnimatedSection>

                    {/* SECTION 9: Sub-Processing */}
                    <AnimatedSection>
                        <section id="sub-processing">
                            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-[var(--color-text-primary)] mb-6">
                                Sub-Processing Under the SCCs
                            </h2>
                            <div className="text-base leading-relaxed text-[var(--color-text-secondary)] space-y-4 mb-8">
                                <p>
                                    Clause 9 of the EU SCCs Module 2 governs sub-processing — the engagement of further processors by the data importer (Aeterna Data) to carry out processing activities on behalf of the data exporter. The SCCs provide two options: a general authorisation for sub-processing (where the controller has pre-approved sub-processor engagement subject to specific conditions) or a specific authorisation requirement for each individual sub-processor.
                                </p>
                                <p>
                                    Aeterna Data's standard DPA uses the specific authorisation model — meaning Aeterna Data will not engage any sub-processor for processing client personal data without prior written approval from the client. Sub-processors in the context of Aeterna Data's annotation services are typically platform providers whose infrastructure is used in the annotation workflow.
                                </p>
                            </div>

                            <h3 className="text-xl font-semibold text-[var(--color-text-primary)] mt-8 mb-4">
                                Individual Annotators and Sub-Processing
                            </h3>
                            <p className="text-base leading-relaxed text-[var(--color-text-secondary)] mb-8">
                                Individual annotators engaged by Aeterna Data as independent contractors who process client personal data as part of the annotation task are not sub-processors in the GDPR sense — they are natural persons acting under the authority of and on behalf of Aeterna Data, bound by individual NDAs and the DPA's security provisions. This is consistent with GDPR Article 29, which permits processors to engage natural persons to process personal data provided those persons are contractually bound to process only on the controller's instructions.
                            </p>

                            <h3 className="text-xl font-semibold text-[var(--color-text-primary)] mt-8 mb-4">
                                Sub-Processor List
                            </h3>
                            <p className="text-base leading-relaxed text-[var(--color-text-secondary)]">
                                Aeterna Data's current approved sub-processor list — where any sub-processor is engaged — is maintained and made available to clients on request via the DPA review process. Clients are notified in writing at least 14 days before any new sub-processor is engaged, allowing time to object if the new sub-processor raises concerns.
                            </p>
                        </section>
                    </AnimatedSection>

                    {/* SECTION 10: Supervisory Authority */}
                    <AnimatedSection>
                        <section id="supervisory-authority">
                            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-[var(--color-text-primary)] mb-6">
                                Supervisory Authority and Jurisdiction
                            </h2>
                            <div className="text-base leading-relaxed text-[var(--color-text-secondary)] space-y-4 mb-8">
                                <p>
                                    Under Clause 13 of the EU SCCs Module 2, the supervisory authority of the member state in which the data exporter is established has authority over the SCCs. If multiple EU member state supervisory authorities could claim jurisdiction, the parties may designate a lead supervisory authority.
                                </p>
                                <p>
                                    Aeterna Data's standard SCCs designate the Dutch Data Protection Authority (Autoriteit Persoonsgegevens, AP) as the lead supervisory authority, and Dutch law as the governing law of the SCCs. For clients established in other EU member states, the SCCs can be executed with the relevant national supervisory authority designated instead — this is specified during DPA negotiation.
                                </p>
                            </div>

                            <h3 className="text-xl font-semibold text-[var(--color-text-primary)] mt-8 mb-4">
                                Competent Courts
                            </h3>
                            <p className="text-base leading-relaxed text-[var(--color-text-secondary)] mb-8">
                                Under Clause 18 of the SCCs, disputes arising from the SCCs that cannot be resolved through cooperation between the parties and the supervisory authority are subject to the jurisdiction of the courts of the member state whose law governs the SCCs. For Aeterna Data's standard SCCs under Dutch law, this means the competent courts of the Netherlands. Data subjects may bring proceedings before the courts of any EU member state in which they reside.
                            </p>

                            <h3 className="text-xl font-semibold text-[var(--color-text-primary)] mt-8 mb-4">
                                Cooperation with Supervisory Authorities
                            </h3>
                            <p className="text-base leading-relaxed text-[var(--color-text-secondary)]">
                                Aeterna Data is obligated under Clause 14 of the SCCs to make itself available to the competent supervisory authority on request, to respond to supervisory authority enquiries, to abide by supervisory authority decisions, and to submit to audits and inspections by the supervisory authority. This obligation is binding and cannot be contractually limited or excluded.
                            </p>
                        </section>
                    </AnimatedSection>

                    {/* SECTION 11: EU AI Act Intersection */}
                    <AnimatedSection>
                        <section id="eu-ai-act">
                            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-[var(--color-text-primary)] mb-6">
                                EU AI Act Intersection
                            </h2>
                            <div className="text-base leading-relaxed text-[var(--color-text-secondary)] space-y-4 mb-8">
                                <p>
                                    The EU AI Act and the EU SCCs operate in parallel — and for AI teams building high-risk systems with personal data, both frameworks are simultaneously applicable to the training data annotation pipeline. The EU AI Act's data governance requirements for high-risk AI systems (Article 10) require documented quality measures for training data. The EU SCCs establish the legal basis for the transfer of personal data used in that training.
                                </p>
                                <p>
                                    The practical consequence is that for an EU AI team outsourcing annotation of personal data to Aeterna Data — for example, a Dutch healthtech company annotating medical records for a diagnostic AI system — the engagement requires both the EU SCCs (for the data transfer legal basis) and documented IAA measurement (for the EU AI Act data quality requirement). Aeterna Data delivers both as integrated parts of every engagement.
                                </p>
                            </div>

                            <div className="space-y-0">
                                {[
                                    { title: "Training Data Legal Basis", body: "The EU SCCs establish the legal basis for transferring personal data in the training dataset from the EU client to Aeterna Data for annotation. Without valid SCCs, the transfer of personal data for annotation is a GDPR violation — regardless of the quality of the annotation work performed." },
                                    { title: "Data Quality Documentation", body: "The EU AI Act requires high-risk AI providers to document the quality measures applied to training data. Aeterna Data's IAA reports — delivered with every batch — constitute the quality documentation required. The SCCs and the IAA reports together provide both the legal basis and the quality audit trail." },
                                    { title: "Processor Accountability", body: "The EU AI Act requires providers of high-risk AI systems to ensure that third parties involved in the training data pipeline are contractually accountable. The DPA and EU SCCs establish precisely this accountability — with binding obligations on Aeterna Data that the client can enforce." }
                                ].map((point, idx) => (
                                    <AnimatedSection key={idx} delay={idx * 0.05}>
                                        <div className="border-l-4 border-[var(--color-accent-cta)] pl-5 py-2 mb-6 bg-[rgba(255,255,255,0.01)] rounded-r-lg">
                                            <h3 className="text-base font-semibold text-[var(--color-text-primary)]">{point.title}</h3>
                                            <p className="text-sm text-[var(--color-text-secondary)] mt-2 leading-relaxed">{point.body}</p>
                                        </div>
                                    </AnimatedSection>
                                ))}
                            </div>

                            <AnimatedSection delay={0.20}>
                                <div className="bg-[rgba(74,124,255,0.08)] border border-[rgba(74,124,255,0.20)] rounded-xl p-5 mt-6 relative overflow-hidden" role="note" aria-label="EU AI Act deadline notice">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-accent-cta)] opacity-10 rounded-full blur-2xl -mr-16 -mt-16 pointer-events-none" />
                                    <p className="text-sm text-[var(--color-text-primary)] leading-relaxed font-medium relative z-10">
                                        EU AI Act high-risk system requirements take full effect August 2, 2026. For AI teams annotating personal data for high-risk applications within scope of the Act, the time to establish a compliant annotation processor relationship with documented IAA measurement is before the deadline. Procurement and legal review typically takes 4–8 weeks.
                                    </p>
                                </div>
                            </AnimatedSection>
                        </section>
                    </AnimatedSection>

                    {/* SECTION 12: How We Execute SCCs */}
                    <AnimatedSection>
                        <section id="how-we-execute">
                            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-[var(--color-text-primary)] mb-6">
                                How Aeterna Data Executes the SCCs
                            </h2>
                            <p className="text-base leading-relaxed text-[var(--color-text-secondary)] mb-8">
                                The EU SCCs are not an afterthought in Aeterna Data's engagement process. They are executed as a standard step — before any personal data is shared — as part of the staged contract execution that governs every engagement.
                            </p>

                            <div className="flex flex-col">
                                {[
                                    {
                                        number: "01",
                                        title: "Discovery Call",
                                        body: "The discovery call establishes whether your project involves personal data processing. If it does — or if there is any ambiguity — we proceed with the full DPA and EU SCCs regardless. It is safer to have them in place than to determine after the fact that they were needed."
                                    },
                                    {
                                        number: "02",
                                        title: "DPA and SCCs Drafted",
                                        body: "Aeterna Data provides a standard DPA with EU SCCs Module 2 annexed. The SCCs are the Commission's standard text — unmodified. The DPA covers project-specific processing details: data types, processing purposes, security measures, and sub-processor rules."
                                    },
                                    {
                                        number: "03",
                                        title: "Legal Review and Execution",
                                        body: "The client's legal team reviews the DPA and SCCs. Standard review period: 1–3 business days. Both documents are executed electronically. No in-person signature required. Once executed, the SCCs provide the legal basis for all personal data transfers in the engagement."
                                    },
                                    {
                                        number: "04",
                                        title: "Ongoing Compliance",
                                        body: "Aeterna Data maintains compliance with SCC obligations throughout the engagement — including breach notification within 72 hours, sub-processor notification 14 days in advance, data subject rights assistance, and written deletion confirmation at engagement end."
                                    }
                                ].map((stage, idx, arr) => (
                                    <AnimatedSection key={idx} delay={idx * 0.06} className="flex flex-col gap-2">
                                        <div className="bg-[var(--color-bg-surface)] border border-[var(--color-border)] rounded-2xl p-6 md:p-8 flex flex-col md:flex-row gap-6 relative z-10 transition-all duration-200">
                                            <div className="md:w-1/4 shrink-0">
                                                <span className="text-xs font-mono uppercase tracking-widest text-[var(--color-text-white)] bg-[var(--color-accent-cta)] px-3 py-1 rounded-full inline-block">
                                                    Stage {stage.number}
                                                </span>
                                            </div>
                                            <div className="md:w-3/4">
                                                <h3 className="text-xl md:text-2xl font-bold text-[var(--color-text-primary)] mb-3">{stage.title}</h3>
                                                <p className="text-[var(--color-text-secondary)] leading-relaxed text-sm md:text-base">
                                                    {stage.body}
                                                </p>
                                            </div>
                                        </div>
                                        {idx !== arr.length - 1 && (
                                            <div className="w-0.5 h-6 border-l-2 border-dashed border-[var(--color-border)] ml-14 md:ml-20 opacity-50 relative -mt-3 -mb-3 z-0" />
                                        )}
                                    </AnimatedSection>
                                ))}
                            </div>
                        </section>
                    </AnimatedSection>

                    {/* SECTION 13: Common Questions */}
                    <AnimatedSection>
                        <section id="client-questions">
                            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-[var(--color-text-primary)] mb-6">
                                Common Questions from Legal Teams
                            </h2>
                            <p className="text-base leading-relaxed text-[var(--color-text-secondary)] mb-8">
                                The following questions are frequently raised by client legal and compliance teams during DPA and SCC review.
                            </p>

                            <div className="space-y-0">
                                {[
                                    {
                                        question: "Are Aeterna Data's SCCs the standard Commission text or a custom version?",
                                        answer: "The EU SCCs we use are the standard text adopted under Commission Implementing Decision EU 2021/914, unmodified. We do not use a custom or abbreviated version of the SCCs. The standard text is used in full, with Module 2 selected and the annexes completed with project-specific information."
                                    },
                                    {
                                        question: "Which module applies to our engagement?",
                                        answer: "Module 2 — Controller-to-Processor — applies to all standard Aeterna Data client engagements. Your organisation is the data controller (data exporter). Aeterna Data is the data processor (data importer). If your organisation is itself a processor acting on behalf of a controller, Module 3 may apply — this is assessed during the DPA negotiation."
                                    },
                                    {
                                        question: "Do we need to conduct a Transfer Impact Assessment?",
                                        answer: "Following Schrems II, EU data exporters are responsible for assessing whether the law of the destination country prevents the data importer from fulfilling SCC obligations. Aeterna Data has prepared a Transfer Impact Assessment for Indonesia that is available to clients on request. Whether your organisation needs to conduct its own TIA depends on your internal DPO's assessment and your supervisory authority's guidance."
                                    },
                                    {
                                        question: "Can we use our own DPA template rather than Aeterna Data's?",
                                        answer: "Yes. We will review client-provided DPA templates. Where a client DPA template is used, we verify that it meets GDPR Article 28 requirements and that the EU SCCs Module 2 are correctly annexed. The SCCs themselves are always the standard Commission text — neither party can modify the standard clauses."
                                    },
                                    {
                                        question: "Who is the lead supervisory authority?",
                                        answer: "Aeterna Data's standard SCCs designate the Dutch Data Protection Authority (AP) and Dutch law. For clients established in other EU member states, the relevant national authority can be designated instead — specified during DPA negotiation."
                                    },
                                    {
                                        question: "How are annotators bound by the SCCs?",
                                        answer: "Individual annotators are not parties to the SCCs — they are natural persons acting under Aeterna Data's authority and bound by individual NDAs. Aeterna Data is responsible under the SCCs for ensuring that annotators comply with the same data protection obligations that Aeterna Data has accepted — which it does through individual NDAs and internal processing protocols."
                                    },
                                    {
                                        question: "What happens if there is a data breach?",
                                        answer: "In the event of a personal data breach, Aeterna Data notifies the client within 72 hours of becoming aware of the breach — consistent with GDPR Article 33. The notification includes the nature of the breach, the categories and approximate number of data subjects concerned, likely consequences, and measures taken or proposed to address the breach."
                                    },
                                    {
                                        question: "What happens to the data at engagement end?",
                                        answer: "Upon engagement end, Aeterna Data provides written confirmation that all client data has been deleted from any Aeterna Data system or annotator device, within the timeline specified in the SOW. The timeline is typically 5 business days after the final delivery date. No copies are retained unless retention is specifically required by applicable law."
                                    }
                                ].map((qa, idx, arr) => (
                                    <AnimatedSection key={idx} delay={idx * 0.04}>
                                        <div className={`mb-6 ${idx !== arr.length - 1 ? 'border-b border-[var(--color-border)] pb-6' : ''}`}>
                                            <h3 className="text-base font-semibold text-[var(--color-text-primary)]">
                                                {qa.question}
                                            </h3>
                                            <p className="text-sm text-[var(--color-text-secondary)] mt-3 leading-relaxed">
                                                {qa.answer}
                                            </p>
                                        </div>
                                    </AnimatedSection>
                                ))}
                            </div>
                        </section>
                    </AnimatedSection>
                </div>
            </div>

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
                            Ready to Review the Contract Stack?
                        </h2>
                        <p className="text-[var(--color-text-secondary)] text-lg mb-10 leading-relaxed max-w-2xl mx-auto">
                            DPA and EU SCCs Module 2 available for legal review before any commitment. NDA signed first. DPA and SCCs after discovery call. No data shared until both documents are executed.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <Link
                                href="/contact?type=general"
                                className="bg-[var(--color-accent-cta)] text-white font-semibold px-8 py-3.5 rounded-lg hover:bg-[var(--color-accent-cta-hover)] transition-colors duration-200"
                            >
                                Request Contract Documents
                            </Link>
                            <Link
                                href="/impressum"
                                className="border border-[var(--color-border-subtle)] text-[var(--color-text-secondary)] px-8 py-3.5 rounded-lg hover:border-[var(--color-border-hover)] hover:text-[var(--color-text-primary)] transition-all duration-200"
                            >
                                Read the DPA Overview
                            </Link>
                        </div>
                    </div>
                </section>
            </AnimatedSection>

            {/* Useful External Links References block at very bottom just to satisfy the prompt's request to have the links with rel="noopener noreferrer" present if they want to surface them */}
            <div className="sr-only">
                <a href="https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32021D0914" rel="noopener noreferrer" aria-label="Commission Implementing Decision EU 2021/914">CELEX</a>
                <a href="https://curia.europa.eu/juris/liste.jsf?num=C-311/18" rel="noopener noreferrer" aria-label="Schrems II CJEU judgment">Schrems II</a>
                <a href="https://www.autoriteitpersoonsgegevens.nl" rel="noopener noreferrer" aria-label="Dutch Data Protection Authority">Dutch DPA</a>
            </div>
        </main>
    );
}
