import Image from 'next/image';
import { ChevronRight, Users, Home, Clock, Check } from 'lucide-react';

export type ServiceListProps = {
    subtitle?: string;
    title?: string;
    card1Title?: string;
    card1Description?: string;
    card2Title?: string;
    card2Description?: string;
    card3Title?: string;
    card3Description?: string;
    card4Title?: string;
    card4Description?: string;
    card5Title?: string;
    card5Description?: string;
    card6Title?: string;
    card6Description?: string;
};

export function ServiceList({
    subtitle = "Expert Services",
    title = "Tailored Services For\nWorkforce Management",
    card1Title = "Recruitment & Onboarding",
    card1Description = "Streamline hiring processes and deliver seamless onboarding experiences effortlessly every time.",
    card2Title = "Payroll Management",
    card2Description = "Automate salary processing, tax deductions, and compliance with ease.",
    card3Title = "Attendance & Leave Management",
    card3Description = "Monitor work hours, leaves, and attendance in real-time with precision.",
    card4Title = "Performance & Appraisals",
    card4Description = "Automate appraisals, track KPIs, and provide feedback to boost.",
    card5Title = "Self-Service Portal",
    card5Description = "Empower staff with secure way to private data & leave requests.",
    card6Title = "Performance Management",
    card6Description = "Set goals, track progress, and boost employee growth effectively across all company teams."
}: ServiceListProps) {
    return (
        <section className="bg-white py-12 sm:py-20 lg:py-32">
            <div className="container mx-auto px-4 sm:px-6 max-w-[1200px]">

                {/* Header */}
                <div className="text-center mb-8 sm:mb-16 lg:mb-20 max-w-3xl mx-auto">
                    <div className="inline-flex items-center gap-2 mb-2 sm:mb-4">
                        <Image src="/images/bullet.svg" alt="" width={15} height={15} className="w-[15px] h-[15px]" />
                        <span className="text-brand-cyan font-medium uppercase tracking-wider text-xs sm:text-sm">{subtitle}</span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#021A1F]">
                        {title.split('\n').map((line, i) => (
                            <span key={i}>{line}{i === 0 && <br />}</span>
                        ))}
                    </h2>
                </div>

                {/* Two-column Staggered Grid */}
                <div className="flex flex-col lg:flex-row gap-4 sm:gap-6">

                    {/* Left Column */}
                    <div className="flex-1 flex flex-col gap-4 sm:gap-6">

                        {/* Card 1: Recruitment & Onboarding */}
                        <div className="bg-[#F1F8F9] rounded-lg sm:rounded-xl lg:rounded-[24px] p-4 sm:p-6 lg:p-8 relative">
                            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 sm:gap-0 mb-3 sm:mb-4">
                                <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-[#021A1F]">{card1Title}</h3>
                                <div className="flex items-center gap-1 text-[#085263] font-medium text-xs sm:text-sm cursor-pointer hover:underline">
                                    <span>Learn more</span>
                                    <ChevronRight className="w-3 sm:w-4 h-3 sm:h-4" />
                                </div>
                            </div>
                            <p className="text-gray-500 text-xs sm:text-sm mb-4 sm:mb-6 max-w-[280px]">{card1Description}</p>

                            {/* Bar Chart Visualization */}
                            <div className="bg-white rounded-lg sm:rounded-xl lg:rounded-2xl p-3 sm:p-4 lg:p-6 shadow-sm">
                                <div className="flex justify-between items-start mb-1.5 sm:mb-2">
                                    <p className="text-xs text-gray-400">Job applications</p>
                                    <div className="flex -space-x-2">
                                        {[1, 2, 3].map(i => (
                                            <div key={i} className="w-5 sm:w-6 h-5 sm:h-6 rounded-full bg-gray-200 border-2 border-white"></div>
                                        ))}
                                    </div>
                                </div>
                                <p className="text-xl sm:text-2xl font-bold text-[#021A1F] mb-2 sm:mb-4">10,459 <span className="text-xs text-gray-400 font-normal">+5%</span></p>
                                <div className="flex items-end gap-1.5 sm:gap-2 lg:gap-3 h-20 sm:h-24 lg:h-[100px]">
                                    <div className="flex-1 bg-[#26C6DA] rounded-t-sm h-[40%]"></div>
                                    <div className="flex-1 bg-[#FFCCBC] rounded-t-sm h-[70%]"></div>
                                    <div className="flex-1 bg-[#4DD0E1] rounded-t-sm h-[50%]"></div>
                                    <div className="flex-1 bg-[#FFAB91] rounded-t-sm h-[80%]"></div>
                                    <div className="flex-1 bg-[#26C6DA] rounded-t-sm h-[60%]"></div>
                                    <div className="flex-1 bg-[#FFCCBC] rounded-t-sm h-[55%]"></div>
                                </div>
                            </div>
                        </div>

                        {/* Card 3: Attendance & Leave Management */}
                        <div className="bg-[#F1F8F9] rounded-lg sm:rounded-xl lg:rounded-[24px] p-4 sm:p-6 lg:p-8">
                            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 sm:gap-0 mb-3 sm:mb-4">
                                <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-[#021A1F]">{card3Title}</h3>
                                <div className="flex items-center gap-1 text-[#085263] font-medium text-xs sm:text-sm cursor-pointer hover:underline">
                                    <span>Learn more</span>
                                    <ChevronRight className="w-3 sm:w-4 h-3 sm:h-4" />
                                </div>
                            </div>
                            <p className="text-gray-500 text-xs sm:text-sm mb-4 sm:mb-6 max-w-[280px]">{card3Description}</p>

                            {/* Stats List */}
                            <div className="bg-white rounded-lg sm:rounded-xl lg:rounded-2xl p-3 sm:p-4 lg:p-6 shadow-sm space-y-2 sm:space-y-3 lg:space-y-4">
                                <p className="text-xs sm:text-sm text-gray-500">8 Pay slips sent</p>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2 sm:gap-3">
                                        <div className="w-8 sm:w-10 h-8 sm:h-10 rounded-full bg-[#E1F7FC] flex items-center justify-center text-[#218196] flex-shrink-0">
                                            <Users className="w-4 sm:w-5 h-4 sm:h-5" />
                                        </div>
                                        <div>
                                            <p className="text-base sm:text-lg font-bold text-[#021A1F]">254</p>
                                            <p className="text-xs text-gray-500">Total Employees</p>
                                        </div>
                                    </div>
                                    <Check className="w-4 sm:w-5 h-4 sm:h-5 text-[#218196] flex-shrink-0" />
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2 sm:gap-3">
                                        <div className="w-8 sm:w-10 h-8 sm:h-10 rounded-full bg-[#E1F7FC] flex items-center justify-center text-[#218196] flex-shrink-0">
                                            <Home className="w-4 sm:w-5 h-4 sm:h-5" />
                                        </div>
                                        <div>
                                            <p className="text-base sm:text-lg font-bold text-[#021A1F]">20</p>
                                            <p className="text-xs text-gray-500">Working Remotely</p>
                                        </div>
                                    </div>
                                    <Check className="w-4 sm:w-5 h-4 sm:h-5 text-[#218196] flex-shrink-0" />
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2 sm:gap-3">
                                        <div className="w-8 sm:w-10 h-8 sm:h-10 rounded-full bg-[#E1F7FC] flex items-center justify-center text-[#218196] flex-shrink-0">
                                            <Clock className="w-4 sm:w-5 h-4 sm:h-5" />
                                        </div>
                                        <div>
                                            <p className="text-base sm:text-lg font-bold text-[#021A1F]">4</p>
                                            <p className="text-xs text-gray-500">Pending Task</p>
                                        </div>
                                    </div>
                                    <Check className="w-4 sm:w-5 h-4 sm:h-5 text-[#218196] flex-shrink-0" />
                                </div>
                            </div>
                        </div>

                        {/* Card 5: Self-Service Portal */}
                        <div className="bg-[#F1F8F9] rounded-lg sm:rounded-xl lg:rounded-[24px] p-4 sm:p-6 lg:p-8">
                            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 sm:gap-0 mb-3 sm:mb-4">
                                <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-[#021A1F]">{card5Title}</h3>
                                <div className="flex items-center gap-1 text-[#085263] font-medium text-xs sm:text-sm cursor-pointer hover:underline">
                                    <span>Learn more</span>
                                    <ChevronRight className="w-3 sm:w-4 h-3 sm:h-4" />
                                </div>
                            </div>
                            <p className="text-gray-500 text-xs sm:text-sm mb-4 sm:mb-6 max-w-[280px]">{card5Description}</p>

                            {/* Donut Chart */}
                            <div className="bg-white rounded-lg sm:rounded-xl lg:rounded-2xl p-3 sm:p-4 lg:p-8 shadow-sm">
                                <p className="text-base sm:text-lg font-medium text-[#021A1F] mb-0.5 sm:mb-1">Empower Employees</p>
                                <p className="text-xs sm:text-sm text-gray-500 mb-4 sm:mb-8">A user-friendly interface for employees</p>
                                <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8">
                                    {/* Concentric Chart */}
                                    <div className="relative w-32 sm:w-40 h-32 sm:h-40 flex-shrink-0">
                                        <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                                            {/* Outer Ring (40%) */}
                                            <circle cx="50" cy="50" r="46" fill="none" stroke="#E0F2F1" strokeWidth="8" />
                                            <circle cx="50" cy="50" r="46" fill="none" stroke="#218196" strokeWidth="8" strokeDasharray="289" strokeDashoffset="173" strokeLinecap="round" />

                                            {/* Middle Ring (35%) */}
                                            <circle cx="50" cy="50" r="36" fill="none" stroke="#FFF8E1" strokeWidth="8" />
                                            <circle cx="50" cy="50" r="36" fill="none" stroke="#F4C546" strokeWidth="8" strokeDasharray="226" strokeDashoffset="147" strokeLinecap="round" />

                                            {/* Inner Ring (25%) */}
                                            <circle cx="50" cy="50" r="26" fill="none" stroke="#FBE9E7" strokeWidth="8" />
                                            <circle cx="50" cy="50" r="26" fill="none" stroke="#FF9F89" strokeWidth="8" strokeDasharray="163" strokeDashoffset="122" strokeLinecap="round" />
                                        </svg>
                                        <div className="absolute inset-0 flex items-center justify-center text-lg sm:text-2xl font-bold text-[#021A1F]">100%</div>
                                    </div>

                                    {/* Legend */}
                                    <div className="space-y-3 sm:space-y-4 lg:space-y-6">
                                        <div>
                                            <div className="flex items-center gap-2 mb-0.5 sm:mb-1">
                                                <div className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-[#218196]"></div>
                                                <span className="text-[#5B6A6D] text-xs sm:text-sm font-medium">Automated Compliance Tracking</span>
                                            </div>
                                            <p className="text-lg sm:text-2xl font-bold text-[#021A1F] pl-3 sm:pl-4.5">40%</p>
                                        </div>
                                        <div>
                                            <div className="flex items-center gap-2 mb-0.5 sm:mb-1">
                                                <div className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-[#F4C546]"></div>
                                                <span className="text-[#5B6A6D] text-xs sm:text-sm font-medium">Secure Data Management</span>
                                            </div>
                                            <p className="text-lg sm:text-2xl font-bold text-[#021A1F] pl-3 sm:pl-4.5">35%</p>
                                        </div>
                                        <div>
                                            <div className="flex items-center gap-2 mb-0.5 sm:mb-1">
                                                <div className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-[#FF9F89]"></div>
                                                <span className="text-[#5B6A6D] text-xs sm:text-sm font-medium">Risk Mitigation and Policy Enforcement</span>
                                            </div>
                                            <p className="text-lg sm:text-2xl font-bold text-[#021A1F] pl-3 sm:pl-4.5">25%</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* Right Column */}
                    <div className="flex-1 flex flex-col gap-4 sm:gap-6 lg:mt-16">

                        {/* Card 2: Payroll Management */}
                        <div className="bg-[#F1F8F9] rounded-lg sm:rounded-xl lg:rounded-[24px] p-4 sm:p-6 lg:p-8">
                            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 sm:gap-0 mb-3 sm:mb-4">
                                <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-[#021A1F]">{card2Title}</h3>
                                <div className="flex items-center gap-1 text-[#085263] font-medium text-xs sm:text-sm cursor-pointer hover:underline">
                                    <span>Learn more</span>
                                    <ChevronRight className="w-3 sm:w-4 h-3 sm:h-4" />
                                </div>
                            </div>
                            <p className="text-gray-500 text-xs sm:text-sm mb-4 sm:mb-6 max-w-[280px]">{card2Description}</p>

                            {/* Pay Slips List */}
                            <div className="bg-white rounded-lg sm:rounded-xl lg:rounded-2xl p-3 sm:p-4 lg:p-6 shadow-sm space-y-2 sm:space-y-3 lg:space-y-4">
                                <p className="text-xs sm:text-sm text-gray-500">8 Pay slips sent</p>
                                {[
                                    { name: 'Alexander', date: 'Pay slip December 2024', img: '/images/user1.png' },
                                    { name: 'Emi Jackson', date: 'Pay slip December 2024', img: '/images/user2.png' },
                                    { name: 'Mitchel Stark', date: 'Pay slip December 2024', img: '/images/user3.png' }
                                ].map((user, i) => (
                                    <div key={i} className="flex items-center justify-between">
                                        <div className="flex items-center gap-2 sm:gap-3">
                                            <div className="w-8 sm:w-10 h-8 sm:h-10 rounded-full bg-gray-100 relative overflow-hidden flex-shrink-0">
                                                {typeof user.img === 'string' && user.img ? (
                                                    <Image src={user.img} alt={user.name} fill className="object-cover" />
                                                ) : null}
                                            </div>
                                            <p className="text-xs sm:text-sm text-[#021A1F]"><span className="font-medium">{user.name}</span> - {user.date}</p>
                                        </div>
                                        <Check className="w-4 sm:w-5 h-4 sm:h-5 text-[#218196] flex-shrink-0" />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Card 4: Performance & Appraisals */}
                        <div className="bg-[#F1F8F9] rounded-lg sm:rounded-xl lg:rounded-[24px] p-4 sm:p-6 lg:p-8">
                            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 sm:gap-0 mb-3 sm:mb-4">
                                <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-[#021A1F]">{card4Title}</h3>
                                <div className="flex items-center gap-1 text-[#085263] font-medium text-xs sm:text-sm cursor-pointer hover:underline">
                                    <span>Learn more</span>
                                    <ChevronRight className="w-3 sm:w-4 h-3 sm:h-4" />
                                </div>
                            </div>
                            <p className="text-gray-500 text-xs sm:text-sm mb-4 sm:mb-6 max-w-[280px]">{card4Description}</p>

                            <div className="bg-white rounded-lg sm:rounded-xl lg:rounded-2xl p-3 sm:p-4 lg:p-6 shadow-sm">
                                <p className="text-base sm:text-lg font-medium text-[#021A1F] mb-4 sm:mb-6">Data-Driven Performance Management</p>
                                <div className="relative w-full flex items-center justify-center">
                                    <svg viewBox="0 0 500 350" className="w-full h-auto max-w-sm">
                                        {/* Grid Lines */}
                                        <g stroke="#E5E7EB" strokeWidth="1" fill="none">
                                            {/* Radii */}
                                            <path d={`M250,180 L250,90`} />
                                            <path d={`M250,180 L328,135`} />
                                            <path d={`M250,180 L328,225`} />
                                            <path d={`M250,180 L250,270`} />
                                            <path d={`M250,180 L172,225`} />
                                            <path d={`M250,180 L172,135`} />

                                            {/* Concentric Polygons */}
                                            {[0.2, 0.4, 0.6, 0.8, 1].map((s, i) => (
                                                <polygon key={i} points={`
                                                    ${250},${180 - 90 * s} 
                                                    ${250 + 78 * s},${180 - 45 * s} 
                                                    ${250 + 78 * s},${180 + 45 * s} 
                                                    ${250},${180 + 90 * s} 
                                                    ${250 - 78 * s},${180 + 45 * s} 
                                                    ${250 - 78 * s},${180 - 45 * s}
                                                `} />
                                            ))}
                                        </g>

                                        {/* Axis Numbers */}
                                        <g className="text-[8px] fill-gray-400 text-center" textAnchor="middle">
                                            <text x="250" y="182">0</text>
                                            <text x="250" y="164">1</text>
                                            <text x="250" y="146">2</text>
                                            <text x="250" y="128">3</text>
                                            <text x="250" y="110">4</text>
                                            <text x="250" y="92">5</text>
                                        </g>

                                        {/* Data Polygon */}
                                        <polygon
                                            points={`
                                                ${250},${180 - 90 * 0.9} 
                                                ${250 + 78 * 0.8},${180 - 45 * 0.8} 
                                                ${250 + 78 * 0.5},${180 + 45 * 0.5} 
                                                ${250},${180 + 90 * 0.7} 
                                                ${250 - 78 * 0.6},${180 + 45 * 0.6} 
                                                ${250 - 78 * 0.84},${180 - 45 * 0.84}
                                            `}
                                            fill="rgba(33, 129, 150, 0.2)"
                                            stroke="#218196"
                                            strokeWidth="2"
                                        />

                                        {/* Labels */}
                                        <g className="text-[12px] font-medium fill-[#5B6A6D]">
                                            <text x="250" y="60" textAnchor="middle">Goal Tracking &</text>
                                            <text x="250" y="75" textAnchor="middle">Progress Reports</text>

                                            <text x="340" y="130" textAnchor="start">Development</text>
                                            <text x="340" y="145" textAnchor="start">planning</text>

                                            <text x="340" y="230" textAnchor="start">Mentorship</text>
                                            <text x="340" y="245" textAnchor="start">program</text>

                                            <text x="250" y="300" textAnchor="middle">Development</text>
                                            <text x="250" y="315" textAnchor="middle">Plans</text>

                                            <text x="160" y="235" textAnchor="end">Training</text>

                                            <text x="160" y="135" textAnchor="end">Feedback</text>
                                        </g>
                                    </svg>
                                </div>
                            </div>
                        </div>

                        {/* Card 6: Performance Management */}
                        <div className="bg-[#F1F8F9] rounded-lg sm:rounded-xl lg:rounded-[24px] p-4 sm:p-6 lg:p-8">
                            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 sm:gap-0 mb-3 sm:mb-4">
                                <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-[#021A1F]">{card6Title}</h3>
                                <div className="flex items-center gap-1 text-[#085263] font-medium text-xs sm:text-sm cursor-pointer hover:underline">
                                    <span>Learn more</span>
                                    <ChevronRight className="w-3 sm:w-4 h-3 sm:h-4" />
                                </div>
                            </div>
                            <p className="text-gray-500 text-xs sm:text-sm mb-4 sm:mb-6 max-w-[280px]">{card6Description}</p>

                            {/* Line Chart */}
                            <div className="bg-white rounded-lg sm:rounded-xl lg:rounded-2xl p-3 sm:p-4 lg:p-6 shadow-sm relative">
                                <p className="text-base sm:text-lg font-medium text-[#021A1F] mb-4 sm:mb-6">Boost Employee Productivity</p>
                                <div className="relative h-40 sm:h-48 w-full">
                                    <svg viewBox="0 0 300 150" className="w-full h-full" preserveAspectRatio="none">
                                        <defs>
                                            <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                                                <stop offset="0%" stopColor="#26C6DA" stopOpacity="0.1" />
                                                <stop offset="100%" stopColor="#26C6DA" stopOpacity="0" />
                                            </linearGradient>
                                        </defs>

                                        {/* Filled Area (Blue) */}
                                        <path
                                            d={`M0,130 C40,130 60,100 90,100 C120,100 140,120 160,80 C180,40 220,30 250,50 C270,60 280,30 300,30 L300,150 L0,150 Z`}
                                            fill="url(#chartGradient)"
                                        />

                                        {/* Before HRM Line (Gray) */}
                                        <path
                                            d={`M0,100 C50,100 70,120 100,120 C140,120 160,80 200,90 C240,100 260,120 300,120`}
                                            fill="none"
                                            stroke="#5B6A6D"
                                            strokeWidth="3"
                                            strokeLinecap="round"
                                        />

                                        {/* After HRM Line (Blue) */}
                                        <path
                                            d={`M0,130 C40,130 60,100 90,100 C120,100 140,120 160,80 C180,40 220,30 250,50 C270,60 280,30 300,30`}
                                            fill="none"
                                            stroke="#26C6DA"
                                            strokeWidth="3"
                                            strokeLinecap="round"
                                        />

                                        {/* Dots on lines near legend */}
                                        <circle cx="175" cy="50" r="4" fill="#26C6DA" stroke="white" strokeWidth="2" />
                                        <circle cx="180" cy="93" r="4" fill="#5B6A6D" stroke="white" strokeWidth="2" />
                                    </svg>

                                    {/* Floating Legend Card */}
                                    <div className="absolute top-2 right-4 sm:top-4 sm:right-8 bg-white p-2 sm:p-4 rounded-lg sm:rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.1)] border border-gray-100 w-32 sm:w-36">
                                        <div className="mb-2 sm:mb-3">
                                            <div className="flex items-center gap-2 mb-0.5 sm:mb-1">
                                                <div className="w-2 h-2 rounded-full bg-[#26C6DA]"></div>
                                                <span className="text-gray-500 text-xs">After HRM</span>
                                            </div>
                                            <p className="text-lg sm:text-2xl font-bold text-[#021A1F] ml-3 sm:ml-4">75%</p>
                                        </div>
                                        <div>
                                            <div className="flex items-center gap-2 mb-0.5 sm:mb-1">
                                                <div className="w-2 h-2 rounded-full bg-[#5B6A6D]"></div>
                                                <span className="text-gray-500 text-xs">Before HRM</span>
                                            </div>
                                            <p className="text-lg sm:text-2xl font-bold text-[#021A1F] ml-3 sm:ml-4">25%</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex justify-between text-xs text-gray-400 mt-2 px-2">
                                    <span>2020</span><span>2021</span><span>2022</span><span>2023</span><span>2024</span><span>2025</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
}

{/* Card 1: Recruitment & Onboarding */ }
<div className="bg-[#F1F8F9] rounded-[24px] p-8 relative">
    <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-semibold text-[#021A1F]">Recruitment & Onboarding</h3>
        <div className="flex items-center gap-1 text-[#085263] font-medium text-sm cursor-pointer hover:underline">
            <span>Learn more</span>
            <ChevronRight className="w-4 h-4" />
        </div>
    </div>
    <p className="text-gray-500 text-sm mb-6 max-w-[280px]">Streamline hiring processes and deliver seamless onboarding experiences effortlessly every time.</p>

    {/* Bar Chart Visualization */}
    <div className="bg-white rounded-2xl p-6 shadow-sm">
        <div className="flex justify-between items-start mb-2">
            <p className="text-xs text-gray-400">Job applications</p>
            <div className="flex -space-x-2">
                {[1, 2, 3].map(i => (
                    <div key={i} className="w-6 h-6 rounded-full bg-gray-200 border-2 border-white"></div>
                ))}
            </div>
        </div>
        <p className="text-2xl font-bold text-[#021A1F] mb-4">10,459 <span className="text-xs text-gray-400 font-normal">+5%</span></p>
        <div className="flex items-end gap-3 h-[100px]">
            <div className="w-8 bg-[#26C6DA] rounded-t-sm h-[40%]"></div>
            <div className="w-8 bg-[#FFCCBC] rounded-t-sm h-[70%]"></div>
            <div className="w-8 bg-[#4DD0E1] rounded-t-sm h-[50%]"></div>
            <div className="w-8 bg-[#FFAB91] rounded-t-sm h-[80%]"></div>
            <div className="w-8 bg-[#26C6DA] rounded-t-sm h-[60%]"></div>
            <div className="w-8 bg-[#FFCCBC] rounded-t-sm h-[55%]"></div>
        </div>
    </div>
</div>

{/* Card 3: Attendance & Leave Management */ }
<div className="bg-[#F1F8F9] rounded-[24px] p-8">
    <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-semibold text-[#021A1F]">Attendance & Leave Management</h3>
        <div className="flex items-center gap-1 text-[#085263] font-medium text-sm cursor-pointer hover:underline">
            <span>Learn more</span>
            <ChevronRight className="w-4 h-4" />
        </div>
    </div>
    <p className="text-gray-500 text-sm mb-6 max-w-[280px]">Monitor work hours, leaves, and attendance in real-time with precision.</p>

    {/* Stats List */}
    <div className="bg-white rounded-2xl p-6 shadow-sm space-y-4">
        <p className="text-sm text-gray-500">8 Pay slips sent</p>
        <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#E1F7FC] flex items-center justify-center text-[#218196]">
                    <Users className="w-5 h-5" />
                </div>
                <div>
                    <p className="text-lg font-bold text-[#021A1F]">254</p>
                    <p className="text-xs text-gray-500">Total Employees</p>
                </div>
            </div>
            <Check className="w-5 h-5 text-[#218196]" />
        </div>
        <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#E1F7FC] flex items-center justify-center text-[#218196]">
                    <Home className="w-5 h-5" />
                </div>
                <div>
                    <p className="text-lg font-bold text-[#021A1F]">20</p>
                    <p className="text-xs text-gray-500">Working Remotely</p>
                </div>
            </div>
            <Check className="w-5 h-5 text-[#218196]" />
        </div>
        <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#E1F7FC] flex items-center justify-center text-[#218196]">
                    <Clock className="w-5 h-5" />
                </div>
                <div>
                    <p className="text-lg font-bold text-[#021A1F]">4</p>
                    <p className="text-xs text-gray-500">Pending Task</p>
                </div>
            </div>
            <Check className="w-5 h-5 text-[#218196]" />
        </div>
    </div>
</div>

{/* Card 5: Self-Service Portal */ }
<div className="bg-[#F1F8F9] rounded-[24px] p-8">
    <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-semibold text-[#021A1F]">Self-Service Portal</h3>
        <div className="flex items-center gap-1 text-[#085263] font-medium text-sm cursor-pointer hover:underline">
            <span>Learn more</span>
            <ChevronRight className="w-4 h-4" />
        </div>
    </div>
    <p className="text-gray-500 text-sm mb-6 max-w-[280px]">Empower staff with secure way to private data & leave requests.</p>

    {/* Donut Chart */}
    <div className="bg-white rounded-2xl p-8 shadow-sm">
        <p className="text-lg font-medium text-[#021A1F] mb-1">Empower Employees</p>
        <p className="text-sm text-gray-500 mb-8">A user-friendly interface for employees</p>
        <div className="flex items-center gap-8">
            {/* Concentric Chart */}
            <div className="relative w-40 h-40 flex-shrink-0">
                <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                    {/* Outer Ring (40%) */}
                    <circle cx="50" cy="50" r="46" fill="none" stroke="#E0F2F1" strokeWidth="8" />
                    <circle cx="50" cy="50" r="46" fill="none" stroke="#218196" strokeWidth="8" strokeDasharray="289" strokeDashoffset="173" strokeLinecap="round" /> {/* 289 * 0.6 = 173 offset (40% visible) */}

                    {/* Middle Ring (35%) */}
                    <circle cx="50" cy="50" r="36" fill="none" stroke="#FFF8E1" strokeWidth="8" />
                    <circle cx="50" cy="50" r="36" fill="none" stroke="#F4C546" strokeWidth="8" strokeDasharray="226" strokeDashoffset="147" strokeLinecap="round" /> {/* 226 * 0.65 = 147 offset (35% visible) */}

                    {/* Inner Ring (25%) */}
                    <circle cx="50" cy="50" r="26" fill="none" stroke="#FBE9E7" strokeWidth="8" />
                    <circle cx="50" cy="50" r="26" fill="none" stroke="#FF9F89" strokeWidth="8" strokeDasharray="163" strokeDashoffset="122" strokeLinecap="round" /> {/* 163 * 0.75 = 122 offset (25% visible) */}
                </svg>
                <div className="absolute inset-0 flex items-center justify-center text-2xl font-bold text-[#021A1F]">100%</div>
            </div>

            {/* Legend */}
            <div className="space-y-6">
                <div>
                    <div className="flex items-center gap-2 mb-1">
                        <div className="w-2.5 h-2.5 rounded-full bg-[#218196]"></div>
                        <span className="text-[#5B6A6D] text-sm font-medium">Automated Compliance Tracking</span>
                    </div>
                    <p className="text-2xl font-bold text-[#021A1F] pl-4.5">40%</p>
                </div>
                <div>
                    <div className="flex items-center gap-2 mb-1">
                        <div className="w-2.5 h-2.5 rounded-full bg-[#F4C546]"></div>
                        <span className="text-[#5B6A6D] text-sm font-medium">Secure Data Management</span>
                    </div>
                    <p className="text-2xl font-bold text-[#021A1F] pl-4.5">35%</p>
                </div>
                <div>
                    <div className="flex items-center gap-2 mb-1">
                        <div className="w-2.5 h-2.5 rounded-full bg-[#FF9F89]"></div>
                        <span className="text-[#5B6A6D] text-sm font-medium">Risk Mitigation and Policy Enforcement</span>
                    </div>
                    <p className="text-2xl font-bold text-[#021A1F] pl-4.5">25%</p>
                </div>
            </div>
        </div>
    </div>
</div>
{ }
