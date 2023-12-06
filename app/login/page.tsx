"use client";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import type { Database } from "@/db/database.types";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();
  const supabase = createClientComponentClient<Database>();

  const handleSignUp = async () => {
    await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${location.origin}/auth/callback`,
      },
    });
    router.refresh();
  };

  const handleSignIn = async () => {
    await supabase.auth.signInWithPassword({
      email,
      password,
    });
    router.refresh();
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.refresh();
  };

  const checkAuthed = async () => {
    const user = await supabase.auth.getUser();
    return user?.data?.user;
  };

  //!this is just a work arround
  useEffect(() => {
    checkAuthed()
      .then((user) => {
        if (user != null) {
          router.push("/");
        }
      })
      .catch(console.error);
  }, []);

  //decompose this into three components, based on user auth
  return (
    <div className="flex w-40 flex-grow-0 flex-col gap-3">
      <input
        type="email"
        name="email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <input
        type="password"
        name="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
      {/* <button onClick={handleSignUp}>Sign up</button> */}
      <button onClick={handleSignIn}>Sign in</button>
    </div>
  );
}
