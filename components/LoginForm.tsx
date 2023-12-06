import { createClient } from "@supabase/supabase-js";

export default function LoginForm() {
  const supabase = createClient(
    process.env.SUPABASE_Project_URL!,
    process.env.SUPABASE_KEY!,
  );

  return <form action=""></form>;
}
