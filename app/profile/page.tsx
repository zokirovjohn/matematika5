"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  ArrowLeft,
  Award,
  BookOpen,
  CheckCircle,
  BarChart3,
  Clock,
  Calendar,
  BookMarked,
  GraduationCap,
  Trophy,
} from "lucide-react"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

interface UserData {
  name: string
  email: string
  isLoggedIn: boolean
  role: string
  lastLogin?: string
  registeredAt?: string
}

export default function ProfilePage() {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState("progress")
  const [userData, setUserData] = useState<UserData | null>(null)
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
    { id: 1, name: "Natural sonlar", progress: 85, completed: 17, total: 20, lastActivity: "2 soat oldin" },
    { id: 2, name: "Kasrlar", progress: 60, completed: 12, total: 20, lastActivity: "Kecha" },
    { id: 3, name: "Geometrik shakllar", progress: 40, completed: 8, total: 20, lastActivity: "3 kun oldin" },
    { id: 4, name: "O'lchov birliklari", progress: 25, completed: 5, total: 20, lastActivity: "1 hafta oldin" },
    { id: 5, name: "Matematik mantiq", progress: 10, completed: 2, total: 20, lastActivity: "2 hafta oldin" },
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
    {
      id: 4,
      name: "Matematik mantiq",
      description: "10 ta mantiqiy masalani yechish",
      completed: false,
      progress: 30,
    },
    {
      id: 5,
      name: "Izlanuvchan o'quvchi",
      description: "Har kuni kamida 15 daqiqa darslikdan foydalanish",
      completed: false,
      progress: 80,
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
    },
    {
      id: 2,
      topic: "Kasrlar",
      date: "10.05.2023",
      score: 75,
      totalQuestions: 20,
      correctAnswers: 15,
      timeSpent: "22 daqiqa",
    },
    {
      id: 3,
      topic: "Geometrik shakllar",
      date: "05.05.2023",
      score: 70,
      totalQuestions: 20,
      correctAnswers: 14,
      timeSpent: "25 daqiqa",
    },
  ]

  const activityData = [
    {
      date: "Bugun",
      activities: [
        { time: "10:30", action: "Natural sonlar mavzusini o'qidi", topic: "Natural sonlar" },
        { time: "11:15", action: "Testni yakunladi", topic: "Natural sonlar", result: "85%" },
      ],
    },
    {
      date: "Kecha",
      activities: [
        { time: "15:45", action: "Kasrlar mavzusini o'qidi", topic: "Kasrlar" },
        { time: "16:20", action: "Mashqlarni bajaradi", topic: "Kasrlar", completed: 5 },
      ],
    },
    {
      date: "12.05.2023",
      activities: [
        { time: "09:10", action: "Video darslikni ko'rdi", topic: "Geometrik shakllar" },
        { time: "14:30", action: "Yutuqni qo'lga kiritdi", achievement: "Natural sonlar ustasi" },
      ],
    },
  ]

  const calculateOverallProgress = () => {
    const totalProgress = topics.reduce((sum, topic) => sum + topic.progress, 0)
    return Math.round(totalProgress / topics.length)
  }

  const handleLogout = () => {
    localStorage.removeItem("user")
    router.push("/login")
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

      <div className="flex flex-col md:flex-row gap-6 mb-8">
        <div className="md:w-1/3">
          <Card className="border-blue-100 hover:shadow-md hover:shadow-blue-100/50 transition-all">
            <CardHeader className="bg-gradient-to-r from-blue-50 to-purple-50">
              <div className="flex justify-center">
                <Avatar className="h-24 w-24 border-4 border-white shadow-md">
                  <AvatarImage src="/placeholder.svg?height=96&width=96" alt="Avatar" />
                  <AvatarFallback className="bg-blue-100 text-blue-700 text-xl">
                    {userData.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
              </div>
              <CardTitle className="text-center mt-4 text-blue-700">{userData.name}</CardTitle>
              <CardDescription className="text-center">
                {userData.role === "student" ? "5-sinf o'quvchisi" : "O'qituvchi"}
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Umumiy progress</span>
                  <span className="font-medium text-blue-700">{calculateOverallProgress()}%</span>
                </div>
                <Progress value={calculateOverallProgress()} className="h-2" />

                <div className="pt-4 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                      <Calendar className="h-5 w-5 text-blue-700" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Ro'yxatdan o'tgan sana</p>
                      <p className="font-medium">
                        {userData.registeredAt ? new Date(userData.registeredAt).toLocaleDateString() : "12.05.2023"}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
                      <Clock className="h-5 w-5 text-purple-700" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Oxirgi faollik</p>
                      <p className="font-medium">
                        {userData.lastLogin ? new Date(userData.lastLogin).toLocaleDateString() : "Bugun"}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center">
                      <Trophy className="h-5 w-5 text-teal-700" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Yutuqlar</p>
                      <p className="font-medium">
                        {achievements.filter((a) => a.completed).length} / {achievements.length}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-4">
                  <h3 className="font-medium mb-2 text-blue-700">Yutuqlar</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="bg-blue-100 text-blue-700 border-blue-200">
                      Natural sonlar
                    </Badge>
                    <Badge variant="outline" className="bg-purple-100 text-purple-700 border-purple-200">
                      Kasrlar
                    </Badge>
                    <Badge variant="outline" className="bg-teal-100 text-teal-700 border-teal-200">
                      Geometriya
                    </Badge>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button
                variant="outline"
                className="w-full border-red-200 text-red-600 hover:bg-red-50"
                onClick={handleLogout}
              >
                Tizimdan chiqish
              </Button>
            </CardFooter>
          </Card>
        </div>

        <div className="md:w-2/3">
          <Tabs defaultValue="progress" value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="progress">O&apos;quv jarayoni</TabsTrigger>
              <TabsTrigger value="achievements">Yutuqlar</TabsTrigger>
              <TabsTrigger value="analytics">Tahlillar</TabsTrigger>
            </TabsList>

            <TabsContent value="progress" className="mt-6">
              <Card className="border-blue-100 hover:shadow-md hover:shadow-blue-100/50 transition-all">
                <CardHeader className="bg-gradient-to-r from-blue-50 to-blue-100">
                  <CardTitle className="flex items-center gap-2 text-blue-700">
                    <BookOpen className="h-5 w-5" />
                    <span>O&apos;quv jarayoni</span>
                  </CardTitle>
                  <CardDescription>Mavzular bo&apos;yicha o&apos;zlashtirilgan bilimlar</CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="space-y-6">
                    {topics.map((topic) => (
                      <div key={topic.id} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <div className="flex items-center gap-2">
                            <span className="font-medium text-blue-700">{topic.name}</span>
                            <Badge variant="outline" className="text-xs bg-blue-50 border-blue-200">
                              {topic.lastActivity}
                            </Badge>
                          </div>
                          <span className="text-muted-foreground">
                            {topic.completed}/{topic.total}
                          </span>
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
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">Davom ettirish</Button>
                </CardFooter>
              </Card>

              <Card className="mt-6 border-purple-100 hover:shadow-md hover:shadow-purple-100/50 transition-all">
                <CardHeader className="bg-gradient-to-r from-purple-50 to-purple-100">
                  <CardTitle className="flex items-center gap-2 text-purple-700">
                    <BookMarked className="h-5 w-5" />
                    <span>Oxirgi faollik</span>
                  </CardTitle>
                  <CardDescription>O&apos;quv jarayonidagi oxirgi faoliyatingiz</CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    {activityData.map((day, index) => (
                      <div key={index} className="space-y-3">
                        <h3 className="font-medium text-purple-700">{day.date}</h3>
                        {day.activities.map((activity, actIndex) => (
                          <div key={actIndex} className="flex items-start gap-3 pl-2 border-l-2 border-purple-200 py-1">
                            <div className="text-sm text-muted-foreground min-w-[50px]">{activity.time}</div>
                            <div>
                              <p className="text-sm font-medium">{activity.action}</p>
                              <div className="flex items-center gap-2 mt-1">
                                <Badge variant="outline" className="text-xs bg-purple-50 border-purple-200">
                                  {activity.topic}
                                </Badge>
                                {activity.result && (
                                  <Badge
                                    variant="outline"
                                    className="text-xs bg-green-50 border-green-200 text-green-700"
                                  >
                                    {activity.result}
                                  </Badge>
                                )}
                                {activity.completed && (
                                  <Badge variant="outline" className="text-xs bg-blue-50 border-blue-200 text-blue-700">
                                    {activity.completed} ta mashq
                                  </Badge>
                                )}
                                {activity.achievement && (
                                  <Badge
                                    variant="outline"
                                    className="text-xs bg-amber-50 border-amber-200 text-amber-700"
                                  >
                                    {activity.achievement}
                                  </Badge>
                                )}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="achievements" className="mt-6">
              <Card className="border-teal-100 hover:shadow-md hover:shadow-teal-100/50 transition-all">
                <CardHeader className="bg-gradient-to-r from-teal-50 to-teal-100">
                  <CardTitle className="flex items-center gap-2 text-teal-700">
                    <Award className="h-5 w-5" />
                    <span>Yutuqlar</span>
                  </CardTitle>
                  <CardDescription>Erishilgan va erishish mumkin bo&apos;lgan yutuqlar</CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="space-y-6">
                    {achievements.map((achievement) => (
                      <div
                        key={achievement.id}
                        className="p-4 border border-teal-100 rounded-md hover:bg-teal-50/50 transition-all"
                      >
                        <div className="flex items-start gap-4">
                          <div
                            className={`w-10 h-10 rounded-full flex items-center justify-center ${achievement.completed ? "bg-teal-100" : "bg-muted"}`}
                          >
                            {achievement.completed ? (
                              <CheckCircle className="h-5 w-5 text-teal-700" />
                            ) : (
                              <Award className="h-5 w-5 text-muted-foreground" />
                            )}
                          </div>
                          <div className="flex-1">
                            <div className="flex justify-between">
                              <h3 className="font-medium text-teal-700">{achievement.name}</h3>
                              <span className="text-sm text-muted-foreground">{achievement.progress}%</span>
                            </div>
                            <p className="text-sm text-muted-foreground mt-1">{achievement.description}</p>
                            {achievement.completedDate && (
                              <p className="text-xs text-teal-600 mt-1">
                                Qo'lga kiritilgan sana: {achievement.completedDate}
                              </p>
                            )}
                            <Progress
                              value={achievement.progress}
                              className="h-1.5 mt-2"
                              indicatorClassName={achievement.completed ? "bg-teal-500" : ""}
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="analytics" className="mt-6">
              <Card className="border-amber-100 hover:shadow-md hover:shadow-amber-100/50 transition-all">
                <CardHeader className="bg-gradient-to-r from-amber-50 to-amber-100">
                  <CardTitle className="flex items-center gap-2 text-amber-700">
                    <BarChart3 className="h-5 w-5" />
                    <span>Tahlillar</span>
                  </CardTitle>
                  <CardDescription>O&apos;quv jarayoni tahlillari va natijalar</CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-medium mb-4 text-amber-700">Test natijalari</h3>
                      <div className="space-y-4">
                        {testResults.map((test) => (
                          <div key={test.id} className="p-4 border border-amber-100 rounded-md">
                            <div className="flex justify-between items-center mb-2">
                              <h4 className="font-medium">{test.topic}</h4>
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
                            <div className="grid grid-cols-2 gap-2 text-sm">
                              <div className="flex items-center gap-2">
                                <Calendar className="h-4 w-4 text-muted-foreground" />
                                <span>{test.date}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <Clock className="h-4 w-4 text-muted-foreground" />
                                <span>{test.timeSpent}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <CheckCircle className="h-4 w-4 text-muted-foreground" />
                                <span>
                                  {test.correctAnswers} / {test.totalQuestions} to'g'ri
                                </span>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <Separator className="my-6" />

                    <div>
                      <h3 className="text-lg font-medium mb-4 text-amber-700">O'quv jarayoni tahlili</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="p-4 border border-amber-100 rounded-md">
                          <h4 className="font-medium mb-2 flex items-center gap-2">
                            <GraduationCap className="h-4 w-4 text-amber-700" />
                            <span>Eng yaxshi mavzu</span>
                          </h4>
                          <p className="text-lg font-semibold text-amber-700">Natural sonlar</p>
                          <p className="text-sm text-muted-foreground">85% o'zlashtirilgan</p>
                        </div>

                        <div className="p-4 border border-amber-100 rounded-md">
                          <h4 className="font-medium mb-2 flex items-center gap-2">
                            <BookOpen className="h-4 w-4 text-amber-700" />
                            <span>Ko'proq e'tibor talab qiladigan mavzu</span>
                          </h4>
                          <p className="text-lg font-semibold text-amber-700">Matematik mantiq</p>
                          <p className="text-sm text-muted-foreground">10% o'zlashtirilgan</p>
                        </div>

                        <div className="p-4 border border-amber-100 rounded-md">
                          <h4 className="font-medium mb-2 flex items-center gap-2">
                            <Clock className="h-4 w-4 text-amber-700" />
                            <span>O'rtacha kunlik o'qish vaqti</span>
                          </h4>
                          <p className="text-lg font-semibold text-amber-700">45 daqiqa</p>
                          <p className="text-sm text-muted-foreground">Oxirgi 7 kun davomida</p>
                        </div>

                        <div className="p-4 border border-amber-100 rounded-md">
                          <h4 className="font-medium mb-2 flex items-center gap-2">
                            <Trophy className="h-4 w-4 text-amber-700" />
                            <span>Umumiy progress</span>
                          </h4>
                          <p className="text-lg font-semibold text-amber-700">{calculateOverallProgress()}%</p>
                          <p className="text-sm text-muted-foreground">Barcha mavzular bo'yicha</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-amber-600 hover:bg-amber-700">To'liq tahlilni ko'rish</Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
