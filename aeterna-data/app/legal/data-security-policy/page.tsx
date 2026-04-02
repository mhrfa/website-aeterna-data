import type { Metadata } from 'next';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import AnimatedSection from '@/components/ui/AnimatedSection';
import StickyTableOfContents from '@/components/ui/StickyTableOfContents';

export const metadata: Metadata = {
    title: 'Data Security Policy — Aeterna Data',
    description: 'Aeterna Data\'s data security policy documents the technical and organisational measures applied to protect client data throughout every annotation engagement. GDPR Article 32 compliant. Per-annotator access controls. 72-hour breach notification.',
    robots: {
        index: true,
        follow: true,
    },
};

const tocItems = [
    { id: 'policy-scope', label: 'Policy Scope' },
    { id: 'gdpr-article-32', label: 'GDPR Article 32' },
    { id: 'byot-security', label: 'Data Residency Model' },
    { id: 'access-controls', label: 'Access Controls' },
    { id: 'annotator-obligations', label: 'Annotator Obligations' },
    { id: 'data-in-transit', label: 'Data in Transit' },
    { id: 'data-at-rest', label: 'Data at Rest' },
    { id: 'breach-notification', label: 'Breach Notification' },
    { id: 'data-deletion', label: 'Data Deletion' },
    { id: 'sub-processor-security', label: 'Sub-Processor Security' },
    { id: 'physical-security', label: 'Physical Security' },
    { id: 'security-reviews', label: 'Security Reviews' },
    { id: 'eu-ai-act-security', label: 'EU AI Act' },
    { id: 'client-responsibilities', label: 'Client Responsibilities' },
    { id: 'security-questions', label: 'Common Questions' },
];

export default function DataSecurityPolicyPage() {
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
                        <span className="text-[var(--color-text-muted)]">Data Security Policy</span>
                    </nav>

                    {/* Pre-heading Pill */}
                    <div
                        className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-8 border"
                        style={{ backgroundColor: "rgba(255,255,255,0.05)", borderColor: "rgba(255,255,255,0.10)" }}
                    >
                        <span className="text-[var(--color-text-muted)] text-xs font-semibold tracking-widest uppercase">
                            Security Reference
                        </span>
                    </div>

                    {/* Headline */}
                    <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight leading-none text-[var(--color-text-primary)] max-w-5xl mx-auto">
                        Data Security Policy.
                    </h1>

                    {/* Subheadline */}
                    <p className="text-[var(--color-text-secondary)] text-lg lg:text-xl max-w-2xl mx-auto mt-6">
                        The technical and organisational measures Aeterna Data applies to protect client data throughout every annotation engagement. Documented in compliance with GDPR Article 32 and EU AI Act Article 10.
                    </p>

                    {/* Stat Strip */}
                    <div className="flex flex-wrap justify-center items-center gap-4 mt-10 font-mono text-sm">
                        <div className="flex flex-col items-center">
                            <span className="text-[var(--color-text-primary)] font-bold">GDPR Art. 32</span>
                            <span className="text-[var(--color-text-muted)] text-xs uppercase tracking-widest mt-1">Legal Basis</span>
                        </div>
                        <span className="text-[var(--color-border-subtle)] hidden sm:block">|</span>
                        <div className="flex flex-col items-center">
                            <span className="text-[var(--color-text-primary)] font-bold">72 Hours</span>
                            <span className="text-[var(--color-text-muted)] text-xs uppercase tracking-widest mt-1">Breach Notification SLA</span>
                        </div>
                        <span className="text-[var(--color-border-subtle)] hidden sm:block">|</span>
                        <div className="flex flex-col items-center">
                            <span className="text-[var(--color-text-primary)] font-bold">Client Env</span>
                            <span className="text-[var(--color-text-muted)] text-xs uppercase tracking-widest mt-1">Data Never Leaves Client Env</span>
                        </div>
                        <span className="text-[var(--color-border-subtle)] hidden sm:block">|</span>
                        <div className="flex flex-col items-center">
                            <span className="text-[var(--color-text-primary)] font-bold">Per-Annotator</span>
                            <span className="text-[var(--color-text-muted)] text-xs uppercase tracking-widest mt-1">Individual Access Controls</span>
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

                    {/* SECTION 1: Policy Scope */}
                    <AnimatedSection>
                        <section id="policy-scope">
                            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-[var(--color-text-primary)] mb-6">
                                Policy Scope
                            </h2>
                            <div className="text-base leading-relaxed text-[var(--color-text-secondary)] space-y-4">
                                <p>
                                    This Data Security Policy describes the technical and organisational security measures (TOMs) that PT Aeterna Data Intentio Logic (Aeterna Data) applies to the protection of client data throughout every annotation engagement. It applies to all processing activities performed by Aeterna Data as a data processor on behalf of clients under a signed Data Processing Agreement.
                                </p>
                                <p>
                                    This policy is provided to clients as part of the DPA review process and constitutes the Annex II Technical and Organisational Measures documentation required under the EU SCCs Module 2. It is reviewed and updated at minimum annually, or following any material change to Aeterna Data's processing infrastructure or annotator management practices.
                                </p>

                                <div className="bg-[var(--color-bg-surface)] border border-[var(--color-border)] rounded-2xl p-6 mt-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <div className="text-xs uppercase tracking-widest text-[var(--color-text-muted)]">Entity</div>
                                            <div className="text-sm font-semibold font-mono text-[var(--color-text-primary)] mt-1">PT Aeterna Data Intentio Logic</div>
                                        </div>
                                        <div>
                                            <div className="text-xs uppercase tracking-widest text-[var(--color-text-muted)]">Role</div>
                                            <div className="text-sm font-semibold font-mono text-[var(--color-text-primary)] mt-1">Data Processor (GDPR Art. 28)</div>
                                        </div>
                                        <div>
                                            <div className="text-xs uppercase tracking-widest text-[var(--color-text-muted)]">Legal basis for policy</div>
                                            <div className="text-sm font-semibold font-mono text-[var(--color-text-primary)] mt-1">GDPR Article 32</div>
                                        </div>
                                        <div>
                                            <div className="text-xs uppercase tracking-widest text-[var(--color-text-muted)]">Policy version</div>
                                            <div className="text-sm font-semibold font-mono text-[var(--color-text-primary)] mt-1">1.0 — March 2026</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </AnimatedSection>

                    {/* SECTION 2: GDPR Article 32 */}
                    <AnimatedSection>
                        <section id="gdpr-article-32">
                            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-[var(--color-text-primary)] mb-6">
                                GDPR Article 32 — Security of Processing
                            </h2>
                            <div className="text-base leading-relaxed text-[var(--color-text-secondary)] space-y-4 mb-8">
                                <p>
                                    GDPR Article 32 requires data controllers and processors to implement technical and organisational measures appropriate to the risk of the processing — taking into account the state of the art, the costs of implementation, and the nature, scope, context, and purposes of processing, as well as the risks of varying likelihood and severity for the rights and freedoms of natural persons.
                                </p>
                                <p>
                                    Article 32 specifies four exemplary measures that may be appropriate: pseudonymisation and encryption of personal data, the ability to ensure ongoing confidentiality, integrity, availability, and resilience of processing systems, the ability to restore availability and access in the event of an incident, and a process for regularly testing, assessing, and evaluating the effectiveness of measures.
                                </p>
                                <p>
                                    Aeterna Data's security measures are designed against the specific risk profile of annotation processing — which differs from general data processing in one critical respect: the annotation task inherently requires human annotators to read and understand the content of the data being labeled. Encryption at rest and pseudonymisation reduce but do not eliminate the data exposure inherent in the annotation workflow. The primary security measure for annotation processing is access control — ensuring that only the minimum number of authorised annotators access only the minimum data required for their assigned task.
                                </p>
                            </div>

                            <div className="space-y-0">
                                {[
                                    { title: "Confidentiality", body: "Technical and organisational measures to ensure that personal data is accessible only to authorised persons — implemented through per-annotator access controls, individual NDAs, and the data residency model's inherent security properties." },
                                    { title: "Integrity", body: "Measures to ensure that personal data is not altered or corrupted during annotation processing. Aeterna Data's annotators work in read-annotate mode — they add annotations but do not modify or delete source data." },
                                    { title: "Availability", body: "Measures to ensure ongoing availability of processing systems. Aeterna Data's annotation model means client platform availability is the client's responsibility — Aeterna Data's availability obligation is annotator capacity, not platform uptime." },
                                    { title: "Resilience", body: "The ability to restore access in the event of an incident. Aeterna Data's annotation workflow does not depend on Aeterna Data-hosted infrastructure — resilience is provided by the client's own platform architecture." }
                                ].map((item, idx) => (
                                    <AnimatedSection key={idx} delay={idx * 0.06}>
                                        <div className="border-l-4 border-[var(--color-accent-cta)] pl-5 py-2 mb-6 bg-[rgba(255,255,255,0.01)] rounded-r-lg">
                                            <h3 className="text-sm font-semibold text-[var(--color-text-primary)]">{item.title}</h3>
                                            <p className="text-sm text-[var(--color-text-secondary)] mt-2 leading-relaxed">{item.body}</p>
                                        </div>
                                    </AnimatedSection>
                                ))}
                            </div>
                        </section>
                    </AnimatedSection>

                    {/* SECTION 3: BYOT Security Model */}
                    <AnimatedSection>
                        <section id="byot-security">
                            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-[var(--color-text-primary)] mb-6">
                                Data Residency Security Model
                            </h2>
                            <div className="text-base leading-relaxed text-[var(--color-text-secondary)] space-y-4 mb-8">
                                <p>
                                    Aeterna Data's primary structural security measure is that annotation work is performed inside the client's own annotation environment. Rather than asking clients to transfer data to an Aeterna Data-managed platform, annotators access the client's existing annotation tool directly. Client data never leaves the client's own infrastructure at any point during the engagement.
                                </p>
                                <p>
                                    The security implications of this approach are substantial. The client's platform inherits all security controls that the client has already implemented — encryption at rest, network access controls, audit logging, multi-factor authentication, and platform-level data governance. Aeterna Data's annotators operate within those controls as authorised users — not as external parties receiving data exports.
                                </p>
                            </div>

                            <h3 className="text-xl font-semibold text-[var(--color-text-primary)] mt-8 mb-4">
                                Standard Vendor vs Aeterna Data Approach
                            </h3>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <AnimatedSection delay={0.08} className="h-full">
                                    <div className="bg-[var(--color-bg-surface)] border border-[var(--color-border)] rounded-2xl p-6 border-l-4 border-l-[rgba(239,68,68,0.3)] h-full flex flex-col">
                                        <h4 className="text-base font-semibold text-[var(--color-text-primary)]">Standard Vendor Model</h4>
                                        <ul className="text-xs font-mono text-[var(--color-text-muted)] space-y-1 my-3 flex-grow">
                                            <li>→ Client exports data to vendor platform</li>
                                            <li>→ Vendor platform stores client data</li>
                                            <li>→ Vendor annotators access vendor platform</li>
                                            <li>→ Vendor exports annotations to client</li>
                                            <li>→ Client data exists in vendor's infrastructure</li>
                                        </ul>
                                        <p className="text-sm italic text-[var(--color-text-secondary)] mt-3 leading-relaxed">
                                            Client data exists outside client infrastructure throughout the engagement. Vendor platform security is the client's dependency.
                                        </p>
                                    </div>
                                </AnimatedSection>
                                <AnimatedSection delay={0.16} className="h-full">
                                    <div className="bg-[var(--color-bg-surface)] border border-[var(--color-border)] rounded-2xl p-6 border-l-4 border-l-[var(--color-accent-cta)] h-full flex flex-col">
                                        <h4 className="text-base font-semibold text-[var(--color-text-primary)]">Aeterna Data Approach</h4>
                                        <ul className="text-xs font-mono text-[var(--color-text-muted)] space-y-1 my-3 flex-grow">
                                            <li>→ Client data stays in client platform</li>
                                            <li>→ Aeterna Data annotators access client platform via provisioned credentials</li>
                                            <li>→ Annotations written directly to client platform</li>
                                            <li>→ No data export to Aeterna Data infrastructure</li>
                                            <li>→ Client data never leaves client environment</li>
                                        </ul>
                                        <p className="text-sm italic text-[var(--color-text-secondary)] mt-3 leading-relaxed">
                                            Client's own security controls apply at all times. Aeterna Data has no copy of client data.
                                        </p>
                                    </div>
                                </AnimatedSection>
                            </div>

                            <div className="bg-[rgba(74,124,255,0.06)] border border-[rgba(74,124,255,0.15)] rounded-xl p-5 mt-8">
                                <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed text-center font-medium">
                                    Aeterna Data does not maintain servers, databases, or cloud storage for client annotation data. All annotation work is performed inside client-owned or client-licensed platforms. Aeterna Data has no copy of client data at any point before, during, or after the engagement.
                                </p>
                            </div>
                        </section>
                    </AnimatedSection>

                    {/* SECTION 4: Access Controls */}
                    <AnimatedSection>
                        <section id="access-controls">
                            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-[var(--color-text-primary)] mb-6">
                                Access Controls
                            </h2>
                            <div className="text-base leading-relaxed text-[var(--color-text-secondary)] space-y-4 mb-8">
                                <p>
                                    Access to client platforms and data is controlled at the individual annotator level. Aeterna Data does not use shared credentials, team accounts, or pooled access. Every annotator who works on a client project is provisioned with individual, unique credentials by the client — and those credentials are the sole means of access to the client's environment for that annotator.
                                </p>
                                <p>
                                    This architecture means that access can be revoked immediately for any individual annotator without affecting the rest of the team — and that client audit logs record per-annotator activity, not pooled team activity. The access control model is consistent with the principle of least privilege: each annotator can access only what they need to complete their assigned annotation task.
                                </p>
                            </div>

                            <div className="space-y-0">
                                {[
                                    { title: "Individual Credential Provisioning", body: "Client provisions unique credentials for each annotator before the engagement begins. Credentials are not shared between annotators under any circumstances. Aeterna Data communicates credentials to annotators through a documented provisioning process." },
                                    { title: "Minimum Necessary Access", body: "Annotators are assigned to task queues that contain only the data items required for their annotation assignment. Where the platform supports task-level scoping, annotators do not have access to the full client dataset beyond their assigned queue." },
                                    { title: "Immediate Access Revocation", body: "When an annotator rotates off a project — for any reason — Aeterna Data notifies the client within 24 hours and requests credential revocation. Where Aeterna Data has the ability to deactivate credentials directly, it does so immediately and notifies the client." },
                                    { title: "Access Log Review", body: "Where the client platform provides access audit logs, Aeterna Data reviews annotator access patterns on a periodic basis to detect anomalous behaviour — access outside normal working hours, access to data items outside assigned queues, or unusually high data access volumes." },
                                    { title: "Multi-Factor Authentication", body: "Where the client platform supports MFA, Aeterna Data requires annotators to enroll in MFA before beginning work. Aeterna Data does not request MFA exceptions or bypasses for annotators on any client platform." },
                                    { title: "Engagement End Revocation", body: "Upon engagement end, Aeterna Data requests immediate revocation of all annotator credentials within the timeline specified in the SOW — typically within 24 hours of the final delivery date. Written revocation confirmation is requested from the client and maintained in the engagement record." }
                                ].map((measure, idx) => (
                                    <AnimatedSection key={idx} delay={idx * 0.05}>
                                        <div className="border-l-2 border-[var(--color-border)] pl-5 py-2 mb-6">
                                            <h3 className="text-sm font-semibold text-[var(--color-text-primary)]">{measure.title}</h3>
                                            <p className="text-sm text-[var(--color-text-secondary)] mt-1 leading-relaxed">{measure.body}</p>
                                        </div>
                                    </AnimatedSection>
                                ))}
                            </div>
                        </section>
                    </AnimatedSection>

                    {/* SECTION 5: Annotator Obligations */}
                    <AnimatedSection>
                        <section id="annotator-obligations">
                            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-[var(--color-text-primary)] mb-6">
                                Annotator Confidentiality Obligations
                            </h2>
                            <div className="text-base leading-relaxed text-[var(--color-text-secondary)] space-y-4 mb-8">
                                <p>
                                    Every annotator assigned to a client project signs an individual Non-Disclosure Agreement before receiving access credentials or any project information. The individual NDA is distinct from the entity-level DPA — it creates direct contractual obligations between the annotator as an individual and Aeterna Data, covering the confidentiality of client data and the restrictions on its use.
                                </p>
                                <p>
                                    Individual annotator NDAs are the primary mechanism through which Aeterna Data operationalises the GDPR Article 29 requirement that persons acting under the authority of a processor process data only on the controller's instructions. The NDA binds each annotator individually — meaning the security obligation is not merely organisational but personal.
                                </p>
                            </div>

                            <div className="space-y-0">
                                {[
                                    { title: "Confidentiality of Client Data", body: "Annotators are prohibited from disclosing any client data — including prompts, model outputs, images, text, or any other data item encountered during annotation — to any third party for any purpose, at any time during or after the engagement." },
                                    { title: "No Personal Copies", body: "Annotators are prohibited from copying, downloading, screenshotting, or otherwise retaining any client data on personal devices or personal cloud storage. All annotation work is performed and saved within the client platform only." },
                                    { title: "No Unauthorised Processing", body: "Annotators are prohibited from using client data for any purpose other than the annotation task specified in the project brief. This includes using client data to train personal AI models, for research, for any commercial purpose, or for any purpose not explicitly authorised in writing." },
                                    { title: "Device Security", body: "Annotators are required to work on password-protected devices with current operating system and browser security updates applied. Work on public or shared devices is prohibited. Work on unsecured public Wi-Fi networks is prohibited without VPN." },
                                    { title: "Incident Reporting", body: "Annotators are required to report any suspected security incident — including unauthorised access to their credentials, loss of a device used for annotation work, or accidental disclosure of client data — to Aeterna Data immediately upon discovery. Aeterna Data then assesses and triggers the breach notification procedure if required." }
                                ].map((obligation, idx) => (
                                    <AnimatedSection key={idx} delay={idx * 0.05}>
                                        <div className="border-l-2 border-[var(--color-border)] pl-5 py-2 mb-6">
                                            <h3 className="text-sm font-semibold text-[var(--color-text-primary)]">{obligation.title}</h3>
                                            <p className="text-sm text-[var(--color-text-secondary)] mt-1 leading-relaxed">{obligation.body}</p>
                                        </div>
                                    </AnimatedSection>
                                ))}
                            </div>
                        </section>
                    </AnimatedSection>

                    {/* SECTION 6: Data in Transit */}
                    <AnimatedSection>
                        <section id="data-in-transit">
                            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-[var(--color-text-primary)] mb-6">
                                Data in Transit
                            </h2>
                            <div className="text-base leading-relaxed text-[var(--color-text-secondary)] space-y-4 mb-8">
                                <p>
                                    The primary data in transit concern is the communication between annotators' devices and the client annotation platform. Personal data is transmitted over this channel every time an annotator loads a task item, views data in the annotation interface, or saves an annotation.
                                </p>
                                <p>
                                    Aeterna Data requires that client platforms accessed by annotators are served over HTTPS — TLS-encrypted connections — as a condition of engagement. Annotation work on platforms served over unencrypted HTTP connections is not permitted. Where Aeterna Data cannot verify that a client platform is served over HTTPS, this is raised during scoping before any annotator is assigned.
                                </p>
                            </div>

                            <h3 className="text-xl font-semibold text-[var(--color-text-primary)] mt-8 mb-4">
                                Communication Security
                            </h3>

                            <div className="space-y-0">
                                {[
                                    { title: "HTTPS-Only Platform Access", body: "All client platform access by Aeterna Data annotators is conducted over HTTPS connections. Annotators are instructed to verify the padlock indicator and report any certificate warnings immediately." },
                                    { title: "Internal Communication Encryption", body: "All internal Aeterna Data communication about client projects — including task assignments, annotator briefings, and quality reports — is conducted over encrypted communication channels. Client-identifiable project information is not transmitted over unencrypted email." },
                                    { title: "No Data Transfer via Email", body: "Client data is never transferred to annotators by email or unencrypted file sharing. All data access is through the client platform interface. Where file-based datasets must be shared for file-based validation work, encrypted transfer methods specified in the SOW are used." },
                                    { title: "VPN for Sensitive Projects", body: "For projects involving particularly sensitive personal data — medical records, legal documents, financial data — Aeterna Data may require annotators to use a VPN for platform access. VPN requirements are specified in the SOW before the engagement begins." }
                                ].map((measure, idx) => (
                                    <AnimatedSection key={idx} delay={idx * 0.05}>
                                        <div className="border-l-2 border-[var(--color-border)] pl-5 py-2 mb-6">
                                            <h4 className="text-sm font-semibold text-[var(--color-text-primary)]">{measure.title}</h4>
                                            <p className="text-sm text-[var(--color-text-secondary)] mt-1 leading-relaxed">{measure.body}</p>
                                        </div>
                                    </AnimatedSection>
                                ))}
                            </div>
                        </section>
                    </AnimatedSection>

                    {/* SECTION 7: Data at Rest */}
                    <AnimatedSection>
                        <section id="data-at-rest">
                            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-[var(--color-text-primary)] mb-6">
                                Data at Rest
                            </h2>
                            <div className="text-base leading-relaxed text-[var(--color-text-secondary)] space-y-4 mb-8">
                                <p>
                                    Client data at rest resides in the client's own platform and storage infrastructure — not in Aeterna Data's infrastructure. Aeterna Data does not maintain servers, databases, or cloud storage that contain client data at rest. This means the security of client data at rest is determined by the client's own platform security — not by Aeterna Data's infrastructure security.
                                </p>
                                <p>
                                    The data at rest security obligations that apply to Aeterna Data concern the annotation output and any project-related documentation that Aeterna Data creates during the engagement — quality reports, IAA scores, annotator calibration records, and SOW documentation. These documents may reference client data characteristics but do not contain copies of client data.
                                </p>
                            </div>

                            <h3 className="text-xl font-semibold text-[var(--color-text-primary)] mt-8 mb-4">
                                Aeterna Data Internal Documentation
                            </h3>

                            <div className="space-y-0">
                                {[
                                    { title: "No Client Data in Internal Documents", body: "Quality reports, IAA reports, and annotator calibration documentation reference annotation quality metrics and aggregate statistics — not copies of individual data items. Raw client data is never included in internal Aeterna Data documents." },
                                    { title: "Project Documentation Retention", body: "Project documentation — SOWs, quality reports, IAA records, and annotator assignment records — is retained for the period specified in the DPA, which is typically the duration of the engagement plus 12 months. Documentation is deleted on schedule unless retention is required by law." },
                                    { title: "Access to Internal Documentation", body: "Access to internal project documentation is restricted to Aeterna Data personnel with a direct role in the engagement. Documentation is not accessible to annotators beyond what is required for their task briefing." },
                                    { title: "Device Encryption", body: "Aeterna Data personnel who handle project documentation use devices with full-disk encryption enabled. Device encryption is a condition of handling client-related project documentation." }
                                ].map((measure, idx) => (
                                    <AnimatedSection key={idx} delay={idx * 0.05}>
                                        <div className="border-l-2 border-[var(--color-border)] pl-5 py-2 mb-6">
                                            <h4 className="text-sm font-semibold text-[var(--color-text-primary)]">{measure.title}</h4>
                                            <p className="text-sm text-[var(--color-text-secondary)] mt-1 leading-relaxed">{measure.body}</p>
                                        </div>
                                    </AnimatedSection>
                                ))}
                            </div>
                        </section>
                    </AnimatedSection>

                    {/* SECTION 8: Breach Notification */}
                    <AnimatedSection>
                        <section id="breach-notification">
                            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-[var(--color-text-primary)] mb-6">
                                Breach Notification
                            </h2>
                            <div className="text-base leading-relaxed text-[var(--color-text-secondary)] space-y-4 mb-4">
                                <p>
                                    In the event of a personal data breach involving client data — whether discovered by an annotator, by Aeterna Data's project management, or through a client notification — Aeterna Data follows a documented breach response procedure. The procedure is aligned with GDPR Article 33 and the breach notification obligations in the EU SCCs Module 2 and the DPA.
                                </p>
                            </div>

                            <div className="bg-[rgba(74,124,255,0.06)] border border-[rgba(74,124,255,0.15)] rounded-2xl p-6 mb-10 mt-6 relative overflow-hidden" aria-label="72 hour breach notification commitment">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-accent-cta)] opacity-10 rounded-full blur-2xl pointer-events-none" />
                                <div className="mb-4">
                                    <div className="font-mono text-4xl font-bold text-[var(--color-text-primary)]">72 Hours</div>
                                    <div className="text-xs uppercase tracking-widest text-[var(--color-text-muted)] mt-2">Maximum time from breach discovery to client notification</div>
                                </div>
                                <p className="text-sm text-[var(--color-text-secondary)] mt-2 leading-relaxed max-w-lg">
                                    Consistent with GDPR Article 33(2), which requires processors to notify the controller without undue delay after becoming aware of a personal data breach.
                                </p>
                            </div>

                            <h3 className="text-xl font-semibold text-[var(--color-text-primary)] mt-8 mb-6">
                                Breach Response Procedure
                            </h3>

                            <div className="flex flex-col">
                                {[
                                    { number: "01", title: "Discovery and Assessment", body: "Upon discovery of a suspected breach — by any annotator or Aeterna Data personnel — the incident is immediately escalated to the engagement lead. Initial assessment determines whether the incident constitutes a personal data breach under GDPR Article 4(12)." },
                                    { number: "02", title: "Client Notification — Within 72 Hours", body: "If the incident is confirmed or reasonably suspected to constitute a personal data breach, the client is notified within 72 hours of Aeterna Data becoming aware. Notification is provided by email to the client's designated DPA contact, with copy to legal@aeternadata.com." },
                                    { number: "03", title: "Notification Content", body: "The breach notification includes: the nature of the breach, the categories and approximate number of data subjects concerned, the categories and approximate number of records involved, the likely consequences of the breach, and the measures taken or proposed to address the breach and mitigate its effects." },
                                    { number: "04", title: "Access Revocation", body: "If the breach involves an annotator's credentials — actual or suspected — those credentials are immediately suspended pending investigation. The client is notified of the suspension and the credentials are permanently revoked unless the investigation establishes that no breach occurred." },
                                    { number: "05", title: "Incident Documentation", body: "All breach incidents — including incidents that do not meet the notification threshold — are documented in Aeterna Data's internal incident register. The register records the nature of the incident, the response taken, and the outcome. The register is available to clients and supervisory authorities on request." }
                                ].map((stage, idx, arr) => (
                                    <AnimatedSection key={idx} delay={idx * 0.06} className="flex flex-col gap-2">
                                        <div className="bg-[var(--color-bg-surface)] border border-[var(--color-border)] rounded-2xl p-6 md:p-8 flex flex-col md:flex-row gap-6 relative z-10 transition-all duration-200">
                                            <div className="md:w-1/4 shrink-0">
                                                <span className="text-xs font-mono uppercase tracking-widest text-[var(--color-text-white)] bg-[var(--color-accent-cta)] px-3 py-1 rounded-full inline-block">
                                                    Stage {stage.number}
                                                </span>
                                            </div>
                                            <div className="md:w-3/4">
                                                <h4 className="text-xl md:text-2xl font-bold text-[var(--color-text-primary)] mb-3">{stage.title}</h4>
                                                <p className="text-[var(--color-text-secondary)] leading-relaxed text-sm md:text-base">
                                                    {stage.body}
                                                    {stage.number === "02" && (
                                                        <span> <a href="mailto:legal@aeternadata.com" className="text-[var(--color-accent-cta)] hover:underline active:underline animate-fade-in" aria-label="Email Aeterna Data legal team">legal@aeternadata.com</a>.</span>
                                                    )}
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

                    {/* SECTION 9: Data Deletion */}
                    <AnimatedSection>
                        <section id="data-deletion">
                            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-[var(--color-text-primary)] mb-6">
                                Data Deletion at Engagement End
                            </h2>
                            <div className="text-base leading-relaxed text-[var(--color-text-secondary)] space-y-4 mb-8">
                                <p>
                                    Upon engagement end — whether at the natural conclusion of the project, at the client's request, or following early termination — Aeterna Data takes immediate steps to ensure that no client data is retained in any Aeterna Data system or annotator device.
                                </p>
                                <p>
                                    Aeterna Data does not hold copies of client data in its own infrastructure. The primary deletion obligation at engagement end is therefore annotator-side: confirming that no annotator has retained any data item, screenshot, or extract from the client platform on a personal device.
                                </p>
                            </div>

                            <div className="space-y-0">
                                {[
                                    { title: "Annotator Credential Revocation", body: "Aeterna Data requests revocation of all annotator credentials from the client platform within the timeline specified in the SOW — typically within 24 hours of the final delivery date. Credential revocation prevents any further access to client data by former annotators." },
                                    { title: "Annotator Confirmation", body: "Each annotator on the project is required to confirm in writing that they have not retained any copy of client data on personal devices or personal storage, and that they have deleted any local cache or temporary files that may have been created by the annotation platform." },
                                    { title: "Aeterna Data Written Confirmation", body: "Aeterna Data provides the client with written confirmation that: (1) all annotator credentials have been revoked, (2) all annotator deletion confirmations have been received, and (3) no client data is retained in any Aeterna Data system or annotator device." },
                                    { title: "Retention of Project Documentation", body: "Project documentation — SOWs, IAA reports, quality reports — that does not contain client data may be retained for the period specified in the DPA (typically engagement duration plus 12 months) for Aeterna Data's own records. This documentation is deleted on schedule unless legally required to be retained." }
                                ].map((step, idx) => (
                                    <AnimatedSection key={idx} delay={idx * 0.05}>
                                        <div className="border-l-2 border-[var(--color-border)] pl-5 py-2 mb-6">
                                            <h3 className="text-sm font-semibold text-[var(--color-text-primary)]">{step.title}</h3>
                                            <p className="text-sm text-[var(--color-text-secondary)] mt-1 leading-relaxed">{step.body}</p>
                                        </div>
                                    </AnimatedSection>
                                ))}
                            </div>

                            <div className="bg-[rgba(74,124,255,0.06)] border border-[rgba(74,124,255,0.15)] rounded-xl p-5 mt-8">
                                <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed text-center font-medium">
                                    Written deletion confirmation is provided within 5 business days of engagement end as the default. Where earlier confirmation is required — for regulatory deadlines or client audit schedules — an earlier confirmation deadline can be specified in the SOW.
                                </p>
                            </div>
                        </section>
                    </AnimatedSection>

                    {/* SECTION 10: Sub-Processor Security */}
                    <AnimatedSection>
                        <section id="sub-processor-security">
                            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-[var(--color-text-primary)] mb-6">
                                Sub-Processor Security
                            </h2>
                            <div className="text-base leading-relaxed text-[var(--color-text-secondary)] space-y-4 mb-8">
                                <p>
                                    Where Aeterna Data engages sub-processors — third-party services that process personal data on Aeterna Data's behalf as part of a client engagement — those sub-processors are required to provide equivalent security guarantees to those in this policy. Sub-processor engagement is governed by Clause 9 of the EU SCCs Module 2 and the sub-processing provisions of the DPA.
                                </p>
                                <p>
                                    Prior to engaging any sub-processor, Aeterna Data conducts a security assessment to verify that the sub-processor's security practices meet the standards required for the personal data being processed. Sub-processors are not engaged without prior written client approval.
                                </p>
                            </div>

                            <div className="space-y-0">
                                {[
                                    { title: "Equivalent Security Standard", body: "Sub-processors are required to implement technical and organisational measures that provide a level of data protection at least equivalent to the measures in this policy. This is contractually required in Aeterna Data's sub-processor agreements." },
                                    { title: "Prior Written Client Approval", body: "No sub-processor is engaged for processing client personal data without prior written approval from the client. Clients are notified at least 14 days before any new sub-processor is engaged and have the right to object." },
                                    { title: "Sub-Processor Liability", body: "Aeterna Data remains fully liable to the client for the performance of sub-processors' data protection obligations. A sub-processor breach is treated as an Aeterna Data breach for notification and remediation purposes." }
                                ].map((req, idx) => (
                                    <AnimatedSection key={idx} delay={idx * 0.05}>
                                        <div className="border-l-4 border-[var(--color-accent-cta)] pl-5 py-2 mb-6 bg-[rgba(255,255,255,0.01)] rounded-r-lg">
                                            <h3 className="text-base font-semibold text-[var(--color-text-primary)]">{req.title}</h3>
                                            <p className="text-sm text-[var(--color-text-secondary)] mt-2 leading-relaxed">{req.body}</p>
                                        </div>
                                    </AnimatedSection>
                                ))}
                            </div>
                        </section>
                    </AnimatedSection>

                    {/* SECTION 11: Physical Security */}
                    <AnimatedSection>
                        <section id="physical-security">
                            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-[var(--color-text-primary)] mb-6">
                                Physical Security
                            </h2>
                            <div className="text-base leading-relaxed text-[var(--color-text-secondary)] space-y-4 mb-8">
                                <p>
                                    Aeterna Data operates as a remote-first organisation. Annotators and project personnel work from their own locations rather than a shared office facility. Physical security measures therefore apply to individual work environments rather than a central premises.
                                </p>
                                <p>
                                    This remote-first model — requires specific personal device and workspace security standards rather than building-level access controls.
                                </p>
                            </div>

                            <div className="space-y-0">
                                {[
                                    { title: "Screen Privacy", body: "Annotators working in shared spaces — co-working environments, shared households — are required to use privacy screens when working with sensitive client data. For projects involving sensitive personal data categories under GDPR Article 9 (medical, legal, financial), work in public or shared spaces is prohibited." },
                                    { title: "Unattended Device Policy", body: "Annotators are required to lock their devices when leaving their workstation. Screen lock must activate automatically after a maximum of 5 minutes of inactivity for devices used to access client platforms." },
                                    { title: "Device Loss Reporting", body: "Loss or theft of any device used to access a client platform must be reported to Aeterna Data immediately. Aeterna Data assesses whether the loss constitutes a breach risk and triggers the breach notification procedure if required. The client is notified within 72 hours if a breach is confirmed or reasonably suspected." },
                                    { title: "No Unverified Environments", body: "Annotators are prohibited from conducting annotation work in environments where they cannot control who may view their screen. Work in public environments without adequate screen privacy controls is not permitted for projects involving personal data." }
                                ].map((measure, idx) => (
                                    <AnimatedSection key={idx} delay={idx * 0.05}>
                                        <div className="border-l-2 border-[var(--color-border)] pl-5 py-2 mb-6">
                                            <h3 className="text-sm font-semibold text-[var(--color-text-primary)]">{measure.title}</h3>
                                            <p className="text-sm text-[var(--color-text-secondary)] mt-1 leading-relaxed">{measure.body}</p>
                                        </div>
                                    </AnimatedSection>
                                ))}
                            </div>
                        </section>
                    </AnimatedSection>

                    {/* SECTION 12: Security Reviews */}
                    <AnimatedSection>
                        <section id="security-reviews">
                            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-[var(--color-text-primary)] mb-6">
                                Security Review and Testing
                            </h2>
                            <p className="text-base leading-relaxed text-[var(--color-text-secondary)] mb-8">
                                GDPR Article 32(1)(d) requires a process for regularly testing, assessing, and evaluating the effectiveness of technical and organisational measures. Aeterna Data implements this requirement through an annual security review process and through project-level security checks at engagement initiation.
                            </p>

                            <h3 className="text-xl font-semibold text-[var(--color-text-primary)] mt-8 mb-4">
                                Annual Policy Review
                            </h3>
                            <p className="text-base leading-relaxed text-[var(--color-text-secondary)] mb-8">
                                This Data Security Policy is reviewed at minimum annually by Aeterna Data's management. The review assesses whether the measures described in this policy remain appropriate to the processing activities conducted and the risk profile of client data processed. The review date and version number are updated on every revision. Clients engaged at the time of a policy update are notified and provided with the updated policy for their records.
                            </p>

                            <h3 className="text-xl font-semibold text-[var(--color-text-primary)] mt-8 mb-4">
                                Engagement-Level Security Checks
                            </h3>

                            <div className="space-y-0">
                                {[
                                    { title: "Pre-Engagement Platform Assessment", body: "Before annotators are assigned, Aeterna Data verifies that the client platform is served over HTTPS, that individual credential provisioning is supported, and that the platform provides a task-level interface that limits annotator access to assigned data items only." },
                                    { title: "Annotator Onboarding Verification", body: "Before any annotator begins work, Aeterna Data verifies that: the individual NDA is signed, credentials have been individually provisioned, the annotator has confirmed device security compliance, and any MFA requirement has been satisfied." },
                                    { title: "Mid-Engagement Access Review", body: "On engagements lasting more than 30 days, Aeterna Data conducts a mid-engagement review of annotator access patterns and confirms that access controls remain correctly configured. Any anomalous access patterns identified are investigated and reported to the client." },
                                    { title: "Post-Engagement Deletion Verification", body: "After engagement end, Aeterna Data verifies that annotator credentials have been revoked, annotator deletion confirmations have been received, and no client data is retained. Written confirmation of all three is provided to the client." }
                                ].map((check, idx) => (
                                    <AnimatedSection key={idx} delay={idx * 0.05}>
                                        <div className="border-l-2 border-[var(--color-border)] pl-5 py-2 mb-6">
                                            <h4 className="text-sm font-semibold text-[var(--color-text-primary)]">{check.title}</h4>
                                            <p className="text-sm text-[var(--color-text-secondary)] mt-1 leading-relaxed">{check.body}</p>
                                        </div>
                                    </AnimatedSection>
                                ))}
                            </div>
                        </section>
                    </AnimatedSection>

                    {/* SECTION 13: EU AI Act */}
                    <AnimatedSection>
                        <section id="eu-ai-act-security">
                            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-[var(--color-text-primary)] mb-6">
                                EU AI Act and Data Security
                            </h2>
                            <div className="text-base leading-relaxed text-[var(--color-text-secondary)] space-y-4 mb-8">
                                <p>
                                    The EU AI Act imposes specific requirements on providers of high-risk AI systems regarding the governance and quality of training data. For EU AI teams outsourcing annotation to Aeterna Data, this policy — together with the DPA, EU SCCs, and IAA quality reports — constitutes the data governance documentation required under EU AI Act Article 10.
                                </p>
                                <p>
                                    Article 10 of the EU AI Act requires that training data for high-risk AI systems be subject to appropriate data governance practices, including examination of training data for possible biases, measures to identify and address gaps and shortcomings, and documentation of the provenance, collection method, and quality of the training data. Aeterna Data's security and quality framework is designed to satisfy these requirements as an integrated output of every engagement — not as a compliance retrofit.
                                </p>
                            </div>

                            <div className="space-y-0">
                                {[
                                    { title: "Article 10 Data Governance", body: "Aeterna Data's Data Security Policy and DPA together document the technical and organisational measures applied to training data during annotation processing — satisfying the data governance documentation requirement for high-risk AI system providers under Article 10(2)(f)." },
                                    { title: "Article 17 Quality Management", body: "The IAA measurement, quality reporting, and rework obligations in Aeterna Data's standard engagement model satisfy the quality management system requirements under EU AI Act Article 17 for providers of high-risk AI systems who use Aeterna Data as a training data supplier." },
                                    { title: "Article 18 Technical Documentation", body: "The SOW, IAA reports, quality reports, and this Data Security Policy together constitute the technical documentation that high-risk AI system providers must maintain under EU AI Act Article 18 — demonstrating that the training data annotation process meets the Act's requirements." }
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
                                        EU AI Act high-risk system requirements take full effect August 2, 2026. Establishing a documented annotation processor relationship — with signed DPA and security policy in place — ensures your annotation pipeline is audit-ready before the deadline.
                                    </p>
                                </div>
                            </AnimatedSection>
                        </section>
                    </AnimatedSection>

                    {/* SECTION 14: Client Responsibilities */}
                    <AnimatedSection>
                        <section id="client-responsibilities">
                            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-[var(--color-text-primary)] mb-6">
                                Client Responsibilities
                            </h2>
                            <div className="text-base leading-relaxed text-[var(--color-text-secondary)] space-y-4 mb-8">
                                <p>
                                    Data security is a shared responsibility. Aeterna Data is responsible for the measures described in this policy — but the security of the client's own platform, the configuration of access controls within that platform, and the security of the client's data infrastructure are the client's responsibility.
                                </p>
                                <p>
                                    This division of responsibility is consistent with the GDPR controller-processor model: the client (as data controller) is responsible for the security of the processing system; Aeterna Data (as data processor) is responsible for the security of its own personnel and processes within that system.
                                </p>
                            </div>

                            <div className="space-y-0">
                                {[
                                    { title: "Platform Security Configuration", body: "The client is responsible for ensuring that the annotation platform is securely configured — including HTTPS enforcement, access logging, session timeout settings, and any platform-level encryption at rest. Aeterna Data operates within the security posture of the client's platform." },
                                    { title: "Credential Provisioning", body: "The client is responsible for provisioning individual, unique credentials for each annotator before the engagement begins — and for revoking those credentials promptly when requested by Aeterna Data at annotator rotation or engagement end." },
                                    { title: "MFA Enforcement", body: "Where the client platform supports MFA, the client is responsible for enforcing MFA for annotator accounts. Aeterna Data will comply with any MFA requirement — but cannot enforce it on the client platform independently." },
                                    { title: "Data Scope Limitation", body: "The client is responsible for limiting the data accessible to annotators to only what is required for the annotation task. Where the platform supports task-level scoping, the client should configure annotator access accordingly — Aeterna Data will confirm the correct scope during onboarding." },
                                    { title: "Breach Notification to Supervisory Authority", body: "Where a breach involving Aeterna Data-processed data meets the threshold for supervisory authority notification under GDPR Article 33, the client (as data controller) is responsible for notifying their lead supervisory authority within 72 hours. Aeterna Data will provide all necessary information to support that notification." }
                                ].map((resp, idx) => (
                                    <AnimatedSection key={idx} delay={idx * 0.05}>
                                        <div className="border-l-2 border-[var(--color-border)] pl-5 py-2 mb-6">
                                            <h3 className="text-sm font-semibold text-[var(--color-text-primary)]">{resp.title}</h3>
                                            <p className="text-sm text-[var(--color-text-secondary)] mt-1 leading-relaxed">{resp.body}</p>
                                        </div>
                                    </AnimatedSection>
                                ))}
                            </div>
                        </section>
                    </AnimatedSection>

                    {/* SECTION 15: Common Questions */}
                    <AnimatedSection>
                        <section id="security-questions">
                            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-[var(--color-text-primary)] mb-6">
                                Common Security Questions
                            </h2>
                            <p className="text-base leading-relaxed text-[var(--color-text-secondary)] mb-8">
                                The following questions are frequently raised by client security and compliance teams during vendor assessment.
                            </p>

                            <div className="space-y-0">
                                {[
                                    {
                                        question: "Does Aeterna Data store any client data on its own servers?",
                                        answer: "No. Aeterna Data does not maintain servers, databases, or cloud storage for client annotation data. All annotation work is performed inside client-owned or client-licensed platforms. Aeterna Data has no copy of client data at any point during the engagement."
                                    },
                                    {
                                        question: "What happens to client data on annotator devices?",
                                        answer: "Annotators work inside the client's web-based annotation platform — they do not download or store client data locally. Browsers may cache temporary data during a session, but annotators are required to clear browser cache at session end for sensitive projects and are prohibited from downloading any data item from the client platform."
                                    },
                                    {
                                        question: "Can Aeterna Data provide an Information Security Policy or ISO 27001 certificate?",
                                        answer: "Aeterna Data does not hold ISO 27001 certification at this time. This Data Security Policy constitutes Aeterna Data's documented security framework under GDPR Article 32 and EU SCCs Annex II. Where a client requires ISO 27001 or equivalent certification as a vendor prerequisite, this should be raised during scoping so we can assess whether the engagement can proceed."
                                    },
                                    {
                                        question: "How does Aeterna Data verify annotator device security?",
                                        answer: "Aeterna Data requires annotators to confirm device security compliance as part of the onboarding process — including password protection, current OS updates, and disk encryption. Aeterna Data does not deploy MDM (Mobile Device Management) software on annotator devices. Device security compliance is contractually required through the individual NDA."
                                    },
                                    {
                                        question: "What security measures apply to sensitive personal data under GDPR Article 9?",
                                        answer: "For projects involving special category personal data — medical, biometric, racial or ethnic origin, political opinions, religious beliefs, trade union membership, or criminal convictions — Aeterna Data applies enhanced measures: prohibition on work in shared or public spaces, mandatory VPN for platform access, enhanced annotator briefing on data sensitivity, and higher-frequency access log review. Article 9 data processing is specified in the DPA with explicit processing basis."
                                    },
                                    {
                                        question: "Does Aeterna Data conduct background checks on annotators?",
                                        answer: "Aeterna Data does not conduct formal criminal background checks on annotators as a standard practice. For projects involving particularly sensitive data — financial records, legal documents, medical records — enhanced vetting procedures can be specified in the SOW. Clients with mandatory background check requirements should raise this during scoping."
                                    },
                                    {
                                        question: "How is the security of sub-processors assessed?",
                                        answer: "Before engaging any sub-processor, Aeterna Data reviews the sub-processor's security documentation — including their data protection policy, security certifications where available, and any relevant audit reports. Sub-processors processing client personal data are required to sign a sub-processor agreement that incorporates security obligations equivalent to this policy."
                                    },
                                    {
                                        question: "How do I report a security concern about my Aeterna Data engagement?",
                                        answer: "Security concerns, suspected incidents, and questions about this policy should be directed to legal@aeternadata.com. For urgent security incidents, include 'SECURITY INCIDENT' in the subject line. Aeterna Data's engagement lead is also a direct contact for project-specific security concerns."
                                    }
                                ].map((qa, idx, arr) => (
                                    <AnimatedSection key={idx} delay={idx * 0.04}>
                                        <div className={`mb-6 ${idx !== arr.length - 1 ? 'border-b border-[var(--color-border)] pb-6' : ''}`}>
                                            <h3 className="text-base font-semibold text-[var(--color-text-primary)]">
                                                {qa.question}
                                            </h3>
                                            <p className="text-sm text-[var(--color-text-secondary)] mt-3 leading-relaxed">
                                                {qa.answer}
                                                {qa.question.includes("How do I report a security concern") && (
                                                    <span> You can also email us directly at <a href="mailto:legal@aeternadata.com" className="text-[var(--color-accent-cta)] hover:underline active:underline" aria-label="Email Aeterna Data legal team">legal@aeternadata.com</a>.</span>
                                                )}
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
                            Questions About Data Security?
                        </h2>
                        <p className="text-[var(--color-text-secondary)] text-lg mb-10 leading-relaxed max-w-2xl mx-auto">
                            Security questions are reviewed personally by Aeterna Data's engagement team. This policy and the full DPA are available for legal review before any commitment. Email legal@aeternadata.com or use the contact form.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <a
                                href="mailto:legal@aeternadata.com"
                                className="bg-[var(--color-accent-cta)] text-white font-semibold px-8 py-3.5 rounded-lg hover:bg-[var(--color-accent-cta-hover)] transition-colors duration-200"
                                aria-label="Email Aeterna Data legal team"
                            >
                                Contact the Legal Team
                            </a>
                            <Link
                                href="/legal/eu-sccs"
                                className="border border-[var(--color-border-subtle)] text-[var(--color-text-secondary)] px-8 py-3.5 rounded-lg hover:border-[var(--color-border-hover)] hover:text-[var(--color-text-primary)] transition-all duration-200"
                            >
                                Read the EU SCCs Overview
                            </Link>
                        </div>
                    </div>
                </section>
            </AnimatedSection>
        </main>
    );
}
