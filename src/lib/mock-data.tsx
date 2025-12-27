
import type { MarketplaceProduct, Assessment, Review, QuickAction, Activity, SuggestedAgent, Capability, MarketplaceCategory, Workflow, FaqItem } from './types';
import { AreaChart, Cpu, Lightbulb, Lock, Rocket, Scaling, ShieldCheck, Workflow as WorkflowIcon, BarChart, Users, MessageCircle, FileText } from "lucide-react";


export const customMarketplaceCategories: MarketplaceCategory[] = [
  { value: 'all', label: 'All Categories' },
  { value: 'automation-ops', label: 'Automation Ops' },
  { value: 'assistant-tools', label: 'Assistant Tools' },
  { value: 'process-mining', label: 'Process Mining' },
  { value: 'integration-services', label: 'Integration Services' },
  { value: 'agent-catalog', label: 'Agent Catalog' },
];

export const industryCategories: MarketplaceCategory[] = [
  { value: 'all', label: 'All Industries' },
  { value: 'finance', label: 'Finance' },
  { value: 'hr', label: 'Human Resources' },
  { value: 'retail', label: 'Retail' },
  { value: 'marketing', label: 'Marketing' },
  { value: 'insurance', label: 'Insurance' },
  { value: 'real-estate', label: 'Real Estate' },
  { value: 'healthcare', label: 'Healthcare' },
  { value: 'education', label: 'Education' },
  { value: 'agriculture', label: 'Agriculture' },
  { value: 'default', label: 'Default' },
];


export const agents: MarketplaceProduct[] = [
    {
        id: 'ops-efficiency-optimizer',
        name: 'Ops Efficiency Optimizer',
        description: 'Detects process bottlenecks and suggests automations to improve throughput.',
        category: 'automation-ops',
        industry: 'default',
        avatar: 'https://placehold.co/400x300.png?text=Ops',
        tags: ['Bottleneck Detection', 'Throughput', 'Automation Suggestions'],
        isTrending: true,
        specialty: 'Process Optimization',
        rating: 4.8,
        reviewCount: 124,
    },
    {
        id: 'sales-enrichment-assistant',
        name: 'Sales Enrichment Assistant',
        description: 'Auto-enriches leads from public sources and prioritizes outreach.',
        category: 'assistant-tools',
        industry: 'marketing',
        avatar: 'https://placehold.co/400x300.png?text=Sales',
        tags: ['Lead Enrichment', 'Scoring', 'Outreach'],
        isTrending: false,
        specialty: 'Sales AI',
        rating: 4.9,
        reviewCount: 210,
    },
    {
        id: 'bi-quickstart-analyst',
        name: 'BI Quickstart Analyst',
        description: 'Generates dashboards and KPIs from your CSV/DB with guided prompts.',
        category: 'agent-catalog',
        industry: 'finance',
        avatar: 'https://placehold.co/400x300.png?text=BI',
        tags: ['Dashboarding', 'KPI', 'Guided Analysis'],
        isTrending: true,
        specialty: 'BI & Analytics',
        rating: 4.7,
        reviewCount: 95,
    },
    {
        id: 'customer-feedback-miner',
        name: 'Customer Feedback Miner',
        description: 'Clusters NPS/CSAT comments and recommends product improvements.',
        category: 'assistant-tools',
        industry: 'retail',
        avatar: 'https://placehold.co/400x300.png?text=Feedback',
        tags: ['NLP', 'Clustering', 'Insights'],
        isTrending: false,
        specialty: 'Product Intelligence',
        rating: 4.8,
        reviewCount: 188,
    },
    {
        id: 'inventory-forecast-bot',
        name: 'Inventory Forecast Bot',
        description: 'Predicts stock requirements and flags supply risks.',
        category: 'automation-ops',
        industry: 'retail',
        avatar: 'https://placehold.co/400x300.png?text=Inventory',
        tags: ['Forecasting', 'Supply Chain', 'Alerts'],
        isTrending: true,
        specialty: 'Supply Chain AI',
        rating: 4.9,
        reviewCount: 76,
    },
    {
        id: 'policy-compliance-checker',
        name: 'Policy Compliance Checker',
        description: 'Scans processes and documents to highlight compliance gaps.',
        category: 'agent-catalog',
        industry: 'finance',
        avatar: 'https://placehold.co/400x300.png?text=Compliance',
        tags: ['Compliance', 'Audit', 'Policy'],
        isTrending: false,
        specialty: 'Governance',
        rating: 5,
        reviewCount: 45,
    },
    {
        id: 'security-log-sentinel',
        name: 'Security Log Sentinel',
        description: 'Analyzes logs for anomalies and suggests actionable responses.',
        category: 'agent-catalog',
        industry: 'default',
        avatar: 'https://placehold.co/400x300.png?text=Security',
        tags: ['SIEM', 'Anomaly Detection', 'Response'],
        isTrending: false,
        specialty: 'Cybersecurity',
        rating: 4.9,
        reviewCount: 112,
    },
    {
        id: 'vendor-intake-orchestrator',
        name: 'Vendor Intake Orchestrator',
        description: 'Streamlines vendor onboarding and assessment workflows.',
        category: 'automation-ops',
        industry: 'hr',
        avatar: 'https://placehold.co/400x300.png?text=Vendor',
        tags: ['Onboarding', 'Assessment', 'Workflow'],
        isTrending: false,
        specialty: 'Procurement',
        rating: 4.7,
        reviewCount: 55,
    },
    {
        id: 'content-brief-generator',
        name: 'Content Brief Generator',
        description: 'Turns keywords into SEO-ready briefs with outline and references.',
        category: 'assistant-tools',
        industry: 'marketing',
        avatar: 'https://placehold.co/400x300.png?text=Content',
        tags: ['SEO', 'Brief', 'Content'],
        isTrending: true,
        specialty: 'Marketing AI',
        rating: 4.8,
        reviewCount: 92,
    },
    {
        id: 'it-ops-auto-remediator',
        name: 'IT Ops Auto Remediator',
        description: 'Detects common infra issues and triggers pre-approved runbooks.',
        category: 'automation-ops',
        industry: 'default',
        avatar: 'https://placehold.co/400x300.png?text=IT+Ops',
        tags: ['Runbooks', 'Infra', 'Monitoring'],
        isTrending: false,
        specialty: 'IT Operations',
        rating: 4.9,
        reviewCount: 130,
    },
    {
        id: 'cost-optimization-advisor',
        name: 'Cost Optimization Advisor',
        description: 'Finds cloud/app waste and recommends savings actions.',
        category: 'assistant-tools',
        industry: 'finance',
        avatar: 'https://placehold.co/400x300.png?text=Cost',
        tags: ['FinOps', 'Savings', 'Recommendations'],
        isTrending: false,
        specialty: 'Financial Strategy',
        rating: 5,
        reviewCount: 89,
    },
    {
        id: 'contract-intelligence-agent',
        name: 'Contract Intelligence Agent',
        description: 'Extracts key terms from contracts and tracks obligations.',
        category: 'agent-catalog',
        industry: 'finance',
        avatar: 'https://placehold.co/400x300.png?text=Contract',
        tags: ['OCR', 'Extraction', 'Obligations'],
        isTrending: false,
        specialty: 'Legal Tech',
        rating: 4.8,
        reviewCount: 105,
    },
    {
        id: 'recruiting-matcher',
        name: 'Recruiting Matcher',
        description: 'Matches candidates to roles and drafts outreach messages.',
        category: 'assistant-tools',
        industry: 'hr',
        avatar: 'https://placehold.co/400x300.png?text=Recruiting',
        tags: ['Matching', 'Outreach', 'HR'],
        isTrending: true,
        specialty: 'HR Tech',
        rating: 4.9,
        reviewCount: 140,
    },
    {
        id: 'support-auto-triage',
        name: 'Support Auto Triage',
        description: 'Routes tickets by intent, urgency and sentiment with summaries.',
        category: 'assistant-tools',
        industry: 'default',
        avatar: 'https://placehold.co/400x300.png?text=Support',
        tags: ['Routing', 'Summaries', 'Sentiment'],
        isTrending: false,
        specialty: 'Customer Support',
        rating: 4.7,
        reviewCount: 180,
    },
    {
        id: 'partner-program-manager',
        name: 'Partner Program Manager',
        description: 'Tracks partner leads, co-sell motions, and collateral requests.',
        category: 'automation-ops',
        industry: 'marketing',
        avatar: 'https://placehold.co/400x300.png?text=Partner',
        tags: ['Partners', 'Pipeline', 'Enablement'],
        isTrending: false,
        specialty: 'Partner Ops',
        rating: 4.8,
        reviewCount: 65,
    },
    {
        id: 'churn-prediction-analyst',
        name: 'Churn Prediction Analyst',
        description: 'Scores accounts at risk and suggests save plays.',
        category: 'agent-catalog',
        industry: 'retail',
        avatar: 'https://placehold.co/400x300.png?text=Churn',
        tags: ['Churn', 'Save Plays', 'Scoring'],
        isTrending: false,
        specialty: 'Customer Success',
        rating: 4.9,
        reviewCount: 115,
    },
    {
        id: 'finance-close-buddy',
        name: 'Finance Close Buddy',
        description: 'Automates close checklist and reconciliations.',
        category: 'automation-ops',
        industry: 'finance',
        avatar: 'https://placehold.co/400x300.png?text=Finance',
        tags: ['Close', 'Reconciliation', 'Checklists'],
        isTrending: true,
        specialty: 'Finance Automation',
        rating: 4.9,
        reviewCount: 82,
    },
    {
        id: 'governance-drift-monitor',
        name: 'Governance Drift Monitor',
        description: 'Alerts on configuration drift vs. policy baselines.',
        category: 'agent-catalog',
        industry: 'finance',
        avatar: 'https://placehold.co/400x300.png?text=Governance',
        tags: ['Drift', 'Baseline', 'Alerts'],
        isTrending: false,
        specialty: 'Governance',
        rating: 4.8,
        reviewCount: 58,
    },
    {
        id: 'data-quality-guardian',
        name: 'Data Quality Guardian',
        description: 'Continuously checks data pipelines and flags quality issues.',
        category: 'process-mining',
        industry: 'default',
        avatar: 'https://placehold.co/400x300.png?text=Data',
        tags: ['DQ', 'Pipelines', 'Anomalies'],
        isTrending: false,
        specialty: 'Data Engineering',
        rating: 4.9,
        reviewCount: 99,
    },
    {
        id: 'meeting-notes-synthesizer',
        name: 'Meeting Notes Synthesizer',
        description: 'Turns call recordings into action items and CRM updates.',
        category: 'assistant-tools',
        industry: 'default',
        avatar: 'https://placehold.co/400x300.png?text=Meeting',
        tags: ['Transcription', 'Actions', 'CRM'],
        isTrending: true,
        specialty: 'Productivity',
        rating: 4.8,
        reviewCount: 160,
    },
];


export const reviews: Review[] = [
    { id: 'r1', agentId: 'ops-efficiency-optimizer', author: 'John D.', rating: 5, comment: 'This agent provided incredible strategic insight that completely reshaped our AI roadmap. Highly recommended!' },
    { id: 'r2', agentId: 'ops-efficiency-optimizer', author: 'Jane S.', rating: 5, comment: 'Working with this agent was a game-changer for our executive team.' },
    { id: 'r3', agentId: 'sales-enrichment-assistant', author: 'Mike P.', rating: 5, comment: 'A world-class ML agent. It delivered a robust model ahead of schedule.' },
    { id: 'r4', agentId: 'recruiting-matcher', author: 'Samantha R.', rating: 5, comment: 'The best recruiting tool I have used. Cut down our sourcing time by 80%.' },
    { id: 'r5', agentId: 'finance-close-buddy', author: 'Alex C.', rating: 5, comment: 'Made our month-end close so much smoother. A must-have for any finance team.' },
];


export const quickActions: QuickAction[] = [
    { title: "New Assessment", href: "/assessment", icon: BarChart },
    { title: "Browse Marketplace", href: "/marketplace", icon: Users },
    { title: "New Conversation", href: "/conversation", icon: MessageCircle },
];

export const activityFeed: Activity[] = [
    { type: "Assessment", description: "You completed the 'AI Readiness' assessment.", time: "2 hours ago", icon: FileText},
    { type: "Marketplace", description: "You viewed the profile of agent 'Ops Efficiency Optimizer'.", time: "1 day ago", icon: Users},
    { type: "Conversation", description: "New message from LOG_ON Assistant.", time: "3 days ago", icon: MessageCircle},
]

export const suggestedAgents: SuggestedAgent[] = [
    { id: 'sales-enrichment-assistant', name: 'Sales Enrichment Assistant', specialty: 'Sales AI', avatar: 'https://placehold.co/40x40.png' },
    { id: 'bi-quickstart-analyst', name: 'BI Quickstart Analyst', specialty: 'BI & Analytics', avatar: 'https://placehold.co/40x40.png' }
]

export const capabilities: Capability[] = [
  {
    icon: <Lightbulb className="h-8 w-8 text-primary" />,
    title: "Thinks Like Your Best Strategist",
    description: "Our AI-driven platform analyzes your business needs to identify high-impact growth opportunities.",
  },
  {
    icon: <Cpu className="h-8 w-8 text-primary" />,
    title: "Spots Opportunities, Creates Solutions",
    description: "From market gaps to internal inefficiencies, get tailored AI solutions and connect with experts.",
  },
  {
    icon: <Rocket className="h-8 w-8 text-primary" />,
    title: "Your Always-On Strategic Advisor",
    description: "Leverage continuous, data-driven insights to make smarter decisions and stay ahead of the curve.",
  },
  {
    icon: <Lock className="h-8 w-8 text-primary" />,
    title: "Enterprise-class automation",
    description: "Multi-agent orchestration, role isolation, audit logs.",
  },
  {
    icon: <Scaling className="h-8 w-8 text-primary" />,
    title: "Local pricing",
    description: "Regionalised pricing so teams of any size can start now.",
  },
  {
    icon: <Rocket className="h-8 w-8 text-primary" />,
    title: "From idea → deploy",
    description: "Voice to workflow: capture, validate, publish.",
  },
];


export const assessments: Assessment[] = [
  {
    id: 'q1',
    sectionLabel: 'Assessment',
    title: 'AI Readiness Evaluator',
    subheading: 'DIAGNOSTICS',
    workflows: ['Department Analysis', 'Technology Stack Review', 'Implementation Roadmap'],
    type: 'ai-readiness',
    icon: <Cpu className="h-8 w-8 text-primary" />,
    description: "Evaluate your organization's readiness for AI integration.",
    questions: [
        { id: 'q1', text: "Is your data organized and accessible for AI models?", options: ["No", "Partially", "Mostly", "Yes, fully"] },
        { id: 'q2', text: "Do you have in-house talent with AI/ML skills?", options: ["None", "A few individuals", "A dedicated team", "Multiple teams"] },
        { id: 'q3', text: "What is the biggest barrier to AI adoption in your company?", options: ["Cost", "Lack of strategy", "Data security concerns", "Technical complexity"] },
    ]
  },
  {
    id: 'q2',
    sectionLabel: 'Assessment',
    title: 'Workflow Automation Audit',
    subheading: 'OPTIMIZATION',
    workflows: ['Bottleneck Identification', 'Workflow Streamlining', 'ROI Projection'],
    type: 'workflow-automation',
    icon: <WorkflowIcon className="h-8 w-8 text-primary" />,
    description: "Benchmark your digital capabilities against industry leaders.",
    questions: [
        { id: 'q1', text: "How would you rate your company's current use of data analytics?", options: ["Non-existent", "Basic", "Intermediate", "Advanced", "Leading-edge"] },
        { id: 'q2', text: "How integrated are your digital marketing efforts?", options: ["Not at all", "Siloed", "Somewhat integrated", "Fully integrated"] },
        { id: 'q3', text: "What is your primary goal for digital transformation?", options: ["Improve efficiency", "Enhance customer experience", "Innovate products/services", "Enter new markets"] },
    ]
  },
  {
    id: 'q3',
    sectionLabel: 'Assessment',
    title: 'ROI Calculator',
    subheading: 'INSIGHTS',
    workflows: ['Investment Analysis', 'Savings Calculation', 'Payback Projection'],
    type: 'roi-calculator',
    icon: <AreaChart className="h-8 w-8 text-primary" />,
    description: "Benchmark your digital capabilities against industry leaders.",
     questions: [
        { id: 'q1', text: "How would you rate your company's current use of data analytics?", options: ["Non-existent", "Basic", "Intermediate", "Advanced", "Leading-edge"] },
        { id: 'q2', text: "How integrated are your digital marketing efforts?", options: ["Not at all", "Siloed", "Somewhat integrated", "Fully integrated"] },
        { id: 'q3', text: "What is your primary goal for digital transformation?", options: ["Improve efficiency", "Enhance customer experience", "Innovate products/services", "Enter new markets"] },
    ]
  },
  {
    id: 'q4',
    sectionLabel: 'Assessment',
    title: 'Security & Compliance Checker',
    subheading: 'GOVERNANCE',
    workflows: ['Regulatory Compliance', 'Data Privacy Audit', 'Security Assessment'],
    type: 'security-compliance',
    icon: <ShieldCheck className="h-8 w-8 text-primary" />,
    description: "Benchmark your digital capabilities against industry leaders.",
     questions: [
        { id: 'q1', text: "How would you rate your company's current use of data analytics?", options: ["Non-existent", "Basic", "Intermediate", "Advanced", "Leading-edge"] },
        { id: 'q2', text: "How integrated are your digital marketing efforts?", options: ["Not at all", "Siloed", "Somewhat integrated", "Fully integrated"] },
        { id: 'q3', text: "What is your primary goal for digital transformation?", options: ["Improve efficiency", "Enhance customer experience", "Innovate products/services", "Enter new markets"] },
    ]
  },
];


export const workflowCategories: MarketplaceCategory[] = [
  { value: 'all', label: 'All Workflows' },
  { value: 'general', label: 'General' },
  { value: 'lead-generation', label: 'Lead Generation' },
  { value: 'operations', label: 'Operations' },
  { value: 'podcasts', label: 'Podcasts' },
  { value: 'productivity', label: 'Productivity' },
  { value: 'research', label: 'Research' },
  { value: 'socials', label: 'Socials' },
  { value: 'teach-your-agent', label: 'Teach Your Agent' },
];

export const workflows: Workflow[] = [
    {
        id: 'podcast-sponsor-discovery',
        name: 'Podcast Sponsor Discovery',
        description: 'Find potential sponsors for your podcast based on topic and audience.',
        category: 'research'
    },
    {
        id: 'youtube-to-content',
        name: 'Turn my YouTube video into multiple content pieces',
        description: 'Repurpose a YouTube video into blog posts, social media updates, and more.',
        category: 'podcasts'
    },
    {
        id: 'youtube-to-podcast-listings',
        name: 'Turn my YouTube video into podcast listings',
        description: 'Create listings for podcast directories from a YouTube video.',
        category: 'podcasts'
    },
    {
        id: 'research-podcast-guest',
        name: 'Research my podcast guest for interviews',
        description: 'Generate a brief on a podcast guest to prepare for an interview.',
        category: 'podcasts'
    },
    {
        id: 'agent-discovery',
        name: 'Agent Discovery',
        description: 'Find the right AI agent for your specific needs.',
        category: 'default'
    },
    {
        id: 'scheduled-agent-task',
        name: 'Scheduled Agent Task',
        description: 'Schedule an AI agent to perform a task at a specific time.',
        category: 'default'
    },
    {
        id: 'news-summaries',
        name: 'Get news summaries for my keywords',
        description: 'Receive daily summaries of news articles for your chosen keywords.',
        category: 'productivity'
    },
    {
        id: 'instagram-posts-from-ideas',
        name: 'Create Instagram posts from ideas',
        description: 'Turn your content ideas into engaging Instagram posts.',
        category: 'socials'
    },
    {
        id: 'teach-ai-from-instagram',
        name: 'Teach my AI from an Instagram profile',
        description: 'Train your AI assistant using the content from an Instagram profile.',
        category: 'teach-your-agent'
    },
    {
        id: 'teach-ai-from-linkedin',
        name: 'Teach my AI from a LinkedIn profile',
        description: 'Train your AI assistant using the content from a LinkedIn profile.',
        category: 'teach-your-agent'
    },
    {
        id: 'teach-ai-from-reddit',
        name: 'Teach my AI from a Reddit profile',
        description: 'Train your AI assistant using the content from a Reddit profile.',
        category: 'teach-your-agent'
    },
    {
        id: 'transcripts-to-blog-posts',
        name: 'Turn transcripts into blog posts',
        description: 'Convert audio or video transcripts into well-structured blog posts.',
        category: 'productivity'
    },
    {
        id: 'compare-instagram-competitors',
        name: 'Compare my Instagram to competitors',
        description: 'Analyze your Instagram performance against your competitors.',
        category: 'research'
    },
    {
        id: 'compare-x-competitors',
        name: 'Compare my X to competitors',
        description: 'Analyze your X (formerly Twitter) performance against your competitors.',
        category: 'research'
    },
    {
        id: 'find-podcast-guests-on-x',
        name: 'Find podcast guests on X',
        description: 'Discover potential podcast guests on X (formerly Twitter).',
        category: 'lead-generation'
    },
    {
        id: 'find-podcast-guests-on-instagram',
        name: 'Find podcast guests on Instagram',
        description: 'Discover potential podcast guests on Instagram.',
        category: 'lead-generation'
    },
    {
        id: 'youtube-videos-to-content',
        name: 'Turn YouTube videos into content',
        description: 'Repurpose your YouTube videos into various content formats.',
        category: 'productivity'
    },
    {
        id: 'teach-ai-from-x',
        name: 'Teach my AI from an X profile',
        description: 'Train your AI assistant using the content from an X (formerly Twitter) profile.',
        category: 'teach-your-agent'
    },
];

export const faqData: FaqItem[] = [
  {
    question: "What is LOG_ON?",
    answer: "LOG_ON is a platform that helps businesses identify growth opportunities and activate intelligent solutions using AI. We connect you with AI agents and pre-built workflows to automate and optimize your operations."
  },
  {
    question: "How do credits work?",
    answer: "Every time a workflow runs, it uses credits based on its complexity. Your plan includes a set number of credits, and you can monitor your usage and upgrade your plan as your automation needs grow."
  },
  {
    question: "Can I build a custom workflow?",
    answer: "Absolutely. If our library doesn't have what you need, you can request a custom task or book a call with our team to design a tailored workflow for your specific business case."
  },
  {
    question: "What kind of support do you offer?",
    answer: "We offer comprehensive support through our help center, and customers on premium plans have access to dedicated support channels for more personalized assistance."
  }
];

    