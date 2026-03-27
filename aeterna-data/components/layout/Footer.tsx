import Link from "next/link";
import { Linkedin, Github } from "lucide-react";
import { SITE_META } from "@/lib/constants";

export default function Footer() {
    return (
        <footer className="w-full bg-[var(--color-bg-base)]">
            {/* Main link grid */}
            <div className="max-w-7xl mx-auto px-8 py-20">
                <div className="grid grid-cols-2 md:grid-cols-2 lg:flex lg:flex-row lg:gap-x-24 xl:gap-x-32 gap-y-12 w-full">

                    {/* Column 1 — Services */}
                    <div>
                        <h4 className="text-xs font-semibold tracking-widest uppercase text-[var(--color-text-muted)] mb-5">
                            Services
                        </h4>
                        <div className="flex flex-col space-y-0">
                            <Link href="/services/computer-vision" className="block text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors duration-150 py-1.5 whitespace-nowrap">
                                Computer Vision & Spatial
                            </Link>
                            <Link href="/services/nlp" className="block text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors duration-150 py-1.5 whitespace-nowrap">
                                Advanced NLP & Multilingual
                            </Link>
                            <Link href="/services/rlhf" className="block text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors duration-150 py-1.5 whitespace-nowrap">
                                RLHF & Model Alignment
                            </Link>
                            <Link href="/services/data-validation" className="block text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors duration-150 py-1.5 whitespace-nowrap">
                                Data Validation & QA
                            </Link>
                        </div>
                    </div>

                    {/* Column 2 — Company */}
                    <div>
                        <h4 className="text-xs font-semibold tracking-widest uppercase text-[var(--color-text-muted)] mb-5">
                            Company
                        </h4>
                        <div className="flex flex-col space-y-0">
                            <Link href="/about" className="block text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors duration-150 py-1.5 whitespace-nowrap">
                                About
                            </Link>
                            <Link href="/how-it-works" className="block text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors duration-150 py-1.5 whitespace-nowrap">
                                How It Works
                            </Link>
                            <Link href="/pricing" className="block text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors duration-150 py-1.5 whitespace-nowrap">
                                Pricing
                            </Link>
                            <Link href="/contact" className="block text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors duration-150 py-1.5 whitespace-nowrap">
                                Contact
                            </Link>
                        </div>
                    </div>

                    {/* Column 4 — Compliance */}
                    <div>
                        <Link href="/compliance" className="group flex items-center gap-1.5 mb-5 w-fit">
                            <h4 className="text-xs font-semibold tracking-widest uppercase text-[var(--color-text-muted)] group-hover:text-[var(--color-primary-base)] transition-colors duration-200">
                                Compliance
                            </h4>
                            <span className="text-[var(--color-primary-dark)] opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300">→</span>
                        </Link>
                        <div className="flex flex-col space-y-0">
                            <Link href="/privacy-policy" className="block text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors duration-150 py-1.5 whitespace-nowrap">
                                GDPR & DPA
                            </Link>
                            <Link href="/legal/eu-sccs" className="block text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors duration-150 py-1.5 whitespace-nowrap">
                                EU SCCs Module 2
                            </Link>
                            <Link href="/legal/data-security-policy" className="block text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors duration-150 py-1.5 whitespace-nowrap">
                                Data Security Policy
                            </Link>
                            <Link href="/impressum" className="block text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors duration-150 py-1.5 whitespace-nowrap">
                                Impressum
                            </Link>
                        </div>
                    </div>

                    {/* Column 5 — Follow Us */}
                    <div className="col-span-2 md:col-span-1">
                        <h4 className="text-xs font-semibold tracking-widest uppercase text-[var(--color-text-muted)] mb-5">
                            Follow Us
                        </h4>
                        <div className="flex gap-4 mt-2">
                            <a
                                href="https://linkedin.com/company/aeterna-data"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Aeterna Data on LinkedIn"
                                className="text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] transition-colors duration-200 p-1"
                            >
                                <Linkedin className="w-5 h-5" />
                            </a>
                            <a
                                href="#"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Aeterna Data on GitHub"
                                className="text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] transition-colors duration-200 p-1"
                            >
                                <Github className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                </div>
            </div>

            {/* Divider line */}
            <div className="w-full border-t border-[var(--color-border)]" />

            {/* Bottom bar */}
            <div className="max-w-7xl mx-auto px-8 py-6">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
                    {/* Copyright left */}
                    <p className="text-sm text-[var(--color-text-muted)]">
                        Copyright © {new Date().getFullYear()} {SITE_META.companyName}. All rights reserved.
                    </p>


                </div>
            </div>
        </footer>
    );
}
