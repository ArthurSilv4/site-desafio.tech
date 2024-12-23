"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card"
import { useChallenge } from "@/contexts/challenge/ChallengeContext"
import { DayPickerProvider } from "react-day-picker"
import { useRouter } from "next/navigation"
interface ChallengeData {
  id: string
  title: string
  status: string
  description: string
}

export function ChallengesCards() {
  const { fetchAllChallenges, challenges } = useChallenge()
  const [localChallenges, setLocalChallenges] = useState<ChallengeData[]>([])

  useEffect(() => {
    fetchAllChallenges()
  }, [fetchAllChallenges])

  useEffect(() => {
    setLocalChallenges(challenges)
  }, [challenges])

  const router = useRouter()

  const handleChallenge = (id: string) => {
    router.push(`/dashboard/${id}`)
  }

  return (
    <DayPickerProvider initialProps={{ mode: "single" }}>
      {localChallenges.map((item) => (
        <div key={item.id} className="mt-4 w-full px-2 sm:w-1/2 lg:w-1/3">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-semibold">
                {item.title}
              </CardTitle>
              <CardDescription
                className={
                  item.status === "Completo"
                    ? "text-green-500/60"
                    : item.status === "Em Andamento"
                      ? "text-yellow-500/60"
                      : "text-red-500/60"
                }
              >
                {item.status}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>{item.description}</p>
              <Button className="mt-2" onClick={() => handleChallenge(item.id)}>
                Continuar
              </Button>
            </CardContent>
          </Card>
        </div>
      ))}
    </DayPickerProvider>
  )
}
