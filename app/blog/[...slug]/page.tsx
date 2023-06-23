"use client";
import { usePathname } from "next/navigation";
import { useSession } from "next-auth/react";
import useComment from "@/app/hooks/useComment";
import CommentBox from "@/app/components/CommentBox";
import CommentList from "@/app/components/CommentList";

export default function Page() {
  const pathname = usePathname();
  const { text, setText, comments, onSubmit, onDelete } = useComment();
  const { data: session } = useSession();
  return (
    <div>
      {session ? (
        <>
          <span className="flex justify-center font-extrabold text-green-500">
            Signed in as {session.user?.name}
          </span>
        </>
      ) : (
        <>
          <span className="flex justify-center font-extrabold text-red-500">
            Not signed in
          </span>
        </>
      )}
      <div className="text-2xl flex justify-center">At Page: {pathname}</div>
      <CommentBox onSubmit={onSubmit} text={text} setText={setText}/>
      <CommentList comments={comments} onDelete={onDelete}/>

    </div>
  );
}
