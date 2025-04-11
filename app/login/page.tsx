"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Checkbox } from "@/components/ui/checkbox"
import { ArrowLeft, User, Lock, Mail } from "lucide-react"

export default function LoginPage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  })
  const [registerData, setRegisterData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreeTerms: false,
  })
  const [error, setError] = useState("")
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    // Check if user is already logged in
    const user = localStorage.getItem("user")
    if (user) {
      setIsLoggedIn(true)
    }
  }, [])

  const handleLoginChange = (field: string, value: any) => {
    setLoginData({
      ...loginData,
      [field]: value,
    })
    setError("")
  }

  const handleRegisterChange = (field: string, value: any) => {
    setRegisterData({
      ...registerData,
      [field]: value,
    })
    setError("")
  }

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    // Simple validation
    if (!loginData.email || !loginData.password) {
      setError("Barcha maydonlarni to'ldiring")
      setIsLoading(false)
      return
    }

    // Simulate API call
    setTimeout(() => {
      // Save to localStorage
      const userData = {
        email: loginData.email,
        name: loginData.email.split("@")[0], // Use part of email as name
        isLoggedIn: true,
        role: "student",
        lastLogin: new Date().toISOString(),
      }

      localStorage.setItem("user", JSON.stringify(userData))

      if (loginData.rememberMe) {
        localStorage.setItem("rememberMe", "true")
      } else {
        localStorage.removeItem("rememberMe")
      }

      setIsLoading(false)
      router.push("/profile")
    }, 1000)
  }

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    // Simple validation
    if (!registerData.name || !registerData.email || !registerData.password || !registerData.confirmPassword) {
      setError("Barcha maydonlarni to'ldiring")
      setIsLoading(false)
      return
    }

    if (registerData.password !== registerData.confirmPassword) {
      setError("Parollar mos kelmadi")
      setIsLoading(false)
      return
    }

    if (!registerData.agreeTerms) {
      setError("Foydalanish shartlarini qabul qilishingiz kerak")
      setIsLoading(false)
      return
    }

    // Simulate API call
    setTimeout(() => {
      // Save to localStorage
      const userData = {
        email: registerData.email,
        name: registerData.name,
        isLoggedIn: true,
        role: "student",
        registeredAt: new Date().toISOString(),
        lastLogin: new Date().toISOString(),
      }

      localStorage.setItem("user", JSON.stringify(userData))

      setIsLoading(false)
      router.push("/profile")
    }, 1000)
  }

  const handleLogout = () => {
    localStorage.removeItem("user")
    setIsLoggedIn(false)
  }

  if (isLoggedIn) {
    return (
      <div className="container mx-auto px-4 py-8 flex items-center justify-center min-h-[60vh]">
        <Card className="w-full max-w-md border-blue-100">
          <CardHeader className="text-center bg-gradient-to-r from-blue-50 to-purple-50">
            <CardTitle className="text-2xl text-blue-700">Siz tizimga kirgansiz</CardTitle>
            <CardDescription>Siz allaqachon tizimga kirgansiz</CardDescription>
          </CardHeader>
          <CardContent className="pt-6 flex flex-col items-center">
            <User className="h-16 w-16 text-blue-500 mb-4" />
            <p className="mb-6 text-center">
              Profilingizga o'tish yoki tizimdan chiqish uchun quyidagi tugmalardan foydalaning
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full">
              <Button className="flex-1 bg-blue-600 hover:bg-blue-700" onClick={() => router.push("/profile")}>
                Profilga o'tish
              </Button>
              <Button variant="outline" className="flex-1 border-blue-200 text-blue-700" onClick={handleLogout}>
                Tizimdan chiqish
              </Button>
            </div>
          </CardContent>
          <CardFooter className="flex justify-center">
            <Link href="/" className="text-blue-600 hover:underline text-sm">
              Bosh sahifaga qaytish
            </Link>
          </CardFooter>
        </Card>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <Link href="/" className="text-primary hover:underline flex items-center gap-1">
          <ArrowLeft className="h-4 w-4" />
          <span>Bosh sahifaga qaytish</span>
        </Link>
      </div>

      <div className="flex justify-center">
        <Card className="w-full max-w-md border-blue-100">
          <CardHeader className="text-center bg-gradient-to-r from-blue-50 to-purple-50">
            <CardTitle className="text-2xl text-blue-700">Tizimga kirish</CardTitle>
            <CardDescription>
              Elektron darslikdan foydalanish uchun tizimga kiring yoki ro'yxatdan o'ting
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <Tabs defaultValue="login" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="login">Kirish</TabsTrigger>
                <TabsTrigger value="register">Ro'yxatdan o'tish</TabsTrigger>
              </TabsList>

              <TabsContent value="login" className="mt-6">
                <form onSubmit={handleLogin}>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="email"
                          type="email"
                          placeholder="sizning@email.uz"
                          className="pl-10 border-blue-200 focus-visible:ring-blue-500"
                          value={loginData.email}
                          onChange={(e) => handleLoginChange("email", e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <Label htmlFor="password">Parol</Label>
                        <Link href="#" className="text-sm text-blue-600 hover:underline">
                          Parolni unutdingizmi?
                        </Link>
                      </div>
                      <div className="relative">
                        <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="password"
                          type="password"
                          placeholder="••••••••"
                          className="pl-10 border-blue-200 focus-visible:ring-blue-500"
                          value={loginData.password}
                          onChange={(e) => handleLoginChange("password", e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="remember"
                        checked={loginData.rememberMe}
                        onCheckedChange={(checked) => handleLoginChange("rememberMe", checked)}
                      />
                      <label
                        htmlFor="remember"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Meni eslab qolish
                      </label>
                    </div>

                    {error && (
                      <div className="p-3 text-sm bg-red-50 border border-red-200 text-red-600 rounded-md">{error}</div>
                    )}

                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600"
                      disabled={isLoading}
                    >
                      {isLoading ? "Yuklanmoqda..." : "Kirish"}
                    </Button>
                  </div>
                </form>
              </TabsContent>

              <TabsContent value="register" className="mt-6">
                <form onSubmit={handleRegister}>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Ism-familiya</Label>
                      <div className="relative">
                        <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="name"
                          placeholder="Ism Familiya"
                          className="pl-10 border-blue-200 focus-visible:ring-blue-500"
                          value={registerData.name}
                          onChange={(e) => handleRegisterChange("name", e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="register-email">Email</Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="register-email"
                          type="email"
                          placeholder="sizning@email.uz"
                          className="pl-10 border-blue-200 focus-visible:ring-blue-500"
                          value={registerData.email}
                          onChange={(e) => handleRegisterChange("email", e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="register-password">Parol</Label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="register-password"
                          type="password"
                          placeholder="••••••••"
                          className="pl-10 border-blue-200 focus-visible:ring-blue-500"
                          value={registerData.password}
                          onChange={(e) => handleRegisterChange("password", e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="confirm-password">Parolni tasdiqlang</Label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="confirm-password"
                          type="password"
                          placeholder="••••••••"
                          className="pl-10 border-blue-200 focus-visible:ring-blue-500"
                          value={registerData.confirmPassword}
                          onChange={(e) => handleRegisterChange("confirmPassword", e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="terms"
                        checked={registerData.agreeTerms}
                        onCheckedChange={(checked) => handleRegisterChange("agreeTerms", checked)}
                      />
                      <label
                        htmlFor="terms"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        <span>Men </span>
                        <Link href="#" className="text-blue-600 hover:underline">
                          foydalanish shartlari
                        </Link>
                        <span> bilan tanishdim va roziman</span>
                      </label>
                    </div>

                    {error && (
                      <div className="p-3 text-sm bg-red-50 border border-red-200 text-red-600 rounded-md">{error}</div>
                    )}

                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-700 hover:to-purple-600"
                      disabled={isLoading}
                    >
                      {isLoading ? "Yuklanmoqda..." : "Ro'yxatdan o'tish"}
                    </Button>
                  </div>
                </form>
              </TabsContent>
            </Tabs>
          </CardContent>
          <CardFooter className="flex justify-center">
            <p className="text-sm text-muted-foreground">
              Elektron darslikdan foydalanish uchun tizimga kirish tavsiya etiladi
            </p>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
