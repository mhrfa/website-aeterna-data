import { Metadata } from 'next';
import Script from 'next/script';
import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import Compliance from '@/components/sections/Compliance';
import Journey from '@/components/sections/Journey';
import CTABanner from '@/components/sections/CTABanner';
import BookingModal from '@/components/ui/BookingModal';

export const metadata: Metadata = {
    title: 'Image Annotation Services for AI Teams — Aeterna Data',
    description: 'IAA-measured image annotation for computer vision and visual RLHF. Cohen\'s κ ≥ 0.80 guaranteed. NDA-bound, GDPR-compliant. Start with a flat-rate pilot.',
    openGraph: {
        title: 'Image Annotation Services for AI Teams — Aeterna Data',
        description: 'IAA-measured image annotation. Cohen\'s κ ≥ 0.80 guaranteed. NDA-bound, GDPR-compliant.',
        url: 'https://aeternadata.com',
    },
};

const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Aeterna Data',
    url: 'https://aeternadata.com',
    logo: 'https://aeternadata.com/logo.png',
    description: 'Specialized image annotation company providing IAA-measured annotation services for computer vision and visual RLHF teams. Cohen\'s κ ≥ 0.80 guaranteed.',
    foundingLocation: {
        '@type': 'Place',
        address: {
            '@type': 'PostalAddress',
            addressCountry: 'ID',
        },
    },
    serviceArea: {
        '@type': 'Place',
        name: 'Worldwide',
    },
    sameAs: [
        'https://www.linkedin.com/company/aeterna-data',
    ],
    hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Image Annotation Services',
        itemListElement: [
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Bounding Box Annotation', url: 'https://aeternadata.com/services/bounding-box' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Image Segmentation Annotation', url: 'https://aeternadata.com/services/segmentation' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Image Classification Annotation', url: 'https://aeternadata.com/services/classification' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Visual RLHF Annotation', url: 'https://aeternadata.com/services/visual-rlhf' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Dataset QA & Validation', url: 'https://aeternadata.com/services/dataset-qa' } },
        ],
    },
};

const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Aeterna Data',
    url: 'https://aeternadata.com',
};

export default function Home() {
    return (
        <>
            <Script
                id="schema-organization"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
            />
            <Script
                id="schema-website"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
            />
            <main className="min-h-screen flex flex-col relative w-full overflow-hidden">
                <Hero />
                <Services />
                <Compliance />
                <Journey />
                <CTABanner />
                <BookingModal />
            </main>
        </>
    );
}
