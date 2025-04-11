import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, Video, CheckSquare, BarChart, Users, Award } from "lucide-react"

export default function FeaturesSection() {
  return (
    <section className="mb-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
          Elektron darslikning afzalliklari
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Zamonaviy texnologiyalar yordamida matematikani o&apos;rganishning eng samarali usuli
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="border-blue-100 hover:shadow-md hover:shadow-blue-100/50 transition-all">
          <CardHeader>
            <BookOpen className="h-8 w-8 text-blue-500 mb-2" />
            <CardTitle className="text-blue-700">Batafsil matnli darsliklar</CardTitle>
            <CardDescription>Har bir mavzu bo&apos;yicha tushunarli tushuntirishlar</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Barcha mavzular bo&apos;yicha batafsil matnli darsliklar, misollar va yechimlar bilan. Har bir tushuncha
              aniq va tushunarli tarzda tushuntirilgan.
            </p>
          </CardContent>
        </Card>

        <Card className="border-purple-100 hover:shadow-md hover:shadow-purple-100/50 transition-all">
          <CardHeader>
            <Video className="h-8 w-8 text-purple-500 mb-2" />
            <CardTitle className="text-purple-700">Video darsliklar</CardTitle>
            <CardDescription>Ko&apos;rgazmali tushuntirishlar bilan</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Har bir mavzu bo&apos;yicha video darsliklar, murakkab tushunchalarni oson tushunish imkonini beradi.
              Qadam-baqadam tushuntirishlar bilan.
            </p>
          </CardContent>
        </Card>

        <Card className="border-teal-100 hover:shadow-md hover:shadow-teal-100/50 transition-all">
          <CardHeader>
            <CheckSquare className="h-8 w-8 text-teal-500 mb-2" />
            <CardTitle className="text-teal-700">Interaktiv mashqlar va testlar</CardTitle>
            <CardDescription>Bilimlarni mustahkamlash va tekshirish</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Har bir mavzu bo&apos;yicha interaktiv mashqlar va testlar. Natijalarni darhol ko&apos;rish va xatolarni
              tuzatish imkoniyati.
            </p>
          </CardContent>
        </Card>

        <Card className="border-amber-100 hover:shadow-md hover:shadow-amber-100/50 transition-all">
          <CardHeader>
            <BarChart className="h-8 w-8 text-amber-500 mb-2" />
            <CardTitle className="text-amber-700">Progress kuzatuvi</CardTitle>
            <CardDescription>O&apos;quv jarayonini nazorat qilish</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Har bir o&apos;quvchi o&apos;z progressini kuzatib borishi, kuchli va zaif tomonlarini aniqlashi mumkin.
              Bu o&apos;quv jarayonini samaraliroq qiladi.
            </p>
          </CardContent>
        </Card>

        <Card className="border-green-100 hover:shadow-md hover:shadow-green-100/50 transition-all">
          <CardHeader>
            <Users className="h-8 w-8 text-green-500 mb-2" />
            <CardTitle className="text-green-700">O&apos;qituvchilar uchun imkoniyatlar</CardTitle>
            <CardDescription>O&apos;quvchilar progressini kuzatish</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              O&apos;qituvchilar o&apos;quvchilarning progressini kuzatib borishi, qo&apos;shimcha mashqlar va testlar
              yaratishi mumkin.
            </p>
          </CardContent>
        </Card>

        <Card className="border-rose-100 hover:shadow-md hover:shadow-rose-100/50 transition-all">
          <CardHeader>
            <Award className="h-8 w-8 text-rose-500 mb-2" />
            <CardTitle className="text-rose-700">Yutuqlar tizimi</CardTitle>
            <CardDescription>Motivatsiyani oshirish</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              O&apos;quvchilar yutuqlarni qo&apos;lga kiritishi va o&apos;z bilimlarini oshirishi uchun
              rag&apos;batlantiriladi. Bu o&apos;rganish jarayonini qiziqarli qiladi.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
