"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, ArrowRight, CheckCircle2, Info } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Progress } from "@/components/ui/progress"

export default function NaturalNumbersLessonPage() {
  const [showAnswer, setShowAnswer] = useState(false)
  const [progress, setProgress] = useState(0)

  // Simulate progress update when user interacts with the page
  const updateProgress = () => {
    setProgress(Math.min(100, progress + 5))
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

      <h1 className="text-3xl font-bold mb-6">Natural sonlar</h1>

      <Alert className="mb-6">
        <Info className="h-4 w-4" />
        <AlertTitle>Muhim ma&apos;lumot</AlertTitle>
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
          <Card>
            <CardHeader>
              <CardTitle>Natural sonlar haqida</CardTitle>
              <CardDescription>Natural sonlar va ularning xususiyatlari</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold mb-2">Natural sonlar nima?</h3>
                <p className="mb-2">
                  Natural sonlar - bu 1, 2, 3, 4, 5, ... kabi butun musbat sonlardir. Ular sanash uchun ishlatiladi.
                  Natural sonlar to&apos;plami odatda N harfi bilan belgilanadi.
                </p>
                <div className="p-4 bg-primary/10 rounded-md mt-2">
                  <p className="font-medium">Natural sonlar to&apos;plami: N = {"{1, 2, 3, 4, 5, ...}"}</p>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Natural sonlar ustida amallar</h3>
                <p>Natural sonlar ustida quyidagi amallarni bajarish mumkin:</p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Qo&apos;shish: a + b</li>
                  <li>Ayirish: a - b (agar a &gt; b bo&apos;lsa)</li>
                  <li>Ko&apos;paytirish: a × b</li>
                  <li>Bo&apos;lish: a ÷ b (agar a b ga qoldiqsiz bo&apos;linsa)</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Natural sonlarning xususiyatlari</h3>
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
                <h3 className="text-lg font-semibold mb-2">Tub va murakkab sonlar</h3>
                <p className="mb-2">
                  <strong>Tub son</strong> - faqat 1 ga va o&apos;ziga bo&apos;linadigan natural son (masalan, 2, 3, 5,
                  7, 11, ...).
                </p>
                <p className="mb-2">
                  <strong>Murakkab son</strong> - 1 dan va o&apos;zidan tashqari boshqa bo&apos;luvchilarga ega
                  bo&apos;lgan natural son (masalan, 4, 6, 8, 9, 10, ...).
                </p>
                <div className="p-4 bg-primary/10 rounded-md mt-2">
                  <p className="font-medium">Eslatma: 1 soni na tub, na murakkab son hisoblanadi.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="examples" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Natural sonlar ustida amallar</CardTitle>
              <CardDescription>Misollar va yechimlar</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-2">Qo&apos;shish</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 border rounded-md">
                    <p className="font-medium">Misol: 24 + 18 = ?</p>
                    <p className="mt-2">Yechim: 24 + 18 = 42</p>
                  </div>
                  <div className="p-4 border rounded-md">
                    <p className="font-medium">Misol: 135 + 246 = ?</p>
                    <p className="mt-2">Yechim: 135 + 246 = 381</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Ayirish</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 border rounded-md">
                    <p className="font-medium">Misol: 56 - 23 = ?</p>
                    <p className="mt-2">Yechim: 56 - 23 = 33</p>
                  </div>
                  <div className="p-4 border rounded-md">
                    <p className="font-medium">Misol: 200 - 45 = ?</p>
                    <p className="mt-2">Yechim: 200 - 45 = 155</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Ko&apos;paytirish</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 border rounded-md">
                    <p className="font-medium">Misol: 12 × 5 = ?</p>
                    <p className="mt-2">Yechim: 12 × 5 = 60</p>
                  </div>
                  <div className="p-4 border rounded-md">
                    <p className="font-medium">Misol: 24 × 11 = ?</p>
                    <p className="mt-2">Yechim: 24 × 11 = 264</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Bo&apos;lish</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 border rounded-md">
                    <p className="font-medium">Misol: 63 ÷ 7 = ?</p>
                    <p className="mt-2">Yechim: 63 ÷ 7 = 9</p>
                  </div>
                  <div className="p-4 border rounded-md">
                    <p className="font-medium">Misol: 144 ÷ 12 = ?</p>
                    <p className="mt-2">Yechim: 144 ÷ 12 = 12</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Tub sonlarni aniqlash</h3>
                <div className="p-4 border rounded-md">
                  <p className="font-medium">Misol: 17 soni tub sonmi?</p>
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
          <Card>
            <CardHeader>
              <CardTitle>Mashqlar</CardTitle>
              <CardDescription>O&apos;z bilimlaringizni tekshiring</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3">Quyidagi misolni yeching:</h3>
                  <p className="text-xl font-medium mb-4">45 + 27 = ?</p>

                  {!showAnswer ? (
                    <Button
                      onClick={() => {
                        setShowAnswer(true)
                        updateProgress()
                      }}
                    >
                      Javobni ko&apos;rsatish
                    </Button>
                  ) : (
                    <div className="p-4 bg-primary/10 rounded-md flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary" />
                      <p className="font-medium">Javob: 72</p>
                    </div>
                  )}
                </div>

                <div className="pt-4 border-t">
                  <h3 className="text-lg font-semibold mb-3">Quyidagi misollarni yeching:</h3>
                  <ol className="list-decimal pl-6 space-y-2">
                    <li>78 - 35 = ?</li>
                    <li>24 × 6 = ?</li>
                    <li>81 ÷ 9 = ?</li>
                    <li>125 + 48 = ?</li>
                    <li>200 - 75 = ?</li>
                  </ol>
                </div>

                <div className="pt-4 border-t">
                  <h3 className="text-lg font-semibold mb-3">Quyidagi sonlardan qaysilari tub son?</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    <div className="p-2 border rounded-md text-center">2</div>
                    <div className="p-2 border rounded-md text-center">4</div>
                    <div className="p-2 border rounded-md text-center">7</div>
                    <div className="p-2 border rounded-md text-center">9</div>
                    <div className="p-2 border rounded-md text-center">11</div>
                    <div className="p-2 border rounded-md text-center">15</div>
                    <div className="p-2 border rounded-md text-center">17</div>
                    <div className="p-2 border rounded-md text-center">21</div>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" onClick={updateProgress}>
                <ArrowLeft className="mr-2 h-4 w-4" />
                Oldingi mavzu
              </Button>
              <Link href="/lessons/text/fractions">
                <Button onClick={updateProgress}>
                  Keyingi mavzu
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="additional" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Qo&apos;shimcha ma&apos;lumotlar</CardTitle>
              <CardDescription>Qiziqarli faktlar va qo&apos;shimcha materiallar</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-2">Qiziqarli faktlar</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Eratosfen g&apos;alviri</strong> - tub sonlarni topish usuli. Qadimgi yunon olimi Eratosfen
                    tomonidan kashf etilgan.
                  </li>
                  <li>
                    <strong>Mersenn tub sonlari</strong> - 2<sup>n</sup>-1 ko&apos;rinishidagi tub sonlar, bunda n ham
                    tub son. Masalan, 2<sup>3</sup>-1 = 7, 2<sup>5</sup>-1 = 31.
                  </li>
                  <li>
                    <strong>Eng katta ma&apos;lum tub son</strong> - hozirgi vaqtda eng katta ma&apos;lum tub son 2
                    <sup>82,589,933</sup>-1 bo&apos;lib, u 24,862,048 raqamdan iborat.
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Tarixiy ma&apos;lumotlar</h3>
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
                <h3 className="text-lg font-semibold mb-2">Qo&apos;shimcha adabiyotlar</h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>
                    <a href="#" className="text-primary hover:underline" onClick={updateProgress}>
                      &quot;Matematika tarixi&quot; - A. Ahmedov
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-primary hover:underline" onClick={updateProgress}>
                      &quot;Qiziqarli matematika&quot; - B. Karimov
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-primary hover:underline" onClick={updateProgress}>
                      &quot;Tub sonlar dunyosi&quot; - C. Rasulov
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Video materiallar</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Link href="/lessons/video/natural-numbers" className="p-4 border rounded-md hover:bg-primary/5">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
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
                          className="text-primary"
                        >
                          <polygon points="5 3 19 12 5 21 5 3"></polygon>
                        </svg>
                      </div>
                      <span className="font-medium">Natural sonlar tushunchasi</span>
                    </div>
                    <p className="text-sm text-muted-foreground">Davomiyligi: 10:25</p>
                  </Link>

                  <Link href="/lessons/video/natural-numbers" className="p-4 border rounded-md hover:bg-primary/5">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
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
                          className="text-primary"
                        >
                          <polygon points="5 3 19 12 5 21 5 3"></polygon>
                        </svg>
                      </div>
                      <span className="font-medium">Tub va murakkab sonlar</span>
                    </div>
                    <p className="text-sm text-muted-foreground">Davomiyligi: 12:40</p>
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
