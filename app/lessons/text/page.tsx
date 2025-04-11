import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, Calculator, Shapes, Ruler, Brain, ArrowLeft } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export default function TextLessonsPage() {
  const lessons = [
    {
      id: 1,
      title: "Natural sonlar",
      description: "Natural sonlar va ular ustida amallar",
      icon: <BookOpen className="h-8 w-8 text-primary mb-2" />,
      badge: "Asosiy",
      path: "/lessons/text/natural-numbers",
      topics: [
        "Natural sonlar tushunchasi",
        "Qo'shish va ayirish amallari",
        "Ko'paytirish va bo'lish amallari",
        "Sonlarning bo'linish belgilari",
      ],
    },
    {
      id: 2,
      title: "Kasrlar",
      description: "Kasrlar va o'nli kasrlar",
      icon: <Calculator className="h-8 w-8 text-primary mb-2" />,
      badge: "Muhim",
      path: "/lessons/text/fractions",
      topics: ["Oddiy kasrlar", "O'nli kasrlar", "Kasrlarni solishtirish", "Kasrlar ustida amallar"],
    },
    {
      id: 3,
      title: "Geometrik shakllar",
      description: "Geometrik shakllar va ularning xossalari",
      icon: <Shapes className="h-8 w-8 text-primary mb-2" />,
      badge: "Interaktiv",
      path: "/lessons/text/geometry",
      topics: ["Nuqta, chiziq va tekislik", "Ko'pburchaklar", "Aylana va doira", "Perimetr va yuza"],
    },
    {
      id: 4,
      title: "O'lchov birliklari",
      description: "Uzunlik, yuza, hajm va vaqt o'lchov birliklari",
      icon: <Ruler className="h-8 w-8 text-primary mb-2" />,
      badge: "Amaliy",
      path: "/lessons/text/measurements",
      topics: [
        "Uzunlik o'lchov birliklari",
        "Yuza o'lchov birliklari",
        "Hajm o'lchov birliklari",
        "Vaqt o'lchov birliklari",
      ],
    },
    {
      id: 5,
      title: "Matematik mantiq",
      description: "Matematik mantiq masalalari",
      icon: <Brain className="h-8 w-8 text-primary mb-2" />,
      badge: "Qiziqarli",
      path: "/lessons/text/logic",
      topics: ["Mantiqiy masalalar", "Rebuslar va krossvordlar", "Matematik o'yinlar", "Qiziqarli matematik faktlar"],
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

      <h1 className="text-3xl font-bold mb-6">Matnli darsliklar</h1>

      <p className="text-lg text-muted-foreground mb-8">
        Har bir mavzu bo&apos;yicha batafsil matnli darsliklar, misollar va mashqlar bilan. O&apos;zingizga kerakli
        mavzuni tanlang va o&apos;rganishni boshlang.
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
              <h3 className="font-medium mb-2">Mavzular:</h3>
              <ul className="list-disc pl-5 space-y-1">
                {lesson.topics.map((topic, index) => (
                  <li key={index} className="text-sm text-muted-foreground">
                    {topic}
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Link href={lesson.path} className="w-full">
                <Button variant="outline" className="w-full">
                  O&apos;qish
                </Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
