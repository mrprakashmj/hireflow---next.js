import { CaseStudyHero } from '@/components/CaseStudyHero';
import { CaseStudy } from '@/components/CaseStudy';
import { BlogCTA } from '@/components/BlogCTA';

export default function CaseStudyPage() {
    const caseStudyItems = [
        {
            image: "/images/case-study-thumbnail-img-01.jpg",
            title: "AI Recruitment Enhances Screening",
            description: "Leverage AI-powered recruitment to accelerate candidate screening, streamline interview scheduling, & identify top talent faster.",
            link: "/case-study/ai-recruitment",
            stats: [
                { value: "85%", text: "Automated workflows boost hiring efficiency and improve team productivity." },
                { value: "75%", text: "Faster responses and transparency boost employee satisfaction." },
                { value: "90%", text: "Streamlined onboarding enhances efficiency and fuels growth." }
            ]
        },
        {
            image: "/images/case-study-thumbnail-img-02.jpg",
            title: "Streamlined HR Operations",
            description: "Streamline HR workflows, automate tasks, & enhance efficiency to drive business growth effectively.",
            link: "/case-study/streamlined-hr",
            stats: [
                { value: "80%", text: "Enhanced teamwork with cloud tools improves communication." },
                { value: "85%", text: "Digital workspaces drive seamless collaboration and productivity." },
                { value: "90%", text: "Flexible workflows boost engagement and performance." }
            ]
        },
        {
            image: "/images/case-study-thumbnail-img-03.jpg",
            title: "Automated Accurate Payroll",
            description: "Ensure timely & precise salary payments by automating payroll processes for error-free payroll management.",
            link: "/case-study/automated-payroll",
            stats: [
                { value: "85%", text: "Data-driven insights boost productivity and performance goals." },
                { value: "90%", text: "Performance tracking boosts engagement and drives growth." },
                { value: "88%", text: "Streamlined evaluations improve motivation and accountability." }
            ]
        },
        {
            image: "/images/case-study-thumbnail-img-04.jpg",
            title: "Enabling Remote Teamwork",
            description: "Empower distributed teams with tools & workflows that enhance collaboration, accuracy, and productivity.",
            link: "/case-study/remote-teamwork",
            stats: [
                { value: "92%", text: "Advanced analytics improve staffing accuracy and resource allocation." },
                { value: "87%", text: "Predictive insights reduce business hiring gaps and demands." },
                { value: "90%", text: "Efficient workforce systems enhanced agility and growth." }
            ]
        },
        {
            image: "/images/case-study-thumbnail-img-05.jpg",
            title: "Empowering Employee Growth",
            description: "Enhance employee productivity & engagement through performance tracking, feedback, and growth initiatives.",
            link: "/case-study/employee-growth",
            stats: [
                { value: "88%", text: "Automation ensured fewer compliance issues and regulation alignment." },
                { value: "93%", text: "Centralized data tracking improved audit readiness and reduced risks." },
                { value: "90%", text: "Enhanced compliance efficiency through simplified reporting tools." }
            ]
        },
        {
            image: "/images/case-study-thumbnail-img-06.jpg",
            title: "Optimizing Workforce Planning",
            description: "Streamline workforce schedules, improve resource allocation, and boost overall team productivity efficiently.",
            link: "/case-study/workforce-planning",
            stats: [
                { value: "50%", text: "Payroll automation streamlined tasks, cutting processing time." },
                { value: "98%", text: "Ensured payroll accuracy and compliance, minimizing errors." },
                { value: "75%", text: "Accurate payroll, full streamline compliance, and reduced risks." }
            ]
        },
        {
            image: "/images/case-study-thumbnail-img-07.jpg",
            title: "Simplifying Global Compliance",
            description: "Ensure your business meets global regulations efficiently with streamlined compliance management tools.",
            link: "/case-study/global-compliance",
            stats: [
                { value: "85%", text: "Automated compliance checks across all operational regions." },
                { value: "90%", text: "Real-time monitoring of regulatory changes and updates." },
                { value: "95%", text: "Reduction in manual documentation and filing errors." }
            ]
        }
    ];

    return (
        <main>
            <CaseStudyHero
                subtitle="Client Stories"
                title="Real Success Stories from Our Clients"
                image="/images/case-study-hero.jpg"
            />
            <CaseStudy
                subtitle="Latest Case Studies"
                title="Driving success through smarter HR solutions"
                items={caseStudyItems}
            />
            <BlogCTA />
        </main>
    );
}
