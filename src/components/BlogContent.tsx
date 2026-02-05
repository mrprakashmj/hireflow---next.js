import Image from 'next/image';

export type BlogContentProps = {
    overview: string;
    outcomes: string;
    summary: string;
    obstacles: string[];
    contentImage?: string;
};

export function BlogContent({ overview, obstacles, outcomes, summary, contentImage }: BlogContentProps) {
    return (
        <section className="py-12 sm:py-16 lg:py-20 bg-white">
            <div className="container mx-auto px-4 sm:px-6 max-w-5xl">

                {/* Overview Section */}
                <div className="mb-12">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#021A1F] mb-6">
                        Overview
                    </h2>
                    <p className="text-base sm:text-lg text-[#5B6A6D] leading-relaxed">
                        {overview}
                    </p>
                </div>

                {/* Major Obstacles Section */}
                <div className="mb-12">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#021A1F] mb-6">
                        Major Obstacles
                    </h2>
                    <ul className="space-y-4">
                        {obstacles.map((obstacle, index) => (
                            <li key={index} className="flex items-start gap-3">
                                <span className="text-[#218196] text-xl mt-1">•</span>
                                <span className="text-base sm:text-lg text-[#5B6A6D] leading-relaxed flex-1">
                                    {obstacle}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Outcomes & Benefits Section */}
                <div className="mb-12">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#021A1F] mb-6">
                        Outcomes & Benefits
                    </h2>
                    <p className="text-base sm:text-lg text-[#5B6A6D] leading-relaxed mb-8">
                        {outcomes}
                    </p>

                    {/* Content Image */}
                    {contentImage && (
                        <div className="relative aspect-[16/9] rounded-2xl overflow-hidden shadow-lg mb-8">
                            <Image
                                src={contentImage}
                                alt="Content illustration"
                                fill
                                className="object-cover"
                            />
                        </div>
                    )}
                </div>

                {/* Organization Summary Section */}
                <div className="mb-12">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#021A1F] mb-6">
                        Organization Summary
                    </h2>
                    <p className="text-base sm:text-lg text-[#5B6A6D] leading-relaxed">
                        {summary}
                    </p>
                </div>

            </div>
        </section>
    );
}
