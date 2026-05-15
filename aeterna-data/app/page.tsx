import type { Metadata } from 'next';
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

export default function Home() {
    return (
        <main className="min-h-screen flex flex-col relative w-full overflow-hidden">
            <Hero />
            <Services />
            <Compliance />
            <Journey />
            <CTABanner />
            <BookingModal />
        </main>
    );
}
