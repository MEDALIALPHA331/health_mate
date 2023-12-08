"use client";

import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { Database } from "@/db/database.types";
import { useTheme } from "next-themes";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function AuthForm() {
  const supabase = createClientComponentClient<Database>();
  const { theme } = useTheme();

  const router = useRouter();

  return (
    <Auth
      supabaseClient={supabase}
      view="sign_in"
      appearance={{ theme: ThemeSupa }}
      theme={theme}
      showLinks={false}
      providers={["discord"]}
      redirectTo="http://localhost:3000/auth/callback"
    />
  );
}
