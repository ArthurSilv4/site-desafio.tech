import { Button } from "@/components/ui/button"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { Search, MessageSquare, Bell, Settings, User } from "lucide-react"
import Link from "next/link"

export default function HeaderDashboard() {
  return (
    <header className="bg-[#333333] py-4 text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-4">
            <SidebarTrigger className="bg-[#2A2A2A] text-[#555555] shadow-inner shadow-[#222222] focus:outline-none focus:ring-2 focus:ring-primary" />

            <div className="relative flex max-w-xs flex-1 items-center">
              <div className="absolute left-4">
                <Search className="text-[#555555]" />
              </div>
              <input
                type="text"
                placeholder="Search..."
                className="w-full rounded-full bg-[#2A2A2A] py-2 pl-12 pr-4 text-[#555555] shadow-inner shadow-[#222222] focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>

          <div className="flex gap-5">
            <Link href={""}>
              <Button
                size="icon"
                className="rounded-full bg-[#2A2A2A] text-[#555555] shadow-inner shadow-[#222222]"
              >
                <MessageSquare />
              </Button>
            </Link>
            <Link href={""}>
              <Button
                size="icon"
                className="rounded-full bg-[#2A2A2A] text-[#555555] shadow-inner shadow-[#222222]"
              >
                <Bell />
              </Button>
            </Link>
            <Link href={"/dashboard/settings"}>
              <Button
                size="icon"
                className="rounded-full bg-[#2A2A2A] text-[#555555] shadow-inner shadow-[#222222]"
              >
                <Settings />
              </Button>
            </Link>
            <Link href={"/dashboard/profile"}>
              <Button
                size="icon"
                className="rounded-full bg-[#2A2A2A] text-[#555555] shadow-inner shadow-[#222222]"
              >
                <User />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
