import "server-only";

import path from "path";
import { promises as fs } from "fs";
import { compileMDX } from "next-mdx-remote/rsc";
import { H1, H2, H3, H4, H5, H6 } from "@/components/mdx/headings";
import { PostFrontMatter, Post } from "./types/posts";
import { A, P } from "@/components/mdx/contents";
import { featuredPost } from "@/data/posts/featured";
import readingTime from "reading-time";

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
    
    const stats = readingTime(postFile.toString())

    frontmatter.slug = slug;
    
    return {
        frontmatter: frontmatter,
        content: content,
        readingTimeText: stats.text,
    } as Post;
}

export async function getAllPosts() {
    const postsDirectory = path.join(process.cwd(), "data", "posts");
    
    const postFilePaths = (await fs.readdir(postsDirectory)).filter(postFilePath => {
        return path.extname(postFilePath).toLowerCase() === '.mdx';
    })

    const postPreviews: Post[] = []

    for (const postFilePath of postFilePaths) {
        const postFile = await fs.readFile(
            path.join(postsDirectory, postFilePath)
        );

        const { frontmatter, content } = await compileMDX({
            source: postFile,
            options: { parseFrontmatter: true },
        })

        const stats = readingTime(postFile.toString())
        frontmatter.slug = postFilePath.replace(".mdx", "");
        
        postPreviews.push({
            frontmatter: frontmatter,
            content: content,
            readingTimeText: stats.text,
            // slug: postFilePath.replace(".mdx", ""),
        } as Post)
    }
    return postPreviews;
}

export async function getFeaturedPost() {
    const fpostSlug = featuredPost;
    const post = await getPost(fpostSlug);
    return post;
}

export async function getPostsByTag(tag: string) {
    const posts = await getAllPosts();
    const taggedPosts: Post[] = [];
    for (const post of posts) {
        if (post.frontmatter.tags.map(tag => tag.replaceAll(" ", "").toLowerCase()).includes(tag.replaceAll(" ", "").toLowerCase())) {
            taggedPosts.push(post);
        }
    }
    return taggedPosts;
}
