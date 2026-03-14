import { NextRequest, NextResponse } from "next/server"
import { createServerClient, createAdminClient } from "@/lib/supabase/server"
import { requireApiKey } from "@/app/api/_lib/auth"

// GET /api/tutorials — public
export async function GET(request: NextRequest) {
  const supabase = createServerClient()
  const { searchParams } = new URL(request.url)
  const category = searchParams.get("category")

  let query = supabase
    .from("tutorials")
    .select("*")
    .eq("status", "published")
    .order("created_at", { ascending: false })

  if (category && category !== "all") {
    query = query.eq("category", category)
  }

  const { data, error } = await query

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  return NextResponse.json({ tutorials: data })
}

// POST /api/tutorials — protected
export async function POST(request: NextRequest) {
  const authError = requireApiKey(request)
  if (authError) return authError

  const supabase = createAdminClient()
  const body = await request.json()

  const { data, error } = await supabase
    .from("tutorials")
    .upsert(body, { onConflict: "slug" })
    .select()
    .single()

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  return NextResponse.json({ tutorial: data }, { status: 201 })
}
