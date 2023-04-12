import ContactSection from "@/components/sections/ContactSection";
import Button from "@/components/ui/Button";
import FeaturedPostPreview from "@/components/ui/FeaturedPostPreview";
import PostPreviewCard from "@/components/ui/PostPreviewCard";
import SearchBar from "@/components/ui/SearchBar";
import TagBar from "@/components/ui/TagBar";
import { getAllPosts, getAllTags, getFeaturedPost } from "@/lib/postUtils";
import Link from "next/link";
import { MdCallMade } from "react-icons/md";
export default async function Home() {
    let posts = await getAllPosts();
    const featuredPost = await getFeaturedPost();
    const tags: Set<string> = await getAllTags();
    posts = posts.slice(0, 10);

    return (
        <main className="">
            <div className="flex flex-col w-full gap-5 py-5">
                <SearchBar />
                <TagBar tags={tags} />
            </div>
            <div className="flex flex-col justify-center items-center pb-24 ">
                <FeaturedPostPreview post={featuredPost} />
                <div className="gap-8 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
                    {posts.map((post, i) => {
                        return <PostPreviewCard key={i} post={post} />;
                    })}
                </div>
                <Link href={"/blogs"}>
                    <Button>
                        See All Blogs <MdCallMade />
                    </Button>
                </Link>
            </div>
            <ContactSection />
        </main>
    );
}
