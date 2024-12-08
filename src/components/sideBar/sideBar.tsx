"use client"

import * as React from "react"
import { LayoutDashboard, Target, Receipt, PiggyBank } from 'lucide-react'

import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { useAuth } from "@/contexts/AuthContext"
import { usePathname } from "next/navigation"

const menuItems = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    href: "/dashboard",
    isActive: true,
  },
  {
    title: "My goals",
    icon: Target,
    href: "/goals",
  },
  {
    title: "Transactions",
    icon: Receipt,
    href: "/transactions",
  },
  {
    title: "Budget",
    icon: PiggyBank,
    href: "/budget",
  },
]

export default function SideBarr() {


  const { isLoggedIn } = useAuth();
  const pathname = usePathname();
  
  if (isLoggedIn() && pathname.startsWith('/dashboard')) {

  return (
    <Sidebar className="dark border-r-0 bg-zinc-900 h-full">
      <SidebarHeader className="p-4">
        <h2 className="text-lg font-semibold text-white">Wallet</h2>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          {menuItems.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton
                asChild
                isActive={item.isActive}
                className="relative gap-3 text-zinc-400 hover:bg-zinc-800 hover:text-white data-[active=true]:bg-transparent data-[active=true]:text-white [&[data-active=true]]:before:absolute [&[data-active=true]]:before:left-0 [&[data-active=true]]:before:h-full [&[data-active=true]]:before:w-1 [&[data-active=true]]:before:bg-red-500"
              >
                <a href={item.href}>
                  <item.icon className="size-4" />
                  <span>{item.title}</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
    </Sidebar>
  )
}}

