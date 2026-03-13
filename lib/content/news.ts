export type NewsCategory = "models" | "research" | "policy" | "applications" | "business"

export interface NewsArticle {
  id: number
  title: string
  summary: string
  date: string
  readTime: string
  source: string
  sourceUrl: string
  category: NewsCategory
  image: string
}

export const newsArticles: NewsArticle[] = [
  {
    id: 1,
    title: "OpenAI introduces GPT-4o for real-time multimodal interactions",
    summary:
      "OpenAI announced GPT-4o with native text, vision, and audio capabilities designed for faster, lower-latency assistant experiences.",
    date: "2024-05-13",
    readTime: "5 min read",
    source: "OpenAI",
    sourceUrl: "https://openai.com/index/hello-gpt-4o/",
    category: "models",
    image: "/assets/media/news-models.svg",
  },
  {
    id: 2,
    title: "AlphaFold 3 expands structure prediction to biomolecular interactions",
    summary:
      "Google DeepMind and Isomorphic Labs unveiled AlphaFold 3, extending prediction capabilities to proteins, DNA, RNA, and ligands.",
    date: "2024-05-08",
    readTime: "8 min read",
    source: "Google DeepMind",
    sourceUrl: "https://deepmind.google/discover/blog/alphafold-3-predicting-the-structure-and-interactions-of-all-lifes-molecules/",
    category: "research",
    image: "/assets/media/news-research.svg",
  },
  {
    id: 3,
    title: "EU AI Act gets final approval from the Council of the European Union",
    summary:
      "The regulation establishes risk-based obligations for AI systems and introduces new transparency and governance requirements.",
    date: "2024-05-21",
    readTime: "6 min read",
    source: "Council of the European Union",
    sourceUrl: "https://www.consilium.europa.eu/en/press/press-releases/2024/05/21/artificial-intelligence-ai-act-council-gives-final-green-light-to-the-first-worldwide-rules-on-ai/",
    category: "policy",
    image: "/assets/media/news-policy.svg",
  },
  {
    id: 4,
    title: "Sora showcases new possibilities for AI-generated video production",
    summary:
      "OpenAI shared early Sora research demos illustrating high-fidelity scene generation and emerging workflows for visual storytelling.",
    date: "2024-02-15",
    readTime: "4 min read",
    source: "OpenAI",
    sourceUrl: "https://openai.com/index/sora/",
    category: "applications",
    image: "/assets/media/news-applications.svg",
  },
  {
    id: 5,
    title: "McKinsey reports that gen AI adoption keeps climbing across industries",
    summary:
      "McKinsey's global survey highlights continued enterprise investment in generative AI and a growing focus on measurable ROI.",
    date: "2024-03-12",
    readTime: "7 min read",
    source: "McKinsey & Company",
    sourceUrl: "https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai",
    category: "business",
    image: "/assets/media/news-business.svg",
  },
  {
    id: 6,
    title: "Anthropic details safety and performance updates in Claude 3.5 Sonnet",
    summary:
      "Anthropic outlined improvements to model quality, tool use, and safety-focused behavior in the Claude 3.5 Sonnet release.",
    date: "2024-06-20",
    readTime: "9 min read",
    source: "Anthropic",
    sourceUrl: "https://www.anthropic.com/news/claude-3-5-sonnet",
    category: "research",
    image: "/assets/media/news-research.svg",
  },
]

export function getLatestNews(limit = 3) {
  return [...newsArticles]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, limit)
}
