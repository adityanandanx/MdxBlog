import Nav from "@/components/ui/Nav";
import "./globals.css";
import { Inter, Roboto_Mono } from "next/font/google";
import Footer from "@/components/ui/Footer";

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

export const metadata = {
    title: "Blog",
    description: "Real time chat app written in next js 13",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html
            className={`w-full min-h-screen h-full bg-white antialiased ${inter.variable} ${roboto_mono.variable}`}
            lang="en"
        >
            <body className="relative min-h-screen">
                <div className="px-5 sm:px-10 w-full h-full text-base font-Inter">
                    <Nav />
                    <main className="max-w-5xl m-auto">{children}</main>
                </div>
                <Footer />
            </body>
        </html>
    );
}
