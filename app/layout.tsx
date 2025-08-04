import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "vybhavab (Vybhav)",
  description: "The personal website of Vybhav, a founding engineer at Glyf, bringing AI to motion graphics.",
  keywords: [
    "Vybhav Achar Bhargav",
    "Vybhav Bhargav",
    "vybhavab",
    "vybhavb",
    "Achar Bhargav",
    "Software Engineer",
    "Founding Engineer",
    "Glyf",
    "AI",
    "Motion Graphics",
    "React",
    "TypeScript",
    "Next.js",
  ],
  authors: [{ name: "Vybhav Achar Bhargav", url: "https://vybhavab.com" }],
  creator: "Vybhav Achar Bhargav",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Vybhav Achar Bhargav | Founding Engineer",
    description: "The personal website and resume of Vybhav Achar Bhargav, a founding engineer at Glyf.",
    url: "https://vybhavab.com",
    siteName: "Vybhav Achar Bhargav",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Vybhav Achar Bhargav's Personal Website",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vybhav Achar Bhargav | Founding Engineer",
    description: "The personal website and resume of Vybhav Achar Bhargav, a founding engineer at Glyf.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={cn("min-h-screen bg-background font-sans antialiased", inter.variable)}>{children}</body>
    </html>
  );
}
