import Image from 'next/image';
import Link from 'next/link';

const insights = [
    {
        image: "/images/efficiency.png",
        label: "Efficiency",
        date: "25 Jul 2025",
        title: "Streamline HR With Automated Workforce Management",
        link: "/insights/efficiency"
    },
    {
        image: "/images/engagement.png",
        label: "Engagement",
        date: "22 Jun 2025",
        title: "Improve Employee Engagement Using HRM Solutions",
        link: "/insights/engagement"
    },
    {
        image: "/images/productivity.png",
        label: "Productivity",
        date: "31 May 2025",
        title: "Boost Productivity With Efficient HR Systems",
        link: "/insights/productivity"
    }
];

export type InsightsProps = {
    subtitle?: string;
    title?: string;
    articles?: Array<{
        image: string;
        label: string;
        date: string;
        title: string;
        link: string;
    }>;
};

export function Insights({
    subtitle = "INSIGHTS",
    title = "Trend & Insight Shapings HR Management",
    articles = [
        {
            image: "/images/efficiency.png",
            label: "Efficiency",
            date: "25 Jul 2025",
            title: "Streamline HR With Automated Workforce Management",
            link: "/insights/efficiency"
        },
        {
            image: "/images/engagement.png",
            label: "Engagement",
            date: "22 Jun 2025",
            title: "Improve Employee Engagement Using HRM Solutions",
            link: "/insights/engagement"
        },
        {
            image: "/images/productivity.png",
            label: "Productivity",
            date: "31 May 2025",
            title: "Boost Productivity With Efficient HR Systems",
            link: "/insights/productivity"
        }
    ]
}: InsightsProps) {
    return (
        <section className="py-12 sm:py-20 lg:py-32 bg-white">
            <div className="container mx-auto px-4 sm:px-6 max-w-7xl">

                {/* Header */}
                <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6 sm:gap-10 mb-12 sm:mb-16">
                    <div>
                        <div className="inline-flex items-center gap-2 mb-3 sm:mb-4">
                            <Image src="/images/bullet.svg" alt="" width={15} height={15} className="w-[15px] h-[15px]" />
                            <span className="text-[#218196] text-[18px] font-normal uppercase tracking-wider">{subtitle}</span>
                        </div>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium leading-tight text-[#021A1F]">
                            {title}
                        </h2>
                    </div>

                    <button className="px-4 sm:px-6 py-2 sm:py-2.5 bg-white border border-[#218196] rounded-lg text-[#218196] text-xs sm:text-sm font-medium hover:bg-[#218196] hover:text-white transition-colors flex-shrink-0">
                        Explore all
                    </button>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                    {articles?.map((item, idx) => (
                        <Link key={idx} href={item.link} className="group cursor-pointer block h-full" data-aos="fade-up" data-aos-delay={idx * 100}>
                            <div className="flex flex-col h-full">
                                <div className="relative rounded-lg sm:rounded-xl lg:rounded-2xl overflow-hidden aspect-[1.35/1] mb-4 sm:mb-6">
                                    {typeof item.image === 'string' && item.image ? (
                                        <Image
                                            src={item.image}
                                            alt={item.title}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                    ) : null}
                                </div>
                                <div className="flex items-center gap-3 text-xs sm:text-sm text-[#5B6A6D] mb-2 sm:mb-3">
                                    <span className="uppercase tracking-wide font-medium">{item.label}</span>
                                    <span className="w-px h-4 bg-[#5B6A6D]"></span>
                                    <span className="text-xs sm:text-sm">{item.date}</span>
                                </div>
                                <h3 className="text-base sm:text-lg lg:text-xl font-medium text-[#021A1F] leading-snug group-hover:text-[#218196] transition-colors">
                                    {item.title}
                                </h3>
                            </div>
                        </Link>
                    ))}
                </div>

            </div>
        </section>
    );
}
