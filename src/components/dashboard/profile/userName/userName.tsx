"use client"

import { useProfile } from "@/contexts/profile/ProfileContext"

export function UserName() {
  const { profile } = useProfile()

  if (!profile) {
    return <div>Carregando...</div>
  }

  return (
    <>
      <h1 className="text-4xl font-bold">Olá {profile.name}👋</h1>
    </>
  )
}
