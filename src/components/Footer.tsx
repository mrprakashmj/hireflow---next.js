import Link from 'next/link';
import Image from 'next/image';
import { Instagram, Twitter, Facebook, Linkedin, MapPin, Mail, Phone } from 'lucide-react';

export type FooterProps = {
    ctaTitle?: string;
    ctaPrimaryButtonText?: string;
    ctaPrimaryButtonLink?: string;
    ctaSecondaryButtonText?: string;
    ctaSecondaryButtonLink?: string;
    brandDescription?: string;
    exploreLinks?: Array<{ label: string; url: string }>;
    learnLinks?: Array<{ label: string; url: string }>;
    utilityLinks?: Array<{ label: string; url: string }>;
    phone?: string;
    email?: string;
    address?: string;
    copyrightText?: string;
};

export function Footer({
    ctaTitle = "Ready to transform your HR processes?",
    ctaPrimaryButtonText = "Get Free Consultation",
    ctaPrimaryButtonLink = "#",
    ctaSecondaryButtonText = "Free Demo",
    ctaSecondaryButtonLink = "#",
    brandDescription = "Your ultimate solution to streamline HR operations",
    exploreLinks = [
        { label: "Home", url: "/" },
        { label: "Services", url: "/service" },
        { label: "Case study", url: "/case-study" },
        { label: "Solutions", url: "/solution" },
        { label: "Contact", url: "/contact" },
    ],
    learnLinks = [
        { label: "About", url: "/about" },
        { label: "FAQs", url: "/faq" },
        { label: "Blogs", url: "/blog" },
        { label: "Privacy policy", url: "/privacy" },
        { label: "Terms & Conditions", url: "/terms" },
    ],
    utilityLinks = [
        { label: "Style guide", url: "#" },
        { label: "Changelog", url: "#" },
        { label: "Licenses", url: "#" },
        { label: "Protected", url: "#" },
        { label: "Not found", url: "/404" },
    ],
    phone = "+44 45 7200 8200",
    email = "info@hiresync.com",
    address = "12 Elm street, Australia WCIX OAA",
    copyrightText = "Copyright © Mintedge | Designed by Victorflow | Powered by Webflow",
}: FooterProps) {
    return (
        <footer className="bg-[#085263] text-white pt-12 sm:pt-20 pb-8 sm:pb-10">
            <div className="container mx-auto px-4 sm:px-6 max-w-7xl">

                {/* CTA Section */}
                <div className="max-w-4xl mx-auto mb-12 sm:mb-24">
                    <div className="rounded-2xl sm:rounded-3xl p-6 sm:p-12 lg:p-20 shadow-2xl border border-white/50 relative overflow-hidden text-center bg-cover bg-center" style={{backgroundImage: 'url(/images/footer%20bg%20copy.png)'}}>

                        <div className="relative z-10">
                            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-medium text-black leading-tight mb-6 sm:mb-10 tracking-tight">
                                {ctaTitle}
                            </h2>

                            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
                                <Link href={ctaPrimaryButtonLink} className="bg-[#26C6DA] text-white px-6 sm:px-8 py-3 sm:py-3.5 rounded-lg sm:rounded-xl font-medium hover:bg-[#22b8ca] transition-colors shadow-lg shadow-cyan-500/20 w-full sm:w-auto text-sm sm:text-base inline-block">
                                    {ctaPrimaryButtonText}
                                </Link>
                                <Link href={ctaSecondaryButtonLink} className="bg-white text-[#021A1F] px-6 sm:px-8 py-3 sm:py-3.5 rounded-lg sm:rounded-xl font-medium hover:bg-gray-100 transition-colors shadow-lg w-full sm:w-auto text-sm sm:text-base inline-block">
                                    {ctaSecondaryButtonText}
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 sm:gap-8 lg:gap-10 mb-12 sm:mb-20">

                    {/* Brand Column */}
                    <div className="lg:col-span-2">
                        <Link href="/" className="flex items-center gap-2 mb-4">
                            <Image
                                src="/images/Briefcase.png"
                                alt="HireFlow logo"
                                width={32}
                                height={32}
                            />
                            <span className="text-xl sm:text-2xl font-bold tracking-tight text-white">HireFlow</span>
                        </Link>
                        <p className="text-white/60 text-xs sm:text-sm leading-relaxed mb-6 sm:mb-8 max-w-xs sm:max-w-sm">
                            {brandDescription}
                        </p>
                        <div className="flex gap-2 sm:gap-3">
                            {[Instagram, Twitter, Facebook, Linkedin].map((Icon, i) => (
                                <Link key={i} href="#" className="w-7 sm:w-8 h-7 sm:h-8 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-[#26C6DA] hover:border-[#26C6DA] transition-colors">
                                    <Icon className="w-3.5 sm:w-4 h-3.5 sm:h-4" />
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Explore */}
                    <div>
                        <h4 className="font-medium text-white mb-4 sm:mb-6 text-sm sm:text-base">Explore</h4>
                        <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-[#FFFFFF]">
                            {exploreLinks.map((link, i) => (
                                <li key={i}><Link href={link.url} className="hover:text-white/80 transition-colors">{link.label}</Link></li>
                            ))}
                        </ul>
                    </div>

                    {/* Learn */}
                    <div>
                        <h4 className="font-medium text-white mb-4 sm:mb-6 text-sm sm:text-base">Learn</h4>
                        <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-[#FFFFFF]">
                            {learnLinks.map((link, i) => (
                                <li key={i}><Link href={link.url} className="hover:text-white/80 transition-colors">{link.label}</Link></li>
                            ))}
                        </ul>
                    </div>

                    {/* Utility pages */}
                    <div>
                        <h4 className="font-medium text-white mb-6">Utility pages</h4>
                        <ul className="space-y-3 text-sm text-[#FFFFFF]">
                            {utilityLinks.map((link, i) => (
                                <li key={i}><Link href={link.url} className="hover:text-white/80 transition-colors">{link.label}</Link></li>
                            ))}
                        </ul>
                    </div>

                    {/* Reach Out */}
                    <div>
                        <h4 className="font-medium text-white mb-6">Reach Out</h4>
                        <ul className="space-y-4 text-sm text-[#FFFFFF]">
                            <li className="flex gap-3">
                                <Phone className="w-4 h-4 mt-0.5 shrink-0" />
                                <a href={`tel:${phone.replace(/\s/g, '')}`} className="hover:text-[#FFFFFF] transition-colors">{phone}</a>
                            </li>
                            <li className="flex gap-3">
                                <Mail className="w-4 h-4 mt-0.5 shrink-0" />
                                <a href={`mailto:${email}`} className="hover:text-[#FFFFFF] transition-colors">{email}</a>
                            </li>
                            <li className="flex gap-3">
                                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                                <a href="#" className="hover:text-[#FFFFFF] transition-colors">{address}</a>
                            </li>
                        </ul>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="pt-8 flex flex-col md:flex-row justify-center items-center text-[#FFFFFF] text-[13px]">
                    <p>{copyrightText}</p>
                </div>

            </div>
        </footer>

    );
}

