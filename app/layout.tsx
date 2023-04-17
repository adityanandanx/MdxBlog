import Nav from "@/components/ui/Nav";
import "./globals.css";
import Footer from "@/components/ui/Footer";

const tags = [
    "blog",
    "aditya nandan",
    "developer",
    "web",
    "designer",
    "ui/ux",
    "ui",
    "ux",
];
const desc =
    "Aditya Nandan is a young and aspiring developer with interest in web design and development. In these collection of blogs, he writes about web design, web development, ui/ux, and much more. Follow along with the journey of Aditya Nandan as he shares his knowledge, tips, and tricks in the world of web development.";

export const metadata = {
    title: "Aditya Nandan's Blog",
    creator: "Aditya Nandan",
    authors: [{ name: "Aditya Nandan" }],
    description: desc,
    keywords: tags,
    applicationName: "Aditya Nandan's Blog",
    themeColor: "#0F172A",
    twitter: {
        title: "Aditya Nandan's Blog",
        description: desc,
        images: "/meta-image.jpg",
        creator: "Aditya Nandan",
    },
    openGraph: {
        title: "Aditya Nandan's Blog",
        description: "Blogs by Aditya Nandan",
        url: process.env.VERCEL_URL,
        type: "website",
        siteName: "Aditya Nandan's Blog",
        images: [
            {
                url: "https://raw.githubusercontent.com/iMADi-ARCH/MdxBlog/master/public/meta-image.jpg",
                width: 1200,
                height: 630,
                alt: "Aditya Nandan's Logo",
            },
        ],
        locale: "en-US",
    },
};

export default async function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html
            className={`w-full min-h-screen h-full bg-white transition-colors duration-100 dark:bg-slate-950 dark:text-slate-200 antialiased overflow-x-hidden`}
            lang="en"
        >
            <body className="relative min-h-screen">
                <div className="px-5 sm:px-10 w-full h-full text-base font-Inter overflow-x-hidden">
                    <Nav />
                    <main className="max-w-5xl m-auto flex flex-col gap-5">
                        {children}
                    </main>
                </div>
                <Footer />
            </body>
        </html>
    );
}
