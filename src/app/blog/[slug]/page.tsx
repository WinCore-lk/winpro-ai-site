import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Calendar, Clock, TrendingUp, Zap, CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { notFound } from "next/navigation";

interface BlogPost {
    title: string;
    date: string;
    readTime: string;
    category: string;
    imageUrl: string;
    excerpt: string;
    content: {
        heading: string;
        body: string;
    }[];
    keyTakeaways: string[];
}

const blogPosts: Record<string, BlogPost> = {
    "how-ai-automation-reduces-operational-costs": {
        title: "How AI Automation Reduces Operational Costs",
        date: "March 10, 2026",
        readTime: "5 min read",
        category: "Efficiency",
        imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2426",
        excerpt: "Discover how modern enterprises are leveraging AI pipelines to cut manual processing costs by up to 60%. We detail the exact ROI framework used in multi-national BPO transitions.",
        content: [
            {
                heading: "The Hidden Cost of Manual Workflows",
                body: "Most businesses underestimate the true cost of manual data handling. It's not just the salary of the team member entering data — it's the compounding cost of errors, re-work, audit failures, and delayed decisions. In a typical BPO operation handling 500 invoices per week, a single data-entry error can cascade into reconciliation delays that can cost 10x the time of the original task.\n\nWhen we audit a client's workflow, we rarely find a single broken process. We find an ecosystem of workarounds — spreadsheets feeding into other spreadsheets, email chains serving as the de-facto database, and team members spending 40% of their day on tasks that a well-designed automation pipeline could handle in milliseconds."
            },
            {
                heading: "The ROI Framework We Use With Clients",
                body: "Before we build anything, we build the business case. Our ROI calculation follows three phases:\n\n**1. Baseline Measurement:** We instrument the current process to capture the actual time-per-task. This almost always reveals the process takes 2–3x longer than managers estimate.\n\n**2. Automation Potential Score (APS):** We score each sub-task on a scale of 1–10 across four dimensions — repeatability, data clarity, error sensitivity, and volume. Tasks scoring above 7 on all four dimensions are prime candidates for full automation.\n\n**3. Break-Even Analysis:** We model the implementation cost against the projected time savings. For most BPO clients, automation investments break even within 60–90 days."
            },
            {
                heading: "Real Numbers from Multi-National BPO Transitions",
                body: "From our work across global BPO clients, here are the efficiency benchmarks we consistently achieve:\n\n- **Invoice Processing:** 80–95% reduction in manual handling time. A team processing 500 invoices/day manually can drop to 2 hours of exception review per day.\n\n- **Payroll Validation:** Automated cross-checking of EPF/ETF submissions, tax calculations, and payslip generation reduces payroll cycle time from 3 days to 4 hours.\n\n- **Compliance Reporting:** Automated VAT, RAMIS, and Inland Revenue filings with a pre-submission AI review layer reduces professional accountant hours by 60–70%.\n\nThe key insight is that automation doesn't replace your team — it eliminates the low-value work so your team can focus on client advisory, exception handling, and strategic planning."
            },
            {
                heading: "Where to Start: The Intelligent Audit",
                body: "The biggest mistake companies make is trying to automate everything at once. The second biggest mistake is starting with the wrong process.\n\nWe recommend starting with a process that is: (a) high-volume and repetitive, (b) currently error-prone, and (c) well-documented enough that a new employee could learn it in a day.\n\nInvoice processing, expense categorization, and compliance deadline tracking are almost always the right entry points. They offer quick wins that build internal confidence in automation and fund the next phase of more complex implementations.\n\nIf you're unsure where to start, we offer a complimentary Automation Readiness Audit. We map your current workflows, identify your highest-ROI opportunities, and give you a prioritized implementation roadmap — no commitment required."
            }
        ],
        keyTakeaways: [
            "Manual workflows cost 2–3x more than managers estimate when you factor in errors and re-work",
            "The Automation Potential Score (APS) identifies which tasks are ready for automation",
            "Most BPO automation investments break even within 60–90 days",
            "Start with high-volume, repetitive tasks — not complex edge cases",
            "Automation frees your team to focus on advisory and strategic work",
        ]
    }
};

export function generateStaticParams() {
    return Object.keys(blogPosts).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const resolvedParams = await params;
    const post = blogPosts[resolvedParams.slug];
    if (!post) return { title: "Blog | WinCore AI" };
    return {
        title: `${post.title} | WinCore AI Blog`,
        description: post.excerpt,
        openGraph: {
            title: post.title,
            description: post.excerpt,
            type: "article",
            images: [post.imageUrl],
        },
        twitter: {
            card: "summary_large_image",
            title: post.title,
            description: post.excerpt,
            images: [post.imageUrl],
        }
    };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
    const resolvedParams = await params;
    const post = blogPosts[resolvedParams.slug];

    if (!post) notFound();

    return (
        <div className="page-root">
            <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
                <div className="absolute top-0 right-0 w-[50rem] h-[30rem] bg-sky-500/[0.04] blur-[120px] rounded-full" />
            </div>

            <section className="section-pad pt-28">
                <div className="max-w-4xl mx-auto w-full px-4 sm:px-6">
                    <Link href="/blog" className="inline-flex items-center text-gray-400 hover:text-sky-400 transition-colors text-sm font-medium mb-12">
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Back to all posts
                    </Link>

                    {/* Hero Image */}
                    <div className="relative w-full h-[22rem] md:h-[32rem] rounded-[2rem] overflow-hidden mb-12 border border-white/5 shadow-2xl">
                        <Image
                            src={post.imageUrl}
                            alt={post.title}
                            fill
                            className="object-cover"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-[#0a0a0f]/10 to-transparent" />
                        <div className="absolute bottom-8 left-8">
                            <div className="flex items-center gap-3 mb-3">
                                <span className="px-3 py-1 rounded-md bg-sky-500/20 border border-sky-500/30 text-sky-400 text-[10px] font-bold uppercase tracking-widest">
                                    {post.category}
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                        {/* Main Content */}
                        <article className="lg:col-span-8">
                            <div className="flex items-center gap-4 text-xs text-gray-500 font-mono uppercase tracking-widest mb-8">
                                <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" /> {post.date}</span>
                                <span className="opacity-30">|</span>
                                <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /> {post.readTime}</span>
                            </div>

                            <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight leading-[1.1] mb-10">
                                {post.title}
                            </h1>

                            <p className="text-xl text-gray-300 leading-relaxed mb-12 font-light border-l-2 border-sky-500/40 pl-6 italic">
                                {post.excerpt}
                            </p>

                            <div className="space-y-12">
                                {post.content.map((section, i) => (
                                    <div key={i} className="space-y-5">
                                        <div className="flex items-center gap-3">
                                            <div className="w-6 h-6 rounded-full bg-sky-500/10 border border-sky-500/20 flex items-center justify-center flex-shrink-0">
                                                <span className="text-[9px] text-sky-400 font-bold font-mono">0{i + 1}</span>
                                            </div>
                                            <h2 className="text-2xl font-bold text-white">{section.heading}</h2>
                                        </div>
                                        <div className="pl-9">
                                            {section.body.split('\n\n').map((para, j) => (
                                                <p key={j} className="text-gray-300 leading-relaxed text-lg mb-4 last:mb-0">
                                                    {para.split('**').map((seg, k) =>
                                                        k % 2 === 1
                                                            ? <strong key={k} className="text-white font-semibold">{seg}</strong>
                                                            : seg
                                                    )}
                                                </p>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* CTA inline */}
                            <div className="mt-16 p-8 rounded-3xl bg-sky-500/[0.03] border border-sky-500/10">
                                <h3 className="text-xl font-bold text-white mb-3">Ready to cut your operational costs?</h3>
                                <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                                    We offer a complimentary 30-minute Automation Readiness Audit. No commitment — just a clear picture of your highest-ROI automation opportunities.
                                </p>
                                <Button asChild variant="gold" className="rounded-xl h-12 px-6 font-bold hover:scale-[1.02] transition-all">
                                    <Link href="/contact">Book a Free Audit <ArrowRight className="w-4 h-4 ml-2" /></Link>
                                </Button>
                            </div>
                        </article>

                        {/* Sidebar */}
                        <aside className="lg:col-span-4">
                            <div className="sticky top-28 space-y-8">
                                {/* Key Takeaways */}
                                <div className="card-surface p-8 bg-white/[0.02]">
                                    <h3 className="text-sm font-bold text-white uppercase tracking-widest mb-6 flex items-center gap-2">
                                        <Zap className="w-4 h-4 text-gold" /> Key Takeaways
                                    </h3>
                                    <ul className="space-y-4">
                                        {post.keyTakeaways.map((item, i) => (
                                            <li key={i} className="flex items-start gap-3 text-gray-400 text-sm leading-relaxed">
                                                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Author Block */}
                                <div className="card-surface p-6 bg-white/[0.02]">
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="w-10 h-10 rounded-full bg-sky-500/10 border border-sky-500/20 flex items-center justify-center">
                                            <TrendingUp className="w-4 h-4 text-sky-400" />
                                        </div>
                                        <div>
                                            <div className="text-sm font-bold text-white">WinCore Engineering</div>
                                            <div className="text-xs text-gray-500">Colombo, Sri Lanka</div>
                                        </div>
                                    </div>
                                    <p className="text-gray-500 text-xs leading-relaxed">
                                        Written by our team of certified accountants and AI engineers with 10+ years in BPO and financial automation.
                                    </p>
                                </div>

                                {/* Related */}
                                <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5">
                                    <h4 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-4">Explore our services</h4>
                                    <div className="space-y-3">
                                        {[
                                            { label: "Process Automation", href: "/services/ai-automation" },
                                            { label: "AI Consulting & Audits", href: "/services/ai-consulting" },
                                            { label: "Smart Reporting", href: "/services/data-intelligence" },
                                        ].map((link) => (
                                            <Link key={link.href} href={link.href} className="flex items-center justify-between text-sm text-gray-400 hover:text-white transition-colors group">
                                                {link.label}
                                                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>
        </div>
    );
}
