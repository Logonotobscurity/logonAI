
import { genkit } from 'genkit';
import { googleAI } from '@genkit-ai/google-genai';

import '@/ai/flows/ai-driven-matching';
import '@/ai/flows/text-to-speech';
import '@/ai/flows/waitlist';

genkit({
  plugins: [
    googleAI(),
  ],
  logLevel: 'debug',
  enableTracing: true,
});
