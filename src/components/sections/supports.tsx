import { Separator } from "@radix-ui/react-select";

const person = [
  {
    name: "Alice"
  },
  {
    name: "Bob"
  },
  {
    name: "Charlie"
  },
  {
    name: "David"
  },
  {
    name: "Eve"
  }
];


export default function Supports() {
  return (
    <section className="w-full text-white py-12 md:py-24 lg:py-32">
      <Separator className="mt-8 pt-8 border-t border-primary-foreground/10 text-center" />

      <div className="container flex overflow-x-auto whitespace-nowrap justify-center items-center m-auto">
        {person.map((person, index) => (
          <div key={index} className="py-2 m-4 text-gray-400 text-2xl font-semibold inline-block">
            {person.name}
          </div>
        ))}
      </div>

      <Separator className="mt-8 pt-8 border-t border-primary-foreground/10 text-center" />
    </section>
  )
}