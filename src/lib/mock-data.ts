import type { Agent, Assessment, Review } from './types';

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
        id: '1',
        title: "Digital Maturity Assessment",
        description: "Benchmark your digital capabilities against industry leaders.",
        questions: [
            { id: 'q1', text: "How would you rate your company's current use of data analytics?", options: ["Non-existent", "Basic", "Intermediate", "Advanced", "Leading-edge"] },
            { id: 'q2', text: "How integrated are your digital marketing efforts?", options: ["Not at all", "Siloed", "Somewhat integrated", "Fully integrated"] },
            { id: 'q3', text: "What is your primary goal for digital transformation?", options: ["Improve efficiency", "Enhance customer experience", "Innovate products/services", "Enter new markets"] },
        ]
    },
    {
        id: '2',
        title: "AI Readiness Assessment",
        description: "Evaluate your organization's readiness for AI integration.",
        questions: [
            { id: 'q1', text: "Is your data organized and accessible for AI models?", options: ["No", "Partially", "Mostly", "Yes, fully"] },
            { id: 'q2', text: "Do you have in-house talent with AI/ML skills?", options: ["None", "A few individuals", "A dedicated team", "Multiple teams"] },
            { id: 'q3', text: "What is the biggest barrier to AI adoption in your company?", options: ["Cost", "Lack of strategy", "Data security concerns", "Technical complexity"] },
        ]
    }
];

export const reviews: Review[] = [
    { id: 'r1', agentId: '1', author: 'John D.', rating: 5, comment: 'Aria provided incredible strategic insight that completely reshaped our AI roadmap. Highly recommended!' },
    { id: 'r2', agentId: '1', author: 'Jane S.', rating: 5, comment: 'Working with Aria was a game-changer for our executive team.' },
    { id: 'r3', agentId: '2', author: 'Mike P.', rating: 5, comment: 'Kenji is a world-class ML engineer. He delivered a robust model ahead of schedule.' },
]
