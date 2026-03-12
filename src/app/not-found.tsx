import Link from "next/link";
import { ArrowLeft, Home } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "404 — Page Not Found | WinCore AI",
  description: "The page you're looking for doesn't exist. Head back to WinCore AI.",
};

export default function NotFound() {
  return (
    <div className="relative min-h-[80vh] flex items-center justify-center px-4">
      {/* Background glow */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50rem] h-[30rem] bg-sky-500/[0.04] blur-[120px] rounded-full" />
      </div>

      <div className="text-center max-w-lg mx-auto">
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-sky-400 mb-4">
          Error 404
        </p>
        <h1 className="text-7xl sm:text-9xl font-bold text-white/10 mb-4">404</h1>
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
          Page not found
        </h2>
        <p className="text-gray-400 mb-10 leading-relaxed">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
          Let&apos;s get you back on track.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild variant="gold" className="rounded-xl px-6 h-11 font-semibold">
            <Link href="/">
              <Home className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
          </Button>
          <Button asChild variant="outline" className="rounded-xl px-6 h-11 font-semibold border-white/10 text-gray-300 hover:text-white hover:border-white/20">
            <Link href="/contact">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Contact Us
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
