import { GoogleGenAI } from "@google/genai";

export async function POST(req: Request) {
  try {
    const { prompt } = await req.json();
    if (!prompt) {
      return Response.json("No prompt found", { status: 400 });
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return Response.json("API key is missing", { status: 500 });
    }

    const genAI = new GoogleGenAI({ apiKey: apiKey });

    const response = await genAI.models.generateContentStream({
      model: "gemini-2.0-flash",
      contents: `Please summarize the following text:\n\n${prompt}`,
    });

    const encoder = new TextEncoder();

    const stream = new ReadableStream({
      async start(controller) {
        for await (const chunk of response) {
          const text = chunk.text;
          controller.enqueue(encoder.encode(text));
        }
        controller.close();
      },
    });

    return new Response(stream, {
      headers: {
        "Content-Type": "text/plain",
        "Cache-Control": "no-cache",
    }});

  } catch (error: any) {
    console.error(error);
   return Response.json("Something went wrong", { status: 500 });
  }
}
