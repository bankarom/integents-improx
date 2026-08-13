export const INDUSTRIES = [
  {
    slug: "manufacturing",
    title: "Manufacturing",
    description: "Smart manufacturing and Industry 4.0 transformation.",
    icon: "Factory",
    heroImage: "/images/manufacturing-hero.jpg",
    challenges: ["Supply chain disruption", "Legacy systems integration", "Labor and skills shortages", "Margin compression"],
    solutions: ["Smart Factory Automation", "Predictive Maintenance", "Supply Chain Analytics", "IoT Integration"],
    blogs: [
      { title: "The Future of Smart Manufacturing", slug: "future-of-smart-manufacturing" },
      { title: "Overcoming Supply Chain Disruptions", slug: "overcoming-supply-chain-disruptions" },
      { title: "AI in Predictive Maintenance", slug: "ai-in-predictive-maintenance" },
    ]
  },
  {
    slug: "healthcare",
    title: "Healthcare & Life Sciences",
    description: "Digital health transformation and patient-centric care.",
    icon: "HeartPulse",
    heroImage: "/images/healthcare-hero.jpg",
    challenges: ["Data privacy and HIPAA compliance", "Interoperability between systems", "Rising operational costs", "Provider burnout"],
    solutions: ["Digital Patient Experience", "Health Data Analytics", "Telemedicine Platforms", "EHR Modernization"],
    blogs: [
      { title: "Digital Transformation in Healthcare", slug: "digital-transformation-in-healthcare" },
      { title: "Securing Patient Data in the Cloud", slug: "securing-patient-data-in-the-cloud" },
      { title: "The Rise of Telemedicine", slug: "the-rise-of-telemedicine" },
    ]
  },
  {
    slug: "financial-services",
    title: "Financial Services",
    description: "Modernizing banking, insurance, and wealth management.",
    icon: "Landmark",
    heroImage: "/images/financial-services-hero.jpg",
    challenges: ["Strict regulatory compliance", "Disruptive Fintech competition", "Legacy system technical debt", "Cybersecurity threats"],
    solutions: ["Digital Core Banking", "Risk Management Analytics", "Automated Compliance", "Open Banking APIs"],
    blogs: [
      { title: "Modernizing Legacy Banking Systems", slug: "modernizing-legacy-banking-systems" },
      { title: "Navigating Regulatory Compliance", slug: "navigating-regulatory-compliance" },
      { title: "The Threat of Fintech Competition", slug: "the-threat-of-fintech-competition" },
    ]
  }
];

export const CAPABILITIES = [
  {
    slug: "ai-intelligent-enterprise",
    title: "AI & Intelligent Enterprise",
    description: "Unlock new growth with generative AI and intelligent automation. We help you scale AI securely across your organization.",
    icon: "BrainCircuit",
    subServices: [
      { title: "AI Strategy & Roadmap", slug: "ai-strategy" },
      { title: "Generative AI Implementation", slug: "generative-ai" },
      { title: "Agentic AI Frameworks", slug: "agentic-ai" },
      { title: "AI Governance & Ethics", slug: "ai-governance" }
    ],
    blogs: [
      { title: "Building an AI Center of Excellence", slug: "building-ai-coe" },
      { title: "Generative AI in the Enterprise", slug: "generative-ai-enterprise" },
      { title: "The Future of Agentic AI", slug: "future-of-agentic-ai" },
    ]
  },
  {
    slug: "digital-transformation",
    title: "Digital Transformation",
    description: "End-to-end business modernization. We redesign your operating model for the digital-first economy.",
    icon: "Rocket",
    subServices: [
      { title: "Digital Operating Model", slug: "digital-operating-model" },
      { title: "Platform Modernization", slug: "platform-modernization" },
      { title: "Enterprise Applications Architecture", slug: "enterprise-applications" },
      { title: "Customer Journey Digitization", slug: "customer-journey" }
    ],
    blogs: [
      { title: "A Guide to Digital Strategy", slug: "guide-to-digital-strategy" },
      { title: "Modernizing Enterprise Platforms", slug: "modernizing-enterprise-platforms" },
      { title: "The ROI of Digital Transformation", slug: "roi-of-digital-transformation" },
    ]
  }
];

export const CASE_STUDIES = [
  {
    slug: "global-retailer-supply-chain",
    title: "Transforming a Global Retailer's Supply Chain",
    client: "Fortune 500 Retailer",
    industry: "Retail",
    capability: "Digital Transformation",
    summary: "How we reduced supply chain costs by 22% through predictive analytics and intelligent automation.",
    challenge: "The client faced unprecedented supply chain disruptions, bloated inventory costs, and an inability to forecast demand accurately across 2,000+ global stores.",
    solution: "We implemented an end-to-end AI-driven supply chain analytics platform, integrated with their legacy ERP system, providing real-time visibility and predictive demand forecasting.",
    results: [
      "22% reduction in overall supply chain costs.",
      "15% increase in inventory turnover.",
      "$120M in working capital freed within 12 months."
    ]
  },
  {
    slug: "healthcare-provider-patient-experience",
    title: "Revolutionizing Patient Experience",
    client: "National Healthcare Network",
    industry: "Healthcare",
    capability: "AI & Intelligent Enterprise",
    summary: "Leveraging generative AI to streamline patient onboarding and reduce administrative burden.",
    challenge: "Patient onboarding was manual, paper-based, and prone to errors, leading to poor patient satisfaction scores and high administrative overhead.",
    solution: "Deployed a secure, HIPAA-compliant intelligent onboarding assistant using Agentic AI to pre-process patient intake forms and answer routine queries.",
    results: [
      "40% reduction in patient wait times.",
      "65% decrease in manual data entry errors.",
      "Patient satisfaction scores improved from 72 to 94."
    ]
  }
];

export const SOLUTIONS = [
  {
    slug: "ai-powered-enterprise",
    title: "AI-Powered Enterprise",
    description: "A comprehensive framework to embed AI across your operations, supply chain, and customer experience.",
    features: ["Pre-built AI Models", "Enterprise Data Fabric", "Secure Cloud Deployment"]
  },
  {
    slug: "intelligent-automation",
    title: "Intelligent Automation",
    description: "Scale hyperautomation to reduce manual work and increase operational resilience.",
    features: ["RPA Integration", "Process Mining", "Cognitive Document Processing"]
  }
];
