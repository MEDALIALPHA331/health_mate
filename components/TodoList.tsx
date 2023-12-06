import { db } from "@/db";
import { todos } from "@/db/schema";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { eq, sql } from "drizzle-orm";
import { cookies } from "next/headers";
import { notFound, redirect } from "next/navigation";

export default async function TodosList() {
  const supabase = createServerComponentClient({ cookies });

  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session) {
    // this is a protected route - only users who are signed in can view this route
    redirect("/");
  }

  const all_todos = await db
    .select()
    .from(todos)
    .where(sql`${todos.user_id} = ${session.user.id}`);

  // const user_todos = all_todos.filter(
  //   (todo) => todo.user_id == session.user.id,
  // );

  if (!all_todos) {
    notFound();
  }

  //TODO: style this bettter
  return (
    <ul className="grid place-content-center py-12 text-center">
      {all_todos.map((item) => (
        <li key={item.id}>{item.title}</li>
      ))}
    </ul>
  );
}
