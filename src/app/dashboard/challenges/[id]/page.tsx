"use client"

import axios from "axios"
import { useParams } from "next/navigation"
import { parseCookies } from "nookies"
import { useEffect, useState } from "react"

interface ChallengeData {
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

  console.log(data)

  return (
    <div>
      <h1>Challenge</h1>
      {data && (
        <div>
          <h3>{data.author}</h3>
          <h3>{data.title}</h3>
          <p>{data.description}</p>
        </div>
      )}
    </div>
  )
}
