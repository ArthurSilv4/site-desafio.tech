import { Separator } from "@radix-ui/react-select";

const person = [
  {
    name: "Arthur"
  },
  {
    name: "Gustavo"
  },
  {
    name: "Lucas"
  },
  {
    name: "Matheus"
  },
  {
    name: "Pedro"
  },
  {
    name: "Rafael"
  },
  {
    name: "Rodrigo"
  },
  {
    name: "Vitor"
  },
];


export default function Supporters() {
  return (
    <section className="w-full text-white py-12 md:py-24 lg:py-32">
      <div className="container overflow-x-auto whitespace-nowrap m-auto">
        <Separator className="mt-8 pt-8 border-t border-zinc-600 text-center" />
        <div className="flex items-center justify-center flex-wrap">
          {person.map((person, index) => (
            <div key={index} className="py-2 m-4 text-gray-400 text-2xl font-semibold">
              {person.name}
            </div>
          ))}
        </div>
        <Separator className="mt-8 pt-8 border-t border-zinc-600 text-center" />
      </div>
    </section>
  )
}