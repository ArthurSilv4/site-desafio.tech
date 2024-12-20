import React from "react"
import { Rank } from "@/components/dashboard/profile/rank/page"
import { ProgressCards } from "@/components/dashboard/profile/progressCards/page"
import { UserName } from "@/components/dashboard/profile/userName/userName"
import { ProgressBar } from "@/components/dashboard/progressBar/page"

export default function Profile() {
  return (
    <main className="flex min-h-screen flex-col bg-[#333333]">
      <section className="flex w-full py-12 md:py-24 lg:py-32">
        <div className="container m-auto px-4 md:px-6">
          <div className="flex justify-between">
            <div className="w-full">
              <UserName />
              <p className="mt-2 text-gray-400">Seja bem vindo ao seu perfil</p>
              <Rank />
            </div>
            <ProgressBar />
          </div>

          <div className="mt-8 flex flex-col justify-between gap-4 md:flex-row">
            <ProgressCards />
          </div>

          <div className="mt-20 flex flex-col justify-center gap-4 md:flex-row">
            {/* <Card className="w-full bg-[#2A2A2A] md:w-1/2">
              <CardHeader>
                <CustomCardTitle title="Áreas" />
              </CardHeader>
              <CardContent>
                <PieChartComponent />
              </CardContent>
            </Card>

            <Card className="w-full bg-[#2A2A2A] md:w-1/2">
              <CardHeader>
                <CustomCardTitle title="Frequência" />
              </CardHeader>
              <CardContent>
                <LineChartComponent />
              </CardContent>
            </Card> */}
          </div>
        </div>
      </section>
    </main>
  )
}
