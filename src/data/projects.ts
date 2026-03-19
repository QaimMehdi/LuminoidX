export interface Project {
  id: string;
  title: string;
  category: string;
  summary: string;
  introduction: string;
  requirements: string[];
  problem: string;
  solution: string;
  techStack: string[];
  results: string[];
  image: string;
  logo: string;
  bgColor: string;
  duration?: string;
  tools?: string[];
}

export const projects: Project[] = [
  {
    id: "prepza",
    title: "Prepza",
    category: "AI & Education",
    summary: "AI - Based Interview Instructor",
    introduction: "Redefining interview preparation with an AI-powered platform that simulates real conversations and delivers instant, intelligent feedback.\n\nBuilt to help ambitious candidates sharpen their skills, boost confidence, and perform at their absolute best.",
    requirements: [
       "Simulates real interviews",
       "AI-powered voice feedback",
       "Responsive web interface",
       "Real-time analytics dashboard"
    ],
    problem: `1. AI & UX Integration:
Complex Al-driven voice feedback required seamless integration with a responsive web interface to prevent user frustration.

2. User Engagement:
Keeping interview simulations realistic yet simple for users of all technical levels while maintaining a "human" feel.

3. Scalable Performance:
Ensuring real-time feedback and analytics work smoothly under high user load without any detectable delays or errors.

Prepza needed a precise, seamless build that scaled effortlessly without disrupting the core user experience.`,
    solution: `• Design System & Clean-UI Principles:
We built a modular React component library (buttons, forms, colors, typography) and a step-by-step interview flow to simplify onboarding. Real-time feedback replaced obstructive pop-ups for a significantly cleaner UI.

• MVVM Refactor & Performance Tuning:
Structured the frontend with React + MVVM-inspired state management for clear separation of concerns. Implemented async voice processing to prevent UI lag during intense simulation sessions.

• Robust Regression Safety Net:
Automated frontend tests with Cypress ensured feature reliability, while continuous integration checks caught errors before deployment. Real-time monitoring of AI feedback modules maintained high accuracy.`,
    techStack: ["React", "Node.JS", "Java", "Maven", "AI", "MVVM"],
    tools: ["Figma", "Cypress", "Stripe", "AWS"],
    duration: "7 months",
    results: [
      "99% Interview readiness score improvement",
      "Seamless real-time AI voice feedback",
      "50,000+ mock interviews completed"
    ],
    image: "/media__1773935144811.png",
    logo: "prepza",
    bgColor: "#ffffff"
  },
  {
    id: "vidface",
    title: "VidFace",
    category: "AI & Video Synthesis",
    summary: "Intelligent video synthesis platform",
    introduction: "Transforming content creation with an AI-powered platform that converts text scripts into talking avatar videos, complete with realistic voice and expressions.\n\nDesigned to help creators produce engaging videos quickly, streamline storytelling, and bring ideas to life with high-quality, interactive AI-generated visuals.",
    requirements: [
       "High-fidelity avatar synthesis",
       "Text-to-speech synchronization",
       "Cloud-based video processing"
    ],
    problem: `1. Seamless AI Integration:
Converting text into realistic talking avatar videos required flawless coordination between AI processing and a responsive web interface.

2. Intuitive User Experience:
An easy-to-use platform delivering high-quality avatars and voice output.

3. Reliable Performance:
Delivering fast video generation and real-time previews for multiple users without lag or errors.

VidFace needed a smooth, dependable platform: AI-driven video creation, instant previews, and a user-friendly interface that scales efficiently.`,
    solution: `• Smart AI Integration:
Integrated SadTalker to convert text and images into realistic talking avatar videos. Connected AI processing with a responsive React frontend for smooth, real-time interactions.

• Intuitive User Experience:
Designed step-by-step workflows for script input, avatar selection, and video preview. Added interactive previews and progress indicators to keep users engaged.

• Scalable Performance:
Offloaded heavy AI processing to Node.js backend with async task queues. Implemented caching and lazy-loading to speed up previews and video rendering.`,
    techStack: ["React", "TypeScript", "Tailwind", "PostgreSQL"],
    tools: ["Figma", "SadTalker", "WebSockets"],
    duration: "5 months",
    results: [
      "40% reduction in video production time",
      "90% user satisfaction rate",
      "Successfully processed 10,000+ videos at launch"
    ],
    image: "/media__1773935457002.png",
    logo: "VidFace",
    bgColor: "#ffffff"
  },
  {
    id: "growerhub-lms",
    title: "GrowerHub LMS",
    category: "EdTech",
    summary: "Employee Training & Global Education Platform",
    introduction: "Hanor needed a robust platform to train and educate their 'Growers' and other essential employees about the basic practices of the industry.",
    requirements: [
       "Secure user authentication",
       "Interactive course builder",
       "Progress tracking"
    ],
    problem: `1. Data Fragmentation:
The primary challenge was the fragmentation of training data across multiple geographic locations.

2. Knowledge Gap:
Hanor's 'Growers' were operating with outdated manual handbooks, leading to a 30% variance in yield efficiency.

3. Audit Difficulties:
Lack of a digital trail made auditing nearly impossible, and the manual certification process delayed field-readiness.`,
    solution: `• Cloud-Native LMS:
We engineered a custom-built, cloud-native LMS designed specifically for field-variable environments.

• Mobile-Sync Engine:
Included a 'Mobile-Sync' engine that allowed workers to access training and record progress even in areas with spotty connectivity.

• Automated Certification:
Implemented a granular role-based access control system and an automated certification engine.`,
    techStack: ["Next.js", "TypeScript", "PostgreSQL"],
    duration: "6 months",
    tools: ["AWS S3", "Docker"],
    results: [
      "95% course completion rate",
      "80% reduction in overhead",
      "60% faster field-readiness"
    ],
    image: "/projects/hanor-laptop.png",
    logo: "GROWER\nHUB",
    bgColor: "#1a5e2a"
  },
  {
    id: "quantumtrade-fx",
    title: "QuantumTrade FX",
    category: "FinTech",
    summary: "Institutional Institutional-grade Crypto Trading",
    introduction: "Liquid Mercury required a sleek, high-performance interface for professional traders to manage portfolios and execute complex orders.",
    requirements: [
       "Low-latency streaming",
       "Complex order types",
       "Multi-exchange connectivity"
    ],
    problem: `1. Execution Fatigue:
Traders were struggling with 'execution fatigue' caused by fragmented liquidity and high-latency interfaces.

2. Peak Volatility Stability:
Clients' existing tools were unable to handle the massive volume of WebSocket messages during peak market volatility.

3. Cross-Exchange Management:
Managing risk across multiple exchanges required constant tab-toggling, creating a dangerous lag.`,
    solution: `• High-Frequency Dashboard:
Architected a high-frequency trading dashboard utilizing multi-threaded web workers to handle 100,000+ updates/sec.

• Unified Order Book:
Developed a 'Unified Order Book' that aggregated data from multiple exchanges into a single, lightning-fast view.

• Quick-Key Execution:
Implemented a 'Quick-Key' execution engine and real-time 'Flash Dashboard' for instant margin calculation.`,
    techStack: ["React", "WebSockets", "Node.js"],
    duration: "9 months",
    tools: ["Redis", "C++ Trading Core"],
    results: [
      "Under 10ms UI latency",
      "40% increase in efficiency",
      "Zero downtime during volatility"
    ],
    image: "/projects/mercury-laptop.png",
    logo: "QUANTUM\nTRADE",
    bgColor: "#0a0a0a"
  },
  {
    id: "mindsync-ai",
    title: "MindSync AI",
    category: "HealthTech",
    summary: "AI-Powered Mental Health Tracking",
    introduction: "MindSync aimed to revolutionize mental health tracking by using AI to identify patterns in user moods and provide suggestions.",
    requirements: [
       "Sentiment analysis",
       "Privacy-first encryption",
       "Wearable data integration"
    ],
    problem: `1. Shallow Engagement:
Users found that 'selecting an emoji' for their day didn't capture the nuance of their mental state.

2. Privacy Trust Barriers:
Users were hesitant to share intimate thoughts with an AI due to data privacy and security concerns.

3. The Cold Start Problem:
Making a wellness app useful on Day 1 before enough historical data has been collected to show trends.`,
    solution: `• NLP Journaling Engine:
Pivoted from 'tracking' to 'journaling' using a natural language processing engine to analyze sentiment.

• Local-Host Encryption:
Developed a 'Local-Host Encryption' layer where user journals are encrypted on-device before syncing.

• Wearable Integration:
Bridged the gap by integrating wearable data (Oura, Apple Watch) to show immediate health correlations.`,
    techStack: ["React Native", "FastAPI", "OpenAI"],
    duration: "4 months",
    tools: ["MongoDB", "D3.js"],
    results: [
      "50% increase in DAU",
      "30% improvement in user clarity",
      "Top Wellness App 2024"
    ],
    image: "/projects/moodology-laptop.png",
    logo: "MindSync",
    bgColor: "#ffffff"
  },
  {
    id: "collegepath-pro",
    title: "CollegePath Pro",
    category: "EdTech",
    summary: "AI Counselor Match-making Platform",
    introduction: "Empowerly needed a platform to connect students with the best college counselors and provide data-driven admissions insights.",
    requirements: [
       "Smart matching algorithm",
       "College database integration",
       "Collaboration tools"
    ],
    problem: `1. Admissions Black Box:
Students were uncertain of where they stood in the ultra-competitive college admissions landscape.

2. Manual Data Friction:
Existing reliance on manual data entry by counselors was slow, error-prone, and failed to scale.

3. Communication Fragments:
Collaboration between stakeholders happened via scattered emails and docs, leading to missed deadlines.`,
    solution: `• Admissions Probability Engine:
Built a proprietary engine using machine learning to give students real-time feedback on their chances.

• The Central Truth Profile:
Overhauled the architecture to center around a unified student profile with integrated document management.

• Custom Essay Suite:
Developed an 'Essay Suite' with version control and an automated 'Deadline Radar' for task management.`,
    techStack: ["Next.js", "Ruby on Rails", "PostgreSQL"],
    duration: "8 months",
    tools: ["Docker", "AWS Cloudfront"],
    results: [
      "$100M+ scholarships secured",
      "98% satisfaction rate",
      "Scaled to 20,000+ families"
    ],
    image: "/projects/empowerly-laptop.png",
    logo: "COLLEGE\nPATH",
    bgColor: "#ffffff"
  },
  {
    id: "mathmagic-k-12",
    title: "MathMagic K-12",
    category: "EdTech",
    summary: "Gamified Math Learning Adventure",
    introduction: "Dot & Line is a leading edtech focused on making math accessible and fun for children through specialized interactive curricula.",
    requirements: [
       "Gamified experience",
       "Parental monitoring",
       "Offline-first capability"
    ],
    problem: `1. Math Anxiety:
Many 'digital math' tools concentrate on speed and drills, which can actually increase student anxiety.

2. Geographic Connectivity:
Target students in remote regions faced unreliable internet, causing frustration and loss of progress.

3. Parental Visibility Gap:
Parents felt 'left in the dark' about their child's conceptual understanding beyond simple quiz scores.`,
    solution: `• Story-First Math Engine:
Developed an engine where mathematical problems are woven into an overarching narrative adventure.

• Offline-Continuity:
Built an 'Offline-Continuity' framework that cached all data locally and synced flawlessly once online.

• Concept Map Dashboard:
Created a 'Concept Map' for parents using heatmaps to visualize a child's understanding of specific areas.`,
    techStack: ["React Native", "Node.js", "MongoDB"],
    duration: "10 months",
    tools: ["Firebase", "After Effects"],
    results: [
      "45% improvement in scores",
      "10,000+ active students",
      "Series A funding secured"
    ],
    image: "/projects/dotline-laptop.png",
    logo: "MATH\nMAGIC",
    bgColor: "#0066ff"
  },
  {
    id: "globaledu-ngo",
    title: "GlobalEdu NGO",
    category: "Non-Profit",
    summary: "Large-scale School Management System",
    introduction: "TCF needed a unified system to manage operations, teacher attendance, and donor relationships across 1,800 schools.",
    requirements: [
       "Large-scale data management",
       "SMS-based reporting",
       "Donor transparency portal"
    ],
    problem: `1. The Data Latency Problem:
Getting an accurate count of attendance across 1,800 schools used to take months, delaying interventions.

2. Fragmented Administration:
A patchwork of spreadsheets and paper records was drowning the organization in administrative error.

3. Donor Impact Visibility:
Sustainability depended on showing donors exactly where their contributions were being utilized.`,
    solution: `• Cloud-Pulse ERP:
Designed a 'Cloud-Pulse' ERP system tailored for massive, distributed non-profit operations.

• SMS-Pulse Integration:
Built an 'SMS-Gateway Integration' allowing remote principals to submit data via basic text messaging.

• Transparent Giving Portal:
Developed a portal linking specific donations to projects, providing real-time impact reports.`,
    techStack: ["Next.js", "Python", "SQL Server"],
    duration: "12 months",
    tools: ["PowerBI", "Twilio API"],
    results: [
      "100% data accuracy",
      "25% operational cost reduction",
      "Real-time donor reporting"
    ],
    image: "/projects/tcf-laptop.png",
    logo: "GLOBAL\nEDU",
    bgColor: "#004b23"
  },
  {
    id: "readbound-social",
    title: "ReadBound Social",
    category: "EdTech",
    summary: "Social Reading Community for Schools",
    introduction: "Biblionasium is a safe platform that encourages children to read by connecting them with friends, teachers, and a vast library.",
    requirements: [
       "Child-safe networking",
       "Reading challenges",
       "Library API integrations"
    ],
    problem: `1. Reading Desinterest:
Kids often saw reading as a chore rather than a social activity, leading to low engagement rates.

2. Safety Regulations:
Strict COPPA and student privacy meant social features had to be 100% curated and moderated.

3. Legacy System Debt:
Integrating with old school library databases required navigating complex, poorly documented legacy APIs.`,
    solution: `• Safety-First Social Graph:
Built a social graph where every interaction is curated or moderated by an 'AI Safety Sentry.'

• Gamified Reading Path:
Implemented a path where students earn XP and customize digital avatars for every page they log.

• Universal Library Adapter:
Built a middleware layer that unified data from multiple legacy systems into a modern, clean API.`,
    techStack: ["React", "Spring Boot", "Elasticsearch"],
    duration: "8 months",
    tools: ["PostgreSQL", "Kafka"],
    results: [
      "Million+ books logged",
      "Used in 20% of US schools",
      "Increased library checkouts"
    ],
    image: "/projects/biblionasium-laptop.png",
    logo: "READ\nBOUND",
    bgColor: "#ff8c00"
  },
  {
    id: "eliteadmit-consulting",
    title: "EliteAdmit Consulting",
    category: "Consulting",
    summary: "Premium Premium Application Workflow System",
    introduction: "A high-end platform to manage the complex college application process for thousands of international students.",
    requirements: [
       "Workload management",
       "Video conferencing",
       "Secure file management"
    ],
    problem: `1. Process Rot:
Counselors spread across 20+ time zones struggled with scheduling, leading to missed drafts and poor sync.

2. Strategic Data Loss:
The 'application strategy' often lived only in counselors' heads rather than in a shared, secure system.

3. Global Payment Friction:
Handling complex currency conversions and local payment methods was a major administrative burden.`,
    solution: `• Strategic Roadmap Engine:
Custom-built an engine that breaks down the multi-year journey into automated, manageable task blocks.

• Secure Essay Portal:
Developed a 'Secure Essay Portal' with per-line commenting and full version history support.

• International Payment Hub:
Implemented a hub handling global currencies and local payment methods via automated workflows.`,
    techStack: ["Next.js", "TypeScript", "Node.js"],
    duration: "7 months",
    tools: ["Stripe", "AWS", "Zoom SDK"],
    results: [
      "99% Ivy League acceptance",
      "60% admin tasks automated",
      "Seamless communication"
    ],
    image: "/projects/ingenius-laptop.png",
    logo: "ELITE\nADMIT",
    bgColor: "#ffffff"
  }
];
