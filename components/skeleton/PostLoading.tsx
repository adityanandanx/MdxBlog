import { FC } from "react";

const PostLoading: FC = ({}) => {
    return (
        <div className="flex flex-col gap-3 animate-pulse">
            <div className="w-full h-96 object-cover bg-slate-200"></div>
            {/* <Date date={frontmatter.date} /> */}
            <span className="w-10 h-4 bg-slate-200"></span>
            <div className="flex flex-wrap gap-2">
                <span className="w-10 h-4 bg-slate-200"></span>
                <span className="w-10 h-4 bg-slate-200"></span>
                <span className="w-10 h-4 bg-slate-200"></span>
                <span className="w-10 h-4 bg-slate-200"></span>
            </div>
            {/* <Tags tags={frontmatter.tags} /> */}
            {/* <article className="flex flex-col gap-5">{content}</article> */}
            <span className="w-full h-4 bg-slate-200"></span>
            <span className="w-full h-4 bg-slate-200"></span>
            <span className="w-full h-4 bg-slate-200"></span>
            <span className="w-full h-4 bg-slate-200"></span>
        </div>
    );
};

export default PostLoading;
