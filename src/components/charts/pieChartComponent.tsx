"use client"

import { Label, Legend, Pie, PieChart, ResponsiveContainer } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "../ui/chart"
import React from "react"

const pieChartData = [
  { browser: "chrome", visitors: 275, fill: "hsl(var(--chart-1))" },
  { browser: "safari", visitors: 200, fill: "hsl(var(--chart-2))" },
  { browser: "firefox", visitors: 287, fill: "hsl(var(--chart-3))" },
  { browser: "edge", visitors: 173, fill: "hsl(var(--chart-4))" },
  { browser: "other", visitors: 190, fill: "hsl(var(--chart-5))" },
]

const chartConfig = {
  visitors: { label: "Visitors" },
  chrome: { label: "Chrome", color: "hsl(var(--chart-1))" },
  safari: { label: "Safari", color: "hsl(var(--chart-2))" },
  firefox: { label: "Firefox", color: "hsl(var(--chart-3))" },
  edge: { label: "Edge", color: "hsl(var(--chart-4))" },
  other: { label: "Other", color: "hsl(var(--chart-5))" },
  sales: { label: "Sales", color: "hsl(var(--chart-6))" },
}

export function PieChartComponent() {
  const totalVisitors = React.useMemo(() => {
    return pieChartData.reduce((acc, curr) => acc + curr.visitors, 0)
  }, [])

  return (
    <ChartContainer config={chartConfig} className="h-full m-auto">
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <ChartTooltip content={<ChartTooltipContent hideLabel />} />
          <Pie
            data={pieChartData}
            dataKey="visitors"
            nameKey="browser"
            innerRadius={typeof window !== "undefined" && window.innerWidth >= 640 ? "50%" : "60%"}
            outerRadius={typeof window !== "undefined" && window.innerWidth >= 640 ? "70%" : "80%"}
            strokeWidth={5}
            cx="50%"
            cy="50%"
          >
            <Label
              content={({ viewBox }) => {
                if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                  return (
                    <text
                      x={viewBox.cx}
                      y={viewBox.cy}
                      textAnchor="middle"
                      dominantBaseline="middle"
                    >
                      <tspan
                        x={viewBox.cx}
                        y={viewBox.cy}
                        className="fill-foreground text-3xl font-bold"
                      >
                        {totalVisitors.toLocaleString()}
                      </tspan>
                      <tspan
                        x={viewBox.cx}
                        y={(viewBox.cy || 0) + 24}
                        className="fill-muted-foreground"
                      >
                        Visitors
                      </tspan>
                    </text>
                  )
                }
              }}
            />
          </Pie>
          <Legend layout="horizontal" verticalAlign="bottom" align="center" />
        </PieChart>
      </ResponsiveContainer>
    </ChartContainer>
  )
}