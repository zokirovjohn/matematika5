"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, Info, CheckCircle2, XCircle } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Progress } from "@/components/ui/progress"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function LogicPage() {
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

      <h1 className="text-3xl font-bold mb-6">Matematik mantiq</h1>

      <Alert className="mb-6">
        <Info className="h-4 w-4" />
        <AlertTitle>Eslatma</AlertTitle>
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
          <TabsTrigger value="interesting">Qiziqarli faktlar</TabsTrigger>
        </TabsList>

        <TabsContent value="theory" className="mt-6 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Matematik mantiq haqida</CardTitle>
              <CardDescription>Asosiy tushunchalar va qoidalar</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold mb-2">Matematik mantiq nima?</h3>
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
                <h3 className="text-lg font-semibold mb-2">Mantiqiy mulohazalar</h3>
                <p className="mb-2">
                  Mantiqiy mulohaza - bu ma&apos;lum qoidalar asosida bir fikrdan boshqa fikrga o&apos;tish jarayoni.
                  Mantiqiy mulohazalar to&apos;g&apos;ri yoki noto&apos;g&apos;ri bo&apos;lishi mumkin.
                </p>
                <div className="p-4 bg-primary/10 rounded-md">
                  <p className="font-medium">Misol:</p>
                  <ul className="list-disc pl-6 mt-2">
                    <li>Barcha odamlar tirik mavjudotlardir.</li>
                    <li>Ali odam.</li>
                    <li>Demak, Ali tirik mavjudot.</li>
                  </ul>
                  <p className="mt-2">Bu to&apos;g&apos;ri mantiqiy mulohaza.</p>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Mantiqiy masalalar turlari</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Mantiqiy savollar</strong> - mantiqiy fikrlashni talab qiluvchi savollar.
                  </li>
                  <li>
                    <strong>Rebuslar</strong> - harflar, raqamlar va belgilar yordamida ifodalangan topishmoqlar.
                  </li>
                  <li>
                    <strong>Krossvordlar</strong> - so&apos;zlarni topish o&apos;yini.
                  </li>
                  <li>
                    <strong>Sudoku</strong> - 9×9 katakchali jadvalga 1 dan 9 gacha raqamlarni joylashtirish
                    o&apos;yini.
                  </li>
                  <li>
                    <strong>Matematik boshqotirmalar</strong> - matematik bilimlarni qo&apos;llashni talab qiluvchi
                    masalalar.
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Mantiqiy masalalarni yechish strategiyalari</h3>
                <ol className="list-decimal pl-6 space-y-2">
                  <li>
                    <strong>Masalani tushunish</strong> - masala shartini diqqat bilan o&apos;qib, nima
                    so&apos;ralayotganini aniqlash.
                  </li>
                  <li>
                    <strong>Ma&apos;lumotlarni tahlil qilish</strong> - berilgan ma&apos;lumotlarni tahlil qilish va
                    ulardan foydalanish yo&apos;llarini topish.
                  </li>
                  <li>
                    <strong>Masalani soddalashtirish</strong> - murakkab masalani kichikroq, soddaroq qismlarga
                    bo&apos;lish.
                  </li>
                  <li>
                    <strong>Mantiqiy xulosalar chiqarish</strong> - berilgan ma&apos;lumotlardan mantiqiy xulosalar
                    chiqarish.
                  </li>
                  <li>
                    <strong>Yechimni tekshirish</strong> - topilgan yechimni masala sharti bilan tekshirish.
                  </li>
                </ol>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="problems" className="mt-6 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Mantiqiy masalalar</CardTitle>
              <CardDescription>Mantiqiy fikrlashni rivojlantiruvchi masalalar</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-4">Masala 1</h3>
                <div className="p-4 border rounded-md">
                  <p className="mb-4">
                    Ali, Vali va Soli do&apos;stlar. Ularning biri shifokor, biri o&apos;qituvchi, biri muhandis.
                    Quyidagi ma&apos;lumotlar berilgan:
                  </p>
                  <ul className="list-disc pl-6 mb-4">
                    <li>Shifokor Alining ismida &quot;l&quot; harfi bor.</li>
                    <li>Vali muhandis emas.</li>
                    <li>Soli shifokor emas.</li>
                  </ul>
                  <p className="font-medium mb-2">Har bir do&apos;stning kasbini aniqlang.</p>

                  <div className="space-y-4 mt-4">
                    <div className="space-y-2">
                      <Label htmlFor="problem1-1">Ali kim?</Label>
                      <Input
                        id="problem1-1"
                        value={answers["problem1-1"] || ""}
                        onChange={(e) => handleAnswerChange("problem1-1", e.target.value)}
                        placeholder="Javobni kiriting"
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
                              <XCircle className="h-4 w-4 text-red-500" />
                              <span className="text-red-500 text-sm">
                                Noto&apos;g&apos;ri. To&apos;g&apos;ri javob: shifokor
                              </span>
                            </>
                          )}
                        </div>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="problem1-2">Vali kim?</Label>
                      <Input
                        id="problem1-2"
                        value={answers["problem1-2"] || ""}
                        onChange={(e) => handleAnswerChange("problem1-2", e.target.value)}
                        placeholder="Javobni kiriting"
                      />
                      {checked["problem1-2"] && (
                        <div className="flex items-center gap-2 mt-1">
                          {isCorrect("problem1-2", "o'qituvchi") ? (
                            <>
                              <CheckCircle2 className="h-4 w-4 text-green-500" />
                              <span className="text-green-500 text-sm">To&apos;g&apos;ri!</span>
                            </>
                          ) : (
                            <>
                              <XCircle className="h-4 w-4 text-red-500" />
                              <span className="text-red-500 text-sm">
                                Noto&apos;g&apos;ri. To&apos;g&apos;ri javob: o&apos;qituvchi
                              </span>
                            </>
                          )}
                        </div>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="problem1-3">Soli kim?</Label>
                      <Input
                        id="problem1-3"
                        value={answers["problem1-3"] || ""}
                        onChange={(e) => handleAnswerChange("problem1-3", e.target.value)}
                        placeholder="Javobni kiriting"
                      />
                      {checked["problem1-3"] && (
                        <div className="flex items-center gap-2 mt-1">
                          {isCorrect("problem1-3", "muhandis") ? (
                            <>
                              <CheckCircle2 className="h-4 w-4 text-green-500" />
                              <span className="text-green-500 text-sm">To&apos;g&apos;ri!</span>
                            </>
                          ) : (
                            <>
                              <XCircle className="h-4 w-4 text-red-500" />
                              <span className="text-red-500 text-sm">
                                Noto&apos;g&apos;ri. To&apos;g&apos;ri javob: muhandis
                              </span>
                            </>
                          )}
                        </div>
                      )}
                    </div>

                    <Button
                      onClick={() => {
                        checkAnswer("problem1-1", "shifokor")
                        checkAnswer("problem1-2", "o'qituvchi")
                        checkAnswer("problem1-3", "muhandis")
                      }}
                      disabled={
                        !answers["problem1-1"] ||
                        !answers["problem1-2"] ||
                        !answers["problem1-3"] ||
                        (checked["problem1-1"] && checked["problem1-2"] && checked["problem1-3"])
                      }
                    >
                      Tekshirish
                    </Button>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4">Masala 2</h3>
                <div className="p-4 border rounded-md">
                  <p className="mb-4">
                    Bir qutida 10 ta qizil, 20 ta ko&apos;k va 30 ta yashil shar bor. Qutidan kamida nechta shar olish
                    kerak, shunda olingan sharlar orasida albatta 15 ta bir xil rangli shar bo&apos;lsin?
                  </p>

                  <div className="space-y-4 mt-4">
                    <div className="space-y-2">
                      <Label htmlFor="problem2">Javob:</Label>
                      <Input
                        id="problem2"
                        value={answers["problem2"] || ""}
                        onChange={(e) => handleAnswerChange("problem2", e.target.value)}
                        placeholder="Javobni kiriting"
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
                              <XCircle className="h-4 w-4 text-red-500" />
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
                    >
                      Tekshirish
                    </Button>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4">Masala 3</h3>
                <div className="p-4 border rounded-md">
                  <p className="mb-4">Quyidagi ketma-ketlikda keyingi son qanday bo&apos;ladi?</p>
                  <p className="text-center font-bold mb-4">2, 5, 11, 23, 47, ?</p>

                  <div className="space-y-4 mt-4">
                    <div className="space-y-2">
                      <Label htmlFor="problem3">Javob:</Label>
                      <Input
                        id="problem3"
                        value={answers["problem3"] || ""}
                        onChange={(e) => handleAnswerChange("problem3", e.target.value)}
                        placeholder="Javobni kiriting"
                      />
                      {checked["problem3"] && (
                        <div className="flex items-center gap-2 mt-1">
                          {isCorrect("problem3", "95") ? (
                            <>
                              <CheckCircle2 className="h-4 w-4 text-green-500" />
                              <span className="text-green-500 text-sm">To&apos;g&apos;ri!</span>
                            </>
                          ) : (
                            <>
                              <XCircle className="h-4 w-4 text-red-500" />
                              <span className="text-red-500 text-sm">
                                Noto&apos;g&apos;ri. To&apos;g&apos;ri javob: 95
                              </span>
                            </>
                          )}
                        </div>
                      )}
                    </div>

                    <Button
                      onClick={() => checkAnswer("problem3", "95")}
                      disabled={!answers["problem3"] || checked["problem3"]}
                    >
                      Tekshirish
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="games" className="mt-6 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Matematik o&apos;yinlar</CardTitle>
              <CardDescription>Mantiqiy fikrlashni rivojlantiruvchi o&apos;yinlar</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-4">Nim o&apos;yini</h3>
                <div className="p-4 border rounded-md">
                  <p className="mb-4">
                    Nim o&apos;yini - bu ikki kishi o&apos;ynaydigan strategik o&apos;yin. O&apos;yinda bir nechta
                    to&apos;plamlar mavjud, har bir to&apos;plamda bir nechta buyum bor. O&apos;yinchilar navbat bilan
                    istalgan to&apos;plamdan istalgan miqdordagi buyumlarni olishlari mumkin, lekin faqat bitta
                    to&apos;plamdan. Oxirgi buyumni olgan o&apos;yinchi g&apos;olib bo&apos;ladi.
                  </p>
                  <div className="p-4 bg-primary/10 rounded-md">
                    <p className="font-medium">Strategiya:</p>
                    <p className="mt-2">
                      Nim o&apos;yinida g&apos;alaba qozonish uchun to&apos;plamlarni ikkilik sanoq sistemasida
                      ifodalab, ularning XOR (exclusive OR) operatsiyasi natijasini 0 ga teng qilish kerak.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4">Sudoku</h3>
                <div className="p-4 border rounded-md">
                  <p className="mb-4">
                    Sudoku - bu 9×9 katakchali jadvalga 1 dan 9 gacha raqamlarni shunday joylashtirish kerakki, har bir
                    qatorda, har bir ustunda va har bir 3×3 katakchali kvadratda har bir raqam faqat bir marta uchrashi
                    kerak.
                  </p>
                  <div className="p-4 bg-primary/10 rounded-md">
                    <p className="font-medium">Strategiya:</p>
                    <ol className="list-decimal pl-6 mt-2 space-y-1">
                      <li>Har bir katakchaga qo&apos;yish mumkin bo&apos;lgan raqamlarni aniqlang.</li>
                      <li>Faqat bitta raqam qo&apos;yish mumkin bo&apos;lgan kataklarni toping.</li>
                      <li>Faqat bitta katakchaga qo&apos;yish mumkin bo&apos;lgan raqamlarni toping.</li>
                      <li>Murakkab usullardan foydalaning: X-Wing, Swordfish va boshqalar.</li>
                    </ol>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4">Hanoi minorasi</h3>
                <div className="p-4 border rounded-md">
                  <p className="mb-4">
                    Hanoi minorasi - bu uchta ustun va har xil o&apos;lchamdagi disklar bilan o&apos;ynaladigan
                    o&apos;yin. Dastlab, barcha disklar birinchi ustunda kattadan kichikka qarab joylashtirilgan. Maqsad
                    - barcha disklarni birinchi ustundan uchinchi ustungacha ko&apos;chirish, bunda har bir qadamda
                    faqat bitta diskni ko&apos;chirish mumkin va katta disk kichik disk ustiga qo&apos;yilmasligi kerak.
                  </p>
                  <div className="p-4 bg-primary/10 rounded-md">
                    <p className="font-medium">Strategiya:</p>
                    <p className="mt-2">
                      n ta disk uchun minimal qadamlar soni 2^n - 1 ga teng. Masalan, 3 ta disk uchun 7 ta qadam kerak.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="interesting" className="mt-6 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Qiziqarli faktlar</CardTitle>
              <CardDescription>Matematik mantiq haqida qiziqarli ma&apos;lumotlar</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-4">Tarixiy faktlar</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Matematik mantiq fani 19-asrda George Boole va Gottlob Frege tomonidan asos solingan.</li>
                  <li>
                    Boole algebrasi kompyuter fanining asosini tashkil etadi va zamonaviy kompyuterlarning ishlash
                    printsiplarini tushuntirishda muhim rol o&apos;ynaydi.
                  </li>
                  <li>
                    Kurt Gödel 1931 yilda o&apos;zining &quot;To&apos;liqsizlik teoremasi&quot;ni isbotladi, bu teorema
                    matematik mantiqning eng muhim natijalaridan biri hisoblanadi.
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4">Qiziqarli masalalar</h3>
                <div className="p-4 border rounded-md">
                  <p className="font-medium mb-2">Yolg&apos;onchilar va rostgo&apos;ylar masalasi:</p>
                  <p className="mb-4">
                    Bir orolda ikki turdagi odamlar yashaydi: rostgo&apos;ylar (har doim haqiqatni gapiradi) va
                    yolg&apos;onchilar (har doim yolg&apos;on gapiradi). Siz orolga tashrif buyurdingiz va yo&apos;lda
                    ikki kishini uchratdingiz. Siz ulardan biriga: &quot;Ikkinchi kishi rostgo&apos;ymi?&quot; deb
                    so&apos;radingiz. U &quot;Ha&quot; deb javob berdi. Ikkinchi kishiga ham xuddi shu savolni berdingiz
                    va u ham &quot;Ha&quot; deb javob berdi. Ikkala kishi ham qanday turdagi odamlar?
                  </p>
                  <div className="p-4 bg-primary/10 rounded-md">
                    <p className="font-medium">Yechim:</p>
                    <p className="mt-2">
                      Birinchi kishi yolg&apos;onchi, ikkinchi kishi rostgo&apos;y. Agar birinchi kishi rostgo&apos;y
                      bo&apos;lsa, uning &quot;Ha&quot; javobi haqiqat bo&apos;lishi kerak, ya&apos;ni ikkinchi kishi
                      rostgo&apos;y. Agar ikkinchi kishi rostgo&apos;y bo&apos;lsa, uning &quot;Ha&quot; javobi ham
                      haqiqat bo&apos;lishi kerak, ya&apos;ni birinchi kishi rostgo&apos;y. Lekin bu ziddiyatli vaziyat,
                      chunki ikkala kishi ham bir-birini rostgo&apos;y deb aytmoqda. Demak, birinchi kishi
                      yolg&apos;onchi bo&apos;lishi kerak.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4">Matematik mantiq va kompyuter fani</h3>
                <p className="mb-4">
                  Matematik mantiq kompyuter fanining asosini tashkil etadi. Boolean algebrasi, predikat mantiq va
                  boshqa mantiqiy tizimlar kompyuter dasturlari, algoritmlar va ma&apos;lumotlar bazalarini loyihalashda
                  keng qo&apos;llaniladi.
                </p>
                <div className="p-4 bg-primary/10 rounded-md">
                  <p className="font-medium">Misol:</p>
                  <p className="mt-2">
                    Dasturlash tillaridagi mantiqiy operatorlar (AND, OR, NOT) va shart operatorlari (if-else) matematik
                    mantiq qoidalariga asoslangan.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
