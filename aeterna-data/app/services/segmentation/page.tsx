import type { Metadata } from 'next';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import AnimatedSection from '@/components/ui/AnimatedSection';
import StickyTableOfContents from '@/components/ui/StickyTableOfContents';

export const metadata: Metadata = {
    title: 'Image Segmentation — Aeterna Data',
    description: 'Semantic and instance segmentation annotation for computer vision datasets. Pixel-level object masking, polygon annotation, IAA measurement on every batch.',
    robots: {
        index: true,
        follow: true,
    },
};

const tocItems = [
    { id: 'what-is-segmentation', label: 'What Is Image Segmentation' },
    { id: 'semantic-vs-instance', label: 'Semantic vs Instance' },
    { id: 'use-cases', label: 'Use Cases' },
    { id: 'annotation-method', label: 'Annotation Method' },
    { id: 'quality-standard', label: 'Quality Standard' },
    { id: 'workflow', label: 'Our Workflow' },
    { id: 'tools', label: 'Annotation Tools' },
    { id: 'how-to-start', label: 'How to Start' },
];

export default function SegmentationPage() {
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
                        <span className="text-[var(--color-text-muted)]">Segmentation</span>
                    </nav>

                    {/* Pre-heading Pill */}
                    <div
                        className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-8 border"
                        style={{ backgroundColor: "rgba(255,255,255,0.05)", borderColor: "rgba(255,255,255,0.10)" }}
                    >
                        <span className="text-[var(--color-text-muted)] text-xs font-semibold tracking-widest uppercase">
                            Segmentation
                        </span>
                    </div>

                    {/* Headline */}
                    <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight leading-none text-[var(--color-text-primary)]">
                        Image Segmentation Annotation<br />for Pixel-Level Precision.
                    </h1>

                    {/* Subheadline */}
                    <p className="text-[var(--color-text-secondary)] text-lg lg:text-xl max-w-2xl mt-6">
                        Semantic and instance segmentation for computer vision training datasets. Polygon annotation, per-class quality checks, and IAA measurement on every batch.
                    </p>

                    {/* Stat Strip */}
                    <div className="grid grid-cols-2 gap-y-8 gap-x-4 sm:flex sm:flex-wrap justify-center items-center sm:gap-4 mt-10 font-mono text-sm text-center">
                        <div className="flex flex-col items-center text-center">
                            <span className="text-[var(--color-text-primary)] font-bold">Semantic + Instance</span>
                            <span className="text-[var(--color-text-muted)] text-xs uppercase tracking-widest mt-1">Types</span>
                        </div>
                        <span className="text-[var(--color-border-subtle)] hidden sm:block">|</span>
                        <div className="flex flex-col items-center text-center">
                            <span className="text-[var(--color-text-primary)] font-bold">Polygon · Mask</span>
                            <span className="text-[var(--color-text-muted)] text-xs uppercase tracking-widest mt-1">Method</span>
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

                    {/* SECTION 1: What Is Image Segmentation? */}
                    <AnimatedSection>
                        <section id="what-is-segmentation">
                            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-[var(--color-text-primary)] mb-6">
                                What Is Image Segmentation?
                            </h2>
                            <div className="text-base leading-relaxed text-[var(--color-text-secondary)] space-y-4">
                                <p>
                                    Image segmentation is the task of partitioning an image into meaningful regions by assigning a label to every pixel. Unlike bounding box annotation, which draws a rectangle around an object, segmentation follows the exact boundary of the object — making it significantly more precise and significantly more demanding to annotate correctly.
                                </p>
                                <p>
                                    Segmentation datasets are used to train models that need pixel-level understanding of a scene — medical imaging systems that must identify exact tissue boundaries, autonomous vehicle systems that must distinguish road from pavement from sidewalk at the pixel level, or robotic systems that must calculate the exact shape of an object to grasp it correctly.
                                </p>
                                <p>
                                    The quality challenge in segmentation annotation is boundary accuracy and consistency. Two annotators drawing the boundary of the same object will produce slightly different polygons. Aeterna Data measures this variation using inter-annotator agreement and enforces per-class boundary rules to keep the variation within acceptable limits.
                                </p>
                            </div>
                        </section>
                    </AnimatedSection>

                    {/* SECTION 2: Semantic vs Instance Segmentation */}
                    <AnimatedSection>
                        <section id="semantic-vs-instance">
                            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-[var(--color-text-primary)] mb-6">
                                Semantic vs Instance Segmentation
                            </h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="bg-[var(--color-bg-surface)] border border-[var(--color-border)] rounded-2xl p-6">
                                    <h3 className="text-base font-semibold text-[var(--color-text-primary)]">Semantic Segmentation</h3>
                                    <p className="text-sm text-[var(--color-text-secondary)] mt-2 leading-relaxed">
                                        Every pixel in the image is assigned a class label. All pixels belonging to the same class — for example, all road pixels, all sky pixels, all building pixels — receive the same label. Individual instances of the same class are not distinguished.
                                    </p>
                                    <p className="text-xs text-[var(--color-text-muted)] font-mono mt-4">
                                        Use when: Your model needs to understand what type of region each pixel belongs to — driving scenes, satellite imagery, medical tissue classification.
                                    </p>
                                </div>
                                <div className="bg-[var(--color-bg-surface)] border border-[var(--color-border)] rounded-2xl p-6">
                                    <h3 className="text-base font-semibold text-[var(--color-text-primary)]">Instance Segmentation</h3>
                                    <p className="text-sm text-[var(--color-text-secondary)] mt-2 leading-relaxed">
                                        Each individual object instance receives its own unique mask, even when multiple instances of the same class appear in the image. Three cars in an image produce three separate masks, each labeled as &apos;car&apos; but individually distinguished.
                                    </p>
                                    <p className="text-xs text-[var(--color-text-muted)] font-mono mt-4">
                                        Use when: Your model needs to count, track, or individually interact with objects — robotics, counting systems, multi-object tracking.
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
                                        title: "Autonomous Driving",
                                        body: "Road, lane, vehicle, pedestrian, and sign segmentation for scene understanding in self-driving systems."
                                    },
                                    {
                                        title: "Medical Imaging",
                                        body: "Organ, lesion, and tissue boundary delineation in radiology, pathology, and surgical planning datasets."
                                    },
                                    {
                                        title: "Satellite & Aerial",
                                        body: "Land use, building footprint, and vegetation segmentation in aerial and satellite imagery."
                                    },
                                    {
                                        title: "Robotics",
                                        body: "Object shape and boundary extraction for robotic grasping, manipulation, and scene understanding."
                                    },
                                    {
                                        title: "Agriculture",
                                        body: "Crop, weed, and disease region identification in drone imagery for precision agriculture systems."
                                    },
                                    {
                                        title: "Industrial Inspection",
                                        body: "Defect boundary delineation in manufacturing quality control and surface inspection datasets."
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

                    {/* SECTION 4: Annotation Method */}
                    <AnimatedSection>
                        <section id="annotation-method">
                            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-[var(--color-text-primary)] mb-6">
                                Annotation Method
                            </h2>

                            <div className="space-y-0">
                                {[
                                    {
                                        title: "Polygon Annotation",
                                        body: "Annotators draw precise polygon boundaries around each object by placing vertices along the object edge. The polygon is then filled to produce the pixel mask. Polygon annotation gives the highest boundary accuracy and is the standard method for training-grade segmentation datasets."
                                    },
                                    {
                                        title: "Per-Class Boundary Rules",
                                        body: "Each object class in the dataset has specific boundary rules defined in the annotation guidelines — for example, whether to include the shadow of an object, whether to annotate partially occluded objects, and how to handle object boundaries that overlap. These rules are validated during the pilot phase before production begins."
                                    },
                                    {
                                        title: "Occlusion Handling",
                                        body: "Objects that are partially hidden behind other objects require explicit handling rules. Aeterna Data documents the occlusion policy for each class during guideline development — whether to annotate only the visible portion, or to infer and complete the full object boundary."
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
                                    Every segmentation annotation batch delivered by Aeterna Data is measured for inter-annotator agreement before delivery. IAA is not a target — it is a threshold. Batches that do not meet the threshold are reworked before the client receives them.
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
                                        body: "We annotate a representative sample covering the key object classes and scene types in your dataset. Boundary accuracy and IAA are measured. Guideline gaps are identified and resolved before production annotation begins."
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
                                        "V7 Darwin", "Supervisely", "Scale AI",
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
                                        body: "Share your dataset sample, object classes requiring segmentation, semantic or instance type, and approximate image count. Use the contact form or email contact@aeternadata.com.",
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
                            Ready to Build Your Segmentation Dataset?
                        </h2>
                        <p className="text-[var(--color-text-secondary)] text-lg mb-10 leading-relaxed max-w-2xl mx-auto">
                            Start with a flat-rate pilot. Boundary rules validated. IAA measured. Quality report on delivery.
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
