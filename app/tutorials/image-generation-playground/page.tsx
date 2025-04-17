"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
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
      // In a real app, this would call an API to generate an image
      setGeneratedImage(`/placeholder.svg?height=512&width=512&text=${encodeURIComponent(prompt.substring(0, 20))}`)
      setIsGenerating(false)
    }, 2000)
  }

  const handleRandomSeed = () => {
    setSeed(Math.floor(Math.random() * 1000000).toString())
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <div>
          <div className="flex items-center mb-2">
            <Link href="/tutorials" className="text-gray-500 hover:text-gray-700 mr-2">
              <ArrowLeft className="h-4 w-4 inline" /> Back to Tutorials
            </Link>
            <Badge variant="outline">Generative AI</Badge>
            <Badge variant="secondary" className="ml-2">
              Beginner
            </Badge>
          </div>
          <h1 className="text-3xl font-bold tracking-tighter">AI Image Generation Playground</h1>
          <p className="text-gray-500 mt-2">Experiment with prompts and parameters to generate AI images.</p>
        </div>
        <div className="mt-4 md:mt-0 flex items-center">
          <div className="text-sm text-gray-500 mr-4">Progress: {Math.round(progress)}%</div>
          <Progress value={progress} className="w-[200px] h-2" />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Column - Controls */}
        <div>
          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Wand2 className="h-5 w-5 mr-2" />
                Image Generation Controls
              </CardTitle>
              <CardDescription>Adjust these parameters to control the image generation process</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Prompt</label>
                <Textarea
                  placeholder="Describe the image you want to generate..."
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  className="min-h-[100px]"
                />
                <p className="text-xs text-gray-500 mt-1">
                  Be specific and detailed about what you want to see in the image.
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Negative Prompt</label>
                <Textarea
                  placeholder="Describe what you don't want to see..."
                  value={negativePrompt}
                  onChange={(e) => setNegativePrompt(e.target.value)}
                  className="min-h-[80px]"
                />
                <p className="text-xs text-gray-500 mt-1">
                  Specify elements you want to exclude from the generated image.
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Style Preset</label>
                <Select value={stylePreset} onValueChange={setStylePreset}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a style" />
                  </SelectTrigger>
                  <SelectContent>
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
                <p className="text-xs text-gray-500 mt-1">Choose a visual style for your generated image.</p>
              </div>

              <Tabs defaultValue="basic" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="basic">Basic</TabsTrigger>
                  <TabsTrigger value="advanced">Advanced</TabsTrigger>
                </TabsList>
                <TabsContent value="basic" className="pt-4">
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-2">
                        <label className="text-sm font-medium">CFG Scale: {cfgScale[0].toFixed(1)}</label>
                        <span className="text-xs text-gray-500">Prompt adherence</span>
                      </div>
                      <Slider value={cfgScale} min={1} max={15} step={0.5} onValueChange={setCfgScale} />
                      <div className="flex justify-between text-xs text-gray-500 mt-1">
                        <span>More creative</span>
                        <span>More literal</span>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="advanced" className="space-y-4 pt-4">
                  <div>
                    <div className="flex justify-between mb-2">
                      <label className="text-sm font-medium">Steps: {steps[0]}</label>
                      <span className="text-xs text-gray-500">Generation quality</span>
                    </div>
                    <Slider value={steps} min={10} max={50} step={1} onValueChange={setSteps} />
                    <div className="flex justify-between text-xs text-gray-500 mt-1">
                      <span>Faster</span>
                      <span>Higher quality</span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Seed</label>
                    <div className="flex space-x-2">
                      <Input placeholder="Random seed" value={seed} onChange={(e) => setSeed(e.target.value)} />
                      <Button variant="outline" onClick={handleRandomSeed}>
                        Random
                      </Button>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">
                      Use the same seed to create variations of the same image.
                    </p>
                  </div>
                </TabsContent>
              </Tabs>

              <Button className="w-full" onClick={handleGenerate} disabled={!prompt.trim() || isGenerating}>
                {isGenerating ? "Generating..." : "Generate Image"}
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Lightbulb className="h-5 w-5 mr-2" />
                Prompt Engineering Tips
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="text-sm font-medium mb-1">Be Specific and Detailed</h3>
                <p className="text-sm text-gray-600">
                  Instead of "a cat," try "a fluffy orange tabby cat sitting on a windowsill at sunset."
                </p>
              </div>

              <div>
                <h3 className="text-sm font-medium mb-1">Specify Art Style</h3>
                <p className="text-sm text-gray-600">
                  Add phrases like "digital art," "oil painting," "watercolor," or "photorealistic."
                </p>
              </div>

              <div>
                <h3 className="text-sm font-medium mb-1">Mention Lighting and Mood</h3>
                <p className="text-sm text-gray-600">
                  "Soft diffused lighting," "dramatic shadows," "golden hour," or "moody atmosphere."
                </p>
              </div>

              <div>
                <h3 className="text-sm font-medium mb-1">Use Negative Prompts Effectively</h3>
                <p className="text-sm text-gray-600">
                  Exclude unwanted elements like "blurry, distorted, low quality, extra limbs, deformed."
                </p>
              </div>

              <div>
                <h3 className="text-sm font-medium mb-1">Example Prompt Structure</h3>
                <p className="text-sm text-gray-600 font-mono">
                  [Subject] in [setting], [lighting], [style], [additional details], [camera details]
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Column - Output and Gallery */}
        <div>
          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="flex items-center">
                <ImageIcon className="h-5 w-5 mr-2" />
                Generated Image
              </CardTitle>
              <CardDescription>Your AI-generated image will appear here</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="relative">
                <img
                  src={generatedImage || "/placeholder.svg"}
                  alt="AI-generated image"
                  className="w-full h-auto rounded-lg border"
                />
                {isGenerating && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-lg">
                    <div className="text-center text-white">
                      <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-white mx-auto mb-2"></div>
                      <p>Generating...</p>
                    </div>
                  </div>
                )}
              </div>

              {!isGenerating && generatedImage !== "/placeholder.svg?height=512&width=512" && (
                <div className="mt-4 flex space-x-2">
                  <Button variant="outline" className="flex-1">
                    Save to Gallery
                  </Button>
                  <Button variant="outline" className="flex-1">
                    Download
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Your Gallery</CardTitle>
              <CardDescription>Previously generated images will appear here</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center">
                  <p className="text-gray-400 text-sm">No images yet</p>
                </div>
                <div className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center">
                  <p className="text-gray-400 text-sm">No images yet</p>
                </div>
                <div className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center">
                  <p className="text-gray-400 text-sm">No images yet</p>
                </div>
                <div className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center">
                  <p className="text-gray-400 text-sm">No images yet</p>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full" disabled>
                View All Saved Images
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>

      {/* Discussion Section */}
      <Card className="mt-8">
        <CardHeader>
          <CardTitle className="flex items-center">
            <MessageSquare className="h-5 w-5 mr-2" />
            Discussion
          </CardTitle>
          <CardDescription>Ask questions or share your generated images with others</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="p-4 bg-gray-50 rounded-lg">
              <div className="flex items-start mb-2">
                <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center mr-3">
                  <span className="text-purple-600 font-medium">EL</span>
                </div>
                <div>
                  <p className="font-medium">Emma Lee</p>
                  <p className="text-sm text-gray-500">5 hours ago</p>
                </div>
              </div>
              <p className="text-gray-600 mb-3">
                I found that adding "highly detailed, professional photography" to my prompts really improves the
                quality of the generated images!
              </p>
              <div className="bg-gray-100 p-2 rounded text-sm text-gray-600">
                <p className="font-mono">
                  My prompt: A serene Japanese garden with a small bridge over a koi pond, cherry blossoms, highly
                  detailed, professional photography, golden hour lighting
                </p>
              </div>
            </div>

            <div className="p-4 bg-gray-50 rounded-lg">
              <div className="flex items-start mb-2">
                <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center mr-3">
                  <span className="text-green-600 font-medium">RJ</span>
                </div>
                <div>
                  <p className="font-medium">Ryan Johnson</p>
                  <p className="text-sm text-gray-500">1 day ago</p>
                </div>
              </div>
              <p className="text-gray-600">
                Question: What's the best way to get consistent character appearances across multiple generated images?
              </p>
            </div>

            <textarea
              placeholder="Add your comment or question..."
              className="w-full min-h-[100px] p-3 border rounded-md"
            />
            <Button>Post Comment</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

