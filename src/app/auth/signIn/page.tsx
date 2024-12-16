'use client'
import React, { useContext, useState } from 'react'
import { Eye, EyeOff, Github, User } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { AuthContext } from '@/contexts/AuthContext'


const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const authContext = useContext(AuthContext);

  if (!authContext) {
    throw new Error('AuthContext deve ser usado dentro de um AuthProvider');
  }

  const { signIn } = authContext;


  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault();

    if (typeof window !== 'undefined') {
      await signIn({ email, password });
    }
  };

  const handleGoogleLogin = () => {
    // Handle Google login logic here
    console.log('Google login clicked')
  }

  const handleGithubLogin = () => {
    // Handle GitHub login logic here
    console.log('GitHub login clicked')
  }

  const handleGuestLogin = () => {
    // Handle guest login logic here
    console.log('Guest login clicked')
  }

  return (
    <main className="min-h-screen flex items-center justify-center">
      <Card className="w-full max-w-md text-white">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold">Login</CardTitle>
          <CardDescription>
            Entre com sua conta para acessar o sistema
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <form onSubmit={handleLogin} className="space-y-4">
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
              <Label htmlFor="password">Senha</Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2"
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4 text-gray-400" />
                  ) : (
                    <Eye className="h-4 w-4 text-gray-400" />
                  )}
                </button>
              </div>
            </div>
            <Button type="submit" className="w-full">
              Entrar
            </Button>
          </form>

          <Separator className="my-4" />
          
          <div className="space-y-2">
            <Button 
              variant="outline" 
              className="w-full" 
              onClick={handleGoogleLogin}
            >
              <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="currentColor"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="currentColor"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="currentColor"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              Entrar com Google
            </Button>
            <Button 
              variant="outline" 
              className="w-full" 
              onClick={handleGithubLogin}
            >
              <Github className="w-5 h-5 mr-2" />
              Entrar com GitHub
            </Button>
            <Button 
              variant="outline" 
              className="w-full" 
              onClick={handleGuestLogin}
            >
              <User className="w-5 h-5 mr-2" />
              Entrar como Convidado
            </Button>
          </div>
        </CardContent>
        <CardFooter className="flex justify-center">
          <p className="text-sm text-gray-400">
            Não tem uma conta?{' '}
            <a href="/signUp" className="text-[#FFDF90] hover:underline">
              Cadastre-se
            </a>
          </p>
        </CardFooter>
      </Card>
    </main>
  )
}

export default SignIn;