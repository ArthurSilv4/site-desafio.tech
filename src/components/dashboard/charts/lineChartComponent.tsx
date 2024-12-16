"use client"

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import { Line, LineChart, ResponsiveContainer, XAxis } from "recharts"

const squareChartData = [
  { month: "Jan", sales: 1 },
  { month: "Feb", sales: 4 },
  { month: "Mar", sales: 5 },
  { month: "Apr", sales: 3 },
  { month: "May", sales: 0 },
  { month: "Jun", sales: 4 },
]

const chartConfig = {
  visitors: { label: "Visitors" },
  chrome: { label: "Chrome", color: "hsl(var(--chart-1))" },
  safari: { label: "Safari", color: "hsl(var(--chart-2))" },
  firefox: { label: "Firefox", color: "hsl(var(--chart-3))" },
  edge: { label: "Edge", color: "hsl(var(--chart-4))" },
  other: { label: "Other", color: "hsl(var(--chart-5))" },
  sales: { label: "DESAFIOS", color: "hsl(var(--chart-6))" },
}

export function LineChartComponent() {
  return (
    <ChartContainer config={chartConfig} className="m-auto h-full w-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={squareChartData}>
          <XAxis dataKey="month" />
          <ChartTooltip content={<ChartTooltipContent />} />
          <Line type="monotone" dataKey="sales" stroke="#FFDF90" />
        </LineChart>
      </ResponsiveContainer>
    </ChartContainer>
  )
}
