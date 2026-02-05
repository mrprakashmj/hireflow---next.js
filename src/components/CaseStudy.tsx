'use client';

import Link from 'next/link';
import Image from 'next/image';

export type CaseStudyProps = {
    subtitle?: string;
    title?: string;
    buttonText?: string;
    buttonLink?: string;
    items?: Array<{
        image: string;
        title: string;
        description: string;
        link: string;
        stats: Array<{
            value: string;
            text: string;
        }>;
    }>;
};

export function CaseStudy({
    subtitle = "Client Stories",
    title = "Driving success through smarter HR solutions",
    buttonText = "View All Case Studies",
    buttonLink = "/case-study",
    items = [
        {
            image: "/images/case-study-thumbnail-img-02.jpg",
            title: "Streamlined HR Operations",
            description: "Streamline HR workflows, automate tasks, & enhance efficiency to drive business growth effectively.",
            link: "/case-study/streamlined-hr-operations",
            stats: [
                { value: "85%", text: "Automated workflows boost hiring efficiency and improve team productivity." },
                { value: "75%", text: "Faster responses and transparency boost employee satisfaction and engagement." },
                { value: "90%", text: "Streamlined onboarding enhances efficiency and fuels organizational growth." }
            ]
        },
        {
            image: "/images/case-study-thumbnail-img-03.jpg",
            title: "Automated Accurate Payroll",
            description: "Ensure timely & precise salary payments by automating payroll processes for error-free payroll management.",
            link: "/case-study/automated-accurate-payroll",
            stats: [
                { value: "80%", text: "Enhanced teamwork with cloud tools improves communication and efficiency." },
                { value: "85%", text: "Digital workspaces drive seamless collaboration and higher team productivity." },
                { value: "90%", text: "Flexible workflows boost engagement and performance across global teams." }
            ]
        }
    ]
}: CaseStudyProps) {
    return (
        <section className="py-16 sm:py-24 lg:py-32 bg-white overflow-hidden">
            <div className="container mx-auto px-4 max-w-7xl">

                {/* Header */}
                <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8 mb-12 lg:mb-20">
                    <div className="max-w-2xl">
                        <div className="inline-flex items-center gap-2 mb-4 lg:mb-6">
                            <div className="w-5 h-5 flex items-center justify-center">
                                <img
                                    src="/images/bullet.svg"
                                    alt="Client Stories Icon"
                                    className="w-full h-full"
                                />
                            </div>
                            <span className="text-[#218196] text-sm font-medium uppercase tracking-wider">{subtitle}</span>
                        </div>
                        <h2 className="text-3xl sm:text-4xl lg:text-[54px] font-bold text-[#021A1F] leading-[1.1] tracking-tight">
                            {title}
                        </h2>
                    </div>

                    <Link href={buttonLink} className="group relative inline-flex items-center justify-center px-6 py-3 bg-white border border-[#021A1F] rounded-lg text-[#021A1F] font-medium transition-all hover:bg-[#021A1F] hover:text-white">
                        <span className="relative z-10">{buttonText}</span>
                    </Link>
                </div>

                {/* Case Study Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                    {items?.map((item, index) => (
                        <div key={index} className="case-study-card group">
                            <div className="relative rounded-[24px] lg:rounded-[32px] overflow-hidden aspect-[4/3] sm:aspect-[3/2] lg:aspect-[1.4/1] mb-6 sm:mb-8">
                                {/* Base Image */}
                                {typeof item.image === 'string' && item.image ? (
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                ) : null}

                                {/* Overlay Content (Slide up on hover) */}
                                <div className="absolute inset-x-0 bottom-0 bg-white p-6 sm:p-8 lg:p-10 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out z-10">
                                    <div className="space-y-6 sm:space-y-8">
                                        {item.stats?.map((stat, sIdx) => (
                                            <div key={sIdx} className="space-y-2">
                                                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#021A1F]">{stat.value}</h3>
                                                <p className="text-sm sm:text-base text-[#5B6A6D] leading-relaxed max-w-sm">
                                                    {stat.text}
                                                </p>
                                                {sIdx < item.stats.length - 1 && <div className="h-px bg-gray-100 w-full" />}
                                            </div>
                                        ))}

                                        <Link href={item.link} className="inline-flex items-center gap-2 text-[#021A1F] font-bold text-sm uppercase tracking-wider group/link mt-4">
                                            <span>View More</span>
                                            <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center group-hover/link:bg-[#021A1F] group-hover/link:text-white transition-colors">
                                                <img
                                                    src="/images/read-icon.svg"
                                                    alt="Arrow"
                                                    className="w-4 h-4"
                                                />
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-3 sm:space-y-4">
                                <Link href={item.link} className="block group/title">
                                    <h3 className="text-2xl sm:text-3xl lg:text-[32px] font-bold text-[#021A1F] group-hover/title:text-[#218196] transition-colors relative inline-block">
                                        {item.title}
                                        <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#218196] transition-all duration-300 group-hover/title:w-full" />
                                    </h3>
                                </Link>
                                <p className="text-[#5B6A6D] text-base lg:text-lg leading-relaxed max-w-xl">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
