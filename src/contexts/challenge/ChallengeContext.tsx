"use client"

import React, { createContext, useState, useEffect, useContext } from "react"
import { parseCookies } from "nookies"
import axios from "axios"

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
}

const ChallengeContext = createContext<
  | {
      challenges: ChallengeData[]
      setChallenges: React.Dispatch<React.SetStateAction<ChallengeData[]>>
    }
  | undefined
>(undefined)

interface ChallengeProviderProps {
  children: React.ReactNode
}

export const ChallengeProvider: React.FC<ChallengeProviderProps> = ({
  children,
}) => {
  const [challenges, setChallenges] = useState<ChallengeData[]>([])

  useEffect(() => {
    const fetchChallenges = async () => {
      const cookies = parseCookies()
      const token = cookies["desafio.tech-token"]

      try {
        const response = await axios.get(
          "https://localhost:7092/challenges/all",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )

        setChallenges(Array.isArray(response.data) ? response.data : [])
      } catch (error) {
        console.error("Erro ao buscar informações dos desafios", error)
      }
    }

    fetchChallenges()
  }, [])

  return (
    <ChallengeContext.Provider value={{ challenges, setChallenges }}>
      {children}
    </ChallengeContext.Provider>
  )
}

export const useChallenge = () => {
  const context = useContext(ChallengeContext)
  if (context === undefined) {
    throw new Error("Challenge must be used within a ChallengeProvider")
  }
  return context
}
