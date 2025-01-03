import { Logo } from "@/components/logo/logo"
import { Separator } from "@radix-ui/react-separator"
import Link from "next/link"

export function FooterDashboard() {
  return (
    <footer className="w-full bg-[#333333] px-4 py-6">
      <div className="container mx-auto px-4">
        <Separator className="border-t border-zinc-600 pt-8 text-center" />
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex items-center gap-2 text-white">
            <Logo />
            <Link href={"https://www.linkedin.com/in/arthur-souza-dev/"}>
              <span className="text-sm text-zinc-400">by Arthur</span>
            </Link>
          </div>

          <nav className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-zinc-400">
            <span>&copy; Desafioo.Tech {new Date().getFullYear()} </span>
            <Link
              href="/privacy"
              className="transition-colors hover:text-white"
            >
              Política de Privacidade
            </Link>
            <Link
              href="/cookies"
              className="transition-colors hover:text-white"
            >
              Política de Cookies
            </Link>
            <Link href="/terms" className="transition-colors hover:text-white">
              Termos de Uso
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}
