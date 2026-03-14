import { createClient } from "@supabase/supabase-js"
import * as dotenv from "dotenv"

dotenv.config({ path: ".env.local" })

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
)

async function seed() {
  console.log("Seeding database...")

  // --- News Articles ---
  // Use title-based dedup — no static IDs, so insert only if title doesn't exist
  const { error: newsError } = await supabase.from("news_articles").insert([
    {
      title: "OpenAI Announces GPT-5 with Enhanced Reasoning Capabilities",
      summary: "The latest model shows significant improvements in logical reasoning and problem-solving abilities.",
      source: "AI Insider",
      source_url: "#",
      category: "models",
      read_time: "5 min read",
      status: "published",
      published_at: "2025-04-03T00:00:00Z",
    },
    {
      title: "New Research Shows AI Can Predict Protein Structures with 99% Accuracy",
      summary: "Breakthrough in computational biology could accelerate drug discovery and medical research.",
      source: "Science Daily",
      source_url: "#",
      category: "research",
      read_time: "8 min read",
      status: "published",
      published_at: "2025-04-02T00:00:00Z",
    },
    {
      title: "EU Passes Comprehensive AI Regulation Framework",
      summary: "New legislation sets standards for transparency, accountability, and safety in artificial intelligence systems.",
      source: "Tech Policy Journal",
      source_url: "#",
      category: "policy",
      read_time: "6 min read",
      status: "published",
      published_at: "2025-04-01T00:00:00Z",
    },
    {
      title: "AI-Generated Art Wins Major International Competition",
      summary: "Controversy erupts as AI-created piece takes first prize in prestigious art contest.",
      source: "Arts Today",
      source_url: "#",
      category: "applications",
      read_time: "4 min read",
      status: "published",
      published_at: "2025-03-30T00:00:00Z",
    },
    {
      title: "Small Businesses Adopting AI at Record Rates, Survey Finds",
      summary: "New report shows 78% of small businesses now use some form of AI, up from 45% last year.",
      source: "Business Insider",
      source_url: "#",
      category: "business",
      read_time: "7 min read",
      status: "published",
      published_at: "2025-03-29T00:00:00Z",
    },
    {
      title: "Researchers Develop New Method to Reduce AI Hallucinations",
      summary: "Novel approach significantly decreases false or misleading outputs from large language models.",
      source: "AI Research Weekly",
      source_url: "#",
      category: "research",
      read_time: "9 min read",
      status: "published",
      published_at: "2025-03-28T00:00:00Z",
    },
  ])

  if (newsError) console.error("News seed error:", newsError.message)
  else console.log("✓ News articles seeded")

  // --- Glossary Terms ---
  const { error: glossaryError } = await supabase.from("glossary_terms").upsert([
    { term: "Artificial Intelligence (AI)", definition: "The simulation of human intelligence processes by machines, especially computer systems.", category: "fundamentals", level: "beginner" },
    { term: "Machine Learning (ML)", definition: "A subset of AI that provides systems the ability to automatically learn and improve from experience without being explicitly programmed.", category: "fundamentals", level: "beginner" },
    { term: "Deep Learning", definition: "A subset of machine learning that uses neural networks with many layers (hence 'deep') to analyze various factors of data.", category: "techniques", level: "intermediate" },
    { term: "Neural Network", definition: "Computing systems inspired by the biological neural networks that constitute animal brains, designed to recognize patterns.", category: "techniques", level: "intermediate" },
    { term: "Natural Language Processing (NLP)", definition: "A field of AI that gives computers the ability to understand text and spoken words in the same way humans can.", category: "applications", level: "intermediate" },
    { term: "Large Language Model (LLM)", definition: "A type of AI model trained on vast amounts of text data to understand and generate human-like text.", category: "applications", level: "intermediate" },
    { term: "Prompt Engineering", definition: "The process of designing effective inputs (prompts) for AI systems to get desired outputs.", category: "techniques", level: "beginner" },
    { term: "Generative AI", definition: "AI systems that can generate new content, such as text, images, audio, or video, based on what they've learned from existing data.", category: "applications", level: "beginner" },
    { term: "Transformer", definition: "A deep learning model architecture that uses self-attention mechanisms, forming the basis for many modern language models.", category: "techniques", level: "advanced" },
    { term: "Fine-tuning", definition: "The process of taking a pre-trained model and further training it on a specific dataset for a particular task.", category: "techniques", level: "advanced" },
    { term: "Reinforcement Learning", definition: "A type of machine learning where an agent learns to make decisions by taking actions in an environment to maximize some notion of reward.", category: "techniques", level: "advanced" },
    { term: "Computer Vision", definition: "A field of AI that enables computers to derive meaningful information from digital images, videos, and other visual inputs.", category: "applications", level: "intermediate" },
  ], { onConflict: "term" })

  if (glossaryError) console.error("Glossary seed error:", glossaryError.message)
  else console.log("✓ Glossary terms seeded")

  // --- Tutorials ---
  const { error: tutorialsError } = await supabase.from("tutorials").upsert([
    { slug: "prompt-engineering-basics", title: "Prompt Engineering Basics", description: "Learn the fundamentals of crafting effective prompts for AI systems.", category: "prompt-engineering", level: "beginner", duration: "20 min", modules: 5, exercises: 3, available: true },
    { slug: "understanding-llms", title: "Understanding Large Language Models", description: "Interactive exploration of how LLMs work and generate text.", category: "ai-concepts", level: "intermediate", duration: "30 min", modules: 7, exercises: 4, available: true },
    { slug: "image-generation-playground", title: "AI Image Generation Playground", description: "Experiment with prompts and parameters to generate AI images.", category: "generative-ai", level: "beginner", duration: "25 min", modules: 4, exercises: 5, available: true },
    { slug: "chain-of-thought-prompting", title: "Chain-of-Thought Prompting", description: "Master advanced prompting techniques for complex reasoning tasks.", category: "prompt-engineering", level: "advanced", duration: "45 min", modules: 8, exercises: 6, available: false },
    { slug: "ai-ethics-scenarios", title: "AI Ethics Interactive Scenarios", description: "Navigate ethical dilemmas and decision-making in AI development.", category: "ai-ethics", level: "intermediate", duration: "35 min", modules: 6, exercises: 4, available: false },
    { slug: "build-simple-classifier", title: "Build a Simple Text Classifier", description: "Create and train a basic AI model to classify text.", category: "practical-ai", level: "intermediate", duration: "50 min", modules: 9, exercises: 7, available: false },
  ], { onConflict: "slug" })

  if (tutorialsError) console.error("Tutorials seed error:", tutorialsError.message)
  else console.log("✓ Tutorials seeded")

  console.log("Done!")
}

seed().catch(console.error)
