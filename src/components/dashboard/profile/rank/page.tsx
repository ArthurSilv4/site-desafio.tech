"use client"

import { useProfile } from "@/contexts/profile/ProfileContext"
import { Medal } from "lucide-react"

export function Rank() {
  const { profile } = useProfile()

  if (!profile) {
    return <div>Carregando...</div>
  }

  return (
    <>
      <div className="mt-2 flex gap-2">
        {profile.rank <= 10 && (
          <Medal className="hover:text-bronze-100 h-6 w-6 text-orange-500" />
        )}
        {profile.rank <= 20 && (
          <Medal className="hover:text-silver-100 h-6 w-6 text-zinc-500" />
        )}
        {profile.rank <= 50 && (
          <Medal className="hover:text-gold-100 h-6 w-6 text-yellow-500" />
        )}
      </div>
    </>
  )
}
