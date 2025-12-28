
import { NextResponse } from 'next/server';
import { ai } from '@/ai/genkit';
import { z } from 'zod';

const CompareInstagramCompetitorsSchema = z.object({
  myInstagramHandle: z.string(),
  competitorInstagramHandles: z.array(z.string()),
});

const systemPrompt = `
You are an expert social media analyst.
You will be given the profile information of a user's Instagram account and the profile information of their competitors.
Your task is to provide a detailed comparison, highlighting strengths and weaknesses, and suggesting areas for improvement.
Respond in a clear, easy-to-read format. Use markdown for formatting if it helps.
`;

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const validation = CompareInstagramCompetitorsSchema.safeParse(body);

    if (!validation.success) {
      return NextResponse.json({ error: 'Invalid input', details: validation.error.errors }, { status: 400 });
    }

    const { myInstagramHandle, competitorInstagramHandles } = validation.data;

    // In a real application, you would fetch data from Instagram here.
    // This would likely involve using a third-party API for Instagram data.
    // For this example, we'll use mock data.

    const mockMyProfileData = {
      handle: myInstagramHandle,
      followers: 1000,
      following: 500,
      posts: 100,
      bio: 'This is my mock bio.',
      recentPosts: [
        { caption: 'My first mock post!', likes: 50 },
        { caption: 'Another great day!', likes: 75 },
      ],
    };

    const mockCompetitorProfileData = competitorInstagramHandles.map(handle => ({
      handle: handle,
      followers: Math.floor(Math.random() * 5000) + 1000,
      following: Math.floor(Math.random() * 1000) + 200,
      posts: Math.floor(Math.random() * 500) + 50,
      bio: `This is a mock bio for ${handle}.`,
      recentPosts: [
        { caption: `A competitor's post.`, likes: Math.floor(Math.random() * 200) + 50 },
        { caption: `Another post from ${handle}`, likes: Math.floor(Math.random() * 300) + 100 },
      ],
    }));

    const prompt = `
    My Instagram profile:
    ${JSON.stringify(mockMyProfileData, null, 2)}

    My competitors' Instagram profiles:
    ${JSON.stringify(mockCompetitorProfileData, null, 2)}

    Please provide a comparison and analysis.
    `;

    const llmResponse = await ai.generate({
      model: 'googleai/gemini-1.5-pro-latest',
      prompt: prompt,
      config: {
        temperature: 0.5,
      },
      system: systemPrompt,
    });

    const analysis = llmResponse.text;

    return NextResponse.json({ analysis });

  } catch (error) {
    console.error('Error in compare-instagram-competitors:', error);
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
    return NextResponse.json(
      { error: 'Internal Server Error', details: errorMessage },
      { status: 500 }
    );
  }
}
