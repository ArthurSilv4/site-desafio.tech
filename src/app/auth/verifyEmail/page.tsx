import React from "react"

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card"
import { FormsVerifyEmail } from "@/components/dashboard/forms/formsVerifyEmail/page"

export default function VerifyEmail() {
  return (
    <main className="flex min-h-screen items-center justify-center">
      <Card className="w-full max-w-md text-white">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold">
            Verificação de Email
          </CardTitle>
          <CardDescription>
            Insira seu email e o código de verificação enviado para você
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <FormsVerifyEmail />
        </CardContent>
      </Card>
    </main>
  )
}
