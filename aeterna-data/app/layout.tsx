import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { SITE_META } from '@/lib/constants';
import CookieBanner from '@/components/ui/CookieBanner';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const geist = Geist({
    subsets: ['latin'],
    variable: '--font-geist',
    display: 'swap',
});

const geistMono = Geist_Mono({
    subsets: ['latin'],
    variable: '--font-geist-mono',
    display: 'swap',
});

export const metadata: Metadata = {
    title: {
        default: 'Image Annotation Services for AI Teams — Aeterna Data',
        template: '%s — Aeterna Data',
    },
    description: 'IAA-measured image annotation for AI startups and research labs. Cohen\'s κ ≥ 0.80 guaranteed. NDA-bound, GDPR-compliant. Start with a flat-rate pilot.',
    keywords: [
        'image annotation service',
        'data labeling company',
        'bounding box annotation',
        'image segmentation annotation',
        'visual RLHF',
        'RLHF data annotation',
        'computer vision dataset',
        'GDPR compliant annotation',
        'inter-annotator agreement',
    ],
    robots: { index: true, follow: true },
    openGraph: {
        title: 'Image Annotation Services for AI Teams — Aeterna Data',
        description: 'IAA-measured image annotation. Cohen\'s κ ≥ 0.80 guaranteed. NDA-bound, GDPR-compliant.',
        type: 'website',
        locale: 'en_US',
        url: 'https://aeternadata.com',
        siteName: 'Aeterna Data',
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className={`dark scroll-smooth ${geist.variable} ${geistMono.variable}`}>
            <head>
                <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
            </head>
            <body className="antialiased">
                <Navbar />
                {children}
                <Footer />
                <CookieBanner />
            </body>
        </html>
    );
}
