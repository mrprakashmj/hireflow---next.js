import { Hero } from "@/components/Hero";
import { HowWeHelp } from "@/components/HowWeHelp";
import { SystemOverview } from "@/components/SystemOverview";
import { IndustryServed } from "@/components/IndustryServed";
import { CoreFeatures } from "@/components/CoreFeatures";
import { Testimonials } from "@/components/Testimonials";
import { Insights } from "@/components/Insights";
import { LogoStrip } from "@/components/LogoStrip";

export const dynamic = 'force-dynamic';

export default async function Home() {
  return (
    <main className="min-h-screen relative overflow-hidden bg-white">
      {/* Hero Background Elements */}
      <div className="absolute top-0 left-0 w-full h-[1200px] bg-brand-teal z-0 pointer-events-none"></div>
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0"></div>
      <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-brand-cyan/5 rounded-full blur-[120px] translate-x-1/3 -translate-y-1/2 pointer-events-none z-0"></div>

      <div className="relative z-10">
        <Hero />
        <LogoStrip />
        <HowWeHelp />
        <SystemOverview />
        <IndustryServed />
        <CoreFeatures />
        <Testimonials />
        <Insights />
      </div>
    </main>
  );
}
