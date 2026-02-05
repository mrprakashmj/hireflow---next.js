'use client';

interface LogoStripProps {
    title?: string;
}

export function LogoStrip({ title = "Backed by Global Leaders" }: LogoStripProps) {
    const logos = [
        {
            src: "/images/client-logo-01.svg",
            alt: "Client marquee badge"
        },
        {
            src: "/images/client-logo-02.svg",
            alt: "Client marquee badge"
        },
        {
            src: "/images/client-logo-03.svg",
            alt: "Client marquee badge"
        },
        {
            src: "/images/client-logo-04.svg",
            alt: "Client marquee badge"
        }
    ];

    return (
        <section className="regular-section py-16 lg:py-24 bg-white overflow-hidden">
            {/* Keyframes for marquee animation */}
            <style jsx>{`
                @keyframes marquee {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(-50%);
                    }
                }
                .animate-marquee {
                    animation: marquee 20s linear infinite;
                }
                .animate-marquee:hover {
                    animation-play-state: paused;
                }
            `}</style>

            <div className="container mx-auto px-4 max-w-[1200px]">
                <div className="client-area">
                    {/* Title */}
                    <div className="client-title-wrap text-center mb-10">
                        <h2 className="regular-card-title text-[#021A1F] text-xl lg:text-2xl font-medium">
                            {title}
                        </h2>
                    </div>

                    {/* Logo Marquee */}
                    <div className="client-wrap overflow-hidden">
                        <div className="client-logo-area flex items-center gap-12 lg:gap-20 animate-marquee" style={{ width: 'fit-content' }}>
                            {logos.map((logo, index) => (
                                <div key={index} className="client-logo-wrap flex-shrink-0">
                                    <img
                                        src={logo.src}
                                        loading="lazy"
                                        alt={logo.alt}
                                        className="client-logo h-8 lg:h-10 w-auto opacity-70 hover:opacity-100 transition-opacity"
                                    />
                                </div>
                            ))}
                            {/* Duplicate for seamless loop */}
                            {logos.map((logo, index) => (
                                <div key={`dup-${index}`} className="client-logo-wrap flex-shrink-0">
                                    <img
                                        src={logo.src}
                                        loading="lazy"
                                        alt={logo.alt}
                                        className="client-logo h-8 lg:h-10 w-auto opacity-70 hover:opacity-100 transition-opacity"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
