import { NextRequest, NextResponse } from "next/server"
import { createServerClient, createAdminClient } from "@/lib/supabase/server"
import { requireApiKey } from "@/app/api/_lib/auth"

// GET /api/news — public, returns published articles
export async function GET(request: NextRequest) {
  const supabase = createServerClient()
  const { searchParams } = new URL(request.url)
  const category = searchParams.get("category")
  const limit = parseInt(searchParams.get("limit") || "50")

  let query = supabase
    .from("news_articles")
    .select("*")
    .eq("status", "published")
    .order("published_at", { ascending: false })
    .limit(limit)

  if (category && category !== "all") {
    query = query.eq("category", category)
  }

  const { data, error } = await query

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  return NextResponse.json({ articles: data })
}

// POST /api/news — protected, creates a new article
export async function POST(request: NextRequest) {
  const authError = requireApiKey(request)
  if (authError) return authError

  const supabase = createAdminClient()
  const body = await request.json()

  const { data, error } = await supabase
    .from("news_articles")
    .insert(body)
    .select()
    .single()

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  return NextResponse.json({ article: data }, { status: 201 })
}
