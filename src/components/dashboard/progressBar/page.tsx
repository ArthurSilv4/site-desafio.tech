import { Progress } from "@/components/ui/progress"

const users = { id: 1, name: "Arthur", level: 25, xp: 83 }

export function ProgressBar() {
  return (
    <div className="flex w-full flex-col justify-center">
      <span className="mb-2 font-bold">Nivel {users.level}</span>
      <Progress value={users.xp} />
      <span className="ml-auto text-gray-400">{users.xp} /100</span>
    </div>
  )
}
