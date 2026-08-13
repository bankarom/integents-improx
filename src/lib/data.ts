export const IBM_STYLE_CAPABILITIES = [
  {
    category: "Data & AI",
    slug: "data-and-ai",
    items: [
      { title: "Artificial Intelligence", slug: "artificial-intelligence" },
      { title: "Data transformation", slug: "data-transformation" },
      { title: "AI governance", slug: "ai-governance" },
      { title: "Predictive analytics", slug: "predictive-analytics" }
    ]
  },
  {
    category: "Business transformation",
    slug: "business-transformation",
    items: [
      { title: "Business strategy", slug: "business-strategy" },
      { title: "HR & talent transformation", slug: "hr-talent-transformation" },
      { title: "Supply chain", slug: "supply-chain" },
      { title: "Customer experience", slug: "customer-experience" },
      { title: "Sustainability", slug: "sustainability" },
      { title: "Finance consulting", slug: "finance-consulting" }
    ]
  },
  {
    category: "Business operations",
    slug: "business-operations",
    items: [
      { title: "Customer service operations", slug: "customer-service-operations" },
      { title: "HR operations", slug: "hr-operations" },
      { title: "Finance operations", slug: "finance-operations" },
      { title: "Procurement operations", slug: "procurement-operations" }
    ]
  },
  {
    category: "Hybrid cloud",
    slug: "hybrid-cloud",
    items: [
      { title: "Cloud & technology strategy", slug: "cloud-technology-strategy" },
      { title: "Application modernization", slug: "application-modernization" },
      { title: "Product engineering", slug: "product-engineering" },
      { title: "Managed cloud services", slug: "managed-cloud-services" }
    ]
  }
];

export const SUB_SERVICE_DETAILS: Record<string, any> = {
  "artificial-intelligence": {
    title: "Artificial Intelligence Services",
    heroImage: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2000&auto=format&fit=crop",
    description: "Scale secure, generative AI across your core enterprise operations to unlock unprecedented productivity and growth.",
    theDifference: [
      { title: "AI Leadership", desc: "Unlocking growth by doing AI right." },
      { title: "Consulting Advantage", desc: "First-of-its-kind AI-powered platform to supercharge delivery." },
      { title: "Enterprise Advantage", desc: "Build and operate your enterprise AI platform for scale." }
    ],
    challenges: [
      "Data silos preventing unified AI context.",
      "Lack of governance leading to shadow AI risks.",
      "Inability to scale POCs to enterprise-wide adoption."
    ],
    solutions: [
      "Enterprise AI Architecture & Foundation",
      "Generative AI Copilot Integration",
      "Agentic Workflow Automation"
    ],
    blogs: [
      { title: "Orchestrating AI at Scale", slug: "orchestrating-ai" },
      { title: "The Generative Enterprise", slug: "generative-enterprise" },
      { title: "Securing AI Workflows", slug: "securing-ai" }
    ]
  },
  "business-strategy": {
    title: "Business Strategy Consulting",
    heroImage: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2000&auto=format&fit=crop",
    description: "Redefine your competitive advantage. We partner with C-suite leaders to navigate disruption and architect resilient operating models.",
    theDifference: [
      { title: "Data-Driven Strategy", desc: "Combining market intelligence with internal analytics." },
      { title: "Agile Execution", desc: "Moving from slide decks to rapid prototyping." },
      { title: "Industry Expertise", desc: "Deep domain knowledge across 20+ sectors." }
    ],
    challenges: [
      "Rapid market disruption by digital natives.",
      "Inefficient legacy operating models.",
      "Misalignment between IT and business goals."
    ],
    solutions: [
      "Target Operating Model Design",
      "Digital-First Strategy",
      "M&A Technology Due Diligence"
    ],
    blogs: [
      { title: "The Agile Boardroom", slug: "agile-boardroom" },
      { title: "Navigating Market Disruption", slug: "market-disruption" },
      { title: "Reinventing the Operating Model", slug: "reinventing-operating-model" }
    ]
  }
};

// Keeping the older structures for fallback on other pages
export const CAPABILITIES = [
  {
    slug: "data-and-ai",
    title: "Data & AI",
    description: "Unlock new growth with generative AI and intelligent automation.",
    icon: "BrainCircuit",
    subServices: [
      { title: "Artificial Intelligence", slug: "artificial-intelligence" },
      { title: "Data transformation", slug: "data-transformation" },
      { title: "AI governance", slug: "ai-governance" }
    ],
    blogs: []
  },
  {
    slug: "business-transformation",
    title: "Business Transformation",
    description: "End-to-end business modernization.",
    icon: "Rocket",
    subServices: [
      { title: "Business strategy", slug: "business-strategy" },
      { title: "Supply chain", slug: "supply-chain" },
      { title: "Customer experience", slug: "customer-experience" }
    ],
    blogs: []
  }
];

export const INDUSTRIES = [
  {
    slug: "manufacturing",
    title: "Manufacturing",
    description: "Smart manufacturing and Industry 4.0 transformation.",
    icon: "Factory",
    heroImage: "/images/manufacturing-hero.jpg",
    challenges: ["Supply chain disruption"],
    solutions: ["Smart Factory Automation"],
    blogs: [
      { title: "The Future of Smart Manufacturing", slug: "future-of-smart-manufacturing" }
    ]
  }
];
