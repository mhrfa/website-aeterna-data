"use client";

import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

interface ServiceCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
    tags: string[];
}

export default function ServiceCard({
    icon,
    title,
    description,
    tags,
}: ServiceCardProps) {
    return (
        <motion.div
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="group relative bg-[var(--color-bg-surface)] border border-[var(--color-border)] rounded-2xl p-8 flex flex-col h-full hover:bg-[var(--color-bg-elevated)] hover:border-[var(--color-border-hover)] transition-all overflow-hidden"
        >
            <div className="mb-6">
                {icon}
            </div>
            <h3 className="text-xl md:text-2xl font-semibold mb-4 text-[var(--color-text-primary)]">
                {title}
            </h3>
            <p className="text-[var(--color-text-secondary)] text-base md:text-lg leading-relaxed flex-grow mb-8">
                {description}
            </p>
            <div className="flex flex-wrap gap-2 mt-auto">
                {tags.map((tag) => (
                    <span
                        key={tag}
                        className="rounded-full bg-[var(--color-bg-elevated)] border border-[var(--color-border)] text-[var(--color-text-muted)] text-xs px-3 py-1 font-medium"
                    >
                        {tag}
                    </span>
                ))}
            </div>
        </motion.div>
    );
}
