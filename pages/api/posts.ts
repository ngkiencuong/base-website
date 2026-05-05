import type { NextApiRequest, NextApiResponse } from "next";
import { getPosts } from "../../lib/wordpress";
import { Post } from "../../types";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Post[]>
) {
  const posts = await getPosts();
  res.json(posts);
}