import React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Medal } from "lucide-react"
import { Progress } from "@/components/ui/progress"
import { PieChartComponent } from "@/components/charts/pieChartComponent"
import { LineChartComponent } from "@/components/charts/lineChartComponent"

export default function Profile() {
  return (
    <main className="flex min-h-screen flex-col bg-[#333333]">
      <section className="flex w-full py-12 md:py-24 lg:py-32">
        <div className="container m-auto px-4 md:px-6">
          <div className="flex justify-between">
            <div className="w-full">
              <h1 className="text-4xl font-bold">Olá Arthur👋</h1>
              <p className="mt-2 text-gray-400">Seja bem vindo ao seu perfil</p>
              <div className="mt-2 flex gap-2">
                <Medal className="h-6 w-6 text-yellow-500 hover:text-red-100" />
                <Medal className="h-6 w-6 text-yellow-500 hover:text-red-100" />
                <Medal className="h-6 w-6 text-yellow-500 hover:text-red-100" />
              </div>
            </div>
            <div className="flex w-full flex-col justify-center">
              <span className="mb-2 font-bold">Nivel 25</span>
              <Progress value={85} />
              <span className="ml-auto text-gray-400">85/100</span>
            </div>
          </div>

          <div className="mt-20 flex w-full flex-col gap-6 md:flex-row md:gap-20">
            <Card className="flex h-40 w-full flex-col justify-center bg-[#2A2A2A] md:w-1/3">
              <CardHeader className="pb-0">
                <CardTitle className="text-gray-400">
                  Desafios concluidos
                </CardTitle>
              </CardHeader>
              <CardContent className="text-3xl font-semibold">
                10 Desafios Concluidos
              </CardContent>
            </Card>
            <Card className="flex h-40 w-full flex-col justify-center bg-[#2A2A2A] text-white md:w-1/3">
              <CardHeader className="flex pb-0">
                <CardTitle className="text-gray-400">
                  Missoes concluidas
                </CardTitle>
              </CardHeader>
              <CardContent className="text-3xl font-semibold">
                400 / 500
              </CardContent>
            </Card>
            <Card className="flex h-40 w-full flex-col justify-center bg-[#2A2A2A] text-white md:w-1/3">
              <CardHeader className="flex pb-0">
                <CardTitle className="text-gray-400">
                  Você esta indo muito bem
                </CardTitle>
              </CardHeader>
              <CardContent className="text-3xl font-semibold">
                Continue completando desafios!
              </CardContent>
            </Card>
          </div>

          <div className="mt-20 flex flex-col justify-center gap-6 md:flex-row">
            <Card className="w-full bg-[#2A2A2A] md:w-1/2">
              <CardHeader>
                <CardTitle className="underline decoration-yellow-500 decoration-2 underline-offset-4">
                  Áreas
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="m-auto h-full w-full">
                  <PieChartComponent />
                </div>
              </CardContent>
            </Card>

            <Card className="w-full bg-[#2A2A2A] md:w-1/2">
              <CardHeader>
                <CardTitle className="underline decoration-yellow-500 decoration-2 underline-offset-4">
                  Frequência
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div>
                  <LineChartComponent />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </main>
  )
}
