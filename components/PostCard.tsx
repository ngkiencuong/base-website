import Link from "next/link";
import { Post } from "../types";

export default function PostCard({ date, slug, title, excerpt }: Post) {
  return (
    <div>
      <div>{date}</div>
      <Link href={`/blog/${slug}`}>{title}</Link>  
      <div>{excerpt}</div>
    </div>
  );
}