"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react"

export default function NaturalNumbersLesson() {
  const [showAnswer, setShowAnswer] = useState(false)

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <Link href="/" className="text-primary hover:underline flex items-center gap-1">
          <ArrowLeft className="h-4 w-4" />
          <span>Bosh sahifaga qaytish</span>
        </Link>
      </div>

      <h1 className="text-3xl font-bold mb-6">Natural sonlar</h1>

      <Tabs defaultValue="theory" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="theory">Nazariya</TabsTrigger>
          <TabsTrigger value="examples">Misollar</TabsTrigger>
          <TabsTrigger value="practice">Mashqlar</TabsTrigger>
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
                <p>
                  Natural sonlar - bu 1, 2, 3, 4, 5, ... kabi butun musbat sonlardir. Ular sanash uchun ishlatiladi.
                  Natural sonlar to&apos;plami odatda N harfi bilan belgilanadi.
                </p>
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
                    <Button onClick={() => setShowAnswer(true)}>Javobni ko&apos;rsatish</Button>
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
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Oldingi mavzu
              </Button>
              <Link href="/lessons/fractions">
                <Button>
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
