
'use server';

/**
 * @fileOverview AI-driven matching flow to suggest agents based on user needs and preferences.
 *
 * - aiDrivenMatching - A function that handles the agent matching process.
 * - AIDrivenMatchingInput - The input type for the aiDrivenMatching function.
 * - AIDrivenMatchingOutput - The return type for the aiDrivenMatching function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AIDrivenMatchingInputSchema = z.object({
  userInput: z.string().describe('The user input from assessment or conversation.'),
});
export type AIDrivenMatchingInput = z.infer<typeof AIDrivenMatchingInputSchema>;

const AIDrivenMatchingOutputSchema = z.object({
  agentSuggestions: z
    .array(z.string())
    .describe('A list of suggested agent IDs based on the user input.'),
  reasoning: z.string().describe('The reasoning behind the agent suggestions.'),
});
export type AIDrivenMatchingOutput = z.infer<typeof AIDrivenMatchingOutputSchema>;

export async function aiDrivenMatching(input: AIDrivenMatchingInput): Promise<AIDrivenMatchingOutput> {
  return aiDrivenMatchingFlow(input);
}

const prompt = ai.definePrompt({
  name: 'aiDrivenMatchingPrompt',
  input: {schema: AIDrivenMatchingInputSchema},
  output: {schema: AIDrivenMatchingOutputSchema},
  prompt: `You are an AI assistant designed to match users with the best agents in the marketplace.

  Based on the user's input (either from their assessment or conversation), identify the key needs and preferences.
  Then, suggest a list of agent IDs that would be a good fit, and explain your reasoning for each suggestion.

  User Input: {{{userInput}}}

  Ensure that the agentSuggestions field contains only a list of agent IDs.
  Provide a clear and concise reasoning for each suggested agent, explaining why they are a good match for the user's needs.
`,
});

const aiDrivenMatchingFlow = ai.defineFlow(
  {
    name: 'aiDrivenMatchingFlow',
    inputSchema: AIDrivenMatchingInputSchema,
    outputSchema: AIDrivenMatchingOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
