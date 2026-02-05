import Image from 'next/image';
import Link from "next/link";

export function PricingHero() {
    return (
        <section className="bg-[#FFF2EB] pt-16 sm:pt-24 md:pt-32 lg:pt-48 pb-12 sm:pb-16 md:pb-20 lg:pb-32 overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6">

                {/* Header */}
                <div className="text-center mb-8 sm:mb-12 lg:mb-16 max-w-4xl mx-auto">
                    <div className="inline-flex items-center gap-2 mb-3 sm:mb-4 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full">
                        <Image src="/images/bullet.svg" alt="" width={15} height={15} className="w-[15px] h-[15px]" />
                        <span className="text-brand-teal font-medium uppercase tracking-wider text-xs sm:text-sm">Packages</span>
                    </div>
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-7xl font-bold text-brand-dark mb-4 sm:mb-6 leading-[1.1]">
                        Pricing Plans Tailored <br className="hidden lg:block" /> For Your Business
                    </h1>
                </div>

                {/* Pricing Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-7xl mx-auto items-center">

                    {/* 1. Starter Plan */}
                    <div className="bg-white rounded-lg sm:rounded-xl lg:rounded-2xl p-4 sm:p-6 lg:p-8 lg:p-10 shadow-[0_4px_47px_rgba(0,0,0,0.05)] border border-gray-100 flex flex-col h-full relative z-10">
                        <div className="mb-4 sm:mb-6 lg:mb-8">
                            <h3 className="text-lg sm:text-xl lg:text-2xl font-medium text-brand-dark mb-2 sm:mb-3 lg:mb-4">Starter</h3>
                            <div className="min-h-12 sm:min-h-14 mb-2 sm:mb-3 lg:mb-4">
                                <p className="text-gray-500 text-xs sm:text-sm lg:text-lg leading-relaxed">Essential tools to kickstart your business efficiently & affordably.</p>
                            </div>
                        </div>
                        <div className="mb-4 sm:mb-6 lg:mb-8">
                            <p className="flex items-center gap-1">
                                <span className="text-2xl sm:text-3xl lg:text-4xl font-medium text-brand-dark">$29</span>
                                <span className="text-sm sm:text-base lg:text-lg text-gray-500 self-end mb-1">/Month</span>
                            </p>
                        </div>

                        <Link href="#" className="flex justify-center items-center w-full py-2.5 sm:py-3 lg:py-4 rounded-lg border border-brand-dark bg-transparent text-brand-dark font-medium text-xs sm:text-sm lg:text-base hover:bg-gray-50 transition-colors mb-6 sm:mb-8 lg:mb-10">
                            Upgrade Your Business
                        </Link>

                        <div className="space-y-2 sm:space-y-3 lg:space-y-4">
                            {['Workflow Automation', 'HR Management', 'Payroll Processing', 'Self-Service'].map((feature, i) => (
                                <div key={i} className="flex items-center gap-2 sm:gap-3 text-brand-dark text-xs sm:text-sm lg:text-base">
                                    <div className="w-4 sm:w-5 h-4 sm:h-5 rounded-full border border-gray-400 flex items-center justify-center flex-shrink-0">
                                        <svg width="8" height="6" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 4L3.5 6.5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                                    </div>
                                    <span>{feature}</span>
                                </div>
                            ))}
                            {['Custom Reports', '24/7 Support'].map((feature, i) => (
                                <div key={i} className="flex items-center gap-2 sm:gap-3 text-gray-400 text-xs sm:text-sm lg:text-base">
                                    <div className="w-4 sm:w-5 h-4 sm:h-5 rounded-full bg-[#FEEBEB] border border-gray-200 flex items-center justify-center flex-shrink-0">
                                        <svg width="6" height="6" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 2.5L5.5 5.5M5.5 2.5L2.5 5.5" stroke="#800000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                                    </div>
                                    <span>{feature}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* 2. Professional Plan (Dark) */}
                    <div className="bg-[#021A1F] rounded-lg sm:rounded-xl lg:rounded-2xl p-4 sm:p-6 lg:p-8 lg:p-10 shadow-2xl border border-[#085263] flex flex-col h-full relative md:scale-105 lg:scale-105 md:z-20 lg:z-20 overflow-hidden text-white">
                        {/* Background decorative elements */}
                        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#085263] opacity-30 blur-[100px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/2"></div>

                        <div className="mb-4 sm:mb-6 lg:mb-8 relative z-10">
                            <h3 className="text-lg sm:text-xl lg:text-2xl font-medium text-white mb-2 sm:mb-3 lg:mb-4">Professional</h3>
                            <div className="min-h-12 sm:min-h-14 mb-2 sm:mb-3 lg:mb-4">
                                <p className="text-white/60 text-xs sm:text-sm lg:text-lg leading-relaxed">Advanced features designed to grow your business & streamline operations.</p>
                            </div>
                        </div>
                        <div className="mb-4 sm:mb-6 lg:mb-8 relative z-10">
                            <p className="flex items-center gap-1">
                                <span className="text-2xl sm:text-3xl lg:text-4xl font-medium text-white">$79</span>
                                <span className="text-sm sm:text-base lg:text-lg text-white/60 self-end mb-1">/Month</span>
                            </p>
                        </div>

                        <Link href="#" className="relative z-10 flex justify-center items-center w-full py-2.5 sm:py-3 lg:py-4 rounded-lg bg-brand-cyan text-brand-dark font-medium text-xs sm:text-sm lg:text-base hover:bg-brand-cyan/90 transition-colors mb-6 sm:mb-8 lg:mb-10">
                            Upgrade Your Business
                        </Link>

                        <div className="space-y-4 relative z-10">
                            {['Candidate Screening', 'Talent Tracking', 'Payroll Management', 'Custom Reports', 'Tool Integration'].map((feature, i) => (
                                <div key={i} className="flex items-center gap-3 text-white">
                                    <div className="w-5 h-5 rounded-full border border-white/60 flex items-center justify-center flex-shrink-0">
                                        <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 4L3.5 6.5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                                    </div>
                                    <span>{feature}</span>
                                </div>
                            ))}
                            <div className="flex items-center gap-3 text-white/40">
                                <div className="w-5 h-5 rounded-full bg-[#FEEBEB]/10 border border-white/20 flex items-center justify-center flex-shrink-0">
                                    <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 2.5L5.5 5.5M5.5 2.5L2.5 5.5" stroke="#FFFFFF" strokeOpacity="0.6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                                </div>
                                <span>24/7 Support</span>
                            </div>
                        </div>
                    </div>

                    {/* 3. Enterprise Plan */}
                    <div className="bg-white rounded-2xl p-8 lg:p-10 shadow-[0_4px_47px_rgba(0,0,0,0.05)] border border-gray-100 flex flex-col h-full relative z-10">
                        <div className="mb-8">
                            <h3 className="text-2xl font-medium text-brand-dark mb-4">Enterprise</h3>
                            <div className="h-14 mb-4">
                                <p className="text-gray-500 text-lg leading-relaxed">Comprehensive solutions for large businesses seeking full-scale growth.</p>
                            </div>
                        </div>
                        <div className="mb-8">
                            <p className="flex items-center gap-1">
                                <span className="text-4xl font-medium text-brand-dark">$139</span>
                                <span className="text-lg text-gray-500 self-end mb-1">/Month</span>
                            </p>
                        </div>

                        <Link href="#" className="flex justify-center items-center w-full py-4 rounded-lg border border-brand-dark bg-transparent text-brand-dark font-medium hover:bg-gray-50 transition-colors mb-10">
                            Upgrade Your Business
                        </Link>

                        <div className="space-y-4">
                            {['Recruitment Automation', 'HR Analytics', 'Payroll & Tax', 'Employee Engagement', 'Custom Workflows', 'Dedicated Support'].map((feature, i) => (
                                <div key={i} className="flex items-center gap-3 text-brand-dark">
                                    <div className="w-5 h-5 rounded-full border border-gray-400 flex items-center justify-center flex-shrink-0">
                                        <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 4L3.5 6.5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                                    </div>
                                    <span>{feature}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
}
