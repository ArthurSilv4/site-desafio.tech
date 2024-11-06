import { AuthContext } from "@/contexts/AuthContext"
import { useContext } from "react"

export default function Dashboard() {

  const { user } = useContext(AuthContext)

  return (
    <div>
      <h1>Dashboard</h1>

      <p>{user?.name}</p>
    </div>
  )
}