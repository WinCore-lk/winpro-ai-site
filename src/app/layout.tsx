import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  title: {
    default: "WinCore AI | Practical AI & BPO Automation · Global",
    template: "%s | WinCore AI"
  },
  description: "Practical automation and consulting for finance, BPO, and compliance. Payroll, VAT, reporting, document processing, chatbots. Up to 40–60% time savings on repetitive tasks. Based in Colombo; serving clients worldwide. Part of WinCore.lk.",
  keywords: ["AI automation", "BPO automation", "AI services", "process automation", "WinCore", "Colombo", "Sri Lanka", "global BPO"],
  authors: [{ name: "WinCore Engineering" }],
  creator: "WinCore AI",
  publisher: "WinCore AI",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://wincore-ai.site"),
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://wincore-ai.site",
    siteName: "WinCore AI",
    title: "WinCore AI | Practical AI & BPO Automation",
    description: "Practical automation and consulting for finance, BPO, and compliance. Up to 40–60% time savings on repetitive tasks. Based in Colombo, serving global clients.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "WinCore AI - Practical AI & BPO Automation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "WinCore AI | Practical AI & BPO Automation",
    description: "Practical automation and consulting for finance, BPO, and compliance. Up to 40-60% time savings.",
    images: ["/og-image.png"],
    creator: "@wincore",
  },
  category: "technology",
  icons: {
    icon: "/icon.webp",
    shortcut: "/icon.webp",
    apple: "/icon.webp",
  },
};

export const viewport = {
  themeColor: "#0a0a0f",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col bg-[#0a0a0f] text-white selection:bg-sky-500/20 selection:text-white overflow-x-hidden`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": "https://wincore-ai.site/#organization",
                  "name": "WinCore AI",
                  "url": "https://wincore-ai.site",
                  "logo": "https://wincore-ai.site/logo.webp",
                  "contactPoint": {
                    "@type": "ContactPoint",
                    "contactType": "customer service",
                    "email": "info@wincore.lk",
                    "areaServed": "Worldwide"
                  },
                  "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Colombo",
                    "addressCountry": "LK"
                  },
                  "sameAs": ["https://wincore.lk"]
                },
                {
                  "@type": "WebSite",
                  "@id": "https://wincore-ai.site/#website",
                  "url": "https://wincore-ai.site",
                  "name": "WinCore AI",
                  "publisher": { "@id": "https://wincore-ai.site/#organization" }
                }
              ]
            })
          }}
        />
        <Navbar />
        <main className="flex-grow pt-24">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
