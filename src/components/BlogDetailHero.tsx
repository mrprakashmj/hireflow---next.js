import Image from 'next/image';

export type BlogDetailHeroProps = {
    title: string;
    category: string;
    date?: string;
    subtitle: string;
    image?: string;
};

export function BlogDetailHero({ title, category, date, subtitle, image }: BlogDetailHeroProps) {
    return (
        <section className="bg-white pt-32 sm:pt-40 lg:pt-48 pb-12 sm:pb-16 relative overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 max-w-7xl">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                    {/* Left Column - Content */}
                    <div>
                        {/* Category Badge */}
                        <div className="mb-6">
                            <span className="inline-block px-4 py-2 rounded-full bg-[#218196] text-white text-xs sm:text-sm font-semibold uppercase tracking-wider">
                                {category}
                            </span>
                        </div>

                        {/* Title */}
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#021A1F] mb-6 leading-tight">
                            {title}
                        </h1>

                        {/* Subtitle */}
                        <p className="text-lg sm:text-xl text-[#5B6A6D] mb-6 leading-relaxed">
                            {subtitle}
                        </p>

                        {/* Date */}
                        {date && (
                            <p className="text-sm text-[#5B6A6D]">
                                {date}
                            </p>
                        )}
                    </div>

                    {/* Right Column - Hero Image */}
                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                        {image && (
                            <Image
                                src={image}
                                alt={title}
                                fill
                                className="object-cover"
                                priority
                            />
                        )}
                    </div>
                </div>

            </div>
        </section>
    );
}
