import Image from 'next/image';

export function AboutHero() {
    return (
        <section className="bg-[#FFF2EB] pt-16 sm:pt-24 md:pt-32 lg:pt-48 pb-12 sm:pb-16 md:pb-20 lg:pb-32 relative overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 text-center">

                {/* Badge */}
                <div className="inline-flex items-center gap-2 mb-6 sm:mb-8 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full">
                    <Image src="/images/bullet.svg" alt="" width={15} height={15} className="w-[15px] h-[15px]" />
                    <span className="text-[#085263] font-medium uppercase tracking-wider text-xs sm:text-sm">About Us</span>
                </div>

                {/* Headline */}
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-7xl font-bold text-brand-dark mb-8 sm:mb-12 lg:mb-16 max-w-5xl mx-auto leading-[1.1]">
                    Driving Business Growth Through Innovation
                </h1>

                {/* Main Image Container */}
                <div className="relative max-w-6xl mx-auto">
                    <div className="relative rounded-lg sm:rounded-xl lg:rounded-2xl overflow-hidden aspect-[16/9] lg:aspect-[2/1] shadow-2xl">
                        <Image
                            src="/images/abouthero.png"
                            alt="Team collaboration"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>

                    {/* Floating Experience Card */}
                    <div className="absolute bottom-3 sm:bottom-6 right-3 sm:right-8 bg-white p-3 sm:p-4 lg:p-6 rounded-lg sm:rounded-xl shadow-lg animate-fade-in-up max-w-xs text-left">
                        <div className="flex items-center gap-2 sm:gap-4">
                            <span className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-blue">10+</span>
                            <p className="text-gray-500 font-medium leading-tight text-xs sm:text-sm">Years of<br />Experience</p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
