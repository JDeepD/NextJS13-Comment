// Component: BlogPage

import Link from "next/link";

export default function BlogPage() {
  return (
    <div className="flex flex-col items-center">
      <div className="flex gap-6">
        <span className="text-4xl">My Blogs</span>
        <Link href={"/"}>
          <span className="text-blue-700 text-4xl underline">Home</span>
        </Link>
      </div>
      <div className="mt-5">
        <Link href={"/blog/check-this-out"}>
          <div className="text-blue-700 text-2xl underline">Blog Post 1</div>
        </Link>
      </div>
    </div>
  );
}
