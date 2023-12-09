import Image from "next/image";

import logo from "@/app/assets/logo-cropped.svg";
import Navigation from "@/components/Navigation";
import Link from "next/link";
import React, { ReactNode, useState } from "react";
import { Button } from "@/components/ui/button";
import SelectGender from "./SelectGender";
import { ArrowUpFromLine } from "lucide-react";

function Gender() {
  return (
    <main>
      <Navigation>
        <Link href="/complete">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75"
            />
          </svg>
        </Link>
      </Navigation>

      <div className="flex">
        <Image
          className="mx-auto aspect-auto md:w-32"
          alt="logo"
          src={logo}
          width={76}
        ></Image>
      </div>

      <SelectGender />

      <div className="flex items-center justify-center py-6">
        <FormNextLink href="/complete/">Next</FormNextLink>
      </div>
    </main>
  );
}

export default Gender;

function FormNextLink({
  href,
  children = "Next",
}: {
  href: string;
  children?: string | ReactNode;
}) {
  return (
    <Link
      href={href}
      className="flex w-40 place-content-center rounded-2xl bg-gradient-to-br from-indigo-200 to-indigo-400 px-4 py-2 text-lg text-slate-900"
    >
      {children}
    </Link>
  );
}
