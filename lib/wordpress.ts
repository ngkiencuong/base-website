import { ApiPost, Post } from "../types";

const WP_API = process.env.WORDPRESS_API_URL;

function transformPost(post: ApiPost): Post {
  return {
    id: post.id,
    date: post.date,
    slug: post.slug,
    title: post.title.rendered,
    excerpt: post.excerpt.rendered,
    content: post.content.rendered,
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

export async function getPost(slug: string): Promise<Post | null> {  
  try {
    const response = await fetch(`${WP_API}/posts?slug=${slug}`);
    if (!response.ok) {
      throw new Error("Failed to fetch post");
    };
    const posts: ApiPost[] = await response.json();
    return posts.length > 0 ? transformPost(posts[0]) : null;
  } catch (error) {
    console.error("Error fetching post:", error);
    return null;
  }
}
