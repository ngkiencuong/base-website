import { Post } from "../types";

export default function PostCard({ id, date, slug, title, excerpt }: Post) {
    return (
        <div>
            <div>{id}</div>
            <div>{date}</div>
            <div>{slug}</div>
            <div>{title}</div>
            <div>{excerpt}</div>
        </div>
    );
}
