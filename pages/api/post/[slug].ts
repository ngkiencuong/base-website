import type { NextApiRequest, NextApiResponse } from "next";
import { getPost } from "../../../lib/wordpress";
import { Post } from "../../../types";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Post | { error: string }>
) {
  const { slug } = req.query;  // lấy slug từ URL
  
  if (typeof slug !== "string") {
    return res.status(400).json({ error: "Invalid slug" });
  }
  
  const post = await getPost(slug);
  
  if (!post) {
    return res.status(404).json({ error: "Post not found" });
  }
  
  res.json(post);
}