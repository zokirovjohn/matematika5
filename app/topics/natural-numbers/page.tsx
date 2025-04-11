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

export default function NaturalNumbersPage() {
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
        <Link href="/" className="text-primary hover:underline flex items-center gap-1">
          <ArrowLeft className="h-4 w-4" />
          <span>Bosh sahifaga qaytish</span>
        </Link>

        <div className="flex items-center gap-2">
          <span className="text-sm text-muted-foreground">Mavzu bo&apos;yicha progress:</span>
          <Progress value={progress} className="w-[100px]" />
        </div>
      </div>

      <h1 className="text-3xl font-bold mb-6 text-blue-700">Natural sonlar</h1>

      <Alert className="mb-6 border-blue-200 bg-blue-50">
        <Info className="h-4 w-4 text-blue-600" />
        <AlertTitle className="text-blue-700">Eslatma</AlertTitle>
        <AlertDescription>
          Natural sonlar matematikaning asosiy tushunchalaridan biri bo&apos;lib, ular yordamida sanash, hisoblash va
          o&apos;lchash mumkin.
        </AlertDescription>
      </Alert>

      <Tabs defaultValue="theory" className="w-full" onValueChange={() => updateProgress()}>
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="theory">Nazariya</TabsTrigger>
          <TabsTrigger value="examples">Misollar</TabsTrigger>
          <TabsTrigger value="practice">Mashqlar</TabsTrigger>
          <TabsTrigger value="additional">Qo&apos;shimcha</TabsTrigger>
        </TabsList>

        <TabsContent value="theory" className="mt-6">
          <Card className="border-blue-100">
            <CardHeader className="bg-gradient-to-r from-blue-50 to-blue-100">
              <CardTitle className="text-blue-700">Natural sonlar haqida</CardTitle>
              <CardDescription>Natural sonlar va ularning xususiyatlari</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 pt-6">
              <div>
                <h3 className="text-lg font-semibold mb-2 text-blue-700">Natural sonlar nima?</h3>
                <p className="mb-2">
                  Natural sonlar - bu 1, 2, 3, 4, 5, ... kabi butun musbat sonlardir. Ular sanash uchun ishlatiladi.
                  Natural sonlar to&apos;plami odatda N harfi bilan belgilanadi.
                </p>
                <div className="p-4 bg-blue-50 rounded-md mt-2 border border-blue-100">
                  <p className="font-medium text-blue-700">
                    Natural sonlar to&apos;plami: N = {"{1, 2, 3, 4, 5, ...}"}
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2 text-blue-700">Natural sonlar ustida amallar</h3>
                <p>Natural sonlar ustida quyidagi amallarni bajarish mumkin:</p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Qo&apos;shish: a + b</li>
                  <li>Ayirish: a - b (agar a &gt; b bo&apos;lsa)</li>
                  <li>Ko&apos;paytirish: a × b</li>
                  <li>Bo&apos;lish: a ÷ b (agar a b ga qoldiqsiz bo&apos;linsa)</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2 text-blue-700">Natural sonlarning xususiyatlari</h3>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Har qanday natural sondan keyin keluvchi son mavjud</li>
                  <li>Natural sonlar to&apos;plami cheksiz</li>
                  <li>Eng kichik natural son 1 dir</li>
                  <li>
                    Qo&apos;shish va ko&apos;paytirish amallari o&apos;rin almashtirish xususiyatiga ega: a + b = b + a
                    va a × b = b × a
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2 text-blue-700">Tub va murakkab sonlar</h3>
                <p className="mb-2">
                  <strong className="text-blue-700">Tub son</strong> - faqat 1 ga va o&apos;ziga bo&apos;linadigan
                  natural son (masalan, 2, 3, 5, 7, 11, ...).
                </p>
                <p className="mb-2">
                  <strong className="text-blue-700">Murakkab son</strong> - 1 dan va o&apos;zidan tashqari boshqa
                  bo&apos;luvchilarga ega bo&apos;lgan natural son (masalan, 4, 6, 8, 9, 10, ...).
                </p>
                <div className="p-4 bg-blue-50 rounded-md mt-2 border border-blue-100">
                  <p className="font-medium text-blue-700">Eslatma: 1 soni na tub, na murakkab son hisoblanadi.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="examples" className="mt-6">
          <Card className="border-purple-100">
            <CardHeader className="bg-gradient-to-r from-purple-50 to-purple-100">
              <CardTitle className="text-purple-700">Natural sonlar ustida amallar</CardTitle>
              <CardDescription>Misollar va yechimlar</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6 pt-6">
              <div>
                <h3 className="text-lg font-semibold mb-2 text-purple-700">Qo&apos;shish</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 border border-purple-100 rounded-md">
                    <p className="font-medium text-purple-700">Misol: 24 + 18 = ?</p>
                    <p className="mt-2">Yechim: 24 + 18 = 42</p>
                  </div>
                  <div className="p-4 border border-purple-100 rounded-md">
                    <p className="font-medium text-purple-700">Misol: 135 + 246 = ?</p>
                    <p className="mt-2">Yechim: 135 + 246 = 381</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2 text-purple-700">Ayirish</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 border border-purple-100 rounded-md">
                    <p className="font-medium text-purple-700">Misol: 56 - 23 = ?</p>
                    <p className="mt-2">Yechim: 56 - 23 = 33</p>
                  </div>
                  <div className="p-4 border border-purple-100 rounded-md">
                    <p className="font-medium text-purple-700">Misol: 200 - 45 = ?</p>
                    <p className="mt-2">Yechim: 200 - 45 = 155</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2 text-purple-700">Ko&apos;paytirish</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 border border-purple-100 rounded-md">
                    <p className="font-medium text-purple-700">Misol: 12 × 5 = ?</p>
                    <p className="mt-2">Yechim: 12 × 5 = 60</p>
                  </div>
                  <div className="p-4 border border-purple-100 rounded-md">
                    <p className="font-medium text-purple-700">Misol: 24 × 11 = ?</p>
                    <p className="mt-2">Yechim: 24 × 11 = 264</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2 text-purple-700">Bo&apos;lish</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 border border-purple-100 rounded-md">
                    <p className="font-medium text-purple-700">Misol: 63 ÷ 7 = ?</p>
                    <p className="mt-2">Yechim: 63 ÷ 7 = 9</p>
                  </div>
                  <div className="p-4 border border-purple-100 rounded-md">
                    <p className="font-medium text-purple-700">Misol: 144 ÷ 12 = ?</p>
                    <p className="mt-2">Yechim: 144 ÷ 12 = 12</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2 text-purple-700">Tub sonlarni aniqlash</h3>
                <div className="p-4 border border-purple-100 rounded-md">
                  <p className="font-medium text-purple-700">Misol: 17 soni tub sonmi?</p>
                  <p className="mt-2">Yechim: 17 sonini 1 dan va 17 dan boshqa sonlarga bo&apos;lib ko&apos;ramiz:</p>
                  <ul className="list-disc pl-6 mt-2">
                    <li>17 ÷ 2 = 8 qoldiq 1</li>
                    <li>17 ÷ 3 = 5 qoldiq 2</li>
                    <li>17 ÷ 4 = 4 qoldiq 1</li>
                    <li>...</li>
                    <li>17 ÷ 16 = 1 qoldiq 1</li>
                  </ul>
                  <p className="mt-2">17 soni faqat 1 ga va o&apos;ziga bo&apos;linadi, demak 17 tub son.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="practice" className="mt-6">
          <Card className="border-teal-100">
            <CardHeader className="bg-gradient-to-r from-teal-50 to-teal-100">
              <CardTitle className="text-teal-700">Mashqlar</CardTitle>
              <CardDescription>O&apos;z bilimlaringizni tekshiring</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6 pt-6">
              <div>
                <h3 className="text-lg font-semibold mb-3 text-teal-700">Quyidagi misolni yeching:</h3>
                <p className="text-xl font-medium mb-4">45 + 27 = ?</p>

                {!showAnswer ? (
                  <Button
                    onClick={() => {
                      setShowAnswer(true)
                      updateProgress()
                    }}
                    className="bg-teal-600 hover:bg-teal-700"
                  >
                    Javobni ko&apos;rsatish
                  </Button>
                ) : (
                  <div className="p-4 bg-teal-50 rounded-md flex items-center gap-2 border border-teal-100">
                    <CheckCircle2 className="h-5 w-5 text-teal-700" />
                    <p className="font-medium text-teal-700">Javob: 72</p>
                  </div>
                )}
              </div>

              <div className="pt-4 border-t border-teal-100">
                <h3 className="text-lg font-semibold mb-3 text-teal-700">Quyidagi misollarni yeching:</h3>

                <div className="space-y-4 mt-4">
                  <div className="space-y-2">
                    <Label htmlFor="ex1" className="text-teal-700">
                      1. 78 - 35 = ?
                    </Label>
                    <div className="flex gap-2">
                      <Input
                        id="ex1"
                        value={answers["ex1"] || ""}
                        onChange={(e) => handleAnswerChange("ex1", e.target.value)}
                        placeholder="Javobni kiriting"
                        className="border-teal-200 focus-visible:ring-teal-500"
                      />
                      <Button
                        onClick={() => checkAnswer("ex1", "43")}
                        disabled={!answers["ex1"] || checked["ex1"]}
                        className="bg-teal-600 hover:bg-teal-700"
                      >
                        Tekshirish
                      </Button>
                    </div>
                    {checked["ex1"] && (
                      <div className="flex items-center gap-2 mt-1">
                        {isCorrect("ex1", "43") ? (
                          <>
                            <CheckCircle2 className="h-4 w-4 text-green-500" />
                            <span className="text-green-500 text-sm">To&apos;g&apos;ri!</span>
                          </>
                        ) : (
                          <>
                            <CheckCircle2 className="h-4 w-4 text-red-500" />
                            <span className="text-red-500 text-sm">
                              Noto&apos;g&apos;ri. To&apos;g&apos;ri javob: 43
                            </span>
                          </>
                        )}
                      </div>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="ex2" className="text-teal-700">
                      2. 24 × 6 = ?
                    </Label>
                    <div className="flex gap-2">
                      <Input
                        id="ex2"
                        value={answers["ex2"] || ""}
                        onChange={(e) => handleAnswerChange("ex2", e.target.value)}
                        placeholder="Javobni kiriting"
                        className="border-teal-200 focus-visible:ring-teal-500"
                      />
                      <Button
                        onClick={() => checkAnswer("ex2", "144")}
                        disabled={!answers["ex2"] || checked["ex2"]}
                        className="bg-teal-600 hover:bg-teal-700"
                      >
                        Tekshirish
                      </Button>
                    </div>
                    {checked["ex2"] && (
                      <div className="flex items-center gap-2 mt-1">
                        {isCorrect("ex2", "144") ? (
                          <>
                            <CheckCircle2 className="h-4 w-4 text-green-500" />
                            <span className="text-green-500 text-sm">To&apos;g&apos;ri!</span>
                          </>
                        ) : (
                          <>
                            <CheckCircle2 className="h-4 w-4 text-red-500" />
                            <span className="text-red-500 text-sm">
                              Noto&apos;g&apos;ri. To&apos;g&apos;ri javob: 144
                            </span>
                          </>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-teal-100">
                <h3 className="text-lg font-semibold mb-3 text-teal-700">Quyidagi sonlardan qaysilari tub son?</h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  <div
                    className="p-2 border border-teal-100 rounded-md text-center hover:bg-teal-50 cursor-pointer"
                    onClick={updateProgress}
                  >
                    2
                  </div>
                  <div
                    className="p-2 border border-teal-100 rounded-md text-center hover:bg-teal-50 cursor-pointer"
                    onClick={updateProgress}
                  >
                    4
                  </div>
                  <div
                    className="p-2 border border-teal-100 rounded-md text-center hover:bg-teal-50 cursor-pointer"
                    onClick={updateProgress}
                  >
                    7
                  </div>
                  <div
                    className="p-2 border border-teal-100 rounded-md text-center hover:bg-teal-50 cursor-pointer"
                    onClick={updateProgress}
                  >
                    9
                  </div>
                  <div
                    className="p-2 border border-teal-100 rounded-md text-center hover:bg-teal-50 cursor-pointer"
                    onClick={updateProgress}
                  >
                    11
                  </div>
                  <div
                    className="p-2 border border-teal-100 rounded-md text-center hover:bg-teal-50 cursor-pointer"
                    onClick={updateProgress}
                  >
                    15
                  </div>
                  <div
                    className="p-2 border border-teal-100 rounded-md text-center hover:bg-teal-50 cursor-pointer"
                    onClick={updateProgress}
                  >
                    17
                  </div>
                  <div
                    className="p-2 border border-teal-100 rounded-md text-center hover:bg-teal-50 cursor-pointer"
                    onClick={updateProgress}
                  >
                    21
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" onClick={updateProgress} className="border-teal-200 text-teal-700">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Oldingi mavzu
              </Button>
              <Link href="/topics/fractions">
                <Button onClick={updateProgress} className="bg-teal-600 hover:bg-teal-700">
                  Keyingi mavzu
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="additional" className="mt-6">
          <Card className="border-amber-100">
            <CardHeader className="bg-gradient-to-r from-amber-50 to-amber-100">
              <CardTitle className="text-amber-700">Qo&apos;shimcha ma&apos;lumotlar</CardTitle>
              <CardDescription>Qiziqarli faktlar va qo&apos;shimcha materiallar</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6 pt-6">
              <div>
                <h3 className="text-lg font-semibold mb-2 text-amber-700">Qiziqarli faktlar</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong className="text-amber-700">Eratosfen g&apos;alviri</strong> - tub sonlarni topish usuli.
                    Qadimgi yunon olimi Eratosfen tomonidan kashf etilgan.
                  </li>
                  <li>
                    <strong className="text-amber-700">Mersenn tub sonlari</strong> - 2<sup>n</sup>-1
                    ko&apos;rinishidagi tub sonlar, bunda n ham tub son. Masalan, 2<sup>3</sup>-1 = 7, 2<sup>5</sup>-1 =
                    31.
                  </li>
                  <li>
                    <strong className="text-amber-700">Eng katta ma&apos;lum tub son</strong> - hozirgi vaqtda eng katta
                    ma&apos;lum tub son 2<sup>82,589,933</sup>-1 bo&apos;lib, u 24,862,048 raqamdan iborat.
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2 text-amber-700">Tarixiy ma&apos;lumotlar</h3>
                <p className="mb-2">
                  Natural sonlar tushunchasi insoniyat tarixida eng qadimgi matematik tushunchalardan biri hisoblanadi.
                  Qadimgi odamlar sanash uchun toshlar, tayoqchalar va boshqa narsalardan foydalanganlar.
                </p>
                <p>
                  Rim raqamlari (I, II, III, IV, V, ...) va arab raqamlari (1, 2, 3, 4, 5, ...) - sonlarni yozishning
                  eng mashhur tizimlari hisoblanadi.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2 text-amber-700">Qo&apos;shimcha adabiyotlar</h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>
                    <a href="#" className="text-blue-600 hover:underline" onClick={updateProgress}>
                      &quot;Matematika tarixi&quot; - A. Ahmedov
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-blue-600 hover:underline" onClick={updateProgress}>
                      &quot;Qiziqarli matematika&quot; - B. Karimov
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-blue-600 hover:underline" onClick={updateProgress}>
                      &quot;Tub sonlar dunyosi&quot; - C. Rasulov
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2 text-amber-700">Video materiallar</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Link
                    href="/lessons/video/natural-numbers"
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
                          className="text-amber-700"
                        >
                          <polygon points="5 3 19 12 5 21 5 3"></polygon>
                        </svg>
                      </div>
                      <span className="font-medium text-amber-700">Natural sonlar tushunchasi</span>
                    </div>
                    <p className="text-sm text-muted-foreground">Davomiyligi: 10:25</p>
                  </Link>

                  <Link
                    href="/lessons/video/natural-numbers"
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
                          className="text-amber-700"
                        >
                          <polygon points="5 3 19 12 5 21 5 3"></polygon>
                        </svg>
                      </div>
                      <span className="font-medium text-amber-700">Tub va murakkab sonlar</span>
                    </div>
                    <p className="text-sm text-muted-foreground">Davomiyligi: 12:40</p>
                  </Link>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Link href="/tests/natural-numbers">
                <Button variant="outline" className="border-amber-200 text-amber-700">
                  Testlarni boshlash
                </Button>
              </Link>
              <Link href="/topics/fractions">
                <Button className="bg-amber-600 hover:bg-amber-700">
                  Keyingi mavzu
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
