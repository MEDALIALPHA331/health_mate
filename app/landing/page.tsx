import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";
import Image from "next/image";
import logo2 from "@/app/assets/logo-cropped.svg";
import Link from "next/link";
import { redirect } from "next/navigation";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import LogoutIcon from "@/components/icons/logout";

export default async function Index() {
  const cookieStore = cookies();

  const canInitSupabaseClient = () => {
    try {
      createClient(cookieStore);
      return true;
    } catch (e) {
      return false;
    }
  };

  const isSupabaseConnected = canInitSupabaseClient();

  return (
    <div className="flex w-full flex-1 flex-col items-center gap-20">
      <Navigation>
        <div className="flex items-center justify-between gap-2 text-sm">
          {isSupabaseConnected && <AccountBtn />}
          {isSupabaseConnected && <AuthButton />}
        </div>
      </Navigation>

      <div className="fle max-w-4xl flex-1 flex-col gap-20 px-3 animate-in">
        <Header />
      </div>
    </div>
  );
}

export function Header() {
  return (
    <div className="flex flex-col items-center gap-10">
      <div className="flex items-center justify-center ">
        <Image alt="" src={logo2} width={200} />
      </div>
      <p className="mx-auto max-w-xl text-center text-3xl !leading-tight lg:text-4xl">
        Your{" "}
        <span className="bg-gradient-to-br from-teal-400 to-pink-300 bg-clip-text text-transparent">
          health mate
        </span>
        , Always for rescue and guidness
      </p>
      <div className="mt-1 w-full bg-gradient-to-r from-transparent via-foreground/10 to-transparent p-[1px]" />
    </div>
  );
}

export async function AuthButton() {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const signOut = async () => {
    "use server";

    const cookieStore = cookies();
    const supabase = createClient(cookieStore);
    await supabase.auth.signOut();
    return redirect("/login");
  };

  return user ? (
    <div className="flex items-center gap-4">
      {/* Hey, {user.email}! */}
      <form action={signOut}>
        <Button className="text-sm hover:bg-red-400">
          {/* Logout */}
          <LogoutIcon />
        </Button>
      </form>
    </div>
  ) : (
    <Link
      href="/login"
      className="bg-btn-background hover:bg-btn-background-hover flex rounded-md px-3 py-2 no-underline"
    >
      Login
    </Link>
  );
}

export function AccountBtn() {
  return (
    <Link
      className="hover:bg-btn-background-hover flex items-center justify-center rounded-md border px-2 py-1"
      href="/account"
      rel="noreferrer"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="h-6 w-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
        />
      </svg>
      {/* Dashboard */}
    </Link>
  );
}
