import { Badge } from "@/components/ui/badge";

export function BadgeReact() {
  return (
    <div className="flex gap-2 flex-wrap">
      <Badge>Badge</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="outline">Secondary</Badge>
      <Badge variant="destructive">Secondary</Badge>
    </div>
  )
}