import { Button } from "@/components/ui/button"
import SvgCharts from "../svgs/charts"

export default function Hero() {
  return (
    <section className="w-full bg-background py-12 md:py-24 lg:py-32 flex">
      <div className="container px-4 md:px-6 m-auto">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl lg:text-6xl">
                Transforme desafios em soluções reais
              </h1>
              <p className="max-w-[600px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Encare desafios, crie soluções inovadoras e desenvolva suas habilidades enquanto causa um impacto de verdade
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button className="bg-[#FFDF90] hover:bg-[#FFDF90]/60">
                Comece Agora
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative w-full max-w-[600px] p-4">
              <div className="overflow-hidden rounded-lg bg-card p-4 shadow-2xl">
                <div className="w-full h-full overflow-hidden">
                  <SvgCharts className="w-full h-full object-contain mx-auto" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

