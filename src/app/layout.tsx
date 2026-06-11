import type { Metadata } from "next";
import { Outfit, Space_Grotesk } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Udhaya Kumar | Senior Software Engineer & Frontend Specialist",
  description: "Portfolio of Udhaya Kumar, a Senior Software Engineer with 8+ years of experience specializing in Frontend System Design, React, Next.js, TypeScript, Node.js, Express, and GraphQL.",
  keywords: [
    "Udhaya Kumar",
    "Udhaya",
    "Udhaya Kumar Portfolio",
    "Senior Frontend Engineer",
    "Senior Software Engineer",
    "Frontend System Design",
    "React Developer",
    "Next.js Developer",
    "TypeScript Specialist",
    "Micro Frontends",
    "GraphQL",
    "Node.js & Express",
    "Portfolio"
  ],
  authors: [{ name: "Udhaya Kumar" }],
  openGraph: {
    title: "Udhaya Kumar | Senior Software Engineer & Frontend Specialist",
    description: "Senior Software Engineer with 8+ years of experience specializing in Frontend System Design, React, Next.js, TypeScript, Node.js, Express, and GraphQL.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Udhaya Kumar | Senior Software Engineer & Frontend Specialist",
    description: "Senior Software Engineer with 8+ years of experience specializing in Frontend System Design.",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${spaceGrotesk.variable} h-full scroll-smooth`}
    >
      <body className="min-h-full bg-gray-950 text-gray-100 flex flex-col font-sans radial-mesh">
        {children}
      </body>
    </html>
  );
}
