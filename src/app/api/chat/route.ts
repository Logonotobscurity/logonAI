import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const CHAT_SERVICE_URL = process.env.CHAT_URL || 'http://localhost:3001/chat';

  try {
    const body = await req.json();
    
    // In a real application, you would add authentication and authorization checks here.

    const upstreamResponse = await fetch(CHAT_SERVICE_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // Forward any necessary headers, like an API key for the backend service.
        // 'Authorization': `Bearer ${process.env.CHAT_SERVICE_API_KEY}`
      },
      body: JSON.stringify(body),
    });

    if (!upstreamResponse.ok) {
      const errorBody = await upstreamResponse.text();
      console.error(`Error from upstream service: ${upstreamResponse.status} ${errorBody}`);
      return NextResponse.json(
        { error: `Error from upstream service: ${upstreamResponse.status}` },
        { status: upstreamResponse.status }
      );
    }

    const data = await upstreamResponse.json();
    
    return NextResponse.json(data);

  } catch (error) {
    console.error('Error in chat proxy:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
