import Nav from "@/components/ui/Nav";
import "./globals.css";
import { Inter, Roboto_Mono } from "next/font/google";
import Footer from "@/components/ui/Footer";
import SearchBar from "@/components/ui/SearchBar";
import TagBar from "@/components/ui/TagBar";
import { getAllTags } from "@/lib/postUtils";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
    display: "swap",
});

const roboto_mono = Roboto_Mono({
    subsets: ["latin"],
    variable: "--font-roboto-mono",
    display: "swap",
});

// export const metadata = {
//     title: "Blog",
//     description: "Blog app made with next js 13",
// };

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

export const metadata = {
    title: "Aditya Nandan's Blog",
    creator: "Aditya Nandan",
    authors: [{ name: "Aditya Nandan" }],
    description: "Blogs by Aditya Nandan",
    keywords: tags,
    applicationName: "Aditya Nandan's Blog",
    themeColor: "#0F172A",
    openGraph: {
        title: "Aditya Nandan's Blog",
        description: "Blogs by Aditya Nandan",
        siteName: "Aditya Nandan's Blog",
        // type: "website",
        tags: tags,
        images: "/meta-image.jpg",
    },
};

export default async function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const tags: Set<string> = await getAllTags();
    return (
        <html
            className={`w-full min-h-screen h-full bg-white antialiased ${inter.variable} ${roboto_mono.variable}`}
            lang="en"
        >
            <body className="relative min-h-screen">
                <div className="px-5 sm:px-10 w-full h-full text-base font-Inter">
                    <Nav />
                    <main className="max-w-5xl m-auto flex flex-col gap-5">
                        <SearchBar />
                        <TagBar tags={tags} />

                        {children}
                    </main>
                </div>
                <Footer />
            </body>
        </html>
    );
}
