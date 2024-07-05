import { Slider } from "@/components/ui/slider"
import { cn } from "@/lib/utils"
import { useState } from "react"

type SliderProps = React.ComponentProps<typeof Slider>

export function SliderReact({ className, ...props }: SliderProps) {
  const [value, setValue] = useState(50)
  const [rangeValue, setRangeValue] = useState([20, 80])
  return (
    <>
      <Slider
        defaultValue={[value]}
        max={100}
        step={1}
        onValueChange={(v: number[]) => setValue(v[0])}
        className={cn("w-[60%]", className)}
        {...props}
      />
      <h2>value: {value}</h2>
      <Slider
        defaultValue={rangeValue}
        max={100}
        step={1}
        onValueChange={setRangeValue}
      />
      <h2>range value: {rangeValue.join(", ")}</h2>
    </>
  )
}
