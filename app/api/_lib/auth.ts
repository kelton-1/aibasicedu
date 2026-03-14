import { NextRequest, NextResponse } from "next/server"

/**
 * Validates that the request has a valid API key.
 * Agents and admin tools pass this via Authorization header.
 */
export function requireApiKey(request: NextRequest): NextResponse | null {
  const authHeader = request.headers.get("authorization")
  const expectedKey = process.env.CONTENT_API_KEY

  if (!expectedKey) {
    return NextResponse.json(
      { error: "Server misconfigured: CONTENT_API_KEY not set" },
      { status: 500 }
    )
  }

  if (!authHeader || authHeader !== `Bearer ${expectedKey}`) {
    return NextResponse.json(
      { error: "Unauthorized" },
      { status: 401 }
    )
  }

  return null // Auth passed
}
