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
import { parseCookies } from "nookies"
import axios from "axios"
interface ChallengeData {
  id: string
  title: string
  status: string
  description: string
}

export function ChallengesCards() {
  const { fetchAllChallenges, challenges } = useChallenge()
  const [localChallenges, setLocalChallenges] = useState<ChallengeData[]>([])
  const [isOverlayVisible, setIsOverlayVisible] = useState(false)
  const [selectedId, setSelectedId] = useState<string | null>(null)

  useEffect(() => {
    fetchAllChallenges()
  }, [fetchAllChallenges])

  useEffect(() => {
    setLocalChallenges(challenges)
  }, [challenges])

  const router = useRouter()

  const handleChallenge = (id: string) => {
    setSelectedId(id)
    setIsOverlayVisible(true)
  }

  const closeOverlay = () => {
    setIsOverlayVisible(false)
    setSelectedId(null)
  }

  const [data, setData] = useState<any>(null)

  const { "desafio.tech-token": token } = parseCookies()

  useEffect(() => {
    if (selectedId) {
      axios
        .get(`https://localhost:7092/challenges/all/${selectedId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          setData(response.data)
        })
        .catch((error) => {
          console.error("Error fetching data:", error)
        })
    }
  }, [selectedId, token])

  const renderOverlay = (id: string) => {
    console.log(data)

    return (
      <div
        className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 p-2"
        onClick={closeOverlay}
      >
        <div
          className="h-[90%] w-[100%] rounded bg-background p-4 md:w-[80%] 2xl:w-[60%]"
          onClick={(e) => e.stopPropagation()}
        >
          {data && (
            <div>
              {Object.entries(data).map(([key, value]) => (
                <div key={key} className="mb-2">
                  <strong>{key}:</strong> {value as React.ReactNode}
                </div>
              ))}
            </div>
          )}

          <Button onClick={closeOverlay}>Close</Button>
        </div>
      </div>
    )
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
      {isOverlayVisible && selectedId && renderOverlay(selectedId)}
    </DayPickerProvider>
  )
}
