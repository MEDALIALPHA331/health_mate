import { pgTable, serial, text, uuid, varchar } from "drizzle-orm/pg-core";

export const todos = pgTable("todos", {
  id: serial("id").primaryKey(),
  title: text("title"),
  content: text("content"),
  user_id: uuid("user_id"),
});
