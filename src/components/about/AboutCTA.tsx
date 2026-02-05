export type AboutCTAProps = {
    title?: string;
    primaryButtonText?: string;
    secondaryButtonText?: string;
};

export function AboutCTA({
    title = "Ready to transform your HR processes?",
    primaryButtonText = "Get Free Consultation",
    secondaryButtonText = "Free Demo"
}: AboutCTAProps) {
    return (
        <section className="bg-white pb-12 sm:pb-20 lg:pb-32">
            <div className="container mx-auto px-4 sm:px-6">
                <div className="bg-[#F1F6F9] rounded-xl sm:rounded-2xl lg:rounded-3xl p-6 sm:p-10 lg:p-16 text-center border border-gray-100 shadow-sm relative overflow-hidden">
                    <div className="relative z-10 max-w-3xl mx-auto">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-brand-dark mb-6 sm:mb-10 lg:mb-12">{title}</h2>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 lg:gap-6">
                            <button className="w-full sm:w-auto px-6 sm:px-8 py-2.5 sm:py-3 lg:py-4 bg-brand-cyan hover:bg-[#1A8EA3] text-brand-dark font-bold rounded-lg transition-all duration-300 shadow-sm text-sm sm:text-base">
                                {primaryButtonText}
                            </button>
                            <button className="w-full sm:w-auto px-6 sm:px-8 py-2.5 sm:py-3 lg:py-4 bg-transparent border border-brand-dark text-brand-dark font-bold rounded-lg hover:bg-brand-dark hover:text-white transition-all duration-300 text-sm sm:text-base">
                                {secondaryButtonText}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
