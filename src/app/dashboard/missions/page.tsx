import { ProgressBar } from "@/components/dashboard/progressBar/page"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Medal } from "lucide-react"

export default function Missions() {
  const missoes = [
    {
      id: 1,
      title: "Desafio 1",
      description: "Descrição do desafio 1",
      progress: 30,
      xp: 10,
    },
    {
      id: 2,
      title: "Desafio 2",
      description: "Descrição do desafio 2",
      progress: 100,
      xp: 10,
    },
    {
      id: 3,
      title: "Desafio 3",
      description: "Descrição do desafio 3",
      progress: 100,
      xp: 10,
    },
    {
      id: 1,
      title: "Desafio 1",
      description: "Descrição do desafio 1",
      progress: 30,
      xp: 10,
    },
    {
      id: 2,
      title: "Desafio 2",
      description: "Descrição do desafio 2",
      progress: 100,
      xp: 10,
    },
    {
      id: 3,
      title: "Desafio 3",
      description: "Descrição do desafio 3",
      progress: 100,
      xp: 10,
    },
  ]

  return (
    <main className="flex min-h-screen flex-col bg-[#333333]">
      <section className="flex w-full flex-col py-12 md:py-24 lg:py-32">
        <div className="container m-auto px-4 md:px-6">
          <div className="flex justify-between">
            <h1 className="w-full text-4xl font-bold">Missoes</h1>
            <ProgressBar />
          </div>
          <div>
            <div>
              <div className="-mx-2 flex flex-wrap">
                {missoes.map((item) => (
                  <div
                    key={item.id}
                    className="mt-4 w-full px-2 sm:w-1/2 lg:w-1/4"
                  >
                    <Card className="bg-[#2A2A2A]">
                      <CardHeader>
                        <CardTitle className="text-2xl font-semibold">
                          {item.title}
                        </CardTitle>
                        <span className="text-gray-400">{item.xp}xp</span>
                      </CardHeader>
                      <CardContent>
                        <p>{item.description}</p>
                        <div className="mt-2 flex items-center justify-center gap-2">
                          <Progress value={item.progress} />
                          <span>{item.progress}/100</span>
                        </div>
                        {item.progress >= 100 && (
                          <Button className="mt-4 w-full">Resgatar</Button>
                        )}
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
