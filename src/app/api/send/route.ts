export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    console.log("Received:", body);

    return new Response(
      JSON.stringify({ success: true }),
      { status: 200 }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ error: "Something went wrong" }),
      { status: 500 }
    );
  }
}