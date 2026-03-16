export interface NewsArticle {
  id: string
  title: string
  summary: string
  category: "models" | "research" | "applications" | "policy" | "business"
  source: string
  source_url: string
  published_at: string
  read_time: number
  image_url?: string
  status: "published" | "draft"
}

export const newsArticles: NewsArticle[] = [
  {
    id: "1",
    title: "GPT-5.2 Thinking Mode Brings Deeper Reasoning to ChatGPT Plus",
    summary:
      "OpenAI rolls out GPT-5.2 with a new Thinking mode that breaks down complex problems step-by-step. Plus subscribers get 5x higher usage limits. The model shows significant improvements in math, coding, and multi-step reasoning tasks.",
    category: "models",
    source: "OpenAI Blog",
    source_url: "https://openai.com/blog",
    published_at: "2026-03-12",
    read_time: 4,
    status: "published",
  },
  {
    id: "2",
    title: "Claude Opus 4.6 Sets New Coding Benchmark Records",
    summary:
      "Anthropic's latest model introduces agent teams and a 1M-token context window. Claude Opus 4.6 tops SWE-bench and HumanEval leaderboards, making it the go-to choice for software engineering tasks and long-document analysis.",
    category: "models",
    source: "Anthropic",
    source_url: "https://anthropic.com/news",
    published_at: "2026-03-10",
    read_time: 5,
    status: "published",
  },
  {
    id: "3",
    title: "Gemini 3 Pro Tops LMArena Leaderboard at Launch",
    summary:
      "Google's Gemini 3 Pro debuts with the highest LMArena scores ever recorded, featuring a 1M-token context window and improved multimodal capabilities. The model excels at long-document understanding and complex reasoning.",
    category: "models",
    source: "Google AI Blog",
    source_url: "https://blog.google/technology/ai/",
    published_at: "2026-03-08",
    read_time: 4,
    status: "published",
  },
  {
    id: "4",
    title: "Enterprise AI Agent Adoption Hits 48% in Telecom Sector",
    summary:
      "A new industry report reveals that agentic AI deployments have moved from experiments to full production in early 2026. Telecommunications leads at 48% adoption, followed by retail at 47%, with agents handling code development, legal analysis, and customer service.",
    category: "business",
    source: "McKinsey & Company",
    source_url: "https://www.mckinsey.com/capabilities/quantumblack/our-insights",
    published_at: "2026-03-07",
    read_time: 6,
    status: "published",
  },
  {
    id: "5",
    title: "Meta Plans 20% Workforce Reduction to Fund AI Infrastructure",
    summary:
      "Meta announces potential layoffs affecting up to 20% of its workforce as the company redirects spending toward AI data centers and model development. The move reflects a broader industry trend of aggressive AI investment restructuring.",
    category: "business",
    source: "TechLusive",
    source_url: "https://techlusive.in",
    published_at: "2026-03-06",
    read_time: 3,
    status: "published",
  },
  {
    id: "6",
    title: "IBM Declares 2026 the Year Quantum Computing Outperforms Classical",
    summary:
      "IBM predicts that 2026 will be the first year a quantum computer definitively outperforms classical computers on practical problems, unlocking breakthroughs in drug development, materials science, and financial optimization.",
    category: "research",
    source: "IBM Think",
    source_url: "https://www.ibm.com/think",
    published_at: "2026-03-05",
    read_time: 5,
    status: "published",
  },
  {
    id: "7",
    title: "59% of UK Adults Now Use AI for Medical Self-Diagnosis",
    summary:
      "A new study reveals that over half of UK adults are using AI tools to self-diagnose medical symptoms, driven by long GP waiting times. OpenAI's ChatGPT Health now integrates personal medical records for personalized health insights.",
    category: "applications",
    source: "BBC News",
    source_url: "https://www.bbc.com/news/technology",
    published_at: "2026-03-04",
    read_time: 4,
    status: "published",
  },
  {
    id: "8",
    title: "White House and States Clash Over AI Regulation Authority",
    summary:
      "A growing political battle over who governs AI intensifies as federal and state regulators vie for jurisdiction. AI companies are mounting aggressive lobbying campaigns while the EU's AI Act enters its enforcement phase.",
    category: "policy",
    source: "MIT Technology Review",
    source_url: "https://www.technologyreview.com",
    published_at: "2026-03-03",
    read_time: 6,
    status: "published",
  },
  {
    id: "9",
    title: "NVIDIA Reports AI Revenue Up 300% as B200 GPU Demand Surges",
    summary:
      "NVIDIA's latest earnings show AI-driven revenue tripling year-over-year, with the new B200 Blackwell GPUs selling out months in advance. The GPU shortage continues to shape AI infrastructure strategy across the industry.",
    category: "business",
    source: "NVIDIA Blog",
    source_url: "https://blogs.nvidia.com",
    published_at: "2026-03-01",
    read_time: 4,
    status: "published",
  },
  {
    id: "10",
    title: "DeepSeek R2 Open-Source Model Challenges Proprietary Leaders",
    summary:
      "Chinese AI lab DeepSeek releases R2, an open-source reasoning model that matches GPT-4 performance at a fraction of the cost. The release intensifies the open vs. closed source AI debate and threatens major providers' pricing models.",
    category: "models",
    source: "The Verge",
    source_url: "https://www.theverge.com/ai-artificial-intelligence",
    published_at: "2026-02-28",
    read_time: 5,
    status: "published",
  },
  {
    id: "11",
    title: "AI-Generated Content Now Accounts for 15% of Web Traffic",
    summary:
      "A Stanford study finds that AI-generated articles, images, and videos now make up 15% of all web traffic, up from 5% a year ago. The finding raises concerns about content quality, misinformation, and the future of human-created media.",
    category: "research",
    source: "Stanford HAI",
    source_url: "https://hai.stanford.edu",
    published_at: "2026-02-25",
    read_time: 5,
    status: "published",
  },
  {
    id: "12",
    title: "Anthropic Launches Model Context Protocol as Open Standard",
    summary:
      "Anthropic open-sources the Model Context Protocol (MCP), enabling AI models to connect with external tools and databases through a unified interface. Major tech companies including Microsoft and Google adopt the standard within weeks.",
    category: "research",
    source: "Anthropic",
    source_url: "https://anthropic.com/news",
    published_at: "2026-02-20",
    read_time: 4,
    status: "published",
  },
]
