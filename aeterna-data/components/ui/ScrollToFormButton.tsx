"use client";

import React from 'react';

interface ScrollToFormButtonProps {
    label: string;
}

export default function ScrollToFormButton({ label }: ScrollToFormButtonProps) {
    const handleClick = () => {
        document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <button
            type="button"
            onClick={handleClick}
            className="text-sm text-[var(--color-accent-cta)] font-medium mt-4 inline-block hover:underline cursor-pointer"
        >
            {label}
        </button>
    );
}
