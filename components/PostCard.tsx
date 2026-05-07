import { Post } from "../types";

export default function PostCard({ date, slug, title, excerpt }: Post) {
    return (
        <div>
            <div>{date}</div>
            <div>{slug}</div>
            <div>{title}</div>
            <div>{excerpt}</div>
        </div>
    );
}
