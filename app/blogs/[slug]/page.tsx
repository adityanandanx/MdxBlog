import Button from "@/components/ui/Button";
import Date from "@/components/ui/Date";
import Tags from "@/components/ui/Tags";
import { getPost } from "@/lib/postUtils";
import { Post } from "@/lib/types/posts";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

interface BlogProps {
    params: { slug?: string };
}

export async function generateMetadata({
    params,
}: BlogProps): Promise<Metadata> {
    if (!params.slug) return { title: "" };
    const post = await getPost(params.slug);
    const { frontmatter } = post;
    const { title, date, description, previewImage, tags } = frontmatter;
    return {
        title: title,
        creator: "Aditya Nandan",
        authors: [{ name: "Aditya Nandan" }],
        description: description,
        keywords: tags,
        applicationName: "Aditya Nandan's Blog",
        themeColor: "#0F172A",
        openGraph: {
            title: title,
            description: description,
            siteName: "Aditya Nandan's Blog",
            type: "article",
            authors: "Aditya Nandan",
            tags: tags,
            images: previewImage,
            publishedTime: date.toTimeString(),
        },
    };
}

export default async function blogs({ params }: BlogProps) {
    const { slug } = params;
    if (!slug) return null;
    const { frontmatter, content, readingTimeText } = await getPost(slug);
    return (
        <div className="relative">
            <Link className="absolute left-3 top-3" href={"/"}>
                <Button className="mb-3 text-xl aspect-square">&larr;</Button>
            </Link>
            <div className="flex flex-col gap-3">
                <Image
                    src={frontmatter.previewImage}
                    alt={frontmatter.description}
                    className="h-96 object-cover"
                    width={1024}
                    height={1024}
                />
                <div className="w-full flex flex-col justify-center items-center gap-2 md:flex-row md:justify-between my-3">
                    <Date date={frontmatter.date} />
                    <Tags tags={frontmatter.tags} />
                    <span className="text-sm">{readingTimeText}</span>
                </div>

                <article className="flex flex-col gap-5">{content}</article>
            </div>
        </div>
    );
}
