import AccountForm from "@/components/AccountForm";
import SingnOut from "@/components/SignOut";
import TodoAdd from "@/components/TodoAdd";
import TodosList from "@/components/TodoList";

import { Database } from "@/db/database.types";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import Link from "next/link";

export default async function Home() {
  const supabase = createServerComponentClient<Database>({ cookies });

  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session) {
    return;
  }

  return (
    <main className="flex min-h-screen flex-col items-center p-4">
      <AccountForm session={session!} />

      <Link className="" href="/account/stats">
        Stats
      </Link>

      {/* <TodoAdd />
      <TodosList /> */}
    </main>
  );
}
