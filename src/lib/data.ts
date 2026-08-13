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
    title: "Artificial intelligence (AI) consulting services",
    heroImage: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2000&auto=format&fit=crop",
    description: "Leading the way in generative AI with over 75K trained consultants.",
    
    // Video section (Unlock the full potential)
    unlockSection: {
      headline: "Unlock the full potential of AI",
      stats: "By 2030, AI is expected to drive up to USD 4.4 trillion in annual productivity gains. Yet, many companies struggle to achieve and scale value from AI.",
      text: "To successfully scale AI, the right strategy, data, architecture, security and governance need to be in place and aligned with business goals. We help clients do this transformation by designing, building and scaling cutting-edge AI and agentic AI solutions that accelerate strategic imperatives and enable people to trust the AI models that support them. We meet you at your current state, no matter your skills or technical footprint.\n\nImprox Consulting helps you do the right AI and do AI right.",
      videoPlaceholderImage: "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=1600&auto=format&fit=crop"
    },

    // Reports Slider
    reports: [
      {
        type: "Report",
        title: "The need for an enterprise agentic platform",
        desc: "Learn why enterprises need a unified platform to orchestrate, govern and scale AI agents across business processes.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop"
      },
      {
        type: "Report",
        title: "Forrester Wave Leader 2026 AI Consulting Services",
        desc: "Learn why Forrester recognized Improx for helping organizations scale AI with strategy, engineering, and AI-powered delivery.",
        image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?q=80&w=600&auto=format&fit=crop"
      },
      {
        type: "Report",
        title: "Improx named HFS Star Performer",
        desc: "Discover why HFS recognized Improx in Agentic Services-as-Software (SaaS) in 2026.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop"
      }
    ],

    // Capabilities Grid
    capabilities: [
      {
        icon: "Network",
        title: "AI strategy and governance",
        desc: "Align business strategy with responsible AI."
      },
      {
        icon: "Database",
        title: "Data services",
        desc: "Get data ready for AI."
      },
      {
        icon: "Bot",
        title: "Agentic AI",
        desc: "Empower your business with AI-powered transformation and multi-agent integration."
      }
    ],

    // Industry Tabs
    industryTabs: [
      {
        name: "Supply chain",
        title: "AI consulting for supply chain",
        desc: "Elevate your customer experience to differentiate your organization by intelligently applying AI technology.",
        image: "https://images.unsplash.com/photo-1586528116311-ad8ed7e66364?q=80&w=1200&auto=format&fit=crop"
      },
      {
        name: "Marketing",
        title: "AI consulting for marketing",
        desc: "Hyper-personalize customer journeys and optimize ad spend through predictive modeling.",
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop"
      },
      {
        name: "Customer service",
        title: "AI consulting for customer service",
        desc: "Transform call centers into cognitive experience hubs with generative conversational agents.",
        image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=1200&auto=format&fit=crop"
      }
    ],

    // Case Studies
    caseStudies: [
      {
        client: "Nationwide",
        title: "Nationwide Building Society deploys advanced AI solutions",
        desc: "Generative AI is transforming operations within financial institutions. Learn how Nationwide tackled the significant changes this technology requires.",
        logo: "Nationwide"
      },
      {
        client: "Coca-Cola",
        title: "Coca-Cola Europacific Partners (CCEP)",
        desc: "CCEP engaged Improx Consulting as a strategic advisor to help in its procurement transformation journey.",
        logo: "Coca-Cola"
      },
      {
        client: "Virgin Money",
        title: "Virgin Money",
        desc: "Read about how Virgin Money worked with Improx to build an AI-powered banking virtual assistant to boost customer engagement.",
        logo: "Virgin Money"
      }
    ]
  },
  
  // Minimal fallback for other pages until we populate them
  "business-strategy": {
    title: "Business Strategy Consulting",
    heroImage: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2000&auto=format&fit=crop",
    description: "Redefine your competitive advantage.",
    unlockSection: {
      headline: "Strategic Architecture",
      stats: "70% of transformations fail.",
      text: "We fix that.",
      videoPlaceholderImage: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1600&auto=format&fit=crop"
    },
    reports: [],
    capabilities: [],
    industryTabs: [],
    caseStudies: []
  }
};

export const CAPABILITIES = []; // Legacy unused
export const INDUSTRIES = []; // Legacy unused
