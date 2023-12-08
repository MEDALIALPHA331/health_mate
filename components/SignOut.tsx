"use client";

import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { supabase } from "@supabase/auth-ui-shared";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import Out from "./icons/Out";

const SingnOut = () => {
  const router = useRouter();

  const handleSignOut = async () => {
    await createClientComponentClient().auth.signOut();
    router.refresh();
  };

  return (
    <Button
      className="transition-colors duration-100 ease-linear hover:bg-rose-400 dark:hover:bg-rose-200"
      onClick={handleSignOut}
    >
      <Out />
    </Button>
  );
};

export default SingnOut;
