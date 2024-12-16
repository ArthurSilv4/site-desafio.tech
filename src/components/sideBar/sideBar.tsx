"use client"

import * as React from "react"
import {
  House,
  Swords,
  Star,
  ChartArea,
  Earth,
  PowerOff,
  MessageSquare,
  Heart,
} from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { useAuth } from "@/contexts/AuthContext"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { Logo } from "../logo/logo"

const menuItems = [
  {
    title: "Home",
    icon: House,
    href: "/dashboard",
  },
  {
    title: "Desafios",
    icon: Swords,
    href: "/dashboard/challenges",
  },
  {
    title: "Missoes",
    icon: Star,
    href: "/dashboard/missions",
  },
  {
    title: "Estatisticas",
    icon: ChartArea,
    href: "/dashboard/statistics",
  },
  {
    title: "Comunidade",
    icon: Earth,
    href: "/dashboard/community",
  },
]

export default function SideBarr() {
  const { isLoggedIn } = useAuth()
  const pathname = usePathname()

  if (isLoggedIn() && pathname.startsWith("/dashboard")) {
    return (
      <Sidebar className="dark h-full border-[#2A2A2A]" collapsible="icon">
        <SidebarHeader>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton className="hover:bg-transparent">
                <Logo />
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupContent>
              <SidebarMenu>
                {menuItems.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      asChild
                      isActive={pathname === item.href}
                      className="relative gap-3 text-zinc-400 hover:bg-zinc-800 hover:text-white data-[active=true]:bg-transparent data-[active=true]:text-white [&[data-active=true]]:before:absolute [&[data-active=true]]:before:left-0 [&[data-active=true]]:before:h-full [&[data-active=true]]:before:w-1 [&[data-active=true]]:before:bg-red-500"
                    >
                      <Link href={item.href}>
                        <item.icon className="size-4" />
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter>
          <SidebarMenu>
            <SidebarMenuItem>
              <Link href="/dashboard/profile">
                <SidebarMenuButton className="text-green-400 hover:text-green-500">
                  <MessageSquare></MessageSquare>
                  <span>Feedback</span>
                </SidebarMenuButton>
              </Link>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <Link href="/dashboard/profile">
                <SidebarMenuButton className="text-red-400 hover:text-red-500">
                  <Heart></Heart>
                  <span>Apoie</span>
                </SidebarMenuButton>
              </Link>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <Link href="/dashboard/profile">
                <SidebarMenuButton className="text-red-400 hover:text-red-500">
                  <PowerOff></PowerOff>
                  <span>Sair</span>
                </SidebarMenuButton>
              </Link>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarFooter>
      </Sidebar>
    )
  }
}
