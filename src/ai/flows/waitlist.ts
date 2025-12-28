
'use server';

/**
 * @fileOverview A waitlist flow to capture user emails.
 *
 * - joinWaitlist - A function that handles adding a user to the waitlist.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';
import { JoinWaitlistInput, JoinWaitlistInputSchema } from '@/lib/types';


export async function joinWaitlist(input: JoinWaitlistInput): Promise<void> {
  await joinWaitlistFlow(input);
}

const joinWaitlistFlow = ai.defineFlow(
  {
    name: 'joinWaitlistFlow',
    inputSchema: JoinWaitlistInputSchema,
    outputSchema: z.void(),
  },
  async (input) => {
    // Here you would typically save the email to a database like Firestore.
    // For this example, we'll just log it to the console.
    console.log(`New waitlist submission: ${input.email}`);
  }
);
