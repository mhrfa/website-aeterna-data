"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'

const COOKIE_NAME = 'aeterna_cookie_consent'
const COOKIE_EXPIRY_DAYS = 365

function setCookie(name: string, value: string, days: number) {
    const expires = new Date()
    expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000)
    document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/;SameSite=Lax`
}

function getCookie(name: string): string | null {
    const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'))
    return match ? match[2] : null
}

export default function CookieBanner() {
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        const consent = getCookie(COOKIE_NAME)
        if (!consent) setVisible(true)
    }, [])

    const handleAcceptAll = () => {
        setCookie(COOKIE_NAME, 'all', COOKIE_EXPIRY_DAYS)
        setVisible(false)
    }

    const handleNecessaryOnly = () => {
        setCookie(COOKIE_NAME, 'necessary', COOKIE_EXPIRY_DAYS)
        setVisible(false)
    }

    if (!visible) return null

    return (
        <div
            className="fixed bottom-0 left-0 right-0 z-50 bg-[var(--color-bg-surface)] border-t border-[var(--color-border)] px-6 md:px-8 py-4"
            role="dialog"
            aria-label="Cookie consent"
        >
            <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <p className="text-sm text-[var(--color-text-secondary)] max-w-2xl">
                    We use cookies to improve your experience. See our{' '}
                    <Link
                        href="/cookie-policy"
                        className="text-[var(--color-text-primary)] underline underline-offset-2 hover:no-underline"
                    >
                        Cookie Policy
                    </Link>
                    {' '}for details.
                </p>

                <div className="flex gap-3 shrink-0">
                    <button
                        onClick={handleNecessaryOnly}
                        className="text-sm px-4 py-2 rounded-lg border border-[var(--color-border-subtle)] text-[var(--color-text-secondary)] hover:border-[var(--color-border-hover)] hover:text-[var(--color-text-primary)] transition-all duration-150"
                    >
                        Necessary Only
                    </button>
                    <button
                        onClick={handleAcceptAll}
                        className="text-sm px-4 py-2 rounded-lg bg-[var(--color-accent-cta)] text-white font-semibold hover:bg-[var(--color-accent-cta-hover)] transition-colors duration-150"
                    >
                        Accept All
                    </button>
                </div>
            </div>
        </div>
    )
}
