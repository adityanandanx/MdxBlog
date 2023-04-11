import { PostPreview } from "@/lib/types/posts";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { FC, HTMLAttributes } from "react";
import Tags from "./Tags";
import Date from "./Date";

interface BlogCardProps {
    post: PostPreview;
}

const PostPreviewCard: FC<BlogCardProps> = ({ post }) => {
    const { title, description, slug, previewImage, date, tags } = post;

    return (
        <Link
            href={`/blogs/${slug}`}
            className="max-w-sm flex flex-col gap-2 mb-3"
        >
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
            {/* desc */}
            <p className="text-sm">{description.slice(0, 150)}...</p>
            {/* tags */}
            <Tags tags={tags} />
        </Link>
    );
};

export default PostPreviewCard;
