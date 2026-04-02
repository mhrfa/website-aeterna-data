import type { Metadata } from 'next';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import AnimatedSection from '@/components/ui/AnimatedSection';
import StickyTableOfContents from '@/components/ui/StickyTableOfContents';

export const metadata: Metadata = {
    title: 'Computer Vision & Spatial Annotation — Aeterna Data',
    description: "Expert computer vision annotation services for EU AI teams. Bounding boxes, polygon labeling, semantic segmentation, and object tracking. GDPR-compliant, BYOT model, IAA-measured. Cohen's Kappa ≥ 0.80 every batch.",
    robots: {
        index: true,
        follow: true,
    },
};

const tocItems = [
    { id: 'what-is-cv-annotation', label: 'What Is CV Annotation?' },
    { id: 'annotation-types', label: 'Annotation Types' },
    { id: 'bounding-boxes', label: 'Bounding Boxes' },
    { id: 'polygon-labeling', label: 'Polygon Labeling' },
    { id: 'semantic-segmentation', label: 'Semantic Segmentation' },
    { id: 'object-tracking', label: 'Object Tracking' },
    { id: 'quality-standards', label: 'Quality Standards' },
    { id: 'byot-model', label: 'The BYOT Model' },
    { id: 'use-cases', label: 'Use Cases' },
    { id: 'gdpr-compliance', label: 'GDPR & Compliance' },
    { id: 'how-to-start', label: 'How to Start' },
];

export default function ComputerVisionPage() {
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
            <section className="relative min-h-[55vh] flex flex-col items-center justify-center pt-32 pb-16 text-center w-full">
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
                        <span className="text-[var(--color-text-muted)]">Services</span>
                        <ChevronRight className="w-3.5 h-3.5 text-[var(--color-text-muted)]" />
                        <span className="text-[var(--color-text-muted)]">Computer Vision & Spatial</span>
                    </nav>

                    {/* Pre-heading Pill */}
                    <div
                        className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-8 border"
                        style={{ backgroundColor: "rgba(255,255,255,0.05)", borderColor: "rgba(255,255,255,0.10)" }}
                    >
                        <span className="text-[var(--color-text-muted)] text-xs font-semibold tracking-widest uppercase">
                            Computer Vision & Spatial Annotation
                        </span>
                    </div>

                    {/* Headline */}
                    <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight leading-none text-[var(--color-text-primary)]">
                        Annotation That Sees What Your Model Needs to Learn.
                    </h1>

                    {/* Subheadline */}
                    <p className="text-[var(--color-text-secondary)] text-lg lg:text-xl max-w-2xl mt-6">
                        High-throughput 2D visual labeling for autonomous systems, robotics, medical imaging, and computer vision pipelines. Built inside your environment. IAA-measured. GDPR-compliant.
                    </p>

                    {/* Stat Strip */}
                    <div className="grid grid-cols-2 gap-y-8 gap-x-4 sm:flex sm:flex-wrap justify-center items-center sm:gap-4 mt-10 font-mono text-sm text-center">
                        <div className="flex flex-col items-center text-center">
                            <span className="text-[var(--color-text-primary)] font-bold">κ ≥ 0.80 / κ ≥ 0.75</span>
                            <span className="text-[var(--color-text-muted)] text-xs uppercase tracking-widest mt-1">IAA Every Batch</span>
                        </div>
                        <span className="text-[var(--color-border-subtle)] hidden sm:block">|</span>
                        <div className="flex flex-col items-center text-center">
                            <span className="text-[var(--color-text-primary)] font-bold">Flat Rate</span>
                            <span className="text-[var(--color-text-muted)] text-xs uppercase tracking-widest mt-1">Credited Pilot</span>
                        </div>
                        <span className="text-[var(--color-border-subtle)] hidden sm:block">|</span>
                        <div className="flex flex-col items-center text-center">
                            <span className="text-[var(--color-text-primary)] font-bold">BYOT</span>
                            <span className="text-[var(--color-text-muted)] text-xs uppercase tracking-widest mt-1">Your Dashboard</span>
                        </div>
                        <span className="text-[var(--color-border-subtle)] hidden sm:block">|</span>
                        <div className="flex flex-col items-center text-center">
                            <span className="text-[var(--color-text-primary)] font-bold">48hr</span>
                            <span className="text-[var(--color-text-muted)] text-xs uppercase tracking-widest mt-1">Scoping Response</span>
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

                    {/* SECTION 1: What Is CV Annotation? */}
                    <AnimatedSection>
                        <section id="what-is-cv-annotation">
                            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-[var(--color-text-primary)] mb-6">
                                What Is Computer Vision Annotation?
                            </h2>
                            <div className="text-base leading-relaxed text-[var(--color-text-secondary)] space-y-4">
                                <p>
                                    Computer vision annotation is the process of labeling image and video data so that machine learning models can learn to identify, classify, and locate objects within visual scenes. Without accurately labeled training data, a computer vision model has nothing to learn from — and no way to distinguish a pedestrian from a lamppost, a tumour from surrounding tissue, or a defective component from a passing one.
                                </p>
                                <p>
                                    The quality of your visual annotations directly determines the ceiling of your model's performance. A model trained on inconsistently labeled data will learn inconsistency. A model trained on precisely labeled data — with IAA measured and documented across every batch — will learn precision. The difference is not a matter of degree. It is the difference between a model you can deploy and one you cannot.
                                </p>
                                <p>
                                    At Aeterna Data, computer vision annotation is the volume and throughput engine of our operation. Every batch is IAA-measured. Every annotator works inside your dashboard under a signed individual NDA. Every delivery includes a full quality report. No exceptions.
                                </p>
                            </div>
                        </section>
                    </AnimatedSection>

                    {/* SECTION 2: Annotation Types */}
                    <AnimatedSection>
                        <section id="annotation-types">
                            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-[var(--color-text-primary)] mb-6">
                                The Four Core CV Annotation Types
                            </h2>
                            <div className="text-base leading-relaxed text-[var(--color-text-secondary)] mb-8">
                                <p>
                                    Computer vision projects require different annotation types depending on the model architecture, the task objective, and the precision needed. Aeterna Data delivers all four core CV annotation types — selected in scoping based on your specific pipeline requirements.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {[
                                    {
                                        title: "Bounding Boxes", tag: "2D Rectangular",
                                        body: "The fastest and most widely used annotation type. A rectangular box drawn around each object of interest. Optimal for object detection models where precise outline is not required.",
                                        href: "#bounding-boxes"
                                    },
                                    {
                                        title: "Polygon Labeling", tag: "Precise Outline",
                                        body: "Custom polygon shapes drawn to match the precise contour of each object. Higher annotation time than bounding boxes but significantly more accurate for irregular shapes.",
                                        href: "#polygon-labeling"
                                    },
                                    {
                                        title: "Semantic Segmentation", tag: "Pixel-Level",
                                        body: "Every pixel in the image is classified into a category. The highest-precision CV annotation type — required for autonomous driving, medical imaging, and scene understanding models.",
                                        href: "#semantic-segmentation"
                                    },
                                    {
                                        title: "Object Tracking", tag: "Video / Temporal",
                                        body: "Consistent labeling of the same object across multiple frames in a video sequence. Requires maintaining object identity through occlusion, re-entry, and frame transitions.",
                                        href: "#object-tracking"
                                    }
                                ].map((card, idx) => (
                                    <AnimatedSection key={idx} delay={idx * 0.08} className="h-full">
                                        <div className="bg-[var(--color-bg-surface)] border border-[var(--color-border)] rounded-2xl p-6 h-full hover:bg-[var(--color-bg-elevated)] hover:border-[var(--color-border-hover)] transition-all duration-200 flex flex-col items-start">
                                            <span className="text-xs font-mono uppercase tracking-widest text-[var(--color-text-muted)] bg-[var(--color-bg-elevated)] px-2 py-0.5 rounded-full inline-block mb-3">
                                                {card.tag}
                                            </span>
                                            <h3 className="text-lg font-semibold text-[var(--color-text-primary)]">
                                                {card.title}
                                            </h3>
                                            <p className="text-sm text-[var(--color-text-secondary)] mt-3 leading-relaxed flex-grow">
                                                {card.body}
                                            </p>
                                            <a href={card.href} className="text-xs text-[var(--color-accent-cta)] mt-4 inline-block hover:underline">
                                                Read more ↓
                                            </a>
                                        </div>
                                    </AnimatedSection>
                                ))}
                            </div>
                        </section>
                    </AnimatedSection>

                    {/* SECTION 3: Bounding Boxes */}
                    <AnimatedSection>
                        <section id="bounding-boxes">
                            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-[var(--color-text-primary)] mb-6">
                                Bounding Box Annotation
                            </h2>
                            <div className="text-base leading-relaxed text-[var(--color-text-secondary)] space-y-4">
                                <p>
                                    A bounding box is a rectangular region drawn around an object of interest in an image. Defined by four coordinates — x-min, y-min, x-max, y-max — the bounding box is the most computationally efficient annotation type and the industry standard for object detection pipelines.
                                </p>
                                <p>
                                    Despite its apparent simplicity, bounding box annotation requires careful attention to consistency. Common annotation errors include boxes that are too tight (excluding object edges), too loose (including significant background), or inconsistently applied when objects partially overlap or occlude each other. These errors, if undetected, propagate directly into model training as noise.
                                </p>

                                <h3 className="text-xl font-semibold text-[var(--color-text-primary)] mt-8 mb-4">
                                    When to Use Bounding Boxes
                                </h3>
                                <ul className="list-disc list-inside space-y-2 ml-2">
                                    <li>Object detection tasks where pixel-precise boundaries are not required</li>
                                    <li>High-volume datasets where annotation throughput is a priority</li>
                                    <li>Initial prototype models before committing to polygon or segmentation annotation</li>
                                    <li>Multi-object scenes where objects are mostly distinct and non-overlapping</li>
                                </ul>

                                <h3 className="text-xl font-semibold text-[var(--color-text-primary)] mt-8 mb-4">
                                    Aeterna Data's Bounding Box Standard
                                </h3>
                                <p>
                                    Every bounding box batch at Aeterna Data is annotated against written class-specific guidelines that define inclusion/exclusion rules for occlusion, truncation, and partial visibility. Cohen's Kappa is measured pairwise across annotators on every batch. Boxes failing IAA threshold are flagged, discussed in calibration, and reworked before delivery.
                                </p>

                                <div className="bg-[rgba(74,124,255,0.06)] border border-[rgba(74,124,255,0.15)] rounded-xl p-5 mt-6">
                                    <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                                        Default IAA threshold: Cohen's Kappa κ ≥ 0.80 (pairwise). For high-density scenes or fine-grained class distinctions, we recommend κ ≥ 0.85. Threshold is fixed in the SOW before work begins.
                                    </p>
                                </div>
                            </div>
                        </section>
                    </AnimatedSection>

                    {/* SECTION 4: Polygon Labeling */}
                    <AnimatedSection>
                        <section id="polygon-labeling">
                            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-[var(--color-text-primary)] mb-6">
                                Polygon Labeling
                            </h2>
                            <div className="text-base leading-relaxed text-[var(--color-text-secondary)] space-y-4">
                                <p>
                                    Polygon annotation defines the precise contour of an object using a sequence of connected vertices. Unlike a bounding box — which fits a rectangle around the object regardless of its shape — a polygon annotation traces the actual outline, excluding background pixels that fall outside the object boundary.
                                </p>
                                <p>
                                    The tradeoff is annotation time and cognitive load. Polygon labeling takes significantly longer per object than bounding box annotation, particularly for irregular, organic, or heavily occluded shapes. Average Handling Time per item must be established during the pilot phase — it varies substantially based on object complexity and scene density.
                                </p>
                                <p>
                                    Aeterna Data annotators are calibrated on polygon precision before production begins. Calibration includes vertex placement on curves, handling of partially occluded edges, and minimum vertex count guidelines — all class-specific and documented in the annotation guideline attached to the SOW.
                                </p>

                                <h3 className="text-xl font-semibold text-[var(--color-text-primary)] mt-8 mb-4">
                                    When to Use Polygon Labeling
                                </h3>
                                <ul className="list-disc list-inside space-y-2 ml-2">
                                    <li>Instance segmentation models requiring precise object boundaries</li>
                                    <li>Scenes with irregular object shapes where bounding boxes include excessive background</li>
                                    <li>Autonomous driving datasets — vehicles, pedestrians, cyclists with complex outlines</li>
                                    <li>Medical imaging where precise lesion or organ boundary is clinically relevant</li>
                                    <li>Retail and manufacturing defect detection where shape is the classification signal</li>
                                </ul>

                                <h3 className="text-xl font-semibold text-[var(--color-text-primary)] mt-8 mb-4">
                                    Annotation Complexity and AHT
                                </h3>
                                <p>
                                    Polygon annotation AHT is task-specific and established during the paid pilot. A simple rectangular object may require 8–12 vertices. A pedestrian in a complex urban scene may require 30–60 vertices. A vehicle seen from an angle with visible wheel arches may require 80+ vertices. AHT is documented per object class in the pilot report and used to scope production volume and timelines accurately.
                                </p>
                            </div>
                        </section>
                    </AnimatedSection>

                    {/* SECTION 5: Semantic Segmentation */}
                    <AnimatedSection>
                        <section id="semantic-segmentation">
                            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-[var(--color-text-primary)] mb-6">
                                Semantic Segmentation
                            </h2>
                            <div className="text-base leading-relaxed text-[var(--color-text-secondary)] space-y-4">
                                <p>
                                    Semantic segmentation is the most granular computer vision annotation type. Every pixel in the image is assigned a class label — road, sky, building, pedestrian, vehicle, vegetation, and so on. The output is a complete pixel-wise classification map of the entire scene.
                                </p>
                                <p>
                                    This level of annotation precision enables models to understand scenes in full spatial detail — not just where objects are, but precisely where each pixel belongs in the semantic landscape of the image. Autonomous driving, drone navigation, satellite imagery analysis, and surgical robotics all depend on semantic segmentation for their core perception pipelines.
                                </p>
                                <p>
                                    Semantic segmentation is among the most demanding annotation tasks in terms of annotator precision, guideline complexity, and QA overhead. At Aeterna Data, semantic segmentation projects are scoped with higher per-hour rates and smaller batch sizes to maintain IAA quality. Fleiss' Kappa is applied across the multi-annotator verification process.
                                </p>

                                <h3 className="text-xl font-semibold text-[var(--color-text-primary)] mt-8 mb-4">
                                    Instance vs. Semantic Segmentation
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="bg-[var(--color-bg-surface)] border border-[var(--color-border)] rounded-2xl p-6">
                                        <h4 className="text-base font-semibold text-[var(--color-text-primary)]">Semantic Segmentation</h4>
                                        <p className="text-sm text-[var(--color-text-secondary)] mt-2 leading-relaxed">
                                            All pixels belonging to the same class receive the same label, regardless of which individual object instance they belong to. Two cars side by side are both labelled 'vehicle' with no distinction between them.
                                        </p>
                                        <p className="text-xs text-[var(--color-text-muted)] font-mono mt-4">
                                            Use when: Scene understanding, autonomous driving, satellite analysis.
                                        </p>
                                    </div>
                                    <div className="bg-[var(--color-bg-surface)] border border-[var(--color-border)] rounded-2xl p-6">
                                        <h4 className="text-base font-semibold text-[var(--color-text-primary)]">Instance Segmentation</h4>
                                        <p className="text-sm text-[var(--color-text-secondary)] mt-2 leading-relaxed">
                                            Each individual object instance receives a unique label. Two cars side by side are labelled 'vehicle-001' and 'vehicle-002'. Requires per-instance polygon or mask annotation.
                                        </p>
                                        <p className="text-xs text-[var(--color-text-muted)] font-mono mt-4">
                                            Use when: Object counting, occlusion handling, instance-level tracking.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </AnimatedSection>

                    {/* SECTION 6: Object Tracking */}
                    <AnimatedSection>
                        <section id="object-tracking">
                            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-[var(--color-text-primary)] mb-6">
                                Object Tracking Annotation
                            </h2>
                            <div className="text-base leading-relaxed text-[var(--color-text-secondary)] space-y-4">
                                <p>
                                    Object tracking annotation extends bounding box or polygon labeling into the temporal dimension. The same object — a pedestrian, a vehicle, a product on a conveyor — is consistently labeled across a sequence of video frames, maintaining a unique track ID even as the object moves, changes in apparent size, becomes partially occluded, or temporarily exits and re-enters the frame.
                                </p>
                                <p>
                                    The critical quality dimension in object tracking is identity consistency. An annotator who loses track of an object ID mid-sequence and reassigns it incorrectly creates a discontinuity in the training signal that is difficult to detect at batch review and damaging to temporal model performance. At Aeterna Data, object tracking tasks are annotated by annotators specifically calibrated for temporal consistency — a separate calibration protocol from static image tasks.
                                </p>

                                <h3 className="text-xl font-semibold text-[var(--color-text-primary)] mt-8 mb-4">
                                    Key Tracking Annotation Challenges
                                </h3>
                                <div className="space-y-0">
                                    {[
                                        { title: "Occlusion", body: "When an object is temporarily hidden behind another object, the track ID must be maintained and the object re-identified correctly when it re-emerges. Guidelines must specify minimum occlusion threshold for maintaining vs. closing a track." },
                                        { title: "Re-entry", body: "When an object exits the frame completely and re-enters, annotators must decide whether to assign the same track ID (same object) or a new one (different object). This requires explicit guideline rules and consistent application." },
                                        { title: "Identity Switch", body: "Two objects crossing paths can cause an annotator to inadvertently swap their track IDs. This error is common, difficult to spot in batch review, and directly corrupts temporal model learning." },
                                        { title: "Frame Interpolation", body: "For high frame-rate video, annotating every frame is impractical. Interpolation guidelines — which frames to annotate, how to handle motion blur between keyframes — must be explicitly defined per project." }
                                    ].map((item, idx) => (
                                        <div key={idx} className="border-l-2 border-[var(--color-border)] pl-5 py-2 mb-6">
                                            <h4 className="text-sm font-semibold text-[var(--color-text-primary)]">{item.title}</h4>
                                            <p className="text-sm text-[var(--color-text-secondary)] mt-1 leading-relaxed">
                                                {item.body}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </section>
                    </AnimatedSection>

                    {/* SECTION 7: Quality Standards */}
                    <AnimatedSection>
                        <section id="quality-standards">
                            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-[var(--color-text-primary)] mb-6">
                                Quality Standards for CV Annotation
                            </h2>
                            <div className="text-base leading-relaxed text-[var(--color-text-secondary)] space-y-4">
                                <p>
                                    Inter-Annotator Agreement is the primary quality metric for computer vision annotation at Aeterna Data. IAA measures the degree to which two or more annotators agree on how to label the same item — and therefore measures the consistency and reliability of the annotation signal being fed into your model.
                                </p>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
                                    <div className="bg-[rgba(74,124,255,0.06)] border border-[rgba(74,124,255,0.15)] rounded-2xl p-6 flex flex-col justify-center">
                                        <div className="text-accent-cta text-3xl font-mono font-bold text-[var(--color-accent-cta)] mb-2" style={{ textShadow: "0 0 20px rgba(74,124,255,0.4)" }}>
                                            κ ≥ 0.80
                                        </div>
                                        <h3 className="text-base font-semibold text-[var(--color-text-primary)]">Cohen's Kappa</h3>
                                        <p className="text-sm text-[var(--color-text-secondary)] mt-1">
                                            Default pairwise IAA threshold for all standard CV production batches. Applied when two annotators label the same item independently.
                                        </p>
                                    </div>
                                    <div className="bg-[rgba(20,184,166,0.06)] border border-[rgba(20,184,166,0.15)] rounded-2xl p-6 flex flex-col justify-center">
                                        <div className="text-teal-400 text-3xl font-mono font-bold mb-2" style={{ color: "#2dd4bf", textShadow: "0 0 20px rgba(45,212,191,0.4)" }}>
                                            κ ≥ 0.75
                                        </div>
                                        <h3 className="text-base font-semibold text-[var(--color-text-primary)]">Fleiss' Kappa</h3>
                                        <p className="text-sm text-[var(--color-text-secondary)] mt-1">
                                            Multi-annotator IAA threshold. Applied on complex segmentation tasks and high-density scenes where three or more annotators verify the same item.
                                        </p>
                                    </div>
                                </div>

                                <h3 className="text-xl font-semibold text-[var(--color-text-primary)] mt-10 mb-4">
                                    What Poor IAA Actually Means for CV
                                </h3>
                                <p>
                                    A Cohen's Kappa below 0.60 in a CV annotation batch means annotators are effectively labeling the same objects differently — different box tightness, different polygon precision, different class assignments for ambiguous objects. A model trained on this data does not learn a consistent visual concept. It learns the noise of human disagreement. That noise becomes the model's prediction variance.
                                </p>

                                <div className="space-y-4 mt-8">
                                    {[
                                        { num: "01", title: "Annotator Calibration", body: "Before the pilot begins, annotators complete task-specific calibration exercises. Calibration results are reviewed against the ground truth before the annotator is assigned to production." },
                                        { num: "02", title: "Pilot Batch", body: "100–500 items annotated. IAA measured across all annotators. Results reviewed and approved in writing before production begins. AHT established per object class." },
                                        { num: "03", title: "Production IAA Every Batch", body: "Cohen's Kappa and Fleiss' Kappa measured on every production batch. Batches failing threshold are reworked before delivery at zero additional cost." },
                                        { num: "04", title: "Quality Report on Delivery", body: "Every delivery includes IAA scores, class distribution, rework log, AHT report, and annotator consistency notes. Full audit trail maintained." }
                                    ].map((stage, idx) => (
                                        <AnimatedSection key={idx} delay={idx * 0.06}>
                                            <div className="bg-[var(--color-bg-surface)] border border-[var(--color-border)] rounded-2xl p-6 relative overflow-hidden z-10">
                                                <div className="absolute top-0 right-0 -mt-4 -mr-2 font-mono text-7xl font-bold text-[rgba(255,255,255,0.03)] -z-10 select-none pointer-events-none">
                                                    {stage.num}
                                                </div>
                                                <h4 className="text-base font-semibold text-[var(--color-text-primary)]">{stage.title}</h4>
                                                <p className="text-sm text-[var(--color-text-secondary)] mt-2 leading-relaxed">
                                                    {stage.body}
                                                </p>
                                            </div>
                                        </AnimatedSection>
                                    ))}
                                </div>
                            </div>
                        </section>
                    </AnimatedSection>

                    {/* SECTION 8: The BYOT Model */}
                    <AnimatedSection>
                        <section id="byot-model">
                            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-[var(--color-text-primary)] mb-6">
                                The BYOT Model for CV Projects
                            </h2>
                            <div className="text-base leading-relaxed text-[var(--color-text-secondary)] space-y-4">
                                <p>
                                    BYOT — Bring Your Own Tool — means Aeterna Data's annotators work directly inside your labeling dashboard, annotation platform, or proprietary internal tool. We do not provide a platform. We do not ask you to export your images to a third-party service. We do not introduce a new tool into your data pipeline.
                                </p>
                                <p>
                                    For computer vision teams, this matters beyond data privacy. You have already built your annotation pipeline — your label taxonomy, your export format, your version control for datasets, your model training trigger. Introducing a new platform means rebuilding all of that. BYOT means your pipeline stays exactly as it is. We fit into it — not the other way around.
                                </p>

                                <div className="mt-6 flex flex-wrap gap-2">
                                    {[
                                        "CVAT", "Label Studio", "Roboflow", "Scale Studio", "Labelbox",
                                        "V7 Darwin", "SuperAnnotate", "Kili Technology",
                                        "Proprietary Internal Tools", "Custom Browser-Based Dashboards"
                                    ].map((tag, idx) => (
                                        <span key={idx} className="inline-flex items-center border border-[var(--color-border)] text-xs text-[var(--color-text-muted)] px-3 py-1 rounded-full">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <p className="text-sm text-[var(--color-text-muted)] mt-4 italic">
                                    If your platform is not listed, tell us during scoping. We work in any browser-based or desktop annotation environment where annotators can be onboarded with credentials.
                                </p>

                                <div className="bg-[rgba(74,124,255,0.06)] border border-[rgba(74,124,255,0.15)] rounded-xl p-5 mt-6">
                                    <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                                        Every annotator accesses your platform under a signed individual NDA. Access credentials are managed per-annotator, never shared, and revoked immediately upon engagement end. All access governed by the DPA and EU SCCs executed before work begins.
                                    </p>
                                </div>
                            </div>
                        </section>
                    </AnimatedSection>

                    {/* SECTION 9: Use Cases */}
                    <AnimatedSection>
                        <section id="use-cases">
                            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-[var(--color-text-primary)] mb-6">
                                Computer Vision Use Cases
                            </h2>
                            <p className="text-base leading-relaxed text-[var(--color-text-secondary)] mb-8">
                                Computer vision annotation is required across a wide range of AI applications. The following are the most common use cases Aeterna Data supports — each with specific annotation type recommendations.
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {[
                                    {
                                        title: "Autonomous Vehicles & ADAS",
                                        types: "Bounding boxes, Polygon, Semantic segmentation, Object tracking",
                                        body: "Pedestrian, vehicle, cyclist, road marking, and obstacle labeling for ADAS and full autonomous driving pipelines. High IAA requirements — κ ≥ 0.85 standard for safety-critical classes."
                                    },
                                    {
                                        title: "Medical Imaging",
                                        types: "Polygon, Semantic segmentation",
                                        body: "Lesion boundary delineation, organ segmentation, anomaly flagging in radiology and pathology imaging. Domain expert annotators required. Medical AI is annotation-intensive and tolerance for label error is near zero."
                                    },
                                    {
                                        title: "Robotics & Industrial Automation",
                                        types: "Bounding boxes, Polygon, Object tracking",
                                        body: "Object detection and manipulation target labeling for robotic pick-and-place, quality inspection, and assembly verification. Often requires 3D spatial awareness in annotation guidelines."
                                    },
                                    {
                                        title: "Retail & E-commerce",
                                        types: "Bounding boxes, Polygon",
                                        body: "Product detection, shelf monitoring, visual search, and inventory tracking. High-volume, relatively lower complexity — well-suited for volume discount engagement tiers."
                                    },
                                    {
                                        title: "Drone & Satellite Imagery",
                                        types: "Semantic segmentation, Bounding boxes",
                                        body: "Land use classification, infrastructure monitoring, agricultural analysis, and disaster response mapping. Top-down perspective requires specific annotator calibration on scale and object appearance."
                                    },
                                    {
                                        title: "Security & Surveillance",
                                        types: "Bounding boxes, Object tracking",
                                        body: "Person detection, vehicle tracking, and anomaly detection for security AI systems. Privacy-sensitive data — GDPR Article 28 DPA and individual annotator NDAs are particularly critical for this use case."
                                    }
                                ].map((uc, idx) => (
                                    <AnimatedSection key={idx} delay={idx * 0.06} className="h-full">
                                        <div className="bg-[var(--color-bg-surface)] border border-[var(--color-border)] rounded-2xl p-6 h-full transition-all duration-150">
                                            <h3 className="text-base font-semibold text-[var(--color-text-primary)]">{uc.title}</h3>
                                            <p className="text-xs uppercase tracking-widest text-[var(--color-text-muted)] mb-1 mt-3">Annotation types</p>
                                            <p className="font-mono text-xs text-[var(--color-accent-cta)]">{uc.types}</p>
                                            <p className="text-sm text-[var(--color-text-secondary)] mt-3 leading-relaxed">
                                                {uc.body}
                                            </p>
                                        </div>
                                    </AnimatedSection>
                                ))}
                            </div>
                        </section>
                    </AnimatedSection>

                    {/* SECTION 10: GDPR & Compliance */}
                    <AnimatedSection>
                        <section id="gdpr-compliance">
                            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-[var(--color-text-primary)] mb-6">
                                GDPR Compliance for CV Annotation
                            </h2>
                            <div className="text-base leading-relaxed text-[var(--color-text-secondary)] space-y-4 mb-8">
                                <p>
                                    Computer vision datasets frequently contain personal data. Images of people — faces, bodies, license plates, addresses visible on buildings — fall under GDPR's definition of personal data when they can be used to identify a living natural person. If your training dataset contains any such images, your annotation vendor is a Data Processor under GDPR Article 28.
                                </p>
                                <p>
                                    This has specific legal implications for the vendor relationship. A GDPR-compliant annotation engagement requires a signed Data Processing Agreement before any data is shared, EU Standard Contractual Clauses for transfers outside the EEA, documented processing purposes and retention policies, and individual accountability at annotator level.
                                </p>
                            </div>

                            <div className="space-y-0">
                                {[
                                    {
                                        title: "DPA + EU SCCs Before Data Sharing",
                                        body: "Aeterna Data executes a GDPR Article 28 Data Processing Agreement with EU Standard Contractual Clauses Module 2 (Controller-to-Processor) before any image data is shared. This is non-negotiable and applies to every CV project regardless of dataset size."
                                    },
                                    {
                                        title: "Individual Annotator NDAs",
                                        body: "Every annotator who accesses your image data signs an individual NDA before receiving platform credentials. Annotator identity is documented and maintained for the duration of the engagement."
                                    },
                                    {
                                        title: "EU AI Act Audit Readiness",
                                        body: "Computer vision systems used in high-risk contexts — autonomous vehicles, medical devices, biometric identification — fall under the EU AI Act's high-risk system classification. Aeterna Data's contract stack and quality documentation satisfy the audit trail requirements taking effect August 2026."
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

                    {/* SECTION 11: How to Start */}
                    <AnimatedSection>
                        <section id="how-to-start">
                            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-[var(--color-text-primary)] mb-6">
                                How to Start a CV Annotation Project
                            </h2>
                            <p className="text-base leading-relaxed text-[var(--color-text-secondary)] mb-8">
                                Starting a computer vision annotation project with Aeterna Data takes four steps. The entire process from first contact to pilot delivery typically runs 3–4 weeks.
                            </p>

                            <div className="flex flex-col">
                                {[
                                    {
                                        badge: "Step 01",
                                        title: "Send a Project Brief",
                                        body: "Describe your annotation task, data type (images or video), approximate volume, target object classes, labeling platform, and IAA threshold requirement. We will respond with a scoping proposal within 48 hours.",
                                        ctaStr: "Send Brief",
                                        ctaHref: "/contact"
                                    },
                                    {
                                        badge: "Step 02",
                                        title: "Execute Contracts",
                                        body: "NDA first. DPA and EU SCCs after the discovery call. MSA and SOW at pilot agreement. Contracts are staged to reduce legal review burden — typically 3–5 business days total from first contact to signed."
                                    },
                                    {
                                        badge: "Step 03",
                                        title: "Run the Paid Pilot",
                                        body: "100–500 items annotated inside your dashboard. Full IAA report on delivery. Annotator calibration completed before pilot begins. Pilot fee credited to first production invoice."
                                    },
                                    {
                                        badge: "Step 04",
                                        title: "Move to Production",
                                        body: "After written pilot approval, production begins under the signed SOW. Rate, volume, IAA threshold, and delivery format all fixed before the first production batch starts."
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
                            Ready to Label Your Visual Data?
                        </h2>
                        <p className="text-[var(--color-text-secondary)] text-lg mb-10 leading-relaxed max-w-2xl mx-auto">
                            Start with a paid pilot. Your dashboard. Your annotation platform. IAA measured from day one. Pilot fee credited to first invoice.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <Link
                                href="/contact?type=request-pilot"
                                className="bg-[var(--color-accent-cta)] text-white font-semibold px-8 py-3.5 rounded-lg hover:bg-[var(--color-accent-cta-hover)] transition-colors duration-200"
                            >
                                Request a CV Pilot
                            </Link>
                            <Link
                                href="/#services"
                                className="border border-[var(--color-border-subtle)] text-[var(--color-text-secondary)] px-8 py-3.5 rounded-lg hover:border-[var(--color-border-hover)] hover:text-[var(--color-text-primary)] transition-all duration-200"
                            >
                                View All Services
                            </Link>
                        </div>
                    </div>
                </section>
            </AnimatedSection>
        </main>
    );
}
