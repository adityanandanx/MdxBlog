import Tags from "./Tags";
import { getAllTags } from "@/lib/postUtils";

interface TagBarProps {
    tags: Set<string>;
    maxNumber?: number;
}

const TagBar = ({ tags, maxNumber = 10 }: TagBarProps) => {
    let _tags: string[] = [];
    tags.forEach((tag) => {
        _tags.push(tag);
    });
    _tags = _tags.slice(0, maxNumber);
    return (
        <div className="w-full">
            <Tags className="justify-center" tags={_tags} />
        </div>
    );
};

export default TagBar;
