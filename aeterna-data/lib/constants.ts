import { Shield, BarChart, Lock, Scan, Languages, BrainCircuit, ShieldCheck, CheckCircle2, Clock, TrendingUp, Building2, FlaskConical } from "lucide-react";

export const SITE_META = {
    title: "Aeterna Data — Enterprise AI Data Annotation for EU Teams",
    description:
        "GDPR-compliant, BYOT AI data annotation and model alignment services for DACH and Benelux AI teams. Contract-first. IAA-measured (Cohen's κ ≥ 0.80 / Fleiss' κ ≥ 0.75). No platform lock-in.",
    companyName: "PT Aeterna Data Intentio Logic",
    brandName: "Aeterna.Data",
    email: "hello@aeternadata.com",
};

export const NAV_LINKS = [
    { label: "Services", href: "/services" },
    { label: "Compliance", href: "/compliance" },
    { label: "The Journey", href: "#journey" },
];

export const HERO = {
    pillText: "Bring Your Own Tool (BYOT) Model",
    headline: "Enterprise-Grade AI Training Data.",
    headlineItalic: "Built in Your Environment.",
    subHeadline:
        "A fully managed, scalable annotation workforce that integrates directly into your proprietary labeling dashboard. Zero software lock-in. Contractually guaranteed QA.",
    ctaPrimary: "Book a Discovery Call",
    ctaSecondary: "Explore QA Standards",
    trustIndicators: [
        { text: "GDPR Article 28 Compliant", icon: Shield },
        { text: "Cohen's κ ≥ 0.80 / Fleiss' κ ≥ 0.75 — Every Batch", icon: BarChart },
        { text: "NDA-Bound Remote Workforce", icon: Lock },
    ],
};

export const SERVICES = {
    label: "Core Competencies",
    title: "Four Verticals. One Managed Workforce.",
    description:
        "We operate as an embedded team inside your stack. No platform to adopt. No onboarding overhead.",
    cards: [
        {
            icon: Scan,
            title: "Computer Vision & Spatial Annotation",
            description:
                "High-throughput 2D labeling for autonomous and visual AI systems. Strictly managed QA pipelines ensure production-grade consistency at scale.",
            tags: ["Bounding Boxes", "Polygon Labeling", "Semantic Segmentation", "Object Tracking"],
        },
        {
            icon: Languages,
            title: "Advanced NLP & Multilingual Linguistic Analysis",
            description:
                "Academic-grade text annotation for complex LLM training pipelines. We go beyond basic tagging — structural language comprehension, cultural accuracy, and rigorous translation QA.",
            tags: ["Named Entity Recognition", "Intent Labeling", "Translation QA", "Deep Semantic Tagging"],
        },
        {
            icon: BrainCircuit,
            title: "RLHF & Model Alignment",
            description:
                "Expert human-in-the-loop feedback to calibrate LLM behaviour. Our annotators apply advanced evaluation frameworks — including Appraisal Theory — to produce nuanced, rubric-consistent preference data.",
            tags: ["Pairwise Preference Ranking", "Instruction-Following Assessment", "Safety Classification", "Multi-Dimensional Rating"],
        },
        {
            icon: ShieldCheck,
            title: "Data Validation, QA & Custom Work",
            description:
                "Audit, clean, and validate existing datasets — or scope an entirely bespoke annotation workflow. We deliver a scoping proposal within 48 hours of brief receipt.",
            tags: ["Label Consistency Audits", "IAA Measurement (κ ≥ 0.80 / κ ≥ 0.75)", "Custom Modality", "48hr Scoping SLA"],
        },
    ],
};

export const COMPLIANCE = {
    label: "Built for EU Enterprise",
    title: "Your Legal Team Will Be Satisfied Before Day One.",
    description:
        "We operate as a GDPR Article 28 Data Processor. Our contract stack is designed specifically for European AI companies that cannot afford compliance risk in their data pipeline.",
    checklist: [
        "GDPR Article 28 & EU SCCs Module 2 (Controller-to-Processor)",
        "NDA + DPA + MSA signed before a single data item is shared",
        "Cohen's Kappa ≥ 0.80 (pairwise) and Fleiss' Kappa ≥ 0.75 (multi-annotator), measured on every production batch.",
        "No data exported from your platform — annotators work inside your dashboard only",
        "72-hour Personal Data Breach notification (GDPR Article 33)",
        "Annual audit rights for your legal team",
        "UU PDP No. 27/2022 (Indonesian data protection law) compliant",
    ],
    marketsTitle: "Markets We Serve",
    markets: [
        { country: "Germany", flag: "DE", law: "GDPR + BDSG" },
        { country: "Austria", flag: "AT", law: "GDPR + DSG" },
        { country: "Switzerland", flag: "CH", law: "GDPR + revDSG" },
        { country: "Netherlands", flag: "NL", law: "GDPR + UAVG" },
        { country: "Belgium", flag: "BE", law: "GDPR" },
        { country: "Luxembourg", flag: "LU", law: "GDPR" },
    ],
};

export const JOURNEY = {
    label: "The Engagement Journey",
    title: "From First Contact to Dedicated Infrastructure.",
    description:
        "Every client begins with a low-risk, proof-of-concept pilot. Every retainer begins with trust.",
    steps: [
        {
            icon: FlaskConical,
            title: "The Paid Pilot",
            description:
                "A fixed-scope, flat-rate engagement — approximately one week of dedicated annotation inside your dashboard. We establish our Average Handling Time, deliver a full IAA quality report (Cohen's κ ≥ 0.80 / Fleiss' κ ≥ 0.75), and prove the pipeline before any long-term commitment.",
            tag: "Entry Point · Flat Rate",
            note: "Pilot fee credited to first production invoice on proceeding.",
        },
        {
            icon: Clock,
            title: "On-Demand Hourly (BYOT)",
            description:
                "Flexible, per-annotator-hour billing across all four service verticals. Scale up or down each month. No headcount commitment. Rates fixed in a signed SOW before work begins.",
            tag: "Core Model · EUR/hr",
        },
        {
            icon: TrendingUp,
            title: "Volume Discounts",
            description:
                "Commit to a guaranteed monthly hour block and receive tiered rate reductions — incentivising you to consolidate your annotation outsourcing with a single, fully accountable partner.",
            tag: "Exclusivity · Sliding Scale",
        },
        {
            icon: Building2,
            title: "Managed Pods & FTE Retainers",
            description:
                "A dedicated annotator or a complete autonomous team (3 Annotators + 1 QA Lead) reserved exclusively for your pipeline. Guaranteed monthly capacity. Your engineering directors receive only validated, report-accompanied datasets.",
            tag: "Peak Model · Monthly Retainer",
        },
    ],
};

export const CTA = {
    title: "Ready to Prove the Pipeline?",
    description:
        "Start with a paid pilot. One week. Your dashboard. A complete IAA quality report (Cohen's κ ≥ 0.80 / Fleiss' κ ≥ 0.75) on delivery. No long-term commitment required.",
    primary: "Request a Pilot",
    secondary: "Book a Consultation",
};
