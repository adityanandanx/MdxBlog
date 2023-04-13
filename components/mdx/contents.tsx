import { cn } from "@/lib/utils";
import Link, { LinkProps } from "next/link";
import { AnchorHTMLAttributes, HTMLAttributes, LiHTMLAttributes } from "react";

export const P = ({
    children,
    className,
    ...props
}: HTMLAttributes<HTMLParagraphElement>) => {
    return (
        <p
            className={cn(
                "text-lg font-serif font-normal mb-10 leading-8 mt-2",
                className
            )}
            {...props}
        >
            {children}
        </p>
    );
};

interface LinkExtendedProps
    extends LinkProps,
        HTMLAttributes<HTMLAnchorElement> {}

export const A = ({
    children,
    className,
    href,
    ...props
}: AnchorHTMLAttributes<HTMLAnchorElement>) => {
    return (
        <Link
            href={href || "/"}
            className={cn(
                "text-base font-normal text-justify underline py-4",
                className
            )}
            {...props}
        >
            {children}
        </Link>
    );
};

export const Li = ({ children }: LiHTMLAttributes<HTMLLIElement>) => {
    return <li className="my-2 ml-5 list-item list-disc">{children}</li>;
};
