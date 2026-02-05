import Image from 'next/image';

export type AboutValuesProps = {
    title?: string;
    subtitle?: string;
    items?: Array<{
        title: string;
        description: string;
    }>;
    heroImage?: string;
};

export function AboutValues({
    title = "Enhancements to\nImprove HR Efficiency",
    subtitle = "Key Ethics",
    items = [
        {
            title: "AI Analytics",
            description: "Use AI to analyze employee data for smarter workforce management decisions every day."
        },
        {
            title: "Onboarding Automation",
            description: "Streamline new hire processes with automated, personalized onboarding workflows for lasting success."
        },
        {
            title: "Feedback Loop",
            description: "Enable real-time performance feedback for continuous improvement and deeper engagement."
        }
    ],
    heroImage = "/images/HR Efficiency.png"
}: AboutValuesProps) {
    return (
        <section className="bg-white py-12 sm:py-20 lg:py-32">
            <div className="container mx-auto px-4 sm:px-6">

                {/* Header */}
                <div className="text-center mb-8 sm:mb-12 lg:mb-16 max-w-3xl mx-auto">
                    <div className="inline-flex items-center gap-2 mb-2 sm:mb-4">
                        <Image src="/images/bullet.svg" alt="" width={15} height={15} className="w-[15px] h-[15px]" />
                        <span className="text-brand-cyan font-medium uppercase tracking-wider text-xs sm:text-sm">{subtitle}</span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-brand-dark">
                        {title.split('\n').map((line, i) => (
                            <span key={i}>{line}{i === 0 && <br />}</span>
                        ))}
                    </h2>
                </div>

                <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-12 lg:gap-20">

                    {/* Image Side */}
                    <div className="flex-1 w-full h-full">
                        <div className="relative rounded-lg sm:rounded-xl lg:rounded-2xl overflow-hidden aspect-[4/3] shadow-lg">
                            {typeof heroImage === 'string' && heroImage ? (
                                <Image
                                    src={heroImage}
                                    alt={title}
                                    fill
                                    className="object-cover"
                                />
                            ) : null}
                        </div>
                    </div>

                    {/* Content Side */}
                    <div className="flex-1 w-full max-w-xl">

                        <div className="divide-y divide-gray-200">
                            {items?.map((item, idx) => (
                                <div key={idx} className="py-4 sm:py-6 lg:py-8 first:pt-0 last:pb-0">
                                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-brand-dark mb-2 sm:mb-3">{item.title}</h3>
                                    <p className="text-gray-500 text-sm sm:text-base lg:text-lg leading-relaxed">{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
}
