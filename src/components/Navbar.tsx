'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

export function Navbar() {
    const pathname = usePathname();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    // Define which pages have dark backgrounds (need white text)
    const darkBgPages = ['/'];
    const hasDarkBackground = darkBgPages.includes(pathname);

    // Background colors matching each page's hero section
    // Home: dark teal #085263, Other pages: light peach #FFF2EB
    const navbarBgColor = hasDarkBackground ? '#085263' : '#FFF2EB';

    // Logo paths
    const logoSrc = hasDarkBackground ? '/images/icon/logo.svg' : '/images/icon/logo-dark.svg';

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > lastScrollY && currentScrollY > 100) {
                // Scrolling down - hide
                if (isVisible) setIsVisible(false);
            } else {
                // Scrolling up - show
                if (!isVisible) setIsVisible(true);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY, isVisible]);

    // Text color logic based on page background
    const textColorClass = hasDarkBackground ? 'text-white' : 'text-[#021A1F]';
    const hoverColorClass = hasDarkBackground ? 'hover:text-brand-cyan' : 'hover:text-[#085263]';
    const buttonClass = hasDarkBackground
        ? 'border-white text-white hover:bg-white hover:text-brand-dark'
        : 'border-[#021A1F] text-[#021A1F] hover:bg-[#021A1F] hover:text-white';

    return (
        <nav className="w-full fixed top-0 left-0 z-50 backdrop-blur-sm transition-transform duration-300" style={{ height: '103px', backgroundColor: navbarBgColor, transform: isVisible ? 'translateY(0)' : 'translateY(-100%)' }}>
            <div className="h-full flex items-center justify-between mx-auto" style={{ maxWidth: '1200px', paddingLeft: '1rem', paddingRight: '1rem' }}>
                {/* Logo - switches based on page background */}
                <Link href="/" className="flex items-center flex-shrink-0">
                    <img src={logoSrc} alt="HireFlow Logo" width={171} height={27} className="w-36 h-16 object-contain" />
                </Link>

                {/* Navigation Links - Hidden on mobile */}
                <div className={`hidden lg:flex items-center gap-8 sm:gap-12 transition-colors ${textColorClass}`}>
                    <Link href="/" className={`text-lg ${hoverColorClass} transition-colors`}>Home</Link>
                    <Link href="/about" className={`text-lg ${hoverColorClass} transition-colors`}>About</Link>
                    <Link href="/service" className={`text-lg ${hoverColorClass} transition-colors`}>Services</Link>

                    {/* Pages Dropdown */}
                    <div className="relative group">
                        <button className={`flex items-center gap-1 text-lg ${hoverColorClass} transition-colors bg-transparent border-none cursor-pointer p-0 font-medium`}>
                            Pages
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:rotate-180">
                                <path d="m6 9 6 6 6-6" />
                            </svg>
                        </button>

                        {/* Dropdown Menu */}
                        <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top-left z-50 py-2">
                            <div className="flex flex-col">
                                <Link href="/solution" className="px-4 py-2 text-gray-700 hover:text-brand-dark transition-colors text-sm relative group/item">
                                    Solutions
                                    <span className="absolute bottom-1 left-4 right-4 h-0.5 bg-brand-dark scale-x-0 group-hover/item:scale-x-100 transition-transform duration-300 origin-left"></span>
                                </Link>
                                <Link href="/case-study" className="px-4 py-2 text-gray-700 hover:text-brand-dark transition-colors text-sm relative group/item">
                                    Case Study
                                    <span className="absolute bottom-1 left-4 right-4 h-0.5 bg-brand-dark scale-x-0 group-hover/item:scale-x-100 transition-transform duration-300 origin-left"></span>
                                </Link>
                                <Link href="/careers" className="px-4 py-2 text-gray-700 hover:text-brand-dark transition-colors text-sm relative group/item">
                                    Careers
                                    <span className="absolute bottom-1 left-4 right-4 h-0.5 bg-brand-dark scale-x-0 group-hover/item:scale-x-100 transition-transform duration-300 origin-left"></span>
                                </Link>
                                <Link href="/faq" className="px-4 py-2 text-gray-700 hover:text-brand-dark transition-colors text-sm relative group/item">
                                    FAQ
                                    <span className="absolute bottom-1 left-4 right-4 h-0.5 bg-brand-dark scale-x-0 group-hover/item:scale-x-100 transition-transform duration-300 origin-left"></span>
                                </Link>
                                <Link href="/pricing" className="px-4 py-2 text-gray-700 hover:text-brand-dark transition-colors text-sm relative group/item">
                                    Pricing
                                    <span className="absolute bottom-1 left-4 right-4 h-0.5 bg-brand-dark scale-x-0 group-hover/item:scale-x-100 transition-transform duration-300 origin-left"></span>
                                </Link>
                                <Link href="/contact" className="px-4 py-2 text-gray-700 hover:text-brand-dark transition-colors text-sm relative group/item">
                                    Contact
                                    <span className="absolute bottom-1 left-4 right-4 h-0.5 bg-brand-dark scale-x-0 group-hover/item:scale-x-100 transition-transform duration-300 origin-left"></span>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <Link href="/blog" className={`text-lg ${hoverColorClass} transition-colors`}>Blog</Link>
                </div>

                {/* CTA Button - Hidden on mobile, visible on medium+ */}
                <Link
                    href="#"
                    className={`hidden md:inline-flex px-4 sm:px-6 py-2 sm:py-2.5 border rounded-lg  text-xs sm:text-sm font-medium transition-all duration-300 flex-shrink-0 ${buttonClass}`}
                >
                    Schedule a Call
                </Link>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    className="lg:hidden p-2 rounded-lg"
                    style={{ color: hasDarkBackground ? 'white' : '#021A1F' }}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="4" y1="6" x2="20" y2="6"></line>
                        <line x1="4" y1="12" x2="20" y2="12"></line>
                        <line x1="4" y1="18" x2="20" y2="18"></line>
                    </svg>
                </button>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="lg:hidden" style={{ backgroundColor: hasDarkBackground ? '#085263' : '#FFF2EB' }}>
                    <div className="container mx-auto px-4 sm:px-6 max-w-7xl py-4 space-y-2">
                        <Link href="/" className={`block px-4 py-2 rounded-lg text-sm font-medium ${textColorClass} ${hoverColorClass} transition-colors`} onClick={() => setMobileMenuOpen(false)}>
                            Home
                        </Link>
                        <Link href="/about" className={`block px-4 py-2 rounded-lg text-sm font-medium ${textColorClass} ${hoverColorClass} transition-colors`} onClick={() => setMobileMenuOpen(false)}>
                            About
                        </Link>
                        <Link href="/service" className={`block px-4 py-2 rounded-lg text-sm font-medium ${textColorClass} ${hoverColorClass} transition-colors`} onClick={() => setMobileMenuOpen(false)}>
                            Services
                        </Link>

                        {/* Pages Submenu */}
                        <div className="px-4 py-2">
                            <p className={`text-sm font-medium ${textColorClass} mb-2`}>Pages</p>
                            <div className="space-y-1 ml-4">
                                <Link href="/solution" className={`block px-3 py-2 rounded-lg text-sm ${hasDarkBackground ? 'text-white/80 hover:text-white' : 'text-gray-600 hover:text-brand-dark'} transition-colors`} onClick={() => setMobileMenuOpen(false)}>
                                    Solutions
                                </Link>
                                <Link href="/case-study" className={`block px-3 py-2 rounded-lg text-sm ${hasDarkBackground ? 'text-white/80 hover:text-white' : 'text-gray-600 hover:text-brand-dark'} transition-colors`} onClick={() => setMobileMenuOpen(false)}>
                                    Case Study
                                </Link>
                                <Link href="/careers" className={`block px-3 py-2 rounded-lg text-sm ${hasDarkBackground ? 'text-white/80 hover:text-white' : 'text-gray-600 hover:text-brand-dark'} transition-colors`} onClick={() => setMobileMenuOpen(false)}>
                                    Careers
                                </Link>
                                <Link href="/faq" className={`block px-3 py-2 rounded-lg text-sm ${hasDarkBackground ? 'text-white/80 hover:text-white' : 'text-gray-600 hover:text-brand-dark'} transition-colors`} onClick={() => setMobileMenuOpen(false)}>
                                    FAQ
                                </Link>
                                <Link href="/pricing" className={`block px-3 py-2 rounded-lg text-sm ${hasDarkBackground ? 'text-white/80 hover:text-white' : 'text-gray-600 hover:text-brand-dark'} transition-colors`} onClick={() => setMobileMenuOpen(false)}>
                                    Pricing
                                </Link>
                                <Link href="/contact" className={`block px-3 py-2 rounded-lg text-sm ${hasDarkBackground ? 'text-white/80 hover:text-white' : 'text-gray-600 hover:text-brand-dark'} transition-colors`} onClick={() => setMobileMenuOpen(false)}>
                                    Contact
                                </Link>
                            </div>
                        </div>

                        <Link href="/blog" className={`block px-4 py-2 rounded-lg text-sm font-medium ${textColorClass} ${hoverColorClass} transition-colors`} onClick={() => setMobileMenuOpen(false)}>
                            Blog
                        </Link>
                        <Link
                            href="#"
                            className={`block px-4 py-2 rounded-lg text-xs sm:text-sm font-medium border transition-all duration-300 ${buttonClass}`}
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Schedule
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
}
