# MDX Blog App with Next JS 13

This is a simple personal blog written with Next js 13 using the new `app/` directory and uses asynchronous server components.

_Note: the blogs currently in the `/data/posts/` directory are written by ChatGPT and are meant to be a placeholder until I get the time to actually write some._

## Objectives

-   Learn The basics of Next js 13.
-   Create a clean and minimalistic design with tailwind css.
-   Learn more about Markdown

## Technologies used

-   [Next js 13](https://beta.nextjs.org/) - as React framework.
-   [Typescript](https://www.typescriptlang.org/) - to write typesafe javascript.
-   [Tailwind css](https://tailwindcss.com/) - for modular css.
-   [React js](https://react.dev) - the component library.
-   [Next Remote MDX](https://github.com/hashicorp/next-mdx-remote) - to compile MDX.

## How it works

Any file with an `.mdx` extension placed in the `./data/posts/` directory will show up as a blog post in the app which makes it really easy to add blogs without using any database.

The frontmatter is also parsed which has the interface of:

```ts
interface PostFrontMatter = {
    title: string,
    description: string,
    previewImage: string,
    slug: string,
    date: Date,
    tags: string[],
}
```

An example would be -

```mdx
---
title: "My new blog post"
description: "My very long description for my very long blog post"
previewImage: /path/to/image/url.jpg
date: 2023-04-10
author: John Doe
tags: [sample tag, test tag, long post]
---

# The Blog content

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur feugiat tortor vitae libero finibus venenatis...
```

The `previewImage` url can be from [Unsplash](https://unsplash.com/) or can be the path of an image stored in `./public` directory.

Any non-existing tags are added automatically.

## To run locally:

Clone the repository -

```
git clone https://github.com/iMADi-ARCH/MdxBlog
```

cd into the directory -

```
cd MdxBlog
```

install dependencies -

```
npm install
```

run the development server -

```
npm run dev
```

visit https://localhost:3000/

## References

-   Design inspiration from https://tx.shadcn.com/
-   Official Docs of https://beta.nextjs.org/

