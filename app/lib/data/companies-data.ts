export type CompanyCategory = "research" | "enterprise" | "generative" | "platform" | "hardware"

export interface CompanyListItem {
  name: string
  logo: string
  slug: string
  category: CompanyCategory
}

export const companies: CompanyListItem[] = [
  {
    name: "OpenAI",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg",
    slug: "openai",
    category: "research",
  },
  {
    name: "Google DeepMind",
    logo: "https://storage.googleapis.com/deepmind-media/DeepMind%20for%20Google/Logo%20and%20brand%20guidelines/RGB/DeepMind_for_Google_Logo_RGB_Landscape.svg",
    slug: "google-deepmind",
    category: "research",
  },
  {
    name: "Microsoft AI",
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg",
    slug: "microsoft",
    category: "enterprise",
  },
  {
    name: "Meta AI",
    logo: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg",
    slug: "meta",
    category: "research",
  },
  {
    name: "Anthropic",
    logo: "https://upload.wikimedia.org/wikipedia/commons/8/82/Anthropic_logo.svg",
    slug: "anthropic",
    category: "research",
  },
  {
    name: "Hugging Face",
    logo: "https://huggingface.co/datasets/huggingface/brand-assets/resolve/main/hf-logo.svg",
    slug: "hugging-face",
    category: "platform",
  },
  {
    name: "NVIDIA",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/21/Nvidia_logo.svg",
    slug: "nvidia",
    category: "hardware",
  },
  {
    name: "IBM Watson",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
    slug: "ibm-watson",
    category: "enterprise",
  },
  {
    name: "Stability AI",
    logo: "https://stability.ai/assets/images/stability-ai-logo.svg",
    slug: "stability-ai",
    category: "generative",
  },
  {
    name: "Midjourney",
    logo: "https://upload.wikimedia.org/wikipedia/commons/e/e6/Midjourney_Emblem.png",
    slug: "midjourney",
    category: "generative",
  },
  {
    name: "Cohere",
    logo: "https://cohere.com/images/cohere-logo.svg",
    slug: "cohere",
    category: "platform",
  },
  {
    name: "Runway",
    logo: "https://runwayml.com/images/runway-logo-emblem.svg",
    slug: "runway",
    category: "generative",
  },
]

export const companyCategories = [
  { value: "all", label: "All" },
  { value: "research", label: "Research" },
  { value: "enterprise", label: "Enterprise" },
  { value: "generative", label: "Generative" },
  { value: "platform", label: "Platforms" },
  { value: "hardware", label: "Hardware" },
] as const
