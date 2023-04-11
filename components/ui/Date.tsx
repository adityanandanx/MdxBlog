import { FC } from "react";

interface DateProps {
    date: Date;
}

const Date: FC<DateProps> = ({ date }) => {
    return (
        <span className="text-xs tracking-widest px-1 py-1 font-mono">
            {date.toLocaleDateString()}
        </span>
    );
};

export default Date;
