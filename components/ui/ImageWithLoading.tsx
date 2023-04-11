"use client";
import { cn } from "@/lib/utils";
import Image, { ImageProps } from "next/image";
import { FC, useState } from "react";

const DefaultImageFallback: FC = () => {
    return (
        <div className="absolute inset-0 z-10 bg-slate-100 animate-pulse"></div>
    );
};

interface ImageWithLoadingProps extends ImageProps {
    fallback?: React.ReactNode;
}

const ImageWithLoading: FC<ImageWithLoadingProps> = ({
    fallback = <DefaultImageFallback />,
    width,
    height,
    className,
    ...props
}) => {
    const [loaded, setLoaded] = useState(false);
    return (
        <>
            <div className="relative">
                <Image
                    onLoadingComplete={() => setLoaded(true)}
                    width={width}
                    height={height}
                    className={cn("relative", className)}
                    {...props}
                />
                {loaded ? null : fallback}
                {/* </Image> */}
            </div>
        </>
    );
};

export default ImageWithLoading;
