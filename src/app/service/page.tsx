import { ServiceHero } from "@/components/service/ServiceHero";
import { ServiceList } from "@/components/service/ServiceList";
import { ServiceTestimonials } from "@/components/service/ServiceTestimonials";


export const dynamic = 'force-dynamic';

export default async function ServicePage() {
    return (
        <main className="min-h-screen bg-white">
            <ServiceHero />
            <ServiceList />
            <ServiceTestimonials />

        </main>
    );
}
