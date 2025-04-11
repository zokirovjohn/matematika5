import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      name: "Aziza Karimova",
      role: "5-sinf o'quvchisi",
      content:
        "Bu elektron darslik menga matematikani tushunishda juda yordam berdi. Video darsliklar va interaktiv mashqlar orqali mavzularni oson o'zlashtiryapman.",
      avatar: "AK",
    },
    {
      id: 2,
      name: "Bobur Rahimov",
      role: "Ota-ona",
      content:
        "Farzandim uchun ajoyib o'quv qo'llanma. Uyda ham foydalanish imkoniyati bor, va farzandimning progressini kuzatib borish mumkin.",
      avatar: "BR",
    },
    {
      id: 3,
      name: "Gulnora Azimova",
      role: "Matematika o'qituvchisi",
      content:
        "O'quvchilarim uchun tavsiya qilaman. Darsda o'tilgan mavzularni mustahkamlash uchun ajoyib resurs. Interaktiv mashqlar o'quvchilarning qiziqishini oshiradi.",
      avatar: "GA",
    },
  ]

  return (
    <section className="mb-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
          Foydalanuvchilar fikrlari
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Elektron darslikdan foydalanuvchilarning fikrlari
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((testimonial) => (
          <Card
            key={testimonial.id}
            className="border-blue-100 hover:shadow-md hover:shadow-blue-100/50 transition-all"
          >
            <CardContent className="pt-6">
              <div className="mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="text-amber-400 inline-block mr-1"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                ))}
              </div>
              <p className="text-muted-foreground italic">"{testimonial.content}"</p>
            </CardContent>
            <CardFooter className="border-t pt-4">
              <div className="flex items-center">
                <Avatar className="h-10 w-10 mr-3 bg-blue-100">
                  <AvatarImage
                    src={`/placeholder.svg?height=40&width=40&text=${testimonial.avatar}`}
                    alt={testimonial.name}
                  />
                  <AvatarFallback className="bg-blue-100 text-blue-700">{testimonial.avatar}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  )
}
