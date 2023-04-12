import { Post } from "@/lib/types/posts";
import Image from "next/image";
import { FC } from "react";
import { MdSearch } from "react-icons/md";

interface SearchBarProps {}

const SearchBar: FC<SearchBarProps> = () => {
    return (
        <form
            action="/blogs"
            className="relative max-w-lg m-auto flex justify-center items-center"
        >
            <input
                className="bg-slate-50 border-b border-slate-200 w-full h-full rounded-full px-5 py-3 outline-none transition-colors ring-transparent ring-2 focus:ring-slate-200"
                name="title"
                id="title"
                type="text"
                placeholder="Search by title"
            />
            <MdSearch
                size={32}
                className="absolute right-3 pointer-events-none"
            />
        </form>
    );
};

export default SearchBar;
