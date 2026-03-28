import { COMPLIANCE } from "@/lib/constants";
import AnimatedSection from "@/components/ui/AnimatedSection";

export default function Compliance() {
    return (
        <section id="compliance" className="py-[10rem] bg-[var(--color-bg-surface)] relative w-full border-t border-[var(--color-border)]">
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[var(--color-border)] to-transparent opacity-50" />

            <div className="max-w-7xl mx-auto px-6">
                <AnimatedSection className="text-center mb-16 max-w-3xl mx-auto">
                    <span className="inline-block rounded-full bg-[var(--color-bg-base)] border border-[var(--color-border)] text-[var(--color-text-primary)] text-xs px-4 py-1.5 font-semibold uppercase tracking-widest mb-6">
                        {COMPLIANCE.label}
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[var(--color-text-primary)] mb-6 leading-tight">
                        {COMPLIANCE.title}
                    </h2>
                    <p className="text-[var(--color-text-secondary)] text-lg leading-relaxed">
                        {COMPLIANCE.description}
                    </p>
                </AnimatedSection>

                <AnimatedSection delay={0.2}>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {COMPLIANCE.items.map((item, idx) => {
                            const Icon = item.icon;
                            return (
                                <div
                                    key={idx}
                                    className="bg-[var(--color-bg-base)] border border-[var(--color-border-subtle)] rounded-2xl p-6 md:p-8 hover:border-[var(--color-border-hover)] transition-colors"
                                >
                                    <div className="mb-4">
                                        <Icon className="w-6 h-6 text-[var(--color-text-secondary)]" />
                                    </div>
                                    <h3 className="text-lg font-semibold text-[var(--color-text-primary)] mb-3">
                                        {item.title}
                                    </h3>
                                    <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed">
                                        {item.body}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </AnimatedSection>
            </div>
        </section>
    );
}
