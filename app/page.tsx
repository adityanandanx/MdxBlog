import { H1 } from "@/components/mdx/headings";
import FeaturedPostPreview from "@/components/ui/FeaturedPostPreview";
import PostPreviewCard from "@/components/ui/PostPreviewCard";
import { getAllPostsPreview, getFeaturedPost } from "@/lib/postUtils";

export default async function Home() {
    const posts = await getAllPostsPreview();
    const featuredPost = await getFeaturedPost();

    return (
        <main className="">
            <FeaturedPostPreview post={featuredPost.frontmatter} />
            <div className="gap-8 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
                {posts.map((post, i) => {
                    return <PostPreviewCard key={i} post={post} />;
                })}
            </div>
        </main>
    );
}
// import { FC } from 'react'

// interface pageProps {

// }

// const page: FC<pageProps> = ({}) => {
//   return <div>page</div>
// }

// export default page
