"use client"

export default function CookieSettingsLink() {
    const handleClick = (e: React.MouseEvent) => {
        e.preventDefault()
        // Clear consent cookie to re-trigger banner
        document.cookie = 'aeterna_cookie_consent=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/'
        window.location.reload()
    }

    return (
        <a
            href="#"
            onClick={handleClick}
            className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] transition-colors duration-150 py-1.5 whitespace-nowrap block"
        >
            Cookie Settings
        </a>
    )
}
