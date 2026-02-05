import Image from "next/image";

export type SolutionGridProps = {
    title?: string;
    subtitle?: string;
    items?: Array<{
        title: string;
        desc: string;
        image: string;
    }>;
};

export function SolutionGrid({
    title = "Tailored Solutions For Your Business Needs",
    subtitle = "Smart Solutions",
    items = [
        {
            title: "Small & Medium Enterprises",
            desc: "Streamlined HR solutions for growing businesses and teams.",
            image: "/images/Small & Medium Enterprises.png"
        },
        {
            title: "Large-Scale Corporations",
            desc: "Scalable workforce management for enterprise-wide HR operations.",
            image: "/images/Large-Scale Corporations.png"
        },
        {
            title: "Remote & Hybrid Teams",
            desc: "Cloud-based HR tools for seamless remote team management.",
            image: "/images/Remote & Hybrid Teams.png"
        },
        {
            title: "Recruitment & Staffing Firms",
            desc: "AI-powered hiring, onboarding, and candidate tracking system.",
            image: "/images/Recruitment & Staffing Firms.png"
        },
        {
            title: "Healthcare & Hospitality",
            desc: "Efficient scheduling, payroll, and compliance for service industries.",
            image: "/images/Healthcare & Hospitality.png"
        },
        {
            title: "Manufacturing & Industrial Sector",
            desc: "Workforce automation for labor tracking and shift management.",
            image: "/images/Manufacturing & Industrial Sector.png"
        }
    ]
}: SolutionGridProps) {
    return (
        <section className="bg-white py-12 sm:py-20 lg:py-32">
            <div className="container mx-auto px-4 sm:px-6 max-w-7xl">

                {/* Header */}
                <div className="text-center mb-12 sm:mb-20 max-w-3xl mx-auto">
                    <div className="inline-flex items-center gap-2 mb-3 sm:mb-4">
                        <Image src="/images/bullet.svg" alt="" width={15} height={15} className="w-[15px] h-[15px]" />
                        <span className="text-brand-cyan font-medium uppercase tracking-wider text-xs sm:text-sm">{subtitle}</span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#021A1F] leading-tight">
                        {title}
                    </h2>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-7xl mx-auto">
                    {items?.map((item, idx) => (
                        <div key={idx} className="group cursor-pointer">
                            <div className="relative rounded-xl sm:rounded-2xl overflow-hidden aspect-[4/3] mb-4 sm:mb-6">
                                {typeof item.image === 'string' && item.image ? (
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                ) : null}
                                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors"></div>
                            </div>
                            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-brand-dark mb-2 sm:mb-3 group-hover:text-brand-cyan transition-colors">{item.title}</h3>
                            <p className="text-sm sm:text-base text-gray-500 leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
