"use client"

import { useState } from "react"
import Link from "next/link"
import { ROUTE_MAP } from "@/app/lib/route-map"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Slider } from "@/components/ui/slider"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowLeft, ImageIcon, Lightbulb, MessageSquare, Wand2 } from "lucide-react"

export default function ImageGenerationPlaygroundTutorial() {
  const [prompt, setPrompt] = useState("")
  const [negativePrompt, setNegativePrompt] = useState("")
  const [stylePreset, setStylePreset] = useState("photographic")
  const [cfgScale, setCfgScale] = useState([7.5])
  const [steps, setSteps] = useState([30])
  const [seed, setSeed] = useState("")
  const [generatedImage, setGeneratedImage] = useState("/placeholder.svg?height=512&width=512")
  const [isGenerating, setIsGenerating] = useState(false)
  const [progress, setProgress] = useState(33)

  const stylePresets = [
    "photographic",
    "digital-art",
    "cinematic",
    "anime",
    "fantasy-art",
    "line-art",
    "low-poly",
    "origami",
    "watercolor",
    "oil-painting",
  ]

  const handleGenerate = () => {
    if (!prompt.trim()) return

    setIsGenerating(true)

    // Simulate image generation
    setTimeout(() => {
      setGeneratedImage(`/placeholder.svg?height=512&width=512&text=${encodeURIComponent(prompt.substring(0, 20))}`)
      setIsGenerating(false)
    }, 2000)
  }

  const handleRandomSeed = () => {
    setSeed(Math.floor(Math.random() * 1000000).toString())
  }

  return (
    <div className="section-container py-12">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <div>
          <div className="flex items-center mb-2">
            <Link
              href={ROUTE_MAP.tutorials}
              className="text-muted-foreground hover:text-gold transition-colors mr-3"
            >
              <ArrowLeft className="h-4 w-4 inline" /> Back to Tutorials
            </Link>
            <Badge variant="outline" className="border-border text-muted-foreground">
              Generative AI
            </Badge>
            <Badge variant="outline" className="ml-2 border-gold/20 text-gold">
              Beginner
            </Badge>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            AI Image Generation Playground
          </h1>
          <p className="text-muted-foreground mt-2">Experiment with prompts and parameters to generate AI images.</p>
        </div>
        <div className="mt-4 md:mt-0 flex items-center">
          <div className="text-sm text-muted-foreground mr-4">Progress: {Math.round(progress)}%</div>
          <Progress value={progress} className="w-[200px] h-2 [&>div]:bg-gold" />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Column - Controls */}
        <div>
          <div className="rounded-2xl border border-border bg-card mb-6">
            <div className="p-6 border-b border-border">
              <h3 className="font-semibold text-foreground flex items-center">
                <Wand2 className="h-5 w-5 mr-2 text-gold" />
                Image Generation Controls
              </h3>
              <p className="text-sm text-muted-foreground mt-1">Adjust these parameters to control the image generation process</p>
            </div>
            <div className="p-6 space-y-6">
              <div>
                <label className="label-text block mb-2">Prompt</label>
                <Textarea
                  placeholder="Describe the image you want to generate..."
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  className="min-h-[100px] bg-background border-border"
                />
                <p className="text-xs text-muted-foreground mt-1">
                  Be specific and detailed about what you want to see in the image.
                </p>
              </div>

              <div>
                <label className="label-text block mb-2">Negative Prompt</label>
                <Textarea
                  placeholder="Describe what you don't want to see..."
                  value={negativePrompt}
                  onChange={(e) => setNegativePrompt(e.target.value)}
                  className="min-h-[80px] bg-background border-border"
                />
                <p className="text-xs text-muted-foreground mt-1">
                  Specify elements you want to exclude from the generated image.
                </p>
              </div>

              <div>
                <label className="label-text block mb-2">Style Preset</label>
                <Select value={stylePreset} onValueChange={setStylePreset}>
                  <SelectTrigger className="bg-background border-border">
                    <SelectValue placeholder="Select a style" />
                  </SelectTrigger>
                  <SelectContent className="bg-card border-border">
                    {stylePresets.map((style) => (
                      <SelectItem key={style} value={style}>
                        {style
                          .split("-")
                          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                          .join(" ")}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <p className="text-xs text-muted-foreground mt-1">Choose a visual style for your generated image.</p>
              </div>

              <Tabs defaultValue="basic" className="w-full">
                <TabsList className="grid w-full grid-cols-2 bg-accent/50 rounded-xl p-1">
                  <TabsTrigger value="basic" className="rounded-lg data-[state=active]:bg-card data-[state=active]:text-foreground">
                    Basic
                  </TabsTrigger>
                  <TabsTrigger value="advanced" className="rounded-lg data-[state=active]:bg-card data-[state=active]:text-foreground">
                    Advanced
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="basic" className="pt-4">
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-2">
                        <label className="text-sm font-medium text-foreground">CFG Scale: {cfgScale[0].toFixed(1)}</label>
                        <span className="text-xs text-muted-foreground">Prompt adherence</span>
                      </div>
                      <Slider
                        value={cfgScale}
                        min={1}
                        max={15}
                        step={0.5}
                        onValueChange={setCfgScale}
                        className="[&>span>span]:bg-gold"
                      />
                      <div className="flex justify-between text-xs text-muted-foreground mt-1">
                        <span>More creative</span>
                        <span>More literal</span>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="advanced" className="space-y-4 pt-4">
                  <div>
                    <div className="flex justify-between mb-2">
                      <label className="text-sm font-medium text-foreground">Steps: {steps[0]}</label>
                      <span className="text-xs text-muted-foreground">Generation quality</span>
                    </div>
                    <Slider
                      value={steps}
                      min={10}
                      max={50}
                      step={1}
                      onValueChange={setSteps}
                      className="[&>span>span]:bg-gold"
                    />
                    <div className="flex justify-between text-xs text-muted-foreground mt-1">
                      <span>Faster</span>
                      <span>Higher quality</span>
                    </div>
                  </div>

                  <div>
                    <label className="label-text block mb-2">Seed</label>
                    <div className="flex space-x-2">
                      <Input
                        placeholder="Random seed"
                        value={seed}
                        onChange={(e) => setSeed(e.target.value)}
                        className="bg-background border-border"
                      />
                      <Button
                        variant="outline"
                        onClick={handleRandomSeed}
                        className="border-border hover:bg-accent/50 hover:border-gold/20"
                      >
                        Random
                      </Button>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">
                      Use the same seed to create variations of the same image.
                    </p>
                  </div>
                </TabsContent>
              </Tabs>

              <Button
                className="w-full bg-gold hover:bg-gold-light text-black font-medium rounded-xl"
                onClick={handleGenerate}
                disabled={!prompt.trim() || isGenerating}
              >
                {isGenerating ? "Generating..." : "Generate Image"}
              </Button>
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-card">
            <div className="p-6 border-b border-border">
              <h3 className="font-semibold text-foreground flex items-center">
                <Lightbulb className="h-5 w-5 mr-2 text-gold" />
                Prompt Engineering Tips
              </h3>
            </div>
            <div className="p-6 space-y-4">
              <div>
                <h3 className="text-sm font-medium text-foreground mb-1">Be Specific and Detailed</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Instead of "a cat," try "a fluffy orange tabby cat sitting on a windowsill at sunset."
                </p>
              </div>

              <div>
                <h3 className="text-sm font-medium text-foreground mb-1">Specify Art Style</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Add phrases like "digital art," "oil painting," "watercolor," or "photorealistic."
                </p>
              </div>

              <div>
                <h3 className="text-sm font-medium text-foreground mb-1">Mention Lighting and Mood</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  "Soft diffused lighting," "dramatic shadows," "golden hour," or "moody atmosphere."
                </p>
              </div>

              <div>
                <h3 className="text-sm font-medium text-foreground mb-1">Use Negative Prompts Effectively</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Exclude unwanted elements like "blurry, distorted, low quality, extra limbs, deformed."
                </p>
              </div>

              <div>
                <h3 className="text-sm font-medium text-foreground mb-1">Example Prompt Structure</h3>
                <p className="text-sm text-muted-foreground font-mono">
                  [Subject] in [setting], [lighting], [style], [additional details], [camera details]
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Output and Gallery */}
        <div>
          <div className="rounded-2xl border border-border bg-card mb-6">
            <div className="p-6 border-b border-border">
              <h3 className="font-semibold text-foreground flex items-center">
                <ImageIcon className="h-5 w-5 mr-2 text-gold" />
                Generated Image
              </h3>
              <p className="text-sm text-muted-foreground mt-1">Your AI-generated image will appear here</p>
            </div>
            <div className="p-6">
              <div className="relative">
                <img
                  src={generatedImage || "/placeholder.svg"}
                  alt="AI-generated image"
                  className="w-full h-auto rounded-xl border border-border"
                />
                {isGenerating && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/60 rounded-xl">
                    <div className="text-center text-white">
                      <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-gold mx-auto mb-2"></div>
                      <p className="text-sm">Generating...</p>
                    </div>
                  </div>
                )}
              </div>

              {!isGenerating && generatedImage !== "/placeholder.svg?height=512&width=512" && (
                <div className="mt-4 flex space-x-2">
                  <Button
                    variant="outline"
                    className="flex-1 border-border hover:bg-accent/50 hover:border-gold/20"
                  >
                    Save to Gallery
                  </Button>
                  <Button
                    variant="outline"
                    className="flex-1 border-border hover:bg-accent/50 hover:border-gold/20"
                  >
                    Download
                  </Button>
                </div>
              )}
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-card">
            <div className="p-6 border-b border-border">
              <h3 className="font-semibold text-foreground">Your Gallery</h3>
              <p className="text-sm text-muted-foreground mt-1">Previously generated images will appear here</p>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-square rounded-xl border border-border bg-accent/30 flex items-center justify-center">
                  <p className="text-muted-foreground text-sm">No images yet</p>
                </div>
                <div className="aspect-square rounded-xl border border-border bg-accent/30 flex items-center justify-center">
                  <p className="text-muted-foreground text-sm">No images yet</p>
                </div>
                <div className="aspect-square rounded-xl border border-border bg-accent/30 flex items-center justify-center">
                  <p className="text-muted-foreground text-sm">No images yet</p>
                </div>
                <div className="aspect-square rounded-xl border border-border bg-accent/30 flex items-center justify-center">
                  <p className="text-muted-foreground text-sm">No images yet</p>
                </div>
              </div>
            </div>
            <div className="p-6 pt-0">
              <Button
                variant="outline"
                className="w-full border-border hover:bg-accent/50"
                disabled
              >
                View All Saved Images
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Discussion Section */}
      <div className="rounded-2xl border border-border bg-card mt-8">
        <div className="p-6 border-b border-border">
          <h3 className="font-semibold text-foreground flex items-center">
            <MessageSquare className="h-5 w-5 mr-2 text-gold" />
            Discussion
          </h3>
          <p className="text-sm text-muted-foreground mt-1">Ask questions or share your generated images with others</p>
        </div>
        <div className="p-6">
          <div className="space-y-4">
            <div className="p-4 rounded-xl border border-border bg-accent/30">
              <div className="flex items-start mb-2">
                <div className="w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center mr-3">
                  <span className="text-gold text-sm font-medium">EL</span>
                </div>
                <div>
                  <p className="font-medium text-foreground text-sm">Emma Lee</p>
                  <p className="text-xs text-muted-foreground">5 hours ago</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                I found that adding "highly detailed, professional photography" to my prompts really improves the
                quality of the generated images!
              </p>
              <div className="rounded-lg border border-border bg-accent/50 p-2">
                <p className="text-sm text-muted-foreground font-mono">
                  My prompt: A serene Japanese garden with a small bridge over a koi pond, cherry blossoms, highly
                  detailed, professional photography, golden hour lighting
                </p>
              </div>
            </div>

            <div className="p-4 rounded-xl border border-border bg-accent/30">
              <div className="flex items-start mb-2">
                <div className="w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center mr-3">
                  <span className="text-gold text-sm font-medium">RJ</span>
                </div>
                <div>
                  <p className="font-medium text-foreground text-sm">Ryan Johnson</p>
                  <p className="text-xs text-muted-foreground">1 day ago</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Question: What's the best way to get consistent character appearances across multiple generated images?
              </p>
            </div>

            <Textarea
              placeholder="Add your comment or question..."
              className="min-h-[100px] bg-background border-border"
            />
            <Button className="bg-gold hover:bg-gold-light text-black font-medium rounded-xl">
              Post Comment
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
