"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import {
  BookOpen,
  Home,
  Calculator,
  Shapes,
  Ruler,
  Brain,
  Menu,
  User,
  LogIn,
  FileText,
  Video,
  CheckSquare,
  LogOut,
} from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function Navbar() {
  const pathname = usePathname()
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)
  const [userData, setUserData] = useState<any>(null)

  useEffect(() => {
    // Check if user is logged in
    const storedUser = localStorage.getItem("user")
    if (storedUser) {
      setUserData(JSON.parse(storedUser))
    }
  }, [])

  const isActive = (path: string) => {
    return pathname === path || pathname.startsWith(`${path}/`)
  }

  const handleLogout = () => {
    localStorage.removeItem("user")
    setUserData(null)
    router.push("/")
  }

  const navItems = [
    { path: "/", label: "Bosh sahifa", icon: <Home className="h-4 w-4" /> },
    { path: "/topics/natural-numbers", label: "Natural sonlar", icon: <BookOpen className="h-4 w-4" /> },
    { path: "/topics/fractions", label: "Kasrlar", icon: <Calculator className="h-4 w-4" /> },
    { path: "/topics/geometry", label: "Geometriya", icon: <Shapes className="h-4 w-4" /> },
    { path: "/topics/measurements", label: "O'lchov birliklari", icon: <Ruler className="h-4 w-4" /> },
    { path: "/topics/logic", label: "Mantiq masalalari", icon: <Brain className="h-4 w-4" /> },
    { path: "/lessons/text", label: "Matnli darsliklar", icon: <FileText className="h-4 w-4" /> },
    { path: "/lessons/video", label: "Video darsliklar", icon: <Video className="h-4 w-4" /> },
    { path: "/tests", label: "Testlar", icon: <CheckSquare className="h-4 w-4" /> },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-blue-100 dark:border-blue-900">
      <div className="container flex h-14 items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="font-bold text-xl gradient-heading">Matematika</span>
          </Link>

          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.slice(0, 6).map((item) => (
              <Link key={item.path} href={item.path} passHref>
                <Button
                  variant={isActive(item.path) ? "default" : "ghost"}
                  className={`gap-2 font-poppins ${isActive(item.path) ? "bg-blue-600 hover:bg-blue-700" : "hover:bg-blue-50 hover:text-blue-700 dark:hover:bg-blue-900"}`}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </Button>
              </Link>
            ))}

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="gap-2 hover:bg-blue-50 hover:text-blue-700 dark:hover:bg-blue-900 font-poppins"
                >
                  <FileText className="h-4 w-4" />
                  <span>Darsliklar</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <Link href="/lessons/text">
                  <DropdownMenuItem className="cursor-pointer font-poppins">
                    <FileText className="mr-2 h-4 w-4" />
                    <span>Matnli darsliklar</span>
                  </DropdownMenuItem>
                </Link>
                <Link href="/lessons/video">
                  <DropdownMenuItem className="cursor-pointer font-poppins">
                    <Video className="mr-2 h-4 w-4" />
                    <span>Video darsliklar</span>
                  </DropdownMenuItem>
                </Link>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link href="/tests" passHref>
              <Button
                variant={isActive("/tests") ? "default" : "ghost"}
                className={`gap-2 font-poppins ${isActive("/tests") ? "bg-blue-600 hover:bg-blue-700" : "hover:bg-blue-50 hover:text-blue-700 dark:hover:bg-blue-900"}`}
              >
                <CheckSquare className="h-4 w-4" />
                <span>Testlar</span>
              </Button>
            </Link>
          </nav>
        </div>

        <div className="flex items-center gap-2">
          <ModeToggle />

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              {userData ? (
                <Button variant="ghost" size="icon" className="rounded-full h-9 w-9 relative">
                  <Avatar className="h-9 w-9 border-2 border-blue-200">
                    <AvatarImage src="/placeholder.svg?height=36&width=36" alt="Avatar" />
                    <AvatarFallback className="bg-blue-100 text-blue-700 font-poppins">
                      {userData.name
                        .split(" ")
                        .map((n: string) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                </Button>
              ) : (
                <Button variant="outline" size="icon" className="border-blue-200">
                  <User className="h-[1.2rem] w-[1.2rem] text-blue-600" />
                  <span className="sr-only">User menu</span>
                </Button>
              )}
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {userData ? (
                <>
                  <DropdownMenuLabel className="font-poppins">
                    <div className="flex flex-col">
                      <span>{userData.name}</span>
                      <span className="text-xs text-muted-foreground">{userData.email}</span>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <Link href="/profile">
                    <DropdownMenuItem className="cursor-pointer font-poppins">
                      <User className="mr-2 h-4 w-4" />
                      <span>Profil</span>
                    </DropdownMenuItem>
                  </Link>
                  <Link href="/progress">
                    <DropdownMenuItem className="cursor-pointer font-poppins">
                      <BookOpen className="mr-2 h-4 w-4" />
                      <span>O&apos;quv jarayoni</span>
                    </DropdownMenuItem>
                  </Link>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={handleLogout} className="cursor-pointer text-red-600 font-poppins">
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Chiqish</span>
                  </DropdownMenuItem>
                </>
              ) : (
                <>
                  <DropdownMenuLabel className="font-poppins">Mening profilim</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <Link href="/login">
                    <DropdownMenuItem className="cursor-pointer font-poppins">
                      <LogIn className="mr-2 h-4 w-4" />
                      <span>Kirish</span>
                    </DropdownMenuItem>
                  </Link>
                </>
              )}
            </DropdownMenuContent>
          </DropdownMenu>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="lg:hidden border-blue-200">
                <Menu className="h-[1.2rem] w-[1.2rem] text-blue-600" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <div className="flex flex-col gap-4 py-4">
                <Link href="/" className="flex items-center space-x-2" onClick={() => setIsOpen(false)}>
                  <span className="font-bold text-xl gradient-heading">Matematika</span>
                </Link>
                <nav className="flex flex-col space-y-2">
                  {navItems.map((item) => (
                    <Link key={item.path} href={item.path} passHref onClick={() => setIsOpen(false)}>
                      <Button
                        variant={isActive(item.path) ? "default" : "ghost"}
                        className={`justify-start gap-2 w-full font-poppins ${isActive(item.path) ? "bg-blue-600 hover:bg-blue-700" : "hover:bg-blue-50 hover:text-blue-700"}`}
                      >
                        {item.icon}
                        <span>{item.label}</span>
                      </Button>
                    </Link>
                  ))}

                  {userData ? (
                    <>
                      <Link href="/profile" onClick={() => setIsOpen(false)}>
                        <Button
                          variant="ghost"
                          className="justify-start gap-2 w-full hover:bg-blue-50 hover:text-blue-700 font-poppins"
                        >
                          <User className="h-4 w-4" />
                          <span>Profil</span>
                        </Button>
                      </Link>
                      <Link href="/progress" onClick={() => setIsOpen(false)}>
                        <Button
                          variant="ghost"
                          className="justify-start gap-2 w-full hover:bg-blue-50 hover:text-blue-700 font-poppins"
                        >
                          <BookOpen className="h-4 w-4" />
                          <span>O&apos;quv jarayoni</span>
                        </Button>
                      </Link>
                      <Button
                        variant="ghost"
                        className="justify-start gap-2 w-full text-red-600 hover:bg-red-50 font-poppins"
                        onClick={() => {
                          handleLogout()
                          setIsOpen(false)
                        }}
                      >
                        <LogOut className="h-4 w-4" />
                        <span>Chiqish</span>
                      </Button>
                    </>
                  ) : (
                    <Link href="/login" onClick={() => setIsOpen(false)}>
                      <Button
                        variant="ghost"
                        className="justify-start gap-2 w-full hover:bg-blue-50 hover:text-blue-700 font-poppins"
                      >
                        <LogIn className="h-4 w-4" />
                        <span>Kirish</span>
                      </Button>
                    </Link>
                  )}
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
