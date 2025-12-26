import { NextResponse } from 'next/server';
import { aiDrivenMatching } from '@/ai/flows/ai-driven-matching';
import type { AiDrivenMatchingInput } from '@/ai/schemas';

export async function POST(req: Request) {
  try {
    const body: AiDrivenMatchingInput = await req.json();
    
    // In a real application, you would add authentication and authorization checks here.

    if (!body.userInput) {
      return NextResponse.json({ error: 'userInput is required' }, { status: 400 });
    }

    const result = await aiDrivenMatching(body);
    
    return NextResponse.json(result);

  } catch (error) {
    console.error('Error in chat processing:', error);
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
    return NextResponse.json(
      { error: 'Internal Server Error', details: errorMessage },
      { status: 500 }
    );
  }
}
