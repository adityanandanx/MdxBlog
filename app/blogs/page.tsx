import PostPreviewCard from "@/components/ui/PostPreviewCard";
import { getAllPosts, getPostsByTag } from "@/lib/postUtils";
import { Post } from "@/lib/types/posts";
import { FC } from "react";

interface BlogsProps {
    searchParams?: { tag?: string };
}

const Blogs = async ({ searchParams }: BlogsProps) => {
    let posts: Post[] = [];

    if (searchParams?.tag) {
        const { tag } = searchParams;
        posts = await getPostsByTag(tag);
    } else {
        posts = await getAllPosts();
    }

    return (
        <div className="gap-8 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
            {posts.map((post, i) => {
                return <PostPreviewCard key={i} post={post} />;
            })}
        </div>
    );
};

export default Blogs;
