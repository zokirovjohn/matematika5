import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, Calculator, Shapes, Ruler, Brain, Video, FileText, CheckSquare } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import HeroSection from "@/components/hero-section"
import FeaturesSection from "@/components/features-section"
import TestimonialsSection from "@/components/testimonials-section"

export default function Home() {
  return (
    <div>
      <HeroSection />

      <div className="container mx-auto px-4 py-16">
        <FeaturesSection />

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Asosiy mavzular</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link href="/topics/natural-numbers" className="block">
              <Card className="h-full transition-all hover:border-primary hover:shadow-md">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <BookOpen className="h-8 w-8 text-primary mb-2" />
                    <Badge variant="outline" className="bg-primary/10">
                      Asosiy
                    </Badge>
                  </div>
                  <CardTitle>Natural sonlar</CardTitle>
                  <CardDescription>Natural sonlar va ular ustida amallar</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Natural sonlar tushunchasi, qo&apos;shish, ayirish, ko&apos;paytirish va bo&apos;lish amallari,
                    sonlarning bo&apos;linish belgilari.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    Mavzuni o&apos;rganish
                  </Button>
                </CardFooter>
              </Card>
            </Link>

            <Link href="/topics/fractions" className="block">
              <Card className="h-full transition-all hover:border-primary hover:shadow-md">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <Calculator className="h-8 w-8 text-primary mb-2" />
                    <Badge variant="outline" className="bg-primary/10">
                      Muhim
                    </Badge>
                  </div>
                  <CardTitle>Kasrlar</CardTitle>
                  <CardDescription>Kasrlar va o&apos;nli kasrlar</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Oddiy kasrlar, o&apos;nli kasrlar, kasrlarni solishtirish, kasrlar ustida amallar, kasrlarni
                    qisqartirish va kengaytirish.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    Mavzuni o&apos;rganish
                  </Button>
                </CardFooter>
              </Card>
            </Link>

            <Link href="/topics/geometry" className="block">
              <Card className="h-full transition-all hover:border-primary hover:shadow-md">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <Shapes className="h-8 w-8 text-primary mb-2" />
                    <Badge variant="outline" className="bg-primary/10">
                      Interaktiv
                    </Badge>
                  </div>
                  <CardTitle>Geometrik shakllar</CardTitle>
                  <CardDescription>Geometrik shakllar va ularning xossalari</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Nuqta, chiziq, kesma, burchak, ko&apos;pburchaklar, aylana va doira, perimetr va yuza hisoblash.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    Mavzuni o&apos;rganish
                  </Button>
                </CardFooter>
              </Card>
            </Link>

            <Link href="/topics/measurements" className="block">
              <Card className="h-full transition-all hover:border-primary hover:shadow-md">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <Ruler className="h-8 w-8 text-primary mb-2" />
                    <Badge variant="outline" className="bg-primary/10">
                      Amaliy
                    </Badge>
                  </div>
                  <CardTitle>O&apos;lchov birliklari</CardTitle>
                  <CardDescription>Uzunlik, yuza, hajm va vaqt o&apos;lchov birliklari</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Uzunlik, yuza, hajm va vaqt o&apos;lchov birliklari, ularni o&apos;zaro aylantirish, amaliy
                    masalalar yechish.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    Mavzuni o&apos;rganish
                  </Button>
                </CardFooter>
              </Card>
            </Link>

            <Link href="/topics/logic" className="block">
              <Card className="h-full transition-all hover:border-primary hover:shadow-md">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <Brain className="h-8 w-8 text-primary mb-2" />
                    <Badge variant="outline" className="bg-primary/10">
                      Qiziqarli
                    </Badge>
                  </div>
                  <CardTitle>Matematik mantiq</CardTitle>
                  <CardDescription>Matematik mantiq masalalari</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Mantiqiy masalalar, rebuslar, krossvordlar, matematik o&apos;yinlar, qiziqarli matematik faktlar.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    Mavzuni o&apos;rganish
                  </Button>
                </CardFooter>
              </Card>
            </Link>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">O&apos;quv materiallari</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link href="/lessons/text" className="block">
              <Card className="h-full transition-all hover:border-primary hover:shadow-md">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                      <FileText className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <CardTitle className="text-center">Matnli darsliklar</CardTitle>
                  <CardDescription className="text-center">Batafsil tushuntirishlar bilan</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground text-center">
                    Har bir mavzu bo&apos;yicha batafsil matnli darsliklar, misollar va mashqlar bilan.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    Ko&apos;rish
                  </Button>
                </CardFooter>
              </Card>
            </Link>

            <Link href="/lessons/video" className="block">
              <Card className="h-full transition-all hover:border-primary hover:shadow-md">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                      <Video className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <CardTitle className="text-center">Video darsliklar</CardTitle>
                  <CardDescription className="text-center">Ko&apos;rgazmali tushuntirishlar</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground text-center">
                    Mavzularni tushunishni osonlashtiruvchi video darsliklar to&apos;plami.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    Ko&apos;rish
                  </Button>
                </CardFooter>
              </Card>
            </Link>

            <Link href="/tests" className="block">
              <Card className="h-full transition-all hover:border-primary hover:shadow-md">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                      <CheckSquare className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <CardTitle className="text-center">Testlar</CardTitle>
                  <CardDescription className="text-center">Bilimlarni tekshirish</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground text-center">
                    Har bir mavzu bo&apos;yicha testlar va umumiy bilimlarni tekshirish uchun testlar.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    Testlarni boshlash
                  </Button>
                </CardFooter>
              </Card>
            </Link>
          </div>
        </section>

        <TestimonialsSection />
      </div>
    </div>
  )
}
