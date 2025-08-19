
import type { Agent, Assessment, Review, QuickAction, Activity, SuggestedAgent, Capability, MarketplaceProduct, MarketplaceCategory } from './types';
import { AreaChart, Cpu, Lightbulb, Lock, Rocket, Scaling, ShieldCheck, Workflow, BarChart, Users, MessageCircle, FileText } from "lucide-react";


export const agents: Agent[] = [
  {
    id: '1',
    name: 'Aria Sterling',
    avatar: 'https://placehold.co/128x128.png',
    specialty: 'AI Business Strategy',
    description: 'Aria helps C-suite executives align AI initiatives with core business goals for maximum impact.',
    rating: 4.9,
    reviewCount: 124,
    tags: ['Strategy', 'Finance', 'Enterprise'],
  },
  {
    id: '2',
    name: 'Kenji Tanaka',
    avatar: 'https://placehold.co/128x128.png',
    specialty: 'Machine Learning Engineering',
    description: 'Expert in deploying scalable ML models for startups and tech companies. From PoC to production.',
    rating: 5.0,
    reviewCount: 98,
    tags: ['Python', 'TensorFlow', 'Cloud'],
  },
  {
    id: '3',
    name: 'Sofia Reyes',
    avatar: 'https://placehold.co/128x128.png',
    specialty: 'Data Visualization & Insights',
    description: 'Sofia transforms complex datasets into compelling visual stories that drive decision-making.',
    rating: 4.8,
    reviewCount: 210,
    tags: ['Tableau', 'D3.js', 'Analytics'],
  },
    {
    id: '4',
    name: 'Liam O\'Connell',
    avatar: 'https://placehold.co/128x128.png',
    specialty: 'Natural Language Processing',
    description: 'Specializes in building chatbots, sentiment analysis tools, and other NLP-powered applications.',
    rating: 4.9,
    reviewCount: 76,
    tags: ['NLP', 'Chatbots', 'Python'],
  },
  {
    id: '5',
    name: 'Chloe Dubois',
    avatar: 'https://placehold.co/128x128.png',
    specialty: 'AI Ethics & Governance',
    description: 'Advises companies on building responsible and ethical AI frameworks to mitigate risks.',
    rating: 5.0,
    reviewCount: 45,
    tags: ['Ethics', 'Governance', 'Strategy'],
  },
  {
    id: '6',
    name: 'Mateo Garcia',
    avatar: 'https://placehold.co/128x128.png',
    specialty: 'Computer Vision',
    description: 'Develops and implements computer vision solutions for object detection, image recognition, and more.',
    rating: 4.7,
    reviewCount: 150,
    tags: ['OpenCV', 'PyTorch', 'Vision'],
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
    { id: 'r1', agentId: '1', author: 'John D.', rating: 5, comment: 'Aria provided incredible strategic insight that completely reshaped our AI roadmap. Highly recommended!' },
    { id: 'r2', agentId: '1', author: 'Jane S.', rating: 5, comment: 'Working with Aria was a game-changer for our executive team.' },
    { id: 'r3', agentId: '2', author: 'Mike P.', rating: 5, comment: 'Kenji is a world-class ML engineer. He delivered a robust model ahead of schedule.' },
]


export const quickActions: QuickAction[] = [
    { title: "New Assessment", href: "/assessment", icon: BarChart },
    { title: "Browse Marketplace", href: "/marketplace", icon: Users },
    { title: "New Conversation", href: "/conversation", icon: MessageCircle },
];

export const activityFeed: Activity[] = [
    { type: "Assessment", description: "You completed the 'AI Readiness' assessment.", time: "2 hours ago", icon: FileText},
    { type: "Marketplace", description: "You viewed the profile of agent 'Aria Sterling'.", time: "1 day ago", icon: Users},
    { type: "Conversation", description: "New message from LOG_ON Assistant.", time: "3 days ago", icon: MessageCircle},
]

export const suggestedAgents: SuggestedAgent[] = [
    { id: '2', name: 'Kenji Tanaka', specialty: 'Machine Learning', avatar: 'https://placehold.co/40x40.png' },
    { id: '3', name: 'Sofia Reyes', specialty: 'Data Visualization', avatar: 'https://placehold.co/40x40.png' }
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


export const customMarketplaceCategories: MarketplaceCategory[] = [
  { value: 'automation-ops', label: 'Automation Ops' },
  { value: 'assistant-tools', label: 'Assistant Tools' },
  { value: 'process-mining', label: 'Process Mining' },
  { value: 'integration-services', label: 'Integration Services' },
];

export const industryCategories: MarketplaceCategory[] = [
  { value: 'finance', label: 'Finance' },
  { value: 'hr', label: 'Human Resources' },
  { value: 'retail', label: 'Retail' },
  { value: 'marketing', label: 'Marketing' },
];

export const marketplaceProducts: MarketplaceProduct[] = [
  // --- New placeholder agents (20) ---
  {
    id: 'ops-efficiency-optimizer',
    name: 'Ops Efficiency Optimizer',
    description: 'Detects process bottlenecks and suggests automations to improve throughput.',
    category: 'automation-ops',
    imageUrl: 'https://placehold.co/600x400.png',
    tags: ['Bottleneck Detection', 'Throughput', 'Automation Suggestions'],
    isTrending: true
  },
  {
    id: 'sales-enrichment-assistant',
    name: 'Sales Enrichment Assistant',
    description: 'Auto-enriches leads from public sources and prioritizes outreach.',
    category: 'assistant-tools',
    imageUrl: 'https://placehold.co/600x400.png',
    tags: ['Lead Enrichment', 'Scoring', 'Outreach']
  },
  {
    id: 'bi-quickstart-analyst',
    name: 'BI Quickstart Analyst',
    description: 'Generates dashboards and KPIs from your CSV/DB with guided prompts.',
    category: 'agent-catalog',
    imageUrl: 'https://placehold.co/600x400.png',
    tags: ['Dashboarding', 'KPI', 'Guided Analysis']
  },
  {
    id: 'customer-feedback-miner',
    name: 'Customer Feedback Miner',
    description: 'Clusters NPS/CSAT comments and recommends product improvements.',
    category: 'assistant-tools',
    imageUrl: 'https://placehold.co/600x400.png',
    tags: ['NLP', 'Clustering', 'Insights']
  },
  {
    id: 'inventory-forecast-bot',
    name: 'Inventory Forecast Bot',
    description: 'Predicts stock requirements and flags supply risks.',
    category: 'automation-ops',
    imageUrl: 'https://placehold.co/600x400.png',
    tags: ['Forecasting', 'Supply Chain', 'Alerts']
  },
  {
    id: 'policy-compliance-checker',
    name: 'Policy Compliance Checker',
    description: 'Scans processes and documents to highlight compliance gaps.',
    category: 'agent-catalog',
    imageUrl: 'https://placehold.co/600x400.png',
    tags: ['Compliance', 'Audit', 'Policy']
  },
  {
    id: 'security-log-sentinel',
    name: 'Security Log Sentinel',
    description: 'Analyzes logs for anomalies and suggests actionable responses.',
    category: 'agent-catalog',
    imageUrl: 'https://placehold.co/600x400.png',
    tags: ['SIEM', 'Anomaly Detection', 'Response']
  },
  {
    id: 'vendor-intake-orchestrator',
    name: 'Vendor Intake Orchestrator',
    description: 'Streamlines vendor onboarding and assessment workflows.',
    category: 'automation-ops',
    imageUrl: 'https://placehold.co/600x400.png',
    tags: ['Onboarding', 'Assessment', 'Workflow']
  },
  {
    id: 'content-brief-generator',
    name: 'Content Brief Generator',
    description: 'Turns keywords into SEO-ready briefs with outline and references.',
    category: 'assistant-tools',
    imageUrl: 'https://placehold.co/600x400.png',
    tags: ['SEO', 'Brief', 'Content']
  },
  {
    id: 'it-ops-auto-remediator',
    name: 'IT Ops Auto Remediator',
    description: 'Detects common infra issues and triggers pre-approved runbooks.',
    category: 'automation-ops',
    imageUrl: 'https://placehold.co/600x400.png',
    tags: ['Runbooks', 'Infra', 'Monitoring']
  },
  {
    id: 'cost-optimization-advisor',
    name: 'Cost Optimization Advisor',
    description: 'Finds cloud/app waste and recommends savings actions.',
    category: 'assistant-tools',
    imageUrl: 'https://placehold.co/600x400.png',
    tags: ['FinOps', 'Savings', 'Recommendations']
  },
  {
    id: 'contract-intelligence-agent',
    name: 'Contract Intelligence Agent',
    description: 'Extracts key terms from contracts and tracks obligations.',
    category: 'agent-catalog',
    imageUrl: 'https://placehold.co/600x400.png',
    tags: ['OCR', 'Extraction', 'Obligations']
  },
  {
    id: 'recruiting-matcher',
    name: 'Recruiting Matcher',
    description: 'Matches candidates to roles and drafts outreach messages.',
    category: 'assistant-tools',
    imageUrl: 'https://placehold.co/600x400.png',
    tags: ['Matching', 'Outreach', 'HR']
  },
  {
    id: 'support-auto-triage',
    name: 'Support Auto Triage',
    description: 'Routes tickets by intent, urgency and sentiment with summaries.',
    category: 'assistant-tools',
    imageUrl: 'https://placehold.co/600x400.png',
    tags: ['Routing', 'Summaries', 'Sentiment']
  },
  {
    id: 'partner-program-manager',
    name: 'Partner Program Manager',
    description: 'Tracks partner leads, co-sell motions, and collateral requests.',
    category: 'automation-ops',
    imageUrl: 'https://placehold.co/600x400.png',
    tags: ['Partners', 'Pipeline', 'Enablement']
  },
  {
    id: 'churn-prediction-analyst',
    name: 'Churn Prediction Analyst',
    description: 'Scores accounts at risk and suggests save plays.',
    category: 'agent-catalog',
    imageUrl: 'https://placehold.co/600x400.png',
    tags: ['Churn', 'Save Plays', 'Scoring']
  },
  {
    id: 'finance-close-buddy',
    name: 'Finance Close Buddy',
    description: 'Automates close checklist and reconciliations.',
    category: 'automation-ops',
    imageUrl: 'https://placehold.co/600x400.png',
    tags: ['Close', 'Reconciliation', 'Checklists']
  },
  {
    id: 'governance-drift-monitor',
    name: 'Governance Drift Monitor',
    description: 'Alerts on configuration drift vs. policy baselines.',
    category: 'agent-catalog',
    imageUrl: 'https://placehold.co/600x400.png',
    tags: ['Drift', 'Baseline', 'Alerts']
  },
  {
    id: 'data-quality-guardian',
    name: 'Data Quality Guardian',
    description: 'Continuously checks data pipelines and flags quality issues.',
    category: 'process-mining',
    imageUrl: 'https://placehold.co/600x400.png',
    tags: ['DQ', 'Pipelines', 'Anomalies']
  },
  {
    id: 'meeting-notes-synthesizer',
    name: 'Meeting Notes Synthesizer',
    description: 'Turns call recordings into action items and CRM updates.',
    category: 'assistant-tools',
    imageUrl: 'https://placehold.co/600x400.png',
    tags: ['Transcription', 'Actions', 'CRM']
  },
  // --- End placeholders ---
  {
    id: 'hr-process-automation',
    name: 'HR Process Automation Accelerator',
    description: 'Automate HR workflows from onboarding to performance management.',
    category: 'automation-ops',
    imageUrl: 'https://placehold.co/600x400.png',
    tags: ['Employee Onboarding', 'Payroll Automation', 'Leave Management']
  },
  {
    id: 'sap-integration-connector',
    name: 'SAP Integration Connector',
    description: 'Seamlessly integrate SAP systems with your automation infrastructure.',
    category: 'automation-ops',
    imageUrl: 'https://placehold.co/600x400.png',
    tags: ['ERP Integration', 'Data Synchronization', 'Business Process Automation'],
    isTrending: true
  },
  {
    id: 'aws-glue-etl',
    name: 'AWS Glue ETL Template',
    description: 'Build serverless ETL pipelines with AWS Glue for data integration.',
    category: 'automation-ops',
    imageUrl: 'https://placehold.co/600x400.png',
    tags: ['Data Integration', 'Serverless ETL', 'Cloud Data Processing']
  },
  {
    id: 'document-processing-automation',
    name: 'Document Processing Automation Template',
    description: 'Automate document processing with OCR and intelligent data extraction.',
    category: 'automation-ops',
    imageUrl: 'https://placehold.co/600x400.png',
    tags: ['OCR', 'Document Classification', 'Data Extraction']
  },
  {
    id: 'hyperscience-document',
    name: 'Hyperscience Document Automation Template',
    description: 'AI-powered document processing for claims and data extraction.',
    category: 'automation-ops',
    imageUrl: 'https://placehold.co/600x400.png',
    tags: ['AI Document Processing', 'Claims Automation', 'Data Extraction']
  },
  {
    id: 'ai-automation-skill',
    name: 'AI Automation Skill Template',
    description: 'Build intelligent automation with machine learning capabilities.',
    category: 'automation-ops',
    imageUrl: 'https://placehold.co/600x400.png',
    tags: ['Machine Learning', 'Predictive Analytics', 'Task Automation']
  },
  {
    id: 'blue-prism-ia',
    name: 'SS&C Blue Prism IA Template',
    description: 'Enterprise-grade intelligent automation platform for process optimization.',
    category: 'automation-ops',
    imageUrl: 'https://placehold.co/600x400.png',
    tags: ['Intelligent Automation', 'Process Optimization', 'RPA Governance']
  },
  {
    id: 'business-process-bot',
    name: 'Business Process Automation Bot',
    description: 'Automate repetitive business processes with configurable bots.',
    category: 'automation-ops',
    imageUrl: 'https://placehold.co/600x400.png',
    tags: ['Workflow Automation', 'Task Management', 'Process Optimization']
  },
  {
    id: 'automation-anywhere-enterprise',
    name: 'Automation Anywhere Enterprise Bot',
    description: 'Deploy enterprise-scale RPA with business rules and exception handling.',
    category: 'automation-ops',
    imageUrl: 'https://placehold.co/600x400.png',
    tags: ['Robotic Process Automation', 'Business Rules Engine', 'Exception Handling']
  },
  {
    id: 'cloud-workflow-automation',
    name: 'Cloud Workflow Automation Template',
    description: 'Build cloud-native workflows with automated notifications and data sync.',
    category: 'automation-ops',
    imageUrl: 'https://placehold.co/600x400.png',
    tags: ['Cloud Integration', 'Data Sync', 'Automated Notifications']
  },
  {
    id: 'azure-data-factory',
    name: 'Azure Data Factory Pipeline Template',
    description: 'Create data integration pipelines in the cloud with Azure.',
    category: 'automation-ops',
    imageUrl: 'https://placehold.co/600x400.png',
    tags: ['Cloud Data Orchestration', 'ETL Automation', 'Data Integration']
  },
  {
    id: 'crm-workflow-automation',
    name: 'CRM Workflow Automation Template',
    description: 'Automate sales workflows from lead nurturing to pipeline management.',
    category: 'automation-ops',
    imageUrl: 'https://placehold.co/600x400.png',
    tags: ['Lead Nurturing', 'Customer Engagement', 'Sales Pipeline Management']
  },
  {
    id: 'ecommerce-automation',
    name: 'E-commerce Automation Template',
    description: 'Streamline e-commerce operations from order processing to customer notifications.',
    category: 'automation-ops',
    industry: 'retail',
    imageUrl: 'https://placehold.co/600x400.png',
    tags: ['Order Processing', 'Inventory Management', 'Customer Notifications']
  },
  {
    id: 'digital-worker-finance',
    name: 'Digital Worker for Finance',
    description: 'Deploy digital workers for financial process automation.',
    category: 'automation-ops',
    industry: 'finance',
    imageUrl: 'https://placehold.co/600x400.png',
    tags: ['Invoice Automation', 'Expense Management', 'Financial Reporting']
  },
  {
    id: 'digital-worker-hr',
    name: 'Digital Worker for HR',
    description: 'Automate HR processes with intelligent digital workers.',
    category: 'automation-ops',
    industry: 'hr',
    imageUrl: 'https://placehold.co/600x400.png',
    tags: ['Recruitment Automation', 'Employee Data Management', 'Compliance Tracking']
  },
  {
    id: 'aws-integration-automation',
    name: 'AWS Integration Automation Template',
    description: 'Build serverless automation workflows with AWS services.',
    category: 'automation-ops',
    imageUrl: 'https://placehold.co/600x400.png',
    tags: ['Cloud Service Integration', 'Data Migration', 'Serverless Automation']
  },
  {
    id: 'streamsets-data-collector',
    name: 'StreamSets Data Collector Template',
    description: 'Build real-time data pipelines with monitoring capabilities.',
    category: 'automation-ops',
    imageUrl: 'https://placehold.co/600x400.png',
    tags: ['Real-Time Data Streaming', 'Pipeline Monitoring', 'Data Integration']
  },

  // Assistant Tools
  {
    id: 'clickup-task-automation',
    name: 'ClickUp Task Automation Template',
    description: 'Automate task assignment, deadline prediction, and team collaboration workflows.',
    category: 'assistant-tools',
    imageUrl: 'https://placehold.co/600x400.png',
    tags: ['Task Assignment', 'Deadline Prediction', 'Team Collaboration']
  },
  {
    id: 'marketing-automation-workflow',
    name: 'Marketing Automation Workflow',
    description: 'Streamline marketing campaigns with automated email sequences and social scheduling.',
    category: 'assistant-tools',
    industry: 'marketing',
    imageUrl: 'https://placehold.co/600x400.png',
    tags: ['Campaign Management', 'Email Automation', 'Social Media Scheduling'],
    isTrending: true
  },
  {
    id: 'asana-workflow-automation',
    name: 'Asana Workflow Automation Template',
    description: 'Automate project tracking, task management, and team notifications in Asana.',
    category: 'assistant-tools',
    imageUrl: 'https://placehold.co/600x400.png',
    tags: ['Task Management', 'Notification Automation', 'Project Tracking']
  },
  {
    id: 'business-optimization-automation',
    name: 'Business Optimization Automation Template',
    description: 'Optimize business operations with automated efficiency tracking and resource allocation.',
    category: 'assistant-tools',
    imageUrl: 'https://placehold.co/600x400.png',
    tags: ['Efficiency Improvement', 'Resource Allocation', 'Performance Tracking']
  },
  {
    id: 'grammarly-writing-automation',
    name: 'Grammarly Writing Automation Template',
    description: 'Enhance content quality with automated grammar checking and tone analysis.',
    category: 'assistant-tools',
    imageUrl: 'https://placehold.co/600x400.png',
    tags: ['Grammar Checking', 'Tone Analysis', 'Content Enhancement']
  },
  {
    id: 'social-media-automation-applet',
    name: 'Social Media Automation Applet',
    description: 'Schedule posts, curate content, and track engagement across social platforms.',
    category: 'assistant-tools',
    imageUrl: 'https://placehold.co/600x400.png',
    tags: ['Post Scheduling', 'Content Curation', 'Engagement Tracking']
  },
  {
    id: 'taskade-productivity-template',
    name: 'Taskade Productivity Template',
    description: 'Collaborate on tasks with real-time updates and project management features.',
    category: 'assistant-tools',
    imageUrl: 'https://placehold.co/600x400.png',
    tags: ['Task Collaboration', 'Real-Time Updates', 'Project Management']
  },
  {
    id: 'home-automation-applet',
    name: 'Home Automation Applet',
    description: 'Control smart devices, manage energy usage, and enhance home security.',
    category: 'assistant-tools',
    imageUrl: 'https://placehold.co/600x400.png',
    tags: ['Smart Device Control', 'Energy Management', 'Security Alerts']
  },
  {
    id: 'work-productivity-automation',
    name: 'Work Productivity Automation Applet',
    description: 'Boost productivity with task prioritization, time tracking, and focus mode features.',
    category: 'assistant-tools',
    imageUrl: 'https://placehold.co/600x400.png',
    tags: ['Task Prioritization', 'Time Tracking', 'Focus Mode']
  },
  {
    id: 'database-automation-template',
    name: 'Database Automation Template',
    description: 'Automate data entry, record management, and report generation tasks.',
    category: 'assistant-tools',
    imageUrl: 'https://placehold.co/600x400.png',
    tags: ['Data Entry Automation', 'Record Management', 'Report Generation']
  },
  {
    id: 'notion-ai-notes-template',
    name: 'Notion AI Notes Template',
    description: 'Organize notes and tasks with AI-powered content creation and automation.',
    category: 'assistant-tools',
    imageUrl: 'https://placehold.co/600x400.png',
    tags: ['Note Automation', 'Task Organization', 'Content Creation']
  },
  {
    id: 'productivity-automation-template',
    name: 'Productivity Automation Template',
    description: 'Streamline daily tasks with calendar integration and email management.',
    category: 'assistant-tools',
    imageUrl: 'https://placehold.co/600x400.png',
    tags: ['Task Automation', 'Calendar Integration', 'Email Management']
  },
  {
    id: 'reclaim-ai-scheduling',
    name: 'Reclaim AI Scheduling Template',
    description: 'Optimize calendar with smart meeting scheduling and focus time management.',
    category: 'assistant-tools',
    imageUrl: 'https://placehold.co/600x400.png',
    tags: ['Calendar Optimization', 'Meeting Scheduling', 'Focus Time Management']
  },
  {
    id: 'workflow-automation-template',
    name: 'Workflow Automation Template',
    description: 'Automate team processes with collaboration tools and file sharing integration.',
    category: 'assistant-tools',
    imageUrl: 'https://placehold.co/600x400.png',
    tags: ['Process Automation', 'Team Collaboration', 'File Sharing']
  },
  {
    id: 'clockwise-scheduling-template',
    name: 'Clockwise Scheduling Template',
    description: 'Protect focus time and optimize meetings with intelligent calendar management.',
    category: 'assistant-tools',
    imageUrl: 'https://placehold.co/600x400.png',
    tags: ['Meeting Optimization', 'Focus Time Protection', 'Calendar Management']
  },
  {
    id: 'community-workflow-automation',
    name: 'Community Workflow Automation Template',
    description: 'Engage community members with automated forum management and event scheduling.',
    category: 'assistant-tools',
    imageUrl: 'https://placehold.co/600x400.png',
    tags: ['User Engagement', 'Forum Management', 'Event Scheduling']
  },
  {
    id: 'feedhive-social-media',
    name: 'FeedHive Social Media Template',
    description: 'Manage social media with AI-powered content suggestions and analytics.',
    category: 'assistant-tools',
    imageUrl: 'https://placehold.co/600x400.png',
    tags: ['Social Media Posting', 'Content Suggestions', 'Analytics Tracking']
  },
  {
    id: 'business-blueprint-automation',
    name: 'Business Blueprint Automation Template',
    description: 'Plan and track business strategy with automated resource management.',
    category: 'assistant-tools',
    imageUrl: 'https://placehold.co/600x400.png',
    tags: ['Strategic Planning', 'Resource Management', 'Milestone Tracking']
  },
  {
    id: 'airtable-data-automation',
    name: 'Airtable Data Automation Template',
    description: 'Organize data with automated workflows and integration actions.',
    category: 'assistant-tools',
    imageUrl: 'https://placehold.co/600x400.png',
    tags: ['Data Organization', 'Workflow Triggers', 'Integration Actions']
  },
  {
    id: 'trengo-communication-template',
    name: 'Trengo Communication Template',
    description: 'Manage multi-channel communications with smart routing and engagement tools.',
    category: 'assistant-tools',
    imageUrl: 'https://placehold.co/600x400.png',
    tags: ['Multi-Channel Inbox', 'Smart Routing', 'Customer Engagement']
  },

  // Process Mining
  {
    id: 'apromore-process-mining',
    name: 'Apromore Process Mining Template',
    description: 'Visualize processes, identify bottlenecks, and integrate custom data sources.',
    category: 'process-mining',
    imageUrl: 'https://placehold.co/600x400.png',
    tags: ['Process Visualization', 'Bottleneck Identification', 'Custom Data Integration']
  },
  {
    id: 'skan-ai-digital-twin',
    name: 'Skan AI Digital Twin Template',
    description: 'Create digital twins of processes with real-time insights and optimization.',
    category: 'process-mining',
    imageUrl: 'https://placehold.co/600x400.png',
    tags: ['Real-Time Insights', 'Human-System Integration', 'Process Optimization']
  },
  {
    id: 'source-system-process',
    name: 'Source System Process Template',
    description: 'Integrate and analyze processes from multiple source systems.',
    category: 'process-mining',
    imageUrl: 'https://placehold.co/600x400.png',
    tags: ['Data Source Integration', 'Process Mapping', 'System Audit']
  },
  {
    id: 'igrafx-process-optimization',
    name: 'iGrafx Process Optimization Template',
    description: 'Simulate processes and optimize workflows with analytics integration.',
    category: 'process-mining',
    imageUrl: 'https://placehold.co/600x400.png',
    tags: ['Process Simulation', 'Analytics Integration', 'Workflow Improvement']
  },
  {
    id: 'actionable-process-blueprint',
    name: 'Actionable Process Blueprint',
    description: 'Transform process insights into actionable improvement plans.',
    category: 'process-mining',
    imageUrl: 'https://placehold.co/600x400.png',
    tags: ['Process Improvement', 'Automation Opportunities', 'KPI Tracking']
  },
  {
    id: 'celonis-execution-management',
    name: 'Celonis Execution Management Template',
    description: 'Execute process improvements with data-driven decision making.',
    category: 'process-mining',
    imageUrl: 'https://placehold.co/600x400.png',
    tags: ['Process Execution', 'Performance Monitoring', 'Data-Driven Decisions']
  },
  {
    id: 'process-connector-analysis',
    name: 'Process Connector Analysis Template',
    description: 'Analyze system integrations and data flows between process connectors.',
    category: 'process-mining',
    imageUrl: 'https://placehold.co/600x400.png',
    tags: ['System Integration', 'Data Flow Monitoring', 'Connector Performance']
  },
  {
    id: 'minit-process-discovery',
    name: 'Minit Process Discovery Template',
    description: 'Discover and map processes with efficiency analysis and compliance tracking.',
    category: 'process-mining',
    imageUrl: 'https://placehold.co/600x400.png',
    tags: ['Process Mapping', 'Efficiency Analysis', 'Compliance Tracking']
  },
  {
    id: 'use-case-process-template',
    name: 'Use Case Process Template',
    description: 'Industry-specific process analysis with benchmarking and best practices.',
    category: 'process-mining',
    imageUrl: 'https://placehold.co/600x400.png',
    tags: ['Industry-Specific Analysis', 'Process Benchmarking', 'Best Practices']
  },
  {
    id: 'qpr-process-analyzer',
    name: 'QPR ProcessAnalyzer Template',
    description: 'Gain process insights with advanced visualization and performance tracking.',
    category: 'process-mining',
    imageUrl: 'https://placehold.co/600x400.png',
    tags: ['Process Insights', 'Visualization Tools', 'Performance Tracking']
  },
  {
    id: 'data-transformation-process',
    name: 'Data Transformation Process Template',
    description: 'Transform and cleanse data for process mining with quality monitoring.',
    category: 'process-mining',
    imageUrl: 'https://placehold.co/600x400.png',
    tags: ['Data Cleansing', 'ETL Processes', 'Data Quality Monitoring']
  },
  {
    id: 'signavio-process-intelligence',
    name: 'Signavio Process Intelligence Template',
    description: 'Detect bottlenecks and optimize processes with intelligent analytics.',
    category: 'process-mining',
    imageUrl: 'https://placehold.co/600x400.png',
    tags: ['Process Analytics', 'Bottleneck Detection', 'Optimization Insights']
  },
  {
    id: 'process-data-extraction',
    name: 'Process Data Extraction Tool',
    description: 'Extract and analyze event logs for process mining inputs.',
    category: 'process-mining',
    imageUrl: 'https://placehold.co/600x400.png',
    tags: ['Log Analysis', 'Event Data Collection', 'Process Mining Input']
  },
  {
    id: 'myinvenio-process-analysis',
    name: 'myInvenio Process Analysis Template',
    description: 'Simulate processes and optimize costs with workflow insights.',
    category: 'process-mining',
    imageUrl: 'https://placehold.co/600x400.png',
    tags: ['Process Simulation', 'Cost Optimization', 'Workflow Insights']
  },
  {
    id: 'automation-opportunity-identification',
    name: 'Automation Opportunity Identification Template',
    description: 'Identify and prioritize automation opportunities with ROI analysis.',
    category: 'process-mining',
    imageUrl: 'https://placehold.co/600x400.png',
    tags: ['ROI Analysis', 'Automation Feasibility', 'Process Prioritization']
  },
  {
    id: 'process-optimization-analysis',
    name: 'Process Optimization Analysis Template',
    description: 'Analyze processes for efficiency gains and resource optimization.',
    category: 'process-mining',
    imageUrl: 'https://placehold.co/600x400.png',
    tags: ['Efficiency Gains', 'Cost Reduction', 'Resource Allocation']
  },
  {
    id: 'timeline-process-analysis',
    name: 'Timeline Process Analysis Tool',
    description: 'Analyze process timelines with event sequencing and duration tracking.',
    category: 'process-mining',
    imageUrl: 'https://placehold.co/600x400.png',
    tags: ['Event Sequencing', 'Duration Analysis', 'Process Visualization']
  },
  {
    id: 'disco-process-mining',
    name: 'Disco Process Mining Template',
    description: 'Discover processes with performance analysis and visual mapping.',
    category: 'process-mining',
    imageUrl: 'https://placehold.co/600x400.png',
    tags: ['Process Discovery', 'Performance Analysis', 'Visual Mapping']
  },
  {
    id: 'process-mining-insight',
    name: 'Process Mining Insight Template',
    description: 'Generate insights for decision support and continuous improvement.',
    category: 'process-mining',
    imageUrl: 'https://placehold.co/600x400.png',
    tags: ['Process Insights', 'Decision Support', 'Continuous Improvement']
  },
  {
    id: 'logpickr-process-analytics',
    name: 'Logpickr Process Analytics Template',
    description: 'Real-time process monitoring with optimization and data integration.',
    category: 'process-mining',
    imageUrl: 'https://placehold.co/600x400.png',
    tags: ['Real-Time Monitoring', 'Process Optimization', 'Data Integration']
  },

  // Integration Services
  {
    id: 'informatica-ipaas',
    name: 'Informatica iPaaS Connector',
    description: 'Cloud Integration, Data Sync, Enterprise Connectivity.',
    category: 'integration-services',
    imageUrl: 'https://placehold.co/600x400.png',
    tags: ['Cloud Integration', 'Data Sync', 'Enterprise Connectivity']
  },
  {
    id: 'crm-data-export',
    name: 'CRM Data Export Connector',
    description: 'Data Export, Reporting, Analytics Integration.',
    category: 'integration-services',
    imageUrl: 'https://placehold.co/600x400.png',
    tags: ['Data Export', 'Reporting', 'Analytics Integration']
  },
  {
    id: 'ai-powered-automation-connector',
    name: 'AI-Powered Automation Connector',
    description: 'AI Integration, Automation, Decision Support.',
    category: 'integration-services',
    imageUrl: 'https://placehold.co/600x400.png',
    tags: ['AI Integration', 'Automation', 'Decision Support']
  },
  {
    id: 'talend-integration',
    name: 'Talend Integration Connector',
    description: 'Data Integration, ETL Processes, Cloud Connectivity.',
    category: 'integration-services',
    imageUrl: 'https://placehold.co/600x400.png',
    tags: ['Data Integration', 'ETL Processes', 'Cloud Connectivity']
  },
  {
    id: 'erp-system-connector',
    name: 'ERP System Connector',
    description: 'ERP Integration, Financial Data Sync, Inventory Management.',
    category: 'integration-services',
    imageUrl: 'https://placehold.co/600x400.png',
    tags: ['ERP Integration', 'Financial Data Sync', 'Inventory Management']
  },
  {
    id: 'matillion-data',
    name: 'Matillion Data Connector',
    description: 'Cloud Data Integration, ETL Automation, Data Warehousing.',
    category: 'integration-services',
    imageUrl: 'https://placehold.co/600x400.png',
    tags: ['Cloud Data Integration', 'ETL Automation', 'Data Warehousing']
  },
  {
    id: 'custom-integration',
    name: 'Custom Integration Connector',
    description: 'Custom API, Tailored Workflows, Flexible Integration.',
    category: 'integration-services',
    imageUrl: 'https://placehold.co/600x400.png',
    tags: ['Custom API', 'Tailored Workflows', 'Flexible Integration']
  },
  {
    id: 'saas-application',
    name: 'SaaS Application Connector',
    description: 'Cloud App Integration, Data Sync, User Management.',
    category: 'integration-services',
    imageUrl: 'https://placehold.co/600x400.png',
    tags: ['Cloud App Integration', 'Data Sync', 'User Management']
  },
  {
    id: 'database-integration',
    name: 'Database Integration Connector',
    description: 'SQL Integration, Data Warehousing, Real-Time Sync.',
    category: 'integration-services',
    imageUrl: 'https://placehold.co/600x400.png',
    tags: ['SQL Integration', 'Data Warehousing', 'Real-Time Sync']
  },
  {
    id: 'fivetran-data-pipeline',
    name: 'Fivetran Data Pipeline Connector',
    description: 'Automated Data Sync, Cloud Integration, Data Warehousing.',
    category: 'integration-services',
    imageUrl: 'https://placehold.co/600x400.png',
    tags: ['Automated Data Sync', 'Cloud Integration', 'Data Warehousing']
  },
  {
    id: 'community-built-connector',
    name: 'Community-Built Connector',
    description: 'Open-Source Integration, Custom Solutions, Community Support.',
    category: 'integration-services',
    imageUrl: 'https://placehold.co/600x400.png',
    tags: ['Open-Source Integration', 'Custom Solutions', 'Community Support']
  },
  {
    id: 'data-source-integration',
    name: 'Data Source Integration Connector',
    description: 'Data Ingestion, ETL Processes, Data Pipeline Management.',
    category: 'integration-services',
    imageUrl: 'https://placehold.co/600x400.png',
    tags: ['Data Ingestion', 'ETL Processes', 'Data Pipeline Management']
  },
  {
    id: 'secure-messaging',
    name: 'Secure Messaging Connector',
    description: 'Encrypted Communication, Secure Data Transfer, Compliance.',
    category: 'integration-services',
    imageUrl: 'https://placehold.co/600x400.png',
    tags: ['Encrypted Communication', 'Secure Data Transfer', 'Compliance']
  },
  {
    id: 'workflow-automation-connector',
    name: 'Workflow Automation Connector',
    description: 'Task Automation, Process Orchestration, Event Triggers.',
    category: 'integration-services',
    imageUrl: 'https://placehold.co/600x400.png',
    tags: ['Task Automation', 'Process Orchestration', 'Event Triggers']
  },
  {
    id: 'project-management-integration',
    name: 'Project Management Integration Connector',
    description: 'Task Sync, Milestone Tracking, Team Collaboration.',
    category: 'integration-services',
    imageUrl: 'https://placehold.co/600x400.png',
    tags: ['Task Sync', 'Milestone Tracking', 'Team Collaboration']
  },
  {
    id: 'enterprise-integration',
    name: 'Enterprise Integration Connector',
    description: 'Large-Scale Integration, Multi-System Orchestration, API Management.',
    category: 'integration-services',
    imageUrl: 'https://placehold.co/600x400.png',
    tags: ['Large-Scale Integration', 'Multi-System Orchestration', 'API Management']
  },
  {
    id: 'exalate-sync',
    name: 'Exalate Sync Connector',
    description: 'Cross-Platform Sync, ITSM Integration, Secure Data Transfer.',
    category: 'integration-services',
    imageUrl: 'https://placehold.co/600x400.png',
    tags: ['Cross-Platform Sync', 'ITSM Integration', 'Secure Data Transfer']
  },
  {
    id: 'on-premise-system',
    name: 'On-Premise System Connector',
    description: 'Legacy System Integration, Data Migration, Hybrid Cloud.',
    category: 'integration-services',
    imageUrl: 'https://placehold.co/600x400.png',
    tags: ['Legacy System Integration', 'Data Migration', 'Hybrid Cloud']
  },
  {
    id: 'cloud-business-app',
    name: 'Cloud Business App Connector',
    description: 'Cloud Service Integration, SaaS Management, User Provisioning.',
    category: 'integration-services',
    imageUrl: 'https://placehold.co/600x400.png',
    tags: ['Cloud Service Integration', 'SaaS Management', 'User Provisioning']
  },
  {
    id: 'portable-long-tail',
    name: 'Portable Long-Tail Connector',
    description: 'Niche API Integration, Custom Data Sync, Flexible Connectivity.',
    category: 'integration-services',
    imageUrl: 'https://placehold.co/600x400.png',
    tags: ['Niche API Integration', 'Custom Data Sync', 'Flexible Connectivity']
  },

  // Agent Catalog
  {
    id: 'salesforce-agentforce',
    name: 'Salesforce Agentforce Sales Agent',
    description: 'Sales Automation, CRM Integration, Lead Management.',
    category: 'agent-catalog',
    imageUrl: 'https://placehold.co/600x400.png',
    tags: ['Sales Automation', 'CRM Integration', 'Lead Management']
  },
  {
    id: 'data-analysis-ai',
    name: 'Data Analysis AI Agent',
    description: 'Data Insights, Predictive Analytics, Reporting Automation.',
    category: 'agent-catalog',
    imageUrl: 'https://placehold.co/600x400.png',
    tags: ['Data Insights', 'Predictive Analytics', 'Reporting Automation']
  },
  {
    id: 'crm-ai-agent',
    name: 'CRM AI Agent',
    description: 'Customer Relationship Management, Lead Scoring, Sales Forecasting.',
    category: 'agent-catalog',
    imageUrl: 'https://placehold.co/600x400.png',
    tags: ['Customer Relationship Management', 'Lead Scoring', 'Sales Forecasting']
  },
  {
    id: 'lindy-ai-meeting',
    name: 'Lindy AI Meeting Scheduler',
    description: 'Meeting Automation, Calendar Integration, Scheduling Efficiency.',
    category: 'agent-catalog',
    imageUrl: 'https://placehold.co/600x400.png',
    tags: ['Meeting Automation', 'Calendar Integration', 'Scheduling Efficiency']
  },
  {
    id: 'workflow-automation-ai',
    name: 'Workflow Automation AI Agent',
    description: 'Process Automation, Task Scheduling, Resource Allocation.',
    category: 'agent-catalog',
    imageUrl: 'https://placehold.co/600x400.png',
    tags: ['Process Automation', 'Task Scheduling', 'Resource Allocation']
  },
  {
    id: 'business-automation-ai',
    name: 'Business Automation AI Agent',
    description: 'Operational Efficiency, Process Optimization, Decision Support.',
    category: 'agent-catalog',
    imageUrl: 'https://placehold.co/600x400.png',
    tags: ['Operational Efficiency', 'Process Optimization', 'Decision Support']
  },
  {
    id: 'marketing-ai-agent',
    name: 'Marketing AI Agent',
    description: 'Campaign Management, Audience Segmentation, Content Personalization.',
    category: 'agent-catalog',
    imageUrl: 'https://placehold.co/600x400.png',
    tags: ['Campaign Management', 'Audience Segmentation', 'Content Personalization']
  },
  {
    id: 'data-extraction-ai',
    name: 'Data Extraction AI Agent',
    description: 'Document Parsing, Data Capture, Information Retrieval.',
    category: 'agent-catalog',
    imageUrl: 'https://placehold.co/600x400.png',
    tags: ['Document Parsing', 'Data Capture', 'Information Retrieval']
  },
  {
    id: 'insurance-claims-ai',
    name: 'Insurance Claims AI Agent',
    description: 'Claims Processing, Fraud Detection, Policy Management.',
    category: 'agent-catalog',
    industry: 'insurance',
    imageUrl: 'https://placehold.co/600x400.png',
    tags: ['Claims Processing', 'Fraud Detection', 'Policy Management']
  },
  {
    id: 'zendesk-ai-ticket',
    name: 'Zendesk AI Ticket Agent',
    description: 'Ticket Automation, Sentiment Analysis, Customer Support.',
    category: 'agent-catalog',
    imageUrl: 'https://placehold.co/600x400.png',
    tags: ['Ticket Automation', 'Sentiment Analysis', 'Customer Support']
  },
  {
    id: 'property-management-ai',
    name: 'Property Management AI Agent',
    description: 'Lease Management, Maintenance Scheduling, Tenant Communication.',
    category: 'agent-catalog',
    industry: 'real-estate',
    imageUrl: 'https://placehold.co/600x400.png',
    tags: ['Lease Management', 'Maintenance Scheduling', 'Tenant Communication']
  },
  {
    id: 'debt-collection-ai',
    name: 'Debt Collection AI Agent',
    description: 'Payment Reminders, Negotiation Support, Compliance Tracking.',
    category: 'agent-catalog',
    industry: 'finance',
    imageUrl: 'https://placehold.co/600x400.png',
    tags: ['Payment Reminders', 'Negotiation Support', 'Compliance Tracking']
  },
  {
    id: 'decision-support-ai',
    name: 'Decision Support AI Agent',
    description: 'Business Intelligence, Scenario Analysis, Risk Assessment.',
    category: 'agent-catalog',
    imageUrl: 'https://placehold.co/600x400.png',
    tags: ['Business Intelligence', 'Scenario Analysis', 'Risk Assessment']
  },
  {
    id: 'liveperson-conversational',
    name: 'LivePerson Conversational Agent',
    description: 'Omnichannel Messaging, Intent Recognition, Customer Engagement.',
    category: 'agent-catalog',
    imageUrl: 'https://placehold.co/600x400.png',
    tags: ['Omnichannel Messaging', 'Intent Recognition', 'Customer Engagement']
  },
  {
    id: 'low-code-automation-ai',
    name: 'Low-Code Automation AI Agent',
    description: 'No-Code Development, Workflow Automation, User-Friendly Interface.',
    category: 'agent-catalog',
    imageUrl: 'https://placehold.co/600x400.png',
    tags: ['No-Code Development', 'Workflow Automation', 'User-Friendly Interface']
  },
  {
    id: 'policy-management-ai',
    name: 'Policy Management AI Agent',
    description: 'Policy Compliance, Document Management, Approval Workflows.',
    category: 'agent-catalog',
    imageUrl: 'https://placehold.co/600x400.png',
    tags: ['Policy Compliance', 'Document Management', 'Approval Workflows']
  },
  {
    id: 'maintenance-management-ai',
    name: 'Maintenance Management AI Agent',
    description: 'Preventive Maintenance, Asset Tracking, Work Order Automation.',
    category: 'agent-catalog',
    imageUrl: 'https://placehold.co/600x400.png',
    tags: ['Preventive Maintenance', 'Asset Tracking', 'Work Order Automation']
  },
  {
    id: 'tenant-communication-ai',
    name: 'Tenant Communication AI Agent',
    description: 'Resident Engagement, Notification System, Feedback Collection.',
    category: 'agent-catalog',
    imageUrl: 'https://placehold.co/600x400.png',
    tags: ['Resident Engagement', 'Notification System', 'Feedback Collection']
  },
  {
    id: 'partner-solution-ai',
    name: 'Partner Solution AI Agent',
    description: 'Collaborative Workflows, Partner Integration, Joint Venture Support.',
    category: 'agent-catalog',
    imageUrl: 'https://placehold.co/600x400.png',
    tags: ['Collaborative Workflows', 'Partner Integration', 'Joint Venture Support']
  },
  {
    id: 'orby-ai-enterprise',
    name: 'Orby AI Enterprise Agent',
    description: 'Generative Process Automation, Workflow Efficiency, Scalable Deployment.',
    category: 'agent-catalog',
    imageUrl: 'https://placehold.co/600x400.png',
    tags: ['Generative Process Automation', 'Workflow Efficiency', 'Scalable Deployment']
  },
  {
    id: 'logon-strategic-intelligence-agent',
    name: 'LOG_ON Strategic Intelligence Agent',
    description: 'Conversational, autonomous agent for business strategy and opportunity identification.',
    category: 'agent-catalog',
    imageUrl: 'https://placehold.co/600x400.png',
    tags: ['Strategic AI', 'Business Intelligence', 'Opportunity Identification', 'Conversational Agent']
  },
  {
    id: 'ai-marketing-campaign-agent',
    name: 'AI Marketing Campaign Agent',
    description: 'Develops and optimizes marketing campaigns using advanced AI algorithms.',
    category: 'agent-catalog',
    imageUrl: 'https://placehold.co/600x400.png',
    tags: ['Marketing Automation', 'Campaign Optimization', 'AI Marketing']
  }
];
