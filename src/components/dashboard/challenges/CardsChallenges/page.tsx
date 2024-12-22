"use client"

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
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import { useChallenge } from "@/contexts/challenge/ChallengeContext"
import { useEffect, useState } from "react"

interface ChallengeData {
  id: string
  title: string
  description: string
  author: string
  startDate: string
  endDate: string
  challengeDates: string[]
  completed: boolean
  status: string
  tags: string[]
}

const ITEMS_PER_PAGE = 9

export function CardsChallenges() {
  const { fetchChallenges, challenges } = useChallenge()
  const [localChallenges, setLocalChallenges] = useState<ChallengeData[]>([])

  useEffect(() => {
    fetchChallenges()
  }, [fetchChallenges])

  useEffect(() => {
    setLocalChallenges(challenges)
  }, [challenges])

  const [currentPage, setCurrentPage] = useState(1)
  const totalPages = Math.ceil(localChallenges.length / ITEMS_PER_PAGE)

  const handlePageChange = (page: React.SetStateAction<number>) => {
    setCurrentPage(page)
  }

  const currentChallenges = localChallenges.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  )

  if (localChallenges.length === 0) {
    return <p>Nenhum desafio encontrado</p>
  }

  return (
    <>
      <div className="mt-8 grid gap-4 lg:grid-cols-3 lg:gap-8 xl:grid-cols-3">
        {currentChallenges?.map((challenge, index) => (
          <Card key={index} className="flex max-h-96 flex-col bg-[#2A2A2A]">
            <CardHeader>
              <CardTitle>{challenge.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="line-clamp-2">
                {challenge.description}
              </CardDescription>
              <Button className="mt-4">Iniciar</Button>
            </CardContent>
            <CardFooter className="gap-2">
              {challenge?.tags?.map((tag, tagIndex) => {
                const tagColors: { [key: string]: string } = {
                  front: "bg-blue-500",
                  back: "bg-indigo-500",
                  mobile: "bg-purple-500",
                  dados: "bg-teal-500",
                  facil: "bg-green-500",
                  intermediario: "bg-yellow-500",
                  dificil: "bg-red-500",
                }
                return (
                  <span
                    key={tagIndex}
                    className={`rounded px-1 font-semibold ${tagColors[tag] || "bg-gray-500"}`}
                  >
                    {tag}
                  </span>
                )
              })}
            </CardFooter>
          </Card>
        ))}
      </div>

      {totalPages > 1 && (
        <div className="mt-16 flex justify-center">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                {currentPage > 1 && (
                  <PaginationPrevious
                    href="#"
                    onClick={() => handlePageChange(currentPage - 1)}
                  />
                )}
              </PaginationItem>
              {[...Array(totalPages)].map((_, index) => (
                <PaginationItem key={index}>
                  <PaginationLink
                    href="#"
                    onClick={() => handlePageChange(index + 1)}
                    className={
                      currentPage === index + 1
                        ? "bg-primary text-primary-foreground"
                        : ""
                    }
                  >
                    {index + 1}
                  </PaginationLink>
                </PaginationItem>
              ))}
              <PaginationItem>
                {currentPage < totalPages && (
                  <PaginationNext
                    href="#"
                    onClick={() => handlePageChange(currentPage + 1)}
                  />
                )}
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      )}
    </>
  )
}
