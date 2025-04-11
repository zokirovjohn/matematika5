"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, BookOpen, CheckCircle, Clock, Calendar, BarChart3, Award } from "lucide-react"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"

export default function ProgressPage() {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState("topics")
  const [userData, setUserData] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Check if user is logged in
    const storedUser = localStorage.getItem("user")
    if (storedUser) {
      setUserData(JSON.parse(storedUser))
    }
    setIsLoading(false)
  }, [])

  // Redirect to login if not logged in
  useEffect(() => {
    if (!isLoading && !userData) {
      router.push("/login")
    }
  }, [isLoading, userData, router])

  const topics = [
    {
      id: 1,
      name: "Natural sonlar",
      progress: 85,
      completed: 17,
      total: 20,
      lastActivity: "2 soat oldin",
      subtopics: [
        { name: "Natural sonlar tushunchasi", progress: 100 },
        { name: "Qo'shish va ayirish amallari", progress: 90 },
        { name: "Ko'paytirish va bo'lish amallari", progress: 85 },
        { name: "Sonlarning bo'linish belgilari", progress: 70 },
      ],
    },
    {
      id: 2,
      name: "Kasrlar",
      progress: 60,
      completed: 12,
      total: 20,
      lastActivity: "Kecha",
      subtopics: [
        { name: "Oddiy kasrlar", progress: 80 },
        { name: "O'nli kasrlar", progress: 75 },
        { name: "Kasrlarni solishtirish", progress: 60 },
        { name: "Kasrlar ustida amallar", progress: 40 },
      ],
    },
    {
      id: 3,
      name: "Geometrik shakllar",
      progress: 40,
      completed: 8,
      total: 20,
      lastActivity: "3 kun oldin",
      subtopics: [
        { name: "Nuqta, chiziq va tekislik", progress: 70 },
        { name: "Ko'pburchaklar", progress: 50 },
        { name: "Aylana va doira", progress: 30 },
        { name: "Perimetr va yuza", progress: 20 },
      ],
    },
    {
      id: 4,
      name: "O'lchov birliklari",
      progress: 25,
      completed: 5,
      total: 20,
      lastActivity: "1 hafta oldin",
      subtopics: [
        { name: "Uzunlik o'lchov birliklari", progress: 60 },
        { name: "Yuza o'lchov birliklari", progress: 30 },
        { name: "Hajm o'lchov birliklari", progress: 10 },
        { name: "Vaqt o'lchov birliklari", progress: 5 },
      ],
    },
    {
      id: 5,
      name: "Matematik mantiq",
      progress: 10,
      completed: 2,
      total: 20,
      lastActivity: "2 hafta oldin",
      subtopics: [
        { name: "Mantiqiy masalalar", progress: 20 },
        { name: "Rebuslar va krossvordlar", progress: 15 },
        { name: "Matematik o'yinlar", progress: 5 },
        { name: "Qiziqarli matematik faktlar", progress: 0 },
      ],
    },
  ]

  const testResults = [
    {
      id: 1,
      topic: "Natural sonlar",
      date: "15.05.2023",
      score: 85,
      totalQuestions: 20,
      correctAnswers: 17,
      timeSpent: "18 daqiqa",
      details: [
        { question: "Natural sonlar to'plamining eng kichik elementi qaysi?", correct: true },
        { question: "Quyidagi sonlardan qaysi biri natural son emas?", correct: true },
        { question: "56 × 4 = ?", correct: true },
        { question: "144 ÷ 12 = ?", correct: false },
        { question: "Natural sonlar to'plami qanday harf bilan belgilanadi?", correct: true },
      ],
    },
    {
      id: 2,
      topic: "Kasrlar",
      date: "10.05.2023",
      score: 75,
      totalQuestions: 20,
      correctAnswers: 15,
      timeSpent: "22 daqiqa",
      details: [
        { question: "Kasrning qaysi qismi maxraj deyiladi?", correct: true },
        { question: "2/5 + 1/5 = ?", correct: true },
        { question: "Quyidagi kasrlardan qaysi biri eng katta?", correct: false },
        { question: "0.75 kasri oddiy kasr ko'rinishida qanday yoziladi?", correct: true },
        { question: "2/3 × 3/4 = ?", correct: false },
      ],
    },
    {
      id: 3,
      topic: "Geometrik shakllar",
      date: "05.05.2023",
      score: 70,
      totalQuestions: 20,
      correctAnswers: 14,
      timeSpent: "25 daqiqa",
      details: [
        { question: "To'g'ri to'rtburchakning perimetri qanday hisoblanadi?", correct: true },
        { question: "Doiraning yuzasi qanday hisoblanadi?", correct: true },
        { question: "Uchburchakning burchaklari yig'indisi necha gradus?", correct: false },
        { question: "Kvadratning barcha tomonlari teng va barcha burchaklari ...", correct: true },
        { question: "Quyidagi shakllardan qaysi biri ko'pburchak emas?", correct: true },
      ],
    },
  ]

  const weeklyActivity = [
    { day: "Dushanba", minutes: 45 },
    { day: "Seshanba", minutes: 30 },
    { day: "Chorshanba", minutes: 60 },
    { day: "Payshanba", minutes: 15 },
    { day: "Juma", minutes: 40 },
    { day: "Shanba", minutes: 75 },
    { day: "Yakshanba", minutes: 20 },
  ]

  const achievements = [
    {
      id: 1,
      name: "Matematika sayyohchisi",
      description: "Barcha mavzularni ko'rib chiqish",
      completed: false,
      progress: 60,
    },
    {
      id: 2,
      name: "Natural sonlar ustasi",
      description: "Natural sonlar mavzusidagi barcha mashqlarni bajarish",
      completed: true,
      progress: 100,
      completedDate: "12.05.2023",
    },
    {
      id: 3,
      name: "Geometriya bilimdon",
      description: "Geometriya bo'limidagi testda 90% to'g'ri javob berish",
      completed: false,
      progress: 70,
    },
  ]

  const calculateOverallProgress = () => {
    const totalProgress = topics.reduce((sum, topic) => sum + topic.progress, 0)
    return Math.round(totalProgress / topics.length)
  }

  const getMaxActivityDay = () => {
    const maxActivity = Math.max(...weeklyActivity.map((day) => day.minutes))
    return weeklyActivity.find((day) => day.minutes === maxActivity)?.day
  }

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-8 flex items-center justify-center min-h-[60vh]">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-lg">Ma'lumotlar yuklanmoqda...</p>
        </div>
      </div>
    )
  }

  if (!userData) {
    return null // Will redirect to login
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <Link href="/" className="text-primary hover:underline flex items-center gap-1">
          <ArrowLeft className="h-4 w-4" />
          <span>Bosh sahifaga qaytish</span>
        </Link>
      </div>

      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold text-blue-700">O&apos;quv jarayoni</h1>
        <Badge variant="outline" className="bg-blue-100 text-blue-700 border-blue-200 px-3 py-1 text-sm">
          Umumiy progress: {calculateOverallProgress()}%
        </Badge>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card className="border-blue-100 hover:shadow-md hover:shadow-blue-100/50 transition-all">
          <CardHeader className="bg-gradient-to-r from-blue-50 to-blue-100 pb-3">
            <CardTitle className="text-lg text-blue-700">Eng yaxshi mavzu</CardTitle>
          </CardHeader>
          <CardContent className="pt-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                <BookOpen className="h-5 w-5 text-blue-700" />
              </div>
              <div>
                <p className="font-medium text-lg">Natural sonlar</p>
                <p className="text-sm text-muted-foreground">85% o'zlashtirilgan</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-purple-100 hover:shadow-md hover:shadow-purple-100/50 transition-all">
          <CardHeader className="bg-gradient-to-r from-purple-50 to-purple-100 pb-3">
            <CardTitle className="text-lg text-purple-700">Eng faol kun</CardTitle>
          </CardHeader>
          <CardContent className="pt-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
                <Calendar className="h-5 w-5 text-purple-700" />
              </div>
              <div>
                <p className="font-medium text-lg">{getMaxActivityDay()}</p>
                <p className="text-sm text-muted-foreground">
                  {Math.max(...weeklyActivity.map((day) => day.minutes))} daqiqa o'qilgan
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-teal-100 hover:shadow-md hover:shadow-teal-100/50 transition-all">
          <CardHeader className="bg-gradient-to-r from-teal-50 to-teal-100 pb-3">
            <CardTitle className="text-lg text-teal-700">Yutuqlar</CardTitle>
          </CardHeader>
          <CardContent className="pt-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center">
                <Award className="h-5 w-5 text-teal-700" />
              </div>
              <div>
                <p className="font-medium text-lg">
                  {achievements.filter((a) => a.completed).length} / {achievements.length}
                </p>
                <p className="text-sm text-muted-foreground">Yutuqlar qo'lga kiritilgan</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="topics" value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="topics">Mavzular</TabsTrigger>
          <TabsTrigger value="tests">Test natijalari</TabsTrigger>
          <TabsTrigger value="activity">Faollik</TabsTrigger>
        </TabsList>

        <TabsContent value="topics" className="mt-6">
          <Card className="border-blue-100 hover:shadow-md hover:shadow-blue-100/50 transition-all">
            <CardHeader className="bg-gradient-to-r from-blue-50 to-blue-100">
              <CardTitle className="flex items-center gap-2 text-blue-700">
                <BookOpen className="h-5 w-5" />
                <span>Mavzular bo&apos;yicha progress</span>
              </CardTitle>
              <CardDescription>Har bir mavzu bo&apos;yicha o&apos;zlashtirilgan bilimlar</CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-8">
                {topics.map((topic) => (
                  <div key={topic.id} className="space-y-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="font-medium text-blue-700">{topic.name}</h3>
                        <div className="flex items-center gap-2 mt-1">
                          <Badge variant="outline" className="text-xs bg-blue-50 border-blue-200">
                            {topic.completed}/{topic.total} mashq
                          </Badge>
                          <Badge variant="outline" className="text-xs bg-blue-50 border-blue-200">
                            {topic.lastActivity}
                          </Badge>
                        </div>
                      </div>
                      <span className="font-medium text-blue-700">{topic.progress}%</span>
                    </div>
                    <Progress
                      value={topic.progress}
                      className="h-2"
                      indicatorClassName={
                        topic.progress > 80
                          ? "bg-green-500"
                          : topic.progress > 50
                            ? "bg-blue-500"
                            : topic.progress > 30
                              ? "bg-amber-500"
                              : "bg-red-500"
                      }
                    />

                    <div className="pl-4 border-l-2 border-blue-200 space-y-2">
                      {topic.subtopics.map((subtopic, index) => (
                        <div key={index} className="space-y-1">
                          <div className="flex justify-between items-center">
                            <p className="text-sm">{subtopic.name}</p>
                            <span className="text-sm text-muted-foreground">{subtopic.progress}%</span>
                          </div>
                          <Progress
                            value={subtopic.progress}
                            className="h-1.5"
                            indicatorClassName={
                              subtopic.progress > 80
                                ? "bg-green-400"
                                : subtopic.progress > 50
                                  ? "bg-blue-400"
                                  : subtopic.progress > 30
                                    ? "bg-amber-400"
                                    : "bg-red-400"
                            }
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-blue-600 hover:bg-blue-700">Davom ettirish</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="tests" className="mt-6">
          <Card className="border-purple-100 hover:shadow-md hover:shadow-purple-100/50 transition-all">
            <CardHeader className="bg-gradient-to-r from-purple-50 to-purple-100">
              <CardTitle className="flex items-center gap-2 text-purple-700">
                <BarChart3 className="h-5 w-5" />
                <span>Test natijalari</span>
              </CardTitle>
              <CardDescription>O&apos;tkazilgan testlar natijalari va tahlili</CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-6">
                {testResults.map((test) => (
                  <div key={test.id} className="p-4 border border-purple-100 rounded-md">
                    <div className="flex justify-between items-center mb-3">
                      <div>
                        <h3 className="font-medium text-purple-700">{test.topic}</h3>
                        <div className="flex items-center gap-2 mt-1">
                          <Badge variant="outline" className="text-xs bg-purple-50 border-purple-200">
                            {test.date}
                          </Badge>
                          <Badge variant="outline" className="text-xs bg-purple-50 border-purple-200">
                            {test.timeSpent}
                          </Badge>
                        </div>
                      </div>
                      <Badge
                        variant="outline"
                        className={`
                          ${
                            test.score >= 80
                              ? "bg-green-50 border-green-200 text-green-700"
                              : test.score >= 60
                                ? "bg-blue-50 border-blue-200 text-blue-700"
                                : "bg-amber-50 border-amber-200 text-amber-700"
                          }
                        `}
                      >
                        {test.score}%
                      </Badge>
                    </div>

                    <div className="flex items-center gap-2 mb-3">
                      <Progress
                        value={test.score}
                        className="h-2 flex-1"
                        indicatorClassName={
                          test.score >= 80 ? "bg-green-500" : test.score >= 60 ? "bg-blue-500" : "bg-amber-500"
                        }
                      />
                      <span className="text-sm text-muted-foreground">
                        {test.correctAnswers}/{test.totalQuestions}
                      </span>
                    </div>

                    <div className="pl-4 border-l-2 border-purple-200 space-y-2 mt-4">
                      <p className="text-sm font-medium text-purple-700">Savollar tahlili:</p>
                      {test.details.map((detail, index) => (
                        <div key={index} className="flex items-start gap-2">
                          {detail.correct ? (
                            <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                          ) : (
                            <CheckCircle className="h-4 w-4 text-red-500 mt-0.5 shrink-0" />
                          )}
                          <p className="text-sm">{detail.question}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-purple-600 hover:bg-purple-700">
                Barcha test natijalarini ko&apos;rish
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="activity" className="mt-6">
          <Card className="border-teal-100 hover:shadow-md hover:shadow-teal-100/50 transition-all">
            <CardHeader className="bg-gradient-to-r from-teal-50 to-teal-100">
              <CardTitle className="flex items-center gap-2 text-teal-700">
                <Clock className="h-5 w-5" />
                <span>Haftalik faollik</span>
              </CardTitle>
              <CardDescription>Hafta davomida o&apos;qish uchun sarflangan vaqt</CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="h-60 flex items-end justify-between gap-2">
                {weeklyActivity.map((day, index) => (
                  <div key={index} className="flex flex-col items-center gap-2 flex-1">
                    <div
                      className="w-full bg-teal-200 rounded-t-md relative group"
                      style={{
                        height: `${(day.minutes / Math.max(...weeklyActivity.map((d) => d.minutes))) * 100}%`,
                        minHeight: "10px",
                      }}
                    >
                      <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-teal-700 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                        {day.minutes} daqiqa
                      </div>
                    </div>
                    <span className="text-xs text-muted-foreground">{day.day.substring(0, 2)}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 space-y-4">
                <h3 className="font-medium text-teal-700">Faollik tahlili</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 border border-teal-100 rounded-md">
                    <h4 className="text-sm font-medium mb-2 text-muted-foreground">Jami o&apos;qish vaqti</h4>
                    <p className="text-2xl font-semibold text-teal-700">
                      {weeklyActivity.reduce((sum, day) => sum + day.minutes, 0)} daqiqa
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">Hafta davomida</p>
                  </div>

                  <div className="p-4 border border-teal-100 rounded-md">
                    <h4 className="text-sm font-medium mb-2 text-muted-foreground">O&apos;rtacha kunlik vaqt</h4>
                    <p className="text-2xl font-semibold text-teal-700">
                      {Math.round(weeklyActivity.reduce((sum, day) => sum + day.minutes, 0) / 7)} daqiqa
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">Kuniga</p>
                  </div>

                  <div className="p-4 border border-teal-100 rounded-md">
                    <h4 className="text-sm font-medium mb-2 text-muted-foreground">Eng faol kun</h4>
                    <p className="text-2xl font-semibold text-teal-700">{getMaxActivityDay()}</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      {Math.max(...weeklyActivity.map((day) => day.minutes))} daqiqa
                    </p>
                  </div>

                  <div className="p-4 border border-teal-100 rounded-md">
                    <h4 className="text-sm font-medium mb-2 text-muted-foreground">Faollik tendensiyasi</h4>
                    <p className="text-2xl font-semibold text-green-600">+15%</p>
                    <p className="text-sm text-muted-foreground mt-1">O&apos;tgan haftaga nisbatan</p>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-teal-600 hover:bg-teal-700">Batafsil ma&apos;lumot</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
