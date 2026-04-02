import type { Metadata } from 'next';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import AnimatedSection from '@/components/ui/AnimatedSection';
import StickyTableOfContents from '@/components/ui/StickyTableOfContents';

export const metadata: Metadata = {
    title: 'RLHF & Model Alignment — Aeterna Data',
    description: 'Expert RLHF and model alignment annotation for EU AI teams. Pairwise preference ranking, instruction-following assessment, safety classification, and multi-dimensional response evaluation using Appraisal Theory. GDPR-compliant, BYOT, IAA-measured.',
    robots: {
        index: true,
        follow: true,
    },
};

const tocItems = [
    { id: 'what-is-rlhf', label: 'What Is RLHF?' },
    { id: 'rlhf-pipeline', label: 'The RLHF Pipeline' },
    { id: 'pairwise-preference-ranking', label: 'Preference Ranking' },
    { id: 'instruction-following', label: 'Instruction Following' },
    { id: 'safety-classification', label: 'Safety Classification' },
    { id: 'response-quality-rating', label: 'Response Quality Rating' },
    { id: 'appraisal-theory', label: 'Appraisal Theory' },
    { id: 'quality-standards', label: 'Quality Standards' },
    { id: 'byot-model', label: 'The BYOT Model' },
    { id: 'eu-ai-act', label: 'EU AI Act' },
    { id: 'use-cases', label: 'Use Cases' },
    { id: 'gdpr-compliance', label: 'GDPR & Compliance' },
    { id: 'how-to-start', label: 'How to Start' },
];

export default function RlhfPage() {
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
                        <span className="text-[var(--color-text-muted)]">RLHF & Model Alignment</span>
                    </nav>

                    {/* Pre-heading Pill */}
                    <div
                        className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-8 border"
                        style={{ backgroundColor: "rgba(255,255,255,0.05)", borderColor: "rgba(255,255,255,0.10)" }}
                    >
                        <span className="text-[var(--color-text-muted)] text-xs font-semibold tracking-widest uppercase">
                            RLHF & Model Alignment
                        </span>
                    </div>

                    {/* Headline */}
                    <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight leading-none text-[var(--color-text-primary)] max-w-5xl mx-auto">
                        Human Feedback That Aligns Models,<br />Not Just Rates Them.
                    </h1>

                    {/* Subheadline */}
                    <p className="text-[var(--color-text-secondary)] text-lg lg:text-xl max-w-2xl mt-6">
                        Expert human-in-the-loop feedback for LLM calibration and model alignment. Pairwise preference ranking, instruction-following assessment, safety classification, and multi-dimensional response evaluation using Appraisal Theory. GDPR-compliant. BYOT. IAA-measured every batch.
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
                            <span className="text-[var(--color-text-primary)] font-bold">Aug 2026</span>
                            <span className="text-[var(--color-text-muted)] text-xs uppercase tracking-widest mt-1">EU AI Act Deadline</span>
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

                    {/* SECTION 1: What Is RLHF? */}
                    <AnimatedSection>
                        <section id="what-is-rlhf">
                            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-[var(--color-text-primary)] mb-6">
                                What Is RLHF?
                            </h2>
                            <div className="text-base leading-relaxed text-[var(--color-text-secondary)] space-y-4">
                                <p>
                                    Reinforcement Learning from Human Feedback (RLHF) is the training methodology behind the alignment of modern large language models. After a base LLM is pre-trained on vast amounts of text, RLHF uses human preference judgments to shape the model's behaviour — teaching it to produce responses that are helpful, accurate, and safe, rather than merely fluent and statistically probable.
                                </p>
                                <p>
                                    The human feedback in RLHF is the critical input. It is used to train a reward model that learns to predict which responses humans prefer — and that reward model then guides the further training of the LLM via reinforcement learning. The quality of the reward model is bounded by the quality of the human feedback it was trained on. Inconsistent preference labels, poorly calibrated annotators, or rubrics that are interpreted differently across the annotation team produce a reward model that learns the noise of human disagreement rather than the signal of human preference.
                                </p>
                                <p>
                                    This is the core challenge of RLHF annotation — and the reason it requires a fundamentally different approach from standard data labeling. RLHF annotation is not a tagging task. It is a judgment task. It requires annotators who can evaluate language along multiple dimensions simultaneously, apply complex rubrics consistently across thousands of comparisons, and maintain calibration over time without drifting toward personal preference rather than task-defined quality criteria.
                                </p>
                                <p>
                                    Aeterna Data's RLHF annotation service is built around this distinction. Our annotators are selected for their ability to apply structured evaluation frameworks — including Appraisal Theory — to LLM response assessment. IAA is measured on every batch. Rubric drift is monitored across the engagement. And every preference label is produced by an annotator who has signed an individual NDA and works inside your evaluation environment under a full GDPR contract stack.
                                </p>
                            </div>
                        </section>
                    </AnimatedSection>

                    {/* SECTION 2: The RLHF Pipeline */}
                    <AnimatedSection>
                        <section id="rlhf-pipeline">
                            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-[var(--color-text-primary)] mb-6">
                                The RLHF Pipeline
                            </h2>
                            <div className="text-base leading-relaxed text-[var(--color-text-secondary)] space-y-4 mb-8">
                                <p>
                                    Understanding where human annotation fits in the RLHF pipeline clarifies what quality in RLHF annotation actually means — and why standard annotation quality metrics are necessary but not sufficient.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                                {[
                                    {
                                        num: "01",
                                        title: "Supervised Fine-Tuning (SFT)",
                                        body: "The base LLM is fine-tuned on high-quality demonstration data — examples of ideal model responses to instructions. Human annotators write or select these demonstrations.",
                                        tag: "Demonstration Data",
                                        highlight: false
                                    },
                                    {
                                        num: "02",
                                        title: "Reward Model Training",
                                        body: "Human annotators rank or compare model responses. These preference labels train a reward model that learns to predict human preference scores for any given response.",
                                        tag: "Preference Annotation",
                                        highlight: true
                                    },
                                    {
                                        num: "03",
                                        title: "RL Fine-Tuning (PPO)",
                                        body: "The LLM is further fine-tuned using the reward model's predictions as a training signal. The model learns to produce responses that score highly on the learned reward function.",
                                        tag: "Model Training",
                                        highlight: false
                                    },
                                    {
                                        num: "04",
                                        title: "Iterative Refinement",
                                        body: "The process repeats — new responses are generated, evaluated by humans, and used to refine the reward model and the LLM further. Human feedback quality compounds across iterations.",
                                        tag: "Ongoing Feedback",
                                        highlight: false
                                    }
                                ].map((stage, idx) => (
                                    <AnimatedSection key={idx} delay={idx * 0.08} className="h-full">
                                        <div className={`bg-[var(--color-bg-surface)] border rounded-2xl p-6 h-full relative z-10 
                                            ${stage.highlight ? 'border-[var(--color-accent-cta)]' : 'border-[var(--color-border)]'}`}>
                                            <div className="text-xs font-mono uppercase tracking-widest text-[var(--color-text-white)] bg-[var(--color-bg-elevated)] px-2 py-0.5 rounded-full inline-block mb-3 border border-[rgba(255,255,255,0.05)]">
                                                {stage.tag}
                                            </div>
                                            <div className={`font-mono text-3xl font-bold mb-2 ${stage.highlight ? 'text-[var(--color-accent-cta)]' : 'text-[rgba(255,255,255,0.1)]'}`}>
                                                {stage.num}
                                            </div>
                                            <h3 className="text-base font-semibold text-[var(--color-text-primary)]">{stage.title}</h3>
                                            <p className="text-sm text-[var(--color-text-secondary)] mt-2 leading-relaxed flex-grow">
                                                {stage.body}
                                            </p>
                                        </div>
                                    </AnimatedSection>
                                ))}
                            </div>

                            <p className="text-sm text-[var(--color-text-muted)] italic text-center mt-8">
                                Aeterna Data operates primarily in Stage 2 — preference annotation and reward model training data. We also support Stage 1 SFT demonstration data collection and Stage 4 iterative refinement annotation.
                            </p>
                        </section>
                    </AnimatedSection>

                    {/* SECTION 3: Preference Ranking */}
                    <AnimatedSection>
                        <section id="pairwise-preference-ranking">
                            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-[var(--color-text-primary)] mb-6">
                                Pairwise Preference Ranking
                            </h2>
                            <div className="text-base leading-relaxed text-[var(--color-text-secondary)] space-y-4">
                                <p>
                                    Pairwise preference ranking is the most widely used RLHF annotation task. The annotator is shown two responses to the same prompt — Response A and Response B — and asked to judge which one is better according to a defined rubric. The annotator's preference label — A is better, B is better, or the responses are roughly equivalent — is recorded as a training signal for the reward model.
                                </p>
                                <p>
                                    The apparent simplicity of a binary choice conceals the full complexity of the task. 'Better' must be operationally defined — better on what dimension? Helpfulness? Accuracy? Safety? Conciseness? Tone? A rubric that says 'choose the better response' without defining better produces preference labels that reflect annotator personality rather than task-defined quality. Two annotators with different communication styles will produce systematically different preference labels on the same pairs — and the reward model will learn that disagreement.
                                </p>
                                <p>
                                    Aeterna Data's pairwise preference annotation uses multi-dimensional rubrics that decompose 'better' into specific, assessable criteria. Each dimension is rated independently before a pairwise preference is assigned. This produces preference labels that are grounded in specific quality criteria — not overall impression — and IAA that is measurable per dimension rather than only on the final binary label.
                                </p>

                                <h3 className="text-xl font-semibold text-[var(--color-text-primary)] mt-8 mb-4">
                                    Rubric Dimensions for Preference Ranking
                                </h3>

                                <div className="space-y-0">
                                    {[
                                        { title: "Instruction Following", body: "Does the response fully address what the prompt asked? Partial compliance, scope violations, and task avoidance are scored independently of response quality on other dimensions." },
                                        { title: "Factual Accuracy", body: "Is the factual content of the response correct and verifiable? Hallucinated facts, incorrect citations, and confident wrong statements are scored as accuracy failures regardless of fluency." },
                                        { title: "Helpfulness", body: "Does the response actually help the user accomplish their goal? A technically accurate response that does not address the user's underlying need is not a helpful response." },
                                        { title: "Conciseness", body: "Is the response appropriately scoped to the task? Unnecessary padding, repetition, and over-qualification that reduces response utility are scored as conciseness failures." },
                                        { title: "Tone and Register", body: "Is the response's tone appropriate for the context? A formal prompt that receives a casual response, or a sensitive topic that receives a flippant response, are tone failures." },
                                        { title: "Safety", body: "Does the response produce, facilitate, or endorse harmful content? Safety scoring is applied independently of other dimensions and is never traded off against helpfulness scores in Aeterna Data's rubrics." }
                                    ].map((item, idx) => (
                                        <AnimatedSection key={idx} delay={idx * 0.06}>
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
                                    The Tied Label Problem
                                </h3>
                                <p>
                                    Preference annotation produces a distribution of labels: A preferred, B preferred, or tied. High rates of tied labels — where annotators frequently judge responses as equivalent — reduce the information value of the preference dataset. If annotators are routinely choosing 'tied', it usually means either the response pairs are genuinely very similar in quality (a model sampling problem, not an annotation problem) or the rubric is not specific enough to discriminate between responses at the margin (a guideline problem). Aeterna Data monitors tied label rates as a quality signal throughout the engagement.
                                </p>
                            </div>
                        </section>
                    </AnimatedSection>

                    {/* SECTION 4: Instruction Following */}
                    <AnimatedSection>
                        <section id="instruction-following">
                            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-[var(--color-text-primary)] mb-6">
                                Instruction-Following Assessment
                            </h2>
                            <div className="text-base leading-relaxed text-[var(--color-text-secondary)] space-y-4">
                                <p>
                                    Instruction-following annotation is the task of evaluating how well a model response adheres to the specific constraints, format requirements, and content directives specified in the prompt. It is distinct from helpfulness evaluation — a response can be genuinely useful while still failing to follow specific instructions, and a response can follow instructions precisely while being substantively unhelpful.
                                </p>
                                <p>
                                    Instruction-following assessment requires annotators who can parse complex, multi-part instructions and evaluate each constraint independently. A prompt with five distinct requirements — format, length, tone, content inclusion, and content exclusion — requires the annotator to assess compliance on each requirement separately before rendering an overall instruction-following score.
                                </p>

                                <h3 className="text-xl font-semibold text-[var(--color-text-primary)] mt-8 mb-4">
                                    Types of Instruction-Following Failures
                                </h3>

                                <div className="space-y-0">
                                    {[
                                        { title: "Scope Violation", body: "The response addresses topics or provides information outside the scope of the instruction. A prompt asking for a summary of a document that receives a critique of the document instead." },
                                        { title: "Format Non-Compliance", body: "The response is delivered in a format other than what was specified. A prompt requesting a bulleted list that receives a prose paragraph. A prompt specifying a word count limit that receives a response significantly over that limit." },
                                        { title: "Content Omission", body: "The response fails to include content specifically required by the instruction. A prompt asking for three examples that receives one. A prompt asking for a specific section that receives a response without it." },
                                        { title: "Constraint Violation", body: "The response violates an explicit constraint specified in the prompt. A prompt requiring the response to avoid a specific topic that mentions it. A prompt requiring a specific persona that breaks character." },
                                        { title: "Partial Compliance", body: "The response complies with some instructions but not all. Partial compliance is a common failure mode for complex multi-part prompts and must be scored with sufficient granularity to be useful as a reward model training signal." }
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
                                    Instruction Complexity and AHT
                                </h3>
                                <p>
                                    Average Handling Time for instruction-following assessment scales with prompt complexity. A single-requirement prompt can be assessed in under a minute. A ten-requirement prompt with ambiguous compliance boundaries may require five minutes of careful reading and evaluation. AHT is established during the paid pilot and used to scope production volume and timelines accurately.
                                </p>
                            </div>
                        </section>
                    </AnimatedSection>

                    {/* SECTION 5: Safety Classification */}
                    <AnimatedSection>
                        <section id="safety-classification">
                            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-[var(--color-text-primary)] mb-6">
                                Safety Classification
                            </h2>
                            <div className="text-base leading-relaxed text-[var(--color-text-secondary)] space-y-4">
                                <p>
                                    Safety classification is the task of evaluating whether a model response produces, facilitates, endorses, or fails to appropriately refuse harmful content. It is among the most consequential annotation tasks in LLM development — and among the most psychologically demanding for annotators.
                                </p>
                                <p>
                                    Safety annotation requires annotators to read, evaluate, and classify content that may be disturbing, offensive, or harmful. At Aeterna Data, safety annotation projects are handled with specific annotator welfare protocols — including rotation schedules, explicit content exposure limits, and debrief procedures. Annotator welfare is not a secondary consideration in safety annotation. It is a quality consideration: annotators experiencing psychological fatigue from repeated exposure to harmful content produce less reliable safety classifications.
                                </p>

                                <h3 className="text-xl font-semibold text-[var(--color-text-primary)] mt-8 mb-4">
                                    Safety Classification Taxonomy
                                </h3>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {[
                                        { title: "Harmful Content Generation", body: "Responses that produce instructions, descriptions, or facilitation for physical harm, self-harm, violence, or illegal activity — regardless of the framing of the original prompt." },
                                        { title: "Misinformation and Hallucination", body: "Responses that assert false factual claims with confidence, fabricate citations or statistics, or generate plausible-sounding but incorrect information without appropriate uncertainty hedging." },
                                        { title: "Inappropriate Refusal", body: "Responses that refuse legitimate, benign requests based on superficial pattern matching to sensitive keywords — reducing model utility without improving safety. Inappropriate refusal is a safety failure in the opposite direction." },
                                        { title: "Bias and Discrimination", body: "Responses that reflect, reinforce, or amplify demographic bias, stereotyping, or discriminatory framing — either explicitly or through systematic differential treatment across groups." },
                                        { title: "Privacy Violations", body: "Responses that expose, infer, or facilitate access to personal information about real individuals — including responses that aggregate publicly available information in ways that create a privacy risk." }
                                    ].map((cat, idx) => (
                                        <AnimatedSection key={idx} delay={idx * 0.08} className="h-full">
                                            <div className="bg-[var(--color-bg-surface)] border border-[var(--color-border)] rounded-2xl p-6 h-full transition-all duration-200 flex flex-col items-start">
                                                <h4 className="text-base font-semibold text-[var(--color-text-primary)] mb-3">{cat.title}</h4>
                                                <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed flex-grow">
                                                    {cat.body}
                                                </p>
                                            </div>
                                        </AnimatedSection>
                                    ))}
                                </div>

                                <h3 className="text-xl font-semibold text-[var(--color-text-primary)] mt-10 mb-4">
                                    Annotator Welfare in Safety Projects
                                </h3>
                                <p>
                                    Aeterna Data does not assign safety annotation tasks without explicit annotator consent and a project-specific welfare protocol. Content exposure limits are specified in the SOW. Annotators are rotated off safety tasks on a schedule agreed before the pilot begins. The welfare protocol is not confidential — clients receive a copy as part of the project documentation.
                                </p>

                                <div className="bg-[rgba(74,124,255,0.06)] border border-[rgba(74,124,255,0.15)] rounded-xl p-5 mt-6">
                                    <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                                        Safety annotation projects are scoped individually. Content category, exposure volume, annotator welfare protocol, and IAA threshold are all specified in the SOW before any safety annotation begins. If your project involves graphic or disturbing content categories, disclose this in your project brief so we can staff and scope appropriately.
                                    </p>
                                </div>
                            </div>
                        </section>
                    </AnimatedSection>

                    {/* SECTION 6: Response Quality Rating */}
                    <AnimatedSection>
                        <section id="response-quality-rating">
                            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-[var(--color-text-primary)] mb-6">
                                Response Quality Rating
                            </h2>
                            <div className="text-base leading-relaxed text-[var(--color-text-secondary)] space-y-4">
                                <p>
                                    Response quality rating extends beyond binary preference ranking to produce scalar quality scores for individual model responses. Rather than comparing two responses, the annotator evaluates a single response against a defined quality rubric and assigns a score on a defined scale — typically 1–5 or 1–7.
                                </p>
                                <p>
                                    Scalar quality ratings are used to train reward models that need to predict absolute quality scores, not just relative preferences. They are also used for model evaluation — to track quality improvements across model versions and to identify specific capability gaps that need targeted training data.
                                </p>

                                <h3 className="text-xl font-semibold text-[var(--color-text-primary)] mt-8 mb-4">
                                    Likert Scale Calibration
                                </h3>
                                <p>
                                    The most common failure mode in scalar quality rating is scale calibration inconsistency. Without anchor examples that define what a 3 versus a 4 means concretely, annotators apply the scale differently — one annotator's 3 is another's 4. This produces rating data with high variance that damages reward model training quality. Aeterna Data requires scale anchor examples for every point on every rating scale used in production — and calibration on those anchors is measured and documented before the pilot begins.
                                </p>

                                <h3 className="text-xl font-semibold text-[var(--color-text-primary)] mt-8 mb-4">
                                    Multi-Dimensional Rating vs. Overall Rating
                                </h3>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                                    <div className="bg-[var(--color-bg-surface)] border border-[var(--color-border)] rounded-2xl p-6">
                                        <h4 className="text-base font-semibold text-[var(--color-text-primary)]">Overall quality rating</h4>
                                        <p className="text-sm text-[var(--color-text-secondary)] mt-4 leading-relaxed">
                                            <strong>Description:</strong> Annotator assigns a single overall quality score to the response.
                                        </p>
                                        <p className="text-sm text-[var(--color-text-secondary)] mt-4 leading-relaxed">
                                            <strong>Weakness:</strong> Score conflates multiple quality dimensions — an accurate but unhelpful response and a helpful but inaccurate response may receive the same overall score, providing no signal on which dimension needs improvement.
                                        </p>
                                        <p className="text-sm text-[var(--color-text-secondary)] mt-4 leading-relaxed italic">
                                            <strong>Best for:</strong> Quick model benchmarking where dimension-level diagnosis is not needed.
                                        </p>
                                    </div>
                                    <div className="bg-[var(--color-bg-surface)] border border-[var(--color-border)] rounded-2xl p-6">
                                        <h4 className="text-base font-semibold text-[var(--color-text-primary)]">Multi-dimensional rating</h4>
                                        <p className="text-sm text-[var(--color-text-secondary)] mt-4 leading-relaxed">
                                            <strong>Description:</strong> Annotator assigns separate scores for each quality dimension — accuracy, helpfulness, safety, tone, instruction following.
                                        </p>
                                        <p className="text-sm text-[var(--color-text-secondary)] mt-4 leading-relaxed">
                                            <strong>Advantage:</strong> Dimension-level scores identify specific capability gaps. A model scoring high on accuracy but low on instruction following needs different training data than one scoring high on both but low on safety.
                                        </p>
                                        <p className="text-sm text-[var(--color-text-secondary)] mt-4 leading-relaxed italic">
                                            <strong>Best for:</strong> Targeted model improvement where training data must address specific capability gaps.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </AnimatedSection>

                    {/* SECTION 7: Appraisal Theory */}
                    <AnimatedSection>
                        <section id="appraisal-theory">
                            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-[var(--color-text-primary)] mb-6">
                                Appraisal Theory in RLHF Annotation
                            </h2>
                            <div className="text-base leading-relaxed text-[var(--color-text-secondary)] space-y-4">
                                <p>
                                    Appraisal Theory is a framework from systemic functional linguistics that provides a structured vocabulary for analysing evaluative language — how speakers express their attitudes, feelings, and judgments through text. It was developed by J.R. Martin and P.R.R. White and has been applied extensively in discourse analysis, computational linguistics, and sentiment analysis research.
                                </p>
                                <p>
                                    At Aeterna Data, we apply Appraisal Theory as an evaluation framework for RLHF response quality annotation — particularly for tasks that require annotators to assess the evaluative quality of LLM responses along dimensions that standard rubrics treat as monolithic. Appraisal Theory decomposes evaluative language into three systems that provide a more precise vocabulary for annotation quality judgments.
                                </p>

                                <h3 className="text-xl font-semibold text-[var(--color-text-primary)] mt-8 mb-4">
                                    The Three Appraisal Systems
                                </h3>

                                <div className="space-y-6">
                                    {[
                                        {
                                            system: "Attitude",
                                            subtitle: "What Is Being Evaluated",
                                            body: "The Attitude system covers three sub-types of evaluative meaning:",
                                            subItems: [
                                                { name: "Affect", desc: "Expressions of emotion and feeling — happiness, sadness, anxiety, desire. In LLM response evaluation, Affect annotation identifies when a response is inappropriately emotional, artificially empathetic, or tonally mismatched to the context." },
                                                { name: "Judgement", desc: "Evaluations of human behaviour against social norms — ethical, moral, or capacity-based assessments. In RLHF annotation, Judgement categories help annotators distinguish between responses that are factually competent and those that are ethically appropriate." },
                                                { name: "Appreciation", desc: "Evaluations of objects, phenomena, and processes — aesthetic quality, significance, and value. In response evaluation, Appreciation provides a framework for assessing response quality along dimensions like composition, elegance, and depth." }
                                            ]
                                        },
                                        {
                                            system: "Engagement",
                                            subtitle: "How the Author Positions Themselves",
                                            body: "The Engagement system analyses how a speaker positions their own voice relative to alternative viewpoints — whether they assert claims monoglossically (as uncontested facts) or heteroglossically (acknowledging other perspectives).",
                                            appBody: "In LLM response evaluation, Engagement analysis helps annotators identify responses that assert uncertain claims with inappropriate confidence (monoglossic over-assertion), responses that hedge so extensively they become unhelpful (heteroglossic over-qualification), and responses that present contested information as settled fact. These are distinct failure modes that standard accuracy rubrics do not reliably distinguish."
                                        },
                                        {
                                            system: "Graduation",
                                            subtitle: "The Strength of the Evaluation",
                                            body: "The Graduation system captures the scaling and sharpening of evaluative meanings — how much, how strong, how many. Graduation operates through Force (amplification and softening) and Focus (sharpening and softening of category membership).",
                                            appBody: "In response quality rating, Graduation provides the theoretical grounding for distinguishing between scalar points on a quality scale with precision. Rather than relying on holistic impression, annotators trained in Graduation can identify specifically why a response is a 4 rather than a 3 — the response is softened where it should be amplified, or it focuses a category boundary imprecisely. This produces more consistent inter-annotator agreement on scalar quality ratings."
                                        }
                                    ].map((card, idx) => (
                                        <AnimatedSection key={idx} delay={idx * 0.10}>
                                            <div className="bg-[var(--color-bg-surface)] border border-[var(--color-border)] rounded-2xl p-8">
                                                <h4 className="text-2xl font-bold text-[var(--color-accent-cta)] mb-1">{card.system}</h4>
                                                <p className="text-sm font-semibold tracking-wide uppercase text-[var(--color-text-muted)] mb-5">{card.subtitle}</p>
                                                <p className="text-base text-[var(--color-text-secondary)] mb-4">{card.body}</p>

                                                {card.subItems ? (
                                                    <div className="pl-6 space-y-4">
                                                        {card.subItems.map((sub, sIdx) => (
                                                            <div key={sIdx} className="relative">
                                                                <span className="absolute left-[-1.5rem] top-1.5 w-1.5 h-1.5 rounded-full bg-[var(--color-border-subtle)]" />
                                                                <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                                                                    <strong className="text-[var(--color-text-primary)]">{sub.name}:</strong> {sub.desc}
                                                                </p>
                                                            </div>
                                                        ))}
                                                    </div>
                                                ) : (
                                                    <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                                                        <strong className="text-[var(--color-text-primary)] block mb-1">Application in RLHF:</strong>
                                                        {card.appBody}
                                                    </p>
                                                )}
                                            </div>
                                        </AnimatedSection>
                                    ))}
                                </div>

                                <h3 className="text-xl font-semibold text-[var(--color-text-primary)] mt-12 mb-4">
                                    Why Appraisal Theory Matters for LLM Alignment
                                </h3>
                                <p>
                                    Standard RLHF rubrics define quality in terms of task-level outcomes — was the instruction followed, was the information accurate, was the response safe. These dimensions are necessary but not sufficient for aligning models that need to produce genuinely excellent responses rather than merely compliant ones.
                                </p>
                                <p>
                                    The difference between a 3 and a 5 on a helpfulness scale is often not a matter of information content — it is a matter of evaluative language quality. The 5 response is more precisely calibrated in its confidence, more appropriately graduated in its emphasis, and more accurately engaged with the user's actual epistemic position. These are Appraisal Theory distinctions. Without the theoretical framework to name and measure them, annotators apply the distinction inconsistently — and the reward model learns a noisy version of quality.
                                </p>
                                <p>
                                    Aeterna Data trains RLHF annotators in Appraisal Theory application specifically for LLM response evaluation. This training is not a theoretical exercise. It produces measurably higher IAA on response quality rating tasks at the upper end of the quality scale — precisely where standard rubrics produce the most annotator disagreement.
                                </p>

                                <div className="bg-[rgba(74,124,255,0.06)] border border-[rgba(74,124,255,0.15)] rounded-xl p-6 mt-8">
                                    <p className="text-sm text-[var(--color-text-primary)] font-medium leading-relaxed">
                                        Appraisal Theory annotation is Aeterna Data's most differentiated capability. If your RLHF or model alignment project requires annotation depth beyond standard preference ranking — particularly for evaluating response quality at the margin between good and excellent — specify this in your project brief.
                                    </p>
                                </div>
                            </div>
                        </section>
                    </AnimatedSection>

                    {/* SECTION 8: Quality Standards */}
                    <AnimatedSection>
                        <section id="quality-standards">
                            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-[var(--color-text-primary)] mb-6">
                                Quality Standards for RLHF Annotation
                            </h2>
                            <div className="text-base leading-relaxed text-[var(--color-text-secondary)] space-y-4">
                                <p>
                                    RLHF annotation presents unique IAA measurement challenges. Preference annotation is inherently more subjective than classification annotation — two annotators can disagree on a preference label without either being wrong, if the rubric is ambiguous or the responses are genuinely close in quality. This means IAA in RLHF annotation must be interpreted differently: low IAA is not always an annotator quality problem. It is sometimes a rubric specification problem, and sometimes a signal that the model is producing near-identical response quality across pairs.
                                </p>
                                <p>
                                    At Aeterna Data, we differentiate between these causes during the pilot phase — measuring whether low IAA is consistent across annotator pairs (suggesting rubric ambiguity), concentrated in specific prompt categories (suggesting domain-specific calibration needs), or distributed randomly (suggesting genuine response similarity). This diagnosis drives the intervention — rubric refinement, additional calibration, or a recommendation to the client on response pair selection.
                                </p>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
                                    <div className="bg-[rgba(74,124,255,0.06)] border border-[rgba(74,124,255,0.15)] rounded-2xl p-6 flex flex-col justify-center">
                                        <div className="text-[var(--color-accent-cta)] text-3xl font-mono font-bold mb-2" style={{ textShadow: "0 0 20px rgba(74,124,255,0.4)" }}>
                                            κ ≥ 0.80
                                        </div>
                                        <h3 className="text-base font-semibold text-[var(--color-text-primary)]">Cohen's Kappa</h3>
                                        <p className="text-sm text-[var(--color-text-secondary)] mt-1">
                                            Pairwise IAA for preference ranking and binary classification tasks. Applied between two annotators evaluating the same prompt-response pair or preference comparison. Measured per rubric dimension, not only on the final preference label.
                                        </p>
                                    </div>
                                    <div className="bg-[rgba(20,184,166,0.06)] border border-[rgba(20,184,166,0.15)] rounded-2xl p-6 flex flex-col justify-center">
                                        <div className="text-teal-400 text-3xl font-mono font-bold mb-2" style={{ color: "#2dd4bf", textShadow: "0 0 20px rgba(45,212,191,0.4)" }}>
                                            κ ≥ 0.75
                                        </div>
                                        <h3 className="text-base font-semibold text-[var(--color-text-primary)]">Fleiss' Kappa</h3>
                                        <p className="text-sm text-[var(--color-text-secondary)] mt-1">
                                            Multi-annotator IAA for tasks requiring three or more independent evaluations — particularly safety classification and multi-dimensional response quality rating where a single annotator judgment is insufficient.
                                        </p>
                                    </div>
                                </div>

                                <h3 className="text-xl font-semibold text-[var(--color-text-primary)] mt-10 mb-4">
                                    Rubric Drift Monitoring
                                </h3>
                                <p>
                                    Rubric drift is the gradual shift in how an annotator interprets a rubric over time — a natural cognitive phenomenon that affects all annotators on long-running projects. An annotator who begins a project applying a strict interpretation of 'helpful' may gradually relax that interpretation over thousands of annotations, producing labels that are systematically different from their early-project labels. At Aeterna Data, rubric drift is monitored by reintroducing calibration items from the pilot phase at regular intervals throughout production and measuring annotator consistency against their own early-project baseline. Drift that exceeds defined thresholds triggers a recalibration session before the batch is delivered.
                                </p>

                                <div className="space-y-4 mt-8">
                                    {[
                                        { num: "01", title: "Rubric Review", body: "We assess your RLHF rubric for ambiguity, missing decision rules, and dimension definitions that will produce low IAA. We propose refinements before the pilot begins." },
                                        { num: "02", title: "Annotator Selection", body: "RLHF annotators are selected for evaluative judgment capacity — not just language proficiency. Selection includes rubric comprehension assessment before assignment." },
                                        { num: "03", title: "Calibration + Pilot", body: "Calibration on 50–100 items before pilot. Pilot on 100–500 items. IAA measured per dimension. Written approval before production begins." },
                                        { num: "04", title: "Production IAA Every Batch", body: "Cohen's Kappa and Fleiss' Kappa per dimension, every batch. Batches failing threshold reworked at zero cost." },
                                        { num: "05", title: "Drift Monitoring", body: "Calibration items reintroduced throughout production. Annotator consistency tracked against baseline. Recalibration triggered when drift exceeds threshold." }
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

                    {/* SECTION 9: The BYOT Model */}
                    <AnimatedSection>
                        <section id="byot-model">
                            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-[var(--color-text-primary)] mb-6">
                                The BYOT Model for RLHF Projects
                            </h2>
                            <div className="text-base leading-relaxed text-[var(--color-text-secondary)] space-y-4">
                                <p>
                                    BYOT — Bring Your Own Tool — means Aeterna Data's RLHF annotators work directly inside your evaluation dashboard, annotation platform, or internal RLHF tooling. We do not provide a platform. We do not ask you to export your model outputs to a third-party service. Your model outputs, your prompts, and your preference data stay in your controlled environment.
                                </p>
                                <p>
                                    For RLHF specifically, BYOT matters beyond standard data sovereignty reasons. Your RLHF pipeline is a competitive asset. The prompts you are using to probe model behaviour, the response pairs you are comparing, and the preference signals you are collecting are among the most strategically sensitive assets in your AI development process. Every piece of that pipeline stays in your environment when you work with Aeterna Data.
                                </p>

                                <div className="mt-6 flex flex-wrap gap-2">
                                    {[
                                        "Argilla", "Label Studio", "Labelbox", "Scale Studio", "Prolific", "Surge AI",
                                        "Custom RLHF Dashboards", "Proprietary Evaluation Platforms", "Internal Annotation Tools"
                                    ].map((tag, idx) => (
                                        <span key={idx} className="inline-flex items-center border border-[var(--color-border)] text-xs text-[var(--color-text-muted)] px-3 py-1 rounded-full">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <p className="text-sm text-[var(--color-text-muted)] mt-4 italic">
                                    If your RLHF platform is not listed, tell us during scoping. We work in any browser-based evaluation environment where annotators can be onboarded with credentials and task-specific rubrics.
                                </p>

                                <div className="bg-[rgba(74,124,255,0.06)] border border-[rgba(74,124,255,0.15)] rounded-xl p-5 mt-6">
                                    <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                                        Every annotator accesses your RLHF platform under a signed individual NDA. Your model outputs — which may contain proprietary model behaviour signals — are treated as confidential by default. Access credentials are managed per-annotator, never shared, and revoked immediately on engagement end. All processing governed by signed DPA and EU SCCs.
                                    </p>
                                </div>
                            </div>
                        </section>
                    </AnimatedSection>

                    {/* SECTION 10: EU AI Act */}
                    <AnimatedSection>
                        <section id="eu-ai-act">
                            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-[var(--color-text-primary)] mb-6">
                                RLHF Annotation and the EU AI Act
                            </h2>
                            <div className="text-base leading-relaxed text-[var(--color-text-secondary)] space-y-4 mb-8">
                                <p>
                                    The EU AI Act, which takes full effect on August 2, 2026, imposes specific obligations on providers of high-risk AI systems — and on the training data used to build them. Large language models deployed in high-risk contexts are subject to documentation requirements that extend to the human feedback data used in RLHF training.
                                </p>
                                <p>
                                    For EU AI teams building LLMs that will be deployed in high-risk contexts — healthcare, legal, financial, HR, critical infrastructure — the EU AI Act requires: documented data governance for training data, auditable records of data quality measures, and accountable data processors with signed agreements. All three requirements apply to your RLHF annotation pipeline.
                                </p>
                            </div>

                            <h3 className="text-xl font-semibold text-[var(--color-text-primary)] mt-8 mb-4">
                                What the EU AI Act Requires of Your Annotation Pipeline
                            </h3>

                            <div className="space-y-0">
                                {[
                                    {
                                        title: "Documented Data Quality Measures",
                                        body: "The EU AI Act requires high-risk AI providers to implement data governance practices that include examination of training data for possible biases, gaps, and shortcomings. For RLHF data, this means documented IAA measurement — not claimed quality, but measured and recorded quality with methodology and thresholds specified."
                                    },
                                    {
                                        title: "Auditable Data Lineage",
                                        body: "High-risk AI systems must maintain technical documentation sufficient for post-market monitoring and conformity assessment. For RLHF training data, this requires traceable records of who annotated what, when, under what rubric, with what quality score — and where rework was performed."
                                    },
                                    {
                                        title: "Accountable Data Processor",
                                        body: "Any third party processing training data for a high-risk AI system must be a contractually accountable data processor under GDPR Article 28. The same DPA and EU SCCs that govern personal data processing also establish the contractual accountability chain the EU AI Act's audit requirements depend on."
                                    }
                                ].map((item, idx) => (
                                    <div key={idx} className="border-l-2 border-[var(--color-accent-cta)] pl-5 py-2 mb-6">
                                        <h4 className="text-sm font-semibold text-[var(--color-text-primary)]">{item.title}</h4>
                                        <p className="text-sm text-[var(--color-text-secondary)] mt-1 leading-relaxed">
                                            {item.body}
                                        </p>
                                    </div>
                                ))}
                            </div>

                            <h3 className="text-xl font-semibold text-[var(--color-text-primary)] mt-10 mb-4">
                                Aeterna Data's EU AI Act Readiness
                            </h3>
                            <p className="text-base leading-relaxed text-[var(--color-text-secondary)] mb-6">
                                Aeterna Data's contract stack and quality documentation framework satisfies all three EU AI Act requirements for RLHF annotation pipelines on day one of any engagement — not as a compliance retrofit, but as a consequence of how we operate by default. The IAA reports we deliver with every batch are the data quality documentation the EU AI Act requires. The individual annotator NDAs and DPA establish the accountable processor relationship. The SOW specifies the rubric and threshold that constitute the data quality measure.
                            </p>

                            <div
                                className="bg-[rgba(74,124,255,0.08)] border border-[rgba(74,124,255,0.20)] rounded-xl p-5 mt-6"
                                role="note"
                                aria-label="EU AI Act deadline notice"
                            >
                                <p className="text-sm text-[var(--color-text-primary)] leading-relaxed font-medium">
                                    The EU AI Act high-risk system requirements take full effect August 2, 2026. EU AI teams that need audit-ready RLHF training data with documented annotator accountability need their processor relationships established before Q2 2026 at the latest — procurement and legal review take time. A pilot started now is a production pipeline ready before the deadline.
                                </p>
                            </div>
                        </section>
                    </AnimatedSection>

                    {/* SECTION 11: Use Cases */}
                    <AnimatedSection>
                        <section id="use-cases">
                            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-[var(--color-text-primary)] mb-6">
                                RLHF & Model Alignment Use Cases
                            </h2>
                            <p className="text-base leading-relaxed text-[var(--color-text-secondary)] mb-8">
                                RLHF annotation supports a range of LLM development objectives. The following are the most common use cases Aeterna Data supports — each with specific annotation task recommendations.
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {[
                                    {
                                        title: "General-Purpose LLM Alignment",
                                        types: "Pairwise Preference Ranking, Response Quality Rating, Instruction Following Assessment",
                                        body: "Aligning a general-purpose LLM to be helpful, accurate, and safe across a broad range of user intents. The highest-volume RLHF use case — requires diverse prompt coverage and annotators calibrated across all rubric dimensions."
                                    },
                                    {
                                        title: "Domain-Specific LLM Fine-Tuning",
                                        types: "Preference Ranking, Multi-Dimensional Rating",
                                        body: "Aligning a fine-tuned LLM for legal, medical, financial, or technical domains. Requires domain-familiar annotators who can evaluate factual accuracy in specialised content and apply domain-specific quality criteria."
                                    },
                                    {
                                        title: "Conversational AI Quality",
                                        types: "Preference Ranking, Response Quality Rating, Tone Assessment",
                                        body: "Evaluating and improving the quality of conversational AI responses — customer service bots, enterprise assistants, and dialogue systems. Tone, register, and helpfulness are primary evaluation dimensions."
                                    },
                                    {
                                        title: "Safety and Alignment Research",
                                        types: "Safety Classification, Harmful Content Detection, Refusal Quality",
                                        body: "Building safety datasets for red-teaming, alignment research, and constitutional AI development. Requires annotators with safety taxonomy training and welfare protocols in place."
                                    },
                                    {
                                        title: "Evaluation and Benchmarking",
                                        types: "Multi-Dimensional Rating, Human Preference Evaluation",
                                        body: "Human evaluation datasets for model benchmarking across versions and capability dimensions. Produces human-preference ground truth that automated metrics cannot replicate."
                                    },
                                    {
                                        title: "Instruction Dataset Creation",
                                        types: "SFT Demonstration Data, Instruction Writing, Response Selection",
                                        body: "Creating high-quality supervised fine-tuning datasets — instructions paired with ideal responses — for initial LLM alignment before RLHF preference annotation begins."
                                    }
                                ].map((uc, idx) => (
                                    <AnimatedSection key={idx} delay={idx * 0.06} className="h-full">
                                        <div className="bg-[var(--color-bg-surface)] border border-[var(--color-border)] rounded-2xl p-6 h-full transition-all duration-150">
                                            <h3 className="text-base font-semibold text-[var(--color-text-primary)]">{uc.title}</h3>
                                            <p className="text-xs uppercase tracking-widest text-[var(--color-text-muted)] mb-1 mt-3">Annotation tasks</p>
                                            <p className="font-mono text-xs text-[var(--color-accent-cta)] leading-relaxed">{uc.types}</p>
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
                                GDPR Compliance for RLHF Annotation
                            </h2>
                            <div className="text-base leading-relaxed text-[var(--color-text-secondary)] space-y-4 mb-8">
                                <p>
                                    RLHF annotation pipelines present specific GDPR considerations that differ from standard data labeling. The model outputs being evaluated may contain personal data — a model prompted with a user query about a real person may produce a response that contains or reveals personal information about that person. If your evaluation pipeline uses real user queries, the responses being annotated may constitute personal data processing under GDPR.
                                </p>
                                <p>
                                    Additionally, the prompts themselves — particularly if drawn from real user interactions — may contain personal data. A customer service LLM whose RLHF data is drawn from real customer conversations is processing personal data in the annotation pipeline. Aeterna Data treats RLHF pipelines using real user data as personal data processing by default, executing the full DPA and EU SCCs before any such data is shared.
                                </p>
                            </div>

                            <div className="space-y-0">
                                {[
                                    {
                                        title: "DPA + EU SCCs Before Pipeline Access",
                                        body: "Aeterna Data executes a GDPR Article 28 Data Processing Agreement with EU SCCs Module 2 before any RLHF prompts, model outputs, or evaluation data are shared. For pipelines using real user queries, this is non-negotiable regardless of whether the data has been pseudonymised."
                                    },
                                    {
                                        title: "Individual Annotator NDAs",
                                        body: "Every RLHF annotator signs an individual NDA before accessing your evaluation platform. For pipelines containing proprietary model outputs or sensitive prompt content, individual NDAs are the primary annotator-level protection beyond the platform access controls you maintain."
                                    },
                                    {
                                        title: "Proprietary Model Output Protection",
                                        body: "Model outputs in RLHF evaluation pipelines may reveal proprietary model behaviour, capability signals, and alignment characteristics that are commercially sensitive independent of GDPR. The NDA and MSA both include confidentiality provisions that protect proprietary model information beyond the personal data scope of the DPA."
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
                                How to Start an RLHF Annotation Project
                            </h2>
                            <p className="text-base leading-relaxed text-[var(--color-text-secondary)] mb-8">
                                Starting an RLHF annotation project with Aeterna Data follows a five-step process. RLHF projects have one additional scoping step compared to standard annotation engagements — rubric review — because the quality of the preference data is more directly dependent on rubric specification than any other annotation task type.
                            </p>

                            <div className="flex flex-col">
                                {[
                                    {
                                        badge: "Step 01",
                                        title: "Send a Project Brief",
                                        body: "Describe your RLHF task type — preference ranking, safety classification, quality rating, or SFT data creation. Include your rubric if one exists, your evaluation platform, approximate volume per month, and target IAA threshold. Mention if your pipeline uses real user queries.",
                                        ctaStr: "Send Brief",
                                        ctaHref: "/contact"
                                    },
                                    {
                                        badge: "Step 02",
                                        title: "Rubric Review",
                                        body: "We review your RLHF rubric critically — assessing dimension definitions, scale anchor clarity, decision rules for ambiguous cases, and potential IAA failure points. For projects using Appraisal Theory dimensions, we map your rubric to the Appraisal framework before annotator selection begins."
                                    },
                                    {
                                        badge: "Step 03",
                                        title: "Execute Contracts",
                                        body: "NDA first — sometimes before the full project brief is shared if proprietary model outputs are involved. DPA and EU SCCs after the discovery call. MSA and SOW at pilot agreement. SOW specifies rubric, IAA thresholds, drift monitoring protocol, and annotator welfare provisions."
                                    },
                                    {
                                        badge: "Step 04",
                                        title: "Run the Paid Pilot",
                                        body: "50–200 preference pairs or quality ratings annotated inside your platform. IAA measured per dimension. Rubric drift baseline established. Full quality report on delivery. Pilot fee credited to first production invoice."
                                    },
                                    {
                                        badge: "Step 05",
                                        title: "Move to Production",
                                        body: "After written pilot approval, production begins under the signed SOW. Volume, rate, IAA thresholds, dimension scope, drift monitoring schedule, and delivery format all fixed before the first production batch starts."
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
                            Ready to Align Your Model?
                        </h2>
                        <p className="text-[var(--color-text-secondary)] text-lg mb-10 leading-relaxed max-w-2xl mx-auto">
                            Start with a paid pilot. Your evaluation platform. Your rubric. Appraisal Theory-trained annotators. IAA measured per dimension. EU AI Act-ready documentation from batch one. Pilot fee credited to first invoice.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <Link
                                href="/contact?type=request-pilot"
                                className="bg-[var(--color-accent-cta)] text-white font-semibold px-8 py-3.5 rounded-lg hover:bg-[var(--color-accent-cta-hover)] transition-colors duration-200"
                            >
                                Request an RLHF Pilot
                            </Link>
                            <Link
                                href="#eu-ai-act"
                                className="border border-[var(--color-border-subtle)] text-[var(--color-text-secondary)] px-8 py-3.5 rounded-lg hover:border-[var(--color-border-hover)] hover:text-[var(--color-text-primary)] transition-all duration-200"
                            >
                                Read About the EU AI Act
                            </Link>
                        </div>
                    </div>
                </section>
            </AnimatedSection>
        </main>
    );
}
