import type { Metadata } from 'next';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import AnimatedSection from '@/components/ui/AnimatedSection';
import StickyTableOfContents from '@/components/ui/StickyTableOfContents';

export const metadata: Metadata = {
    title: 'Advanced NLP & Multilingual Annotation — Aeterna Data',
    description: "Expert NLP annotation services for EU AI teams. Named Entity Recognition, intent labeling, deep sentiment analysis, translation QA, and multilingual linguistic pipelines. GDPR-compliant, BYOT model, IAA-measured. Cohen's Kappa ≥ 0.80 every batch.",
    robots: {
        index: true,
        follow: true,
    },
};

const tocItems = [
    { id: 'what-is-nlp-annotation', label: 'What Is NLP Annotation?' },
    { id: 'annotation-types', label: 'Annotation Types' },
    { id: 'named-entity-recognition', label: 'Named Entity Recognition' },
    { id: 'intent-and-slot-labeling', label: 'Intent & Slot Labeling' },
    { id: 'sentiment-analysis', label: 'Sentiment Analysis' },
    { id: 'semantic-textual-similarity', label: 'Semantic Textual Similarity' },
    { id: 'translation-qa', label: 'Translation QA' },
    { id: 'multilingual-annotation', label: 'Multilingual Annotation' },
    { id: 'quality-standards', label: 'Quality Standards' },
    { id: 'byot-model', label: 'The BYOT Model' },
    { id: 'use-cases', label: 'Use Cases' },
    { id: 'gdpr-compliance', label: 'GDPR & Compliance' },
    { id: 'how-to-start', label: 'How to Start' },
];

export default function AdvancedNlpPage() {
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
                        <span className="text-[var(--color-text-muted)]">Advanced NLP & Multilingual</span>
                    </nav>

                    {/* Pre-heading Pill */}
                    <div
                        className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-8 border"
                        style={{ backgroundColor: "rgba(255,255,255,0.05)", borderColor: "rgba(255,255,255,0.10)" }}
                    >
                        <span className="text-[var(--color-text-muted)] text-xs font-semibold tracking-widest uppercase">
                            Advanced NLP & Multilingual Linguistic Analysis
                        </span>
                    </div>

                    {/* Headline */}
                    <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight leading-none text-[var(--color-text-primary)] max-w-5xl mx-auto">
                        Annotation That Understands Language,<br />Not Just Labels It.
                    </h1>

                    {/* Subheadline */}
                    <p className="text-[var(--color-text-secondary)] text-lg lg:text-xl max-w-2xl mt-6">
                        Academic-grade text annotation for complex LLM training pipelines. Named Entity Recognition, intent labeling, deep semantic tagging, sentiment analysis, translation QA, and multilingual linguistic pipelines. Built inside your environment. IAA-measured. GDPR-compliant.
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

                    {/* SECTION 1: What Is NLP Annotation? */}
                    <AnimatedSection>
                        <section id="what-is-nlp-annotation">
                            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-[var(--color-text-primary)] mb-6">
                                What Is NLP Annotation?
                            </h2>
                            <div className="text-base leading-relaxed text-[var(--color-text-secondary)] space-y-4">
                                <p>
                                    Natural Language Processing annotation is the process of labeling text data so that machine learning models can learn to understand, classify, extract, and generate human language. Without accurately labeled text data, an NLP model has no ground truth to learn from — no way to distinguish a company name from a location, a positive sentiment from a sarcastic one, or an instruction it should follow from one it should refuse.
                                </p>
                                <p>
                                    NLP annotation is fundamentally harder than most annotation tasks appear from the outside. Language is ambiguous, context-dependent, and culturally loaded. Two annotators reading the same sentence may assign different intent labels not because one is wrong — but because the guideline was not specific enough to resolve the ambiguity. This is the central challenge of NLP annotation quality: writing guidelines that are precise enough to produce consistent labels across annotators, and measuring that consistency with IAA before the inconsistency reaches your model.
                                </p>
                                <p>
                                    At Aeterna Data, NLP annotation is treated as a linguistic task, not a tagging task. Our annotators are selected for structural language comprehension — the ability to parse sentence semantics, resolve coreference, and apply multi-dimensional evaluation frameworks consistently. IAA is measured on every batch. Every delivery includes a quality report.
                                </p>
                            </div>
                        </section>
                    </AnimatedSection>

                    {/* SECTION 2: Annotation Types */}
                    <AnimatedSection>
                        <section id="annotation-types">
                            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-[var(--color-text-primary)] mb-6">
                                The Five Core NLP Annotation Types
                            </h2>
                            <div className="text-base leading-relaxed text-[var(--color-text-secondary)] mb-8">
                                <p>
                                    Text annotation encompasses a range of task types — from straightforward entity tagging to complex multi-dimensional sentiment analysis. The right annotation type depends on your model architecture, your training objective, and the linguistic complexity of your target domain.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {[
                                    {
                                        title: "Named Entity Recognition", tag: "Entity Extraction",
                                        body: "Identifying and classifying named entities in text — people, organisations, locations, dates, products, and domain-specific concepts.",
                                        href: "#named-entity-recognition"
                                    },
                                    {
                                        title: "Intent & Slot Labeling", tag: "Dialogue Systems",
                                        body: "Classifying the intent behind an utterance and extracting the structured slots that carry the task-relevant information within it.",
                                        href: "#intent-and-slot-labeling"
                                    },
                                    {
                                        title: "Sentiment Analysis", tag: "Opinion Mining",
                                        body: "Classifying the emotional polarity or nuanced sentiment of text — from basic positive/negative to multi-dimensional aspect-based sentiment analysis.",
                                        href: "#sentiment-analysis"
                                    },
                                    {
                                        title: "Semantic Textual Similarity", tag: "Meaning Equivalence",
                                        body: "Judging whether two text passages convey the same meaning, a related meaning, or contradictory information — used in NLI, QA, and retrieval model training.",
                                        href: "#semantic-textual-similarity"
                                    },
                                    {
                                        title: "Translation QA", tag: "Multilingual Quality",
                                        body: "Human evaluation of machine translation output — assessing fluency, adequacy, and cultural appropriateness across language pairs.",
                                        href: "#translation-qa"
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

                    {/* SECTION 3: Named Entity Recognition */}
                    <AnimatedSection>
                        <section id="named-entity-recognition">
                            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-[var(--color-text-primary)] mb-6">
                                Named Entity Recognition (NER)
                            </h2>
                            <div className="text-base leading-relaxed text-[var(--color-text-secondary)] space-y-4">
                                <p>
                                    Named Entity Recognition is the task of identifying spans of text that refer to named entities and classifying them into predefined categories. Standard NER categories include Person (PER), Organisation (ORG), Location (LOC), Date (DATE), and Miscellaneous (MISC) — but domain-specific taxonomies can include hundreds of entity types, particularly in legal, medical, and financial text annotation.
                                </p>
                                <p>
                                    The surface simplicity of NER conceals significant annotation complexity. Boundary detection — deciding exactly which tokens are part of the entity span — is a persistent source of annotator disagreement. 'The University of Amsterdam' — is 'University of Amsterdam' the entity, or 'Amsterdam'? The answer depends on the entity schema, and the schema must be precise enough that two annotators with no prior communication reach the same decision independently.
                                </p>
                                <p>
                                    Nested entities add another layer of complexity: 'the European Central Bank Governor' contains both an organisation reference and a role reference. Whether these are annotated as nested spans, as a single composite entity, or as separate entities entirely depends on your training objective — and must be unambiguously specified in the annotation guideline.
                                </p>

                                <h3 className="text-xl font-semibold text-[var(--color-text-primary)] mt-8 mb-4">
                                    NER Annotation Challenges
                                </h3>
                                <div className="space-y-0">
                                    {[
                                        { title: "Span Boundary Disagreement", body: "Annotators frequently disagree on where an entity span begins and ends, particularly for compound proper nouns, abbreviated references, and entities that span clause boundaries. Boundary rules must be explicitly defined per entity type in the annotation guideline." },
                                        { title: "Overlapping Entity Types", body: "Many tokens can plausibly belong to multiple entity categories — a company name that is also a product name, a city that is also a person's surname. Category priority rules and disambiguation examples are essential components of a high-quality NER guideline." },
                                        { title: "Domain-Specific Entities", body: "Generic NER models perform poorly on domain-specific text because the entity taxonomy is different. Legal NER requires Case, Statute, Court, and Party entity types. Medical NER requires Disease, Drug, Dosage, and Procedure. Annotators require domain familiarity to apply these consistently." },
                                        { title: "Coreference and Pronoun Resolution", body: "When an entity is referred to by a pronoun or abbreviated form later in the document, decisions about whether to annotate the coreference chain or only the first mention depend on the downstream model task — and must be specified in the guideline." }
                                    ].map((item, idx) => (
                                        <div key={idx} className="border-l-2 border-[var(--color-border)] pl-5 py-2 mb-6">
                                            <h4 className="text-sm font-semibold text-[var(--color-text-primary)]">{item.title}</h4>
                                            <p className="text-sm text-[var(--color-text-secondary)] mt-1 leading-relaxed">
                                                {item.body}
                                            </p>
                                        </div>
                                    ))}
                                </div>

                                <h3 className="text-xl font-semibold text-[var(--color-text-primary)] mt-8 mb-4">
                                    Aeterna Data's NER Standard
                                </h3>
                                <p>
                                    Every NER project at Aeterna Data begins with a guideline review. We assess whether the entity taxonomy is sufficiently precise to produce consistent annotations before the pilot begins. Where guidelines are underspecified, we flag ambiguity cases and propose resolution rules before the first annotator sees the data.
                                </p>

                                <div className="bg-[rgba(74,124,255,0.06)] border border-[rgba(74,124,255,0.15)] rounded-xl p-5 mt-6">
                                    <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                                        Default IAA threshold for NER: Cohen's Kappa κ ≥ 0.80 (pairwise span-level agreement). For domain-specific taxonomies with 20+ entity types, we recommend starting with a calibration phase of 100–200 items before committing to production volume.
                                    </p>
                                </div>
                            </div>
                        </section>
                    </AnimatedSection>

                    {/* SECTION 4: Intent & Slot Labeling */}
                    <AnimatedSection>
                        <section id="intent-and-slot-labeling">
                            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-[var(--color-text-primary)] mb-6">
                                Intent & Slot Labeling
                            </h2>
                            <div className="text-base leading-relaxed text-[var(--color-text-secondary)] space-y-4">
                                <p>
                                    Intent classification is the task of assigning a single intent label to a user utterance — identifying what the user is trying to accomplish. Slot labeling (also called slot filling or named entity extraction in dialogue) is the complementary task of extracting the structured values that complete the intent: the destination city, the departure date, the product name, the account number.
                                </p>
                                <p>
                                    Together, intent and slot labeling form the annotation backbone of task-oriented dialogue systems — the systems that power voice assistants, customer service bots, and enterprise automation workflows. The quality of the labeled training data directly determines whether the deployed system understands what users want and can extract what it needs to act on that intent.
                                </p>

                                <h3 className="text-xl font-semibold text-[var(--color-text-primary)] mt-8 mb-4">
                                    Intent Taxonomy Design
                                </h3>
                                <p>
                                    The quality of an intent labeling project depends critically on the intent taxonomy — the set of intent classes the annotators are asked to assign. An intent taxonomy that is too coarse produces labels that are not discriminative enough for the downstream model. A taxonomy that is too fine-grained produces labels that annotators cannot apply consistently. Aeterna Data assesses intent taxonomy design during scoping and flags ambiguity before the pilot begins.
                                </p>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                                    <div className="bg-[var(--color-bg-surface)] border border-[var(--color-border)] rounded-2xl p-6">
                                        <h4 className="text-base font-semibold text-[var(--color-text-primary)]">Under-specified taxonomy</h4>
                                        <ul className="text-sm text-[var(--color-text-secondary)] mt-4 leading-relaxed list-disc list-inside space-y-2">
                                            <li>'Book' intent covers flights, hotels, restaurants, and meetings — too broad for a task-specific model</li>
                                            <li>'Help' intent covers questions, complaints, and feature requests — annotators will disagree constantly</li>
                                            <li>Catch-all 'Other' class that grows to 40% of training data</li>
                                        </ul>
                                    </div>
                                    <div className="bg-[var(--color-bg-surface)] border border-[var(--color-border)] rounded-2xl p-6">
                                        <h4 className="text-base font-semibold text-[var(--color-text-primary)]">Well-specified taxonomy</h4>
                                        <ul className="text-sm text-[var(--color-text-secondary)] mt-4 leading-relaxed list-disc list-inside space-y-2">
                                            <li>Distinct intents for each task: BookFlight, BookHotel, BookRestaurant</li>
                                            <li>Clear disambiguation rules for borderline cases documented with examples</li>
                                            <li>'Other' class defined by explicit exclusion criteria, not as a catch-all</li>
                                        </ul>
                                    </div>
                                </div>

                                <h3 className="text-xl font-semibold text-[var(--color-text-primary)] mt-8 mb-4">
                                    Slot Labeling Precision
                                </h3>
                                <p>
                                    Slot labeling requires the same span boundary precision as NER — annotators must agree on which tokens carry the slot value. A departure date slot in 'I want to fly next Tuesday morning' — does the slot value include 'morning' or only 'next Tuesday'? The annotation guideline must resolve every such question with concrete examples before production begins.
                                </p>
                            </div>
                        </section>
                    </AnimatedSection>

                    {/* SECTION 5: Sentiment Analysis */}
                    <AnimatedSection>
                        <section id="sentiment-analysis">
                            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-[var(--color-text-primary)] mb-6">
                                Sentiment Analysis Annotation
                            </h2>
                            <div className="text-base leading-relaxed text-[var(--color-text-secondary)] space-y-4">
                                <p>
                                    Sentiment analysis annotation encompasses a range of tasks — from binary polarity classification (positive/negative) to nuanced aspect-based sentiment analysis that identifies the target of the sentiment, the aspect category, and the sentiment polarity for each opinion expressed in a document.
                                </p>
                                <p>
                                    Binary sentiment annotation is among the most deceptively simple NLP tasks. The IAA on straightforward positive/negative classification is typically high. The IAA on neutral classification is almost always lower — because 'neutral' is poorly defined in most sentiment guidelines. A customer review that describes a product accurately but without emotional tone: is that neutral, or is it implicitly positive because the customer chose to purchase? This ambiguity must be resolved in the guideline.
                                </p>

                                <h3 className="text-xl font-semibold text-[var(--color-text-primary)] mt-8 mb-4">
                                    Aspect-Based Sentiment Analysis (ABSA)
                                </h3>
                                <p>
                                    Aspect-based sentiment analysis requires annotators to identify: (1) the opinion target — the entity or aspect being evaluated, (2) the aspect category — the dimension of the product or service being discussed, and (3) the sentiment polarity toward that specific aspect. A single review sentence can contain multiple opinion targets with different polarities.
                                </p>
                                <p>
                                    Example: 'The food was excellent but the service was disappointing.' Contains two opinion targets (food, service), two aspect categories (Food Quality, Service Quality), and two polarity labels (Positive, Negative). Both must be annotated independently. An annotator who assigns a single overall sentiment label to this sentence is performing a different task than ABSA — and the guideline must make that distinction unambiguous.
                                </p>

                                <h3 className="text-xl font-semibold text-[var(--color-text-primary)] mt-8 mb-4">
                                    Sentiment and Appraisal Theory
                                </h3>
                                <p>
                                    For RLHF and model alignment projects that require multi-dimensional sentiment evaluation — particularly in response quality assessment — Aeterna Data applies Appraisal Theory as an evaluation framework. Appraisal Theory provides a structured linguistic vocabulary for analysing evaluative language across three systems: Attitude (what is being evaluated), Engagement (how the author positions themselves), and Graduation (the strength of the evaluation). This framework produces more consistent, more granular, and more theoretically grounded sentiment annotations than polarity-only schemes — particularly for LLM output evaluation tasks where the distinction between a competent response and an excellent one requires precise evaluative language.
                                </p>

                                <div className="bg-[rgba(74,124,255,0.06)] border border-[rgba(74,124,255,0.15)] rounded-xl p-5 mt-6">
                                    <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                                        Appraisal Theory is applied by Aeterna Data in RLHF & Model Alignment engagements requiring multi-dimensional response quality assessment. If your sentiment annotation task requires this level of evaluative depth, mention it in your project brief.
                                    </p>
                                </div>
                            </div>
                        </section>
                    </AnimatedSection>

                    {/* SECTION 6: Semantic Textual Similarity */}
                    <AnimatedSection>
                        <section id="semantic-textual-similarity">
                            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-[var(--color-text-primary)] mb-6">
                                Semantic Textual Similarity (STS) & Natural Language Inference
                            </h2>
                            <div className="text-base leading-relaxed text-[var(--color-text-secondary)] space-y-4">
                                <p>
                                    Semantic Textual Similarity annotation requires human judges to assess the degree of meaning equivalence between two text passages on a scale — typically 0 to 5, where 0 means the passages are completely unrelated and 5 means they are semantically equivalent. STS judgments are used to train embedding models, retrieval systems, and semantic search pipelines.
                                </p>
                                <p>
                                    Natural Language Inference (NLI) is a related task that requires annotators to classify the relationship between a premise and a hypothesis as one of three labels: Entailment (the hypothesis follows from the premise), Contradiction (the hypothesis contradicts the premise), or Neutral (neither). NLI annotation is used to train models that need to understand logical relationships between text passages — including fact-checking systems, legal reasoning models, and question answering pipelines.
                                </p>

                                <h3 className="text-xl font-semibold text-[var(--color-text-primary)] mt-8 mb-4">
                                    Where STS and NLI Annotation Goes Wrong
                                </h3>
                                <div className="space-y-0">
                                    {[
                                        { title: "Scale Calibration Disagreement", body: "On a 0–5 STS scale, annotators frequently disagree on the boundary between 3 and 4 — related vs. highly related. Anchor examples for each scale point are essential: without them, the scale is subjective and IAA will be low regardless of annotator quality." },
                                        { title: "Entailment vs. Neutral Confusion", body: "The boundary between Entailment and Neutral in NLI is the most common source of annotator disagreement. 'Dogs are animals' as a hypothesis for 'The dog ran across the street' — is that entailment or neutral? Annotation guidelines must provide explicit decision rules for these cases." },
                                        { title: "Domain Knowledge Requirements", body: "STS and NLI annotation in domain-specific text — legal contracts, medical literature, financial filings — requires annotators with sufficient domain familiarity to judge semantic equivalence accurately. A general annotator cannot reliably distinguish equivalent from near-equivalent legal clauses." }
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

                    {/* SECTION 7: Translation QA */}
                    <AnimatedSection>
                        <section id="translation-qa">
                            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-[var(--color-text-primary)] mb-6">
                                Translation QA Annotation
                            </h2>
                            <div className="text-base leading-relaxed text-[var(--color-text-secondary)] space-y-4">
                                <p>
                                    Translation Quality Assessment (TQA) is the human evaluation of machine translation (MT) output. As neural MT systems improve, the errors they produce become subtler — fluent-sounding translations that lose meaning, preserve surface form but miss idiomatic expression, or translate accurately at the word level while failing at the discourse level. Human evaluation remains the most reliable method for detecting these errors.
                                </p>
                                <p>
                                    Translation QA annotation requires annotators who are genuinely bilingual — not just proficient in the target language, but capable of precisely mapping source meaning to target rendering and identifying where the mapping fails. This is a specialist skill. Aeterna Data's multilingual NLP annotators are selected and calibrated specifically for translation evaluation tasks.
                                </p>

                                <h3 className="text-xl font-semibold text-[var(--color-text-primary)] mt-8 mb-4">
                                    TQA Evaluation Dimensions
                                </h3>
                                <div className="space-y-0">
                                    {[
                                        { title: "Adequacy", body: "Does the translation convey all the meaning of the source? Missing information, added information, or distorted meaning are adequacy errors. Adequacy is assessed independently of fluency — a translation can be adequately faithful to the source while still being unnatural in the target language." },
                                        { title: "Fluency", body: "Is the translation natural in the target language? Grammatical errors, unnatural word order, awkward phrasing, and register mismatches are fluency errors. Fluency is assessed independently of adequacy — a translation can be fluent target-language text while missing source meaning." },
                                        { title: "Terminology Consistency", body: "Are domain-specific terms translated consistently across the document? Inconsistent terminology translation — particularly in legal, medical, and technical text — is a common MT failure mode that human evaluators are specifically trained to flag." },
                                        { title: "Cultural Appropriateness", body: "Does the translation preserve the appropriate cultural register, tone, and pragmatic meaning? A formally polite source text rendered in casual target language, or a culturally specific idiom translated literally, are cultural appropriateness failures that automated MT metrics do not reliably detect." }
                                    ].map((item, idx) => (
                                        <div key={idx} className="border-l-2 border-[var(--color-border)] pl-5 py-2 mb-6">
                                            <h4 className="text-sm font-semibold text-[var(--color-text-primary)]">{item.title}</h4>
                                            <p className="text-sm text-[var(--color-text-secondary)] mt-1 leading-relaxed">
                                                {item.body}
                                            </p>
                                        </div>
                                    ))}
                                </div>

                                <h3 className="text-xl font-semibold text-[var(--color-text-primary)] mt-8 mb-4">
                                    Language Pairs Supported
                                </h3>
                                <p>
                                    Aeterna Data supports translation QA annotation across major European language pairs relevant to DACH and Benelux markets. Language pair availability and annotator depth are confirmed during scoping.
                                </p>
                                <div className="mt-6 flex flex-wrap gap-2">
                                    {[
                                        "EN → DE", "EN → NL", "EN → FR", "EN → IT", "EN → ES",
                                        "DE → EN", "NL → EN", "FR → EN", "ID → EN", "EN → ID",
                                        "Other pairs on request"
                                    ].map((tag, idx) => (
                                        <span key={idx} className="inline-flex items-center border border-[var(--color-border)] text-xs text-[var(--color-text-muted)] px-3 py-1 rounded-full">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </section>
                    </AnimatedSection>

                    {/* SECTION 8: Multilingual Annotation */}
                    <AnimatedSection>
                        <section id="multilingual-annotation">
                            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-[var(--color-text-primary)] mb-6">
                                Multilingual Annotation
                            </h2>
                            <div className="text-base leading-relaxed text-[var(--color-text-secondary)] space-y-4">
                                <p>
                                    Multilingual annotation extends any NLP annotation task — NER, intent labeling, sentiment analysis, STS — across multiple languages simultaneously. Building a multilingual model requires training data in each target language, annotated to the same schema and quality standard. Cross-lingual consistency is as important as within-language IAA.
                                </p>
                                <p>
                                    The challenges of multilingual annotation are not merely logistical. They are linguistic. The same entity taxonomy may behave differently across languages because the morphological structure of the language changes how entity spans are bounded. The same intent taxonomy may require additional disambiguation in one language because the pragmatic conventions of that language create more ambiguous utterances. Multilingual annotation is not translation of the annotation task — it is re-specification of the annotation task in each language.
                                </p>

                                <h3 className="text-xl font-semibold text-[var(--color-text-primary)] mt-8 mb-4">
                                    Cross-Lingual Consistency
                                </h3>
                                <p>
                                    When building multilingual training data, IAA must be measured within each language separately — not pooled across languages. An IAA score of κ ≥ 0.80 in English and κ ≥ 0.80 in German does not automatically mean the two annotation pools are conceptually consistent. Cross-lingual calibration sessions — where bilingual annotators review samples across language pairs — are required for high-stakes multilingual training pipelines.
                                </p>

                                <h3 className="text-xl font-semibold text-[var(--color-text-primary)] mt-8 mb-4">
                                    Languages Supported
                                </h3>
                                <div className="mt-4 flex flex-wrap gap-2">
                                    {[
                                        "English", "German", "Dutch", "French", "Italian", "Spanish",
                                        "Portuguese", "Indonesian", "Malay", "Arabic (Modern Standard)",
                                        "Other languages on request during scoping"
                                    ].map((tag, idx) => (
                                        <span key={idx} className="inline-flex items-center border border-[var(--color-border)] text-xs text-[var(--color-text-muted)] px-3 py-1 rounded-full">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <p className="text-sm text-[var(--color-text-muted)] mt-3 italic">
                                    Annotator depth varies by language. Availability and quality threshold achievability for specific languages are confirmed during scoping — before any commitment is made.
                                </p>
                            </div>
                        </section>
                    </AnimatedSection>

                    {/* SECTION 9: Quality Standards */}
                    <AnimatedSection>
                        <section id="quality-standards">
                            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-[var(--color-text-primary)] mb-6">
                                Quality Standards for NLP Annotation
                            </h2>
                            <div className="text-base leading-relaxed text-[var(--color-text-secondary)] space-y-4">
                                <p>
                                    NLP annotation tasks typically produce lower IAA than computer vision tasks at equivalent quality levels — because language is more ambiguous than images. This is not a flaw in the measurement. It is information. Low IAA on an NLP task usually means the annotation guideline is underspecified, the task is genuinely ambiguous, or the annotators need more calibration — and all three are things that must be resolved before production begins, not after.
                                </p>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
                                    <div className="bg-[rgba(74,124,255,0.06)] border border-[rgba(74,124,255,0.15)] rounded-2xl p-6 flex flex-col justify-center">
                                        <div className="text-[var(--color-accent-cta)] text-3xl font-mono font-bold mb-2" style={{ textShadow: "0 0 20px rgba(74,124,255,0.4)" }}>
                                            κ ≥ 0.80
                                        </div>
                                        <h3 className="text-base font-semibold text-[var(--color-text-primary)]">Cohen's Kappa</h3>
                                        <p className="text-sm text-[var(--color-text-secondary)] mt-1">
                                            Default pairwise IAA for all standard NLP production batches. Applied when two annotators label the same item. Lower thresholds may be agreed in the SOW for genuinely high-ambiguity tasks — but only after pilot data confirms the ambiguity is intrinsic, not guideline-driven.
                                        </p>
                                    </div>
                                    <div className="bg-[rgba(20,184,166,0.06)] border border-[rgba(20,184,166,0.15)] rounded-2xl p-6 flex flex-col justify-center">
                                        <div className="text-teal-400 text-3xl font-mono font-bold mb-2" style={{ color: "#2dd4bf", textShadow: "0 0 20px rgba(45,212,191,0.4)" }}>
                                            κ ≥ 0.75
                                        </div>
                                        <h3 className="text-base font-semibold text-[var(--color-text-primary)]">Fleiss' Kappa</h3>
                                        <p className="text-sm text-[var(--color-text-secondary)] mt-1">
                                            Multi-annotator IAA for NLP tasks requiring three or more annotators — particularly sentiment analysis, ABSA, and STS tasks where a single annotator's judgment is insufficient for ground truth establishment.
                                        </p>
                                    </div>
                                </div>

                                <h3 className="text-xl font-semibold text-[var(--color-text-primary)] mt-10 mb-4">
                                    The Guideline Review
                                </h3>
                                <p>
                                    Every NLP project at Aeterna Data begins with a guideline review before any annotation starts. We read the annotation guideline critically and assess: Is every label class defined with positive examples and negative examples? Are boundary cases resolved with explicit rules? Are annotators told what to do when an item genuinely does not fit any category? If the answer to any of these questions is no, we raise it during scoping — because ambiguous guidelines produce low IAA, and low IAA produces bad training data, regardless of annotator quality.
                                </p>

                                <div className="space-y-4 mt-8">
                                    {[
                                        { num: "01", title: "Guideline Review", body: "We assess the annotation guideline for ambiguity, missing decision rules, and underspecified edge cases before any annotator sees the data." },
                                        { num: "02", title: "Annotator Calibration", body: "Task-specific calibration on 50–100 items before pilot begins. Calibration results reviewed against ground truth. Annotators who do not meet threshold are not assigned to production." },
                                        { num: "03", title: "Pilot Batch + IAA Report", body: "100–500 items annotated. Cohen's Kappa and Fleiss' Kappa calculated. Written client approval required before production begins." },
                                        { num: "04", title: "Production IAA Every Batch", body: "Both IAA metrics measured on every production batch. Batches failing threshold reworked before delivery at zero additional cost." }
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

                    {/* SECTION 10: The BYOT Model */}
                    <AnimatedSection>
                        <section id="byot-model">
                            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-[var(--color-text-primary)] mb-6">
                                The BYOT Model for NLP Projects
                            </h2>
                            <div className="text-base leading-relaxed text-[var(--color-text-secondary)] space-y-4">
                                <p>
                                    BYOT — Bring Your Own Tool — means Aeterna Data's NLP annotators work directly inside your annotation platform, labeling dashboard, or proprietary internal tool. We do not provide a platform. We do not ask you to export your text data to a third-party service. Your data pipeline stays intact.
                                </p>
                                <p>
                                    For NLP teams, this matters for two reasons beyond data privacy. First, your label taxonomy is already defined in your platform — your entity types, your intent classes, your sentiment categories are already configured as UI elements. Migrating to a new platform means rebuilding that taxonomy configuration. BYOT means we work with what you have built. Second, your text data — particularly in legal, medical, and financial NLP projects — is frequently sensitive beyond GDPR scope. Keeping it in your controlled environment is not just a compliance decision. It is a security decision.
                                </p>

                                <div className="mt-6 flex flex-wrap gap-2">
                                    {[
                                        "Label Studio", "Prodigy", "Doccano", "Labelbox", "Scale Studio",
                                        "LightTag", "TagTog", "Inception", "Custom Browser-Based Tools",
                                        "Proprietary Internal Dashboards"
                                    ].map((tag, idx) => (
                                        <span key={idx} className="inline-flex items-center border border-[var(--color-border)] text-xs text-[var(--color-text-muted)] px-3 py-1 rounded-full">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <p className="text-sm text-[var(--color-text-muted)] mt-4 italic">
                                    If your NLP platform is not listed, tell us during scoping. We work in any browser-based environment where annotators can be onboarded with credentials and task-specific annotation UI.
                                </p>

                                <div className="bg-[rgba(74,124,255,0.06)] border border-[rgba(74,124,255,0.15)] rounded-xl p-5 mt-6">
                                    <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                                        Every annotator accesses your platform under a signed individual NDA. Text data — particularly in legal, medical, and financial annotation projects — is treated as sensitive by default. Access credentials are managed per-annotator, never shared, and revoked immediately on engagement end. All processing governed by the signed DPA and EU SCCs.
                                    </p>
                                </div>
                            </div>
                        </section>
                    </AnimatedSection>

                    {/* SECTION 11: Use Cases */}
                    <AnimatedSection>
                        <section id="use-cases">
                            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-[var(--color-text-primary)] mb-6">
                                NLP Annotation Use Cases
                            </h2>
                            <p className="text-base leading-relaxed text-[var(--color-text-secondary)] mb-8">
                                Advanced NLP annotation is required across a wide range of AI applications. The following are the most common use cases Aeterna Data supports — each with specific annotation type recommendations.
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {[
                                    {
                                        title: "Large Language Model Training",
                                        types: "NER, Intent Labeling, STS, Sentiment Analysis",
                                        body: "High-quality instruction-following data, preference pairs, and evaluation annotations for LLM pre-training, fine-tuning, and RLHF. Text annotation is the foundation of every LLM pipeline before RLHF annotation begins."
                                    },
                                    {
                                        title: "Conversational AI & Chatbots",
                                        types: "Intent & Slot Labeling, NER, Sentiment Analysis",
                                        body: "Intent classification and slot extraction for task-oriented dialogue systems. Customer service automation, voice assistants, and enterprise workflow bots all depend on precisely labeled conversational training data."
                                    },
                                    {
                                        title: "Legal Tech AI",
                                        types: "NER, STS, NLI",
                                        body: "Contract clause extraction, legal entity recognition, obligation and risk classification, and semantic similarity for contract comparison. Requires annotators with legal domain familiarity and high tolerance for document-level context."
                                    },
                                    {
                                        title: "Medical NLP",
                                        types: "NER, Sentiment Analysis, STS",
                                        body: "Clinical note entity extraction, drug-disease relationship labeling, and diagnostic coding assistance. Medical NLP annotation is among the highest-stakes annotation tasks — label errors have direct clinical implications."
                                    },
                                    {
                                        title: "Multilingual Content Moderation",
                                        types: "Sentiment Analysis, Intent Labeling, Translation QA",
                                        body: "Toxicity classification, harmful content detection, and policy violation labeling across multiple languages. Requires culturally fluent annotators who understand language-specific context, idiom, and implicit meaning."
                                    },
                                    {
                                        title: "Financial & Fintech NLP",
                                        types: "NER, Sentiment Analysis, STS",
                                        body: "Financial entity extraction, earnings call sentiment analysis, regulatory document classification, and market signal labeling. High-value domain with strong IAA requirements and GDPR sensitivity."
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

                    {/* SECTION 12: GDPR Compliance */}
                    <AnimatedSection>
                        <section id="gdpr-compliance">
                            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-[var(--color-text-primary)] mb-6">
                                GDPR Compliance for NLP Annotation
                            </h2>
                            <div className="text-base leading-relaxed text-[var(--color-text-secondary)] space-y-4 mb-8">
                                <p>
                                    Text datasets frequently contain personal data. Customer service conversations contain names, account numbers, addresses, and health information. Legal documents contain personal details about parties to proceedings. Medical records contain the most sensitive personal data GDPR defines. Under GDPR Article 4, any text that can be used to identify a living natural person — directly or indirectly — is personal data. If your annotation dataset contains such text, your annotation vendor is a Data Processor under GDPR Article 28.
                                </p>
                                <p>
                                    This is particularly acute for NLP annotation because the annotation task itself often requires annotators to read and understand the full text context — not just label isolated tokens. An annotator labeling sentiment in a customer service conversation must read the conversation. An annotator labeling entities in a medical record must read the record. The personal data exposure is inherent in the annotation task.
                                </p>
                            </div>

                            <div className="space-y-0">
                                {[
                                    {
                                        title: "DPA + EU SCCs Before Text Data Sharing",
                                        body: "Aeterna Data executes a GDPR Article 28 Data Processing Agreement with EU Standard Contractual Clauses Module 2 before any text dataset is shared. This applies to every NLP project regardless of whether the text contains obvious personal data — because the personal data determination is made before data sharing, not after."
                                    },
                                    {
                                        title: "Individual Annotator NDAs",
                                        body: "Every annotator who reads your text data signs an individual NDA before receiving platform credentials. For sensitive NLP projects — medical, legal, financial — we can provide additional annotator confidentiality documentation on request."
                                    },
                                    {
                                        title: "Data Minimisation in Annotation",
                                        body: "Where your annotation task does not require annotators to have access to the full text context, we apply data minimisation practices — showing annotators only the text segments relevant to the annotation task. This requires platform support and is confirmed during scoping."
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
                                How to Start an NLP Annotation Project
                            </h2>
                            <p className="text-base leading-relaxed text-[var(--color-text-secondary)] mb-8">
                                Starting an NLP annotation project with Aeterna Data follows the same four-step process as all engagements — with one additional step specific to NLP: guideline review before the pilot begins.
                            </p>

                            <div className="flex flex-col">
                                {[
                                    {
                                        badge: "Step 01",
                                        title: "Send a Project Brief",
                                        body: "Describe your annotation task, text domain, language(s), approximate volume, annotation schema or taxonomy if defined, labeling platform, and target IAA threshold. Include your annotation guideline if one exists — we will review it before scoping.",
                                        ctaStr: "Send Brief",
                                        ctaHref: "/contact"
                                    },
                                    {
                                        badge: "Step 02",
                                        title: "Guideline Review",
                                        body: "We review your annotation guideline for ambiguity, missing decision rules, and underspecified edge cases. Where guidelines need strengthening, we flag specific issues and propose resolution language before the pilot begins. This step protects your IAA from the start."
                                    },
                                    {
                                        badge: "Step 03",
                                        title: "Execute Contracts",
                                        body: "NDA first. DPA and EU SCCs after the discovery call. MSA and SOW at pilot agreement. For NLP projects involving sensitive text data, we typically execute the NDA earlier — sometimes before the full project brief is shared."
                                    },
                                    {
                                        badge: "Step 04",
                                        title: "Run the Paid Pilot",
                                        body: "100–500 items annotated inside your platform. Annotator calibration completed before pilot begins. Full IAA report — Cohen's Kappa and Fleiss' Kappa — on delivery. Pilot fee credited to first production invoice."
                                    },
                                    {
                                        badge: "Step 05",
                                        title: "Move to Production",
                                        body: "After written pilot approval, production begins under the signed SOW. Rate, volume, IAA threshold, language scope, and delivery format all fixed before the first production batch starts."
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
                            Ready to Annotate Your Text Data?
                        </h2>
                        <p className="text-[var(--color-text-secondary)] text-lg mb-10 leading-relaxed max-w-2xl mx-auto">
                            Start with a paid pilot. Your annotation platform. Your label taxonomy. IAA measured from day one. Guideline review included. Pilot fee credited to first invoice.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <Link
                                href="/contact?type=request-pilot"
                                className="bg-[var(--color-accent-cta)] text-white font-semibold px-8 py-3.5 rounded-lg hover:bg-[var(--color-accent-cta-hover)] transition-colors duration-200"
                            >
                                Request an NLP Pilot
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
