'use client'

import Badge from "@/components/badge"
import Card from "@/components/card"
import SlideEffect from "@/components/slide-effect"
import { CheckCircle2, ExternalLink } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "Enterprise Support AI Platform",
    category: "AI & Automation",
    categoryColor: "bg-gradient-to-r from-[#6ECE9D] to-[#4FB882]",
    description: "A comprehensive AI-powered customer support solution handling 10,000+ daily interactions across voice and chat channels. Integrated with Zendesk, ServiceNow, and custom CRM systems for seamless ticket routing and escalation.",
    challenge: "Enterprise client needed 24/7 support coverage without scaling headcount, requiring intelligent routing and multilingual capabilities.",
    solution: "Built custom AI agents using VAPI for voice interactions and OpenAI GPT-4 for chat, integrated with n8n workflows for CRM synchronization and ticket management.",
    features: [
      "Multi-language support (15+ languages)",
      "Intelligent ticket routing and escalation",
      "Real-time CRM synchronization",
      "Voice and chat integration",
      "Analytics dashboard for support metrics",
      "Custom training on company knowledge base"
    ],
    techStack: [
      "VAPI",
      "OpenAI GPT-4",
      "n8n",
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Redis",
      "Zendesk API",
      "ServiceNow API"
    ],
    outcomes: [
      "65% reduction in support response time",
      "40% decrease in support costs",
      "24/7 availability across global time zones",
      "95% customer satisfaction score"
    ],
    scale: "10,000+ daily interactions, 50+ enterprise clients"
  },
  {
    id: 2,
    title: "Enterprise RAG Knowledge Assistant",
    category: "AI & Automation",
    categoryColor: "bg-gradient-to-r from-[#6ECE9D] to-[#4FB882]",
    description: "Secure, enterprise-grade RAG (Retrieval-Augmented Generation) system enabling employees to query internal documentation, policies, SOPs, and knowledge bases with AI-powered responses. Features SSO integration, role-based access control, and comprehensive audit logging.",
    challenge: "Large organization with 5,000+ employees struggling with knowledge discovery across multiple systems and document repositories.",
    solution: "Developed custom RAG pipeline using vector embeddings (OpenAI), semantic search, and secure document processing with granular access controls.",
    features: [
      "Semantic search across 100,000+ documents",
      "SSO integration (SAML, OAuth)",
      "Role-based access control",
      "Audit logging and compliance tracking",
      "Multi-format document support (PDF, Word, Confluence, SharePoint)",
      "Citation and source tracking",
      "Custom fine-tuning on company data"
    ],
    techStack: [
      "OpenAI Embeddings",
      "Pinecone/Weaviate",
      "LangChain",
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Azure AD / Okta",
      "Docker",
      "Kubernetes"
    ],
    outcomes: [
      "70% reduction in time to find information",
      "50% decrease in support tickets",
      "Faster onboarding (60% time reduction)",
      "100% compliance with data governance policies"
    ],
    scale: "5,000+ active users, 100,000+ documents indexed"
  },
  {
    id: 3,
    title: "Multi-Tenant SaaS Platform",
    category: "Web Development",
    categoryColor: "bg-gradient-to-r from-[#FFDA6E] to-[#FFC107]",
    description: "Enterprise-grade multi-tenant SaaS platform serving 200+ organizations with isolated workspaces, custom branding, advanced subscription management, and comprehensive admin controls. Built for scalability and white-label deployment.",
    challenge: "B2B software company needed a scalable platform to serve multiple enterprise clients with isolated data, custom branding, and flexible subscription models.",
    solution: "Architected multi-tenant system with database-level isolation, workspace management, Stripe integration for billing, and comprehensive admin dashboard.",
    features: [
      "Multi-tenant architecture with data isolation",
      "Custom branding and white-label options",
      "Advanced subscription and billing management",
      "SSO and enterprise authentication",
      "Role-based permissions (admin, member, viewer)",
      "API rate limiting and usage analytics",
      "Custom domain support",
      "Audit logs and compliance reporting"
    ],
    techStack: [
      "Next.js 15",
      "React 19",
      "TypeScript",
      "PostgreSQL",
      "Prisma ORM",
      "Stripe",
      "AWS S3",
      "Redis",
      "Docker",
      "Kubernetes"
    ],
    outcomes: [
      "200+ enterprise organizations onboarded",
      "99.9% uptime SLA achieved",
      "50% reduction in onboarding time",
      "Scalable to 10,000+ tenants"
    ],
    scale: "200+ organizations, 50,000+ end users"
  },
  {
    id: 4,
    title: "Enterprise Client & Partner Portal",
    category: "Web Development",
    categoryColor: "bg-gradient-to-r from-[#FFDA6E] to-[#FFC107]",
    description: "Comprehensive client and partner portal for a global agency managing 500+ client relationships. Features project tracking, deliverable management, invoicing, support ticketing, and secure document sharing with advanced permissions.",
    challenge: "Agency managing hundreds of client relationships needed a unified platform for project visibility, communication, and document management.",
    solution: "Built custom portal with real-time project updates, integrated invoicing system, support ticket management, and secure file sharing with version control.",
    features: [
      "Real-time project status and milestones",
      "Deliverable tracking and approval workflows",
      "Integrated invoicing and payment tracking",
      "Support ticket system",
      "Secure document sharing with version control",
      "Custom dashboards per client",
      "Email notifications and alerts",
      "Mobile-responsive design"
    ],
    techStack: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Stripe",
      "AWS S3",
      "SendGrid",
      "Socket.io",
      "Tailwind CSS"
    ],
    outcomes: [
      "500+ active client accounts",
      "80% reduction in support emails",
      "Faster project delivery (30% improvement)",
      "Improved client satisfaction (4.8/5 rating)"
    ],
    scale: "500+ clients, 2,000+ active projects"
  },
  {
    id: 5,
    title: "Enterprise Integration Hub",
    category: "AI & Automation",
    categoryColor: "bg-gradient-to-r from-[#6ECE9D] to-[#4FB882]",
    description: "Centralized integration platform connecting CRM, ERP, support systems, marketing tools, and internal applications. Handles 1M+ API calls daily with error handling, retry logic, and comprehensive monitoring. Eliminates system silos and enables real-time data synchronization.",
    challenge: "Enterprise with 20+ disconnected systems needed unified data flow, real-time synchronization, and error handling for critical business processes.",
    solution: "Built integration hub using n8n for workflow orchestration, custom API adapters, message queuing, and comprehensive monitoring dashboard.",
    features: [
      "100+ pre-built connectors (Salesforce, SAP, HubSpot, etc.)",
      "Custom API adapter development",
      "Real-time and batch synchronization",
      "Error handling and retry mechanisms",
      "Data transformation and mapping",
      "Comprehensive monitoring and alerting",
      "API rate limiting and throttling",
      "Audit logging and compliance"
    ],
    techStack: [
      "n8n",
      "Node.js",
      "PostgreSQL",
      "Redis",
      "RabbitMQ",
      "Docker",
      "Kubernetes",
      "Grafana",
      "Prometheus"
    ],
    outcomes: [
      "1M+ API calls processed daily",
      "99.9% uptime achieved",
      "Eliminated 15+ manual data entry processes",
      "Real-time synchronization across all systems"
    ],
    scale: "20+ integrated systems, 1M+ daily API calls"
  },
  {
    id: 6,
    title: "Enterprise Dashboard & Reporting Platform",
    category: "Web Development",
    categoryColor: "bg-gradient-to-r from-[#FFDA6E] to-[#FFC107]",
    description: "Custom analytics and reporting platform for enterprise decision-making. Real-time KPI dashboards, drill-down capabilities, role-based access, and export functionality. Integrates with multiple data sources for unified business intelligence.",
    challenge: "Enterprise needed unified view of KPIs across departments with real-time updates, custom reporting, and role-based data access.",
    solution: "Developed custom dashboard platform with real-time data pipelines, interactive visualizations, custom report builder, and secure access controls.",
    features: [
      "Real-time KPI dashboards",
      "Interactive data visualizations (charts, graphs, tables)",
      "Drill-down and filtering capabilities",
      "Custom report builder",
      "Scheduled report generation and email delivery",
      "PDF and Excel export",
      "Role-based data access",
      "Mobile-responsive design"
    ],
    techStack: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Apache Superset / Custom",
      "D3.js / Recharts",
      "Python (data processing)",
      "Redis",
      "AWS"
    ],
    outcomes: [
      "50+ custom dashboards created",
      "Real-time data updates (sub-second latency)",
      "80% reduction in manual reporting",
      "Improved decision-making speed"
    ],
    scale: "500+ active users, 50+ dashboards"
  },
  {
    id: 7,
    title: "Operations Command Center",
    category: "Hybrid",
    categoryColor: "bg-gradient-to-r from-[#6ECE9D] via-[#FFDA6E] to-[#6ECE9D]",
    description: "Unified operations command center combining web dashboard with automated workflows. Provides real-time visibility into inventory, orders, support queues, and system health. Includes automated alerts, workflow triggers, and predictive analytics.",
    challenge: "Operations team managing complex supply chain needed unified visibility and automated workflows to reduce manual intervention and improve response times.",
    solution: "Built integrated platform combining real-time dashboard with n8n automation workflows, predictive analytics, and alerting system.",
    features: [
      "Real-time operations dashboard",
      "Automated workflow triggers",
      "Predictive analytics and forecasting",
      "Multi-channel alerting (email, SMS, Slack)",
      "Inventory and order management",
      "Support queue monitoring",
      "System health monitoring",
      "Custom KPI tracking"
    ],
    techStack: [
      "Next.js",
      "TypeScript",
      "n8n",
      "PostgreSQL",
      "Redis",
      "Python (ML models)",
      "WebSocket",
      "Docker"
    ],
    outcomes: [
      "40% reduction in manual operations",
      "Real-time visibility across all systems",
      "Faster incident response (60% improvement)",
      "Predictive insights reduced stockouts by 30%"
    ],
    scale: "24/7 operations, 1,000+ daily transactions"
  },
  {
    id: 8,
    title: "Headless Commerce & Content Platform",
    category: "Web Development",
    categoryColor: "bg-gradient-to-r from-[#FFDA6E] to-[#FFC107]",
    description: "Enterprise-grade headless commerce platform with CMS integration for global brands. Modern storefront built with Next.js, integrated with commerce APIs, multi-region support, and optimized for performance and SEO. Handles high traffic and complex product catalogs.",
    challenge: "Global brand needed modern, performant storefront with content management, multi-region support, and ability to handle high traffic during peak seasons.",
    solution: "Built headless architecture with Next.js storefront, headless CMS integration, commerce API, CDN optimization, and multi-region deployment.",
    features: [
      "Headless architecture (Next.js frontend)",
      "CMS integration (Contentful/Strapi)",
      "Commerce API integration",
      "Multi-region deployment",
      "CDN optimization and caching",
      "SEO optimization",
      "A/B testing capabilities",
      "Analytics and conversion tracking"
    ],
    techStack: [
      "Next.js 15",
      "React 19",
      "TypeScript",
      "Contentful / Strapi",
      "Commerce API",
      "Vercel / AWS",
      "Cloudflare CDN",
      "PostgreSQL"
    ],
    outcomes: [
      "50% improvement in page load speed",
      "99.9% uptime during peak traffic",
      "30% increase in conversion rate",
      "Multi-region support (5 regions)"
    ],
    scale: "1M+ monthly visitors, 100,000+ products"
  }
]

export default function Portfolio() {
  return (
    <div id='portfolio' className="space-y-6 sm:space-y-7 md:space-y-8 lg:space-y-10 mx-auto">
      {/* Badge */}
      <SlideEffect>
        <div className="text-center">
          <Badge number={1} text="our portfolio" />
        </div>
      </SlideEffect>

      {/* Title */}
      <SlideEffect>
        <h2 className="text-2xl md:text-4xl lg:text-header capitalize font-medium leading-none text-transparent bg-clip-text bg-gradient-to-b from-black to-black/60 text-center">
          Enterprise Solutions We've Built
        </h2>
      </SlideEffect>

      {/* Description */}
      <SlideEffect className="px-2 sm:px-10 md:px-0 w-full md:max-w-3/4 mx-auto text-sm lg:text-base text-center">
        Explore our portfolio of enterprise-grade solutions spanning AI automation, web development, and integrated platforms. Each project demonstrates our capability to deliver scalable, secure, and impactful solutions for large organizations.
      </SlideEffect>

      {/* Projects Grid */}
      <div className="space-y-8 md:space-y-12">
        {projects.map((project, index) => (
          <SlideEffect
            key={project.id}
            direction={index % 2 === 0 ? "right" : "left"}
            delay={index * 0.1}
          >
            <Card className="!p-6 md:!p-8 lg:!p-10">
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium text-white ${project.categoryColor}`}>
                      {project.category}
                    </span>
                    <span className="text-xs text-gray-500">Project #{project.id}</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl lg:text-title text-black font-medium mb-2">
                    {project.title}
                  </h3>
                </div>
              </div>

              {/* Description */}
              <p className="text-base md:text-lg text-gray-700 mb-6 leading-relaxed">
                {project.description}
              </p>

              {/* Challenge & Solution */}
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white/50 rounded-lg p-4">
                  <h4 className="font-semibold text-black mb-2 flex items-center gap-2">
                    <span className="text-red-500">Challenge</span>
                  </h4>
                  <p className="text-sm text-gray-600">{project.challenge}</p>
                </div>
                <div className="bg-white/50 rounded-lg p-4">
                  <h4 className="font-semibold text-black mb-2 flex items-center gap-2">
                    <span className="text-green-500">Solution</span>
                  </h4>
                  <p className="text-sm text-gray-600">{project.solution}</p>
                </div>
              </div>

              {/* Features */}
              <div className="mb-6">
                <h4 className="font-semibold text-black mb-3 text-lg">Key Features</h4>
                <div className="grid sm:grid-cols-2 gap-2">
                  {project.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-[#6ECE9D] flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack */}
              <div className="mb-6">
                <h4 className="font-semibold text-black mb-3 text-lg">Technology Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-black/5 rounded-full text-xs font-medium text-gray-700 border border-gray-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Outcomes */}
              <div className="mb-6">
                <h4 className="font-semibold text-black mb-3 text-lg">Results & Outcomes</h4>
                <div className="grid sm:grid-cols-2 gap-3">
                  {project.outcomes.map((outcome, idx) => (
                    <div key={idx} className="bg-gradient-to-r from-[#6ECE9D]/10 to-[#4FB882]/10 rounded-lg p-3 border-l-4 border-[#6ECE9D]">
                      <p className="text-sm font-medium text-gray-800">{outcome}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Scale */}
              <div className="pt-4 border-t border-gray-200">
                <p className="text-sm text-gray-600">
                  <span className="font-semibold text-black">Scale:</span> {project.scale}
                </p>
              </div>
            </Card>
          </SlideEffect>
        ))}
      </div>

      {/* CTA */}
      <SlideEffect>
        <div className="text-center pt-8">
          <p className="text-base md:text-lg text-gray-700 mb-4">
            Interested in building an enterprise solution for your organization?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition-colors"
          >
            Get Started
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </SlideEffect>
    </div>
  )
}
