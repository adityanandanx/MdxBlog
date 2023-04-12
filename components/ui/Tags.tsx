import { cn as cn } from "@/lib/utils";
import Link from "next/link";
import { FC, HTMLAttributes } from "react";

const Tag: FC<HTMLAttributes<HTMLAnchorElement>> = ({
    children,
    className,
    ...props
}) => {
    return (
        <Link
            href={`/blogs?tag=${children?.toString().replaceAll(" ", "")}`}
            {...props}
            className={cn(
                "px-2 py-1 rounded-full text-xs border capitalize hover:bg-slate-500/10",
                className
            )}
        >
            {children}
        </Link>
    );
};

interface TagsProps extends HTMLAttributes<HTMLDivElement> {
    tags: string[];
}

const Tags: FC<TagsProps> = ({ tags, className, ...props }) => {
    return (
        <div {...props} className={cn("flex flex-wrap gap-2", className)}>
            {tags.map((tag, i) => (
                <Tag key={i}>{tag}</Tag>
            ))}
        </div>
    );
};

export default Tags;
