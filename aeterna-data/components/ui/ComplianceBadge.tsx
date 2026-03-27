import { CheckCircle2 } from "lucide-react";

export default function ComplianceBadge({ text }: { text: string }) {
    return (
        <div className="flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-[var(--color-text-secondary)] shrink-0 mt-0.5" />
            <span className="text-[var(--color-text-primary)] leading-relaxed text-sm md:text-base">
                {text}
            </span>
        </div>
    );
}
