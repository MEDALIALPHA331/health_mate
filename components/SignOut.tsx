"use client";

import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { clientSupabase } from "@/utils";

const SingnOut = () => {
  const router = useRouter();

  const handleSignOut = async () => {
    await clientSupabase.auth.signOut();
    router.refresh();
  };

  return (
    <Button
      className="bg-rose-400 transition-colors duration-100 ease-linear hover:bg-rose-200"
      onClick={handleSignOut}
    >
      Sign out
    </Button>
  );
};

export default SingnOut;
