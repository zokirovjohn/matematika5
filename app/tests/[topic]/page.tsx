"use client"

import { useState, useEffect } from "react"
import { useParams, useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"
import { ArrowLeft, CheckCircle2, XCircle, Clock } from "lucide-react"

interface Question {
  id: number
  question: string
  options: string[]
  correctAnswer: string
  topic: string
  lessonLink: string
}

export default function TestPage() {
  const params = useParams()
  const router = useRouter()
  const topic = params.topic as string

  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswers, setSelectedAnswers] = useState<string[]>([])
  const [showResults, setShowResults] = useState(false)
  const [timeLeft, setTimeLeft] = useState(0)
  const [isLoading, setIsLoading] = useState(true)
  const [questions, setQuestions] = useState<Question[]>([])

  // Simulated questions data based on topic
  useEffect(() => {
    // In a real app, you would fetch questions from an API
    const fetchQuestions = () => {
      setIsLoading(true)

      // Simulated API response
      let topicQuestions: Question[] = []

      if (topic === "natural-numbers") {
        topicQuestions = [
          {
            id: 1,
            question: "Natural sonlar to'plamining eng kichik elementi qaysi?",
            options: ["0", "1", "2", "Eng kichik element yo'q"],
            correctAnswer: "1",
            topic: "natural-numbers",
            lessonLink: "/lessons/text/natural-numbers",
          },
          {
            id: 2,
            question: "Quyidagi sonlardan qaysi biri natural son emas?",
            options: ["5", "0", "12", "100"],
            correctAnswer: "0",
            topic: "natural-numbers",
            lessonLink: "/lessons/text/natural-numbers",
          },
          {
            id: 3,
            question: "56 × 4 = ?",
            options: ["224", "220", "204", "240"],
            correctAnswer: "224",
            topic: "natural-numbers",
            lessonLink: "/lessons/text/natural-numbers",
          },
          {
            id: 4,
            question: "144 ÷ 12 = ?",
            options: ["10", "12", "14", "16"],
            correctAnswer: "12",
            topic: "natural-numbers",
            lessonLink: "/lessons/text/natural-numbers",
          },
          {
            id: 5,
            question: "Natural sonlar to'plami qanday harf bilan belgilanadi?",
            options: ["Z", "N", "Q", "R"],
            correctAnswer: "N",
            topic: "natural-numbers",
            lessonLink: "/lessons/text/natural-numbers",
          },
        ]
      } else if (topic === "fractions") {
        topicQuestions = [
          {
            id: 1,
            question: "Kasrning qaysi qismi maxraj deyiladi?",
            options: ["Yuqoridagi son", "Pastdagi son", "Kasr chizig'i", "Butun qism"],
            correctAnswer: "Pastdagi son",
            topic: "fractions",
            lessonLink: "/lessons/text/fractions",
          },
          {
            id: 2,
            question: "2/5 + 1/5 = ?",
            options: ["1/5", "2/10", "3/5", "3/10"],
            correctAnswer: "3/5",
            topic: "fractions",
            lessonLink: "/lessons/text/fractions",
          },
          {
            id: 3,
            question: "Quyidagi kasrlardan qaysi biri eng katta?",
            options: ["3/4", "2/3", "5/8", "7/10"],
            correctAnswer: "3/4",
            topic: "fractions",
            lessonLink: "/lessons/text/fractions",
          },
          {
            id: 4,
            question: "0.75 kasri oddiy kasr ko'rinishida qanday yoziladi?",
            options: ["3/4", "7/5", "7/10", "3/5"],
            correctAnswer: "3/4",
            topic: "fractions",
            lessonLink: "/lessons/text/fractions",
          },
          {
            id: 5,
            question: "2/3 × 3/4 = ?",
            options: ["6/12", "1/2", "5/7", "6/7"],
            correctAnswer: "1/2",
            topic: "fractions",
            lessonLink: "/lessons/text/fractions",
          },
        ]
      } else if (topic === "geometry") {
        topicQuestions = [
          {
            id: 1,
            question: "To'g'ri to'rtburchakning perimetri qanday hisoblanadi?",
            options: ["P = a + b", "P = 2(a + b)", "P = ab", "P = 2a + 2b"],
            correctAnswer: "P = 2(a + b)",
            topic: "geometry",
            lessonLink: "/lessons/text/geometry",
          },
          {
            id: 2,
            question: "Doiraning yuzasi qanday hisoblanadi?",
            options: ["S = πr", "S = 2πr", "S = πr²", "S = πd"],
            correctAnswer: "S = πr²",
            topic: "geometry",
            lessonLink: "/lessons/text/geometry",
          },
          {
            id: 3,
            question: "Uchburchakning burchaklari yig'indisi necha gradus?",
            options: ["90°", "180°", "270°", "360°"],
            correctAnswer: "180°",
            topic: "geometry",
            lessonLink: "/lessons/text/geometry",
          },
          {
            id: 4,
            question: "Kvadratning barcha tomonlari teng va barcha burchaklari ...",
            options: ["30°", "45°", "60°", "90°"],
            correctAnswer: "90°",
            topic: "geometry",
            lessonLink: "/lessons/text/geometry",
          },
          {
            id: 5,
            question: "Quyidagi shakllardan qaysi biri ko'pburchak emas?",
            options: ["Uchburchak", "To'rtburchak", "Doira", "Beshburchak"],
            correctAnswer: "Doira",
            topic: "geometry",
            lessonLink: "/lessons/text/geometry",
          },
        ]
      } else {
        // Default questions for other topics
        topicQuestions = [
          {
            id: 1,
            question: "5-sinf matematika kursida o'rganiladigan asosiy mavzulardan biri?",
            options: ["Differensial tenglamalar", "Natural sonlar", "Logarifmlar", "Trigonometriya"],
            correctAnswer: "Natural sonlar",
            topic: "all",
            lessonLink: "/lessons/text/natural-numbers",
          },
          {
            id: 2,
            question: "Kasrning surati nima?",
            options: ["Pastdagi son", "Yuqoridagi son", "Kasr chizig'i", "Butun qism"],
            correctAnswer: "Yuqoridagi son",
            topic: "fractions",
            lessonLink: "/lessons/text/fractions",
          },
          {
            id: 3,
            question: "Uchburchakning yuzasi qanday hisoblanadi?",
            options: ["S = a × b", "S = (a × h) / 2", "S = a²", "S = πr²"],
            correctAnswer: "S = (a × h) / 2",
            topic: "geometry",
            lessonLink: "/lessons/text/geometry",
          },
          {
            id: 4,
            question: "1 km necha metrga teng?",
            options: ["10 m", "100 m", "1000 m", "10000 m"],
            correctAnswer: "1000 m",
            topic: "measurements",
            lessonLink: "/lessons/text/measurements",
          },
          {
            id: 5,
            question: "Quyidagi sonlardan qaysi biri tub son?",
            options: ["1", "4", "9", "11"],
            correctAnswer: "11",
            topic: "natural-numbers",
            lessonLink: "/lessons/text/natural-numbers",
          },
        ]
      }

      setQuestions(topicQuestions)
      setSelectedAnswers(Array(topicQuestions.length).fill(""))
      setTimeLeft(topicQuestions.length * 60) // 1 minute per question
      setIsLoading(false)
    }

    fetchQuestions()
  }, [topic])

  // Timer
  useEffect(() => {
    if (isLoading || showResults || timeLeft <= 0) return

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer)
          setShowResults(true)
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [isLoading, showResults, timeLeft])

  const handleAnswerSelect = (answer: string) => {
    const newAnswers = [...selectedAnswers]
    newAnswers[currentQuestion] = answer
    setSelectedAnswers(newAnswers)
  }

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      setShowResults(true)
    }
  }

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
    }
  }

  const calculateScore = () => {
    let score = 0
    questions.forEach((question, index) => {
      if (selectedAnswers[index] === question.correctAnswer) {
        score++
      }
    })
    return score
  }

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60)
    const remainingSeconds = seconds % 60
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`
  }

  const resetTest = () => {
    setCurrentQuestion(0)
    setSelectedAnswers(Array(questions.length).fill(""))
    setShowResults(false)
    setTimeLeft(questions.length * 60)
  }

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-8 flex items-center justify-center min-h-[60vh]">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-lg">Test yuklanmoqda...</p>
        </div>
      </div>
    )
  }

  const topicNames: { [key: string]: string } = {
    "natural-numbers": "Natural sonlar",
    fractions: "Kasrlar",
    geometry: "Geometrik shakllar",
    measurements: "O'lchov birliklari",
    logic: "Matematik mantiq",
    all: "Umumiy test",
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <Link href="/tests" className="text-primary hover:underline flex items-center gap-1">
          <ArrowLeft className="h-4 w-4" />
          <span>Testlar sahifasiga qaytish</span>
        </Link>
      </div>

      <h1 className="text-3xl font-bold mb-6">{topicNames[topic] || "Test"}</h1>

      {!showResults ? (
        <Card className="max-w-3xl mx-auto">
          <CardHeader>
            <div className="flex justify-between items-center">
              <div>
                <CardTitle>
                  Savol {currentQuestion + 1}/{questions.length}
                </CardTitle>
                <CardDescription>{topicNames[topic]} mavzusi bo&apos;yicha test</CardDescription>
              </div>
              <div className="flex items-center gap-2 bg-primary/10 px-3 py-1 rounded-md">
                <Clock className="h-4 w-4 text-primary" />
                <span className="font-medium">{formatTime(timeLeft)}</span>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <Progress value={((currentQuestion + 1) / questions.length) * 100} className="mb-4" />

              <h2 className="text-xl font-medium">{questions[currentQuestion]?.question}</h2>

              <RadioGroup value={selectedAnswers[currentQuestion]} onValueChange={handleAnswerSelect}>
                {questions[currentQuestion]?.options.map((option, index) => (
                  <div key={index} className="flex items-center space-x-2 py-2">
                    <RadioGroupItem value={option} id={`option-${index}`} />
                    <Label htmlFor={`option-${index}`}>{option}</Label>
                  </div>
                ))}
              </RadioGroup>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline" onClick={handlePrevious} disabled={currentQuestion === 0}>
              Oldingi savol
            </Button>
            <Button onClick={handleNext} disabled={!selectedAnswers[currentQuestion]}>
              {currentQuestion === questions.length - 1 ? "Natijalarni ko'rish" : "Keyingi savol"}
            </Button>
          </CardFooter>
        </Card>
      ) : (
        <Card className="max-w-3xl mx-auto">
          <CardHeader>
            <CardTitle>Test natijalari</CardTitle>
            <CardDescription>
              Siz {questions.length} ta savoldan {calculateScore()} tasiga to&apos;g&apos;ri javob berdingiz
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="mb-6">
              <div className="flex justify-between items-center mb-2">
                <span>Natija:</span>
                <span className="font-bold">{Math.round((calculateScore() / questions.length) * 100)}%</span>
              </div>
              <Progress value={(calculateScore() / questions.length) * 100} className="h-2" />
            </div>

            <div className="space-y-6">
              {questions.map((question, index) => (
                <div key={index} className="border-b pb-4 last:border-0">
                  <div className="flex items-start gap-2">
                    {selectedAnswers[index] === question.correctAnswer ? (
                      <CheckCircle2 className="h-5 w-5 text-green-500 mt-1 shrink-0" />
                    ) : (
                      <XCircle className="h-5 w-5 text-red-500 mt-1 shrink-0" />
                    )}
                    <div>
                      <h3 className="font-medium">
                        {index + 1}. {question.question}
                      </h3>
                      <p className="text-sm mt-1">
                        Sizning javobingiz:{" "}
                        <span
                          className={
                            selectedAnswers[index] === question.correctAnswer
                              ? "text-green-500 font-medium"
                              : "text-red-500 font-medium"
                          }
                        >
                          {selectedAnswers[index]}
                        </span>
                      </p>
                      {selectedAnswers[index] !== question.correctAnswer && (
                        <p className="text-sm mt-1">
                          To&apos;g&apos;ri javob:{" "}
                          <span className="text-green-500 font-medium">{question.correctAnswer}</span>
                        </p>
                      )}

                      {selectedAnswers[index] !== question.correctAnswer && (
                        <div className="mt-2">
                          <Link href={question.lessonLink} className="text-sm text-primary hover:underline">
                            Bu mavzuni o&apos;rganish uchun darslikka o&apos;ting
                          </Link>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline" onClick={resetTest}>
              Testni qayta boshlash
            </Button>
            <Link href="/tests">
              <Button>Boshqa testni tanlash</Button>
            </Link>
          </CardFooter>
        </Card>
      )}
    </div>
  )
}
