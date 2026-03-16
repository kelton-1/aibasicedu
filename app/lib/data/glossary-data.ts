export interface GlossaryTerm {
  term: string
  definition: string
  category: "fundamentals" | "techniques" | "applications" | "infrastructure"
  level: "beginner" | "intermediate" | "advanced"
}

export const glossaryTerms: GlossaryTerm[] = [
  {
    term: "Artificial Intelligence (AI)",
    definition:
      "The simulation of human intelligence by computer systems, including learning, reasoning, problem-solving, perception, and language understanding. Modern AI ranges from narrow systems designed for specific tasks to general-purpose assistants.",
    category: "fundamentals",
    level: "beginner",
  },
  {
    term: "Large Language Model (LLM)",
    definition:
      "A neural network trained on massive text datasets that can generate, understand, and manipulate human language. Examples include GPT-4, Claude, Gemini, and Llama. LLMs power chatbots, coding assistants, and content generation tools.",
    category: "fundamentals",
    level: "beginner",
  },
  {
    term: "Machine Learning",
    definition:
      "A subset of AI where systems learn patterns from data rather than being explicitly programmed. The three main types are supervised learning (labeled data), unsupervised learning (finding patterns), and reinforcement learning (learning from rewards).",
    category: "fundamentals",
    level: "beginner",
  },
  {
    term: "Neural Network",
    definition:
      "A computing system inspired by biological neurons that processes information through interconnected layers of nodes. Deep neural networks with many layers power modern AI breakthroughs in image recognition, language processing, and game playing.",
    category: "fundamentals",
    level: "beginner",
  },
  {
    term: "Prompt Engineering",
    definition:
      "The practice of crafting effective inputs (prompts) to get desired outputs from AI models. Techniques include few-shot prompting, chain-of-thought reasoning, system prompts, and role-based instructions.",
    category: "techniques",
    level: "beginner",
  },
  {
    term: "Fine-Tuning",
    definition:
      "The process of further training a pre-trained model on a specific dataset to specialize it for particular tasks. Fine-tuning adapts general-purpose models for domain-specific applications like medical diagnosis or legal analysis.",
    category: "techniques",
    level: "intermediate",
  },
  {
    term: "Retrieval-Augmented Generation (RAG)",
    definition:
      "A technique that enhances LLM responses by retrieving relevant information from external knowledge bases before generating an answer. RAG reduces hallucinations and keeps responses grounded in factual, up-to-date data.",
    category: "techniques",
    level: "intermediate",
  },
  {
    term: "Transformer",
    definition:
      "The neural network architecture behind modern LLMs, introduced in the 2017 paper 'Attention Is All You Need.' Transformers use self-attention mechanisms to process entire sequences simultaneously, enabling massive parallelization and better understanding of context.",
    category: "fundamentals",
    level: "intermediate",
  },
  {
    term: "Token",
    definition:
      "The basic unit of text that AI models process. A token can be a word, part of a word, or a character. GPT-4 processes roughly 1 token per 0.75 words. Model pricing and context limits are measured in tokens.",
    category: "fundamentals",
    level: "beginner",
  },
  {
    term: "Context Window",
    definition:
      "The maximum amount of text (measured in tokens) that an AI model can process in a single conversation. Larger context windows allow models to handle longer documents. Claude offers up to 200K tokens, while Gemini supports 1M tokens.",
    category: "fundamentals",
    level: "beginner",
  },
  {
    term: "Hallucination",
    definition:
      "When an AI model generates information that sounds plausible but is factually incorrect or fabricated. Hallucinations occur because models predict likely text patterns rather than retrieving verified facts.",
    category: "fundamentals",
    level: "beginner",
  },
  {
    term: "AI Agent",
    definition:
      "An AI system that can autonomously perform multi-step tasks by planning, using tools, and making decisions. Unlike simple chatbots, agents can browse the web, write code, manage files, and coordinate with other agents to complete complex objectives.",
    category: "applications",
    level: "intermediate",
  },
  {
    term: "Generative AI",
    definition:
      "AI systems that create new content — text, images, audio, video, or code — rather than just analyzing existing data. Powered by models like GPT, DALL-E, Midjourney, and Stable Diffusion, generative AI is transforming creative and knowledge work.",
    category: "fundamentals",
    level: "beginner",
  },
  {
    term: "Computer Vision",
    definition:
      "A field of AI that enables machines to interpret and understand visual information from images and videos. Applications include facial recognition, autonomous driving, medical imaging analysis, and quality control in manufacturing.",
    category: "applications",
    level: "intermediate",
  },
  {
    term: "Natural Language Processing (NLP)",
    definition:
      "The branch of AI focused on enabling computers to understand, interpret, and generate human language. NLP powers translation, sentiment analysis, chatbots, summarization, and voice assistants.",
    category: "fundamentals",
    level: "beginner",
  },
  {
    term: "Diffusion Model",
    definition:
      "A type of generative model that creates images by gradually removing noise from a random pattern. Used by DALL-E 3, Midjourney, and Stable Diffusion. The process works by training on millions of images, learning to reverse the addition of noise.",
    category: "techniques",
    level: "advanced",
  },
  {
    term: "Embedding",
    definition:
      "A numerical representation of data (text, images, audio) as a vector in high-dimensional space. Similar items have similar embeddings, enabling semantic search, recommendations, and clustering. Essential for RAG systems and vector databases.",
    category: "techniques",
    level: "intermediate",
  },
  {
    term: "Temperature",
    definition:
      "A parameter that controls the randomness of AI model outputs. Low temperature (0.0-0.3) produces focused, deterministic responses. High temperature (0.7-1.0) produces more creative, varied outputs. Setting temperature to 0 gives the most predictable results.",
    category: "techniques",
    level: "beginner",
  },
  {
    term: "GPU (Graphics Processing Unit)",
    definition:
      "Hardware originally designed for rendering graphics that has become essential for AI training and inference. NVIDIA's H100 and B200 GPUs are the industry standard. The global GPU shortage has driven AI infrastructure costs and shaped industry competition.",
    category: "infrastructure",
    level: "intermediate",
  },
  {
    term: "Open Source AI",
    definition:
      "AI models whose weights, architecture, and training code are publicly available. Meta's Llama, Mistral, and DeepSeek are leading open-source models. Open source enables transparency, customization, and reduces dependency on proprietary providers.",
    category: "fundamentals",
    level: "beginner",
  },
  {
    term: "Multimodal AI",
    definition:
      "AI systems that can process and generate multiple types of data — text, images, audio, and video — in a single model. GPT-4o, Gemini, and Claude can understand images and text together, enabling richer interactions.",
    category: "fundamentals",
    level: "intermediate",
  },
  {
    term: "Reinforcement Learning from Human Feedback (RLHF)",
    definition:
      "A training technique where human preferences are used to fine-tune AI model behavior. Humans rank model outputs, and these rankings train a reward model that guides further training. RLHF is key to making models helpful, harmless, and honest.",
    category: "techniques",
    level: "advanced",
  },
  {
    term: "Inference",
    definition:
      "The process of running a trained AI model to generate predictions or outputs. Unlike training (which builds the model), inference is what happens when you send a prompt to ChatGPT or ask an image model to generate a picture.",
    category: "infrastructure",
    level: "beginner",
  },
  {
    term: "Vector Database",
    definition:
      "A database optimized for storing and searching embeddings (high-dimensional vectors). Used in RAG systems to find semantically similar content quickly. Popular options include Pinecone, Weaviate, Chroma, and pgvector.",
    category: "infrastructure",
    level: "intermediate",
  },
  {
    term: "AI Safety",
    definition:
      "The field focused on ensuring AI systems behave as intended and don't cause harm. Includes alignment (making AI goals match human values), robustness (handling edge cases), and governance (policies and regulations for responsible AI deployment).",
    category: "fundamentals",
    level: "intermediate",
  },
  {
    term: "Agentic AI",
    definition:
      "The 2026 paradigm where AI systems operate autonomously across multi-step workflows — planning tasks, using tools, making decisions, and coordinating with other agents. Enterprise adoption of agentic AI reached 48% in telecommunications and 47% in retail.",
    category: "applications",
    level: "advanced",
  },
  {
    term: "Model Context Protocol (MCP)",
    definition:
      "An open standard introduced by Anthropic that allows AI models to connect with external tools, databases, and APIs through a unified interface. MCP enables agents to access real-time data and perform actions beyond text generation.",
    category: "infrastructure",
    level: "advanced",
  },
  {
    term: "Synthetic Data",
    definition:
      "Artificially generated data that mimics real-world data patterns. Used to train AI models when real data is scarce, expensive, or privacy-sensitive. Increasingly used in healthcare, autonomous driving, and financial modeling.",
    category: "techniques",
    level: "intermediate",
  },
  {
    term: "Benchmark",
    definition:
      "A standardized test used to evaluate and compare AI model performance. Common benchmarks include MMLU (general knowledge), HumanEval (coding), GSM8K (math), and LMArena (human preference). Benchmarks help users choose the right model for their needs.",
    category: "fundamentals",
    level: "beginner",
  },
  {
    term: "Quantization",
    definition:
      "A technique that reduces AI model size by lowering the precision of its numerical weights (e.g., from 32-bit to 4-bit). This allows large models to run on consumer hardware with minimal quality loss, democratizing access to powerful AI.",
    category: "infrastructure",
    level: "advanced",
  },
]
