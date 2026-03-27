import type { Metadata } from 'next';
import Link from 'next/link';
import { ChevronRight, Mail } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Cookie Policy — Aeterna Data',
    description:
        'Cookie Policy for aeternadata.com. How PT Aeterna Data Intentio Logic uses cookies and similar tracking technologies on its website.',
    robots: {
        index: true,
        follow: true,
    },
};

export default function CookiePolicyPage() {
    return (
        <main className="min-h-screen flex flex-col relative w-full overflow-hidden">

            {/* ── PAGE HEADER ── */}
            <section className="pt-32 pb-16 relative w-full">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(16,185,129,0.05)_0%,transparent_70%)] pointer-events-none -z-10" />

                <div className="max-w-3xl mx-auto px-6">
                    {/* Breadcrumb */}
                    <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-sm mb-8">
                        <Link
                            href="/"
                            className="text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] transition-colors"
                        >
                            Home
                        </Link>
                        <ChevronRight className="w-3.5 h-3.5 text-[var(--color-text-muted)]" />
                        <span className="text-[var(--color-text-primary)]">Cookie Policy</span>
                    </nav>

                    {/* Label */}
                    <span className="inline-block rounded-full bg-[var(--color-bg-elevated)] border border-[var(--color-border)] text-[var(--color-accent-emerald)] text-xs px-4 py-1.5 font-semibold uppercase tracking-widest mb-6">
                        Legal
                    </span>

                    <h1 className="text-4xl lg:text-6xl font-bold tracking-tight text-[var(--color-text-primary)] mb-4">
                        Cookie Policy
                    </h1>
                    <p className="text-[var(--color-text-secondary)] text-lg leading-relaxed max-w-2xl">
                        How we use cookies and similar technologies on aeternadata.com. Last updated: March 2026
                    </p>
                </div>
            </section>

            {/* ── CONTENT BODY ── */}
            <section className="pb-24 relative w-full">
                <div className="max-w-3xl mx-auto px-6 space-y-16">

                    {/* ── SECTION 1: What Are Cookies ── */}
                    <div>
                        <h2 className="text-2xl lg:text-3xl font-semibold text-[var(--color-text-primary)] mb-6">
                            What Are Cookies
                        </h2>
                        <div className="space-y-4">
                            <p className="text-[var(--color-text-secondary)] leading-relaxed">
                                A cookie is a small text file that a website places on your device — computer, tablet, or smartphone — when you visit. Cookies are widely used to make websites work efficiently, to remember your preferences, and to provide information to the website operator.
                            </p>
                            <p className="text-[var(--color-text-secondary)] leading-relaxed">
                                Cookies are not programs and cannot carry viruses or malware. They cannot access other data on your device.
                            </p>
                        </div>
                    </div>

                    {/* ── SECTION 2: Who We Are ── */}
                    <div>
                        <h2 className="text-2xl lg:text-3xl font-semibold text-[var(--color-text-primary)] mb-6">
                            Who We Are
                        </h2>
                        <div className="space-y-4">
                            <p className="text-[var(--color-text-secondary)] leading-relaxed">
                                This Cookie Policy applies to the website aeternadata.com, operated by PT Aeterna Data Intentio Logic, trading as Aeterna Data.
                            </p>
                            <div className="bg-[var(--color-bg-surface)] border border-[var(--color-border)] rounded-2xl p-6 md:p-8 space-y-4">
                                <div className="grid grid-cols-1 sm:grid-cols-[160px_1fr] gap-2">
                                    <span className="text-[var(--color-text-muted)] text-sm font-semibold uppercase tracking-wider">Company</span>
                                    <span className="text-[var(--color-text-primary)]">PT Aeterna Data Intentio Logic</span>
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-[160px_1fr] gap-2">
                                    <span className="text-[var(--color-text-muted)] text-sm font-semibold uppercase tracking-wider">Email</span>
                                    <a href="mailto:legal@aeternadata.com" className="text-[var(--color-accent-emerald)] hover:underline transition-colors">
                                        legal@aeternadata.com
                                    </a>
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-[160px_1fr] gap-2">
                                    <span className="text-[var(--color-text-muted)] text-sm font-semibold uppercase tracking-wider">Website</span>
                                    <span className="text-[var(--color-text-primary)]">www.aeternadata.com</span>
                                </div>
                            </div>
                            <p className="text-[var(--color-text-secondary)] leading-relaxed">
                                For broader information about how we handle personal data, please see our{' '}
                                <Link href="/privacy-policy" className="text-[var(--color-accent-emerald)] hover:underline transition-colors">
                                    Privacy Policy
                                </Link>
                                .
                            </p>
                        </div>
                    </div>

                    {/* ── SECTION 3: Cookies We Use ── */}
                    <div>
                        <h2 className="text-2xl lg:text-3xl font-semibold text-[var(--color-text-primary)] mb-6">
                            Cookies We Use
                        </h2>
                        <div className="space-y-8">
                            <p className="text-[var(--color-text-secondary)] leading-relaxed">
                                We use the following categories of cookies on this website:
                            </p>

                            {/* Strictly Necessary */}
                            <div>
                                <h3 className="text-xl font-semibold text-[var(--color-text-primary)] mb-4">1. Strictly Necessary Cookies</h3>
                                <p className="text-[var(--color-text-secondary)] leading-relaxed mb-4">
                                    These cookies are essential for the website to function. They cannot be switched off. They are usually set in response to actions you take — such as setting your privacy preferences, logging in, or filling in forms.
                                </p>
                                <div className="space-y-3">
                                    <div className="bg-[var(--color-bg-surface)] border border-[var(--color-border)] rounded-2xl p-6 md:p-8 space-y-4">
                                        <div className="grid grid-cols-1 sm:grid-cols-[160px_1fr] gap-2">
                                            <span className="text-[var(--color-text-muted)] text-sm font-semibold uppercase tracking-wider">Cookie Name</span>
                                            <span className="text-[var(--color-text-primary)] font-mono text-sm">__cf_bm</span>
                                        </div>
                                        <div className="grid grid-cols-1 sm:grid-cols-[160px_1fr] gap-2">
                                            <span className="text-[var(--color-text-muted)] text-sm font-semibold uppercase tracking-wider">Provider</span>
                                            <span className="text-[var(--color-text-primary)]">Cloudflare</span>
                                        </div>
                                        <div className="grid grid-cols-1 sm:grid-cols-[160px_1fr] gap-2">
                                            <span className="text-[var(--color-text-muted)] text-sm font-semibold uppercase tracking-wider">Purpose</span>
                                            <span className="text-[var(--color-text-secondary)]">Bot management and security</span>
                                        </div>
                                        <div className="grid grid-cols-1 sm:grid-cols-[160px_1fr] gap-2">
                                            <span className="text-[var(--color-text-muted)] text-sm font-semibold uppercase tracking-wider">Duration</span>
                                            <span className="text-[var(--color-text-secondary)]">30 minutes</span>
                                        </div>
                                        <div className="grid grid-cols-1 sm:grid-cols-[160px_1fr] gap-2">
                                            <span className="text-[var(--color-text-muted)] text-sm font-semibold uppercase tracking-wider">Type</span>
                                            <span className="text-[var(--color-text-secondary)]">Strictly Necessary</span>
                                        </div>
                                    </div>
                                    <div className="bg-[var(--color-bg-surface)] border border-[var(--color-border)] rounded-2xl p-6 md:p-8 space-y-4">
                                        <div className="grid grid-cols-1 sm:grid-cols-[160px_1fr] gap-2">
                                            <span className="text-[var(--color-text-muted)] text-sm font-semibold uppercase tracking-wider">Cookie Name</span>
                                            <span className="text-[var(--color-text-primary)] font-mono text-sm">_GRECAPTCHA</span>
                                        </div>
                                        <div className="grid grid-cols-1 sm:grid-cols-[160px_1fr] gap-2">
                                            <span className="text-[var(--color-text-muted)] text-sm font-semibold uppercase tracking-wider">Provider</span>
                                            <span className="text-[var(--color-text-primary)]">Google</span>
                                        </div>
                                        <div className="grid grid-cols-1 sm:grid-cols-[160px_1fr] gap-2">
                                            <span className="text-[var(--color-text-muted)] text-sm font-semibold uppercase tracking-wider">Purpose</span>
                                            <span className="text-[var(--color-text-secondary)]">Spam and abuse prevention on contact forms</span>
                                        </div>
                                        <div className="grid grid-cols-1 sm:grid-cols-[160px_1fr] gap-2">
                                            <span className="text-[var(--color-text-muted)] text-sm font-semibold uppercase tracking-wider">Duration</span>
                                            <span className="text-[var(--color-text-secondary)]">6 months</span>
                                        </div>
                                        <div className="grid grid-cols-1 sm:grid-cols-[160px_1fr] gap-2">
                                            <span className="text-[var(--color-text-muted)] text-sm font-semibold uppercase tracking-wider">Type</span>
                                            <span className="text-[var(--color-text-secondary)]">Strictly Necessary</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Analytics Cookies */}
                            <div>
                                <h3 className="text-xl font-semibold text-[var(--color-text-primary)] mb-4">2. Analytics Cookies</h3>
                                <p className="text-[var(--color-text-secondary)] leading-relaxed mb-4">
                                    These cookies help us understand how visitors interact with our website — which pages are most visited, how long visitors stay, and where they came from. All data is aggregated and anonymous. These cookies are only placed with your consent.
                                </p>
                                <div className="space-y-3">
                                    <div className="bg-[var(--color-bg-surface)] border border-[var(--color-border)] rounded-2xl p-6 md:p-8 space-y-4">
                                        <div className="grid grid-cols-1 sm:grid-cols-[160px_1fr] gap-2">
                                            <span className="text-[var(--color-text-muted)] text-sm font-semibold uppercase tracking-wider">Cookie Name</span>
                                            <span className="text-[var(--color-text-primary)] font-mono text-sm">_ga</span>
                                        </div>
                                        <div className="grid grid-cols-1 sm:grid-cols-[160px_1fr] gap-2">
                                            <span className="text-[var(--color-text-muted)] text-sm font-semibold uppercase tracking-wider">Provider</span>
                                            <span className="text-[var(--color-text-primary)]">Google Analytics</span>
                                        </div>
                                        <div className="grid grid-cols-1 sm:grid-cols-[160px_1fr] gap-2">
                                            <span className="text-[var(--color-text-muted)] text-sm font-semibold uppercase tracking-wider">Purpose</span>
                                            <span className="text-[var(--color-text-secondary)]">Distinguishes unique users</span>
                                        </div>
                                        <div className="grid grid-cols-1 sm:grid-cols-[160px_1fr] gap-2">
                                            <span className="text-[var(--color-text-muted)] text-sm font-semibold uppercase tracking-wider">Duration</span>
                                            <span className="text-[var(--color-text-secondary)]">2 years</span>
                                        </div>
                                        <div className="grid grid-cols-1 sm:grid-cols-[160px_1fr] gap-2">
                                            <span className="text-[var(--color-text-muted)] text-sm font-semibold uppercase tracking-wider">Type</span>
                                            <span className="text-[var(--color-text-secondary)]">Analytics</span>
                                        </div>
                                    </div>
                                    <div className="bg-[var(--color-bg-surface)] border border-[var(--color-border)] rounded-2xl p-6 md:p-8 space-y-4">
                                        <div className="grid grid-cols-1 sm:grid-cols-[160px_1fr] gap-2">
                                            <span className="text-[var(--color-text-muted)] text-sm font-semibold uppercase tracking-wider">Cookie Name</span>
                                            <span className="text-[var(--color-text-primary)] font-mono text-sm">_ga_[ID]</span>
                                        </div>
                                        <div className="grid grid-cols-1 sm:grid-cols-[160px_1fr] gap-2">
                                            <span className="text-[var(--color-text-muted)] text-sm font-semibold uppercase tracking-wider">Provider</span>
                                            <span className="text-[var(--color-text-primary)]">Google Analytics</span>
                                        </div>
                                        <div className="grid grid-cols-1 sm:grid-cols-[160px_1fr] gap-2">
                                            <span className="text-[var(--color-text-muted)] text-sm font-semibold uppercase tracking-wider">Purpose</span>
                                            <span className="text-[var(--color-text-secondary)]">Maintains session state</span>
                                        </div>
                                        <div className="grid grid-cols-1 sm:grid-cols-[160px_1fr] gap-2">
                                            <span className="text-[var(--color-text-muted)] text-sm font-semibold uppercase tracking-wider">Duration</span>
                                            <span className="text-[var(--color-text-secondary)]">2 years</span>
                                        </div>
                                        <div className="grid grid-cols-1 sm:grid-cols-[160px_1fr] gap-2">
                                            <span className="text-[var(--color-text-muted)] text-sm font-semibold uppercase tracking-wider">Type</span>
                                            <span className="text-[var(--color-text-secondary)]">Analytics</span>
                                        </div>
                                    </div>
                                </div>
                                <p className="text-[var(--color-text-secondary)] leading-relaxed mt-4">
                                    If you decline analytics cookies, your visit will not be tracked and no analytics data will be collected.
                                </p>
                            </div>

                            {/* Preference Cookies */}
                            <div>
                                <h3 className="text-xl font-semibold text-[var(--color-text-primary)] mb-4">3. Preference Cookies</h3>
                                <p className="text-[var(--color-text-secondary)] leading-relaxed mb-4">
                                    These cookies remember choices you make to improve your experience — such as your cookie consent decision.
                                </p>
                                <div className="bg-[var(--color-bg-surface)] border border-[var(--color-border)] rounded-2xl p-6 md:p-8 space-y-4">
                                    <div className="grid grid-cols-1 sm:grid-cols-[160px_1fr] gap-2">
                                        <span className="text-[var(--color-text-muted)] text-sm font-semibold uppercase tracking-wider">Cookie Name</span>
                                        <span className="text-[var(--color-text-primary)] font-mono text-sm">aeterna_cookie_consent</span>
                                    </div>
                                    <div className="grid grid-cols-1 sm:grid-cols-[160px_1fr] gap-2">
                                        <span className="text-[var(--color-text-muted)] text-sm font-semibold uppercase tracking-wider">Provider</span>
                                        <span className="text-[var(--color-text-primary)]">Aeterna Data (first-party)</span>
                                    </div>
                                    <div className="grid grid-cols-1 sm:grid-cols-[160px_1fr] gap-2">
                                        <span className="text-[var(--color-text-muted)] text-sm font-semibold uppercase tracking-wider">Purpose</span>
                                        <span className="text-[var(--color-text-secondary)]">Stores your cookie consent preferences</span>
                                    </div>
                                    <div className="grid grid-cols-1 sm:grid-cols-[160px_1fr] gap-2">
                                        <span className="text-[var(--color-text-muted)] text-sm font-semibold uppercase tracking-wider">Duration</span>
                                        <span className="text-[var(--color-text-secondary)]">12 months</span>
                                    </div>
                                    <div className="grid grid-cols-1 sm:grid-cols-[160px_1fr] gap-2">
                                        <span className="text-[var(--color-text-muted)] text-sm font-semibold uppercase tracking-wider">Type</span>
                                        <span className="text-[var(--color-text-secondary)]">Preference</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* ── SECTION 4: Cookies We Do Not Use ── */}
                    <div>
                        <h2 className="text-2xl lg:text-3xl font-semibold text-[var(--color-text-primary)] mb-6">
                            Cookies We Do Not Use
                        </h2>
                        <div className="space-y-4">
                            <p className="text-[var(--color-text-secondary)] leading-relaxed">
                                Aeterna Data does not use:
                            </p>
                            <ul className="list-none space-y-3 pl-0">
                                <li className="flex items-start gap-3">
                                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[var(--color-accent-emerald)] shrink-0" />
                                    <span className="text-[var(--color-text-secondary)] leading-relaxed">Advertising or targeting cookies</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[var(--color-accent-emerald)] shrink-0" />
                                    <span className="text-[var(--color-text-secondary)] leading-relaxed">Social media tracking pixels</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[var(--color-accent-emerald)] shrink-0" />
                                    <span className="text-[var(--color-text-secondary)] leading-relaxed">Third-party remarketing or retargeting cookies</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[var(--color-accent-emerald)] shrink-0" />
                                    <span className="text-[var(--color-text-secondary)] leading-relaxed">Fingerprinting or device identification technologies</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[var(--color-accent-emerald)] shrink-0" />
                                    <span className="text-[var(--color-text-secondary)] leading-relaxed">Cookies that track your behaviour across other websites</span>
                                </li>
                            </ul>
                            <p className="text-[var(--color-text-secondary)] leading-relaxed">
                                We do not sell data collected via cookies to any third party.
                            </p>
                        </div>
                    </div>

                    {/* ── SECTION 5: Your Consent ── */}
                    <div>
                        <h2 className="text-2xl lg:text-3xl font-semibold text-[var(--color-text-primary)] mb-6">
                            Your Consent
                        </h2>
                        <div className="space-y-4">
                            <p className="text-[var(--color-text-secondary)] leading-relaxed">
                                When you first visit aeternadata.com, a cookie consent banner is displayed. You can:
                            </p>
                            <ul className="list-none space-y-3 pl-0">
                                <li className="flex items-start gap-3">
                                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[var(--color-accent-emerald)] shrink-0" />
                                    <span className="text-[var(--color-text-secondary)] leading-relaxed">
                                        <strong className="text-[var(--color-text-primary)]">Accept all cookies</strong> — strictly necessary, analytics, and preference cookies will all be placed.
                                    </span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[var(--color-accent-emerald)] shrink-0" />
                                    <span className="text-[var(--color-text-secondary)] leading-relaxed">
                                        <strong className="text-[var(--color-text-primary)]">Accept necessary only</strong> — only strictly necessary cookies will be placed. Analytics cookies will not be set.
                                    </span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[var(--color-accent-emerald)] shrink-0" />
                                    <span className="text-[var(--color-text-secondary)] leading-relaxed">
                                        <strong className="text-[var(--color-text-primary)]">Manage preferences</strong> — choose individually which categories to accept.
                                    </span>
                                </li>
                            </ul>
                            <p className="text-[var(--color-text-secondary)] leading-relaxed">
                                Your consent choice is stored in the aeterna_cookie_consent cookie for 12 months. After 12 months, you will be asked again.
                            </p>
                            <p className="text-[var(--color-text-secondary)] leading-relaxed">
                                Strictly necessary cookies do not require your consent as they are essential for the website to function.
                            </p>
                        </div>
                    </div>

                    {/* ── SECTION 6: Withdrawing Consent ── */}
                    <div>
                        <h2 className="text-2xl lg:text-3xl font-semibold text-[var(--color-text-primary)] mb-6">
                            Withdrawing Consent
                        </h2>
                        <div className="space-y-4">
                            <p className="text-[var(--color-text-secondary)] leading-relaxed">
                                You can withdraw or change your cookie consent at any time by:
                            </p>
                            <ul className="list-none space-y-3 pl-0">
                                <li className="flex items-start gap-3">
                                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[var(--color-accent-emerald)] shrink-0" />
                                    <span className="text-[var(--color-text-secondary)] leading-relaxed">
                                        Clicking the &apos;Cookie Settings&apos; link in the website footer
                                    </span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[var(--color-accent-emerald)] shrink-0" />
                                    <span className="text-[var(--color-text-secondary)] leading-relaxed">
                                        Clearing your cookies in your browser settings — this will remove all stored preferences and you will be asked for consent again on your next visit
                                    </span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[var(--color-accent-emerald)] shrink-0" />
                                    <span className="text-[var(--color-text-secondary)] leading-relaxed">
                                        Contacting us at{' '}
                                        <a href="mailto:legal@aeternadata.com" className="text-[var(--color-accent-emerald)] hover:underline transition-colors">
                                            legal@aeternadata.com
                                        </a>
                                    </span>
                                </li>
                            </ul>
                            <p className="text-[var(--color-text-secondary)] leading-relaxed">
                                Please note that withdrawing consent does not affect the lawfulness of any processing carried out before withdrawal.
                            </p>
                        </div>
                    </div>

                    {/* ── SECTION 7: Browser Controls ── */}
                    <div>
                        <h2 className="text-2xl lg:text-3xl font-semibold text-[var(--color-text-primary)] mb-6">
                            Browser Controls
                        </h2>
                        <div className="space-y-4">
                            <p className="text-[var(--color-text-secondary)] leading-relaxed">
                                Most browsers allow you to control cookies through their settings. You can typically:
                            </p>
                            <ul className="list-none space-y-3 pl-0">
                                <li className="flex items-start gap-3">
                                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[var(--color-accent-emerald)] shrink-0" />
                                    <span className="text-[var(--color-text-secondary)] leading-relaxed">View cookies currently stored on your device</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[var(--color-accent-emerald)] shrink-0" />
                                    <span className="text-[var(--color-text-secondary)] leading-relaxed">Delete all or specific cookies</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[var(--color-accent-emerald)] shrink-0" />
                                    <span className="text-[var(--color-text-secondary)] leading-relaxed">Block cookies from specific websites</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[var(--color-accent-emerald)] shrink-0" />
                                    <span className="text-[var(--color-text-secondary)] leading-relaxed">Block all third-party cookies</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[var(--color-accent-emerald)] shrink-0" />
                                    <span className="text-[var(--color-text-secondary)] leading-relaxed">Set your browser to notify you when a cookie is placed</span>
                                </li>
                            </ul>
                            <p className="text-[var(--color-text-secondary)] leading-relaxed">
                                Instructions for managing cookies in common browsers:
                            </p>
                            <ul className="list-none space-y-3 pl-0">
                                <li className="flex items-start gap-3">
                                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[var(--color-accent-emerald)] shrink-0" />
                                    <span className="text-[var(--color-text-secondary)] leading-relaxed">
                                        <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-[var(--color-accent-emerald)] hover:underline transition-colors">
                                            Google Chrome
                                        </a>
                                    </span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[var(--color-accent-emerald)] shrink-0" />
                                    <span className="text-[var(--color-text-secondary)] leading-relaxed">
                                        <a href="https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer" target="_blank" rel="noopener noreferrer" className="text-[var(--color-accent-emerald)] hover:underline transition-colors">
                                            Mozilla Firefox
                                        </a>
                                    </span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[var(--color-accent-emerald)] shrink-0" />
                                    <span className="text-[var(--color-text-secondary)] leading-relaxed">
                                        <a href="https://support.apple.com/en-gb/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-[var(--color-accent-emerald)] hover:underline transition-colors">
                                            Safari
                                        </a>
                                    </span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[var(--color-accent-emerald)] shrink-0" />
                                    <span className="text-[var(--color-text-secondary)] leading-relaxed">
                                        <a href="https://support.microsoft.com/en-us/windows/manage-cookies-in-microsoft-edge" target="_blank" rel="noopener noreferrer" className="text-[var(--color-accent-emerald)] hover:underline transition-colors">
                                            Microsoft Edge
                                        </a>
                                    </span>
                                </li>
                            </ul>
                            <p className="text-[var(--color-text-secondary)] leading-relaxed">
                                Please note that disabling cookies may affect the functionality of this and many other websites.
                            </p>
                        </div>
                    </div>

                    {/* ── SECTION 8: Third-Party Cookies ── */}
                    <div>
                        <h2 className="text-2xl lg:text-3xl font-semibold text-[var(--color-text-primary)] mb-6">
                            Third-Party Cookies
                        </h2>
                        <div className="space-y-4">
                            <p className="text-[var(--color-text-secondary)] leading-relaxed">
                                Some cookies on this website are placed by third-party service providers. These providers have their own privacy and cookie policies which we encourage you to review:
                            </p>
                            <ul className="list-none space-y-3 pl-0">
                                <li className="flex items-start gap-3">
                                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[var(--color-accent-emerald)] shrink-0" />
                                    <span className="text-[var(--color-text-secondary)] leading-relaxed">
                                        <a href="https://www.cloudflare.com/privacypolicy/" target="_blank" rel="noopener noreferrer" className="text-[var(--color-accent-emerald)] hover:underline transition-colors">
                                            Cloudflare Privacy Policy
                                        </a>
                                    </span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[var(--color-accent-emerald)] shrink-0" />
                                    <span className="text-[var(--color-text-secondary)] leading-relaxed">
                                        <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-[var(--color-accent-emerald)] hover:underline transition-colors">
                                            Google Privacy Policy
                                        </a>
                                    </span>
                                </li>
                            </ul>
                            <p className="text-[var(--color-text-secondary)] leading-relaxed">
                                Aeterna Data is not responsible for the content or practices of third-party websites or services.
                            </p>
                        </div>
                    </div>

                    {/* ── SECTION 9: Cookie Policy and GDPR ── */}
                    <div>
                        <h2 className="text-2xl lg:text-3xl font-semibold text-[var(--color-text-primary)] mb-6">
                            Cookie Policy and GDPR
                        </h2>
                        <div className="space-y-4">
                            <p className="text-[var(--color-text-secondary)] leading-relaxed">
                                Where cookies collect or process personal data, that processing is carried out under the following legal bases as defined by GDPR Article 6:
                            </p>
                            <ul className="list-none space-y-3 pl-0">
                                <li className="flex items-start gap-3">
                                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[var(--color-accent-emerald)] shrink-0" />
                                    <span className="text-[var(--color-text-secondary)] leading-relaxed">
                                        <strong className="text-[var(--color-text-primary)]">Strictly necessary cookies:</strong> Legitimate interests (Article 6(1)(f)) — necessary for secure and functional website operation.
                                    </span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[var(--color-accent-emerald)] shrink-0" />
                                    <span className="text-[var(--color-text-secondary)] leading-relaxed">
                                        <strong className="text-[var(--color-text-primary)]">Analytics cookies:</strong> Consent (Article 6(1)(a)) — only placed after you have given explicit consent via the cookie banner.
                                    </span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[var(--color-accent-emerald)] shrink-0" />
                                    <span className="text-[var(--color-text-secondary)] leading-relaxed">
                                        <strong className="text-[var(--color-text-primary)]">Preference cookies:</strong> Legitimate interests (Article 6(1)(f)) — necessary to remember your consent choices.
                                    </span>
                                </li>
                            </ul>
                            <p className="text-[var(--color-text-secondary)] leading-relaxed">
                                For full details on how we process personal data, including your rights as a Data Subject, please see our{' '}
                                <Link href="/privacy-policy" className="text-[var(--color-accent-emerald)] hover:underline transition-colors">
                                    Privacy Policy
                                </Link>
                                .
                            </p>
                        </div>
                    </div>

                    {/* ── SECTION 10: Changes to This Cookie Policy ── */}
                    <div>
                        <h2 className="text-2xl lg:text-3xl font-semibold text-[var(--color-text-primary)] mb-6">
                            Changes to This Cookie Policy
                        </h2>
                        <div className="space-y-4">
                            <p className="text-[var(--color-text-secondary)] leading-relaxed">
                                We may update this Cookie Policy from time to time to reflect changes in the cookies we use, changes in the law, or changes in our services. The updated policy will be posted on this page with a revised &apos;Last updated&apos; date.
                            </p>
                            <p className="text-[var(--color-text-secondary)] leading-relaxed">
                                We encourage you to review this policy periodically.
                            </p>
                            <p className="text-[var(--color-text-secondary)] leading-relaxed">
                                For questions about this Cookie Policy, contact us at{' '}
                                <a href="mailto:legal@aeternadata.com" className="text-[var(--color-accent-emerald)] hover:underline transition-colors">
                                    legal@aeternadata.com
                                </a>
                                .
                            </p>
                        </div>
                    </div>

                    {/* ── LAST UPDATED ── */}
                    <p className="text-[var(--color-text-muted)] text-sm">
                        Last updated: March 2026
                    </p>

                </div>
            </section>

            {/* ── BOTTOM STRIP ── */}
            <section className="py-16 border-t border-[var(--color-border)] relative w-full">
                <div className="max-w-3xl mx-auto px-6 text-center">
                    <p className="text-[var(--color-text-secondary)] text-lg mb-4">
                        Have a question about cookies or tracking?
                    </p>
                    <a
                        href="mailto:legal@aeternadata.com"
                        className="inline-flex items-center gap-2 text-[var(--color-accent-emerald)] hover:underline transition-colors font-semibold"
                    >
                        <Mail className="w-4 h-4" />
                        legal@aeternadata.com
                    </a>
                </div>
            </section>
        </main>
    );
}
