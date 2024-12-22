"use client"

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { useProfile } from "@/contexts/profile/ProfileContext"

export function ProgressCards() {
  const { profile } = useProfile()

  if (!profile) {
    return <div>Carregando...</div>
  }

  console.log(profile)

  return (
    <>
      <Card className="h-40 w-full bg-[#2A2A2A]">
        <CardHeader>
          <CardTitle className="text-gray-400">Desafios concluidos</CardTitle>
        </CardHeader>
        <CardContent className="text-3xl font-semibold">
          {profile.challengesCompleted} Desafios Concluidos
        </CardContent>
      </Card>
      <Card className="h-40 w-full bg-[#2A2A2A]">
        <CardHeader className="">
          <CardTitle className="text-gray-400">Missoes concluidas</CardTitle>
        </CardHeader>
        <CardContent className="text-3xl font-semibold">
          {profile.missionsCompleted} / 500
        </CardContent>
      </Card>
    </>
  )
}
