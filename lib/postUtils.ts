import "server-only";

import path from "path";
import { promises as fs } from "fs";
import { compileMDX } from "next-mdx-remote/rsc";
import { H1, H2, H3, H4, H5, H6 } from "@/components/mdx/headings";
import { PostPreview } from "./types/posts";
import { A, P } from "@/components/mdx/contents";
import { featuredPost } from "@/data/posts/featured";

export async function getPost(slug :string) {
    const postsDirectory = path.join(process.cwd(), "data", "posts");
    const postFilePath = path.join(postsDirectory, `${slug}.mdx`);
    const postFile = await fs.readFile(postFilePath);

    const { content, frontmatter } = await compileMDX({
        source: postFile,
        options: { parseFrontmatter: true },
        components: {
            h1: H1,
            h2: H2,
            h3: H3,
            h4: H4,
            h5: H5,
            h6: H6,
            p: P,
            a: A,
        },
    });
    return {
        frontmatter: frontmatter,
        content: content,
    } as {frontmatter: PostPreview, content: React.ReactNode}
}

export async function getAllPostsPreview() {
    const postsDirectory = path.join(process.cwd(), "data", "posts");
    // console.log(postsDirectory);
    
    const postFilePaths = (await fs.readdir(postsDirectory)).filter(postFilePath => {
        return path.extname(postFilePath).toLowerCase() === '.mdx';
    })

    const postPreviews: PostPreview[] = []

    for (const postFilePath of postFilePaths) {
        console.log(postFilePath);
        
        const postFile = await fs.readFile(
            path.join(postsDirectory, postFilePath)
        );

        const { frontmatter } = await compileMDX({
            source: postFile,
            options: { parseFrontmatter: true },
        })

        postPreviews.push({
            ...frontmatter,
            slug: postFilePath.replace(".mdx", ""),
        } as PostPreview)
    }
    return postPreviews;
}

export async function getFeaturedPost() {
    const fpostSlug = featuredPost;
    const post = await getPost(fpostSlug);
    return post;
}
