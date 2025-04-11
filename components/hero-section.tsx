import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/10 z-0"></div>
      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-heading leading-tight">
            5-sinf Matematika Multimedia Elektron Darsligi
          </h1>
          <p className="text-xl mb-8 text-muted-foreground font-nunito">
            Interaktiv o&apos;quv materiallari, video darsliklar va mashqlar bilan matematikani qiziqarli va oson
            o&apos;rganing!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/topics/natural-numbers">
              <Button size="lg" className="w-full sm:w-auto gradient-button hover-lift">
                Darslarni boshlash
              </Button>
            </Link>
            <Link href="/tests">
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-blue-500 text-blue-600 hover:bg-blue-50 font-poppins hover-lift"
              >
                Bilimlarni tekshirish
              </Button>
            </Link>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-sm border border-blue-100 card-hover">
            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-blue-600"
              >
                <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                <path d="m9 12 2 2 4-4"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-blue-700 font-montserrat">Interaktiv o&apos;rganish</h3>
            <p className="text-muted-foreground">
              Interaktiv mashqlar va vizualizatsiyalar orqali matematikani oson o&apos;zlashtirishingiz mumkin.
            </p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-sm border border-purple-100 card-hover">
            <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-purple-600"
              >
                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-purple-700 font-montserrat">Matnli va video darsliklar</h3>
            <p className="text-muted-foreground">
              Har bir mavzu bo&apos;yicha batafsil matnli va video darsliklar bilan o&apos;rganish imkoniyati.
            </p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-sm border border-teal-100 card-hover">
            <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-teal-600"
              >
                <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                <path d="M12 8v4l3 3"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-teal-700 font-montserrat">
              O&apos;z sur&apos;atingizda o&apos;rganish
            </h3>
            <p className="text-muted-foreground">
              Har bir o&apos;quvchi o&apos;z sur&apos;atida va o&apos;ziga qulay vaqtda o&apos;rganishi mumkin.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
