import Image from 'next/image';

export type BlogHeroProps = {
    badge?: string;
    title?: string;
    featuredBadge?: string;
    featuredTitle?: string;
    featuredDescription?: string;
    featuredImage?: string;
};

export function BlogHero({
    badge = "INSIGHTS",
    title = "Trend & Insight Shapings HR Management",
    featuredBadge = "Our Blogs",
    featuredTitle = "HRM Improves Workflow and Compliance Standards",
    featuredDescription = "Managing payroll can be complex, time-consuming, and prone to errors if not handled with precision. Our Payroll Management Services are designed",
    featuredImage = "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&h=800&fit=crop"
}: BlogHeroProps) {
    return (
        <section className="bg-[#FFF2EB] pt-16 sm:pt-24 md:pt-32 lg:pt-48 pb-12 sm:pb-16 md:pb-20 relative overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 text-center">

                {/* Badge */}
                <div className="flex items-center justify-center gap-2 mb-4 sm:mb-6">
                    <Image src="/images/bullet.svg" alt="" width={15} height={15} className="w-[15px] h-[15px]" />
                    <span className="text-[#218196] font-medium uppercase tracking-wider text-xs sm:text-sm">{badge}</span>
                </div>

                {/* Headline */}
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-[#021A1F] mb-12 sm:mb-16 lg:mb-20 max-w-5xl mx-auto leading-[1.1]">
                    {title}
                </h1>

                {/* Featured Card */}
                <div className="max-w-6xl mx-auto bg-white rounded-2xl sm:rounded-[32px] overflow-hidden shadow-2xl flex flex-col md:flex-row text-left">
                    {/* Left: Image Container */}
                    <div className="w-full md:w-[45%] lg:w-[48%] relative aspect-[4/3] md:aspect-auto min-h-[300px] md:min-h-[450px]">
                        {typeof featuredImage === 'string' && featuredImage ? (
                            <Image
                                src={featuredImage}
                                alt={featuredTitle}
                                fill
                                className="object-cover"
                                priority
                            />
                        ) : null}
                    </div>

                    {/* Right: Content Container */}
                    <div className="w-full md:w-[55%] lg:w-[52%] p-8 sm:p-12 lg:p-16 flex flex-col justify-center">
                        <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-slate-50 border border-slate-100 text-[#5B6A6D] text-xs font-medium mb-6 w-fit">
                            {featuredBadge}
                        </div>

                        <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#021A1F] mb-6 leading-tight">
                            {featuredTitle}
                        </h2>

                        <p className="text-[#5B6A6D] text-base sm:text-lg leading-relaxed mb-6 lg:mb-8">
                            {featuredDescription}
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
}
