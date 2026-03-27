import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import Compliance from '@/components/sections/Compliance';
import Journey from '@/components/sections/Journey';
import CTABanner from '@/components/sections/CTABanner';
import BookingModal from '@/components/ui/BookingModal';

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
