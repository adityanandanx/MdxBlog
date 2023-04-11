import { ButtonHTMLAttributes, FC } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const ButtonVariants = cva(
    "px-5 py-2 text-sm font-medium rounded-md focus:ring",
    {
        variants: {
            variant: {
                primary: "bg-slate-900 text-slate-50",
                secondary: "text-slate-900",
            },
        },
        defaultVariants: {
            variant: "primary",
        },
    }
);
export interface ButtonProps
    extends ButtonHTMLAttributes<HTMLButtonElement>,
        VariantProps<typeof ButtonVariants> {
    isLoading?: boolean;
}

const Button: FC<ButtonProps> = ({
    className,
    children,
    isLoading = false,
    variant,
    ...props
}) => {
    return (
        <button
            className={cn(ButtonVariants({ variant, className }))}
            disabled={isLoading}
            {...props}
        >
            {isLoading ? "Loading..." : children}
            {/* {children} */}
        </button>
    );
};

export default Button;
