import type { Metadata } from 'next';
import Link from 'next/link';
import { ChevronRight, CheckCircle2, AlertTriangle, XCircle, Database, TrendingUp, BarChart2, RefreshCw } from 'lucide-react';
import AnimatedSection from '@/components/ui/AnimatedSection';
import StickyTableOfContents from '@/components/ui/StickyTableOfContents';

export const metadata: Metadata = {
    title: 'Data Validation & QA — Aeterna Data',
    description: 'Expert data validation and quality assurance for AI training datasets. Label consistency audits, IAA measurement, dataset bias detection, custom annotation workflows, and 48-hour scoping response. GDPR-compliant, BYOT model, Cohen\'s Kappa ≥ 0.80 every batch.',
    robots: {
        index: true,
        follow: true,
    },
};

const tocItems = [
    { id: 'what-is-data-validation', label: 'What Is Data Validation?' },
    { id: 'why-validation-matters', label: 'Why Validation Matters' },
    { id: 'label-consistency-audit', label: 'Label Consistency Audit' },
    { id: 'iaa-measurement', label: 'IAA Measurement' },
    { id: 'dataset-bias-detection', label: 'Bias Detection' },
    { id: 'annotation-guideline-review', label: 'Guideline Review' },
    { id: 'custom-annotation-workflows', label: 'Custom Workflows' },
    { id: 'quality-standards', label: 'Quality Standards' },
    { id: 'byot-model', label: 'The BYOT Model' },
    { id: 'when-to-validate', label: 'When to Validate' },
    { id: 'use-cases', label: 'Use Cases' },
    { id: 'gdpr-compliance', label: 'GDPR & Compliance' },
    { id: 'how-to-start', label: 'How to Start' },
];

export default function DataValidationPage() {
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
                        <span className="text-[var(--color-text-muted)]">Data Validation & QA</span>
                    </nav>

                    {/* Pre-heading Pill */}
                    <div
                        className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-8 border"
                        style={{ backgroundColor: "rgba(255,255,255,0.05)", borderColor: "rgba(255,255,255,0.10)" }}
                    >
                        <span className="text-[var(--color-text-muted)] text-xs font-semibold tracking-widest uppercase">
                            Data Validation & QA
                        </span>
                    </div>

                    {/* Headline */}
                    <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight leading-none text-[var(--color-text-primary)] max-w-5xl mx-auto">
                        Find the Errors Before<br />Your Model Learns From Them.
                    </h1>

                    {/* Subheadline */}
                    <p className="text-[var(--color-text-secondary)] text-lg lg:text-xl max-w-2xl mt-6">
                        Dataset auditing, label consistency checks, IAA measurement on existing annotations, bias detection, and bespoke annotation workflows for non-standard tasks. If your training data has a quality problem, we find it — and fix it — before it reaches your model.
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
                            <span className="text-[var(--color-text-primary)] font-bold">48hr</span>
                            <span className="text-[var(--color-text-muted)] text-xs uppercase tracking-widest mt-1">Scoping Response</span>
                        </div>
                        <span className="text-[var(--color-border-subtle)] hidden sm:block">|</span>
                        <div className="flex flex-col items-center text-center">
                            <span className="text-[var(--color-text-primary)] font-bold">BYOT</span>
                            <span className="text-[var(--color-text-muted)] text-xs uppercase tracking-widest mt-1">Your Dashboard</span>
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

                    {/* SECTION 1: What Is Data Validation? */}
                    <AnimatedSection>
                        <section id="what-is-data-validation">
                            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-[var(--color-text-primary)] mb-6">
                                What Is Data Validation & QA?
                            </h2>
                            <div className="text-base leading-relaxed text-[var(--color-text-secondary)] space-y-4">
                                <p>
                                    Data validation and quality assurance for AI training datasets is the systematic process of examining existing labeled data for errors, inconsistencies, and quality failures before that data is used to train a model. It is the difference between discovering a label quality problem in your validation dataset — where the cost is time — and discovering it after training, where the cost is time plus compute plus the opportunity cost of every milestone that slips while the pipeline is rebuilt.
                                </p>
                                <p>
                                    Data validation encompasses several distinct activities: label consistency audits that measure whether annotators applied labels according to the guideline, IAA measurement on datasets that were produced without inter-annotator agreement tracking, dataset bias detection that identifies systematic skew in class distribution or annotator behaviour, annotation guideline review that identifies ambiguity before production begins, and custom annotation workflow design for non-standard tasks that do not fit standard annotation type templates.
                                </p>
                                <p>
                                    At Aeterna Data, data validation is both a standalone service and an integrated component of every production annotation engagement. Every batch we deliver includes a quality report. Every pilot begins with a validation of the annotation guideline. And for clients who come to us with an existing dataset that needs auditing before model training begins — we treat that audit with the same methodological rigour as any production annotation project.
                                </p>
                            </div>
                        </section>
                    </AnimatedSection>

                    {/* SECTION 2: Why Validation Matters */}
                    <AnimatedSection>
                        <section id="why-validation-matters">
                            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-[var(--color-text-primary)] mb-6">
                                Why Data Validation Matters
                            </h2>
                            <div className="text-base leading-relaxed text-[var(--color-text-secondary)] space-y-4 mb-8">
                                <p>
                                    The classic machine learning axiom — Garbage In, Garbage Out — understates the problem. Garbage in does not merely produce garbage out. It produces a model that is confidently wrong in ways that are difficult to detect until the model is deployed. A model trained on inconsistently labeled data does not fail at random. It fails systematically — in exactly the directions that the label inconsistency pushes it.
                                </p>
                                <p>
                                    The costs of label quality failures compound across the ML development cycle. A labeling error discovered during annotation costs the price of rework — typically a fraction of the original annotation cost. The same error discovered during model evaluation costs the price of rework plus re-annotation plus model retraining. Discovered in production, it costs all of the above plus remediation, potentially plus regulatory exposure depending on the application domain.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                {[
                                    {
                                        stage: "Found During Annotation",
                                        cost: "Low",
                                        icon: CheckCircle2,
                                        color: "var(--color-accent-cta)",
                                        body: "Rework cost only. Batch flagged, reannotated, and delivered. No model retraining required."
                                    },
                                    {
                                        stage: "Found During Evaluation",
                                        cost: "Medium",
                                        icon: AlertTriangle,
                                        color: "rgba(245,158,11,0.9)",
                                        body: "Rework plus re-annotation plus model retraining. Weeks of engineering time and compute budget."
                                    },
                                    {
                                        stage: "Found in Production",
                                        cost: "High",
                                        icon: XCircle,
                                        color: "rgba(239,68,68,0.8)",
                                        body: "All of the above plus production remediation, user impact, and potential regulatory exposure in high-risk AI applications."
                                    }
                                ].map((col, idx) => (
                                    <AnimatedSection key={idx} delay={idx * 0.08} className="h-full">
                                        <div className="bg-[var(--color-bg-surface)] border border-[var(--color-border)] rounded-2xl p-6 text-center h-full flex flex-col">
                                            <div className="text-xs uppercase tracking-widest font-mono text-[var(--color-text-muted)]">
                                                {col.stage}
                                            </div>
                                            <div className="text-2xl font-bold mt-2 text-[var(--color-text-primary)]">
                                                {col.cost}
                                            </div>
                                            <col.icon className="w-8 h-8 mx-auto mt-4 mb-2" style={{ color: col.color }} aria-hidden="true" />
                                            <p className="text-sm text-[var(--color-text-secondary)] mt-3 leading-relaxed flex-grow">
                                                {col.body}
                                            </p>
                                        </div>
                                    </AnimatedSection>
                                ))}
                            </div>

                            <h3 className="text-xl font-semibold text-[var(--color-text-primary)] mt-10 mb-4">
                                The Hidden Cost of Assumed Quality
                            </h3>
                            <p className="text-base leading-relaxed text-[var(--color-text-secondary)]">
                                Most annotation quality failures are not visible in the labeled data itself. A dataset of 50,000 images with bounding boxes looks complete. The label files are formatted correctly. The class names are right. The boxes are present. What is not visible — without IAA measurement — is whether the boxes across annotators are consistent enough to constitute a reliable training signal. A dataset produced by five annotators with no calibration and no IAA tracking can look perfectly formed while containing systematic inconsistencies that will corrupt model training in ways that only become visible at evaluation.
                            </p>
                        </section>
                    </AnimatedSection>

                    {/* SECTION 3: Label Consistency Audit */}
                    <AnimatedSection>
                        <section id="label-consistency-audit">
                            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-[var(--color-text-primary)] mb-6">
                                Label Consistency Audit
                            </h2>
                            <div className="text-base leading-relaxed text-[var(--color-text-secondary)] space-y-4">
                                <p>
                                    A label consistency audit is a systematic review of an existing labeled dataset to identify inconsistencies in how annotation guidelines were applied — whether by a single annotator over time, across multiple annotators working in parallel, or across annotation batches produced at different points in the project timeline.
                                </p>
                                <p>
                                    Consistency audits are particularly valuable for datasets that were produced without inter-annotator agreement tracking — which describes most datasets produced by in-house teams, crowdsourcing platforms, and annotation vendors who do not measure IAA by default. The audit establishes the actual consistency of the existing dataset as a baseline — and identifies which portions of the dataset meet production quality standards and which require reannotation.
                                </p>

                                <h3 className="text-xl font-semibold text-[var(--color-text-primary)] mt-8 mb-4">
                                    What a Label Consistency Audit Covers
                                </h3>

                                <div className="space-y-0">
                                    {[
                                        { title: "Class Assignment Consistency", body: "Are ambiguous items assigned to the same class consistently across annotators? Class boundary disagreements are identified by measuring the distribution of class assignments for items that appear in multiple annotator queues." },
                                        { title: "Boundary Precision Consistency", body: "For spatial annotation tasks — bounding boxes, polygons, segmentation — are object boundaries drawn with consistent precision? Box tightness variance and polygon vertex placement consistency are measured across annotators." },
                                        { title: "Guideline Adherence", body: "Are annotators applying the annotation guideline as written? Common deviations — incorrect handling of occlusion, truncation, or overlapping objects — are identified and quantified across the dataset." },
                                        { title: "Annotator Drift", body: "Has annotation quality changed over time for individual annotators? Samples from early, mid, and late batches are compared to detect systematic drift in label quality or consistency." },
                                        { title: "Edge Case Handling", body: "Are ambiguous or unusual items handled consistently? Edge cases that the annotation guideline does not address explicitly are identified and flagged for guideline revision." },
                                        { title: "Format and Schema Compliance", body: "Do all labeled items conform to the required output format and schema? Structural errors — incorrect label formats, missing required fields, schema violations — are identified and documented." }
                                    ].map((item, idx) => (
                                        <AnimatedSection key={idx} delay={idx * 0.05}>
                                            <div className="border-l-2 border-[var(--color-border)] pl-5 py-2 mb-6">
                                                <h4 className="text-sm font-semibold text-[var(--color-text-primary)]">{item.title}</h4>
                                                <p className="text-sm text-[var(--color-text-secondary)] mt-1 leading-relaxed">
                                                    {item.body}
                                                </p>
                                            </div>
                                        </AnimatedSection>
                                    ))}
                                </div>

                                <h3 className="text-xl font-semibold text-[var(--color-text-primary)] mt-8 mb-4">
                                    Audit Output
                                </h3>
                                <p>
                                    A label consistency audit from Aeterna Data delivers three outputs: a consistency report that documents findings across all six dimensions with statistical analysis and sampled examples, a reannotation recommendation that identifies which dataset portions require rework and at what priority, and a guideline revision recommendation that identifies the specific ambiguities that drove the inconsistencies found — so they do not recur in future production batches.
                                </p>
                            </div>
                        </section>
                    </AnimatedSection>

                    {/* SECTION 4: IAA Measurement */}
                    <AnimatedSection>
                        <section id="iaa-measurement">
                            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-[var(--color-text-primary)] mb-6">
                                IAA Measurement on Existing Datasets
                            </h2>
                            <div className="text-base leading-relaxed text-[var(--color-text-secondary)] space-y-4 mb-8">
                                <p>
                                    Inter-Annotator Agreement measurement on an existing dataset is the process of retrospectively quantifying the consistency of annotation decisions across annotators — either by re-annotating a sample of the dataset with a second independent annotator and comparing results, or by analysing the existing annotation data where multiple annotators worked on overlapping items.
                                </p>
                                <p>
                                    IAA measurement is often requested by ML teams who inherited a dataset, purchased labeled data from a vendor, or produced a dataset in-house without formal IAA tracking — and now need to quantify its quality before committing it to model training. The measurement provides a defensible, methodology-backed quality score that can be presented to technical stakeholders, compliance teams, and regulatory auditors.
                                </p>
                            </div>

                            <h3 className="text-xl font-semibold text-[var(--color-text-primary)] mt-8 mb-4">
                                IAA Measurement Methods
                            </h3>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                {[
                                    {
                                        title: "Double Annotation Sample",
                                        tag: "Most Common",
                                        body: "A statistically representative sample of the dataset — typically 5–10% of total items — is re-annotated by a second independent annotator. Cohen's Kappa or Fleiss' Kappa is calculated between the original and new annotations. The result is an IAA score for the dataset with defined confidence intervals."
                                    },
                                    {
                                        title: "Adjudication Review",
                                        tag: "For Disputed Items",
                                        body: "Items where annotators disagreed are reviewed by a senior annotator or domain expert who makes a final adjudicated decision. The adjudication rate — the proportion of items requiring adjudication — is itself a quality metric for the dataset."
                                    },
                                    {
                                        title: "Cross-Annotator Analysis",
                                        tag: "For Multi-Annotator Datasets",
                                        body: "Where the dataset was produced by multiple annotators who worked on overlapping items, existing annotation data is analysed directly. Fleiss' Kappa is calculated across all annotators. Per-annotator consistency scores identify outliers."
                                    }
                                ].map((method, idx) => (
                                    <AnimatedSection key={idx} delay={idx * 0.08} className="h-full">
                                        <div className="bg-[var(--color-bg-surface)] border border-[var(--color-border)] rounded-2xl p-6 h-full flex flex-col">
                                            <h4 className="text-lg font-semibold text-[var(--color-text-primary)] mb-3">{method.title}</h4>
                                            <div>
                                                <span className="text-xs font-mono uppercase tracking-widest text-[var(--color-text-muted)] bg-[var(--color-bg-elevated)] px-2 py-0.5 rounded-full inline-block mb-3 border border-[rgba(255,255,255,0.05)]">
                                                    {method.tag}
                                                </span>
                                            </div>
                                            <p className="text-sm text-[var(--color-text-secondary)] mt-1 leading-relaxed flex-grow">
                                                {method.body}
                                            </p>
                                        </div>
                                    </AnimatedSection>
                                ))}
                            </div>

                            <h3 className="text-xl font-semibold text-[var(--color-text-primary)] mt-12 mb-4">
                                Interpreting IAA Scores
                            </h3>

                            <div className="border border-[var(--color-border)] rounded-xl overflow-hidden bg-[var(--color-bg-surface)]">
                                <table className="w-full text-left border-collapse">
                                    <thead className="bg-[var(--color-bg-elevated)] border-b border-[var(--color-border)]">
                                        <tr>
                                            <th scope="col" className="p-4 text-xs font-semibold uppercase tracking-widest text-[var(--color-text-muted)] w-1/4">Score Range</th>
                                            <th scope="col" className="p-4 text-xs font-semibold uppercase tracking-widest text-[var(--color-text-muted)] w-1/4">Agreement Level</th>
                                            <th scope="col" className="p-4 text-xs font-semibold uppercase tracking-widest text-[var(--color-text-muted)] w-2/4">Meaning & Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {[
                                            {
                                                range: "κ < 0.40",
                                                label: "Poor agreement",
                                                meaning: "Dataset has significant consistency problems. Major reannotation recommended before model training.",
                                                color: "rgba(239,68,68,0.8)"
                                            },
                                            {
                                                range: "0.40 – 0.59",
                                                label: "Moderate agreement",
                                                meaning: "Dataset has notable inconsistencies. Targeted reannotation of low-agreement classes or annotators recommended.",
                                                color: "rgba(245,158,11,0.9)"
                                            },
                                            {
                                                range: "0.60 – 0.79",
                                                label: "Substantial agreement",
                                                meaning: "Dataset is usable for model training. Some reannotation may improve performance on specific classes or edge cases.",
                                                color: "rgba(132,204,22,0.9)"
                                            },
                                            {
                                                range: "≥ 0.80",
                                                label: "Strong agreement",
                                                meaning: "Dataset meets Aeterna Data's production quality standard. No systematic reannotation recommended.",
                                                color: "var(--color-accent-cta)"
                                            }
                                        ].map((row, idx) => (
                                            <tr key={idx} className="border-b border-[var(--color-border)] last:border-b-0">
                                                <td className="p-4 align-top">
                                                    <span className="font-mono text-sm font-semibold text-[var(--color-text-primary)]">{row.range}</span>
                                                </td>
                                                <td className="p-4 align-top">
                                                    <span className="text-sm font-medium" style={{ color: row.color }}>{row.label}</span>
                                                </td>
                                                <td className="p-4 align-top">
                                                    <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">{row.meaning}</p>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </section>
                    </AnimatedSection>

                    {/* SECTION 5: Dataset Bias Detection */}
                    <AnimatedSection>
                        <section id="dataset-bias-detection">
                            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-[var(--color-text-primary)] mb-6">
                                Dataset Bias Detection
                            </h2>
                            <div className="text-base leading-relaxed text-[var(--color-text-secondary)] space-y-4">
                                <p>
                                    Dataset bias is a systematic skew in the composition or labeling of a training dataset that causes a model trained on that data to perform unequally across different input conditions, demographic groups, or real-world scenarios. Bias in training data does not require anyone to have acted in bad faith. It is the natural consequence of data collection processes that do not represent the full distribution of the real-world problem the model is intended to solve.
                                </p>
                                <p>
                                    For AI teams building models that will be deployed in real-world contexts — particularly in regulated domains like healthcare, financial services, HR, and law — dataset bias is not merely a performance problem. Under the EU AI Act, high-risk AI systems are required to undergo examination of training data for possible biases. Bias detection is a regulatory compliance activity, not only a model quality activity.
                                </p>

                                <h3 className="text-xl font-semibold text-[var(--color-text-primary)] mt-8 mb-4">
                                    Types of Dataset Bias
                                </h3>

                                <div className="space-y-0">
                                    {[
                                        { title: "Class Imbalance", body: "The dataset contains significantly more labeled instances of some classes than others. A fraud detection dataset with 98% legitimate transactions and 2% fraudulent ones trains a model that learns to predict 'legitimate' for everything — and achieves 98% accuracy while being useless." },
                                        { title: "Annotator Bias", body: "Individual annotators apply labels systematically differently from other annotators — not randomly, but in consistent directions that reflect the annotator's own background, assumptions, or interpretation of the guideline. Annotator bias is invisible in overall IAA scores if it is consistent within the annotator." },
                                        { title: "Selection Bias", body: "The data collection process over-represents certain conditions, contexts, or populations. A computer vision dataset collected in Western European cities will under-represent the visual environments of other regions — and a model trained on it will perform worse in those environments." },
                                        { title: "Label Bias", body: "Systematic errors in label assignment that are correlated with a specific attribute of the data — for example, a sentiment model whose training data consistently labels text by certain demographic groups as more negative than equivalent text by other groups." },
                                        { title: "Temporal Bias", body: "The dataset over-represents data from a specific time period whose patterns do not generalise to current or future conditions. Financial fraud patterns from 2019 may not reflect current fraud patterns — a model trained on them will underperform on recent data." },
                                        { title: "Confirmation Bias in Annotation", body: "Annotators who know the expected label distribution tend to produce labels that match those expectations — even when the data does not support them. This is particularly acute when annotators can see other annotators' labels before making their own judgment." }
                                    ].map((item, idx) => (
                                        <AnimatedSection key={idx} delay={idx * 0.05}>
                                            <div className="border-l-2 border-[var(--color-border)] pl-5 py-2 mb-6">
                                                <h4 className="text-sm font-semibold text-[var(--color-text-primary)]">{item.title}</h4>
                                                <p className="text-sm text-[var(--color-text-secondary)] mt-1 leading-relaxed">
                                                    {item.body}
                                                </p>
                                            </div>
                                        </AnimatedSection>
                                    ))}
                                </div>

                                <h3 className="text-xl font-semibold text-[var(--color-text-primary)] mt-8 mb-4">
                                    Bias Detection Methods
                                </h3>
                                <p>
                                    Aeterna Data's bias detection service combines quantitative analysis of label distributions with qualitative review of annotation patterns. We examine class distribution across the full dataset and across annotator-segmented subsets, measure per-annotator label distribution variance, test for systematic label differences across data attributes that should not predict the label, and review samples from the tails of the distribution to identify labeling patterns that warrant guideline revision.
                                </p>

                                <div className="bg-[rgba(74,124,255,0.06)] border border-[rgba(74,124,255,0.15)] rounded-xl p-5 mt-6">
                                    <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                                        <strong>Dataset bias detection under the EU AI Act:</strong> Article 10 of the EU AI Act requires providers of high-risk AI systems to implement data governance practices including examination of training data for possible biases that could lead to risks to fundamental rights. Aeterna Data's bias detection report provides the documented bias examination required for EU AI Act compliance for high-risk systems.
                                    </p>
                                </div>
                            </div>
                        </section>
                    </AnimatedSection>

                    {/* SECTION 6: Annotation Guideline Review */}
                    <AnimatedSection>
                        <section id="annotation-guideline-review">
                            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-[var(--color-text-primary)] mb-6">
                                Annotation Guideline Review
                            </h2>
                            <div className="text-base leading-relaxed text-[var(--color-text-secondary)] space-y-4">
                                <p>
                                    An annotation guideline is the specification document that tells annotators how to make every labeling decision. A well-written guideline defines every label class with positive examples and negative examples, provides explicit decision rules for edge cases and ambiguous items, specifies what annotators should do when no class applies, and is precise enough that two annotators who have never communicated will apply it the same way.
                                </p>
                                <p>
                                    Most annotation guidelines fall short of this standard — not because the teams that wrote them were careless, but because the difficulty of anticipating every edge case in advance is genuinely hard. Edge cases only become visible after annotation begins. Guidelines are frequently updated mid-project as edge cases emerge — but updates that are not applied retroactively to already-annotated items create inconsistencies between early and late batches.
                                </p>

                                <h3 className="text-xl font-semibold text-[var(--color-text-primary)] mt-8 mb-4">
                                    The Cost of a Poor Guideline
                                </h3>
                                <p>
                                    A poor annotation guideline is the most common root cause of low IAA. When Aeterna Data measures low IAA on a pilot batch, the first diagnostic question is: is this a guideline problem or an annotator problem? A guideline problem means two careful, competent annotators will disagree on the same item because the guideline does not resolve the ambiguity between them. An annotator problem means one annotator is not following the guideline correctly. The interventions are different — and conflating them wastes time and produces the wrong fix.
                                </p>

                                <h3 className="text-xl font-semibold text-[var(--color-text-primary)] mt-8 mb-4">
                                    What a Guideline Review Covers
                                </h3>

                                <div className="space-y-0">
                                    {[
                                        { title: "Class Definition Completeness", body: "Is every label class defined with both positive examples (items that should receive this label) and negative examples (items that look similar but should not)? Definitions without negative examples produce boundary disagreements." },
                                        { title: "Edge Case Coverage", body: "Does the guideline address the most common edge cases for this task type? For NER: nested entities, abbreviated references, coreference. For CV: occluded objects, truncated objects, ambiguous class membership. Missing edge case rules are identified and resolution language proposed." },
                                        { title: "Catch-All Category Definition", body: "Is there a defined category for items that do not fit any of the main classes — and is it defined by explicit exclusion criteria rather than as a residual catch-all? An undefined catch-all category will absorb annotator uncertainty and grow to dominate the label distribution." },
                                        { title: "Example Quality", body: "Are the guideline examples representative of the data the annotators will actually see? Examples drawn from clean, unambiguous data do not prepare annotators for the ambiguous, real-world items that drive IAA disagreement." },
                                        { title: "Consistency with Schema", body: "Is the guideline consistent with the annotation schema implemented in the labeling platform? Mismatches between guideline language and platform UI — different label names, missing categories, extra options not in the guideline — are a common source of annotator confusion." }
                                    ].map((item, idx) => (
                                        <AnimatedSection key={idx} delay={idx * 0.05}>
                                            <div className="border-l-2 border-[var(--color-border)] pl-5 py-2 mb-6">
                                                <h4 className="text-sm font-semibold text-[var(--color-text-primary)]">{item.title}</h4>
                                                <p className="text-sm text-[var(--color-text-secondary)] mt-1 leading-relaxed">
                                                    {item.body}
                                                </p>
                                            </div>
                                        </AnimatedSection>
                                    ))}
                                </div>

                                <h3 className="text-xl font-semibold text-[var(--color-text-primary)] mt-8 mb-4">
                                    Guideline Review Output
                                </h3>
                                <p>
                                    A guideline review from Aeterna Data delivers a written assessment of each dimension above, with specific ambiguities identified and resolution language proposed for each. The review is delivered as an annotated version of the original guideline document — comments inline at the point of the issue, with proposed revision text. Clients can accept, modify, or reject each proposed revision. The final revised guideline is used as the production annotation specification.
                                </p>
                            </div>
                        </section>
                    </AnimatedSection>

                    {/* SECTION 7: Custom Annotation Workflows */}
                    <AnimatedSection>
                        <section id="custom-annotation-workflows">
                            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-[var(--color-text-primary)] mb-6">
                                Custom Annotation Workflows
                            </h2>
                            <div className="text-base leading-relaxed text-[var(--color-text-secondary)] space-y-4 mb-8">
                                <p>
                                    Not every annotation task fits a standard template. Bounding boxes, NER, preference ranking, and sentiment classification cover the majority of training data needs — but AI teams building models for non-standard tasks frequently need annotation workflows that do not exist as off-the-shelf task types in standard labeling platforms.
                                </p>
                                <p>
                                    Aeterna Data's custom annotation workflow service is the bespoke offering within Data Validation & QA. We design, specify, and implement annotation workflows for tasks that require novel task structures, hybrid annotation approaches, or domain-specific evaluation frameworks that standard task types do not accommodate. Custom scoping proposals are delivered within 48 hours of brief receipt.
                                </p>
                            </div>

                            <h3 className="text-xl font-semibold text-[var(--color-text-primary)] mt-8 mb-4">
                                Examples of Custom Annotation Tasks
                            </h3>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {[
                                    { title: "Multi-Step Annotation Pipelines", body: "Tasks where the annotation process requires sequential steps — first a coarse classification, then a fine-grained sub-classification conditional on the first step, then an attribute annotation conditional on the second. Each step has its own IAA threshold and quality gate." },
                                    { title: "Comparative Document Evaluation", body: "Tasks requiring annotators to evaluate two documents against each other on multiple dimensions simultaneously — used in legal document comparison, contract clause evaluation, and academic citation relevance assessment." },
                                    { title: "Temporal Sequence Annotation", body: "Tasks requiring annotators to label events, states, or relationships across a temporal sequence — clinical notes where the annotator must track how a patient's condition changes across multiple entries over time." },
                                    { title: "Multimodal Annotation", body: "Tasks requiring simultaneous annotation of aligned text and image data — image caption quality assessment, visual question answering data creation, and document layout understanding tasks that require both textual and spatial labeling." },
                                    { title: "Hierarchical Taxonomy Annotation", body: "Tasks requiring annotation against a multi-level hierarchical taxonomy where the annotator must first assign a top-level category and then navigate to the appropriate sub-category. IAA must be measured at each level of the hierarchy independently." },
                                    { title: "Domain-Specific Rubric Design", body: "For tasks where no standard rubric exists — particularly in emerging AI application domains — Aeterna Data can design the annotation rubric from scratch, including IAA threshold recommendations, annotator selection criteria, and calibration protocol design." }
                                ].map((ex, idx) => (
                                    <AnimatedSection key={idx} delay={idx * 0.06} className="h-full">
                                        <div className="bg-[var(--color-bg-surface)] border border-[var(--color-border)] rounded-2xl p-6 h-full transition-all duration-150">
                                            <h4 className="text-base font-semibold text-[var(--color-text-primary)]">{ex.title}</h4>
                                            <p className="text-sm text-[var(--color-text-secondary)] mt-2 leading-relaxed">
                                                {ex.body}
                                            </p>
                                        </div>
                                    </AnimatedSection>
                                ))}
                            </div>

                            <h3 className="text-xl font-semibold text-[var(--color-text-primary)] mt-10 mb-4">
                                Custom Scoping — 48 Hours
                            </h3>
                            <p className="text-base leading-relaxed text-[var(--color-text-secondary)] mb-6">
                                Every custom annotation workflow request receives a scoping proposal within 48 hours of brief receipt. The proposal includes: recommended task structure with annotator workflow diagram, estimated Average Handling Time per item, recommended IAA measurement approach for the custom task type, annotator selection criteria, and a draft SOW for review. No commitment is required to receive a scoping proposal.
                            </p>

                            <div className="bg-[rgba(74,124,255,0.06)] border border-[rgba(74,124,255,0.15)] rounded-xl p-5">
                                <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                                    48-hour custom scoping is a core Aeterna Data commitment — not a best-effort SLA. If we cannot deliver a scoping proposal within 48 business hours of receiving a complete brief, we will tell you that during the brief review, before the clock starts.
                                </p>
                            </div>
                        </section>
                    </AnimatedSection>

                    {/* SECTION 8: Quality Standards */}
                    <AnimatedSection>
                        <section id="quality-standards">
                            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-[var(--color-text-primary)] mb-6">
                                Quality Standards for Data Validation
                            </h2>
                            <div className="text-base leading-relaxed text-[var(--color-text-secondary)] space-y-4">
                                <p>
                                    Data validation and QA work at Aeterna Data is held to the same IAA standards as production annotation work. A validation audit that does not itself meet IAA threshold — where two validators disagree on which items have quality problems — is not a reliable audit. We measure IAA on validation tasks the same way we measure it on annotation tasks: every batch, both metrics, rework if threshold is not met.
                                </p>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
                                    <div className="bg-[rgba(74,124,255,0.06)] border border-[rgba(74,124,255,0.15)] rounded-2xl p-6 flex flex-col justify-center">
                                        <div className="text-[var(--color-accent-cta)] text-3xl font-mono font-bold mb-2" style={{ textShadow: "0 0 20px rgba(74,124,255,0.4)" }}>
                                            κ ≥ 0.80
                                        </div>
                                        <h3 className="text-base font-semibold text-[var(--color-text-primary)]">Cohen's Kappa</h3>
                                        <p className="text-sm text-[var(--color-text-secondary)] mt-1">
                                            Applied to validation tasks where two validators independently review the same labeled items and assess quality. Pairwise agreement on quality judgments is measured before the validation report is delivered.
                                        </p>
                                    </div>
                                    <div className="bg-[rgba(20,184,166,0.06)] border border-[rgba(20,184,166,0.15)] rounded-2xl p-6 flex flex-col justify-center">
                                        <div className="text-teal-400 text-3xl font-mono font-bold mb-2" style={{ color: "#2dd4bf", textShadow: "0 0 20px rgba(45,212,191,0.4)" }}>
                                            κ ≥ 0.75
                                        </div>
                                        <h3 className="text-base font-semibold text-[var(--color-text-primary)]">Fleiss' Kappa</h3>
                                        <p className="text-sm text-[var(--color-text-secondary)] mt-1">
                                            Applied where three or more validators review the same items — used for bias detection reviews and guideline assessment tasks where multiple independent perspectives are required.
                                        </p>
                                    </div>
                                </div>

                                <h3 className="text-xl font-semibold text-[var(--color-text-primary)] mt-10 mb-4">
                                    The Validation Report
                                </h3>
                                <p>
                                    Every data validation engagement from Aeterna Data delivers a structured validation report. The report is designed to be presentable to technical stakeholders, ML team leads, and — where relevant — regulatory compliance reviewers.
                                </p>

                                <div className="space-y-0 mt-6">
                                    {[
                                        { title: "Executive Summary", body: "A non-technical summary of findings, overall quality assessment, and top-line recommendations. Designed for stakeholders who need the conclusion without the methodology." },
                                        { title: "IAA Analysis", body: "Full IAA scores with methodology documentation — which metric was applied, on what sample, by how many validators, with what threshold. Cohen's Kappa and Fleiss' Kappa both reported where applicable." },
                                        { title: "Consistency Findings", body: "Specific inconsistencies identified — by class, by annotator, by batch period, or by data characteristic — with sampled examples and frequency counts." },
                                        { title: "Bias Analysis", body: "Label distribution analysis, annotator variance analysis, and any systematic bias patterns identified — with statistical documentation and examples." },
                                        { title: "Reannotation Recommendation", body: "A prioritised list of dataset portions recommended for reannotation — by class, by annotator, or by batch — with estimated volume and effort." },
                                        { title: "Guideline Revision Recommendation", body: "Specific guideline ambiguities identified as root causes of consistency failures, with proposed revision language for each." }
                                    ].map((comp, idx) => (
                                        <AnimatedSection key={idx} delay={idx * 0.05}>
                                            <div className="border-l-2 border-[var(--color-border)] pl-5 py-2 mb-6">
                                                <h4 className="text-sm font-semibold text-[var(--color-text-primary)]">{comp.title}</h4>
                                                <p className="text-sm text-[var(--color-text-secondary)] mt-1 leading-relaxed">{comp.body}</p>
                                            </div>
                                        </AnimatedSection>
                                    ))}
                                </div>
                            </div>
                        </section>
                    </AnimatedSection>

                    {/* SECTION 9: The BYOT Model */}
                    <AnimatedSection>
                        <section id="byot-model">
                            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-[var(--color-text-primary)] mb-6">
                                The BYOT Model for Validation Projects
                            </h2>
                            <div className="text-base leading-relaxed text-[var(--color-text-secondary)] space-y-4">
                                <p>
                                    BYOT — Bring Your Own Tool — applies to data validation work as directly as it does to production annotation. When Aeterna Data validates your dataset, our validators work inside your annotation platform or data management environment. We do not ask you to export your labeled data to a third-party validation service. We access your data where it already lives.
                                </p>
                                <p>
                                    For validation projects specifically, BYOT has an additional practical benefit: validators see the data in the same environment where it was originally annotated. They see the same task UI, the same label options, and the same visual context that the original annotators used. This eliminates the risk of validation errors caused by format conversion, context loss in data export, or differences in how the annotation schema is represented in a different tool.
                                </p>

                                <div className="mt-6 flex flex-wrap gap-2">
                                    {[
                                        "CVAT", "Label Studio", "Labelbox", "Roboflow", "Scale Studio", "Prodigy",
                                        "Doccano", "SuperAnnotate", "Argilla", "Custom Platforms", "Internal Tools",
                                        "Direct Dataset File Review (CSV, JSON, JSONL, XML, Parquet)"
                                    ].map((tag, idx) => (
                                        <span key={idx} className="inline-flex items-center border border-[var(--color-border)] text-xs text-[var(--color-text-muted)] px-3 py-1 rounded-full">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <p className="text-sm text-[var(--color-text-muted)] mt-5 italic leading-relaxed">
                                    For validation projects where platform access is not available, Aeterna Data can validate directly from exported dataset files in standard formats. File-based validation is specified in the SOW and does not affect the IAA measurement methodology.
                                </p>
                            </div>
                        </section>
                    </AnimatedSection>

                    {/* SECTION 10: When to Validate */}
                    <AnimatedSection>
                        <section id="when-to-validate">
                            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-[var(--color-text-primary)] mb-6">
                                When to Run Data Validation
                            </h2>
                            <p className="text-base leading-relaxed text-[var(--color-text-secondary)] mb-8">
                                Data validation is most valuable at four points in the ML development lifecycle. Each has a different objective and a different validation scope.
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {[
                                    {
                                        timing: "Before Model Training",
                                        icon: Database,
                                        title: "Pre-Training Validation",
                                        body: "Validate an existing dataset before committing it to a training run. Establishes IAA baseline, identifies class imbalances, detects annotator drift, and flags guideline ambiguities that produced inconsistencies.",
                                        bestFor: "Inherited datasets, purchased datasets, datasets produced without formal IAA tracking."
                                    },
                                    {
                                        timing: "Before Production Scale-Up",
                                        icon: TrendingUp,
                                        title: "Pre-Scale Validation",
                                        body: "Validate a pilot dataset before committing to production volume. Confirms that the annotation quality achieved in the pilot is sustainable at scale and that the annotator calibration will hold.",
                                        bestFor: "New annotation projects moving from pilot to production."
                                    },
                                    {
                                        timing: "After Model Evaluation",
                                        icon: BarChart2,
                                        title: "Diagnostic Validation",
                                        body: "Validate the training dataset after model evaluation reveals specific capability gaps or failure modes. Identifies whether the failure is a data quality problem — and if so, which portion of the dataset is responsible.",
                                        bestFor: "Models with identified performance problems whose root cause is unclear."
                                    },
                                    {
                                        timing: "Ongoing",
                                        icon: RefreshCw,
                                        title: "Continuous QA",
                                        body: "Ongoing validation of production annotation batches as part of an active annotation engagement. IAA measured every batch, drift monitored across the engagement, and validation reports delivered with every dataset delivery.",
                                        bestFor: "Active annotation engagements where training data is produced continuously."
                                    }
                                ].map((card, idx) => (
                                    <AnimatedSection key={idx} delay={idx * 0.08} className="h-full">
                                        <div className="bg-[var(--color-bg-surface)] border border-[var(--color-border)] rounded-2xl p-6 h-full flex flex-col">
                                            <div className="text-xs font-mono uppercase tracking-widest text-[var(--color-accent-cta)]">
                                                {card.timing}
                                            </div>
                                            <card.icon className="w-5 h-5 text-[var(--color-text-muted)] mt-3 mb-2" aria-hidden="true" />
                                            <h3 className="text-lg font-semibold text-[var(--color-text-primary)]">
                                                {card.title}
                                            </h3>
                                            <p className="text-sm text-[var(--color-text-secondary)] mt-2 leading-relaxed flex-grow">
                                                {card.body}
                                            </p>
                                            <div className="mt-4 pt-3 border-t border-[var(--color-border-subtle)]">
                                                <div className="text-xs uppercase tracking-widest text-[var(--color-text-muted)] mb-1">
                                                    Best for
                                                </div>
                                                <p className="text-xs italic text-[var(--color-text-secondary)]">
                                                    {card.bestFor}
                                                </p>
                                            </div>
                                        </div>
                                    </AnimatedSection>
                                ))}
                            </div>
                        </section>
                    </AnimatedSection>

                    {/* SECTION 11: Use Cases */}
                    <AnimatedSection>
                        <section id="use-cases">
                            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-[var(--color-text-primary)] mb-6">
                                Data Validation Use Cases
                            </h2>
                            <p className="text-base leading-relaxed text-[var(--color-text-secondary)] mb-8">
                                Data validation and QA services are applicable across all annotation types and all AI development stages. The following are the most common use cases Aeterna Data supports.
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {[
                                    {
                                        title: "Inherited Dataset Audit",
                                        applicable: "All annotation types",
                                        body: "An ML team has acquired, inherited, or been handed a labeled dataset with no documentation of annotation quality. Before training begins, they need an independent IAA measurement and consistency audit to establish whether the dataset meets their quality threshold."
                                    },
                                    {
                                        title: "Pre-Training Quality Gate",
                                        applicable: "CV, NLP, RLHF datasets",
                                        body: "A dataset produced by a previous annotation vendor or in-house team is ready for training — but the team wants independent validation before committing compute budget. A pre-training audit provides a defensible quality score and a reannotation recommendation for any portions that fall below threshold."
                                    },
                                    {
                                        title: "EU AI Act Compliance Documentation",
                                        applicable: "High-risk AI systems",
                                        body: "An AI team building a high-risk system under the EU AI Act needs documented evidence of data quality examination for their technical documentation file. Aeterna Data's validation report provides the IAA measurement, bias analysis, and data governance documentation required for EU AI Act Article 10 compliance."
                                    },
                                    {
                                        title: "Vendor Quality Verification",
                                        applicable: "All annotation types",
                                        body: "An ML team has received a labeled dataset from an annotation vendor who claimed a specific quality standard. Independent validation confirms or challenges the claimed quality — with IAA scores, consistency findings, and a reannotation scope if the delivered quality falls below the contracted standard."
                                    },
                                    {
                                        title: "Guideline Revision Before Scale",
                                        applicable: "NLP, RLHF, CV",
                                        body: "An annotation project is moving from a small pilot to production scale. Before scale-up, the annotation guideline is reviewed and revised to address edge cases identified during the pilot — preventing the propagation of pilot-phase inconsistencies into the full dataset."
                                    },
                                    {
                                        title: "Custom Task Design",
                                        applicable: "Non-standard tasks",
                                        body: "An AI team needs annotation for a task type that does not fit standard annotation templates. Custom workflow design, rubric specification, IAA methodology selection, and annotator selection criteria are all scoped and delivered in a 48-hour proposal."
                                    }
                                ].map((uc, idx) => (
                                    <AnimatedSection key={idx} delay={idx * 0.06} className="h-full">
                                        <div className="bg-[var(--color-bg-surface)] border border-[var(--color-border)] rounded-2xl p-6 h-full transition-all duration-150">
                                            <h3 className="text-base font-semibold text-[var(--color-text-primary)]">{uc.title}</h3>
                                            <p className="text-xs uppercase tracking-widest text-[var(--color-text-muted)] mb-1 mt-3">Applicable to</p>
                                            <p className="font-mono text-xs text-[var(--color-accent-cta)] leading-relaxed">{uc.applicable}</p>
                                            <p className="text-sm text-[var(--color-text-secondary)] mt-3 leading-relaxed">
                                                {uc.body}
                                            </p>
                                        </div>
                                    </AnimatedSection>
                                ))}
                            </div>
                        </section>
                    </AnimatedSection>

                    {/* SECTION 12: GDPR Compliance */}
                    <AnimatedSection>
                        <section id="gdpr-compliance">
                            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-[var(--color-text-primary)] mb-6">
                                GDPR Compliance for Data Validation
                            </h2>
                            <div className="text-base leading-relaxed text-[var(--color-text-secondary)] space-y-4 mb-8">
                                <p>
                                    Data validation work involves the same personal data exposure as the original annotation work — often more, because validators must read and evaluate existing labels in the context of the full data item. If the original dataset contained personal data, the validation engagement involves personal data processing under GDPR Article 28.
                                </p>
                                <p>
                                    For validation projects where Aeterna Data reviews an existing dataset, the same full contract stack applies as for production annotation: DPA and EU SCCs before any dataset is shared, individual annotator NDAs before any validator accesses the data, and the same BYOT model — validators work inside your environment, not theirs.
                                </p>
                            </div>

                            <div className="space-y-0">
                                {[
                                    {
                                        title: "DPA + EU SCCs Before Dataset Access",
                                        body: "Aeterna Data executes a GDPR Article 28 DPA with EU SCCs Module 2 before accessing any labeled dataset for validation. This applies even if the dataset has been pseudonymised — pseudonymisation does not remove the personal data classification under GDPR if re-identification is possible."
                                    },
                                    {
                                        title: "Individual Validator NDAs",
                                        body: "Every validator who accesses your dataset signs an individual NDA before receiving access credentials or dataset files. For validation projects involving sensitive datasets — medical, legal, financial — additional confidentiality documentation is available on request."
                                    },
                                    {
                                        title: "EU AI Act Article 10 Documentation",
                                        body: "For high-risk AI systems, Aeterna Data's validation report is designed to serve as the data quality documentation required under EU AI Act Article 10 — with IAA methodology, bias analysis, and quality findings documented in a format suitable for technical documentation files and conformity assessment."
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

                    {/* SECTION 13: How to Start */}
                    <AnimatedSection>
                        <section id="how-to-start">
                            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-[var(--color-text-primary)] mb-6">
                                How to Start a Data Validation Project
                            </h2>
                            <p className="text-base leading-relaxed text-[var(--color-text-secondary)] mb-8">
                                Starting a data validation project with Aeterna Data is faster than a production annotation engagement — because there is no annotator calibration phase. The process runs from brief to validation report delivery in as little as two weeks for standard dataset audits.
                            </p>

                            <div className="flex flex-col">
                                {[
                                    {
                                        badge: "Step 01",
                                        title: "Send a Validation Brief",
                                        body: "Describe your dataset — annotation type, approximate size, how it was produced, what quality documentation exists, what questions you need answered, and your timeline. Include your annotation guideline if one exists. We will respond with a scoping proposal within 48 hours.",
                                        ctaStr: "Send Brief",
                                        ctaHref: "/contact"
                                    },
                                    {
                                        badge: "Step 02",
                                        title: "Execute Contracts",
                                        body: "NDA first. DPA and EU SCCs before any dataset is shared. MSA and SOW at validation agreement. For validation projects, the SOW specifies validation scope, methodology, IAA threshold, and report format — not annotation volume or hourly rate."
                                    },
                                    {
                                        badge: "Step 03",
                                        title: "Dataset Access",
                                        body: "Validators access your dataset inside your annotation platform or via agreed file transfer for file-based validation. No dataset is exported to a third-party environment at any point."
                                    },
                                    {
                                        badge: "Step 04",
                                        title: "Validation + IAA Measurement",
                                        body: "Validation runs according to the methodology specified in the SOW. IAA measured across all validators. Findings documented with examples and statistical analysis."
                                    },
                                    {
                                        badge: "Step 05",
                                        title: "Validation Report Delivery",
                                        body: "Full validation report delivered — executive summary, IAA analysis, consistency findings, bias analysis, reannotation recommendation, and guideline revision recommendation. Debrief call included to walk through findings."
                                    }
                                ].map((step, idx, arr) => (
                                    <AnimatedSection key={idx} delay={idx * 0.08} className="flex flex-col gap-2">
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
                            Ready to Audit Your Dataset?
                        </h2>
                        <p className="text-[var(--color-text-secondary)] text-lg mb-10 leading-relaxed max-w-2xl mx-auto">
                            Send us your validation brief. Scoping proposal within 48 hours. IAA-measured validation report. EU AI Act-ready documentation included. No long-term commitment required.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <Link
                                href="/contact?type=project-brief"
                                className="bg-[var(--color-accent-cta)] text-white font-semibold px-8 py-3.5 rounded-lg hover:bg-[var(--color-accent-cta-hover)] transition-colors duration-200"
                            >
                                Request a Validation Audit
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
