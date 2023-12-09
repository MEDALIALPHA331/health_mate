import Navigation from "@/components/Navigation";
import { createClient } from "@/utils/supabase/server";
import { GeistSans } from "geist/font/sans";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import Link from "next/link";
import SingnOut from "@/components/SignOut";
import NotificationIcon from "@/components/icons/Notification";
import { Button } from "@/components/ui/button";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Account",
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
    <body className={`bg-background text-foreground ${GeistSans.className} `}>
      <Navigation Other={<Notification />}>
        <SingnOut />
      </Navigation>
      <main className="flex min-h-screen flex-col p-4">{children}</main>
    </body>
  );
}

function Notification() {
  return (
    <button className="rounded p-2 hover:bg-indigo-200 dark:hover:bg-indigo-500">
      <NotificationIcon />
    </button>
  );
}
