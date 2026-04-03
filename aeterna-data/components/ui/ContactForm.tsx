"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronDown, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ContactForm() {
    const [isLoading, setIsLoading] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [company, setCompany] = useState('');
    const [country, setCountry] = useState('');
    const [enquiryType, setEnquiryType] = useState('');
    const [message, setMessage] = useState('');
    const [gdprConsent, setGdprConsent] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setError(null);

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name,
                    email,
                    company,
                    country,
                    enquiryType,
                    message,
                    gdprConsent,
                }),
            });

            const data = await response.json();

            if (!response.ok) {
                setError(data.error || 'Something went wrong.');
                return;
            }

            setIsSubmitted(true);
        } catch {
            setError('Network error. Please try again or email us directly at contact@aeternadata.com');
        } finally {
            setIsLoading(false);
        }
    };

    if (isSubmitted) {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="bg-[var(--color-bg-surface)] border border-[var(--color-border)] rounded-2xl p-10 text-center"
                role="status"
                aria-live="polite"
            >
                <CheckCircle2 className="w-12 h-12 text-[var(--color-accent-cta)] mx-auto mb-6" aria-hidden="true" />
                <h3 className="text-2xl font-bold text-[var(--color-text-primary)]">Enquiry Received.</h3>
                <p className="text-[var(--color-text-secondary)] mt-4 leading-relaxed">
                    Thank you for reaching out. A member of the Aeterna Data team will review your enquiry and respond within 48 business hours.
                </p>
                <p className="text-[var(--color-text-secondary)] mt-4 leading-relaxed">
                    If your enquiry is time-sensitive, you can also reach us directly at:{' '}
                    <a href="mailto:contact@aeternadata.com" className="text-[var(--color-accent-cta)] hover:underline">
                        contact@aeternadata.com
                    </a>
                </p>
                <p className="text-sm text-[var(--color-text-muted)] mt-6">
                    We respond to business email addresses. Please check your spam folder if you do not hear from us within 48 hours.
                </p>
            </motion.div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            {/* Field 1: Full Name */}
            <div className="space-y-1">
                <label htmlFor="name" className="text-sm font-medium text-[var(--color-text-secondary)] block mb-2">
                    Full Name
                </label>
                <input
                    id="name"
                    type="text"
                    required
                    aria-required="true"
                    placeholder="Your full name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-[var(--color-bg-elevated)] border border-[var(--color-border)] rounded-lg px-4 py-3 text-sm text-[var(--color-text-primary)] placeholder-[var(--color-text-muted)] focus:outline-none focus:border-[var(--color-accent-cta)] focus:ring-1 focus:ring-[var(--color-accent-cta)] hover:border-[var(--color-border-hover)] transition-all duration-150"
                />
            </div>

            {/* Field 2: Business Email */}
            <div className="space-y-1">
                <label htmlFor="email" className="text-sm font-medium text-[var(--color-text-secondary)] block mb-2">
                    Business Email
                </label>
                <input
                    id="email"
                    type="email"
                    required
                    aria-required="true"
                    placeholder="you@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-[var(--color-bg-elevated)] border border-[var(--color-border)] rounded-lg px-4 py-3 text-sm text-[var(--color-text-primary)] placeholder-[var(--color-text-muted)] focus:outline-none focus:border-[var(--color-accent-cta)] focus:ring-1 focus:ring-[var(--color-accent-cta)] hover:border-[var(--color-border-hover)] transition-all duration-150"
                />
                <p className="text-xs text-[var(--color-text-muted)] mt-1">
                    We respond to business email addresses only.
                </p>
            </div>

            {/* Field 3: Company Name */}
            <div className="space-y-1">
                <label htmlFor="company" className="text-sm font-medium text-[var(--color-text-secondary)] block mb-2">
                    Company
                </label>
                <input
                    id="company"
                    type="text"
                    required
                    aria-required="true"
                    placeholder="Your company name"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    className="w-full bg-[var(--color-bg-elevated)] border border-[var(--color-border)] rounded-lg px-4 py-3 text-sm text-[var(--color-text-primary)] placeholder-[var(--color-text-muted)] focus:outline-none focus:border-[var(--color-accent-cta)] focus:ring-1 focus:ring-[var(--color-accent-cta)] hover:border-[var(--color-border-hover)] transition-all duration-150"
                />
            </div>

            {/* Field 4: Country */}
            <div className="space-y-1">
                <label htmlFor="country" className="text-sm font-medium text-[var(--color-text-secondary)] block mb-2">
                    Country
                </label>
                <div className="relative">
                    <select
                        id="country"
                        required
                        aria-required="true"
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                        className="w-full bg-[var(--color-bg-elevated)] border border-[var(--color-border)] rounded-lg px-4 py-3 text-sm text-[var(--color-text-primary)] placeholder-[var(--color-text-muted)] focus:outline-none focus:border-[var(--color-accent-cta)] focus:ring-1 focus:ring-[var(--color-accent-cta)] hover:border-[var(--color-border-hover)] transition-all duration-150 appearance-none cursor-pointer"
                    >
                        <option value="" disabled>Select your country</option>
                        <option value="US">United States</option>
                        <option value="GB">United Kingdom</option>
                        <option value="DE">Germany</option>
                        <option value="NL">Netherlands</option>
                        <option value="FR">France</option>
                        <option value="CA">Canada</option>
                        <option value="AU">Australia</option>
                        <option value="SG">Singapore</option>
                        <option value="JP">Japan</option>
                        <option value="KR">South Korea</option>
                        <option value="IN">India</option>
                        <option value="ID">Indonesia</option>
                        <option value="other_eu">Other EU/EEA</option>
                        <option value="other">Other</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--color-text-muted)] pointer-events-none" aria-hidden="true" />
                </div>
            </div>

            {/* Field 5: What Are You Looking For */}
            <div className="space-y-1">
                <label htmlFor="enquiryType" className="text-sm font-medium text-[var(--color-text-secondary)] block mb-2">
                    What are you looking for?
                </label>
                <div className="relative">
                    <select
                        id="enquiryType"
                        required
                        aria-required="true"
                        value={enquiryType}
                        onChange={(e) => setEnquiryType(e.target.value)}
                        className="w-full bg-[var(--color-bg-elevated)] border border-[var(--color-border)] rounded-lg px-4 py-3 text-sm text-[var(--color-text-primary)] placeholder-[var(--color-text-muted)] focus:outline-none focus:border-[var(--color-accent-cta)] focus:ring-1 focus:ring-[var(--color-accent-cta)] hover:border-[var(--color-border-hover)] transition-all duration-150 appearance-none cursor-pointer"
                    >
                        <option value="" disabled>What are you looking for?</option>
                        <option value="pilot">Request a Paid Pilot</option>
                        <option value="discovery">Book a Discovery Call</option>
                        <option value="brief">Send a Project Brief</option>
                        <option value="bounding_box">Bounding Box Annotation</option>
                        <option value="segmentation">Image Segmentation</option>
                        <option value="classification">Image Classification</option>
                        <option value="visual_rlhf">Visual RLHF Evaluation</option>
                        <option value="dataset_qa">Dataset Validation &amp; QA</option>
                        <option value="general">General Enquiry</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--color-text-muted)] pointer-events-none" aria-hidden="true" />
                </div>
            </div>

            {/* Field 6: Message */}
            <div className="space-y-1">
                <label htmlFor="message" className="text-sm font-medium text-[var(--color-text-secondary)] block mb-2">
                    Tell us about your project
                </label>
                <textarea
                    id="message"
                    required
                    aria-required="true"
                    rows={6}
                    placeholder="Describe your annotation task, data type, approximate volume, timeline, and any specific quality requirements."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full bg-[var(--color-bg-elevated)] border border-[var(--color-border)] rounded-lg px-4 py-3 text-sm text-[var(--color-text-primary)] placeholder-[var(--color-text-muted)] focus:outline-none focus:border-[var(--color-accent-cta)] focus:ring-1 focus:ring-[var(--color-accent-cta)] hover:border-[var(--color-border-hover)] transition-all duration-150 resize-y min-h-[144px]"
                />
                <p className="text-xs text-[var(--color-text-muted)] mt-1">
                    The more detail you provide, the more specific our scoping proposal will be.
                </p>
            </div>

            {/* Field 7: GDPR Consent */}
            <div className="space-y-1 pt-2">
                <label htmlFor="gdprConsent" className="flex items-start gap-3 cursor-pointer">
                    <input
                        id="gdprConsent"
                        type="checkbox"
                        required
                        aria-required="true"
                        checked={gdprConsent}
                        onChange={(e) => setGdprConsent(e.target.checked)}
                        className="w-4 h-4 rounded accent-[var(--color-accent-cta)] cursor-pointer flex-shrink-0 mt-0.5"
                    />
                    <div className="text-sm text-[var(--color-text-secondary)]">
                        I agree to Aeterna Data processing my personal data to respond to this enquiry, in accordance with the{' '}
                        <Link href="/privacy-policy" className="text-[var(--color-accent-cta)] hover:underline">
                            Privacy Policy
                        </Link>
                        {' '}and{' '}
                        <Link href="/impressum" className="text-[var(--color-accent-cta)] hover:underline">
                            Data Processing Agreement
                        </Link>
                        .
                    </div>
                </label>
                <p className="text-xs text-[var(--color-text-muted)] mt-1 ml-7">
                    You may withdraw consent at any time by contacting <a href="mailto:legal@aeternadata.com" className="hover:text-[var(--color-text-primary)] transition-colors">legal@aeternadata.com</a>
                </p>
            </div>

            {/* Submit Button */}
            <div className="pt-4">
                <button
                    type="submit"
                    disabled={isLoading || !gdprConsent}
                    aria-label="Submit contact enquiry to Aeterna Data"
                    aria-busy={isLoading}
                    className="w-full bg-[var(--color-accent-cta)] text-white font-semibold px-8 py-4 rounded-lg text-base hover:bg-[var(--color-accent-cta-hover)] disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
                >
                    {isLoading ? 'Sending...' : 'Send Enquiry'}
                </button>
            </div>

            {/* Error Message */}
            {error && (
                <div role="alert" className="text-sm text-red-400 mt-3 text-center">
                    {error}
                </div>
            )}
        </form>
    );
}
