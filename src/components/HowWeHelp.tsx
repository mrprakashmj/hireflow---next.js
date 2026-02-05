export type HowWeHelpProps = {
    subtitle?: string;
    sectionTitle?: string;
    cards?: Array<{
        icon: string;
        title: string;
        description: string;
        bgColor: string;
    }>;
};

export function HowWeHelp({
    subtitle = "What we do",
    sectionTitle = "Driving Business Growth Without Limits",
    cards = [
        {
            icon: "/images/help-icon-01.svg",
            title: "Streamlined Hiring",
            description: "Find, hire, and onboard top talent quickly with seamless automation, performance and efficiency.",
            bgColor: "#E1F7FC"
        },
        {
            icon: "/images/help-icon-02.svg",
            title: "Effortless Payroll",
            description: "Automate payroll processing, ensure accuracy, and simplify compliance seamlessly with ease.",
            bgColor: "#FFF2EB"
        },
        {
            icon: "/images/help-icon-03.svg",
            title: "Smart Insights",
            description: "Gain real-time workforce analytics to make better, data-driven business decisions fast.",
            bgColor: "#F1F6F6"
        }
    ]
}: HowWeHelpProps) {
    return (
        <section className="py-20 lg:py-32 bg-white overflow-hidden">
            <div className="help-area">
                <div className="help-sticky-wrap">
                    <div className="container mx-auto px-4 max-w-7xl">
                        {/* Section Title */}
                        <div className="section-title-area text-center mb-16 lg:mb-24">
                            <div className="title-scroll mb-4 flex justify-center">
                                <div className="section-subtitle-wrap flex items-center gap-2">
                                    <div className="section-subtitle-icon-wrap">
                                        <img
                                            src="/images/bullet.svg"
                                            loading="lazy"
                                            alt="Section subtitle symbol"
                                            className="section-subtitle-icon w-5 h-5"
                                        />
                                    </div>
                                    <p className="section-subtitle text-[#218196] text-sm font-medium uppercase tracking-wider">
                                        {subtitle}
                                    </p>
                                </div>
                            </div>
                            <div className="section-title-wrap max-w-3xl mx-auto">
                                <h2 className="section-title text-[#021A1F] text-3xl sm:text-4xl lg:text-[56px] font-bold leading-[1.1] tracking-[-0.03em]">
                                    {sectionTitle}
                                </h2>
                            </div>
                        </div>

                        {/* Help Cards Grid */}
                        <div className="help-grid grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto items-stretch">
                            {cards?.map((card, index) => {
                                let cardOrderClass = "";
                                if (index === 0) cardOrderClass = "first-card";
                                else if (index === 1) cardOrderClass = "second-card";
                                else if (index === 2) cardOrderClass = "third-card";

                                return (
                                    <div
                                        key={index}
                                        className={`help-card ${cardOrderClass} p-8 lg:p-10 rounded-[32px] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg flex flex-col items-start gap-8 min-h-[320px]`}
                                        style={{ backgroundColor: card.bgColor }}
                                    >
                                        <div className="help-icon-area">
                                            <div className="help-icon-wrap w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm">
                                                {typeof card.icon === 'string' && card.icon ? (
                                                    <img
                                                        src={card.icon}
                                                        loading="lazy"
                                                        alt={card.title}
                                                        className="help-card-icon w-8 h-8"
                                                    />
                                                ) : null}
                                            </div>
                                        </div>
                                        <div className="help-content-wrap">
                                            <h3 className="regular-card-title text-[#021A1F] text-2xl font-bold mb-3 tracking-tight leading-tight">
                                                {card.title}
                                            </h3>
                                            <p className="mb-0 text-[#5B6A6D] text-base leading-relaxed font-medium">
                                                {card.description}
                                            </p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
