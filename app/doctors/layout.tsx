import Navigation from "@/components/Navigation";
import { createClient } from "@/utils/supabase/server";
import { GeistSans } from "geist/font/sans";
import { cookies } from "next/headers";
import Link from "next/link";
import { redirect } from "next/navigation";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Our Doctors",
  description: "",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = createClient(cookies());
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }
  return (
    <main className={`bg-background text-foreground ${GeistSans.className}`}>
      <Navigation>
        <Link href="/account" className="">
          Back?
        </Link>
      </Navigation>
      <div className="flex min-h-screen flex-col items-center">{children}</div>
    </main>
  );
}
