import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ui/toogle-mode";
import React from "react";

export default function Navigation({
  Other,
  children = <Button>click</Button>,
}: {
  children?: React.ReactNode;
  Other?: React.ReactNode;
}) {
  return (
    <nav className="flex w-full items-center justify-between gap-4 p-2 md:p-4">
      <div className="flex-start">{children}</div>
      <div
        className={`${
          Other && "flex items-center justify-center gap-2"
        } ml-auto `}
      >
        {Other ? Other : null}
        <ModeToggle />
      </div>
    </nav>
  );
}
