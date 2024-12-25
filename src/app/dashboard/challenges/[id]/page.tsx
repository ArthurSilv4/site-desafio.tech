"use client"

import { Button } from "@/components/ui/button"
import axios from "axios"
import { useParams } from "next/navigation"
import { parseCookies } from "nookies"
import { useEffect, useState } from "react"

interface ChallengeData {
  id: string
  title: string
  description: string
  author: string
}

export default function ChallengesId() {
  const { id } = useParams()

  const [data, setData] = useState<ChallengeData | null>(null)

  const { "desafio.tech-token": token } = parseCookies()

  useEffect(() => {
    if (id) {
      axios
        .get(`https://localhost:7092/challenges/${id}`, {
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
  }, [id, token])

  const handleStartChallenge = (id: string) => {
    axios.post(`https://localhost:7092/challenges/cloneChallenge/${id}`, null, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
  }

  return (
    <div>
      <h1>Challenge</h1>
      {data && (
        <div>
          <h3>{data.author}</h3>
          <h3>{data.title}</h3>
          <p>{data.description}</p>

          <Button onClick={() => handleStartChallenge(data.id)}>
            Start Challenge
          </Button>
        </div>
      )}
    </div>
  )
}
