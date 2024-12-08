import Link from "next/link"

export function Logo() {
  return (
    <Link href="/" className="flex items-center space-x-2">
      <span className="font-extrabold text-lg text-white">Desafioo.Tech</span>
    </Link>
  )
}