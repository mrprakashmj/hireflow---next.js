import { PricingHero } from "@/components/pricing/PricingHero";
import { PricingFAQ } from "@/components/pricing/PricingFAQ";


export const dynamic = 'force-dynamic';

export default async function PricingPage() {
    return (
        <main className="min-h-screen bg-white">
            <PricingHero />
            <PricingFAQ />

        </main>
    );
}
