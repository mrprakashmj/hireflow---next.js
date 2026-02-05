'use client';

import Image from 'next/image';

export function ContactHero() {
    return (
        <section className="pt-20 sm:pt-32 md:pt-40 pb-12 sm:pb-16 md:pb-20 text-center">
            <div className="container mx-auto px-4 sm:px-6">
                <div className="inline-flex items-center gap-2 mb-4 sm:mb-6">
                    <Image src="/images/bullet.svg" alt="" width={15} height={15} className="w-[15px] h-[15px]" />
                    <span className="text-brand-cyan font-medium uppercase tracking-wider text-xs sm:text-sm">REACH OUT</span>
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#021A1F] tracking-tight">
                    Get in Touch with Us
                </h1>
            </div>
        </section>
    );
}
