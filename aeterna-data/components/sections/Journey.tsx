import { JOURNEY } from "@/lib/constants";
import JourneyStep from "@/components/ui/JourneyStep";
import AnimatedSection from "@/components/ui/AnimatedSection";

export default function Journey() {
    return (
        <section id="journey" className="py-[10rem] relative w-full border-t border-[var(--color-border)]/50">
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[var(--color-border)] to-transparent opacity-50" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <AnimatedSection className="text-center mb-16 max-w-3xl mx-auto">
                    <span className="inline-block rounded-full bg-[var(--color-bg-elevated)] border border-[var(--color-border)] text-[var(--color-accent-primary)] text-xs px-4 py-1.5 font-semibold uppercase tracking-widest mb-6">
                        {JOURNEY.label}
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[var(--color-text-primary)] mb-6">
                        {JOURNEY.title}
                    </h2>
                    <p className="text-[var(--color-text-secondary)] text-lg leading-relaxed">
                        {JOURNEY.description}
                    </p>
                </AnimatedSection>

                <div className="flex flex-col lg:flex-row gap-12 lg:gap-6 relative">
                    {/* Master Connector Line (Desktop) */}
                    <div className="hidden lg:block absolute top-[14px] left-[10px] right-[10px] h-[1px] bg-[var(--color-border)] -z-20" />
                    {/* Master Connector Line (Mobile) */}
                    <div className="lg:hidden absolute top-[14px] bottom-[20px] left-[10px] w-[1px] bg-[var(--color-border)] -z-20" />

                    {JOURNEY.steps.map((step, idx) => {
                        const Icon = step.icon;
                        return (
                            <JourneyStep
                                key={step.title}
                                icon={<Icon className="w-5 h-5 text-[var(--color-text-muted)]" />}
                                title={step.title}
                                description={step.description}
                                tag={step.tag}
                                note={step.note}
                                index={idx}
                            />
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
