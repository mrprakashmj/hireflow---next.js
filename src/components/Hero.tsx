'use client';

import Link from 'next/link';
import Image from 'next/image';

export function Hero() {
    return (
        <div className="home-banner-wrap bg-[#085263]">
            <section className="home-banner-section pt-8 pb-0 lg:pb-0 relative overflow-hidden">
                {/* Background Vector Decoration */}
                <div className="hero-pattern absolute bottom-[-425px] right-[143px] w-full opacity-100 pointer-events-none z-0">
                    <img
                        src="/images/Vector 7.svg"
                        alt="Decorative vector"
                        className="w-full h-auto"
                    />
                </div>

                <div className="container mx-auto px-4 max-w-[1200px] relative z-10">
                    <div className="home-banner-area flex flex-col lg:flex-row items-start gap-10 lg:gap-16">
                        {/* Left Content Area */}
                        <div className="home-banner-content-area flex-1 max-w-[600px]">
                            {/* Banner Title */}
                            <div className="banner-title-wrap mb-6">
                                <h1 className="banner-title text-[32px] sm:text-[42px] md:text-[52px] lg:text-[64px] font-bold text-white leading-[1.1] tracking-[-0.02em]">
                                    Effortless HR <span className="text-[#36C9EB]">Solutions</span> For Business.
                                </h1>
                            </div>

                            {/* Banner Content */}
                            <div className="banner-content-wrap mb-8">
                                <p className="banner-content text-white/90 text-base sm:text-lg leading-relaxed max-w-[500px]">
                                    Streamline HR, boost productivity, and simplify workforce management for efficiency and employee satisfaction.
                                </p>
                            </div>

                            {/* Banner Buttons */}
                            <div className="banner-button-area mb-12">
                                <div className="banner-button-wrap flex flex-col sm:flex-row gap-4">
                                    <Link
                                        href="/about"
                                        className="secondary-dark-button inline-flex items-center justify-center px-8 py-4 bg-[#36C9EB] text-[#021A1F] font-semibold rounded-lg hover:bg-white transition-all duration-300"
                                    >
                                        Start Your Journey
                                    </Link>
                                    <Link
                                        href="/solution"
                                        className="secondary-button inline-flex items-center justify-center px-8 py-4 border border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300"
                                    >
                                        Explore Solutions
                                    </Link>
                                </div>
                            </div>

                            {/* Student/Testimonial Area */}
                            <div className="student-whole-area">
                                <div className="student-area flex items-center gap-4">
                                    <div className="student-wrap flex -space-x-3">
                                        <div className="student-image-wrap w-12 h-12 rounded-full border-2 border-[#085263] overflow-hidden">
                                            <Image
                                                src="/images/user1.png"
                                                alt="User 1"
                                                width={48}
                                                height={48}
                                                className="student-image w-full h-full object-cover"
                                            />
                                        </div>
                                        <div className="student-image-wrap w-12 h-12 rounded-full border-2 border-[#085263] overflow-hidden">
                                            <Image
                                                src="/images/user2.png"
                                                alt="User 2"
                                                width={48}
                                                height={48}
                                                className="student-image w-full h-full object-cover"
                                            />
                                        </div>
                                        <div className="student-image-wrap w-12 h-12 rounded-full border-2 border-[#085263] overflow-hidden">
                                            <Image
                                                src="/images/user3.png"
                                                alt="User 3"
                                                width={48}
                                                height={48}
                                                className="student-image w-full h-full object-cover"
                                            />
                                        </div>
                                    </div>
                                    <div className="student-text-wrap">
                                        <p className="student-text text-white text-base">
                                            <span className="student-subtext font-bold">500+</span> Worldwide Structured Hiring
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Image Area */}
                        <div className="home-banner-image-area flex-1 relative">
                            {/* Small Dashboard Image */}
                            <div className="home-banner-small-image-area absolute -left-8 top-1/3 z-10 hidden lg:block">
                                <div className="home-banner-small-image-wrap">
                                    <Image
                                        src="/images/home-banner-samll-img.jpg"
                                        alt="Home banner small dashboard"
                                        width={200}
                                        height={200}
                                        className="home-banner-small-image w-40 lg:w-48 rounded-xl shadow-2xl"
                                        priority={true}
                                    />
                                </div>
                            </div>

                            {/* Main Banner Image */}
                            <div className="home-banner-image-wrap">
                                <Image
                                    src="/images/home-banner-img.jpg"
                                    alt="Collaborative work environment"
                                    width={600}
                                    height={600}
                                    className="home-banner-image w-full rounded-[20px] lg:rounded-[30px] border border-white/30 shadow-2xl"
                                    priority={true}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </div>
    );
}
