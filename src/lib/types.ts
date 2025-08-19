
import type { LucideIcon } from "lucide-react";
import { z } from 'genkit';


export interface Agent {
  id: string;
  name: string;
  avatar: string;
  specialty: string;
  description: string;
  rating: number;
  reviewCount: number;
  tags: string[];
  isTrending?: boolean;
  category?: string;
  industry?: string;
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

export const TextToSpeechInputSchema = z.object({
  text: z.string(),
});
export type TextToSpeechInput = z.infer<typeof TextToSpeechInputSchema>;

export const TextToSpeechOutputSchema = z.object({
  media: z.string().describe("The base64 encoded WAV audio data URI."),
});
export type TextToSpeechOutput = z.infer<typeof TextToSpeechOutputSchema>;
