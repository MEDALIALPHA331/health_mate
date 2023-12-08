import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ui/toogle-mode";
import React from "react";

export default function Navigation({
  children = <Button>click</Button>,
}: {
  children?: React.ReactNode;
}) {
  return (
    <nav className="flex w-full items-center justify-between gap-4 p-2 md:p-4">
      <div className="flex-start">{children}</div>
      <div className="ml-auto">
        <ModeToggle />
      </div>
    </nav>
  );
}
