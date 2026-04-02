import type { Metadata } from 'next';
import Link from 'next/link';
import { ChevronRight, BoxSelect, Layers, Tag, GitCompare, ShieldCheck, ArrowRight, CheckCircle2 } from 'lucide-react';
import AnimatedSection from '@/components/ui/AnimatedSection';

export const metadata: Metadata = {
    title: 'Services — Aeterna Data',
    description: 'Five core annotation services for computer vision and visual RLHF. Bounding box, segmentation, classification, visual RLHF evaluation, and dataset QA — all measured by IAA.',
    robots: {
        index: true,
        follow: true,
    },
};

export default function ServicesIndexPage() {
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

            {/* ── PAGE HERO ── */}
            <section className="relative min-h-[60vh] flex flex-col items-center justify-center pt-32 pb-16 text-center w-full">
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
                        <span className="text-[var(--color-text-muted)]">Services</span>
                    </nav>

                    {/* Pre-heading Pill */}
                    <div
                        className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-8 border"
                        style={{ backgroundColor: "rgba(255,255,255,0.05)", borderColor: "rgba(255,255,255,0.10)" }}
                    >
                        <span className="text-[var(--color-text-muted)] text-xs font-semibold tracking-widest uppercase">
                            Core Competencies
                        </span>
                    </div>

                    {/* Headline */}
                    <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight leading-none text-[var(--color-text-primary)] mx-auto">
                        Five Services.<br />One Quality Standard.
                    </h1>

                    {/* Subheadline */}
                    <p className="text-[var(--color-text-secondary)] text-lg lg:text-xl max-w-2xl mx-auto mt-6">
                        Aeterna Data specializes in computer vision annotation and visual AI evaluation. We use a consistent workflow and follow the IAA quality standard, measuring and reporting results for each batch.
                    </p>
                </div>
            </section>

            {/* ── STAT STRIP ── */}
            <AnimatedSection>
                <section className="py-12 border-t border-b border-[var(--color-border)] w-full bg-[var(--color-bg-base)]">
                    <div className="max-w-5xl mx-auto px-6">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                            <div>
                                <div className="text-3xl lg:text-4xl font-bold text-[var(--color-text-primary)] font-mono">5</div>
                                <div className="text-sm text-[var(--color-text-muted)] mt-1 uppercase tracking-wide">Services</div>
                            </div>
                            <div>
                                <div className="text-3xl lg:text-4xl font-bold text-[var(--color-text-primary)] font-mono">κ ≥ 0.80</div>
                                <div className="text-sm text-[var(--color-text-muted)] mt-1 uppercase tracking-wide">IAA Floor</div>
                            </div>
                            <div>
                                <div className="text-3xl lg:text-4xl font-bold text-[var(--color-text-primary)] font-mono">Flat Rate</div>
                                <div className="text-sm text-[var(--color-text-muted)] mt-1 uppercase tracking-wide">Pilot Entry</div>
                            </div>
                            <div>
                                <div className="text-3xl lg:text-4xl font-bold text-[var(--color-text-primary)] font-mono">CV + RLHF</div>
                                <div className="text-sm text-[var(--color-text-muted)] mt-1 uppercase tracking-wide">Specialisation</div>
                            </div>
                        </div>
                    </div>
                </section>
            </AnimatedSection>

            {/* ── SECTION 1: Services Grid ── */}
            <AnimatedSection>
                <section className="py-20 relative w-full bg-[var(--color-bg-base)]">
                    <div className="max-w-5xl mx-auto px-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                            {/* Service 1: Bounding Box Annotation */}
                            <AnimatedSection delay={0.10}>
                                <div className="group bg-[var(--color-bg-surface)] border border-[var(--color-border)] rounded-2xl p-8 hover:bg-[var(--color-bg-elevated)] hover:border-[var(--color-border-hover)] transition-all duration-300 flex flex-col h-full relative overflow-hidden">
                                    <div className="absolute top-0 right-0 -mt-6 -mr-4 font-mono text-8xl font-bold text-[rgba(255,255,255,0.02)] -z-10 select-none pointer-events-none transition-transform duration-500 group-hover:scale-110">
                                        01
                                    </div>

                                    <div className="flex items-center gap-3 mb-6">
                                        <BoxSelect className="w-8 h-8 text-[var(--color-text-muted)] group-hover:text-[var(--color-accent-cta)] transition-colors duration-300" aria-hidden="true" />
                                        <span className="text-xs border border-[var(--color-border-subtle)] bg-[rgba(255,255,255,0.02)] text-[var(--color-text-muted)] px-2.5 py-1 rounded-md font-semibold uppercase tracking-wider">
                                            Object Detection
                                        </span>
                                    </div>

                                    <h3 className="text-2xl font-bold text-[var(--color-text-primary)] mb-3">
                                        Bounding Box Annotation
                                    </h3>

                                    <p className="text-sm text-[var(--color-accent-cta)] mb-4 font-medium">
                                        We deliver accurate object detection labeling for production-ready computer vision models.
                                    </p>

                                    <p className="text-base text-[var(--color-text-secondary)] leading-relaxed mb-4">
                                        Bounding box annotation is the foundation of object detection training. At Aeterna Data, we label each object with clear, class-specific guidelines. This ensures that every annotator follows the same rules for each object type across the dataset.
                                    </p>

                                    <p className="text-base text-[var(--color-text-secondary)] leading-relaxed mb-6">
                                        We offer standard output formats like COCO JSON and YOLO TXT. Every batch comes with an IAA quality report that shows our annotators&apos; Cohen&apos;s Kappa scores.
                                    </p>

                                    <div className="flex flex-wrap gap-2 mb-6">
                                        <span className="text-xs border border-[var(--color-border-subtle)] bg-[rgba(255,255,255,0.02)] text-[var(--color-text-secondary)] px-2.5 py-1 rounded-md">2D Bounding Box</span>
                                        <span className="text-xs border border-[var(--color-border-subtle)] bg-[rgba(255,255,255,0.02)] text-[var(--color-text-secondary)] px-2.5 py-1 rounded-md">Multi-Class</span>
                                        <span className="text-xs border border-[var(--color-border-subtle)] bg-[rgba(255,255,255,0.02)] text-[var(--color-text-secondary)] px-2.5 py-1 rounded-md">COCO Format</span>
                                        <span className="text-xs border border-[var(--color-border-subtle)] bg-[rgba(255,255,255,0.02)] text-[var(--color-text-secondary)] px-2.5 py-1 rounded-md">YOLO Format</span>
                                    </div>

                                    <div className="space-y-2 mb-8">
                                        <div className="flex items-start gap-2">
                                            <CheckCircle2 className="w-4 h-4 text-[var(--color-accent-cta)] mt-0.5 shrink-0" />
                                            <span className="text-sm text-[var(--color-text-secondary)]">Multi-class object labeling with per-class annotation guidelines</span>
                                        </div>
                                        <div className="flex items-start gap-2">
                                            <CheckCircle2 className="w-4 h-4 text-[var(--color-accent-cta)] mt-0.5 shrink-0" />
                                            <span className="text-sm text-[var(--color-text-secondary)]">Consistent boundary rules applied across the full dataset</span>
                                        </div>
                                        <div className="flex items-start gap-2">
                                            <CheckCircle2 className="w-4 h-4 text-[var(--color-accent-cta)] mt-0.5 shrink-0" />
                                            <span className="text-sm text-[var(--color-text-secondary)]">COCO and YOLO format output</span>
                                        </div>
                                        <div className="flex items-start gap-2">
                                            <CheckCircle2 className="w-4 h-4 text-[var(--color-accent-cta)] mt-0.5 shrink-0" />
                                            <span className="text-sm text-[var(--color-text-secondary)]">IAA measurement on every batch</span>
                                        </div>
                                    </div>

                                    <div className="border-t border-[var(--color-border)] pt-6 mt-auto">
                                        <Link href="/services/bounding-box" className="inline-flex items-center font-semibold text-[var(--color-text-primary)] hover:text-[var(--color-accent-cta)] transition-colors duration-200">
                                            Explore Bounding Box → <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                                        </Link>
                                    </div>
                                </div>
                            </AnimatedSection>

                            {/* Service 2: Image Segmentation */}
                            <AnimatedSection delay={0.20}>
                                <div className="group bg-[var(--color-bg-surface)] border border-[var(--color-border)] rounded-2xl p-8 hover:bg-[var(--color-bg-elevated)] hover:border-[var(--color-border-hover)] transition-all duration-300 flex flex-col h-full relative overflow-hidden">
                                    <div className="absolute top-0 right-0 -mt-6 -mr-4 font-mono text-8xl font-bold text-[rgba(255,255,255,0.02)] -z-10 select-none pointer-events-none transition-transform duration-500 group-hover:scale-110">
                                        02
                                    </div>

                                    <div className="flex items-center gap-3 mb-6">
                                        <Layers className="w-8 h-8 text-[var(--color-text-muted)] group-hover:text-[var(--color-accent-cta)] transition-colors duration-300" aria-hidden="true" />
                                        <span className="text-xs border border-[var(--color-border-subtle)] bg-[rgba(255,255,255,0.02)] text-[var(--color-text-muted)] px-2.5 py-1 rounded-md font-semibold uppercase tracking-wider">
                                            Segmentation
                                        </span>
                                    </div>

                                    <h3 className="text-2xl font-bold text-[var(--color-text-primary)] mb-3">
                                        Image Segmentation
                                    </h3>

                                    <p className="text-sm text-[var(--color-accent-cta)] mb-4 font-medium">
                                        We identify objects down to the pixel, giving you accurate training data for your visual AI projects.
                                    </p>

                                    <p className="text-base text-[var(--color-text-secondary)] leading-relaxed mb-4">
                                        Image segmentation needs more precision than bounding box annotation because every pixel must be assigned to the correct class or instance. Aeterna Data uses polygon annotation and checks quality for each class to keep boundaries accurate, even in complex scenes.
                                    </p>

                                    <p className="text-base text-[var(--color-text-secondary)] leading-relaxed mb-6">
                                        We work with both semantic segmentation, where each pixel in the image is classified, and instance segmentation, where we mask each object separately. The pilot phase helps us set a baseline for annotation time and quality before starting production.
                                    </p>

                                    <div className="flex flex-wrap gap-2 mb-6">
                                        <span className="text-xs border border-[var(--color-border-subtle)] bg-[rgba(255,255,255,0.02)] text-[var(--color-text-secondary)] px-2.5 py-1 rounded-md">Semantic Segmentation</span>
                                        <span className="text-xs border border-[var(--color-border-subtle)] bg-[rgba(255,255,255,0.02)] text-[var(--color-text-secondary)] px-2.5 py-1 rounded-md">Instance Segmentation</span>
                                        <span className="text-xs border border-[var(--color-border-subtle)] bg-[rgba(255,255,255,0.02)] text-[var(--color-text-secondary)] px-2.5 py-1 rounded-md">Polygon Annotation</span>
                                        <span className="text-xs border border-[var(--color-border-subtle)] bg-[rgba(255,255,255,0.02)] text-[var(--color-text-secondary)] px-2.5 py-1 rounded-md">Pixel Masking</span>
                                    </div>

                                    <div className="space-y-2 mb-8">
                                        <div className="flex items-start gap-2">
                                            <CheckCircle2 className="w-4 h-4 text-[var(--color-accent-cta)] mt-0.5 shrink-0" />
                                            <span className="text-sm text-[var(--color-text-secondary)]">Semantic and instance segmentation</span>
                                        </div>
                                        <div className="flex items-start gap-2">
                                            <CheckCircle2 className="w-4 h-4 text-[var(--color-accent-cta)] mt-0.5 shrink-0" />
                                            <span className="text-sm text-[var(--color-text-secondary)]">Polygon annotation with boundary accuracy checks</span>
                                        </div>
                                        <div className="flex items-start gap-2">
                                            <CheckCircle2 className="w-4 h-4 text-[var(--color-accent-cta)] mt-0.5 shrink-0" />
                                            <span className="text-sm text-[var(--color-text-secondary)]">Per-class quality review</span>
                                        </div>
                                        <div className="flex items-start gap-2">
                                            <CheckCircle2 className="w-4 h-4 text-[var(--color-accent-cta)] mt-0.5 shrink-0" />
                                            <span className="text-sm text-[var(--color-text-secondary)]">IAA measurement on every batch</span>
                                        </div>
                                    </div>

                                    <div className="border-t border-[var(--color-border)] pt-6 mt-auto">
                                        <Link href="/services/segmentation" className="inline-flex items-center font-semibold text-[var(--color-text-primary)] hover:text-[var(--color-accent-cta)] transition-colors duration-200">
                                            Explore Segmentation → <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                                        </Link>
                                    </div>
                                </div>
                            </AnimatedSection>

                            {/* Service 3: Image Classification */}
                            <AnimatedSection delay={0.30}>
                                <div className="group bg-[var(--color-bg-surface)] border border-[var(--color-border)] rounded-2xl p-8 hover:bg-[var(--color-bg-elevated)] hover:border-[var(--color-border-hover)] transition-all duration-300 flex flex-col h-full relative overflow-hidden">
                                    <div className="absolute top-0 right-0 -mt-6 -mr-4 font-mono text-8xl font-bold text-[rgba(255,255,255,0.02)] -z-10 select-none pointer-events-none transition-transform duration-500 group-hover:scale-110">
                                        03
                                    </div>

                                    <div className="flex items-center gap-3 mb-6">
                                        <Tag className="w-8 h-8 text-[var(--color-text-muted)] group-hover:text-[var(--color-accent-cta)] transition-colors duration-300" aria-hidden="true" />
                                        <span className="text-xs border border-[var(--color-border-subtle)] bg-[rgba(255,255,255,0.02)] text-[var(--color-text-muted)] px-2.5 py-1 rounded-md font-semibold uppercase tracking-wider">
                                            Classification
                                        </span>
                                    </div>

                                    <h3 className="text-2xl font-bold text-[var(--color-text-primary)] mb-3">
                                        Image Classification
                                    </h3>

                                    <p className="text-sm text-[var(--color-accent-cta)] mb-4 font-medium">
                                        We organized the visual dataset using a clear structure and a consistent taxonomy.
                                    </p>

                                    <p className="text-base text-[var(--color-text-secondary)] leading-relaxed mb-4">
                                        Image classification means giving each image in a dataset one or more category labels. The main challenge is keeping the taxonomy consistent. Aeterna Data addresses this by using clear labeling guidelines for each class and checking annotator decisions to ensure categories stay consistent across large datasets.
                                    </p>

                                    <p className="text-base text-[var(--color-text-secondary)] leading-relaxed mb-6">
                                        We handle both single-label and multi-label classification tasks. Before starting production, we run a pilot phase to check the taxonomy and find any unclear category boundaries that should be clarified in the annotation guidelines.
                                    </p>

                                    <div className="flex flex-wrap gap-2 mb-6">
                                        <span className="text-xs border border-[var(--color-border-subtle)] bg-[rgba(255,255,255,0.02)] text-[var(--color-text-secondary)] px-2.5 py-1 rounded-md">Single-Label</span>
                                        <span className="text-xs border border-[var(--color-border-subtle)] bg-[rgba(255,255,255,0.02)] text-[var(--color-text-secondary)] px-2.5 py-1 rounded-md">Multi-Label</span>
                                        <span className="text-xs border border-[var(--color-border-subtle)] bg-[rgba(255,255,255,0.02)] text-[var(--color-text-secondary)] px-2.5 py-1 rounded-md">Taxonomy Application</span>
                                        <span className="text-xs border border-[var(--color-border-subtle)] bg-[rgba(255,255,255,0.02)] text-[var(--color-text-secondary)] px-2.5 py-1 rounded-md">Structured Categorisation</span>
                                    </div>

                                    <div className="space-y-2 mb-8">
                                        <div className="flex items-start gap-2">
                                            <CheckCircle2 className="w-4 h-4 text-[var(--color-accent-cta)] mt-0.5 shrink-0" />
                                            <span className="text-sm text-[var(--color-text-secondary)]">Single-label and multi-label classification</span>
                                        </div>
                                        <div className="flex items-start gap-2">
                                            <CheckCircle2 className="w-4 h-4 text-[var(--color-accent-cta)] mt-0.5 shrink-0" />
                                            <span className="text-sm text-[var(--color-text-secondary)]">Taxonomy validation in pilot phase</span>
                                        </div>
                                        <div className="flex items-start gap-2">
                                            <CheckCircle2 className="w-4 h-4 text-[var(--color-accent-cta)] mt-0.5 shrink-0" />
                                            <span className="text-sm text-[var(--color-text-secondary)]">Cross-annotator consistency checks</span>
                                        </div>
                                        <div className="flex items-start gap-2">
                                            <CheckCircle2 className="w-4 h-4 text-[var(--color-accent-cta)] mt-0.5 shrink-0" />
                                            <span className="text-sm text-[var(--color-text-secondary)]">IAA measurement on every batch</span>
                                        </div>
                                    </div>

                                    <div className="border-t border-[var(--color-border)] pt-6 mt-auto">
                                        <Link href="/services/classification" className="inline-flex items-center font-semibold text-[var(--color-text-primary)] hover:text-[var(--color-accent-cta)] transition-colors duration-200">
                                            Explore Classification → <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                                        </Link>
                                    </div>
                                </div>
                            </AnimatedSection>

                            {/* Service 4: Visual RLHF Evaluation */}
                            <AnimatedSection delay={0.40}>
                                <div className="group bg-[var(--color-bg-surface)] border border-[var(--color-border)] rounded-2xl p-8 hover:bg-[var(--color-bg-elevated)] hover:border-[var(--color-border-hover)] transition-all duration-300 flex flex-col h-full relative overflow-hidden">
                                    <div className="absolute top-0 right-0 -mt-6 -mr-4 font-mono text-8xl font-bold text-[rgba(255,255,255,0.02)] -z-10 select-none pointer-events-none transition-transform duration-500 group-hover:scale-110">
                                        04
                                    </div>

                                    <div className="flex items-center gap-3 mb-6">
                                        <GitCompare className="w-8 h-8 text-[var(--color-text-muted)] group-hover:text-[var(--color-accent-cta)] transition-colors duration-300" aria-hidden="true" />
                                        <span className="text-xs border border-[var(--color-border-subtle)] bg-[rgba(255,255,255,0.02)] text-[var(--color-text-muted)] px-2.5 py-1 rounded-md font-semibold uppercase tracking-wider">
                                            Visual RLHF
                                        </span>
                                    </div>

                                    <h3 className="text-2xl font-bold text-[var(--color-text-primary)] mb-3">
                                        Visual RLHF Evaluation
                                    </h3>

                                    <p className="text-sm text-[var(--color-accent-cta)] mb-4 font-medium">
                                        We train visual AI reward models using data that reflects human preferences.
                                    </p>

                                    <p className="text-base text-[var(--color-text-secondary)] leading-relaxed mb-4">
                                        In visual RLHF evaluation, annotators compare AI-generated images and give structured preference judgments. Instead of simply choosing a favorite, they assess images based on specific qualities like accuracy, coherence, and safety. Aeterna Data uses clear rubrics to make sure annotator judgments stay consistent and measurable.
                                    </p>

                                    <p className="text-base text-[var(--color-text-secondary)] leading-relaxed mb-6">
                                        We offer pairwise preference ranking, absolute quality rating, and safety classification for image generation models. We also track rubric drift across batches to make sure the reward model training gets a consistent signal throughout the dataset.
                                    </p>

                                    <div className="flex flex-wrap gap-2 mb-6">
                                        <span className="text-xs border border-[var(--color-border-subtle)] bg-[rgba(255,255,255,0.02)] text-[var(--color-text-secondary)] px-2.5 py-1 rounded-md">Pairwise Preference Ranking</span>
                                        <span className="text-xs border border-[var(--color-border-subtle)] bg-[rgba(255,255,255,0.02)] text-[var(--color-text-secondary)] px-2.5 py-1 rounded-md">Image Quality Rating</span>
                                        <span className="text-xs border border-[var(--color-border-subtle)] bg-[rgba(255,255,255,0.02)] text-[var(--color-text-secondary)] px-2.5 py-1 rounded-md">Safety Classification</span>
                                        <span className="text-xs border border-[var(--color-border-subtle)] bg-[rgba(255,255,255,0.02)] text-[var(--color-text-secondary)] px-2.5 py-1 rounded-md">Rubric-Based Evaluation</span>
                                    </div>

                                    <div className="space-y-2 mb-8">
                                        <div className="flex items-start gap-2">
                                            <CheckCircle2 className="w-4 h-4 text-[var(--color-accent-cta)] mt-0.5 shrink-0" />
                                            <span className="text-sm text-[var(--color-text-secondary)]">Pairwise preference ranking with multi-dimension rubrics</span>
                                        </div>
                                        <div className="flex items-start gap-2">
                                            <CheckCircle2 className="w-4 h-4 text-[var(--color-accent-cta)] mt-0.5 shrink-0" />
                                            <span className="text-sm text-[var(--color-text-secondary)]">Absolute quality rating for image generation evaluation</span>
                                        </div>
                                        <div className="flex items-start gap-2">
                                            <CheckCircle2 className="w-4 h-4 text-[var(--color-accent-cta)] mt-0.5 shrink-0" />
                                            <span className="text-sm text-[var(--color-text-secondary)]">Safety classification with structured category guidelines</span>
                                        </div>
                                        <div className="flex items-start gap-2">
                                            <CheckCircle2 className="w-4 h-4 text-[var(--color-accent-cta)] mt-0.5 shrink-0" />
                                            <span className="text-sm text-[var(--color-text-secondary)]">Rubric consistency monitoring across batches</span>
                                        </div>
                                    </div>

                                    <div className="border-t border-[var(--color-border)] pt-6 mt-auto">
                                        <Link href="/services/visual-rlhf" className="inline-flex items-center font-semibold text-[var(--color-text-primary)] hover:text-[var(--color-accent-cta)] transition-colors duration-200">
                                            Explore Visual RLHF → <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                                        </Link>
                                    </div>
                                </div>
                            </AnimatedSection>

                            {/* Service 5: Dataset Validation & QA — Full width */}
                            <AnimatedSection delay={0.50}>
                                <div className="group bg-[var(--color-bg-surface)] border border-[var(--color-border)] rounded-2xl p-8 hover:bg-[var(--color-bg-elevated)] hover:border-[var(--color-border-hover)] transition-all duration-300 flex flex-col h-full relative overflow-hidden md:col-span-2">
                                    <div className="absolute top-0 right-0 -mt-6 -mr-4 font-mono text-8xl font-bold text-[rgba(255,255,255,0.02)] -z-10 select-none pointer-events-none transition-transform duration-500 group-hover:scale-110">
                                        05
                                    </div>

                                    <div className="flex items-center gap-3 mb-6">
                                        <ShieldCheck className="w-8 h-8 text-[var(--color-text-muted)] group-hover:text-[var(--color-accent-cta)] transition-colors duration-300" aria-hidden="true" />
                                        <span className="text-xs border border-[var(--color-border-subtle)] bg-[rgba(255,255,255,0.02)] text-[var(--color-text-muted)] px-2.5 py-1 rounded-md font-semibold uppercase tracking-wider">
                                            Quality Assurance
                                        </span>
                                    </div>

                                    <h3 className="text-2xl font-bold text-[var(--color-text-primary)] mb-3">
                                        Dataset Validation &amp; QA
                                    </h3>

                                    <p className="text-sm text-[var(--color-accent-cta)] mb-4 font-medium">
                                        We catch annotation errors before your model can learn from them.
                                    </p>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <p className="text-base text-[var(--color-text-secondary)] leading-relaxed mb-4">
                                                Dataset validation checks annotated datasets for label consistency, class distribution problems, and systematic annotation mistakes. Finding these issues before training saves money compared to discovering them only after a model performs poorly in evaluation.
                                            </p>

                                            <p className="text-base text-[var(--color-text-secondary)] leading-relaxed mb-6">
                                                Aeterna Data checks how much annotators agree on existing datasets using Cohen&apos;s Kappa and Fleiss&apos; Kappa. It also finds error patterns for each annotator and class, then provides a clear quality report with specific suggestions for reannotation.
                                            </p>
                                        </div>

                                        <div>
                                            <div className="flex flex-wrap gap-2 mb-6">
                                                <span className="text-xs border border-[var(--color-border-subtle)] bg-[rgba(255,255,255,0.02)] text-[var(--color-text-secondary)] px-2.5 py-1 rounded-md">Label Consistency Audit</span>
                                                <span className="text-xs border border-[var(--color-border-subtle)] bg-[rgba(255,255,255,0.02)] text-[var(--color-text-secondary)] px-2.5 py-1 rounded-md">IAA Measurement</span>
                                                <span className="text-xs border border-[var(--color-border-subtle)] bg-[rgba(255,255,255,0.02)] text-[var(--color-text-secondary)] px-2.5 py-1 rounded-md">Error Detection</span>
                                                <span className="text-xs border border-[var(--color-border-subtle)] bg-[rgba(255,255,255,0.02)] text-[var(--color-text-secondary)] px-2.5 py-1 rounded-md">Quality Reporting</span>
                                            </div>

                                            <div className="space-y-2">
                                                <div className="flex items-start gap-2">
                                                    <CheckCircle2 className="w-4 h-4 text-[var(--color-accent-cta)] mt-0.5 shrink-0" />
                                                    <span className="text-sm text-[var(--color-text-secondary)]">Label consistency audit across the full dataset</span>
                                                </div>
                                                <div className="flex items-start gap-2">
                                                    <CheckCircle2 className="w-4 h-4 text-[var(--color-accent-cta)] mt-0.5 shrink-0" />
                                                    <span className="text-sm text-[var(--color-text-secondary)]">Retrospective IAA measurement on existing annotations</span>
                                                </div>
                                                <div className="flex items-start gap-2">
                                                    <CheckCircle2 className="w-4 h-4 text-[var(--color-accent-cta)] mt-0.5 shrink-0" />
                                                    <span className="text-sm text-[var(--color-text-secondary)]">Error pattern identification by class and annotator</span>
                                                </div>
                                                <div className="flex items-start gap-2">
                                                    <CheckCircle2 className="w-4 h-4 text-[var(--color-accent-cta)] mt-0.5 shrink-0" />
                                                    <span className="text-sm text-[var(--color-text-secondary)]">Structured quality report with reannotation recommendations</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="border-t border-[var(--color-border)] pt-6 mt-auto">
                                        <Link href="/services/dataset-qa" className="inline-flex items-center font-semibold text-[var(--color-text-primary)] hover:text-[var(--color-accent-cta)] transition-colors duration-200">
                                            Explore Dataset QA → <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                                        </Link>
                                    </div>
                                </div>
                            </AnimatedSection>

                        </div>
                    </div>
                </section>
            </AnimatedSection>

            {/* ── SECTION 2: Quality Standard ── */}
            <AnimatedSection>
                <section className="py-24 border-t border-[var(--color-border)] w-full bg-[var(--color-bg-base)]">
                    <div className="max-w-5xl mx-auto px-6">
                        <div className="text-center mb-16">
                            <span className="text-xs font-semibold tracking-widest uppercase text-[var(--color-text-muted)] mb-4 block">
                                Quality Standard
                            </span>
                            <h2 className="text-3xl lg:text-5xl font-bold text-[var(--color-text-primary)] mb-6">
                                Inter-Annotator Agreement
                            </h2>
                            <p className="text-[var(--color-text-secondary)] text-lg max-w-3xl mx-auto leading-relaxed">
                                All Aeterna Data services follow the same inter-annotator agreement standard. Whether it is bounding box, segmentation, classification, visual RLHF, or dataset QA, our quality threshold stays consistent across every service.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
                            {/* Cohen's Kappa */}
                            <div className="bg-[var(--color-bg-surface)] border border-[var(--color-border)] rounded-2xl p-8 text-center">
                                <div className="text-4xl lg:text-5xl font-bold font-mono text-[var(--color-text-primary)] mb-3">
                                    κ ≥ 0.80
                                </div>
                                <div className="text-sm font-semibold text-[var(--color-accent-cta)] uppercase tracking-wider mb-2">
                                    Cohen&apos;s Kappa
                                </div>
                                <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                                    Pairwise agreement between any two annotators on the same task must meet or exceed the 0.80 threshold.
                                </p>
                            </div>

                            {/* Fleiss' Kappa */}
                            <div className="bg-[var(--color-bg-surface)] border border-[var(--color-border)] rounded-2xl p-8 text-center">
                                <div className="text-4xl lg:text-5xl font-bold font-mono text-[var(--color-text-primary)] mb-3">
                                    κ ≥ 0.75
                                </div>
                                <div className="text-sm font-semibold text-[var(--color-accent-cta)] uppercase tracking-wider mb-2">
                                    Fleiss&apos; Kappa
                                </div>
                                <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                                    Multi-annotator agreement across three or more raters must meet the 0.75 threshold for full-team consistency.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </AnimatedSection>

            {/* ── SECTION 3: BYOT — Your Dataset. Your Tools. Our Team. ── */}
            <AnimatedSection>
                <section className="py-24 border-t border-[var(--color-border)] w-full bg-[var(--color-bg-base)]">
                    <div className="max-w-5xl mx-auto px-6">
                        <div className="text-center mb-16">
                            <span className="text-xs font-semibold tracking-widest uppercase text-[var(--color-text-muted)] mb-4 block">
                                How We Work
                            </span>
                            <h2 className="text-3xl lg:text-5xl font-bold text-[var(--color-text-primary)] mb-6">
                                Your Dataset. Your Tools. Our Team.
                            </h2>
                            <p className="text-[var(--color-text-secondary)] text-lg max-w-3xl mx-auto leading-relaxed mb-4">
                                Aeterna Data works with the annotation tools your team already uses. You do not have to switch to a specific platform. We fit into your existing setup.
                            </p>
                            <p className="text-[var(--color-text-secondary)] text-lg max-w-3xl mx-auto leading-relaxed">
                                We begin every project with a pilot phase. This lets us set up the annotation workflow, review the guidelines, and check that the quality meets your standards before we start full production. By doing this, we can catch any workflow issues early, rather than after labeling thousands of images.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {/* Item 1 */}
                            <div className="bg-[var(--color-bg-surface)] border border-[var(--color-border)] rounded-2xl p-8">
                                <h3 className="text-lg font-bold text-[var(--color-text-primary)] mb-3">
                                    No platform lock-in
                                </h3>
                                <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                                    We work with CVAT, Label Studio, Roboflow, Scale, and can also use your own internal tool.
                                </p>
                            </div>

                            {/* Item 2 */}
                            <div className="bg-[var(--color-bg-surface)] border border-[var(--color-border)] rounded-2xl p-8">
                                <h3 className="text-lg font-bold text-[var(--color-text-primary)] mb-3">
                                    Pilot before production
                                </h3>
                                <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                                    We start every project with a fixed-scope pilot. This helps us check the workflow and make sure the quality meets your standards before we move to full production.
                                </p>
                            </div>

                            {/* Item 3 */}
                            <div className="bg-[var(--color-bg-surface)] border border-[var(--color-border)] rounded-2xl p-8">
                                <h3 className="text-lg font-bold text-[var(--color-text-primary)] mb-3">
                                    Formal agreements first
                                </h3>
                                <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                                    We sign an NDA and DPA before receiving any data from you. We recognize your training dataset is proprietary and handle it with the utmost care.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </AnimatedSection>

            {/* ── SECTION 4: Engagement Tiers ── */}
            <AnimatedSection>
                <section className="py-24 border-t border-[var(--color-border)] w-full bg-[var(--color-bg-base)]">
                    <div className="max-w-5xl mx-auto px-6">
                        <div className="text-center mb-16">
                            <span className="text-xs font-semibold tracking-widest uppercase text-[var(--color-text-muted)] mb-4 block">
                                Engagement Model
                            </span>
                            <h2 className="text-3xl lg:text-5xl font-bold text-[var(--color-text-primary)] mb-6">
                                Five Ways to Work With Us
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
                            {/* Tier 1 */}
                            <div className="bg-[var(--color-bg-surface)] border border-[var(--color-border)] rounded-2xl p-6 text-center hover:border-[var(--color-border-hover)] transition-all duration-300">
                                <div className="text-xs font-semibold uppercase tracking-wider text-[var(--color-accent-cta)] mb-2">Entry</div>
                                <div className="text-lg font-bold text-[var(--color-text-primary)] mb-2">Paid Pilot</div>
                                <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">Fixed-scope trial to validate workflow and quality before committing.</p>
                            </div>

                            {/* Tier 2 */}
                            <div className="bg-[var(--color-bg-surface)] border border-[var(--color-border)] rounded-2xl p-6 text-center hover:border-[var(--color-border-hover)] transition-all duration-300">
                                <div className="text-xs font-semibold uppercase tracking-wider text-[var(--color-accent-cta)] mb-2">Core</div>
                                <div className="text-lg font-bold text-[var(--color-text-primary)] mb-2">On-Demand Annotation</div>
                                <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">Per-batch annotation work with IAA reports on every delivery.</p>
                            </div>

                            {/* Tier 3 */}
                            <div className="bg-[var(--color-bg-surface)] border border-[var(--color-border)] rounded-2xl p-6 text-center hover:border-[var(--color-border-hover)] transition-all duration-300">
                                <div className="text-xs font-semibold uppercase tracking-wider text-[var(--color-accent-cta)] mb-2">Volume</div>
                                <div className="text-lg font-bold text-[var(--color-text-primary)] mb-2">Volume Projects</div>
                                <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">Large-scale annotation engagements with dedicated capacity and volume pricing.</p>
                            </div>

                            {/* Tier 4 */}
                            <div className="bg-[var(--color-bg-surface)] border border-[var(--color-border)] rounded-2xl p-6 text-center hover:border-[var(--color-border-hover)] transition-all duration-300">
                                <div className="text-xs font-semibold uppercase tracking-wider text-[var(--color-accent-cta)] mb-2">Dedicated</div>
                                <div className="text-lg font-bold text-[var(--color-text-primary)] mb-2">Dedicated Team</div>
                                <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">A named team assigned exclusively to your project with consistent quality output.</p>
                            </div>

                            {/* Tier 5 */}
                            <div className="bg-[var(--color-bg-surface)] border border-[var(--color-border)] rounded-2xl p-6 text-center hover:border-[var(--color-border-hover)] transition-all duration-300">
                                <div className="text-xs font-semibold uppercase tracking-wider text-[var(--color-accent-cta)] mb-2">Long-Term Partner</div>
                                <div className="text-lg font-bold text-[var(--color-text-primary)] mb-2">Ongoing Partnership</div>
                                <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">Ongoing annotation partner for teams with continuous dataset needs.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </AnimatedSection>

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
                            Not Sure Which Service You Need?
                        </h2>
                        <p className="text-[var(--color-text-secondary)] text-lg mb-10 leading-relaxed max-w-2xl mx-auto">
                            Please provide details about your dataset and model. Once we receive your information, we will recommend the most suitable service and send a pilot plan within 48 hours.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <Link
                                href="/contact"
                                className="bg-[var(--color-accent-cta)] text-white font-semibold px-8 py-3.5 rounded-lg hover:bg-[var(--color-accent-cta-hover)] transition-colors duration-200"
                            >
                                Request a Pilot
                            </Link>
                            <Link
                                href="/contact"
                                className="border border-[var(--color-border-subtle)] text-[var(--color-text-secondary)] px-8 py-3.5 rounded-lg hover:border-[var(--color-border-hover)] hover:text-[var(--color-text-primary)] transition-all duration-200"
                            >
                                Book a Consultation
                            </Link>
                        </div>
                    </div>
                </section>
            </AnimatedSection>
        </main>
    );
}
