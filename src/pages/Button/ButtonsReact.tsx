import { Button } from "@/components/ui/button";
import { ChevronRightIcon, EnvelopeOpenIcon, ReloadIcon } from "@radix-ui/react-icons";

export function ButtonsReact() {
  return (
    <div className="flex gap-2 flex-wrap">
      <Button onClick={() => alert("click")}>Click Me!</Button>
      <Button variant="secondary">Click Me!</Button>
      <Button variant="destructive">Click Me!</Button>
      <Button variant="outline">Click Me!</Button>
      <Button variant="ghost">Click Me!</Button>
      <Button variant="link">Click Me!</Button>
      <Button variant="outline" size="icon">
        <ChevronRightIcon className="h-4 w-4" />
      </Button>
      <Button>
        <EnvelopeOpenIcon className="mr-2 h-4 w-4" /> Login with Email
      </Button>
      <Button disabled>
        <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
        Please wait
      </Button>
    </div>
  )
}