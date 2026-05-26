import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/components/ThemeProvider";
import SocialStrip from "@/components/SocialStrip";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// export const metadata: Metadata = {
//   title: "Anuj Bora | Full Stack Developer",
//   description: "Anuj Bora | Full Stack Developer",

export const metadata: Metadata = {
  title: "Anuj Bora | Full Stack Developer Portfolio",
  description:
    "Portfolio of Anuj Bora, a Full Stack Developer skilled in MERN Stack, Next.js, Django, Python, TypeScript, and AI/LLM integration.",

  keywords: [
    "Anuj Bora",
    "Full Stack Developer",
    "MERN Stack Developer",
    "Next.js Developer",
    "Django Developer",
    "Python Developer",
    "AI Developer",
    "Portfolio",
  ],

  openGraph: {
    title: "Anuj Bora | Full Stack Developer",
    description:
      "Explore projects, skills, and experience of Anuj Bora.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en" suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider>
          <Navbar/>
          <SocialStrip/>
          {children}
        </ThemeProvider>
        
      </body>
    </html>
  );
}
