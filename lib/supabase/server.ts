import { createClient } from "@supabase/supabase-js"
import type { Database } from "./types"

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ""
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ""
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || ""

// Read-only client using anon key (for server components)
export function createServerClient() {
  if (!supabaseUrl || !supabaseAnonKey) {
    // Return a mock client that returns empty data when env vars are missing
    return {
      from: () => ({
        select: () => ({
          eq: () => ({ order: () => ({ limit: () => ({ data: [], error: null }) }), data: [], error: null }),
          order: () => ({ limit: () => ({ data: [], error: null }), data: [], error: null }),
          limit: () => ({ data: [], error: null }),
          data: [],
          error: null,
        }),
      }),
    } as unknown as ReturnType<typeof createClient<Database>>
  }
  return createClient<Database>(supabaseUrl, supabaseAnonKey)
}

// Admin client using service role key (for API routes that write data)
export function createAdminClient() {
  if (!supabaseUrl || !supabaseServiceKey) {
    throw new Error("Supabase admin credentials are required for write operations. Set NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY.")
  }
  return createClient<Database>(supabaseUrl, supabaseServiceKey)
}
