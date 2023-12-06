import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { createServerActionClient } from "@supabase/auth-helpers-nextjs";
import { Database } from "@/db/database.types";
import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";
import { Textarea } from "./ui/textarea";

const addTodo = async (formData: FormData) => {
  "use server";

  const title = formData.get("title");
  const content = formData.get("content");

  const cookieStore = cookies();
  const supabase = createServerActionClient<Database>({
    cookies: () => cookieStore,
  });

  const user_id = (await supabase.auth.getUser()).data.user?.id;

  // TODO: make this error handling better
  try {
    const added = await supabase
      .from("todos")
      .insert({ title, user_id, content });
    console.log(added);
  } catch (e) {
    console.error(e);
  }

  revalidatePath("/");
};

export default function TodoAdd() {
  return (
    <form
      className="flex items-center justify-center gap-4 p-12"
      action={addTodo}
    >
      <div className="flex flex-col gap-4">
        <Input type="text" name="title" placeholder="todo" />
        <Textarea name="content" />
      </div>

      <Button type="submit" className="bg-cyan-400 hover:bg-cyan-100">
        Add
      </Button>
    </form>
  );
}
