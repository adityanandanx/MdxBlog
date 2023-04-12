import { Post } from "@/lib/types/posts";
import { FC } from "react";

interface SearchBarProps {}

const SearchBar: FC<SearchBarProps> = () => {
    // async function searchTerm(e: React.ChangeEvent<HTMLInputElement>) {
    //     const term = e.target.value;
    //     posts = await getPostByTitle(term);
    // }
    return (
        <form
            action="/blogs"
            className="max-w-lg m-auto flex justify-center items-center pl-5 bg-slate-100 rounded-full hover:bg-slate-50"
        >
            <div className="relative h-4 aspect-square bg-slate-900 rounded-full">
                <div className="absolute inset-1 bg-slate-50 rounded-full"></div>
            </div>
            <input
                className="w-full h-full bg-transparent rounded-full px-3 py-3 outline-none"
                name="title"
                type="text"
                placeholder="Search by title"
            />
        </form>
    );
};

export default SearchBar;
