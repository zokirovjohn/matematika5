"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, ArrowRight, Play, Pause, Volume2, VolumeX, Maximize, ChevronDown, ChevronUp } from "lucide-react"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"

export default function NaturalNumbersVideoPage() {
  const [activeVideo, setActiveVideo] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [progress, setProgress] = useState(0)
  const [showDescription, setShowDescription] = useState(true)

  const videos = [
    {
      id: 1,
      title: "Natural sonlar tushunchasi",
      duration: "10:25",
      thumbnail: "/placeholder.svg?height=200&width=360&text=Video+1",
      description:
        "Bu video darsda natural sonlar tushunchasi, ularning xususiyatlari va qo'llanilishi haqida ma'lumot beriladi.",
    },
    {
      id: 2,
      title: "Qo'shish va ayirish amallari",
      duration: "12:40",
      thumbnail: "/placeholder.svg?height=200&width=360&text=Video+2",
      description:
        "Natural sonlar ustida qo'shish va ayirish amallari, ularning xossalari va misollar bilan tushuntiriladi.",
    },
    {
      id: 3,
      title: "Ko'paytirish va bo'lish amallari",
      duration: "15:15",
      thumbnail: "/placeholder.svg?height=200&width=360&text=Video+3",
      description:
        "Natural sonlar ustida ko'paytirish va bo'lish amallari, ularning xossalari va misollar bilan tushuntiriladi.",
    },
    {
      id: 4,
      title: "Sonlarning bo'linish belgilari",
      duration: "11:30",
      thumbnail: "/placeholder.svg?height=200&width=360&text=Video+4",
      description: "Sonlarning 2, 3, 4, 5, 9, 10 va boshqa sonlarga bo'linish belgilari haqida ma'lumot beriladi.",
    },
    {
      id: 5,
      title: "Tub va murakkab sonlar",
      duration: "13:50",
      thumbnail: "/placeholder.svg?height=200&width=360&text=Video+5",
      description: "Tub va murakkab sonlar, ularni aniqlash usullari va xossalari haqida ma'lumot beriladi.",
    },
  ]

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying)
    // In a real app, you would control the video playback here
  }

  const handleMute = () => {
    setIsMuted(!isMuted)
    // In a real app, you would control the video audio here
  }

  const handleVideoSelect = (index: number) => {
    setActiveVideo(index)
    setIsPlaying(false)
    setProgress(0)
  }

  // Simulate progress update
  const updateProgress = () => {
    if (isPlaying) {
      setProgress(Math.min(100, progress + 0.5))
      setTimeout(updateProgress, 100)
    }
  }

  // Start progress update when playing
  if (isPlaying && progress < 100) {
    setTimeout(updateProgress, 100)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <Link href="/lessons/video" className="text-primary hover:underline flex items-center gap-1">
          <ArrowLeft className="h-4 w-4" />
          <span>Video darsliklarga qaytish</span>
        </Link>
      </div>

      <h1 className="text-3xl font-bold mb-6">Natural sonlar - Video darsliklar</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card className="mb-4">
            <div className="relative">
              <div className="aspect-video bg-black flex items-center justify-center">
                <img
                  src={videos[activeVideo].thumbnail || "/placeholder.svg"}
                  alt={videos[activeVideo].title}
                  className="max-w-full max-h-full"
                />
                {!isPlaying && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-16 w-16 rounded-full bg-primary/20 backdrop-blur-sm hover:bg-primary/30"
                      onClick={handlePlayPause}
                    >
                      <Play className="h-8 w-8" />
                    </Button>
                  </div>
                )}
              </div>

              <div className="absolute bottom-0 left-0 right-0 bg-black/60 backdrop-blur-sm p-2">
                <Progress value={progress} className="h-1 mb-2" />
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Button variant="ghost" size="icon" className="h-8 w-8 text-white" onClick={handlePlayPause}>
                      {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8 text-white" onClick={handleMute}>
                      {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
                    </Button>
                    <span className="text-xs text-white">
                      {Math.floor(
                        (progress / 100) * Number.parseInt(videos[activeVideo].duration.split(":")[0]) * 60 +
                          Number.parseInt(videos[activeVideo].duration.split(":")[1]),
                      )}
                      s / {videos[activeVideo].duration}
                    </span>
                  </div>
                  <Button variant="ghost" size="icon" className="h-8 w-8 text-white">
                    <Maximize className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle>{videos[activeVideo].title}</CardTitle>
                  <CardDescription>Natural sonlar mavzusi bo&apos;yicha video darslik</CardDescription>
                </div>
                <Button variant="ghost" size="icon" onClick={() => setShowDescription(!showDescription)}>
                  {showDescription ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                </Button>
              </div>
            </CardHeader>

            {showDescription && (
              <CardContent>
                <p className="text-muted-foreground">{videos[activeVideo].description}</p>

                <div className="mt-4 flex flex-wrap gap-2">
                  <Badge variant="outline" className="bg-primary/10">
                    Natural sonlar
                  </Badge>
                  <Badge variant="outline">5-sinf</Badge>
                  <Badge variant="outline">Matematika</Badge>
                </div>
              </CardContent>
            )}

            <CardFooter className="flex justify-between">
              <Button
                variant="outline"
                onClick={() => handleVideoSelect(Math.max(0, activeVideo - 1))}
                disabled={activeVideo === 0}
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Oldingi video
              </Button>
              <Button
                onClick={() => handleVideoSelect(Math.min(videos.length - 1, activeVideo + 1))}
                disabled={activeVideo === videos.length - 1}
              >
                Keyingi video
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Mavzuga oid testlar</CardTitle>
              <CardDescription>O&apos;z bilimlaringizni tekshiring</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Natural sonlar mavzusi bo&apos;yicha o&apos;z bilimlaringizni tekshirish uchun testlarni yeching.
              </p>
              <Link href="/tests/natural-numbers">
                <Button>Testlarni boshlash</Button>
              </Link>
            </CardContent>
          </Card>
        </div>

        <div>
          <Card>
            <CardHeader>
              <CardTitle>Video darslar ro&apos;yxati</CardTitle>
              <CardDescription>Natural sonlar mavzusi bo&apos;yicha</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {videos.map((video, index) => (
                  <div
                    key={video.id}
                    className={`p-3 rounded-md cursor-pointer ${activeVideo === index ? "bg-primary/10 border border-primary/20" : "hover:bg-muted"}`}
                    onClick={() => handleVideoSelect(index)}
                  >
                    <div className="flex gap-3">
                      <div className="relative w-20 h-12 flex-shrink-0">
                        <img
                          src={video.thumbnail || "/placeholder.svg"}
                          alt={video.title}
                          className="w-full h-full object-cover rounded-md"
                        />
                        <div className="absolute bottom-1 right-1 bg-black/70 text-white text-[10px] px-1 rounded">
                          {video.duration}
                        </div>
                      </div>
                      <div>
                        <h3 className="text-sm font-medium line-clamp-2">{video.title}</h3>
                        <p className="text-xs text-muted-foreground mt-1">Video darslik</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Link href="/lessons/text/natural-numbers" className="w-full">
                <Button variant="outline" className="w-full">
                  Matnli darslikni ko&apos;rish
                </Button>
              </Link>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}
