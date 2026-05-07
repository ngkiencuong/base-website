import Layout from "../components/LayOut";
import PostList from "../components/PostList";
import { Post } from "../types";

export async function getServerSideProps({ query }) {
  const page = Number(query.page) || 1;
  const response = await fetch(`http://localhost:3000/api/posts?page=${page}`);
  const posts = await response.json();
  return {
    props: { posts, page }
  };
}

export default function Home({ posts, page }: { posts: Post[], page: number }) {
  return (
    <Layout>
      <PostList posts={posts} currentPage={page} />
    </Layout>
  );
}
