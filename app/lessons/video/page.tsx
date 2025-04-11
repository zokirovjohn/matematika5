import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, Calculator, Shapes, Ruler, Brain, ArrowLeft, Play } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export default function VideoLessonsPage() {
  const lessons = [
    {
      id: 1,
      title: "Natural sonlar",
      description: "Natural sonlar va ular ustida amallar",
      icon: <BookOpen className="h-8 w-8 text-primary mb-2" />,
      badge: "Asosiy",
      path: "/lessons/video/natural-numbers",
      videos: [
        { title: "Natural sonlar tushunchasi", duration: "10:25" },
        { title: "Qo'shish va ayirish amallari", duration: "12:40" },
        { title: "Ko'paytirish va bo'lish amallari", duration: "15:15" },
        { title: "Sonlarning bo'linish belgilari", duration: "11:30" },
      ],
    },
    {
      id: 2,
      title: "Kasrlar",
      description: "Kasrlar va o'nli kasrlar",
      icon: <Calculator className="h-8 w-8 text-primary mb-2" />,
      badge: "Muhim",
      path: "/lessons/video/fractions",
      videos: [
        { title: "Oddiy kasrlar", duration: "14:20" },
        { title: "O'nli kasrlar", duration: "12:15" },
        { title: "Kasrlarni solishtirish", duration: "09:45" },
        { title: "Kasrlar ustida amallar", duration: "16:30" },
      ],
    },
    {
      id: 3,
      title: "Geometrik shakllar",
      description: "Geometrik shakllar va ularning xossalari",
      icon: <Shapes className="h-8 w-8 text-primary mb-2" />,
      badge: "Interaktiv",
      path: "/lessons/video/geometry",
      videos: [
        { title: "Nuqta, chiziq va tekislik", duration: "11:10" },
        { title: "Ko'pburchaklar", duration: "13:25" },
        { title: "Aylana va doira", duration: "10:50" },
        { title: "Perimetr va yuza", duration: "14:40" },
      ],
    },
    {
      id: 4,
      title: "O'lchov birliklari",
      description: "Uzunlik, yuza, hajm va vaqt o'lchov birliklari",
      icon: <Ruler className="h-8 w-8 text-primary mb-2" />,
      badge: "Amaliy",
      path: "/lessons/video/measurements",
      videos: [
        { title: "Uzunlik o'lchov birliklari", duration: "09:30" },
        { title: "Yuza o'lchov birliklari", duration: "11:45" },
        { title: "Hajm o'lchov birliklari", duration: "10:20" },
        { title: "Vaqt o'lchov birliklari", duration: "08:55" },
      ],
    },
    {
      id: 5,
      title: "Matematik mantiq",
      description: "Matematik mantiq masalalari",
      icon: <Brain className="h-8 w-8 text-primary mb-2" />,
      badge: "Qiziqarli",
      path: "/lessons/video/logic",
      videos: [
        { title: "Mantiqiy masalalar", duration: "12:35" },
        { title: "Rebuslar va krossvordlar", duration: "09:15" },
        { title: "Matematik o'yinlar", duration: "14:50" },
        { title: "Qiziqarli matematik faktlar", duration: "11:25" },
      ],
    },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <Link href="/" className="text-primary hover:underline flex items-center gap-1">
          <ArrowLeft className="h-4 w-4" />
          <span>Bosh sahifaga qaytish</span>
        </Link>
      </div>

      <h1 className="text-3xl font-bold mb-6">Video darsliklar</h1>

      <p className="text-lg text-muted-foreground mb-8">
        Har bir mavzu bo&apos;yicha video darsliklar to&apos;plami. Ko&apos;rgazmali tushuntirishlar orqali matematikani
        oson o&apos;rganing.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {lessons.map((lesson) => (
          <Card key={lesson.id} className="h-full transition-all hover:border-primary hover:shadow-md">
            <CardHeader>
              <div className="flex justify-between items-start">
                {lesson.icon}
                <Badge variant="outline" className="bg-primary/10">
                  {lesson.badge}
                </Badge>
              </div>
              <CardTitle>{lesson.title}</CardTitle>
              <CardDescription>{lesson.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <h3 className="font-medium mb-2">Video darslar:</h3>
              <ul className="space-y-2">
                {lesson.videos.map((video, index) => (
                  <li key={index} className="flex justify-between items-center text-sm">
                    <div className="flex items-center gap-2">
                      <Play className="h-4 w-4 text-primary" />
                      <span>{video.title}</span>
                    </div>
                    <span className="text-muted-foreground">{video.duration}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Link href={lesson.path} className="w-full">
                <Button variant="outline" className="w-full">
                  Ko&apos;rish
                </Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
