import { NextRequest, NextResponse } from "next/server"
import { createServerClient, createAdminClient } from "@/lib/supabase/server"
import { requireApiKey } from "@/app/api/_lib/auth"

// GET /api/glossary — public
export async function GET(request: NextRequest) {
  const supabase = createServerClient()
  const { searchParams } = new URL(request.url)
  const category = searchParams.get("category")

  let query = supabase
    .from("glossary_terms")
    .select("*")
    .eq("status", "published")
    .order("term", { ascending: true })

  if (category && category !== "all") {
    query = query.eq("category", category)
  }

  const { data, error } = await query

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  return NextResponse.json({ terms: data })
}

// POST /api/glossary — protected
export async function POST(request: NextRequest) {
  const authError = requireApiKey(request)
  if (authError) return authError

  const supabase = createAdminClient()
  const body = await request.json()

  // Upsert by term name to avoid duplicates
  const { data, error } = await supabase
    .from("glossary_terms")
    .upsert(body, { onConflict: "term" })
    .select()
    .single()

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  return NextResponse.json({ term: data }, { status: 201 })
}
