import Image from 'next/image';

export interface AboutJourneyProps {
    badge?: string;
    title?: string;
    card1Number?: string;
    card1Title?: string;
    card1Description?: string;
    card2Number?: string;
    card2Title?: string;
    card2Description?: string;
    centerImage?: string;
}

export function AboutJourney({
    badge = "The Journey",
    title = "Driven by Passion, Focused on Excellence",
    card1Number = "01",
    card1Title = "Our Goals",
    card1Description = "Driving innovation, empowering people, and achieving sustainable business growth together.",
    card2Number = "02",
    card2Title = "Our Path",
    card2Description = "Guided by vision, fueled by passion, and creating impactful solutions for lasting growth.",
    centerImage = "/images/Team Collaboration.png",
}: AboutJourneyProps) {
    return (
        <section className="bg-[#085263] py-12 sm:py-20 lg:py-32 text-white">
            <div className="container mx-auto px-4 sm:px-6">

                {/* Header */}
                <div className="text-center mb-8 sm:mb-12 lg:mb-16 max-w-3xl mx-auto">
                    <div className="inline-flex items-center gap-2 mb-2 sm:mb-4">
                        <Image src="/images/bullet.svg" alt="" width={15} height={15} className="w-[15px] h-[15px]" />
                        <span className="text-brand-cyan font-medium uppercase tracking-wider text-xs sm:text-sm">{badge}</span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">{title.split(',').map((part, i) => (
                        <span key={i}>{part}{i === 0 && <br />}</span>
                    ))}</h2>
                </div>

                {/* Journey Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 max-w-[1200px] mx-auto">

                    {/* Item 1: Text Card */}
                    <div className="bg-white text-brand-dark p-6 sm:p-8 lg:p-10 rounded-lg sm:rounded-2xl flex flex-col justify-start min-h-[300px] sm:min-h-[400px]">
                        <span className="text-xl sm:text-2xl font-bold mb-6 sm:mb-12">{card1Number}</span>
                        <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-3 sm:mb-4">{card1Title}</h3>
                        <p className="text-gray-500 text-sm sm:text-base lg:text-lg leading-relaxed">
                            {card1Description}
                        </p>
                    </div>

                    {/* Center Image */}
                    <div className="relative rounded-lg sm:rounded-2xl overflow-hidden min-h-[300px] sm:min-h-[400px]">
                        {typeof centerImage === 'string' && centerImage ? (
                            <Image
                                src={centerImage}
                                alt="Team Collaboration"
                                fill
                                className="object-cover"
                            />
                        ) : null}
                    </div>

                    {/* Item 2: Text Card */}
                    <div className="bg-white text-brand-dark p-6 sm:p-8 lg:p-10 rounded-lg sm:rounded-2xl flex flex-col justify-start min-h-[300px] sm:min-h-[400px]">
                        <span className="text-xl sm:text-2xl font-bold mb-6 sm:mb-12">{card2Number}</span>
                        <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-3 sm:mb-4">{card2Title}</h3>
                        <p className="text-gray-500 text-sm sm:text-base lg:text-lg leading-relaxed">
                            {card2Description}
                        </p>
                    </div>

                </div>

            </div>
        </section>
    );
}
