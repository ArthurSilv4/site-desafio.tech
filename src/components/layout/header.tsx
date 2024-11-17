'use client'

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { LogIn, Heart, MessageSquare, Menu, X } from "lucide-react"
import Link from "next/link"
import { Logo } from "../logo/logo"
import Links from "../links/links"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-primary text-primary-foreground py-4">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          
          <Logo />

          <Links className="hidden md:flex space-x-4"/>

          <div className="hidden md:flex space-x-2">
            
            <Link href={""}>
              <Button variant="secondary" size="sm">
                <MessageSquare className="mr-2 h-4 w-4" />
                Feedback
              </Button>
            </Link>
            
            <Link href={''}>
              <Button variant="secondary" size="sm">
                <Heart className="mr-2 h-4 w-4" />
                Apoie
              </Button>
            </Link>
            
            <Link href={"/signIn"}>
              <Button variant="secondary" size="sm">
                <LogIn className="mr-2 h-4 w-4" />
                Login
              </Button>
            </Link>
            
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
            
            <Links className="flex flex-col space-y-2"/>


            <div className="mt-4 flex flex-col space-y-2">
              <Link href={''}>
                <Button variant="secondary" size="sm">
                  <MessageSquare className="mr-2 h-4 w-4" />
                  Feedback
                </Button>
              </Link>
              
              <Link href={''}>
                <Button variant="secondary" size="sm">
                  <Heart className="mr-2 h-4 w-4" />
                  Apoie
                </Button>
              </Link>

              <Link href={'/signIn'}>
                <Button variant="secondary" size="sm">
                  <LogIn className="mr-2 h-4 w-4" />
                  Login
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}