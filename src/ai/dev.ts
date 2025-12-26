
import { genkit, type Flow } from 'genkit';
import { googleAI } from '@genkit-ai/google-genai';
import * as aiDrivenMatching from './flows/ai-driven-matching';

const flows: Flow[] = [
    aiDrivenMatching.aiDrivenMatching,
];

genkit({
  plugins: [
    googleAI(),
  ],
  flows,
  logLevel: 'debug',
  enableTracing: true,
});
