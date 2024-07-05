import { Progress } from "@/components/ui/progress"
import { useEffect, useState } from "react"

export function ProgressReact() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const animation = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 0
        return prev + 1
      })
    }, 100)
    return () => clearInterval(animation)
  }, [])

  return (
    <Progress value={progress} className="w-[60%]" />
  )
}