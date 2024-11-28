import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <section className="w-full h-screen bg-background py-12 md:py-24 lg:py-32 flex">
      <div className="container px-4 md:px-6 m-auto">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl lg:text-6xl">
                Transforme desafios em soluções
              </h1>
              <p className="max-w-[600px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Transforme ideias em realidade! Participe do desafio, mostre suas habilidades e cause o impacto que só você pode criar.
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
                <div className="grid gap-8">
                  <div className="grid grid-cols-2 gap-8">
                    <div className="h-40 rounded-lg bg-background">
                      1
                    </div>
                    <div className="h-40 rounded-lg bg-background">
                      2
                    </div>
                  </div>
                  <div className="h-40 rounded-lg bg-background">
                    3
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

