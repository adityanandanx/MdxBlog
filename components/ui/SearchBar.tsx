import { Post } from "@/lib/types/posts";
import Image from "next/image";
import { FC } from "react";

interface SearchBarProps {}

const SearchBar: FC<SearchBarProps> = () => {
    return (
        <form
            action="/blogs"
            className="relative max-w-lg m-auto flex justify-center items-center"
        >
            {/* <div className="absolute left-0 transform translate-x-1/2 border-4 border-slate-900 rounded-full h-1/2 aspect-square"></div> */}
            <input
                className="bg-slate-50 border-b border-slate-200 w-full h-full rounded-full px-5 py-3 outline-none transition-colors ring-transparent ring-2 focus:ring-slate-200"
                name="title"
                id="title"
                type="text"
                placeholder="Search by title"
            />
            <span className="absolute right-0">
                <Image
                    src={"/icons/search-icon.svg"}
                    alt="search icon"
                    className="w-full h-full transform scale-50"
                    width={32}
                    height={32}
                />
            </span>
        </form>
    );
};

export default SearchBar;
