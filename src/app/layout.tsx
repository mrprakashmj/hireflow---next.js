import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Geist } from "next/font/google"; // Added Geist
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "HireFlow - Effortless HR Solutions",
  description: "Streamline HR, boost productivity, and simplify workforce management.",
};

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AOSProvider } from "@/components/AOSProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${jakarta.variable} ${geistSans.variable} antialiased font-sans`}
      >
        <AOSProvider>
          <Navbar />
          <main className="pt-[103px]">
            {children}
          </main>
          <Footer />
        </AOSProvider>
      </body>
    </html>
  );
}
