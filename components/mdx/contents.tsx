import { cn } from "@/lib/utils";
import Link, { LinkProps } from "next/link";
import { HTMLAttributes } from "react";

export const P = ({
    children,
    className,
    ...props
}: HTMLAttributes<HTMLParagraphElement>) => {
    return (
        <h6
            className={cn("text-base font-normal text-justify", className)}
            {...props}
        >
            {children}
        </h6>
    );
};
export const A = ({
    children,
    className,
    ...props
}: HTMLAttributes<HTMLAnchorElement>) => {
    return (
        <a
            className={cn(
                "text-base font-normal text-justify underline",
                className
            )}
            {...props}
        >
            {children}
        </a>
    );
};
