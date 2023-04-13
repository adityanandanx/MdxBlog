import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

export const H1 = ({
    children,
    className,
    ...props
}: HTMLAttributes<HTMLHeadingElement>) => {
    return (
        <h1
            className={cn(
                "text-4xl sm:text-5xl font-black tracking-tight my-10",
                className
            )}
            {...props}
        >
            {children}
        </h1>
    );
};

export const H2 = ({
    children,
    className,
    ...props
}: HTMLAttributes<HTMLHeadingElement>) => {
    return (
        <h2 className={cn("text-2xl font-bold mt-7", className)} {...props}>
            {children}
        </h2>
    );
};

export const H3 = ({
    children,
    className,
    ...props
}: HTMLAttributes<HTMLHeadingElement>) => {
    return (
        <h3 className={cn("text-xl font-semibold mt-3", className)} {...props}>
            {children}
        </h3>
    );
};

export const H4 = ({
    children,
    className,
    ...props
}: HTMLAttributes<HTMLHeadingElement>) => {
    return (
        <h4 className={cn("text-lg font-medium mt-2", className)} {...props}>
            {children}
        </h4>
    );
};
export const H5 = ({
    children,
    className,
    ...props
}: HTMLAttributes<HTMLHeadingElement>) => {
    return (
        <h5 className={cn("text-base font-normal mt-1", className)} {...props}>
            {children}
        </h5>
    );
};
export const H6 = ({
    children,
    className,
    ...props
}: HTMLAttributes<HTMLHeadingElement>) => {
    return (
        <h6 className={cn("text-sm font-normal", className)} {...props}>
            {children}
        </h6>
    );
};
