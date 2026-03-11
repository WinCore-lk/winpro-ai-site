"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Loader2, CheckCircle2 } from "lucide-react";

interface NewsletterFormProps {
    layout?: "row" | "compact";
    placeholder?: string;
    buttonText?: string;
}

export function NewsletterForm({ 
    layout = "row", 
    placeholder = "Professional email",
    buttonText
}: NewsletterFormProps) {
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [message, setMessage] = useState("");

    const handleSubscribe = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!email) return;

        setStatus("loading");
        try {
            const res = await fetch("/api/newsletter/subscribe", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email }),
            });

            const data = await res.json();

            if (!res.ok) throw new Error(data.error || "Failed to subscribe");

            setStatus("success");
            setMessage("Welcome aboard!");
            setEmail("");
            
            setTimeout(() => {
                setStatus("idle");
                setMessage("");
            }, 5000);

        } catch (err: any) {
            setStatus("error");
            setMessage(err.message || "Enter a valid email.");
            setTimeout(() => setStatus("idle"), 5000);
        }
    };

    if (layout === "compact") {
        return (
            <form onSubmit={handleSubscribe} className="space-y-3">
                <div className="flex gap-2">
                    <Input
                        type="email"
                        placeholder={placeholder}
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="bg-white/5 border-white/10 text-white placeholder-gray-500 focus-visible:ring-gold rounded-xl h-11 text-sm flex-1"
                    />
                    <Button 
                        type="submit" 
                        size="icon" 
                        disabled={status === "loading"}
                        className="h-11 w-11 rounded-xl bg-white text-black hover:bg-gray-100 flex-shrink-0"
                    >
                        {status === "loading" ? <Loader2 className="w-4 h-4 animate-spin" /> : <ArrowRight className="w-4 h-4" />}
                    </Button>
                </div>
                {status === "success" && (
                    <div className="flex items-center gap-2 text-emerald-400 text-[10px] animate-in fade-in slide-in-from-top-1 font-mono uppercase tracking-widest">
                        <CheckCircle2 size={12} />
                        <span>{message}</span>
                    </div>
                )}
                {status === "error" && (
                    <div className="text-red-400 text-[10px] animate-in fade-in slide-in-from-top-1 font-mono uppercase tracking-widest">
                        {message}
                    </div>
                )}
            </form>
        );
    }

    return (
        <div className="w-full">
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 w-full">
                <input 
                    type="email" 
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={placeholder} 
                    className="bg-white/5 border border-white/10 text-white rounded-xl px-5 h-14 w-full sm:flex-1 focus:outline-none focus:ring-2 focus:ring-sky-500/20 transition-all"
                />
                <Button 
                    type="submit"
                    disabled={status === "loading"}
                    variant="gold"
                    className="h-14 rounded-xl px-8 font-bold min-w-[140px]"
                >
                    {status === "loading" ? <Loader2 className="w-5 h-5 animate-spin" /> : (buttonText || "Subscribe")}
                </Button>
            </form>
            <div className="h-6 mt-2">
                {status === "success" && (
                    <div className="flex items-center gap-2 text-emerald-400 text-xs animate-in fade-in slide-in-from-top-1 font-medium">
                        <CheckCircle2 size={14} />
                        <span>{message}</span>
                    </div>
                )}
                {status === "error" && (
                    <div className="text-red-400 text-xs animate-in fade-in slide-in-from-top-1 font-medium">
                        {message}
                    </div>
                )}
            </div>
        </div>
    );
}
