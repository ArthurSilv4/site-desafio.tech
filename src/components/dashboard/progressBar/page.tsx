"use client"

import { Progress } from "@/components/ui/progress"
import { useProfile } from "@/contexts/profile/ProfileContext"

export function ProgressBar() {
  const { profile } = useProfile()

  return (
    <>
      <div className="flex w-full flex-col justify-center">
        <span className="mb-2 font-bold">Nivel {profile?.level}</span>
        <Progress value={profile?.xp} />
        <span className="ml-auto text-gray-400">{profile?.xp} /100</span>
      </div>
    </>
  )
}
