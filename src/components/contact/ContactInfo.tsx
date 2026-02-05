'use client';

import { Mail, Phone, MapPin } from 'lucide-react';

export function ContactInfo() {
    return (
        <section className="pb-12 sm:pb-16 md:pb-20 lg:pb-32">
            <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 text-left">

                    {/* Email */}
                    <div className="bg-white p-4 sm:p-6 lg:p-8 rounded-lg sm:rounded-xl lg:rounded-2xl border border-[#D2D6D7] flex flex-col items-start gap-3 sm:gap-4">
                        <div className="w-10 sm:w-12 h-10 sm:h-12 flex items-center justify-center rounded-lg">
                            <Mail className="w-6 sm:w-8 h-6 sm:h-8 text-brand-cyan stroke-[1.5]" />
                        </div>
                        <div>
                            <h3 className="text-lg sm:text-xl lg:text-2xl font-medium text-[#021A1F] mb-1 sm:mb-2 tracking-tight">info@hrsync.com</h3>
                            <p className="text-[#5B6A6D] text-xs sm:text-sm lg:text-lg leading-relaxed">
                                Contact us by email for questions, support, or business inquiries today.
                            </p>
                        </div>
                    </div>

                    {/* Phone */}
                    <div className="bg-white p-4 sm:p-6 lg:p-8 rounded-lg sm:rounded-xl lg:rounded-2xl border border-[#D2D6D7] flex flex-col items-start gap-3 sm:gap-4">
                        <div className="w-10 sm:w-12 h-10 sm:h-12 flex items-center justify-center rounded-lg">
                            <Phone className="w-6 sm:w-8 h-6 sm:h-8 text-brand-cyan stroke-[1.5]" />
                        </div>
                        <div>
                            <h3 className="text-lg sm:text-xl lg:text-2xl font-medium text-[#021A1F] mb-1 sm:mb-2 tracking-tight">+44 45 7250 8200</h3>
                            <p className="text-[#5B6A6D] text-xs sm:text-sm lg:text-lg leading-relaxed">
                                Call us directly for assistance, inquiries, or quick support anytime today.
                            </p>
                        </div>
                    </div>

                    {/* Location */}
                    <div className="bg-white p-4 sm:p-6 lg:p-8 rounded-lg sm:rounded-xl lg:rounded-2xl border border-[#D2D6D7] flex flex-col items-start gap-3 sm:gap-4">
                        <div className="w-10 sm:w-12 h-10 sm:h-12 flex items-center justify-center rounded-lg">
                            <MapPin className="w-6 sm:w-8 h-6 sm:h-8 text-brand-cyan stroke-[1.5]" />
                        </div>
                        <div>
                            <h3 className="text-lg sm:text-xl lg:text-2xl font-medium text-[#021A1F] mb-1 sm:mb-2 tracking-tight">12 Elm street, Australia</h3>
                            <p className="text-[#5B6A6D] text-xs sm:text-sm lg:text-lg leading-relaxed">
                                Visit our office for consultations, support, or to discuss your business.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
