
import type { Agent, Assessment, Review, QuickAction, Activity, SuggestedAgent, Capability, MarketplaceCategory } from './types';
import { AreaChart, Cpu, Lightbulb, Lock, Rocket, Scaling, ShieldCheck, Workflow, BarChart, Users, MessageCircle, FileText } from "lucide-react";


export const agents: Agent[] = [
  {
    id: 'ops-efficiency-optimizer',
    name: 'Ops Efficiency Optimizer',
    description: 'Detects process bottlenecks and suggests automations to improve throughput.',
    category: 'automation-ops',
    avatar: 'https://placehold.co/128x128.png',
    tags: ['Bottleneck Detection', 'Throughput', 'Automation Suggestions'],
    isTrending: true,
    specialty: 'Automation',
    rating: 4.8,
    reviewCount: 88,
  },
  {
    id: 'sales-enrichment-assistant',
    name: 'Sales Enrichment Assistant',
    description: 'Auto-enriches leads from public sources and prioritizes outreach.',
    category: 'assistant-tools',
    avatar: 'https://placehold.co/128x128.png',
    tags: ['Lead Enrichment', 'Scoring', 'Outreach'],
    specialty: 'Sales AI',
    rating: 4.9,
    reviewCount: 150
  },
  {
    id: 'bi-quickstart-analyst',
    name: 'BI Quickstart Analyst',
    description: 'Generates dashboards and KPIs from your CSV/DB with guided prompts.',
    category: 'agent-catalog',
    avatar: 'https://placehold.co/128x128.png',
    tags: ['Dashboarding', 'KPI', 'Guided Analysis'],
    specialty: 'BI & Analytics',
    rating: 4.7,
    reviewCount: 95
  },
  {
    id: 'customer-feedback-miner',
    name: 'Customer Feedback Miner',
    description: 'Clusters NPS/CSAT comments and recommends product improvements.',
    category: 'assistant-tools',
    avatar: 'https://placehold.co/128x128.png',
    tags: ['NLP', 'Clustering', 'Insights'],
    specialty: 'Product Intelligence',
    rating: 4.8,
    reviewCount: 210
  },
  {
    id: 'inventory-forecast-bot',
    name: 'Inventory Forecast Bot',
    description: 'Predicts stock requirements and flags supply risks.',
    category: 'automation-ops',
    avatar: 'https://placehold.co/128x128.png',
    tags: ['Forecasting', 'Supply Chain', 'Alerts'],
    specialty: 'Supply Chain AI',
    rating: 4.9,
    reviewCount: 76
  },
  {
    id: 'policy-compliance-checker',
    name: 'Policy Compliance Checker',
    description: 'Scans processes and documents to highlight compliance gaps.',
    category: 'agent-catalog',
    avatar: 'https://placehold.co/128x128.png',
    tags: ['Compliance', 'Audit', 'Policy'],
    specialty: 'Governance',
    rating: 5.0,
    reviewCount: 45
  },
  {
    id: 'security-log-sentinel',
    name: 'Security Log Sentinel',
    description: 'Analyzes logs for anomalies and suggests actionable responses.',
    category: 'agent-catalog',
    avatar: 'https://placehold.co/128x128.png',
    tags: ['SIEM', 'Anomaly Detection', 'Response'],
    specialty: 'Cybersecurity',
    rating: 4.9,
    reviewCount: 112
  },
  {
    id: 'vendor-intake-orchestrator',
    name: 'Vendor Intake Orchestrator',
    description: 'Streamlines vendor onboarding and assessment workflows.',
    category: 'automation-ops',
    avatar: 'https://placehold.co/128x128.png',
    tags: ['Onboarding', 'Assessment', 'Workflow'],
    specialty: 'Procurement',
    rating: 4.7,
    reviewCount: 55
  },
  {
    id: 'content-brief-generator',
    name: 'Content Brief Generator',
    description: 'Turns keywords into SEO-ready briefs with outline and references.',
    category: 'assistant-tools',
    avatar: 'https://placehold.co/128x128.png',
    tags: ['SEO', 'Brief', 'Content'],
    specialty: 'Marketing AI',
    rating: 4.8,
    reviewCount: 92
  },
  {
    id: 'it-ops-auto-remediator',
    name: 'IT Ops Auto Remediator',
    description: 'Detects common infra issues and triggers pre-approved runbooks.',
    category: 'automation-ops',
    avatar: 'https://placehold.co/128x128.png',
    tags: ['Runbooks', 'Infra', 'Monitoring'],
    specialty: 'IT Operations',
    rating: 4.9,
    reviewCount: 130
  },
  {
    id: 'cost-optimization-advisor',
    name: 'Cost Optimization Advisor',
    description: 'Finds cloud/app waste and recommends savings actions.',
    category: 'assistant-tools',
    avatar: 'https://placehold.co/128x128.png',
    tags: ['FinOps', 'Savings', 'Recommendations'],
    specialty: 'Financial Strategy',
    rating: 5.0,
    reviewCount: 89
  },
  {
    id: 'contract-intelligence-agent',
    name: 'Contract Intelligence Agent',
    description: 'Extracts key terms from contracts and tracks obligations.',
    category: 'agent-catalog',
    avatar: 'https://placehold.co/128x128.png',
    tags: ['OCR', 'Extraction', 'Obligations'],
    specialty: 'Legal Tech',
    rating: 4.8,
    reviewCount: 105
  },
  {
    id: 'recruiting-matcher',
    name: 'Recruiting Matcher',
    description: 'Matches candidates to roles and drafts outreach messages.',
    category: 'assistant-tools',
    avatar: 'https://placehold.co/128x128.png',
    tags: ['Matching', 'Outreach', 'HR'],
    specialty: 'HR Tech',
    rating: 4.9,
    reviewCount: 140
  },
  {
    id: 'support-auto-triage',
    name: 'Support Auto Triage',
    description: 'Routes tickets by intent, urgency and sentiment with summaries.',
    category: 'assistant-tools',
    avatar: 'https://placehold.co/128x128.png',
    tags: ['Routing', 'Summaries', 'Sentiment'],
    specialty: 'Customer Support',
    rating: 4.7,
    reviewCount: 180
  },
  {
    id: 'partner-program-manager',
    name: 'Partner Program Manager',
    description: 'Tracks partner leads, co-sell motions, and collateral requests.',
    category: 'automation-ops',
    avatar: 'https://placehold.co/128x128.png',
    tags: ['Partners', 'Pipeline', 'Enablement'],
    specialty: 'Partner Ops',
    rating: 4.8,
    reviewCount: 65
  },
  {
    id: 'churn-prediction-analyst',
    name: 'Churn Prediction Analyst',
    description: 'Scores accounts at risk and suggests save plays.',
    category: 'agent-catalog',
    avatar: 'https://placehold.co/128x128.png',
    tags: ['Churn', 'Save Plays', 'Scoring'],
    specialty: 'Customer Success',
    rating: 4.9,
    reviewCount: 115
  },
  {
    id: 'finance-close-buddy',
    name: 'Finance Close Buddy',
    description: 'Automates close checklist and reconciliations.',
    category: 'automation-ops',
    avatar: 'https://placehold.co/128x128.png',
    tags: ['Close', 'Reconciliation', 'Checklists'],
    specialty: 'Finance Automation',
    rating: 4.9,
    reviewCount: 82
  },
  {
    id: 'governance-drift-monitor',
    name: 'Governance Drift Monitor',
    description: 'Alerts on configuration drift vs. policy baselines.',
    category: 'agent-catalog',
    avatar: 'https://placehold.co/128x128.png',
    tags: ['Drift', 'Baseline', 'Alerts'],
    specialty: 'Governance',
    rating: 4.8,
    reviewCount: 58
  },
  {
    id: 'data-quality-guardian',
    name: 'Data Quality Guardian',
    description: 'Continuously checks data pipelines and flags quality issues.',
    category: 'process-mining',
    avatar: 'https://placehold.co/128x128.png',
    tags: ['DQ', 'Pipelines', 'Anomalies'],
    specialty: 'Data Engineering',
    rating: 4.9,
    reviewCount: 99
  },
  {
    id: 'meeting-notes-synthesizer',
    name: 'Meeting Notes Synthesizer',
    description: 'Turns call recordings into action items and CRM updates.',
    category: 'assistant-tools',
    avatar: 'https://placehold.co/128x128.png',
    tags: ['Transcription', 'Actions', 'CRM'],
    specialty: 'Productivity',
    rating: 4.8,
    reviewCount: 160
  }
];


export const marketplaceCategories: MarketplaceCategory[] = [
  { value: 'all', label: 'All Agents' },
  { value: 'automation-ops', label: 'Automation Ops' },
  { value: 'assistant-tools', label: 'Assistant Tools' },
  { value: 'process-mining', label: 'Process Mining' },
  { value: 'integration-services', label: 'Integration Services' },
  { value: 'agent-catalog', label: 'Agent Catalog' },
];

export const industryCategories: MarketplaceCategory[] = [
  { value: 'finance', label: 'Finance' },
  { value: 'hr', label: 'Human Resources' },
  { value: 'retail', label: 'Retail' },
  { value: 'marketing', label: 'Marketing' },
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
    icon: <Workflow className="h-8 w-8 text-primary" />,
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


export const reviews: Review[] = [
    { id: 'r1', agentId: 'ops-efficiency-optimizer', author: 'John D.', rating: 5, comment: 'This agent provided incredible strategic insight that completely reshaped our AI roadmap. Highly recommended!' },
    { id: 'r2', agentId: 'ops-efficiency-optimizer', author: 'Jane S.', rating: 5, comment: 'Working with this agent was a game-changer for our executive team.' },
    { id: 'r3', agentId: 'sales-enrichment-assistant', author: 'Mike P.', rating: 5, comment: 'A world-class ML agent. It delivered a robust model ahead of schedule.' },
]


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
