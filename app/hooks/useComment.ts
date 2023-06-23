"use client";

import { useState } from "react";
import type { Comment } from "@/app/interfaces/interfaces";
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const useComment = () => {
  const [text, setText] = useState("");
  const { data: comments, mutate } = useSWR<Comment[]>(
    "/api/comment/get",
    fetcher,
    {
      fallbackData: [],
    }
  );
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await fetch("/api/comment/post", {
        method: "POST",
        body: JSON.stringify({ text }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      setText("");
      await mutate();
    } catch (error) {
      console.log(error);
    }
  };
  const onDelete = async (comment: Comment) => {
    try {
      await fetch("/api/comment/delete", {
        method: "POST",
        body: JSON.stringify({ comment }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      await mutate();
    } catch (error) {
      console.log(error);
    }
  };
  return { text, setText, comments, onSubmit, onDelete };
};

export default useComment;
