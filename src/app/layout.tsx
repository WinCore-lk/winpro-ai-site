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
});

export const metadata: Metadata = {
  title: "WinCore AI | Practical AI & BPO Automation · Global",
  description: "Practical automation and consulting for finance, BPO, and compliance. Payroll, VAT, reporting, document processing, chatbots. Up to 40–60% time savings on repetitive tasks. Based in Colombo; serving clients worldwide. Part of WinCore.lk.",
  keywords: ["AI automation", "BPO automation", "AI services", "process automation", "WinCore", "Colombo", "Sri Lanka", "global BPO"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col bg-[#0a0a0f] text-white selection:bg-sky-500/20 selection:text-white`}
      >
        <Navbar />
        <main className="flex-grow pt-24 pb-12">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
