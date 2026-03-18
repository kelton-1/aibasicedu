export interface GlossaryTerm {
  term: string
  definition: string
  category: "fundamentals" | "techniques" | "applications" | "infrastructure"
  level: "beginner" | "intermediate" | "advanced"
  examples?: string[]
  relatedTerms?: string[]
  practicalUseCases?: string[]
}

export const glossaryTerms: GlossaryTerm[] = [
  {
    term: "Artificial Intelligence (AI)",
    definition:
      "The simulation of human intelligence by computer systems, including learning, reasoning, problem-solving, perception, and language understanding. Modern AI ranges from narrow systems designed for specific tasks to general-purpose assistants.",
    category: "fundamentals",
    level: "beginner",
    examples: ["A chatbot answering customer questions", "A spam filter ranking suspicious emails"],
    relatedTerms: ["Machine Learning", "Generative AI", "AI Agent"],
    practicalUseCases: ["Automating repetitive support tasks", "Helping teams analyze large datasets faster"],
  },
  {
    term: "Large Language Model (LLM)",
    definition:
      "A neural network trained on massive text datasets that can generate, understand, and manipulate human language. Examples include GPT-4, Claude, Gemini, and Llama. LLMs power chatbots, coding assistants, and content generation tools.",
    category: "fundamentals",
    level: "beginner",
    examples: ["ChatGPT drafting an email", "Claude summarizing a policy document"],
    relatedTerms: ["Transformer", "Token", "Context Window"],
    practicalUseCases: ["Building internal knowledge assistants", "Generating first drafts for writing or code"],
  },
  {
    term: "Machine Learning",
    definition:
      "A subset of AI where systems learn patterns from data rather than being explicitly programmed. The three main types are supervised learning (labeled data), unsupervised learning (finding patterns), and reinforcement learning (learning from rewards).",
    category: "fundamentals",
    level: "beginner",
    examples: ["A recommendation engine learning from clicks", "Fraud detection based on historical transactions"],
    relatedTerms: ["Neural Network", "Benchmark", "Synthetic Data"],
    practicalUseCases: ["Predicting customer churn", "Scoring risk or demand using past behavior"],
  },
  {
    term: "Neural Network",
    definition:
      "A computing system inspired by biological neurons that processes information through interconnected layers of nodes. Deep neural networks with many layers power modern AI breakthroughs in image recognition, language processing, and game playing.",
    category: "fundamentals",
    level: "beginner",
    examples: ["An image classifier detecting defects", "A speech model turning audio into text"],
    relatedTerms: ["Transformer", "Machine Learning", "Inference"],
    practicalUseCases: ["Powering vision features in quality control", "Supporting recognition tasks in voice and search products"],
  },
  {
    term: "Prompt Engineering",
    definition:
      "The practice of crafting effective inputs (prompts) to get desired outputs from AI models. Techniques include few-shot prompting, chain-of-thought reasoning, system prompts, and role-based instructions.",
    category: "techniques",
    level: "beginner",
    examples: ["Asking for a table instead of a paragraph", "Providing examples before requesting a classification"],
    relatedTerms: ["Temperature", "Large Language Model (LLM)", "Hallucination"],
    practicalUseCases: ["Improving consistency in support macros", "Reducing retries when teams use AI for repeated tasks"],
  },
  {
    term: "Fine-Tuning",
    definition:
      "The process of further training a pre-trained model on a specific dataset to specialize it for particular tasks. Fine-tuning adapts general-purpose models for domain-specific applications like medical diagnosis or legal analysis.",
    category: "techniques",
    level: "intermediate",
    examples: ["Training a model on support tickets", "Customizing a model for legal clause review"],
    relatedTerms: ["Synthetic Data", "Benchmark", "Inference"],
    practicalUseCases: ["Aligning outputs with internal terminology", "Improving model performance on repeated domain tasks"],
  },
  {
    term: "Retrieval-Augmented Generation (RAG)",
    definition:
      "A technique that enhances LLM responses by retrieving relevant information from external knowledge bases before generating an answer. RAG reduces hallucinations and keeps responses grounded in factual, up-to-date data.",
    category: "techniques",
    level: "intermediate",
    examples: ["A support bot searching a help center before answering", "An assistant pulling company policy docs during Q&A"],
    relatedTerms: ["Embedding", "Vector Database", "Hallucination"],
    practicalUseCases: ["Internal knowledge assistants", "Customer support bots that cite source material"],
  },
  {
    term: "Transformer",
    definition:
      "The neural network architecture behind modern LLMs, introduced in the 2017 paper 'Attention Is All You Need.' Transformers use self-attention mechanisms to process entire sequences simultaneously, enabling massive parallelization and better understanding of context.",
    category: "fundamentals",
    level: "intermediate",
    examples: ["GPT-style models for chat", "Vision transformers for image analysis"],
    relatedTerms: ["Large Language Model (LLM)", "Token", "Context Window"],
    practicalUseCases: ["Powering modern chatbots", "Supporting multimodal systems that blend text and images"],
  },
  {
    term: "Token",
    definition:
      "The basic unit of text that AI models process. A token can be a word, part of a word, or a character. GPT-4 processes roughly 1 token per 0.75 words. Model pricing and context limits are measured in tokens.",
    category: "fundamentals",
    level: "beginner",
    examples: ["A long PDF consuming thousands of tokens", "A short chat message using only a handful"],
    relatedTerms: ["Context Window", "Large Language Model (LLM)", "Inference"],
    practicalUseCases: ["Estimating API cost", "Planning prompt size for long-document workflows"],
  },
  {
    term: "Context Window",
    definition:
      "The maximum amount of text (measured in tokens) that an AI model can process in a single conversation. Larger context windows allow models to handle longer documents. Claude offers up to 200K tokens, while Gemini supports 1M tokens.",
    category: "fundamentals",
    level: "beginner",
    examples: ["Uploading a long contract for review", "Passing a large codebase summary into one prompt"],
    relatedTerms: ["Token", "Large Language Model (LLM)", "Claude"],
    practicalUseCases: ["Comparing tools for long-document analysis", "Choosing models for repo-wide coding tasks"],
  },
  {
    term: "Hallucination",
    definition:
      "When an AI model generates information that sounds plausible but is factually incorrect or fabricated. Hallucinations occur because models predict likely text patterns rather than retrieving verified facts.",
    category: "fundamentals",
    level: "beginner",
    examples: ["Inventing a fake citation", "Confidently describing a feature that does not exist"],
    relatedTerms: ["Retrieval-Augmented Generation (RAG)", "Prompt Engineering", "Benchmark"],
    practicalUseCases: ["Designing human review steps", "Adding source retrieval to high-stakes workflows"],
  },
  {
    term: "AI Agent",
    definition:
      "An AI system that can autonomously perform multi-step tasks by planning, using tools, and making decisions. Unlike simple chatbots, agents can browse the web, write code, manage files, and coordinate with other agents to complete complex objectives.",
    category: "applications",
    level: "intermediate",
    examples: ["A workflow bot triaging inbound leads", "A coding agent making coordinated file changes"],
    relatedTerms: ["Agentic AI", "Model Context Protocol (MCP)", "Prompt Engineering"],
    practicalUseCases: ["Automating operational workflows", "Connecting AI to tools for end-to-end task execution"],
  },
  {
    term: "Generative AI",
    definition:
      "AI systems that create new content — text, images, audio, video, or code — rather than just analyzing existing data. Powered by models like GPT, DALL-E, Midjourney, and Stable Diffusion, generative AI is transforming creative and knowledge work.",
    category: "fundamentals",
    level: "beginner",
    examples: ["Generating a blog outline", "Creating a product image from a prompt"],
    relatedTerms: ["Large Language Model (LLM)", "Diffusion Model", "Multimodal AI"],
    practicalUseCases: ["Accelerating content production", "Creating prototypes before human refinement"],
  },
  {
    term: "Computer Vision",
    definition:
      "A field of AI that enables machines to interpret and understand visual information from images and videos. Applications include facial recognition, autonomous driving, medical imaging analysis, and quality control in manufacturing.",
    category: "applications",
    level: "intermediate",
    examples: ["Detecting defects on an assembly line", "Classifying medical scans"],
    relatedTerms: ["Neural Network", "Multimodal AI", "Inference"],
    practicalUseCases: ["Automating visual inspection", "Enabling image search and recognition features"],
  },
  {
    term: "Natural Language Processing (NLP)",
    definition:
      "The branch of AI focused on enabling computers to understand, interpret, and generate human language. NLP powers translation, sentiment analysis, chatbots, summarization, and voice assistants.",
    category: "fundamentals",
    level: "beginner",
    examples: ["Analyzing review sentiment", "Translating customer messages"],
    relatedTerms: ["Large Language Model (LLM)", "Token", "Prompt Engineering"],
    practicalUseCases: ["Building language-aware customer tools", "Classifying text at scale"],
  },
  {
    term: "Diffusion Model",
    definition:
      "A type of generative model that creates images by gradually removing noise from a random pattern. Used by DALL-E 3, Midjourney, and Stable Diffusion. The process works by training on millions of images, learning to reverse the addition of noise.",
    category: "techniques",
    level: "advanced",
    examples: ["Text-to-image generation", "Image editing with inpainting"],
    relatedTerms: ["Generative AI", "Multimodal AI", "Inference"],
    practicalUseCases: ["Marketing concept art", "Fast creative exploration for campaigns"],
  },
  {
    term: "Embedding",
    definition:
      "A numerical representation of data (text, images, audio) as a vector in high-dimensional space. Similar items have similar embeddings, enabling semantic search, recommendations, and clustering. Essential for RAG systems and vector databases.",
    category: "techniques",
    level: "intermediate",
    examples: ["Matching similar support tickets", "Finding related articles in a knowledge base"],
    relatedTerms: ["Vector Database", "Retrieval-Augmented Generation (RAG)", "Token"],
    practicalUseCases: ["Semantic search", "Recommendation and clustering pipelines"],
  },
  {
    term: "Temperature",
    definition:
      "A parameter that controls the randomness of AI model outputs. Low temperature (0.0-0.3) produces focused, deterministic responses. High temperature (0.7-1.0) produces more creative, varied outputs. Setting temperature to 0 gives the most predictable results.",
    category: "techniques",
    level: "beginner",
    examples: ["Using low temperature for support answers", "Using high temperature for brainstorming taglines"],
    relatedTerms: ["Prompt Engineering", "Hallucination", "Large Language Model (LLM)"],
    practicalUseCases: ["Balancing creativity and consistency", "Tuning outputs for production workflows"],
  },
  {
    term: "GPU (Graphics Processing Unit)",
    definition:
      "Hardware originally designed for rendering graphics that has become essential for AI training and inference. NVIDIA's H100 and B200 GPUs are the industry standard. The global GPU shortage has driven AI infrastructure costs and shaped industry competition.",
    category: "infrastructure",
    level: "intermediate",
    examples: ["Training a model cluster", "Serving fast image generation workloads"],
    relatedTerms: ["Inference", "Quantization", "Synthetic Data"],
    practicalUseCases: ["Sizing AI infrastructure budgets", "Planning deployment performance"],
  },
  {
    term: "Open Source AI",
    definition:
      "AI models whose weights, architecture, and training code are publicly available. Meta's Llama, Mistral, and DeepSeek are leading open-source models. Open source enables transparency, customization, and reduces dependency on proprietary providers.",
    category: "fundamentals",
    level: "beginner",
    examples: ["Running Llama locally", "Customizing an open model for a niche workflow"],
    relatedTerms: ["Fine-Tuning", "Quantization", "Model Context Protocol (MCP)"],
    practicalUseCases: ["Lowering vendor lock-in", "Testing private deployments on internal data"],
  },
  {
    term: "Multimodal AI",
    definition:
      "AI systems that can process and generate multiple types of data — text, images, audio, and video — in a single model. GPT-4o, Gemini, and Claude can understand images and text together, enabling richer interactions.",
    category: "fundamentals",
    level: "intermediate",
    examples: ["Analyzing screenshots with text prompts", "Voice plus image assistants"],
    relatedTerms: ["Generative AI", "Computer Vision", "Large Language Model (LLM)"],
    practicalUseCases: ["Customer support that interprets uploaded images", "Creating richer AI product experiences"],
  },
  {
    term: "Reinforcement Learning from Human Feedback (RLHF)",
    definition:
      "A training technique where human preferences are used to fine-tune AI model behavior. Humans rank model outputs, and these rankings train a reward model that guides further training. RLHF is key to making models helpful, harmless, and honest.",
    category: "techniques",
    level: "advanced",
    examples: ["Ranking better chatbot replies", "Improving refusal behavior with human review"],
    relatedTerms: ["Fine-Tuning", "Benchmark", "AI Safety"],
    practicalUseCases: ["Improving alignment of production assistants", "Refining style and helpfulness over time"],
  },
  {
    term: "Inference",
    definition:
      "The process of running a trained AI model to generate predictions or outputs. Unlike training (which builds the model), inference is what happens when you send a prompt to ChatGPT or ask an image model to generate a picture.",
    category: "infrastructure",
    level: "beginner",
    examples: ["A chatbot replying to a prompt", "An image model rendering a scene"],
    relatedTerms: ["GPU (Graphics Processing Unit)", "Quantization", "Token"],
    practicalUseCases: ["Optimizing response speed and cost", "Designing serving infrastructure"],
  },
  {
    term: "Vector Database",
    definition:
      "A database optimized for storing and searching embeddings (high-dimensional vectors). Used in RAG systems to find semantically similar content quickly. Popular options include Pinecone, Weaviate, Chroma, and pgvector.",
    category: "infrastructure",
    level: "intermediate",
    examples: ["Searching company documents by meaning", "Finding similar products or articles"],
    relatedTerms: ["Embedding", "Retrieval-Augmented Generation (RAG)", "Inference"],
    practicalUseCases: ["Knowledge retrieval systems", "Recommendation and discovery features"],
  },
  {
    term: "AI Safety",
    definition:
      "The field focused on ensuring AI systems behave as intended and don't cause harm. Includes alignment (making AI goals match human values), robustness (handling edge cases), and governance (policies and regulations for responsible AI deployment).",
    category: "fundamentals",
    level: "intermediate",
    examples: ["Testing harmful prompt resistance", "Setting model usage guardrails"],
    relatedTerms: ["RLHF", "Hallucination", "Agentic AI"],
    practicalUseCases: ["Risk review before launch", "Designing safer enterprise AI policies"],
  },
  {
    term: "Agentic AI",
    definition:
      "The 2026 paradigm where AI systems operate autonomously across multi-step workflows — planning tasks, using tools, making decisions, and coordinating with other agents. Enterprise adoption of agentic AI reached 48% in telecommunications and 47% in retail.",
    category: "applications",
    level: "advanced",
    examples: ["An AI handling a full support escalation workflow", "A research agent gathering and summarizing sources"],
    relatedTerms: ["AI Agent", "Model Context Protocol (MCP)", "AI Safety"],
    practicalUseCases: ["Automating end-to-end operations", "Orchestrating multi-tool AI workflows"],
  },
  {
    term: "Model Context Protocol (MCP)",
    definition:
      "An open standard introduced by Anthropic that allows AI models to connect with external tools, databases, and APIs through a unified interface. MCP enables agents to access real-time data and perform actions beyond text generation.",
    category: "infrastructure",
    level: "advanced",
    examples: ["Connecting a model to a CRM", "Giving an assistant access to a database or ticketing tool"],
    relatedTerms: ["AI Agent", "Agentic AI", "Open Source AI"],
    practicalUseCases: ["Standardizing tool connections", "Reducing custom integration overhead for AI apps"],
  },
  {
    term: "Synthetic Data",
    definition:
      "Artificially generated data that mimics real-world data patterns. Used to train AI models when real data is scarce, expensive, or privacy-sensitive. Increasingly used in healthcare, autonomous driving, and financial modeling.",
    category: "techniques",
    level: "intermediate",
    examples: ["Generated medical images for training", "Simulated driving scenarios"],
    relatedTerms: ["Fine-Tuning", "Benchmark", "GPU (Graphics Processing Unit)"],
    practicalUseCases: ["Augmenting scarce datasets", "Protecting privacy while testing models"],
  },
  {
    term: "Benchmark",
    definition:
      "A standardized test used to evaluate and compare AI model performance. Common benchmarks include MMLU (general knowledge), HumanEval (coding), GSM8K (math), and LMArena (human preference). Benchmarks help users choose the right model for their needs.",
    category: "fundamentals",
    level: "beginner",
    examples: ["Comparing coding scores across models", "Ranking reasoning performance on public tests"],
    relatedTerms: ["Fine-Tuning", "RLHF", "Hallucination"],
    practicalUseCases: ["Shortlisting models before a pilot", "Validating whether a model fits your main workload"],
  },
  {
    term: "Quantization",
    definition:
      "A technique that reduces AI model size by lowering the precision of its numerical weights (e.g., from 32-bit to 4-bit). This allows large models to run on consumer hardware with minimal quality loss, democratizing access to powerful AI.",
    category: "infrastructure",
    level: "advanced",
    examples: ["Running a local model on a laptop GPU", "Compressing a model for edge deployment"],
    relatedTerms: ["GPU (Graphics Processing Unit)", "Inference", "Open Source AI"],
    practicalUseCases: ["Reducing deployment cost", "Making local or on-device AI feasible"],
  },
]
