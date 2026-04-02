import type { Metadata } from 'next';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import AnimatedSection from '@/components/ui/AnimatedSection';
import StickyTableOfContents from '@/components/ui/StickyTableOfContents';

export const metadata: Metadata = {
    title: 'Image Classification — Aeterna Data',
    description: 'Structured image classification annotation for computer vision datasets. Single-label and multi-label support, taxonomy validation, IAA measurement on every batch.',
    robots: {
        index: true,
        follow: true,
    },
};

const tocItems = [
    { id: 'what-is-classification', label: 'What Is Image Classification' },
    { id: 'label-types', label: 'Label Types' },
    { id: 'use-cases', label: 'Use Cases' },
    { id: 'taxonomy-validation', label: 'Taxonomy Validation' },
    { id: 'quality-standard', label: 'Quality Standard' },
    { id: 'workflow', label: 'Our Workflow' },
    { id: 'tools', label: 'Annotation Tools' },
    { id: 'how-to-start', label: 'How to Start' },
];

export default function ClassificationPage() {
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

            {/* ── PAGE HERO (FULL WIDTH) ── */}
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
                        <Link
                            href="/services"
                            className="text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] transition-colors"
                        >
                            Services
                        </Link>
                        <ChevronRight className="w-3.5 h-3.5 text-[var(--color-text-muted)]" />
                        <span className="text-[var(--color-text-muted)]">Classification</span>
                    </nav>

                    {/* Pre-heading Pill */}
                    <div
                        className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-8 border"
                        style={{ backgroundColor: "rgba(255,255,255,0.05)", borderColor: "rgba(255,255,255,0.10)" }}
                    >
                        <span className="text-[var(--color-text-muted)] text-xs font-semibold tracking-widest uppercase">
                            Classification
                        </span>
                    </div>

                    {/* Headline */}
                    <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight leading-none text-[var(--color-text-primary)]">
                        Image Classification Annotation<br />for Structured Visual Datasets.
                    </h1>

                    {/* Subheadline */}
                    <p className="text-[var(--color-text-secondary)] text-lg lg:text-xl max-w-2xl mt-6">
                        Single-label and multi-label image categorisation with consistent taxonomy application. Pilot phase validates the category definitions before production annotation begins.
                    </p>

                    {/* Stat Strip */}
                    <div className="grid grid-cols-2 gap-y-8 gap-x-4 sm:flex sm:flex-wrap justify-center items-center sm:gap-4 mt-10 font-mono text-sm text-center">
                        <div className="flex flex-col items-center text-center">
                            <span className="text-[var(--color-text-primary)] font-bold">Single + Multi</span>
                            <span className="text-[var(--color-text-muted)] text-xs uppercase tracking-widest mt-1">Label Types</span>
                        </div>
                        <span className="text-[var(--color-border-subtle)] hidden sm:block">|</span>
                        <div className="flex flex-col items-center text-center">
                            <span className="text-[var(--color-text-primary)] font-bold">Taxonomy</span>
                            <span className="text-[var(--color-text-muted)] text-xs uppercase tracking-widest mt-1">Validated in Pilot</span>
                        </div>
                        <span className="text-[var(--color-border-subtle)] hidden sm:block">|</span>
                        <div className="flex flex-col items-center text-center">
                            <span className="text-[var(--color-text-primary)] font-bold">κ ≥ 0.80</span>
                            <span className="text-[var(--color-text-muted)] text-xs uppercase tracking-widest mt-1">IAA Standard</span>
                        </div>
                        <span className="text-[var(--color-border-subtle)] hidden sm:block">|</span>
                        <div className="flex flex-col items-center text-center">
                            <span className="text-[var(--color-text-primary)] font-bold">Flat Rate</span>
                            <span className="text-[var(--color-text-muted)] text-xs uppercase tracking-widest mt-1">Pilot Entry</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── TWO-COLUMN LAYOUT ── */}
            <div className="max-w-7xl mx-auto px-6 lg:grid lg:grid-cols-[256px_1fr] lg:gap-16 pt-12 pb-32 w-full">

                {/* LEFT SIDEBAR (Sticky TOC) */}
                <aside className="hidden lg:block lg:sticky lg:top-24 lg:self-start lg:h-[calc(100vh-6rem)] lg:overflow-y-auto">
                    <StickyTableOfContents items={tocItems} />
                </aside>

                {/* MAIN CONTENT */}
                <div className="min-w-0 space-y-24 max-w-3xl">

                    {/* SECTION 1: What Is Image Classification? */}
                    <AnimatedSection>
                        <section id="what-is-classification">
                            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-[var(--color-text-primary)] mb-6">
                                What Is Image Classification?
                            </h2>
                            <div className="text-base leading-relaxed text-[var(--color-text-secondary)] space-y-4">
                                <p>
                                    Image classification is the task of assigning one or more category labels to an image from a predefined taxonomy. It is the foundation of many computer vision applications — from content moderation systems that categorise what appears in an image, to medical AI systems that classify scan types, to e-commerce systems that tag products by category.
                                </p>
                                <p>
                                    The quality challenge in classification annotation is taxonomy consistency. When a category definition is ambiguous — when annotators disagree about whether an image belongs to category A or category B — the resulting labels introduce noise into the training signal. This is particularly problematic in multi-label tasks where multiple categories must be applied correctly to the same image.
                                </p>
                                <p>
                                    Aeterna Data addresses this through taxonomy validation during the pilot phase. Before production annotation begins, we annotate a representative sample and measure category-level IAA. Any category with low agreement is reviewed, the definition is clarified, and the guideline is updated before the full dataset is labeled.
                                </p>
                            </div>
                        </section>
                    </AnimatedSection>

                    {/* SECTION 2: Label Types */}
                    <AnimatedSection>
                        <section id="label-types">
                            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-[var(--color-text-primary)] mb-6">
                                Label Types
                            </h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="bg-[var(--color-bg-surface)] border border-[var(--color-border)] rounded-2xl p-6">
                                    <h3 className="text-base font-semibold text-[var(--color-text-primary)]">Single-Label Classification</h3>
                                    <p className="text-sm text-[var(--color-text-secondary)] mt-2 leading-relaxed">
                                        Each image receives exactly one category label from the taxonomy. The image belongs to one class and only one class. The annotation task is to identify which class is correct.
                                    </p>
                                    <p className="text-xs text-[var(--color-text-muted)] font-mono mt-4">
                                        Examples: Disease classification in medical imaging, scene type classification, product category assignment.
                                    </p>
                                </div>
                                <div className="bg-[var(--color-bg-surface)] border border-[var(--color-border)] rounded-2xl p-6">
                                    <h3 className="text-base font-semibold text-[var(--color-text-primary)]">Multi-Label Classification</h3>
                                    <p className="text-sm text-[var(--color-text-secondary)] mt-2 leading-relaxed">
                                        Each image can receive multiple category labels simultaneously. An image might be labeled as both &apos;outdoor&apos; and &apos;vehicle&apos; and &apos;nighttime&apos; at the same time. Each label is applied independently.
                                    </p>
                                    <p className="text-xs text-[var(--color-text-muted)] font-mono mt-4">
                                        Examples: Content tagging, attribute labeling, multi-condition medical classification.
                                    </p>
                                </div>
                            </div>
                        </section>
                    </AnimatedSection>

                    {/* SECTION 3: Use Cases */}
                    <AnimatedSection>
                        <section id="use-cases">
                            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-[var(--color-text-primary)] mb-6">
                                Use Cases
                            </h2>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {[
                                    {
                                        title: "Medical Imaging",
                                        body: "Scan type classification, disease category assignment, and severity level labeling for diagnostic AI training."
                                    },
                                    {
                                        title: "Content Moderation",
                                        body: "Safe/unsafe content classification, policy category labeling, and severity rating for content moderation systems."
                                    },
                                    {
                                        title: "E-commerce",
                                        body: "Product category assignment, attribute tagging, and visual search training for retail AI systems."
                                    },
                                    {
                                        title: "Document Analysis",
                                        body: "Document type classification, form category labeling, and layout type assignment for document AI."
                                    },
                                    {
                                        title: "Agriculture",
                                        body: "Crop type, disease type, and growth stage classification in aerial and ground-level imagery."
                                    },
                                    {
                                        title: "Remote Sensing",
                                        body: "Land use category, weather condition, and scene type classification in satellite imagery datasets."
                                    }
                                ].map((card, idx) => (
                                    <AnimatedSection key={idx} delay={idx * 0.08} className="h-full">
                                        <div className="bg-[var(--color-bg-surface)] border border-[var(--color-border)] rounded-2xl p-6 h-full transition-all duration-150">
                                            <h3 className="text-base font-semibold text-[var(--color-text-primary)]">
                                                {card.title}
                                            </h3>
                                            <p className="text-sm leading-relaxed mt-2 text-[var(--color-text-secondary)]">
                                                {card.body}
                                            </p>
                                        </div>
                                    </AnimatedSection>
                                ))}
                            </div>
                        </section>
                    </AnimatedSection>

                    {/* SECTION 4: Taxonomy Validation */}
                    <AnimatedSection>
                        <section id="taxonomy-validation">
                            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-[var(--color-text-primary)] mb-6">
                                Taxonomy Validation
                            </h2>
                            <div className="text-base leading-relaxed text-[var(--color-text-secondary)] space-y-4">
                                <p>
                                    The most common cause of low-quality classification datasets is an ambiguous taxonomy. Category definitions that seem clear in isolation often produce disagreement when annotators encounter edge cases — images that could plausibly belong to two categories, or images that do not clearly fit any category.
                                </p>
                                <p>
                                    Aeterna Data&apos;s pilot phase is specifically designed to surface these problems before they corrupt a full dataset. During the pilot, we annotate a sample that includes representative edge cases, measure inter-annotator agreement at the category level, and identify any category with agreement below threshold.
                                </p>
                            </div>

                            <div className="space-y-0 mt-8">
                                {[
                                    {
                                        title: "Edge Case Identification",
                                        body: "We identify the image types most likely to cause category disagreement and include them deliberately in the pilot sample."
                                    },
                                    {
                                        title: "Category-Level IAA Measurement",
                                        body: "Agreement is measured per category, not just overall. A category with low IAA is flagged individually — the rest of the taxonomy proceeds to production."
                                    },
                                    {
                                        title: "Guideline Update Before Production",
                                        body: "Any ambiguous category receives an updated definition with annotated examples before production annotation begins. The update is documented and applied consistently."
                                    }
                                ].map((item, idx) => (
                                    <div key={idx} className="border-l-2 border-[var(--color-border)] pl-5 py-2 mb-6">
                                        <h3 className="text-sm font-semibold text-[var(--color-text-primary)]">{item.title}</h3>
                                        <p className="text-sm text-[var(--color-text-secondary)] mt-1 leading-relaxed">
                                            {item.body}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </AnimatedSection>

                    {/* SECTION 5: Quality Standard */}
                    <AnimatedSection>
                        <section id="quality-standard">
                            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-[var(--color-text-primary)] mb-6">
                                Quality Standard
                            </h2>
                            <div className="text-base leading-relaxed text-[var(--color-text-secondary)] space-y-4">
                                <p>
                                    Every classification annotation batch delivered by Aeterna Data is measured for inter-annotator agreement before delivery. IAA is not a target — it is a threshold. Batches that do not meet the threshold are reworked before the client receives them.
                                </p>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
                                    <div className="bg-[rgba(74,124,255,0.06)] border border-[rgba(74,124,255,0.15)] rounded-2xl p-6 flex flex-col justify-center">
                                        <div className="text-3xl font-mono font-bold text-[var(--color-accent-cta)] mb-2" style={{ textShadow: "0 0 20px rgba(74,124,255,0.4)" }}>
                                            κ ≥ 0.80
                                        </div>
                                        <h3 className="text-base font-semibold text-[var(--color-text-primary)]">Cohen&apos;s Kappa</h3>
                                        <p className="text-sm text-[var(--color-text-secondary)] mt-1">
                                            Pairwise IAA between two annotators on the same image set. Applied on every batch.
                                        </p>
                                    </div>
                                    <div className="bg-[rgba(20,184,166,0.06)] border border-[rgba(20,184,166,0.15)] rounded-2xl p-6 flex flex-col justify-center">
                                        <div className="text-3xl font-mono font-bold mb-2" style={{ color: "#2dd4bf", textShadow: "0 0 20px rgba(45,212,191,0.4)" }}>
                                            κ ≥ 0.75
                                        </div>
                                        <h3 className="text-base font-semibold text-[var(--color-text-primary)]">Fleiss&apos; Kappa</h3>
                                        <p className="text-sm text-[var(--color-text-secondary)] mt-1">
                                            Multi-annotator IAA across three or more annotators. Applied on complex multi-class tasks.
                                        </p>
                                    </div>
                                </div>

                                <div className="bg-[rgba(74,124,255,0.06)] border border-[rgba(74,124,255,0.15)] rounded-xl p-5 mt-6">
                                    <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                                        Every batch delivery includes a quality report: IAA scores by class, box count, annotator distribution, and any deviation notes. No dataset delivered without the quality documentation.
                                    </p>
                                </div>
                            </div>
                        </section>
                    </AnimatedSection>

                    {/* SECTION 6: Our Workflow */}
                    <AnimatedSection>
                        <section id="workflow">
                            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-[var(--color-text-primary)] mb-6">
                                Our Workflow
                            </h2>

                            <div className="space-y-4">
                                {[
                                    {
                                        num: "01",
                                        title: "Project Brief & Scoping",
                                        body: "Share your image dataset, category taxonomy, label type (single or multi-label), and any existing annotation guidelines. We scope the pilot — sample size, timeline, and deliverables — and confirm before work begins."
                                    },
                                    {
                                        num: "02",
                                        title: "Pilot Phase",
                                        body: "We annotate a representative sample of your dataset following the agreed guidelines. IAA is measured. The quality report is delivered. You review before production begins."
                                    },
                                    {
                                        num: "03",
                                        title: "Production Annotation",
                                        body: "Full dataset annotation following the validated workflow. IAA measured on every batch. Rework at no cost for any batch below threshold."
                                    },
                                    {
                                        num: "04",
                                        title: "Delivery & Documentation",
                                        body: "Annotated dataset delivered in your specified format with a complete quality report — IAA scores, class distribution, and annotator notes."
                                    }
                                ].map((stage, idx) => (
                                    <AnimatedSection key={idx} delay={idx * 0.06}>
                                        <div className="bg-[var(--color-bg-surface)] border border-[var(--color-border)] rounded-2xl p-6 relative overflow-hidden z-10">
                                            <div className="absolute top-0 right-0 -mt-4 -mr-2 font-mono text-7xl font-bold text-[rgba(255,255,255,0.03)] -z-10 select-none pointer-events-none">
                                                {stage.num}
                                            </div>
                                            <h3 className="text-base font-semibold text-[var(--color-text-primary)]">{stage.title}</h3>
                                            <p className="text-sm text-[var(--color-text-secondary)] mt-2 leading-relaxed">
                                                {stage.body}
                                            </p>
                                        </div>
                                    </AnimatedSection>
                                ))}
                            </div>
                        </section>
                    </AnimatedSection>

                    {/* SECTION 7: Annotation Tools */}
                    <AnimatedSection>
                        <section id="tools">
                            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-[var(--color-text-primary)] mb-6">
                                Annotation Tools
                            </h2>
                            <div className="text-base leading-relaxed text-[var(--color-text-secondary)] space-y-4">
                                <p>
                                    Aeterna Data works with the annotation platform your team already uses. We do not require you to adopt a specific tool. If you do not have a platform, we can advise on setup based on your task type and scale.
                                </p>

                                <div className="mt-6 flex flex-wrap gap-2">
                                    {[
                                        "CVAT", "Label Studio", "Roboflow",
                                        "Scale AI", "V7 Darwin", "Supervisely",
                                        "Custom Platform"
                                    ].map((tag, idx) => (
                                        <span key={idx} className="inline-flex items-center border border-[var(--color-border)] text-xs text-[var(--color-text-muted)] px-3 py-1 rounded-full">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </section>
                    </AnimatedSection>

                    {/* SECTION 8: How to Start */}
                    <AnimatedSection>
                        <section id="how-to-start">
                            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-[var(--color-text-primary)] mb-6">
                                How to Start
                            </h2>

                            <div className="flex flex-col">
                                {[
                                    {
                                        badge: "Step 01",
                                        title: "Send a Project Brief",
                                        body: "Share your dataset sample and category taxonomy. If you do not have a taxonomy yet, describe what you need the model to classify and we will advise on category design.",
                                        ctaStr: "Send Brief",
                                        ctaHref: "/contact"
                                    },
                                    {
                                        badge: "Step 02",
                                        title: "Receive a Pilot Proposal",
                                        body: "We send a scoped pilot proposal within 48 hours — sample size, timeline, flat-rate pilot fee, and deliverables."
                                    },
                                    {
                                        badge: "Step 03",
                                        title: "NDA and DPA Signed",
                                        body: "Before any data is shared, NDA and Data Processing Agreement are signed. Your dataset stays confidential."
                                    },
                                    {
                                        badge: "Step 04",
                                        title: "Pilot Begins",
                                        body: "Annotation starts inside your platform. IAA report delivered with the pilot dataset. Production follows on your confirmation."
                                    }
                                ].map((step, idx, arr) => (
                                    <div key={idx} className="flex flex-col gap-2">
                                        <div className="bg-[var(--color-bg-surface)] border border-[var(--color-border)] rounded-2xl p-6 md:p-8 flex flex-col md:flex-row gap-6 relative z-10 transition-all duration-200">
                                            <div className="md:w-1/4 shrink-0">
                                                <span className="text-xs font-mono uppercase tracking-widest text-[var(--color-text-white)] bg-[var(--color-accent-cta)] px-3 py-1 rounded-full inline-block">
                                                    {step.badge}
                                                </span>
                                            </div>
                                            <div className="md:w-3/4">
                                                <h3 className="text-xl md:text-2xl font-bold text-[var(--color-text-primary)] mb-3">{step.title}</h3>
                                                <p className="text-[var(--color-text-secondary)] leading-relaxed text-sm md:text-base mb-4">
                                                    {step.body}
                                                </p>
                                                {step.ctaStr && step.ctaHref && (
                                                    <Link href={step.ctaHref} className="text-sm font-semibold text-[var(--color-accent-cta)] hover:text-[var(--color-text-primary)] transition-colors inline-flex items-center gap-1">
                                                        {step.ctaStr} <ChevronRight className="w-4 h-4" />
                                                    </Link>
                                                )}
                                            </div>
                                        </div>
                                        {idx !== arr.length - 1 && (
                                            <div className="w-0.5 h-6 border-l-2 border-dashed border-[var(--color-border)] ml-14 md:ml-20 opacity-50 relative -mt-3 -mb-3 z-0" />
                                        )}
                                    </div>
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
                            Ready to Classify Your Image Dataset?
                        </h2>
                        <p className="text-[var(--color-text-secondary)] text-lg mb-10 leading-relaxed max-w-2xl mx-auto">
                            Taxonomy validated in the pilot. Category-level IAA measured. Quality report on every batch.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <Link
                                href="/contact"
                                className="bg-[var(--color-accent-cta)] text-white font-semibold px-8 py-3.5 rounded-lg hover:bg-[var(--color-accent-cta-hover)] transition-colors duration-200"
                            >
                                Request a Pilot
                            </Link>
                            <Link
                                href="/services"
                                className="border border-[var(--color-border-subtle)] text-[var(--color-text-secondary)] px-8 py-3.5 rounded-lg hover:border-[var(--color-border-hover)] hover:text-[var(--color-text-primary)] transition-all duration-200"
                            >
                                See All Services
                            </Link>
                        </div>
                    </div>
                </section>
            </AnimatedSection>
        </main>
    );
}
