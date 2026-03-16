export interface StaticTutorial {
  id: string
  title: string
  description: string
  category: string
  difficulty: "beginner" | "intermediate" | "advanced"
  duration_minutes: number
  modules_count: number
  exercises_count: number
  status: "published" | "draft"
}

export const staticTutorials: StaticTutorial[] = [
  {
    id: "prompt-engineering-basics",
    title: "Prompt Engineering Basics",
    description: "Master the fundamentals of writing effective prompts. Learn techniques like few-shot prompting, chain-of-thought reasoning, and role-based instructions to get better results from any AI model.",
    category: "prompt-engineering",
    difficulty: "beginner",
    duration_minutes: 45,
    modules_count: 5,
    exercises_count: 3,
    status: "published",
  },
  {
    id: "understanding-llms",
    title: "Understanding Large Language Models",
    description: "Explore how LLMs work under the hood — from tokenization and attention mechanisms to inference and text generation. Includes an interactive text generation simulator.",
    category: "ai-concepts",
    difficulty: "intermediate",
    duration_minutes: 60,
    modules_count: 7,
    exercises_count: 2,
    status: "published",
  },
  {
    id: "image-generation-playground",
    title: "AI Image Generation Playground",
    description: "Hands-on tutorial for generating AI images. Learn about diffusion models, prompt crafting for images, style presets, and parameters like CFG scale and sampling steps.",
    category: "generative-ai",
    difficulty: "beginner",
    duration_minutes: 30,
    modules_count: 4,
    exercises_count: 5,
    status: "published",
  },
  {
    id: "rag-fundamentals",
    title: "Building RAG Applications",
    description: "Learn Retrieval-Augmented Generation from scratch. Understand embeddings, vector databases, chunking strategies, and how to build AI systems grounded in your own data.",
    category: "practical-ai",
    difficulty: "intermediate",
    duration_minutes: 75,
    modules_count: 6,
    exercises_count: 4,
    status: "draft",
  },
  {
    id: "ai-ethics-101",
    title: "AI Ethics & Responsible Use",
    description: "Explore the ethical dimensions of AI — bias, fairness, transparency, privacy, and accountability. Learn frameworks for evaluating AI systems and making responsible deployment decisions.",
    category: "ai-ethics",
    difficulty: "beginner",
    duration_minutes: 40,
    modules_count: 5,
    exercises_count: 2,
    status: "draft",
  },
  {
    id: "ai-for-business",
    title: "AI Strategy for Business Leaders",
    description: "Non-technical guide to implementing AI in your organization. Covers use case identification, ROI evaluation, vendor selection, change management, and building an AI-ready culture.",
    category: "practical-ai",
    difficulty: "beginner",
    duration_minutes: 50,
    modules_count: 6,
    exercises_count: 3,
    status: "draft",
  },
  {
    id: "fine-tuning-guide",
    title: "Fine-Tuning AI Models",
    description: "Advanced guide to customizing AI models for specific tasks. Learn dataset preparation, training techniques, evaluation metrics, and when fine-tuning beats prompt engineering.",
    category: "ai-concepts",
    difficulty: "advanced",
    duration_minutes: 90,
    modules_count: 8,
    exercises_count: 4,
    status: "draft",
  },
  {
    id: "ai-agents-workshop",
    title: "Building AI Agents",
    description: "Create autonomous AI agents that can plan, use tools, and complete multi-step tasks. Covers agent architectures, tool integration, memory systems, and multi-agent orchestration.",
    category: "practical-ai",
    difficulty: "advanced",
    duration_minutes: 80,
    modules_count: 7,
    exercises_count: 5,
    status: "draft",
  },
]
