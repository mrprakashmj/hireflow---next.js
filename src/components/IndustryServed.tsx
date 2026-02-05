'use client';

export type IndustryServedProps = {
    title?: string;
    subtitle?: string;
    items?: Array<{
        image: string;
        mobileImage?: string;
        icon: string;
        title: string;
        description: string;
    }>;
};

export function IndustryServed({
    title = "Who Thrives With Our HRM Platform?",
    subtitle = "Sectors Covered",
    items = [
        {
            image: "/images/industry-img-02.jpg",
            icon: "/images/industry-icon-02.svg",
            title: "Tech Companies",
            description: "Simplify scheduling, compliance, and HR processes for seamless HR workforce management."
        },
        {
            image: "/images/industry-img-03.jpg",
            icon: "/images/industry-icon-01.svg",
            title: "SMBs",
            description: "Automate payroll, hiring, and workforce management to boost compliance efficiency and growth."
        },
        {
            image: "/images/industry-img-01.jpg",
            mobileImage: "/images/industry-mobile-img-03.jpg",
            icon: "/images/industry-icon-03.svg",
            title: "Healthcare",
            description: "Enhance productivity with HR workflows, collaboration, and performance tracking."
        }
    ]
}: IndustryServedProps) {
    return (
        <section className="regular-dark-section py-16 lg:py-24 bg-[#085263]">
            <div className="container mx-auto px-4 max-w-[1200px]">
                {/* Section Title */}
                <div className="section-title-area text-center mb-12 lg:mb-16">
                    <div className="title-scroll mb-4">
                        <div className="section-subtitle-wrap flex items-center justify-center gap-2">
                            <div className="section-subtitle-icon-wrap">
                                <img
                                    src="/images/bullet.svg"
                                    loading="lazy"
                                    alt="Section subtitle dark symbol"
                                    className="section-subtitle-icon w-5 h-5"
                                />
                            </div>
                            <p className="section-subtitle text-[#36C9EB] text-sm font-medium uppercase tracking-wider">
                                {subtitle}
                            </p>
                        </div>
                    </div>
                    <div className="section-title-wrap">
                        <h2 className="section-title text-white text-3xl sm:text-4xl lg:text-5xl font-medium leading-tight tracking-[-0.02em]">
                            {title}
                        </h2>
                    </div>
                </div>

                {/* Industry Cards */}
                <div className="industry-area space-y-6">
                    {items?.map((industry, index) => (
                        <div
                            key={index}
                            className="industry-sticky-card"
                        >
                            <div className="industry-image-area relative rounded-2xl lg:rounded-[32px] overflow-hidden aspect-[16/9] lg:aspect-[2.5/1]">
                                {/* Image Wrap */}
                                <div className="industry-image-wrap w-full h-full" data-aos="fade-up" data-aos-duration="1000" data-aos-anchor-placement="top-bottom">
                                    {industry.image && (
                                        <img
                                            src={industry.image}
                                            loading="lazy"
                                            alt={industry.title}
                                            className="industry-image w-full h-full object-cover"
                                        />
                                    )}
                                    {industry.mobileImage && (
                                        <img
                                            src={industry.mobileImage}
                                            loading="lazy"
                                            alt={`${industry.title} mobile`}
                                            style={{ opacity: 0 }}
                                            className="industry-image mobile w-full h-full object-cover"
                                        />
                                    )}
                                </div>

                                {/* Overlay Card */}
                                <div
                                    className="industry-card absolute bottom-4 right-4 lg:bottom-8 lg:right-8 bg-white rounded-xl lg:rounded-2xl p-6 lg:p-8 max-w-[320px] shadow-2xl"
                                    style={{
                                        opacity: 1,
                                        transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
                                        transformStyle: 'preserve-3d'
                                    }}
                                >
                                    <div className="industry-icon-area mb-4">
                                        <div className="industry-icon-wrap w-14 h-14 bg-[#085263] rounded-full flex items-center justify-center">
                                            {typeof industry.icon === 'string' && industry.icon ? (
                                                <img
                                                    src={industry.icon}
                                                    loading="lazy"
                                                    alt={`${industry.title} symbol`}
                                                    className="industry-icon w-7 h-7"
                                                />
                                            ) : null}
                                        </div>
                                    </div>
                                    <div className="industry-content-wrap">
                                        <h3 className="regular-card-title text-[#021A1F] text-xl lg:text-2xl font-medium mb-2">
                                            {industry.title}
                                        </h3>
                                        <p className="mb-0 text-[#5B6A6D] text-sm lg:text-base leading-relaxed">
                                            {industry.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}