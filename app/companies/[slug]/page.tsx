import type { Metadata } from "next"
import type React from "react"
import { notFound } from "next/navigation"
import { CompanyHeader } from "@/app/components/company-header"
import { Timeline } from "@/app/components/timeline"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FadeIn } from "@/app/components/fade-in"
import { Brain, Code, Lightbulb, Newspaper, Users } from "lucide-react"
import { getCanonicalUrl } from "@/app/lib/seo"

type CompanyRouteParams = {
  slug: string
}

export async function generateMetadata({ params }: { params: Promise<CompanyRouteParams> }): Promise<Metadata> {
  const { slug } = await params
  const company = companies[slug as keyof typeof companies]

  if (!company) {
    return {}
  }

  const title = `${company.name} Company Profile`
  const description = company.description
  const url = getCanonicalUrl(`/companies/${slug}`)

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      type: "website",
    },
    twitter: {
      title,
      description,
    },
  }
}

// Company data
const companies = {
  openai: {
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
      {
        id: "gpt4o",
        date: "2024-05-13",
        title: "GPT-4o Release",
        description:
          "OpenAI released GPT-4o, a multimodal model with significantly improved speed, cost efficiency, and capabilities across text, vision, and audio.",
        category: "Model Release",
        highlight: true,
      },
      {
        id: "sora",
        date: "2024-02-15",
        title: "Sora Text-to-Video Model",
        description:
          "OpenAI unveiled Sora, a text-to-video model capable of generating realistic and imaginative scenes from text prompts, demonstrating significant advancements in video generation technology.",
        category: "Model Release",
        highlight: true,
      },
      {
        id: "gpt4",
        date: "2023-03-14",
        title: "GPT-4 Release",
        description:
          "OpenAI released GPT-4, a large multimodal model that can accept image and text inputs and produce text outputs, demonstrating human-level performance on various professional and academic benchmarks.",
        category: "Model Release",
        highlight: true,
      },
      {
        id: "chatgpt",
        date: "2022-11-30",
        title: "ChatGPT Launch",
        description:
          "OpenAI launched ChatGPT, an interactive conversational model based on GPT-3.5, which quickly became one of the fastest-growing consumer applications in history, reaching 100 million users within two months.",
        category: "Product Launch",
        highlight: true,
      },
      {
        id: "dall-e-2",
        date: "2022-04-06",
        title: "DALL-E 2 Announcement",
        description:
          "OpenAI announced DALL-E 2, a new AI system that can create realistic images and art from natural language descriptions, with improved resolution and accuracy compared to the original DALL-E.",
        category: "Model Release",
      },
      {
        id: "codex",
        date: "2021-08-10",
        title: "Codex Model",
        description:
          "OpenAI released Codex, a model that translates natural language to code, powering GitHub Copilot and capable of interpreting simple commands in natural language and executing them.",
        category: "Model Release",
      },
      {
        id: "dall-e",
        date: "2021-01-05",
        title: "DALL-E Announcement",
        description:
          "OpenAI introduced DALL-E, a neural network that creates images from text captions, demonstrating the ability to combine concepts, attributes, and styles in creative ways.",
        category: "Model Release",
      },
      {
        id: "gpt3",
        date: "2020-06-11",
        title: "GPT-3 Paper Published",
        description:
          "OpenAI published the paper introducing GPT-3, a 175-billion parameter language model that demonstrated remarkable few-shot learning capabilities across a wide range of tasks.",
        category: "Research Publication",
        highlight: true,
      },
      {
        id: "openai-lp",
        date: "2019-03-11",
        title: "Transition to Limited Profit Company",
        description:
          "OpenAI transitioned from a non-profit to a 'capped-profit' company called OpenAI LP, with the goal of raising capital while still serving its mission.",
        category: "Company Milestone",
      },
      {
        id: "gpt2",
        date: "2019-02-14",
        title: "GPT-2 Release",
        description:
          "OpenAI announced GPT-2, a 1.5-billion parameter language model capable of generating coherent paragraphs of text, but initially withheld the full model due to concerns about potential misuse.",
        category: "Model Release",
      },
      {
        id: "openai-five",
        date: "2018-06-25",
        title: "OpenAI Five Dota 2 Team",
        description:
          "OpenAI introduced OpenAI Five, a team of five neural networks that learned to play the complex game Dota 2 through self-play and eventually competed against professional human players.",
        category: "Research Project",
      },
      {
        id: "openai-founding",
        date: "2015-12-11",
        title: "OpenAI Founded",
        description:
          "OpenAI was founded as a non-profit artificial intelligence research company by Elon Musk, Sam Altman, Greg Brockman, Ilya Sutskever, John Schulman, and Wojciech Zaremba, with the goal of ensuring that artificial general intelligence benefits all of humanity.",
        category: "Company Milestone",
        highlight: true,
      },
    ],
    products: [
      {
        name: "ChatGPT",
        description: "Conversational AI assistant based on GPT models",
        link: "https://chat.openai.com",
      },
      {
        name: "DALL-E",
        description: "AI system that creates images from textual descriptions",
        link: "https://openai.com/dall-e-3",
      },
      {
        name: "GPT-4",
        description: "Advanced large language model with multimodal capabilities",
        link: "https://openai.com/gpt-4",
      },
      {
        name: "Sora",
        description: "Text-to-video model for generating realistic videos",
        link: "https://openai.com/sora",
      },
    ],
    research: [
      {
        title: "Language Models",
        description: "Research on large language models like GPT series",
      },
      {
        title: "Multimodal Learning",
        description: "Work on systems that can process and generate multiple types of media",
      },
      {
        title: "Reinforcement Learning",
        description: "Research on training AI systems through rewards and feedback",
      },
      {
        title: "AI Alignment",
        description: "Ensuring AI systems act in accordance with human values and intentions",
      },
    ],
  },
  "google-deepmind": {
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
      {
        id: "gemini-1.5",
        date: "2024-02-15",
        title: "Gemini 1.5 Release",
        description:
          "Google DeepMind released Gemini 1.5, featuring a significantly improved context window of 1 million tokens, enabling the model to process and reason over vast amounts of information.",
        category: "Model Release",
        highlight: true,
      },
      {
        id: "gemini",
        date: "2023-12-06",
        title: "Gemini Model Launch",
        description:
          "Google DeepMind launched Gemini, a multimodal AI model designed to understand and reason about text, images, audio, video, and code, with versions ranging from Ultra (most capable) to Nano (most efficient).",
        category: "Model Release",
        highlight: true,
      },
      {
        id: "deepmind-google-merger",
        date: "2023-04-20",
        title: "DeepMind and Google Brain Merger",
        description:
          "DeepMind merged with Google Brain to form Google DeepMind, combining two of the world's leading AI research teams under one organization.",
        category: "Company Milestone",
        highlight: true,
      },
      {
        id: "alphafold-database",
        date: "2022-07-28",
        title: "AlphaFold Protein Structure Database Expansion",
        description:
          "DeepMind expanded the AlphaFold Protein Structure Database to include over 200 million protein structure predictions, covering almost all cataloged proteins known to science.",
        category: "Scientific Breakthrough",
      },
      {
        id: "gato",
        date: "2022-05-12",
        title: "Gato Generalist Agent",
        description:
          "DeepMind introduced Gato, a generalist agent that could perform hundreds of different tasks across a wide range of environments using a single neural network.",
        category: "Research Publication",
      },
      {
        id: "alphafold2",
        date: "2021-07-15",
        title: "AlphaFold 2 Open Source Release",
        description:
          "DeepMind open-sourced AlphaFold 2, making the groundbreaking protein structure prediction system available to the scientific community.",
        category: "Scientific Breakthrough",
        highlight: true,
      },
      {
        id: "alphafold-nature",
        date: "2020-11-30",
        title: "AlphaFold 2 in Nature",
        description:
          "DeepMind's AlphaFold 2 was recognized as a solution to the 50-year-old protein folding problem, with the results published in Nature.",
        category: "Scientific Breakthrough",
        highlight: true,
      },
      {
        id: "muzero",
        date: "2019-11-19",
        title: "MuZero Algorithm",
        description:
          "DeepMind developed MuZero, an algorithm that mastered Go, chess, shogi, and Atari without needing to be told the rules, combining planning with reinforcement learning.",
        category: "Research Publication",
      },
      {
        id: "alphafold",
        date: "2018-12-02",
        title: "AlphaFold Debut at CASP13",
        description:
          "DeepMind's AlphaFold system won the CASP13 protein-folding competition, significantly outperforming other methods and demonstrating a major advance in protein structure prediction.",
        category: "Scientific Breakthrough",
      },
      {
        id: "alphago-zero",
        date: "2017-10-18",
        title: "AlphaGo Zero",
        description:
          "DeepMind introduced AlphaGo Zero, which learned to play Go without human data, surpassing all previous versions by learning entirely through self-play.",
        category: "Research Publication",
      },
      {
        id: "alphago-lee",
        date: "2016-03-15",
        title: "AlphaGo Defeats Lee Sedol",
        description:
          "DeepMind's AlphaGo defeated 18-time world champion Lee Sedol in a five-game match of Go, marking a historic milestone in AI development.",
        category: "AI Achievement",
        highlight: true,
      },
      {
        id: "google-acquisition",
        date: "2014-01-26",
        title: "Acquired by Google",
        description:
          "DeepMind was acquired by Google for a reported $500 million, while maintaining its research-focused structure.",
        category: "Company Milestone",
        highlight: true,
      },
      {
        id: "deepmind-founding",
        date: "2010-09-01",
        title: "DeepMind Founded",
        description:
          "DeepMind was founded by Demis Hassabis, Shane Legg, and Mustafa Suleyman with the goal of building artificial general intelligence.",
        category: "Company Milestone",
        highlight: true,
      },
    ],
    products: [
      {
        name: "Gemini",
        description: "Multimodal AI model for understanding and generating text, code, audio, image, and video",
        link: "https://deepmind.google/technologies/gemini/",
      },
      {
        name: "AlphaFold",
        description: "AI system for predicting protein structures with high accuracy",
        link: "https://alphafold.ebi.ac.uk/",
      },
      {
        name: "WaveNet",
        description: "Neural network for generating realistic human-like speech",
        link: "https://deepmind.google/discover/blog/wavenet-a-generative-model-for-raw-audio/",
      },
    ],
    research: [
      {
        title: "Artificial General Intelligence",
        description: "Research toward systems with human-level intelligence across a wide range of tasks",
      },
      {
        title: "Reinforcement Learning",
        description: "Developing agents that learn through interaction with environments",
      },
      {
        title: "Scientific Discovery",
        description: "Applying AI to solve complex scientific problems in biology, physics, and mathematics",
      },
      {
        title: "Multimodal Learning",
        description: "Creating systems that can understand and generate multiple types of data",
      },
    ],
  },
  // Additional companies would be defined here
}

export default async function CompanyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const company = companies[slug as keyof typeof companies]

  if (!company) {
    notFound()
  }

  return (
    <div className="bg-background">
      <CompanyHeader
        name={company.name}
        logo={company.logo}
        description={company.description}
        founded={company.founded}
        headquarters={company.headquarters}
        website={company.website}
        coverImage={company.coverImage}
      />

      <div className="section-container pb-24 md:pb-32">
        <Tabs defaultValue="timeline" className="w-full">
          <TabsList className="w-full justify-start mb-10 bg-card border border-border rounded-xl p-1">
            <TabsTrigger
              value="timeline"
              className="rounded-lg data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm text-muted-foreground text-sm"
            >
              <Clock className="h-4 w-4 mr-2" />
              Timeline
            </TabsTrigger>
            <TabsTrigger
              value="products"
              className="rounded-lg data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm text-muted-foreground text-sm"
            >
              <Zap className="h-4 w-4 mr-2" />
              Products
            </TabsTrigger>
            <TabsTrigger
              value="research"
              className="rounded-lg data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm text-muted-foreground text-sm"
            >
              <Brain className="h-4 w-4 mr-2" />
              Research
            </TabsTrigger>
            <TabsTrigger
              value="impact"
              className="rounded-lg data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm text-muted-foreground text-sm"
            >
              <Globe className="h-4 w-4 mr-2" />
              Industry Impact
            </TabsTrigger>
          </TabsList>

          <TabsContent value="timeline">
            <FadeIn direction="up">
              <div className="mb-8">
                <p className="label-text mb-2">History</p>
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-3">
                  AI Development Timeline
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Track the evolution of {company.name}&apos;s AI technologies and key milestones.
                </p>
              </div>
            </FadeIn>

            <Timeline events={company.timeline} />
          </TabsContent>

          <TabsContent value="products">
            <FadeIn direction="up">
              <div className="mb-8">
                <p className="label-text mb-2">Products</p>
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-3">
                  AI Products &amp; Technologies
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Explore {company.name}&apos;s key AI products, services, and technologies.
                </p>
              </div>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {company.products.map((product, index) => (
                <FadeIn key={product.name} direction="up" delay={index * 100}>
                  <div className="h-full rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:border-gold/20">
                    <h3 className="text-xl font-bold text-foreground mb-2">{product.name}</h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">{product.description}</p>
                    <a
                      href={product.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-gold hover:text-gold-light flex items-center transition-colors"
                    >
                      Learn more <ExternalLink className="h-3 w-3 ml-1.5" />
                    </a>
                  </div>
                </FadeIn>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="research">
            <FadeIn direction="up">
              <div className="mb-8">
                <p className="label-text mb-2">Research</p>
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-3">
                  Research Focus Areas
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Key research directions and focus areas at {company.name}.
                </p>
              </div>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {company.research.map((area, index) => (
                <FadeIn key={area.title} direction="up" delay={index * 100}>
                  <div className="h-full rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:border-gold/20">
                    <h3 className="text-xl font-bold text-foreground mb-3">{area.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{area.description}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="impact">
            <FadeIn direction="up">
              <div className="mb-8">
                <p className="label-text mb-2">Impact</p>
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-3">
                  Industry Impact
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  How {company.name}&apos;s innovations are shaping the AI landscape and impacting various industries.
                </p>
              </div>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FadeIn direction="up" delay={100}>
                <div className="h-full rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:border-gold/20">
                  <div className="flex items-start gap-5">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center">
                      <Lightbulb className="h-6 w-6 text-gold" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-1">Technological Advancements</h3>
                      <p className="text-sm text-muted-foreground mb-3">Pushing the boundaries of what&apos;s possible</p>
                      <p className="text-muted-foreground leading-relaxed">
                        {company.name} has consistently pushed the state-of-the-art in artificial intelligence,
                        establishing new benchmarks and inspiring further research and development across the industry.
                      </p>
                    </div>
                  </div>
                </div>
              </FadeIn>

              <FadeIn direction="up" delay={200}>
                <div className="h-full rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:border-gold/20">
                  <div className="flex items-start gap-5">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center">
                      <Code className="h-6 w-6 text-gold" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-1">Developer Ecosystem</h3>
                      <p className="text-sm text-muted-foreground mb-3">Enabling innovation through tools and platforms</p>
                      <p className="text-muted-foreground leading-relaxed">
                        By providing developers with powerful AI tools and platforms, {company.name} has fostered a
                        vibrant ecosystem of applications and services that leverage their technologies.
                      </p>
                    </div>
                  </div>
                </div>
              </FadeIn>

              <FadeIn direction="up" delay={300}>
                <div className="h-full rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:border-gold/20">
                  <div className="flex items-start gap-5">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center">
                      <Users className="h-6 w-6 text-gold" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-1">Societal Impact</h3>
                      <p className="text-sm text-muted-foreground mb-3">Changing how we live and work</p>
                      <p className="text-muted-foreground leading-relaxed">
                        {company.name}&apos;s AI technologies have transformed numerous aspects of daily life, from how we
                        search for information to how we create content and interact with digital services.
                      </p>
                    </div>
                  </div>
                </div>
              </FadeIn>

              <FadeIn direction="up" delay={400}>
                <div className="h-full rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:border-gold/20">
                  <div className="flex items-start gap-5">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center">
                      <Newspaper className="h-6 w-6 text-gold" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-1">Industry Standards</h3>
                      <p className="text-sm text-muted-foreground mb-3">Setting benchmarks for the field</p>
                      <p className="text-muted-foreground leading-relaxed">
                        Through research publications, open-source contributions, and product releases, {company.name} has
                        helped establish standards and best practices that guide the entire AI industry.
                      </p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

function Clock(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  )
}

function Globe(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <line x1="2" x2="22" y1="12" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  )
}

function Zap(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  )
}

function ExternalLink(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" x2="21" y1="14" y2="3" />
    </svg>
  )
}
