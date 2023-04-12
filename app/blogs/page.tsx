import PostPreviewCard from "@/components/ui/PostPreviewCard";
import SearchBar from "@/components/ui/SearchBar";
import TagBar from "@/components/ui/TagBar";
import {
    getAllPosts,
    getPostsByTitle,
    getPostsByTag,
    getAllTags,
} from "@/lib/postUtils";
import { Post } from "@/lib/types/posts";

interface BlogsProps {
    searchParams?: { tag?: string; title?: string };
}

const Blogs = async ({ searchParams }: BlogsProps) => {
    let posts: Post[] = [];

    if (searchParams?.tag) {
        const { tag } = searchParams;
        posts = await getPostsByTag(tag);
    } else if (searchParams?.title) {
        const { title } = searchParams;
        posts = await getPostsByTitle(title);
    } else {
        posts = await getAllPosts();
    }
    const tags: Set<string> = await getAllTags();

    return (
        <>
            <div className="flex flex-col w-full gap-5 py-5">
                <SearchBar />
                <TagBar tags={tags} />
            </div>
            <div className="gap-8 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
                {posts.map((post, i) => {
                    return <PostPreviewCard key={i} post={post} />;
                })}
            </div>
        </>
    );
};

export default Blogs;
