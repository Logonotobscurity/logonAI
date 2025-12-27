
import type { LucideIcon } from "lucide-react";


export interface MarketplaceProduct {
  id: string;
  name: string;
  description: string;
  category: string;
  industry?: string;
  avatar: string;
  tags: string[];
  isTrending?: boolean;
  specialty: string;
  rating: number;
  reviewCount: number;
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
    icon: LucideIcon;
}

export interface Activity {
    type: string;
    description: string;
    time: string;
    icon: LucideIcon;
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

export interface MarketplaceCategory {
  value: string;
  label: string;
}

export interface Workflow {
    id: string;
    name: string;
    description: string;
    category: string;
}
