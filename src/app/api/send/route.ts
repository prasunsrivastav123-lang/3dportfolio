import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const TELEGRAM_TOKEN = process.env.TELEGRAM_TOKEN;
    const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;

    if (!TELEGRAM_TOKEN || !TELEGRAM_CHAT_ID) {
      return NextResponse.json(
        { error: "Telegram env variables missing" },
        { status: 500 }
      );
    }

    await fetch(
      `https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: TELEGRAM_CHAT_ID,
          text: `🚀 New Portfolio Message\n\nFrom: ${body.username}\nMessage: ${body.content}`,
        }),
      }
    );

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Telegram API Error:", error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}