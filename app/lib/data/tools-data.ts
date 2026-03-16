export interface AITool {
  name: string
  description: string
  category: "chatbot" | "image" | "coding" | "productivity" | "research"
  pricing: {
    free: string
    pro: string
    enterprise?: string
  }
  bestFor: string
  url: string
  affiliateTag?: string
}

export const aiTools: AITool[] = [
  {
    name: "ChatGPT",
    description:
      "The most popular AI assistant. Versatile for writing, coding, analysis, and creative tasks. GPT-5.2 with Thinking mode for complex reasoning.",
    category: "chatbot",
    pricing: { free: "Free (GPT-4o mini)", pro: "$20/mo (Plus)", enterprise: "$25/user/mo (Team)" },
    bestFor: "All-around AI assistant for most tasks",
    url: "https://chat.openai.com",
  },
  {
    name: "Claude",
    description:
      "Anthropic's AI assistant. Excels at long documents, nuanced writing, and coding. 200K token context window. Opus 4.6 leads coding benchmarks.",
    category: "chatbot",
    pricing: { free: "Free (daily caps)", pro: "$20/mo (Pro)", enterprise: "$100/mo (Max)" },
    bestFor: "Long documents, coding, and careful analysis",
    url: "https://claude.ai",
  },
  {
    name: "Gemini",
    description:
      "Google's AI with 1M-token context window. Deep integration with Google Workspace. Strong at research, summarization, and multimodal tasks.",
    category: "chatbot",
    pricing: { free: "Free (Gemini Flash)", pro: "$19.99/mo (AI Pro)", enterprise: "$249.99/mo (AI Ultra)" },
    bestFor: "Google users and long-document analysis",
    url: "https://gemini.google.com",
  },
  {
    name: "Perplexity",
    description:
      "AI-powered search engine that provides sourced answers with citations. Combines web search with AI summarization for research tasks.",
    category: "research",
    pricing: { free: "Free (basic)", pro: "$20/mo (Pro)" },
    bestFor: "Research with real-time sources and citations",
    url: "https://perplexity.ai",
  },
  {
    name: "Midjourney",
    description:
      "Leading AI image generator known for artistic quality and photorealism. Creates stunning visuals from text descriptions.",
    category: "image",
    pricing: { free: "No free tier", pro: "$24/mo (Standard)" },
    bestFor: "High-quality artistic image generation",
    url: "https://midjourney.com",
  },
  {
    name: "GitHub Copilot",
    description:
      "AI coding assistant integrated into VS Code, JetBrains, and other IDEs. Suggests code completions, writes functions, and explains code.",
    category: "coding",
    pricing: { free: "Free (students/OSS)", pro: "$10/mo (Individual)", enterprise: "$19/user/mo (Business)" },
    bestFor: "Code autocompletion and pair programming",
    url: "https://github.com/features/copilot",
  },
  {
    name: "Cursor",
    description:
      "AI-first code editor built on VS Code. Deep codebase understanding, multi-file editing, and natural language code generation.",
    category: "coding",
    pricing: { free: "Free (limited)", pro: "$20/mo (Pro)" },
    bestFor: "AI-native code editing and generation",
    url: "https://cursor.com",
  },
  {
    name: "Notion AI",
    description:
      "AI integrated into the Notion workspace. Summarize notes, generate content, extract action items, and organize information.",
    category: "productivity",
    pricing: { free: "Included with plans", pro: "$10/member/mo (add-on)" },
    bestFor: "Writing and organizing within Notion",
    url: "https://notion.so",
  },
]
