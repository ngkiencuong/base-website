import Layout from "../components/LayOut";
import PostCard from "../components/PostCard";
import { Post } from "../types";

export async function getServerSideProps() {
  const response = await fetch("http://localhost:3000/api/posts");
  const posts = await response.json();
  return {
    props: { posts }
  };
}

export default function Home({ posts }: { posts: Post[] }) {
  return (
    <Layout>
      {posts.map(post => (
        <PostCard
          key={post.id}
          id={post.id}
          date={post.date}
          slug={post.slug}
          title={post.title}
          excerpt={post.excerpt}
        />
      ))}
    </Layout>
  );
}