import Image from 'next/image';
import { Instagram, Linkedin } from 'lucide-react';

export type AboutTeamProps = {
    title?: string;
    subtitle?: string;
    items?: Array<{
        name: string;
        role: string;
        image: string;
        showInsta: boolean;
        showLinkedin: boolean;
    }>;
};

export function AboutTeam({
    title = "The Creative Team\nPowering Our Success",
    subtitle = "The Crew",
    items = [
        {
            name: "John Davis",
            role: "Chief Executive Officer",
            image: "/images/John Davis.png",
            showInsta: true,
            showLinkedin: true
        },
        {
            name: "Sarah Williams",
            role: "Chief Technology Officer",
            image: "/images/Sarah Williams.png",
            showInsta: true,
            showLinkedin: false
        },
        {
            name: "Michael Thompson",
            role: "Human Resources Director",
            image: "/images/Michael Thompson.png",
            showInsta: true,
            showLinkedin: true
        },
        {
            name: "Aarav Mehta",
            role: "Client Success Manager",
            image: "/images/Aarav Mehta.png",
            showInsta: false,
            showLinkedin: true
        },
        {
            name: "Rohan Malhotra",
            role: "Business Growth Strategist",
            image: "/images/Rohan Malhotra.png",
            showInsta: true,
            showLinkedin: true
        },
        {
            name: "Liya Thomas",
            role: "Strategic Planning Advisor",
            image: "/images/Liya Thomas.png",
            showInsta: true,
            showLinkedin: false
        }
    ]
}: AboutTeamProps) {
    return (
        <section className="bg-white py-12 sm:py-20 lg:py-32">
            <div className="container mx-auto px-4 sm:px-6">

                {/* Header */}
                <div className="text-center mb-12 sm:mb-16 lg:mb-20 max-w-3xl mx-auto">
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

                {/* Team Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 lg:gap-10">
                    {items?.map((member, idx) => (
                        <div key={idx} className="bg-white rounded-2xl sm:rounded-3xl p-3 sm:p-4 shadow-sm border border-gray-100 group cursor-pointer hover:shadow-xl transition-all duration-300">
                            <div className="relative rounded-lg sm:rounded-2xl overflow-hidden aspect-square mb-3 sm:mb-6 bg-gray-50">
                                {typeof member.image === 'string' && member.image ? (
                                    <Image
                                        src={member.image}
                                        alt={member.name}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                ) : null}
                            </div>
                            <div className="flex items-end justify-between px-1 sm:px-2 pb-1 sm:pb-2">
                                <div>
                                    <h3 className="text-base sm:text-lg lg:text-xl font-bold text-brand-dark mb-0.5 sm:mb-1">{member.name}</h3>
                                    <p className="text-gray-500 font-medium text-xs sm:text-sm">{member.role}</p>
                                </div>
                                <div className="flex gap-2 sm:gap-3">
                                    {member.showInsta && <Instagram className="w-4 sm:w-5 h-4 sm:h-5 text-brand-dark hover:text-brand-blue cursor-pointer transition-colors" />}
                                    {member.showLinkedin && <Linkedin className="w-4 sm:w-5 h-4 sm:h-5 text-brand-dark hover:text-brand-blue cursor-pointer transition-colors" />}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}

