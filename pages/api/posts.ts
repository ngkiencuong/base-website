import type { NextApiRequest, NextApiResponse } from "next";
import { getPosts } from "../../lib/wordpress";
import { Post } from "../../types";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Post[]>
) {
  try {
    const page = Number(req.query.page) || 1;
    const posts = await getPosts(page);
    res.json(posts);
  } catch (error) {
    console.error("Error fetching posts:", error);
    res.status(500).json([]);
  }
}