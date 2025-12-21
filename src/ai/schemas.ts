
import { z } from 'zod';

/**
 * Defines the expected input for the AI-driven matching flow.
 */
export const AiDrivenMatchingInputSchema = z.object({
  userInput: z.string().describe("The user's free-text query describing their needs."),
});

/**
 * Defines the expected output from the AI-driven matching flow.
 */
export const AiDrivenMatchingOutputSchema = z.object({
  reasoning: z.string().describe("The AI's reasoning for suggesting the agents."),
  agentSuggestions: z.array(z.string()).describe("An array of suggested agent IDs."),
});

export type AiDrivenMatchingInput = z.infer<typeof AiDrivenMatchingInputSchema>;
export type AiDrivenMatchingOutput = z.infer<typeof AiDrivenMatchingOutputSchema>;
