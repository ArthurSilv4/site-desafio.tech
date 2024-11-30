import Link from "next/link"
import { Separator } from "@radix-ui/react-select"
import { Logo } from "../logo/logo"

export default function Footer() {
  return (
    <footer className="w-full px-4 py-6">
      <div className="container mx-auto px-4">
        <Separator className="pt-8 border-t border-primary-foreground/10 text-center" />
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className=" text-white flex items-center gap-2">
            <Logo />
            <Link href={"linkedin"}>
              <span className="text-zinc-400 text-sm">by Arthur</span>
            </Link>
          </div>

          <nav className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-zinc-400">
            <span>&copy; Desafioo.Tech {new Date().getFullYear()} </span>
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy policy
            </Link>
            <Link href="/cookies" className="hover:text-white transition-colors">
              Cookies policy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms of use
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}