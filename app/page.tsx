import FeaturedPostPreview from "@/components/ui/FeaturedPostPreview";
import PostPreviewCard from "@/components/ui/PostPreviewCard";
import SearchBar from "@/components/ui/SearchBar";
import { getAllPosts, getFeaturedPost } from "@/lib/postUtils";
export default async function Home() {
    const posts = await getAllPosts();

    const featuredPost = await getFeaturedPost();

    return (
        <main className="">
            <FeaturedPostPreview post={featuredPost} />
            <div className="gap-8 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
                {posts.map((post, i) => {
                    return <PostPreviewCard key={i} post={post} />;
                })}
            </div>
        </main>
    );
}
