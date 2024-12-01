'use client'

import React, { useContext, useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { AuthContext } from '@/contexts/AuthContext'

export default function VerifyEmail() {
  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');
  const authContext = useContext(AuthContext);
  if (!authContext) {
    throw new Error('AuthContext must be used within an AuthProvider');
  }
  const { verifyCode } = authContext;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await verifyCode({ email, code });
      console.log('Verification successful');
    } catch (error) {
      console.error('Failed to verify code', error);
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center">
      <Card className="w-full max-w-md text-white">
        <CardHeader className="space-y-1">


          <CardTitle className="text-2xl font-bold">Verificação de Email</CardTitle>
          <CardDescription>
            Insira seu email e o código de verificação enviado para você
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
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
        </CardContent>
      </Card>
    </main >

  );
}