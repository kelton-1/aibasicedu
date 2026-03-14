import { NextRequest, NextResponse } from "next/server"
import { createServerClient, createAdminClient } from "@/lib/supabase/server"
import { requireApiKey } from "@/app/api/_lib/auth"

// GET /api/companies — public
export async function GET(request: NextRequest) {
  const supabase = createServerClient()
  const { searchParams } = new URL(request.url)
  const category = searchParams.get("category")

  let query = supabase
    .from("companies")
    .select("*")
    .eq("status", "published")
    .order("name", { ascending: true })

  if (category && category !== "all") {
    query = query.eq("category", category)
  }

  const { data, error } = await query

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  return NextResponse.json({ companies: data })
}

// POST /api/companies — protected
export async function POST(request: NextRequest) {
  const authError = requireApiKey(request)
  if (authError) return authError

  const supabase = createAdminClient()
  const body = await request.json()

  const { data, error } = await supabase
    .from("companies")
    .upsert(body, { onConflict: "slug" })
    .select()
    .single()

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  return NextResponse.json({ company: data }, { status: 201 })
}
