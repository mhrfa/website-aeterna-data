"use client";

import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

interface JourneyStepProps {
    icon: React.ReactNode;
    title: string;
    description: string;
    tag: string;
    note?: string;
    index: number;
}

export default function JourneyStep({
    icon,
    title,
    description,
    tag,
    note,
    index,
}: JourneyStepProps) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.08 }}
            className="relative flex flex-col lg:flex-1"
        >
            <div className="flex items-start gap-4 bg-[var(--color-bg-base)] pr-4 relative z-10 w-fit min-h-[4.5rem] lg:min-h-[5rem]">
                <div className="mt-1 text-[var(--color-text-secondary)] shrink-0 bg-[var(--color-bg-base)]">
                    {icon}
                </div>
                <h3 className="text-xl md:text-2xl font-semibold text-[var(--color-text-primary)] leading-tight tracking-tight">
                    {title}
                </h3>
            </div>

            <div className="pl-9 mt-4">
                <div className="mb-4">
                    <span className="inline-block border border-[var(--color-border-subtle)] bg-[var(--color-bg-base)] text-[var(--color-text-muted)] text-[11px] px-2 py-1 font-mono uppercase tracking-widest leading-none">
                        {tag}
                    </span>
                </div>
                <p className="text-[var(--color-text-secondary)] text-sm md:text-base leading-relaxed mb-4">
                    {description}
                </p>
                {note && (
                    <p className="text-[var(--color-text-muted)] text-xs italic">
                        {note}
                    </p>
                )}
            </div>
        </motion.div>
    );
}
