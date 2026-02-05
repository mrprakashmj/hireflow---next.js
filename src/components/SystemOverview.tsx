'use client';

import Image from 'next/image';
import { ChevronRight } from 'lucide-react';
import { useState } from 'react';

export type SystemOverviewProps = {
    subtitle?: string;
    title?: string;
    items?: Array<{
        title: string;
        description: string;
    }>;
    heroImage?: string;
    graphImage?: string;
};

export function SystemOverview({
    subtitle = "System Overview",
    title = "Understand Our System Fast",
    items = [
        {
            title: "Onboard Easily",
            description: "Sign up, set preferences, and configure HR settings effortlessly with speed and accuracy."
        },
        {
            title: "Manage Efficiently",
            description: "Streamline daily operations, handle requests, and oversee team performance in one place."
        },
        {
            title: "Grow Smartly",
            description: "Leverage data insights to scale your workforce and optimize business strategies."
        }
    ],
    heroImage = "/images/overview-img-01.jpg",
    graphImage = "/images/overview-graph-img-01.png"
}: SystemOverviewProps) {
    const [openItem, setOpenItem] = useState(0);
    return (
        <section className="py-12 sm:py-20 lg:py-32 bg-white">
            <div className="container mx-auto px-4 sm:px-6">
                <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-12 lg:gap-20">

                    {/* Visual Column */}
                    <div className="flex-1 w-full relative">
                        <div className="overview-image-area relative">
                            {/* Main Overview Image */}
                            <div className="overview-image-wrap relative rounded-lg sm:rounded-2xl overflow-hidden shadow-2xl bg-gray-50 aspect-square lg:aspect-[4/3]">
                                {typeof heroImage === 'string' && heroImage ? (
                                    <Image
                                        src={heroImage}
                                        alt="Man and woman shaking hands on business meeting"
                                        fill
                                        className="overview-image object-cover opacity-80"
                                    />
                                ) : null}
                            </div>

                            {/* Graph Overlay Image */}
                            {typeof graphImage === 'string' && graphImage ? (
                                <div className="overview-graph-image-area absolute bottom-4 right-4 w-1/2 max-w-[250px] lg:max-w-[320px]">
                                    <div className="overview-graph-image-wrap relative rounded-lg overflow-hidden shadow-xl bg-white p-3">
                                        <Image
                                            src={graphImage}
                                            alt="Overview graph chart dashboard"
                                            width={234}
                                            height={174}
                                            className="overview-graph-image w-full h-auto"
                                        />
                                    </div>
                                </div>
                            ) : null}
                        </div>
                    </div>

                    {/* Text Column */}
                    <div className="flex-1 space-y-6 sm:space-y-8 lg:space-y-12">
                        <div>
                            <div className="inline-flex items-center gap-2 mb-2 sm:mb-3 lg:mb-4">
                                <Image
                                    src="/images/bullet.svg"
                                    alt=""
                                    width={5}
                                    height={5}
                                    className="w-4 sm:w-5 lg:w-6 h-auto"
                                />
                                <span className="text-[#218196] font-normal uppercase tracking-wider text-sm sm:text-base lg:text-[18px]">{subtitle}</span>
                            </div>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#021A1F] mb-4 sm:mb-6">{title}</h2>
                        </div>

                        <div className="space-y-4 sm:space-y-6 lg:space-y-8">
                            {items?.map((item, index) => (
                                <div key={index} className="group cursor-pointer" onClick={() => setOpenItem(openItem === index ? -1 : index)}>
                                    <div className="flex items-center justify-between border-b border-gray-200 pb-3 sm:pb-4">
                                        <h3 className="text-lg sm:text-xl lg:text-2xl font-medium text-[#021A1F] transition-colors">{item.title}</h3>
                                        <ChevronRight className={`w-5 sm:w-6 h-5 sm:h-6 text-brand-blue transition-transform duration-300 ${openItem === index ? 'rotate-90' : 'rotate-0'}`} />
                                    </div>
                                    <div className={`grid transition-[grid-template-rows] duration-300 ease-out ${openItem === index ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                                        <div className="overflow-hidden">
                                            <p className="text-sm sm:text-base text-gray-600 mt-3 sm:mt-4 leading-relaxed">
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
