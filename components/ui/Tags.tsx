import { cn as cn } from "@/lib/utils";
import { FC, HTMLAttributes } from "react";

const Tag: FC<HTMLAttributes<HTMLSpanElement>> = ({
    children,
    className,
    ...props
}) => {
    return (
        <span
            {...props}
            className={cn(
                "px-2 py-1 rounded-full text-xs border capitalize",
                className
            )}
        >
            {children}
        </span>
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
