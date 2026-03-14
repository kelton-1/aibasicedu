import { NextRequest, NextResponse } from "next/server"
import { revalidatePath } from "next/cache"

export async function POST(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const secret = searchParams.get("secret")

  if (secret !== process.env.REVALIDATION_SECRET) {
    return NextResponse.json({ error: "Invalid secret" }, { status: 401 })
  }

  // Revalidate all content pages
  revalidatePath("/news")
  revalidatePath("/glossary")
  revalidatePath("/tutorials")
  revalidatePath("/companies")

  return NextResponse.json({ revalidated: true, timestamp: Date.now() })
}
