export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST() {
  return new Response(
    JSON.stringify({ success: true }),
    { status: 200 }
  );
}