import { SERVICES } from "@/lib/constants";
import ServiceCard from "@/components/ui/ServiceCard";
import AnimatedSection from "@/components/ui/AnimatedSection";

export default function Services() {
    return (
        <section id="services" className="py-[10rem] relative w-full border-t border-[var(--color-border)]/50">
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[var(--color-border)] to-transparent opacity-50" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <AnimatedSection className="text-center mb-20 max-w-3xl mx-auto">
                    <span className="inline-block rounded-full bg-[var(--color-bg-elevated)] border border-[var(--color-border)] text-[var(--color-text-muted)] text-xs px-4 py-1.5 font-semibold uppercase tracking-widest mb-6">
                        {SERVICES.label}
                    </span>
                    <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-[var(--color-text-primary)] mb-6">
                        {SERVICES.title}
                    </h2>
                    <p className="text-[var(--color-text-secondary)] text-lg leading-relaxed">
                        {SERVICES.description}
                    </p>
                </AnimatedSection>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {SERVICES.cards.map((card, idx) => {
                        const Icon = card.icon;
                        return (
                            <AnimatedSection key={card.title} delay={idx * 0.1} className="h-full">
                                <ServiceCard
                                    icon={<Icon className="w-6 h-6 text-[var(--color-text-secondary)]" />}
                                    title={card.title}
                                    description={card.description}
                                    tags={card.tags}
                                />
                            </AnimatedSection>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
