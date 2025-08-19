
export interface Agent {
  id: string;
  name: string;
  avatar: string;
  specialty: string;
  description: string;
  rating: number;
  reviewCount: number;
  tags: string[];
}

export interface Question {
    id: string;
    text: string;
    options: string[];
}

export interface Assessment {
    id: string;
    title: string;
    description: string;
    questions: Question[];
    subheading?: string;
    workflows?: string[];
    type?: string;
    icon?: React.ReactNode;
    sectionLabel?: string;
}

export interface Review {
    id: string;
    agentId: string;
    author: string;
    rating: number;
    comment: string;
}

export interface Message {
  id: string;
  sender: 'user' | 'ai';
  text: string;
  timestamp: string;
  isThinking?: boolean;
}

export interface QuickAction {
    title: string;
    href: string;
}

export interface Activity {
    type: string;
    description: string;
    time: string;
}

export interface SuggestedAgent {
    id: string;
    name: string;
    specialty: string;
    avatar: string;
}

export interface Capability {
    icon: React.ReactNode;
    title: string;
    description: string;
}
