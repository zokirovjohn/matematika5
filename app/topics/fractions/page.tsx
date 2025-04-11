"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Slider } from "@/components/ui/slider"
import { ArrowLeft, ArrowRight, Info } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Progress } from "@/components/ui/progress"

export default function FractionsPage() {
  const [numerator1, setNumerator1] = useState(1)
  const [denominator1, setDenominator1] = useState(2)
  const [numerator2, setNumerator2] = useState(2)
  const [denominator2, setDenominator2] = useState(3)
  const [progress, setProgress] = useState(0)

  // Simulate progress update when user interacts with the page
  const updateProgress = () => {
    setProgress(Math.min(100, progress + 5))
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

      <h1 className="text-3xl font-bold mb-6">Kasrlar va o&apos;nli kasrlar</h1>

      <Alert className="mb-6">
        <Info className="h-4 w-4" />
        <AlertTitle>Eslatma</AlertTitle>
        <AlertDescription>
          Ushbu mavzuni o&apos;rganish uchun natural sonlar mavzusini bilish tavsiya etiladi.
        </AlertDescription>
      </Alert>

      <Tabs defaultValue="theory" className="w-full" onValueChange={() => updateProgress()}>
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="theory">Nazariya</TabsTrigger>
          <TabsTrigger value="examples">Misollar</TabsTrigger>
          <TabsTrigger value="interactive">Interaktiv</TabsTrigger>
          <TabsTrigger value="practice">Mashqlar</TabsTrigger>
        </TabsList>

        <TabsContent value="theory" className="mt-6 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Kasrlar haqida</CardTitle>
              <CardDescription>Kasrlar tushunchasi va turlari</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold mb-2">Kasr nima?</h3>
                <p className="mb-2">
                  Kasr - bu butun sonning bir qismi. Kasr ikki qismdan iborat:
                  <strong className="mx-1">surati</strong> (yuqoridagi son) va
                  <strong className="mx-1">maxraji</strong> (pastdagi son).
                </p>
                <div className="flex justify-center my-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold">
                      <span className="block border-b-2 border-primary mb-1">3</span>
                      <span>4</span>
                    </div>
                    <div className="mt-2 grid grid-cols-2 gap-x-6 text-sm">
                      <div className="text-center">
                        <span className="block font-medium">Surat</span>
                        <span className="text-muted-foreground">3</span>
                      </div>
                      <div className="text-center">
                        <span className="block font-medium">Maxraj</span>
                        <span className="text-muted-foreground">4</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Kasrlar turlari</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Oddiy kasrlar</strong> - surati maxrajidan kichik bo&apos;lgan kasrlar (masalan, 3/4)
                  </li>
                  <li>
                    <strong>Noto&apos;g&apos;ri kasrlar</strong> - surati maxrajidan katta yoki teng bo&apos;lgan
                    kasrlar (masalan, 5/4)
                  </li>
                  <li>
                    <strong>Aralash sonlar</strong> - butun son va oddiy kasrdan iborat sonlar (masalan, 1 3/4)
                  </li>
                  <li>
                    <strong>O&apos;nli kasrlar</strong> - maxraji 10 ning darajasi bo&apos;lgan kasrlar (masalan, 0.75)
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Kasrlarni solishtirish</h3>
                <p>
                  Kasrlarni solishtirish uchun ularni bir xil maxrajga keltirish kerak. Buning uchun kasrlarning eng
                  kichik umumiy maxrajini topish kerak.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>O&apos;nli kasrlar</CardTitle>
              <CardDescription>O&apos;nli kasrlar va ular ustida amallar</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold mb-2">O&apos;nli kasr nima?</h3>
                <p>
                  O&apos;nli kasr - bu maxraji 10, 100, 1000 va hokazo bo&apos;lgan kasrlarning yozilish usuli.
                  O&apos;nli kasrda butun va kasr qismlari vergul bilan ajratiladi.
                </p>
                <div className="flex justify-center my-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold">
                      <span>3,75</span>
                    </div>
                    <div className="mt-2 grid grid-cols-2 gap-x-6 text-sm">
                      <div className="text-center">
                        <span className="block font-medium">Butun qism</span>
                        <span className="text-muted-foreground">3</span>
                      </div>
                      <div className="text-center">
                        <span className="block font-medium">Kasr qism</span>
                        <span className="text-muted-foreground">75</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Oddiy kasrni o&apos;nli kasrga aylantirish</h3>
                <p>Oddiy kasrni o&apos;nli kasrga aylantirish uchun suratni maxrajga bo&apos;lish kerak.</p>
                <div className="p-4 border rounded-md mt-2">
                  <p className="font-medium">Misol: 3/4 ni o&apos;nli kasrga aylantiring</p>
                  <p className="mt-2">Yechim: 3 ÷ 4 = 0,75</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="examples" className="mt-6 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Kasrlar ustida amallar</CardTitle>
              <CardDescription>Misollar va yechimlar</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-2">Kasrlarni qo&apos;shish</h3>
                <p className="mb-2">
                  Bir xil maxrajli kasrlarni qo&apos;shish uchun suratlar qo&apos;shiladi, maxraj esa o&apos;zgarishsiz
                  qoladi.
                </p>
                <div className="p-4 border rounded-md mt-2">
                  <p className="font-medium">Misol: 2/5 + 1/5 = ?</p>
                  <p className="mt-2">Yechim: 2/5 + 1/5 = (2+1)/5 = 3/5</p>
                </div>
                <p className="mt-4 mb-2">
                  Har xil maxrajli kasrlarni qo&apos;shish uchun avval ularni bir xil maxrajga keltirish kerak.
                </p>
                <div className="p-4 border rounded-md mt-2">
                  <p className="font-medium">Misol: 1/2 + 1/3 = ?</p>
                  <p className="mt-2">Yechim: 1/2 + 1/3 = 3/6 + 2/6 = 5/6</p>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Kasrlarni ayirish</h3>
                <p className="mb-2">
                  Bir xil maxrajli kasrlarni ayirish uchun suratlar ayiriladi, maxraj esa o&apos;zgarishsiz qoladi.
                </p>
                <div className="p-4 border rounded-md mt-2">
                  <p className="font-medium">Misol: 4/7 - 2/7 = ?</p>
                  <p className="mt-2">Yechim: 4/7 - 2/7 = (4-2)/7 = 2/7</p>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Kasrlarni ko&apos;paytirish</h3>
                <p className="mb-2">
                  Kasrlarni ko&apos;paytirish uchun suratlar ko&apos;paytiriladi va maxrajlar ham ko&apos;paytiriladi.
                </p>
                <div className="p-4 border rounded-md mt-2">
                  <p className="font-medium">Misol: 2/3 × 3/4 = ?</p>
                  <p className="mt-2">Yechim: 2/3 × 3/4 = (2×3)/(3×4) = 6/12 = 1/2</p>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Kasrlarni bo&apos;lish</h3>
                <p className="mb-2">
                  Kasrni kasrga bo&apos;lish uchun birinchi kasrni ikkinchi kasrning teskari qiymatiga ko&apos;paytirish
                  kerak.
                </p>
                <div className="p-4 border rounded-md mt-2">
                  <p className="font-medium">Misol: 2/3 ÷ 1/2 = ?</p>
                  <p className="mt-2">Yechim: 2/3 ÷ 1/2 = 2/3 × 2/1 = 4/3 = 1 1/3</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>O&apos;nli kasrlar ustida amallar</CardTitle>
              <CardDescription>Misollar va yechimlar</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-2">O&apos;nli kasrlarni qo&apos;shish va ayirish</h3>
                <p className="mb-2">
                  O&apos;nli kasrlarni qo&apos;shish va ayirish uchun ularni vergullar bir-birining ostida
                  bo&apos;ladigan qilib yozib, oddiy sonlar kabi qo&apos;shish yoki ayirish kerak.
                </p>
                <div className="p-4 border rounded-md mt-2">
                  <p className="font-medium">Misol: 3,25 + 2,75 = ?</p>
                  <p className="mt-2">Yechim: 3,25 + 2,75 = 6,00 = 6</p>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">O&apos;nli kasrlarni ko&apos;paytirish</h3>
                <p className="mb-2">
                  O&apos;nli kasrlarni ko&apos;paytirishda avval ularni butun sonlar kabi ko&apos;paytirib, so&apos;ngra
                  natijada vergulni to&apos;g&apos;ri joyga qo&apos;yish kerak.
                </p>
                <div className="p-4 border rounded-md mt-2">
                  <p className="font-medium">Misol: 2,5 × 0,4 = ?</p>
                  <p className="mt-2">Yechim: 2,5 × 0,4 = 1,0 = 1</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="interactive" className="mt-6 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Kasrlarni vizualizatsiya qilish</CardTitle>
              <CardDescription>Kasrlarni ko&apos;rgazmali tarzda o&apos;rganish</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-4">Kasrni sozlang</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span>Surat: {numerator1}</span>
                          <span>Maxraj: {denominator1}</span>
                        </div>
                        <div className="flex items-center gap-4">
                          <span className="font-bold text-xl">
                            {numerator1}/{denominator1}
                          </span>
                          <div className="flex-1">
                            <Slider
                              value={[numerator1]}
                              min={1}
                              max={10}
                              step={1}
                              onValueChange={(value) => {
                                setNumerator1(value[0])
                                updateProgress()
                              }}
                            />
                          </div>
                        </div>
                        <div className="flex items-center gap-4">
                          <span className="font-bold text-xl">Maxraj</span>
                          <div className="flex-1">
                            <Slider
                              value={[denominator1]}
                              min={2}
                              max={12}
                              step={1}
                              onValueChange={(value) => {
                                setDenominator1(value[0])
                                updateProgress()
                              }}
                            />
                          </div>
                        </div>
                      </div>

                      <div className="p-4 bg-primary/10 rounded-md">
                        <p>
                          O&apos;nli kasr ko&apos;rinishida: <strong>{(numerator1 / denominator1).toFixed(2)}</strong>
                        </p>
                        <p className="mt-2">
                          {numerator1 > denominator1
                            ? `Bu noto'g'ri kasr. Aralash son ko'rinishida: ${Math.floor(numerator1 / denominator1)} ${numerator1 % denominator1}/${denominator1}`
                            : "Bu oddiy kasr."}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center justify-center">
                      <div className="w-40 h-40 relative">
                        <div className="w-full h-full rounded-full border-2 border-primary overflow-hidden">
                          <div
                            className="absolute bg-primary/60"
                            style={{
                              width: "100%",
                              height: "100%",
                              clipPath: `polygon(50% 50%, 50% 0, ${numerator1 / denominator1 <= 0.25 ? 50 + 50 * Math.sin((2 * Math.PI * numerator1) / denominator1) : 100}% ${numerator1 / denominator1 <= 0.25 ? 50 - 50 * Math.cos((2 * Math.PI * numerator1) / denominator1) : 0}%, ${numerator1 / denominator1 > 0.5 ? 0 : 100}% ${numerator1 / denominator1 > 0.5 ? 0 : 100}%, ${numerator1 / denominator1 > 0.75 ? 0 : 50 - 50 * Math.sin((2 * Math.PI * numerator1) / denominator1)}% ${numerator1 / denominator1 > 0.75 ? 50 : 100}%)`,
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t">
                  <h3 className="text-lg font-semibold mb-4">Kasrlarni solishtirish</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span>
                            1-kasr: {numerator1}/{denominator1}
                          </span>
                          <span>
                            2-kasr: {numerator2}/{denominator2}
                          </span>
                        </div>
                        <div className="flex items-center gap-4">
                          <span className="font-bold text-xl">2-kasr surati</span>
                          <div className="flex-1">
                            <Slider
                              value={[numerator2]}
                              min={1}
                              max={10}
                              step={1}
                              onValueChange={(value) => {
                                setNumerator2(value[0])
                                updateProgress()
                              }}
                            />
                          </div>
                        </div>
                        <div className="flex items-center gap-4">
                          <span className="font-bold text-xl">2-kasr maxraji</span>
                          <div className="flex-1">
                            <Slider
                              value={[denominator2]}
                              min={2}
                              max={12}
                              step={1}
                              onValueChange={(value) => {
                                setDenominator2(value[0])
                                updateProgress()
                              }}
                            />
                          </div>
                        </div>
                      </div>

                      <div className="p-4 bg-primary/10 rounded-md">
                        <p>
                          {numerator1 / denominator1 > numerator2 / denominator2
                            ? `${numerator1}/${denominator1} > ${numerator2}/${denominator2}`
                            : numerator1 / denominator1 < numerator2 / denominator2
                              ? `${numerator1}/${denominator1} < ${numerator2}/${denominator2}`
                              : `${numerator1}/${denominator1} = ${numerator2}/${denominator2}`}
                        </p>
                        <p className="mt-2">
                          O&apos;nli ko&apos;rinishda: {(numerator1 / denominator1).toFixed(2)}{" "}
                          {numerator1 / denominator1 > numerator2 / denominator2
                            ? ">"
                            : numerator1 / denominator1 < numerator2 / denominator2
                              ? "<"
                              : "="}{" "}
                          {(numerator2 / denominator2).toFixed(2)}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center justify-center">
                      <div className="flex gap-4 items-center">
                        <div className="w-20 h-20 relative">
                          <div className="w-full h-full rounded-full border-2 border-primary overflow-hidden">
                            <div
                              className="absolute bg-primary/60"
                              style={{
                                width: "100%",
                                height: "100%",
                                clipPath: `polygon(50% 50%, 50% 0, ${numerator1 / denominator1 <= 0.25 ? 50 + 50 * Math.sin((2 * Math.PI * numerator1) / denominator1) : 100}% ${numerator1 / denominator1 <= 0.25 ? 50 - 50 * Math.cos((2 * Math.PI * numerator1) / denominator1) : 0}%, ${numerator1 / denominator1 > 0.5 ? 0 : 100}% ${numerator1 / denominator1 > 0.5 ? 0 : 100}%, ${numerator1 / denominator1 > 0.75 ? 0 : 50 - 50 * Math.sin((2 * Math.PI * numerator1) / denominator1)}% ${numerator1 / denominator1 > 0.75 ? 50 : 100}%)`,
                              }}
                            />
                          </div>
                        </div>

                        <span className="text-xl font-bold">
                          {numerator1 / denominator1 > numerator2 / denominator2
                            ? ">"
                            : numerator1 / denominator1 < numerator2 / denominator2
                              ? "<"
                              : "="}
                        </span>

                        <div className="w-20 h-20 relative">
                          <div className="w-full h-full rounded-full border-2 border-primary overflow-hidden">
                            <div
                              className="absolute bg-primary/60"
                              style={{
                                width: "100%",
                                height: "100%",
                                clipPath: `polygon(50% 50%, 50% 0, ${numerator2 / denominator2 <= 0.25 ? 50 + 50 * Math.sin((2 * Math.PI * numerator2) / denominator2) : 100}% ${numerator2 / denominator2 <= 0.25 ? 50 - 50 * Math.cos((2 * Math.PI * numerator2) / denominator2) : 0}%, ${numerator2 / denominator2 > 0.5 ? 0 : 100}% ${numerator2 / denominator2 > 0.5 ? 0 : 100}%, ${numerator2 / denominator2 > 0.75 ? 0 : 50 - 50 * Math.sin((2 * Math.PI * numerator2) / denominator2)}% ${numerator2 / denominator2 > 0.75 ? 50 : 100}%)`,
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Kasr kalkulyatori</CardTitle>
              <CardDescription>Kasrlar ustida amallar bajarish</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">1-kasr surati</label>
                      <input
                        type="number"
                        value={numerator1}
                        onChange={(e) => setNumerator1(Number.parseInt(e.target.value) || 1)}
                        min="1"
                        max="20"
                        className="w-full p-2 border rounded-md"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">1-kasr maxraji</label>
                      <input
                        type="number"
                        value={denominator1}
                        onChange={(e) => setDenominator1(Number.parseInt(e.target.value) || 2)}
                        min="1"
                        max="20"
                        className="w-full p-2 border rounded-md"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">2-kasr surati</label>
                      <input
                        type="number"
                        value={numerator2}
                        onChange={(e) => setNumerator2(Number.parseInt(e.target.value) || 1)}
                        min="1"
                        max="20"
                        className="w-full p-2 border rounded-md"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">2-kasr maxraji</label>
                      <input
                        type="number"
                        value={denominator2}
                        onChange={(e) => setDenominator2(Number.parseInt(e.target.value) || 2)}
                        min="1"
                        max="20"
                        className="w-full p-2 border rounded-md"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <Button onClick={() => updateProgress()}>Qo&apos;shish</Button>
                    <Button onClick={() => updateProgress()}>Ayirish</Button>
                    <Button onClick={() => updateProgress()}>Ko&apos;paytirish</Button>
                    <Button onClick={() => updateProgress()}>Bo&apos;lish</Button>
                  </div>
                </div>

                <div className="p-6 border rounded-md">
                  <h3 className="text-lg font-semibold mb-4">Natijalar</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span>Qo&apos;shish:</span>
                      <span className="font-medium">
                        {numerator1}/{denominator1} + {numerator2}/{denominator2} ={" "}
                        {numerator1 * denominator2 + numerator2 * denominator1}/{denominator1 * denominator2}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>Ayirish:</span>
                      <span className="font-medium">
                        {numerator1}/{denominator1} - {numerator2}/{denominator2} ={" "}
                        {numerator1 * denominator2 - numerator2 * denominator1}/{denominator1 * denominator2}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>Ko&apos;paytirish:</span>
                      <span className="font-medium">
                        {numerator1}/{denominator1} × {numerator2}/{denominator2} = {numerator1 * numerator2}/
                        {denominator1 * denominator2}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>Bo&apos;lish:</span>
                      <span className="font-medium">
                        {numerator1}/{denominator1} ÷ {numerator2}/{denominator2} = {numerator1 * denominator2}/
                        {denominator1 * numerator2}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="practice" className="mt-6 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Mashqlar</CardTitle>
              <CardDescription>O&apos;z bilimlaringizni tekshiring</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-semibold mb-4">Kasrlarni solishtirish</h3>
                  <p className="mb-4">Quyidagi kasrlarni solishtiring va to&apos;g&apos;ri belgini qo&apos;ying:</p>

                  <div className="space-y-4">
                    <div className="p-4 border rounded-md">
                      <div className="flex items-center justify-center gap-4">
                        <span className="text-xl font-medium">2/5</span>
                        <select className="p-2 border rounded-md" onChange={() => updateProgress()}>
                          <option value="">Tanlang</option>
                          <option value="<">&lt;</option>
                          <option value="=">=</option>
                          <option value=">">&gt;</option>
                        </select>
                        <span className="text-xl font-medium">3/7</span>
                      </div>
                    </div>

                    <div className="p-4 border rounded-md">
                      <div className="flex items-center justify-center gap-4">
                        <span className="text-xl font-medium">4/9</span>
                        <select className="p-2 border rounded-md" onChange={() => updateProgress()}>
                          <option value="">Tanlang</option>
                          <option value="<">&lt;</option>
                          <option value="=">=</option>
                          <option value=">">&gt;</option>
                        </select>
                        <span className="text-xl font-medium">5/12</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t">
                  <h3 className="text-lg font-semibold mb-4">Kasrlar ustida amallar</h3>
                  <p className="mb-4">Quyidagi misollarni yeching:</p>

                  <div className="space-y-4">
                    <div className="p-4 border rounded-md">
                      <p className="font-medium mb-2">1. 3/4 + 2/3 = ?</p>
                      <input
                        type="text"
                        placeholder="Javobni kiriting"
                        className="w-full p-2 border rounded-md"
                        onChange={() => updateProgress()}
                      />
                    </div>

                    <div className="p-4 border rounded-md">
                      <p className="font-medium mb-2">2. 5/6 - 1/3 = ?</p>
                      <input
                        type="text"
                        placeholder="Javobni kiriting"
                        className="w-full p-2 border rounded-md"
                        onChange={() => updateProgress()}
                      />
                    </div>

                    <div className="p-4 border rounded-md">
                      <p className="font-medium mb-2">3. 2/5 × 3/4 = ?</p>
                      <input
                        type="text"
                        placeholder="Javobni kiriting"
                        className="w-full p-2 border rounded-md"
                        onChange={() => updateProgress()}
                      />
                    </div>

                    <div className="p-4 border rounded-md">
                      <p className="font-medium mb-2">4. 3/5 ÷ 2/3 = ?</p>
                      <input
                        type="text"
                        placeholder="Javobni kiriting"
                        className="w-full p-2 border rounded-md"
                        onChange={() => updateProgress()}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Oldingi mavzu
              </Button>
              <Link href="/topics/geometry">
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
