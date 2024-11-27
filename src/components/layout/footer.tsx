import Link from "next/link"
import { Linkedin } from "lucide-react"
import Links from "../links/links"

export default function Footer() {
  return (
    <footer className="bg-background text-primary-foreground py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Criador do Desafio.Tech</h3>
            <p>Arthur De Souza</p>
            <Link
              href="https://www.linkedin.com/in/joaodasilva"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 hover:underline"
            >
              <Linkedin size={20} />
              <span>LinkedIn</span>
            </Link>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Links do Site</h3>
            <Links className="flex flex-col space-y-2" />
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Informações Legais</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="/termos" className="hover:underline">Termos de Uso</Link>
              <Link href="/privacidade" className="hover:underline">Política de Privacidade</Link>
            </nav>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-primary-foreground/10 text-center">
          <p>&copy; {new Date().getFullYear()} Desafio.Tech. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}