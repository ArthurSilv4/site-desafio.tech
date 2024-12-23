"use client"

import { useRouter } from "next/navigation"
import { useEffect } from "react"

export default function NotFound() {
  const router = useRouter()
  useEffect(() => {
    router.push("/")
  }, [router])

  return (
    <div className="m-auto h-screen">
      <div className="flex h-full flex-col items-center justify-center">
        <h1 className="text-6xl">404</h1>
        <p className="text-xl">Not Found</p>
        <p>Redirecting...</p>
      </div>
    </div>
  )
}
