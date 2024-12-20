"use client"

import axios from "axios"
import { parseCookies } from "nookies"
import { createContext, useContext, useEffect, useState } from "react"

export type ProfileProps = {
  id: number
  name: string
  email: string
  description: string
  socialMedia: { 0: string; 1: string }
  receiveEmail: boolean
  xp: number
  level: number
  rank: number
  challengesCompleted: number
  missionsCompleted: number
}

type ProfileContextType = {
  profile: ProfileProps | null
  useProfile: (profile: ProfileProps) => void
}

export const ProfileContext = createContext<ProfileContextType>(
  {} as ProfileContextType
)

export const ProfileProvaider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const [profile, setProfile] = useState<ProfileProps | null>(null)
  const [token, setToken] = useState<string | null>(null)

  useEffect(() => {
    const { "desafio.tech-token": storedToken } = parseCookies()

    if (storedToken) {
      setToken(storedToken)
    }
  }, [])

  useEffect(() => {
    if (token) {
      axios
        .get("https://localhost:7092/users", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          setProfile(response.data)
        })
        .catch((error) => {
          console.error("Error fetching profile:", error)
        })
    }
  }, [token])

  return (
    <ProfileContext.Provider value={{ profile, useProfile }}>
      <>{children}</>
    </ProfileContext.Provider>
  )
}

export const useProfile = () => {
  const context = useContext(ProfileContext)
  if (context === undefined) {
    throw new Error("Profile must be used within a ProfileProvider")
  }
  return context
}
