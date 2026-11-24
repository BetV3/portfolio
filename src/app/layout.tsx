import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SITE_URL, ogImages } from "@/lib/og";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Portfolio | Backend & Platform Engineer",
  description:
    "Backend/Platform engineer with strong infrastructure + networking depth, building real systems in a homelab + AWS.",
  keywords: [
    "Backend Engineer",
    "Platform Engineer",
    "DevOps",
    "Infrastructure",
    "AWS",
    "Networking",
  ],
  icons: {
    icon: "/code-solid-full.svg",
  },
  // Link previews (LinkedIn, Slack, iMessage). Pages that set their own
  // openGraph replace this object, so they must pass ogImages too.
  openGraph: {
    type: "website",
    siteName: "eramirez.dev",
    url: "/",
    title: "Elvis Ramirez | Backend & Platform Engineer",
    description:
      "Projects, incident write-ups and resume. A self-hosted fleet run like production, with every failure written up to root cause.",
    images: ogImages,
  },
  twitter: {
    card: "summary_large_image",
    title: "Elvis Ramirez | Backend & Platform Engineer",
    description:
      "Projects, incident write-ups and resume. A self-hosted fleet run like production, with every failure written up to root cause.",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-background text-foreground`}
      >
        <div className="spotlight" aria-hidden="true" />
        <div className="relative z-10 flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
