import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ui/toogle-mode";

export default function Navigation() {
  return (
    <nav className="flex w-full justify-between gap-4 px-2">
      <Button>click me</Button>
      <div className="ml-auto">
        <ModeToggle />
      </div>
    </nav>
  );
}
