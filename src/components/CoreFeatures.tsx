import { ArrowRight, Check, Users, Home, Clock, UserMinus, ChevronRight } from 'lucide-react';
import Image from 'next/image';

export type CoreFeaturesProps = {
    headerSubtitle?: string;
    headerTitle?: string;
    card1Title?: string;
    card1Desc?: string;
    card2Title?: string;
    card2Desc?: string;
    card2Image?: string;
    card3Title?: string;
    card3Desc?: string;
    card4Title?: string;
    card4Desc?: string;
};

export function CoreFeatures({
    headerSubtitle = "EXPERT SERVICES",
    headerTitle = "Tailored Services For Workforce Management",
    card1Title = "Recruitment & Onboarding",
    card1Desc = "Streamline hiring processes and deliver seamless onboarding experiences effortlessly every time.",
    card2Title = "Performance Management",
    card2Desc = "Set goals, track progress, and boost employee growth effectively across all company teams.",
    card2Image = "/images/Performance Management.png",
    card3Title = "Payroll Management",
    card3Desc = "Automate salary processing, tax deductions, and compliance with ease.",
    card4Title = "Attendance & Leave Management",
    card4Desc = "Monitor work hours, leaves, and attendance in real-time with precision. Ensure accuracy within automated tracking and insightful reporting tools."
}: CoreFeaturesProps) {
    return (
        <section className="py-20 xl:py-[100px] bg-white flex justify-center">
            <div className="w-full max-w-[1200px] px-6 xl:px-0 flex flex-col items-center gap-[60px]">

                {/* Header */}
                <div className="flex flex-col items-center gap-4 text-center max-w-[700px]">
                    <div className="flex items-center gap-2">
                        <Image src="/images/bullet.svg" alt="" width={15} height={15} className="w-[15px] h-[15px]" />
                        <span className="text-[14px] font-medium uppercase text-[#218196] tracking-wider">{headerSubtitle}</span>
                    </div>
                    <h2 className="text-[42px] lg:text-[54px] font-medium leading-[120%] tracking-[-0.03em] text-[#021A1F]">
                        {headerTitle}
                    </h2>
                </div>

                {/* Grid Layout */}
                <div className="flex flex-col gap-6 w-full">

                    {/* Top Section */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

                        {/* Left Column Stack */}
                        <div className="flex flex-col gap-6">

                            {/* Card 1: Recruitment & Onboarding */}
                            <div className="bg-[#F1F8F9] rounded-[24px] p-8 lg:p-10 relative overflow-hidden group min-h-[380px]">
                                <div className="relative z-10">
                                    <h3 className="text-[24px] font-medium text-[#021A1F] mb-4">{card1Title}</h3>
                                    <p className="text-[#5B6A6D] text-[16px] leading-[160%] max-w-[300px] mb-8">
                                        {card1Desc}
                                    </p>
                                    <div className="flex items-center gap-2 text-[#085263] font-medium text-[15px] cursor-pointer hover:gap-3 transition-all">
                                        <span>Learn more</span>
                                        <div className="w-5 h-5 rounded-full bg-[#085263] flex items-center justify-center">
                                            <ChevronRight className="w-3 h-3 text-white" />
                                        </div>
                                    </div>
                                </div>

                                {/* Abstract Bar Chart Visualization */}
                                <div className="absolute right-[-40px] bottom-[-40px] sm:right-[-20px] sm:bottom-[-20px] bg-white p-2 sm:p-4 rounded-tl-[24px] shadow-sm w-[160px] sm:w-[240px] h-[120px] sm:h-[180px]">
                                    <div className="flex items-start justify-between mb-2 sm:mb-4">
                                        <div>
                                            <p className="text-[8px] sm:text-[10px] text-gray-400 mb-1">Job applications</p>
                                            <p className="text-sm sm:text-xl font-bold text-[#021A1F]">10,459</p>
                                        </div>
                                        <div className="flex -space-x-2">
                                            {[1, 2, 3].map(i => (
                                                <div key={i} className="w-4 sm:w-6 h-4 sm:h-6 rounded-full bg-gray-200 border-2 border-white"></div>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="flex items-end gap-2 sm:gap-3 h-[60px] sm:h-[80px]">
                                        <div className="flex-1 bg-[#26C6DA] rounded-t-sm h-[40%]"></div>
                                        <div className="flex-1 bg-[#FFCCBC] rounded-t-sm h-[70%]"></div>
                                        <div className="flex-1 bg-[#4DD0E1] rounded-t-sm h-[50%]"></div>
                                        <div className="flex-1 bg-[#FFAB91] rounded-t-sm h-[80%]"></div>
                                        <div className="flex-1 bg-[#26C6DA] rounded-t-sm h-[60%]"></div>
                                    </div>
                                </div>
                            </div>

                            {/* Card 2: Performance Management */}
                            <div className="bg-[#F2F8F8] rounded-[24px] p-8 lg:p-10 relative overflow-hidden min-h-[380px]">
                                <div className="relative z-10 max-w-[300px]">
                                    <h3 className="text-[24px] font-medium text-[#021A1F] mb-4">{card2Title}</h3>
                                    <p className="text-[#5B6A6D] text-[16px] leading-[160%] mb-8">
                                        {card2Desc}
                                    </p>
                                    <div className="flex items-center gap-2 text-[#085263] font-medium text-[15px] cursor-pointer hover:gap-3 transition-all mb-8">
                                        <span>Learn more</span>
                                        <div className="w-5 h-5 rounded-full bg-[#085263] flex items-center justify-center">
                                            <ChevronRight className="w-3 h-3 text-white" />
                                        </div>
                                    </div>
                                </div>

                                {/* Image Visualization */}
                                <div className="absolute right-0 bottom-0 top-12 w-[220px] md:w-[280px]">
                                    <div className="relative h-full w-full">
                                        {typeof card2Image === 'string' && card2Image ? (
                                            <Image
                                                src={card2Image}
                                                alt={card2Title}
                                                fill
                                                className="object-contain object-bottom"
                                            />
                                        ) : null}
                                    </div>
                                </div>
                            </div>

                        </div>

                        {/* Right Column Stack (Payroll) */}
                        <div className="bg-[#F8FAFA] rounded-[24px] p-8 lg:p-10 relative overflow-hidden h-full flex flex-col justify-between">
                            <div>
                                <div className="flex justify-between items-start mb-4">
                                    <h3 className="text-[24px] font-medium text-[#021A1F]">{card3Title}</h3>
                                    <div className="flex items-center gap-1 text-[#085263] font-medium text-[14px] cursor-pointer hover:underline">
                                        <span>Learn more</span>
                                        <ChevronRight className="w-4 h-4" />
                                    </div>
                                </div>
                                <p className="text-[#5B6A6D] text-[16px] leading-[160%] max-w-[350px] mb-10">
                                    {card3Desc}
                                </p>
                            </div>

                            {/* Pay Slips List Visualization */}
                            <div className="bg-white rounded-[20px] p-6 shadow-sm w-full">
                                <p className="text-[14px] text-gray-500 mb-4">8 Pay slips sent</p>
                                <div className="space-y-4">
                                    {[
                                        { name: 'Alexander', date: 'Pay slip December 2024', img: '/images/user1.png' },
                                        { name: 'Emi Jackson', date: 'Pay slip December 2024', img: '/images/user2.png' },
                                        { name: 'Mitchel Stark', date: 'Pay slip December 2024', img: '/images/user3.png' }
                                    ].map((user, i) => (
                                        <div key={i} className="flex items-center justify-between">
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 rounded-full bg-gray-100 relative overflow-hidden">
                                                    {typeof user.img === 'string' && user.img ? (
                                                        <Image src={user.img} alt={user.name} fill className="object-cover" />
                                                    ) : null}
                                                </div>
                                                <div>
                                                    <p className="text-[13px] font-medium text-[#021A1F]">{user.name} - {user.date}</p>
                                                    <div className="w-20 h-1.5 bg-gray-100 rounded-full mt-1"></div>
                                                </div>
                                            </div>
                                            <div className="w-6 h-6 rounded-full bg-[#E1F7FC] flex items-center justify-center">
                                                <Check className="w-3.5 h-3.5 text-[#218196]" />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* Bottom Section - Card 4: Attendance & Leave */}
                    <div className="bg-[#F8FAFA] rounded-[24px] p-8 lg:p-10 relative overflow-hidden min-h-[300px] flex flex-col lg:flex-row items-center gap-10">
                        <div className="flex-1">
                            <h3 className="text-[32px] font-medium text-[#021A1F] mb-4">{card4Title}</h3>
                            <p className="text-[#5B6A6D] text-[16px] leading-[160%] max-w-[500px] mb-8">
                                {card4Desc}
                            </p>
                            <div className="flex items-center gap-1 text-[#085263] font-medium text-[14px] cursor-pointer hover:underline text-brand-blue">
                                <span>Learn more</span>
                                <ChevronRight className="w-4 h-4" />
                            </div>
                        </div>

                        {/* Attendance Stats Grid */}
                        <div className="flex gap-4 relative flex-1 w-full max-w-[600px]">
                            {/* Main Large Stat */}
                            <div className="bg-white p-6 rounded-[20px] shadow-sm flex-1 min-w-[140px] flex flex-col justify-center gap-3">
                                <div className="w-12 h-12 rounded-full bg-[#E1F7FC] flex items-center justify-center text-[#218196]">
                                    <Users className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="text-[32px] font-bold text-[#021A1F]">254</h4>
                                    <p className="text-[14px] text-gray-500">Total Employees</p>
                                </div>
                            </div>

                            {/* Right Column Smaller Stats */}
                            <div className="flex flex-col gap-3 flex-1">
                                <div className="bg-white p-4 rounded-[16px] shadow-sm flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-full bg-[#E1F7FC] flex items-center justify-center text-[#218196]">
                                        <Home className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <p className="text-xl font-bold leading-none text-[#021A1F]">20</p>
                                        <p className="text-[11px] text-gray-500">Working Remotely</p>
                                    </div>
                                </div>
                                <div className="bg-white p-4 rounded-[16px] shadow-sm flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-full bg-[#E1F7FC] flex items-center justify-center text-[#218196]">
                                        <Clock className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <p className="text-xl font-bold leading-none text-[#021A1F]">4</p>
                                        <p className="text-[11px] text-gray-500">Pending Task</p>
                                    </div>
                                </div>
                                <div className="bg-white p-4 rounded-[16px] shadow-sm flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-full bg-[#E1F7FC] flex items-center justify-center text-[#218196]">
                                        <UserMinus className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <p className="text-xl font-bold leading-none text-[#021A1F]">10</p>
                                        <p className="text-[11px] text-gray-500">On Leave</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
