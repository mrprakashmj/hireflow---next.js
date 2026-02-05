'use client';

import Image from 'next/image';
import { useState } from 'react';

export type PricingFAQProps = {
    subtitle?: string;
    title?: string;
    items?: Array<{
        question: string;
        answer: string;
    }>;
};

export function PricingFAQ({
    subtitle = "FAQ",
    title = "Frequently Asked \n Questions",
    items = [
        {
            question: "1. What is the purpose of the HRM system?",
            answer: "Our HRM system determines HR processes, automates tasks, and provides real-time insights to help businesses manage their workforce efficiently."
        },
        {
            question: "2. How does the HRM system aid recruitment and onboarding?",
            answer: "It streamlines the entire process from job posting to candidate screening and digital onboarding, creating a seamless experience for new hires."
        },
        {
            question: "3. Is employee data secure within the HRM system?",
            answer: "Yes, we use enterprise-grade encryption, regular backups, and strict access controls to ensure your employee data remains secure and confidential."
        },
        {
            question: "4. Can the HRM system be tailored to our organization's needs?",
            answer: "Absolutely. Our Professional and Enterprise plans offer extensive customization options for workflows, reports, and integrations to match your specific requirements."
        }
    ]
}: PricingFAQProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="py-12 sm:py-20 lg:py-32 bg-white">
            <div className="container mx-auto px-4 sm:px-6 max-w-4xl">

                {/* Header */}
                <div className="text-center mb-8 sm:mb-12 lg:mb-16">
                    <div className="inline-flex items-center gap-2 mb-2 sm:mb-4">
                        <Image src="/images/bullet.svg" alt="" width={15} height={15} className="w-[15px] h-[15px]" />
                        <span className="text-brand-cyan font-medium uppercase tracking-wider text-xs sm:text-sm">{subtitle}</span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#021A1F] mb-4 sm:mb-6">
                        {title.split('\n').map((line, i) => (
                            <span key={i}>{line}{i === 0 && <br />}</span>
                        ))}
                    </h2>
                </div>

                {/* FAQ List */}
                <div className="space-y-3 sm:space-y-4 lg:space-y-6">
                    {items?.map((faq, idx) => (
                        <div key={idx} className="border border-gray-200 rounded-lg sm:rounded-xl lg:rounded-2xl overflow-hidden transition-all duration-300">
                            <button
                                onClick={() => setOpenIndex(prev => prev === idx ? null : idx)}
                                className="w-full flex items-center justify-between p-3 sm:p-4 lg:p-6 text-left bg-white hover:bg-gray-50 transition-colors"
                            >
                                <span className="text-sm sm:text-base lg:text-xl font-medium text-[#021A1F] pr-4 sm:pr-8">{faq.question}</span>
                                <div className={`flex-shrink-0 w-6 sm:w-8 h-6 sm:h-8 flex items-center justify-center transition-transform duration-300 ${openIndex === idx ? 'rotate-45' : ''}`}>
                                    {/* Plus icon from Figma design */}
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 4V20M20 12H4" stroke="#021A1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                            </button>
                            <div className={`grid transition-[grid-template-rows] duration-300 ease-out ${openIndex === idx ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                                <div className="overflow-hidden">
                                    <div className="px-3 sm:px-4 lg:px-6 pb-3 sm:pb-4 lg:pb-6 pt-1 sm:pt-2">
                                        <p className="text-gray-600 leading-relaxed text-xs sm:text-sm lg:text-lg">{faq.answer}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
