"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ArrowLeft, Search, Plus, Minus, BookOpen, Calculator, Shapes, Brain, User, Video } from "lucide-react"

export default function FAQsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [openQuestions, setOpenQuestions] = useState<number[]>([0, 1]) // Default open first two questions

  const toggleQuestion = (index: number) => {
    if (openQuestions.includes(index)) {
      setOpenQuestions(openQuestions.filter((i) => i !== index))
    } else {
      setOpenQuestions([...openQuestions, index])
    }
  }

  const faqCategories = [
    {
      title: "Umumiy savollar",
      icon: <BookOpen className="h-5 w-5 text-blue-600" />,
      questions: [
        {
          question: "Elektron darslik qanday ishlaydi?",
          answer:
            "Elektron darslik interaktiv o'quv materiallari, video darsliklar va mashqlardan iborat. Siz mavzularni o'z sur'atingizda o'rganishingiz, testlarni yechishingiz va o'z bilimlaringizni tekshirishingiz mumkin. Darslik onlayn ishlaydi va barcha qurilmalarda (kompyuter, planshet, telefon) foydalanish mumkin.",
        },
        {
          question: "Elektron darslikdan foydalanish uchun ro'yxatdan o'tish kerakmi?",
          answer:
            "Elektron darslikdan asosiy materiallarni ko'rish uchun ro'yxatdan o'tish shart emas. Ammo, o'quv jarayoningizni saqlash, testlar natijalarini ko'rish va shaxsiy profilingizni yaratish uchun ro'yxatdan o'tish tavsiya etiladi. Ro'yxatdan o'tish bepul va oson.",
        },
        {
          question: "Elektron darslik qaysi sinf o'quvchilari uchun mo'ljallangan?",
          answer:
            "Ushbu elektron darslik 5-sinf o'quvchilari uchun mo'ljallangan va 5-sinf matematika dasturiga to'liq mos keladi. Darslikda natural sonlar, kasrlar, geometriya, o'lchov birliklari va matematik mantiq mavzulari qamrab olingan.",
        },
      ],
    },
    {
      title: "Mavzular bo'yicha savollar",
      icon: <Calculator className="h-5 w-5 text-purple-600" />,
      questions: [
        {
          question: "Qaysi mavzular elektron darslikda qamrab olingan?",
          answer:
            "Elektron darslikda quyidagi asosiy mavzular qamrab olingan: Natural sonlar, Kasrlar va o'nli kasrlar, Geometrik shakllar, O'lchov birliklari, Matematik mantiq. Har bir mavzu nazariy ma'lumotlar, misollar, interaktiv mashqlar va testlarni o'z ichiga oladi.",
        },
        {
          question: "Mavzularni qanday tartibda o'rganish kerak?",
          answer:
            "Mavzularni darslikda taqdim etilgan tartibda o'rganish tavsiya etiladi: avval Natural sonlar, keyin Kasrlar, so'ngra Geometriya va hokazo. Ammo, siz o'zingizga qulay tartibda ham o'rganishingiz mumkin. Har bir mavzu mustaqil o'rganish uchun yetarli ma'lumotlarni o'z ichiga oladi.",
        },
        {
          question: "Agar mavzuni tushunmasam nima qilishim kerak?",
          answer:
            "Agar biror mavzuni tushunmasangiz, avval video darsliklarni ko'rishingiz mumkin. Video darsliklarda mavzular batafsil va ko'rgazmali tushuntirilgan. Shuningdek, har bir mavzu bo'yicha misollar va yechimlar ham berilgan. Agar shunda ham qiyinchilik bo'lsa, o'qituvchingizdan yordam so'rashingiz mumkin.",
        },
      ],
    },
    {
      title: "Testlar va mashqlar",
      icon: <Brain className="h-5 w-5 text-teal-600" />,
      questions: [
        {
          question: "Testlarni necha marta yechish mumkin?",
          answer:
            "Testlarni cheksiz marta yechishingiz mumkin. Har bir urinishda savollar tartibi va ba'zi hollarda savollar o'zgarishi mumkin. Bu sizga mavzuni to'liq o'zlashtirishga yordam beradi.",
        },
        {
          question: "Test natijalarini qanday ko'rish mumkin?",
          answer:
            "Test natijalarini test yakunida ko'rishingiz mumkin. Agar ro'yxatdan o'tgan bo'lsangiz, barcha test natijalaringiz profilingizda saqlanadi va siz ularni istalgan vaqtda ko'rishingiz mumkin. Natijalar foiz ko'rinishida va to'g'ri javoblar soni ko'rinishida ko'rsatiladi.",
        },
        {
          question: "Mashqlarni bajarish uchun qo'shimcha dasturlar kerakmi?",
          answer:
            "Yo'q, barcha mashqlar va testlar elektron darslikning o'zida bajariladi. Qo'shimcha dasturlar yoki ilovalar o'rnatish talab etilmaydi. Faqat internet aloqasi va brauzer bo'lishi kifoya.",
        },
      ],
    },
    {
      title: "Texnik savollar",
      icon: <Shapes className="h-5 w-5 text-amber-600" />,
      questions: [
        {
          question: "Elektron darslik qaysi qurilmalarda ishlaydi?",
          answer:
            "Elektron darslik barcha zamonaviy qurilmalarda ishlaydi: kompyuter (Windows, Mac, Linux), planshet va smartfonlar (Android, iOS). Faqat zamonaviy brauzer (Chrome, Firefox, Safari, Edge) va internet aloqasi bo'lishi kifoya.",
        },
        {
          question: "Internet aloqasi bo'lmaganda ham foydalanish mumkinmi?",
          answer:
            "Elektron darslik asosan onlayn ishlaydi va internet aloqasi talab etiladi. Ammo, ba'zi materiallarni yuklab olish va oflayn foydalanish imkoniyati ham mavjud. Buning uchun sahifadagi 'Yuklab olish' tugmasini bosing.",
        },
        {
          question: "Elektron darslikda xatolik yoki muammo bo'lsa kimga murojaat qilish kerak?",
          answer:
            "Agar elektron darslikda xatolik yoki muammo bo'lsa, sahifaning pastki qismidagi 'Bog'lanish' bo'limiga o'ting va muammo haqida xabar bering. Shuningdek, info@matematika.uz elektron pochta manziliga ham murojaat qilishingiz mumkin.",
        },
      ],
    },
    {
      title: "Profil va ro'yxatdan o'tish",
      icon: <User className="h-5 w-5 text-rose-600" />,
      questions: [
        {
          question: "Qanday ro'yxatdan o'tish mumkin?",
          answer:
            "Ro'yxatdan o'tish uchun saytning yuqori qismidagi 'Kirish' tugmasini bosing va 'Ro'yxatdan o'tish' bo'limini tanlang. Kerakli ma'lumotlarni (ism, elektron pochta, parol) kiriting va ro'yxatdan o'ting. Ro'yxatdan o'tish bepul va bir necha daqiqa vaqt oladi.",
        },
        {
          question: "Parolni unutsam nima qilishim kerak?",
          answer:
            "Agar parolingizni unutgan bo'lsangiz, 'Kirish' sahifasidagi 'Parolni unutdingizmi?' havolasini bosing. Elektron pochta manzilingizni kiriting va parolni tiklash uchun ko'rsatmalar yuboriladi.",
        },
        {
          question: "Profilimni qanday o'zgartirish mumkin?",
          answer:
            "Profilingizni o'zgartirish uchun tizimga kiring va yuqori o'ng burchakdagi profil ikonkasini bosing. 'Profil' bo'limini tanlang va kerakli o'zgartirishlarni kiriting. O'zgartirishlarni saqlash uchun 'Saqlash' tugmasini bosing.",
        },
      ],
    },
    {
      title: "Video darsliklar",
      icon: <Video className="h-5 w-5 text-green-600" />,
      questions: [
        {
          question: "Video darsliklarni yuklab olish mumkinmi?",
          answer:
            "Ha, video darsliklarni yuklab olish mumkin. Har bir video darslik sahifasida 'Yuklab olish' tugmasi mavjud. Bu tugmani bosib, videoni kompyuteringizga yoki qurilmangizga yuklab olishingiz va oflayn ko'rishingiz mumkin.",
        },
        {
          question: "Video darsliklar qaysi tilda?",
          answer:
            "Barcha video darsliklar o'zbek tilida. Ayrim video darsliklarda rus va ingliz tilidagi subtitrlar ham mavjud. Subtitrlarni yoqish uchun video pleyerdagi 'Subtitrlar' tugmasini bosing.",
        },
        {
          question: "Video darsliklarni ko'rish uchun qanday talablar mavjud?",
          answer:
            "Video darsliklarni ko'rish uchun zamonaviy brauzer va internet aloqasi bo'lishi kifoya. Videolar HD sifatida taqdim etilgan, shuning uchun yaxshi internet tezligi tavsiya etiladi. Agar internet tezligi past bo'lsa, video sifatini pasaytirish imkoniyati ham mavjud.",
        },
      ],
    },
  ]

  // Filter questions based on search query
  const filteredCategories = searchQuery
    ? faqCategories
        .map((category) => ({
          ...category,
          questions: category.questions.filter(
            (q) =>
              q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
              q.answer.toLowerCase().includes(searchQuery.toLowerCase()),
          ),
        }))
        .filter((category) => category.questions.length > 0)
    : faqCategories

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <Link href="/" className="text-primary hover:underline flex items-center gap-1">
          <ArrowLeft className="h-4 w-4" />
          <span>Bosh sahifaga qaytish</span>
        </Link>
      </div>

      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
          Ko'p so'raladigan savollar
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Elektron darslik haqida eng ko'p so'raladigan savollarga javoblar
        </p>
      </div>

      <div className="max-w-3xl mx-auto mb-12">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
          <Input
            type="text"
            placeholder="Savollarni qidirish..."
            className="pl-10 border-blue-200 focus-visible:ring-blue-500"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      <div className="max-w-3xl mx-auto space-y-8">
        {filteredCategories.length > 0 ? (
          filteredCategories.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              {category.questions.length > 0 && (
                <>
                  <div className="flex items-center gap-2 mb-4">
                    {category.icon}
                    <h2 className="text-2xl font-bold text-blue-700">{category.title}</h2>
                  </div>

                  <div className="space-y-4">
                    {category.questions.map((faq, questionIndex) => {
                      const globalIndex = categoryIndex * 100 + questionIndex
                      const isOpen = openQuestions.includes(globalIndex)

                      return (
                        <Card
                          key={questionIndex}
                          className={`border-blue-100 transition-all ${
                            isOpen ? "shadow-md shadow-blue-100/50" : "hover:border-blue-200"
                          }`}
                        >
                          <button
                            className="w-full text-left px-6 py-4 flex items-center justify-between"
                            onClick={() => toggleQuestion(globalIndex)}
                          >
                            <h3 className="font-semibold text-lg">{faq.question}</h3>
                            {isOpen ? (
                              <Minus className="h-5 w-5 text-blue-600 shrink-0" />
                            ) : (
                              <Plus className="h-5 w-5 text-blue-600 shrink-0" />
                            )}
                          </button>
                          {isOpen && (
                            <CardContent className="pt-0 pb-4">
                              <p className="text-muted-foreground">{faq.answer}</p>
                            </CardContent>
                          )}
                        </Card>
                      )
                    })}
                  </div>
                </>
              )}
            </div>
          ))
        ) : (
          <Card className="border-blue-100">
            <CardHeader>
              <CardTitle className="text-center">Hech qanday natija topilmadi</CardTitle>
              <CardDescription className="text-center">
                Qidiruv so'rovingizga mos savollar topilmadi. Boshqa so'rov bilan qayta urinib ko'ring.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex justify-center">
              <Button onClick={() => setSearchQuery("")} className="bg-blue-600 hover:bg-blue-700">
                Barcha savollarni ko'rsatish
              </Button>
            </CardContent>
          </Card>
        )}
      </div>

      <div className="max-w-3xl mx-auto mt-12 text-center">
        <h3 className="text-xl font-semibold mb-4 text-blue-700">Savolingizga javob topa olmadingizmi?</h3>
        <p className="text-muted-foreground mb-6">Bizga savolingizni yuboring va biz tez orada javob beramiz</p>
        <Link href="/contact">
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
            Bog'lanish
          </Button>
        </Link>
      </div>
    </div>
  )
}
