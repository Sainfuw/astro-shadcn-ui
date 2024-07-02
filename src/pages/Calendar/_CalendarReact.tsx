import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";

export function CalendarReact() {
  const [date, setDate] = useState<Date | undefined>(new Date())
  const [multiple, setMultiple] = useState<Date[] | undefined>([])

  const smallDate = date?.toLocaleDateString("es-ES", {
    weekday: "long",
    day: "numeric",
    month: "long"
  })

  return (
    <div className="flex gap-2 flex-wrap">
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border"
        disabled={(date: Date) => date < new Date()}
      />
      <Calendar
        mode="multiple"
        selected={multiple}
        onSelect={setMultiple}
        className="rounded-md border"
      />
      <div className="flex flex-col gap-4">
        <h2 className="text-2xl font-bold">Dates</h2>
        <div className="flex flex-col">
          <p>{smallDate}</p>
          <p>{multiple?.map((date) => date.toLocaleDateString()).join(", ")}</p>
        </div>
      </div>
    </div>
  )
}