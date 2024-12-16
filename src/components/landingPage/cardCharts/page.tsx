"use client"

import { CustomCardTitle } from "@/components/customs/CustomCardTitle/page"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import {
  Area,
  AreaChart,
  CartesianGrid,
  Label,
  Line,
  LineChart,
  Pie,
  PieChart,
  XAxis,
} from "recharts"

const chartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
]

const browserData = [
  { browser: "chrome", visitors: 275, fill: "white" },
  { browser: "safari", visitors: 200, fill: "#009379" },
  { browser: "firefox", visitors: 287, fill: "#FFDF90" },
  { browser: "edge", visitors: 173, fill: "#3366FF" },
  { browser: "other", visitors: 190, fill: "#FF6250" },
]
const totalVisitors = browserData.reduce((acc, data) => acc + data.visitors, 0)

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "#FFDF90",
  },
  mobile: {
    label: "Mobile",
    color: "#009379",
  },
} satisfies ChartConfig

export function CardCharts() {
  return (
    <Card className="hidden h-auto w-full p-4 shadow-2xl md:block">
      <CardContent className="grid gap-4 md:grid-cols-2 xl:grid-cols-2">
        <Card>
          <CardHeader>
            <CustomCardTitle title="Visitantes" />
          </CardHeader>
          <CardContent>
            <ChartContainer
              config={chartConfig}
              className="mx-auto aspect-square max-h-[250px] sm:max-h-[200px]"
            >
              <PieChart>
                <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent hideLabel />}
                />
                <Pie
                  data={browserData}
                  dataKey="visitors"
                  nameKey="browser"
                  innerRadius="80%"
                  outerRadius="90%"
                  strokeWidth={3}
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
                              className="fill-foreground text-sm font-bold sm:text-3xl"
                            >
                              {totalVisitors.toLocaleString()}
                            </tspan>
                            <tspan
                              x={viewBox.cx}
                              y={(viewBox.cy || 0) + 20}
                              className="fill-muted-foreground"
                            >
                              Visitantes
                            </tspan>
                          </text>
                        )
                      }
                    }}
                  />
                </Pie>
              </PieChart>
            </ChartContainer>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CustomCardTitle title="Frequencia" />
          </CardHeader>
          <CardContent className="mt-8 flex justify-center">
            <ChartContainer
              config={chartConfig}
              className="w-full max-w-[500px]"
            >
              <LineChart
                accessibilityLayer
                data={chartData}
                margin={{
                  left: 12,
                  right: 12,
                }}
                className="w-full"
              >
                <CartesianGrid vertical={false} />
                <XAxis
                  dataKey="month"
                  tickLine={false}
                  axisLine={false}
                  tickMargin={8}
                  tickFormatter={(value) => value.slice(0, 3)}
                />
                <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent hideLabel />}
                />
                <Line
                  dataKey="desktop"
                  type="natural"
                  stroke="var(--color-desktop)"
                  strokeWidth={2}
                  dot={false}
                />
              </LineChart>
            </ChartContainer>
          </CardContent>
        </Card>
        <Card className="col-span-2">
          <CardHeader>
            <CustomCardTitle title="Plano Mensal" />
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig} className="h-full w-full">
              <AreaChart
                accessibilityLayer
                data={chartData}
                margin={{
                  left: 16,
                  right: 16,
                }}
                className="h-full w-full"
              >
                <CartesianGrid vertical={true} />
                <XAxis
                  dataKey="month"
                  tickLine={false}
                  axisLine={false}
                  tickMargin={8}
                  tickFormatter={(value) => value.slice(0, 3)}
                />
                <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent indicator="dot" />}
                />
                <Area
                  dataKey="mobile"
                  type="natural"
                  fill="var(--color-mobile)"
                  fillOpacity={0.4}
                  stroke="var(--color-mobile)"
                  stackId="a"
                />
                <Area
                  dataKey="desktop"
                  type="natural"
                  fill="var(--color-desktop)"
                  fillOpacity={0.4}
                  stroke="var(--color-desktop)"
                  stackId="a"
                />
              </AreaChart>
            </ChartContainer>
          </CardContent>
        </Card>
      </CardContent>
    </Card>
  )
}
