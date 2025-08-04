import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { cn } from "@/lib/utils"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })

export const metadata: Metadata = {
  title: "Vybhav Achar Bhargav | Founding Engineer",
  description:
    "The personal website and resume of Vybhav Achar Bhargav, a founding engineer at Glyf, bringing AI to motion graphics.",
  keywords: [
    "Vybhav Achar Bhargav",
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
    title: "Vybhav Achar Bhargav | Founding Engineer",
    description: "The personal website and resume of Vybhav Achar Bhargav, a founding engineer at Glyf.",
    url: "https://vybhavab.com",
    siteName: "Vybhav Achar Bhargav",
    locale: "en_US",
    type: "website",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={cn("min-h-screen bg-background font-sans antialiased", inter.variable)}>{children}</body>
    </html>
  )
}
