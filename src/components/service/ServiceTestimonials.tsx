'use client';

import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

export type ServiceTestimonialItem = {
    name: string;
    role: string;
    image: string;
    quote: string;
};

export type ServiceTestimonialsProps = {
    subtitle?: string;
    title?: string;
    items?: ServiceTestimonialItem[];
};

const defaultItems: ServiceTestimonialItem[] = [
    {
        name: "Sarah Williams",
        role: "CEO @Logoipsm",
        image: "/images/Sarah Williams.png",
        quote: "What sets HRsync apart is its user-friendly interface and dedication to security. We no longer have to worry about compliance risks or handling complex HR processes manually."
    },
    {
        name: "John Smith",
        role: "HR Manager @XYZ",
        image: "/images/John Smith.png",
        quote: "What sets HRsync apart is its user-friendly interface and dedication to security. We no longer have to worry about compliance risks or handling complex HR processes manually."
    },
    {
        name: "Sophia Lee",
        role: "People Operations Manager",
        image: "/images/Sophia Lee.png",
        quote: "Our workflow has drastically improved. The HRM solution is user-friendly, allowing us to better engage with employees and optimize HR processes effortlessly."
    },
    {
        name: "Michael Johnson",
        role: "Talent Acquisition Lead",
        image: "/images/Michael Johnson.png",
        quote: "An excellent HRM platform! It simplified onboarding, payroll, and performance tracking, giving our team more time to focus on strategic growth initiatives."
    }
];

export function ServiceTestimonials({
    subtitle = "Testimonials",
    title = "Voices of Our\nHappy Clients",
    items = defaultItems
}: ServiceTestimonialsProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const [slideDirection, setSlideDirection] = useState<'left' | 'right'>('right');
    const itemsPerPage = 2;

    // Safety check for empty items
    const safeItems = items && items.length > 0 ? items : defaultItems;
    const maxIndex = Math.ceil(safeItems.length / itemsPerPage) - 1;

    const handlePrev = () => {
        if (isAnimating) return;
        setIsAnimating(true);
        setSlideDirection('left');
        setTimeout(() => {
            setCurrentIndex((prev) => (prev > 0 ? prev - 1 : maxIndex));
            setIsAnimating(false);
        }, 300);
    };

    const handleNext = () => {
        if (isAnimating) return;
        setIsAnimating(true);
        setSlideDirection('right');
        setTimeout(() => {
            setCurrentIndex((prev) => (prev < maxIndex ? prev + 1 : 0));
            setIsAnimating(false);
        }, 300);
    };

    const visibleTestimonials = safeItems.slice(
        currentIndex * itemsPerPage,
        currentIndex * itemsPerPage + itemsPerPage
    );

    return (
        <section className="bg-white py-12 sm:py-20 lg:py-32">
            <div className="container mx-auto px-4 sm:px-6 max-w-[1200px]">

                <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-12 lg:gap-16 items-start">

                    {/* Left Column: Header */}
                    <div className="lg:w-[280px] flex-shrink-0">
                        <div className="inline-flex items-center gap-2 mb-2 sm:mb-4">
                            <Image src="/images/bullet.svg" alt="" width={15} height={15} className="w-[15px] h-[15px]" />
                            <span className="text-brand-cyan font-medium uppercase tracking-wider text-xs sm:text-sm">{subtitle}</span>
                        </div>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#021A1F] leading-tight mb-6 sm:mb-8">
                            {title.split('\n').map((line, i) => (
                                <span key={i}>{line}{i === 0 && <br />}</span>
                            ))}
                        </h2>

                        {/* Navigation Arrows */}
                        <div className="flex gap-2 sm:gap-3">
                            <button
                                onClick={handlePrev}
                                disabled={isAnimating}
                                className="w-10 sm:w-12 h-10 sm:h-12 rounded-lg border border-gray-200 flex items-center justify-center hover:border-black transition-colors disabled:opacity-50 group"
                            >
                                <ChevronLeft className="w-4 sm:w-5 h-4 sm:h-5 text-gray-500 group-hover:text-black" />
                            </button>
                            <button
                                onClick={handleNext}
                                disabled={isAnimating}
                                className="w-10 sm:w-12 h-10 sm:h-12 rounded-lg border border-gray-200 flex items-center justify-center hover:border-black transition-colors disabled:opacity-50 group"
                            >
                                <ChevronRight className="w-4 sm:w-5 h-4 sm:h-5 text-gray-500 group-hover:text-black" />
                            </button>
                        </div>
                    </div>

                    {/* Right Column: Testimonial Cards */}
                    <div className="flex-1 overflow-hidden">
                        <div
                            className={`grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 transition-all duration-300 ease-in-out ${isAnimating
                                ? slideDirection === 'right'
                                    ? 'opacity-0 translate-x-8'
                                    : 'opacity-0 -translate-x-8'
                                : 'opacity-100 translate-x-0'
                                }`}
                        >
                            {visibleTestimonials.map((item, index) => (
                                <div key={index} className="flex flex-col items-start gap-3 sm:gap-4">
                                    {/* User Info */}
                                    <div className="flex items-start gap-2 sm:gap-4 w-full">
                                        <div className="relative w-16 sm:w-20 h-16 sm:h-20 rounded-full overflow-hidden border-2 border-gray-100 flex-shrink-0">
                                            {typeof item.image === 'string' && item.image ? (
                                                <Image src={item.image} alt={item.name} fill className="object-cover" />
                                            ) : null}
                                        </div>
                                        {/* Quote Card */}
                                        <div className="flex-1 bg-[#F1F6F9] p-3 sm:p-4 lg:p-5 rounded-lg sm:rounded-xl relative">
                                            <div className="absolute top-2 right-3 sm:top-3 sm:right-4 text-2xl sm:text-3xl text-[#085263] font-serif opacity-50">"</div>
                                            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed pr-6 sm:pr-8">
                                                {item.quote}
                                            </p>
                                        </div>
                                    </div>
                                    {/* Name and Role (below avatar) */}
                                    <div className="ml-1 sm:ml-2">
                                        <h3 className="text-base sm:text-lg font-bold text-[#021A1F]">{item.name}</h3>
                                        <p className="text-gray-500 text-xs sm:text-sm">{item.role}</p>
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
