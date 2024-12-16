import Filter from "@/components/filter/page"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
const challenges = [
  {
    title: "Fazer tal ccoisa bem",
    description:
      "loren ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae nunc.",
    tags: ["front", "facil"],
  },
  {
    title: "Fazer tal ccoisa bem",
    description:
      "loren ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae nunc.",
    tags: ["front", "facil"],
  },
  {
    title: "Fazer tal ccoisa bem",
    description:
      "loren ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae nunc.",
    tags: ["front", "facil"],
  },
  {
    title: "Fazer tal ccoisa bem",
    description:
      "loren ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae nunc.",
    tags: ["front", "facil"],
  },
  {
    title: "Fazer tal ccoisa bem",
    description:
      "loren ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae nunc.",
    tags: ["front", "facil"],
  },
  {
    title: "Fazer tal ccoisa bem",
    description:
      "loren ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae nunc.",
    tags: ["front", "facil"],
  },
  {
    title: "Fazer tal ccoisa bem",
    description:
      "loren ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae nunc.",
    tags: ["front", "facil"],
  },
  {
    title: "Fazer tal ccoisa bem",
    description:
      "loren ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae nunc.",
    tags: ["front", "facil"],
  },
  {
    title: "Fazer tal ccoisa bem",
    description:
      "loren ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae nunc.",
    tags: ["front", "facil"],
  },
]

export default function Challenges() {
  return (
    <main className="flex min-h-screen flex-col bg-[#333333]">
      <section className="flex w-full bg-[#333333] py-12 md:py-24 lg:py-32">
        <div className="container m-auto px-4 md:px-6">
          <Filter />
          <div className="mt-8 grid gap-4 lg:grid-cols-3 lg:gap-8 xl:grid-cols-3">
            {challenges.map((challenge, index) => (
              <Card key={index} className="flex max-h-96 flex-col bg-[#2A2A2A]">
                <CardHeader>
                  <CardTitle>{challenge.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{challenge.description}</CardDescription>
                  <Button className="mt-4">Iniciar</Button>
                </CardContent>
                <CardFooter className="gap-2">
                  {challenge.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className={`rounded bg-chart-${tagIndex + 1} px-1 font-semibold`}
                    >
                      {tag}
                    </span>
                  ))}
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="mt-16 flex justify-center">
            <Pagination className="">
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious href="#" />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">1</PaginationLink>
                  <PaginationLink href="#">2</PaginationLink>
                  <PaginationLink href="#">3</PaginationLink>
                  <PaginationLink href="#">4</PaginationLink>
                  <PaginationLink href="#">5</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext href="#" />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </div>
      </section>
    </main>
  )
}
