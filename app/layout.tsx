import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

const url = process.env.NODE_ENV === "development" ? new URL("localhost:3000") : new URL("https://www.vybhavab.com");
export const metadata: Metadata = {
  metadataBase: url,
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
  openGraph: {
    url: url,
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vybhav Achar Bhargav | Founding Engineer",
    description: "The personal website and resume of Vybhav Achar Bhargav, a founding engineer at Glyf.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <script 
       defer 
       src="https://assets.onedollarstats.com/stonks.js"
      ></script>
      <body
        className={cn(
          "bg-background font-sans antialiased flex flex-col justify-between p-4 md:p-8 min-h-screen",
          inter.variable,
        )}
      >
        {children}
        <div className="w-full text-center text-xs text-muted">
          Copyright ©{new Date().getFullYear()} vybhavab. All rights reserved.
        </div>
      </body>
    </html>
  );
}
