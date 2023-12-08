import { Session } from "@supabase/supabase-js";

export default function AccountForm({
  session,
}: {
  session: Session | undefined;
}) {
  return (
    <div className="container p-4">
      <div className="text-2xl ">hello {session?.user.email}</div>
    </div>
  );
}
