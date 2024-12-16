import { LineChartComponent } from "@/components/dashboard/charts/lineChartComponent"
import { PieChartComponent } from "@/components/dashboard/charts/pieChartComponent"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export default function Statistics() {
  return (
    <main className="flex min-h-screen flex-col bg-[#333333]">
      <section className="flex w-full py-12 md:py-24 lg:py-32">
        <div className="container m-auto px-4 md:px-6">
          <div className="flex h-full w-full flex-col justify-between gap-5 md:flex-row">
            <Card className="w-full bg-[#2A2A2A] md:w-1/3">
              <CardHeader>
                <CardTitle className="text-2xl font-bold">Missoes</CardTitle>
              </CardHeader>
              <CardContent>
                <CardTitle className="text-3xl font-bold">
                  Missoes Concluidas
                </CardTitle>
                <CardDescription>30/100</CardDescription>
              </CardContent>
            </Card>

            <Card className="w-full bg-[#2A2A2A] md:w-1/3">
              <CardHeader>
                <CardTitle className="text-2xl font-bold">Desafios</CardTitle>
              </CardHeader>
              <CardContent>
                <CardTitle className="text-3xl font-bold">
                  Desafios Concluidos
                </CardTitle>
                <CardDescription>100</CardDescription>
              </CardContent>
            </Card>

            <Card className="w-full bg-[#2A2A2A] md:w-1/3">
              <CardHeader>
                <CardTitle className="text-2xl font-bold">
                  Experiencia
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex w-full flex-col justify-center">
                  <span className="mb-2 font-bold">Nivel 25</span>
                  <Progress value={85} />
                  <span className="ml-auto text-gray-400">85/100</span>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="mt-5 flex flex-col justify-center gap-5 lg:flex-row">
            <Card className="w-full bg-[#2A2A2A] lg:w-1/2">
              <CardHeader>
                <CardTitle className="underline decoration-yellow-500 decoration-2 underline-offset-4">
                  Grafico de pizza
                </CardTitle>
              </CardHeader>
              <CardContent className="">
                <PieChartComponent />
              </CardContent>
            </Card>

            <Card className="w-full bg-[#2A2A2A] lg:w-1/2">
              <CardHeader>
                <CardTitle className="underline decoration-yellow-500 decoration-2 underline-offset-4">
                  Ultimos Desafios Adicionados
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col gap-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Desafio 1</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>Desafio 1</CardDescription>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Desafio 1</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>Desafio 1</CardDescription>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Desafio 1</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>Desafio 1</CardDescription>
                  </CardContent>
                </Card>
              </CardContent>
            </Card>
          </div>

          <div className="mt-5">
            <Card className="w-full bg-[#2A2A2A]">
              <CardHeader>
                <CardTitle className="underline decoration-yellow-500 decoration-2 underline-offset-4">
                  Grafico mostrando a constancia de missoes
                </CardTitle>
              </CardHeader>
              <CardContent>
                <LineChartComponent />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </main>
  )
}
