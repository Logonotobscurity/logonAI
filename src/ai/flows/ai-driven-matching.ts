
'use server';

import { ai } from '@/ai/genkit';
import { agents } from '@/lib/mock-data';
import { AiDrivenMatchingInputSchema, AiDrivenMatchingOutputSchema } from '@/ai/schemas';

const agentList = agents.map(p => `id: ${p.id}, name: ${p.name}, specialty: ${p.specialty}, description: ${p.description}`).join('\n');

const systemPrompt = `
You are an expert at routing user requests to the most appropriate agent.
Analyze the user's request and the provided list of agents to identify the best matches.

Respond in JSON format. Your response must include:
1.  "reasoning": A brief explanation of your choices.
2.  "agentSuggestions": An array of agent IDs that are the best fit for the user's request. Return at most 3 agent IDs.

Available Agents:
${agentList}
`;

export const aiDrivenMatching = ai.defineFlow(
  {
    name: 'aiDrivenMatching',
    inputSchema: AiDrivenMatchingInputSchema,
    outputSchema: AiDrivenMatchingOutputSchema,
  },
  async (prompt) => {

    const llmResponse = await ai.generate({
      model: 'googleai/gemini-1.5-pro-latest',
      prompt: prompt.userInput,
      config: {
        temperature: 0.3,
        responseMimeType: 'application/json',
      },
      system: systemPrompt,
    });

    const response = JSON.parse(llmResponse.text);

    // Validate that the response contains the expected fields
    if (!response.reasoning || !Array.isArray(response.agentSuggestions)) {
      throw new Error('Invalid response format from AI model.');
    }

    return response;
  }
);
