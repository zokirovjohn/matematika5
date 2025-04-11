"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, ArrowRight, Info } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Progress } from "@/components/ui/progress"
import { Slider } from "@/components/ui/slider"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function GeometryPage() {
  const [progress, setProgress] = useState(0)
  const [rectangleWidth, setRectangleWidth] = useState(5)
  const [rectangleHeight, setRectangleHeight] = useState(3)
  const [circleRadius, setCircleRadius] = useState(4)
  const [triangleBase, setTriangleBase] = useState(6)
  const [triangleHeight, setTriangleHeight] = useState(4)

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

      <h1 className="text-3xl font-bold mb-6">Geometrik shakllar va ularning xossalari</h1>

      <Alert className="mb-6">
        <Info className="h-4 w-4" />
        <AlertTitle>Eslatma</AlertTitle>
        <AlertDescription>
          Geometriya - matematikaning shakllar, ularning o&apos;lchamlari va xossalarini o&apos;rganadigan bo&apos;limi.
        </AlertDescription>
      </Alert>

      <Tabs defaultValue="theory" className="w-full" onValueChange={() => updateProgress()}>
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="theory">Nazariya</TabsTrigger>
          <TabsTrigger value="shapes">Shakllar</TabsTrigger>
          <TabsTrigger value="interactive">Interaktiv</TabsTrigger>
          <TabsTrigger value="practice">Mashqlar</TabsTrigger>
        </TabsList>

        <TabsContent value="theory" className="mt-6 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Geometriya asoslari</CardTitle>
              <CardDescription>Asosiy tushunchalar va atamalar</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold mb-2">Nuqta, chiziq va tekislik</h3>
                <p className="mb-2">
                  Geometriyaning asosiy tushunchalari - nuqta, chiziq va tekislik. Nuqta - o&apos;lchamga ega
                  bo&apos;lmagan geometrik obyekt. Chiziq - bir o&apos;lchamli geometrik obyekt. Tekislik - ikki
                  o&apos;lchamli geometrik obyekt.
                </p>
                <div className="flex justify-center my-4">
                  <div className="w-64 h-64 bg-muted/30 rounded-md relative">
                    <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full"></div>
                    <div className="absolute top-1/2 left-0 w-full h-0.5 bg-primary"></div>
                    <div className="absolute top-3/4 left-1/4 text-sm">Nuqta</div>
                    <div className="absolute top-[55%] right-1/4 text-sm">Chiziq</div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Kesma va burchak</h3>
                <p className="mb-2">
                  Kesma - ikki nuqta orasidagi chiziq qismi. Burchak - bir nuqtadan chiquvchi ikki nur orasidagi
                  tekislik qismi.
                </p>
                <div className="flex justify-center my-4">
                  <div className="w-64 h-64 bg-muted/30 rounded-md relative">
                    <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full"></div>
                    <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-primary rounded-full"></div>
                    <div className="absolute top-1/4 left-1/4 w-[50%] h-0.5 bg-primary"></div>
                    <div className="absolute top-3/4 left-1/4 w-2 h-2 bg-primary rounded-full"></div>
                    <div className="absolute top-3/4 left-1/4 w-[40%] h-0.5 bg-primary transform origin-left rotate-45"></div>
                    <div className="absolute top-3/4 left-1/4 w-[40%] h-0.5 bg-primary transform origin-left -rotate-45"></div>
                    <div className="absolute top-[30%] left-[45%] text-sm">Kesma</div>
                    <div className="absolute bottom-[15%] left-[45%] text-sm">Burchak</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Ko&apos;pburchaklar</CardTitle>
              <CardDescription>Uchburchak, to&apos;rtburchak va boshqa ko&apos;pburchaklar</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold mb-2">Uchburchak</h3>
                <p className="mb-2">
                  Uchburchak - uch nuqta va ularni birlashtiruvchi uch kesmadan iborat yopiq shakl. Uchburchakning uch
                  tomoni va uch burchagi mavjud.
                </p>
                <p className="mb-2">Uchburchak turlari:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Teng tomonli uchburchak - barcha tomonlari teng</li>
                  <li>Teng yonli uchburchak - ikkita tomoni teng</li>
                  <li>Turli tomonli uchburchak - barcha tomonlari har xil</li>
                  <li>To&apos;g&apos;ri burchakli uchburchak - bitta burchagi 90°</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">To&apos;rtburchak</h3>
                <p className="mb-2">
                  To&apos;rtburchak - to&apos;rt nuqta va ularni birlashtiruvchi to&apos;rt kesmadan iborat yopiq shakl.
                </p>
                <p className="mb-2">To&apos;rtburchak turlari:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Kvadrat - barcha tomonlari teng va barcha burchaklari to&apos;g&apos;ri</li>
                  <li>
                    To&apos;g&apos;ri to&apos;rtburchak - qarama-qarshi tomonlari teng va barcha burchaklari
                    to&apos;g&apos;ri
                  </li>
                  <li>Romb - barcha tomonlari teng</li>
                  <li>Parallelogramm - qarama-qarshi tomonlari parallel va teng</li>
                  <li>Trapetsiya - faqat ikkita tomoni parallel</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="shapes" className="mt-6 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Asosiy shakllar</CardTitle>
              <CardDescription>Geometrik shakllar va ularning xossalari</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Uchburchak</h3>
                  <div className="aspect-square bg-muted/30 rounded-md flex items-center justify-center">
                    <div className="w-3/4 h-3/4 relative">
                      <div className="absolute w-0 h-0 border-l-[100px] border-r-[100px] border-b-[173px] border-l-transparent border-r-transparent border-b-primary/60"></div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <p>
                      <strong>Perimetri:</strong> a + b + c
                    </p>
                    <p>
                      <strong>Yuzasi:</strong> S = (a × h) / 2
                    </p>
                    <p>
                      <strong>Burchaklari yig&apos;indisi:</strong> 180°
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">To&apos;g&apos;ri to&apos;rtburchak</h3>
                  <div className="aspect-square bg-muted/30 rounded-md flex items-center justify-center">
                    <div className="w-3/4 h-1/2 bg-primary/60 rounded-sm"></div>
                  </div>
                  <div className="space-y-2">
                    <p>
                      <strong>Perimetri:</strong> 2 × (a + b)
                    </p>
                    <p>
                      <strong>Yuzasi:</strong> S = a × b
                    </p>
                    <p>
                      <strong>Diagonali:</strong> d = √(a² + b²)
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Kvadrat</h3>
                  <div className="aspect-square bg-muted/30 rounded-md flex items-center justify-center">
                    <div className="w-3/5 h-3/5 bg-primary/60 rounded-sm"></div>
                  </div>
                  <div className="space-y-2">
                    <p>
                      <strong>Perimetri:</strong> 4 × a
                    </p>
                    <p>
                      <strong>Yuzasi:</strong> S = a²
                    </p>
                    <p>
                      <strong>Diagonali:</strong> d = a × √2
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Doira</h3>
                  <div className="aspect-square bg-muted/30 rounded-md flex items-center justify-center">
                    <div className="w-3/5 h-3/5 bg-primary/60 rounded-full"></div>
                  </div>
                  <div className="space-y-2">
                    <p>
                      <strong>Uzunligi:</strong> L = 2 × π × r
                    </p>
                    <p>
                      <strong>Yuzasi:</strong> S = π × r²
                    </p>
                    <p>
                      <strong>Diametri:</strong> d = 2 × r
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Hajmli shakllar</CardTitle>
              <CardDescription>Uch o&apos;lchamli geometrik shakllar</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Kub</h3>
                  <div className="aspect-square bg-muted/30 rounded-md flex items-center justify-center">
                    <div className="w-1/2 h-1/2 bg-primary/60 rounded-sm transform rotate-45"></div>
                  </div>
                  <div className="space-y-2">
                    <p>
                      <strong>Hajmi:</strong> V = a³
                    </p>
                    <p>
                      <strong>To&apos;la sirti:</strong> S = 6 × a²
                    </p>
                    <p>
                      <strong>Diagonali:</strong> d = a × √3
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">To&apos;g&apos;ri burchakli parallelepiped</h3>
                  <div className="aspect-square bg-muted/30 rounded-md flex items-center justify-center">
                    <div className="w-3/5 h-2/5 bg-primary/60 rounded-sm transform rotate-12"></div>
                  </div>
                  <div className="space-y-2">
                    <p>
                      <strong>Hajmi:</strong> V = a × b × c
                    </p>
                    <p>
                      <strong>To&apos;la sirti:</strong> S = 2 × (ab + bc + ac)
                    </p>
                    <p>
                      <strong>Diagonali:</strong> d = √(a² + b² + c²)
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Silindr</h3>
                  <div className="aspect-square bg-muted/30 rounded-md flex items-center justify-center">
                    <div className="w-2/5 h-3/5 bg-primary/60 rounded-full"></div>
                  </div>
                  <div className="space-y-2">
                    <p>
                      <strong>Hajmi:</strong> V = π × r² × h
                    </p>
                    <p>
                      <strong>To&apos;la sirti:</strong> S = 2 × π × r × (r + h)
                    </p>
                    <p>
                      <strong>Yon sirti:</strong> S_yon = 2 × π × r × h
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Shar</h3>
                  <div className="aspect-square bg-muted/30 rounded-md flex items-center justify-center">
                    <div className="w-3/5 h-3/5 bg-primary/60 rounded-full"></div>
                  </div>
                  <div className="space-y-2">
                    <p>
                      <strong>Hajmi:</strong> V = (4/3) × π × r³
                    </p>
                    <p>
                      <strong>Sirti:</strong> S = 4 × π × r²
                    </p>
                    <p>
                      <strong>Diametri:</strong> d = 2 × r
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="interactive" className="mt-6 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Shakllarni o&apos;zgartirish</CardTitle>
              <CardDescription>Shakllarning parametrlarini o&apos;zgartiring va natijani ko&apos;ring</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold">To&apos;g&apos;ri to&apos;rtburchak</h3>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label>Eni: {rectangleWidth} sm</Label>
                      <Slider
                        value={[rectangleWidth]}
                        min={1}
                        max={10}
                        step={1}
                        onValueChange={(value) => {
                          setRectangleWidth(value[0])
                          updateProgress()
                        }}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>Bo&apos;yi: {rectangleHeight} sm</Label>
                      <Slider
                        value={[rectangleHeight]}
                        min={1}
                        max={10}
                        step={1}
                        onValueChange={(value) => {
                          setRectangleHeight(value[0])
                          updateProgress()
                        }}
                      />
                    </div>

                    <div className="p-4 bg-primary/10 rounded-md">
                      <p>
                        <strong>Perimetri:</strong> {2 * (rectangleWidth + rectangleHeight)} sm
                      </p>
                      <p>
                        <strong>Yuzasi:</strong> {rectangleWidth * rectangleHeight} sm²
                      </p>
                      <p>
                        <strong>Diagonali:</strong> {Math.sqrt(rectangleWidth ** 2 + rectangleHeight ** 2).toFixed(2)}{" "}
                        sm
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-center">
                  <div
                    className="bg-primary/60 rounded-sm"
                    style={{
                      width: `${rectangleWidth * 30}px`,
                      height: `${rectangleHeight * 30}px`,
                    }}
                  ></div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 pt-6 border-t">
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold">Doira</h3>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label>Radiusi: {circleRadius} sm</Label>
                      <Slider
                        value={[circleRadius]}
                        min={1}
                        max={10}
                        step={1}
                        onValueChange={(value) => {
                          setCircleRadius(value[0])
                          updateProgress()
                        }}
                      />
                    </div>

                    <div className="p-4 bg-primary/10 rounded-md">
                      <p>
                        <strong>Uzunligi:</strong> {(2 * Math.PI * circleRadius).toFixed(2)} sm
                      </p>
                      <p>
                        <strong>Yuzasi:</strong> {(Math.PI * circleRadius ** 2).toFixed(2)} sm²
                      </p>
                      <p>
                        <strong>Diametri:</strong> {2 * circleRadius} sm
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-center">
                  <div
                    className="bg-primary/60 rounded-full"
                    style={{
                      width: `${circleRadius * 20}px`,
                      height: `${circleRadius * 20}px`,
                    }}
                  ></div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Yuzani hisoblash</CardTitle>
              <CardDescription>Shakllarning yuzasini hisoblash</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold">Uchburchak</h3>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label>Asosi: {triangleBase} sm</Label>
                      <Slider
                        value={[triangleBase]}
                        min={1}
                        max={10}
                        step={1}
                        onValueChange={(value) => {
                          setTriangleBase(value[0])
                          updateProgress()
                        }}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>Balandligi: {triangleHeight} sm</Label>
                      <Slider
                        value={[triangleHeight]}
                        min={1}
                        max={10}
                        step={1}
                        onValueChange={(value) => {
                          setTriangleHeight(value[0])
                          updateProgress()
                        }}
                      />
                    </div>

                    <div className="p-4 bg-primary/10 rounded-md">
                      <p>
                        <strong>Yuzasi:</strong> {((triangleBase * triangleHeight) / 2).toFixed(2)} sm²
                      </p>
                      <p>
                        <strong>Perimetri:</strong>{" "}
                        {(triangleBase + 2 * Math.sqrt((triangleBase / 2) ** 2 + triangleHeight ** 2)).toFixed(2)} sm
                        (teng yonli uchburchak uchun)
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-center">
                  <div
                    className="relative"
                    style={{ width: `${triangleBase * 20}px`, height: `${triangleHeight * 20}px` }}
                  >
                    <div
                      className="absolute bottom-0 left-0 w-0 h-0"
                      style={{
                        borderLeft: `${triangleBase * 10}px solid transparent`,
                        borderRight: `${triangleBase * 10}px solid transparent`,
                        borderBottom: `${triangleHeight * 20}px solid rgba(var(--primary), 0.6)`,
                      }}
                    ></div>
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
                  <h3 className="text-lg font-semibold mb-4">Perimetr va yuzani hisoblash</h3>
                  <p className="mb-4">Quyidagi masalalarni yeching:</p>

                  <div className="space-y-6">
                    <div className="p-4 border rounded-md">
                      <p className="font-medium mb-2">
                        1. Tomonlari 5 sm va 8 sm bo&apos;lgan to&apos;g&apos;ri to&apos;rtburchakning perimetri va
                        yuzasini toping.
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                        <div className="space-y-2">
                          <Label htmlFor="rectangle-perimeter">Perimetri (sm)</Label>
                          <Input
                            id="rectangle-perimeter"
                            type="text"
                            placeholder="Javobni kiriting"
                            onChange={() => updateProgress()}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="rectangle-area">Yuzasi (sm²)</Label>
                          <Input
                            id="rectangle-area"
                            type="text"
                            placeholder="Javobni kiriting"
                            onChange={() => updateProgress()}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="p-4 border rounded-md">
                      <p className="font-medium mb-2">
                        2. Radiusi 6 sm bo&apos;lgan doiraning uzunligi va yuzasini toping. π = 3.14 deb oling.
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                        <div className="space-y-2">
                          <Label htmlFor="circle-circumference">Uzunligi (sm)</Label>
                          <Input
                            id="circle-circumference"
                            type="text"
                            placeholder="Javobni kiriting"
                            onChange={() => updateProgress()}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="circle-area">Yuzasi (sm²)</Label>
                          <Input
                            id="circle-area"
                            type="text"
                            placeholder="Javobni kiriting"
                            onChange={() => updateProgress()}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="p-4 border rounded-md">
                      <p className="font-medium mb-2">
                        3. Asosi 10 sm va balandligi 7 sm bo&apos;lgan uchburchakning yuzasini toping.
                      </p>
                      <div className="space-y-2">
                        <Label htmlFor="triangle-area">Yuzasi (sm²)</Label>
                        <Input
                          id="triangle-area"
                          type="text"
                          placeholder="Javobni kiriting"
                          onChange={() => updateProgress()}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t">
                  <h3 className="text-lg font-semibold mb-4">Geometrik shakllarni aniqlash</h3>
                  <p className="mb-4">Quyidagi ta&apos;rifga mos keluvchi geometrik shaklni toping:</p>

                  <div className="space-y-4">
                    <div className="p-4 border rounded-md">
                      <p className="font-medium mb-2">
                        1. Barcha tomonlari teng va barcha burchaklari to&apos;g&apos;ri bo&apos;lgan to&apos;rtburchak.
                      </p>
                      <Input type="text" placeholder="Javobni kiriting" onChange={() => updateProgress()} />
                    </div>

                    <div className="p-4 border rounded-md">
                      <p className="font-medium mb-2">
                        2. Faqat ikkita tomoni parallel bo&apos;lgan to&apos;rtburchak.
                      </p>
                      <Input type="text" placeholder="Javobni kiriting" onChange={() => updateProgress()} />
                    </div>

                    <div className="p-4 border rounded-md">
                      <p className="font-medium mb-2">
                        3. Barcha nuqtalari markazdan bir xil masofada joylashgan tekis shakl.
                      </p>
                      <Input type="text" placeholder="Javobni kiriting" onChange={() => updateProgress()} />
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
              <Link href="/topics/measurements">
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
