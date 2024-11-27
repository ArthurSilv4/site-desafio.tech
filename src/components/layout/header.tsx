'use client'

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { Logo } from "../logo/logo"
import ActionButtons from "../actionButtons/actionButtons"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-background text-primary-foreground py-4">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Logo />
          <ActionButtons className="hidden md:flex space-x-2"/>
          <Button
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {isMenuOpen && (
          <div className="mt-4 md:hidden">
            <ActionButtons className="mt-4 flex flex-col space-y-2"/>
          </div>
        )}
      </div>
    </header>
  )
}