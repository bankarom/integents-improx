// Helper function to generate deep, genericized page data for ANY sub-service
const generatePageData = (title: string, desc: string) => ({
  title: `${title} Consulting Services`,
  heroImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000&auto=format&fit=crop",
  description: desc,
  unlockSection: {
    headline: `Unlock the full potential of ${title}`,
    stats: `Organizations that master ${title} see a 40% increase in operational efficiency within the first 12 months.`,
    text: `To successfully scale ${title}, the right strategy, architecture, and governance need to be in place and aligned with business goals. We help clients do this transformation by designing, building and scaling cutting-edge solutions that accelerate strategic imperatives.\n\nImprox Consulting helps you execute flawlessly and scale securely.`,
    videoPlaceholderImage: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1600&auto=format&fit=crop"
  },
  reports: [
    {
      type: "Report",
      title: `The Future of ${title}`,
      desc: `Learn why enterprises need a unified approach to orchestrate, govern and scale ${title} across business processes.`,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop"
    },
    {
      type: "Analyst Recognition",
      title: `Leader in ${title} Services 2026`,
      desc: "Recognized for helping organizations scale with strategy, engineering, and execution-powered delivery.",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?q=80&w=600&auto=format&fit=crop"
    }
  ],
  capabilities: [
    {
      icon: "Network",
      title: "Strategy and Governance",
      desc: `Align business strategy with responsible ${title} execution.`
    },
    {
      icon: "Database",
      title: "Architecture & Data",
      desc: `Build the foundational architecture required to scale ${title}.`
    },
    {
      icon: "Bot",
      title: "Operational Integration",
      desc: `Empower your business with multi-layered transformation.`
    }
  ],
  industryTabs: [
    {
      name: "Financial Services",
      title: `${title} for Financial Services`,
      desc: `Elevate customer experience and regulatory compliance by intelligently applying ${title}.`,
      image: "https://images.unsplash.com/photo-1586528116311-ad8ed7e66364?q=80&w=1200&auto=format&fit=crop"
    },
    {
      name: "Healthcare",
      title: `${title} for Healthcare`,
      desc: `Optimize patient care and supply chain operations through predictive modeling.`,
      image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=1200&auto=format&fit=crop"
    },
    {
      name: "Manufacturing",
      title: `${title} for Manufacturing`,
      desc: "Transform operations into cognitive execution hubs.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop"
    }
  ],
  caseStudies: [
    {
      client: "Global Fortune 500",
      title: `Global Enterprise deploys advanced ${title} solutions`,
      desc: `Learn how this multinational corporation tackled the significant changes required to scale ${title} globally.`,
      logo: "GLOBAL CORP"
    },
    {
      client: "European Partner",
      title: `Strategic Transformation at Scale`,
      desc: `The client engaged Improx Consulting as a strategic advisor to help in its ${title} transformation journey.`,
      logo: "EURO PARTNERS"
    }
  ]
});

// The massive, tier-1 5-pillar structure
export const TIER_1_CAPABILITIES = [
  {
    category: "Strategy & Consulting",
    slug: "strategy-consulting",
    items: [
      { title: "Corporate Strategy", slug: "corporate-strategy" },
      { title: "Mergers & Acquisitions", slug: "mergers-acquisitions" },
      { title: "CFO & Enterprise Value", slug: "cfo-enterprise-value" },
      { title: "Sustainability Strategy", slug: "sustainability-strategy" },
      { title: "Operating Model Design", slug: "operating-model" },
      { title: "Innovation Strategy", slug: "innovation-strategy" }
    ]
  },
  {
    category: "Data & AI",
    slug: "data-and-ai",
    items: [
      { title: "Artificial Intelligence", slug: "artificial-intelligence" },
      { title: "Data Architecture", slug: "data-architecture" },
      { title: "Applied Intelligence", slug: "applied-intelligence" },
      { title: "Generative AI", slug: "generative-ai" },
      { title: "Machine Learning", slug: "machine-learning" },
      { title: "AI Governance", slug: "ai-governance" }
    ]
  },
  {
    category: "Operations",
    slug: "operations",
    items: [
      { title: "Supply Chain & Operations", slug: "supply-chain" },
      { title: "Intelligent Finance", slug: "intelligent-finance" },
      { title: "HR & Talent Operations", slug: "hr-operations" },
      { title: "Procurement & Sourcing", slug: "procurement" },
      { title: "Customer Sales & Service", slug: "customer-service" }
    ]
  },
  {
    category: "Digital Transformation",
    slug: "digital-transformation",
    items: [
      { title: "Cloud Strategy", slug: "cloud-strategy" },
      { title: "Enterprise Architecture", slug: "enterprise-architecture" },
      { title: "Application Modernization", slug: "application-modernization" },
      { title: "Cybersecurity", slug: "cybersecurity" },
      { title: "Digital Experience", slug: "digital-experience" },
      { title: "Internet of Things (IoT)", slug: "iot" }
    ]
  },
  {
    category: "Industry X",
    slug: "industry-x",
    items: [
      { title: "Smart Manufacturing", slug: "smart-manufacturing" },
      { title: "Connected Products", slug: "connected-products" },
      { title: "Digital Twin", slug: "digital-twin" },
      { title: "Capital Projects", slug: "capital-projects" },
      { title: "Intelligent Asset Management", slug: "asset-management" }
    ]
  }
];

// Automatically generate deep page data for EVERY single sub-service
const generatedData: Record<string, any> = {};

TIER_1_CAPABILITIES.forEach(pillar => {
  pillar.items.forEach(sub => {
    generatedData[sub.slug] = generatePageData(
      sub.title, 
      `We help the world's leading enterprises architect and execute their ${sub.title} transformations at a global scale.`
    );
  });
});

export const SUB_SERVICE_DETAILS = generatedData;

// Export standard arrays for backward compatibility on hubs if needed
export const IBM_STYLE_CAPABILITIES = TIER_1_CAPABILITIES;
export const CAPABILITIES = TIER_1_CAPABILITIES;
export const INDUSTRIES = [];
