import { cn } from "@/lib/utils";
import { FC, HTMLAttributes } from "react";

interface DateProps extends HTMLAttributes<HTMLSpanElement> {
    date: Date;
}

const Date: FC<DateProps> = ({ className, date, ...props }) => {
    return (
        <span {...props} className={cn("text-xs tracking-widest px-1 py-1 font-mono", className)}>
            {date.toLocaleDateString()}
        </span>
    );
};

export default Date;
