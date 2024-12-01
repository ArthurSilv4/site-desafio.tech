import { Calendar, Wallet, FolderKanban } from 'lucide-react'
import Image from 'next/image'
import { Card } from '../ui/card'

export function Feature() {
  return (
    <section className="w-full bg-background py-16 px-4">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-400 to-cyan-400 flex items-center justify-center shrink-0">
              <Calendar className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-white text-lg font-medium mb-1">Desafie-se a resolver problemas nos próximos 15 dias</h3>
              <p className="text-zinc-400">Encare desafios reais, desenvolva suas habilidades e resolva problemas concretos em apenas 15 dias</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-400 to-violet-400 flex items-center justify-center shrink-0">
              <Wallet className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-white text-lg font-medium mb-1">Totalmente gratuito</h3>
              <p className="text-zinc-400">Acesse todos os recursos sem nenhum custo e aproveite ao máximo cada oportunidade</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-orange-400 to-yellow-400 flex items-center justify-center shrink-0">
              <FolderKanban className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-white text-lg font-medium mb-1">Compartilhe suas soluções</h3>
              <p className="text-zinc-400">Mostre como você resolve desafios reais com soluções inovadoras e práticas, impactando diretamente os resultados</p>
            </div>
          </div>
        </div>
        <Card className='relative aspect-[4/3] bg-[#D9EFEB] p-8'>
          <Image
            src="/images/Image.svg"
            alt="App preview"
            layout='fill'
            className="mx-auto shadow-2xl rounded-[15px]"
          />
        </Card>
      </div>
    </section>

  )
}