import { Post } from "@/lib/types/posts";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import Tags from "./Tags";
import Date from "./Date";

interface FeaturedPostPreviewProps {
    post: Post;
}

const FeaturedPostPreview: FC<FeaturedPostPreviewProps> = ({ post }) => {
    const { title, description, slug, previewImage, date, tags } =
        post.frontmatter;
    const { readingTimeText } = post;

    return (
        <div className="w-full h-screen max-h-[720px] flex relative flex-col gap-2 mb-10 text-white overflow-hidden">
            <Link className="w-full h-full" href={`/blogs/${slug}`}>
                <Image
                    className="w-full h-full object-cover"
                    src={previewImage}
                    width={1366}
                    height={1366}
                    alt={title}
                    quality={50}
                    priority
                />
            </Link>
            <div className="flex pointer-events-none flex-col gap-2 absolute bottom-0 left-0 right-0 p-10 bg-gradient-to-t from-gray-900 to-transparent">
                {/* date */}
                <Date className="" date={date} />
                {/* title */}
                <h4 className="text-lg font-bold">{title} </h4>
                {/* reading time */}
                <span className="text-xs">{readingTimeText}</span>
                {/* desc */}
                <p className="text-sm">{description.slice(0, 150)}...</p>
                {/* tags */}
                <Tags className="pointer-events-auto" tags={tags} />
            </div>
        </div>
    );
};

export default FeaturedPostPreview;
