"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, CheckCircle2, XCircle } from "lucide-react"

export default function PracticePage() {
  const [answers, setAnswers] = useState({
    addition: ["", "", "", ""],
    subtraction: ["", "", "", ""],
    multiplication: ["", "", "", ""],
    division: ["", "", "", ""],
  })

  const [checked, setChecked] = useState({
    addition: [false, false, false, false],
    subtraction: [false, false, false, false],
    multiplication: [false, false, false, false],
    division: [false, false, false, false],
  })

  const problems = {
    addition: [
      { problem: "25 + 18 = ?", answer: "43" },
      { problem: "136 + 47 = ?", answer: "183" },
      { problem: "245 + 128 = ?", answer: "373" },
      { problem: "509 + 216 = ?", answer: "725" },
    ],
    subtraction: [
      { problem: "45 - 27 = ?", answer: "18" },
      { problem: "100 - 64 = ?", answer: "36" },
      { problem: "325 - 148 = ?", answer: "177" },
      { problem: "500 - 275 = ?", answer: "225" },
    ],
    multiplication: [
      { problem: "7 × 8 = ?", answer: "56" },
      { problem: "12 × 6 = ?", answer: "72" },
      { problem: "15 × 9 = ?", answer: "135" },
      { problem: "24 × 5 = ?", answer: "120" },
    ],
    division: [
      { problem: "56 ÷ 8 = ?", answer: "7" },
      { problem: "81 ÷ 9 = ?", answer: "9" },
      { problem: "72 ÷ 6 = ?", answer: "12" },
      { problem: "144 ÷ 12 = ?", answer: "12" },
    ],
  }

  const handleAnswerChange = (category, index, value) => {
    setAnswers({
      ...answers,
      [category]: answers[category].map((ans, i) => (i === index ? value : ans)),
    })

    // Reset checked status when answer changes
    setChecked({
      ...checked,
      [category]: checked[category].map((check, i) => (i === index ? false : check)),
    })
  }

  const checkAnswer = (category, index) => {
    const newChecked = { ...checked }
    newChecked[category][index] = true
    setChecked(newChecked)
  }

  const isCorrect = (category, index) => {
    return answers[category][index] === problems[category][index].answer
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <Link href="/" className="text-primary hover:underline flex items-center gap-1">
          <ArrowLeft className="h-4 w-4" />
          <span>Bosh sahifaga qaytish</span>
        </Link>
      </div>

      <h1 className="text-3xl font-bold mb-6">Mashqlar</h1>

      <Tabs defaultValue="addition" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="addition">Qo&apos;shish</TabsTrigger>
          <TabsTrigger value="subtraction">Ayirish</TabsTrigger>
          <TabsTrigger value="multiplication">Ko&apos;paytirish</TabsTrigger>
          <TabsTrigger value="division">Bo&apos;lish</TabsTrigger>
        </TabsList>

        {Object.keys(problems).map((category) => (
          <TabsContent key={category} value={category} className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>
                  {category === "addition"
                    ? "Qo'shish"
                    : category === "subtraction"
                      ? "Ayirish"
                      : category === "multiplication"
                        ? "Ko'paytirish"
                        : "Bo'lish"}{" "}
                  amallari
                </CardTitle>
                <CardDescription>Quyidagi misollarni yeching va javoblarni tekshiring</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-6">
                  {problems[category].map((problem, index) => (
                    <div key={index} className="grid gap-2">
                      <Label htmlFor={`${category}-${index}`}>{problem.problem}</Label>
                      <div className="flex gap-2">
                        <Input
                          id={`${category}-${index}`}
                          value={answers[category][index]}
                          onChange={(e) => handleAnswerChange(category, index, e.target.value)}
                          className="max-w-[120px]"
                        />
                        <Button
                          onClick={() => checkAnswer(category, index)}
                          disabled={!answers[category][index] || checked[category][index]}
                        >
                          Tekshirish
                        </Button>

                        {checked[category][index] && (
                          <div className="flex items-center gap-2 ml-2">
                            {isCorrect(category, index) ? (
                              <>
                                <CheckCircle2 className="h-5 w-5 text-green-500" />
                                <span className="text-green-500">To&apos;g&apos;ri!</span>
                              </>
                            ) : (
                              <>
                                <XCircle className="h-5 w-5 text-red-500" />
                                <span className="text-red-500">
                                  Noto&apos;g&apos;ri. To&apos;g&apos;ri javob: {problem.answer}
                                </span>
                              </>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button
                  onClick={() => {
                    setAnswers({
                      ...answers,
                      [category]: ["", "", "", ""],
                    })
                    setChecked({
                      ...checked,
                      [category]: [false, false, false, false],
                    })
                  }}
                  variant="outline"
                >
                  Tozalash
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}
