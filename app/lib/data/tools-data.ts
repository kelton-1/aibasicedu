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
  strengths: string[]
  weaknesses: string[]
  idealUsers: string[]
  alternatives: string[]
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
    strengths: ["Versatile across writing, analysis, and coding", "Strong multimodal workflow in one app", "Large ecosystem of custom GPTs and integrations"],
    weaknesses: ["Best features are gated behind paid tiers", "Can be overkill if you only need search-style answers", "Output quality depends heavily on prompt clarity"],
    idealUsers: ["General users who want one assistant for many tasks", "Teams testing AI across writing, support, and research", "Creators who want chat, image generation, and voice in one place"],
    alternatives: ["Claude", "Gemini", "Perplexity"],
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
    strengths: ["Excellent long-context reasoning", "Strong writing tone and editing quality", "Reliable for code review and specification-heavy tasks"],
    weaknesses: ["Fewer built-in consumer features than ChatGPT", "Less appealing for users who want image-first workflows", "Usage caps can feel restrictive during heavy sessions"],
    idealUsers: ["Developers working through large codebases", "Researchers reading long reports or PDFs", "Writers who care about tone, structure, and nuance"],
    alternatives: ["ChatGPT", "Gemini", "Cursor"],
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
    strengths: ["Tight integration with Gmail, Docs, and Drive", "Strong multimodal reasoning", "Useful for search-informed research workflows"],
    weaknesses: ["Best experience depends on living in Google Workspace", "Less differentiated if you do not use Google's apps", "Enterprise pricing climbs quickly for premium tiers"],
    idealUsers: ["Google Workspace-heavy professionals", "Students summarizing classes and shared docs", "Teams that want AI layered into existing Google workflows"],
    alternatives: ["ChatGPT", "Claude", "Perplexity"],
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
    strengths: ["Fast cited answers for current topics", "Search-first workflow reduces guesswork", "Great for quick briefings and market scans"],
    weaknesses: ["Less suited for deep creative collaboration", "Follow-up responses can depend on source quality", "Not the strongest choice for full document drafting"],
    idealUsers: ["Analysts doing rapid research", "Students validating claims with sources", "Anyone who wants answers plus links instead of a blank chat box"],
    alternatives: ["ChatGPT", "Gemini", "Claude"],
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
    strengths: ["Excellent style and aesthetic quality", "Strong community prompting patterns", "Great for concept art and mood boards"],
    weaknesses: ["Workflow can feel less beginner-friendly", "Less convenient for business users needing structured asset management", "No free tier for casual experimentation"],
    idealUsers: ["Designers exploring visual directions", "Creative teams generating campaign concepts", "Artists who want stylized image outputs quickly"],
    alternatives: ["DALL-E 3", "Runway"],
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
    strengths: ["Fits directly into familiar IDE workflows", "Excellent autocomplete for day-to-day coding", "Low-friction adoption for teams"],
    weaknesses: ["Less opinionated than full AI-native editors", "Big refactors may require more manual coordination", "Value is lower if you rarely code inside supported IDEs"],
    idealUsers: ["Developers who want subtle AI assistance", "Engineering teams standardizing on GitHub tooling", "Students learning through inline suggestions"],
    alternatives: ["Cursor", "Claude", "Replit"],
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
    strengths: ["Purpose-built for AI-assisted coding", "Strong codebase-wide editing workflows", "Great for turning natural language into implementation plans"],
    weaknesses: ["Requires switching editors for some teams", "Costs more than lighter autocomplete tools", "Can encourage broad edits that still need close review"],
    idealUsers: ["Indie developers shipping quickly", "Startup teams iterating on products fast", "Engineers who want AI deeply embedded in the editor"],
    alternatives: ["GitHub Copilot", "Claude", "Replit"],
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
    strengths: ["Best when knowledge already lives in Notion", "Useful for meeting notes and internal docs", "Reduces switching between apps"],
    weaknesses: ["Less compelling outside Notion-heavy teams", "Not the strongest standalone model experience", "Can become expensive across larger workspaces"],
    idealUsers: ["Ops teams managing internal documentation", "Founders running wikis and meeting hubs in Notion", "Knowledge workers who want AI inside their notes"],
    alternatives: ["ChatGPT", "Jasper", "Grammarly"],
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
    strengths: ["Strong prompt adherence", "Convenient inside ChatGPT workflows", "Easy for beginners to iterate with plain language"],
    weaknesses: ["Less of a standalone creative suite", "Power users may want more advanced art controls", "Access is tied to broader ChatGPT plan choices"],
    idealUsers: ["Marketers making quick concept visuals", "General users creating images without learning a new tool", "Teams that already subscribe to ChatGPT"],
    alternatives: ["Midjourney", "Runway"],
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
    strengths: ["Built around brand and campaign workflows", "Useful templates for marketing teams", "Designed for repeatable high-volume content operations"],
    weaknesses: ["Higher price than general-purpose assistants", "Less appealing for users outside marketing", "Quality still needs strong editorial oversight"],
    idealUsers: ["Content teams producing campaign assets", "Agencies managing multiple client voices", "Growth teams that need repeatable workflows"],
    alternatives: ["ChatGPT", "Notion AI", "Grammarly"],
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
    strengths: ["Strong video-first workflow", "Useful editing tools beyond generation", "Good for rapid prototyping of motion content"],
    weaknesses: ["Credits can disappear quickly", "Results still require curation for polished brand work", "Less relevant if you only need static images"],
    idealUsers: ["Video teams prototyping storyboards", "Creators testing short-form content ideas", "Brands exploring AI-enhanced editing"],
    alternatives: ["Midjourney", "DALL-E 3"],
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
    strengths: ["Combines coding, hosting, and deployment", "Great for prototypes and demos", "Accessible for non-traditional developers"],
    weaknesses: ["Cloud workflow may not fit every engineering org", "Less control than a fully local stack", "Pricing is harder to justify for occasional use"],
    idealUsers: ["Founders prototyping products fast", "Students learning app development", "Teams building internal tools with minimal setup"],
    alternatives: ["Cursor", "GitHub Copilot", "ChatGPT"],
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
    strengths: ["Easy improvement layer across many apps", "Helpful tone and clarity feedback", "Fast adoption for individuals and teams"],
    weaknesses: ["Less useful for deep research or strategy work", "Generative features are not its core differentiator", "Suggestions can homogenize voice if overused"],
    idealUsers: ["Professionals polishing daily communication", "Students improving essays and emails", "Teams wanting light writing assistance everywhere"],
    alternatives: ["ChatGPT", "Jasper", "Notion AI"],
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
    strengths: ["Very natural voice quality", "Useful multilingual voice workflows", "Good fit for narration and audio products"],
    weaknesses: ["Voice cloning introduces governance concerns", "Not relevant if audio is not part of your workflow", "Higher-end usage grows cost with volume"],
    idealUsers: ["Podcast and audiobook creators", "Product teams adding voice UX", "Educators producing spoken lessons at scale"],
    alternatives: ["ChatGPT", "Runway"],
    url: "https://elevenlabs.io",
    affiliateTag: "aibasicedu",
  },
]
