import type { Metadata } from 'next';
import Link from 'next/link';
import { ChevronRight, Mail, Shield, Globe, Clock, FlaskConical, Video, FileText, CheckCircle2, Lock } from 'lucide-react';
import AnimatedSection from '@/components/ui/AnimatedSection';
import ContactForm from '@/components/ui/ContactForm';
import ScrollToFormButton from '@/components/ui/ScrollToFormButton';

export const metadata: Metadata = {
    title: 'Contact — Aeterna Data',
    description: 'Get in touch with Aeterna Data. Request a paid pilot, book a discovery call, or send a project brief. We respond within 48 business hours.',
    robots: {
        index: true,
        follow: true,
    },
};

export default function ContactPage() {
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
                .fade-in-stagger-left {
                    animation: fade-in-stagger 0.5s ease-out 0s both;
                }
                .fade-in-stagger-right {
                    animation: fade-in-stagger 0.5s ease-out 0.1s both;
                }
                @keyframes fade-in-stagger {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                `
            }} />

            {/* ── PAGE HERO ── */}
            <section className="relative min-h-[50vh] flex flex-col items-center justify-center pt-32 pb-16 text-center w-full">
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
                        <span className="text-[var(--color-text-muted)]">Contact</span>
                    </nav>

                    {/* Pre-heading Pill */}
                    <div
                        className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-8 border"
                        style={{ backgroundColor: "rgba(255,255,255,0.05)", borderColor: "rgba(255,255,255,0.10)" }}
                    >
                        <span className="text-[var(--color-text-muted)] text-xs font-semibold tracking-widest uppercase">
                            Get In Touch
                        </span>
                    </div>

                    {/* Headline */}
                    <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight leading-none text-[var(--color-text-primary)] mx-auto max-w-3xl">
                        Start the Conversation.
                    </h1>

                    {/* Subheadline */}
                    <p className="text-[var(--color-text-secondary)] text-lg lg:text-xl max-w-2xl mx-auto mt-6">
                        Tell us what you are building. We will tell you whether we are the right fit — and if we are, we will have a scoping proposal in your inbox within 48 hours.
                    </p>
                </div>
            </section>

            {/* ── MAIN CONTENT — Two Column Layout ── */}
            <section className="relative w-full">
                <div className="max-w-6xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-5 gap-12">

                    {/* Left Column - Contact Form */}
                    <div className="lg:col-span-3 fade-in-stagger-left" id="contact-form">
                        <ContactForm />
                    </div>

                    {/* Right Column - Details */}
                    <div className="lg:col-span-2 fade-in-stagger-right space-y-6">

                        {/* Block 1 — Contact Details */}
                        <div className="bg-[var(--color-bg-surface)] border border-[var(--color-border)] rounded-2xl p-6">
                            <h2 className="text-xs uppercase tracking-widest text-[var(--color-text-muted)] font-semibold mb-4">
                                Contact
                            </h2>
                            <div className="flex items-start gap-3 py-3 border-b border-[var(--color-border)]">
                                <Mail className="w-4 h-4 text-[var(--color-text-muted)] shrink-0 mt-0.5" aria-hidden="true" />
                                <span className="text-xs text-[var(--color-text-muted)] uppercase tracking-widest w-20 shrink-0 mt-0.5">General</span>
                                <a href="mailto:contact@aeternadata.com" className="text-sm text-[var(--color-text-primary)] hover:text-[var(--color-accent-cta)] transition-colors break-all">
                                    contact@aeternadata.com
                                </a>
                            </div>
                            <div className="flex items-start gap-3 py-3 border-b border-[var(--color-border)]">
                                <Shield className="w-4 h-4 text-[var(--color-text-muted)] shrink-0 mt-0.5" aria-hidden="true" />
                                <span className="text-xs text-[var(--color-text-muted)] uppercase tracking-widest w-20 shrink-0 mt-0.5">Legal & DPA</span>
                                <a href="mailto:legal@aeternadata.com" className="text-sm text-[var(--color-text-primary)] hover:text-[var(--color-accent-cta)] transition-colors break-all">
                                    legal@aeternadata.com
                                </a>
                            </div>
                            <div className="flex items-start gap-3 py-3">
                                <Globe className="w-4 h-4 text-[var(--color-text-muted)] shrink-0 mt-0.5" aria-hidden="true" />
                                <span className="text-xs text-[var(--color-text-muted)] uppercase tracking-widest w-20 shrink-0 mt-0.5">Website</span>
                                <a href="https://aeternadata.com" className="text-sm text-[var(--color-text-primary)] hover:text-[var(--color-accent-cta)] transition-colors break-all">
                                    www.aeternadata.com
                                </a>
                            </div>
                        </div>

                        {/* Block 2 — What Happens Next */}
                        <div className="bg-[var(--color-bg-surface)] border border-[var(--color-border)] rounded-2xl p-6">
                            <h2 className="text-xs uppercase tracking-widest text-[var(--color-text-muted)] font-semibold mb-4">
                                What Happens Next
                            </h2>
                            {[
                                { num: "01", title: "We read your brief", body: "Within 48 business hours of your submission." },
                                { num: "02", title: "We assess the fit", body: "If your project is a good match, we reach out to schedule a 20-minute discovery call." },
                                { num: "03", title: "Scoping proposal", body: "Within 48 hours of the discovery call, you receive a draft SOW with estimated AHT and recommended approach." },
                                { num: "04", title: "Pilot agreement", body: "If the proposal works, we execute the NDA and move to pilot scoping." }
                            ].map((step, idx, arr) => (
                                <div key={idx} className={`flex gap-3 items-start py-4 ${idx !== arr.length - 1 ? 'border-b border-[var(--color-border)]' : ''}`}>
                                    <span className="font-mono text-xs text-[var(--color-accent-cta)] shrink-0 mt-0.5">
                                        {step.num}
                                    </span>
                                    <div>
                                        <h3 className="text-sm font-semibold text-[var(--color-text-primary)]">{step.title}</h3>
                                        <p className="text-xs text-[var(--color-text-muted)] mt-1 leading-relaxed">
                                            {step.body}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Block 3 — Response Time Commitment */}
                        <div className="bg-[rgba(74,124,255,0.06)] border border-[rgba(74,124,255,0.15)] rounded-2xl p-6">
                            <Clock className="w-5 h-5 text-[var(--color-accent-cta)] mb-3" aria-hidden="true" />
                            <h3 className="text-sm font-semibold text-[var(--color-text-primary)]">
                                48 Business Hour Response
                            </h3>
                            <p className="text-xs text-[var(--color-text-secondary)] mt-2 leading-relaxed">
                                We review every enquiry personally. If your project is a fit, you will hear from us within 48 business hours. If it is not, we will tell you that too.
                            </p>
                        </div>

                    </div>
                </div>
            </section>

            {/* ── SECTION 2 — Three Ways to Engage ── */}
            <AnimatedSection>
                <section className="py-20 relative w-full bg-[var(--color-bg-base)]">
                    <div className="max-w-6xl mx-auto px-6">
                        <p className="text-xs uppercase tracking-widest text-[var(--color-text-muted)] font-semibold mb-4">
                            Entry Points
                        </p>
                        <h2 className="text-3xl lg:text-4xl font-semibold text-[var(--color-text-primary)] mb-8">
                            Three Ways to Start.
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {[
                                {
                                    icon: FlaskConical,
                                    title: "Request a Pilot",
                                    body: "The fastest path to a production engagement. A fixed-scope, flat-rate pilot that proves the pipeline in your dashboard. Fee credited to first invoice.",
                                    ctaStr: "Start Here"
                                },
                                {
                                    icon: Video,
                                    title: "Book a Discovery Call",
                                    body: "A 20-minute video or async call to discuss your project, assess fit, and scope the engagement. No commitment required.",
                                    ctaStr: "Book a Call"
                                },
                                {
                                    icon: FileText,
                                    title: "Send a Project Brief",
                                    body: "Skip the call. Send us your annotation task description, data type, volume estimate, and timeline. We will respond with a scoping proposal within 48 hours.",
                                    ctaStr: "Send Brief"
                                }
                            ].map((card, idx) => {
                                const Icon = card.icon;
                                return (
                                    <AnimatedSection key={idx} delay={idx * 0.08} className="h-full">
                                        <div className="bg-[var(--color-bg-surface)] border border-[var(--color-border)] rounded-2xl p-6 h-full hover:bg-[var(--color-bg-elevated)] hover:border-[var(--color-border-hover)] transition-all duration-200">
                                            <Icon className="w-5 h-5 text-[var(--color-text-muted)] mb-4" aria-hidden="true" />
                                            <h3 className="text-base font-semibold text-[var(--color-text-primary)]">{card.title}</h3>
                                            <p className="text-sm text-[var(--color-text-secondary)] mt-2 leading-relaxed">
                                                {card.body}
                                            </p>
                                            <ScrollToFormButton label={card.ctaStr} />
                                        </div>
                                    </AnimatedSection>
                                )
                            })}
                        </div>
                    </div>
                </section>
            </AnimatedSection>

            {/* ── SECTION 3 — Response Commitment ── */}
            <AnimatedSection>
                <section className="py-20 relative w-full">
                    <div className="max-w-6xl mx-auto px-6">
                        <p className="text-xs uppercase tracking-widest text-[var(--color-text-muted)] font-semibold mb-4">
                            Our Commitment
                        </p>
                        <h2 className="text-3xl lg:text-4xl font-semibold text-[var(--color-text-primary)] mb-8">
                            What You Can Expect From Us.
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {[
                                {
                                    icon: Clock,
                                    title: "48-Hour Response",
                                    body: "Every enquiry reviewed personally and responded to within 48 business hours. No auto-replies. No ticket systems."
                                },
                                {
                                    icon: CheckCircle2,
                                    title: "Honest Assessment",
                                    body: "If your project is not a good fit for Aeterna Data, we will tell you clearly — and where possible suggest an alternative direction."
                                },
                                {
                                    icon: FileText,
                                    title: "Scoping Within 48hrs",
                                    body: "After a discovery call, a draft Statement of Work with estimated AHT and recommended approach within 48 hours."
                                },
                                {
                                    icon: Lock,
                                    title: "NDA Before Details",
                                    body: "If your enquiry involves sensitive project details, we execute the NDA before any project-specific information is shared."
                                }
                            ].map((card, idx) => {
                                const Icon = card.icon;
                                return (
                                    <AnimatedSection key={idx} delay={idx * 0.06} className="h-full">
                                        <div className="bg-[var(--color-bg-surface)] border border-[var(--color-border)] rounded-2xl p-6 h-full transition-all duration-150">
                                            <Icon className="w-5 h-5 text-[var(--color-text-muted)] mb-3" aria-hidden="true" />
                                            <h3 className="text-sm font-semibold text-[var(--color-text-primary)]">{card.title}</h3>
                                            <p className="text-sm text-[var(--color-text-secondary)] mt-2 leading-relaxed">
                                                {card.body}
                                            </p>
                                        </div>
                                    </AnimatedSection>
                                )
                            })}
                        </div>
                    </div>
                </section>
            </AnimatedSection>

            {/* ── SECTION 4 — Before You Write ── */}
            <AnimatedSection>
                <section className="py-20 relative w-full bg-[var(--color-bg-base)]">
                    <div className="max-w-6xl mx-auto px-6">
                        <p className="text-xs uppercase tracking-widest text-[var(--color-text-muted)] font-semibold mb-4">
                            Helpful to Know
                        </p>
                        <h2 className="text-3xl lg:text-4xl font-semibold text-[var(--color-text-primary)] mb-8">
                            Before You Get In Touch.
                        </h2>
                        <div className="text-[var(--color-text-secondary)] text-base leading-relaxed space-y-5 max-w-3xl mb-12">
                            <p>
                                A few things worth knowing before you submit your enquiry — to help us respond as usefully as possible.
                            </p>
                        </div>

                        <div className="flex flex-col">
                            {[
                                {
                                    title: "We are B2B only.",
                                    body: "Aeterna Data works exclusively with business clients. We do not provide annotation services to individuals or consumer projects."
                                },
                                {
                                    title: "Contracts are non-negotiable.",
                                    body: "Our MSA, NDA, and DPA are standard. We do not begin work without the full contract stack executed. If your procurement process cannot accommodate this, we are likely not a fit."
                                },
                                {
                                    title: "We do not compete on price alone.",
                                    body: "If your primary criteria is the lowest available rate, we are probably not the right partner. If quality, IAA measurement, legal accountability, and data sovereignty matter to your team, we would love to hear from you."
                                },
                                {
                                    title: "We respond in English.",
                                    body: "All client communication is conducted in English. Project briefs, scoping proposals, and contracts are all in English."
                                }
                            ].map((item, idx, arr) => (
                                <AnimatedSection key={idx} delay={idx * 0.05} className="w-full">
                                    <div className={`border-l-2 border-[var(--color-border)] pl-6 pb-6 ${idx !== arr.length - 1 ? 'mb-2' : ''}`}>
                                        <h3 className="text-sm font-semibold text-[var(--color-text-primary)]">{item.title}</h3>
                                        <p className="text-sm text-[var(--color-text-secondary)] mt-1 leading-relaxed">
                                            {item.body}
                                        </p>
                                    </div>
                                </AnimatedSection>
                            ))}
                        </div>
                    </div>
                </section>
            </AnimatedSection>
        </main>
    );
}
