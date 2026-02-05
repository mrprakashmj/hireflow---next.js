'use client';

import Image from 'next/image';
import { useState } from 'react';

const faqs = [
    {
        question: "What is the purpose of the HRM system?",
        answer: "Our HRM system streamlines HR processes, automates tasks, and provides real-time insights to help businesses manage their workforce efficiently."
    },
    {
        question: "How does the system handle data security?",
        answer: "We use enterprise-grade encryption and follow strict compliance standards to ensure your data is secure and private at all times."
    },
    {
        question: "Can I integrate this with other tools?",
        answer: "Yes, our platform supports seamless integration with popular tools like Slack, Zoom, and various accounting software."
    },
    {
        question: "Is there a free trial available?",
        answer: "Absolutely! We offer a 14-day free trial so you can explore all features before making a commitment."
    }
];

export type FAQProps = {
    badge?: string;
    title?: string;
    questions?: Array<{
        question: string;
        answer: string;
    }>;
};

export function FAQ({
    badge = "FAQ",
    title = "Frequently Asked Questions",
    questions = [
        {
            question: "What is the purpose of the HRM system?",
            answer: "Our HRM system streamlines HR processes, automates tasks, and provides real-time insights to help businesses manage their workforce efficiently."
        },
        {
            question: "How does the system handle data security?",
            answer: "We use enterprise-grade encryption and follow strict compliance standards to ensure your data is secure and private at all times."
        },
        {
            question: "Can I integrate this with other tools?",
            answer: "Yes, our platform supports seamless integration with popular tools like Slack, Zoom, and various accounting software."
        },
        {
            question: "Is there a free trial available?",
            answer: "Absolutely! We offer a 14-day free trial so you can explore all features before making a commitment."
        }
    ]
}: FAQProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="py-12 sm:py-20 lg:py-32 bg-white">
            <div className="container mx-auto px-4 sm:px-6 max-w-4xl">

                {/* Header */}
                <div className="text-center mb-8 sm:mb-12 lg:mb-16">
                    <div className="inline-flex items-center gap-2 mb-3 sm:mb-4">
                        <Image src="/images/bullet.svg" alt="" width={15} height={15} className="w-[15px] h-[15px]" />
                        <span className="text-brand-blue font-normal uppercase tracking-wider text-[18px]">{badge}</span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-brand-dark">{title}</h2>
                </div>

                {/* FAQ List */}
                <div className="space-y-3 sm:space-y-4 max-w-3xl mx-auto">
                    {questions?.map((faq, idx) => (
                        <div key={idx} className="bg-white border border-gray-100 rounded-lg sm:rounded-[16px] overflow-hidden transition-all duration-300 shadow-sm hover:shadow-md">
                            <button
                                onClick={() => setOpenIndex(prev => prev === idx ? null : idx)}
                                className="w-full flex items-center justify-between p-4 sm:p-6 text-left"
                            >
                                <span className="text-base sm:text-lg md:text-[18px] font-medium text-[#021A1F]">{faq.question}</span>
                                <div className="text-[#021A1F]/40">
                                    {openIndex === idx ? (
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                                    ) : (
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                                    )}
                                </div>
                            </button>
                            <div className={`grid transition-[grid-template-rows] duration-300 ease-out ${openIndex === idx ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                                <div className="overflow-hidden px-4 sm:px-6">
                                    <div className="pb-4 sm:pb-6 pt-0 text-xs sm:text-sm text-[#5B6A6D] leading-relaxed border-t border-gray-50 mt-2">
                                        <div className="h-4"></div>
                                        {faq.answer}
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
