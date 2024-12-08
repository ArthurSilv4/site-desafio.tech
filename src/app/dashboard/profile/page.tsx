import React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Medal } from 'lucide-react'
import { Progress } from "@/components/ui/progress"
import { PieChartComponent } from "@/components/charts/pieChartComponent"
import { LineChartComponent } from "@/components/charts/lineChartComponent"


export default function Profile() {

  return (
    <main className="flex flex-col min-h-screen">
      <section className="w-full py-12 md:py-24 lg:py-32 flex">
        <div className="container px-4 md:px-6 m-auto">
          <div className="flex justify-between">
            <div className="w-full ">
              <h1 className="text-4xl font-bold">Olá Arthur👋</h1>
              <p className="text-gray-400 mt-2">Seja bem vindo ao seu perfil</p>
              <div className="flex mt-2 gap-2">
                <Medal className="w-6 h-6 text-yellow-500 hover:text-red-100" />
                <Medal className="w-6 h-6 text-yellow-500 hover:text-red-100" />
                <Medal className="w-6 h-6 text-yellow-500 hover:text-red-100" />
              </div>
            </div>
            <div className="flex flex-col justify-center w-full">
              <span className="font-bold mb-2">Nivel 25</span>
              <Progress value={85} />
              <span className="ml-auto text-gray-400">85/100</span>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-6 md:gap-20 mt-20 w-full">
            <Card className="text-white flex flex-col h-40 w-full md:w-1/3 justify-center">
              <CardHeader className="pb-0">
                <CardTitle className="text-gray-400">Desafios concluidos</CardTitle>
              </CardHeader>
              <CardContent className="text-3xl font-semibold">
                10 Desafios Concluidos
              </CardContent>
            </Card>
            <Card className="text-white flex flex-col h-40 w-full md:w-1/3 justify-center">
              <CardHeader className="pb-0 flex">
                <CardTitle className="text-gray-400">Missoes concluidas</CardTitle>
              </CardHeader>
              <CardContent className="text-3xl font-semibold">
                400 / 500
              </CardContent>
            </Card>
            <Card className="text-white flex flex-col h-40 w-full md:w-1/3 justify-center">
              <CardHeader className="pb-0 flex">
                <CardTitle className="text-gray-400">Você esta indo muito bem</CardTitle>
              </CardHeader>
              <CardContent className="text-3xl font-semibold">
                Continue completando desafios!
              </CardContent>
            </Card>
          </div>


          <div className="flex flex-col md:flex-row gap-6 mt-20 justify-center">
            <Card className="w-full md:w-1/2">
              <CardHeader>
                <CardTitle className="underline underline-offset-4 decoration-2 decoration-yellow-500">Áreas</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="m-auto w-full h-full">
                  <PieChartComponent />
                </div>
              </CardContent>
            </Card>



            <Card className="w-full md:w-1/2">
              <CardHeader>
                <CardTitle className="underline underline-offset-4 decoration-2 decoration-yellow-500">Frequência</CardTitle>
              </CardHeader>
              <CardContent>
                <div>
                  <LineChartComponent/>
                </div>
              </CardContent>
            </Card>


          </div>


        </div>
      </section>
    </main>
  )
}

