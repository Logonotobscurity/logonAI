
import { genkit } from 'genkit';
import { googleAI } from '@genkit-ai/google-genai';

// This is the global AI instance.
// It is used to register flows, prompts, and other AI-related objects.
export const ai = genkit({
  plugins: [
    googleAI({
      // Specify the API version.
      apiVersion: 'v1beta',
    }),
  ],
  logLevel: 'debug',
  enableTracing: true,
});
