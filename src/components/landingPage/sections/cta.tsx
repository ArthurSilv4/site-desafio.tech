import { Button } from "../../ui/button"
import Image from "next/image"
import { Card } from "../../ui/card"

export default function Cta() {
  return (
    <section className="w-full px-4 py-16">
      <div className="container mx-auto grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
        <div className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-4xl font-bold text-white md:text-5xl">
              Pronto para começar?
            </h2>
            <h3 className="text-3xl font-bold text-white md:text-4xl">
              Aceite o desafio e mostre suas habilidades
            </h3>
          </div>
          <p className="text-zinc-400">
            Em 15 dias, você será capaz de transformar problemas reais em
            soluções criativas e inovadoras
          </p>
          <Button
            className="bg-[#ffd875] px-8 text-black hover:bg-[#ffc875]"
            size="lg"
          >
            Comece Agora
          </Button>
        </div>

        <Card className="relative aspect-[4/3] bg-[#D9EFEB] p-8">
          <Image
            src="/images/Image.svg"
            alt="App preview"
            layout="fill"
            className="mx-auto rounded-[15px] shadow-2xl"
          />
        </Card>
      </div>
    </section>
  )
}
