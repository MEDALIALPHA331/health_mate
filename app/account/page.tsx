import AccountForm from "@/components/AccountForm";
import Navigation from "@/components/Navigation";
import SingnOut from "@/components/SignOut";
import TodoAdd from "@/components/TodoAdd";
import TodosList from "@/components/TodoList";
import { Database } from "@/db/database.types";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function Home() {
  const supabase = createServerComponentClient<Database>({ cookies });

  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session) {
    redirect("/login");
  }

  return (
    <main className="flex min-h-screen flex-col items-center p-4">
      <Navigation />

      <AccountForm session={session} />

      {/* <TodoAdd />
      <TodosList /> */}

      <SingnOut />
    </main>
  );
}
