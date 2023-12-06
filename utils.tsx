import {
  createClientComponentClient,
  createServerComponentClient,
} from "@supabase/auth-helpers-nextjs";
import { Database } from "./db/database.types";

export const clientSupabase = createClientComponentClient<Database>();
