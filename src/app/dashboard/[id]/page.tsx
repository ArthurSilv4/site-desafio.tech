"use client"

import { useParams } from "next/navigation"
import axios from "axios"
import { useEffect, useState } from "react"
import { parseCookies } from "nookies"

interface ChallengeData {
  title: string
  description: string
}

export default function DashboardId() {
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

  return (
    <div>
      <h1>Challenge</h1>
      {data && (
        <div>
          <h3>{data.title}</h3>
          <p>{data.description}</p>
        </div>
      )}
    </div>
  )
}
