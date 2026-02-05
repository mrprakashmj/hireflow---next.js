import { SolutionHero } from "@/components/solution/SolutionHero";
import { SolutionGrid } from "@/components/solution/SolutionGrid";


export const dynamic = 'force-dynamic';

export default async function SolutionPage() {
    return (
        <main className="min-h-screen bg-white">
            <SolutionHero />
            <SolutionGrid />

        </main>
    );
}
