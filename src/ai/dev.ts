
import { genkit } from 'genkit';
import { googleAI } from '@genkit-ai/google-genai';
import * as aiDrivenMatching from './flows/ai-driven-matching';

genkit({
  plugins: [
    googleAI(),
  ],
  flows: [
    aiDrivenMatching.aiDrivenMatching,
  ],
  logLevel: 'debug',
  enableTracing: true,
});
