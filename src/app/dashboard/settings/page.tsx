import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@radix-ui/react-label"
import Link from "next/link"
import { Textarea } from "@/components/ui/textarea"

export default function Settings() {
  return (
    <main className="flex min-h-screen flex-col bg-[#333333]">
      <section className="flex w-full py-12 md:py-24 lg:py-32">
        <div className="container m-auto px-4 md:px-6">
          <Card className="bg-[#2A2A2A]">
            <CardHeader>
              <h2 className="mb-4 text-xl font-semibold">Editar Perfil</h2>
            </CardHeader>
            <CardContent>
              <div className="mb-4">
                <Label>Nome de usuário *</Label>
                <Input
                  type="text"
                  placeholder="Arthur Souza"
                  className="w-full bg-[#333333] px-3 py-2 text-white shadow-inner shadow-[#222222]"
                />
              </div>

              <div className="mb-4">
                <Label>Descrição</Label>
                <Textarea
                  placeholder="Descrição"
                  className="h-[450px] w-full bg-[#333333] px-3 py-2 text-white shadow-inner shadow-[#222222]"
                />
              </div>

              <div className="mb-4">
                <Label>Email *</Label>
                <Input
                  type="email"
                  placeholder="Email"
                  className="w-full bg-[#333333] px-3 py-2 text-white shadow-inner shadow-[#222222]"
                />
              </div>

              <div className="mb-4 flex items-center gap-2">
                <Checkbox id="terms" required />
                <Label htmlFor="subscribe" className="text-sm">
                  Receber notificações por email
                </Label>
              </div>

              <div className="flex flex-col">
                <Label htmlFor="subscribe" className="">
                  Senha{" "}
                </Label>
                <Link href="">
                  <span className="text-sm text-primary hover:underline">
                    Ultilizar o fluxo de recuperação de senha
                  </span>
                </Link>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="mt-4 px-4 py-2">Salvar</Button>
            </CardFooter>
          </Card>
        </div>
      </section>
    </main>
  )
}
