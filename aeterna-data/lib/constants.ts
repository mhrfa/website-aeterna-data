import { BoxSelect, Layers, Tag, GitCompare, ShieldCheck, FileText, Shield, CheckCircle, FlaskConical, Clock, TrendingUp, Building2 } from "lucide-react";

export const SITE_META = {
    title: "Aeterna Data — Precise Image Annotation for AI Teams",
    description:
        "Specialized image annotation and visual RLHF evaluation for AI startups and research labs. IAA-measured (Cohen's κ ≥ 0.80 / Fleiss' κ ≥ 0.75). Structured workflows. Consistent quality.",
    companyName: "PT Aeterna Data Intentio Logic",
    brandName: "Aeterna.Data",
    email: "contact@aeternadata.com",
};

export const NAV_LINKS = [
    { label: "Services", href: "/services" },
    { label: "Compliance", href: "/compliance" },
    { label: "The Journey", href: "/journey" },
];

export const HERO = {
    headline: "We provide precise image annotation services to support your machine learning teams.",
    subHeadline:
        "Our team specializes in annotating computer vision datasets and evaluating visual AI. With clear workflows, we deliver consistent quality. We work with AI startups and research labs that need dependable human annotation instead of anonymous crowd work.",
    ctaPrimary: "Request a Pilot",
    ctaSecondary: "See Our Services",
};

export const SERVICES = {
    label: "Services",
    title: "Five Services. One Quality Standard.",
    description:
        "Aeterna Data specializes in computer vision annotation and visual AI evaluation. Each service follows a clear workflow: pilot phase, guideline validation, production annotation, and internal QA review before delivery.",
    cards: [
        {
            icon: BoxSelect,
            title: "Bounding Box Annotation",
            description:
                "We provide object detection dataset labeling using class-specific consistency guidelines, structured to support production-grade computer vision training pipelines.",
            tags: ["Object Detection", "YOLO", "COCO Format"],
        },
        {
            icon: Layers,
            title: "Image Segmentation",
            description:
                "We provide pixel-level object identification and masking for both semantic and instance segmentation tasks, along with polygon annotation and per-class quality checks.",
            tags: ["Semantic", "Instance", "Polygon"],
        },
        {
            icon: Tag,
            title: "Image Classification",
            description:
                "We provide structured visual dataset categorisation with multi-label support. Consistent taxonomy application is ensured through internal cross-checking.",
            tags: ["Multi-Label", "Taxonomy", "Structured"],
        },
        {
            icon: GitCompare,
            title: "Visual RLHF Evaluation",
            description:
                "We rank and evaluate AI-generated image outputs to support reward model training. This process uses pairwise preference annotation, structured rubrics, and consistency monitoring.",
            tags: ["Text-to-Image", "Pairwise", "Rubric"],
        },
        {
            icon: ShieldCheck,
            title: "Dataset Validation & QA",
            description:
                "We provide a systematic review of annotated image datasets, covering IAA measurement, label consistency audits, and structured error reporting before model training.",
            tags: ["IAA", "Audit", "Quality Report"],
        },
    ],
};

export const COMPLIANCE = {
    label: "Trust & Security",
    title: "We begin each engagement by establishing agreements.",
    description:
        "Before any data is shared, we require a signed NDA and Data Processing Agreement. We recognize training datasets as proprietary and handle them with strict confidentiality.",
    items: [
        {
            icon: FileText,
            title: "NDA + DPA",
            body: "We sign this agreement before the project begins. Your dataset will remain confidential.",
        },
        {
            icon: Shield,
            title: "Data Security",
            body: "We recorded the technical and organisational security measures used in each engagement.",
        },
        {
            icon: CheckCircle,
            title: "IAA on Every Batch",
            body: "Cohen\u2019s \u03BA (\u2265 0.80) and Fleiss\u2019 \u03BA (\u2265 0.75) will be measured and reported for each delivery.",
        },
    ],
};

export const JOURNEY = {
    label: "The Engagement Journey",
    title: "From Pilot to Production.",
    description:
        "Every client begins with a low-risk, proof-of-concept pilot. Every retainer begins with trust.",
    steps: [
        {
            icon: FlaskConical,
            title: "The Paid Pilot",
            description:
                "We offer a flat-rate project with a clear scope to show how our pipeline works. Our team will annotate a sample of your data, provide a complete IAA quality report, and set up the workflow. This all happens before you make any long-term decisions.",
            tag: "Entry Point \u00B7 Flat Rate",
            note: "Pilot fee credited to first production invoice on proceeding.",
        },
        {
            icon: Clock,
            title: "On-Demand Annotation",
            description:
                "We offer flexible per-project or per-hour annotation services once the pilot confirms the workflow. You can scale services according to your dataset volume. Rates are fixed in a signed statement of work before the project begins.",
            tag: "Flexible \u00B7 Per-Project",
        },
        {
            icon: TrendingUp,
            title: "Volume Engagements",
            description:
                "When you commit to a clear project scope, you get structured pricing. This approach works well for teams that need ongoing annotation for different dataset versions or model updates.",
            tag: "Structured Pricing",
        },
        {
            icon: Building2,
            title: "Dedicated Team",
            description:
                "Get a dedicated annotation team focused on your projects. You\u2019ll work with the same annotators for steady quality and output. This is ideal for teams looking for a reliable, long-term annotation partner.",
            tag: "Long-Term \u00B7 Dedicated",
        },
    ],
};

export const CTA = {
    title: "Ready to Annotate Your Dataset?",
    description:
        "Begin with a flat-rate pilot for one week, using a representative sample of your dataset. You will receive a comprehensive IAA quality report upon delivery. No long-term commitment is required.",
    primary: "Request a Pilot",
    secondary: "Book a Consultation",
};
