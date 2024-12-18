"use client"

import React, { createContext, useState, useEffect, useContext } from "react"
import { parseCookies } from "nookies"

interface UserProfile {
  name: string
  email: string
  description: string
  xp: number
  level: number
}

const ProfileContext = createContext<
  | {
      profile: UserProfile | null
      setProfile: React.Dispatch<React.SetStateAction<UserProfile | null>>
    }
  | undefined
>(undefined)

interface ProfileProviderProps {
  children: React.ReactNode
}

export const ProfileProvider: React.FC<ProfileProviderProps> = ({
  children,
}) => {
  const [profile, setProfile] = useState<UserProfile | null>(null)

  useEffect(() => {
    const fetchProfile = async () => {
      const cookies = parseCookies()
      const token = cookies["desafio.tech-token"]

      try {
        const response = await fetch("https://localhost:7092/users", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })

        if (!response.ok) {
          throw new Error("Erro ao buscar informações do usuário")
        }

        const data = await response.json()
        setProfile(data)
      } catch (error) {
        console.error(error)
      }
    }

    fetchProfile()
  }, [])

  return (
    <ProfileContext.Provider value={{ profile, setProfile }}>
      {children}
    </ProfileContext.Provider>
  )
}

export const useProfile = () => {
  const context = useContext(ProfileContext)
  if (context === undefined) {
    throw new Error("useProfile must be used within a ProfileProvider")
  }
  return context
}
