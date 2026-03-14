import Anthropic from "@anthropic-ai/sdk"
import { createClient } from "@supabase/supabase-js"

const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY! })
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
)

async function generateNewsArticles() {
  console.log("Generating news articles...")

  // Get existing titles to avoid duplicates
  const { data: existing } = await supabase
    .from("news_articles")
    .select("title")
    .order("published_at", { ascending: false })
    .limit(20)

  const existingTitles = (existing ?? []).map((a) => a.title)

  const response = await anthropic.messages.create({
    model: "claude-sonnet-4-6",
    max_tokens: 4096,
    messages: [
      {
        role: "user",
        content: `You are a content writer for an AI education website. Generate 3 news articles about recent real developments in AI. Each article should be educational and accessible to beginners.

IMPORTANT: These must be about REAL, VERIFIED developments. Do not fabricate news. Focus on:
- New AI model releases (from OpenAI, Anthropic, Google, Meta, etc.)
- AI research breakthroughs published in reputable venues
- AI policy and regulation updates
- Notable AI product launches or updates

Do NOT generate articles similar to these existing titles:
${existingTitles.map((t) => `- ${t}`).join("\n")}

Return ONLY a JSON array (no markdown, no explanation) with objects matching this schema:
[{
  "title": "string",
  "summary": "string (2-3 sentences)",
  "source": "string (publication name)",
  "category": "models" | "research" | "applications" | "policy" | "business",
  "read_time": "string (e.g. '5 min read')"
}]`,
      },
    ],
  })

  const content = response.content[0]
  if (content.type !== "text") throw new Error("Unexpected response type")

  // Strip markdown code fences if present
  const jsonText = content.text.replace(/^```(?:json)?\n?/, "").replace(/\n?```$/, "").trim()
  const articles = JSON.parse(jsonText)

  for (const article of articles) {
    const { error } = await supabase.from("news_articles").insert({
      title: article.title,
      summary: article.summary,
      source: article.source,
      category: article.category,
      read_time: article.read_time,
      status: "published",
    })
    if (error) {
      console.error(`Failed to insert "${article.title}":`, error.message)
    } else {
      console.log(`✓ Added: ${article.title}`)
    }
  }
}

async function generateGlossaryTerms() {
  console.log("Checking for missing glossary terms...")

  const { data: existing } = await supabase
    .from("glossary_terms")
    .select("term")

  const existingTerms = (existing ?? []).map((t) => t.term)

  const response = await anthropic.messages.create({
    model: "claude-sonnet-4-6",
    max_tokens: 4096,
    messages: [
      {
        role: "user",
        content: `You are a content writer for an AI education website. Suggest 5 important AI/ML terms that are NOT already in our glossary.

Existing terms: ${existingTerms.join(", ")}

Focus on terms that:
- Are commonly encountered by people learning about AI
- Have become relevant due to recent AI developments
- Are practical and useful for beginners to know

Return ONLY a JSON array (no markdown) with objects matching this schema:
[{
  "term": "string",
  "definition": "string (clear, beginner-friendly, 1-2 sentences)",
  "category": "fundamentals" | "techniques" | "applications",
  "level": "beginner" | "intermediate" | "advanced"
}]`,
      },
    ],
  })

  const content = response.content[0]
  if (content.type !== "text") throw new Error("Unexpected response type")

  const jsonText = content.text.replace(/^```(?:json)?\n?/, "").replace(/\n?```$/, "").trim()
  const terms = JSON.parse(jsonText)

  for (const term of terms) {
    const { error } = await supabase.from("glossary_terms").upsert(
      { ...term, status: "published" },
      { onConflict: "term" }
    )
    if (error) {
      console.error(`Failed to insert "${term.term}":`, error.message)
    } else {
      console.log(`✓ Added: ${term.term}`)
    }
  }
}

async function main() {
  const command = process.argv[2] || "all"

  if (command === "news" || command === "all") {
    await generateNewsArticles()
  }
  if (command === "glossary" || command === "all") {
    await generateGlossaryTerms()
  }

  console.log("Content generation complete!")
}

main().catch(console.error)
