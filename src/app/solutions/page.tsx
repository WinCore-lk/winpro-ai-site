import { Metadata } from "next";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
    title: "Solutions | Winpro AI",
    description: "Industry-specific AI solutions tailored for healthcare, finance, retail, and manufacturing.",
};

const solutions = [
    {
        industry: "Financial Services",
        description: "Harness predictive models to detect fraud, automate risk assessment, and offer hyper-personalized banking experiences to modern consumers.",
        imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=2670&ixlib=rb-4.0.3"
    },
    {
        industry: "Healthcare & Life Sciences",
        description: "Accelerate patient diagnosis through advanced computer vision, unstructured data analysis, and predictive healthcare outcomes.",
        imageUrl: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=2670&ixlib=rb-4.0.3"
    },
    {
        industry: "Retail & E-Commerce",
        description: "Deploy generative AI recommendation engines, dynamic pricing algorithms, and intelligent supply chain optimization tools.",
        imageUrl: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=2574&ixlib=rb-4.0.3"
    },
    {
        industry: "Manufacturing",
        description: "Implement predictive maintenance algorithms to minimize downtime, maximize efficiency, and automate quality control using AI vision.",
        imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=2670&ixlib=rb-4.0.3"
    }
];

export default function SolutionsPage() {
    return (
        <div className="flex flex-col w-full min-h-screen bg-black py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto space-y-16 w-full">
                <div className="text-center max-w-4xl mx-auto">
                    <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-6">Industry Solutions</h1>
                    <p className="text-xl text-gray-400">
                        We adapt cutting-edge AI architectures to meet the specific demands of your industry, driving competitive edge and operational excellence.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-16">
                    {solutions.map((solution, index) => (
                        <Card key={index} className="bg-white/5 border-white/10 overflow-hidden group">
                            <div
                                className="h-64 w-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                                style={{ backgroundImage: `url(${solution.imageUrl})` }}
                            />
                            <CardContent className="p-8 relative bg-black/80 backdrop-blur-sm -mt-10 mx-4 rounded-xl border border-white/10 mb-4 transition-colors group-hover:border-blue-500/50">
                                <h3 className="text-2xl font-semibold text-white mb-3">{solution.industry}</h3>
                                <p className="text-gray-400 leading-relaxed">{solution.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
}
