import { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Us | Winpro AI",
    description: "Learn more about the team, mission, and vision driving AI adoption at Winpro AI.",
};

export default function AboutPage() {
    return (
        <div className="flex flex-col w-full min-h-screen bg-black py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
            <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-blue-900/10 to-transparent pointer-events-none" />

            <div className="max-w-5xl mx-auto space-y-20 relative z-10 w-full">
                <section className="space-y-8">
                    <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-white">About Winpro AI</h1>
                    <p className="text-2xl text-gray-400 leading-relaxed font-light">
                        We are a highly specialized group of engineers, researchers, and strategists committed to democratizing enterprise-grade artificial intelligence.
                    </p>
                </section>

                <section className="grid grid-cols-1 md:grid-cols-2 gap-16">
                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold text-white mb-4">Our Mission</h2>
                        <p className="text-gray-400 leading-relaxed text-lg">
                            To drastically reduce operational friction by enabling intelligent automation. We believe that by removing the burden of repetitive tasks, humans can focus on highly creative, strategic, and deeply engaging work.
                        </p>
                        <p className="text-gray-400 leading-relaxed text-lg">
                            From our founding, we have partnered with businesses of all scales—from nimble startups to Fortune 500 giants—to uncover hidden efficiencies and propel their growth via data-driven intelligence.
                        </p>
                    </div>
                    <div className="rounded-3xl overflow-hidden shadow-2xl shadow-blue-900/20 border border-white/10 h-full min-h-[300px]"
                        style={{
                            backgroundImage: `url("https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2670&ixlib=rb-4.0.3")`,
                            backgroundSize: "cover",
                            backgroundPosition: "center"
                        }}
                    />
                </section>

                <section className="py-12 border-t border-white/10">
                    <h2 className="text-3xl font-bold text-white mb-10 text-center">Core Values</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="p-8 bg-white/5 rounded-2xl border border-white/10">
                            <h3 className="text-xl font-semibold text-white mb-3">Innovation at Depth</h3>
                            <p className="text-gray-400">We do not accept superficial solutions. We solve the deepest technical challenges facing modern companies.</p>
                        </div>
                        <div className="p-8 bg-white/5 rounded-2xl border border-white/10">
                            <h3 className="text-xl font-semibold text-white mb-3">Radical Transparency</h3>
                            <p className="text-gray-400">Clear communication, open documentation, and no black box solutions. We empower your team to understand your own tech.</p>
                        </div>
                        <div className="p-8 bg-white/5 rounded-2xl border border-white/10">
                            <h3 className="text-xl font-semibold text-white mb-3">Scalable Impact</h3>
                            <p className="text-gray-400">Architectures built for tomorrow. Every line of code works toward a highly robust, secure, and scalable future.</p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
