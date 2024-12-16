import { CardTitle } from "../../ui/card"

export function CustomCardTitle({ title }: { title: string }) {
  return (
    <CardTitle className="decoration-5 underline decoration-yellow-500 underline-offset-8">
      {title}
    </CardTitle>
  )
}
