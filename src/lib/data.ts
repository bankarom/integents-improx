export interface SubServiceItem {
  title: string;
  slug: string;
  shortDesc: string;
}

export interface CapabilityCategory {
  category: string;
  slug: string;
  tagline: string;
  iconName: string;
  items: SubServiceItem[];
}

export const ENTERPRISE_PILLARS: CapabilityCategory[] = [
  {
    category: "Strategy & Transformation",
    slug: "strategy-consulting",
    tagline: "Architecting resilient business models & growth engines for global market dominance.",
    iconName: "Compass",
    items: [
      { title: "Corporate Strategy & Vision", slug: "corporate-strategy", shortDesc: "Long-term positioning & market expansion blueprints." },
      { title: "M&A & Enterprise Restructuring", slug: "mergers-acquisitions", shortDesc: "Post-merger integration & portfolio optimization." },
      { title: "CFO Advisory & Value Creation", slug: "cfo-enterprise-value", shortDesc: "Capital allocation & modern finance transformation." },
      { title: "Sustainability & ESG Strategy", slug: "sustainability-strategy", shortDesc: "Net-zero roadmaps & decarbonized business operations." },
      { title: "Operating Model Transformation", slug: "operating-model", shortDesc: "Agile organizational structures & organizational design." },
      { title: "Venture Building & Innovation", slug: "innovation-strategy", shortDesc: "Incubating new revenue streams & digital business units." }
    ]
  },
  {
    category: "Data & AI Systems",
    slug: "data-and-ai",
    tagline: "Industrializing agentic AI, predictive analytics & enterprise data platforms.",
    iconName: "BrainCircuit",
    items: [
      { title: "Enterprise AI & GenAI Consulting", slug: "artificial-intelligence", shortDesc: "Scaling generative & agentic AI models across core workflows." },
      { title: "Modern Data Architecture", slug: "data-architecture", shortDesc: "Data mesh, lakehouses & real-time streaming infrastructure." },
      { title: "Applied Intelligence & Analytics", slug: "applied-intelligence", shortDesc: "Predictive modeling, computer vision & decision support." },
      { title: "Enterprise AI Governance & Trust", slug: "ai-governance", shortDesc: "Ethical AI frameworks, compliance & risk mitigation." },
      { title: "Machine Learning Engineering", slug: "machine-learning", shortDesc: "MLOps pipelines, model fine-tuning & continuous delivery." },
      { title: "Knowledge Graphs & Vector DBs", slug: "vector-search-rag", shortDesc: "Enterprise RAG & semantic memory infrastructure." }
    ]
  },
  {
    category: "Enterprise Operations",
    slug: "operations",
    tagline: "Re-engineering core supply chains, procurement & customer service hubs.",
    iconName: "Cpu",
    items: [
      { title: "Intelligent Supply Chain", slug: "supply-chain", shortDesc: "Autonomous demand forecasting & resilient global logistics." },
      { title: "Procurement & Sourcing Modernization", slug: "procurement", shortDesc: "Cognitive spend management & vendor ecosystem optimization." },
      { title: "Finance Operations & Automation", slug: "intelligent-finance", shortDesc: "Hyper-automated order-to-cash & close cycles." },
      { title: "Customer Experience Operations", slug: "customer-service", shortDesc: "Next-gen contact centers & omni-channel service design." },
      { title: "Human Capital & Talent Operations", slug: "hr-operations", shortDesc: "Workforce transformation & AI-driven HR operating models." }
    ]
  },
  {
    category: "Digital Modernization",
    slug: "digital-transformation",
    tagline: "Accelerating legacy migration, hybrid cloud & cyber-resilient engineering.",
    iconName: "Layers",
    items: [
      { title: "Hybrid Cloud & Tech Strategy", slug: "cloud-strategy", shortDesc: "Multi-cloud architecture & IT cost optimization." },
      { title: "Enterprise Architecture Modernization", slug: "enterprise-architecture", shortDesc: "Decoupling monoliths into microservices & event-driven APIs." },
      { title: "Application Refactoring & DevOps", slug: "application-modernization", shortDesc: "Cloud-native engineering & automated CI/CD pipelines." },
      { title: "Cybersecurity Strategy & Defense", slug: "cybersecurity", shortDesc: "Zero-trust architecture, threat detection & incident response." },
      { title: "Digital Product Engineering", slug: "digital-experience", shortDesc: "Human-centric UX/UI design & rapid product prototyping." },
      { title: "Edge & IoT Infrastructure", slug: "iot", shortDesc: "Connected hardware ecosystems & real-time telemetry." }
    ]
  },
  {
    category: "Industry X & Automation",
    slug: "industry-x",
    tagline: "Transforming physical asset ecosystems with Industry 4.0 & digital twins.",
    iconName: "Building2",
    items: [
      { title: "Smart Manufacturing & Industry 4.0", slug: "smart-manufacturing", shortDesc: "Connected factory floors & automated robotics integration." },
      { title: "Digital Twin Systems", slug: "digital-twin", shortDesc: "Virtual simulation models for heavy machinery & plants." },
      { title: "Capital Projects & Infrastructure", slug: "capital-projects", shortDesc: "Megaproject risk management & digital asset tracking." },
      { title: "Intelligent Asset Management", slug: "asset-management", shortDesc: "Predictive maintenance & asset longevity algorithms." },
      { title: "Connected Products & Services", slug: "connected-products", shortDesc: "Hardware-as-a-service business models & embedded software." }
    ]
  }
];

export const GLOBAL_INDUSTRIES = [
  {
    name: "Financial Services & Banking",
    slug: "financial-services",
    iconName: "Landmark",
    desc: "AI fraud detection, core banking modernization & algorithmic risk management.",
    metric: "$4.2B+",
    metricLabel: "Capital Value Optimized"
  },
  {
    name: "Healthcare & Life Sciences",
    slug: "healthcare",
    iconName: "Activity",
    desc: "Clinical trial intelligence, genomic data platforms & hospital operational agility.",
    metric: "3.5x",
    metricLabel: "R&D Cycle Acceleration"
  },
  {
    name: "Smart Manufacturing & Automotive",
    slug: "manufacturing",
    iconName: "Factory",
    desc: "Industry 4.0 automated plants, EV supply chains & predictive quality control.",
    metric: "42%",
    metricLabel: "Downtime Reduction"
  },
  {
    name: "Retail, Consumer & E-Commerce",
    slug: "retail",
    iconName: "ShoppingBag",
    desc: "Hyper-personalized recommendation engines, dynamic pricing & omni-channel logistics.",
    metric: "28%",
    metricLabel: "Margin Improvement"
  },
  {
    name: "Energy, Resources & Utilities",
    slug: "energy",
    iconName: "Zap",
    desc: "Grid modernization, renewable asset balancing & carbon accounting software.",
    metric: "12M Tons",
    metricLabel: "CO2 Offset Strategy"
  },
  {
    name: "Telecom & High Tech",
    slug: "telecom",
    iconName: "Radio",
    desc: "5G network slicing automation, cloud-native OSS/BSS & AI customer care.",
    metric: "99.999%",
    metricLabel: "Uptime SLA Achieved"
  }
];

export const CLIENT_LOGOS = [
  { name: "Global Investment Bank", ticker: "GIB", stat: "$1.4T AUM Partner" },
  { name: "Tier-1 Automotive Group", ticker: "TAG", stat: "12 Global Plants" },
  { name: "Pharma Biologics Inc", ticker: "PBI", stat: "FDA Fast-Tracked" },
  { name: "Energy Grid Solutions", ticker: "EGS", stat: "4.5M Subscribers" },
  { name: "AeroSpace Dynamics", ticker: "ASD", stat: "Defense Prime" },
  { name: "Retail Omni-Global", ticker: "ROG", stat: "8,500 Stores" }
];

export const FEATURED_INSIGHTS = [
  {
    slug: "enterprise-agentic-ai-blueprint-2026",
    category: "AI & Technology Report",
    date: "August 2026",
    readTime: "8 min read",
    title: "The Agentic AI Horizon: How Fortune 500 Leaders Orchestrate Multi-Agent Systems in Production",
    summary: "Moving beyond passive LLM chat interfaces into autonomous operational agents. Discover the reference architecture for enterprise control planes, security rails, and ROI benchmarks.",
    author: "Dr. Marcus Vance, Global Head of AI Practice",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop"
  },
  {
    slug: "cfo-capital-allocation-uncertainty",
    category: "Strategy & Finance Benchmark",
    date: "July 2026",
    readTime: "12 min read",
    title: "Dynamic Capital Allocation in Volatile Markets: The CFO Guide to Real-Option Strategy",
    summary: "Why traditional annual budget cycles fail in high-disruption environments. How leading CFOs deploy scenario modeling and algorithmic capital deployment to outpace peers.",
    author: "Elena Rostova, Managing Partner, Strategy",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1200&auto=format&fit=crop"
  },
  {
    slug: "supply-chain-decoupling-resilience",
    category: "Operations Whitepaper",
    date: "July 2026",
    readTime: "10 min read",
    title: "Decoupling Global Supply Chains: Building Near-Autonomous Supply Networks",
    summary: "Geopolitical re-alignment and climate volatility require a shift from just-in-time to near-instant resilient manufacturing hubs powered by predictive digital twins.",
    author: "Arthur Sterling, Partner, Supply Chain",
    image: "https://images.unsplash.com/photo-1586528116311-ad8ed7e66364?q=80&w=1200&auto=format&fit=crop"
  }
];

export const FEATURED_CASE_STUDIES = [
  {
    slug: "global-bank-ai-transformation",
    client: "Top 5 North American Bank",
    industry: "Financial Services",
    title: "Deploying Enterprise AI Control Plane across 45,000 Employees",
    impact: "$240M Annual Savings | 4x Faster Credit Approvals",
    summary: "Improx Integents designed and built an enterprise-grade agentic workflow platform integrating legacy core banking systems with custom LLMs, cutting loan processing from 4 days to 45 minutes while maintaining strict SEC/FINRA compliance.",
    tags: ["Agentic AI", "Core Modernization", "Risk Governance"],
    image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?q=80&w=1200&auto=format&fit=crop"
  },
  {
    slug: "smart-factory-digital-twin",
    client: "Global Automotive OEM",
    industry: "Smart Manufacturing",
    title: "Industry 4.0 Digital Twin Infrastructure across 14 Manufacturing Assembly Plants",
    impact: "38% Reduction in Unplanned Downtime | $180M Cost Avoidance",
    summary: "Implemented real-time IoT edge telemetry and 3D simulation twins, enabling predictive maintenance algorithms to catch assembly robot defects prior to line failure.",
    tags: ["Digital Twin", "IoT Edge", "Predictive Analytics"],
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1200&auto=format&fit=crop"
  },
  {
    slug: "cpe-supply-chain-reengineering",
    client: "Fortune 100 Consumer Goods Giant",
    industry: "Consumer Goods",
    title: "End-to-End Cognitive Supply Chain Re-Engineering & Inventory Optimization",
    impact: "$320M Working Capital Freed | 99.4% On-Time Fulfillment",
    summary: "Overhauled global procurement and distribution nodes with autonomous demand forecasting models, cutting inventory holding costs across 62 distribution centers.",
    tags: ["Supply Chain", "Cognitive Procurement", "Cost Reduction"],
    image: "https://images.unsplash.com/photo-1586528116311-ad8ed7e66364?q=80&w=1200&auto=format&fit=crop"
  }
];

// Comprehensive generator function for EVERY subservice
export const generateSubServiceData = (subTitle: string, pillarName: string) => {
  return {
    title: `${subTitle}`,
    pillar: pillarName,
    heroTagline: `Empowering Global Enterprises with Next-Generation ${subTitle} Solutions`,
    description: `We partner with C-suite executives and business leaders to architect, engineer, and deploy industry-leading ${subTitle} initiatives that unlock quantifiable business value, streamline operations, and drive sustainable growth.`,
    heroImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000&auto=format&fit=crop",
    
    keyStats: [
      { value: "40%", label: "Average Efficiency Gain" },
      { value: "$150M+", label: "Client Enterprise Value Added" },
      { value: "< 6 Mo", label: "Typical ROI Timeline" },
      { value: "100%", label: "Enterprise Security & Compliance" }
    ],

    executiveSummary: {
      headline: `Re-engineering ${subTitle} for the Modern Digital Enterprise`,
      challenge: `Legacy operating approaches to ${subTitle} often suffer from fragmented data silos, organizational inertia, lack of scalability, and security risks. In today's hyper-competitive global landscape, enterprise leaders cannot afford slow execution or unproven methodologies.`,
      solution: `Improx Integents brings a multidisciplinary team of senior management strategists, systems architects, data scientists, and domain specialists. We combine deep strategic advisory with hands-on technical execution to implement robust ${subTitle} control planes tailored to your exact business model.`,
      videoImage: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1600&auto=format&fit=crop"
    },

    capabilitiesGrid: [
      {
        title: "Strategic Roadmap & Value Architecture",
        desc: `Formulate a business-case backed blueprint for ${subTitle}, aligning technology investments directly with corporate revenue & EBITDA targets.`
      },
      {
        title: "Enterprise Systems & Platform Engineering",
        desc: `Deploy battle-tested, high-availability infrastructure, automated workflows, and robust integration patterns.`
      },
      {
        title: "Governance, Security & Operational Control",
        desc: "Ensure comprehensive regulatory compliance, automated audit trails, zero-trust security, and risk mitigation."
      },
      {
        title: "Change Management & Capability Transfer",
        desc: "Upskill internal teams, optimize organizational structures, and foster continuous innovation for long-term self-sufficiency."
      }
    ],

    industrySolutions: [
      {
        industry: "Banking & Financial Services",
        headline: `${subTitle} for Global Banking & Capital Markets`,
        desc: `Transform risk management, customer engagement, and regulatory reporting with automated, resilient ${subTitle} frameworks.`,
        image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?q=80&w=1200&auto=format&fit=crop"
      },
      {
        industry: "Healthcare & Life Sciences",
        headline: `${subTitle} for BioPharma & Healthcare Providers`,
        desc: `Accelerate R&D pipelines, optimize clinical operations, and guarantee HIPAA/GDPR data integrity.`,
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1200&auto=format&fit=crop"
      },
      {
        industry: "Manufacturing & Industrial",
        headline: `${subTitle} for Smart Factories & Logistics`,
        desc: "Unify shop-floor telemetry, supply chain forecasting, and equipment maintenance into a single operational interface.",
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1200&auto=format&fit=crop"
      }
    ],

    caseStudy: {
      clientName: "Fortune 100 Multi-National Leader",
      title: `Global Transformation of ${subTitle} across 30+ Countries`,
      metrics: ["$180M Cost Reduction", "3.2x Delivery Velocity", "Zero Security Compliance Incidents"],
      desc: `Improx Integents engaged with the board and executive committee to audit, redesign, and deploy a global ${subTitle} framework. The project achieved full ROI in 5 months and became the standard operating model across all global subsidiaries.`
    },

    faqs: [
      {
        q: `How does Improx Integents differentiate its ${subTitle} practice from traditional consulting firms?`,
        a: "Unlike traditional firms that only deliver static slide decks, Improx Integents combines strategic C-suite advisory with deep engineering execution. We build, deploy, and scale working production systems alongside your teams."
      },
      {
        q: "What is the typical timeline for an enterprise engagement?",
        a: "Initial discovery, business case modeling, and architecture design take 3-4 weeks. Rapid production pilot delivery occurs within 60 to 90 days, followed by phased global rollout."
      },
      {
        q: "How do you handle security, compliance, and IP ownership?",
        a: "100% of custom code, models, workflows, and intellectual property developed during the engagement belong exclusively to the client. All systems are architected to adhere strictly to ISO27001, SOC2 Type II, GDPR, and HIPAA standards."
      }
    ]
  };
};

// Generate data map for all sub-services
const subServiceDetailsMap: Record<string, any> = {};

ENTERPRISE_PILLARS.forEach(pillar => {
  pillar.items.forEach(item => {
    subServiceDetailsMap[item.slug] = generateSubServiceData(item.title, pillar.category);
  });
});

export const SUB_SERVICE_DETAILS = subServiceDetailsMap;
export const IBM_STYLE_CAPABILITIES = ENTERPRISE_PILLARS;
export const TIER_1_CAPABILITIES = ENTERPRISE_PILLARS;
