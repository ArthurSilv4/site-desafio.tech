"use client"

import { useState } from "react"
import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { cn } from "@/lib/utils"

type FilterType = "recent" | "date" | "type"
type ItemType = "type1" | "type2" | "type3" // Add your own types here

export default function Filter() {
  const [filterType, setFilterType] = useState<FilterType>("recent")
  const [date, setDate] = useState<Date>()
  const [selectedType, setSelectedType] = useState<ItemType>()

  const handleApplyFilter = () => {
    // Implement your filter logic here
    console.log("Applying filter:", { filterType, date, selectedType })
  }

  return (
    <div className="flex items-center space-x-4">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">
            {filterType === "recent" && "Most Recent"}
            {filterType === "date" && "Filter by Date"}
            {filterType === "type" && "Filter by Type"}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem onSelect={() => setFilterType("recent")}>
            Most Recent
          </DropdownMenuItem>
          <DropdownMenuItem onSelect={() => setFilterType("date")}>
            Filter by Date
          </DropdownMenuItem>
          <DropdownMenuItem onSelect={() => setFilterType("type")}>
            Filter by Type
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      {filterType === "date" && (
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              className={cn(
                "w-[240px] justify-start text-left font-normal",
                !date && "text-muted-foreground"
              )}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {date ? format(date, "PPP") : <span>Pick a date</span>}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              initialFocus
            />
          </PopoverContent>
        </Popover>
      )}

      {filterType === "type" && (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">{selectedType || "Select Type"}</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem onSelect={() => setSelectedType("type1")}>
              Type 1
            </DropdownMenuItem>
            <DropdownMenuItem onSelect={() => setSelectedType("type2")}>
              Type 2
            </DropdownMenuItem>
            <DropdownMenuItem onSelect={() => setSelectedType("type3")}>
              Type 3
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )}

      <Button onClick={handleApplyFilter}>Apply Filter</Button>
    </div>
  )
}
