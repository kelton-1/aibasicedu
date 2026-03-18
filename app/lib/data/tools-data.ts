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
    affiliateTag: "aibasicedu",
  },
  {
    name: "Claude",
    description:
      "Anthropic's AI assistant. Excels at long documents, nuanced writing, and coding. 200K token context window. Opus 4.6 leads coding benchmarks.",
    category: "chatbot",
    pricing: { free: "Free (daily caps)", pro: "$20/mo (Pro)", enterprise: "$100/mo (Max)" },
    bestFor: "Long documents, coding, and careful analysis",
    url: "https://claude.ai",
    affiliateTag: "aibasicedu",
  },
  {
    name: "Gemini",
    description:
      "Google's AI with 1M-token context window. Deep integration with Google Workspace. Strong at research, summarization, and multimodal tasks.",
    category: "chatbot",
    pricing: { free: "Free (Gemini Flash)", pro: "$19.99/mo (AI Pro)", enterprise: "$249.99/mo (AI Ultra)" },
    bestFor: "Google users and long-document analysis",
    url: "https://gemini.google.com",
    affiliateTag: "aibasicedu",
  },
  {
    name: "Perplexity",
    description:
      "AI-powered search engine that provides sourced answers with citations. Combines web search with AI summarization for research tasks.",
    category: "research",
    pricing: { free: "Free (basic)", pro: "$20/mo (Pro)" },
    bestFor: "Research with real-time sources and citations",
    url: "https://perplexity.ai",
    affiliateTag: "aibasicedu",
  },
  {
    name: "Midjourney",
    description:
      "Leading AI image generator known for artistic quality and photorealism. Creates stunning visuals from text descriptions.",
    category: "image",
    pricing: { free: "No free tier", pro: "$24/mo (Standard)" },
    bestFor: "High-quality artistic image generation",
    url: "https://midjourney.com",
    affiliateTag: "aibasicedu",
  },
  {
    name: "GitHub Copilot",
    description:
      "AI coding assistant integrated into VS Code, JetBrains, and other IDEs. Suggests code completions, writes functions, and explains code.",
    category: "coding",
    pricing: { free: "Free (students/OSS)", pro: "$10/mo (Individual)", enterprise: "$19/user/mo (Business)" },
    bestFor: "Code autocompletion and pair programming",
    url: "https://github.com/features/copilot",
    affiliateTag: "aibasicedu",
  },
  {
    name: "Cursor",
    description:
      "AI-first code editor built on VS Code. Deep codebase understanding, multi-file editing, and natural language code generation.",
    category: "coding",
    pricing: { free: "Free (limited)", pro: "$20/mo (Pro)" },
    bestFor: "AI-native code editing and generation",
    url: "https://cursor.com",
    affiliateTag: "aibasicedu",
  },
  {
    name: "Notion AI",
    description:
      "AI integrated into the Notion workspace. Summarize notes, generate content, extract action items, and organize information.",
    category: "productivity",
    pricing: { free: "Included with plans", pro: "$10/member/mo (add-on)" },
    bestFor: "Writing and organizing within Notion",
    url: "https://notion.so",
    affiliateTag: "aibasicedu",
  },
  {
    name: "DALL-E 3",
    description:
      "OpenAI's latest image generation model integrated into ChatGPT. Creates highly detailed images from text descriptions with strong prompt following.",
    category: "image",
    pricing: { free: "Included with ChatGPT", pro: "$20/mo (via ChatGPT Plus)" },
    bestFor: "Text-accurate image generation and editing",
    url: "https://chat.openai.com",
    affiliateTag: "aibasicedu",
  },
  {
    name: "Jasper",
    description:
      "Enterprise AI content platform for marketing teams. Generates blog posts, social media copy, ads, and emails with brand voice consistency.",
    category: "productivity",
    pricing: { free: "7-day trial", pro: "$49/mo (Creator)", enterprise: "$125/mo (Pro)" },
    bestFor: "Marketing content at scale",
    url: "https://jasper.ai",
    affiliateTag: "aibasicedu",
  },
  {
    name: "Runway",
    description:
      "AI-powered creative suite for video generation and editing. Gen-3 Alpha creates cinematic video from text and image prompts.",
    category: "image",
    pricing: { free: "125 credits free", pro: "$15/mo (Standard)" },
    bestFor: "AI video generation and editing",
    url: "https://runwayml.com",
    affiliateTag: "aibasicedu",
  },
  {
    name: "Replit",
    description:
      "AI-powered cloud IDE that can build full applications from natural language descriptions. Includes hosting, databases, and deployment.",
    category: "coding",
    pricing: { free: "Free (basic)", pro: "$25/mo (Replit Core)" },
    bestFor: "Building full apps with AI assistance",
    url: "https://replit.com",
    affiliateTag: "aibasicedu",
  },
  {
    name: "Grammarly",
    description:
      "AI writing assistant that checks grammar, tone, clarity, and style. Now includes generative AI for drafting and rewriting content.",
    category: "productivity",
    pricing: { free: "Free (basic)", pro: "$12/mo (Premium)" },
    bestFor: "Writing improvement and grammar checking",
    url: "https://grammarly.com",
    affiliateTag: "aibasicedu",
  },
  {
    name: "ElevenLabs",
    description:
      "State-of-the-art AI voice generation and cloning. Create realistic voiceovers, audiobooks, and podcasts in dozens of languages.",
    category: "productivity",
    pricing: { free: "10,000 chars/mo free", pro: "$5/mo (Starter)", enterprise: "$99/mo (Scale)" },
    bestFor: "AI voice generation and text-to-speech",
    url: "https://elevenlabs.io",
    affiliateTag: "aibasicedu",
  },
]
