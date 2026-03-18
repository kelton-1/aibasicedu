export type StaticCompanyDetail = {
  slug: string
  name: string
  logo: string
  description: string
  founded: string
  headquarters: string
  website: string
  coverImage: string
  timeline: Array<{
    id: string
    date: string
    title: string
    description: string
    category: string
    highlight?: boolean
  }>
  products: Array<{
    name: string
    description: string
    link: string
  }>
  research: Array<{
    title: string
    description: string
  }>
}

export const staticCompanyDetails = {
  openai: {
    slug: "openai",
    name: "OpenAI",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg",
    description:
      "OpenAI is an AI research and deployment company dedicated to ensuring that artificial general intelligence benefits all of humanity.",
    founded: "December 2015",
    headquarters: "San Francisco, California, USA",
    website: "https://openai.com",
    coverImage:
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    timeline: [
      { id: "gpt4o", date: "2024-05-13", title: "GPT-4o Release", description: "OpenAI released GPT-4o, a multimodal model with significantly improved speed, cost efficiency, and capabilities across text, vision, and audio.", category: "Model Release", highlight: true },
      { id: "sora", date: "2024-02-15", title: "Sora Text-to-Video Model", description: "OpenAI unveiled Sora, a text-to-video model capable of generating realistic and imaginative scenes from text prompts, demonstrating significant advancements in video generation technology.", category: "Model Release", highlight: true },
      { id: "gpt4", date: "2023-03-14", title: "GPT-4 Release", description: "OpenAI released GPT-4, a large multimodal model that can accept image and text inputs and produce text outputs, demonstrating human-level performance on various professional and academic benchmarks.", category: "Model Release", highlight: true },
      { id: "chatgpt", date: "2022-11-30", title: "ChatGPT Launch", description: "OpenAI launched ChatGPT, an interactive conversational model based on GPT-3.5, which quickly became one of the fastest-growing consumer applications in history, reaching 100 million users within two months.", category: "Product Launch", highlight: true },
      { id: "dall-e-2", date: "2022-04-06", title: "DALL-E 2 Announcement", description: "OpenAI announced DALL-E 2, a new AI system that can create realistic images and art from natural language descriptions, with improved resolution and accuracy compared to the original DALL-E.", category: "Model Release" },
      { id: "codex", date: "2021-08-10", title: "Codex Model", description: "OpenAI released Codex, a model that translates natural language to code, powering GitHub Copilot and capable of interpreting simple commands in natural language and executing them.", category: "Model Release" },
      { id: "dall-e", date: "2021-01-05", title: "DALL-E Announcement", description: "OpenAI introduced DALL-E, a neural network that creates images from text captions, demonstrating the ability to combine concepts, attributes, and styles in creative ways.", category: "Model Release" },
      { id: "gpt3", date: "2020-06-11", title: "GPT-3 Paper Published", description: "OpenAI published the paper introducing GPT-3, a 175-billion parameter language model that demonstrated remarkable few-shot learning capabilities across a wide range of tasks.", category: "Research Publication", highlight: true },
      { id: "openai-lp", date: "2019-03-11", title: "Transition to Limited Profit Company", description: "OpenAI transitioned from a non-profit to a 'capped-profit' company called OpenAI LP, with the goal of raising capital while still serving its mission.", category: "Company Milestone" },
      { id: "gpt2", date: "2019-02-14", title: "GPT-2 Release", description: "OpenAI announced GPT-2, a 1.5-billion parameter language model capable of generating coherent paragraphs of text, but initially withheld the full model due to concerns about potential misuse.", category: "Model Release" },
      { id: "openai-five", date: "2018-06-25", title: "OpenAI Five Dota 2 Team", description: "OpenAI introduced OpenAI Five, a team of five neural networks that learned to play the complex game Dota 2 through self-play and eventually competed against professional human players.", category: "Research Project" },
      { id: "openai-founding", date: "2015-12-11", title: "OpenAI Founded", description: "OpenAI was founded as a non-profit artificial intelligence research company by Elon Musk, Sam Altman, Greg Brockman, Ilya Sutskever, John Schulman, and Wojciech Zaremba, with the goal of ensuring that artificial general intelligence benefits all of humanity.", category: "Company Milestone", highlight: true },
    ],
    products: [
      { name: "ChatGPT", description: "Conversational AI assistant based on GPT models", link: "https://chat.openai.com" },
      { name: "DALL-E", description: "AI system that creates images from textual descriptions", link: "https://openai.com/dall-e-3" },
      { name: "GPT-4", description: "Advanced large language model with multimodal capabilities", link: "https://openai.com/gpt-4" },
      { name: "Sora", description: "Text-to-video model for generating realistic videos", link: "https://openai.com/sora" },
    ],
    research: [
      { title: "Language Models", description: "Research on large language models like GPT series" },
      { title: "Multimodal Learning", description: "Work on systems that can process and generate multiple types of media" },
      { title: "Reinforcement Learning", description: "Research on training AI systems through rewards and feedback" },
      { title: "AI Alignment", description: "Ensuring AI systems act in accordance with human values and intentions" },
    ],
  },
  "google-deepmind": {
    slug: "google-deepmind",
    name: "Google DeepMind",
    logo: "https://storage.googleapis.com/deepmind-media/DeepMind%20for%20Google/Logo%20and%20brand%20guidelines/RGB/DeepMind_for_Google_Logo_RGB_Landscape.svg",
    description:
      "Google DeepMind is a leading AI research lab focused on developing artificial general intelligence (AGI) safely and responsibly, while solving complex scientific problems.",
    founded: "September 2010 (as DeepMind), April 2023 (merged with Google Brain)",
    headquarters: "London, United Kingdom",
    website: "https://deepmind.google",
    coverImage:
      "https://images.unsplash.com/photo-1526378800651-c32d170fe6f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    timeline: [
      { id: "gemini-1.5", date: "2024-02-15", title: "Gemini 1.5 Release", description: "Google DeepMind released Gemini 1.5, featuring a significantly improved context window of 1 million tokens, enabling the model to process and reason over vast amounts of information.", category: "Model Release", highlight: true },
      { id: "gemini", date: "2023-12-06", title: "Gemini Model Launch", description: "Google DeepMind launched Gemini, a multimodal AI model designed to understand and reason about text, images, audio, video, and code, with versions ranging from Ultra (most capable) to Nano (most efficient).", category: "Model Release", highlight: true },
      { id: "deepmind-google-merger", date: "2023-04-20", title: "DeepMind and Google Brain Merger", description: "DeepMind merged with Google Brain to form Google DeepMind, combining two of the world's leading AI research teams under one organization.", category: "Company Milestone", highlight: true },
      { id: "alphafold-database", date: "2022-07-28", title: "AlphaFold Protein Structure Database Expansion", description: "DeepMind expanded the AlphaFold Protein Structure Database to include over 200 million protein structure predictions, covering almost all cataloged proteins known to science.", category: "Scientific Breakthrough" },
      { id: "gato", date: "2022-05-12", title: "Gato Generalist Agent", description: "DeepMind introduced Gato, a generalist agent that could perform hundreds of different tasks across a wide range of environments using a single neural network.", category: "Research Publication" },
      { id: "alphafold2", date: "2021-07-15", title: "AlphaFold 2 Open Source Release", description: "DeepMind open-sourced AlphaFold 2, making the groundbreaking protein structure prediction system available to the scientific community.", category: "Scientific Breakthrough", highlight: true },
      { id: "alphafold-nature", date: "2020-11-30", title: "AlphaFold 2 in Nature", description: "DeepMind's AlphaFold 2 was recognized as a solution to the 50-year-old protein folding problem, with the results published in Nature.", category: "Scientific Breakthrough", highlight: true },
      { id: "muzero", date: "2019-11-19", title: "MuZero Algorithm", description: "DeepMind developed MuZero, an algorithm that mastered Go, chess, shogi, and Atari without needing to be told the rules, combining planning with reinforcement learning.", category: "Research Publication" },
      { id: "alphafold", date: "2018-12-02", title: "AlphaFold Debut at CASP13", description: "DeepMind's AlphaFold system won the CASP13 protein-folding competition, significantly outperforming other methods and demonstrating a major advance in protein structure prediction.", category: "Scientific Breakthrough" },
      { id: "alphago-zero", date: "2017-10-18", title: "AlphaGo Zero", description: "DeepMind introduced AlphaGo Zero, which learned to play Go without human data, surpassing all previous versions by learning entirely through self-play.", category: "Research Publication" },
      { id: "alphago-lee", date: "2016-03-15", title: "AlphaGo Defeats Lee Sedol", description: "DeepMind's AlphaGo defeated 18-time world champion Lee Sedol in a five-game match of Go, marking a historic milestone in AI development.", category: "AI Achievement", highlight: true },
      { id: "google-acquisition", date: "2014-01-26", title: "Acquired by Google", description: "DeepMind was acquired by Google for a reported $500 million, while maintaining its research-focused structure.", category: "Company Milestone", highlight: true },
      { id: "deepmind-founding", date: "2010-09-01", title: "DeepMind Founded", description: "DeepMind was founded by Demis Hassabis, Shane Legg, and Mustafa Suleyman with the goal of building artificial general intelligence.", category: "Company Milestone", highlight: true },
    ],
    products: [
      { name: "Gemini", description: "Multimodal AI model for understanding and generating text, code, audio, image, and video", link: "https://deepmind.google/technologies/gemini/" },
      { name: "AlphaFold", description: "AI system for predicting protein structures with high accuracy", link: "https://alphafold.ebi.ac.uk/" },
      { name: "WaveNet", description: "Neural network for generating realistic human-like speech", link: "https://deepmind.google/discover/blog/wavenet-a-generative-model-for-raw-audio/" },
    ],
    research: [
      { title: "Artificial General Intelligence", description: "Research toward systems with human-level intelligence across a wide range of tasks" },
      { title: "Reinforcement Learning", description: "Developing agents that learn through interaction with environments" },
      { title: "Scientific Discovery", description: "Applying AI to solve complex scientific problems in biology, physics, and mathematics" },
      { title: "Multimodal Learning", description: "Creating systems that can understand and generate multiple types of data" },
    ],
  },
} satisfies Record<string, StaticCompanyDetail>

export const staticCompanyDetailList = Object.values(staticCompanyDetails)
