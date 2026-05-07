import { useRouter } from "next/router";
import { Post } from "../types";
import PostCard from "./PostCard";

interface PostListProps {
    posts: Post[];
    currentPage: number;
}

export default function PostList({ posts, currentPage }: PostListProps) {
    const router = useRouter();

    if (posts.length === 0) {
        return <p>Không có bài viết nào.</p>;
    }

    return (
        <div>
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

            <div>
                <button
                    disabled={currentPage <= 1}
                    onClick={() => router.push(`/?page=${currentPage - 1}`)}
                >
                    ← Trang trước
                </button>

                <span>Trang {currentPage}</span>

                <button
                    onClick={() => router.push(`/?page=${currentPage + 1}`)}
                >
                    Trang sau →
                </button>
            </div>
        </div>
    );
}