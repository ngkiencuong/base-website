import { ApiPost, Post } from "../types";

const WP_API = "https://techcrunch.com/wp-json/wp/v2";

function transformPost(post: ApiPost): Post {
  return {
    id: post.id,
    date: post.date,
    slug: post.slug,
    title: post.title.rendered,
    excerpt: post.excerpt.rendered,
  };
}

export async function getPosts(): Promise<Post[]> {
  const response = await fetch(`${WP_API}/posts?per_page=5`);
  const posts: ApiPost[] = await response.json();
  return posts.map(transformPost);
}