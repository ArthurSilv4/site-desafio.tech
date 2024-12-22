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
  tags: string[]
}

const ChallengeContext = createContext<
  | {
      challenges: ChallengeData[]
      setChallenges: React.Dispatch<React.SetStateAction<ChallengeData[]>>
      fetchAllChallenges: () => void
      fetchChallenges: () => void
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
  const [token, setToken] = useState<string | null>(null)

  useEffect(() => {
    const { "desafio.tech-token": storedToken } = parseCookies()

    if (storedToken) {
      setToken(storedToken)
    }
  }, [])

  const fetchAllChallenges = () => {
    if (token) {
      axios
        .get("https://localhost:7092/challenges/all", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          setChallenges(Array.isArray(response.data) ? response.data : [])
        })
        .catch((error) => {
          console.error("Error fetching profile:", error)
        })
    }
  }

  const fetchChallenges = () => {
    if (token) {
      axios
        .get("https://localhost:7092/challenges", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          setChallenges(Array.isArray(response.data) ? response.data : [])
        })
        .catch((error) => {
          console.error("Error fetching data from other route:", error)
        })
    }
  }

  return (
    <ChallengeContext.Provider
      value={{ challenges, setChallenges, fetchAllChallenges, fetchChallenges }}
    >
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
