import { Calendar, Wallet, FolderKanban } from "lucide-react"
import Image from "next/image"
import { Card, CardContent } from "../../ui/card"

export function Feature() {
  return (
    <section className="w-full bg-background px-4 py-16">
      <div className="container mx-auto grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
        <div className="space-y-8">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-blue-400 to-cyan-400">
              <Calendar className="h-6 w-6 text-white" />
            </div>
            <div>
              <h3 className="mb-1 text-lg font-medium text-white">
                Desafie-se a resolver problemas nos próximos 15 dias
              </h3>
              <p className="text-zinc-400">
                Encare desafios reais, desenvolva suas habilidades e resolva
                problemas concretos em apenas 15 dias
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-purple-400 to-violet-400">
              <Wallet className="h-6 w-6 text-white" />
            </div>
            <div>
              <h3 className="mb-1 text-lg font-medium text-white">
                Totalmente gratuito
              </h3>
              <p className="text-zinc-400">
                Acesse todos os recursos sem nenhum custo e aproveite ao máximo
                cada oportunidade
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-orange-400 to-yellow-400">
              <FolderKanban className="h-6 w-6 text-white" />
            </div>
            <div>
              <h3 className="mb-1 text-lg font-medium text-white">
                Compartilhe suas soluções
              </h3>
              <p className="text-zinc-400">
                Mostre como você resolve desafios reais com soluções inovadoras
                e práticas, impactando diretamente os resultados
              </p>
            </div>
          </div>
        </div>
        <Card className="relative aspect-[4/3] bg-[#D9EFEB] p-8">
          <CardContent>
            <Image
              src="/images/mobile.png"
              alt="App preview"
              width={300}
              height={200}
              className="mx-auto rounded-[15px]"
            />
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
