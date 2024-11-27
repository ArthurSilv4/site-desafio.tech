import { Plus } from "lucide-react";

export function CreateYourChallenge() {
  return (
    <section className="py-16 bg-background text-primary-foreground">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Comece hoje seu próximo desafio</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          <div className="bg-white p-6 rounded-lg shadow-md">
            <Plus className="w-12 h-12 mb-4 text-primary" />
            <h3 className="text-xl font-semibold mb-2">Desafie-se pelos próximos 15 dias</h3>
            <p className="text-gray-600">Aceite o desafio e supere-se nos próximos 15 dias</p>
          </div>

          <div className="bg-primary p-6 rounded-lg shadow-md">
            <Plus className="w-12 h-12 mb-4 text-primary" />
            <h3 className="text-xl font-semibold mb-2">Defina Metas</h3>
            <p className="text-gray-600">Defina uma meta clara e alcançável para o seu desafio</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <Plus className="w-12 h-12 mb-4 text-primary" />
            <h3 className="text-xl font-semibold mb-2">Convide amigos</h3>
            <p className="text-gray-600">Para tornar tudo mais divertido, encare o desafio com amigos</p>
          </div>

        </div>
      </div>
    </section>

  )
}