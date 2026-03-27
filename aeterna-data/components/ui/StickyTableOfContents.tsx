"use client";

import { useState, useEffect } from 'react';

interface TOCItem {
    id: string;
    label: string;
}

interface Props {
    items: TOCItem[];
}

export default function StickyTableOfContents({ items }: Props) {
    const [activeId, setActiveId] = useState<string>('');

    useEffect(() => {
        const observers: IntersectionObserver[] = [];

        items.forEach(({ id }) => {
            const el = document.getElementById(id);
            if (!el) return;

            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        setActiveId(id);
                    }
                },
                {
                    rootMargin: '-20% 0px -70% 0px',
                    threshold: 0,
                }
            );

            observer.observe(el);
            observers.push(observer);
        });

        return () => observers.forEach(o => o.disconnect());
    }, [items]);

    const handleClick = (
        e: React.MouseEvent<HTMLAnchorElement>,
        id: string
    ) => {
        e.preventDefault();
        document.getElementById(id)?.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
        setActiveId(id);
    };

    return (
        <nav aria-label="Page contents">
            <p
                className="text-xs uppercase tracking-widest font-semibold mb-4"
                style={{ color: 'var(--color-text-muted)' }}
            >
                Contents
            </p>
            <ul className="space-y-1">
                {items.map(({ id, label }) => (
                    <li key={id}>
                        <a
                            href={`#${id}`}
                            onClick={(e) => handleClick(e, id)}
                            className="block text-sm py-1.5 px-3 rounded-lg transition-all duration-150"
                            aria-current={activeId === id ? 'true' : undefined}
                            style={{
                                color: activeId === id
                                    ? 'var(--color-text-primary)'
                                    : 'var(--color-text-muted)',
                                background: activeId === id
                                    ? 'var(--color-bg-elevated)'
                                    : 'transparent',
                                borderLeft: activeId === id
                                    ? '2px solid var(--color-accent-cta)'
                                    : '2px solid transparent',
                            }}
                        >
                            {label}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
