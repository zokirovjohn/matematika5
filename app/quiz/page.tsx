"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { ArrowLeft, CheckCircle2, XCircle } from "lucide-react"

export default function QuizPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswers, setSelectedAnswers] = useState<string[]>(Array(5).fill(""))
  const [showResults, setShowResults] = useState(false)

  const questions = [
    {
      question: "Natural sonlar to'plamining eng kichik elementi qaysi?",
      options: ["0", "1", "2", "Eng kichik element yo'q"],
      correctAnswer: "1",
    },
    {
      question: "Quyidagi sonlardan qaysi biri natural son emas?",
      options: ["5", "0", "12", "100"],
      correctAnswer: "0",
    },
    {
      question: "56 × 4 = ?",
      options: ["224", "220", "204", "240"],
      correctAnswer: "224",
    },
    {
      question: "144 ÷ 12 = ?",
      options: ["10", "12", "14", "16"],
      correctAnswer: "12",
    },
    {
      question: "Natural sonlar to'plami qanday harf bilan belgilanadi?",
      options: ["Z", "N", "Q", "R"],
      correctAnswer: "N",
    },
  ]

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

  const resetQuiz = () => {
    setCurrentQuestion(0)
    setSelectedAnswers(Array(5).fill(""))
    setShowResults(false)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <Link href="/" className="text-primary hover:underline flex items-center gap-1">
          <ArrowLeft className="h-4 w-4" />
          <span>Bosh sahifaga qaytish</span>
        </Link>
      </div>

      <h1 className="text-3xl font-bold mb-6">Matematika testi</h1>

      {!showResults ? (
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle>
              Savol {currentQuestion + 1}/{questions.length}
            </CardTitle>
            <CardDescription>Natural sonlar mavzusi bo&apos;yicha test</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <h2 className="text-xl font-medium">{questions[currentQuestion].question}</h2>

              <RadioGroup value={selectedAnswers[currentQuestion]} onValueChange={handleAnswerSelect}>
                {questions[currentQuestion].options.map((option, index) => (
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
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle>Test natijalari</CardTitle>
            <CardDescription>
              Siz {questions.length} ta savoldan {calculateScore()} tasiga to&apos;g&apos;ri javob berdingiz
            </CardDescription>
          </CardHeader>
          <CardContent>
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
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline" onClick={resetQuiz}>
              Testni qayta boshlash
            </Button>
            <Link href="/">
              <Button>Bosh sahifaga qaytish</Button>
            </Link>
          </CardFooter>
        </Card>
      )}
    </div>
  )
}
