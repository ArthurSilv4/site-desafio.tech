'use client'

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { LogIn, Heart, MessageSquare, Menu, X } from "lucide-react"
import Link from "next/link"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-primary text-primary-foreground py-4">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M8 14s1.5 2 4 2 4-2 4-2" />
              <line x1="9" y1="9" x2="9.01" y2="9" />
              <line x1="15" y1="9" x2="15.01" y2="9" />
            </svg>
            <span className="font-bold text-lg">Desafio.Tech</span>
          </Link>

          <nav className="hidden md:flex space-x-4">
            <Link href="/saiba-mais" className="hover:underline">
              Página Inicial
            </Link>
            <Link href="/crie-seu-desafio" className="hover:underline">
              Crie seu Desafio
            </Link>
            <Link href="/crie-seu-desafio" className="hover:underline">
              Saiba mais
            </Link>
            <Link href="/crie-seu-desafio" className="hover:underline">
              Perguntas Frequentes
            </Link>
          </nav>

          <div className="hidden md:flex space-x-2">
            <Button variant="secondary" size="sm">
              <MessageSquare className="mr-2 h-4 w-4" />
              Feedback
            </Button>
            <Button variant="secondary" size="sm">
              <Heart className="mr-2 h-4 w-4" />
              Apoie
            </Button>
            <Button variant="secondary" size="sm">
              <LogIn className="mr-2 h-4 w-4" />
              Login
            </Button>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {isMenuOpen && (
          <div className="mt-4 md:hidden">
            <nav className="flex flex-col space-y-2">
              <Link href="/saiba-mais" className="hover:underline">
                Página Inicial
              </Link>
              <Link href="/crie-seu-desafio" className="hover:underline">
                Crie seu Desafio
              </Link>
              <Link href="/crie-seu-desafio" className="hover:underline">
                Saiba mais
              </Link>
              <Link href="/crie-seu-desafio" className="hover:underline">
                Perguntas Frequentes
              </Link>
            </nav>
            <div className="mt-4 flex flex-col space-y-2">
              <Button variant="secondary" size="sm">
                <MessageSquare className="mr-2 h-4 w-4" />
                Feedback
              </Button>
              <Button variant="secondary" size="sm">
                <Heart className="mr-2 h-4 w-4" />
                Apoie
              </Button>
              <Button variant="secondary" size="sm">
                <LogIn className="mr-2 h-4 w-4" />
                Login
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}