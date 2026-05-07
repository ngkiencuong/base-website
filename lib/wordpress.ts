import { ApiPost, Post } from "../types";

const WP_API = process.env.WORDPRESS_API_URL;

function transformPost(post: ApiPost): Post {
  return {
    id: post.id,
    date: post.date,
    slug: post.slug,
    title: post.title.rendered,
    excerpt: post.excerpt.rendered,
  };
}

export async function getPosts(page = 1): Promise<Post[]> {
  try {
    const response = await fetch(`${WP_API}/posts?per_page=5&page=${page}`);
    if (!response.ok) {
      throw new Error("Failed to fetch posts");
    }
    const posts: ApiPost[] = await response.json();
    return posts.map(transformPost);
  } catch (error) {
    console.error("Error fetching posts:", error);
    return [];
  }
}