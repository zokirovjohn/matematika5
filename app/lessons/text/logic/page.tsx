"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, ArrowRight, CheckCircle2, Info } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Progress } from "@/components/ui/progress"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function LogicLessonPage() {
  const [showAnswer, setShowAnswer] = useState(false)
  const [progress, setProgress] = useState(0)
  const [answers, setAnswers] = useState<{ [key: string]: string }>({})
  const [checked, setChecked] = useState<{ [key: string]: boolean }>({})

  // Simulate progress update when user interacts with the page
  const updateProgress = () => {
    setProgress(Math.min(100, progress + 5))
  }

  const handleAnswerChange = (id: string, value: string) => {
    setAnswers({ ...answers, [id]: value })
    setChecked({ ...checked, [id]: false })
  }

  const checkAnswer = (id: string, correctAnswer: string) => {
    setChecked({ ...checked, [id]: true })
    updateProgress()
  }

  const isCorrect = (id: string, correctAnswer: string) => {
    return answers[id]?.toLowerCase() === correctAnswer.toLowerCase()
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6 flex justify-between items-center">
        <Link href="/lessons/text" className="text-primary hover:underline flex items-center gap-1">
          <ArrowLeft className="h-4 w-4" />
          <span>Matnli darsliklarga qaytish</span>
        </Link>

        <div className="flex items-center gap-2">
          <span className="text-sm text-muted-foreground">Mavzu bo&apos;yicha progress:</span>
          <Progress value={progress} className="w-[100px]" />
        </div>
      </div>

      <h1 className="text-3xl font-bold mb-6 text-blue-700">Matematik mantiq</h1>

      <Alert className="mb-6 border-blue-200 bg-blue-50">
        <Info className="h-4 w-4 text-blue-600" />
        <AlertTitle className="text-blue-700">Muhim ma&apos;lumot</AlertTitle>
        <AlertDescription>
          Matematik mantiq - bu mantiqiy fikrlash va masalalarni yechish ko&apos;nikmalarini rivojlantiruvchi
          matematikaning bo&apos;limi.
        </AlertDescription>
      </Alert>

      <Tabs defaultValue="theory" className="w-full" onValueChange={() => updateProgress()}>
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="theory">Nazariya</TabsTrigger>
          <TabsTrigger value="problems">Mantiqiy masalalar</TabsTrigger>
          <TabsTrigger value="games">Matematik o&apos;yinlar</TabsTrigger>
          <TabsTrigger value="additional">Qo&apos;shimcha</TabsTrigger>
        </TabsList>

        <TabsContent value="theory" className="mt-6">
          <Card className="border-blue-100">
            <CardHeader className="bg-gradient-to-r from-blue-50 to-purple-50">
              <CardTitle className="text-blue-700">Matematik mantiq haqida</CardTitle>
              <CardDescription>Asosiy tushunchalar va qoidalar</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 pt-6">
              <div>
                <h3 className="text-lg font-semibold mb-2 text-blue-700">Matematik mantiq nima?</h3>
                <p className="mb-2">
                  Matematik mantiq - bu mantiqiy fikrlash va masalalarni yechish ko&apos;nikmalarini rivojlantiruvchi
                  matematikaning bo&apos;limi. U mantiqiy mulohazalar, isbotlash usullari va masalalarni yechish
                  strategiyalarini o&apos;rganadi.
                </p>
                <p>
                  Matematik mantiq kundalik hayotda ham, matematikada ham muhim ahamiyatga ega. U bizga
                  to&apos;g&apos;ri qarorlar qabul qilish, muammolarni hal qilish va mantiqiy xulosalar chiqarishda
                  yordam beradi.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2 text-blue-700">Mantiqiy mulohazalar</h3>
                <p className="mb-2">
                  Mantiqiy mulohaza - bu ma&apos;lum qoidalar asosida bir fikrdan boshqa fikrga o&apos;tish jarayoni.
                  Mantiqiy mulohazalar to&apos;g&apos;ri yoki noto&apos;g&apos;ri bo&apos;lishi mumkin.
                </p>
                <div className="p-4 bg-blue-50 rounded-md border border-blue-100">
                  <p className="font-medium text-blue-700">Misol:</p>
                  <ul className="list-disc pl-6 mt-2">
                    <li>Barcha odamlar tirik mavjudotlardir.</li>
                    <li>Ali odam.</li>
                    <li>Demak, Ali tirik mavjudot.</li>
                  </ul>
                  <p className="mt-2">Bu to&apos;g&apos;ri mantiqiy mulohaza.</p>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2 text-blue-700">Mantiqiy masalalar turlari</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong className="text-blue-700">Mantiqiy savollar</strong> - mantiqiy fikrlashni talab qiluvchi
                    savollar.
                  </li>
                  <li>
                    <strong className="text-blue-700">Rebuslar</strong> - harflar, raqamlar va belgilar yordamida
                    ifodalangan topishmoqlar.
                  </li>
                  <li>
                    <strong className="text-blue-700">Krossvordlar</strong> - so&apos;zlarni topish o&apos;yini.
                  </li>
                  <li>
                    <strong className="text-blue-700">Sudoku</strong> - 9×9 katakchali jadvalga 1 dan 9 gacha raqamlarni
                    joylashtirish o&apos;yini.
                  </li>
                  <li>
                    <strong className="text-blue-700">Matematik boshqotirmalar</strong> - matematik bilimlarni
                    qo&apos;llashni talab qiluvchi masalalar.
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="problems" className="mt-6">
          <Card className="border-purple-100">
            <CardHeader className="bg-gradient-to-r from-purple-50 to-blue-50">
              <CardTitle className="text-purple-700">Mantiqiy masalalar</CardTitle>
              <CardDescription>Mantiqiy fikrlashni rivojlantiruvchi masalalar</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6 pt-6">
              <div>
                <h3 className="text-lg font-semibold mb-4 text-purple-700">Masala 1</h3>
                <div className="p-4 border border-purple-100 rounded-md">
                  <p className="mb-4">
                    Ali, Vali va Soli do&apos;stlar. Ularning biri shifokor, biri o&apos;qituvchi, biri muhandis.
                    Quyidagi ma&apos;lumotlar berilgan:
                  </p>
                  <ul className="list-disc pl-6 mb-4">
                    <li>Shifokor Alining ismida &quot;l&quot; harfi bor.</li>
                    <li>Vali muhandis emas.</li>
                    <li>Soli shifokor emas.</li>
                  </ul>
                  <p className="font-medium mb-2 text-purple-700">Har bir do&apos;stning kasbini aniqlang.</p>

                  <div className="space-y-4 mt-4">
                    <div className="space-y-2">
                      <Label htmlFor="problem1-1" className="text-purple-700">
                        Ali kim?
                      </Label>
                      <Input
                        id="problem1-1"
                        value={answers["problem1-1"] || ""}
                        onChange={(e) => handleAnswerChange("problem1-1", e.target.value)}
                        placeholder="Javobni kiriting"
                        className="border-purple-200 focus-visible:ring-purple-500"
                      />
                      {checked["problem1-1"] && (
                        <div className="flex items-center gap-2 mt-1">
                          {isCorrect("problem1-1", "shifokor") ? (
                            <>
                              <CheckCircle2 className="h-4 w-4 text-green-500" />
                              <span className="text-green-500 text-sm">To&apos;g&apos;ri!</span>
                            </>
                          ) : (
                            <>
                              <CheckCircle2 className="h-4 w-4 text-red-500" />
                              <span className="text-red-500 text-sm">
                                Noto&apos;g&apos;ri. To&apos;g&apos;ri javob: shifokor
                              </span>
                            </>
                          )}
                        </div>
                      )}
                    </div>

                    <Button
                      onClick={() => checkAnswer("problem1-1", "shifokor")}
                      disabled={!answers["problem1-1"] || checked["problem1-1"]}
                      className="bg-purple-600 hover:bg-purple-700"
                    >
                      Tekshirish
                    </Button>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4 text-purple-700">Masala 2</h3>
                <div className="p-4 border border-purple-100 rounded-md">
                  <p className="mb-4">
                    Bir qutida 10 ta qizil, 20 ta ko&apos;k va 30 ta yashil shar bor. Qutidan kamida nechta shar olish
                    kerak, shunda olingan sharlar orasida albatta 15 ta bir xil rangli shar bo&apos;lsin?
                  </p>

                  <div className="space-y-4 mt-4">
                    <div className="space-y-2">
                      <Label htmlFor="problem2" className="text-purple-700">
                        Javob:
                      </Label>
                      <Input
                        id="problem2"
                        value={answers["problem2"] || ""}
                        onChange={(e) => handleAnswerChange("problem2", e.target.value)}
                        placeholder="Javobni kiriting"
                        className="border-purple-200 focus-visible:ring-purple-500"
                      />
                      {checked["problem2"] && (
                        <div className="flex items-center gap-2 mt-1">
                          {isCorrect("problem2", "31") ? (
                            <>
                              <CheckCircle2 className="h-4 w-4 text-green-500" />
                              <span className="text-green-500 text-sm">To&apos;g&apos;ri!</span>
                            </>
                          ) : (
                            <>
                              <CheckCircle2 className="h-4 w-4 text-red-500" />
                              <span className="text-red-500 text-sm">
                                Noto&apos;g&apos;ri. To&apos;g&apos;ri javob: 31
                              </span>
                            </>
                          )}
                        </div>
                      )}
                    </div>

                    <Button
                      onClick={() => checkAnswer("problem2", "31")}
                      disabled={!answers["problem2"] || checked["problem2"]}
                      className="bg-purple-600 hover:bg-purple-700"
                    >
                      Tekshirish
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Link href="/lessons/video/logic">
                <Button variant="outline" className="border-purple-200 text-purple-700">
                  Video darslikni ko&apos;rish
                </Button>
              </Link>
              <Link href="/tests/logic">
                <Button className="bg-purple-600 hover:bg-purple-700">Testlarni boshlash</Button>
              </Link>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="games" className="mt-6">
          <Card className="border-teal-100">
            <CardHeader className="bg-gradient-to-r from-teal-50 to-blue-50">
              <CardTitle className="text-teal-700">Matematik o&apos;yinlar</CardTitle>
              <CardDescription>Matematik mantiqni rivojlantiruvchi o&apos;yinlar</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6 pt-6">
              <div>
                <h3 className="text-lg font-semibold mb-4 text-teal-700">Sudoku</h3>
                <div className="p-4 border border-teal-100 rounded-md">
                  <p className="mb-4">
                    Sudoku - 9×9 katakchali jadvalga 1 dan 9 gacha raqamlarni shunday joylashtirish kerakki, har bir
                    qatorda, har bir ustunda va har bir 3×3 katakchali kvadratda 1 dan 9 gacha raqamlar faqat bir marta
                    ishtirok etishi kerak.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <p className="mb-2">Sudoku o'yinining qoidalari:</p>
                      <ul className="list-disc pl-6 space-y-1">
                        <li>Har bir qatorda 1 dan 9 gacha raqamlar faqat bir marta ishtirok etishi kerak</li>
                        <li>Har bir ustunda 1 dan 9 gacha raqamlar faqat bir marta ishtirok etishi kerak</li>
                        <li>
                          Har bir 3×3 katakchali kvadratda 1 dan 9 gacha raqamlar faqat bir marta ishtirok etishi kerak
                        </li>
                      </ul>
                    </div>
                    <div className="flex justify-center">
                      <img
                        src="/placeholder.svg?height=200&width=200&text=Sudoku"
                        alt="Sudoku misoli"
                        className="border border-teal-200 rounded-md"
                      />
                    </div>
                  </div>
                  <div className="mt-4">
                    <Link href="https://sudoku.com/" target="_blank">
                      <Button variant="outline" className="border-teal-200 text-teal-700">
                        Sudoku o'yinini o'ynash
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4 text-teal-700">Mantiqiy boshqotirmalar</h3>
                <div className="p-4 border border-teal-100 rounded-md">
                  <p className="mb-4">
                    Mantiqiy boshqotirmalar - bu mantiqiy fikrlashni rivojlantiruvchi masalalar. Ular turli xil bo'lishi
                    mumkin.
                  </p>
                  <div className="p-4 bg-teal-50 rounded-md border border-teal-100 mb-4">
                    <p className="font-medium text-teal-700 mb-2">Masala:</p>
                    <p className="mb-2">
                      Uchta quti bor: birinchisida olma, ikkinchisida nok, uchinchisida olma va nok aralash. Har bir
                      qutining ustida yozuv bor, lekin barcha yozuvlar noto'g'ri. Yozuvlar: "Olma", "Nok", "Aralash".
                    </p>
                    <p className="mb-2">
                      Faqat bitta qutini ochib, undagi mevani ko'rish orqali qaysi qutida nima borligini aniqlash
                      mumkinmi?
                    </p>
                    <Button onClick={() => updateProgress()} className="bg-teal-600 hover:bg-teal-700 mt-2">
                      Javobni ko'rish
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="additional" className="mt-6">
          <Card className="border-amber-100">
            <CardHeader className="bg-gradient-to-r from-amber-50 to-orange-50">
              <CardTitle className="text-amber-700">Qo'shimcha ma'lumotlar</CardTitle>
              <CardDescription>Qiziqarli faktlar va qo'shimcha materiallar</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6 pt-6">
              <div>
                <h3 className="text-lg font-semibold mb-2 text-amber-700">Qiziqarli faktlar</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong className="text-amber-700">Mantiqiy paradokslar</strong> - bu mantiqiy ziddiyatli
                    vaziyatlar. Masalan, "Yolg'onchi paradoksi": "Men hozir yolg'on gapiryapman" degan gap to'g'rimi
                    yoki yolg'onmi?
                  </li>
                  <li>
                    <strong className="text-amber-700">Matematik mantiq tarixi</strong> - matematik mantiq fani 19-asrda
                    rivojlana boshlagan. George Boole, Gottlob Frege, Bertrand Russell kabi olimlar bu sohaga katta
                    hissa qo'shganlar.
                  </li>
                  <li>
                    <strong className="text-amber-700">Mantiqiy fikrlash va miya</strong> - mantiqiy masalalarni yechish
                    miyaning prefrontal qismini faollashtiradi, bu esa aqliy qobiliyatlarni rivojlantiradi.
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2 text-amber-700">Video materiallar</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Link
                    href="/lessons/video/logic"
                    className="p-4 border border-amber-100 rounded-md hover:bg-amber-50"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-amber-600"
                        >
                          <polygon points="5 3 19 12 5 21 5 3"></polygon>
                        </svg>
                      </div>
                      <span className="font-medium text-amber-700">Mantiqiy masalalar yechish usullari</span>
                    </div>
                    <p className="text-sm text-muted-foreground">Davomiyligi: 12:35</p>
                  </Link>

                  <Link
                    href="/lessons/video/logic"
                    className="p-4 border border-amber-100 rounded-md hover:bg-amber-50"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-amber-600"
                        >
                          <polygon points="5 3 19 12 5 21 5 3"></polygon>
                        </svg>
                      </div>
                      <span className="font-medium text-amber-700">Matematik o'yinlar</span>
                    </div>
                    <p className="text-sm text-muted-foreground">Davomiyligi: 14:50</p>
                  </Link>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2 text-amber-700">Foydali havolalar</h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>
                    <a href="#" className="text-blue-600 hover:underline" onClick={updateProgress}>
                      "Mantiqiy masalalar to'plami" - A. Rasulov
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-blue-600 hover:underline" onClick={updateProgress}>
                      "Qiziqarli matematik mantiq" - B. Karimov
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-blue-600 hover:underline" onClick={updateProgress}>
                      "Matematik o'yinlar va boshqotirmalar" - C. Azimov
                    </a>
                  </li>
                </ul>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" onClick={updateProgress} className="border-amber-200 text-amber-700">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Oldingi mavzu
              </Button>
              <Link href="/tests/logic">
                <Button className="bg-amber-600 hover:bg-amber-700">
                  Testlarni boshlash
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
