
import type { LucideIcon } from "lucide-react";
import { z } from 'genkit';


export interface MarketplaceProduct {
  id: string;
  name: string;
  description: string;
  category: string;
  industry?: string;
  avatar: string; // was imageUrl, mapping to avatar
  tags: string[];
  isTrending?: boolean;
  specialty: string; // for compatibility
  rating: number; // for compatibility
  reviewCount: number; // for compatibility
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

export const JoinWaitlistInputSchema = z.object({
  email: z.string().email().describe('The email address of the user joining the waitlist.'),
});
export type JoinWaitlistInput = z.infer<typeof JoinWaitlistInputSchema>;
