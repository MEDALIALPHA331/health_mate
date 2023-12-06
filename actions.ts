"use server";

import { todos } from "@/db/schema";
import { db } from "@/db";

async function insertTodoToDb(todo: string, id: string) {
  const created = await db.insert(todos).values({ title: todo, user_id: id });
  return created;
}
