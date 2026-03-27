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
    title: SITE_META.title,
    description: SITE_META.description,
    keywords: [
        'AI data annotation',
        'GDPR compliant annotation',
        'RLHF labeling',
        'DACH AI',
        'BYOT annotation',
        'data labeling Germany',
    ],
    openGraph: {
        title: 'Aeterna Data — Enterprise AI Data Annotation',
        description: 'Managed, NDA-bound annotation workforce for EU AI teams.',
        type: 'website',
        locale: 'en_EU',
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className={`dark scroll-smooth ${geist.variable} ${geistMono.variable}`}>
            <body className="antialiased">
                <Navbar />
                {children}
                <Footer />
                <CookieBanner />
            </body>
        </html>
    );
}
