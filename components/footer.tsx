import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin, ArrowRight } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-r from-blue-50 to-purple-50 border-t border-blue-100 pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-2xl font-bold gradient-heading">Matematika</span>
            </Link>
            <p className="text-muted-foreground">
              5-sinf o'quvchilari uchun zamonaviy interaktiv elektron darslik. Matematikani qiziqarli va oson o'rganing!
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-blue-500 hover:text-blue-700 transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-blue-500 hover:text-blue-700 transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-blue-500 hover:text-blue-700 transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-blue-500 hover:text-blue-700 transition-colors">
                <Youtube className="h-5 w-5" />
                <span className="sr-only">Youtube</span>
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold text-blue-700 font-montserrat">Asosiy bo'limlar</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/topics/natural-numbers"
                  className="text-muted-foreground hover:text-blue-600 transition-colors"
                >
                  Natural sonlar
                </Link>
              </li>
              <li>
                <Link href="/topics/fractions" className="text-muted-foreground hover:text-blue-600 transition-colors">
                  Kasrlar
                </Link>
              </li>
              <li>
                <Link href="/topics/geometry" className="text-muted-foreground hover:text-blue-600 transition-colors">
                  Geometriya
                </Link>
              </li>
              <li>
                <Link
                  href="/topics/measurements"
                  className="text-muted-foreground hover:text-blue-600 transition-colors"
                >
                  O'lchov birliklari
                </Link>
              </li>
              <li>
                <Link href="/topics/logic" className="text-muted-foreground hover:text-blue-600 transition-colors">
                  Matematik mantiq
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold text-blue-700 font-montserrat">Foydali havolalar</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/lessons/text" className="text-muted-foreground hover:text-blue-600 transition-colors">
                  Matnli darsliklar
                </Link>
              </li>
              <li>
                <Link href="/lessons/video" className="text-muted-foreground hover:text-blue-600 transition-colors">
                  Video darsliklar
                </Link>
              </li>
              <li>
                <Link href="/tests" className="text-muted-foreground hover:text-blue-600 transition-colors">
                  Testlar
                </Link>
              </li>
              <li>
                <Link href="/faqs" className="text-muted-foreground hover:text-blue-600 transition-colors">
                  Ko'p so'raladigan savollar
                </Link>
              </li>
              <li>
                <Link href="/profile" className="text-muted-foreground hover:text-blue-600 transition-colors">
                  Profil
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold text-blue-700 font-montserrat">Bog'lanish</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-blue-600 mr-2 mt-0.5 shrink-0" />
                <span className="text-muted-foreground">Toshkent sh., Universitet ko'chasi, 4-uy</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-blue-600 mr-2 shrink-0" />
                <span className="text-muted-foreground">+998 71 123-45-67</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-blue-600 mr-2 shrink-0" />
                <span className="text-muted-foreground">info@matematika.uz</span>
              </li>
            </ul>

            <div className="pt-2">
              <h4 className="text-sm font-medium mb-2">Yangiliklarga obuna bo'ling</h4>
              <div className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Email manzilingiz"
                  className="border-blue-200 focus-visible:ring-blue-500"
                />
                <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-6 bg-blue-100" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground text-center md:text-left">
            &copy; {currentYear} Matematika - 5-sinf. Barcha huquqlar himoyalangan.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-sm text-muted-foreground hover:text-blue-600 transition-colors">
              Maxfiylik siyosati
            </Link>
            <Link href="/terms" className="text-sm text-muted-foreground hover:text-blue-600 transition-colors">
              Foydalanish shartlari
            </Link>
            <Link href="/contact" className="text-sm text-muted-foreground hover:text-blue-600 transition-colors">
              Bog'lanish
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
