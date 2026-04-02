import type { Metadata } from 'next';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import AnimatedSection from '@/components/ui/AnimatedSection';
import StickyTableOfContents from '@/components/ui/StickyTableOfContents';

export const metadata: Metadata = {
    title: 'Visual RLHF Evaluation — Aeterna Data',
    description: 'Human preference annotation for visual AI reward model training. Pairwise image ranking, quality rating, and safety classification for image generation models.',
    robots: {
        index: true,
        follow: true,
    },
};

const tocItems = [
    { id: 'what-is-visual-rlhf', label: 'What Is Visual RLHF' },
    { id: 'task-types', label: 'Task Types' },
    { id: 'use-cases', label: 'Use Cases' },
    { id: 'rubric-design', label: 'Rubric Design' },
    { id: 'quality-standard', label: 'Quality Standard' },
    { id: 'workflow', label: 'Our Workflow' },
    { id: 'tools', label: 'Annotation Tools' },
    { id: 'how-to-start', label: 'How to Start' },
];

export default function VisualRlhfPage() {
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
                        <span className="text-[var(--color-text-muted)]">Visual RLHF</span>
                    </nav>

                    {/* Pre-heading Pill */}
                    <div
                        className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-8 border"
                        style={{ backgroundColor: "rgba(255,255,255,0.05)", borderColor: "rgba(255,255,255,0.10)" }}
                    >
                        <span className="text-[var(--color-text-muted)] text-xs font-semibold tracking-widest uppercase">
                            Visual RLHF
                        </span>
                    </div>

                    {/* Headline */}
                    <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight leading-none text-[var(--color-text-primary)]">
                        Visual RLHF Evaluation<br />for Image Generation Models.
                    </h1>

                    {/* Subheadline */}
                    <p className="text-[var(--color-text-secondary)] text-lg lg:text-xl max-w-2xl mt-6">
                        Structured human preference annotation for training reward models on visual AI systems. Pairwise ranking, quality rating, and safety classification — with rubric consistency monitoring across every batch.
                    </p>

                    {/* Stat Strip */}
                    <div className="grid grid-cols-2 gap-y-8 gap-x-4 sm:flex sm:flex-wrap justify-center items-center sm:gap-4 mt-10 font-mono text-sm text-center">
                        <div className="flex flex-col items-center text-center">
                            <span className="text-[var(--color-text-primary)] font-bold">Pairwise + Rating</span>
                            <span className="text-[var(--color-text-muted)] text-xs uppercase tracking-widest mt-1">Task Types</span>
                        </div>
                        <span className="text-[var(--color-border-subtle)] hidden sm:block">|</span>
                        <div className="flex flex-col items-center text-center">
                            <span className="text-[var(--color-text-primary)] font-bold">Rubric-Based</span>
                            <span className="text-[var(--color-text-muted)] text-xs uppercase tracking-widest mt-1">Structured Evaluation</span>
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

                    {/* SECTION 1: What Is Visual RLHF Evaluation? */}
                    <AnimatedSection>
                        <section id="what-is-visual-rlhf">
                            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-[var(--color-text-primary)] mb-6">
                                What Is Visual RLHF Evaluation?
                            </h2>
                            <div className="text-base leading-relaxed text-[var(--color-text-secondary)] space-y-4">
                                <p>
                                    Reinforcement Learning from Human Feedback (RLHF) is the process of training a reward model on human preference judgments — then using that reward model to fine-tune an AI system toward outputs that humans prefer. For image generation models, this means collecting human judgments about which AI-generated images are better, and why.
                                </p>
                                <p>
                                    Visual RLHF evaluation requires annotators to make structured judgment calls about image quality — not just pick a favourite, but evaluate specific dimensions such as prompt adherence, visual coherence, aesthetic quality, and safety. The consistency of these judgments directly determines the quality of the reward model signal.
                                </p>
                                <p>
                                    Aeterna Data approaches visual RLHF evaluation as a precision annotation task, not a subjective rating exercise. Structured rubrics define exactly what each rating dimension means. Rubric consistency is monitored across batches to detect and correct annotator drift before it affects the reward model.
                                </p>
                            </div>
                        </section>
                    </AnimatedSection>

                    {/* SECTION 2: Task Types */}
                    <AnimatedSection>
                        <section id="task-types">
                            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-[var(--color-text-primary)] mb-6">
                                Task Types
                            </h2>

                            <div className="grid grid-cols-1 gap-4">
                                {[
                                    {
                                        title: "Pairwise Preference Ranking",
                                        body: "Annotators are shown two AI-generated images produced from the same prompt and select the preferred image on each evaluation dimension. The pairwise format reduces the complexity of the judgment — comparing two options is more reliable than assigning an absolute score.",
                                        dimensions: "Prompt adherence · Visual coherence · Aesthetic quality · Safety"
                                    },
                                    {
                                        title: "Absolute Quality Rating",
                                        body: "Annotators assign a score to a single image on a defined scale for each evaluation dimension. Used when pairwise comparison is not practical — for example, when the dataset is too large for all-pairs comparison or when absolute thresholds need to be established.",
                                        dimensions: "Per-dimension 1-5 scale · Rubric-anchored · Documented examples"
                                    },
                                    {
                                        title: "Safety Classification",
                                        body: "Annotators classify AI-generated images against defined safety categories — for example, whether an image contains harmful content, follows platform guidelines, or meets content policy requirements.",
                                        dimensions: "Binary safe/unsafe · Multi-category policy classification · Severity rating"
                                    }
                                ].map((card, idx) => (
                                    <AnimatedSection key={idx} delay={idx * 0.08}>
                                        <div className="bg-[var(--color-bg-surface)] border border-[var(--color-border)] rounded-2xl p-6 transition-all duration-150">
                                            <h3 className="text-base font-semibold text-[var(--color-text-primary)]">
                                                {card.title}
                                            </h3>
                                            <p className="text-sm leading-relaxed mt-2 text-[var(--color-text-secondary)]">
                                                {card.body}
                                            </p>
                                            <p className="font-mono text-xs text-[var(--color-accent-cta)] mt-4">
                                                {card.dimensions}
                                            </p>
                                        </div>
                                    </AnimatedSection>
                                ))}
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
                                        title: "Text-to-Image Models",
                                        body: "Preference data for reward model training on image generation systems such as diffusion models. Evaluating prompt adherence, visual quality, and safety across generated outputs."
                                    },
                                    {
                                        title: "Image Editing Models",
                                        body: "Evaluation of AI-powered image editing — comparing edited outputs against the original and the editing instruction for accuracy and quality."
                                    },
                                    {
                                        title: "Image-to-Image Translation",
                                        body: "Quality evaluation for style transfer, super-resolution, and domain adaptation models — comparing outputs against ground truth or reference images."
                                    },
                                    {
                                        title: "Content Policy Compliance",
                                        body: "Safety classification for image generation systems — identifying outputs that violate content policies before they reach end users."
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

                    {/* SECTION 4: Rubric Design */}
                    <AnimatedSection>
                        <section id="rubric-design">
                            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-[var(--color-text-primary)] mb-6">
                                Rubric Design
                            </h2>
                            <div className="text-base leading-relaxed text-[var(--color-text-secondary)] space-y-4">
                                <p>
                                    The quality of RLHF preference data depends almost entirely on how well the evaluation rubric is designed. A vague rubric produces inconsistent judgments. An inconsistent dataset produces a noisy reward model. A noisy reward model produces a poorly aligned AI system.
                                </p>
                                <p>
                                    Aeterna Data works with clients to define or refine the evaluation rubric before the pilot begins. Each dimension is given a precise definition, a scale, and annotated examples of what each scale point looks like in practice. This is done before a single image is evaluated.
                                </p>
                            </div>

                            <div className="space-y-0 mt-8">
                                {[
                                    {
                                        title: "Dimension Decomposition",
                                        body: "Complex quality judgments are broken into specific, independently evaluable dimensions. 'Good image' is not a rubric dimension. 'Prompt adherence — does the image contain all the elements described in the prompt' is a rubric dimension."
                                    },
                                    {
                                        title: "Scale Anchoring",
                                        body: "Every point on the rating scale is anchored with a written definition and a visual example. Annotators do not interpret the scale — they apply it. This is the primary mechanism for reducing rubric drift across annotators and batches."
                                    },
                                    {
                                        title: "Drift Monitoring",
                                        body: "Rubric consistency is monitored across production batches. If IAA on a specific dimension drops below threshold, the dimension is reviewed, the rubric is clarified, and the affected batch is reworked."
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

                    {/* SECTION 5: Quality Standard */}
                    <AnimatedSection>
                        <section id="quality-standard">
                            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-[var(--color-text-primary)] mb-6">
                                Quality Standard
                            </h2>
                            <div className="text-base leading-relaxed text-[var(--color-text-secondary)] space-y-4">
                                <p>
                                    Every visual RLHF evaluation batch delivered by Aeterna Data is measured for inter-annotator agreement before delivery. IAA is not a target — it is a threshold. Batches that do not meet the threshold are reworked before the client receives them.
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
                                        body: "You share your dataset sample, object classes, and output format requirements. We scope the pilot — sample size, timeline, and deliverables — and confirm before work begins."
                                    },
                                    {
                                        num: "02",
                                        title: "Pilot Phase",
                                        body: "We evaluate a representative sample of your image pairs using the agreed rubric. IAA is measured per dimension. Any dimension with low agreement is reviewed and the rubric is clarified before production begins."
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
                                        "Scale AI", "Surge AI", "Argilla",
                                        "Label Studio", "Custom Platform"
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
                                        body: "Share your image generation model outputs, evaluation dimensions, and any existing rubric or content policy. We will review and propose a pilot scope within 48 hours.",
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
                            Ready to Build Your Visual RLHF Dataset?
                        </h2>
                        <p className="text-[var(--color-text-secondary)] text-lg mb-10 leading-relaxed max-w-2xl mx-auto">
                            Rubric designed and validated in the pilot. IAA measured per dimension. Consistent preference signal on every batch.
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
