import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";

export default function LoginButton() {
  const { data: session } = useSession();
  if (session) {
    return (
      <div className="flex items-center justify-center gap-2 flex-col">
        <span className="text-2xl">This is the Home Page</span>
        Signed in as {session.user?.name} using {session.user?.email} <br />
        <button className="border px-2 rounded" onClick={() => signOut()}>
          Sign out
        </button>
        <Link href={"/blog"}>
          <span className="text-blue-700 text-xl underline">Visit Blogs</span>
        </Link>
      </div>
    );
  }
  return (
    <div className="flex items-center justify-center gap-2 flex-col">
      <span className="text-2xl">This is the Home Page</span>
      Not signed in <br />
      <button className="border px-2 rounded" onClick={() => signIn()}>
        Sign in
      </button>
      <Link href={"/blog"}>
        <span className="text-blue-700 text-xl underline">Visit Blogs</span>
      </Link>
    </div>
  );
}
