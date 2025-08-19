import type { Agent, Assessment, Review, QuickAction, Activity, SuggestedAgent, Capability } from './types';
import { AreaChart, Cpu, Lightbulb, Lock, Rocket, Scaling, ShieldCheck, Workflow } from "lucide-react";


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
    { title: "Resume Assessment", href: "/assessment" },
    { title: "Browse Marketplace", href: "/marketplace" },
    { title: "New Conversation", href: "/conversation" },
];

export const activityFeed: Activity[] = [
    { type: "Assessment", description: "You completed the 'AI Readiness' assessment.", time: "2 hours ago"},
    { type: "Marketplace", description: "You viewed the profile of agent 'Aria Sterling'.", time: "1 day ago"},
    { type: "Conversation", description: "New message from LOG_ON Assistant.", time: "3 days ago"},
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
