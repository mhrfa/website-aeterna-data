import { COMPLIANCE } from "@/lib/constants";
import ComplianceBadge from "@/components/ui/ComplianceBadge";
import AnimatedSection from "@/components/ui/AnimatedSection";

export default function Compliance() {
    return (
        <section id="compliance" className="py-[10rem] bg-[var(--color-bg-surface)] relative w-full border-t border-[var(--color-border)]">
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[var(--color-border)] to-transparent opacity-50" />

            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <AnimatedSection>
                        <span className="inline-block rounded-full bg-[var(--color-bg-base)] border border-[var(--color-border)] text-[var(--color-text-primary)] text-xs px-4 py-1.5 font-semibold uppercase tracking-widest mb-6">
                            {COMPLIANCE.label}
                        </span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[var(--color-text-primary)] mb-6 leading-tight">
                            {COMPLIANCE.title}
                        </h2>
                        <p className="text-[var(--color-text-secondary)] text-lg leading-relaxed mb-10">
                            {COMPLIANCE.description}
                        </p>

                        <div className="space-y-4">
                            {COMPLIANCE.checklist.map((item, idx) => (
                                <ComplianceBadge key={idx} text={item} />
                            ))}
                        </div>
                    </AnimatedSection>

                    <AnimatedSection delay={0.2}>
                        <div className="bg-[var(--color-bg-base)] border border-[var(--color-border-subtle)] rounded-2xl p-6 md:p-8">
                            <h3 className="text-xl font-semibold text-[var(--color-text-primary)] mb-6">
                                {COMPLIANCE.marketsTitle}
                            </h3>
                            <div className="space-y-3">
                                {COMPLIANCE.markets.map((market, idx) => (
                                    <div
                                        key={idx}
                                        className="grid grid-cols-[1fr_auto_auto] items-center gap-6 p-4 rounded-lg bg-[var(--color-bg-elevated)] border border-transparent hover:border-[var(--color-border)] transition-colors"
                                    >
                                        <div className="flex items-center gap-3">
                                            <span className="font-bold text-[var(--color-text-primary)] w-6">{market.flag}</span>
                                            <span className="font-semibold text-[var(--color-text-primary)] whitespace-nowrap">
                                                {market.country}
                                            </span>
                                        </div>

                                        <div className="text-[var(--color-text-muted)] text-[11px] uppercase tracking-wider whitespace-nowrap text-right">
                                            {market.law}
                                        </div>

                                        <div className="text-[var(--color-text-primary)] font-mono text-xs shrink-0 flex items-center justify-end w-[60px]">
                                            ✓ Ready
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </AnimatedSection>
                </div>
            </div>
        </section>
    );
}
