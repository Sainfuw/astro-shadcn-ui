import { Skeleton } from "@/components/ui/skeleton";
import { useEffect, useState } from "react";

export function SkeletonReact() {
  const data = ([1, 2, 3, 4, 5, 6]);
  const [isLoading, setIsLoading] = useState(true);

  const getData = async () => {
    await new Promise((r) => setTimeout(r, 2000));
    setIsLoading(false)
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div className="grid grid-cols-2 gap-2">
      {
        isLoading
          ?
          data.map((item) => (
            <div className="flex items-center space-x-4" key={item}>
              <Skeleton className="h-12 w-12 rounded-full" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-[100px]" />
                <Skeleton className="h-3 w-[200px]" />
              </div>
            </div>

          ))
          :
          data.map((item) => (
            <div className="flex items-center space-x-4" key={item}>
              <img src="https://github.com/shadcn.png" width={48} height={48} className="h-12 w-12 rounded-full" />
              <div className="space-y-2">
                <h1 className="text-xl -mb-2">Shadcn</h1>
                <h2 className="text-xs">component skeleton testing</h2>
              </div>
            </div>
          ))
      }
    </div>
  )
}
