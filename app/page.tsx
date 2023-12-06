import Navigation from "@/components/Navigation";
import { supabase } from "@/utils";
import Image from "next/image";

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4">
      <Navigation />

      <div className="pt-20">hey wanna login?</div>

      {}
    </main>
  );
}
