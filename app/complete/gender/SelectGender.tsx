"use client";

import { ReactNode, useState } from "react";

export type Gender = "male" | "female";

function SelectGender() {
  const [selected, setSelected] = useState<Gender | null>("male");

  return (
    <div className="flex max-h-80 flex-col gap-2  px-4 sm:flex-row sm:gap-4 md:gap-20 md:px-40">
      {/* <GenderBox selected={selected == "male"}>
      <h1>Male</h1>
    </GenderBox> */}
      <button
        onClick={() => setSelected("male")}
        className="relative aspect-square flex-1 rounded-lg shadow-md shadow-ring"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke={`${selected == "male" ? "#60a5fa" : "currentColor"}`}
          className={`absolute right-1 top-1 h-5 w-5 md:w-8`}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
          />
        </svg>
        <div className="grid min-h-full place-content-center">
          <h1>Male</h1>
        </div>
      </button>

      <button
        onClick={() => setSelected("female")}
        className="relative aspect-square flex-1 rounded-lg shadow-md shadow-ring"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke={`${selected == "female" ? "#60a5fa" : "currentColor"}`}
          className={`absolute right-1 top-1 h-5 w-5 md:w-8`}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
          />
        </svg>
        <div className="grid min-h-full place-content-center">
          <h1>Female</h1>
        </div>
      </button>
    </div>
  );
}

export default SelectGender;

function GenderBox({
  selected = false,
  children, //   setSelected,
}: {
  selected?: boolean;
  children: ReactNode;
  //   setSelected: React.SetStateAction<Gender>;
}) {
  return (
    <button className="relative aspect-square flex-1 rounded-lg shadow-md shadow-ring">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke={`${selected ? "#60a5fa" : "#111111"}`}
        className={`absolute right-1 top-1 h-5 w-5 md:w-8`}
        // ${selected ? "fill-blue-400" : ""}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
        />
      </svg>
      <div className="grid min-h-full place-content-center">{children}</div>
    </button>
  );
}
