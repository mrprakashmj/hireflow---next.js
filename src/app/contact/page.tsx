import { ContactInfo } from '@/components/contact/ContactInfo';
import { ContactForm } from '@/components/contact/ContactForm';
import { ContactHero } from '@/components/contact/ContactHero';
import { PricingFAQ } from '@/components/pricing/PricingFAQ';

export const dynamic = 'force-dynamic';

export default async function ContactPage() {
    return (
        <main className="min-h-screen bg-white">
            {/* Top Section with Beige Background */}
            <div className="bg-[#FFF2EB]">
                <ContactHero />
                <ContactForm />
                <ContactInfo />
            </div>

            {/* FAQ Section */}
            <PricingFAQ />

        </main>
    );
}
