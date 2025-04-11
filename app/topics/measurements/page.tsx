"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, ArrowRight, Info } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Progress } from "@/components/ui/progress"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function MeasurementsPage() {
  const [progress, setProgress] = useState(0)
  const [lengthValue, setLengthValue] = useState("1")
  const [lengthUnit1, setLengthUnit1] = useState("m")
  const [lengthUnit2, setLengthUnit2] = useState("cm")
  const [areaValue, setAreaValue] = useState("1")
  const [areaUnit1, setAreaUnit1] = useState("m2")
  const [areaUnit2, setAreaUnit2] = useState("cm2")
  const [volumeValue, setVolumeValue] = useState("1")
  const [volumeUnit1, setVolumeUnit1] = useState("m3")
  const [volumeUnit2, setVolumeUnit2] = useState("l")

  // Conversion factors for length units (to meters)
  const lengthFactors: { [key: string]: number } = {
    km: 1000,
    m: 1,
    dm: 0.1,
    cm: 0.01,
    mm: 0.001,
  }

  // Conversion factors for area units (to square meters)
  const areaFactors: { [key: string]: number } = {
    km2: 1000000,
    ha: 10000,
    a: 100,
    m2: 1,
    dm2: 0.01,
    cm2: 0.0001,
    mm2: 0.000001,
  }

  // Conversion factors for volume units (to cubic meters)
  const volumeFactors: { [key: string]: number } = {
    m3: 1,
    dm3: 0.001,
    cm3: 0.000001,
    mm3: 0.000000001,
    l: 0.001,
    ml: 0.000001,
  }

  // Convert length
  const convertLength = () => {
    const value = Number.parseFloat(lengthValue)
    if (isNaN(value)) return "0"

    const valueInMeters = value * lengthFactors[lengthUnit1]
    const result = valueInMeters / lengthFactors[lengthUnit2]
    return result.toLocaleString(undefined, { maximumFractionDigits: 6 })
  }

  // Convert area
  const convertArea = () => {
    const value = Number.parseFloat(areaValue)
    if (isNaN(value)) return "0"

    const valueInSquareMeters = value * areaFactors[areaUnit1]
    const result = valueInSquareMeters / areaFactors[areaUnit2]
    return result.toLocaleString(undefined, { maximumFractionDigits: 6 })
  }

  // Convert volume
  const convertVolume = () => {
    const value = Number.parseFloat(volumeValue)
    if (isNaN(value)) return "0"

    const valueInCubicMeters = value * volumeFactors[volumeUnit1]
    const result = valueInCubicMeters / volumeFactors[volumeUnit2]
    return result.toLocaleString(undefined, { maximumFractionDigits: 6 })
  }

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

      <h1 className="text-3xl font-bold mb-6">O&apos;lchov birliklari</h1>

      <Alert className="mb-6">
        <Info className="h-4 w-4" />
        <AlertTitle>Eslatma</AlertTitle>
        <AlertDescription>
          O&apos;lchov birliklari - bu fizik kattaliklar qiymatini o&apos;lchash uchun qabul qilingan birliklar.
        </AlertDescription>
      </Alert>

      <Tabs defaultValue="theory" className="w-full" onValueChange={() => updateProgress()}>
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="theory">Nazariya</TabsTrigger>
          <TabsTrigger value="length">Uzunlik</TabsTrigger>
          <TabsTrigger value="area-volume">Yuza va hajm</TabsTrigger>
          <TabsTrigger value="practice">Mashqlar</TabsTrigger>
        </TabsList>

        <TabsContent value="theory" className="mt-6 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>O&apos;lchov birliklari haqida</CardTitle>
              <CardDescription>Asosiy tushunchalar va birliklar</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold mb-2">O&apos;lchov birliklari nima?</h3>
                <p className="mb-2">
                  O&apos;lchov birliklari - bu fizik kattaliklar qiymatini o&apos;lchash uchun qabul qilingan birliklar.
                  Ular yordamida uzunlik, yuza, hajm, vaqt, massa va boshqa kattaliklar o&apos;lchanadi.
                </p>
                <p>
                  Xalqaro birliklar tizimi (SI) - bu dunyoda keng qo&apos;llaniladigan o&apos;lchov birliklari tizimi.
                  Bu tizimda asosiy birliklar: metr (uzunlik), kilogramm (massa), sekund (vaqt), amper (elektr toki),
                  kelvin (temperatura), mol (modda miqdori) va kandela (yorug&apos;lik kuchi).
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">O&apos;lchov birliklarining turlari</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Uzunlik o&apos;lchov birliklari</strong> - millimetr (mm), santimetr (sm), detsimetr (dm),
                    metr (m), kilometr (km)
                  </li>
                  <li>
                    <strong>Yuza o&apos;lchov birliklari</strong> - kvadrat millimetr (mm²), kvadrat santimetr (sm²),
                    kvadrat detsimetr (dm²), kvadrat metr (m²), ar (a), gektar (ga), kvadrat kilometr (km²)
                  </li>
                  <li>
                    <strong>Hajm o&apos;lchov birliklari</strong> - kub millimetr (mm³), kub santimetr (sm³), kub
                    detsimetr (dm³), kub metr (m³), litr (l), millilitr (ml)
                  </li>
                  <li>
                    <strong>Vaqt o&apos;lchov birliklari</strong> - sekund (s), minut (min), soat (h), kun, hafta, oy,
                    yil
                  </li>
                  <li>
                    <strong>Massa o&apos;lchov birliklari</strong> - milligramm (mg), gramm (g), kilogramm (kg), sentner
                    (s), tonna (t)
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">O&apos;lchov birliklarini o&apos;zaro aylantirish</h3>
                <p className="mb-2">
                  O&apos;lchov birliklarini o&apos;zaro aylantirish uchun ko&apos;paytirish yoki bo&apos;lish
                  amallaridan foydalaniladi.
                </p>
                <div className="p-4 bg-primary/10 rounded-md">
                  <p className="font-medium">Masalan:</p>
                  <ul className="list-disc pl-6 mt-2">
                    <li>1 m = 100 sm</li>
                    <li>1 km = 1000 m</li>
                    <li>1 m² = 10000 sm²</li>
                    <li>1 l = 1000 ml</li>
                    <li>1 kg = 1000 g</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="length" className="mt-6 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Uzunlik o&apos;lchov birliklari</CardTitle>
              <CardDescription>Uzunlik o&apos;lchov birliklari va ularni o&apos;zaro aylantirish</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold mb-2">Uzunlik o&apos;lchov birliklari</h3>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left p-2">Birlik</th>
                        <th className="text-left p-2">Belgilanishi</th>
                        <th className="text-left p-2">Metrga nisbatan</th>
                        <th className="text-left p-2">Misol</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="p-2">Kilometr</td>
                        <td className="p-2">km</td>
                        <td className="p-2">1 km = 1000 m</td>
                        <td className="p-2">Shaharlar orasidagi masofa</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2">Metr</td>
                        <td className="p-2">m</td>
                        <td className="p-2">1 m = 1 m</td>
                        <td className="p-2">Xona uzunligi</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2">Detsimetr</td>
                        <td className="p-2">dm</td>
                        <td className="p-2">1 dm = 0,1 m</td>
                        <td className="p-2">Kitob uzunligi</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2">Santimetr</td>
                        <td className="p-2">sm</td>
                        <td className="p-2">1 sm = 0,01 m</td>
                        <td className="p-2">Qalam uzunligi</td>
                      </tr>
                      <tr>
                        <td className="p-2">Millimetr</td>
                        <td className="p-2">mm</td>
                        <td className="p-2">1 mm = 0,001 m</td>
                        <td className="p-2">Qog&apos;oz qalinligi</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">
                  Uzunlik o&apos;lchov birliklarini o&apos;zaro aylantirish
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="length-value">Qiymat</Label>
                      <Input
                        id="length-value"
                        type="number"
                        value={lengthValue}
                        onChange={(e) => setLengthValue(e.target.value)}
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="length-unit-1">Birlik</Label>
                        <Select value={lengthUnit1} onValueChange={setLengthUnit1}>
                          <SelectTrigger id="length-unit-1">
                            <SelectValue placeholder="Birlikni tanlang" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="km">Kilometr (km)</SelectItem>
                            <SelectItem value="m">Metr (m)</SelectItem>
                            <SelectItem value="dm">Detsimetr (dm)</SelectItem>
                            <SelectItem value="cm">Santimetr (sm)</SelectItem>
                            <SelectItem value="mm">Millimetr (mm)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="length-unit-2">Aylantirish</Label>
                        <Select value={lengthUnit2} onValueChange={setLengthUnit2}>
                          <SelectTrigger id="length-unit-2">
                            <SelectValue placeholder="Birlikni tanlang" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="km">Kilometr (km)</SelectItem>
                            <SelectItem value="m">Metr (m)</SelectItem>
                            <SelectItem value="dm">Detsimetr (dm)</SelectItem>
                            <SelectItem value="cm">Santimetr (sm)</SelectItem>
                            <SelectItem value="mm">Millimetr (mm)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-4xl font-bold mb-2">{convertLength()}</div>
                      <p className="text-muted-foreground">
                        {lengthValue} {lengthUnit1} = {convertLength()} {lengthUnit2}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Misollar</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 border rounded-md">
                    <p className="font-medium">Misol: 3,5 m necha sm?</p>
                    <p className="mt-2">Yechim: 3,5 m = 3,5 × 100 sm = 350 sm</p>
                  </div>
                  <div className="p-4 border rounded-md">
                    <p className="font-medium">Misol: 2500 mm necha m?</p>
                    <p className="mt-2">Yechim: 2500 mm = 2500 ÷ 1000 m = 2,5 m</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="area-volume" className="mt-6 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Yuza va hajm o&apos;lchov birliklari</CardTitle>
              <CardDescription>Yuza va hajm o&apos;lchov birliklari va ularni o&apos;zaro aylantirish</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-2">Yuza o&apos;lchov birliklari</h3>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left p-2">Birlik</th>
                        <th className="text-left p-2">Belgilanishi</th>
                        <th className="text-left p-2">Kvadrat metrga nisbatan</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="p-2">Kvadrat kilometr</td>
                        <td className="p-2">km²</td>
                        <td className="p-2">1 km² = 1 000 000 m²</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2">Gektar</td>
                        <td className="p-2">ga</td>
                        <td className="p-2">1 ga = 10 000 m²</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2">Ar</td>
                        <td className="p-2">a</td>
                        <td className="p-2">1 a = 100 m²</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2">Kvadrat metr</td>
                        <td className="p-2">m²</td>
                        <td className="p-2">1 m² = 1 m²</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2">Kvadrat detsimetr</td>
                        <td className="p-2">dm²</td>
                        <td className="p-2">1 dm² = 0,01 m²</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2">Kvadrat santimetr</td>
                        <td className="p-2">sm²</td>
                        <td className="p-2">1 sm² = 0,0001 m²</td>
                      </tr>
                      <tr>
                        <td className="p-2">Kvadrat millimetr</td>
                        <td className="p-2">mm²</td>
                        <td className="p-2">1 mm² = 0,000001 m²</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="area-value">Qiymat</Label>
                      <Input
                        id="area-value"
                        type="number"
                        value={areaValue}
                        onChange={(e) => setAreaValue(e.target.value)}
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="area-unit-1">Birlik</Label>
                        <Select value={areaUnit1} onValueChange={setAreaUnit1}>
                          <SelectTrigger id="area-unit-1">
                            <SelectValue placeholder="Birlikni tanlang" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="km2">Kvadrat kilometr (km²)</SelectItem>
                            <SelectItem value="ha">Gektar (ga)</SelectItem>
                            <SelectItem value="a">Ar (a)</SelectItem>
                            <SelectItem value="m2">Kvadrat metr (m²)</SelectItem>
                            <SelectItem value="dm2">Kvadrat detsimetr (dm²)</SelectItem>
                            <SelectItem value="cm2">Kvadrat santimetr (sm²)</SelectItem>
                            <SelectItem value="mm2">Kvadrat millimetr (mm²)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="area-unit-2">Aylantirish</Label>
                        <Select value={areaUnit2} onValueChange={setAreaUnit2}>
                          <SelectTrigger id="area-unit-2">
                            <SelectValue placeholder="Birlikni tanlang" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="km2">Kvadrat kilometr (km²)</SelectItem>
                            <SelectItem value="ha">Gektar (ga)</SelectItem>
                            <SelectItem value="a">Ar (a)</SelectItem>
                            <SelectItem value="m2">Kvadrat metr (m²)</SelectItem>
                            <SelectItem value="dm2">Kvadrat detsimetr (dm²)</SelectItem>
                            <SelectItem value="cm2">Kvadrat santimetr (sm²)</SelectItem>
                            <SelectItem value="mm2">Kvadrat millimetr (mm²)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-4xl font-bold mb-2">{convertArea()}</div>
                      <p className="text-muted-foreground">
                        {areaValue} {areaUnit1} = {convertArea()} {areaUnit2}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t">
                <h3 className="text-lg font-semibold mb-2">Hajm o&apos;lchov birliklari</h3>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left p-2">Birlik</th>
                        <th className="text-left p-2">Belgilanishi</th>
                        <th className="text-left p-2">Kub metrga nisbatan</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="p-2">Kub metr</td>
                        <td className="p-2">m³</td>
                        <td className="p-2">1 m³ = 1 m³</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2">Kub detsimetr</td>
                        <td className="p-2">dm³</td>
                        <td className="p-2">1 dm³ = 0,001 m³</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2">Kub santimetr</td>
                        <td className="p-2">sm³</td>
                        <td className="p-2">1 sm³ = 0,000001 m³</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2">Kub millimetr</td>
                        <td className="p-2">mm³</td>
                        <td className="p-2">1 mm³ = 0,000000001 m³</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2">Litr</td>
                        <td className="p-2">l</td>
                        <td className="p-2">1 l = 0,001 m³</td>
                      </tr>
                      <tr>
                        <td className="p-2">Millilitr</td>
                        <td className="p-2">ml</td>
                        <td className="p-2">1 ml = 0,000001 m³</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="volume-value">Qiymat</Label>
                      <Input
                        id="volume-value"
                        type="number"
                        value={volumeValue}
                        onChange={(e) => setVolumeValue(e.target.value)}
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="volume-unit-1">Birlik</Label>
                        <Select value={volumeUnit1} onValueChange={setVolumeUnit1}>
                          <SelectTrigger id="volume-unit-1">
                            <SelectValue placeholder="Birlikni tanlang" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="m3">Kub metr (m³)</SelectItem>
                            <SelectItem value="dm3">Kub detsimetr (dm³)</SelectItem>
                            <SelectItem value="cm3">Kub santimetr (sm³)</SelectItem>
                            <SelectItem value="mm3">Kub millimetr (mm³)</SelectItem>
                            <SelectItem value="l">Litr (l)</SelectItem>
                            <SelectItem value="ml">Millilitr (ml)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="volume-unit-2">Aylantirish</Label>
                        <Select value={volumeUnit2} onValueChange={setVolumeUnit2}>
                          <SelectTrigger id="volume-unit-2">
                            <SelectValue placeholder="Birlikni tanlang" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="m3">Kub metr (m³)</SelectItem>
                            <SelectItem value="dm3">Kub detsimetr (dm³)</SelectItem>
                            <SelectItem value="cm3">Kub santimetr (sm³)</SelectItem>
                            <SelectItem value="mm3">Kub millimetr (mm³)</SelectItem>
                            <SelectItem value="l">Litr (l)</SelectItem>
                            <SelectItem value="ml">Millilitr (ml)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-4xl font-bold mb-2">{convertVolume()}</div>
                      <p className="text-muted-foreground">
                        {volumeValue} {volumeUnit1} = {convertVolume()} {volumeUnit2}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Misollar</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 border rounded-md">
                    <p className="font-medium">Misol: 2 m² necha sm²?</p>
                    <p className="mt-2">Yechim: 2 m² = 2 × 10000 sm² = 20000 sm²</p>
                  </div>
                  <div className="p-4 border rounded-md">
                    <p className="font-medium">Misol: 3 l necha sm³?</p>
                    <p className="mt-2">Yechim: 3 l = 3 × 1000 sm³ = 3000 sm³</p>
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
                  <h3 className="text-lg font-semibold mb-4">Uzunlik o&apos;lchov birliklarini aylantirish</h3>
                  <p className="mb-4">Quyidagi masalalarni yeching:</p>

                  <div className="space-y-4">
                    <div className="p-4 border rounded-md">
                      <p className="font-medium mb-2">1. 3,5 km necha m?</p>
                      <div className="space-y-2">
                        <Input type="text" placeholder="Javobni kiriting" onChange={() => updateProgress()} />
                      </div>
                    </div>

                    <div className="p-4 border rounded-md">
                      <p className="font-medium mb-2">2. 250 sm necha m?</p>
                      <div className="space-y-2">
                        <Input type="text" placeholder="Javobni kiriting" onChange={() => updateProgress()} />
                      </div>
                    </div>

                    <div className="p-4 border rounded-md">
                      <p className="font-medium mb-2">3. 1,5 m necha mm?</p>
                      <div className="space-y-2">
                        <Input type="text" placeholder="Javobni kiriting" onChange={() => updateProgress()} />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t">
                  <h3 className="text-lg font-semibold mb-4">Yuza va hajm o&apos;lchov birliklarini aylantirish</h3>
                  <p className="mb-4">Quyidagi masalalarni yeching:</p>

                  <div className="space-y-4">
                    <div className="p-4 border rounded-md">
                      <p className="font-medium mb-2">1. 5 m² necha dm²?</p>
                      <div className="space-y-2">
                        <Input type="text" placeholder="Javobni kiriting" onChange={() => updateProgress()} />
                      </div>
                    </div>

                    <div className="p-4 border rounded-md">
                      <p className="font-medium mb-2">2. 3 l necha ml?</p>
                      <div className="space-y-2">
                        <Input type="text" placeholder="Javobni kiriting" onChange={() => updateProgress()} />
                      </div>
                    </div>

                    <div className="p-4 border rounded-md">
                      <p className="font-medium mb-2">3. 0,5 m³ necha l?</p>
                      <div className="space-y-2">
                        <Input type="text" placeholder="Javobni kiriting" onChange={() => updateProgress()} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" onClick={updateProgress}>
                <ArrowLeft className="mr-2 h-4 w-4" />
                Oldingi mavzu
              </Button>
              <Link href="/topics/logic">
                <Button onClick={updateProgress}>
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
