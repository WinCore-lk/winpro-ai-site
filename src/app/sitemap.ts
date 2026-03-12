import type { MetadataRoute } from "next";

const BASE = "https://wincore-ai.site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: BASE,                                              lastModified: new Date(), changeFrequency: "weekly",  priority: 1.0 },
    { url: `${BASE}/about`,                                   lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/services`,                                lastModified: new Date(), changeFrequency: "weekly",  priority: 0.9 },
    { url: `${BASE}/services/ai-automation`,                  lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/services/ai-chatbots`,                    lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/services/ai-consulting`,                  lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/services/data-intelligence`,              lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/services/document-processing`,            lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/case-studies`,                            lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/case-studies/invoice-automation`,         lastModified: new Date(), changeFrequency: "yearly",  priority: 0.7 },
    { url: `${BASE}/case-studies/support-ai-rag`,             lastModified: new Date(), changeFrequency: "yearly",  priority: 0.7 },
    { url: `${BASE}/case-studies/vat-compliance-monitor`,     lastModified: new Date(), changeFrequency: "yearly",  priority: 0.7 },
    { url: `${BASE}/blog`,                                    lastModified: new Date(), changeFrequency: "weekly",  priority: 0.8 },
    { url: `${BASE}/blog/how-ai-automation-reduces-operational-costs`, lastModified: new Date("2026-03-10"), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/contact`,                                 lastModified: new Date(), changeFrequency: "yearly",  priority: 0.7 },
    { url: `${BASE}/privacy`,                                 lastModified: new Date(), changeFrequency: "yearly",  priority: 0.3 },
    { url: `${BASE}/terms`,                                   lastModified: new Date(), changeFrequency: "yearly",  priority: 0.3 },
  ];
}
