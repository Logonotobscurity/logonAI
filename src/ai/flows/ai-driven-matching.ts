
'use server';

import { ai } from '@/ai/genkit';
import { agents } from '@/lib/mock-data';
import { AiDrivenMatchingInputSchema, AiDrivenMatchingOutputSchema } from '@/ai/schemas';
import type { AiDrivenMatchingInput, AiDrivenMatchingOutput } from '@/ai/schemas';

const agentList = agents.map(p => `id: ${p.id}, name: ${p.name}, specialty: ${p.specialty}, description: ${p.description}`).join('\n');

const systemPrompt = `
You are an expert at routing user requests to the most appropriate agent.
Analyze the user's request and the provided list of agents to identify the best matches.

Respond in valid JSON format. Your response must be an object with two keys:
1.  "reasoning": A brief explanation of your choices, directly addressing the user.
2.  "agentSuggestions": An array of agent IDs that are the best fit for the user's request. Return at most 3 agent IDs. If no agents are a good fit, return an empty array.

Available Agents:
${agentList}
`;

export const aiDrivenMatching = ai.defineFlow(
  {
    name: 'aiDrivenMatching',
    inputSchema: AiDrivenMatchingInputSchema,
    outputSchema: AiDrivenMatchingOutputSchema,
  },
  async (prompt: AiDrivenMatchingInput): Promise<AiDrivenMatchingOutput> => {

    const llmResponse = await ai.generate({
      model: 'googleai/gemini-1.5-pro-latest',
      prompt: prompt.userInput,
      config: {
        temperature: 0.3,
        responseMimeType: 'application/json',
      },
      system: systemPrompt,
    });

    try {
      const response = JSON.parse(llmResponse.text);

      // Validate that the response contains the expected fields
      if (response && typeof response.reasoning === 'string' && Array.isArray(response.agentSuggestions)) {
        return response as AiDrivenMatchingOutput;
      } else {
        console.error('Invalid response format from AI model after parsing:', response);
        throw new Error('Invalid response format from AI model.');
      }
    } catch (e) {
      console.error("Failed to parse AI model's response:", llmResponse.text, e);
      // Fallback response if JSON parsing fails
      return {
        reasoning: "I'm sorry, I had trouble processing that request. Please try rephrasing your needs.",
        agentSuggestions: [],
      };
    }
  }
);
