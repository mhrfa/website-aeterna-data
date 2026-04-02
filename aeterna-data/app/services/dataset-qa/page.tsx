import type { Metadata } from 'next';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import AnimatedSection from '@/components/ui/AnimatedSection';
import StickyTableOfContents from '@/components/ui/StickyTableOfContents';

export const metadata: Metadata = {
    title: 'Dataset Validation & QA — Aeterna Data',
    description: 'Systematic quality audit for annotated image datasets. IAA measurement, label consistency review, error pattern detection, and structured quality reporting before model training.',
    robots: {
        index: true,
        follow: true,
    },
};

const tocItems = [
    { id: 'what-is-dataset-qa', label: 'What Is Dataset Validation' },
    { id: 'when-to-validate', label: 'When to Validate' },
    { id: 'what-we-audit', label: 'What We Audit' },
    { id: 'iaa-measurement', label: 'IAA Measurement' },
    { id: 'quality-report', label: 'Quality Report' },
    { id: 'workflow', label: 'Our Workflow' },
    { id: 'tools', label: 'Annotation Tools' },
    { id: 'how-to-start', label: 'How to Start' },
];

export default function DatasetQaPage() {
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
                        <span className="text-[var(--color-text-muted)]">Dataset QA</span>
                    </nav>

                    {/* Pre-heading Pill */}
                    <div
                        className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-8 border"
                        style={{ backgroundColor: "rgba(255,255,255,0.05)", borderColor: "rgba(255,255,255,0.10)" }}
                    >
                        <span className="text-[var(--color-text-muted)] text-xs font-semibold tracking-widest uppercase">
                            Dataset QA
                        </span>
                    </div>

                    {/* Headline */}
                    <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight leading-none text-[var(--color-text-primary)]">
                        Dataset Validation &amp; QA<br />for Annotated Image Datasets.
                    </h1>

                    {/* Subheadline */}
                    <p className="text-[var(--color-text-secondary)] text-lg lg:text-xl max-w-2xl mt-6">
                        Find the annotation errors before your model learns from them. IAA measurement, label consistency audit, and structured quality reporting on existing datasets.
                    </p>

                    {/* Stat Strip */}
                    <div className="grid grid-cols-2 gap-y-8 gap-x-4 sm:flex sm:flex-wrap justify-center items-center sm:gap-4 mt-10 font-mono text-sm text-center">
                        <div className="flex flex-col items-center text-center">
                            <span className="text-[var(--color-text-primary)] font-bold">IAA Measurement</span>
                            <span className="text-[var(--color-text-muted)] text-xs uppercase tracking-widest mt-1">Core Method</span>
                        </div>
                        <span className="text-[var(--color-border-subtle)] hidden sm:block">|</span>
                        <div className="flex flex-col items-center text-center">
                            <span className="text-[var(--color-text-primary)] font-bold">κ ≥ 0.80</span>
                            <span className="text-[var(--color-text-muted)] text-xs uppercase tracking-widest mt-1">Quality Threshold</span>
                        </div>
                        <span className="text-[var(--color-border-subtle)] hidden sm:block">|</span>
                        <div className="flex flex-col items-center text-center">
                            <span className="text-[var(--color-text-primary)] font-bold">48 Hours</span>
                            <span className="text-[var(--color-text-muted)] text-xs uppercase tracking-widest mt-1">Scoping Response</span>
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

                    {/* SECTION 1: What Is Dataset Validation? */}
                    <AnimatedSection>
                        <section id="what-is-dataset-qa">
                            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-[var(--color-text-primary)] mb-6">
                                What Is Dataset Validation?
                            </h2>
                            <div className="text-base leading-relaxed text-[var(--color-text-secondary)] space-y-4">
                                <p>
                                    Dataset validation is the systematic review of an annotated dataset before it is used for model training. It audits the dataset for label consistency errors, class distribution issues, systematic annotation mistakes, and guideline violations — and produces a structured report with specific findings and reannotation recommendations.
                                </p>
                                <p>
                                    Annotation errors are significantly cheaper to fix before training than after. A model trained on a corrupted dataset must be retrained from scratch once the errors are discovered — which may only happen after a failed evaluation or a production incident. Dataset validation catches these problems at the source.
                                </p>
                                <p>
                                    Aeterna Data&apos;s validation service measures inter-annotator agreement on existing datasets, identifies error patterns by class and by annotator, and delivers a structured quality report with specific reannotation recommendations. The report tells you exactly what is wrong, where it is, and how to fix it.
                                </p>
                            </div>
                        </section>
                    </AnimatedSection>

                    {/* SECTION 2: When to Validate */}
                    <AnimatedSection>
                        <section id="when-to-validate">
                            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-[var(--color-text-primary)] mb-6">
                                When to Validate
                            </h2>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {[
                                    {
                                        title: "Before First Training Run",
                                        body: "Validate a new dataset before the first training run to catch systematic annotation errors before they corrupt the baseline model."
                                    },
                                    {
                                        title: "After Crowd Annotation",
                                        body: "Crowd-sourced annotation frequently produces inconsistent labels across annotators. Validate before using crowd-labeled data in a production training pipeline."
                                    },
                                    {
                                        title: "Before Model Iteration",
                                        body: "When adding new data to an existing training set, validate the new data for consistency with the existing annotation standards before merging."
                                    },
                                    {
                                        title: "After Model Underperformance",
                                        body: "If a model performs below expectations on a specific class or scenario, dataset validation can identify whether annotation quality is a contributing cause."
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

                    {/* SECTION 3: What We Audit */}
                    <AnimatedSection>
                        <section id="what-we-audit">
                            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-[var(--color-text-primary)] mb-6">
                                What We Audit
                            </h2>

                            <div className="space-y-0">
                                {[
                                    {
                                        title: "Label Consistency",
                                        body: "Whether the same class label is applied consistently to the same type of object or image across the full dataset. Inconsistency at the class level is the most common source of annotation quality problems."
                                    },
                                    {
                                        title: "Boundary Accuracy (for detection and segmentation datasets)",
                                        body: "Whether bounding box or polygon boundaries are drawn consistently around objects of the same class. Loose boundaries, tight boundaries, and misaligned boundaries are each measured and reported by class."
                                    },
                                    {
                                        title: "Class Distribution",
                                        body: "Whether the class distribution in the annotated dataset reflects the actual distribution in the source data — or whether certain classes are systematically over- or under-labeled."
                                    },
                                    {
                                        title: "Systematic Annotator Errors",
                                        body: "Whether specific annotators are producing errors at a higher rate than others, and whether those errors follow a pattern — for example, consistently mislabeling a specific class or consistently drawing boundaries too loosely."
                                    },
                                    {
                                        title: "Guideline Violations",
                                        body: "Whether annotations violate the stated annotation guidelines — for example, annotating objects that should be skipped, or missing attributes that are required by the guidelines."
                                    },
                                    {
                                        title: "Edge Case Coverage",
                                        body: "Whether the dataset adequately represents the edge cases the model will encounter in deployment — and whether those edge cases are correctly annotated."
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

                    {/* SECTION 4: IAA Measurement on Existing Datasets */}
                    <AnimatedSection>
                        <section id="iaa-measurement">
                            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-[var(--color-text-primary)] mb-6">
                                IAA Measurement on Existing Datasets
                            </h2>
                            <div className="text-base leading-relaxed text-[var(--color-text-secondary)] space-y-4">
                                <p>
                                    Inter-annotator agreement measurement on an existing dataset works by having a second annotator label a sample of the data independently, then comparing the two sets of labels using Cohen&apos;s Kappa (for pairwise comparison) or Fleiss&apos; Kappa (for multi-annotator comparison).
                                </p>
                                <p>
                                    The IAA score tells you how consistent the original annotation is — not just overall, but by class and by annotator. A dataset might have high overall IAA but low IAA on a specific class that is critical to model performance. That class-level measurement is what drives the reannotation recommendation.
                                </p>
                            </div>

                            {/* IAA Interpretation Table */}
                            <div className="mt-8 overflow-hidden rounded-2xl border border-[var(--color-border)]">
                                <table className="w-full text-sm">
                                    <thead>
                                        <tr className="bg-[var(--color-bg-elevated)]">
                                            <th className="text-left px-6 py-4 font-semibold text-[var(--color-text-primary)] border-b border-[var(--color-border)]">κ Score</th>
                                            <th className="text-left px-6 py-4 font-semibold text-[var(--color-text-primary)] border-b border-[var(--color-border)]">Interpretation</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {[
                                            { score: "κ < 0.40", interpretation: "Poor — significant errors" },
                                            { score: "0.40 – 0.59", interpretation: "Moderate — review needed" },
                                            { score: "0.60 – 0.79", interpretation: "Substantial — minor issues" },
                                            { score: "κ ≥ 0.80", interpretation: "Strong — production ready" }
                                        ].map((row, idx) => (
                                            <tr key={idx} className="border-b border-[var(--color-border)] last:border-b-0">
                                                <td className="px-6 py-3.5 font-mono text-[var(--color-accent-cta)]">{row.score}</td>
                                                <td className="px-6 py-3.5 text-[var(--color-text-secondary)]">{row.interpretation}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </section>
                    </AnimatedSection>

                    {/* SECTION 5: Quality Report */}
                    <AnimatedSection>
                        <section id="quality-report">
                            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-[var(--color-text-primary)] mb-6">
                                Quality Report
                            </h2>
                            <p className="text-base leading-relaxed text-[var(--color-text-secondary)] mb-8">
                                Every dataset validation engagement delivers a structured quality report. The report is designed to give your engineering team a clear, actionable picture of the dataset&apos;s quality and exactly what needs to be fixed.
                            </p>

                            <div className="space-y-0">
                                {[
                                    {
                                        title: "Executive Summary",
                                        body: "Overall IAA score, total errors found, classes with quality issues, and overall reannotation recommendation — ready for technical and non-technical stakeholders."
                                    },
                                    {
                                        title: "IAA Analysis by Class",
                                        body: "Per-class Cohen's Kappa scores with interpretation, highlighting which classes are production-ready and which require reannotation."
                                    },
                                    {
                                        title: "Annotator Performance Analysis",
                                        body: "Per-annotator error rates and patterns, identifying whether quality issues are systematic across the dataset or concentrated in specific annotators."
                                    },
                                    {
                                        title: "Error Pattern Documentation",
                                        body: "Specific error types found, with annotated examples — showing what the error looks like and what the correct annotation should be."
                                    },
                                    {
                                        title: "Reannotation Recommendation",
                                        body: "Specific recommendation on which images, classes, or annotator batches require reannotation — with priority ranking by impact on model performance."
                                    },
                                    {
                                        title: "Guideline Revision Proposal",
                                        body: "Where annotation errors trace back to ambiguous guidelines, we propose specific guideline revisions to prevent the same errors in future annotation rounds."
                                    }
                                ].map((item, idx) => (
                                    <div key={idx} className="border-l-2 border-[var(--color-accent-cta)] pl-5 py-2 mb-6">
                                        <h3 className="text-sm font-semibold text-[var(--color-text-primary)]">{item.title}</h3>
                                        <p className="text-sm text-[var(--color-text-secondary)] mt-1 leading-relaxed">
                                            {item.body}
                                        </p>
                                    </div>
                                ))}
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
                                        body: "Share your annotated dataset, original annotation guidelines, and specific quality concerns if any. We scope the validation sample size and timeline."
                                    },
                                    {
                                        num: "02",
                                        title: "Pilot Phase",
                                        body: "We run IAA measurement on a validation sample, audit label consistency, and identify error patterns. Findings are reviewed before the full report is compiled."
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
                                        "V7 Darwin", "CSV/JSON/COCO Format",
                                        "Custom Pipeline"
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
                                        body: "Share your annotated dataset or a sample, your annotation guidelines, and the annotation format. Describe any specific quality concerns or classes you want prioritised in the audit.",
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
                            Ready to Audit Your Dataset?
                        </h2>
                        <p className="text-[var(--color-text-secondary)] text-lg mb-10 leading-relaxed max-w-2xl mx-auto">
                            IAA measurement on your existing annotations. Error patterns identified by class and annotator. Structured quality report with reannotation recommendations.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <Link
                                href="/contact"
                                className="bg-[var(--color-accent-cta)] text-white font-semibold px-8 py-3.5 rounded-lg hover:bg-[var(--color-accent-cta-hover)] transition-colors duration-200"
                            >
                                Request a Validation Audit
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
