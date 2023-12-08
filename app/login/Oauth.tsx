"use client";

import { createClient } from "@/utils/supabase/client";
import { redirect } from "next/navigation";

export default function SignInWithOAuth() {
  const supabase = createClient();

  async function SignInWithDiscord() {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "discord",
    });

    if (error) {
      return redirect("/login?message=Could not authenticate user");
    }

    return redirect("/");
  }

  return (
    <div className="pt-2">
      <h2>Or sign-in with:?</h2>
      <button onClick={SignInWithDiscord}>Discord</button>
    </div>
  );
}
