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
}
