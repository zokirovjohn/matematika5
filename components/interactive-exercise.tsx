"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { CheckCircle2, XCircle } from "lucide-react"

interface Question {
  id: number
  question: string
  answer: string
  userAnswer?: string
  isChecked: boolean
}

interface InteractiveExerciseProps {
  title: string
  description?: string
  questions: Question[]
  onComplete?: () => void
}

export default function InteractiveExercise({
  title,
  description,
  questions: initialQuestions,
  onComplete,
}: InteractiveExerciseProps) {
  const [questions, setQuestions] = useState<Question[]>(initialQuestions)

  const handleAnswerChange = (id: number, value: string) => {
    setQuestions(questions.map((q) => (q.id === id ? { ...q, userAnswer: value, isChecked: false } : q)))
  }

  const checkAnswer = (id: number) => {
    setQuestions(questions.map((q) => (q.id === id ? { ...q, isChecked: true } : q)))

    // Check if all questions are answered correctly
    const updatedQuestions = questions.map((q) => (q.id === id ? { ...q, isChecked: true } : q))

    const allCorrect = updatedQuestions.every(
      (q) => q.isChecked && q.userAnswer?.trim().toLowerCase() === q.answer.toLowerCase(),
    )

    if (allCorrect && onComplete) {
      onComplete()
    }
  }

  const isCorrect = (question: Question) => {
    return question.isChecked && question.userAnswer?.trim().toLowerCase() === question.answer.toLowerCase()
  }

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-xl font-semibold">{title}</h3>
        {description && <p className="text-muted-foreground mt-1">{description}</p>}
      </div>

      <div className="space-y-6">
        {questions.map((question) => (
          <div key={question.id} className="p-4 border rounded-md">
            <p className="font-medium mb-3">{question.question}</p>
            <div className="flex gap-2">
              <Input
                value={question.userAnswer || ""}
                onChange={(e) => handleAnswerChange(question.id, e.target.value)}
                placeholder="Javobni kiriting"
                disabled={question.isChecked && isCorrect(question)}
              />
              <Button onClick={() => checkAnswer(question.id)} disabled={!question.userAnswer || question.isChecked}>
                Tekshirish
              </Button>
            </div>

            {question.isChecked && (
              <div className="mt-3 flex items-center gap-2">
                {isCorrect(question) ? (
                  <>
                    <CheckCircle2 className="h-5 w-5 text-green-500" />
                    <span className="text-green-500">To&apos;g&apos;ri!</span>
                  </>
                ) : (
                  <>
                    <XCircle className="h-5 w-5 text-red-500" />
                    <span className="text-red-500">
                      Noto&apos;g&apos;ri. To&apos;g&apos;ri javob: {question.answer}
                    </span>
                  </>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
