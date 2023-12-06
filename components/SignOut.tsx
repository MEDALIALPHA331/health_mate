"use client";

import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { supabase } from "@/utils";

const SingnOut = () => {
  const router = useRouter();
  
  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.refresh();
  };

  return <Button onClick={handleSignOut}>Sign out</Button>;
};

export default SingnOut;
