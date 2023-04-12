import { Post } from "@/lib/types/posts";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { FC, HTMLAttributes } from "react";
import Tags from "./Tags";
import Date from "./Date";

interface BlogCardProps {
    post: Post;
}

const PostPreviewCard: FC<BlogCardProps> = ({ post }) => {
    const { title, description, slug, previewImage, date, tags } =
        post.frontmatter;
    const { readingTimeText } = post;

    return (
        <div className="max-w-sm flex flex-col gap-2 mb-3">
            <Link href={`/blogs/${slug}`}>
                <Image
                    className="h-56 object-cover mb-5"
                    src={previewImage}
                    width={448}
                    height={448}
                    alt={title}
                />
                {/* date */}
                <Date date={date} />
                {/* title */}
                <h4 className="text-lg font-bold">{title} </h4>
                {/* reading time */}
                <span className="text-xs">{readingTimeText}</span>
                {/* desc */}
                <p className="text-sm">{description.slice(0, 150)}...</p>
                {/* tags */}
            </Link>
            <Tags tags={tags} />
        </div>
    );
};

export default PostPreviewCard;
