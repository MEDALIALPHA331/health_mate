import Navigation from "@/components/Navigation";
import SingnOut from "@/components/SignOut";
import TodoAdd from "@/components/TodoAdd";
import { Database } from "@/db/database.types";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";

export default function Home() {
  // const supabase = createServerComponentClient<Database>({cookies: });

  return (
    <main className="flex min-h-screen flex-col items-center p-4">
      <Navigation />

      <TodoAdd />
      {/* <SingnOut /> */}
    </main>
  );
}
