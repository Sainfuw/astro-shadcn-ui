import { Badge } from "@/components/ui/badge";

export function BadgeReact() {
  return (
    <div className="flex gap-2 flex-wrap">
      <Badge>primary</Badge>
      <Badge variant="secondary">secondary</Badge>
      <Badge variant="outline">outline</Badge>
      <Badge variant="destructive">destructive</Badge>
      <Badge variant="info">info</Badge>
      <Badge capitalize variant="success">success</Badge>
    </div>
  )
}