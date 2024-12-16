import { Sword } from "lucide-react"
import Link from "next/link"

export function Logo() {
  return (
    <Link href="/" className="flex items-center space-x-2 text-white">
      <Sword></Sword>
      <span className="text-lg font-extrabold">Desafioo.Tech</span>
    </Link>
  )
}
