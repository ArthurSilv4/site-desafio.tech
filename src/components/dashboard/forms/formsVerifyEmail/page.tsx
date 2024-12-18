"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { AuthContext } from "@/contexts/AuthContext"
import { useContext, useState } from "react"

export function FormsVerifyEmail() {
  const [email, setEmail] = useState("")
  const [code, setCode] = useState("")
  const authContext = useContext(AuthContext)
  if (!authContext) {
    throw new Error("AuthContext must be used within an AuthProvider")
  }
  const { verifyCode } = authContext

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      await verifyCode({ email, code })
      console.log("Verification successful")
    } catch (error) {
      console.error("Failed to verify code", error)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="seu@email.com"
          required
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="code">Código de Verificação</Label>
        <Input
          id="code"
          type="text"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder="Código de verificação"
          required
        />
      </div>
      <Button type="submit" className="w-full">
        Verificar
      </Button>
    </form>
  )
}
