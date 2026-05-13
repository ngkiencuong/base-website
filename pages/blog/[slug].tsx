import type { GetServerSidePropsContext } from "next";
import Layout from "../../components/LayOut";
import { Post } from "../../types";

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { slug } = context.params as { slug: string };
  
  const response = await fetch(`http://localhost:3000/api/post/${slug}`);
  
  if (!response.ok) {
    return { notFound: true };  // Next.js tự render trang 404
  }
  
  const post: Post = await response.json();
  return { props: { post } };
}

export default function PostDetail({ post }: { post: Post }) {
  return (
    <Layout>
      <h1>{post.title}</h1>
      <p>{post.excerpt}</p>
      {/* content là HTML string từ WordPress — cần dùng dangerouslySetInnerHTML */}
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </Layout>
  );
}