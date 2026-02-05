import Image from 'next/image';

export type ServiceHeroProps = {
    badge?: string;
    title?: string;
    image?: string;
};

export function ServiceHero({
    badge = "Expert Service",
    title = "Improve Efficiency Through HRM System",
    image = "/images/Team meeting.png"
}: ServiceHeroProps) {
    return (
        <section className="bg-[#FFF2EB] pt-16 sm:pt-24 md:pt-32 lg:pt-48 pb-12 sm:pb-16 md:pb-20 lg:pb-32 relative overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 text-center">

                {/* Badge */}
                <div className="inline-flex items-center gap-2 mb-6 sm:mb-8 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full">
                    <Image src="/images/bullet.svg" alt="" width={15} height={15} className="w-[15px] h-[15px]" />
                    <span className="text-brand-blue font-medium uppercase tracking-wider text-xs sm:text-sm">{badge}</span>
                </div>

                {/* Headline */}
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-7xl font-bold text-[#021A1F] mb-8 sm:mb-12 lg:mb-16 max-w-4xl mx-auto leading-[1.1]">
                    {title}
                </h1>

                {/* Main Image Container */}
                <div className="relative max-w-6xl mx-auto">
                    <div className="relative rounded-lg sm:rounded-xl lg:rounded-2xl overflow-hidden aspect-[16/9] lg:aspect-[2.5/1] shadow-2xl">
                        {typeof image === 'string' && image ? (
                            <Image
                                src={image}
                                alt={title}
                                fill
                                className="object-cover"
                                priority
                            />
                        ) : null}
                    </div>
                </div>

            </div>
        </section>
    );
}
