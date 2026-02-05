import { AboutHero } from "@/components/about/AboutHero";
import { AboutJourney } from "@/components/about/AboutJourney";
import { AboutValues } from "@/components/about/AboutValues";
import { AboutTeam } from "@/components/about/AboutTeam";


export const dynamic = 'force-dynamic';

export default async function AboutPage() {
    return (
        <main className="min-h-screen bg-white">
            <AboutHero />
            <AboutJourney />
            <AboutValues />
            <AboutTeam />

        </main>
    );
}
