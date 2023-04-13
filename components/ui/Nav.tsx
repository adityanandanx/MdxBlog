import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Button from "./Button";
import { MdCallMade } from "react-icons/md";
// import Button from "./Button";
import Logo from "../../public/logo-black.svg";

export default function Nav() {
    // const [hasScrolled, setHasScrolled] = useState<Boolean>(false);
    // const [isHidden, setIsHidden] = useState<Boolean>(false);
    // const scrollThreshold = 100;

    // useEffect(() => {
    //     let lastScrollTop = 0;

    //     if (window.scrollY > scrollThreshold) {
    //         setHasScrolled(true);
    //         console.log("OO");
    //     }

    //     const handleScroll = (e: Event) => {
    //         const st = window.pageYOffset || document.documentElement.scrollTop;
    //         if (st > lastScrollTop) {
    //             setIsHidden(true);
    //         } else {
    //             setIsHidden(false);
    //         }

    //         lastScrollTop = st <= 0 ? 0 : st;

    //         if (window.scrollY > scrollThreshold) {
    //             setHasScrolled(true);
    //         } else {
    //             setHasScrolled(false);
    //         }
    //     };

    //     document.addEventListener("scroll", handleScroll);

    //     return () => {
    //         document.removeEventListener("scroll", handleScroll);
    //     };
    // }, []);
    // ${hasScrolled ? "border-b border-gray-900 shadow-sm" : null}
    // ${isHidden ? "-translate-y-full" : "translate-y-0"}

    return (
        <nav
            className={`
                    w-full max-w-5xl whitespace-nowrap m-auto transform py-4 mb-5 border-b bg-white dark:bg-slate-950 border-b-slate-200 dark:border-b-slate-700 sticky z-50 left-0 top-0 transition-all duration-100 
                `}
        >
            <ul className={`w-full flex justify-between items-center`}>
                <div className="sm:flex-1 flex justify-center sm:justify-start items-center gap-8 text-xs sm:text-sm">
                    <li>
                        <Link
                            href={"/"}
                            className="flex font-Jockey font-bold text-2xl items-center gap-4"
                        >
                            {/* <Image
                                className="fill-current"
                                src={Logo}
                                alt="Mad Logo"
                                width={(81 * 2) / 3}
                                height={(48 * 2) / 3}
                            /> */}
                            <svg
                                width={(81 * 2) / 3}
                                height={(48 * 2) / 3}
                                viewBox="0 0 107 65"
                                fill="currentColor"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M32.1077 0L0.166992 31.9412L10.8531 42.6272L42.7938 10.6865L32.1077 0Z"
                                    fill="currentColor"
                                />
                                <path
                                    d="M74.7747 0.0789795L42.8335 32.0197L53.52 42.7058L74.8137 21.4121L96.1862 42.7847L106.833 32.1376L74.7747 0.0789795Z"
                                    fill="currentColor"
                                />
                                <path
                                    d="M85.5393 53.4315L74.853 42.7452L64.2061 53.3922L74.8923 64.0785L85.5393 53.4315Z"
                                    fill="currentColor"
                                />
                            </svg>

                            {/* <h1 className="hidden md:block">Aditya Nandan</h1> */}
                        </Link>
                    </li>
                    {/* <div className="hidden sm:flex gap-5 items-center justify-between text-sm font-medium">
                        <li className="">
                            <Link href={""} className="">
                                My Projects
                            </Link>
                        </li>
                        <li className="">
                            <Link href={"/"} className="">
                                Skills
                            </Link>
                        </li>
                        <li className="">
                            <Link href={"/"} className="">
                                About Me
                            </Link>
                        </li>
                        <li className="">
                            <Link href={"/contact"} className="">
                                Contact Me
                            </Link>
                        </li>
                    </div> */}
                </div>
                <li className="flex justify-end gap-3">
                    <Link
                        target="_blank"
                        href={"https://github.com/iMADi-ARCH/MdxBlog"}
                    >
                        <Button variant={"secondary"}>Github</Button>
                    </Link>
                    <Link href={"/contact"}>
                        <Button>
                            Let&lsquo;s talk! <MdCallMade />
                        </Button>
                    </Link>
                </li>
            </ul>
        </nav>
    );
}
