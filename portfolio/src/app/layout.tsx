import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Huma Mohsin | AI-Assisted Full-Stack Developer",
  description: "Portfolio of Huma Mohsin - Junior Frontend/Full-Stack Developer skilled in building modern, responsive, and AI-powered web applications using Next.js, React, TypeScript, and Tailwind CSS.",
  keywords: ["Full-Stack Developer", "AI Developer", "Next.js", "React", "TypeScript", "Portfolio"],
  authors: [{ name: "Huma Mohsin" }],
  openGraph: {
    title: "Huma Mohsin | AI-Assisted Full-Stack Developer",
    description: "Building modern, AI-powered web applications",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
