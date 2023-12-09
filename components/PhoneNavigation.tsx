import Link from "next/link";
import React from "react";

type NavSeclected = "home" | "notifications" | "sos" | "doctors";

//? Incomplete

let shared = "flex place-content-center rounded p-2";

function PhoneNavigation({ selected }: { selected: NavSeclected }) {
  return (
    <nav className="fixed bottom-0 grid w-full grid-flow-col md:hidden">
      <Link className={`${shared}`} href="/">
        <HomeIcon active={selected == "home"} />
      </Link>

      <Link className={shared} href="/">
        <PhoneIcon active={selected == "notifications"} />
      </Link>


      <Link
        className={`${selected == "sos" && "bg-indigo-400"} ${shared}`}
        href="/"
      >
        SoS
      </Link>

      
      <Link
        className={`${selected == "doctors" && "bg-indigo-400"} ${shared}`}
        href="/"
      >
        Doc
      </Link>
    </nav>
  );
}

export default PhoneNavigation;

function HomeIcon({
  active = false,
  size = 10,
}: {
  active?: boolean;
  size?: number;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke={`${active ? "#818cf8" : "currentColor"}`}
      className={`${active && " fill-indigo-400"} w-${size} h-${size}`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
      />
    </svg>
  );
}

function PhoneIcon({
  active = false,
  size = 10,
}: {
  active?: boolean;
  size?: number;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke={`${active ? "#818cf8" : "currentColor"}`}
      className={`${active && " fill-indigo-400"} w-${size} h-${size}`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
      />
    </svg>
  );
}
