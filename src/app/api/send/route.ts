const token = process.env.TELEGRAM_BOT_TOKEN;

export async function POST(req: Request) {
  const data = await req.json();

  await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      chat_id: "YOUR_CHAT_ID",
      text: data.message,
    }),
  });

  return Response.json({ success: true });
}