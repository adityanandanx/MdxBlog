import { PostPreview } from "@/lib/types/posts";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { FC, HTMLAttributes } from "react";
import Tags from "./Tags";
import Date from "./Date";

interface FeaturedPostPreviewProps {
    post: PostPreview;
}

const FeaturedPostPreview: FC<FeaturedPostPreviewProps> = ({ post }) => {
    const { title, description, slug, previewImage, date, tags } = post;

    return (
        <Link
            href={`/blogs/${slug}`}
            className="w-full h-screen max-h-[720px] flex relative flex-col gap-2 mb-10 text-white"
        >
            <Image
                className="w-full h-full object-cover"
                src={previewImage}
                width={1366}
                height={1366}
                alt={title}
            />
            <div className="flex flex-col gap-2 absolute bottom-0 left-0 right-0 p-10 bg-gradient-to-t from-gray-900 to-transparent">
                {/* date */}
                <Date date={date} />
                {/* title */}
                <h4 className="text-lg font-bold">{title} </h4>
                {/* desc */}
                <p className="text-sm">{description.slice(0, 150)}...</p>
                {/* tags */}
                <Tags tags={tags} />
            </div>
        </Link>
    );
};

export default FeaturedPostPreview;
