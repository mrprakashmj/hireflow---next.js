'use client';

import { useState } from 'react';

export type TestimonialsProps = {
    title?: string;
    testimonials?: Array<{
        name: string;
        role: string;
        company: string;
        content: string;
        rating: number;
    }>;
};

export function Testimonials({
    title = "What Our Clients Say",
    testimonials = [
        {
            name: "Sarah Johnson",
            role: "HR Director",
            company: "Tech Corp",
            content: "This platform has transformed how we manage our workforce. Highly recommended!",
            rating: 5
        },
        {
            name: "Michael Chen",
            role: "CEO",
            company: "Startup Inc",
            content: "The automation features saved us countless hours. Game changer for small businesses.",
            rating: 5
        }
    ]
}: TestimonialsProps) {
    return (
        <section className="faq-section bg-[#F8FAFA] py-16 lg:py-24">
            <div className="container mx-auto px-4 max-w-[1200px]">
                {/* Section Title */}
                <div className="section-title-area text-center mb-12" data-aos="fade-up">
                    <div className="title-scroll mb-4">
                        <div className="section-subtitle-wrap flex items-center justify-center gap-2">
                            <div className="section-subtitle-icon-wrap">
                                <img
                                    src="/images/bullet.svg"
                                    loading="lazy"
                                    alt="Section subtitle symbol"
                                    className="section-subtitle-icon w-5 h-5"
                                />
                            </div>
                            <p className="section-subtitle text-[#218196] text-lg font-medium uppercase tracking-wider">
                                Testimonials
                            </p>
                        </div>
                    </div>
                    <div className="section-title-wrap">
                        <h2 className="section-title text-[#021A1F] text-3xl sm:text-4xl lg:text-5xl font-medium leading-tight tracking-[-0.02em]">
                            {title}
                        </h2>
                    </div>
                </div>

                {/* Testimonials Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {testimonials?.map((testimonial, index) => (
                        <div key={index} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow" data-aos="fade-up" data-aos-delay={index * 100}>
                            <div className="flex gap-1 mb-4">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>
                            <p className="text-[#5B6A6D] mb-6 italic text-lg leading-relaxed">
                                "{testimonial.content}"
                            </p>
                            <div className="flex items-center gap-4">
                                <div>
                                    <p className="font-bold text-[#021A1F] text-lg">{testimonial.name}</p>
                                    <p className="text-sm text-[#5B6A6D]">{testimonial.role} at {testimonial.company}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
