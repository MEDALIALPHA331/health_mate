import { createClient } from "@/utils/supabase/server";
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

// export async function GET(req: NextRequest) {
//   const cookieStore = cookies();
//   const supabase = createRouteHandlerClient({ cookies: () => cookieStore });
//   const { searchParams } = new URL(req.url);
//   const code = searchParams.get("code");

//   if (code) {
//     await supabase.auth.exchangeCodeForSession(code);
//   }

//   return NextResponse.redirect(new URL("/account", req.url));
// }

export async function GET(request: Request) {
  // https://supabase.com/docs/guides/auth/auth-helpers/nextjs#managing-sign-in-with-code-exchange
  const requestUrl = new URL(request.url);
  const code = requestUrl.searchParams.get("code");

  if (code) {
    const cookieStore = cookies();
    const supabase = createClient(cookieStore);
    await supabase.auth.exchangeCodeForSession(code);
  }

  // URL to redirect to after sign in process completes
  // return NextResponse.redirect(requestUrl.origin);
  return NextResponse.redirect(new URL("/account", request.url));
}
