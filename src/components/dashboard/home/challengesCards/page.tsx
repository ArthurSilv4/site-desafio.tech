"use client"

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

export function ChallengesCards() {
  const { challenges } = useChallenge()

  return (
    <DayPickerProvider initialProps={{ mode: "single" }}>
      {challenges.map((item) => (
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
              <Button className="mt-2">Continuar</Button>
            </CardContent>
          </Card>
        </div>
      ))}
    </DayPickerProvider>
  )
}
