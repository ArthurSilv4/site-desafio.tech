import Filter from "@/components/dashboard/filter/page"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const desafios = [
  {
    id: 1,
    title: "Desafio 1",
    description: "Descrição do desafio 1",
    status: "Em Andamento",
  },
  {
    id: 2,
    title: "Desafio 2",
    description: "Descrição do desafio 2",
    status: "Em Andamento",
  },
  {
    id: 3,
    title: "Desafio 3",
    description: "Descrição do desafio 3",
    status: "Em Andamento",
  },
]

export default function Dashboard() {
  return (
    <main className="flex min-h-screen flex-col bg-[#333333]">
      <section className="flex w-full flex-col py-12 md:py-24 lg:py-32">
        <div className="container m-auto px-4 md:px-6">
          <h1 className="text-4xl font-bold">Meus Desafios</h1>

          <div className="mt-8">
            <Filter />
          </div>

          <div>
            <div className="-mx-2 flex flex-wrap">
              {desafios.map((item) => (
                <div
                  key={item.id}
                  className="mt-4 w-full px-2 sm:w-1/2 lg:w-1/3"
                >
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-2xl font-semibold">
                        {item.title}
                      </CardTitle>
                      <CardDescription>{item.status}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p>{item.description}</p>
                      <Button className="mt-2">Continuar</Button>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
