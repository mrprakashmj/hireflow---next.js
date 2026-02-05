import Link from 'next/link';

export type BlogCTAProps = {
    title?: string;
    primaryButtonText?: string;
    primaryButtonLink?: string;
    secondaryButtonText?: string;
    secondaryButtonLink?: string;
};

export function BlogCTA({
    title = "Prepared to Revolutionize Your HR processes?",
    primaryButtonText = "Get Free Consultation",
    primaryButtonLink = "/contact",
    secondaryButtonText = "Ask A Question",
    secondaryButtonLink = "/faq"
}: BlogCTAProps) {
    return (
        <section className="py-16 sm:py-20 lg:py-24 bg-[#085263]">
            <div className="container mx-auto px-4 sm:px-6 max-w-4xl text-center">

                {/* Title */}
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-8 sm:mb-10">
                    {title}
                </h2>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link
                        href={primaryButtonLink}
                        className="px-6 sm:px-8 py-3 sm:py-4 bg-[#218196] text-white rounded-lg font-semibold text-sm sm:text-base hover:bg-[#1a6a7b] transition-colors shadow-lg w-full sm:w-auto"
                    >
                        {primaryButtonText}
                    </Link>
                    <Link
                        href={secondaryButtonLink}
                        className="px-6 sm:px-8 py-3 sm:py-4 bg-white text-[#085263] rounded-lg font-semibold text-sm sm:text-base hover:bg-gray-100 transition-colors shadow-lg w-full sm:w-auto"
                    >
                        {secondaryButtonText}
                    </Link>
                </div>

            </div>
        </section>
    );
}
