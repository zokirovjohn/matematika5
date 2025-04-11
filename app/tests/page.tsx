"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, BookOpen, Calculator, Shapes, Ruler, Brain, CheckSquare } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export default function TestsPage() {
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null)

  const topics = [
    {
      id: "natural-numbers",
      title: "Natural sonlar",
      description: "Natural sonlar va ular ustida amallar bo'yicha testlar",
      icon: <BookOpen className="h-8 w-8 text-primary mb-2" />,
      badge: "20 ta savol",
      questionsCount: 20,
      difficulty: "O'rta",
    },
    {
      id: "fractions",
      title: "Kasrlar",
      description: "Kasrlar va o'nli kasrlar bo'yicha testlar",
      icon: <Calculator className="h-8 w-8 text-primary mb-2" />,
      badge: "15 ta savol",
      questionsCount: 15,
      difficulty: "O'rta",
    },
    {
      id: "geometry",
      title: "Geometrik shakllar",
      description: "Geometrik shakllar va ularning xossalari bo'yicha testlar",
      icon: <Shapes className="h-8 w-8 text-primary mb-2" />,
      badge: "18 ta savol",
      questionsCount: 18,
      difficulty: "Qiyin",
    },
    {
      id: "measurements",
      title: "O'lchov birliklari",
      description: "Uzunlik, yuza, hajm va vaqt o'lchov birliklari bo'yicha testlar",
      icon: <Ruler className="h-8 w-8 text-primary mb-2" />,
      badge: "12 ta savol",
      questionsCount: 12,
      difficulty: "Oson",
    },
    {
      id: "logic",
      title: "Matematik mantiq",
      description: "Matematik mantiq masalalari bo'yicha testlar",
      icon: <Brain className="h-8 w-8 text-primary mb-2" />,
      badge: "10 ta savol",
      questionsCount: 10,
      difficulty: "Qiyin",
    },
    {
      id: "all",
      title: "Umumiy test",
      description: "Barcha mavzular bo'yicha aralash testlar",
      icon: <CheckSquare className="h-8 w-8 text-primary mb-2" />,
      badge: "30 ta savol",
      questionsCount: 30,
      difficulty: "Aralash",
    },
  ]

  const handleStartTest = (topicId: string) => {
    setSelectedTopic(topicId)
    window.location.href = `/tests/${topicId}`
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <Link href="/" className="text-primary hover:underline flex items-center gap-1">
          <ArrowLeft className="h-4 w-4" />
          <span>Bosh sahifaga qaytish</span>
        </Link>
      </div>

      <h1 className="text-3xl font-bold mb-6">Testlar</h1>

      <p className="text-lg text-muted-foreground mb-8">
        O&apos;z bilimlaringizni tekshirish uchun testlarni yeching. Har bir mavzu bo&apos;yicha alohida testlar yoki
        umumiy test mavjud. Test yakunida natijalaringizni ko&apos;rishingiz va xatolaringizni tahlil qilishingiz
        mumkin.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {topics.map((topic) => (
          <Card key={topic.id} className="h-full transition-all hover:border-primary hover:shadow-md">
            <CardHeader>
              <div className="flex justify-between items-start">
                {topic.icon}
                <Badge variant="outline" className="bg-primary/10">
                  {topic.badge}
                </Badge>
              </div>
              <CardTitle>{topic.title}</CardTitle>
              <CardDescription>{topic.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Savollar soni:</span>
                  <span className="font-medium">{topic.questionsCount}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Qiyinlik darajasi:</span>
                  <span className="font-medium">{topic.difficulty}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Vaqt:</span>
                  <span className="font-medium">{topic.questionsCount} daqiqa</span>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full" onClick={() => handleStartTest(topic.id)}>
                Testni boshlash
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
