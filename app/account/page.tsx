import AccountForm from "@/components/AccountForm";
import SingnOut from "@/components/SignOut";
import TodoAdd from "@/components/TodoAdd";
import TodosList from "@/components/TodoList";

import { Database } from "@/db/database.types";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import Link from "next/link";
import { Fragment } from "react";
import Feelings from "./Feelings";

export default async function Home() {
  const supabase = createServerComponentClient<Database>({ cookies });

  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session) {
    return;
  }

  return (
    <Fragment>
      <header className="text-2xl md:text-4xl">
        Good Afternoon 😊,
        <br />
        <span className="bg-gradient-to-bl from-teal-300 to-indigo-400 bg-clip-text text-transparent">
          {session.user.email}
        </span>
      </header>

      <div>
        <h2 className="text-xl">How are you feeling today?</h2>
        <Feelings />
      </div>

      {/* <AccountForm session={session!} /> */}

      {/* <div>
        <TodoAdd />
        <TodosList />
      </div> */}
    </Fragment>
  );
}

function SideBar() {
  return (
    <Link
      className="transition-all duration-200 ease-in-out hover:translate-x-2 hover:text-indigo-400"
      href="/account/stats"
    >
      Stats
    </Link>
  );
}
