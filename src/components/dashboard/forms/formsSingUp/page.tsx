"use client"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { AuthContext } from "@/contexts/AuthContext"
import { Eye, EyeOff } from "lucide-react"
import { useContext, useState } from "react"

export function FormsSingUp() {
  const [showPassword, setShowPassword] = useState(false)
  const authContext = useContext(AuthContext)
  if (!authContext) {
    throw new Error("AuthContext must be used within an AuthProvider")
  }
  const { signUp } = authContext

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const password = formData.get("password") as string

    try {
      await signUp({ name, email, password })
      console.log("Sign up successful")
    } catch (error) {
      console.error("Failed to sign up", error)
    }
  }
  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="name">Nome completo</Label>
        <Input
          id="name"
          name="name"
          type="text"
          placeholder="Seu nome completo"
          required
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="seu@email.com"
          required
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="password">Senha</Label>
        <div className="relative">
          <Input
            id="password"
            name="password"
            type={showPassword ? "text" : "password"}
            placeholder="••••••••"
            required
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 transform"
          >
            {showPassword ? (
              <EyeOff className="h-4 w-4 text-gray-400" />
            ) : (
              <Eye className="h-4 w-4 text-gray-400" />
            )}
          </button>
        </div>
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox id="terms" required />
        <Label htmlFor="terms" className="text-sm">
          Eu concordo com os{" "}
          <a href="/terms" className="text-primary hover:underline">
            termos de serviço
          </a>{" "}
          e{" "}
          <a href="/privacy" className="text-primary hover:underline">
            política de privacidade
          </a>
        </Label>
      </div>
      <Button type="submit" className="w-full">
        Cadastrar
      </Button>
    </form>
  )
}
