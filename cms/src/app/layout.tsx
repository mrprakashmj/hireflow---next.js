import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Hire Flow CMS',
    description: 'Content Management System for Hire Flow',
};

// Use the minimal layout - Payload handles its own html/body structure
export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
