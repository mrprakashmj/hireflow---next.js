'use client';

import Image from 'next/image';

export function ContactForm() {
    return (
        <section className="pb-12 sm:pb-16 md:pb-20">
            <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
                <div className="bg-white rounded-lg sm:rounded-2xl lg:rounded-3xl p-4 sm:p-6 lg:p-10 lg:p-12 shadow-sm border border-gray-100 flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-12 lg:gap-16">

                    {/* Left Column: Image */}
                    <div className="lg:w-1/2 relative min-h-[250px] sm:min-h-[350px] lg:min-h-full rounded-lg sm:rounded-xl lg:rounded-2xl overflow-hidden">
                        <Image
                            src="/images/Woman Using Smartphone.png"
                            alt="Contact Us"
                            fill
                            className="object-cover"
                        />
                    </div>

                    {/* Right Column: Form */}
                    <div className="lg:w-1/2">
                        <form className="space-y-4 sm:space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 lg:gap-6">
                                <div className="space-y-1.5 sm:space-y-2">
                                    <label htmlFor="firstName" className="block text-[#021A1F] text-sm sm:text-base lg:text-lg">First Name</label>
                                    <input
                                        type="text"
                                        id="firstName"
                                        placeholder="Enter first name"
                                        className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-[#D2D6D7] text-[#021A1F] text-sm sm:text-base placeholder-[#5B6A6D] focus:outline-none focus:border-brand-cyan transition-colors"
                                    />
                                </div>
                                <div className="space-y-1.5 sm:space-y-2">
                                    <label htmlFor="lastName" className="block text-[#021A1F] text-sm sm:text-base lg:text-lg">Last Name</label>
                                    <input
                                        type="text"
                                        id="lastName"
                                        placeholder="Enter last name"
                                        className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-[#D2D6D7] text-[#021A1F] text-sm sm:text-base placeholder-[#5B6A6D] focus:outline-none focus:border-brand-cyan transition-colors"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 lg:gap-6">
                                <div className="space-y-1.5 sm:space-y-2">
                                    <label htmlFor="email" className="block text-[#021A1F] text-sm sm:text-base lg:text-lg">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        placeholder="Enter your email"
                                        className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-[#D2D6D7] text-[#021A1F] text-sm sm:text-base placeholder-[#5B6A6D] focus:outline-none focus:border-brand-cyan transition-colors"
                                    />
                                </div>
                                <div className="space-y-1.5 sm:space-y-2">
                                    <label htmlFor="phone" className="block text-[#021A1F] text-sm sm:text-base lg:text-lg">Phone</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        placeholder="Enter phone number"
                                        className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-[#D2D6D7] text-[#021A1F] text-sm sm:text-base placeholder-[#5B6A6D] focus:outline-none focus:border-brand-cyan transition-colors"
                                    />
                                </div>
                            </div>

                            <div className="space-y-1.5 sm:space-y-2">
                                <label htmlFor="message" className="block text-[#021A1F] text-sm sm:text-base lg:text-lg">Message</label>
                                <textarea
                                    id="message"
                                    rows={6}
                                    placeholder="Enter message here.."
                                    className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-[#D2D6D7] text-[#021A1F] text-sm sm:text-base placeholder-[#5B6A6D] focus:outline-none focus:border-brand-cyan transition-colors resize-none"
                                ></textarea>
                            </div>

                            <button
                                type="button"
                                className="w-full bg-[#36C9EB] text-[#021A1F] font-medium text-sm sm:text-base lg:text-lg py-2.5 sm:py-3 lg:py-4 rounded-lg hover:bg-[#2dbde0] transition-colors"
                            >
                                Submit now
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
