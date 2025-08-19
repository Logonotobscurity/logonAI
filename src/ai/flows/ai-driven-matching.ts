
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
import { agents } from '@/lib/mock-data';

const AIDrivenMatchingInputSchema = z.object({
  userInput: z.string().describe('The user input from assessment or conversation.'),
});
export type AIDrivenMatchingInput = z.infer<typeof AIDrivenMatchingInputSchema>;

const AIDrivenMatchingOutputSchema = z.object({
  agentSuggestions: z
    .array(z.string())
    .describe('A list of suggested agent IDs based on the user input. Choose from available agents.'),
  reasoning: z.string().describe('The reasoning behind the agent suggestions.'),
});
export type AIDrivenMatchingOutput = z.infer<typeof AIDrivenMatchingOutputSchema>;

export async function aiDrivenMatching(input: AIDrivenMatchingInput): Promise<AIDrivenMatchingOutput> {
  return aiDrivenMatchingFlow(input);
}

const availableAgentsPrompt = `
Available Agents:
${agents.map(agent => `
- ID: ${agent.id}
- Name: ${agent.name}
- Specialty: ${agent.specialty}
- Tags: ${agent.tags.join(', ')}
- Description: ${agent.description}
`).join('')}
`;

const prompt = ai.definePrompt({
  name: 'aiDrivenMatchingPrompt',
  input: {schema: AIDrivenMatchingInputSchema},
  output: {schema: AIDrivenMatchingOutputSchema},
  prompt: `You are an AI assistant designed to match users with the best agents in the marketplace.

  Based on the user's input (either from their assessment or conversation), identify the key needs and preferences.
  Then, suggest a list of agent IDs from the available agents that would be a good fit, and explain your reasoning for each suggestion.

  User Input: {{{userInput}}}

  ${availableAgentsPrompt}

  Your task is to analyze the user input and the list of available agents. Return a list of agent IDs in the 'agentSuggestions' field that best match the user's needs. Also, provide a clear and concise reasoning for your suggestions in the 'reasoning' field.
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
