import { createClient } from "@supabase/supabase-js";

export default function LoginForm() {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  );

  return <form action=""></form>;
}
