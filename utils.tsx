import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { Database } from "./db/database.types";

export const supabase = createClientComponentClient<Database>();
