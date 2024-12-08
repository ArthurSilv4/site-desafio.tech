'use client'

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Bell, Menu, MessageSquare, Search, Settings, X } from "lucide-react"
import { Logo } from "../logo/logo"
import ActionButtons from "../actionButtons/actionButtons"
import { usePathname } from "next/navigation"
import { useAuth } from "@/contexts/AuthContext"
import { User } from "lucide-react"
import Link from "next/link"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const { isLoggedIn } = useAuth();
  const pathname = usePathname();

  if (isLoggedIn() && pathname.startsWith('/dashboard')) {
    return (
      <header className="bg-[#333333] text-primary-foreground py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between gap-2">

            <div className="flex-1 max-w-xs flex items-center relative">
              <div className="absolute left-4">
                <Search className="text-[#555555]" />
              </div>
              <input
                type="text"
                placeholder="Search..."
                className="w-full pl-12 pr-4 py-2 rounded-full bg-[#2A2A2A] text-[#555555] shadow-inner shadow-[#222222] focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div className="flex gap-5">
              <Link href={""}>
                <Button size='icon' className="rounded-full bg-[#2A2A2A] text-[#555555] shadow-inner shadow-[#222222]">
                  <MessageSquare />
                </Button>
              </Link>

              <Link href={""}>
                <Button size='icon' className="rounded-full bg-[#2A2A2A] text-[#555555] shadow-inner shadow-[#222222]">
                  <Bell />
                </Button>
              </Link>

              <Link href={"/dashboard/settings"}>
                <Button size='icon' className="rounded-full bg-[#2A2A2A] text-[#555555] shadow-inner shadow-[#222222]">
                  <Settings />
                </Button>
              </Link>

              <Link href={"/dashboard/profile"}>
                <Button size='icon' className="rounded-full bg-[#2A2A2A] text-[#555555] shadow-inner shadow-[#222222]">
                  <User />
                </Button>
              </Link>

            </div>
          </div>
        </div>
      </header>
    )
  }

  return (
    <header className="bg-background text-primary-foreground py-4">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Logo />
          <ActionButtons className="hidden md:flex space-x-2" />
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
            <ActionButtons className="mt-4 flex flex-col space-y-2" />
          </div>
        )}
      </div>
    </header>
  )
}